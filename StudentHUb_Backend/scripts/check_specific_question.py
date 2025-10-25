#!/usr/bin/env python3
"""
Script to check specific question content in the database
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

def check_specific_question():
    """Check specific question content"""
    try:
        print("🔍 Checking specific question content...")
        
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
        
        # Check question 33 specifically
        print(f"\n📝 Checking Question 33:")
        question_33 = supabase.table('questions').select('*').eq('paper_id', paper_id).eq('qnum', 33).execute()
        
        if question_33.data:
            question = question_33.data[0]
            print(f"   Question Text: {question['question_text']}")
            print(f"   Subject: {question['subject']}")
            print(f"   Topic: {question.get('topic', 'N/A')}")
            
            # Get choices
            choices = supabase.table('choices').select('*').eq('question_id', question['id']).order('choice_label').execute()
            if choices.data:
                print(f"   Choices:")
                for choice in choices.data:
                    print(f"     {choice['choice_label']}: {choice['choice_text']}")
            
            # Check if it's placeholder content
            if "Complete question content" in question['question_text'] or "Option A for question" in str(choices.data):
                print("   ⚠️  This is PLACEHOLDER content!")
            else:
                print("   ✅ This is REAL content")
        else:
            print("   ❌ Question 33 not found")
        
        # Check a few more questions around 33
        print(f"\n📝 Checking Questions 30-35:")
        for qnum in range(30, 36):
            question_result = supabase.table('questions').select('*').eq('paper_id', paper_id).eq('qnum', qnum).execute()
            if question_result.data:
                question = question_result.data[0]
                is_placeholder = "Complete question content" in question['question_text']
                status = "PLACEHOLDER" if is_placeholder else "REAL"
                print(f"   Q{qnum}: {status} - {question['question_text'][:50]}...")
            else:
                print(f"   Q{qnum}: NOT FOUND")
        
        # Count placeholder vs real questions
        print(f"\n📊 Analyzing all questions for placeholder content...")
        all_questions = supabase.table('questions').select('*').eq('paper_id', paper_id).execute()
        
        placeholder_count = 0
        real_count = 0
        
        for question in all_questions.data:
            if "Complete question content" in question['question_text']:
                placeholder_count += 1
            else:
                real_count += 1
        
        print(f"   Real Questions: {real_count}")
        print(f"   Placeholder Questions: {placeholder_count}")
        print(f"   Total Questions: {len(all_questions.data)}")
        
        if placeholder_count > 0:
            print(f"\n⚠️  WARNING: {placeholder_count} questions still have placeholder content!")
            print("   These need to be replaced with real JEE 2025 questions.")
        else:
            print(f"\n✅ All questions have real content!")
            
    except Exception as e:
        print(f"❌ Error checking specific question: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    check_specific_question()
