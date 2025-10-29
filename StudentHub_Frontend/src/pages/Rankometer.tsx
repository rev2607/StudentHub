import React, { useState } from 'react';
import { TrendingUp, BarChart3, Award, Target, X, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Exam {
  id: string;
  name: string;
  description: string;
}

const Rankometer: React.FC = () => {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState<string>('');
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('General');
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const exams: Exam[] = [
    { id: 'jee-main', name: 'JEE Main', description: 'Joint Entrance Examination Main' },
    { id: 'jee-advanced', name: 'JEE Advanced', description: 'Joint Entrance Examination Advanced' },
    { id: 'neet', name: 'NEET', description: 'National Eligibility cum Entrance Test' },
    { id: 'bitsat', name: 'BITSAT', description: 'BITS Admission Test' },
    { id: 'viteee', name: 'VITEEE', description: 'VIT Engineering Entrance Examination' },
    { id: 'srm-jeee', name: 'SRM JEEE', description: 'SRM Joint Engineering Entrance Examination' },
  ];

  const categories = ['General', 'OBC', 'SC', 'ST', 'EWS'];

  const validateInputs = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    if (!selectedExam) {
      newErrors.exam = 'Please select an exam';
    }
    if (!rank.trim()) {
      newErrors.rank = 'Rank is required';
    } else if (isNaN(Number(rank)) || Number(rank) <= 0) {
      newErrors.rank = 'Please enter a valid rank';
    }
    if (!category) {
      newErrors.category = 'Please select a category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAnalyze = () => {
    if (validateInputs()) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedExam('');
    setRank('');
    setCategory('General');
    setShowResults(false);
    setErrors({});
  };

  const getSelectedExamName = () => {
    return exams.find(e => e.id === selectedExam)?.name || '';
  };

  // Mock rank analysis - In production, this would call an API
  const getRankAnalysis = () => {
    const rankNum = Number(rank);
    
    if (selectedExam === 'jee-main') {
      if (rankNum <= 10000) return { level: 'Excellent', color: 'green', colleges: ['Top NITs', 'IIITs', 'IITs (with JEE Advanced)', 'DTU', 'NSIT'] };
      if (rankNum <= 50000) return { level: 'Very Good', color: 'blue', colleges: ['Good NITs', 'Top IIITs', 'Other Engineering Colleges'] };
      if (rankNum <= 100000) return { level: 'Good', color: 'yellow', colleges: ['Regional NITs', 'State Engineering Colleges', 'Private Colleges'] };
      return { level: 'Average', color: 'orange', colleges: ['State Engineering Colleges', 'Private Colleges'] };
    }
    
    if (selectedExam === 'jee-advanced') {
      if (rankNum <= 5000) return { level: 'Excellent', color: 'green', colleges: ['Top IITs (Bombay, Delhi, Madras, Kanpur)'] };
      if (rankNum <= 15000) return { level: 'Very Good', color: 'blue', colleges: ['Top IITs', 'Good IITs'] };
      if (rankNum <= 25000) return { level: 'Good', color: 'yellow', colleges: ['IITs', 'Top NITs'] };
      return { level: 'Average', color: 'orange', colleges: ['IITs', 'Other Options'] };
    }
    
    if (selectedExam === 'neet') {
      if (rankNum <= 5000) return { level: 'Excellent', color: 'green', colleges: ['AIIMS', 'Top Medical Colleges'] };
      if (rankNum <= 20000) return { level: 'Very Good', color: 'blue', colleges: ['Top Government Medical Colleges'] };
      if (rankNum <= 50000) return { level: 'Good', color: 'yellow', colleges: ['Government Medical Colleges', 'Private Medical Colleges'] };
      return { level: 'Average', color: 'orange', colleges: ['Private Medical Colleges'] };
    }
    
    return { level: 'Good', color: 'blue', colleges: ['Multiple Options Available'] };
  };

  const analysis = showResults ? getRankAnalysis() : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                  <Award className="w-8 h-8" />
                  Rankometer
                </h1>
                <p className="text-green-100">Analyze your rank and discover your options</p>
              </div>
              <button
                onClick={() => navigate('/')}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {!showResults ? (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Enter Your Rank Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Exam*</label>
                    <div className="space-y-2">
                      {exams.map((exam) => (
                        <label key={exam.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="exam"
                            value={exam.id}
                            checked={selectedExam === exam.id}
                            onChange={(e) => setSelectedExam(e.target.value)}
                            className="w-5 h-5 text-green-600 focus:ring-green-500"
                          />
                          <div className="ml-3">
                            <span className="text-gray-900 font-medium">{exam.name}</span>
                            <p className="text-sm text-gray-600">{exam.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.exam && <p className="text-red-500 text-sm mt-1">{errors.exam}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Your {getSelectedExamName()} Rank*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your rank"
                      value={rank}
                      onChange={(e) => setRank(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.rank ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.rank && <p className="text-red-500 text-sm mt-1">{errors.rank}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Reservation Category*</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.category ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                    analysis?.color === 'green' ? 'bg-green-100' :
                    analysis?.color === 'blue' ? 'bg-blue-100' :
                    analysis?.color === 'yellow' ? 'bg-yellow-100' :
                    'bg-orange-100'
                  }`}>
                    <TrendingUp className={`w-10 h-10 ${
                      analysis?.color === 'green' ? 'text-green-600' :
                      analysis?.color === 'blue' ? 'text-blue-600' :
                      analysis?.color === 'yellow' ? 'text-yellow-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Rank Analysis</h2>
                  <p className="text-gray-600">
                    Your {getSelectedExamName()} Rank: <strong className="text-gray-900">{rank}</strong> ({category})
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-6 h-6 text-green-600" />
                      <h3 className="font-semibold text-gray-900">Rank Level</h3>
                    </div>
                    <p className={`text-2xl font-bold ${
                      analysis?.color === 'green' ? 'text-green-600' :
                      analysis?.color === 'blue' ? 'text-blue-600' :
                      analysis?.color === 'yellow' ? 'text-yellow-600' :
                      'text-orange-600'
                    }`}>
                      {analysis?.level}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Your Position</h3>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">Top {Math.round((Number(rank) / 1000000) * 100 * 100) / 100}%</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-6 h-6 text-purple-600" />
                      <h3 className="font-semibold text-gray-900">Category</h3>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{category}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-gray-600" />
                    Recommended Colleges & Options
                  </h3>
                  <ul className="space-y-2">
                    {analysis?.colleges.map((college, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{college}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> This analysis is based on approximate historical data. Actual admission 
                    depends on multiple factors including cutoff trends, reservation policies, and seat availability. 
                    For accurate predictions, use our College Predictor tool.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between p-6 border-t border-gray-200 bg-gray-50">
            {!showResults ? (
              <>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAnalyze}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <BarChart3 className="w-5 h-5" />
                  Analyze Rank
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Analyze Another Rank
                </button>
                <button
                  onClick={() => navigate('/college-predictor')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  Try College Predictor
                  <TrendingUp className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankometer;

