from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from typing import Optional

from database import get_db
from models import Lead

router = APIRouter(prefix="/api/leads", tags=["leads"])

class LeadCreate(BaseModel):
    fullName: str
    email: str
    phone: str
    city: str
    course: str
    college: Optional[str] = None
    source: Optional[str] = None

@router.post("/")
async def create_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    """
    Create a new lead entry from college page form submissions.
    """
    try:
        # Create new lead
        new_lead = Lead(
            full_name=lead.fullName,
            email=lead.email,
            phone=lead.phone,
            city=lead.city,
            course=lead.course,
            college=lead.college,
            source=lead.source
        )
        
        db.add(new_lead)
        db.commit()
        db.refresh(new_lead)
        
        return {
            "status": "success",
            "message": "Lead created successfully",
            "lead_id": new_lead.id
        }
    except Exception as e:
        db.rollback()
        # Log the error for debugging
        print(f"Error creating lead: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to create lead: {str(e)}"
        )

