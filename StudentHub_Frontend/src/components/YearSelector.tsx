import { useState } from 'react';

type YearType = '2021' | '2022' | '2023' | '2024' | '2025';

interface YearSelectorProps {
  selectedYear: YearType | null;
  onYearSelect: (year: YearType) => void;
}

const years: YearType[] = ['2021', '2022', '2023', '2024', '2025'];

const YearSelector = ({ selectedYear, onYearSelect }: YearSelectorProps) => {
  const [focusedYear, setFocusedYear] = useState<YearType | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent, year: YearType) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onYearSelect(year);
    }
  };

  return (
    <div className="space-y-4">
      {/* Year Buttons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {years.map((year) => {
          const isSelected = selectedYear === year;
          const isFocused = focusedYear === year;
          
          return (
            <button
              key={year}
              data-testid={`year-btn-${year}`}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200
                focus:outline-none focus:ring-4 focus:ring-[var(--site-green)] focus:ring-opacity-50
                ${isSelected
                  ? 'border-[var(--site-green)] bg-[var(--site-green)] text-white shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-[var(--site-green)] hover:bg-green-50 hover:text-[var(--site-blue)] hover:shadow-sm'
                }
                ${isFocused ? 'ring-4 ring-[var(--site-green)] ring-opacity-50' : ''}
              `}
              onClick={() => onYearSelect(year)}
              onKeyDown={(e) => handleKeyDown(e, year)}
              onFocus={() => setFocusedYear(year)}
              onBlur={() => setFocusedYear(null)}
              onMouseEnter={() => setFocusedYear(year)}
              onMouseLeave={() => setFocusedYear(null)}
            >
              {/* Year Text */}
              <div className="text-center">
                <div className="text-lg font-semibold">{year}</div>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg
                    className="w-4 h-4 text-[var(--site-green)]"
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
            </button>
          );
        })}
      </div>

      {/* Year Information */}
      {selectedYear && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[var(--site-green)] rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--site-blue)]">
                {selectedYear} Paper Selected
              </h4>
              <p className="text-sm text-gray-600">
                You'll be taking a mock test based on the {selectedYear} exam paper
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Choose a year to see past paper questions
        </p>
      </div>
    </div>
  );
};

export default YearSelector;
