import React, { useState } from 'react';
import { Search, Check, X, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: string;
  name: string;
  category: string;
}

interface Exam {
  id: string;
  name: string;
  description: string;
}

const CollegePredictor: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedExam, setSelectedExam] = useState<string>('');
  const [selectedCollege, setSelectedCollege] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('General');
  const [gender, setGender] = useState('Male');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const courses: Course[] = [
    { id: 'btech-cse', name: 'Bachelor of Technology [B.Tech] (Computer Science and Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-mech', name: 'Bachelor of Technology [B.Tech] (Mechanical Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-ece', name: 'Bachelor of Technology [B.Tech] (Electronics & Communication Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-civil', name: 'Bachelor of Technology [B.Tech] (Civil Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-electrical', name: 'Bachelor of Technology [B.Tech] (Electrical Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-chemical', name: 'Bachelor of Technology [B.Tech] (Chemical Engineering)', category: 'BE/B.Tech' },
    { id: 'barch', name: 'Bachelor of Architecture [B.Arch]', category: 'B.Arch' },
    { id: 'mbbs', name: 'MBBS', category: 'Medical' },
    { id: 'mba', name: 'Master of Business Administration [MBA]', category: 'MBA/PGDM' },
  ];

  const exams: Exam[] = [
    { id: 'jee-advanced', name: 'JEE Advanced', description: 'For IITs and top engineering colleges' },
    { id: 'jee-main', name: 'JEE Main', description: 'For NITs and other engineering colleges' },
    { id: 'neet', name: 'NEET', description: 'For medical colleges' },
    { id: 'cat', name: 'CAT', description: 'Common Admission Test for MBA' },
    { id: 'gate', name: 'GATE', description: 'Graduate Aptitude Test in Engineering' },
  ];

  const colleges = [
    'IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur', 'IIT Kharagpur',
    'IIT Roorkee', 'IIT Hyderabad', 'IIT Guwahati', 'NIT Trichy', 'NIT Surathkal',
    'BITS Pilani', 'VIT Vellore', 'SRM Institute', 'Manipal Institute'
  ];

  const categories = ['General', 'OBC', 'SC', 'ST', 'EWS'];
  const courseCategories = ['BE/B.Tech', 'B.Arch', 'Medical', 'MBA/PGDM'];

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedCourses = courseCategories.reduce((acc, category) => {
    acc[category] = filteredCourses.filter(course => course.category === category);
    return acc;
  }, {} as {[key: string]: Course[]});

  const validateStep = (step: number): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    if (step === 1 && !selectedCourse) {
      newErrors.course = 'Please select a course';
    }
    
    if (step === 2) {
      if (!selectedExam) {
        newErrors.exam = 'Please select an exam';
      }
      if (!selectedCollege) {
        newErrors.college = 'Please select a college';
      }
    }
    
    if (step === 3) {
      if (!rank.trim()) {
        newErrors.rank = 'Field is required';
      } else if (isNaN(Number(rank)) || Number(rank) <= 0) {
        newErrors.rank = 'Please enter a valid rank';
      }
      if (!category) {
        newErrors.category = 'Please select a category';
      }
      if (!gender) {
        newErrors.gender = 'Please select gender';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleViewResult = () => {
    if (validateStep(currentStep)) {
      // TODO: Implement prediction logic
      console.log('Prediction data:', {
        course: selectedCourse,
        exam: selectedExam,
        college: selectedCollege,
        rank: Number(rank),
        category,
        gender
      });
      setCurrentStep(4);
    }
  };

  const getSelectedCourseName = () => {
    return courses.find(c => c.id === selectedCourse)?.name || '';
  };

  const getSelectedExamName = () => {
    return exams.find(e => e.id === selectedExam)?.name || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">College Predictor</h1>
                <p className="text-blue-100">Predict your admission chances</p>
              </div>
              <button
                onClick={() => navigate('/')}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {['Select Course', 'Select College & Exam', 'Enter Details', 'View Results'].map((step, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all ${
                    currentStep > index + 1 
                      ? 'bg-green-500 text-white' 
                      : currentStep === index + 1 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > index + 1 ? <Check className="w-5 h-5" /> : index + 1}
                  </div>
                  <span className={`ml-2 text-xs sm:text-sm font-medium hidden sm:inline ${
                    currentStep >= index + 1 ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                  {index < 3 && (
                    <div className={`flex-1 h-0.5 mx-2 sm:mx-4 ${
                      currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Your Course</h2>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Courses"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {courseCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSearchQuery(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        searchQuery === cat
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="space-y-6 max-h-96 overflow-y-auto">
                  {Object.entries(groupedCourses).map(([category, categoryCourses]) => (
                    categoryCourses.length > 0 && (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{category}</h3>
                        <div className="space-y-2">
                          {categoryCourses.map((course) => (
                            <label key={course.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                              <input
                                type="radio"
                                name="course"
                                value={course.id}
                                checked={selectedCourse === course.id}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="ml-3 text-gray-900">{course.name}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
                {errors.course && <p className="text-red-500 text-sm mt-2">{errors.course}</p>}
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Select College & Exam</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Course</h3>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{getSelectedCourseName()}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Exam</label>
                    <div className="space-y-2">
                      {exams.map((exam) => (
                        <label key={exam.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="exam"
                            value={exam.id}
                            checked={selectedExam === exam.id}
                            onChange={(e) => setSelectedExam(e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
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
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select College</label>
                    <select
                      value={selectedCollege}
                      onChange={(e) => setSelectedCollege(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.college ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a college</option>
                      {colleges.map((college) => (
                        <option key={college} value={college}>{college}</option>
                      ))}
                    </select>
                    {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Enter Your Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Your {getSelectedExamName()} rank*
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter Your ${getSelectedExamName()} rank`}
                      value={rank}
                      onChange={(e) => setRank(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.category ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Gender*</label>
                    <div className="flex gap-4">
                      {['Male', 'Female'].map((g) => (
                        <label key={g} className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={gender === g}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-gray-900">{g}</span>
                        </label>
                      ))}
                    </div>
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center">
                <div className="mb-6">
                  <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Admission Prediction Result</h3>
                  <p className="text-gray-600 mb-6">
                    Based on your {getSelectedExamName()} rank of <strong>{rank}</strong> in <strong>{category}</strong> category, 
                    here's your admission prediction for <strong>{getSelectedCourseName()}</strong> at <strong>{selectedCollege}</strong>.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <p className="text-blue-800 font-medium">Prediction feature coming soon!</p>
                  <p className="text-blue-600 text-sm mt-2">We're working on implementing accurate prediction algorithms based on historical data.</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={currentStep === 1 ? () => navigate('/') : handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {currentStep === 1 ? 'Cancel' : 'Back'}
            </button>
            
            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : currentStep === 3 ? (
              <button
                onClick={handleViewResult}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Get Prediction
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setSelectedCourse('');
                  setSelectedExam('');
                  setSelectedCollege('');
                  setRank('');
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Predict Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePredictor;

