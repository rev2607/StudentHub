import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tseamcetData from './tseamcet.json';

interface TGSEAMCETData {
  Overview: string;
  ImportantDates: {
    ApplicationFormRelease: string;
    ApplicationCorrectionWindow: string;
    AdmitCardRelease: string;
    ExamDates: string;
    AnswerKeyUpdate: string;
    ResultDeclaration: string;
    CounsellingRounds: string;
  };
  Eligibility: {
    Nationality: string;
    Domicile: string;
    AgeLimit: {
      General: string;
      SC_ST: string;
      Pharmacy: string;
    };
    Education: string;
    MinimumMarks: {
      Engineering: {
        General: string;
        Reserved: string;
      };
      Agriculture_Pharmacy: string;
    };
  };
  Application: {
    Mode: string;
    Fee: {
      General: string;
      SC_ST: string;
    };
    RequiredDocuments: string[];
    Steps: string[];
  };
  ExamPattern: {
    Mode: string;
    Duration: string;
    Languages: string[];
    Papers: string[];
    Questions: {
      Engineering: {
        Mathematics: number;
        Physics: number;
        Chemistry: number;
      };
      "Agriculture/Pharmacy": {
        Biology: number;
        Physics: number;
        Chemistry: number;
      };
    };
    QuestionType: string;
    MarkingScheme: {
      CorrectAnswer: string;
      NegativeMarking: string;
    };
  };
  Syllabus: {
    Base: string;
    Engineering: {
      Mathematics: string[];
      Physics: string[];
      Chemistry: string[];
    };
    Agriculture_Pharmacy: {
      Botany: string[];
      Zoology: string[];
      Physics_Chemistry: string;
    };
  };
  Cutoff: {
    QualifyingMarks: {
      General: string;
      SC_ST: string;
    };
    SeatIntake2026: string;
    EngineeringCutoff_Expected: {
      OsmaniaUniversity_CollegeOfEngineering: string;
      JNTUH_CollegeOfEngineering: string;
      MVSR_EngineeringCollege: string;
      CBIT_Hyderabad: string;
      VasaviCollege: string;
      VNR_VJIET: string;
      CVRCollege: string;
      LowerTierColleges: string;
    };
    MarksVsRank_Indicative: {
      "160–155": string;
      "154–150": string;
      "149–140": string;
      "139–130": string;
      "129–120": string;
      "119–110": string;
      "109–100": string;
      "99–90": string;
      "89–80": string;
      "79–70": string;
      "69–60": string;
      "59–50": string;
      "49–40": string;
      Below40: string;
    };
  };
  Counselling: {
    Rounds: string;
    Fee: {
      OC_BC: string;
      SC_ST: string;
    };
    DocumentsRequired: string[];
    SeatAllotment: {
      Basis: string;
      Reservation: {
        Unreserved: string;
        TelanganaLocal: string;
      };
      PostAllotment: string;
      SpotRound: string;
    };
  };
  Sources: string[];
}

const TGSEAMCETPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const data = tseamcetData as TGSEAMCETData;

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET (TG EAPCET) 2026</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">What is TG EAMCET?</h3>
                  <p className="text-blue-700">{data.Overview}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-800 mb-2">Conducting Body</h3>
                    <p className="text-gray-600">JNTU Hyderabad on behalf of TSCHE</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-800 mb-2">Exam Type</h3>
                    <p className="text-gray-600">State Level Entrance Exam</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-800 mb-2">Mode</h3>
                    <p className="text-gray-600">{data.ExamPattern.Mode}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-800 mb-2">Duration</h3>
                    <p className="text-gray-600">{data.ExamPattern.Duration}</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Programs Offered</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">B.Tech/B.E.</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">B.Sc. Agriculture</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">B.Sc. Horticulture</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">B.Pharm</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Pharm-D</span>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Seat Intake 2026</h3>
                  <p className="text-orange-700">{data.Cutoff.SeatIntake2026}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026 Important Dates</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Application Form Release:</span>
                      <span className="font-semibold">{data.ImportantDates.ApplicationFormRelease}</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Correction Window:</span>
                      <span className="font-semibold">{data.ImportantDates.ApplicationCorrectionWindow}</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Admit Card Release:</span>
                      <span className="font-semibold">{data.ImportantDates.AdmitCardRelease}</span>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Exam Dates:</span>
                      <span className="font-semibold">{data.ImportantDates.ExamDates}</span>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Answer Key Update:</span>
                      <span className="font-semibold">{data.ImportantDates.AnswerKeyUpdate}</span>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Result Declaration:</span>
                      <span className="font-semibold">{data.ImportantDates.ResultDeclaration}</span>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Counselling Rounds:</span>
                      <span className="font-semibold">{data.ImportantDates.CounsellingRounds}</span>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026 Eligibility Criteria</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Nationality & Domicile</h3>
                  <div className="space-y-2">
                    <p><strong>Nationality:</strong> {data.Eligibility.Nationality}</p>
                    <p><strong>Domicile:</strong> {data.Eligibility.Domicile}</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Age Limit Requirements</h3>
                  <div className="space-y-2">
                    <p><strong>General:</strong> {data.Eligibility.AgeLimit.General}</p>
                    <p><strong>SC/ST:</strong> {data.Eligibility.AgeLimit.SC_ST}</p>
                    <p><strong>Pharmacy:</strong> {data.Eligibility.AgeLimit.Pharmacy}</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Educational Qualification</h3>
                  <p className="text-purple-700">{data.Eligibility.Education}</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Minimum Marks Required</h3>
                  <div className="space-y-2">
                    <p><strong>Engineering - General:</strong> {data.Eligibility.MinimumMarks.Engineering.General}</p>
                    <p><strong>Engineering - Reserved:</strong> {data.Eligibility.MinimumMarks.Engineering.Reserved}</p>
                    <p><strong>Agriculture/Pharmacy:</strong> {data.Eligibility.MinimumMarks.Agriculture_Pharmacy}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026 Application Process</h2>
              
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
                          <th className="border border-gray-300 p-3 text-left">Fee Structure</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">General</td>
                          <td className="border border-gray-300 p-3">{data.Application.Fee.General}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">SC/ST</td>
                          <td className="border border-gray-300 p-3">{data.Application.Fee.SC_ST}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Required Documents</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {data.Application.RequiredDocuments.map((doc, index) => (
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026 Exam Pattern</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Mode</h3>
                    <p className="text-blue-700">{data.ExamPattern.Mode}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Duration</h3>
                    <p className="text-green-700">{data.ExamPattern.Duration}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Total Questions</h3>
                    <p className="text-purple-700">160 Questions</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.ExamPattern.Languages.map((lang, index) => (
                      <span key={index} className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Question Distribution</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">Engineering Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{data.ExamPattern.Questions.Engineering.Mathematics}</div>
                          <div className="text-sm text-gray-600">Mathematics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{data.ExamPattern.Questions.Engineering.Physics}</div>
                          <div className="text-sm text-gray-600">Physics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{data.ExamPattern.Questions.Engineering.Chemistry}</div>
                          <div className="text-sm text-gray-600">Chemistry</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3">Agriculture & Pharmacy Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{data.ExamPattern.Questions["Agriculture/Pharmacy"].Biology}</div>
                          <div className="text-sm text-gray-600">Biology</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{data.ExamPattern.Questions["Agriculture/Pharmacy"].Physics}</div>
                          <div className="text-sm text-gray-600">Physics</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{data.ExamPattern.Questions["Agriculture/Pharmacy"].Chemistry}</div>
                          <div className="text-sm text-gray-600">Chemistry</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">Marking Scheme</h3>
                  <ul className="space-y-1">
                    <li className="text-yellow-700">• <strong>Question Type:</strong> {data.ExamPattern.QuestionType}</li>
                    <li className="text-yellow-700">• <strong>Correct Answer:</strong> {data.ExamPattern.MarkingScheme.CorrectAnswer}</li>
                    <li className="text-yellow-700">• <strong>Negative Marking:</strong> {data.ExamPattern.MarkingScheme.NegativeMarking}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026 Syllabus</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Based On</h3>
                  <p className="text-blue-700">{data.Syllabus.Base}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Engineering Stream</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Mathematics</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus.Engineering.Mathematics.map((topic, index) => (
                            <li key={index} className="text-blue-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Physics</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus.Engineering.Physics.map((topic, index) => (
                            <li key={index} className="text-green-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Chemistry</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus.Engineering.Chemistry.map((topic, index) => (
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
                          {data.Syllabus.Agriculture_Pharmacy.Botany.map((topic, index) => (
                            <li key={index} className="text-orange-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Zoology</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {data.Syllabus.Agriculture_Pharmacy.Zoology.map((topic, index) => (
                            <li key={index} className="text-yellow-700 text-sm">{topic}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-indigo-800 mb-2">Physics & Chemistry</h4>
                        <p className="text-indigo-700 text-sm">{data.Syllabus.Agriculture_Pharmacy.Physics_Chemistry}</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026 Expected Cutoff</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Qualifying Marks</h3>
                  <div className="space-y-2">
                    <p><strong>General:</strong> {data.Cutoff.QualifyingMarks.General}</p>
                    <p><strong>SC/ST:</strong> {data.Cutoff.QualifyingMarks.SC_ST}</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Seat Intake 2026</h3>
                  <p className="text-green-700">{data.Cutoff.SeatIntake2026}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Engineering Cutoff - Expected Ranks</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 p-3 text-left">College</th>
                          <th className="border border-gray-300 p-3 text-left">Expected Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Osmania University College of Engineering</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.OsmaniaUniversity_CollegeOfEngineering}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">JNTUH College of Engineering</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.JNTUH_CollegeOfEngineering}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">MVSR Engineering College</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.MVSR_EngineeringCollege}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">CBIT Hyderabad</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.CBIT_Hyderabad}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Vasavi College</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.VasaviCollege}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">VNR VJIET</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.VNR_VJIET}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">CVR College</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.CVRCollege}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Lower Tier Colleges</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.EngineeringCutoff_Expected.LowerTierColleges}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Marks vs Rank Correlation</h3>
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
                          <td className="border border-gray-300 p-3">160–155</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["160–155"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">154–150</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["154–150"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">149–140</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["149–140"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">139–130</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["139–130"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">129–120</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["129–120"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">119–110</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["119–110"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">109–100</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["109–100"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">99–90</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["99–90"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">89–80</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["89–80"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">79–70</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["79–70"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">69–60</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["69–60"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">59–50</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["59–50"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">49–40</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative["49–40"]}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Below 40</td>
                          <td className="border border-gray-300 p-3">{data.Cutoff.MarksVsRank_Indicative.Below40}</td>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026 Counselling Process</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Counselling Rounds & Fee</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Rounds:</span>
                      <span className="font-semibold">{data.Counselling.Rounds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">OC/BC Fee:</span>
                      <span className="font-semibold">{data.Counselling.Fee.OC_BC}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">SC/ST Fee:</span>
                      <span className="font-semibold">{data.Counselling.Fee.SC_ST}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Documents Required</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {data.Counselling.DocumentsRequired.map((doc, index) => (
                      <li key={index} className="text-purple-700">{doc}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Seat Allotment Process</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Allotment Basis</h4>
                      <p className="text-green-700">{data.Counselling.SeatAllotment.Basis}</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Reservation Policy</h4>
                      <div className="space-y-1">
                        <p><strong>Unreserved:</strong> {data.Counselling.SeatAllotment.Reservation.Unreserved}</p>
                        <p><strong>Telangana Local:</strong> {data.Counselling.SeatAllotment.Reservation.TelanganaLocal}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Post Allotment</h4>
                      <p className="text-blue-700">{data.Counselling.SeatAllotment.PostAllotment}</p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Spot Round</h4>
                      <p className="text-yellow-700">{data.Counselling.SeatAllotment.SpotRound}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TG EAMCET 2026</h2>
              <p className="text-gray-600">Select a tab to view detailed information about TG EAMCET 2026.</p>
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
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">TG</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">TELANGANA STATE</div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  TG EAMCET 2026: Exam Dates, Pattern, Syllabus, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-medium">#TGEAMCET</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Container */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`whitespace-nowrap px-4 py-2 font-semibold text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-gray-800 border-b-2 border-gray-800 bg-white rounded-t-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
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
              
              {/* JNTU Hyderabad */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">JNTU Hyderabad</h4>
                    <p className="text-sm text-gray-600">Jawaharlal Nehru Technological University</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Premier Institute | 3000+ Seats | TG EAMCET Based | State University
                </p>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition text-sm font-medium">
                  ✓ Apply Now
                </button>
              </div>

              {/* Osmania University */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">O</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Osmania University</h4>
                    <p className="text-sm text-gray-600">Hyderabad</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Historic University | 2000+ Seats | TG EAMCET Based | State University
                </p>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition text-sm font-medium">
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

export default TGSEAMCETPage;
