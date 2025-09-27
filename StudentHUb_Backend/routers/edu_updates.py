from fastapi import APIRouter, HTTPException, BackgroundTasks
from typing import List
from services.news_service import news_service

router = APIRouter(prefix="/api", tags=["education", "news"])

# Background task to refresh news cache
def refresh_news_cache():
    """Background task to fetch and cache news from Perplexity API"""
    try:
        news_service.fetch_and_cache_news()
    except Exception as e:
        print(f"❌ Background news refresh failed: {str(e)}")

# ✅ API routes - both /api/education/ and /api/news/ point to the same function
@router.get("/education/")
@router.get("/news/")
def get_education_updates(background_tasks: BackgroundTasks):
    """
    Get cached education news from Supabase.
    If cache is empty, trigger background refresh.
    If Supabase is not available, fetch directly from Perplexity.
    """
    try:
        # Get cached news from Supabase
        cached_news = news_service.get_cached_news(limit=10)
        
        # If we have cached news, return it
        if cached_news:
            # Transform data to match frontend expectations
            formatted_news = []
            for article in cached_news:
                formatted_article = {
                    "title": article.get("title", ""),
                    "date": article.get("date", ""),
                    "description": article.get("snippet", ""),
                    "image_url": article.get("image_url", "https://placehold.co/400x300/4ade80/ffffff?text=News"),
                    "read_more_url": article.get("link", "")
                }
                formatted_news.append(formatted_article)
            
            return formatted_news
        
        # If no cached news and Supabase is available, trigger background refresh
        if news_service.supabase_enabled:
            background_tasks.add_task(refresh_news_cache)
            return []
        
        # If Supabase is not available, try Perplexity as fallback
        print("⚠️ Supabase not available, trying Perplexity as fallback")
        news_items = news_service.fetch_news_from_perplexity()
        
        # Transform data to match frontend expectations using processed data
        formatted_news = []
        for item in news_items:
            processed_item = news_service._process_news_item(item)
            formatted_article = {
                "title": processed_item.get("title", ""),
                "date": processed_item.get("date", ""),
                "description": processed_item.get("snippet", ""),
                "image_url": processed_item.get("image_url", "https://placehold.co/400x300/4ade80/ffffff?text=News"),
                "read_more_url": processed_item.get("link", "")
            }
            formatted_news.append(formatted_article)
        
        # If no news from Perplexity, return sample data
        if not formatted_news:
            print("ℹ️ No news from external sources, returning sample data")
            formatted_news = [
                {
                    "title": "JEE Main 2025 Registration Opens",
                    "date": "2025-01-15T10:00:00Z",
                    "description": "National Testing Agency has opened registration for JEE Main 2025. Students can apply online until March 15, 2025.",
                    "image_url": "https://placehold.co/400x300/4ade80/ffffff?text=JEE+Main+2025",
                    "read_more_url": "https://jeemain.nta.ac.in/"
                },
                {
                    "title": "NEET 2025 Exam Schedule Released",
                    "date": "2025-01-10T09:00:00Z", 
                    "description": "NEET 2025 will be conducted on May 5, 2025. Registration starts from February 1, 2025.",
                    "image_url": "https://placehold.co/400x300/4ade80/ffffff?text=NEET+2025",
                    "read_more_url": "https://neet.nta.ac.in/"
                },
                {
                    "title": "CBSE Board Exams 2025 Date Sheet",
                    "date": "2025-01-08T11:00:00Z",
                    "description": "CBSE has released the date sheet for Class 10 and 12 board exams. Exams to commence from February 15, 2025.",
                    "image_url": "https://placehold.co/400x300/4ade80/ffffff?text=CBSE+2025",
                    "read_more_url": "https://cbse.gov.in/"
                },
                {
                    "title": "IIT Admission Process 2025 Updates",
                    "date": "2025-01-05T14:00:00Z",
                    "description": "IITs announce new admission criteria and seat matrix for 2025. JEE Advanced scheduled for June 2025.",
                    "image_url": "https://placehold.co/400x300/4ade80/ffffff?text=IIT+2025",
                    "read_more_url": "https://iit.ac.in/"
                },
                {
                    "title": "Scholarship Programs 2025 Applications Open",
                    "date": "2025-01-03T16:00:00Z",
                    "description": "Multiple scholarship programs for engineering and medical students are now accepting applications.",
                    "image_url": "https://placehold.co/400x300/4ade80/ffffff?text=Scholarships",
                    "read_more_url": "https://scholarships.gov.in/"
                }
            ]
        
        return formatted_news
        
    except Exception as e:
        print(f"❌ Error fetching news: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/news/refresh")
def refresh_news_manual(background_tasks: BackgroundTasks):
    """
    Manually trigger news refresh from Perplexity API.
    Useful for testing or manual updates.
    """
    try:
        background_tasks.add_task(refresh_news_cache)
        return {"message": "News refresh triggered successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
