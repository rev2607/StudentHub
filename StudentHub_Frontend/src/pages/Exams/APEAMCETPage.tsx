import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apeamcetData from './apeamcet.json';

interface APEAMCETData {
  Overview: string;
  "Important Dates": {
    "Notification Release": string;
    "Application Window Opens": string;
    "Last Date to Apply": string;
    "Application Correction Window": string;
    "Admit Card Release": string;
    "Exam Dates": {
      "Agriculture & Pharmacy": string;
      "Engineering": string;
    };
    "Preliminary Answer Key": string;
    "Objection Window": string;
    "Final Answer Key": string;
    "Result/Rank Card Release": string;
    "Counselling Begins": string;
  };
  Eligibility: {
    Nationality: string;
    Domicile: string;
    "Minimum Age": {
      "Engineering & Pharmacy": string;
      "Agriculture & Allied Courses": string;
    };
    "Educational Qualification": {
      Engineering: string;
      "Agriculture & Pharmacy": string;
    };
    "Minimum Marks": {
      General: string;
      "SC/ST": string;
    };
    Additional: string;
  };
  Application: {
    Mode: string;
    Fee: {
      "Engineering or Agriculture & Pharmacy": string;
      "Both Streams": string;
    };
    "Documents Required": string[];
    Steps: string[];
  };
  "Exam Pattern": {
    Mode: string;
    Duration: string;
    Languages: string;
    "Number of Papers": string[];
    Questions: {
      Total: number;
      Type: string;
      Engineering: {
        Mathematics: number;
        Physics: number;
        Chemistry: number;
      };
      "Agriculture/Pharmacy": {
        Botany: number;
        Zoology: number;
        Physics: number;
        Chemistry: number;
      };
    };
  };
  Syllabus: {
    "Based On": string;
    "Engineering Stream": {
      Mathematics: string[];
      Physics: string[];
      Chemistry: string[];
    };
    "Agriculture & Pharmacy Stream": {
      Botany: string[];
      Zoology: string[];
    };
  };
  Cutoff: {
    "Minimum Qualifying Marks": string;
    "Engineering Stream (expected ranks for 2026)": {
      "150–160 marks": string;
      "140–149 marks": string;
      "130–139 marks": string;
      "120–129 marks": string;
      "110–119 marks": string;
      "100–109 marks": string;
      "70 marks": string;
    };
    "Agriculture & Pharmacy Stream (expected ranks for 2026)": {
      "140–160 marks": string;
      "130–139 marks": string;
      "120–129 marks": string;
      "110–119 marks": string;
      "100–109 marks": string;
    };
  };
  Counselling: {
    Mode: string;
    Steps: string[];
    Fee: string;
    "Seat Allocation": string;
    "Additional Rounds": string;
    "Documents Required": string[];
  };
  References: string[];
}

const APEAMCETPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const data = apeamcetData as APEAMCETData;

  type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling';

  if (!data) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'dates', label: 'Important Dates' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'application', label: 'Application' },
    { id: 'pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'cutoff', label: 'Cutoff' },
    { id: 'counselling', label: 'Counselling' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 – Comprehensive Examination Guide</h2>
              
              <div className="space-y-6">
                {/* Overview Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Overview</h3>
                  <p className="text-gray-700">{data.Overview}</p>
                </div>

                {/* Important Dates Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Dates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Notification Release:</strong> {data["Important Dates"]["Notification Release"]}</p>
                      <p className="text-gray-700"><strong>Application Window Opens:</strong> {data["Important Dates"]["Application Window Opens"]}</p>
                      <p className="text-gray-700"><strong>Last Date to Apply:</strong> {data["Important Dates"]["Last Date to Apply"]}</p>
                      <p className="text-gray-700"><strong>Application Correction Window:</strong> {data["Important Dates"]["Application Correction Window"]}</p>
                      <p className="text-gray-700"><strong>Admit Card Release:</strong> {data["Important Dates"]["Admit Card Release"]}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Agriculture & Pharmacy Exam:</strong> {data["Important Dates"]["Exam Dates"]["Agriculture & Pharmacy"]}</p>
                      <p className="text-gray-700"><strong>Engineering Exam:</strong> {data["Important Dates"]["Exam Dates"]["Engineering"]}</p>
                      <p className="text-gray-700"><strong>Preliminary Answer Key:</strong> {data["Important Dates"]["Preliminary Answer Key"]}</p>
                      <p className="text-gray-700"><strong>Objection Window:</strong> {data["Important Dates"]["Objection Window"]}</p>
                      <p className="text-gray-700"><strong>Final Answer Key:</strong> {data["Important Dates"]["Final Answer Key"]}</p>
                      <p className="text-gray-700"><strong>Result/Rank Card Release:</strong> {data["Important Dates"]["Result/Rank Card Release"]}</p>
                      <p className="text-gray-700"><strong>Counselling Begins:</strong> {data["Important Dates"]["Counselling Begins"]}</p>
                    </div>
                  </div>
                </div>

                {/* Eligibility Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligibility Criteria</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Nationality:</strong> {data.Eligibility.Nationality}</p>
                    <p className="text-gray-700"><strong>Domicile:</strong> {data.Eligibility.Domicile}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Minimum Age</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering & Pharmacy:</strong> {data.Eligibility["Minimum Age"]["Engineering & Pharmacy"]}</li>
                        <li><strong>Agriculture & Allied Courses:</strong> {data.Eligibility["Minimum Age"]["Agriculture & Allied Courses"]}</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Educational Qualification</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering:</strong> {data.Eligibility["Educational Qualification"].Engineering}</li>
                        <li><strong>Agriculture & Pharmacy:</strong> {data.Eligibility["Educational Qualification"]["Agriculture & Pharmacy"]}</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Minimum Marks</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>General:</strong> {data.Eligibility["Minimum Marks"].General}</li>
                        <li><strong>SC/ST:</strong> {data.Eligibility["Minimum Marks"]["SC/ST"]}</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 mt-4"><strong>Additional:</strong> {data.Eligibility.Additional}</p>
                  </div>
                </div>

                {/* Application Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Process</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Mode:</strong> {data.Application.Mode}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Application Fee</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering or Agriculture & Pharmacy:</strong> {data.Application.Fee["Engineering or Agriculture & Pharmacy"]}</li>
                        <li><strong>Both Streams:</strong> {data.Application.Fee["Both Streams"]}</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Application["Documents Required"].map((doc, index) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Application Steps</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Application.Steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exam Pattern Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Pattern</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Mode:</strong> {data["Exam Pattern"].Mode}</p>
                    <p className="text-gray-700"><strong>Duration:</strong> {data["Exam Pattern"].Duration}</p>
                    <p className="text-gray-700"><strong>Languages:</strong> {data["Exam Pattern"].Languages}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Number of Papers</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data["Exam Pattern"]["Number of Papers"].map((paper, index) => (
                          <li key={index}>{paper}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Question Details</h4>
                      <p className="text-gray-700"><strong>Total Questions:</strong> {data["Exam Pattern"].Questions.Total}</p>
                      <p className="text-gray-700"><strong>Type:</strong> {data["Exam Pattern"].Questions.Type}</p>
                      
                      <div className="mt-2">
                        <h5 className="font-semibold text-gray-800 mb-2">Engineering Stream</h5>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Mathematics: {data["Exam Pattern"].Questions.Engineering.Mathematics} questions</li>
                          <li>Physics: {data["Exam Pattern"].Questions.Engineering.Physics} questions</li>
                          <li>Chemistry: {data["Exam Pattern"].Questions.Engineering.Chemistry} questions</li>
                        </ul>
                      </div>

                      <div className="mt-2">
                        <h5 className="font-semibold text-gray-800 mb-2">Agriculture/Pharmacy Stream</h5>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Botany: {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Botany} questions</li>
                          <li>Zoology: {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Zoology} questions</li>
                          <li>Physics: {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Physics} questions</li>
                          <li>Chemistry: {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Chemistry} questions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Syllabus Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Syllabus</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Based On:</strong> {data.Syllabus["Based On"]}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Engineering Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Mathematics</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Engineering Stream"].Mathematics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Physics</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Engineering Stream"].Physics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Chemistry</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Engineering Stream"].Chemistry.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Agriculture & Pharmacy Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Botany</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Agriculture & Pharmacy Stream"].Botany.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Zoology</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Agriculture & Pharmacy Stream"].Zoology.map((topic, index) => (
                              <li key={index}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cutoff Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cutoff Information</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Minimum Qualifying Marks:</strong> {data.Cutoff["Minimum Qualifying Marks"]}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Engineering Stream Expected Ranks (2026)</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-3 text-left font-semibold text-gray-800">Marks Range</th>
                              <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            {Object.entries(data.Cutoff["Engineering Stream (expected ranks for 2026)"]).map(([marks, rank]) => (
                              <tr key={marks}>
                                <td className="p-3">{marks}</td>
                                <td className="p-3">{rank}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Agriculture & Pharmacy Stream Expected Ranks (2026)</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-3 text-left font-semibold text-gray-800">Marks Range</th>
                              <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            {Object.entries(data.Cutoff["Agriculture & Pharmacy Stream (expected ranks for 2026)"]).map(([marks, rank]) => (
                              <tr key={marks}>
                                <td className="p-3">{marks}</td>
                                <td className="p-3">{rank}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Counselling Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Counselling Process</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Mode:</strong> {data.Counselling.Mode}</p>
                    <p className="text-gray-700"><strong>Fee:</strong> {data.Counselling.Fee}</p>
                    <p className="text-gray-700"><strong>Seat Allocation:</strong> {data.Counselling["Seat Allocation"]}</p>
                    <p className="text-gray-700"><strong>Additional Rounds:</strong> {data.Counselling["Additional Rounds"]}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Counselling Steps</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Counselling.Steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Counselling["Documents Required"].map((doc, index) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* References Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Official References</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {data.References.map((reference, index) => (
                      <li key={index}>
                        <a href={reference} className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {reference}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Important Dates</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Notification Release:</span>
                      <span className="font-semibold">{data["Important Dates"]["Notification Release"]}</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Application Opens:</span>
                      <span className="font-semibold">{data["Important Dates"]["Application Window Opens"]}</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Last Date to Apply:</span>
                      <span className="font-semibold">{data["Important Dates"]["Last Date to Apply"]}</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Correction Window:</span>
                      <span className="font-semibold">{data["Important Dates"]["Application Correction Window"]}</span>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Admit Card Release:</span>
                      <span className="font-semibold">{data["Important Dates"]["Admit Card Release"]}</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Result Declaration:</span>
                      <span className="font-semibold">{data["Important Dates"]["Result/Rank Card Release"]}</span>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Counselling Begins:</span>
                      <span className="font-semibold">{data["Important Dates"]["Counselling Begins"]}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Dates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Agriculture & Pharmacy</h4>
                      <p className="text-green-700">{data["Important Dates"]["Exam Dates"]["Agriculture & Pharmacy"]}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Engineering</h4>
                      <p className="text-blue-700">{data["Important Dates"]["Exam Dates"]["Engineering"]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Eligibility Criteria</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Nationality & Domicile</h3>
                  <div className="space-y-2">
                    <p><strong>Nationality:</strong> {data.Eligibility.Nationality}</p>
                    <p><strong>Domicile:</strong> {data.Eligibility.Domicile}</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Minimum Age Requirements</h3>
                  <div className="space-y-2">
                    <p><strong>Engineering & Pharmacy:</strong> {data.Eligibility["Minimum Age"]["Engineering & Pharmacy"]}</p>
                    <p><strong>Agriculture & Allied Courses:</strong> {data.Eligibility["Minimum Age"]["Agriculture & Allied Courses"]}</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Educational Qualification</h3>
                  <div className="space-y-2">
                    <p><strong>Engineering:</strong> {data.Eligibility["Educational Qualification"].Engineering}</p>
                    <p><strong>Agriculture & Pharmacy:</strong> {data.Eligibility["Educational Qualification"]["Agriculture & Pharmacy"]}</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Minimum Marks Required</h3>
                  <div className="space-y-2">
                    <p><strong>General:</strong> {data.Eligibility["Minimum Marks"].General}</p>
                    <p><strong>SC/ST:</strong> {data.Eligibility["Minimum Marks"]["SC/ST"]}</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Additional Information</h3>
                  <p className="text-yellow-700">{data.Eligibility.Additional}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Application Process</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Application Mode</h3>
                  <p className="text-blue-700">{data.Application.Mode}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Fee</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 p-3 text-left">Category</th>
                          <th className="border border-gray-300 p-3 text-left">Single Stream</th>
                          <th className="border border-gray-300 p-3 text-left">Both Streams</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">General</td>
                          <td className="border border-gray-300 p-3">₹600</td>
                          <td className="border border-gray-300 p-3">₹1200</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">OBC</td>
                          <td className="border border-gray-300 p-3">₹550</td>
                          <td className="border border-gray-300 p-3">₹1100</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">SC/ST</td>
                          <td className="border border-gray-300 p-3">₹500</td>
                          <td className="border border-gray-300 p-3">₹1000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Documents Required</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {data.Application["Documents Required"].map((doc, index) => (
                      <li key={index} className="text-purple-700">{doc}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Application Steps</h3>
                  <div className="space-y-3">
                    {data.Application.Steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-green-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Exam Pattern</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Mode</h3>
                    <p className="text-blue-700">{data["Exam Pattern"].Mode}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Duration</h3>
                    <p className="text-green-700">{data["Exam Pattern"].Duration}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Total Questions</h3>
                    <p className="text-purple-700">{data["Exam Pattern"].Questions.Total}</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Languages</h3>
                  <p className="text-orange-700">{data["Exam Pattern"].Languages}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Question Distribution</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">Engineering Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{data["Exam Pattern"].Questions.Engineering.Mathematics}</div>
                          <div className="text-sm text-gray-600">Mathematics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{data["Exam Pattern"].Questions.Engineering.Physics}</div>
                          <div className="text-sm text-gray-600">Physics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{data["Exam Pattern"].Questions.Engineering.Chemistry}</div>
                          <div className="text-sm text-gray-600">Chemistry</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">Agriculture & Pharmacy Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Botany}</div>
                          <div className="text-sm text-gray-600">Botany</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Zoology}</div>
                          <div className="text-sm text-gray-600">Zoology</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Physics}</div>
                          <div className="text-sm text-gray-600">Physics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Chemistry}</div>
                          <div className="text-sm text-gray-600">Chemistry</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Marking Scheme</h3>
                  <p className="text-yellow-700">{data["Exam Pattern"].Questions.Type}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Syllabus</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Based On</h3>
                  <p className="text-blue-700">{data.Syllabus["Based On"]}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Engineering Stream</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Mathematics</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus["Engineering Stream"].Mathematics.map((topic, index) => (
                            <li key={index} className="text-blue-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Physics</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus["Engineering Stream"].Physics.map((topic, index) => (
                            <li key={index} className="text-green-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Chemistry</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus["Engineering Stream"].Chemistry.map((topic, index) => (
                            <li key={index} className="text-purple-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Agriculture & Pharmacy Stream</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Botany</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus["Agriculture & Pharmacy Stream"].Botany.map((topic, index) => (
                            <li key={index} className="text-orange-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Zoology</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus["Agriculture & Pharmacy Stream"].Zoology.map((topic, index) => (
                            <li key={index} className="text-yellow-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Expected Cutoff</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Minimum Qualifying Marks</h3>
                  <p className="text-blue-700">{data.Cutoff["Minimum Qualifying Marks"]}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Engineering Stream - Expected Ranks</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 p-3 text-left">Marks Range</th>
                          <th className="border border-gray-300 p-3 text-left">Expected Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">150–160</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Engineering Stream (expected ranks for 2026)"]["150–160 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">140–149</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Engineering Stream (expected ranks for 2026)"]["140–149 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">130–139</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Engineering Stream (expected ranks for 2026)"]["130–139 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">120–129</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Engineering Stream (expected ranks for 2026)"]["120–129 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">110–119</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Engineering Stream (expected ranks for 2026)"]["110–119 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">100–109</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Engineering Stream (expected ranks for 2026)"]["100–109 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">70</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Engineering Stream (expected ranks for 2026)"]["70 marks"]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Agriculture & Pharmacy Stream - Expected Ranks</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 p-3 text-left">Marks Range</th>
                          <th className="border border-gray-300 p-3 text-left">Expected Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">140–160</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Agriculture & Pharmacy Stream (expected ranks for 2026)"]["140–160 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">130–139</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Agriculture & Pharmacy Stream (expected ranks for 2026)"]["130–139 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">120–129</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Agriculture & Pharmacy Stream (expected ranks for 2026)"]["120–129 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">110–119</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Agriculture & Pharmacy Stream (expected ranks for 2026)"]["110–119 marks"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">100–109</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff["Agriculture & Pharmacy Stream (expected ranks for 2026)"]["100–109 marks"]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Counselling Process</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Counselling Mode & Fee</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Mode:</span>
                      <span className="font-semibold">{data.Counselling.Mode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Fee:</span>
                      <span className="font-semibold">{data.Counselling.Fee}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Process</h3>
                  <div className="space-y-3">
                    {data.Counselling.Steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Seat Allocation</h3>
                  <p className="text-green-700">{data.Counselling["Seat Allocation"]}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Additional Rounds</h3>
                  <p className="text-purple-700">{data.Counselling["Additional Rounds"]}</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Documents Required for Counselling</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {data.Counselling["Documents Required"].map((doc, index) => (
                      <li key={index} className="text-orange-700">{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Overview</h2>
              <p className="text-gray-600">Select a tab to view detailed information about AP EAMCET 2026.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-gray-600">StudentHub</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Download PDF
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Title Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AP</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">ANDHRA PRADESH</div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  AP EAMCET 2026: Exam Dates, Pattern, Syllabus, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 font-medium">#APEAMCET</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex justify-center space-x-2 px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-3 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-gray-800 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Engineering Admissions OPEN</h3>
              
              {/* JNTU Kakinada */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">JNTU Kakinada</h4>
                    <p className="text-sm text-gray-600">Jawaharlal Nehru Technological University</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Premier Institute | 2000+ Seats | AP EAMCET Based | State University
                </p>
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-sm font-medium">
                  ✓ Apply Now
                </button>
              </div>

              {/* Andhra University */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Andhra University</h4>
                    <p className="text-sm text-gray-600">Visakhapatnam</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Historic University | 1500+ Seats | AP EAMCET Based | State University
                </p>
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-sm font-medium">
                  ✓ Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APEAMCETPage;
