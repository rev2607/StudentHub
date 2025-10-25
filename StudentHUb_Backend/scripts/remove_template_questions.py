#!/usr/bin/env python3
"""
Script to remove template questions and keep only real ones
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

def remove_template_questions():
    """Remove template questions and keep only real ones"""
    try:
        print("🧹 Removing template questions...")
        
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
        
        # Get all questions
        all_questions = supabase.table('questions').select('*').eq('paper_id', paper_id).execute()
        print(f"📊 Total questions: {len(all_questions.data)}")
        
        # Find template questions
        template_questions = []
        real_questions = []
        
        for question in all_questions.data:
            if "[REPLACE WITH ACTUAL" in question['question_text']:
                template_questions.append(question)
            else:
                real_questions.append(question)
        
        print(f"📊 Real questions: {len(real_questions)}")
        print(f"📊 Template questions: {len(template_questions)}")
        
        if len(template_questions) > 0:
            print(f"🗑️  Removing {len(template_questions)} template questions...")
            
            # Delete template questions and their related data
            for question in template_questions:
                question_id = question['id']
                
                # Delete choices and answers first
                supabase.table('choices').delete().eq('question_id', question_id).execute()
                supabase.table('answers').delete().eq('question_id', question_id).execute()
                # Delete the question
                supabase.table('questions').delete().eq('id', question_id).execute()
                
                print(f"✅ Removed template question {question['qnum']}")
            
            # Update paper record
            supabase.table('papers').update({'total_questions': len(real_questions)}).eq('id', paper_id).execute()
            
            print(f"🎉 Successfully removed {len(template_questions)} template questions!")
            print(f"📊 Final count: {len(real_questions)} real questions")
            print("✅ Database now contains only real JEE 2025 questions!")
        else:
            print("✅ No template questions found - database is clean!")
        
    except Exception as e:
        print(f"❌ Error removing template questions: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    remove_template_questions()
