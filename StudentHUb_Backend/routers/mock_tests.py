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
        
        if not questions_result.data:
            # Return empty list if no questions found in database
            return []
        
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
