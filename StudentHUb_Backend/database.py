
# backend/database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv
from pathlib import Path

# Load .env from this folder and fall back to repo root
load_dotenv()
root_env = Path(__file__).resolve().parents[1] / ".env"
if root_env.exists():
    load_dotenv(dotenv_path=root_env, override=False)

DATABASE_URL = os.getenv("DATABASE_URL")

# Fallback to local SQLite DB if DATABASE_URL is not provided
if not DATABASE_URL:
    base_dir = os.path.dirname(os.path.abspath(__file__))
    sqlite_path = os.path.join(base_dir, "studenthub.db")
    DATABASE_URL = f"sqlite:///{sqlite_path}"

# For SQLite we need a special connect arg
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}

engine = create_engine(DATABASE_URL, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    from fastapi import Depends
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
