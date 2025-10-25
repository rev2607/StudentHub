#!/usr/bin/env python3
"""
Script to add the remaining 50 questions to reach 75 total
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

class AddRemainingQuestions:
    def __init__(self):
        self.supabase = get_supabase_client()
        if not self.supabase:
            raise Exception("Supabase client not available. Please check your .env file.")
        
        print("✅ Supabase client initialized successfully")
    
    def get_remaining_questions(self):
        """Get the remaining 50 questions (26-75)"""
        questions = []
        
        # Questions 26-75 (you need to add the actual question content here)
        for i in range(26, 76):
            # Determine subject based on question number
            if i <= 50:  # Questions 26-50: Physics
                subject = 'Physics'
                topic = 'Physics Topic'
            else:  # Questions 51-75: Chemistry
                subject = 'Chemistry'
                topic = 'Chemistry Topic'
            
            # TEMPLATE - Replace with actual questions
            questions.append({
                'qnum': i,
                'subject': subject,
                'topic': topic,
                'question_text': f'Question {i}: [REPLACE WITH ACTUAL JEE 2025 QUESTION {i} CONTENT]',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '[REPLACE WITH ACTUAL OPTION A]'},
                    {'choice_label': 'B', 'choice_text': '[REPLACE WITH ACTUAL OPTION B]'},
                    {'choice_label': 'C', 'choice_text': '[REPLACE WITH ACTUAL OPTION C]'},
                    {'choice_label': 'D', 'choice_text': '[REPLACE WITH ACTUAL OPTION D]'}
                ],
                'correct_answer': 'A'  # Replace with actual correct answer
            })
        
        return questions
    
    def add_remaining_questions(self):
        """Add the remaining questions to the database"""
        try:
            print("🔧 Adding remaining questions to reach 75 total...")
            
            # Get paper ID
            paper_result = self.supabase.table('papers').select('id').eq('exam', 'JEE Mains').eq('year', 2025).execute()
            
            if not paper_result.data:
                print("❌ JEE Mains 2025 paper not found")
                return False
            
            paper_id = paper_result.data[0]['id']
            print(f"📄 Found paper ID: {paper_id}")
            
            # Get current question count
            current_questions = self.supabase.table('questions').select('*').eq('paper_id', paper_id).execute()
            current_count = len(current_questions.data)
            print(f"📊 Current questions: {current_count}")
            
            # Get remaining questions
            remaining_questions = self.get_remaining_questions()
            print(f"📊 Will add {len(remaining_questions)} more questions")
            
            # Add questions
            added_count = 0
            for question_data in remaining_questions:
                try:
                    # Insert question
                    question_result = self.supabase.table('questions').insert({
                        'paper_id': paper_id,
                        'qnum': question_data['qnum'],
                        'type': 'single',
                        'subject': question_data['subject'],
                        'topic': question_data['topic'],
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
                        
                        added_count += 1
                        print(f"✅ Added question {question_data['qnum']} ({question_data['subject']})")
                    else:
                        print(f"❌ Failed to add question {question_data['qnum']}")
                        
                except Exception as e:
                    print(f"❌ Error adding question {question_data['qnum']}: {str(e)}")
            
            # Update paper record
            total_questions = current_count + added_count
            self.supabase.table('papers').update({'total_questions': total_questions}).eq('id', paper_id).execute()
            
            print(f"🎉 Successfully added {added_count} questions!")
            print(f"📊 Total questions now: {total_questions}")
            print("⚠️  NOTE: These are template questions. You need to replace them with actual JEE 2025 content.")
            
            return True
            
        except Exception as e:
            print(f"❌ Error adding remaining questions: {str(e)}")
            import traceback
            traceback.print_exc()
            return False

if __name__ == "__main__":
    injector = AddRemainingQuestions()
    injector.add_remaining_questions()
