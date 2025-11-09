# backend/main.py
import os
from fastapi import FastAPI, Request
from dotenv import load_dotenv, find_dotenv
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger
import atexit

# Load environment variables (local + repo root)
load_dotenv()
root_env = find_dotenv(filename=".env", usecwd=True)
if root_env:
    load_dotenv(root_env, override=False)

# Import DB setup
from database import Base, engine

# Import news service for scheduled tasks
from services.news_service import news_service

# Ensure all routers are imported correctly
from routers import colleges, search, edu_updates, reviews, private_colleges , latest_news, auth, mock_tests, articles
from routers import chatbot

app = FastAPI(title="Student Hub API")

# Initialize DB tables
Base.metadata.create_all(bind=engine)

# Setup scheduler for news refresh (disabled on Vercel via env flag)
scheduler = BackgroundScheduler()

def refresh_news_job():
    """Scheduled job to refresh news cache every hour"""
    try:
        print("[INFO] Running scheduled news refresh...")
        news_service.fetch_and_cache_news()
    except Exception as e:
        print(f"[ERROR] Scheduled news refresh failed: {str(e)}")

if os.getenv("DISABLE_SCHEDULER") != "1":
    # Schedule news refresh every 18 hours
    scheduler.add_job(
        func=refresh_news_job,
        trigger=IntervalTrigger(hours=18),
        id='news_refresh_job',
        name='Refresh education news cache (18h)',
        replace_existing=True
    )

if os.getenv("DISABLE_SCHEDULER") != "1":
    # Start scheduler
    scheduler.start()

if os.getenv("DISABLE_SCHEDULER") != "1":
    # Ensure scheduler shuts down when app stops
    atexit.register(lambda: scheduler.shutdown())

# Enable CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(colleges.router) 
app.include_router(private_colleges.router)  
app.include_router(search.router)     
app.include_router(edu_updates.router)  
app.include_router(reviews.router)
app.include_router(latest_news.router)
app.include_router(auth.router)
app.include_router(mock_tests.router) 
app.include_router(chatbot.router)
app.include_router(articles.router)

# Serve static files (React build)
app.mount("/static", StaticFiles(directory="static", html=True), name="static")

# Health check route
@app.get("/health")
def health():
    return {"status": "ok"}

# Startup event to populate initial news cache
@app.on_event("startup")
async def startup_event():
    """Initialize news cache on startup"""
    try:
        print("[INFO] Starting StudentHub backend...")
        if news_service.supabase_enabled and os.getenv("DISABLE_SCHEDULER") != "1":
            print("[INFO] Populating initial news cache...")
            news_service.fetch_and_cache_news()
        else:
            print("[WARNING] Supabase not configured, news caching disabled")
        print("[SUCCESS] Startup completed successfully")
    except Exception as e:
        print(f"[WARNING] Startup warning: {str(e)}")
        # Don't fail startup if news cache fails

# Serve index.html for all non-API routes (for React Router)
@app.get("/{full_path:path}")
async def serve_react_app(request: Request, full_path: str):
    if full_path.startswith("api"):
        return {"detail": "Not Found"}
    index_path = os.path.join("static", "index.html")
    return FileResponse(index_path)

# Cron endpoint for Vercel scheduler
@app.post("/api/cron/refresh-news")
def cron_refresh_news():
    try:
        refresh_news_job()
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
