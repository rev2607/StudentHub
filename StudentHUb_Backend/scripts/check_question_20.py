#!/usr/bin/env python3
"""
Script to check question 20 content
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

def check_question_20():
    """Check question 20 content"""
    try:
        print("🔍 Checking Question 20 content...")
        
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
        
        # Check question 20
        print(f"\n📝 Question 20:")
        question_20 = supabase.table('questions').select('*').eq('paper_id', paper_id).eq('qnum', 20).execute()
        
        if question_20.data:
            question = question_20.data[0]
            print(f"   Subject: {question['subject']}")
            print(f"   Topic: {question.get('topic', 'N/A')}")
            print(f"   Question Text: {question['question_text']}")
            
            # Get choices
            choices = supabase.table('choices').select('*').eq('question_id', question['id']).order('choice_label').execute()
            if choices.data:
                print(f"   Choices:")
                for choice in choices.data:
                    print(f"     {choice['choice_label']}: {choice['choice_text']}")
            
            # Get correct answer
            answer = supabase.table('answers').select('correct_answer').eq('question_id', question['id']).execute()
            if answer.data:
                print(f"   Correct Answer: {answer.data[0]['correct_answer']}")
            
            # Check if it's real content
            if "Complete question content" in question['question_text']:
                print("   ⚠️  This is PLACEHOLDER content!")
            else:
                print("   ✅ This is REAL content!")
        else:
            print("   ❌ Question 20 not found")
            
    except Exception as e:
        print(f"❌ Error checking question 20: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    check_question_20()
