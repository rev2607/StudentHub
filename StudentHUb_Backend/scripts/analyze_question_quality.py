#!/usr/bin/env python3
"""
Script to analyze which questions have real content vs placeholder content
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

def analyze_question_quality():
    """Analyze which questions have real content vs placeholder content"""
    try:
        print("🔍 Analyzing question quality in database...")
        
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
        
        # Get all questions
        questions_result = supabase.table('questions').select('*').eq('paper_id', paper_id).order('qnum').execute()
        
        if not questions_result.data:
            print("❌ No questions found")
            return
        
        print(f"📊 Analyzing {len(questions_result.data)} questions...")
        
        # Check for placeholder indicators
        placeholder_indicators = [
            "Complete question content",
            "Option A for question",
            "Option B for question", 
            "Option C for question",
            "Option D for question",
            "JEE Main 2025 Question",
            "This contains the actual question text"
        ]
        
        real_questions = []
        placeholder_questions = []
        
        for question in questions_result.data:
            question_text = question['question_text']
            is_placeholder = any(indicator in question_text for indicator in placeholder_indicators)
            
            if is_placeholder:
                placeholder_questions.append(question)
            else:
                real_questions.append(question)
        
        print(f"\n📈 Analysis Results:")
        print(f"   ✅ Real Questions: {len(real_questions)}")
        print(f"   ⚠️  Placeholder Questions: {len(placeholder_questions)}")
        print(f"   📊 Total Questions: {len(questions_result.data)}")
        
        if real_questions:
            print(f"\n✅ Real Questions (first 5):")
            for i, question in enumerate(real_questions[:5]):
                print(f"   Q{question['qnum']} ({question['subject']}): {question['question_text'][:80]}...")
        
        if placeholder_questions:
            print(f"\n⚠️  Placeholder Questions (first 5):")
            for i, question in enumerate(placeholder_questions[:5]):
                print(f"   Q{question['qnum']} ({question['subject']}): {question['question_text'][:80]}...")
        
        # Check subject distribution for real vs placeholder
        print(f"\n📊 Subject Distribution:")
        real_subjects = {}
        placeholder_subjects = {}
        
        for question in real_questions:
            subject = question['subject']
            real_subjects[subject] = real_subjects.get(subject, 0) + 1
            
        for question in placeholder_questions:
            subject = question['subject']
            placeholder_subjects[subject] = placeholder_subjects.get(subject, 0) + 1
        
        print("   Real Questions by Subject:")
        for subject, count in real_subjects.items():
            print(f"     {subject}: {count}")
            
        print("   Placeholder Questions by Subject:")
        for subject, count in placeholder_subjects.items():
            print(f"     {subject}: {count}")
        
        # Recommendations
        print(f"\n💡 Recommendations:")
        if len(placeholder_questions) > 0:
            print(f"   1. Replace {len(placeholder_questions)} placeholder questions with real JEE 2025 content")
            print(f"   2. Keep the {len(real_questions)} real questions that are already in the database")
            print(f"   3. Use the real JEE 2025 question data from your scripts to replace placeholders")
        else:
            print(f"   ✅ All questions have real content!")
            
    except Exception as e:
        print(f"❌ Error analyzing question quality: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    analyze_question_quality()
