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

def update_paper_count():
    """Update the paper record with correct total questions count"""
    try:
        print("🔧 Updating paper record with correct question count...")
        
        # Get Supabase client
        supabase = get_supabase_client()
        if not supabase:
            print("❌ Failed to connect to Supabase")
            return
        
        print("✅ Connected to Supabase")
        
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
            update_result = supabase.table('papers').update({'total_questions': actual_count}).eq('id', paper_id).execute()
            
            if update_result.data:
                print(f"✅ Updated paper record to show {actual_count} total questions")
            else:
                print("❌ Failed to update paper record")
                return False
        else:
            print("✅ Paper record already has correct count")
        
        # Verify the update
        updated_paper = supabase.table('papers').select('*').eq('id', paper_id).execute()
        if updated_paper.data:
            print(f"📊 Final paper record: {updated_paper.data[0]['total_questions']} total questions")
        
        return True
        
    except Exception as e:
        print(f"❌ Error updating paper count: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    update_paper_count()
