import requests
import os
import json
import re
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from typing import List

load_dotenv()
PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")

if not PERPLEXITY_API_KEY:
    raise ValueError("API Key not found! Ensure PERPLEXITY_API_KEY is set in your .env file.")

router = APIRouter(prefix="/api/education", tags=["education"])

INSTRUCTIONS = """
Search the internet and return the 5 most recent and real educational news articles published in India. For each article, provide:
1. Title
2. Accurate published date (e.g., April 3, 2025 | 02:45 PM IST)
3. Short summary or description
4. Real image URL (from the article or its preview)
5. Read more URL (link to full article)

Only respond with a valid JSON array like this:
[
  {
    "title": "CBSE Board Exams 2025 Dates Out",
    "date": "April 3, 2025 | 02:45 PM IST",
    "description": "CBSE has announced the date sheet for the upcoming board exams.",
    "image_url": "https://example.com/news1.jpg",
    "read_more_url": "https://example.com/article1"
  }
]

Only include **real data**, not placeholders. Ensure URLs are valid links from reliable sources like ndtv.com, indianexpress.com, timesofindia.com, etc.
"""

def extract_json_from_response(content: str) -> List[dict]:
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        json_match = re.search(r"```json\s*(\[[\s\S]*?\])\s*```", content, re.DOTALL)
        if json_match:
            cleaned_json = json_match.group(1).strip()
            if cleaned_json.endswith(","):
                cleaned_json = cleaned_json.rstrip(",") + "]"
            return json.loads(cleaned_json)
    raise ValueError("No valid JSON found in AI response.")
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

        print("🔹 Raw AI Response:", response.text)  # Helps with debugging

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


# ✅ API route
@router.get("/")
def get_education_updates():
    prompt = "Give me the latest educational news from India."
    try:
        updates = query_perplexity(prompt)
        return updates
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
