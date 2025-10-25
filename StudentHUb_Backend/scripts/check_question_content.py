#!/usr/bin/env python3
"""
Script to check the actual content of questions in the database
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

def check_question_content():
    """Check the actual content of questions in the database"""
    try:
        print("🔍 Checking question content in Supabase database...")
        
        # Get Supabase client
        supabase = get_supabase_client()
        if not supabase:
            print("❌ Failed to connect to Supabase")
            return
        
        print("✅ Connected to Supabase")
        
        # Get paper ID
        paper_result = supabase.table('papers').select('id').eq('exam', 'JEE Mains').eq('year', 2025).execute()
        
        if not paper_result.data:
            print("❌ No JEE Mains 2025 paper found")
            return
        
        paper_id = paper_result.data[0]['id']
        print(f"📄 Found paper ID: {paper_id}")
        
        # Get a few sample questions to check content
        print("\n📊 Checking question content...")
        questions_result = supabase.table('questions').select('*').eq('paper_id', paper_id).order('qnum').limit(5).execute()
        
        if not questions_result.data:
            print("❌ No questions found")
            return
        
        print(f"✅ Found {len(questions_result.data)} sample questions")
        
        for i, question in enumerate(questions_result.data):
            print(f"\n📝 Question {question['qnum']} ({question['subject']}):")
            print(f"   Text: {question['question_text'][:100]}...")
            print(f"   Topic: {question.get('topic', 'N/A')}")
            
            # Get choices for this question
            choices_result = supabase.table('choices').select('*').eq('question_id', question['id']).order('choice_label').execute()
            
            if choices_result.data:
                print(f"   Choices:")
                for choice in choices_result.data:
                    print(f"     {choice['choice_label']}: {choice['choice_text']}")
            else:
                print("   No choices found")
            
            # Get correct answer
            answer_result = supabase.table('answers').select('correct_answer').eq('question_id', question['id']).execute()
            if answer_result.data:
                print(f"   Correct Answer: {answer_result.data[0]['correct_answer']}")
            else:
                print("   No correct answer found")
        
        # Check if questions contain placeholder text
        print(f"\n🔍 Checking for placeholder content...")
        placeholder_indicators = [
            "Complete question content",
            "Option A for question",
            "Option B for question",
            "Option C for question", 
            "Option D for question",
            "JEE Main 2025 Question",
            "This contains the actual question text"
        ]
        
        all_questions = supabase.table('questions').select('*').eq('paper_id', paper_id).execute()
        placeholder_count = 0
        
        for question in all_questions.data:
            question_text = question['question_text']
            if any(indicator in question_text for indicator in placeholder_indicators):
                placeholder_count += 1
        
        print(f"📊 Found {placeholder_count} questions with placeholder content out of {len(all_questions.data)} total questions")
        
        if placeholder_count > 0:
            print("⚠️  WARNING: Questions contain placeholder/sample content instead of real JEE 2025 questions!")
            print("   This explains why the website shows sample questions instead of real ones.")
        else:
            print("✅ All questions appear to have real content")
            
    except Exception as e:
        print(f"❌ Error checking question content: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    check_question_content()
