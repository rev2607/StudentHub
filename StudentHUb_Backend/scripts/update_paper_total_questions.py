#!/usr/bin/env python3
"""
Script to update the paper record with correct total questions count
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

def update_paper_total_questions():
    """Update the paper record with correct total questions count"""
    try:
        supabase = get_supabase_client()
        if not supabase:
            raise Exception("Supabase client not available")
        
        print("✅ Supabase client initialized successfully")
        
        # Get the JEE Mains 2025 paper
        paper_result = supabase.table('papers').select('*').eq('exam', 'JEE Mains').eq('year', 2025).execute()
        
        if not paper_result.data:
            print("❌ JEE Mains 2025 paper not found")
            return False
        
        paper = paper_result.data[0]
        paper_id = paper['id']
        
        # Count actual questions
        questions_result = supabase.table('questions').select('id').eq('paper_id', paper_id).execute()
        actual_count = len(questions_result.data)
        
        print(f"📊 Paper currently shows {paper['total_questions']} questions")
        print(f"📊 Actual questions in database: {actual_count}")
        
        # Update the paper record
        if actual_count != paper['total_questions']:
            update_result = supabase.table('papers').update({
                'total_questions': actual_count
            }).eq('id', paper_id).execute()
            
            if update_result.data:
                print(f"✅ Updated paper to show {actual_count} questions")
                return True
            else:
                print("❌ Failed to update paper")
                return False
        else:
            print("✅ Paper already has correct question count")
            return True
            
    except Exception as e:
        print(f"❌ Update failed: {e}")
        return False

if __name__ == "__main__":
    success = update_paper_total_questions()
    
    if success:
        print("🎉 Paper total questions updated successfully!")
    else:
        print("❌ Paper total questions update failed!")
