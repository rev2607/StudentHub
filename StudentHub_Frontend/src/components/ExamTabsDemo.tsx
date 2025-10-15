import React, { useState } from 'react';
import ExamTabs, { TabData } from './ExamTabs';
import { jeeMainTabs } from './JEEMainTabsExample';
import { neetTabs } from './NEETTabsExample';

const ExamTabsDemo: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<'jee' | 'neet'>('jee');

  const currentTabs = selectedExam === 'jee' ? jeeMainTabs : neetTabs;
  const examName = selectedExam === 'jee' ? 'JEE Main' : 'NEET';
  const examYear = '2026';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ExamTabs Component Demo
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A reusable React TypeScript component for exam information pages
          </p>
          
          {/* Exam Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setSelectedExam('jee')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedExam === 'jee'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              JEE Main 2026
            </button>
            <button
              onClick={() => setSelectedExam('neet')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedExam === 'neet'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              NEET 2026
            </button>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">React + TypeScript + TailwindCSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Smooth Framer Motion animations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Responsive horizontal scrolling</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Active tab highlighting</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Hover states and transitions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Fully reusable component</span>
            </div>
          </div>
        </div>

        {/* Component Demo */}
        <ExamTabs 
          tabs={currentTabs}
          examName={examName}
          examYear={examYear}
          className="mb-8"
        />

        {/* Code Example */}
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Usage Example</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`import ExamTabs, { TabData } from './ExamTabs';

const tabs: TabData[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: <div>Overview content here</div>
  },
  {
    id: 'syllabus',
    label: 'Syllabus',
    content: <div>Syllabus content here</div>
  }
];

<ExamTabs 
  tabs={tabs}
  examName="${examName}"
  examYear="${examYear}"
/>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ExamTabsDemo;

