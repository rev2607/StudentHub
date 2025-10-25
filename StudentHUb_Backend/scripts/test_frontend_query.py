#!/usr/bin/env python3
"""
Script to test the exact same query that the frontend uses to fetch questions
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

def test_frontend_query():
    """Test the exact same query that the frontend uses"""
    try:
        print("🔍 Testing frontend query for JEE 2025 questions...")
        
        # Get Supabase client (same as frontend)
        supabase = get_supabase_client()
        if not supabase:
            print("❌ Failed to connect to Supabase")
            return
        
        print("✅ Connected to Supabase")
        
        # Step 1: Fetch paper information (same as frontend)
        print("\n📄 Fetching paper information...")
        paper_result = supabase.table('papers').select('*').eq('exam', 'JEE Mains').eq('year', 2025).execute()
        
        if paper_result.data:
            paper = paper_result.data[0]  # Get first paper
            print(f"✅ Found paper: {paper['title']}")
            print(f"   Paper ID: {paper['id']}")
            print(f"   Total Questions (in paper record): {paper.get('total_questions', 'Not set')}")
        else:
            print("❌ No paper found")
            return
        
        # Step 2: Fetch questions (exact same query as frontend)
        print("\n📊 Fetching questions (frontend query)...")
        questions_result = supabase.table('questions').select('*').eq('paper_id', paper['id']).order('qnum')
        
        # Execute the query
        result = questions_result.execute()
        
        if result.data:
            total_questions = len(result.data)
            print(f"✅ Frontend query returned {total_questions} questions")
            
            # Show question distribution
            subject_counts = {}
            for question in result.data:
                subject = question.get('subject', 'Unknown')
                subject_counts[subject] = subject_counts.get(subject, 0) + 1
            
            print("\n📈 Question distribution:")
            for subject, count in subject_counts.items():
                print(f"   {subject}: {count} questions")
            
            # Show first few questions
            print(f"\n📝 First 5 questions:")
            for i, question in enumerate(result.data[:5]):
                question_id = question['id'] if isinstance(question['id'], str) else str(question['id'])
                print(f"   Q{question['qnum']}: {question['subject']} - {question_id[:8]}...")
            
            # Show last few questions
            print(f"\n📝 Last 5 questions:")
            for i, question in enumerate(result.data[-5:]):
                question_id = question['id'] if isinstance(question['id'], str) else str(question['id'])
                print(f"   Q{question['qnum']}: {question['subject']} - {question_id[:8]}...")
            
            if total_questions == 75:
                print(f"\n✅ SUCCESS: Frontend should show all {total_questions} questions!")
            else:
                print(f"\n⚠️  Frontend query returned {total_questions} questions, expected 75")
                
        else:
            print("❌ No questions returned from frontend query")
            
    except Exception as e:
        print(f"❌ Error testing frontend query: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_frontend_query()
