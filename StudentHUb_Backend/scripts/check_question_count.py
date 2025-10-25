#!/usr/bin/env python3
"""
Script to check the actual count of JEE 2025 questions in Supabase database
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

def check_question_count():
    """Check the actual count of questions in the database"""
    try:
        print("🔍 Checking JEE 2025 question count in Supabase database...")
        
        # Get Supabase client
        supabase = get_supabase_client()
        if not supabase:
            print("❌ Failed to connect to Supabase")
            return
        
        print("✅ Connected to Supabase")
        
        # First, check if JEE Mains 2025 paper exists
        print("\n📄 Checking for JEE Mains 2025 paper...")
        paper_result = supabase.table('papers').select('*').eq('exam', 'JEE Mains').eq('year', 2025).execute()
        
        if not paper_result.data:
            print("❌ No JEE Mains 2025 paper found in database")
            return
        
        paper = paper_result.data[0]
        print(f"✅ Found paper: {paper['title']}")
        print(f"   Paper ID: {paper['id']}")
        print(f"   Total Questions (in paper record): {paper.get('total_questions', 'Not set')}")
        
        # Count questions for this paper
        print("\n📊 Counting questions in database...")
        questions_result = supabase.table('questions').select('id, qnum, subject').eq('paper_id', paper['id']).order('qnum').execute()
        
        if not questions_result.data:
            print("❌ No questions found for this paper")
            return
        
        total_questions = len(questions_result.data)
        print(f"✅ Found {total_questions} questions in database")
        
        # Show question distribution by subject
        subject_counts = {}
        for question in questions_result.data:
            subject = question.get('subject', 'Unknown')
            subject_counts[subject] = subject_counts.get(subject, 0) + 1
        
        print("\n📈 Question distribution by subject:")
        for subject, count in subject_counts.items():
            print(f"   {subject}: {count} questions")
        
        # Show first few questions
        print(f"\n📝 First 5 questions:")
        for i, question in enumerate(questions_result.data[:5]):
            question_id = question['id'] if isinstance(question['id'], str) else str(question['id'])
            print(f"   Q{question['qnum']}: {question['subject']} - {question_id[:8]}...")
        
        # Check if there are more questions beyond what's showing
        if total_questions > 20:
            print(f"\n⚠️  Database has {total_questions} questions but website might be showing only 20")
            print("   This could be due to:")
            print("   1. Frontend limiting the query")
            print("   2. Backend API limiting results")
            print("   3. Data injection script limiting to 20 questions")
        else:
            print(f"\n✅ Database has {total_questions} questions, which matches what's showing on website")
        
        # Check choices and answers
        print(f"\n🔍 Checking related data...")
        choices_result = supabase.table('choices').select('id').execute()
        answers_result = supabase.table('answers').select('id').execute()
        
        print(f"   Total choices in database: {len(choices_result.data) if choices_result.data else 0}")
        print(f"   Total answers in database: {len(answers_result.data) if answers_result.data else 0}")
        
        return total_questions
        
    except Exception as e:
        print(f"❌ Error checking question count: {str(e)}")
        return None

if __name__ == "__main__":
    check_question_count()
