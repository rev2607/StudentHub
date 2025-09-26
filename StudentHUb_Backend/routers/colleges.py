import requests 
import os
import json
import re
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException, Response
from pydantic import BaseModel
from typing import List

# Load environment variables
load_dotenv()
PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
if not PERPLEXITY_API_KEY:
    raise ValueError("API Key not found! Ensure PERPLEXITY_API_KEY is set in your .env file.")

# Initialize FastAPI app and Router
app = FastAPI(title="Student Hub API")
router = APIRouter(prefix="/api/colleges", tags=["colleges"])

# AI Instructions for Perplexity API
INSTRUCTIONS = """Provide a list of the top 10 engineering colleges in India with:
1. College Name
2. Location (City, State)
3. NIRF Ranking
4. NAAC Grade
5. Highest Package (INR)
6. Average Package (INR)
7. Fee Structure
8. Official Logo URL

The response MUST be in a JSON array format. Example:
[
    {
        "name": "IIT Bombay",
        "location": "Mumbai, Maharashtra",
        "nirf_ranking": 1,
        "naac_grade": "A++",
        "highest_package": "2.1 Cr",
        "avg_package": "28 LPA",
        "logo_url": "https://upload.wikimedia.org/wikipedia/en/8/8c/IIT_Bombay_Logo.svg"
    }
]
"""

# Pydantic Model for Search Request
class CollegeSearchRequest(BaseModel):
    query: str = "List the top 10 engineering colleges in India."


# Helper: Extract JSON content from AI response
def extract_json_from_response(content: str) -> List[dict]:
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        json_match = re.search(r"```json\s*(\[[\s\S]*?\])\s*```", content, re.DOTALL)
        if json_match:
            try:
                return json.loads(json_match.group(1))
            except json.JSONDecodeError:
                raise ValueError("Failed to extract valid JSON from AI response.")

    raise ValueError("No valid JSON found in AI response.")


# Helper: Query Perplexity AI and handle responses
def query_perplexity(prompt: str) -> List[dict]:
    url = "https://api.perplexity.ai/chat/completions"
    headers = {
        "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": "sonar",
        "messages": [
            {"role": "system", "content": INSTRUCTIONS},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 3000
    }

    try:
        print(f"🔹 Sending Query to Perplexity AI: {prompt}")
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()

        # Log raw AI response for debugging
        print("🔹 Raw AI Response:", response.text)

        data = response.json()

        # Validate AI response structure
        if "choices" not in data or not data["choices"]:
            raise ValueError("Invalid AI response structure: 'choices' missing.")

        # Extract combined content from 'message' and 'delta'
        content = "".join(
            choice.get("message", {}).get("content", "") +
            choice.get("delta", {}).get("content", "")
            for choice in data["choices"]
        )

        if not content:
            raise ValueError("Empty content in AI response.")

        return extract_json_from_response(content)

    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=f"API request failed: {str(e)}")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


# API Route: Fetch Top Colleges
@router.get("/")
async def get_top_colleges():
    print("🔹 Received GET request for top engineering colleges.")
    try:
        colleges = query_perplexity("List the top 10 engineering colleges in India.")

        if not colleges:
            raise HTTPException(status_code=404, detail="No colleges found.")

        return Response(content=json.dumps(colleges, indent=2), media_type="application/json")

    except Exception as e:
        print(f"❌ Error fetching colleges: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")


