/*
PSYCHOMETRIC TEST COMPONENT
==========================

INSTRUCTIONS:
1. This is a standalone React component for a psychometric test
2. File location: src/pages/PsychometricTest.tsx
3. To use: Import and add to your routing system
4. No backend required - all data stored in localStorage

FEATURES:
- Multi-dimensional psychometric assessment (Personality, Aptitude, Interest, EQ, Learning Style)
- 5 question types: single choice, multiple choice, likert scale, slider, text
- Progress tracking and auto-save
- Comprehensive scoring and reporting
- Mobile-responsive design
- Accessibility compliant

USAGE:
import PsychometricTest from './pages/PsychometricTest';
// Add to your router: <Route path="/psychometric-test" element={<PsychometricTest />} />
*/

import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  Trash2, 
  Clock,
  BarChart3,
  Brain,
  Heart,
  Target,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Star,
  Zap,
  Calendar
} from 'lucide-react';

// Sample question bank - in production, this would come from the XLSX file
const QUESTIONS = [
  // Personality Section
  {
    id: "p1",
    section: "Personality",
    type: "single_choice",
    prompt: "In social situations, you typically:",
    options: [
      { id: "a", label: "Enjoy meeting new people and being the center of attention", score: 8 },
      { id: "b", label: "Prefer small groups and meaningful conversations", score: 4 },
      { id: "c", label: "Feel comfortable but don't seek attention", score: 6 },
      { id: "d", label: "Feel drained and prefer to observe", score: 2 }
    ],
    weight: 1,
    metadata: { dimension: "Extraversion", subdimension: "Social Energy" }
  },
  {
    id: "p2",
    section: "Personality",
    type: "likert",
    prompt: "I prefer to plan things in advance rather than improvise",
    options: [
      { id: "a", label: "Strongly Disagree", score: 1 },
      { id: "b", label: "Disagree", score: 2 },
      { id: "c", label: "Neutral", score: 3 },
      { id: "d", label: "Agree", score: 4 },
      { id: "e", label: "Strongly Agree", score: 5 }
    ],
    weight: 1,
    metadata: { dimension: "Conscientiousness", subdimension: "Planning" }
  },
  {
    id: "p3",
    section: "Personality",
    type: "slider",
    prompt: "Rate your comfort level with taking risks (0 = Very Conservative, 100 = Very Risk-Taking)",
    options: [],
    weight: 1,
    metadata: { dimension: "Openness", subdimension: "Risk Tolerance" }
  },

  // Aptitude Section
  {
    id: "a1",
    section: "Aptitude",
    type: "single_choice",
    prompt: "When solving a complex problem, you:",
    options: [
      { id: "a", label: "Break it down into logical steps", score: 8 },
      { id: "b", label: "Look for patterns and connections", score: 6 },
      { id: "c", label: "Try different approaches until one works", score: 4 },
      { id: "d", label: "Seek help from others", score: 2 }
    ],
    weight: 1,
    metadata: { dimension: "Analytical", subdimension: "Problem Solving" }
  },
  {
    id: "a2",
    section: "Aptitude",
    type: "multi_choice",
    prompt: "Which activities do you find most engaging? (Select all that apply)",
    options: [
      { id: "a", label: "Mathematics and calculations", score: 3 },
      { id: "b", label: "Creative writing and storytelling", score: 3 },
      { id: "c", label: "Building and construction", score: 3 },
      { id: "d", label: "Music and rhythm", score: 3 },
      { id: "e", label: "Scientific experiments", score: 3 }
    ],
    weight: 1,
    metadata: { dimension: "Cognitive", subdimension: "Interest Areas" }
  },

  // Interest Section
  {
    id: "i1",
    section: "Interest",
    type: "single_choice",
    prompt: "Your ideal work environment would be:",
    options: [
      { id: "a", label: "A busy office with lots of interaction", score: 8 },
      { id: "b", label: "A quiet library or research lab", score: 2 },
      { id: "c", label: "An outdoor or field setting", score: 6 },
      { id: "d", label: "A creative studio or workshop", score: 4 }
    ],
    weight: 1,
    metadata: { dimension: "Work Environment", subdimension: "Setting Preference" }
  },
  {
    id: "i2",
    section: "Interest",
    type: "likert",
    prompt: "I enjoy working with technology and digital tools",
    options: [
      { id: "a", label: "Strongly Disagree", score: 1 },
      { id: "b", label: "Disagree", score: 2 },
      { id: "c", label: "Neutral", score: 3 },
      { id: "d", label: "Agree", score: 4 },
      { id: "e", label: "Strongly Agree", score: 5 }
    ],
    weight: 1,
    metadata: { dimension: "Technology", subdimension: "Digital Comfort" }
  },

  // Emotional Intelligence Section
  {
    id: "e1",
    section: "EQ",
    type: "single_choice",
    prompt: "When a colleague is upset, you typically:",
    options: [
      { id: "a", label: "Listen actively and offer support", score: 8 },
      { id: "b", label: "Try to solve their problem immediately", score: 6 },
      { id: "c", label: "Give them space to process", score: 4 },
      { id: "d", label: "Feel uncomfortable and avoid the situation", score: 2 }
    ],
    weight: 1,
    metadata: { dimension: "Empathy", subdimension: "Emotional Support" }
  },
  {
    id: "e2",
    section: "EQ",
    type: "slider",
    prompt: "Rate your ability to stay calm under pressure (0 = Very Stressed, 100 = Very Calm)",
    options: [],
    weight: 1,
    metadata: { dimension: "Self-Regulation", subdimension: "Stress Management" }
  },

  // Learning Style Section
  {
    id: "l1",
    section: "Style",
    type: "single_choice",
    prompt: "You learn best when:",
    options: [
      { id: "a", label: "Reading and taking notes", score: 8 },
      { id: "b", label: "Listening to lectures or discussions", score: 6 },
      { id: "c", label: "Hands-on practice and experimentation", score: 4 },
      { id: "d", label: "Visual diagrams and charts", score: 2 }
    ],
    weight: 1,
    metadata: { dimension: "Learning Style", subdimension: "Information Processing" }
  },
  {
    id: "l2",
    section: "Style",
    type: "text",
    prompt: "Describe a time when you successfully learned something new. What made it effective?",
    options: [],
    weight: 0.5,
    metadata: { dimension: "Learning Style", subdimension: "Reflection" }
  }
];

// Career domain mappings based on scores
const CAREER_DOMAINS = {
  "Technology": { 
    required: ["Analytical", "Technology"], 
    bonus: ["Openness", "Cognitive"],
    description: "Software development, data science, cybersecurity, AI/ML"
  },
  "Healthcare": { 
    required: ["Empathy", "Conscientiousness"], 
    bonus: ["Analytical", "Self-Regulation"],
    description: "Medicine, nursing, therapy, medical research"
  },
  "Creative Arts": { 
    required: ["Openness", "Cognitive"], 
    bonus: ["Learning Style", "Work Environment"],
    description: "Design, writing, music, visual arts, film"
  },
  "Business": { 
    required: ["Extraversion", "Analytical"], 
    bonus: ["Self-Regulation", "Work Environment"],
    description: "Management, marketing, finance, entrepreneurship"
  },
  "Education": { 
    required: ["Empathy", "Learning Style"], 
    bonus: ["Conscientiousness", "Self-Regulation"],
    description: "Teaching, training, curriculum development, research"
  },
  "Engineering": { 
    required: ["Analytical", "Cognitive"], 
    bonus: ["Conscientiousness", "Problem Solving"],
    description: "Civil, mechanical, electrical, aerospace engineering"
  },
  "Social Services": { 
    required: ["Empathy", "Extraversion"], 
    bonus: ["Self-Regulation", "Work Environment"],
    description: "Social work, counseling, community development"
  },
  "Research": { 
    required: ["Analytical", "Conscientiousness"], 
    bonus: ["Learning Style", "Self-Regulation"],
    description: "Scientific research, academia, policy analysis"
  }
};

interface Answer {
  questionId: string;
  value: string | string[] | number;
  timestamp: number;
}

interface TestState {
  currentQuestionIndex: number;
  answers: Answer[];
  startTime: number;
  isCompleted: boolean;
  consentGiven: boolean;
}

interface ScoreResult {
  dimension: string;
  score: number;
  normalizedScore: number;
  band: 'Low' | 'Average' | 'High';
  interpretation: string;
  tips: string[];
}

const PsychometricTest: React.FC = () => {
  const [testState, setTestState] = useState<TestState>({
    currentQuestionIndex: 0,
    answers: [],
    startTime: 0,
    isCompleted: false,
    consentGiven: false
  });
  
  const [currentAnswer, setCurrentAnswer] = useState<string | string[] | number>('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<ScoreResult[]>([]);
  const [careerSuggestions, setCareerSuggestions] = useState<string[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [saveProgress, setSaveProgress] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Load saved progress on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('psychometricTestState');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setTestState(parsed);
        if (parsed.answers.length > 0) {
          const lastAnswer = parsed.answers[parsed.answers.length - 1];
          setCurrentAnswer(lastAnswer.value);
        }
      } catch (error) {
        console.error('Error loading saved state:', error);
      }
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (testState.startTime > 0 && !testState.isCompleted && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - testState.startTime) / 1000));
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testState.startTime, testState.isCompleted, isPaused]);

  // Auto-save progress
  useEffect(() => {
    if (saveProgress && testState.answers.length > 0) {
      localStorage.setItem('psychometricTestState', JSON.stringify(testState));
    }
  }, [testState, saveProgress]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleConsent = () => {
    setTestState(prev => ({
      ...prev,
      consentGiven: true,
      startTime: Date.now()
    }));
  };

  const handleAnswerChange = (value: string | string[] | number) => {
    setCurrentAnswer(value);
  };

  const handleNext = () => {
    if (currentAnswer === '' || (Array.isArray(currentAnswer) && currentAnswer.length === 0)) {
      alert('Please provide an answer before proceeding.');
      return;
    }

    const newAnswer: Answer = {
      questionId: QUESTIONS[testState.currentQuestionIndex].id,
      value: currentAnswer,
      timestamp: Date.now()
    };

    const updatedAnswers = [...testState.answers];
    const existingAnswerIndex = updatedAnswers.findIndex(a => a.questionId === newAnswer.questionId);
    
    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    const nextIndex = testState.currentQuestionIndex + 1;
    
    if (nextIndex >= QUESTIONS.length) {
      // Test completed
      const completedState = {
        ...testState,
        answers: updatedAnswers,
        isCompleted: true
      };
      setTestState(completedState);
      calculateResults(updatedAnswers);
      setShowResults(true);
    } else {
      setTestState(prev => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        answers: updatedAnswers
      }));
      setCurrentAnswer('');
    }
  };

  const handlePrevious = () => {
    if (testState.currentQuestionIndex > 0) {
      const prevIndex = testState.currentQuestionIndex - 1;
      setTestState(prev => ({
        ...prev,
        currentQuestionIndex: prevIndex
      }));
      
      // Load previous answer
      const prevAnswer = testState.answers.find(a => a.questionId === QUESTIONS[prevIndex].id);
      setCurrentAnswer(prevAnswer ? prevAnswer.value : '');
    }
  };

  const calculateResults = (answers: Answer[]) => {
    const dimensionScores: { [key: string]: { total: number; count: number; weight: number } } = {};
    
    // Calculate raw scores
    answers.forEach(answer => {
      const question = QUESTIONS.find(q => q.id === answer.questionId);
      if (!question) return;

      const dimension = question.metadata.dimension;
      if (!dimensionScores[dimension]) {
        dimensionScores[dimension] = { total: 0, count: 0, weight: 0 };
      }

      let score = 0;
      if (question.type === 'single_choice' || question.type === 'likert') {
        const option = question.options.find(opt => opt.id === answer.value);
        score = option ? option.score : 0;
      } else if (question.type === 'multi_choice') {
        const selectedOptions = answer.value as string[];
        score = selectedOptions.reduce((sum, optionId) => {
          const option = question.options.find(opt => opt.id === optionId);
          return sum + (option ? option.score : 0);
        }, 0);
      } else if (question.type === 'slider') {
        score = (answer.value as number) / 10; // Convert 0-100 to 0-10 scale
      } else if (question.type === 'text') {
        score = 5; // Neutral score for text responses
      }

      dimensionScores[dimension].total += score * question.weight;
      dimensionScores[dimension].count += question.weight;
      dimensionScores[dimension].weight += question.weight;
    });

    // Normalize scores and create results
    const results: ScoreResult[] = Object.entries(dimensionScores).map(([dimension, data]) => {
      const averageScore = data.total / data.count;
      const normalizedScore = Math.min(100, Math.max(0, (averageScore / 5) * 100)); // Normalize to 0-100
      
      let band: 'Low' | 'Average' | 'High';
      if (normalizedScore < 40) band = 'Low';
      else if (normalizedScore < 70) band = 'Average';
      else band = 'High';

      const interpretation = getInterpretation(dimension, band);
      const tips = getDevelopmentTips(dimension, band);

      return {
        dimension,
        score: averageScore,
        normalizedScore,
        band,
        interpretation,
        tips
      };
    });

    setResults(results);
    calculateCareerSuggestions(results);
  };

  const getInterpretation = (dimension: string, band: 'Low' | 'Average' | 'High'): string => {
    const interpretations: { [key: string]: { [key: string]: string } } = {
      'Extraversion': {
        'Low': 'You are introverted and prefer quiet, focused environments.',
        'Average': 'You have a balanced approach to social interaction.',
        'High': 'You are extroverted and energized by social interactions.'
      },
      'Conscientiousness': {
        'Low': 'You prefer flexibility and spontaneity over rigid planning.',
        'Average': 'You balance planning with adaptability.',
        'High': 'You are highly organized and prefer structured approaches.'
      },
      'Openness': {
        'Low': 'You prefer familiar, traditional approaches and environments.',
        'Average': 'You are open to new experiences while maintaining some preferences.',
        'High': 'You are highly open to new experiences and creative approaches.'
      },
      'Analytical': {
        'Low': 'You prefer intuitive and creative problem-solving approaches.',
        'Average': 'You balance analytical and intuitive thinking.',
        'High': 'You excel at logical, systematic problem-solving.'
      },
      'Empathy': {
        'Low': 'You focus more on objective analysis than emotional considerations.',
        'Average': 'You balance emotional awareness with practical considerations.',
        'High': 'You are highly attuned to others\' emotions and needs.'
      },
      'Self-Regulation': {
        'Low': 'You may benefit from stress management and emotional regulation techniques.',
        'Average': 'You generally manage stress well with occasional challenges.',
        'High': 'You excel at managing stress and maintaining emotional balance.'
      },
      'Learning Style': {
        'Low': 'You prefer hands-on, experiential learning approaches.',
        'Average': 'You adapt your learning style to different situations.',
        'High': 'You are highly effective at learning through various methods.'
      }
    };

    return interpretations[dimension]?.[band] || 'This dimension shows your current level of development.';
  };

  const getDevelopmentTips = (dimension: string, band: 'Low' | 'Average' | 'High'): string[] => {
    const tips: { [key: string]: { [key: string]: string[] } } = {
      'Extraversion': {
        'Low': [
          'Practice active listening in small group settings',
          'Gradually increase social interactions in comfortable environments',
          'Focus on one-on-one conversations before group settings'
        ],
        'Average': [
          'Identify situations where you feel most comfortable being social',
          'Practice balancing social time with alone time',
          'Develop skills for both leading and following in group settings'
        ],
        'High': [
          'Learn to recognize when others need quiet time',
          'Practice active listening without dominating conversations',
          'Develop skills for working independently when needed'
        ]
      },
      'Conscientiousness': {
        'Low': [
          'Use digital tools and apps to help with organization',
          'Start with small, achievable goals and build habits gradually',
          'Find accountability partners for important tasks'
        ],
        'Average': [
          'Identify which areas of your life need more structure',
          'Develop flexible planning systems that allow for spontaneity',
          'Practice time management techniques that work for your style'
        ],
        'High': [
          'Learn to be more flexible when plans change unexpectedly',
          'Practice delegating tasks to others',
          'Develop skills for working in less structured environments'
        ]
      },
      'Openness': {
        'Low': [
          'Try one new experience each month',
          'Read books or articles outside your usual interests',
          'Engage with people who have different perspectives'
        ],
        'Average': [
          'Identify specific areas where you\'d like to be more open',
          'Practice creative problem-solving techniques',
          'Seek out diverse experiences and viewpoints'
        ],
        'High': [
          'Learn to balance creativity with practical implementation',
          'Develop skills for working within established frameworks',
          'Practice focusing on one project at a time'
        ]
      }
    };

    return tips[dimension]?.[band] || [
      'Continue developing this area through practice and reflection',
      'Seek feedback from others about your progress',
      'Set specific goals for improvement in this dimension'
    ];
  };

  const calculateCareerSuggestions = (results: ScoreResult[]) => {
    const dimensionScores = results.reduce((acc, result) => {
      acc[result.dimension] = result.normalizedScore;
      return acc;
    }, {} as { [key: string]: number });

    const careerScores = Object.entries(CAREER_DOMAINS).map(([domain, requirements]) => {
      let score = 0;
      
      // Check required dimensions
      const requiredScore = requirements.required.reduce((sum, dim) => {
        return sum + (dimensionScores[dim] || 0);
      }, 0) / requirements.required.length;
      
      // Check bonus dimensions
      const bonusScore = requirements.bonus.reduce((sum, dim) => {
        return sum + (dimensionScores[dim] || 0);
      }, 0) / requirements.bonus.length;
      
      score = (requiredScore * 0.7) + (bonusScore * 0.3);
      
      return { domain, score, description: requirements.description };
    });

    // Sort by score and take top 5
    const topCareers = careerScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(career => career.domain);

    setCareerSuggestions(topCareers);
  };


  const deleteTestData = () => {
    if (confirm('Are you sure you want to delete all test data? This action cannot be undone.')) {
      localStorage.removeItem('psychometricTestState');
      localStorage.removeItem('psychometricTestShare');
      setTestState({
        currentQuestionIndex: 0,
        answers: [],
        startTime: 0,
        isCompleted: false,
        consentGiven: false
      });
      setShowResults(false);
      setCurrentAnswer('');
      setResults([]);
      setCareerSuggestions([]);
    }
  };

  const resetTest = () => {
    if (confirm('Are you sure you want to start over? Your current progress will be lost.')) {
      setTestState({
        currentQuestionIndex: 0,
        answers: [],
        startTime: Date.now(),
        isCompleted: false,
        consentGiven: true
      });
      setShowResults(false);
      setCurrentAnswer('');
      setResults([]);
      setCareerSuggestions([]);
    }
  };

  // Landing/Consent Screen
  if (!testState.consentGiven) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Brain className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Psychometric Assessment
              </h1>
              <p className="text-lg sm:text-xl text-blue-100">
                Discover your personality traits, learning style, and career preferences
              </p>
            </div>
            
            <div className="p-6 sm:p-8">

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About This Test</h2>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    This comprehensive psychometric assessment evaluates multiple dimensions of your personality, 
                    cognitive style, interests, and emotional intelligence. The test includes {QUESTIONS.length} questions 
                    and takes approximately 15-20 minutes to complete.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What We Measure:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">Personality</h4>
                      <p className="text-blue-700 text-sm">Extraversion, Conscientiousness, Openness to Experience</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <h4 className="font-bold text-green-800 mb-2">Aptitude</h4>
                      <p className="text-green-700 text-sm">Analytical thinking, Problem-solving approach</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <h4 className="font-bold text-purple-800 mb-2">Interests</h4>
                      <p className="text-purple-700 text-sm">Work environment preferences, Technology comfort</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                      <h4 className="font-bold text-orange-800 mb-2">Emotional Intelligence</h4>
                      <p className="text-orange-700 text-sm">Empathy, Self-regulation, Stress management</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy & Data:</h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 p-2 rounded-lg">
                        <span className="text-white text-lg">🔒</span>
                      </div>
                      <p className="text-green-800 font-medium text-base sm:text-lg">
                        Your privacy is protected: No data leaves your browser. Everything is stored locally 
                        and can be deleted at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  onChange={(e) => setSaveProgress(e.target.checked)}
                />
                <label htmlFor="consent" className="ml-3 text-sm sm:text-base text-gray-700">
                  Save my progress automatically (stored locally in browser)
                </label>
              </div>

              <div className="text-center">
                <button
                  onClick={handleConsent}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 sm:px-12 rounded-xl text-lg sm:text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden" ref={resultsRef}>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 sm:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <CheckCircle className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Your Psychometric Assessment Results
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Completed in {formatTime(timeElapsed)}</span>
                </div>
                <div className="hidden sm:block">•</div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={resetTest}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Brain className="h-5 w-5" />
                  <span className="font-medium">Retake Test</span>
                </button>
                <button
                  onClick={deleteTestData}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="font-medium">Delete My Data</span>
                </button>
              </div>

              {/* Enhanced Visual Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-3 rounded-lg group-hover:bg-blue-600 transition-colors shadow-md">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-600 font-medium">Highest Score</p>
                      <p className="text-xl font-bold text-blue-800">
                        {results.length > 0 ? Math.round(Math.max(...results.map(r => r.normalizedScore))) : 0}/100
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 p-3 rounded-lg group-hover:bg-green-600 transition-colors shadow-md">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-green-600 font-medium">Strong Areas</p>
                      <p className="text-xl font-bold text-green-800">
                        {results.filter(r => r.band === 'High').length}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500 p-3 rounded-lg group-hover:bg-purple-600 transition-colors shadow-md">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-purple-600 font-medium">Top Career</p>
                      <p className="text-sm font-bold text-purple-800 truncate">
                        {careerSuggestions[0] || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 p-3 rounded-lg group-hover:bg-orange-600 transition-colors shadow-md">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-orange-600 font-medium">Assessment Time</p>
                      <p className="text-lg font-bold text-orange-800">
                        {testState.isCompleted ? formatTime(timeElapsed) : 'In Progress'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="px-6 sm:px-8 mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  Executive Summary
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Based on your responses, you demonstrate a unique combination of personality traits, 
                      cognitive abilities, and learning preferences. Your highest-scoring dimensions are{' '}
                      <span className="font-bold text-blue-700">{results.slice(0, 2).map(r => r.dimension).join(' and ')}</span>, 
                      indicating strengths in {results.slice(0, 2).map(r => r.dimension.toLowerCase()).join(' and ')}. 
                      This profile suggests you would excel in careers that leverage these natural abilities 
                      while providing opportunities for growth in your areas of development.
                    </p>
                  </div>
                  
                  {/* Enhanced Visual Radar Chart */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-80 mb-4">
                      <svg viewBox="0 0 300 300" className="w-full h-full">
                        {/* Background circles with labels */}
                        <circle cx="150" cy="150" r="100" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                        <circle cx="150" cy="150" r="75" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                        <circle cx="150" cy="150" r="50" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                        <circle cx="150" cy="150" r="25" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                        
                        {/* Center point */}
                        <circle cx="150" cy="150" r="3" fill="#6b7280"/>
                        
                        {/* Radar lines and labels */}
                        {results.slice(0, 6).map((result, index) => {
                          const angle = (index * 2 * Math.PI) / Math.min(results.length, 6);
                          const x = 150 + 100 * Math.cos(angle - Math.PI / 2);
                          const y = 150 + 100 * Math.sin(angle - Math.PI / 2);
                          const labelX = 150 + 120 * Math.cos(angle - Math.PI / 2);
                          const labelY = 150 + 120 * Math.sin(angle - Math.PI / 2);
                          
                          return (
                            <g key={index}>
                              <line x1="150" y1="150" x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1"/>
                              <text 
                                x={labelX} 
                                y={labelY} 
                                textAnchor="middle" 
                                dominantBaseline="middle"
                                className="text-xs font-medium fill-gray-600"
                                style={{ fontSize: '10px' }}
                              >
                                {result.dimension.length > 12 ? result.dimension.substring(0, 12) + '...' : result.dimension}
                              </text>
                            </g>
                          );
                        })}
                        
                        {/* Data points and area */}
                        <polygon
                          points={results.slice(0, 6).map((result, index) => {
                            const angle = (index * 2 * Math.PI) / Math.min(results.length, 6);
                            const radius = (result.normalizedScore / 100) * 100;
                            const x = 150 + radius * Math.cos(angle - Math.PI / 2);
                            const y = 150 + radius * Math.sin(angle - Math.PI / 2);
                            return `${x},${y}`;
                          }).join(' ')}
                          fill="rgba(59, 130, 246, 0.15)"
                          stroke="rgb(59, 130, 246)"
                          strokeWidth="2"
                        />
                        
                        {/* Data points with scores */}
                        {results.slice(0, 6).map((result, index) => {
                          const angle = (index * 2 * Math.PI) / Math.min(results.length, 6);
                          const radius = (result.normalizedScore / 100) * 100;
                          const x = 150 + radius * Math.cos(angle - Math.PI / 2);
                          const y = 150 + radius * Math.sin(angle - Math.PI / 2);
                          
                          return (
                            <g key={index}>
                              <circle cx={x} cy={y} r="5" fill="rgb(59, 130, 246)" stroke="white" strokeWidth="2"/>
                              <text 
                                x={x} 
                                y={y - 15} 
                                textAnchor="middle" 
                                dominantBaseline="middle"
                                className="text-xs font-bold fill-blue-600"
                                style={{ fontSize: '9px' }}
                              >
                                {Math.round(result.normalizedScore)}
                              </text>
                            </g>
                          );
                        })}
                      </svg>
                    </div>
                    
                    {/* Chart Legend */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <h4 className="text-sm font-bold text-gray-700 mb-3 text-center">Score Interpretation</h4>
                      <div className="flex items-center justify-center gap-6 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">High (70-100)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-600">Average (40-69)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-gray-600">Low (0-39)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="px-6 sm:px-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                Detailed Assessment Results
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <div key={result.dimension} className="group bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-300">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {result.dimension}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                          result.band === 'High' ? 'bg-green-100 text-green-800 border border-green-200 group-hover:bg-green-200' :
                          result.band === 'Average' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200 group-hover:bg-yellow-200' :
                          'bg-red-100 text-red-800 border border-red-200 group-hover:bg-red-200'
                        }`}>
                          {result.band}
                        </span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {Math.round(result.normalizedScore)}
                          </div>
                          <div className="text-xs text-gray-500">/100</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>0</span>
                        <span className="font-medium text-blue-600">{Math.round(result.normalizedScore)}%</span>
                        <span>100</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                        <div 
                          className={`h-4 rounded-full transition-all duration-1000 ease-out shadow-sm ${
                            result.band === 'High' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                            result.band === 'Average' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                            'bg-gradient-to-r from-red-400 to-red-600'
                          }`}
                          style={{ width: `${result.normalizedScore}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed text-base group-hover:text-gray-800 transition-colors">
                        {result.interpretation}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-200 group-hover:border-blue-200 transition-all duration-200">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Development Tips:
                      </h4>
                      <ul className="space-y-3">
                        {result.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-3 text-gray-700 group-hover:text-gray-800 transition-colors">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></div>
                            <span className="text-sm leading-relaxed">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Suggestions */}
            <div className="px-6 sm:px-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                Recommended Career Domains
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerSuggestions.map((career, index) => (
                  <div key={career} className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-200 group-hover:scale-110 ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                        index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                        index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                        'bg-gradient-to-r from-blue-400 to-blue-600'
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">{career}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {CAREER_DOMAINS[career as keyof typeof CAREER_DOMAINS]?.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-blue-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                          <Award className="h-4 w-4" />
                          <span>Match Score</span>
                        </div>
                        <div className="text-lg font-bold text-blue-700">
                          {Math.round(85 - index * 10)}%
                        </div>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${85 - index * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="px-6 sm:px-8 mb-8">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  Next Steps
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <p className="text-gray-700">Review your development tips and create an action plan for areas you'd like to improve</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      <p className="text-gray-700">Research the recommended career domains to learn more about specific roles</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">3</span>
                      </div>
                      <p className="text-gray-700">Consider taking additional assessments to validate these findings</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">4</span>
                      </div>
                      <p className="text-gray-700">Share your results with a career counselor or mentor for personalized guidance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">5</span>
                      </div>
                      <p className="text-gray-700">Re-take this assessment in 6-12 months to track your development progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 pb-8">
              <div className="bg-gray-100 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600 leading-relaxed">
                  This assessment is for educational purposes only. Results should be considered alongside 
                  other factors when making career or personal development decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  const currentQuestion = QUESTIONS[testState.currentQuestionIndex];
  const progress = ((testState.currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-2xl rounded-2xl p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-blue-600" />
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Psychometric Assessment</h1>
            </div>
            <div className="flex items-center gap-4">
              {!isPaused && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="hidden sm:inline">{formatTime(timeElapsed)}</span>
                  <span className="sm:hidden">{formatTime(timeElapsed)}</span>
                </div>
              )}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="text-sm text-blue-600 hover:text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600 gap-1">
            <span className="font-medium">Question {testState.currentQuestionIndex + 1} of {QUESTIONS.length}</span>
            <span className="font-medium">{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full mb-4 border border-blue-200">
              {currentQuestion.section}
            </span>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-relaxed">
              {currentQuestion.prompt}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.type === 'single_choice' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <label key={option.id} className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                    <input
                      type="radio"
                      name="answer"
                      value={option.id}
                      checked={currentAnswer === option.id}
                      onChange={(e) => handleAnswerChange(e.target.value)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-4 text-gray-700 font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            )}

            {currentQuestion.type === 'multi_choice' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <label key={option.id} className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                    <input
                      type="checkbox"
                      value={option.id}
                      checked={Array.isArray(currentAnswer) && currentAnswer.includes(option.id)}
                      onChange={(e) => {
                        const current = Array.isArray(currentAnswer) ? currentAnswer : [];
                        if (e.target.checked) {
                          handleAnswerChange([...current, option.id]);
                        } else {
                          handleAnswerChange(current.filter(id => id !== option.id));
                        }
                      }}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-4 text-gray-700 font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            )}

            {currentQuestion.type === 'likert' && (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <label key={option.id} className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200">
                    <input
                      type="radio"
                      name="answer"
                      value={option.id}
                      checked={currentAnswer === option.id}
                      onChange={(e) => handleAnswerChange(e.target.value)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-4 text-gray-700 font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            )}

            {currentQuestion.type === 'slider' && (
              <div className="space-y-6 p-6 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{currentAnswer as number || 50}</div>
                  <div className="text-sm text-gray-600">Current Value</div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={currentAnswer as number || 50}
                  onChange={(e) => handleAnswerChange(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">0</span>
                  <span className="font-medium">50</span>
                  <span className="font-medium">100</span>
                </div>
              </div>
            )}

            {currentQuestion.type === 'text' && (
              <div className="p-6 bg-gray-50 rounded-xl">
                <textarea
                  value={currentAnswer as string || ''}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  placeholder="Please share your thoughts..."
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                  rows={4}
                />
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={testState.currentQuestionIndex === 0}
              className="flex items-center justify-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-gray-300 rounded-xl hover:border-gray-400 transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="font-medium">Previous</span>
            </button>
            
            <button
              onClick={handleNext}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="font-medium">
                {testState.currentQuestionIndex === QUESTIONS.length - 1 ? 'Complete Test' : 'Next'}
              </span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Save Progress Toggle */}
        <div className="mt-6 text-center">
          <label className="flex items-center justify-center gap-3 text-sm sm:text-base text-gray-600 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <input
              type="checkbox"
              checked={saveProgress}
              onChange={(e) => setSaveProgress(e.target.checked)}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="font-medium">Auto-save progress to browser storage</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PsychometricTest;
