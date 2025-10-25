#!/usr/bin/env python3
"""
Script to check all papers and questions in the database
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

def check_all_papers():
    """Check all papers and questions in the database"""
    try:
        print("🔍 Checking all papers and questions in Supabase database...")
        
        # Get Supabase client
        supabase = get_supabase_client()
        if not supabase:
            print("❌ Failed to connect to Supabase")
            return
        
        print("✅ Connected to Supabase")
        
        # Check all papers
        print("\n📄 All papers in database:")
        papers_result = supabase.table('papers').select('*').execute()
        
        if papers_result.data:
            for paper in papers_result.data:
                print(f"   Paper ID: {paper['id']}")
                print(f"   Exam: {paper['exam']}")
                print(f"   Year: {paper['year']}")
                print(f"   Title: {paper['title']}")
                print(f"   Total Questions: {paper.get('total_questions', 'Not set')}")
                print("   ---")
        else:
            print("❌ No papers found")
            return
        
        # Check total questions across all papers
        print(f"\n📊 Total questions across all papers:")
        all_questions_result = supabase.table('questions').select('*').execute()
        
        if all_questions_result.data:
            total_questions = len(all_questions_result.data)
            print(f"✅ Total questions in database: {total_questions}")
            
            # Group by paper
            questions_by_paper = {}
            for question in all_questions_result.data:
                paper_id = question['paper_id']
                if paper_id not in questions_by_paper:
                    questions_by_paper[paper_id] = []
                questions_by_paper[paper_id].append(question)
            
            print(f"\n📈 Questions by paper:")
            for paper_id, questions in questions_by_paper.items():
                # Get paper info
                paper_info = next((p for p in papers_result.data if p['id'] == paper_id), None)
                paper_name = paper_info['title'] if paper_info else f"Paper {paper_id}"
                print(f"   {paper_name}: {len(questions)} questions")
                
                # Show subject distribution for this paper
                subject_counts = {}
                for question in questions:
                    subject = question.get('subject', 'Unknown')
                    subject_counts[subject] = subject_counts.get(subject, 0) + 1
                
                for subject, count in subject_counts.items():
                    print(f"     {subject}: {count}")
                print("   ---")
        else:
            print("❌ No questions found in database")
        
        # Check if there are other JEE papers
        print(f"\n🔍 Looking for other JEE papers:")
        jee_papers = supabase.table('papers').select('*').ilike('exam', '%JEE%').execute()
        
        if jee_papers.data:
            for paper in jee_papers.data:
                print(f"   {paper['exam']} {paper['year']}: {paper['title']}")
                # Count questions for this paper
                paper_questions = supabase.table('questions').select('*').eq('paper_id', paper['id']).execute()
                print(f"     Questions: {len(paper_questions.data) if paper_questions.data else 0}")
        else:
            print("   No other JEE papers found")
            
    except Exception as e:
        print(f"❌ Error checking all papers: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    check_all_papers()
