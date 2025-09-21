import { useState } from 'react';

type ExamType = 'JEE Mains' | 'JEE Advanced' | 'EAMCET' | 'NEET';

interface ExamSelectorProps {
  selectedExam: ExamType | null;
  onExamSelect: (exam: ExamType) => void;
}

const exams: { type: ExamType; icon: string; description: string }[] = [
  {
    type: 'JEE Mains',
    icon: '📊',
    description: 'Joint Entrance Examination Main'
  },
  {
    type: 'JEE Advanced',
    icon: '🚀',
    description: 'Joint Entrance Examination Advanced'
  },
  {
    type: 'EAMCET',
    icon: '🎯',
    description: 'Engineering, Agriculture & Medical Common Entrance Test'
  },
  {
    type: 'NEET',
    icon: '⚕️',
    description: 'National Eligibility cum Entrance Test'
  }
];

const ExamSelector = ({ selectedExam, onExamSelect }: ExamSelectorProps) => {
  const [focusedExam, setFocusedExam] = useState<ExamType | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent, exam: ExamType) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onExamSelect(exam);
    }
  };

  return (
    <div className="space-y-3">
      {exams.map((exam) => {
        const isSelected = selectedExam === exam.type;
        const isFocused = focusedExam === exam.type;
        
        return (
          <div
            key={exam.type}
            role="button"
            tabIndex={0}
            data-testid={`exam-card-${exam.type.replace(/\s+/g, '-').toLowerCase()}`}
            className={`
              relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
              focus:outline-none focus:ring-4 focus:ring-[var(--site-green)] focus:ring-opacity-50
              ${isSelected
                ? 'border-[var(--site-green)] bg-green-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-[var(--site-green)] hover:bg-green-50 hover:shadow-sm'
              }
              ${isFocused ? 'ring-4 ring-[var(--site-green)] ring-opacity-50' : ''}
            `}
            onClick={() => onExamSelect(exam.type)}
            onKeyDown={(e) => handleKeyDown(e, exam.type)}
            onFocus={() => setFocusedExam(exam.type)}
            onBlur={() => setFocusedExam(null)}
            onMouseEnter={() => setFocusedExam(exam.type)}
            onMouseLeave={() => setFocusedExam(null)}
          >
            {/* Selection Indicator */}
            {isSelected && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-[var(--site-green)] rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}

            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className={`
                flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                ${isSelected ? 'bg-[var(--site-green)] text-white' : 'bg-gray-100 text-gray-600'}
              `}>
                {exam.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className={`
                  text-lg font-semibold mb-1
                  ${isSelected ? 'text-[var(--site-blue)]' : 'text-gray-900'}
                `}>
                  {exam.type}
                </h3>
                <p className={`
                  text-sm leading-relaxed
                  ${isSelected ? 'text-[var(--site-blue)] opacity-80' : 'text-gray-600'}
                `}>
                  {exam.description}
                </p>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className={`
              absolute inset-0 rounded-lg transition-opacity duration-200 pointer-events-none
              ${isSelected || isFocused
                ? 'opacity-0'
                : 'opacity-0 group-hover:opacity-10 bg-[var(--site-green)]'
              }
            `} />
          </div>
        );
      })}
    </div>
  );
};

export default ExamSelector;
