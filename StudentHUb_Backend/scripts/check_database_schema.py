#!/usr/bin/env python3
"""
Script to check database schema
"""

import os
import sys
from dotenv import load_dotenv, find_dotenv

# Add the parent directory to the path to import modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from supabase_client import get_supabase_client

# Load environment variables
load_dotenv()
root_env = find_dotenv(filename=".env", usecwd=True)
if root_env:
    load_dotenv(root_env, override=False)

def check_schema():
    """Check database schema"""
    try:
        print("🔍 Checking database schema...")
        
        # Get Supabase client
        supabase = get_supabase_client()
        if not supabase:
            print("❌ Failed to connect to Supabase")
            return
        
        print("✅ Connected to Supabase")
        
        # Check choices table structure
        print("\n📊 Checking choices table structure...")
        try:
            choices_result = supabase.table('choices').select('*').limit(1).execute()
            if choices_result.data:
                print("✅ Choices table accessible")
                print(f"   Sample choice: {choices_result.data[0]}")
            else:
                print("❌ No choices found")
        except Exception as e:
            print(f"❌ Error accessing choices table: {e}")
        
        # Check questions table structure
        print("\n📊 Checking questions table structure...")
        try:
            questions_result = supabase.table('questions').select('*').limit(1).execute()
            if questions_result.data:
                print("✅ Questions table accessible")
                print(f"   Sample question: {questions_result.data[0]}")
            else:
                print("❌ No questions found")
        except Exception as e:
            print(f"❌ Error accessing questions table: {e}")
        
        # Check answers table structure
        print("\n📊 Checking answers table structure...")
        try:
            answers_result = supabase.table('answers').select('*').limit(1).execute()
            if answers_result.data:
                print("✅ Answers table accessible")
                print(f"   Sample answer: {answers_result.data[0]}")
            else:
                print("❌ No answers found")
        except Exception as e:
            print(f"❌ Error accessing answers table: {e}")
            
    except Exception as e:
        print(f"❌ Error checking schema: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    check_schema()
