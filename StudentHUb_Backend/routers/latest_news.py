import requests
import os
import json
import re
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
router = APIRouter(prefix="/api/alerts", tags=["alerts"])

# AI Instructions for Perplexity API
INSTRUCTIONS = """Provide a list in JSON format. The response MUST be structured based on the requested category.

1. **Exam Alerts** → Latest upcoming entrance exams in India (e.g., JEE, NEET, UPSC, CAT).
2. **College Alerts** → Recent college updates (e.g., new courses, campus news, fee hikes).
3. **Admission Alerts** → Ongoing and upcoming admissions with deadlines.

The response MUST be a JSON array. Example format:

[
    {
        "title": "JEE Advanced 2025",
        "date": "12 May 2025",
        "registration_deadline": "15 April 2025",
        "details": "JEE Advanced 2025 will be conducted on 12th May. Registration closes on 15th April."
    },
    {
        "title": "DU Admissions 2025",
        "date": "Ongoing",
        "deadline": "30 June 2025",
        "details": "Delhi University admissions are open for UG and PG courses. Apply before 30th June."
    }
]
"""

# Helper: Extract JSON content from AI response
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

# Helper: Query Perplexity AI and handle responses
def query_perplexity(category: str) -> List[dict]:
    category_prompts = {
        "exam_alerts": "List the latest upcoming entrance exams in India with details.",
        "college_alerts": "List recent college updates in India, including new courses and announcements.",
        "admission_alerts": "List ongoing and upcoming college admissions in India."
    }

    prompt = category_prompts.get(category, "Provide general education news.")

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

# API Route: Fetch Alerts based on category
@router.get("/")
async def get_alerts(category: str = Query(..., enum=["exam_alerts", "college_alerts", "admission_alerts"])):
    try:
        alerts = query_perplexity(category)

        if not alerts:
            raise HTTPException(status_code=404, detail="No alerts found.")

        return Response(content=json.dumps(alerts, indent=2), media_type="application/json")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

