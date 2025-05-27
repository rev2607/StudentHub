# import requests  # Fixed import (was 'request')
# import os
# import json
# import re
# from dotenv import load_dotenv
# from fastapi import FastAPI, APIRouter, HTTPException, Response
# from pydantic import BaseModel
# from typing import List

# # Load environment variables
# load_dotenv()
# PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
# if not PERPLEXITY_API_KEY:
#     raise ValueError("API Key not found! Ensure PERPLEXITY_API_KEY is set in your .env file.")

# # Initialize FastAPI app and Router
# app = FastAPI(title="Student Hub API")

# router = APIRouter(prefix="/api/colleges2", tags=["colleges"])

# # Updated AI Instructions for Perplexity API
# INSTRUCTIONS = """Provide a list of the top 10 engineering colleges in India (excluding IITs and NITs) with the highest placement packages. For each college, include:
# 1. College Name
# 2. Location (City, State)
# 3. NIRF Ranking (if available)
# 4. NAAC Grade
# 5. Highest Package (INR)
# 6. Average Package (INR)
# 7. Fee Structure
# 8. Official Logo URL

# Ensure the colleges are from universities or private institutions and NOT from IITs or NITs. Focus on top-tier private engineering colleges like BITS Pilani, VIT, SRM, etc.

# The response MUST be in a JSON array format. Example:
# [
#     {
#         "name": "BITS Pilani",
#         "location": "Pilani, Rajasthan",
#         "nirf_ranking": 18,
#         "naac_grade": "A",
#         "highest_package": "60 LPA",
#         "avg_package": "18 LPA",
#         "fee_structure": "Rs. 20 lakhs (approx.)",
#         "logo_url": "https://example.com/logo.png"
#     }
# ]
# """

# # Pydantic Model for Search Request
# class CollegeSearchRequest(BaseModel):
#     query: str = "List top 10 private engineering colleges in India with the highest placements (excluding IITs and NITs)."


# # Helper: Extract JSON content from AI response
# def extract_json_from_response(content: str) -> List[dict]:
#     try:
#         return json.loads(content)
#     except json.JSONDecodeError:
#         json_match = re.search(r"```json\s*(\[[\s\S]*?\])\s*```", content, re.DOTALL)
#         if json_match:
#             try:
#                 return json.loads(json_match.group(1))
#             except json.JSONDecodeError:
#                 raise ValueError("Failed to extract valid JSON from AI response.")

#     raise ValueError("No valid JSON found in AI response.")


# # Helper: Query Perplexity AI and handle responses
# def query_perplexity(prompt: str) -> List[dict]:
#     url = "https://api.perplexity.ai/chat/completions"
#     headers = {
#         "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
#         "Content-Type": "application/json",
#     }
#     payload = {
#         "model": "sonar",
#         "messages": [
#             {"role": "system", "content": INSTRUCTIONS},
#             {"role": "user", "content": prompt}
#         ],
#         "max_tokens": 3000
#     }

#     try:
#         print(f"🔹 Sending Query to Perplexity AI: {prompt}")
#         response = requests.post(url, json=payload, headers=headers)
#         response.raise_for_status()

#         # Log raw AI response for debugging
#         print("🔹 Raw AI Response:", response.text)

#         data = response.json()

#         # Validate AI response structure
#         if "choices" not in data or not data["choices"]:
#             raise ValueError("Invalid AI response structure: 'choices' missing.")

#         # Extract combined content from 'message' and 'delta'
#         content = "".join(
#             choice.get("message", {}).get("content", "") +
#             choice.get("delta", {}).get("content", "")
#             for choice in data["choices"]
#         )

#         if not content:
#             raise ValueError("Empty content in AI response.")

#         return extract_json_from_response(content)

#     except requests.RequestException as e:
#         raise HTTPException(status_code=502, detail=f"API request failed: {str(e)}")

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


# # API Route: Fetch Top Colleges
# @router.get("/")
# async def get_top_colleges():
#     print("🔹 Received GET request for top engineering colleges.")
#     try:
#         colleges = query_perplexity("List top 10 private engineering colleges in India with the highest placements (excluding IITs and NITs)")

#         if not colleges:
#             raise HTTPException(status_code=404, detail="No colleges found.")

#         return Response(content=json.dumps(colleges, indent=2), media_type="application/json")

#     except Exception as e:
#         print(f"❌ Error fetching colleges: {str(e)}")
#         raise HTTPException(status_code=500, detail=f"Error: {str(e)}")


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
router = APIRouter(prefix="/api/private_colleges", tags=["colleges"])

# AI Instructions for Perplexity API
INSTRUCTIONS = """Provide a list of the top 10 engineering colleges in India (excluding IITs and NITs) with the highest placement packages. For each college, include:
1. College Name
2. Location (City, State)
3. NIRF Ranking (if available)
4. NAAC Grade
5. Highest Package (INR)
6. Average Package (INR)
7. Fee Structure
8. Official Logo URL

Ensure the colleges are from private institutions or deemed universities like BITS Pilani, VIT, SRM, etc., and NOT from IITs or NITs.

The response MUST be in a valid JSON array format. Example:
[
    {
        "name": "BITS Pilani",
        "location": "Pilani, Rajasthan",
        "nirf_ranking": 18,
        "naac_grade": "A",
        "highest_package": "60 LPA",
        "avg_package": "18 LPA",
        "fee_structure": "Rs. 20 lakhs (approx.)",
        "logo_url": "https://example.com/logo.png"
    }
]
"""

# Helper: Extract JSON content from AI response
def extract_json_from_response(content: str) -> List[dict]:
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        json_match = re.search(r"```json\s*(\[.*?\])\s*```", content, re.DOTALL)
        if json_match:
            try:
                return json.loads(json_match.group(1))
            except json.JSONDecodeError as e:
                print(f"❌ JSON decode error in markdown block: {e}")
                raise ValueError("Failed to extract valid JSON from markdown block in AI response.")
        
        print("❌ No valid JSON array found in AI response.")
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

        data = response.json()
        print("🔹 Raw AI Response:", json.dumps(data, indent=2))

        if "choices" not in data or not data["choices"]:
            raise ValueError("Invalid AI response: 'choices' missing.")

        content = data["choices"][0].get("message", {}).get("content", "")
        if not content:
            raise ValueError("Empty content in AI response.")

        return extract_json_from_response(content)

    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=f"API request failed: {str(e)}")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

# API Route: Fetch Private Colleges
@router.get("/")
async def get_private_colleges():
    try:
        colleges = query_perplexity(
            "List top 10 private engineering colleges in India with the highest placements (excluding IITs and NITs)."
        )
        return Response(content=json.dumps(colleges, indent=2), media_type="application/json")
    except Exception as e:
        print(f"❌ Error fetching colleges: {e}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
