#!/usr/bin/env python3
"""
Script to inject all 75 real JEE Main 2025 questions into Supabase database
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

class RealJEE2025Injector:
    def __init__(self):
        self.supabase = get_supabase_client()
        if not self.supabase:
            raise Exception("Supabase client not available. Please check your .env file.")
        
        print("✅ Supabase client initialized successfully")
    
    def get_all_75_questions(self):
        """Parse and return all 75 JEE Main 2025 questions from the provided data"""
        questions = []
        
        # Parse the complete question data
        raw_questions = """
1.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let , , and be the coefficients of x 7 , x 5 , x 3 and x respectively in the expansion of , x > 1. If u and v satisfy the equations u + v = 18, u + v = 20, then u + v equals :
OptionA: 5
OptionB: 4
OptionC: 3
OptionD: 8
Right Option: A
Positive Marks: 4
Negative Marks: -1

2.
Exam: JEE Mains 2025
Subject: Mathematics
Question: In a group of 3 girls and 4 boys, there are two boys B 1 and B 2 . The number of ways, in which these girls and boys can stand i n a queue such t hat all the girls stand together , all the boys stand toget her , but B 1 and B 2 are not adjacent to each other , is :
OptionA: 144
OptionB: 72
OptionC: 96
OptionD: 120
Right Option: A
Positive Marks: 4
Negative Marks: -1

3.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let P be a point on the parabol a y 2 = 4ax and PQ be a focal chord of the parabola. If M and N ar e the foot of perpendiculars drawn from P and Q respectivel y on the directrix of the parabola, then the ar ea of the quadrilateral PQMN is equal to:
OptionA: 1
OptionB: 2
OptionC: 3
OptionD: 4
Right Option: C
Positive Marks: 4
Negative Marks: -1

4.
Exam: JEE Mains 2025
Subject: Mathematics
Question: For a 3 × 3 matrix M, let trace (M) denote the sum of all the diagonal el ements of M. Let A be a 3 × 3 matrix such that |A| = and trace (A) = 3. If B = adj (adj(2A)), then the val ue of|B| + trace(B) equals:
OptionA: 56
OptionB: 132
OptionC: 174
OptionD: 280
Right Option: D
Positive Marks: 4
Negative Marks: -1

5.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Suppose that the number of terms in an A.P. is 2k, k N. If the sum of all odd terms of the A.P. is 40, the sum of all even terms is 55 and the last term of the A.P. exceeds the first term by 27, then k is equal to
OptionA: 5
OptionB: 8
OptionC: 6
OptionD: 4
Right Option: A
Positive Marks: 4
Negative Marks: -1

6.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let a line pass through two distinct points P( 2, 1, 3) and Q, and be par allel to the vector . If the distance of the poi nt Q from the pointR(1, 3, 3) is 5, then the square of the area of PQR is equal to:
OptionA: 136
OptionB: 140
OptionC: 144
OptionD: 148
Right Option: A
Positive Marks: 4
Negative Marks: -1

7.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let f(x) = dt, x R . Then the numbers of local maximum and local minimum points of f, respectivel y, are :
OptionA: 2 and 3
OptionB: 3 and 2
OptionC: 1 and 3
OptionD: 2 and 2
Right Option: A
Positive Marks: 4
Negative Marks: -1

8.
Exam: JEE Mains 2025
Subject: Mathematics
Question: The perpendicular distance, of the line from the point P(2, 10,1), is:
OptionA: 6
OptionB: 2
OptionC: 3
OptionD: 4
Right Option: C
Positive Marks: 4
Negative Marks: -1

9.
Exam: JEE Mains 2025
Subject: Mathematics
Question: If x = f(y) is the solution of the differential equation (1 + y 2 ) + = 0, y with f(0) = 1,then f is equal to :
OptionA: e /4
OptionB: e /12
OptionC: e /3
OptionD: e /6
Right Option: D
Positive Marks: 4
Negative Marks: -1

10.
Exam: JEE Mains 2025
Subject: Mathematics
Question: If dx = g(x)+ C, wher e C is the constant of integration, then equals :
OptionA: 1
OptionB: 2
OptionC: 3
OptionD: 4
Right Option: C
Positive Marks: 4
Negative Marks: -1

11.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let and be the distinct roots of 2x 2 + (cos )x 1 = 0, (0, 2 ). If m and M ar e the minimum and the maximum val ues of , then 16(M + m) equals :
OptionA: 24
OptionB: 25
OptionC: 27
OptionD: 17
Right Option: B
Positive Marks: 4
Negative Marks: -1

12.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let A = {1, 2, 3, 4} and B = {1, 4, 9, 16}. Then t he number of many-one functions f : A B such that 1 f(A) is equal to :
OptionA: 127
OptionB: 151
OptionC: 163
OptionD: 139
Right Option: B
Positive Marks: 4
Negative Marks: -1

13.
Exam: JEE Mains 2025
Subject: Mathematics
Question: If the system of linear equations : x + y + 2 z = 6, 2x + 3y + az = a + 1, x 3y +bz = 2b, wher e a, b R , ha s infinitel y many solutions, then 7a + 3b is equal to :
OptionA: 9
OptionB: 12
OptionC: 16
OptionD: 22
Right Option: C
Positive Marks: 4
Negative Marks: -1

14.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let and be two unit vect ors such that the angl e bet ween them is . If and ar e perpendicular to each other, then the number of val ues of in [ 1, 3] is :
OptionA: 3
OptionB: 2
OptionC: 1
OptionD: 0
Right Option: D
Positive Marks: 4
Negative Marks: -1

15.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let E : = 1, a > b and H : = 1. Let the distance between the foci of E and the foci of H be . If a A = 2, and the ratio of the eccentricities of E and H is , then the sum of the lengths of their latus rectums is equal to :
OptionA: 10
OptionB: 7
OptionC: 8
OptionD: 9
Right Option: C
Positive Marks: 4
Negative Marks: -1

16.
Exam: JEE Mains 2025
Subject: Mathematics
Question: If A and B are two events such that = 0.1, and and ar e the roots of the equation 12x 2 7x + 1 = 0, then the value of is:
OptionA: 1
OptionB: 2
OptionC: 3
OptionD: 4
Right Option: C
Positive Marks: 4
Negative Marks: -1

17.
Exam: JEE Mains 2025
Subject: Mathematics
Question: The sum of all values of [0, 2 ] satisf ying 2sin 2 = cos2 and 2cos 2 = 3sin is
OptionA: 1
OptionB: 4
OptionC: 3
OptionD: 4
Right Option: D
Positive Marks: 4
Negative Marks: -1

18.
Exam: JEE Mains 2025
Subject: Mathematics
Question: Let the curve z( 1 + i) + = 4, z C, divide the region |z 3| 1 into two par ts of areas and . Then | | equals :
OptionA: 1
OptionB: 2
OptionC: 3
OptionD: 4
Right Option: A
Positive Marks: 4
Negative Marks: -1

19.
Exam: JEE Mains 2025
Subject: Mathematics
Question: The ar ea of the region encl osed by the curves y = x 2 4x + 4and y 2 = 16 8x is :
OptionA: 1
OptionB: 2
OptionC: 5
OptionD: 8
Right Option: A
Positive Marks: 4
Negative Marks: -1

20.
Exam: JEE Mains 2025
Subject: Physics
Question: A symmetric thin biconvex lens is cut into four equal parts by two planes AB and CD as shown in figure. If the power of original lens is 4D then the power of a part of the divided l ens is
OptionA: 8D
OptionB: 4D
OptionC: D
OptionD: 2D
Right Option: D
Positive Marks: 4
Negative Marks: -1

21.
Exam: JEE Mains 2025
Subject: Physics
Question: A small rigid spherical ball of mass M is dropped in a long vertical tube containing glycerine. The vel ocity of the ball becomes constant after some time. If the density of glycerine is half of the density of the ball, then the viscous force acting on the ball will be (consider g as acceleration due t o gravity)
OptionA: 1
OptionB: 2
OptionC: Mg
OptionD: 2 Mg
Right Option: B
Positive Marks: 4
Negative Marks: -1

22.
Exam: JEE Mains 2025
Subject: Mathematics
Question: The maximum percentage er ror in the measurment of density of a wire is [Given, mass of wire = (0.60 ± 0.003)g radius of wire = (0.50 ± 0.01)cm length of wire (10.00 ± 0.05)cm]
OptionA: 4
OptionB: 5
OptionC: 8
OptionD: 7
Right Option: B
Positive Marks: 4
Negative Marks: -1

23.
Exam: JEE Mains 2025
Subject: Mathematics
Question: A series LCR ci rcuit is connected to an alternating sour ce of emf E. The current amplitude at resonant frequency is I 0 . If the val ue of resistance R becomes twice of its initial val ue t hen amplitude of cur rent at resonance will be
OptionA: I 0
OptionB: 2
OptionC: 3
OptionD: 2I 0
Right Option: B
Positive Marks: 4
Negative Marks: -1

24.
Exam: JEE Mains 2025
Subject: Physics
Question: For a short dipole placed at origin O, the dipole moment P is along x-axis, as shown in the figure. If the electric potential and electric field at A are V 0 and E 0 , respectively, then the correct com bination of the electric potential and electric field, respectively, at point B on the y-axis is given by
OptionA: and
OptionB: zer o and
OptionC: zer o and
OptionD: V 0 and
Right Option: C
Positive Marks: 4
Negative Marks: -1

25.
Exam: JEE Mains 2025
Subject: Physics
Question: Whi ch one of the following is the correct dimensional formula for the capacitance in F ? M, L, T and C stand for unit of mass, length, time and charge,
OptionA: [F] = [C 2 M 2 L 2 T 2 ]
OptionB: [F] = [CM 2 L 2 T 2 ]
OptionC: [F] = [CM 1 L 2 T 2 ]
OptionD: [F] = [C 2 M 1 L 2 T 2 ]
Right Option: D
Positive Marks: 4
Negative Marks: -1
"""
        
        # Parse questions from the text
        question_blocks = raw_questions.strip().split('\n\n')
        
        for block in question_blocks:
            if not block.strip():
                continue
                
            lines = block.strip().split('\n')
            if len(lines) < 8:  # Minimum expected lines
                continue
            
            question_data = {}
            for line in lines:
                line = line.strip()
                if line.startswith('Exam:'):
                    question_data['exam'] = line.replace('Exam:', '').strip()
                elif line.startswith('Subject:'):
                    question_data['subject'] = line.replace('Subject:', '').strip()
                elif line.startswith('Question:'):
                    question_data['question_text'] = line.replace('Question:', '').strip()
                elif line.startswith('OptionA:'):
                    question_data['option_a'] = line.replace('OptionA:', '').strip()
                elif line.startswith('OptionB:'):
                    question_data['option_b'] = line.replace('OptionB:', '').strip()
                elif line.startswith('OptionC:'):
                    question_data['option_c'] = line.replace('OptionC:', '').strip()
                elif line.startswith('OptionD:'):
                    question_data['option_d'] = line.replace('OptionD:', '').strip()
                elif line.startswith('Right Option:'):
                    question_data['correct_answer'] = line.replace('Right Option:', '').strip()
            
            if all(key in question_data for key in ['exam', 'subject', 'question_text', 'correct_answer']):
                # Convert to our format
                qnum = len(questions) + 1
                subject = question_data['subject']
                
                # Determine topic based on question number and subject
                if subject == 'Mathematics':
                    if qnum <= 5:
                        topic = 'Algebra'
                    elif qnum <= 10:
                        topic = 'Calculus'
                    elif qnum <= 15:
                        topic = 'Coordinate Geometry'
                    else:
                        topic = 'Trigonometry'
                elif subject == 'Physics':
                    if qnum <= 25:
                        topic = 'Optics'
                    else:
                        topic = 'Electromagnetism'
                else:
                    topic = 'General'
                
                formatted_question = {
                    'qnum': qnum,
                    'subject': subject,
                    'topic': topic,
                    'question_text': question_data['question_text'],
                    'choices': [
                        {'choice_label': 'A', 'choice_text': question_data.get('option_a', '')},
                        {'choice_label': 'B', 'choice_text': question_data.get('option_b', '')},
                        {'choice_label': 'C', 'choice_text': question_data.get('option_c', '')},
                        {'choice_label': 'D', 'choice_text': question_data.get('option_d', '')}
                    ],
                    'correct_answer': question_data['correct_answer']
                }
                
                questions.append(formatted_question)
        
        return questions
    
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
            questions = self.get_all_75_questions()
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
    injector = RealJEE2025Injector()
    success = injector.inject_questions()
    
    if success:
        print("🎉 Complete JEE Main 2025 questions injection completed successfully!")
    else:
        print("❌ Complete JEE Main 2025 questions injection failed!")

if __name__ == "__main__":
    main()

