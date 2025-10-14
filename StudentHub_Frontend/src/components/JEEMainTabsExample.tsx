import React from 'react';
import ExamTabs, { TabData } from './ExamTabs';

// JEE Main Content Components
const JEEOverviewContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Overview</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-gray-700">
        JEE Main 2026 is India's largest undergraduate engineering entrance examination, 
        conducted by the National Testing Agency (NTA). It serves as the gateway to 
        prestigious institutions like NITs, IIITs, and GFTIs.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Exam Mode</h3>
        <p className="text-gray-600">Computer Based Test (CBT)</p>
      </div>
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Total Questions</h3>
        <p className="text-gray-600">75 Questions (300 Marks)</p>
      </div>
    </div>
  </div>
);

const JEEImportantDatesContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Important Dates</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">Event</th>
            <th className="border border-gray-300 p-3 text-left">Session 1</th>
            <th className="border border-gray-300 p-3 text-left">Session 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-3">Application Start</td>
            <td className="border border-gray-300 p-3">November 2025</td>
            <td className="border border-gray-300 p-3">February 2026</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Exam Date</td>
            <td className="border border-gray-300 p-3">January 2026</td>
            <td className="border border-gray-300 p-3">April 2026</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Result Declaration</td>
            <td className="border border-gray-300 p-3">February 2026</td>
            <td className="border border-gray-300 p-3">May 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const JEEEligibilityContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Eligibility</h2>
    <div className="space-y-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Age Limit</h3>
        <p className="text-green-700">No age limit for appearing in JEE Main</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Academic Qualification</h3>
        <p className="text-blue-700">Passed 10+2 or equivalent examination</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-semibold text-purple-800 mb-2">Subject Requirements</h3>
        <p className="text-purple-700">Physics, Chemistry, Mathematics</p>
      </div>
    </div>
  </div>
);

const JEEApplicationContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Application Process</h2>
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
        <div>
          <h3 className="font-semibold text-gray-800">Registration</h3>
          <p className="text-gray-600">Visit jeemain.nta.ac.in and create account</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
        <div>
          <h3 className="font-semibold text-gray-800">Fill Application Form</h3>
          <p className="text-gray-600">Enter personal, academic, and contact details</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
        <div>
          <h3 className="font-semibold text-gray-800">Upload Documents</h3>
          <p className="text-gray-600">Upload photograph, signature, and certificates</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
        <div>
          <h3 className="font-semibold text-gray-800">Pay Application Fee</h3>
          <p className="text-gray-600">Complete payment through online modes</p>
        </div>
      </div>
    </div>
  </div>
);

const JEEExamPatternContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Exam Pattern</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Physics</h3>
        <p className="text-gray-600">25 Questions (100 Marks)</p>
      </div>
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Chemistry</h3>
        <p className="text-gray-600">25 Questions (100 Marks)</p>
      </div>
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Mathematics</h3>
        <p className="text-gray-600">25 Questions (100 Marks)</p>
      </div>
    </div>
    <div className="bg-yellow-50 p-4 rounded-lg">
      <h3 className="font-semibold text-yellow-800 mb-2">Marking Scheme</h3>
      <ul className="text-yellow-700 space-y-1">
        <li>• Correct Answer: +4 marks</li>
        <li>• Incorrect Answer: -1 mark</li>
        <li>• Unattempted: 0 marks</li>
      </ul>
    </div>
  </div>
);

const JEESyllabusContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Syllabus</h2>
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Physics Syllabus</h3>
        <p className="text-blue-700">Mechanics, Thermodynamics, Waves, Optics, Modern Physics</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Chemistry Syllabus</h3>
        <p className="text-green-700">Physical, Inorganic, and Organic Chemistry</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-semibold text-purple-800 mb-2">Mathematics Syllabus</h3>
        <p className="text-purple-700">Algebra, Trigonometry, Calculus, Coordinate Geometry</p>
      </div>
    </div>
  </div>
);

const JEECutoffContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Cutoff</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">Category</th>
            <th className="border border-gray-300 p-3 text-left">Expected Cutoff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-3">General</td>
            <td className="border border-gray-300 p-3">90+</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">OBC-NCL</td>
            <td className="border border-gray-300 p-3">75+</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">SC</td>
            <td className="border border-gray-300 p-3">50+</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">ST</td>
            <td className="border border-gray-300 p-3">40+</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const JEECounsellingContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Counselling</h2>
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">JoSAA Counselling</h3>
        <p className="text-blue-700">Joint Seat Allocation Authority conducts counselling for IITs, NITs, IIITs</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">CSAB Counselling</h3>
        <p className="text-green-700">Central Seat Allocation Board for remaining seats</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-semibold text-purple-800 mb-2">State Counselling</h3>
        <p className="text-purple-700">Individual state counselling for state quota seats</p>
      </div>
    </div>
  </div>
);

const JEEPreparationContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">JEE Main 2026 Preparation Tips</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Study Plan</h3>
        <ul className="text-blue-700 space-y-1">
          <li>• Create a structured timetable</li>
          <li>• Focus on NCERT books</li>
          <li>• Practice previous year papers</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Mock Tests</h3>
        <ul className="text-green-700 space-y-1">
          <li>• Take regular mock tests</li>
          <li>• Analyze performance</li>
          <li>• Work on weak areas</li>
        </ul>
      </div>
    </div>
  </div>
);

// JEE Main Tabs Data
export const jeeMainTabs: TabData[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: <JEEOverviewContent />
  },
  {
    id: 'important-dates',
    label: 'Important Dates',
    content: <JEEImportantDatesContent />
  },
  {
    id: 'eligibility',
    label: 'Eligibility',
    content: <JEEEligibilityContent />
  },
  {
    id: 'application',
    label: 'Application',
    content: <JEEApplicationContent />
  },
  {
    id: 'exam-pattern',
    label: 'Exam Pattern',
    content: <JEEExamPatternContent />
  },
  {
    id: 'syllabus',
    label: 'Syllabus',
    content: <JEESyllabusContent />
  },
  {
    id: 'cutoff',
    label: 'Cutoff',
    content: <JEECutoffContent />
  },
  {
    id: 'counselling',
    label: 'Counselling',
    content: <JEECounsellingContent />
  },
  {
    id: 'preparation',
    label: 'Preparation',
    content: <JEEPreparationContent />
  }
];

// Example usage component
const JEEMainTabsExample: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ExamTabs 
        tabs={jeeMainTabs}
        examName="JEE Main"
        examYear="2026"
        className="mb-6"
      />
    </div>
  );
};

export default JEEMainTabsExample;
