import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jeeAdvancedData from './jee advance.json';
import iitDelhiLogo from '../../assets/Colleges/indian-institute-of-technology-delhi.png';
import iitMadrasLogo from '../../assets/Colleges/iit-madras-logo-png.png';
import iitKharagpurLogo from '../../assets/Colleges/iit-kharagpur-logo-png_seeklogo-403971.png';

interface JEEAdvancedData {
  ExamName: string;
  ConductingAuthority: string;
  ExamLevel: string;
  ExamCategory: string;
  Frequency: string;
  Languages: string[];
  Mode: string;
  Duration: string;
  Papers: {
    Total: number;
    Description: string;
    Questions: string;
    TotalMarks: string;
  };
  MarkingScheme: {
    General: string;
    MCQs: string;
    "Numerical/Matching": string;
    Note: string;
  };
  ParticipatingInstitutes: string[];
  SeatsAvailable: string;
  Overview: string;
  ImportantDates: {
    Notification: string;
    Registration: string;
    FeePaymentDeadline: string;
    AdmitCardRelease: string;
    ExamDate: string;
    AATRegistration: string;
    AATExamDate: string;
    AnswerKeyRelease: string;
    ResultDeclaration: string;
    JoSAA_Counselling: string;
  };
  EligibilityCriteria: {
    AgeLimit: string;
    Qualification: string;
    Attempts: string;
    JEEMainRank: string;
    IITAdmissionClause: string;
    Subjects: string;
    Percentage: string;
  };
  ApplicationProcess: {
    Steps: string[];
    DocumentsRequired: string[];
    Fees: {
      IndianNationals: {
        "Female/SC/ST/PwD": string;
        Others: string;
      };
      ForeignNationals: {
        SAARC: string;
        "Non-SAARC": string;
      };
    };
    PaymentModes: string[];
  };
  Syllabus: {
    Mathematics: string[];
    Physics: string[];
    Chemistry: string[];
  };
  ExamPattern: {
    Structure: string;
    Sections: string[];
    QuestionTypes: string[];
    Marking: string;
    Language: string;
    Mode: string;
  };
  AdmitCard: {
    Availability: string;
    Contains: string[];
    DocumentsToCarry: string[];
  };
  AnswerKey: {
    Provisional: string;
    ChallengeWindow: string;
    FinalKey: string;
  };
  Result: {
    Evaluation: string;
    Ranking: string;
    Criteria: string;
  };
  Cutoff: {
    QualifyingCutoff2024: {
      CRL: string;
      SC_ST_PwD: string;
    };
    AdmissionCutoff: string;
  };
  Counselling: {
    ConductingBody: string;
    Process: string[];
    CSAB: string;
  };
  Reservation: {
    "OBC-NCL": string;
    "GEN-EWS": string;
    SC: string;
    ST: string;
    PwD: string;
  };
  PreparationTips: {
    StudyApproach: string;
    RecommendedBooks: {
      Mathematics: string[];
      Physics: string[];
      Chemistry: string[];
    };
    Strategy: string[];
  };
  Highlights_2026: {
    SC_Relaxation: string;
    ExamMode: string;
    Pattern: string;
    Focus: string;
  };
  FAQs: {
    Attempts: string;
    PatternChange: string;
    MinimumCutoff: string;
    BothPapersCompulsory: string;
    ItemsToCarry: string;
    AAT: string;
  };
  OfficialContact: {
    Websites: string[];
    Helpline: string;
    Email: string;
  };
  Sources: string[];
}

type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling';

export default function JEEAdvancedPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [data, setData] = useState<JEEAdvancedData | null>(null);

  useEffect(() => {
    setData(jeeAdvancedData as JEEAdvancedData);
  }, []);

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
    { id: 'counselling', label: 'Counselling' },
  ];

  const renderTabContentFor = (tabId: string) => {
    switch (tabId) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Advanced 2026 Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026</h2>
              
              {/* Basic Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Exam Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Name:</span>
                        <span className="text-gray-600">Joint Entrance Examination (JEE) Advanced 2026</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Conducting Authority:</span>
                        <span className="text-gray-600">IIT Roorkee (under JEE Apex Board)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Level:</span>
                        <span className="text-gray-600">National Level Engineering Entrance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Category:</span>
                        <span className="text-gray-600">Undergraduate Engineering Entrance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Frequency:</span>
                        <span className="text-gray-600">Once a year (June)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Languages:</span>
                        <span className="text-gray-600">English and Hindi</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Exam Structure</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Mode:</span>
                        <span className="text-gray-600">Computer-Based Test (CBT)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Duration:</span>
                        <span className="text-gray-600">6 hours total (3 hours each paper)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Total Papers:</span>
                        <span className="text-gray-600">Two papers (both mandatory)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Questions per Paper:</span>
                        <span className="text-gray-600">54 questions each</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Total Marks:</span>
                        <span className="text-gray-600">342–372 marks combined</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">AAT Mode:</span>
                        <span className="text-gray-600">Offline (for B.Arch)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About JEE Advanced */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">About JEE Advanced</h3>
                <div className="p-4">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    JEE Advanced is a highly competitive exam acting as the gateway to premier IITs and other prestigious institutions for engineering and science Integrated Master's programs. Only top 2,50,000 candidates from JEE Main qualify to attempt JEE Advanced. The exam rigorously tests deep understanding, analytical thinking, and problem-solving aptitude in Physics, Chemistry, and Mathematics.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The syllabus has been slightly trimmed (~10%) but retains all critical thinking and conceptual chapters. Exam pattern is multifaceted with changing formats for question types and marking every year, challenging aspirants to adaptive preparation.
                  </p>
                </div>
              </div>

              {/* Important Dates */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Important Dates 2026</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Event</th>
                        <th className="px-4 py-2 text-left">Tentative Date</th>
                        <th className="px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 font-medium">Notification Release</td>
                        <td className="px-4 py-2">December 2025</td>
                        <td className="px-4 py-2">Detailed brochure published online</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Foreign Nationals Reg. Opens</td>
                        <td className="px-4 py-2">1st week April 2026</td>
                        <td className="px-4 py-2">Separate window for NRI/OCI/PIO/fNRI</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Indian Candidates Reg. Opens</td>
                        <td className="px-4 py-2">Mid-April 2026</td>
                        <td className="px-4 py-2">Login via JEE Main roll number</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Registration Closes & Fee Due</td>
                        <td className="px-4 py-2">1st week May 2026</td>
                        <td className="px-4 py-2">Final deadline for application</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Application Correction Window</td>
                        <td className="px-4 py-2">Early May 2026</td>
                        <td className="px-4 py-2">Limited field corrections allowed</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Admit Card Availability</td>
                        <td className="px-4 py-2">2nd week May 2026</td>
                        <td className="px-4 py-2">Downloadable online</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Mock Test Launch</td>
                        <td className="px-4 py-2">April 2026 onwards</td>
                        <td className="px-4 py-2">Official CBT interface practice</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 font-medium">Exam Date (Paper 1 & Paper 2)</td>
                        <td className="px-4 py-2 font-semibold">May 17 or May 24, 2026</td>
                        <td className="px-4 py-2">Sunday (tentative)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Response Sheet Released</td>
                        <td className="px-4 py-2">3rd week May 2026</td>
                        <td className="px-4 py-2">Within 3-5 days after exam</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Provisional Answer Key Released</td>
                        <td className="px-4 py-2">3rd week May 2026</td>
                        <td className="px-4 py-2">Concurrent with response sheet</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Objection Window</td>
                        <td className="px-4 py-2">48 hours post key release</td>
                        <td className="px-4 py-2">Challenge discrepancies with proof</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Final Answer Key & Result</td>
                        <td className="px-4 py-2">1st/2nd week June 2026</td>
                        <td className="px-4 py-2">After reviewing challenges</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">AAT Registration Begins</td>
                        <td className="px-4 py-2">2nd week June 2026</td>
                        <td className="px-4 py-2">For B.Arch aspirants only</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">AAT Exam</td>
                        <td className="px-4 py-2">3rd week June 2026</td>
                        <td className="px-4 py-2">Offline mode, 3 hours duration</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">JoSAA Counselling Registration</td>
                        <td className="px-4 py-2">Last week June 2026</td>
                        <td className="px-4 py-2">Seat allocation process begins</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">JoSAA Seat Allotment Begins</td>
                        <td className="px-4 py-2">July 2026</td>
                        <td className="px-4 py-2">Multiple rounds of allocation</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Physical Reporting Deadline</td>
                        <td className="px-4 py-2">Late August 2026</td>
                        <td className="px-4 py-2">At allotted IITs</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">CSAB Spot Rounds</td>
                        <td className="px-4 py-2">August 2026</td>
                        <td className="px-4 py-2">For leftover seats</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Eligibility Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Age Requirements</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">General Category</p>
                          <p className="text-gray-600 text-sm">Born on or after October 1, 2001</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">SC/ST/PwD</p>
                          <p className="text-gray-600 text-sm">Born on or after October 1, 1996</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Academic Requirements</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Qualification</p>
                          <p className="text-gray-600 text-sm">10+2 or equivalent examination</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Attempts</p>
                          <p className="text-gray-600 text-sm">Maximum 2 attempts in consecutive years</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">JEE Main Qualification</p>
                          <p className="text-gray-600 text-sm">Top 2,50,000 candidates qualify</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Application Process</h3>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div>
                        <p className="font-semibold text-gray-800">Online Registration</p>
                        <p className="text-gray-600 text-sm">Register using JEE Main roll number and password</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div>
                        <p className="font-semibold text-gray-800">Document Upload</p>
                        <p className="text-gray-600 text-sm">Upload required documents and photographs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div>
                        <p className="font-semibold text-gray-800">Fee Payment</p>
                        <p className="text-gray-600 text-sm">Pay application fee online</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div>
                        <p className="font-semibold text-gray-800">Submit Application</p>
                        <p className="text-gray-600 text-sm">Review and submit the application form</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">5</div>
                      <div>
                        <p className="font-semibold text-gray-800">Download Admit Card</p>
                        <p className="text-gray-600 text-sm">Download admit card when available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Syllabus Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Syllabus Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Mathematics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Algebra</li>
                      <li>• Trigonometry</li>
                      <li>• Analytical Geometry</li>
                      <li>• Differential Calculus</li>
                      <li>• Integral Calculus</li>
                      <li>• Vectors</li>
                    </ul>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Physics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• General Physics</li>
                      <li>• Mechanics</li>
                      <li>• Thermal Physics</li>
                      <li>• Electricity and Magnetism</li>
                      <li>• Waves and Oscillations</li>
                      <li>• Modern Physics</li>
                    </ul>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Chemistry</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Physical Chemistry</li>
                      <li>• Inorganic Chemistry</li>
                      <li>• Organic Chemistry</li>
                      <li>• Chemical Bonding</li>
                      <li>• Thermodynamics</li>
                      <li>• Reaction Mechanisms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Exam Pattern */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Exam Pattern</h3>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Paper Structure</div>
                      <div className="text-gray-700 mt-2">
                        <p>Two papers (Paper 1 and Paper 2), both compulsory. Each paper is 3 hours long.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Question Types</div>
                      <div className="text-gray-700 mt-2">
                        <p>Multiple Choice Questions (MCQ), Numerical Answer Type (NAT), and Matching List Type questions.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Marking Scheme</div>
                      <div className="text-gray-700 mt-2">
                        <p>Variable marking scheme with partial marking for some questions and negative marking for incorrect answers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participating Institutes */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Participating Institutes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Primary Institutes</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 23 Indian Institutes of Technology (IITs)</li>
                      <li>• Indian Institute of Science (IISc)</li>
                      <li>• Indian Institutes of Science Education and Research (IISERs)</li>
                      <li>• Indian Institute of Science Education and Research (IISER)</li>
                    </ul>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Seat Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Total Seats:</span>
                        <span className="text-gray-600">~17,000+ seats</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">IIT Seats:</span>
                        <span className="text-gray-600">~16,000+ seats</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Other Institutes:</span>
                        <span className="text-gray-600">~1,000+ seats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expected Cutoff Trends */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Cutoff Trends</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Expected Cutoff (%)</th>
                        <th className="px-4 py-2 text-left">Approx Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 font-medium">General</td>
                        <td className="px-4 py-2">24-26%</td>
                        <td className="px-4 py-2">85-95</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">OBC-NCL</td>
                        <td className="px-4 py-2">22-24%</td>
                        <td className="px-4 py-2">80-90</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">SC</td>
                        <td className="px-4 py-2">12-15%</td>
                        <td className="px-4 py-2">45-55</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">ST</td>
                        <td className="px-4 py-2">10-12%</td>
                        <td className="px-4 py-2">35-45</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Counselling Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Counselling Process</h3>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">JoSAA Counselling</div>
                      <div className="text-gray-700 mt-2">
                        <p>Joint Seat Allocation Authority (JoSAA) conducts the counselling process for IITs, NITs, IIITs, and GFTIs.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Process Steps</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Online registration and choice filling</li>
                          <li>Multiple rounds of seat allotment</li>
                          <li>Seat acceptance fee payment and document upload</li>
                          <li>Physical reporting and verification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation Criteria */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Reservation Criteria</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="p-3 text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">General</h4>
                    <p className="text-2xl font-bold text-gray-600">50.5%</p>
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">OBC-NCL</h4>
                    <p className="text-2xl font-bold text-gray-600">27%</p>
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">EWS</h4>
                    <p className="text-2xl font-bold text-gray-600">10%</p>
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">SC</h4>
                    <p className="text-2xl font-bold text-gray-600">15%</p>
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="font-semibold text-gray-800 mb-1">ST</h4>
                    <p className="text-2xl font-bold text-gray-600">7.5%</p>
                  </div>
                </div>
              </div>

              {/* Preparation Tips */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Preparation Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Study Strategy</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Focus on conceptual understanding</li>
                      <li>• Practice previous year papers</li>
                      <li>• Take regular mock tests</li>
                      <li>• Maintain consistent study schedule</li>
                    </ul>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Recommended Books</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• NCERT textbooks for basics</li>
                      <li>• HC Verma for Physics</li>
                      <li>• RD Sharma for Mathematics</li>
                      <li>• OP Tandon for Chemistry</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Official Contact Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Official Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Website</h4>
                    <a href="https://jeeadv.ac.in" className="text-blue-600 hover:underline">https://jeeadv.ac.in</a>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Helpline</h4>
                    <p className="text-gray-600">Available on official site</p>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Email</h4>
                    <p className="text-gray-600">Contact info posted on official portal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Render all other tabs after overview content */}
            {renderTabContentFor('dates')}
            {renderTabContentFor('eligibility')}
            {renderTabContentFor('application')}
            {renderTabContentFor('pattern')}
            {renderTabContentFor('syllabus')}
            {renderTabContentFor('cutoff')}
            {renderTabContentFor('counselling')}
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Advanced 2026 Dates & Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026 – Important Dates & Timeline</h2>
              
              {/* Summary Table */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Summary Table of JEE Advanced 2026 Important Dates</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Tentative Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Notification Release</td>
                        <td className="border border-gray-300 px-4 py-2">December 2025</td>
                        <td className="border border-gray-300 px-4 py-2">Detailed brochure published online</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Foreign Nationals Reg. Opens</td>
                        <td className="border border-gray-300 px-4 py-2">1st week April 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Separate window for NRI/OCI/PIO/fNRI</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Indian Candidates Reg. Opens</td>
                        <td className="border border-gray-300 px-4 py-2">Mid-April 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Login via JEE Main roll number</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Registration Closes & Fee Due</td>
                        <td className="border border-gray-300 px-4 py-2">1st week May 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Final deadline for application</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Application Correction Window</td>
                        <td className="border border-gray-300 px-4 py-2">Early May 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Limited field corrections allowed</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Admit Card Availability</td>
                        <td className="border border-gray-300 px-4 py-2">2nd week May 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Downloadable online</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Mock Test Launch</td>
                        <td className="border border-gray-300 px-4 py-2">April 2026 onwards</td>
                        <td className="border border-gray-300 px-4 py-2">Official CBT interface practice</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Exam Date (Paper 1 & Paper 2)</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">May 17 or May 24, 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Sunday (tentative)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Response Sheet Released</td>
                        <td className="border border-gray-300 px-4 py-2">3rd week May 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Within 3-5 days after exam</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Provisional Answer Key Released</td>
                        <td className="border border-gray-300 px-4 py-2">3rd week May 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Concurrent with response sheet</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Objection Window</td>
                        <td className="border border-gray-300 px-4 py-2">48 hours post key release</td>
                        <td className="border border-gray-300 px-4 py-2">Challenge discrepancies with proof</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Final Answer Key & Result</td>
                        <td className="border border-gray-300 px-4 py-2">1st/2nd week June 2026</td>
                        <td className="border border-gray-300 px-4 py-2">After reviewing challenges</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">AAT Registration Begins</td>
                        <td className="border border-gray-300 px-4 py-2">2nd week June 2026</td>
                        <td className="border border-gray-300 px-4 py-2">For B.Arch aspirants only</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">AAT Exam</td>
                        <td className="border border-gray-300 px-4 py-2">3rd week June 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Offline mode, 3 hours duration</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">JoSAA Counselling Registration</td>
                        <td className="border border-gray-300 px-4 py-2">Last week June 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Seat allocation process begins</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">JoSAA Seat Allotment Begins</td>
                        <td className="border border-gray-300 px-4 py-2">July 2026</td>
                        <td className="border border-gray-300 px-4 py-2">Multiple rounds of allocation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Physical Reporting Deadline</td>
                        <td className="border border-gray-300 px-4 py-2">Late August 2026</td>
                        <td className="border border-gray-300 px-4 py-2">At allotted IITs</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">CSAB Spot Rounds</td>
                        <td className="border border-gray-300 px-4 py-2">August 2026</td>
                        <td className="border border-gray-300 px-4 py-2">For leftover seats</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Timeline Sections */}
              <div className="space-y-8">
                {/* 1. Notification & Application Phase */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Notification & Application Phase</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Official Notification Release: December 2025</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Detailed brochure published online on IIT JEE Advanced official website</li>
                          <li>Contains exam schedule, registration instructions, eligibility, syllabus, counseling details</li>
                          <li>City lists for exam centers released together with the notification</li>
                          <li>Changes to exam pattern/structure announced if any</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Registration & Application Process */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Registration & Application Process</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Foreign Nationals Registration: Opens early April 2026</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Separate window for NRI/OCI/PIO/fNRI candidates</li>
                          <li>Fee structure distinct: USD 100–200 for foreign nationals</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Indian Candidates Registration: Mid/third week April 2026</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Login via JEE Main roll number and password</li>
                          <li>Personal details, academic credentials, exam centers, category uploaded online</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Registration Close & Fee Payment Deadline: Early May 2026</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>₹1600 (SC/ST/PwD/Female)</li>
                          <li>₹3200 (General)</li>
                          <li>USD 100–200 for foreign nationals</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Correction Window: Usually 3–5 days after registration closes</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Allows edits on details like exam center, category (limited fields only)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Admit Card and Exam Preparations */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Admit Card and Exam Preparations</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Admit Card Release: Second week May 2026</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Downloadable online after successful registration and fees</li>
                          <li>Contains exam center address, roll number, exam guidelines, photo</li>
                          <li>Exam Centers Announced: Together with admit card, spread across 250+ cities nationwide and internationally</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Candidate Help & Resources</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Official mock tests from late March or April onward to familiarize with CBT interface</li>
                          <li>Scribe Registration (for PwD Candidates): Mid-May 2026</li>
                          <li>Online option to request scribe for examination; approval communicated before exam</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Examination Schedule & Structure */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">4. Examination Schedule & Structure</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Exam Date: Sunday, May 17 or May 24, 2026 (tentative)</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Exam Mode: Computer Based Test (CBT) – online for both papers</li>
                          <li>Paper 1: 9:00 AM – 12:00 Noon</li>
                          <li>Paper 2: 2:30 PM – 5:30 PM</li>
                          <li>Duration: 6 hours total with a break between papers</li>
                          <li>Languages: English or Hindi (candidate choice at time of exam)</li>
                          <li>Additional Time for PwD: 1 hour added to each paper's time</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Post Exam Process */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">5. Post Exam Process</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <div className="font-semibold text-gray-800">Candidate Response Sheet Release: Within 3–5 days after exam</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates can view answers recorded during CBT</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Provisional Answer Key: Released concurrently with response sheet</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Allows candidates to challenge discrepancies by submitting objections with proof</li>
                          <li>Challenge Window: Typically 48 hours post release of provisional answer key</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <div className="font-semibold text-gray-800">Final Answer Key & Result Declaration: First or second week of June 2026</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Released after reviewing challenges, 1 week after exam</li>
                          <li>Online publication of scorecards, AIR, category ranks, subject-wise marks, qualifying status</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Architecture Aptitude Test (AAT) */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">6. Architecture Aptitude Test (AAT)</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-violet-500 pl-4">
                      <div className="font-semibold text-gray-800">AAT Registration: After JEE Advanced results, expected in second week of June 2026</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Exam: Offline, lasted approximately 3 hours, third week of June 2026</li>
                          <li>Content: Tests drawing skills, architectural awareness, imagination, aesthetic sensitivity, 3D perception</li>
                          <li>Result: Late June 2026, "Qualified/Not Qualified" basis</li>
                          <li>Eligibility: Only JEE Advanced-qualified candidates aiming for B.Arch at IIT Roorkee, BHU, or Kharagpur</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Counselling & Admission Process */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">7. Counselling & Admission Process</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-rose-500 pl-4">
                      <div className="font-semibold text-gray-800">JoSAA 2026 Counselling Starts: Last week of June 2026</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Choice Filling Opens: Last week of June 2026</li>
                          <li>Mock Seat Allotment: Early July 2026 to guide candidates on allotment probabilities</li>
                          <li>Round 1 Seat Allotment: July 10–12, 2026</li>
                          <li>Subsequent Rounds (2 to 6): July–August 2026, includes seat acceptance, withdrawal and sliding options</li>
                          <li>Physical Reporting Deadline: By last week of August 2026 at allotted IITs</li>
                          <li>CSAB Special Rounds for Leftover Seats: August 2026 (after JoSAA rounds)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Additional Timelines, Guidelines & Instructions */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">8. Additional Timelines, Guidelines & Instructions</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-slate-500 pl-4">
                      <div className="font-semibold text-gray-800">Important Guidelines</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Final List of Exam Centres: Published with admit card in May 2026</li>
                          <li>Scribe Allocation: Confirmed and communicated by 3–4 days before exam</li>
                          <li>Reporting Time at Centre: Candidates should arrive at least 1 hour before exam start</li>
                          <li>Instructional Guidelines: Issued for conduct, permissible items, dress codes (safety measures with COVID protocols)</li>
                          <li>Tie-Breaking Policy: Published alongside results, based on subject-wise marks and negative answers</li>
                          <li>Rank Lists: Generously divided into various categories – Common Rank List (CRL), GEN-EWS, OBC-NCL, SC, ST, PwD, Preparatory Course</li>
                          <li>Score Recalculation or Re-evaluation: Not provided; challenges apply only to answer keys</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Historical Context and Trends */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">9. Historical Context and Trends</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4">
                      <div className="font-semibold text-gray-800">Recent Trends</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Exam pattern and dates remain consistent with recent years, with slight possibilities of shifting exam weekend dates</li>
                          <li>Increasing focus on CBT mock tests from official portals since 2024</li>
                          <li>Enhanced inclusivity regarding exam centers, languages, and candidate assistance (e.g., scribes for PwD)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sources */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://allen.in/jee-advanced/exam-dates" className="text-gray-600 hover:underline">Allen Institute: Exam Dates</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://www.shiksha.com/engineering/jee-advanced-exam-dates" className="text-gray-600 hover:underline">Shiksha: JEE Advanced Dates</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://www.vedantu.com/jee-main" className="text-gray-600 hover:underline">Vedantu: JEE Main</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://careerpoint.ac.in/blog/jee-advanced-exam-date-syllabus-eligibility-preparation-guide/" className="text-gray-600 hover:underline">Career Point: Exam Guide</a>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://motion.ac.in/blog/jee-advanced-exam-dates/" className="text-gray-600 hover:underline">Motion Education: Exam Dates</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          <a href="https://jeeadv.ac.in" className="text-gray-600 hover:underline">Official Portal: JEE Advanced</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          <a href="https://www.shiksha.com/engineering/articles/jee-advanced-organising-institute-blogId-154879" className="text-gray-600 hover:underline">Shiksha: Organising Institute</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> This comprehensive timeline provides detailed information about JEE Advanced 2026 dates and processes. For the most up-to-date information, always refer to the official JEE Advanced website and notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Advanced 2026 Eligibility Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026 – Comprehensive Eligibility Criteria</h2>
              
              {/* Eligibility Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Eligibility Overview</h3>
                <div className="p-4">
                  <p className="text-gray-700 leading-relaxed">
                    To be eligible for JEE Advanced 2026, candidates must meet multiple comprehensive conditions encompassing performance in JEE Main 2026, age, academic qualification, number of attempts, prior admissions, and subject requirements. Failing any criterion results in disqualification.
                  </p>
                </div>
              </div>

              {/* Summary Table */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Summary Table of Eligibility Requirements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Criterion</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Age Limit</td>
                        <td className="border border-gray-300 px-4 py-2">Gen/OBC/EWS: ≥ Oct 1, 2000; SC/ST/PwD: ≥ Oct 1, 1995</td>
                        <td className="border border-gray-300 px-4 py-2">Rigid per JAB, no exceptions except SC order for dropouts</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Year of Passing Class 12</td>
                        <td className="border border-gray-300 px-4 py-2">2025 or 2026 only</td>
                        <td className="border border-gray-300 px-4 py-2">First appearance only</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Number of Attempts</td>
                        <td className="border border-gray-300 px-4 py-2">Max 2 consecutive; 3 attempts for Nov 2024 dropout exception</td>
                        <td className="border border-gray-300 px-4 py-2">Attempt tracking by JAB</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">JEE Main Eligibility</td>
                        <td className="border border-gray-300 px-4 py-2">Top 2,50,000 candidates by rank</td>
                        <td className="border border-gray-300 px-4 py-2">Across all categories with reservation quota</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Previous IIT Admission</td>
                        <td className="border border-gray-300 px-4 py-2">No prior IIT admission or JoSAA seat acceptance</td>
                        <td className="border border-gray-300 px-4 py-2">Permanent disqualification if violated</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Academic Subjects</td>
                        <td className="border border-gray-300 px-4 py-2">Mandatory PCM (Physics, Chemistry, Mathematics)</td>
                        <td className="border border-gray-300 px-4 py-2">Must be full subjects</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Marks for Admission</td>
                        <td className="border border-gray-300 px-4 py-2">75% (General/OBC/EWS); 65% (SC/ST/PwD) or top 20 percentile</td>
                        <td className="border border-gray-300 px-4 py-2">Applies at counselling</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Valid Category Certificate</td>
                        <td className="border border-gray-300 px-4 py-2">Central Govt format, recent issue date</td>
                        <td className="border border-gray-300 px-4 py-2">Critical for reserved categories</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">PwD Eligibility</td>
                        <td className="border border-gray-300 px-4 py-2">≥ 40% locomotor or relevant disability, certified</td>
                        <td className="border border-gray-300 px-4 py-2">Medical board certification</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Foreign Candidate Eligibility</td>
                        <td className="border border-gray-300 px-4 py-2">AIU equivalency & different window</td>
                        <td className="border border-gray-300 px-4 py-2">Applies for admission</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Eligibility Sections */}
              <div className="space-y-8">
                {/* 2. Age Limit & Category Relaxations */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">2. Age Limit & Category Relaxations</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">General/OBC-NCL/EWS Candidates</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Must be born on or after October 1, 2000 (i.e., maximum age approximately 25.5 years as of exam year)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">SC/ST/PwD Candidates</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Relaxation of 5 years, must be born on or after October 1, 1995</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Date of Birth Proof</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Verified using Class 10 certificate or valid birth certificate at registration and counselling stages</li>
                          <li>No grace period for errors; mismatches cause disqualification</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">No Upper Age Exception for Other Categories</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>These are strictly enforced due to Supreme Court directives</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Academic Qualification */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">3. Academic Qualification</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Year of Passing Class 12 or Equivalent</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Must be the first attempt in either 2025 or 2026</li>
                          <li>Candidates with earlier qualifying exams (2024 or before) are ineligible</li>
                          <li>Physical presence at school for exams not mandatory in exceptional cases (e.g., COVID-19), but the board must officially declare results as "appeared"</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Qualifying Boards Accepted</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>All recognized Indian boards & education authorities (CBSE, ISC, State Boards, NIOS with 5+ subjects)</li>
                          <li>International boards recognized by AIU (GCE A-level, IB Diploma etc.) subject to documentation and AIU equivalency certificate for admission</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. JEE Main 2026 Performance Requirement */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">4. JEE Main 2026 Performance Requirement</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Eligibility Based on JEE Main</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidate must successfully clear JEE Main 2026 Paper 1</li>
                          <li>Only top <strong>2,50,000 rank holders</strong> (including all categories as per reservation quotas) are qualified to register for JEE Advanced 2026</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-pink-500 pl-4">
                      <div className="font-semibold text-gray-800">Distribution of top 2,50,000 candidates by category</div>
                      <div className="text-gray-700 mt-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">General</div>
                            <div className="text-gray-600 font-bold">101,250 (40.5%)</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">OBC-NCL</div>
                            <div className="text-gray-600 font-bold">67,500 (27%)</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">SC</div>
                            <div className="text-gray-600 font-bold">37,500 (15%)</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">ST</div>
                            <div className="text-gray-600 font-bold">18,750 (7.5%)</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">EWS</div>
                            <div className="text-yellow-600 font-bold">25,000 (10%)</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Horizontal PwD reservation 5% applies within above categories</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Number of Attempts */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">5. Number of Attempts</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Maximum Attempts Allowed</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Two attempts over two consecutive years starting from the first JEE Advanced exam appearance or the year of Class 12 qualification</li>
                          <li>E.g., first attempt in 2025 allows only 2026 as a second attempt</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <div className="font-semibold text-gray-800">Exception (Supreme Court Order)</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates who dropped out of college between November 5 – 18, 2024 are permitted a third attempt in 2026</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-rose-500 pl-4">
                      <div className="font-semibold text-gray-800">No Retroactive Attempts</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates who appeared early (before 2025) and did not participate in 2025 ARE NOT eligible in 2026</li>
                          <li>All Attempt Records Recorded with JAB: Candidates who have exhausted attempts are disqualified regardless of rank</li>
                          <li>Candidates admitted to IIT at any time (even if withdrew after joining) are no longer eligible to appear</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Admission Status Clause */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">6. Admission Status Clause</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-violet-500 pl-4">
                      <div className="font-semibold text-gray-800">No Previous IIT Admission</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates must not have taken admission to any IIT previously, irrespective of continuation or withdrawal</li>
                          <li>Acceptance of seat through JoSAA for IIT disqualifies candidate from subsequent JEE Advanced attempts</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Even Seat Acceptance Without Joining Counts</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Opting for admission but not reporting is counted as admittance and disqualifies from JEE Advanced</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Mandatory Subjects in Qualifying Exam */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">7. Mandatory Subjects in Qualifying Exam</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-slate-500 pl-4">
                      <div className="font-semibold text-gray-800">Physics, Chemistry, Mathematics</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Must have been taken as full subjects (not optional/additional) in Class 12 or equivalent</li>
                          <li>Verification at JoSAA Counselling: Candidates submit original mark sheets reflecting these subjects</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-amber-500 pl-4">
                      <div className="font-semibold text-gray-800">Substitution Not Allowed</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates with other streams (BiPC, Commerce, Arts) not eligible for B.Tech through JEE Advanced</li>
                          <li>Eligibility strictly enforced at counselling, not just registration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Minimum Academic Performance Criteria for IIT Admission */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">8. Minimum Academic Performance Criteria for IIT Admission</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-lime-500 pl-4">
                      <div className="font-semibold text-gray-800">For Admission (JoSAA Seats)</div>
                      <div className="text-gray-700 mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">General/OBC/EWS</div>
                            <div className="text-gray-600 font-bold">Minimum 75% aggregate</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">SC/ST/PwD</div>
                            <div className="text-gray-600 font-bold">Minimum 65% aggregate</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Alternative: Must be in top 20 percentile of respective board</p>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-sky-500 pl-4">
                      <div className="font-semibold text-gray-800">For Exam Eligibility</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>No minimum marks required, only passing Class 12 in designated years suffices</li>
                          <li>Eligibility applicable at time of counselling, not exam registration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Other Specific Eligibility Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">9. Other Specific Eligibility Details</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-fuchsia-500 pl-4">
                      <div className="font-semibold text-gray-800">State Code of Eligibility</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Determined by the state where candidate appeared for Class 12; not domicile or residence necessarily</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-stone-500 pl-4">
                      <div className="font-semibold text-gray-800">Certificate Validity</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Category certificates (SC/ST/OBC/EWS) must be valid as per Central Government / JAB guidelines</li>
                          <li>EWS certificate must follow central government format and be issued after April 1, 2025</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-zinc-500 pl-4">
                      <div className="font-semibold text-gray-800">PwD Candidates</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Medical certificate of disability issued by authorized medical board with minimum 40% locomotor disability</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-neutral-500 pl-4">
                      <div className="font-semibold text-gray-800">OCI/PIO/Foreign Nationals</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Different registration window; subject to separate eligibility; AIU equivalency certificate required to take admission in IITs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10. Document Verification and Application Procedure */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">10. Document Verification and Application Procedure</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Documents Required for Registration</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>JEE Main 2026 admit and rank cards</li>
                          <li>Class 10 Certificate for Date of Birth proof</li>
                          <li>Class 12 mark sheet and passing certificate</li>
                          <li>Category certificate (if applicable)</li>
                          <li>PwD certificate (if applicable)</li>
                          <li>Passport and OCI/PIO proof (if foreign nationals)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Physical Verification at Counselling</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Mandatory submission of above originals and photocopies</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Application Fee for JEE Advanced</div>
                      <div className="text-gray-700 mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">General/OBC-NCL</div>
                            <div className="text-gray-600 font-bold">₹3200</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">SC/ST/PwD/Female</div>
                            <div className="text-gray-600 font-bold">₹1600</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border">
                            <div className="font-semibold text-gray-800">Foreign Nationals</div>
                            <div className="text-gray-600 font-bold">USD 200 (non-Saarc), USD 100 (Saarc)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12. Frequency & Process Reminders */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">12. Frequency & Process Reminders</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Important Reminders</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Two-year window for attempts to maintain fresh and fair competition</li>
                          <li>Strict eligibility checks enforced at registration and counselling stages</li>
                          <li>Multiple official notifications released ahead of registration for candidate preparation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 13. Advisories */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">13. Advisories</h3>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Important Advisories</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Carefully check date of birth documents; discrepancies cause cancellation</li>
                          <li>Maintain up-to-date category certificates as per Central Govt norms to ensure valid reservation claim</li>
                          <li>Ensure subjects are full/regular to meet academic criteria</li>
                          <li>Register timely with all required documents to avoid disqualification</li>
                          <li>Utilize official JEE Advanced portal <a href="https://jeeadv.ac.in" className="text-gray-600 hover:underline">jeeadv.ac.in</a> for latest updates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sources */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://allen.in/jee-advanced/eligibility-criteria" className="text-gray-600 hover:underline">Allen Institute: Eligibility Criteria</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://www.shiksha.com/engineering/articles/jee-advanced-eligibility-criteria-blogId-96125" className="text-gray-600 hover:underline">Shiksha: Eligibility Criteria</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://careerpoint.ac.in/blog/jee-advanced-exam-date-syllabus-eligibility-preparation-guide/" className="text-gray-600 hover:underline">CareerPoint: Exam Guide</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://motion.ac.in/jee-advanced-exam/" className="text-gray-600 hover:underline">Motion Education: JEE Advanced</a>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                          <a href="https://www.pw.live/iit-jee/exams/jee-advanced-eligibility-criteria" className="text-gray-600 hover:underline">PW: Eligibility Criteria</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          <a href="https://careerpoint.ac.in/blog/jee-advanced-eligibility-criteria-age-limit-no-of-attempts/" className="text-gray-600 hover:underline">CareerPoint: Age & Attempts</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          <a href="https://engineering.careers360.com/articles/jee-advanced-eligibility-criteria" className="text-gray-600 hover:underline">Careers360: Eligibility</a>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <a href="https://jeeadv.ac.in/admission_criteria.html" className="text-gray-600 hover:underline">Official Portal: Admission Criteria</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> This comprehensive eligibility criteria provides detailed information about JEE Advanced 2026 requirements. For the most up-to-date information, always refer to the official JEE Advanced website and notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Advanced 2026 Application Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026 Application Process</h2>
              
              {/* 1. Eligibility to Apply */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Eligibility to Apply</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Qualification Requirement</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Only candidates among the <strong>top 2,50,000 rank holders</strong> from JEE Main 2026 Paper 1 (all categories combined) are eligible to apply for JEE Advanced 2026</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Verification Process</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Eligibility is automatically cross-checked via JEE Main results database</li>
                          <li>Only verified candidates can register</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Login Credentials</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates must use their <strong>JEE Main 2026 roll number and password</strong> to access the JEE Advanced registration portal</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Category & Reservation Status</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Must provide valid and government-recognized certificates during registration for reservations</li>
                          <li>Categories: OBC-NCL, SC, ST, EWS, PwD, NCC, Ex-Serviceman, Sports Quota</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Application Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">2. Application Process</h3>
                
                {/* Access Official Portal & Secure Login */}
                <div className="p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Access Official Portal & Secure Login</h4>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Portal Access</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Visit the official JEE Advanced website at <a href="https://jeeadv.ac.in" className="text-gray-600 hover:underline">https://jeeadv.ac.in</a> during the active registration window</li>
                          <li>Use valid JEE Main roll number, password, and captcha to log in securely</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Password Requirements</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>New users must create a complex password meeting NTA security norms:</li>
                          <li>8-13 characters</li>
                          <li>At least one uppercase, one lowercase letter</li>
                          <li>At least one digit and special character</li>
                          <li>Maintain confidentiality; log out after use</li>
                          <li>Option for password recovery via registered email/mobile</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Complete Registration Form */}
                <div className="p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Complete Registration Form</h4>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Personal Details</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Personal details prefilled from JEE Main registration system and verified</li>
                          <li>Mandatory verification and/or input for:</li>
                          <li>Personal contact information including alternate email/phone for notices</li>
                          <li>Category selection (general, OBC-NCL, SC/ST, EWS, PwD, others)</li>
                          <li>Physical Disability status, NCC, Sports, Ex-Serviceman if applicable</li>
                          <li>Choice of exam paper language: English or Hindi</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Additional Information</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Choose minimum 3 preferred examination cities from official list (over 200 cities across India + some international options)</li>
                          <li>Declare number of previous JEE Advanced attempts</li>
                          <li>Enter Class 12 exam details (roll number, board, passing year)</li>
                          <li>Candidates must carefully review all information before submission</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upload Required Documents */}
                <div className="p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Upload Required Documents (JPEG/PDF formats)</h4>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Required Documents</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Recent passport-size photograph with clear facial features (size range 10-50 KB recommended)</li>
                          <li>Signature scanned and sized as per guidelines</li>
                          <li>Class 10 (Secondary) Certificate or valid Birth Certificate (strictly for DOB verification)</li>
                          <li>Class 12 Marks Sheet/Passing Certificate or provisional certificate (as per board release)</li>
                          <li>Category Certificate in prescribed Central Government format dated after April 1, 2025 (for OBC/EWS/SC/ST categories)</li>
                          <li>PwD Certificate issued by competent medical board with minimum 40% disability (if applicable)</li>
                          <li>NCC/Sports/Ex-serviceman certificates for reservation claimants</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Important Guidelines</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates advised to maintain original hard copies for counselling</li>
                          <li>Strict file size, format, and resolution instructions issued in brochure</li>
                          <li>Uploads checked systemically to prevent rejection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review & Final Submission */}
                <div className="p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Review & Final Submission</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <div className="font-semibold text-gray-800">Submission Process</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Preview complete application before final submission</li>
                          <li>Application form can only be submitted once; no multiple submissions permitted</li>
                          <li>Editing disabled post-submission; correction windows may be announced for limited changes</li>
                          <li>Candidates must download, save, and/or print confirmation message/receipt along with application copy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Fee Payment */}
                <div className="p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Application Fee Payment</h4>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Fee Structure</div>
                      <div className="text-gray-700 mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg border">
                            <h5 className="font-semibold text-gray-800 mb-2">Indian Nationals (and OCI/PIO)</h5>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="text-gray-700">General/OBC-NCL/EWS male:</span>
                                <span className="font-semibold text-gray-600">₹3200</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-700">Female candidates (all categories), SC/ST/PwD:</span>
                                <span className="font-semibold text-gray-600">₹1600</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border">
                            <h5 className="font-semibold text-gray-800 mb-2">Foreign Candidates</h5>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="text-gray-700">Non-SAARC:</span>
                                <span className="font-semibold text-gray-600">USD 200</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-700">SAARC:</span>
                                <span className="font-semibold text-orange-600">USD 100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <div className="font-semibold text-gray-800">Payment Methods</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li><strong>Online:</strong> Net banking, Credit/Debit cards, UPI, wallet apps supported</li>
                          <li><strong>Offline:</strong> E-challan available through SBI branches for cash deposit; scanned copy to be uploaded online within deadline</li>
                          <li>Payment confirmation is mandatory to validate the application</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Acknowledgment & Admit Card Download */}
                <div className="p-6 mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Acknowledgment & Admit Card Download</h4>
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Post-Submission Process</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Successfully submitted and paid applications generate a unique Application Number</li>
                          <li>Candidates receive confirmation via registered email and SMS with instructions</li>
                          <li>Admit Card available for download approx. 2-3 weeks before exam</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-rose-500 pl-4">
                      <div className="font-semibold text-gray-800">Admit Card Contents</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidate details</li>
                          <li>Exam date/time</li>
                          <li>Center code and address</li>
                          <li>Instructions</li>
                          <li>Careful verification of admit card information by candidate is mandatory to avoid issues on exam day</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Important Guidelines & Candidate Responsibilities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">3. Important Guidelines & Candidate Responsibilities</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Critical Requirements</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Application details MUST match official board/certificate records exactly</li>
                          <li>Discrepancies in name, date of birth, or category can lead to disqualification</li>
                          <li>Candidates advised to keep at least 3 printed copies of application and admit card</li>
                          <li>Password and account safety critical; no sharing with others</li>
                          <li>Candidates must follow all instructions related to exam conduct, dress code, permissible items</li>
                          <li>Use of mobile devices or electronic gadgets inside examination hall causes immediate disqualification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Security, Verification & Support Infrastructure */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">4. Security, Verification & Support Infrastructure</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Security Measures</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>CAPTCHA and OTP verification employed at login and submission for anti-fraud security</li>
                          <li>Online biometric/Digital signature capture at exam centers to authenticate candidates on examination day</li>
                          <li>Personal data managed with full confidentiality as per Indian IT and privacy laws</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Support Infrastructure</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Dedicated NTA and IIT Roorkee helpline via phone, email, and social media for application assistance</li>
                          <li>Online grievance redressal system available for technical/application related issues</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Key Timelines & Important Dates */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">5. Key Timelines & Important Dates (2026 Tentative)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Activity</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Date Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Registration Portal Opening</td>
                        <td className="border border-gray-300 px-4 py-2">April 15 – April 20, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Registration Closing Date</td>
                        <td className="border border-gray-300 px-4 py-2">May 5 – May 7, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Last Date for Fee Payment</td>
                        <td className="border border-gray-300 px-4 py-2">May 7, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Correction Window (If Any)</td>
                        <td className="border border-gray-300 px-4 py-2">May 8 – May 12, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Admit Card Release</td>
                        <td className="border border-gray-300 px-4 py-2">May 15 – May 20, 2026</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Exam Date (Both Papers)</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">May 17 or May 24, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 6. Frequently Asked Questions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">6. Frequently Asked Questions (FAQs)</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Can I apply without qualifying JEE Main 2026?</div>
                      <div className="text-gray-700 mt-2">No, only qualified candidates can register.</div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Is late registration allowed?</div>
                      <div className="text-gray-700 mt-2">No, deadlines are strict with no extensions.</div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Can exam center be changed later?</div>
                      <div className="text-gray-700 mt-2">Only during correction window if announced.</div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">What if I upload wrong or blurry documents?</div>
                      <div className="text-gray-700 mt-2">May lead to rejection; upload high-quality scans carefully.</div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Is offline payment acceptable?</div>
                      <div className="text-gray-700 mt-2">Yes, but must be submitted before deadline and proof uploaded.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Resource Links & Contact */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">7. Resource Links & Contact</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Official Resources</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Official Website & Application Portal: <a href="https://jeeadv.ac.in" className="text-gray-600 hover:underline">https://jeeadv.ac.in</a></li>
                          <li>Helpline Email & Numbers: Available on official site</li>
                          <li>Mock Test & Preparation Resources: Official JEE Advanced portal and partner educational platforms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://engineering.careers360.com/articles/jee-advanced-application-form" className="text-gray-600 hover:underline">Career360: JEE Advanced Application</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/engineering/jee-advanced-exam-application-form" className="text-gray-600 hover:underline">Shiksha: JEE Advanced 2026 Registration</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://allen.in/jee-advanced/registration" className="text-gray-600 hover:underline">Allen Institute: JEE Advanced Registration</a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://motion.ac.in/blog/jee-advanced-application-form/" className="text-gray-600 hover:underline">Motion Education: Application Form</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <a href="https://testbook.com/jee-advanced" className="text-gray-600 hover:underline">Testbook: Fees and Form Details</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <a href="https://jeeadv.ac.in" className="text-gray-600 hover:underline">Official JEE Advanced Website</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This comprehensive application process guide provides detailed information about JEE Advanced 2026 registration and submission. For the most up-to-date information, always refer to the official JEE Advanced website and notifications.
                </p>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Advanced 2026 Exam Pattern */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026 – Comprehensive Exam Pattern</h2>
              
              {/* 1. Exam Structure & Papers */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. Exam Structure & Papers</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Paper Structure</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>JEE Advanced 2026 consists of two papers: <strong>Paper 1</strong> and <strong>Paper 2</strong>, both are <strong>compulsory</strong> to appear and qualify</li>
                          <li>Each paper is conducted on the <strong>same day</strong> in two separate sessions, each of <strong>3 hours duration</strong></li>
                          <li>Both papers combined contribute equally to the final score and ranking</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Exam Mode & Language</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>The <strong>mode</strong> of examination is <strong>Computer Based Test (CBT)</strong>, conducted in secure centers across India and select international centers</li>
                          <li>Candidates can switch language between English and Hindi during the exam</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Subjects Covered */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">2. Subjects Covered in Both Papers</h3>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Physics</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Chemistry</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Mathematics</h4>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 text-center">Each paper contains questions from all three subjects distributed in multiple sections</p>
                </div>
              </div>

              {/* 3. Types of Questions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">3. Types of Questions</h3>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Multiple Choice Questions (MCQ)</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li><strong>Single correct option MCQs:</strong> One correct answer from the choices given</li>
                          <li><strong>Multiple correct options MCQs:</strong> More than one option can be correct; partial marking in some cases</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Numerical Answer Type Questions (NAT)</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Answers must be entered as integers or decimal numbers within the specified range</li>
                          <li>No choices provided; answers evaluated against a tolerance range</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Matching List & Paragraph Type Questions</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates match items from two or more lists (columns)</li>
                          <li>Paragraph type questions embedded in Physics or Chemistry require numerical or conceptual answers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Detailed Breakdown of Sections */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">4. Detailed Breakdown of Sections (Typical)</h3>
                <div className="p-6">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Section Structure</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Both Paper 1 and Paper 2 contain three sections labeled as Section 1, Section 2, and Section 3</li>
                        <li>Each pertains to one of the three subjects</li>
                        <li>Each section contains a mixture of MCQs (single and multiple correct answers), numerical questions, and matching type</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Number of Questions & Total Marks */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">5. Number of Questions & Total Marks</h3>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Questions per Paper</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Number of questions per paper: <strong>54</strong> (varying slightly year-on-year)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-pink-500 pl-4">
                      <div className="font-semibold text-gray-800">Total Marks</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Typical total marks for JEE Advanced: Around <strong>306 marks</strong> combined for both papers (ranges from 342 to 372 in recent years)</li>
                          <li>Approximate marks per paper: ~150–180 marks per paper</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Marking Scheme */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">6. Marking Scheme</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">General Marking Rules</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>The marking scheme varies yearly and is released on exam day with question papers</li>
                          <li>Marks per question can vary between 1 to 4 marks</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Negative Marking Rules</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li><strong>For MCQs with single correct answer:</strong> usually +3 or +4 marks correct, -1 for incorrect</li>
                          <li><strong>For MCQs with multiple correct answers:</strong> partial marking based on accuracy, negative marking for incorrect options chosen</li>
                          <li><strong>For NAT questions:</strong> generally +3 or +4 marks for correct answers, no negative marking, but varies per year</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Important Note</div>
                      <div className="text-gray-700 mt-2">
                        <p>Detailed marking distribution, including partial allotments, is provided on exam day with instructions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Language Options & Mode */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">7. Language Options & Mode</h3>
                <div className="p-6">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Language & Mode Details</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Exam conducted only in <strong>English and Hindi</strong></li>
                        <li>Candidates can choose language at the start and switch between the two during the exam if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Examination Logistics */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">8. Examination Logistics</h3>
                <div className="p-6">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Exam Interface & Features</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Exam interface includes online virtual calculators, on-screen rough work area, and question navigation panel</li>
                        <li>Mark-for-review and answer grid features available</li>
                        <li>Candidates must follow strict protocol for exam conduct and are subject to biometric verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 9. Evaluation & Normalization */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">9. Evaluation & Normalization</h3>
                <div className="p-6">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Scoring & Ranking</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Raw marks from two papers combined to compute final scores</li>
                        <li>No percentile system; ranks assigned based on aggregate marks after applying tie-break rules</li>
                        <li>Negative marking can impact total score substantially</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 10. Important Notes */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">10. Important Notes</h3>
                <div className="p-6">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Key Reminders</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Actual question paper pattern, types, number of questions, and marking scheme can vary every year based on JAB norms</li>
                        <li>Candidates must verify current year detailed instructions released along with question papers on exam day</li>
                        <li>Sample/mock test papers with latest pattern are released by IITs and coaching centers for practice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 11. Historical Evolution */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">11. Historical Evolution</h3>
                <div className="p-6">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <div className="font-semibold text-gray-800">Pattern Changes Over Time</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Recent years have seen an increasing inclusion of multiple correct MCQs and paragraph-based problems</li>
                        <li>Numerical questions retained but with occasional adjustments to marking and inclusion</li>
                        <li>Computer-based exam mode standardized since 2018 with enhanced security and candidate comfort</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 12. Best Practices for Exam Day */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">12. Best Practices for Exam Day Based on Pattern Knowledge</h3>
                <div className="p-6">
                  <div className="border-l-4 border-rose-500 pl-4">
                    <div className="font-semibold text-gray-800">Strategic Approach</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Prioritize the order of questions as per comfort in each subject-section for better time management</li>
                        <li>Avoid guesswork on MCQs with negative marking unless confident</li>
                        <li>Double-check numerical answers and input formats carefully</li>
                        <li>Utilize mark-for-review function to revisit doubtful questions if time permits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 13. Resource Links for Practice */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">13. Resource Links for Practice & Pattern Updates</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-violet-500 pl-4">
                      <div className="font-semibold text-gray-800">Official Resources</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Official Previous Year Papers: <a href="https://jeeadv.ac.in" className="text-gray-600 hover:underline">https://jeeadv.ac.in</a></li>
                          <li>Virtual Mock Tests: Online portals by NTA & IITs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Coaching Institute Resources</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Coaching Institute Sample Papers: Allen, Resonance, Aakash, FIITJEE websites</li>
                          <li>Detailed analysis articles and videos on platforms like Careers360, Shiksha, Vedantu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://engineering.careers360.com/articles/jee-advanced-exam-pattern" className="text-gray-600 hover:underline">Careers360: JEE Advanced Exam Pattern 2026</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.vedantu.com/jee-advanced/exam-pattern" className="text-gray-600 hover:underline">Vedantu: Latest JEE Advanced 2025 Pattern</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://allen.in/jee-advanced/exam-pattern" className="text-gray-600 hover:underline">Allen Institute: JEE Advanced Exam Pattern</a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/engineering/jee-advanced-exam-pattern" className="text-gray-600 hover:underline">Shiksha: JEE Advanced 2026 Exam Pattern</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <a href="https://motion.ac.in/blog/jee-advanced-exam-pattern/" className="text-gray-600 hover:underline">Motion Education: Exam Pattern & Marking</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <a href="https://careerpoint.ac.in/blog/jee-advanced-exam-pattern-marking-scheme-for-papers-1-and-2/" className="text-gray-600 hover:underline">CareerPoint: Pattern & Marking Scheme</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This comprehensive exam pattern guide provides detailed information about JEE Advanced 2026 structure, question types, and marking scheme. For the most up-to-date information, always refer to the official JEE Advanced website and notifications.
                </p>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Advanced 2026 Syllabus */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026 Syllabus</h2>
              
              {/* Mathematics */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Mathematics</h3>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Algebra</div>
                      <div className="text-gray-700 mt-2">
                        <p>Sets, relations, and functions; complex numbers and quadratic equations; sequences and series; binomial theorem; permutations and combinations; matrices and determinants.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Calculus</div>
                      <div className="text-gray-700 mt-2">
                        <p>Limits, continuity, derivatives (including higher order), application of derivatives (tangent, normal, maxima, minima); indefinite and definite integrals; techniques of integration (substitution, parts, partial fractions); application of integrals (area calculation); differential equations including first order and linear types.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">3D Geometry</div>
                      <div className="text-gray-700 mt-2">
                        <p>Direction cosines and ratios; equation of lines and planes in space; distance formula; angle between lines and planes.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Vectors</div>
                      <div className="text-gray-700 mt-2">
                        <p>Vector addition, scalar multiplication; dot and cross products; scalar triple product; geometric interpretations.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Coordinate Geometry</div>
                      <div className="text-gray-700 mt-2">
                        <p>Straight lines, circles, conic sections (parabola, ellipse, hyperbola); coordinate geometry concepts involving tangents and normals.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Trigonometry</div>
                      <div className="text-gray-700 mt-2">
                        <p>Trigonometric functions, identities, equations, inverse functions, solutions of triangles.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Probability and Statistics</div>
                      <div className="text-gray-700 mt-2">
                        <p>Basic probability, conditional probability, distributions (binomial, Poisson, normal).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physics */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Physics</h3>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Mechanics</div>
                      <div className="text-gray-700 mt-2">
                        <p>Kinematics in one and two dimensions; Newton's laws of motion; work, energy, and power; momentum and collisions; rotation and angular momentum; gravitation and satellite motion; elasticity; fluid mechanics; oscillations and waves.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Electricity and Magnetism</div>
                      <div className="text-gray-700 mt-2">
                        <p>Electrostatics, current electricity, magnetic effects of current, electromagnetic induction, alternating currents, electromagnetic waves.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Thermal Physics</div>
                      <div className="text-gray-700 mt-2">
                        <p>Thermodynamics laws, kinetic theory of gases, heat transfer methods.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Optics</div>
                      <div className="text-gray-700 mt-2">
                        <p>Reflection, refraction, wave optics including interference and diffraction.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Modern Physics</div>
                      <div className="text-gray-700 mt-2">
                        <p>Photoelectric effect, atomic models, nuclear physics, X-rays.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Experimental Skills</div>
                      <div className="text-gray-700 mt-2">
                        <p>Understanding of measurement techniques, error analysis, and practical applications.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chemistry */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Chemistry</h3>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Physical Chemistry</div>
                      <div className="text-gray-700 mt-2">
                        <p>Basic concepts, atomic structure, chemical bonding, thermodynamics, chemical kinetics, equilibrium, ionic equilibrium, electrochemistry, surface chemistry, solutions.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Inorganic Chemistry</div>
                      <div className="text-gray-700 mt-2">
                        <p>Periodic table and periodicity, hydrogen and its compounds, s- and p-block elements, transition metals, coordination compounds, environmental chemistry.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Organic Chemistry</div>
                      <div className="text-gray-700 mt-2">
                        <p>General principles, hydrocarbons, haloalkanes and haloarenes, alcohols, phenols and ethers, aldehydes and ketones, carboxylic acids, amines, biomolecules, polymers, and chemistry in everyday life.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Reaction Mechanisms and Reasoning-based Questions</div>
                      <div className="text-gray-700 mt-2">
                        <p>Emphasizes understanding of mechanisms, logical reasoning, and application of chemical principles.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Papers */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Papers</h3>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Paper 2A (B.Arch)</div>
                      <div className="text-gray-700 mt-2">
                        <p>Includes Mathematics (same as Paper 1), plus Aptitude (50 questions testing spatial skills, mental ability, and architectural awareness), and Drawing (2 subjective questions offline).</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Paper 2B (B.Planning)</div>
                      <div className="text-gray-700 mt-2">
                        <p>Includes Mathematics and Aptitude sections like Paper 2A, plus a Planning section focusing on urban development, regional planning, environmental and transportation planning, critical reasoning, map reading, and comprehension.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preparation Strategy Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Preparation Strategy Highlights</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Comprehensive Coverage</div>
                      <div className="text-gray-700 mt-2">
                        <p>Uniform preparation across entire syllabus critical due to compulsory numerical and reasoning questions.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Conceptual Clarity</div>
                      <div className="text-gray-700 mt-2">
                        <p>Focus particularly on conceptual understanding in Modern Physics, Thermodynamics, Coordination Chemistry, and Organic reaction mechanisms.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Problem-Solving Practice</div>
                      <div className="text-gray-700 mt-2">
                        <p>Intensive practice of Calculus (differentiation/integration), Vector Algebra, and Coordinate Geometry essential.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Past Paper Analysis</div>
                      <div className="text-gray-700 mt-2">
                        <p>Analyze and solve previous years' papers and mock tests to identify patterns and difficult topics.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Mock Tests & Time Management</div>
                      <div className="text-gray-700 mt-2">
                        <p>Practice full-length tests simulating actual CBT environment to improve speed and accuracy.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Language</div>
                      <div className="text-gray-700 mt-2">
                        <p>Syllabus and tests available in multiple languages—choose one best suited for comprehension and clarity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.vedantu.com/jee-advanced/syllabus" className="text-gray-600 hover:underline">Vedantu: JEE Advanced 2026 Official Syllabus</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://allen.in/jee-advanced/syllabus" className="text-gray-600 hover:underline">Allen Institute: JEE Advanced Detailed Syllabus</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://engineering.careers360.com/articles/jee-advanced" className="text-gray-600 hover:underline">Careers360: JEE Advanced Syllabus</a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://collegedunia.com/exams/jee-advanced" className="text-gray-600 hover:underline">CollegeDunia: JEE Advanced Syllabus</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <a href="https://motion.ac.in/blog/jee-advanced-exam-syllabus/" className="text-gray-600 hover:underline">Motion Education: JEE Advanced Syllabus</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/engineering/jee-advanced-exam-syllabus" className="text-gray-600 hover:underline">Shiksha: JEE Advanced Syllabus</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This comprehensive syllabus guide outlines the detailed syllabus for JEE Advanced 2026, encompassing each major topic area in mathematics, physics, and chemistry with a focus on the depth and breadth required at the IIT-level entrance examination.
                </p>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            {/* Ultra-Detailed JEE Advanced 2026 Cutoff Analysis */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026 – Cutoff Analysis and Trends</h2>
              
              {/* Introduction to Cutoffs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Introduction to Cutoffs</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Cutoff Significance</div>
                      <div className="text-gray-700 mt-2">
                        <p>JEE Advanced cutoff is a crucial metric for aspirants aiming to secure admission to IITs.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Cutoff Types</div>
                      <div className="text-gray-700 mt-2">
                        <p>Cutoff scores determine eligibility to be included in the rank list (qualifying cutoff) and admission eligibility for specific branches at IITs (admission cutoff).</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Annual Variations</div>
                      <div className="text-gray-700 mt-2">
                        <p>Cuts vary annually based on exam difficulty, number of candidates, and seat availability.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Publication Sources</div>
                      <div className="text-gray-700 mt-2">
                        <p>Cutoffs are published separately by JEE Advanced authorities (Qualifying) and JoSAA (Admission).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Qualifying Cutoff */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Qualifying Cutoff – Minimum Marks for Inclusion in Rank List (2024 Data)</h3>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left">Category</th>
                          <th className="px-4 py-2 text-left">Minimum Aggregate %</th>
                          <th className="px-4 py-2 text-left">Minimum Subject %</th>
                          <th className="px-4 py-2 text-left">Approx Marks/372</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 font-medium">Common Rank List (CRL)</td>
                          <td className="px-4 py-2">20.56% – 30.34%</td>
                          <td className="px-4 py-2">6.83% – 8.68%</td>
                          <td className="px-4 py-2">70 – 115</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">GEN-EWS / OBC-NCL</td>
                          <td className="px-4 py-2">18.50% – 27.3%</td>
                          <td className="px-4 py-2">6.15% – 7.8%</td>
                          <td className="px-4 py-2">60 – 100</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">SC/ST / PwD</td>
                          <td className="px-4 py-2">10.28% – 15.17%</td>
                          <td className="px-4 py-2">3.42% – 4.34%</td>
                          <td className="px-4 py-2">30 – 65</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">Preparatory Course (PC)</td>
                          <td className="px-4 py-2">5.14% – 7.58%</td>
                          <td className="px-4 py-2">1.7% – 2.1%</td>
                          <td className="px-4 py-2">12 – 28</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Cutoff Fluctuations</div>
                      <div className="text-gray-700 mt-2">
                        <p>Cutoffs fluctuate by ±5% depending on question paper difficulty and candidate performance.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">2026 Expected Qualifying Cutoff</div>
                      <div className="text-gray-700 mt-2">
                        <p>2026 expected qualifying cutoff for general category approximates 24–26% aggregate (~85–95 marks).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admission Cutoffs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Admission Cutoffs – Branch and IIT Specific (Historic Examples)</h3>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left">IIT</th>
                          <th className="px-4 py-2 text-left">CSE</th>
                          <th className="px-4 py-2 text-left">EE</th>
                          <th className="px-4 py-2 text-left">ME</th>
                          <th className="px-4 py-2 text-left">Civil</th>
                          <th className="px-4 py-2 text-left">Chemical</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT Bombay</td>
                          <td className="px-4 py-2">65–70</td>
                          <td className="px-4 py-2">280–300</td>
                          <td className="px-4 py-2">490–510</td>
                          <td className="px-4 py-2">1500–1700</td>
                          <td className="px-4 py-2">2030–2150</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT Delhi</td>
                          <td className="px-4 py-2">90–110</td>
                          <td className="px-4 py-2">370–410</td>
                          <td className="px-4 py-2">870–920</td>
                          <td className="px-4 py-2">2250–2360</td>
                          <td className="px-4 py-2">3020–3150</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT Kanpur</td>
                          <td className="px-4 py-2">215–240</td>
                          <td className="px-4 py-2">790–820</td>
                          <td className="px-4 py-2">1750–1800</td>
                          <td className="px-4 py-2">4700–4800</td>
                          <td className="px-4 py-2">5700–5850</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT Madras</td>
                          <td className="px-4 py-2">175–215</td>
                          <td className="px-4 py-2">600–650</td>
                          <td className="px-4 py-2">1850–1900</td>
                          <td className="px-4 py-2">4100–4200</td>
                          <td className="px-4 py-2">4950–5110</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT Kharagpur</td>
                          <td className="px-4 py-2">250–310</td>
                          <td className="px-4 py-2">920–1000</td>
                          <td className="px-4 py-2">2350–2440</td>
                          <td className="px-4 py-2">4600–4700</td>
                          <td className="px-4 py-2">6100–6250</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT Roorkee</td>
                          <td className="px-4 py-2">380–415</td>
                          <td className="px-4 py-2">1250–1310</td>
                          <td className="px-4 py-2">2620–2710</td>
                          <td className="px-4 py-2">5350–5490</td>
                          <td className="px-4 py-2">7150–7300</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT BHU</td>
                          <td className="px-4 py-2">600–670</td>
                          <td className="px-4 py-2">1700–1800</td>
                          <td className="px-4 py-2">3700–3820</td>
                          <td className="px-4 py-2">8100–8280</td>
                          <td className="px-4 py-2">9500–9680</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">IIT Hyderabad</td>
                          <td className="px-4 py-2">1300–1350</td>
                          <td className="px-4 py-2">2500–2600</td>
                          <td className="px-4 py-2">4000–4150</td>
                          <td className="px-4 py-2">8700–8850</td>
                          <td className="px-4 py-2">10200–10400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Trend Analysis</div>
                      <div className="text-gray-700 mt-2">
                        <p>Branch and IIT cutoff trends consistent over past 5 years.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">CSE Competitiveness</div>
                      <div className="text-gray-700 mt-2">
                        <p>CSE consistently exhibits the highest competitiveness and lowest closing rank.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Branch Hierarchy</div>
                      <div className="text-gray-700 mt-2">
                        <p>Lower branches and newer IITs have higher closing ranks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Marks vs Rank Predictions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">4. Marks vs Rank Predictions (2026 Expected Ranges)</h3>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Marks (Approx.)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">General Rank Range</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">OBC-NCL Rank</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">SC Rank</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">ST Rank</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">320–372</td>
                          <td className="border border-gray-300 px-4 py-2">1–50</td>
                          <td className="border border-gray-300 px-4 py-2">1–20</td>
                          <td className="border border-gray-300 px-4 py-2">1–10</td>
                          <td className="border border-gray-300 px-4 py-2">1–7</td>
                          <td className="border border-gray-300 px-4 py-2">Top branches in IIT Bombay/Delhi</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">280–319</td>
                          <td className="border border-gray-300 px-4 py-2">51–500</td>
                          <td className="border border-gray-300 px-4 py-2">21–200</td>
                          <td className="border border-gray-300 px-4 py-2">11–80</td>
                          <td className="border border-gray-300 px-4 py-2">8–40</td>
                          <td className="border border-gray-300 px-4 py-2">All top IITs, competitive branches</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">240–279</td>
                          <td className="border border-gray-300 px-4 py-2">501–1,500</td>
                          <td className="border border-gray-300 px-4 py-2">201–800</td>
                          <td className="border border-gray-300 px-4 py-2">81–250</td>
                          <td className="border border-gray-300 px-4 py-2">41–100</td>
                          <td className="border border-gray-300 px-4 py-2">Other core branches</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">190–239</td>
                          <td className="border border-gray-300 px-4 py-2">1,501–4,000</td>
                          <td className="border border-gray-300 px-4 py-2">801–2,500</td>
                          <td className="border border-gray-300 px-4 py-2">251–800</td>
                          <td className="border border-gray-300 px-4 py-2">101–350</td>
                          <td className="border border-gray-300 px-4 py-2">Newer IITs, mid-tier branches</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">150–189</td>
                          <td className="border border-gray-300 px-4 py-2">4,001–9,000</td>
                          <td className="border border-gray-300 px-4 py-2">2,501–5,000</td>
                          <td className="border border-gray-300 px-4 py-2">801–1,500</td>
                          <td className="border border-gray-300 px-4 py-2">351–700</td>
                          <td className="border border-gray-300 px-4 py-2">Lower IIT branches</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">&lt;150</td>
                          <td className="border border-gray-300 px-4 py-2">9,000+</td>
                          <td className="border border-gray-300 px-4 py-2">5,000+</td>
                          <td className="border border-gray-300 px-4 py-2">1,500+</td>
                          <td className="border border-gray-300 px-4 py-2">700+</td>
                          <td className="border border-gray-300 px-4 py-2">Preparatory course, diploma seats</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Category-wise Rank Distribution */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Category-wise Rank Distribution in Top 2.5 Lakh JEE Main Qualifiers</h3>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left">Category</th>
                          <th className="px-4 py-2 text-left">% of Candidates</th>
                          <th className="px-4 py-2 text-left">Approximate Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 font-medium">General (UR)</td>
                          <td className="px-4 py-2">40.5%</td>
                          <td className="px-4 py-2">~1,01,250</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">OBC-NCL</td>
                          <td className="px-4 py-2">27%</td>
                          <td className="px-4 py-2">~67,500</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">SC</td>
                          <td className="px-4 py-2">15%</td>
                          <td className="px-4 py-2">~37,500</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">ST</td>
                          <td className="px-4 py-2">7.5%</td>
                          <td className="px-4 py-2">~18,750</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">EWS</td>
                          <td className="px-4 py-2">10%</td>
                          <td className="px-4 py-2">~25,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Horizontal PwD</div>
                      <div className="text-gray-700 mt-2">
                        <p>5% applied within all categories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historic Cutoff Trends Analysis */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Historic Cutoff Trends Analysis (2019–2025)</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Increasing Trend</div>
                      <div className="text-gray-700 mt-2">
                        <p>Increasing trend in qualifying cutoffs due to rising competition and more rigorous exam patterns (esp. in general and OBC categories).</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">SC/ST Cutoff Changes</div>
                      <div className="text-gray-700 mt-2">
                        <p>SC/ST cutoffs increased notably in post-COVID years (2022 onward) due to normalization.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Admission Cutoff Trends</div>
                      <div className="text-gray-700 mt-2">
                        <p>Admission cutoffs have also steadily increased in popular branches like CSE, Electrical.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Factors Influencing Cutoff */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Factors Influencing Cutoff</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Exam Difficulty</div>
                      <div className="text-gray-700 mt-2">
                        <p>Harder exams reduce qualifying marks; easy exams push cutoffs higher.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Number of Candidates</div>
                      <div className="text-gray-700 mt-2">
                        <p>Greater participation across years pushes competitive cutoffs.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Seat Matrix</div>
                      <div className="text-gray-700 mt-2">
                        <p>Expansion of IIT seats can ease cutoffs but is balanced out by rising applicants.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Reservation Norms</div>
                      <div className="text-gray-700 mt-2">
                        <p>Category quota affects opening and closing ranks.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Normalization Processes</div>
                      <div className="text-gray-700 mt-2">
                        <p>Handling of multiple shifts affects percentile cutoffs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cutoff Implications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cutoff Implications</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Qualifying Cutoffs</div>
                      <div className="text-gray-700 mt-2">
                        <p>Minimum marks to appear on rank list and compete for admissions.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Admission Cutoffs</div>
                      <div className="text-gray-700 mt-2">
                        <p>Vary per IIT, branch, and category; crucial for seat allocation.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Strategic Planning</div>
                      <div className="text-gray-700 mt-2">
                        <p>Aspirants should aim higher than qualifying cutoff by a comfortable margin.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Target Setting</div>
                      <div className="text-gray-700 mt-2">
                        <p>Target branch and IIT specific cutoffs with prudent rank estimation tools.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* References */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">References</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://allen.in/jee-advanced/cut-off" className="text-gray-600 hover:underline">Allen Institute: JEE Advanced Cutoff Trends</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/engineering/jee-advanced-exam-cutoff" className="text-gray-600 hover:underline">Shiksha: JEE Advanced Cutoff Analysis</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://smartachievers.online/jee-advanced-5-year-trend-analysis-2021-2025" className="text-gray-600 hover:underline">Motion Education: JEE Advanced 5-Year Cutoff Trends</a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://engineering.careers360.com/articles/jee-advanced-cutoff" className="text-gray-600 hover:underline">Careers360: JEE Advanced Cutoff 2025</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://josaa.nic.in" className="text-gray-600 hover:underline">JoSAA Official Opening and Closing Ranks</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.aakash.ac.in/jee-main-cut-off" className="text-gray-600 hover:underline">Aakash: JEE Main Cutoff Analysis</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This expanded guide provides a detailed, multi-dimensional understanding of JEE Advanced 2026 cutoff landscape, including qualifying, admission, and comprehensive historical insights across categories and branches.
                </p>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            {/* Exhaustive JEE Advanced 2026 Counselling Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Advanced 2026 Counselling</h2>
              
              {/* Conducting Authority */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Conducting Authority</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Joint Seat Allocation Authority (JoSAA)</div>
                      <div className="text-gray-700 mt-2">
                        <p>Primary body responsible for the counselling and seat allocation process for IITs, NITs, IIITs, and GFTIs.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Central Seat Allocation Board (CSAB)</div>
                      <div className="text-gray-700 mt-2">
                        <p>Conducts additional special rounds (spot rounds) and counselling for NIT+ system and other technical institutes after JoSAA rounds conclude.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Counselling Process Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Counselling Process Overview</h3>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Online Registration and Login</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Eligible candidates register at JoSAA portal <a href="https://josaa.nic.in" className="text-gray-600 hover:underline">josaa.nic.in</a></li>
                          <li>Use JEE Advanced roll number and password</li>
                          <li>Verify personal details, and complete registration</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Choice Filling and Locking</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>After registration, candidates select preferred institutes, courses, and branches from the available seats</li>
                          <li>Candidates can rank order their choices and lock them before the deadline</li>
                          <li>Multiple revisions allowed before choice locking or after mock allotment as per schedule</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Mock Seat Allotment</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>JoSAA conducts mock seat allotments to help candidates assess seat chances based on choices and rank</li>
                          <li>Candidates can modify preferences post-mock allotment for better seats</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Seat Allotment Rounds</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Multiple rounds (usually six) of seat allotments are conducted, considering candidate rank, preferences, category reservation, and availability</li>
                          <li>Candidates can accept seats, float (participate in further rounds for better seats), or slide (upgrade within the same institute)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Seat Acceptance Fee Payment & Document Upload</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>After seat allotment, candidates must pay seat acceptance fees (₹35,000 for General/OBC/EWS, ₹20,000 for SC/ST/PwD)</li>
                          <li>Upload requisite documents for verification (marksheets, category certificates, ID, etc.)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Physical Reporting & Document Verification</div>
                      <div className="text-gray-700 mt-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Candidates report physically to allotted institution within specified time frame</li>
                          <li>Document verification done by institute authorities</li>
                          <li>Failure to report results in forfeiture of seat and candidature for subsequent rounds</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CSAB Special Rounds */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">CSAB Special Rounds (Post JoSAA)</h3>
                <div className="p-6">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Special Rounds Process</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Conducted for leftover/unfilled seats mainly in NITs, IIITs, GFTIs, and some state technical universities</li>
                        <li>Open to candidates who did not get a seat or who withdrew prior to final round of JoSAA</li>
                        <li>Separate registration process started after JoSAA counselling ends</li>
                        <li>Limited rounds held based on seat availability for final admissions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Counselling Timeline */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Counselling Timeline (Tentative)</h3>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Stage</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">JoSAA Counselling Registration</td>
                          <td className="border border-gray-300 px-4 py-2">Last week June – early July</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Choice Filling and Locking</td>
                          <td className="border border-gray-300 px-4 py-2">Ongoing during registration</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Mock Seat Allotment</td>
                          <td className="border border-gray-300 px-4 py-2">Early July (before first allotment round)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Round 1 Seat Allotment</td>
                          <td className="border border-gray-300 px-4 py-2">Mid July</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Subsequent Rounds (2-6)</td>
                          <td className="border border-gray-300 px-4 py-2">July – August</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Last Date for Seat Acceptance</td>
                          <td className="border border-gray-300 px-4 py-2">August (varies by round)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Physical Reporting Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">Late August</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">CSAB Special Rounds Registration</td>
                          <td className="border border-gray-300 px-4 py-2">Late August – Early September</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">CSAB Special Rounds</td>
                          <td className="border border-gray-300 px-4 py-2">September</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Required Documents for Counselling & Admission</h3>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">JEE Advanced Admit Card</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">JEE Advanced Scorecard</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Class 10 Certificate (DOB proof)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Class 12 Marksheet & Passing Certificate</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Category Certificate (SC/ST/OBC/EWS/PwD if applicable)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">PwD Certificate for Persons with Disability applicants</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Photo Identification Proof (Aadhaar, PAN, Passport, Voter ID)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Passport size photographs</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Seat Acceptance Fee Payment Proof</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">JoSAA Registration and Choice Locking Receipt</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Additional certificates for special reservations (NCC, Sports, Ex-serviceman)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility for JoSAA Counselling */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Eligibility for JoSAA Counselling</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">JEE Advanced Qualified Candidates</div>
                      <div className="text-gray-700 mt-2">
                        <p>Candidates qualified in JEE Advanced 2026 are eligible for IIT admission.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">JEE Main Qualified Candidates</div>
                      <div className="text-gray-700 mt-2">
                        <p>Candidates qualified in JEE Main but NOT in JEE Advanced can participate for NITs, IIITs, and GFTIs admission through JEE Main counselling rounds.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Academic Eligibility</div>
                      <div className="text-gray-700 mt-2">
                        <p>Minimum academic eligibility includes at least 75% aggregate in 10+2 (65% for SC/ST).</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Architecture Aspirants</div>
                      <div className="text-gray-700 mt-2">
                        <p>Architecture aspirants must qualify in JEE Advanced and AAT to participate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seat Allocation Process */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Seat Allocation Process</h3>
                <div className="p-6">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Allocation Process</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Seat allotment is done online based on merit rank, category, and choice filling</li>
                        <li>Candidates can opt to accept seats and wait for upgradation in subsequent rounds</li>
                        <li>Seat withdrawal and surrender rules explained in detail by JoSAA to ensure fairness and effective seat utilization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Is JoSAA counselling compulsory for admission?</div>
                      <div className="text-gray-700 mt-2">
                        <p>Yes, all candidates allocated seats must register and participate in online counselling.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Are there spot rounds for IIT admissions after counselling ends?</div>
                      <div className="text-gray-700 mt-2">
                        <p>No spot rounds are held for IITs after last JoSAA round; NITs/GFTIs spot rounds via CSAB only.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">What if I forget my JoSAA login credentials?</div>
                      <div className="text-gray-700 mt-2">
                        <p>Passwords and credentials can be retrieved on official counselling portal.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">How many options can I fill in choice filling?</div>
                      <div className="text-gray-700 mt-2">
                        <p>There is no upper limit; fill choices according to preferences to increase seat allotment chances.</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Can I withdraw from admission after seat acceptance?</div>
                      <div className="text-gray-700 mt-2">
                        <p>Yes, withdrawal is possible within defined schedules to avoid penalties.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Portal & Contact Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Official Portal & Contact Information</h3>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">JoSAA Website</div>
                      <div className="text-gray-700 mt-2">
                        <p><a href="https://josaa.nic.in" className="text-gray-600 hover:underline">https://josaa.nic.in</a></p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Contact Helpline</div>
                      <div className="text-gray-700 mt-2">
                        <p>Listed on official site, includes email and phone support</p>
                      </div>
                    </div>
                    
                    <div className="pl-4">
                      <div className="font-semibold text-gray-800">Counselling Guidelines and Updates</div>
                      <div className="text-gray-700 mt-2">
                        <p>Published regularly during counselling window</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.toprankers.com/jee-main-counselling" className="text-gray-600 hover:underline">Toprankers: JEE Main Counselling Details</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/engineering/jee-advanced-exam-counselling" className="text-gray-600 hover:underline">Shiksha: JEE Advanced Counselling 2026</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://josaa.nic.in" className="text-gray-600 hover:underline">JoSAA Official Portal</a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                        <a href="https://motion.ac.in/blog/jee-advanced-exam-counselling/" className="text-gray-600 hover:underline">Motion Education: JEE Advanced Counselling Guide</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <a href="https://allen.in/jee-advanced/counselling" className="text-gray-600 hover:underline">Allen Institute: JEE Advanced Counselling</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <a href="https://www.vedantu.com/jee-main/counselling" className="text-gray-600 hover:underline">Vedantu: JEE Main Counselling</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This extensive guide provides an in-depth, 30x expansion of the JEE Advanced 2026 counselling process, admission eligibility, document requirements, timelines, and procedural FAQs for aspirants and career platforms.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderTabContent = () => {
    return renderTabContentFor(activeTab);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-gray-600">StudentHub</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
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
                  src="/images/jee-main-logo.jpg" 
                  alt="JEE Advanced Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  JEE Advanced 2026: Exam Dates, Pattern, Syllabus, Previous Year Papers, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-medium">#JEE-Advanced</span>
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
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Main Content Area */}
            <div>
              {renderTabContent()}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">IIT Admissions OPEN</h3>
              
              {/* IIT Bombay */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={iitDelhiLogo} alt="IIT Bombay" className="w-10 h-10 object-contain opacity-75" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">IIT Bombay B.Tech</h4>
                    <p className="text-xs text-gray-600">Indian Institute of Technology Bombay</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Top IIT | 1000+ Seats | JEE Advanced Based | Government Funded</p>
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* IIT Delhi */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={iitDelhiLogo} alt="IIT Delhi" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">IIT Delhi B.Tech</h4>
                    <p className="text-xs text-gray-600">Indian Institute of Technology Delhi</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Premier IIT | 800+ Seats | JEE Advanced Based | Excellent Placements</p>
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* IIT Madras */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={iitMadrasLogo} alt="IIT Madras" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">IIT Madras B.Tech</h4>
                    <p className="text-xs text-gray-600">Indian Institute of Technology Madras</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Top IIT | 900+ Seats | JEE Advanced Based | Strong Research Focus</p>
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* IIT Kharagpur */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={iitKharagpurLogo} alt="IIT Kharagpur" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">IIT Kharagpur B.Tech</h4>
                    <p className="text-xs text-gray-600">Indian Institute of Technology Kharagpur</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Oldest IIT | 1200+ Seats | JEE Advanced Based | Historic Campus</p>
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">JEE Advanced 2026 Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Seats</span>
                  <span className="font-semibold text-gray-800">{data.SeatsAvailable}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Participating Institutes</span>
                  <span className="font-semibold text-gray-800">{data.ParticipatingInstitutes.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Exam Mode</span>
                  <span className="font-semibold text-gray-800">CBT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Languages</span>
                  <span className="font-semibold text-gray-800">{data.Languages.length}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href={data.OfficialContact.Websites[0]} target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-800 text-sm">
                  • Official JEE Advanced Website
                </a>
                <a href={data.OfficialContact.Websites[1]} target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-800 text-sm">
                  • Careers360 JEE Advanced Guide
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800 text-sm">
                  • Previous Year Papers
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800 text-sm">
                  • Mock Tests
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800 text-sm">
                  • Rank Predictor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
