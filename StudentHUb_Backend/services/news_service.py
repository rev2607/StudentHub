# News service for fetching and caching education news
import requests
import json
import re
import urllib.parse
from datetime import datetime, timezone
from typing import List, Dict
import os
from dotenv import load_dotenv, find_dotenv
from supabase_client import get_supabase_client
from helpers.url_validator import get_best_valid_link, get_best_image_url, validate_url

"""Load environment variables from both backend dir and repo root if present."""
load_dotenv()  # local .env
root_env = find_dotenv(filename=".env", usecwd=True)
if root_env:
    load_dotenv(root_env, override=False)

PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")

class NewsService:
    def __init__(self):
        self.supabase = get_supabase_client()
        self.supabase_enabled = self.supabase is not None
        self.perplexity_enabled = bool(PERPLEXITY_API_KEY)
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
        1. Title (clear and descriptive)
        2. Accurate published date (ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ)
        3. DETAILED content/snippet (500-1000 characters) - Include comprehensive information about the news, key details, dates, deadlines, important points, and impact on students
        4. Citations array with real source URLs from authoritative sources
        5. Image URL if available (from the article or preview)
        
        IMPORTANT: The snippet/content must be comprehensive and informative, providing substantial value to readers. Include:
        - Specific dates and deadlines
        - Key details and requirements
        - Impact on students and parents
        - Important announcements or changes
        - Contact information or official sources when relevant
        
        Only respond with a valid JSON array like this:
        [
          {
            "title": "JEE Main 2025 Exam Dates Released - Registration Opens Next Week",
            "date": "2025-09-23T10:00:00Z",
            "snippet": "The National Testing Agency (NTA) has officially announced the exam dates for JEE Main 2025. The examination will be conducted in two phases: Phase 1 from January 24-31, 2025, and Phase 2 from April 1-15, 2025. Online registration will commence on September 30, 2024, and close on November 30, 2024. Students can register at jeemain.nta.ac.in. The exam will be held in 13 languages across 500+ cities in India and abroad. Key changes this year include extended exam duration (3 hours instead of 2.5 hours) and increased number of questions. The application fee remains ₹650 for general candidates and ₹325 for reserved categories. Results will be declared within 10 days of each phase completion.",
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
        
        # Process citations to get the best valid link
        citations = item.get("citations", [])
        link = get_best_valid_link(citations, title)
        
        # Extract image from the article page
        image_url = get_best_image_url(link)
        
        return {
            "title": title,
            "snippet": snippet,
            "date": parsed_date.isoformat(),
            "link": link,
            "image_url": image_url
        }
    

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
        if not self.perplexity_enabled:
            print("ℹ️ PERPLEXITY_API_KEY not set; skipping Perplexity fetch")
            return []
        url = "https://api.perplexity.ai/chat/completions"
        headers = {
            "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
            "Content-Type": "application/json",
        }
        payload = {
            "model": "sonar",
            "messages": [
                {"role": "system", "content": self.perplexity_instructions},
                {"role": "user", "content": "Give me the latest educational news from India focusing on exams, admissions, and results. For each news item, provide comprehensive details including specific dates, deadlines, requirements, and impact on students. Ensure each snippet is detailed and informative (500-1000 characters)."}
            ],
            "max_tokens": 5000
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
        """Parse news items and store them in Supabase with upsert logic"""
        if not self.supabase_enabled:
            print("⚠️ Supabase not available, skipping news storage")
            return True  # Return True to not block the process

        try:
            # Prepare data for insertion using the new processing logic
            articles_to_insert = []
            for item in news_items:
                processed_item = self._process_news_item(item)
                article_data = {
                    'title': processed_item.get('title', ''),
                    'date': processed_item.get('date', ''),
                    'snippet': processed_item.get('snippet', ''),
                    'link': processed_item.get('link', ''),
                    'image_url': processed_item.get('image_url', 'https://placehold.co/400x300/4ade80/ffffff?text=News')
                }
                articles_to_insert.append(article_data)

            if not articles_to_insert:
                print("⚠️ No articles to insert")
                return False

            # Upsert articles by link to prevent duplicates
            upserted_count = 0
            for article_data in articles_to_insert:
                try:
                    # Try to find existing article by link
                    existing = self.supabase.table('news_articles').select('id').eq('link', article_data['link']).execute()
                    
                    if existing.data:
                        # Update existing article
                        self.supabase.table('news_articles').update(article_data).eq('link', article_data['link']).execute()
                        print(f"🔄 Updated existing article: {article_data['title'][:50]}...")
                    else:
                        # Insert new article
                        self.supabase.table('news_articles').insert(article_data).execute()
                        print(f"➕ Inserted new article: {article_data['title'][:50]}...")
                    
                    upserted_count += 1
                except Exception as e:
                    print(f"❌ Error upserting article '{article_data['title'][:50]}...': {str(e)}")
                    continue

            print(f"✅ Successfully processed {upserted_count}/{len(articles_to_insert)} news articles in Supabase")
            return upserted_count > 0

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
                .select('id, title, date, snippet, link, image_url, created_at')\
                .order('date', desc=True)\
                .limit(limit)\
                .execute()

            return result.data if result.data else []

        except Exception as e:
            print(f"❌ Error fetching cached news: {str(e)}")
            return []

# Global instance
news_service = NewsService()
