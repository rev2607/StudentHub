# backend/main.py
import os
from fastapi import FastAPI, Request
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

# Load environment variables
load_dotenv()

# Import DB setup
from database import Base, engine

# Ensure all routers are imported correctly
from routers import colleges, search, edu_updates, reviews, private_colleges , latest_news, auth

app = FastAPI(title="Student Hub API")
# Initialize DB tables
Base.metadata.create_all(bind=engine)

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

# Serve static files (React build)
app.mount("/static", StaticFiles(directory="static", html=True), name="static")

# Health check route
@app.get("/health")
def health():
    return {"status": "ok"}

# Serve index.html for all non-API routes (for React Router)
@app.get("/{full_path:path}")
async def serve_react_app(request: Request, full_path: str):
    if full_path.startswith("api"):
        return {"detail": "Not Found"}
    index_path = os.path.join("static", "index.html")
    return FileResponse(index_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
