#!/usr/bin/env python3
"""
Script to inject all 75 JEE Main 2025 questions into Supabase database
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

class AllJEE2025Injector:
    def __init__(self):
        self.supabase = get_supabase_client()
        if not self.supabase:
            raise Exception("Supabase client not available. Please check your .env file.")
        
        print("✅ Supabase client initialized successfully")
    
    def parse_question_data(self):
        """Return all 75 questions as Python dicts (no 'topic')."""
        questions = []
        
        # Read questions from your editor file
        with open('scripts/inject_all_jee_2025_questions.py', 'r') as f:
            content = f.read()
        
        # Extract questions using eval (since they're in Python format)
        try:
            # Find the questions.append calls
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if 'questions.append({' in line:
                    # Extract the complete question dictionary
                    question_lines = [line]
                    brace_count = line.count('{') - line.count('}')
                    
                    j = i + 1
                    while j < len(lines) and brace_count > 0:
                        question_lines.append(lines[j])
                        brace_count += lines[j].count('{') - lines[j].count('}')
                        j += 1
                    
                    # Join and evaluate the question
                    question_code = '\n'.join(question_lines)
                    try:
                        # Extract just the dictionary part
                        dict_start = question_code.find('{')
                        dict_end = question_code.rfind('}') + 1
                        dict_str = question_code[dict_start:dict_end]
                        
                        # Evaluate the dictionary
                        question_dict = eval(dict_str)
                        questions.append(question_dict)
                    except:
                        continue
            
            print(f"📊 Extracted {len(questions)} questions from editor file")
            return questions
            
        except Exception as e:
            print(f"❌ Error parsing questions: {e}")
            return []
    
    def inject_questions(self):
        """Inject all questions into the database"""
        try:
            print("🚀 Starting complete JEE Main 2025 question injection...")
            
            # Get the paper ID for JEE Mains 2025
            paper_result = self.supabase.table('papers').select('id').eq('exam', 'JEE Mains').eq('year', 2025).execute()
            
            if not paper_result.data:
                print("❌ JEE Mains 2025 paper not found")
                return False
            
            paper_id = paper_result.data[0]['id']
            print(f"📄 Found paper ID: {paper_id}")
            
            # Clear existing questions for this paper
            print("🗑️ Clearing existing questions...")
            existing_questions = self.supabase.table('questions').select('id').eq('paper_id', paper_id).execute()
            
            for question in existing_questions.data:
                question_id = question['id']
                # Delete choices and answers first (foreign key constraints)
                self.supabase.table('choices').delete().eq('question_id', question_id).execute()
                self.supabase.table('answers').delete().eq('question_id', question_id).execute()
                # Then delete the question
                self.supabase.table('questions').delete().eq('id', question_id).execute()
            
            print(f"🗑️ Cleared {len(existing_questions.data)} existing questions")
            
            # Get all questions
            questions = self.parse_question_data()
            print(f"📊 Parsed {len(questions)} questions")
            
            # Inject questions
            injected_count = 0
            for question_data in questions:
                try:
                    # Insert question
                    question_result = self.supabase.table('questions').insert({
                        'paper_id': paper_id,
                        'qnum': question_data['qnum'],
                        'type': 'single',
                        'subject': question_data['subject'],
                        'topic': f"Topic {question_data['qnum']}",
                        'question_text': question_data['question_text']
                    }).execute()
                    
                    if question_result.data:
                        question_id = question_result.data[0]['id']
                        
                        # Insert choices
                        for choice in question_data['choices']:
                            self.supabase.table('choices').insert({
                                'question_id': question_id,
                                'choice_label': choice['choice_label'],
                                'choice_text': choice['choice_text']
                            }).execute()
                        
                        # Insert answer
                        self.supabase.table('answers').insert({
                            'question_id': question_id,
                            'correct_answer': question_data['correct_answer']
                        }).execute()
                        
                        print(f"✅ Injected question {question_data['qnum']} ({question_data['subject']})")
                        injected_count += 1
                    else:
                        print(f"❌ Failed to insert question {question_data['qnum']}")
                        
                except Exception as e:
                    print(f"❌ Error injecting question {question_data['qnum']}: {e}")
                    continue
            
            print(f"🎉 Successfully injected {injected_count} questions!")
            return injected_count > 0
            
        except Exception as e:
            print(f"❌ Injection failed: {e}")
            return False

def main():
    injector = AllJEE2025Injector()
    success = injector.inject_questions()
    
    if success:
        print("🎉 Complete JEE Main 2025 questions injection completed successfully!")
    else:
        print("❌ Complete JEE Main 2025 questions injection failed!")

if __name__ == "__main__":
    main()
