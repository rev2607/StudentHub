import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExamSelector from '../components/ExamSelector';
import YearSelector from '../components/YearSelector';

type ExamType = 'JEE Mains' | 'JEE Advanced' | 'EAMCET' | 'NEET';
type YearType = '2021' | '2022' | '2023' | '2024' | '2025';

const MockTests = () => {
  const [selectedExam, setSelectedExam] = useState<ExamType | null>(null);
  const [selectedYear, setSelectedYear] = useState<YearType | null>(null);
  const navigate = useNavigate();

  const handleExamSelect = (exam: ExamType) => {
    setSelectedExam(exam);
  };

  const handleYearSelect = (year: YearType) => {
    setSelectedYear(year);
  };

  const handleStartMockTest = () => {
    if (selectedExam && selectedYear) {
      const params = new URLSearchParams({
        exam: selectedExam,
        year: selectedYear
      });
      navigate(`/mock-tests/start?${params.toString()}`);
    }
  };

  const isStartButtonEnabled = selectedExam && selectedYear;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--site-blue)] mb-4">
            Mock Tests
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose an exam and year to start a past-paper style mock.
          </p>
        </div>

        {/* Selection Summary */}
        {(selectedExam || selectedYear) && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <span className="text-sm text-gray-600">Current Selection: </span>
              <span className="font-semibold text-[var(--site-blue)]">
                {selectedExam || 'No exam selected'} 
                {selectedExam && selectedYear && ' • '}
                {selectedYear || 'No year selected'}
              </span>
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Exam Selection */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--site-blue)] mb-4">
                Select Exam
              </h2>
              <ExamSelector
                selectedExam={selectedExam}
                onExamSelect={handleExamSelect}
              />
            </div>
          </div>

          {/* Right Column: Year Selection & Summary */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--site-blue)] mb-4">
                Select Year
              </h2>
              <YearSelector
                selectedYear={selectedYear}
                onYearSelect={handleYearSelect}
              />
            </div>

            {/* Start Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleStartMockTest}
                disabled={!isStartButtonEnabled}
                data-testid="start-mock-btn"
                className={`
                  px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300
                  ${isStartButtonEnabled
                    ? 'bg-[var(--site-green)] hover:bg-[#7bb53a] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                Start Mock Test
              </button>
            </div>

            {/* Instructions */}
            {!isStartButtonEnabled && (
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500">
                  Please select both an exam and year to begin
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: Stack vertically on smaller screens */}
        <div className="mt-8 lg:hidden">
          <div className="flex justify-center">
            <button
              onClick={handleStartMockTest}
              disabled={!isStartButtonEnabled}
              className={`
                w-full max-w-sm px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300
                ${isStartButtonEnabled
                  ? 'bg-[var(--site-green)] hover:bg-[#7bb53a] text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Start Mock Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTests;
