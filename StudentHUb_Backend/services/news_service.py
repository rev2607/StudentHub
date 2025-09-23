# News service for fetching and caching education news
import requests
import json
import re
import urllib.parse
from datetime import datetime, timezone
from typing import List, Dict
import os
from dotenv import load_dotenv
from supabase_client import get_supabase_client

load_dotenv()

PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
if not PERPLEXITY_API_KEY:
    raise ValueError("API Key not found! Ensure PERPLEXITY_API_KEY is set in your .env file.")

class NewsService:
    def __init__(self):
        self.supabase = get_supabase_client()
        self.supabase_enabled = self.supabase is not None
        if not self.supabase_enabled:
            print("⚠️ NewsService: Supabase not available, will use fallback mode")
        self.perplexity_instructions = """
        Search the internet and return the 5 most recent and real educational news articles published in India. Focus on:
        - JEE, NEET, EAMCET exam updates
        - CBSE, ICSE board exam news
        - University admissions and results
        - Education policy updates
        - Scholarship announcements
        
        For each article, provide:
        1. Title
        2. Accurate published date (ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ)
        3. Short summary or description (snippet)
        4. Citations array with real source URLs
        5. Image URL if available (from the article or preview)
        
        Only respond with a valid JSON array like this:
        [
          {
            "title": "JEE Main 2025 Exam Dates Released",
            "date": "2025-09-23T10:00:00Z",
            "snippet": "NTA has announced the exam dates for JEE Main 2025...",
            "citations": ["https://nta.ac.in/jee-main-2025", "https://timesofindia.indiatimes.com/education/jee-main-2025"],
            "image_url": "https://example.com/news-image.jpg"
          }
        ]
        
        Only include **real data**, not placeholders. Ensure URLs are valid links from reliable sources like ndtv.com, indianexpress.com, timesofindia.com, etc.
        """

    def _process_news_item(self, item: Dict) -> Dict:
        """Process and clean a single news item with proper link and image handling"""
        # Extract title
        title = item.get("title", "").strip()
        
        # Extract snippet/description
        snippet = item.get("snippet", item.get("description", "")).strip()
        
        # Extract date
        date_str = item.get("date", "")
        try:
            if isinstance(date_str, str):
                # Try to parse the date
                parsed_date = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            else:
                parsed_date = datetime.now(timezone.utc)
        except:
            parsed_date = datetime.now(timezone.utc)
        
        # Process citations to get the best link
        citations = item.get("citations", [])
        link = self._get_best_link(title, citations, item.get("link", ""))
        
        # Process image URL
        image_url = self._get_best_image(item.get("image_url", ""))
        
        return {
            "title": title,
            "snippet": snippet,
            "date": parsed_date.isoformat(),
            "link": link,
            "image_url": image_url
        }
    
    def _get_best_link(self, title: str, citations: List[str], fallback_link: str) -> str:
        """Get the best available link from citations or fallback"""
        # If we have citations, use the first valid one
        if citations and isinstance(citations, list):
            for citation in citations:
                if isinstance(citation, str) and citation.startswith(('http://', 'https://')):
                    # Validate it's a reasonable URL
                    if any(domain in citation.lower() for domain in ['ndtv.com', 'indianexpress.com', 'timesofindia.com', 'hindustantimes.com', 'thehindu.com', 'nta.ac.in', 'cbse.gov.in']):
                        return citation
                    # Accept any valid URL as fallback
                    return citation
        
        # If we have a fallback link, use it
        if fallback_link and fallback_link.startswith(('http://', 'https://')):
            return fallback_link
        
        # Create a Perplexity search URL as final fallback
        encoded_title = urllib.parse.quote_plus(title)
        return f"https://www.perplexity.ai/search?q={encoded_title}"
    
    def _get_best_image(self, image_url: str) -> str:
        """Get the best available image URL or default"""
        if image_url and isinstance(image_url, str) and image_url.startswith(('http://', 'https://')):
            return image_url
        
        # Default placeholder image - use a reliable CDN
        return "https://placehold.co/400x300/4ade80/ffffff?text=News"

    def extract_json_from_response(self, content: str) -> List[dict]:
        """Extract JSON from AI response with fallback patterns"""
        try:
            return json.loads(content)
        except json.JSONDecodeError:
            # Try to find JSON in code blocks
            json_match = re.search(r"```json\s*(\[[\s\S]*?\])\s*```", content, re.DOTALL)
            if json_match:
                cleaned_json = json_match.group(1).strip()
                if cleaned_json.endswith(","):
                    cleaned_json = cleaned_json.rstrip(",") + "]"
                return json.loads(cleaned_json)
        raise ValueError("No valid JSON found in AI response.")

    def fetch_news_from_perplexity(self) -> List[Dict]:
        """Fetch latest education news from Perplexity API"""
        url = "https://api.perplexity.ai/chat/completions"
        headers = {
            "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": "sonar",
            "messages": [
                {"role": "system", "content": self.perplexity_instructions},
                {"role": "user", "content": "Give me the latest educational news from India focusing on exams, admissions, and results."}
            ],
            "max_tokens": 3000
        }

        try:
            print("🔹 Fetching news from Perplexity API...")
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()

            data = response.json()
            if "choices" not in data or not data["choices"]:
                raise ValueError("Invalid AI response structure: 'choices' missing.")

            content = "".join(
                choice.get("message", {}).get("content", "") +
                choice.get("delta", {}).get("content", "")
                for choice in data["choices"]
            )

            if not content:
                raise ValueError("Empty content in AI response.")

            return self.extract_json_from_response(content)

        except requests.RequestException as e:
            print(f"❌ Perplexity API request failed: {str(e)}")
            return []
        except Exception as e:
            print(f"❌ Error processing Perplexity response: {str(e)}")
            return []

    def parse_and_store_news(self, news_items: List[Dict]) -> bool:
        """Parse news items and store them in Supabase"""
        if not self.supabase_enabled:
            print("⚠️ Supabase not available, skipping news storage")
            return True  # Return True to not block the process
        
        try:
            # Clear existing news articles (we want fresh data each time)
            # Delete all rows by selecting all and deleting
            existing_articles = self.supabase.table('news_articles').select('id').execute()
            if existing_articles.data:
                for article in existing_articles.data:
                    self.supabase.table('news_articles').delete().eq('id', article['id']).execute()
            
            # Prepare data for insertion using the new processing logic
            articles_to_insert = []
            for item in news_items:
                processed_item = self._process_news_item(item)
                # Remove image_url for now since the column doesn't exist yet
                article_data = {
                    'title': processed_item.get('title', ''),
                    'date': processed_item.get('date', ''),
                    'snippet': processed_item.get('snippet', ''),
                    'link': processed_item.get('link', '')
                }
                articles_to_insert.append(article_data)

            # Insert new articles
            if articles_to_insert:
                result = self.supabase.table('news_articles').insert(articles_to_insert).execute()
                print(f"✅ Successfully cached {len(articles_to_insert)} news articles in Supabase")
                return True
            else:
                print("⚠️ No articles to insert")
                return False

        except Exception as e:
            print(f"❌ Error storing news in Supabase: {str(e)}")
            return False

    def fetch_and_cache_news(self) -> bool:
        """Main method to fetch news from Perplexity and cache in Supabase"""
        print("🔄 Starting news fetch and cache process...")
        
        # Fetch news from Perplexity
        news_items = self.fetch_news_from_perplexity()
        
        if not news_items:
            print("❌ No news items fetched from Perplexity")
            return False
        
        # Store in Supabase
        success = self.parse_and_store_news(news_items)
        
        if success:
            print("✅ News fetch and cache process completed successfully")
        else:
            print("❌ News fetch and cache process failed")
        
        return success

    def get_cached_news(self, limit: int = 10) -> List[Dict]:
        """Get cached news from Supabase"""
        if not self.supabase_enabled:
            print("⚠️ Supabase not available, returning empty news cache")
            return []
        
        try:
            result = self.supabase.table('news_articles')\
                .select('*')\
                .order('date', desc=True)\
                .limit(limit)\
                .execute()
            
            return result.data if result.data else []
            
        except Exception as e:
            print(f"❌ Error fetching cached news: {str(e)}")
            return []

# Global instance
news_service = NewsService()
