
# backend/models.py

from sqlalchemy import Column, Integer, String, Boolean
from .database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    phone = Column(String, unique=True, index=True, nullable=False)
    location = Column(String, nullable=True)
    is_verified = Column(Boolean, default=False)
