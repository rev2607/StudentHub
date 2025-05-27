
# backend/routers/chatbot.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx

router = APIRouter(prefix="/api/chatbot", tags=["chatbot"])

class ChatRequest(BaseModel):
    query: str

@router.post("/")
async def chatbot(request: ChatRequest):
    headers = {"Authorization": "Bearer YOUR_PERPLEXITY_API_KEY"}
    payload = {"model": "sonar", "prompt": request.query}

    async with httpx.AsyncClient() as client:
        response = await client.post("https://api.perplexity.ai/chat", json=payload, headers=headers)

    if response.status_code != 200:
        raise HTTPException(status_code=500, detail="Error from Perplexity API")

    return response.json()
