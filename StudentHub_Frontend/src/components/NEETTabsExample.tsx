import React from 'react';
import ExamTabs, { TabData } from './ExamTabs';

// NEET Content Components
const NEETOverviewContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Overview</h2>
    <div className="bg-green-50 p-4 rounded-lg">
      <p className="text-gray-700">
        NEET 2026 is the National Eligibility cum Entrance Test for admission to 
        medical courses (MBBS, BDS, BAMS, BHMS, BUMS) in India. It is conducted 
        by the National Testing Agency (NTA).
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Exam Mode</h3>
        <p className="text-gray-600">Pen and Paper Based Test</p>
      </div>
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Total Questions</h3>
        <p className="text-gray-600">180 Questions (720 Marks)</p>
      </div>
    </div>
  </div>
);

const NEETImportantDatesContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Important Dates</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">Event</th>
            <th className="border border-gray-300 p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-3">Application Start</td>
            <td className="border border-gray-300 p-3">March 2026</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Application End</td>
            <td className="border border-gray-300 p-3">April 2026</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Exam Date</td>
            <td className="border border-gray-300 p-3">May 2026</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">Result Declaration</td>
            <td className="border border-gray-300 p-3">June 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const NEETEligibilityContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Eligibility</h2>
    <div className="space-y-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Age Limit</h3>
        <p className="text-green-700">Minimum 17 years, Maximum 25 years (30 years for reserved categories)</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Academic Qualification</h3>
        <p className="text-blue-700">Passed 10+2 with Physics, Chemistry, Biology/Biotechnology</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-semibold text-purple-800 mb-2">Minimum Marks</h3>
        <p className="text-purple-700">General: 50%, SC/ST/OBC: 40%, PwD: 45%</p>
      </div>
    </div>
  </div>
);

const NEETApplicationContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Application Process</h2>
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
        <div>
          <h3 className="font-semibold text-gray-800">Registration</h3>
          <p className="text-gray-600">Visit neet.nta.nic.in and create account</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
        <div>
          <h3 className="font-semibold text-gray-800">Fill Application Form</h3>
          <p className="text-gray-600">Enter personal, academic, and contact details</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
        <div>
          <h3 className="font-semibold text-gray-800">Upload Documents</h3>
          <p className="text-gray-600">Upload photograph, signature, and certificates</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">4</div>
        <div>
          <h3 className="font-semibold text-gray-800">Pay Application Fee</h3>
          <p className="text-gray-600">Complete payment through online modes</p>
        </div>
      </div>
    </div>
  </div>
);

const NEETExamPatternContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Exam Pattern</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Physics</h3>
        <p className="text-gray-600">45 Questions (180 Marks)</p>
      </div>
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Chemistry</h3>
        <p className="text-gray-600">45 Questions (180 Marks)</p>
      </div>
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-800 mb-2">Biology</h3>
        <p className="text-gray-600">90 Questions (360 Marks)</p>
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

const NEETSyllabusContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Syllabus</h2>
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
        <h3 className="font-semibold text-purple-800 mb-2">Biology Syllabus</h3>
        <p className="text-purple-700">Botany and Zoology from Class 11 and 12 NCERT</p>
      </div>
    </div>
  </div>
);

const NEETCutoffContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Cutoff</h2>
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
            <td className="border border-gray-300 p-3">720-138</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">OBC-NCL</td>
            <td className="border border-gray-300 p-3">137-108</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">SC</td>
            <td className="border border-gray-300 p-3">107-93</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3">ST</td>
            <td className="border border-gray-300 p-3">92-93</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const NEETCounsellingContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Counselling</h2>
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">MCC Counselling</h3>
        <p className="text-blue-700">Medical Counselling Committee for 15% All India Quota seats</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">State Counselling</h3>
        <p className="text-green-700">Individual state counselling for 85% state quota seats</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-semibold text-purple-800 mb-2">Deemed Universities</h3>
        <p className="text-purple-700">Separate counselling for deemed universities</p>
      </div>
    </div>
  </div>
);

const NEETPreparationContent: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">NEET 2026 Preparation Tips</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">Study Plan</h3>
        <ul className="text-green-700 space-y-1">
          <li>• Focus on NCERT books</li>
          <li>• Practice diagrams and labeling</li>
          <li>• Solve previous year papers</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Mock Tests</h3>
        <ul className="text-blue-700 space-y-1">
          <li>• Take regular mock tests</li>
          <li>• Time management practice</li>
          <li>• Analyze weak areas</li>
        </ul>
      </div>
    </div>
  </div>
);

// NEET Tabs Data
export const neetTabs: TabData[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: <NEETOverviewContent />
  },
  {
    id: 'important-dates',
    label: 'Important Dates',
    content: <NEETImportantDatesContent />
  },
  {
    id: 'eligibility',
    label: 'Eligibility',
    content: <NEETEligibilityContent />
  },
  {
    id: 'application',
    label: 'Application',
    content: <NEETApplicationContent />
  },
  {
    id: 'exam-pattern',
    label: 'Exam Pattern',
    content: <NEETExamPatternContent />
  },
  {
    id: 'syllabus',
    label: 'Syllabus',
    content: <NEETSyllabusContent />
  },
  {
    id: 'cutoff',
    label: 'Cutoff',
    content: <NEETCutoffContent />
  },
  {
    id: 'counselling',
    label: 'Counselling',
    content: <NEETCounsellingContent />
  },
  {
    id: 'preparation',
    label: 'Preparation',
    content: <NEETPreparationContent />
  }
];

// Example usage component
const NEETTabsExample: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ExamTabs 
        tabs={neetTabs}
        examName="NEET"
        examYear="2026"
        className="mb-6"
      />
    </div>
  );
};

export default NEETTabsExample;

