#!/usr/bin/env python3
"""
Script to update existing JEE Main 2025 questions in Supabase database
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

class QuestionUpdater:
    def __init__(self):
        self.supabase = get_supabase_client()
        if not self.supabase:
            # Try to create client with available credentials
            try:
                from supabase import create_client, Client
                supabase_url = os.getenv("VITE_SUPABASE_URL") or os.getenv("SUPABASE_URL")
                supabase_key = os.getenv("VITE_SUPABASE_ANON_KEY") or os.getenv("SUPABASE_SERVICE_ROLE_KEY")
                
                if supabase_url and supabase_key:
                    self.supabase = create_client(supabase_url, supabase_key)
                    print("✅ Created Supabase client with available credentials")
                else:
                    raise Exception("No Supabase credentials found")
            except Exception as e:
                raise Exception(f"Supabase client not available: {str(e)}")
    
    def get_real_questions(self):
        """Get the real JEE Main 2025 questions"""
        return [
            {
                'qnum': 1,
                'type': 'single',
                'subject': 'Mathematics',
                'topic': 'Algebra',
                'question_text': 'Let α, β, γ, and δ be the coefficients of x⁷, x⁵, x³ and x respectively in the expansion of (1 + x)¹⁰, x > 1. If u and v satisfy the equations u + v = 18, u + v = 20, then u + v equals:',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '5'},
                    {'choice_label': 'B', 'choice_text': '4'},
                    {'choice_label': 'C', 'choice_text': '3'},
                    {'choice_label': 'D', 'choice_text': '8'}
                ],
                'correct_answer': 'A'
            },
            {
                'qnum': 2,
                'type': 'single',
                'subject': 'Mathematics',
                'topic': 'Permutations and Combinations',
                'question_text': 'In a group of 3 girls and 4 boys, there are two boys B₁ and B₂. The number of ways, in which these girls and boys can stand in a queue such that all the girls stand together, all the boys stand together, but B₁ and B₂ are not adjacent to each other, is:',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '144'},
                    {'choice_label': 'B', 'choice_text': '72'},
                    {'choice_label': 'C', 'choice_text': '96'},
                    {'choice_label': 'D', 'choice_text': '120'}
                ],
                'correct_answer': 'A'
            },
            {
                'qnum': 3,
                'type': 'single',
                'subject': 'Mathematics',
                'topic': 'Coordinate Geometry',
                'question_text': 'Let P be a point on the parabola y² = 4ax and PQ be a focal chord of the parabola. If M and N are the foot of perpendiculars drawn from P and Q respectively on the directrix of the parabola, then the area of the quadrilateral PQMN is equal to:',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '2a²'},
                    {'choice_label': 'B', 'choice_text': '4a²'},
                    {'choice_label': 'C', 'choice_text': '8a²'},
                    {'choice_label': 'D', 'choice_text': '16a²'}
                ],
                'correct_answer': 'C'
            },
            {
                'qnum': 4,
                'type': 'single',
                'subject': 'Mathematics',
                'topic': 'Matrices',
                'question_text': 'For a 3 × 3 matrix M, let trace (M) denote the sum of all the diagonal elements of M. Let A be a 3 × 3 matrix such that |A| = 8 and trace (A) = 3. If B = adj (adj(2A)), then the value of |B| + trace(B) equals:',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '56'},
                    {'choice_label': 'B', 'choice_text': '132'},
                    {'choice_label': 'C', 'choice_text': '174'},
                    {'choice_label': 'D', 'choice_text': '280'}
                ],
                'correct_answer': 'D'
            },
            {
                'qnum': 5,
                'type': 'single',
                'subject': 'Mathematics',
                'topic': 'Sequences and Series',
                'question_text': 'Suppose that the number of terms in an A.P. is 2k, k ∈ N. If the sum of all odd terms of the A.P. is 40, the sum of all even terms is 55 and the last term of the A.P. exceeds the first term by 27, then k is equal to',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '5'},
                    {'choice_label': 'B', 'choice_text': '8'},
                    {'choice_label': 'C', 'choice_text': '6'},
                    {'choice_label': 'D', 'choice_text': '4'}
                ],
                'correct_answer': 'A'
            },
            {
                'qnum': 6,
                'type': 'single',
                'subject': 'Physics',
                'topic': 'Optics',
                'question_text': 'A symmetric thin biconvex lens is cut into four equal parts by two planes AB and CD as shown in figure. If the power of original lens is 4D then the power of a part of the divided lens is',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '8D'},
                    {'choice_label': 'B', 'choice_text': '4D'},
                    {'choice_label': 'C', 'choice_text': '2D'},
                    {'choice_label': 'D', 'choice_text': '1D'}
                ],
                'correct_answer': 'D'
            },
            {
                'qnum': 7,
                'type': 'single',
                'subject': 'Physics',
                'topic': 'Fluid Mechanics',
                'question_text': 'A small rigid spherical ball of mass M is dropped in a long vertical tube containing glycerine. The velocity of the ball becomes constant after some time. If the density of glycerine is half of the density of the ball, then the viscous force acting on the ball will be:',
                'choices': [
                    {'choice_label': 'A', 'choice_text': 'Mg/2'},
                    {'choice_label': 'B', 'choice_text': 'Mg'},
                    {'choice_label': 'C', 'choice_text': '2Mg'},
                    {'choice_label': 'D', 'choice_text': '3Mg/2'}
                ],
                'correct_answer': 'B'
            },
            {
                'qnum': 8,
                'type': 'single',
                'subject': 'Physics',
                'topic': 'Measurements',
                'question_text': 'The maximum percentage error in the measurement of density of a wire is [Given, mass of wire = (0.60 ± 0.003)g radius of wire = (0.50 ± 0.01)cm length of wire (10.00 ± 0.05)cm]',
                'choices': [
                    {'choice_label': 'A', 'choice_text': '4%'},
                    {'choice_label': 'B', 'choice_text': '5%'},
                    {'choice_label': 'C', 'choice_text': '8%'},
                    {'choice_label': 'D', 'choice_text': '7%'}
                ],
                'correct_answer': 'B'
            },
            {
                'qnum': 9,
                'type': 'single',
                'subject': 'Physics',
                'topic': 'Electromagnetic Induction',
                'question_text': 'A series LCR circuit is connected to an alternating source of emf E. The current amplitude at resonant frequency is I₀. If the value of resistance R becomes twice of its initial value then amplitude of current at resonance will be',
                'choices': [
                    {'choice_label': 'A', 'choice_text': 'I₀'},
                    {'choice_label': 'B', 'choice_text': 'I₀/2'},
                    {'choice_label': 'C', 'choice_text': 'I₀/√2'},
                    {'choice_label': 'D', 'choice_text': '2I₀'}
                ],
                'correct_answer': 'B'
            },
            {
                'qnum': 10,
                'type': 'single',
                'subject': 'Chemistry',
                'topic': 'Chemical Bonding',
                'question_text': 'Arrange the following compounds in increasing order of their dipole moment : HBr, H₂S, NF₃ and CHCl₃',
                'choices': [
                    {'choice_label': 'A', 'choice_text': 'NF₃ < HBr < H₂S < CHCl₃'},
                    {'choice_label': 'B', 'choice_text': 'HBr < H₂S < NF₃ < CHCl₃'},
                    {'choice_label': 'C', 'choice_text': 'H₂S < HBr < NF₃ < CHCl₃'},
                    {'choice_label': 'D', 'choice_text': 'CHCl₃ < NF₃ < HBr < H₂S'}
                ],
                'correct_answer': 'A'
            }
        ]
    
    def update_questions(self):
        """Try to update existing questions in the database"""
        try:
            print("🚀 Starting JEE Main 2025 question update...")
            
            # Get the paper ID for JEE Mains 2025
            paper_result = self.supabase.table('papers').select('id').eq('exam', 'JEE Mains').eq('year', 2025).execute()
            
            if not paper_result.data:
                print("❌ JEE Mains 2025 paper not found")
                return False
            
            paper_id = paper_result.data[0]['id']
            print(f"📄 Found paper ID: {paper_id}")
            
            # Get existing questions
            questions_result = self.supabase.table('questions').select('*').eq('paper_id', paper_id).order('qnum').execute()
            
            if not questions_result.data:
                print("❌ No existing questions found")
                return False
            
            print(f"📊 Found {len(questions_result.data)} existing questions")
            
            # Get real questions data
            real_questions = self.get_real_questions()
            
            # Try to update each question
            updated_count = 0
            for existing_question in questions_result.data:
                question_id = existing_question['id']
                qnum = existing_question['qnum']
                
                # Find corresponding real question
                real_question = None
                for rq in real_questions:
                    if rq['qnum'] == qnum:
                        real_question = rq
                        break
                
                if not real_question:
                    print(f"⚠️ No real question found for question {qnum}")
                    continue
                
                try:
                    # Update the question
                    update_result = self.supabase.table('questions').update({
                        'type': real_question['type'],
                        'subject': real_question['subject'],
                        'topic': real_question['topic'],
                        'question_text': real_question['question_text']
                    }).eq('id', question_id).execute()
                    
                    if update_result.data:
                        print(f"✅ Updated question {qnum} ({real_question['subject']})")
                        
                        # Update choices
                        self.supabase.table('choices').delete().eq('question_id', question_id).execute()
                        
                        for choice in real_question['choices']:
                            self.supabase.table('choices').insert({
                                'question_id': question_id,
                                'choice_label': choice['choice_label'],
                                'choice_text': choice['choice_text']
                            }).execute()
                        
                        # Update answer
                        self.supabase.table('answers').update({
                            'correct_answer': real_question['correct_answer']
                        }).eq('question_id', question_id).execute()
                        
                        updated_count += 1
                    else:
                        print(f"❌ Failed to update question {qnum}: No data returned")
                        
                except Exception as e:
                    print(f"❌ Error updating question {qnum}: {e}")
                    print(f"   Error details: {str(e)}")
                    continue
            
            print(f"🎉 Successfully updated {updated_count} questions!")
            return updated_count > 0
            
        except Exception as e:
            print(f"❌ Update failed: {e}")
            return False

def main():
    updater = QuestionUpdater()
    success = updater.update_questions()
    
    if success:
        print("🎉 JEE Main 2025 questions update completed successfully!")
    else:
        print("❌ JEE Main 2025 questions update failed!")

if __name__ == "__main__":
    main()
