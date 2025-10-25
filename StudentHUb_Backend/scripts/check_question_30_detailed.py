#!/usr/bin/env python3
"""
Script to check question 30 in detail
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

def check_question_30_detailed():
    """Check question 30 in detail"""
    try:
        print("🔍 Checking Question 30 in detail...")
        
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
        print(f"📄 Paper ID: {paper_id}")
        
        # Check question 30
        print(f"\n📝 Question 30 Details:")
        question_30 = supabase.table('questions').select('*').eq('paper_id', paper_id).eq('qnum', 30).execute()
        
        if question_30.data:
            question = question_30.data[0]
            print(f"   ID: {question['id']}")
            print(f"   QNum: {question['qnum']}")
            print(f"   Subject: {question['subject']}")
            print(f"   Topic: {question.get('topic', 'N/A')}")
            print(f"   Question Text: {question['question_text']}")
            
            # Get choices
            choices = supabase.table('choices').select('*').eq('question_id', question['id']).order('choice_label').execute()
            if choices.data:
                print(f"   Choices:")
                for choice in choices.data:
                    print(f"     {choice['choice_label']}: {choice['choice_text']}")
            else:
                print("   ❌ No choices found")
            
            # Get correct answer
            answer = supabase.table('answers').select('correct_answer').eq('question_id', question['id']).execute()
            if answer.data:
                print(f"   Correct Answer: {answer.data[0]['correct_answer']}")
            else:
                print("   ❌ No answer found")
            
            # Check if it's template content
            if "[REPLACE WITH ACTUAL" in question['question_text']:
                print("   ⚠️  This is TEMPLATE content!")
            else:
                print("   ✅ This is REAL content!")
        else:
            print("   ❌ Question 30 not found")
        
        # Check a few more questions around 30
        print(f"\n📝 Checking Questions 28-32:")
        for qnum in range(28, 33):
            question_result = supabase.table('questions').select('*').eq('paper_id', paper_id).eq('qnum', qnum).execute()
            if question_result.data:
                question = question_result.data[0]
                is_template = "[REPLACE WITH ACTUAL" in question['question_text']
                status = "TEMPLATE" if is_template else "REAL"
                print(f"   Q{qnum}: {status} - {question['question_text'][:50]}...")
            else:
                print(f"   Q{qnum}: NOT FOUND")
        
        # Check total count
        all_questions = supabase.table('questions').select('*').eq('paper_id', paper_id).execute()
        print(f"\n📊 Total questions in database: {len(all_questions.data)}")
        
        # Count template vs real
        template_count = 0
        real_count = 0
        for question in all_questions.data:
            if "[REPLACE WITH ACTUAL" in question['question_text']:
                template_count += 1
            else:
                real_count += 1
        
        print(f"   Real Questions: {real_count}")
        print(f"   Template Questions: {template_count}")
        
    except Exception as e:
        print(f"❌ Error checking question 30: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    check_question_30_detailed()
