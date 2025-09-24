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
        
        # If Supabase is not available, fetch directly from Perplexity as fallback
        print("⚠️ Supabase not available, fetching news directly from Perplexity")
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
