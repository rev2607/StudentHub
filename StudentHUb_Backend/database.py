
# backend/database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv()
root_env = find_dotenv(filename=".env", usecwd=True)
if root_env:
    load_dotenv(root_env, override=False)

DATABASE_URL = os.getenv("DATABASE_URL") or f"sqlite:////{os.path.abspath(os.path.join(os.path.dirname(__file__), 'studenthub.db'))}"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    from fastapi import Depends
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
