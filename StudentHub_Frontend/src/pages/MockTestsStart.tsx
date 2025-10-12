import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase, type Paper, type Question, type Choice, type Answer } from '../lib/supabaseClient';

interface UserAnswer {
  questionId: number;
  answer: string | string[];
}

interface TopicAnalysis {
  topic: string;
  attempted: number;
  correct: number;
  totalQuestions: number;
  percentage: number;
  marks: number;
}

interface TestResult {
  totalScore: number;
  totalMarks: number;
  topicAnalysis: TopicAnalysis[];
  predictedRank: string;
}

const MockTestsStart: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const exam = searchParams.get('exam');
  const year = searchParams.get('year');
  const questionParam = searchParams.get('question');
  
  const [paper, setPaper] = useState<Paper | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(3 * 3600); // 3 hours in seconds
  const [timerActive, setTimerActive] = useState(true);
  
  // Test state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);

  // Initialize current question from URL parameter if available
  useEffect(() => {
    if (questionParam) {
      const questionIndex = parseInt(questionParam, 10);
      if (!isNaN(questionIndex) && questionIndex >= 0) {
        setCurrentQuestion(questionIndex);
      }
    }
  }, [questionParam]);

  // Function to navigate to a specific question with URL update
  const navigateToQuestion = (questionIndex: number) => {
    if (questionIndex >= 0 && questionIndex < questions.length) {
      setCurrentQuestion(questionIndex);
      // Update URL with question parameter
      const params = new URLSearchParams(searchParams);
      params.set('question', questionIndex.toString());
      navigate(`/mock-tests/start?${params.toString()}`, { replace: true });
    }
  };

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
      } finally {
        setAuthChecked(true);
      }
    };

    checkAuth();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Check if authentication is required (after 2nd question)
  useEffect(() => {
    if (authChecked && currentQuestion >= 1 && !isAuthenticated) {
      const currentPath = `/mock-tests/start?exam=${exam}&year=${year}&question=${currentQuestion}`;
      navigate(`/signup?next=${encodeURIComponent(currentPath)}`);
    }
  }, [authChecked, currentQuestion, isAuthenticated, navigate, exam, year]);

  // Fetch paper and questions
  useEffect(() => {
    const fetchData = async () => {
      if (!exam || !year) {
        setError('Missing exam or year parameters');
        setLoading(false);
        return;
      }

      try {
        // Fetch from Supabase directly
        console.log(`Fetching mock test data for ${exam} ${year} from Supabase...`);
        
        // Fetch paper information
        const { data: paperData, error: paperError } = await supabase
          .from('mock_test_papers')
          .select('*')
          .eq('exam_name', exam)
          .eq('year', year)
          .single();

        if (paperError || !paperData) {
          console.error('Paper fetch error:', paperError);
          setError(`No paper found for ${exam} ${year}`);
          setLoading(false);
          return;
        }

        setPaper(paperData);

        // Fetch questions with choices
        const { data: questionsData, error: questionsError } = await supabase
          .from('mock_test_questions')
          .select(`
            *,
            mock_test_choices (*)
          `)
          .eq('paper_id', paperData.id)
          .order('qnum');

        if (questionsError) {
          console.error('Questions fetch error:', questionsError);
          setError('Failed to fetch questions');
          setLoading(false);
          return;
        }

        if (questionsData && questionsData.length > 0) {
          setQuestions(questionsData);
          
          // Extract choices and answers from the Supabase response
          const allChoices = [];
          const allAnswers = [];
          
          questionsData.forEach(question => {
            if (question.mock_test_choices) {
              allChoices.push(...question.mock_test_choices);
            }
            if (question.correct_answer) {
              allAnswers.push({
                question_id: question.id,
                correct_answer: question.correct_answer
              });
            }
          });
          
          setChoices(allChoices);
          setAnswers(allAnswers);
          
          console.log(`Successfully loaded ${questionsData.length} questions for ${exam} ${year}`);
        } else {
          setQuestions([]);
          setChoices([]);
          setAnswers([]);
          setError(`No questions found for ${exam} ${year}`);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('An unexpected error occurred');
        setLoading(false);
      }
    };

    fetchData();
  }, [exam, year]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeLeft]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: number, answer: string | string[]) => {
    setUserAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === questionId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { questionId, answer };
        return updated;
      } else {
        return [...prev, { questionId, answer }];
      }
    });
  };

  const calculateScore = useCallback((): TestResult => {
    let totalScore = 0;
    let totalMarks = 0;
    const topicMap = new Map<string, { attempted: number; correct: number; totalQuestions: number; marks: number }>();

    questions.forEach(question => {
      totalMarks += question.marks;
      const userAnswer = userAnswers.find(a => a.questionId === question.id);
      const correctAnswer = answers.find(a => a.question_id === question.id);
      
      if (!correctAnswer) return;

      let isCorrect = false;
      let score = 0;

      if (question.type === 'single') {
        if (userAnswer && userAnswer.answer === correctAnswer.correct_answer) {
          isCorrect = true;
          score = 4; // +4 for correct
        } else if (userAnswer) {
          score = -1; // -1 for wrong
        }
      } else if (question.type === 'multi') {
        if (userAnswer && Array.isArray(userAnswer.answer)) {
          const userSet = new Set(userAnswer.answer);
          const correctSet = new Set(correctAnswer.correct_answer.split(','));
          
          // Exact match required for multi-correct
          if (userSet.size === correctSet.size && [...userSet].every(val => correctSet.has(val))) {
            isCorrect = true;
            score = 4;
          }
        }
      } else if (question.type === 'numeric') {
        if (userAnswer && typeof userAnswer.answer === 'string') {
          const userNum = parseFloat(userAnswer.answer);
          const correctNum = parseFloat(correctAnswer.correct_answer);
          
          if (!isNaN(userNum) && !isNaN(correctNum) && Math.abs(userNum - correctNum) <= 1e-3) {
            isCorrect = true;
            score = 4;
          }
        }
      }

      totalScore += score;

      // Track topic analysis
      if (!topicMap.has(question.topic)) {
        topicMap.set(question.topic, { attempted: 0, correct: 0, totalQuestions: 0, marks: 0 });
      }
      
      const topicData = topicMap.get(question.topic)!;
      topicData.totalQuestions++;
      topicData.marks += question.marks;
      
      if (userAnswer) {
        topicData.attempted++;
        if (isCorrect) {
          topicData.correct++;
        }
      }
    });

    // Convert to array and calculate percentages
    const topicAnalysis: TopicAnalysis[] = Array.from(topicMap.entries()).map(([topic, data]) => ({
      topic,
      attempted: data.attempted,
      correct: data.correct,
      totalQuestions: data.totalQuestions,
      percentage: data.attempted > 0 ? (data.correct / data.attempted) * 100 : 0,
      marks: data.marks
    }));

    // Predict rank
    let predictedRank: string;
    if (totalScore >= 320) {
      predictedRank = '1–200';
    } else if (totalScore >= 280) {
      predictedRank = '201–1000';
    } else if (totalScore >= 240) {
      predictedRank = '1001–5000';
    } else if (totalScore >= 200) {
      predictedRank = '5001–15000';
    } else {
      predictedRank = '15001+';
    }

    return {
      totalScore,
      totalMarks,
      topicAnalysis,
      predictedRank
    };
  }, [questions, userAnswers, answers]);

  const handleSubmit = () => {
    setTimerActive(false);
    const testResult = calculateScore();
    setResult(testResult);
    setTestCompleted(true);
  };

  const handleRetry = () => {
    setUserAnswers([]);
    setCurrentQuestion(0);
    setTestCompleted(false);
    setResult(null);
    setTimeLeft(3 * 3600);
    setTimerActive(true);
    // Reset URL to remove question parameter
    const params = new URLSearchParams(searchParams);
    params.delete('question');
    navigate(`/mock-tests/start?${params.toString()}`, { replace: true });
  };

  const getTopFocusTopics = (): TopicAnalysis[] => {
    return result?.topicAnalysis
      .filter(topic => topic.attempted > 0)
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3) || [];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading mock test...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/mock-tests')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Mock Tests
          </button>
        </div>
      </div>
    );
  }

  if (testCompleted && result) {
    const topFocusTopics = getTopFocusTopics();
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-green-600 text-6xl mb-4">🎉</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Completed!</h1>
              <p className="text-gray-600">{paper?.title}</p>
            </div>

            {/* Score Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600" data-testid="result-score">
                    {result.totalScore}
                  </div>
                  <div className="text-sm text-gray-600">Total Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">
                    {Math.round((result.totalScore / result.totalMarks) * 100)}%
                  </div>
                  <div className="text-sm text-gray-600">Percentage</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">
                    {result.predictedRank}
                  </div>
                  <div className="text-sm text-gray-600">Predicted Rank</div>
                </div>
              </div>
            </div>

            {/* Topic Analysis */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topic-wise Analysis</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Topic</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Attempted</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Correct</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Percentage</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Total Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.topicAnalysis.map((topic, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{topic.topic}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{topic.attempted}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{topic.correct}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <span className={`font-semibold ${topic.percentage >= 70 ? 'text-green-600' : topic.percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {topic.percentage.toFixed(1)}%
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{topic.totalQuestions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Focus Topics */}
            {topFocusTopics.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Focus Areas for Improvement</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {topFocusTopics.map((topic, index) => (
                    <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h3 className="font-semibold text-red-800">{topic.topic}</h3>
                      <p className="text-red-600 text-sm">{topic.percentage.toFixed(1)}% accuracy</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetry}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
              >
                Retry Test
              </button>
              <button
                onClick={() => navigate('/mock-tests')}
                className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 font-semibold"
              >
                Back to Mock Tests
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const currentChoices = currentQ?.choices || [];
  const userAnswer = userAnswers.find(a => a.questionId === currentQ?.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{paper?.title}</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono font-bold text-red-600">
                {formatTime(timeLeft)}
              </div>
              <div className="text-sm text-gray-600">Time Remaining</div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-2">
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToQuestion(index)}
                className={`w-10 h-10 rounded-full text-sm font-semibold ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : userAnswers.some(a => a.questionId === questions[index].id)
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                data-testid={`question-${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {currentQ && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {currentQ.type.toUpperCase()}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {currentQ.subject}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {currentQ.topic}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Question {currentQ.qnum}: {currentQ.question_text}
              </h2>
            </div>

            <div className="space-y-4">
              {currentQ.type === 'single' && (
                <div className="space-y-3">
                  {currentChoices.map((choice) => (
                    <label key={choice.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${currentQ.id}`}
                        value={choice.choice_label}
                        checked={userAnswer?.answer === choice.choice_label}
                        onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                        className="mr-4"
                      />
                      <span className="font-semibold text-blue-600 mr-2">{choice.choice_label}.</span>
                      <span>{choice.choice_text}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQ.type === 'multi' && (
                <div className="space-y-3">
                  {currentChoices.map((choice) => (
                    <label key={choice.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Array.isArray(userAnswer?.answer) && userAnswer.answer.includes(choice.choice_label)}
                        onChange={(e) => {
                          const currentAnswers = Array.isArray(userAnswer?.answer) ? userAnswer.answer : [];
                          if (e.target.checked) {
                            handleAnswerChange(currentQ.id, [...currentAnswers, choice.choice_label]);
                          } else {
                            handleAnswerChange(currentQ.id, currentAnswers.filter(a => a !== choice.choice_label));
                          }
                        }}
                        className="mr-4"
                      />
                      <span className="font-semibold text-blue-600 mr-2">{choice.choice_label}.</span>
                      <span>{choice.choice_text}</span>
                    </label>
                  ))}
                </div>
              )}

              {currentQ.type === 'numeric' && (
                <div>
                  <input
                    type="number"
                    step="0.01"
                    value={typeof userAnswer?.answer === 'string' ? userAnswer.answer : ''}
                    onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                    placeholder="Enter your answer"
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-sm text-gray-600 mt-2">Round your answer to 2 decimal places</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => navigateToQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-semibold"
            data-testid="submit-btn"
          >
            Submit Now
          </button>
          
          <button
            onClick={() => navigateToQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={currentQuestion === questions.length - 1}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockTestsStart;
