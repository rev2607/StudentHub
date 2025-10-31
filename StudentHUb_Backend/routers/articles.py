from fastapi import APIRouter, HTTPException, Query, Depends
from pydantic import BaseModel
from typing import List, Optional
from supabase_client import get_supabase_client
from datetime import datetime
import re

router = APIRouter(prefix="/api/articles", tags=["articles"])

def get_supabase():
    """Get Supabase client with error handling"""
    supabase = get_supabase_client()
    if not supabase:
        raise HTTPException(status_code=503, detail="Database service unavailable")
    return supabase

def generate_slug(title: str) -> str:
    """Generate a URL-friendly slug from title"""
    # Convert to lowercase and replace spaces with hyphens
    slug = title.lower().strip()
    # Remove special characters except hyphens and spaces
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    # Replace multiple spaces/hyphens with single hyphen
    slug = re.sub(r'[\s-]+', '-', slug)
    # Remove leading/trailing hyphens
    slug = slug.strip('-')
    return slug

def extract_excerpt(content: str, max_length: int = 200) -> str:
    """Extract excerpt from content (first paragraph or first max_length characters)"""
    # Try to get first paragraph
    paragraphs = [p.strip() for p in content.split('\n\n') if p.strip()]
    if paragraphs:
        excerpt = paragraphs[0]
    else:
        excerpt = content
    
    # Limit length
    if len(excerpt) > max_length:
        excerpt = excerpt[:max_length].rsplit(' ', 1)[0] + '...'
    
    return excerpt

# Request/Response Models
class ArticleCreate(BaseModel):
    title: str
    content: str
    author: Optional[str] = "StudentHub Team"
    featured_image_url: Optional[str] = None
    category: Optional[str] = "General"
    tags: Optional[List[str]] = []
    is_published: Optional[bool] = True

class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    author: Optional[str] = None
    featured_image_url: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[List[str]] = None
    is_published: Optional[bool] = None

class ArticleResponse(BaseModel):
    id: str
    title: str
    slug: str
    content: str
    excerpt: Optional[str]
    author: str
    featured_image_url: Optional[str]
    category: str
    tags: List[str]
    view_count: int
    is_published: bool
    published_at: str
    created_at: str
    updated_at: str

# API Routes
@router.get("/", response_model=List[ArticleResponse])
async def get_articles(
    category: Optional[str] = Query(None, description="Filter by category"),
    limit: int = Query(50, ge=1, le=100, description="Number of articles to return"),
    offset: int = Query(0, ge=0, description="Number of articles to skip"),
    published_only: bool = Query(True, description="Return only published articles")
):
    """Get list of articles"""
    supabase = get_supabase()
    
    try:
        query = supabase.table("articles").select("*")
        
        if published_only:
            query = query.eq("is_published", True)
        
        if category:
            query = query.eq("category", category)
        
        query = query.order("published_at", desc=True).limit(limit).offset(offset)
        
        result = query.execute()
        
        if not result.data:
            return []
        
        return result.data
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching articles: {str(e)}")

@router.get("/{slug}", response_model=ArticleResponse)
async def get_article_by_slug(slug: str):
    """Get a single article by slug"""
    supabase = get_supabase()
    
    try:
        result = supabase.table("articles").select("*").eq("slug", slug).eq("is_published", True).single().execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Article not found")
        
        # Increment view count
        supabase.table("articles").update({"view_count": (result.data.get("view_count", 0) or 0) + 1}).eq("id", result.data["id"]).execute()
        
        # Update result with incremented count
        result.data["view_count"] = (result.data.get("view_count", 0) or 0) + 1
        
        return result.data
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching article: {str(e)}")

@router.post("/", response_model=ArticleResponse)
async def create_article(article: ArticleCreate):
    """Create a new article"""
    supabase = get_supabase()
    
    try:
        # Generate slug from title
        slug = generate_slug(article.title)
        
        # Check if slug already exists
        existing = supabase.table("articles").select("id").eq("slug", slug).execute()
        if existing.data:
            # Append number if slug exists
            counter = 1
            original_slug = slug
            while existing.data:
                slug = f"{original_slug}-{counter}"
                existing = supabase.table("articles").select("id").eq("slug", slug).execute()
                counter += 1
        
        # Extract excerpt from content
        excerpt = extract_excerpt(article.content)
        
        # Prepare article data
        article_data = {
            "title": article.title,
            "slug": slug,
            "content": article.content,
            "excerpt": excerpt,
            "author": article.author,
            "featured_image_url": article.featured_image_url,
            "category": article.category,
            "tags": article.tags or [],
            "is_published": article.is_published,
            "published_at": datetime.utcnow().isoformat() if article.is_published else None
        }
        
        result = supabase.table("articles").insert(article_data).execute()
        
        if not result.data:
            raise HTTPException(status_code=500, detail="Failed to create article")
        
        return result.data[0]
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating article: {str(e)}")

@router.put("/{article_id}", response_model=ArticleResponse)
async def update_article(article_id: str, article: ArticleUpdate):
    """Update an existing article"""
    supabase = get_supabase()
    
    try:
        # Build update data
        update_data = {}
        
        if article.title is not None:
            update_data["title"] = article.title
            # Regenerate slug if title changed
            update_data["slug"] = generate_slug(article.title)
        
        if article.content is not None:
            update_data["content"] = article.content
            # Regenerate excerpt if content changed
            if article.excerpt is None:
                update_data["excerpt"] = extract_excerpt(article.content)
        
        if article.excerpt is not None:
            update_data["excerpt"] = article.excerpt
        
        if article.author is not None:
            update_data["author"] = article.author
        
        if article.featured_image_url is not None:
            update_data["featured_image_url"] = article.featured_image_url
        
        if article.category is not None:
            update_data["category"] = article.category
        
        if article.tags is not None:
            update_data["tags"] = article.tags
        
        if article.is_published is not None:
            update_data["is_published"] = article.is_published
            if article.is_published:
                # Check if article is being published for the first time
                existing = supabase.table("articles").select("published_at").eq("id", article_id).single().execute()
                if existing.data and not existing.data.get("published_at"):
                    update_data["published_at"] = datetime.utcnow().isoformat()
        
        if not update_data:
            raise HTTPException(status_code=400, detail="No fields to update")
        
        result = supabase.table("articles").update(update_data).eq("id", article_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Article not found")
        
        return result.data[0]
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error updating article: {str(e)}")

@router.delete("/{article_id}")
async def delete_article(article_id: str):
    """Delete an article"""
    supabase = get_supabase()
    
    try:
        result = supabase.table("articles").delete().eq("id", article_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Article not found")
        
        return {"message": "Article deleted successfully"}
    
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting article: {str(e)}")

