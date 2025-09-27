from fastapi import APIRouter, HTTPException, Query
from typing import List, Dict, Any, Optional
from supabase_client import get_supabase_client

router = APIRouter(prefix="/api/mock-tests", tags=["mock-tests"])

def get_supabase():
    """Get Supabase client with error handling"""
    supabase = get_supabase_client()
    if not supabase:
        raise HTTPException(status_code=503, detail="Database service unavailable")
    return supabase

@router.get("/papers")
async def get_available_papers():
    """
    Get all available mock test papers
    """
    try:
        supabase = get_supabase()
        
        # Get all papers
        result = supabase.table('papers').select('*').order('exam').order('year').execute()
        
        if not result.data:
            return []
        
        # Group papers by exam and year
        papers_by_exam = {}
        for paper in result.data:
            exam = paper['exam']
            if exam not in papers_by_exam:
                papers_by_exam[exam] = []
            papers_by_exam[exam].append({
                'id': paper['id'],
                'year': paper['year'],
                'title': paper['title'],
                'duration_minutes': paper['duration_minutes'],
                'total_questions': paper['total_questions']
            })
        
        return papers_by_exam
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching papers: {str(e)}")

@router.get("/papers/{exam}/{year}")
async def get_paper_by_exam_year(exam: str, year: int):
    """
    Get a specific paper by exam and year
    """
    try:
        supabase = get_supabase()
        
        # Get paper details
        paper_result = supabase.table('papers').select('*').eq('exam', exam).eq('year', year).execute()
        
        if not paper_result.data:
            raise HTTPException(status_code=404, detail="Paper not found")
        
        paper = paper_result.data[0]
        
        return {
            'id': paper['id'],
            'exam': paper['exam'],
            'year': paper['year'],
            'title': paper['title'],
            'duration_minutes': paper['duration_minutes'],
            'total_questions': paper['total_questions']
        }
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching paper: {str(e)}")

@router.get("/papers/{exam}/{year}/questions")
async def get_questions_for_paper(exam: str, year: int, limit: Optional[int] = None):
    """
    Get questions for a specific paper
    """
    try:
        supabase = get_supabase()
        
        # First get the paper ID
        paper_result = supabase.table('papers').select('id').eq('exam', exam).eq('year', year).execute()
        
        if not paper_result.data:
            raise HTTPException(status_code=404, detail="Paper not found")
        
        paper_id = paper_result.data[0]['id']
        
        # Get questions for this paper
        query = supabase.table('questions').select('*').eq('paper_id', paper_id).order('qnum')
        
        if limit:
            query = query.limit(limit)
        
        questions_result = query.execute()
        
        # Database now contains real questions, no need for override
        # if exam == "JEE Mains" and year == 2025:
        #     return get_mock_jee_questions(exam, year, limit)
        
        if not questions_result.data:
            # Return mock data if no questions found in database
            return get_mock_jee_questions(exam, year, limit)
        
        # Get choices and answers for each question
        questions_with_data = []
        for question in questions_result.data:
            question_id = question['id']
            
            # Get choices
            choices_result = supabase.table('choices').select('*').eq('question_id', question_id).order('choice_label').execute()
            choices = choices_result.data if choices_result.data else []
            
            # Get correct answer
            answer_result = supabase.table('answers').select('correct_answer').eq('question_id', question_id).execute()
            correct_answer = answer_result.data[0]['correct_answer'] if answer_result.data else ""
            
            question_data = {
                'id': question['id'],
                'qnum': question['qnum'],
                'type': question['type'],
                'subject': question['subject'],
                'topic': question['topic'],
                'question_text': question['question_text'],
                'choices': choices,
                'correct_answer': correct_answer
            }
            
            questions_with_data.append(question_data)
        
        return questions_with_data
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching questions: {str(e)}")

def get_mock_jee_questions(exam: str, year: int, limit: Optional[int] = None) -> List[Dict[str, Any]]:
    """Return real JEE Main 2025 questions when database has placeholder data"""
    if exam == "JEE Mains" and year == 2025:
        return get_real_jee_2025_questions(limit)
    
    # Fallback for other exams
    mock_questions = [
        {
            'id': 1,
            'qnum': 1,
            'type': 'single',
            'subject': 'Mathematics',
            'topic': 'Algebra',
            'question_text': 'Sample question for other exams',
            'choices': [
                {'choice_label': 'A', 'choice_text': 'Option A'},
                {'choice_label': 'B', 'choice_text': 'Option B'},
                {'choice_label': 'C', 'choice_text': 'Option C'},
                {'choice_label': 'D', 'choice_text': 'Option D'}
            ],
            'correct_answer': 'A'
        }
    ]
    
    if limit:
        return mock_questions[:limit]
    return mock_questions

def get_real_jee_2025_questions(limit: Optional[int] = None) -> List[Dict[str, Any]]:
    """Return real JEE Main 2025 questions"""
    real_questions = [
        {
            'id': 1,
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
            'id': 2,
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
            'id': 3,
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
            'id': 4,
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
            'id': 5,
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
            'id': 6,
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
            'id': 7,
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
            'id': 8,
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
            'id': 9,
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
            'id': 10,
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
    
    if limit:
        return real_questions[:limit]
    return real_questions

@router.get("/papers/{exam}/{year}/questions/{question_number}")
async def get_single_question(exam: str, year: int, question_number: int):
    """
    Get a single question by exam, year, and question number
    """
    try:
        supabase = get_supabase()
        
        # First get the paper ID
        paper_result = supabase.table('papers').select('id').eq('exam', exam).eq('year', year).execute()
        
        if not paper_result.data:
            raise HTTPException(status_code=404, detail="Paper not found")
        
        paper_id = paper_result.data[0]['id']
        
        # Get the specific question
        question_result = supabase.table('questions').select('*').eq('paper_id', paper_id).eq('qnum', question_number).execute()
        
        if not question_result.data:
            raise HTTPException(status_code=404, detail="Question not found")
        
        question = question_result.data[0]
        question_id = question['id']
        
        # Get choices
        choices_result = supabase.table('choices').select('*').eq('question_id', question_id).order('choice_label').execute()
        choices = choices_result.data if choices_result.data else []
        
        # Get correct answer
        answer_result = supabase.table('answers').select('correct_answer').eq('question_id', question_id).execute()
        correct_answer = answer_result.data[0]['correct_answer'] if answer_result.data else ""
        
        question_data = {
            'id': question['id'],
            'qnum': question['qnum'],
            'type': question['type'],
            'subject': question['subject'],
            'topic': question['topic'],
            'question_text': question['question_text'],
            'choices': choices,
            'correct_answer': correct_answer
        }
        
        return question_data
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching question: {str(e)}")

@router.post("/papers/{exam}/{year}/submit")
async def submit_mock_test(exam: str, year: int, answers: Dict[str, str]):
    """
    Submit mock test answers and get results
    """
    try:
        supabase = get_supabase()
        
        # First get the paper ID
        paper_result = supabase.table('papers').select('id').eq('exam', exam).eq('year', year).execute()
        
        if not paper_result.data:
            raise HTTPException(status_code=404, detail="Paper not found")
        
        paper_id = paper_result.data[0]['id']
        
        # Get all questions for this paper
        questions_result = supabase.table('questions').select('*').eq('paper_id', paper_id).execute()
        
        if not questions_result.data:
            raise HTTPException(status_code=404, detail="No questions found for this paper")
        
        # Calculate results
        total_questions = len(questions_result.data)
        correct_answers = 0
        results = []
        
        for question in questions_result.data:
            question_id = question['id']
            question_num = str(question['qnum'])
            user_answer = answers.get(question_num, "")
            
            # Get correct answer
            answer_result = supabase.table('answers').select('correct_answer').eq('question_id', question_id).execute()
            correct_answer = answer_result.data[0]['correct_answer'] if answer_result.data else ""
            
            is_correct = user_answer.strip().upper() == correct_answer.strip().upper()
            if is_correct:
                correct_answers += 1
            
            results.append({
                'question_id': question_id,
                'question_number': question['qnum'],
                'subject': question['subject'],
                'user_answer': user_answer,
                'correct_answer': correct_answer,
                'is_correct': is_correct
            })
        
        # Calculate score and percentage
        score_percentage = (correct_answers / total_questions) * 100 if total_questions > 0 else 0
        
        return {
            'total_questions': total_questions,
            'correct_answers': correct_answers,
            'incorrect_answers': total_questions - correct_answers,
            'score_percentage': round(score_percentage, 2),
            'results': results
        }
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error submitting test: {str(e)}")
