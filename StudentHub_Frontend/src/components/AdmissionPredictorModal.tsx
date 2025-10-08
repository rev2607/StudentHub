import React, { useState } from 'react';
import { X, Search, Check } from 'lucide-react';

interface AdmissionPredictorModalProps {
  isOpen: boolean;
  onClose: () => void;
  collegeName: string;
  collegeLogo?: string;
}

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

const AdmissionPredictorModal: React.FC<AdmissionPredictorModalProps> = ({
  isOpen,
  onClose,
  collegeName,
  collegeLogo
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedExam, setSelectedExam] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('General');
  const [gender, setGender] = useState('Male');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const courses: Course[] = [
    { id: 'barch', name: 'Bachelor of Architecture [B.Arch]', category: 'B.Arch' },
    { id: 'btech-cse', name: 'Bachelor of Technology [B.Tech] (Computer Science and Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-chemical', name: 'Bachelor of Technology [B.Tech] (Chemical Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-ds-ai', name: 'Bachelor of Technology [B.Tech] (Data Science and Artificial Intelligence)', category: 'BE/B.Tech' },
    { id: 'btech-mech', name: 'Bachelor of Technology [B.Tech] (Mechanical Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-civil', name: 'Bachelor of Technology [B.Tech] (Civil Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-ece', name: 'Bachelor of Technology [B.Tech] (Electronics & Communication Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-electrical', name: 'Bachelor of Technology [B.Tech] (Electrical Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-geo', name: 'Bachelor of Technology [B.Tech] + Master of Technology [M.Tech] (Geophysical Technology)', category: 'BE/B.Tech' },
    { id: 'btech-bio', name: 'Bachelor of Technology [B.Tech] (Biosciences and Bioengineering)', category: 'BE/B.Tech' },
    { id: 'btech-metallurgy', name: 'Bachelor of Technology [B.Tech] (Metallurgical and Materials Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-geological', name: 'Bachelor of Technology [B.Tech] + Master of Technology [M.Tech] (Geological Technology)', category: 'BE/B.Tech' },
    { id: 'btech-physics', name: 'Bachelor of Technology [B.Tech] (Engineering Physics)', category: 'BE/B.Tech' },
    { id: 'btech-ip', name: 'Bachelor of Technology [B.Tech] (Industrial & Production Engineering)', category: 'BE/B.Tech' },
    { id: 'btech-energy', name: 'Bachelor of Technology [B.Tech] (Energy Engineering)', category: 'BE/B.Tech' },
    { id: 'msc-econ', name: 'Master of Science [M.Sc] (Economics)', category: 'M.Sc' },
    { id: 'msc-math', name: 'Master of Science [M.Sc] (Mathematics)', category: 'M.Sc' },
    { id: 'msc-chem', name: 'Master of Science [M.Sc] (Chemistry)', category: 'M.Sc' },
    { id: 'msc-geology', name: 'Master of Science [M.Sc] (Applied Geology)', category: 'M.Sc' },
    { id: 'msc-physics', name: 'Master of Science [M.Sc] (Physics)', category: 'M.Sc' },
    { id: 'msc-bioscience', name: 'Master of Science [M.Sc] (Bioscience)', category: 'M.Sc' },
    { id: 'msc-bioeng', name: 'Master of Science [M.Sc] (Bioscience and Bioengineering)', category: 'M.Sc' },
    { id: 'mba', name: 'Master of Business Administration [MBA]', category: 'MBA/PGDM' },
    { id: 'mtech-cse', name: 'Master of Technology [M.Tech] (Computer Science and Engineering)', category: 'ME/M.Tech' },
    { id: 'mtech-structural', name: 'Master of Technology [M.Tech] (Structural Engineering)', category: 'ME/M.Tech' },
    { id: 'mtech-thermal', name: 'Master of Technology [M.Tech] (Thermal Engineering)', category: 'ME/M.Tech' },
    { id: 'mtech-hydraulics', name: 'Master of Technology [M.Tech] (Hydraulics)', category: 'ME/M.Tech' },
    { id: 'mtech-earthquake', name: 'Master of Technology [M.Tech] (Earthquake Engineering)', category: 'ME/M.Tech' },
    { id: 'mtech-env', name: 'Master of Technology [M.Tech] (Environmental Management)', category: 'ME/M.Tech' },
    { id: 'bs-econ', name: 'Bachelor of Science [BS] + Master of Science [MS] (Economics)', category: 'BS' },
    { id: 'bs-physics', name: 'Bachelor of Science [BS] + Master of Science [MS] (Physics)', category: 'BS' },
    { id: 'bs-math', name: 'Bachelor of Science [BS] + Master of Science [MS] (Mathematics)', category: 'BS' },
    { id: 'bs-chem', name: 'Bachelor of Science [BS] + Master of Science [MS] (Chemistry)', category: 'BS' },
    { id: 'pgd-water', name: 'Post Graduate Diploma in Water Resource Management', category: 'PG Diploma in Management' },
    { id: 'bdes', name: 'Bachelor of Design [B.Des]', category: 'B.Des' }
  ];

  const exams: Exam[] = [
    { id: 'jee-advanced', name: 'JEE Advanced', description: 'For B.Tech and B.Arch programs' },
    { id: 'aat', name: 'AAT', description: 'Architecture Aptitude Test for B.Arch' },
    { id: 'uceed', name: 'UCEED', description: 'Undergraduate Common Entrance Exam for Design' },
    { id: 'gate', name: 'GATE', description: 'Graduate Aptitude Test in Engineering' },
    { id: 'cat', name: 'CAT', description: 'Common Admission Test for MBA' },
    { id: 'jam', name: 'JAM', description: 'Joint Admission Test for M.Sc' },
    { id: 'gat-b', name: 'GAT-B', description: 'Graduate Aptitude Test for Biotechnology' }
  ];

  const categories = ['General', 'OBC', 'SC', 'ST', 'EWS'];
  const courseCategories = ['B.Arch', 'BE/B.Tech', 'M.Sc', 'MBA/PGDM', 'ME/M.Tech', 'BS', 'PG Diploma in Management', 'B.Des'];

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
        rank: Number(rank),
        category,
        gender
      });
      // For now, just close the modal
      onClose();
    }
  };

  const getSelectedCourseName = () => {
    return courses.find(c => c.id === selectedCourse)?.name || '';
  };

  const getSelectedExamName = () => {
    return exams.find(e => e.id === selectedExam)?.name || '';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          {collegeLogo && (
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={collegeLogo} alt="College Logo" className="w-full h-full object-contain" />
            </div>
          )}
            <div>
              <h2 className="text-xl font-bold text-gray-900">{collegeName}</h2>
              <p className="text-sm text-gray-600">Predict Your Admission Chances</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {['Select Course', 'Select Exam', 'Select Score'].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  currentStep > index + 1 
                    ? 'bg-green-500 text-white' 
                    : currentStep === index + 1 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > index + 1 ? <Check className="w-5 h-5" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= index + 1 ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step}
                </span>
                {index < 2 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {currentStep === 1 && (
            <div>
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
                {courseCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSearchQuery(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      searchQuery === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                {Object.entries(groupedCourses).map(([category, categoryCourses]) => (
                  categoryCourses.length > 0 && (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{category}</h3>
                      <div className="space-y-2">
                        {categoryCourses.map((course) => (
                          <label key={course.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="radio"
                              name="course"
                              value={course.id}
                              checked={selectedCourse === course.id}
                              onChange={(e) => setSelectedCourse(e.target.value)}
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-3 text-gray-900">{course.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Selected Course</h3>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{getSelectedCourseName()}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Exam</label>
                  <div className="space-y-2">
                    {exams.map((exam) => (
                      <label key={exam.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="exam"
                          value={exam.id}
                          checked={selectedExam === exam.id}
                          onChange={(e) => setSelectedExam(e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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
                    Enter Your {getSelectedExamName()} rank*
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter Your ${getSelectedExamName()} rank*`}
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
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
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

          {currentStep === 3 && (
            <div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Admission Prediction Result</h3>
                <p className="text-gray-600 mb-6">
                  Based on your {getSelectedExamName()} rank of {rank} in {category} category, 
                  here's your admission prediction for {getSelectedCourseName()} at {collegeName}.
                </p>
                {/* TODO: Add actual prediction logic and display */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800 font-medium">Prediction feature coming soon!</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between p-6 border-t border-gray-200">
          <button
            onClick={currentStep === 1 ? onClose : handleBack}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
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
          ) : (
            <button
              onClick={handleViewResult}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              View Result
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionPredictorModal;
