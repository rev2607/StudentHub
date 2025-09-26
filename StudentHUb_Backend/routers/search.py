import requests
import os
import re
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any

# Load environment variables
load_dotenv()
PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
if not PERPLEXITY_API_KEY:
    raise ValueError("API Key not found! Ensure you have set PERPLEXITY_API_KEY in your .env file.")

# FastAPI Router
router = APIRouter(prefix="/api/search", tags=["search"])

instructions = """
You are an AI assistant focused on education-related queries. Follow these rules:
1. Provide structured responses with **relevant images, related queries, and user search trends**.
2. For **college-related queries**, include:
   - **Overview**: Name, location, and branches.
   - **Rankings & Reviews**: NIRF Rank, NAAC Grade, Overall Rating, Highest Package.
   - **Courses Offered**: Course Name | Eligibility | Duration | Fees | Streams.
   - **Placements**: Highest & Avg Package | Students Placed | Offers Released | Top Recruiters.
   - **Facilities**: Campus highlights (hostels, libraries, sports facilities).
   - **Contact Details**: Address, Website, Phone Number.

3. **Include Exactly 5 Images**:
   - Fetch **direct image URLs** related to the query from trusted sources (Wikipedia, official college websites, news sites).
   - Provide exactly **5 image URLs**.

4. **Suggest Exactly 5 Related Queries**:
   - Recommend exactly **5 similar searches** based on user intent.
   - Show **trending searches** in education.

5. **Ensure Accuracy**:
   - Cross-check details with sources like CollegeDunia, CollegeDekho, Shiksha, and official college websites.

6. **Avoid vague or misleading answers**.
7. If the query is unclear, **ask for clarification**.
"""


# Define Request Model
class SearchRequest(BaseModel):
    query: str

# Extract Image URLs using Regex
def extract_image_urls(text: str) -> List[str]:
    url_pattern = r"https?://\S+\.(?:jpg|jpeg|png|webp|gif)"
    return re.findall(url_pattern, text)

# Extract Related Queries
def extract_related_queries(text: str) -> List[str]:
    """Extracts exactly 5 related queries from the response."""
    related_section = re.search(r"(?<=Related Queries\n)(.*?)(?=\n[A-Z]|$)", text, re.DOTALL)
    
    if related_section:
        queries = related_section.group(1).strip().split("\n")
        # Remove any unwanted characters or markdown formatting
        queries = [q.strip("- *") for q in queries if q.strip()]
        return queries[:5]  # Ensure exactly 5 related queries

    return []


# Clean Response
def clean_response(text: str) -> str:
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)  # Remove bold
    text = re.sub(r"##+", "", text)  # Remove headings
    return text.strip()

# Query Perplexity AI
def query_perplexity(user_input: str) -> Dict[str, Any]:
    url = "https://api.perplexity.ai/chat/completions"
    headers = {
        "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "model": "sonar",
        "messages": [
            {"role": "system", "content": instructions},
            {"role": "user", "content": user_input}
        ],
        "max_tokens": 1500
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()

        if "choices" in data and data["choices"]:
            raw_text = data["choices"][0]["message"]["content"]
            images = extract_image_urls(raw_text)
            related_queries = extract_related_queries(raw_text)
            response_text = clean_response(raw_text)

            return {
                "response": response_text,
                "related_queries": related_queries,
                "images": images
            }

        return {"response": "No valid response from Perplexity AI.", "related_queries": [], "images": []}
    except requests.exceptions.RequestException as e:
        return {"response": f"Request Error: {e}", "related_queries": [], "images": []}

# FastAPI Search Endpoint
@router.post("/")
async def search(request: SearchRequest):
    if not request.query:
        raise HTTPException(status_code=400, detail="Query cannot be empty.")

    result = query_perplexity(request.query)
    return {
        "status": "success",
        "message": "Response fetched successfully",
        "data": {
            "response": result["response"],
            "related_queries": result["related_queries"],
            "images": result["images"]
        }
    }
