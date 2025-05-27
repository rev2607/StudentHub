from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
import random

from ..database import get_db
from ..models import User

router = APIRouter(prefix="/api/auth", tags=["auth"])

otp_store = {}

class OTPRequest(BaseModel):
    phone: str

class OTPVerifyRequest(BaseModel):
    phone: str
    otp: int
    location: str | None = None

@router.post("/login")
async def send_otp(request: OTPRequest):
    otp = random.randint(1000, 9999)
    otp_store[request.phone] = otp
    print(f"DEBUG OTP for {request.phone}: {otp}")  # Simulate SMS
    return {"message": "OTP sent"}

@router.post("/verify")
async def verify_otp(request: OTPVerifyRequest, db: Session = Depends(get_db)):
    if otp_store.get(request.phone) != request.otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")

    user = db.query(User).filter(User.phone == request.phone).first()

    if not user:
        user = User(phone=request.phone, location=request.location, is_verified=True)
        db.add(user)
    else:
        user.is_verified = True
        user.location = request.location

    db.commit()
    return {"message": "OTP verified", "user": {"phone": user.phone, "location": user.location}}
