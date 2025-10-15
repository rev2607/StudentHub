import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tseamcetData from './tseamcet.json';

interface TSEAMCETData {
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

const TSEAMCETPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const data = tseamcetData as TSEAMCETData;

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026</h2>
              
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
                      <p className="text-gray-700"><strong>Application Form Release:</strong> {data.ImportantDates.ApplicationFormRelease}</p>
                      <p className="text-gray-700"><strong>Application Correction Window:</strong> {data.ImportantDates.ApplicationCorrectionWindow}</p>
                      <p className="text-gray-700"><strong>Admit Card Release:</strong> {data.ImportantDates.AdmitCardRelease}</p>
                  </div>
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Exam Dates:</strong> {data.ImportantDates.ExamDates}</p>
                      <p className="text-gray-700"><strong>Answer Key Update:</strong> {data.ImportantDates.AnswerKeyUpdate}</p>
                      <p className="text-gray-700"><strong>Result Declaration:</strong> {data.ImportantDates.ResultDeclaration}</p>
                      <p className="text-gray-700"><strong>Counselling Rounds:</strong> {data.ImportantDates.CounsellingRounds}</p>
                  </div>
                  </div>
                  </div>

                {/* Eligibility Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligibility Criteria</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Nationality:</strong> {data.Eligibility.Nationality}</p>
                    <p className="text-gray-700"><strong>Domicile:</strong> {data.Eligibility.Domicile}</p>
                    <p className="text-gray-700"><strong>Education:</strong> {data.Eligibility.Education}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Age Limits</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>General:</strong> {data.Eligibility.AgeLimit.General}</li>
                        <li><strong>SC/ST:</strong> {data.Eligibility.AgeLimit.SC_ST}</li>
                        <li><strong>Pharmacy:</strong> {data.Eligibility.AgeLimit.Pharmacy}</li>
                      </ul>
                </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Minimum Marks</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering (General):</strong> {data.Eligibility.MinimumMarks.Engineering.General}</li>
                        <li><strong>Engineering (Reserved):</strong> {data.Eligibility.MinimumMarks.Engineering.Reserved}</li>
                        <li><strong>Agriculture/Pharmacy:</strong> {data.Eligibility.MinimumMarks.Agriculture_Pharmacy}</li>
                      </ul>
                    </div>
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
                        <li><strong>General:</strong> {data.Application.Fee.General}</li>
                        <li><strong>SC/ST:</strong> {data.Application.Fee.SC_ST}</li>
                      </ul>
                </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Application.RequiredDocuments.map((doc, index) => (
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
                    <p className="text-gray-700"><strong>Mode:</strong> {data.ExamPattern.Mode}</p>
                    <p className="text-gray-700"><strong>Duration:</strong> {data.ExamPattern.Duration}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                      <p className="text-gray-700">{data.ExamPattern.Languages.join(', ')}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Papers</h4>
                      <p className="text-gray-700">{data.ExamPattern.Papers.join(', ')}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Question Distribution</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Engineering</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Mathematics: {data.ExamPattern.Questions.Engineering.Mathematics} questions</li>
                            <li>Physics: {data.ExamPattern.Questions.Engineering.Physics} questions</li>
                            <li>Chemistry: {data.ExamPattern.Questions.Engineering.Chemistry} questions</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Agriculture/Pharmacy</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Biology: {data.ExamPattern.Questions['Agriculture/Pharmacy'].Biology} questions</li>
                            <li>Physics: {data.ExamPattern.Questions['Agriculture/Pharmacy'].Physics} questions</li>
                            <li>Chemistry: {data.ExamPattern.Questions['Agriculture/Pharmacy'].Chemistry} questions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Marking Scheme</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Correct Answer:</strong> {data.ExamPattern.MarkingScheme.CorrectAnswer}</li>
                        <li><strong>Negative Marking:</strong> {data.ExamPattern.MarkingScheme.NegativeMarking}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Syllabus Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Syllabus</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Base:</strong> {data.Syllabus.Base}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Engineering Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Mathematics</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {Array.isArray(data.Syllabus.Engineering.Mathematics) 
                              ? data.Syllabus.Engineering.Mathematics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                                ))
                              : <li>Mathematics topics not available</li>
                            }
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Physics</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {Array.isArray(data.Syllabus.Engineering.Physics) 
                              ? data.Syllabus.Engineering.Physics.map((topic, index) => (
                              <li key={index}>{topic}</li>
                                ))
                              : <li>Physics topics not available</li>
                            }
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Chemistry</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {Array.isArray(data.Syllabus.Engineering.Chemistry) 
                              ? data.Syllabus.Engineering.Chemistry.map((topic, index) => (
                              <li key={index}>{topic}</li>
                                ))
                              : <li>Chemistry topics not available</li>
                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Agriculture/Pharmacy Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Botany</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {Array.isArray(data.Syllabus.Agriculture_Pharmacy.Botany) 
                              ? data.Syllabus.Agriculture_Pharmacy.Botany.map((topic, index) => (
                              <li key={index}>{topic}</li>
                                ))
                              : <li>Botany topics not available</li>
                            }
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Zoology</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {Array.isArray(data.Syllabus.Agriculture_Pharmacy.Zoology) 
                              ? data.Syllabus.Agriculture_Pharmacy.Zoology.map((topic, index) => (
                              <li key={index}>{topic}</li>
                                ))
                              : <li>Zoology topics not available</li>
                            }
                          </ul>
                        </div>
                      </div>
                      <p className="text-gray-700 mt-2"><strong>Physics & Chemistry:</strong> {data.Syllabus.Agriculture_Pharmacy.Physics_Chemistry}</p>
                    </div>
                  </div>
                </div>

                {/* Cutoff Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cutoff Information</h3>
                  <div className="space-y-3">
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Qualifying Marks</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>General:</strong> {data.Cutoff.QualifyingMarks.General}</li>
                        <li><strong>SC/ST:</strong> {data.Cutoff.QualifyingMarks.SC_ST}</li>
                      </ul>
                    </div>

                    <p className="text-gray-700"><strong>Seat Intake 2026:</strong> {data.Cutoff.SeatIntake2026}</p>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Expected Engineering Cutoffs</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-3 text-left font-semibold text-gray-800">College</th>
                              <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            {Object.entries(data.Cutoff.EngineeringCutoff_Expected).map(([college, rank]) => (
                              <tr key={college}>
                                <td className="p-3">{college.replace(/_/g, ' ')}</td>
                                <td className="p-3">{rank}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Marks vs Rank (Indicative)</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-3 text-left font-semibold text-gray-800">Marks Range</th>
                              <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            {Object.entries(data.Cutoff.MarksVsRank_Indicative).map(([marks, rank]) => (
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
                    <p className="text-gray-700"><strong>Rounds:</strong> {data.Counselling.Rounds}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Counselling Fee</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>OC/BC:</strong> {data.Counselling.Fee.OC_BC}</li>
                        <li><strong>SC/ST:</strong> {data.Counselling.Fee.SC_ST}</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Counselling.DocumentsRequired.map((doc, index) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Seat Allotment</h4>
                      <p className="text-gray-700"><strong>Basis:</strong> {data.Counselling.SeatAllotment.Basis}</p>
                      
                      <div className="mt-2">
                        <h5 className="font-semibold text-gray-800 mb-2">Reservation</h5>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li><strong>Unreserved:</strong> {data.Counselling.SeatAllotment.Reservation.Unreserved}</li>
                          <li><strong>Telangana Local:</strong> {data.Counselling.SeatAllotment.Reservation.TelanganaLocal}</li>
                        </ul>
                      </div>

                      <p className="text-gray-700 mt-2"><strong>Post Allotment:</strong> {data.Counselling.SeatAllotment.PostAllotment}</p>
                      <p className="text-gray-700"><strong>Spot Round:</strong> {data.Counselling.SeatAllotment.SpotRound}</p>
                    </div>
                  </div>
                </div>

                {/* Sources Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Official Sources</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {data.Sources.map((source, index) => (
                      <li key={index}>
                        <a href={source} className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Important Dates Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Dates</h2>
              
              <div className="space-y-6">
                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction and Significance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    TS EAMCET (or TG EAPCET since 2024) is Telangana's flagship state-level entrance exam for aspirants seeking admission to undergraduate Engineering, Agriculture, and Pharmacy programs. Conducted by Jawaharlal Nehru Technological University Hyderabad (JNTUH), it is a vital stepping stone for thousands aiming for reputable state colleges and private institutions. The exam's schedule depends heavily on the official timetable announced by Telangana State Council of Higher Education (TSCHE), which is awaited annually with extensive anticipation.
                  </p>
                </div>

                {/* Application Timeline */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Opening and Closure</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Official Opening:</span>
                      <span className="font-semibold text-gray-700">Expected early March 2026 (approximate 1st week)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Application Deadline:</span>
                      <span className="font-semibold text-gray-700">Mid-April 2026, with possible extension via late fee options</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Correction Window:</span>
                      <span className="font-semibold text-gray-700">Opens immediately after application submission, around the 1st week of April</span>
                    </div>
                  </div>
                </div>

                {/* Application Process */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Process Stage-By-Stage</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Registration</h4>
                      <p className="text-gray-700">Candidate registers through <a href="https://eamcet.tsche.ac.in" className="text-gray-600 hover:underline">eamcet.tsche.ac.in</a> using unique mobile/email credentials.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Personal Data</h4>
                      <p className="text-gray-700">Fill detailed personal data including date of birth, gender, domicile, and contact info.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Upload</h4>
                      <p className="text-gray-700">Upload scanned recent passport-size photograph (JPEG, 50-100 KB) and a signature (JPEG, 10-100 KB).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Academic Details</h4>
                      <p className="text-gray-700">Fill academic details (board, year of passing or appearing, marks of 10+2) with accurate information.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Exam Center Selection</h4>
                      <p className="text-gray-700">Select exam centers from a dynamic list covering Telangana, Hyderabad, and surrounding states, with options in the Middle East (UAE).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Fee Payment</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">Pay application fee:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>INR 900 (single stream) / INR 1800 (both streams) for general candidates</li>
                          <li>INR 500 / INR 1000 for SC/ST</li>
                          <li>Fees via net banking, credit/debit card, wallets</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Confirmation</h4>
                      <p className="text-gray-700">Download registration confirmation and application form. Keep printed copies for records.</p>
                    </div>
                  </div>
                </div>

                {/* Exam Scheduling */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Scheduling and Hall Ticket</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Slot Booking:</span>
                      <span className="font-semibold text-gray-700">Starts late February / Early March 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Hall Ticket Release:</span>
                      <span className="font-semibold text-gray-700">Last week of April 2026</span>
                    </div>
                  </div>
                </div>

                {/* Exam Dates */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Dates and Sessions (Detailed)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Agricultural & Pharmacy:</span>
                      <span className="font-semibold text-gray-700">April 29–30, 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Engineering:</span>
                      <span className="font-semibold text-gray-700">May 1–2, 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Session Timing:</span>
                      <span className="font-semibold text-gray-700">Morning (9:00 AM–12:00 PM) & Afternoon (3:00 PM–6:00 PM)</span>
                    </div>
                  </div>
                </div>

                {/* Results Timeline */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Results and Counselling Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Answer Key Release:</span>
                      <span className="font-semibold text-gray-700">Within 48 hours post-exam</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Result Declaration:</span>
                      <span className="font-semibold text-gray-700">Mid-May 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Counselling Start:</span>
                      <span className="font-semibold text-gray-700">Late May / Early June 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Eligibility Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Eligibility Criteria</h2>
              
              <div className="space-y-6">
                {/* Nationality and Domicile */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Nationality and Domicile Requirements</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Nationality:</strong> {data.Eligibility.Nationality}</p>
                    <p className="text-gray-700"><strong>Domicile:</strong> {data.Eligibility.Domicile}</p>
                  </div>
                </div>

                {/* Educational Qualifications */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Educational Qualifications</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Education:</strong> {data.Eligibility.Education}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Minimum Marks Requirements</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering (General):</strong> {data.Eligibility.MinimumMarks.Engineering.General}</li>
                        <li><strong>Engineering (Reserved):</strong> {data.Eligibility.MinimumMarks.Engineering.Reserved}</li>
                        <li><strong>Agriculture/Pharmacy:</strong> {data.Eligibility.MinimumMarks.Agriculture_Pharmacy}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Age Limits */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Age Limits</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>General:</strong> {data.Eligibility.AgeLimit.General}</li>
                    <li><strong>SC/ST:</strong> {data.Eligibility.AgeLimit.SC_ST}</li>
                    <li><strong>Pharmacy:</strong> {data.Eligibility.AgeLimit.Pharmacy}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Application Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Process</h2>
              
              <div className="space-y-6">
                {/* Application Mode */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Mode</h3>
                  <p className="text-gray-700"><strong>Mode:</strong> {data.Application.Mode}</p>
                </div>

                {/* Application Fee */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Fee Structure</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>General:</strong> {data.Application.Fee.General}</li>
                    <li><strong>SC/ST:</strong> {data.Application.Fee.SC_ST}</li>
                  </ul>
                </div>

                {/* Required Documents */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Documents</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {data.Application.RequiredDocuments.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>

                {/* Application Steps */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Steps</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {data.Application.Steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Exam Pattern Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Exam Pattern</h2>
              
              <div className="space-y-6">
                {/* Overview */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      TS EAMCET 2026 is a fully computer-based test (CBT) of three hours duration conducted over multiple days and slots.
                    </p>
                    <p className="text-gray-700">
                      Language options include English, Telugu, and Urdu catering to diverse linguistic groups.
                    </p>
                    <p className="text-gray-700">
                      Separate exam papers designed for Engineering and Agriculture & Pharmacy streams with dedicated syllabi.
                    </p>
                  </div>
                </div>

                {/* Basic Pattern Info */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Exam Information</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Mode:</strong> {data.ExamPattern.Mode}</p>
                    <p className="text-gray-700"><strong>Duration:</strong> {data.ExamPattern.Duration}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                      <p className="text-gray-700">{data.ExamPattern.Languages.join(', ')}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Papers</h4>
                      <p className="text-gray-700">{data.ExamPattern.Papers.join(', ')}</p>
                    </div>
                  </div>
                </div>

                {/* Question Distribution */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Question Distribution & Sectional Analysis</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Engineering Stream</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Mathematics (80 questions)</h5>
                          <p className="text-gray-700">Thorough coverage of Algebra, Calculus, Vectors, 3D Geometry, Probability, Statistics, and Trigonometry.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Physics (40 questions)</h5>
                          <p className="text-gray-700">Mechanics (kinematics, dynamics), Thermodynamics, Laws of Motion, Waves, Optics, Electrostatics, Current Electricity, Magnetism, Modern Physics topics including atomic/nuclear physics.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Chemistry (40 questions)</h5>
                          <p className="text-gray-700">Physical Chemistry (thermodynamics, kinetics), Inorganic elements and compounds (periodic trends, coordination chemistry), Organic Chem (functional groups, reaction mechanisms), Biomolecules.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Agriculture & Pharmacy Stream</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Biology (80 questions)</h5>
                          <p className="text-gray-700">Botany (plant morphology, anatomy, physiology, reproduction, genetics, ecology) and Zoology (animal diversity, physiology, reproduction, genetics, evolution, ecology).</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Physics (40 questions)</h5>
                          <p className="text-gray-700">Same as Engineering stream but with focus on biological applications.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Chemistry (40 questions)</h5>
                          <p className="text-gray-700">Same as Engineering stream but with emphasis on organic chemistry and biochemistry.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marking Scheme */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Marking Scheme</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Correct Answer:</strong> {data.ExamPattern.MarkingScheme.CorrectAnswer}</li>
                    <li><strong>Negative Marking:</strong> {data.ExamPattern.MarkingScheme.NegativeMarking}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Syllabus Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Syllabus</h2>
              
              <div className="space-y-6">
                {/* Syllabus Base */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Base</h3>
                  <p className="text-gray-700"><strong>Base:</strong> {data.Syllabus.Base}</p>
                </div>

                {/* Engineering Stream */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Engineering Stream</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Mathematics</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {Array.isArray(data.Syllabus.Engineering.Mathematics) 
                          ? data.Syllabus.Engineering.Mathematics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                            ))
                          : <li>Mathematics topics not available</li>
                        }
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Physics</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {Array.isArray(data.Syllabus.Engineering.Physics) 
                          ? data.Syllabus.Engineering.Physics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                            ))
                          : <li>Physics topics not available</li>
                        }
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Chemistry</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {Array.isArray(data.Syllabus.Engineering.Chemistry) 
                          ? data.Syllabus.Engineering.Chemistry.map((topic, index) => (
                          <li key={index}>{topic}</li>
                            ))
                          : <li>Chemistry topics not available</li>
                        }
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Agriculture/Pharmacy Stream */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Agriculture/Pharmacy Stream</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Botany</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {Array.isArray(data.Syllabus.Agriculture_Pharmacy.Botany) 
                          ? data.Syllabus.Agriculture_Pharmacy.Botany.map((topic, index) => (
                          <li key={index}>{topic}</li>
                            ))
                          : <li>Botany topics not available</li>
                        }
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Zoology</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {Array.isArray(data.Syllabus.Agriculture_Pharmacy.Zoology) 
                          ? data.Syllabus.Agriculture_Pharmacy.Zoology.map((topic, index) => (
                          <li key={index}>{topic}</li>
                            ))
                          : <li>Zoology topics not available</li>
                        }
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2"><strong>Physics & Chemistry:</strong> {data.Syllabus.Agriculture_Pharmacy.Physics_Chemistry}</p>
                </div>
              </div>
            </div>

            {/* Detailed Cutoff Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Expected Cutoff</h2>
              
              <div className="space-y-6">
                {/* Qualifying Marks */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Qualifying Marks</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>General:</strong> {data.Cutoff.QualifyingMarks.General}</li>
                    <li><strong>SC/ST:</strong> {data.Cutoff.QualifyingMarks.SC_ST}</li>
                  </ul>
                </div>

                {/* Seat Intake */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Seat Intake 2026</h3>
                  <p className="text-gray-700"><strong>Seat Intake 2026:</strong> {data.Cutoff.SeatIntake2026}</p>
                </div>

                {/* Expected Engineering Cutoffs */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Expected Engineering Cutoffs</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">College</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {Object.entries(data.Cutoff.EngineeringCutoff_Expected).map(([college, rank]) => (
                          <tr key={college}>
                            <td className="p-3">{college.replace(/_/g, ' ')}</td>
                            <td className="p-3">{rank}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Marks vs Rank */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Marks vs Rank (Indicative)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Marks Range</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {Object.entries(data.Cutoff.MarksVsRank_Indicative).map(([marks, rank]) => (
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

            {/* Detailed Counselling Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Counselling Process</h2>
              
              <div className="space-y-6">
                {/* Counselling Rounds */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Rounds</h3>
                  <p className="text-gray-700"><strong>Rounds:</strong> {data.Counselling.Rounds}</p>
                </div>

                {/* Counselling Fee */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Fee</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>OC/BC:</strong> {data.Counselling.Fee.OC_BC}</li>
                    <li><strong>SC/ST:</strong> {data.Counselling.Fee.SC_ST}</li>
                  </ul>
                </div>

                {/* Required Documents */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Documents</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {data.Counselling.DocumentsRequired.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>

                {/* Seat Allotment */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Seat Allotment</h3>
                  <p className="text-gray-700"><strong>Basis:</strong> {data.Counselling.SeatAllotment.Basis}</p>
                  
                  <div className="mt-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Reservation</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><strong>Unreserved:</strong> {data.Counselling.SeatAllotment.Reservation.Unreserved}</li>
                      <li><strong>Telangana Local:</strong> {data.Counselling.SeatAllotment.Reservation.TelanganaLocal}</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mt-2"><strong>Post Allotment:</strong> {data.Counselling.SeatAllotment.PostAllotment}</p>
                <p className="text-gray-700"><strong>Spot Round:</strong> {data.Counselling.SeatAllotment.SpotRound}</p>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Dates</h2>
              
              <div className="space-y-6">
                {/* Introduction */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction and Significance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    TS EAMCET (or TG EAPCET since 2024) is Telangana's flagship state-level entrance exam for aspirants seeking admission to undergraduate Engineering, Agriculture, and Pharmacy programs. Conducted by Jawaharlal Nehru Technological University Hyderabad (JNTUH), it is a vital stepping stone for thousands aiming for reputable state colleges and private institutions. The exam's schedule depends heavily on the official timetable announced by Telangana State Council of Higher Education (TSCHE), which is awaited annually with extensive anticipation.
                  </p>
                </div>

                {/* Application Timeline */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Opening and Closure</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Official Opening:</span>
                      <span className="font-semibold text-gray-700">Expected early March 2026 (approximate 1st week)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Application Deadline:</span>
                      <span className="font-semibold text-gray-700">Mid-April 2026, with possible extension via late fee options</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Correction Window:</span>
                      <span className="font-semibold text-gray-700">Opens immediately after application submission, around the 1st week of April</span>
                    </div>
                  </div>
                </div>

                {/* Application Process */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Process Stage-By-Stage</h3>
              <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Registration</h4>
                      <p className="text-gray-700">Candidate registers through <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline">eamcet.tsche.ac.in</a> using unique mobile/email credentials.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Personal Data</h4>
                      <p className="text-gray-700">Fill detailed personal data including date of birth, gender, domicile, and contact info.</p>
                  </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Upload</h4>
                      <p className="text-gray-700">Upload scanned recent passport-size photograph (JPEG, 50-100 KB) and a signature (JPEG, 10-100 KB).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Academic Details</h4>
                      <p className="text-gray-700">Fill academic details (board, year of passing or appearing, marks of 10+2) with accurate information.</p>
                  </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Exam Center Selection</h4>
                      <p className="text-gray-700">Select exam centers from a dynamic list covering Telangana, Hyderabad, and surrounding states, with options in the Middle East (UAE).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Fee Payment</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">Pay application fee:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>INR 900 (single stream) / INR 1800 (both streams) for general candidates</li>
                          <li>INR 500 / INR 1000 for SC/ST</li>
                          <li>Fees via net banking, credit/debit card, wallets</li>
                        </ul>
                  </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Confirmation</h4>
                      <p className="text-gray-700">Download registration confirmation and application form. Keep printed copies for records.</p>
                  </div>
                    </div>
                  </div>

                {/* Exam Scheduling */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Scheduling and Hall Ticket</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Slot Booking:</span>
                      <span className="font-semibold text-gray-700">Starts late February / Early March 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Hall Ticket Release:</span>
                      <span className="font-semibold text-gray-700">Last week of April 2026</span>
                  </div>
                    </div>
                  </div>

                {/* Exam Dates */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Dates and Sessions (Detailed)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Agricultural & Pharmacy:</span>
                      <span className="font-semibold text-gray-700">April 29–30, 2026</span>
                </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Engineering:</span>
                      <span className="font-semibold text-gray-700">May 2–4, 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Sessions:</span>
                      <span className="font-semibold text-gray-700">Multiple slots daily — morning, forenoon, afternoon, evening</span>
                    </div>
                  </div>
                </div>

                {/* Post-Exam Timeline */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Post-Exam Timeline & Key Events</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Answer Key Release:</span>
                      <span className="font-semibold text-gray-700">Within 2 days after each session, typically May 1–3, 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Objection and Challenge:</span>
                      <span className="font-semibold text-gray-700">By 2-3 days after answer key</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Result Declaration (Session 1):</span>
                      <span className="font-semibold text-gray-700">Last week of May, 2026</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Result Declaration (Session 2):</span>
                      <span className="font-semibold text-gray-700">First week of June, 2026</span>
                    </div>
                  </div>
                </div>

                {/* Counselling Process */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling & Admission Process Detailing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Counselling Start:</span>
                      <span className="font-semibold text-gray-700">June 2026 (tentative)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Round Structure:</span>
                      <span className="font-semibold text-gray-700">Three main rounds, with additional spot admission rounds</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Seat Acceptance Fee:</span>
                      <span className="font-semibold text-gray-700">Approx INR 1200 for OBC/OC, INR 600 for SC/ST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Final Reporting:</span>
                      <span className="font-semibold text-gray-700">August/September 2026</span>
                    </div>
                  </div>
                </div>

                {/* Critical Dates Table */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Critical Dates and Update Schedule</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date (Expected)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Application Start</td>
                          <td className="border border-gray-300 px-4 py-2">March 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Exact date varies, late February / early March 2026 expected</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Application End & Correction Window</td>
                          <td className="border border-gray-300 px-4 py-2">April 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Final deadline, online correction available for errors</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Admit Card Download</td>
                          <td className="border border-gray-300 px-4 py-2">Last week of April 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Printable admit card for the exam</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Engineering Exam</td>
                          <td className="border border-gray-300 px-4 py-2">2–4 May 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Multiple slots daily, various cities</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Agriculture & Pharma Exam</td>
                          <td className="border border-gray-300 px-4 py-2">29–30 April 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Selected dates in Hyderabad/ Telangana regions</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Result Announcement</td>
                          <td className="border border-gray-300 px-4 py-2">Last week of May 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Score and rank, along with percentile review</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Counselling Starts</td>
                          <td className="border border-gray-300 px-4 py-2">June 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Online preference entry, seat allotment, verification</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Final Admission & Reporting</td>
                          <td className="border border-gray-300 px-4 py-2">August/September 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Confirm & join at allotted college</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tips and Resources */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Tips & Strategic Advice</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Keep track of official alerts for schedule updates</li>
                    <li>Prepare in mock test environments matching real CBT format</li>
                    <li>Keep documentation organized and ready for upload early</li>
                    <li>Book slots early to avoid last-minute rush</li>
                    <li>Review answer keys and analyze mistakes for each session</li>
                  </ul>
                </div>

                {/* Official Resources */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Official Resources & Updates</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline font-medium">EAMCET Official Portal</a> - for latest dates & announcements
                    </p>
                    <p className="text-gray-700">
                      <a href="https://collegedunia.com/exams/ts-eamcet" className="text-blue-600 hover:underline font-medium">CollegeDunia EAMCET Schedule & Tips</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://education.indianexpress.com/engineering-exam/ts-eamcet-exam-overview" className="text-blue-600 hover:underline font-medium">Education Inc. Updates & Notifications</a>
                    </p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026 Eligibility Criteria</h2>
              
              <div className="space-y-6">
                {/* Nationality and Domicile */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Nationality and Domicile</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      Only Indian Nationals, Persons of Indian Origin (PIO), and Overseas Citizens of India (OCI) card holders are eligible to apply.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Domicile criteria require applicants to be Telangana or Andhra Pradesh local or non-local candidates as per the Government of Telangana's orders</li>
                      <li>Candidates must fulfill local/non-local status requirements decided by continuous residence or education duration in these states for admission under respective categories</li>
                    </ul>
                  </div>
                </div>

                {/* Age Limit Requirements */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Age Limit Requirements</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Minimum Age</h4>
                      <p className="text-gray-700">Minimum age for Engineering and Pharmacy programs is 17 years as of December 31, 2026.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Maximum Age Limits</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>General Category:</strong> 22 years</li>
                        <li><strong>SC/ST Candidates:</strong> 25 years (relaxation up to 3 years)</li>
                        <li><strong>Pharmacy Courses:</strong> No maximum age limit</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Age Verification</h4>
                      <p className="text-gray-700">Age proof to be submitted during counselling must correspond exactly with the applicant's date of birth declared during application.</p>
                    </div>
                  </div>
                </div>

                {/* Educational Qualification */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Educational Qualification</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">For Engineering Admissions</h4>
                      <p className="text-gray-700">Candidates must have passed or be appearing for 10+2 or Intermediate with Physics, Chemistry, and Mathematics (PCM).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">For Agriculture and Pharmacy Admissions</h4>
                      <p className="text-gray-700">Candidates must have passed or be appearing for PCB or PCMB (Physics, Chemistry, Biology with/without Mathematics).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Board Recognition</h4>
                      <p className="text-gray-700">The 10+2 examination or its equivalent should be from a recognized board of education.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Cases</h4>
                      <p className="text-gray-700">Vocational and open school candidates may also be eligible if fulfilling certain syllabus criteria and accumulating minimum marks.</p>
                    </div>
                  </div>
                </div>

                {/* Minimum Marks Required */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Minimum Marks Required for Eligibility</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Engineering Stream</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>General Category:</strong> Minimum aggregate score of 45% in PCM/PCB</li>
                        <li><strong>Reserved Category (SC/ST):</strong> Minimum aggregate of 40% in PCM/PCB</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Agriculture and Pharmacy Streams</h4>
                      <p className="text-gray-700">Candidates should have secured minimum marks relevant to their subject combination in the qualifying examination.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Important Note</h4>
                      <p className="text-gray-700">Practical marks are included when calculating aggregate.</p>
                  </div>
                </div>
              </div>

                {/* Qualifying Examination */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Qualifying Examination and Attempts Details</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Eligible Candidates</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Students appearing for 10+2 or an equivalent exam in 2026</li>
                        <li>Those who passed the exam in 2025</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Multiple Attempts</h4>
                      <p className="text-gray-700">Candidates are permitted multiple attempts to appear for the entrance exam as prescribed by the examination authority.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Improvement Candidates</h4>
                      <p className="text-gray-700">Improvement candidates must ensure they meet all eligibility requirements without compromise.</p>
                    </div>
                  </div>
                </div>

                {/* Local and Non-Local Status */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Local and Non-Local Candidate Status</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Local Candidates</h4>
                      <p className="text-gray-700">Those who have studied in Telangana or Andhra Pradesh for at least four consecutive years up to the qualifying examination.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Non-Local Candidates</h4>
                      <p className="text-gray-700">Include those who studied outside the state or have domicile elsewhere but meet other eligibility requirements.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Seat Allocation</h4>
                      <p className="text-gray-700">Both local and non-local candidates can apply but will be assigned seats as per reservation rules.</p>
                    </div>
                  </div>
                </div>

                {/* Reservation and Relaxation Policy */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation and Relaxation Policy</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Reserved Categories</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Scheduled Castes (SC)</li>
                        <li>Scheduled Tribes (ST)</li>
                        <li>Backward Classes (BC)</li>
                        <li>EWS (Economically Weaker Sections)</li>
                        <li>Physically Handicapped (PH)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Age Relaxation</h4>
                      <p className="text-gray-700">Age relaxation of up to 3 years beyond general limits is applicable for reserved categories.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Provisions</h4>
                      <p className="text-gray-700">Candidates from Jammu & Kashmir and other specified regions may have specific provisions under existing governmental rules.</p>
                    </div>
                  </div>
                </div>

                {/* Required Documents */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Documents for Eligibility Verification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Academic Documents</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Class 10th or Secondary School Certificate (proof of date of birth)</li>
                        <li>Class 12th or Intermediate mark sheets and passing certificates</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Status Certificates</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Domicile certificate / local status certificate</li>
                        <li>Caste certificate (for reservation benefits)</li>
                        <li>Physically Handicapped certificate (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Application Documents</h4>
                    <p className="text-gray-700">Recent photograph and signature as per prescribed guidelines.</p>
                  </div>
                </div>

                {/* Management and NRI Category */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility for Management and NRI Category</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">Separate eligibility provisions apply for candidates seeking admission through management quota or belonging to Non-Resident Indian (NRI) category.</p>
                    <p className="text-gray-700">These candidates must produce valid documents for NRI status and meet the academic credentials as per council regulations.</p>
                  </div>
                </div>

                {/* Important Clarifications */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Clarifications on Eligibility</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Consistency</h4>
                      <p className="text-gray-700">Candidates must ensure that the data and certificates submitted at the time of application and counselling are consistent and accurate to avoid disqualification.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Verification Requirements</h4>
                      <p className="text-gray-700">Relaxations and concessions are extended only upon valid and verified documentation.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Stream Eligibility</h4>
                      <p className="text-gray-700">TS EAMCET is only for students with science stream (PCM/PCB) backgrounds; commerce and arts stream candidates are not eligible.</p>
                    </div>
                  </div>
                </div>

                {/* Academic Syllabus Compliance */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Syllabus Compliance</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">Candidates should have undertaken syllabi compliant with the Telangana Board or an equivalent syllabus identified by the Telangana State Council for Higher Education.</p>
                    <p className="text-gray-700">This ensures the relevancy of physics, chemistry, mathematics, and biology knowledge for preparing for the competitive exam.</p>
                  </div>
                </div>

                {/* Counselling and Admission */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Official Counselling and Admission Guidance</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">Post examination, candidates will undergo a rigorous process of counselling based on merit/rank.</p>
                    <p className="text-gray-700">The admission committee verifies eligibility and ensures candidates meet all prescribed conditions.</p>
                  </div>
                </div>

                {/* References */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">References and Source Links</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline font-medium">Telangana State Council of Higher Education Official Website</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://collegedunia.com/exams/ts-eamcet/eligibility" className="text-blue-600 hover:underline font-medium">Collegedunia TS EAMCET Eligibility Page</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://engineering.careers360.com/articles/ts-eamcet-eligibility-criteria" className="text-blue-600 hover:underline font-medium">Careers360 TS EAMCET Eligibility Review</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://www.shiksha.com/engineering/ts-eamcet-exam" className="text-blue-600 hover:underline font-medium">Shiksha TS EAMCET Eligibility Notes</a>
                    </p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026 Application Process</h2>
              
              <div className="space-y-6">
                {/* Application Platform */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Platform and Access</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      TS EAMCET 2026 application is accessible <em>only</em> through the official online portal 
                      <a href="https://eamcet.tsche.ac.in/" className="text-blue-600 hover:underline font-medium"> eamcet.tsche.ac.in</a>, 
                      ensuring secure, centralized, and transparent processing.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>The portal supports mobile and desktop access, with responsive design for varied device types</li>
                      <li>Candidate accounts require prior registration where each applicant receives a unique login ID for repeated access during application, correction, and slot booking phases</li>
                      <li>The system incorporates robust features such as real-time data autosave, backup, and encrypted transmission to prevent data loss or tampering</li>
                    </ul>
                  </div>
                </div>

                {/* Application Timeline */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Application Timeline</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Phase</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Date Range</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Official Notification Release</td>
                          <td className="border border-gray-300 px-4 py-2">Late February to early March 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Marks commencement of application process</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Application Registration Opens</td>
                          <td className="border border-gray-300 px-4 py-2">First week of March 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Portal opens for fresh candidates</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Application Submission Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">Mid to late April 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Last date for submission without late fee</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Late Fee Submission Window</td>
                          <td className="border border-gray-300 px-4 py-2">Up to 2–3 weeks post-deadline</td>
                          <td className="border border-gray-300 px-4 py-2">Additional fees applicable for submissions</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Application Correction Window</td>
                          <td className="border border-gray-300 px-4 py-2">First to second week April 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Limited scope for editing personal and exam details</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Exam Slot Booking</td>
                          <td className="border border-gray-300 px-4 py-2">Early to mid-May 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Candidates choose exam date and center on first come basis</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Admit Card Availability</td>
                          <td className="border border-gray-300 px-4 py-2">3–5 days prior to exam</td>
                          <td className="border border-gray-300 px-4 py-2">Hall tickets downloadable in candidate accounts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Stepwise Instructions */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Stepwise Application Instructions</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Pre-Application Requirements</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Scan and prepare digital copies of all requisite documents compliant with specifications: color passport photo (50–100 KB), signature (10–30 KB), valid ID proof (Aadhaar/PAN/Passport)</li>
                        <li>Have academic documents (10th and 12th marksheets) ready for data entry</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Fee Payment</h4>
                      <p className="text-gray-700 mb-2">Payment must precede form filling and can be made via several channels:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Telangana State Online portals (MeeSeva, TSTET, etc.)</li>
                        <li>Bank Net Banking and UPI applications</li>
                        <li>Debit/Credit cards</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Acknowledge and record payment transaction number and receipt for troubleshooting.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Detailed Form Filling</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Input accurate personal details including full name, DOB (as per 10th certificate), gender, mobile, and email</li>
                        <li>Fill academic details accurately with passing/appearing year terms</li>
                        <li>Elect exam stream(s): engineering/agriculture/pharmacy or both</li>
                        <li>Select up to three preferred exam centers</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Document Uploading</h4>
                      <p className="text-gray-700">Upload photo and signature scans following strict quality and size constraints; avoid pixelation or distortion. Verify correct orientation and format before submission.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Form Review and Submission</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Perform meticulous review for mistakes, typos, or misentries</li>
                        <li>Declare adherence to honesty declarations</li>
                        <li>Submit final application and download printed copy for record-keeping</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Correction Window</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Limited duration post-submission offers chance to rectify minor details</li>
                        <li>Major fields (qualification, stream) remain locked post-submission</li>
                        <li>Photograph/signature can be updated if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Fee Structure */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Fee Structure and Payment Nuances</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Candidate Category</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Single Stream Fee (₹)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Both Streams Fee (₹)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">General / OC</td>
                          <td className="border border-gray-300 px-4 py-2">900</td>
                          <td className="border border-gray-300 px-4 py-2">1800</td>
                          <td className="border border-gray-300 px-4 py-2">Mandatory for application</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">SC / ST / PH</td>
                          <td className="border border-gray-300 px-4 py-2">500</td>
                          <td className="border border-gray-300 px-4 py-2">1000</td>
                          <td className="border border-gray-300 px-4 py-2">Reserved category concession</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Late Fee</td>
                          <td className="border border-gray-300 px-4 py-2">Additional 1000+</td>
                          <td className="border border-gray-300 px-4 py-2">Additional 2000+</td>
                          <td className="border border-gray-300 px-4 py-2">Charges for late submission</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 space-y-2 text-gray-700">
                    <p>• Payments must be made in full to validate form submission</p>
                    <p>• Duplicate payments are refunded after thorough bank verification within 30–45 days</p>
                  </div>
                </div>

                {/* Technical Tips */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Tips to Avoid Common Pitfalls</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Clear browser cache & enable JavaScript for functionality</li>
                    <li>Supported browsers: Latest Chrome, Firefox recommended; avoid unsupported browsers</li>
                    <li>Disable VPN or proxy servers to prevent geo-location conflicts</li>
                    <li>Avoid rapid multiple payment attempts; confirm transaction status before retry</li>
                    <li>For mobile or tablet users, prefer desktop for critical steps to avoid interface issues</li>
                    <li>Helpline and email support active throughout application window for assistance</li>
                  </ul>
                </div>

                {/* Post-Submission Procedure */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Post-Submission Procedure and Exam Day Protocol</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Pre-Exam</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Slot booking opens approximately 10–14 days before exam; secure preferred date/time to avoid auto-assignment</li>
                        <li>Admit cards issued as digital PDFs with QR and barcode for authentication</li>
                      </ul>
                        </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Exam Day</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Arrive 90 minutes early at exam center for verification procedures</li>
                        <li>Carry admit card and government-issued photo ID (Aadhaar preferred)</li>
                        <li>Biometric and photographic verification obligatory to prevent impersonation</li>
                        <li>Strict prohibition on electronic devices, calculators, paper, notes</li>
                        <li>Rough sheets issuable for in-session calculations only</li>
                      </ul>
                      </div>
                  </div>
                </div>

                {/* Candidate Support */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Candidate Support and Resources</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Official Portal Helpdesk for application, payment, form correction, and download issues</li>
                    <li>Detailed FAQs and procedural guides on govt-affiliated education platforms</li>
                    <li>Partnership educational websites provide stepwise tutorials, mock test access, and deadline reminders</li>
                    <li>Toll-free numbers and email support monitors provide multi-lingual assistance</li>
                  </ul>
                </div>

                {/* Reference List */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Reference List</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline font-medium">Telangana EAMCET Official Portal</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://www.shiksha.com/engineering/ts-eamcet-exam-application-form" className="text-blue-600 hover:underline font-medium">Shiksha Application Guide</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://engineering.careers360.com/articles/ts-eamcet-application-form" className="text-blue-600 hover:underline font-medium">Careers360 Stepwise Application</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://testbook.com/ts-eamcet-exam/application-form" className="text-blue-600 hover:underline font-medium">Testbook Application Help</a>
                    </p>
                    <p className="text-gray-700">Preparation and Error Avoidance Tutorials on YouTube</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026 Exam Pattern</h2>
              
              <div className="space-y-6">
                {/* Overview */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      TS EAMCET 2026 is a fully computer-based test (CBT) of three hours duration conducted over multiple days and slots.
                    </p>
                    <p className="text-gray-700">
                      Language options include English, Telugu, and Urdu catering to diverse linguistic groups.
                    </p>
                    <p className="text-gray-700">
                      Separate exam papers designed for Engineering and Agriculture & Pharmacy streams with dedicated syllabi.
                    </p>
                  </div>
                  </div>

                {/* Question Distribution & Sectional Analysis */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">In-Depth Question Distribution & Sectional Analysis</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Engineering Stream</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Mathematics (80 questions)</h5>
                          <p className="text-gray-700">Thorough coverage of Algebra, Calculus, Vectors, 3D Geometry, Probability, Statistics, and Trigonometry.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Physics (40 questions)</h5>
                          <p className="text-gray-700">Mechanics (kinematics, dynamics), Thermodynamics, Laws of Motion, Waves, Optics, Electrostatics, Current Electricity, Magnetism, Modern Physics topics including atomic/nuclear physics.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Chemistry (40 questions)</h5>
                          <p className="text-gray-700">Physical Chemistry (thermodynamics, kinetics), Inorganic elements and compounds (periodic trends, coordination chemistry), Organic Chem (functional groups, reaction mechanisms), Biomolecules.</p>
                        </div>
                  </div>
                </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Agriculture & Pharmacy Stream</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Biology (80 questions)</h5>
                          <p className="text-gray-700">Detailed Botany and Zoology - cell biology, genetics, taxonomy, physiology, biotechnology, ecology, and evolutionary biology.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-gray-800 mb-2">Physics and Chemistry (40 questions each)</h5>
                          <p className="text-gray-700">Same scope and depth as Engineering stream's respective sections but aligned for biology focus.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marking Scheme */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Marking Scheme Deep Dive</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Scoring System</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Each MCQ carries +1 mark for correct answer</li>
                        <li>Zero negative marking even in guesses or skipped items encourages attempt of all questions</li>
                        <li>Total attainable marks stand at 160</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exam Question Types and Navigation */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Question Types and Navigation</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Question Format</h4>
                      <p className="text-gray-700">All questions are four-option multiple-choice questions with a single correct answer.</p>
                        </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Navigation Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Candidates can freely navigate across sections and within questions in any order</li>
                        <li>Marked questions feature a flag system enabling review before submission</li>
                        <li>Real-time auto-save protects answer integrity in case of unexpected logouts or technical glitches</li>
                      </ul>
                        </div>
                  </div>
                </div>

                {/* Syllabus Alignment */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Alignment & Pedagogical Detailing</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Syllabus Foundation</h4>
                      <p className="text-gray-700">Syllabus strictly aligns with Telangana Board Intermediate courses, with extensive integration of NCERT Class 11 and 12 syllabi for national uniformity and rigour.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Stream-Specific Focus</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Engineering syllabus weights heavily on Mathematics (50% minimum concept-based questions), balanced weight to Physics and Chemistry</li>
                        <li>Agriculture/Pharmacy candidates experience an enriched syllabus focusing on Biology as the primary subject complemented by PCM</li>
                        <li>Syllabus includes modern scientific developments and applied questions to test both conceptual understanding and problem-solving skills</li>
                      </ul>
                        </div>
                      </div>
                    </div>

                {/* Sectional Reminders */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Sectional Reminders and High-Yield Topics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Engineering Mathematics</h4>
                      <p className="text-gray-700">Focuses on Calculus (limits, differentiation, integration), 3D Geometry, and Probability.</p>
                        </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Physics Pillars</h4>
                      <p className="text-gray-700">Rest on Mechanics, Electromagnetism, and Thermodynamics.</p>
                        </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Chemistry Segregation</h4>
                      <p className="text-gray-700">Physical, Organic, and Inorganic with high focus on reaction thermodynamics and coordination compounds.</p>
                        </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Biological Questions</h4>
                      <p className="text-gray-700">Emphasize DNA replication, photosynthesis, human physiology, and molecular biology.</p>
                      </div>
                  </div>
                </div>

                {/* Preparation Insights */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Complexity and Exam Simulation Insights</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Stamina and Time Management</h4>
                      <p className="text-gray-700">Exam's length requires stamina and time management strategies to optimize attempt rate and accuracy.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Practice Recommendations</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Candidates advised to practice sectional mocks with timing to simulate exam conditions</li>
                        <li>Technical understanding of computer-based navigation is essential; offline practice won't suffice</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Historical Stability */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Historical Stability and Evolutionary Trends</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">Consistent question count and marking scheme retained for past five years providing candidates reliable preparation frameworks.</p>
                    <p className="text-gray-700">Incremental enhancements in question taxonomy and distribution for better subject balance over years but no significant structural changes.</p>
                  </div>
                </div>

                {/* Official Resources */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Official Preparation Resources and Technological Supports</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Official Resources</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Regularly updated syllabus PDFs and mock test platforms are available on <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline">eamcet.tsche.ac.in</a></li>
                        <li>Extensive video tutorials and previous year paper solutions are available on career portals like Shiksha, Career360, and Testbook</li>
                        <li>Official app-based mock tests simulate CBT exam interface</li>
                  </ul>
                    </div>
                  </div>
                </div>

                {/* Key Statistical Data */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Statistical Data</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">Average attempt per candidate historically exceeds 150 questions with high correct attempt rates in main-successful candidates.</p>
                    <p className="text-gray-700">Negative marking absence leads to a cautious aggressive attempt approach among aspirants.</p>
                  </div>
                </div>

                {/* Summary Table */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary Table</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Total Questions</td>
                          <td className="border border-gray-300 px-4 py-2">160</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Total Marks</td>
                          <td className="border border-gray-300 px-4 py-2">160</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Duration</td>
                          <td className="border border-gray-300 px-4 py-2">3 hours (180 minutes)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Stream Wise</td>
                          <td className="border border-gray-300 px-4 py-2">Engineering (Mat:80, Phys:40, Chem:40), Agriculture Ph: Bio-80, Phys-40, Chem-40</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Negative Marking</td>
                          <td className="border border-gray-300 px-4 py-2">None</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Language Options</td>
                          <td className="border border-gray-300 px-4 py-2">English, Telugu, Urdu</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Question Type</td>
                          <td className="border border-gray-300 px-4 py-2">MCQ, 4 options, single correct answer</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Navigation</td>
                          <td className="border border-gray-300 px-4 py-2">Free navigation, mark-for-review feature</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Official Syllabus</td>
                          <td className="border border-gray-300 px-4 py-2">Telangana State Board + NCERT Class 11 & 12</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* References */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Authoritative Sources</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <a href="https://eamcet.tsche.ac.in/" className="text-blue-600 hover:underline font-medium">TS EAMCET Official Exam Pattern</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://engineering.careers360.com/articles/ts-eamcet-exam-pattern" className="text-blue-600 hover:underline font-medium">Careers360 TS EAMCET Exam Pattern and Preparation</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://www.shiksha.com/engineering/ts-eamcet-exam-pattern" className="text-blue-600 hover:underline font-medium">Shiksha Syllabus & Pattern</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://testbook.com/ts-eamcet-exam/syllabus-exam-pattern" className="text-blue-600 hover:underline font-medium">Testbook TS EAMCET Full Syllabus</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://www.collegedekho.com/exam/ts-eamcet/paper-analysis" className="text-blue-600 hover:underline font-medium">Collegedunia Exam Paper Analysis</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026 Syllabus</h2>
              
              <div className="space-y-6">
                {/* Syllabus Structure */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Structure</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Foundation</h4>
                      <p className="text-gray-700">Strictly aligned to Telangana State Board of Intermediate Education syllabus (Classes 11 & 12) and NCERT syllabus for Classes 11 and 12 to maintain consistency and rigor.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Streams Covered</h4>
                      <p className="text-gray-700">Engineering (PCM), Agriculture and Pharmacy (PCB or PCMB).</p>
                    </div>
                  </div>
                </div>

                {/* Engineering Stream Detailed Syllabus */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Engineering Stream Detailed Syllabus</h3>
                    
                    <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Mathematics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Algebra</h5>
                          <p className="text-gray-600 text-sm">Sets, Relations, Functions, Complex Numbers, Quadratic Equations, Sequences and Series (Arithmetic/Geometric), Permutations and Combinations, Binomial Theorem and expansions.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Calculus</h5>
                          <p className="text-gray-600 text-sm">Limits, Continuity, Differentiation (rules, applications), Integration (definite/indefinite), Differential Equations of first order.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Probability and Statistics</h5>
                          <p className="text-gray-600 text-sm">Basics of probability, conditional probability, random variables, distributions, mean, median, variance.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Vectors and 3D Geometry</h5>
                          <p className="text-gray-600 text-sm">Vector operations, scalar and vector product, direction cosines and ratios, equations of lines and planes.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Analytical Geometry</h5>
                          <p className="text-gray-600 text-sm">Equations of straight lines, pair of lines, circles, parabola, ellipse, hyperbola.</p>
                        </div>
                      </div>
                      </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Physics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Mechanics</h5>
                          <p className="text-gray-600 text-sm">Units and measurements, laws of motion, work, energy and power, rotational motion, gravitation.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Thermal Physics</h5>
                          <p className="text-gray-600 text-sm">Thermodynamics, kinetic theory of gases.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Oscillation and Waves</h5>
                          <p className="text-gray-600 text-sm">Simple harmonic motion, wave motion, sound waves.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Electricity and Magnetism</h5>
                          <p className="text-gray-600 text-sm">Electrostatics, current electricity, electromagnetic induction, alternating current, magnetism.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Optics</h5>
                          <p className="text-gray-600 text-sm">Reflection, refraction, interference, diffraction, polarization.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Modern Physics</h5>
                          <p className="text-gray-600 text-sm">Atomic models, nuclear physics, semiconductors.</p>
                        </div>
                      </div>
                      </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Chemistry</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Physical Chemistry</h5>
                          <p className="text-gray-600 text-sm">Atomic structure, chemical bonding, thermodynamics, equilibrium, kinetics, electrochemistry, surface chemistry.</p>
                      </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Inorganic Chemistry</h5>
                          <p className="text-gray-600 text-sm">Periodic table properties, coordination chemistry, s-, p-, d-, and f-block elements.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Organic Chemistry</h5>
                          <p className="text-gray-600 text-sm">Functional groups (alcohols, ethers, aldehydes, ketones, carboxylic acids), hydrocarbons, isomerism, reaction mechanisms, biomolecules, polymers.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-700">Environmental Chemistry</h5>
                          <p className="text-gray-600 text-sm">Pollution, green chemistry principles.</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>

                {/* Agriculture & Pharmacy Stream Syllabus */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Agriculture & Pharmacy Stream Syllabus</h3>
                    
                    <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Botany</h4>
                      <p className="text-gray-700">Cell biology, plant taxonomy/classification, plant physiology (photosynthesis, respiration, transpiration), growth and development, plant hormones.</p>
                      <p className="text-gray-700 mt-2">Genetics and evolution including Mendelian laws, patterns of inheritance, evolutionary theories, natural selection.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Zoology</h4>
                      <p className="text-gray-700">Diversity of animals, animal physiology (digestive, circulatory, nervous systems), reproduction and development, biotechnology basics.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">Physics & Chemistry</h4>
                      <p className="text-gray-700">The same as Engineering syllabus to ensure uniformity and understanding in physical and chemical sciences across streams.</p>
                    </div>
                  </div>
                </div>

                {/* Weightage and Question Distribution */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Weightage and Question Distribution</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weightage %</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Key Topics to Focus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Mathematics</td>
                          <td className="border border-gray-300 px-4 py-2">40</td>
                          <td className="border border-gray-300 px-4 py-2">Calculus, Algebra, Vectors</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Physics</td>
                          <td className="border border-gray-300 px-4 py-2">30</td>
                          <td className="border border-gray-300 px-4 py-2">Mechanics, Electricity, Optics</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                          <td className="border border-gray-300 px-4 py-2">30</td>
                          <td className="border border-gray-300 px-4 py-2">Organic Chemistry, Thermodynamics</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Biology</td>
                          <td className="border border-gray-300 px-4 py-2">NA (for Agriculture/Pharmacy)</td>
                          <td className="border border-gray-300 px-4 py-2">Cell Biology, Genetics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Exam Pattern and Question Types */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Pattern and Question Types</h3>
                  <div className="space-y-3">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Multiple Choice Questions (MCQs) only with single correct answer</li>
                      <li>Total questions: 160 for both streams</li>
                      <li>Exam duration: 3 hours</li>
                      <li>No negative marking</li>
                      <li>Questions span core topics in respective disciplines</li>
                        </ul>
                  </div>
                      </div>

                {/* Preparation Tips */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Tips</h3>
                  <div className="space-y-3">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Focus on NCERT textbooks since syllabus closely maps to them</li>
                      <li>Prioritize topics with higher weightage and past year trend observations</li>
                      <li>Allocate study time based on difficulty: more on calculus, mechanics, organic chemistry, genetics</li>
                      <li>Utilize official and third-party mock tests to simulate actual CBT conditions and time management</li>
                      <li>Reinforce conceptual clarity over rote memorization for analytical success</li>
                        </ul>
                  </div>
                      </div>

                {/* Estimated Past Cutoff Trends */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Estimated Past Cutoff Trends to Guide Preparation</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Engineering Stream</h4>
                      <p className="text-gray-700">Engineering top branches cutoff scores are generally above 150/160 marks; moderate branches around 130-150.</p>
                      </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Agriculture and Pharmacy Streams</h4>
                      <p className="text-gray-700">Agriculture and Pharmacy cutoffs slightly lower, reflecting stream-specific demand and exam difficulty.</p>
                    </div>
                  </div>
                </div>

                {/* Additional Study Resources */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Study Resources</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline font-medium">Official TS EAMCET Portal</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://engineering.careers360.com/articles/ts-eamcet-syllabus-2026-for-mpc" className="text-blue-600 hover:underline font-medium">Career360 Syllabus & Preparation Articles</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://www.shiksha.com/engineering/ts-eamcet-exam-syllabus" className="text-blue-600 hover:underline font-medium">Shiksha EAMCET Detailed Syllabus</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://www.collegedekho.com/exam/ts-eamcet/syllabus" className="text-blue-600 hover:underline font-medium">Collegedunia Subject-wise Syllabus</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="https://testbook.com/ts-eamcet-exam/syllabus-exam-pattern" className="text-blue-600 hover:underline font-medium">Testbook Exam Pattern & Mock Tests</a>
                    </p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026 Expected Cutoff and Rank Insight</h2>
              
              <div className="space-y-6">
                {/* Qualifying Criteria and Minimum Marks */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Qualifying Criteria and Minimum Marks</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">General Category</h4>
                      <p className="text-gray-700">General category candidates are required to secure at least 25% of the total marks in TS EAMCET 2026 cumulative score to be considered qualified.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">SC/ST Category</h4>
                      <p className="text-gray-700">Scheduled Caste (SC) and Scheduled Tribe (ST) candidates have no minimum qualifying marks for eligibility, consistent with reservation norms.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Agriculture and Pharmacy Streams</h4>
                      <p className="text-gray-700">Agriculture and Pharmacy streams have similar qualifying benchmarks adjusted for their specific syllabus and evaluation components.</p>
                    </div>
                  </div>
                </div>

                {/* Total Seat Matrix for 2026 */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Total Seat Matrix for 2026</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Total Available Seats</h4>
                      <p className="text-gray-700">Total seats available across all participating Engineering, Agriculture, and Pharmacy colleges under Telangana are projected to be around <strong>116,877</strong>.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Seat Increase</h4>
                      <p className="text-gray-700">This figure represents an increase of approximately <strong>9,433 seats</strong> compared to the previous academic year.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Distribution Focus</h4>
                      <p className="text-gray-700">Seat distribution is proportionally allocated across government, municipal, private, and deemed universities, with a focus on expanding Computer Science and emerging technology branches.</p>
                    </div>
                  </div>
                </div>

                {/* College-Wise Expected Closing Ranks */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">College-Wise Expected Closing Ranks (Engineering Stream)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">College Name</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Closing Rank Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Osmania University College of Engineering</td>
                          <td className="border border-gray-300 px-4 py-2">~2,400</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">JNTUH College of Engineering</td>
                          <td className="border border-gray-300 px-4 py-2">~11,500</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">MVSR Engineering College</td>
                          <td className="border border-gray-300 px-4 py-2">~9,800</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad</td>
                          <td className="border border-gray-300 px-4 py-2">~11,800</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Vasavi College</td>
                          <td className="border border-gray-300 px-4 py-2">~28,600</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">VNR Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)</td>
                          <td className="border border-gray-300 px-4 py-2">~56,500</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">CVR College of Engineering</td>
                          <td className="border border-gray-300 px-4 py-2">~130,000 (end of ranks)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Lower Tier Colleges</td>
                          <td className="border border-gray-300 px-4 py-2">Beyond 130,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 bg-white p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <strong>Note:</strong> These ranks reflect expected competitive closing ranks based on normalized analysis from previous years' trends and current seat matrix expansion.
                    </p>
                  </div>
                </div>

                {/* Marks vs Rank Correlation */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Marks vs Rank Approximate Correlation Table</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Range (Out of 160)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Rank Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">160 – 155</td>
                          <td className="border border-gray-300 px-4 py-2">1 – 50</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">154 – 150</td>
                          <td className="border border-gray-300 px-4 py-2">51 – 150</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">149 – 140</td>
                          <td className="border border-gray-300 px-4 py-2">151 – 400</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">139 – 130</td>
                          <td className="border border-gray-300 px-4 py-2">401 – 1,200</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">129 – 120</td>
                          <td className="border border-gray-300 px-4 py-2">1,201 – 2,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">119 – 110</td>
                          <td className="border border-gray-300 px-4 py-2">2,001 – 4,500</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">109 – 100</td>
                          <td className="border border-gray-300 px-4 py-2">4,501 – 6,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">99 – 90</td>
                          <td className="border border-gray-300 px-4 py-2">6,001 – 10,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">89 – 80</td>
                          <td className="border border-gray-300 px-4 py-2">10,001 – 15,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">79 – 70</td>
                          <td className="border border-gray-300 px-4 py-2">15,001 – 25,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">69 – 60</td>
                          <td className="border border-gray-300 px-4 py-2">25,001 – 40,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">59 – 50</td>
                          <td className="border border-gray-300 px-4 py-2">40,001 – 50,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">49 – 40</td>
                          <td className="border border-gray-300 px-4 py-2">50,001 – 80,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Below 40</td>
                          <td className="border border-gray-300 px-4 py-2">Above 80,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 bg-white p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <strong>Note:</strong> Rank is based on aggregate marks; actual rank cutoffs fluctuate each year due to exam difficulty and applicant pool.
                    </p>
                </div>
              </div>

                {/* Stream-Wise Cutoff Differences */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Stream-Wise Cutoff Differences and Trends</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Computer Science Branches</h4>
                      <p className="text-gray-700">Consistently have the highest cutoffs due to high demand and placement prospects.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Traditional Engineering</h4>
                      <p className="text-gray-700">Mechanical, Civil, and Agricultural Engineering generally have moderate cutoffs reflecting broader seat availability.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Emerging Technology Streams</h4>
                      <p className="text-gray-700">New technology streams (AI, Data Science, Cybersecurity) are influencing continuous rise in closing ranks.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Pharmacy Stream</h4>
                      <p className="text-gray-700">Pharmacy stream cutoffs are typically lower than engineering but vary between government and private institutions.</p>
                    </div>
                  </div>
                </div>

                {/* Seat Reservation and Category-Wise Cutoff */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Seat Reservation and Category-Wise Cutoff Impact</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Reservation Policy Impact</h4>
                      <p className="text-gray-700">Reservation policy influences final cutoffs for each social category.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Category-Specific Lists</h4>
                      <p className="text-gray-700">Scheduled Castes, Scheduled Tribes, BC, and EWS candidates have separate rank lists and relatively relaxed cutoffs.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Domicile Quotas</h4>
                      <p className="text-gray-700">Local vs Non-local status affects seat allocation due to domicile quotas mandated by the Telangana Government.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Reservations</h4>
                      <p className="text-gray-700">Special reservations for persons with disabilities and other categories operate within defined governmental norms influencing effective cutoffs.</p>
                    </div>
                  </div>
                </div>

                {/* Counseling Rounds and Cutoff Dynamics */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Counseling Rounds and Cutoff Adjustment Dynamics</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Initial Counseling Rounds</h4>
                      <p className="text-gray-700">Initial counseling rounds witness highest cutoffs as top rank holders lock seats.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Subsequent Rounds</h4>
                      <p className="text-gray-700">Subsequent rounds, including extended and spot admissions, see lowering of cutoffs with seat vacancies.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Branch and College Choices</h4>
                      <p className="text-gray-700">Branch and college choices influence cutoff thresholds due to differential demand and seat pools.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Sliding and Float Options</h4>
                      <p className="text-gray-700">Sliding and float options allow candidates to move between allotments improving their branch/campus preference fulfillment.</p>
                    </div>
                  </div>
                </div>

                {/* Historical Cutoff Trends */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Historical Cutoff Trends (Past 5-7 Years Synthesis)</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Government Colleges</h4>
                      <p className="text-gray-700">The closing ranks of top government colleges have steadily climbed, reflecting intense competition.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Private Institutions</h4>
                      <p className="text-gray-700">Private institutions exhibit wide variations aligned with regional preferences and infrastructure.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Applicant Growth</h4>
                      <p className="text-gray-700">Overall applicant strength growth drives incremental tightening in qualifying marks.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">New Colleges and Courses</h4>
                      <p className="text-gray-700">Introduction of new colleges and courses causes shifting patterns observed each year.</p>
                    </div>
                  </div>
                </div>

                {/* Preparation Strategy */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Strategy Relative to Cutoff Ranks</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Top Tier Target (Rank 500-1,000)</h4>
                      <p className="text-gray-700">Aspirants targeting top 500 to 1,000 rank bracket must aim scores ≥150 marks.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Mid-Tier Target (Rank 1,000-10,000)</h4>
                      <p className="text-gray-700">Score bands 130–150 correspond to competitive mid-tier college admissions.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Lower-Tier Target</h4>
                      <p className="text-gray-700">For lower-tier colleges, targets of ≥100 marks may suffice, though the aim remains higher due to rising competition.</p>
                    </div>
                  </div>
                </div>

                {/* Additional Data and References */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Data and References</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Official Resources</h4>
                      <p className="text-gray-700">Detailed previous year cutoff data and analysis can be found on official and reputed portals:</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <a href="https://eamcet.tsche.ac.in/" className="text-blue-600 hover:underline font-medium">TS EAMCET Official Cutoff Page</a>
                      </p>
                      <p className="text-gray-700">
                        <a href="https://collegedunia.com/exams/ts-eamcet/cutoff" className="text-blue-600 hover:underline font-medium">Collegedunia TS EAMCET Cutoff Analysis</a>
                      </p>
                      <p className="text-gray-700">
                        <a href="https://engineering.careers360.com/articles/ts-eamcet-cutoff" className="text-blue-600 hover:underline font-medium">Career360 TS EAMCET Cutoff Trends</a>
                      </p>
                      <p className="text-gray-700">
                        <a href="https://testbook.com/ts-eamcet/cutoff" className="text-blue-600 hover:underline font-medium">Testbook Cutoff Insights</a>
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Counseling Information</h4>
                      <p className="text-gray-700">Counseling allotment summaries and branch-wise cutoff charts available post-result declaration every year.</p>
                    </div>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026 Counselling Process</h2>
              
              <div className="space-y-6">
                {/* Conducting Authority & Mode */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Conducting Authority & Mode</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Authority</h4>
                      <p className="text-gray-700">Counselling is conducted online by the Telangana State Council of Higher Education (TSCHE) and JNTU Hyderabad on behalf of the Telangana Government.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Process Components</h4>
                      <p className="text-gray-700">The process encompasses registration, option entry (choice filling), seat allotment, fee payment, document verification, and admission confirmation.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Mode</h4>
                      <p className="text-gray-700">The entire counselling process is paperless and web-based to ensure transparency and convenience for candidates.</p>
                    </div>
                  </div>
                </div>

                {/* Counselling Rounds & Schedule */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Rounds & Schedule</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Main Rounds</h4>
                      <p className="text-gray-700">Three rounds of counselling conducting seat allotments based on merit and preference.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Internal Sliding</h4>
                      <p className="text-gray-700">Post allotment, candidates have the opportunity to upgrade their branch or college if a better seat becomes available.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Spot Admission Rounds</h4>
                      <p className="text-gray-700">Conducted in August 2026 to fill remaining vacant seats.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Schedule Announcement</h4>
                      <p className="text-gray-700">Exact counselling dates are usually announced post-exam result declaration in late May or early June 2026.</p>
                    </div>
                  </div>
                </div>

                {/* Counselling Registration and Fee Payment */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Registration and Fee Payment</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Counselling Fee (INR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Open Category (OC) / Backward Classes (BC)</td>
                          <td className="border border-gray-300 px-4 py-2">1200</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Scheduled Castes (SC) / Scheduled Tribes (ST)</td>
                          <td className="border border-gray-300 px-4 py-2">600</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Payment Requirements</h4>
                      <p className="text-gray-700">Candidates must pay the applicable counselling fee online to register for seat allotment.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Access Unlock</h4>
                      <p className="text-gray-700">Fee payment unlocks access to choice filling and participation in allotment rounds.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Disqualification Risk</h4>
                      <p className="text-gray-700">Failure to pay the fee leads to disqualification from counselling.</p>
                    </div>
                  </div>
                </div>

                {/* Choice Filling Process */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Choice Filling Process</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Preference Entry</h4>
                      <p className="text-gray-700">Candidates must fill their preferences for colleges, courses, and branches in the order of priority via the counselling portal.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Multiple Edits</h4>
                      <p className="text-gray-700">Multiple edits and revisions are allowed before final locking deadlines for each round.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Strategic Filling</h4>
                      <p className="text-gray-700">Strategic filling of choices based on expected ranks and cutoff trends is recommended.</p>
                    </div>
                  </div>
                </div>

                {/* Seat Allotment Process */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Seat Allotment Process</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Allotment Criteria</h4>
                      <p className="text-gray-700">Seats are allotted centrally based on candidate rank, reservation category, available seats, and stated preferences.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Verification Process</h4>
                      <p className="text-gray-700">Merit and eligibility verification precede the allotment confirmation.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Allotment Letters</h4>
                      <p className="text-gray-700">Candidates receive allotment letters via the official portal specifying college, course, and reporting details.</p>
                    </div>
                  </div>
                </div>

                {/* Documents Required */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Documents Required for Counselling and Admission</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Essential Documents</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>TS EAMCET Rank Card</li>
                        <li>TS EAMCET Hall Ticket (Admit Card)</li>
                        <li>Aadhar Card or equivalent valid government ID proof</li>
                        <li>SSC (Class 10) Certificate for Date of Birth</li>
                        <li>Intermediate (Class 12) or equivalent examination marksheet and pass certificate</li>
                  </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Additional Documents</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Caste, Income, Local Status certificates (if applicable, original and photocopies)</li>
                        <li>Disability Certificate (if applicable) for PwD candidates</li>
                        <li>Passport-size photographs as per specifications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Reporting and Admission Confirmation */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Reporting and Admission Confirmation</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Reporting Process</h4>
                      <p className="text-gray-700">After seat allotment and fee payment, candidates must report to the allotted college physically (or online if permitted).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Submission</h4>
                      <p className="text-gray-700">Submission of all original documents and verification on reporting day is mandatory.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Deadline Compliance</h4>
                      <p className="text-gray-700">Non-reporting by deadline results in seat cancellation, potentially forfeiting fees paid.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Final Enrollment</h4>
                      <p className="text-gray-700">Joining confirmation marks the final enrollment for the academic year.</p>
                    </div>
                  </div>
                    </div>
                    
                {/* Reservation Policy */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation Policy and Category Details</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Unreserved Candidates</h4>
                      <p className="text-gray-700">Unreserved (OC) candidates: 15% seat allocation</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Telangana Local Candidates</h4>
                      <p className="text-gray-700">Telangana local candidates: 85% seat allocation as per Telangana State Shrama Pratibha policy</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Government Reservations</h4>
                      <p className="text-gray-700">Reservations for SC/ST, BC, and other government-mandated quotas apply strictly in seat allotment.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Provisions</h4>
                      <p className="text-gray-700">Hospitable provisions for PwD and economically weaker sections.</p>
                    </div>
                      </div>
                    </div>
                    
                {/* Fee Payment Particulars */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Fee Payment Particulars and Refund Rules</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Admission Fee Structure</h4>
                      <p className="text-gray-700">The admission fee varies by college and course but payment of a minimum seat confirmation fee is mandatory.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">General Category Fee</h4>
                      <p className="text-gray-700">For general categories, ₹10,000 or the stipulated fee must be remitted after allotment.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">SC/ST Category Fee</h4>
                      <p className="text-gray-700">SC/ST candidates pay a minimum refundable amount of ₹5,000.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Refund Processing</h4>
                      <p className="text-gray-700">Refunded amounts are processed upon successful completion of admission formalities.</p>
                    </div>
                  </div>
                    </div>
                    
                {/* Seat Matrix and Participating Colleges */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Seat Matrix and Participating Colleges</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Total Participating Colleges</h4>
                      <p className="text-gray-700">Counselling covers admissions to more than 289 Engineering, Agriculture, and Pharmaceutical colleges across Telangana.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Leading Government Colleges</h4>
                      <p className="text-gray-700">Osmania University College of Engineering, JNTUH, MVSR Engineering, CBIT Hyderabad, Vasavi College, VNR VJIET, CVR College, etc.</p>
                  </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Private and Integrated Colleges</h4>
                      <p className="text-gray-700">Multiple private and integrated colleges participate in the process.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Dynamic Seat Matrix</h4>
                      <p className="text-gray-700">Seat matrices by category and college are released and updated dynamically throughout counselling.</p>
                    </div>
                  </div>
                </div>

                {/* Official Links and Support */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Official Links and Support</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Primary Resources</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline font-medium">TS EAMCET Counselling Official Portal</a>
                        </p>
                        <p className="text-gray-700">
                          <a href="https://www.shiksha.com/engineering/ts-eamcet-exam-counselling" className="text-blue-600 hover:underline font-medium">Detailed Counselling Procedure</a>
                        </p>
                        <p className="text-gray-700">
                          <a href="https://engineering.careers360.com/articles/ts-eamcet-counselling" className="text-blue-600 hover:underline font-medium">Counselling FAQ & Updates</a>
                        </p>
                        <p className="text-gray-700">
                          <a href="https://www.collegedekho.com/exam/ts-eamcet/seat-allotment" className="text-blue-600 hover:underline font-medium">Seat Allotment Result Updates</a>
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Support Services</h4>
                      <p className="text-gray-700">Helpline Contacts available on official site for candidate support.</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">TS EAMCET 2026</h2>
              <p className="text-gray-600">Select a tab to view detailed information about TS EAMCET 2026.</p>
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
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Download PDF
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
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
                <img 
                  src="/images/ts-eamcet-logo.jpeg" 
                  alt="TS EAMCET Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  TS EAMCET 2026: Exam Dates, Pattern, Syllabus, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-medium">#TSEAMCET</span>
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
                  Premier Institute | 3000+ Seats | TS EAMCET Based | State University
                </p>
                <button className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition text-sm font-medium">
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
                  Historic University | 2000+ Seats | TS EAMCET Based | State University
                </p>
                <button className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition text-sm font-medium">
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

export default TSEAMCETPage;
