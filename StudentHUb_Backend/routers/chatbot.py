
# backend/routers/chatbot.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx
import os
from dotenv import load_dotenv
import re

load_dotenv()

router = APIRouter(prefix="/api/chatbot", tags=["chatbot"])

class ChatRequest(BaseModel):
    query: str

@router.post("/")
async def chatbot(request: ChatRequest):
    api_key = os.getenv("PERPLEXITY_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="PERPLEXITY_API_KEY not configured on server")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    # Simple instruction to ensure brand-name and helpful tone
    system_prompt = (
        "You are Student Hub AI, a helpful assistant for students. "
        "Use plain text only (no Markdown or citations). "
        "Answer in 1–2 short sentences max. Then ask ONE short follow-up question to narrow intent."
    )

    payload = {
        "model": "sonar",  # Perplexity's general model
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": request.query},
        ],
        "max_tokens": 150,
    }

    try:
        async with httpx.AsyncClient(timeout=60) as client:
            response = await client.post(
                "https://api.perplexity.ai/chat/completions", json=payload, headers=headers
            )
        response.raise_for_status()
        data = response.json()

        # Extract assistant message text
        content = ""
        if isinstance(data, dict) and data.get("choices"):
            # Perplexity compatible with OpenAI-style choices
            for choice in data["choices"]:
                # prefer message.content, but also handle delta.content
                content += (
                    (choice.get("message") or {}).get("content", "")
                    + (choice.get("delta") or {}).get("content", "")
                )

        if not content:
            # Fallback to raw text if present
            content = data.get("output_text") if isinstance(data, dict) else None

        if not content:
            raise HTTPException(status_code=500, detail="Empty response from Perplexity API")

        # Sanitize: remove Markdown and bracketed citations
        cleaned = content
        # Remove **bold** and __italics__ markers
        cleaned = cleaned.replace("**", "").replace("__", "")
        # Remove inline markdown links [text](url)
        cleaned = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", cleaned)
        # Remove bracketed numeric citations like [1], [2]
        cleaned = re.sub(r"\s*\[(?:\d+|[a-zA-Z])\]", "", cleaned)
        # Collapse multiple spaces/newlines
        cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
        cleaned = re.sub(r"[ \t]{2,}", " ", cleaned).strip()

        # Enforce brevity: keep at most 2 sentences, add one short follow-up if none
        sentences = re.split(r"(?<=[.!?])\s+", cleaned)
        main_text = " ".join([s for s in sentences if s][:2]).strip()
        has_question = any(s.strip().endswith('?') for s in sentences[:3])
        if not has_question:
            follow_up = " What would you like to focus on (admissions, courses, placements)?"
        else:
            follow_up = ""

        final_answer = (main_text + follow_up).strip()
        return {"answer": final_answer}
    except httpx.HTTPError as e:
        raise HTTPException(status_code=502, detail=f"Perplexity request failed: {str(e)}")
