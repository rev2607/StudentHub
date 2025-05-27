
import requests
import os
import json
import re
import asyncio
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException, Query, Response
from pydantic import BaseModel
from typing import List

# Load environment variables
load_dotenv()
PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
if not PERPLEXITY_API_KEY:
    raise ValueError("API Key not found! Ensure PERPLEXITY_API_KEY is set in your .env file.")

# Initialize FastAPI app and Router
app = FastAPI(title="Student Hub API")
router = APIRouter(prefix="/api/data", tags=["data"])

# AI Instructions
INSTRUCTIONS = """Provide a list in JSON format. The response MUST be structured based on the requested category.

1. **Highest Packages & Placements** → Top colleges in India with the highest placement packages and highest placement rates.
2. **Trending Courses** → Most in-demand courses based on industry needs and student interest.
3. **Trending Colleges** → The most popular colleges in India based on recent trends, rankings, and admissions.

The response MUST be a JSON array. Example format:

[
    {
        "COllege": "IIT Bombay",
        "Highest package: ₹2.1 Crore"
    },
    {
        "name": "Data Science & AI"
    },
    {
        "College Name: "Vellore Institute of Technology"
    }
]
"""

# Helper to extract JSON content
def extract_json_from_response(content: str) -> List[dict]:
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        json_match = re.search(r"\[\s*{.*?}\s*\]", content, re.DOTALL)
        if json_match:
            try:
                return json.loads(json_match.group(0))
            except json.JSONDecodeError:
                raise ValueError("Failed to extract valid JSON from AI response.")
    raise ValueError("No valid JSON found in AI response.")

# Function to call Perplexity
def query_perplexity(category: str) -> List[dict]:
    category_prompts = {
        "highest_packages": "List the top 10 colleges in India with the highest placement packages",
        "trending_courses": "List the top 10 trending and in-demand courses in India.",
        "trending_colleges": "List the most popular and trending 10 colleges in India based on recent rankings."
    }

    prompt = category_prompts.get(category, "Provide general education insights.")
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

        return extract_json_from_response(content)

    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=f"API request failed: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

@router.get("/all")
async def get_all_data():
    try:
        loop = asyncio.get_event_loop()
        packages_task = loop.run_in_executor(None, query_perplexity, "highest_packages")
        courses_task = loop.run_in_executor(None, query_perplexity, "trending_courses")
        colleges_task = loop.run_in_executor(None, query_perplexity, "trending_colleges")

        packages, courses, colleges = await asyncio.gather(packages_task, courses_task, colleges_task)

        return {
            "status": "success",
            "message": "Fetched all insights successfully",
            "data": {
                "packages": packages,
                "courses": courses,
                "colleges": colleges
            }
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

# ✅ Optional: Individual Category Endpoint
@router.get("/")
async def get_data(category: str = Query(..., enum=["highest_packages", "trending_courses", "trending_colleges"])):
    try:
        data = query_perplexity(category)
        if not data:
            raise HTTPException(status_code=404, detail="No data found.")
        return Response(content=json.dumps(data, indent=2), media_type="application/json")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
