import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import viteeeData from './viteee.json';

interface VITEEData {
  Overview: string;
  ImportantDates: {
    ApplicationFormRelease: string;
    LastDateToSubmit: string;
    SlotBooking: string;
    AdmitCardRelease: string;
    ExamDates: string;
    ResultDeclaration: string;
    CounsellingRegistration: string;
    CounsellingRounds: string;
    CommencementOfClasses: string;
  };
  Eligibility: {
    Age: string;
    Nationality: string;
    QualifyingExam: string;
    MinimumMarks: {
      General: string;
      Relaxation: string;
    };
    SubjectCriteria: {
      MathematicsCandidates: string;
      BiologyCandidates: string;
    };
  };
  Application: {
    Mode: string;
    ApplicationFee: {
      IndianApplicants: string;
      NRI_ForeignApplicants: string;
    };
    DocumentsRequired: string[];
    Steps: string[];
  };
  ExamPattern: {
    Mode: string;
    Duration: string;
    Sections: {
      "Mathematics/Biology": number;
      Physics: number;
      Chemistry: number;
      Aptitude: number;
      English: number;
    };
    TotalQuestions: number;
    Type: string;
    MarkingScheme: {
      CorrectAnswer: string;
      NegativeMarking: string;
    };
    Language: string;
  };
  Syllabus: {
    Mathematics: string[];
    Physics: string[];
    Chemistry: string[];
    Biology: string[];
    Aptitude: string[];
  };
  Cutoff: {
    VIT_Vellore: {
      CSE_Core: string;
      CSE_AI_DS_ML: string;
      ECE: string;
    };
    VIT_Chennai: {
      CSE_Core: string;
      CSE_Specialisations: string;
      ECE_Mechanical: string;
    };
    VIT_Bhopal_AP: {
      CSE: string;
      ECE_Mech_OtherBranches: string;
    };
    GeneralNote: string;
  };
  Counselling: {
    Mode: string;
    Phases: {
      Phase1: string;
      Phase2: string;
      Phase3: string;
    };
    Fees: {
      RegistrationFee: string;
      AdvanceTuitionFee: string;
    };
    Process: string[];
    DocumentsRequired: string[];
  };
  FeeStructure: {
    TuitionFeePerYear: {
      GroupA: string;
      GroupB: string;
    };
    FullCourseFee: {
      Vellore_Chennai_Bhopal_GroupA: string;
      GroupB: string;
      VIT_AP_GroupB: string;
    };
    Note: string;
  };
  SeatMatrix: {
    VIT_Vellore: {
      CSE: string;
      CSE_AI_ML_DS: string;
      ECE: string;
      Mech: string;
      EEE: string;
    };
    VIT_Chennai: {
      "CSE/ECE/Mech": string;
    };
    VIT_Bhopal_AP: {
      "CSE/ECE/Mech": string;
    };
    Specialisations: string;
  };
  Sources: string[];
}

const VITEEEPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const data = viteeeData as VITEEData;

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Introduction</h3>
                  <p className="text-gray-700">VITEEE (VIT Engineering Entrance Examination) 2026 is a highly competitive, single-window national-level entrance exam conducted by VIT University for admission into its B.Tech degree programs across the four campuses: Vellore, Chennai, Bhopal, and Andhra Pradesh (VIT-AP). It is held annually as a computer-based test (CBT) and caters to more than 2 lakh aspirants who compete for approximately 7,000 seats in various engineering disciplines.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Conducting Authority</h3>
                  <p className="text-gray-600">VIT University, a premier private technical university in India known for state-of-the-art infrastructure, quality education, and robust placement records.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Type & Mode</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Exam Type:</h4>
                      <p className="text-gray-600">University Level Entrance Exam</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Mode:</h4>
                      <p className="text-gray-600">Computer-Based Test (CBT) conducted at multiple test cities across India and some overseas locations like UAE, Bahrain, Oman, Qatar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Duration and Format</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Total Duration:</h4>
                        <p className="text-gray-700">2 hours 30 minutes (150 minutes)</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Number of Questions:</h4>
                        <p className="text-gray-700">125 questions, each carrying 1 mark</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Question Type:</h4>
                        <p className="text-gray-700">Objective Multiple Choice Questions (MCQs)</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Marking Scheme:</h4>
                        <p className="text-gray-700">+1 for correct answer; no negative marking</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Section-wise Distribution:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="bg-blue-100 p-2 rounded">
                          <span className="font-semibold">Mathematics or Biology:</span> 40 questions
                        </div>
                        <div className="bg-green-100 p-2 rounded">
                          <span className="font-semibold">Physics:</span> 35 questions
                        </div>
                        <div className="bg-purple-100 p-2 rounded">
                          <span className="font-semibold">Chemistry:</span> 35 questions
                        </div>
                        <div className="bg-orange-100 p-2 rounded">
                          <span className="font-semibold">Aptitude:</span> 10 questions
                        </div>
                        <div className="bg-yellow-100 p-2 rounded">
                          <span className="font-semibold">English:</span> 5 questions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Syllabus Coverage</h3>
                  <p className="text-gray-600 mb-4">The syllabus aligns with the NCERT curriculum for Classes 11 and 12 for all subjects with minor adjustments in emphasis based on previous years' exam trends.</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Mathematics:</h4>
                      <p className="text-gray-700">Sets, Relations, Functions, Complex Numbers, Matrices, Determinants, Binomial Theorem, Sequences & Series, Permutations & Combinations, Coordinate Geometry (2D and 3D), Vector Algebra, Differential and Integral Calculus, Probability, Trigonometry.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Biology:</h4>
                      <p className="text-gray-700">Cell Biology, Genetics, Human Physiology, Biotechnology, Ecology, Biodiversity, Plant Physiology, Evolution, Molecular Biology.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Physics:</h4>
                      <p className="text-gray-700">Units and Measurements, Kinematics, Laws of Motion, Work, Energy and Power, Rotational Motion, Gravitation, Properties of Matter, Thermodynamics, Oscillations, Waves, Electrostatics, Current Electricity, Magnetism, Electromagnetic Induction, Optics, Atomic and Nuclear Physics, Semiconductor Devices.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Chemistry:</h4>
                      <p className="text-gray-700">Atomic Structure, Chemical Bonding, Thermodynamics, Chemical Kinetics, Equilibrium, Electrochemistry, Surface Chemistry, Organic Chemistry (Hydrocarbons, Polymers, Aldehydes, Ketones, Acids, Amines), Inorganic Chemistry (Periodic Table, Coordination Compounds), Biomolecules.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">English and Aptitude:</h4>
                      <p className="text-gray-700">Grammar and Vocabulary, Reading Comprehension, Logical Reasoning, Number Series, Coding-Decoding, Data Interpretation, Time and Work, Puzzles, Blood Relations, Ranking and Ordering.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Eligibility Criteria</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700"><strong>Nationality:</strong></span>
                      <span className="font-semibold">Indian nationals, NRI, PIO, and OCI candidates eligible</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700"><strong>Age:</strong></span>
                      <span className="font-semibold">Born on or after July 1, 2004 (age relaxations for reserved categories apply)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700"><strong>Academic Qualification:</strong></span>
                      <span className="font-semibold">10+2 or equivalent with PCM/PCB, minimum 60% aggregate (50% for SC/ST and J&K/North East states)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Procedure</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Application Process:</h4>
                      <p className="text-gray-700">Registration and application submission are done online at viteee.vit.ac.in. The application window typically opens in November 2025 and continues until March 2026.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Steps Involved:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>New user registration</li>
                        <li>Filling personal and academic details</li>
                        <li>Choosing preferred exam cities</li>
                        <li>Uploading scanned photograph and signature</li>
                        <li>Paying the application fee</li>
                        <li>Slot booking for exam date and center</li>
                        <li>Downloading the confirmation page</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Application Fee:</h4>
                      <p className="text-gray-700">INR 1,350 (inclusive of GST) for Indian candidates and USD 90 for international/NRI applicants. Payments accepted via net banking, credit/debit cards, and UPI apps.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Centres</h3>
                  <p className="text-gray-600">The exam is expected to be conducted in approximately 130 cities across India and 6 cities abroad. Candidates will select their preferred test city and exam slot during the slot booking process. Test centers cover metros, tier-2 and tier-3 cities, ensuring accessibility to candidates nationwide.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Seat Matrix and Intake</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Total Seats:</h4>
                      <p className="text-gray-700">Approximate total seats across all VIT campuses: 7,000+</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Vellore Campus:</h4>
                        <p className="text-gray-700">1,200 to 1,500 seats in core branches per year; 600 to 800 seats for AI, Data Science, and allied specializations</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Chennai Campus:</h4>
                        <p className="text-gray-700">600 to 800 seats per branch</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Bhopal Campus:</h4>
                        <p className="text-gray-700">400 to 600 seats per branch</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Andhra Pradesh Campus:</h4>
                        <p className="text-gray-700">400 to 600 seats per branch</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800">Specialized Programs:</h4>
                      <p className="text-gray-700">AI, ML, Cybersecurity, Data Science have limited intake</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Cutoff Trends and Admission Statistics</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Closing Ranks for Popular Branches at Vellore Campus:</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-2 text-left">Branch</th>
                              <th className="p-2 text-left">Closing Rank Range</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 font-semibold">CSE</td>
                              <td className="p-2">Approximately 1,000 to 5,000</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">AI, Data Science, ML</td>
                              <td className="p-2">3,000 to 8,000</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">ECE</td>
                              <td className="p-2">5,000 to 15,000</td>
                            </tr>
                            <tr>
                              <td className="p-2 font-semibold">Mechanical, Civil, EEE</td>
                              <td className="p-2">15,000 to 50,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Lower-tier Campuses:</h4>
                        <p className="text-gray-700">Closing ranks expand to between 50,000 and 80,000 for Bhopal and AP campuses</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-800">Score Thresholds:</h4>
                        <p className="text-gray-700">Expected score thresholds for top branches are around 110+ marks</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800">Minimum Qualification:</h4>
                      <p className="text-gray-700">Candidates scoring below 31 marks may not qualify for counselling</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling and Admission Process</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Counselling Timeline:</h4>
                      <p className="text-gray-700">Counselling officially begins post result announcement, typically in May 2026</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Process Steps:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Online registration for counselling</li>
                        <li>Document verification</li>
                        <li>Counselling fee payment: INR 5,900 (non-refundable, inclusive of GST)</li>
                        <li>Admission allotment based on All India Rank (AIR), candidate preference, and seat availability</li>
                        <li>Multiple rounds of counselling with seat preference locking</li>
                        <li>Tuition fee payment within prescribed deadlines</li>
                        <li>Document verification and reporting at allotted campus</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Fee Structure</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Tuition Fees Per Annum:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong>Group A (core branches like Civil, Mechanical, EEE):</strong></p>
                          <p>₹1,73,000 (tuition) + ₹3,000 (caution deposit) = ₹1,76,000 total</p>
                        </div>
                        <div>
                          <p><strong>Group B (top specializations like Computer Science, AI & DS, Cybersecurity):</strong></p>
                          <p>₹1,95,000 (tuition) + ₹3,000 (caution deposit) = ₹1,98,000 total</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Total Fee for 4-Year Program:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p><strong>Vellore, Chennai, Bhopal Campuses:</strong></p>
                          <p>Group A ~ ₹6,95,000; Group B ~ ₹7,86,000</p>
                        </div>
                        <div>
                          <p><strong>VIT-AP Campus Group B courses:</strong></p>
                          <p>~₹16,11,000</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800">Additional Fees:</h4>
                      <p className="text-gray-700">Hostel, mess and other ancillary fees charged additionally</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparatory Guidelines</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Study Strategy:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Emphasis on strong conceptual clarity followed by rigorous practice of problem-solving</li>
                        <li>Follow the prescribed NCERT-based syllabus focusing on important topics based on chapter-wise weightage</li>
                        <li>Regular attempt of mock tests and previous year papers recommended for accuracy and speed improvements</li>
                        <li>Maintain a balanced schedule incorporating revision, relaxation, and self-assessment</li>
                        <li>Utilize official VITEEE mock test portals and expert video tutorials for comprehensive preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Day Guidelines</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Important Instructions:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Candidates must carry admit card and original photo identity proof to exam centers</li>
                        <li>Arrive 60 minutes before exam start time</li>
                        <li>Use only allowed stationery; electronic devices prohibited inside the test centers</li>
                        <li>Follow invigilator instructions strictly</li>
                        <li>Candidates will not be allowed to leave exam hall before the completion of the test</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Conclusion</h3>
                  <p className="text-gray-700">VITEEE 2026 offers aspirants a challenging yet fair opportunity to secure a coveted engineering seat at one of India's most reputed private universities with strong curriculum choices, international exposure, and dynamic career prospects. Rigorous preparation aligned to detailed syllabus, understanding exam pattern, following official guidelines, and timely application form submission remain the keys to success for aspirants this year.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026 Important Dates</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📅 VITEEE 2026 Timeline</h3>
                  <p className="text-gray-600">Complete phase-wise breakdown of all important dates and events for VITEEE 2026</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📢 Notification and Application Process</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Official Notification Release:</strong></span>
                      <span className="font-semibold text-gray-800">Expected first week of November 2025 (Nov 1-5)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Online Application Form Release:</strong></span>
                      <span className="font-semibold text-gray-800">November 1 to 7, 2025</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Last Date to Submit (Without Late Fee):</strong></span>
                      <span className="font-semibold text-gray-800">March 31, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Final Last Date (With Late Fee):</strong></span>
                      <span className="font-semibold text-gray-800">April 10, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Application Form Correction Window:</strong></span>
                      <span className="font-semibold text-gray-800">April 15 to 17, 2026</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Slot Booking</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Slot Booking Website Opens:</strong></span>
                      <span className="font-semibold text-gray-800">April 1, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Slot Booking Closes:</strong></span>
                      <span className="font-semibold text-gray-800">April 10, 2026</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Note:</strong> Slot booking is first-come-first-serve. Candidates who do not book their slots will be assigned by authorities based on availability.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🎫 Admit Card</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Admit Cards Available:</strong></span>
                      <span className="font-semibold text-gray-800">48 hours prior to candidate's booked slot</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Bulk Issuance Starts:</strong></span>
                      <span className="font-semibold text-gray-800">April 14, 2026</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Download:</strong> Hall tickets can be downloaded from official site using application number and password. Required for entry at examination center along with valid photo ID.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Examination Days and Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Exam Dates:</strong></span>
                      <span className="font-semibold text-gray-800">April 17 to April 25, 2026</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Exam Details:</strong> Multiple exam sessions per day (morning and afternoon/evening slots). Examination centers spread across 130+ cities in India along with select international centers (Dubai, Qatar, Oman, Bahrain).</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Reporting Time:</strong> Candidates to report minimum 60 minutes before exam time with admit card and identity proof.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🧪 Mock Tests Availability</h3>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700"><strong>Official Mock Tests Available:</strong></span>
                    <span className="font-semibold text-gray-800">April 10, 2026 onwards</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-800"><strong>Access:</strong> Available on viteee.vit.ac.in for candidate practice</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Answer Key and Result</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Provisional Answer Key Release:</strong></span>
                      <span className="font-semibold text-gray-800">April 26, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Objection Window:</strong></span>
                      <span className="font-semibold text-gray-800">April 27 to April 29, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Final Answer Key Declaration:</strong></span>
                      <span className="font-semibold text-gray-800">May 2, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Result Declaration:</strong></span>
                      <span className="font-semibold text-gray-800">May 5, 2026 onwards</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Scorecards:</strong> Candidates can download scorecards containing marks, rank, and percentile from VIT portal.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Phase</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Registration & Choice Filling:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Counselling Registration Start:</span>
                          <span className="font-semibold">May 6, 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Counselling Registration End:</span>
                          <span className="font-semibold">May 15, 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Choice Filling & Locking Window:</span>
                          <span className="font-semibold">May 6 to May 18, 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Round 1:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Seat Allotment:</span>
                          <span className="font-semibold">May 22, 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Seat Acceptance & Reporting Deadline:</span>
                          <span className="font-semibold">May 26, 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Round 2:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Registration & Choice Filling:</span>
                          <span className="font-semibold">May 28 to June 2, 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Seat Allotment:</span>
                          <span className="font-semibold">June 6, 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Seat Acceptance & Reporting Deadline:</span>
                          <span className="font-semibold">June 10, 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Round 3:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Registration & Choice Filling:</span>
                          <span className="font-semibold">June 12 to June 16, 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Seat Allotment Announcement:</span>
                          <span className="font-semibold">June 20, 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Final Seat Acceptance & Reporting Deadline:</span>
                          <span className="font-semibold">June 25, 2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Special Spot Round:</h4>
                      <div className="flex justify-between">
                        <span className="text-gray-700">For filling vacant seats:</span>
                        <span className="font-semibold">July 5 to July 10, 2026</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🏫 Academic Session</h3>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700"><strong>Commencement of Classes:</strong></span>
                    <span className="font-semibold text-gray-800">August 1, 2026 (tentative)</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-800"><strong>Note:</strong> Candidates must complete admission formalities and document verification before commencement.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Important Timelines & Notes</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Tuition Fee Payment:</strong> Must be done within 5 days of seat confirmation after allotment.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>No Changes Policy:</strong> No changes to exam center or subject are permitted after slot booking.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Admit Card Issues:</strong> Delays or discrepancies in admit cards must be immediately reported to official helpline.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Updates:</strong> Continuous updates, notifications, and instructions will be posted on viteee.vit.ac.in.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Important Resources</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><strong>Official Website:</strong> <a href="https://viteee.vit.ac.in" className="text-gray-600 hover:underline">viteee.vit.ac.in</a></p>
                    <p className="text-gray-700"><strong>For Latest Updates:</strong> Monitor Career360 VITEEE 2026 Page, Shiksha VITEEE 2026 Updates, Testbook and Selectyouruniversity portals</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026 Eligibility Criteria</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">VITEEE 2026 Eligibility Criteria — Extensive Detailed Overview</h3>
                  <p className="text-gray-600">Eligibility requirements, relaxations, documentation, and related caveats for VITEEE 2026 admission</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Age Limit and Date of Birth</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Primary Requirement:</strong> Candidates must be born on or after July 1, 2004, to be eligible for admission to VITEEE 2026.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Documentation:</strong> This date of birth must be supported by valid documentation such as Secondary School Leaving Certificate (SSLC), High School or equivalent board certificate.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Age Relaxation:</strong> No upper age relaxation is generally allowed, but any government-mandated relaxations for specific categories (e.g., SC/ST, J&K residents) will be duly considered during admission.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Appearing Candidates:</strong> Candidates appearing for their 12th Board exams in 2026 are also eligible to apply but must produce passing certificates during counselling.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🌍 Nationality and Domicile</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Indian Nationals:</strong> Open to Indian Nationals.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Overseas Candidates:</strong> Non-Resident Indians (NRI), Persons of Indian Origin (PIO), Overseas Citizens of India (OCI) cardholders, and foreign nationals can apply through special international admission procedures or separate application streams.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>International Admissions:</strong> NRI and foreign nationals may not necessarily take VITEEE but can gain admission based on qualifying marks and SAT/other standardized exams combined with recommendations.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Special Regions:</strong> Candidates from Jammu & Kashmir, Ladakh, and North-Eastern states have relaxations in minimum qualifying marks. They should furnish valid domicile certificates if seeking reserved benefits.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Academic Qualifications</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Basic Requirement:</strong> Must have passed or be appearing in the qualifying examination i.e., 10+2 or any equivalent examination from a recognized board/university.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Subject Requirements:</strong> Candidates must have studied Physics, Chemistry, and either Mathematics or Biology at the qualifying examination (full-time regular mode).</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Not Eligible:</strong> Distance mode or private candidates without formal schooling are generally not eligible. Only candidates from National Institute of Open Schooling (NIOS) with minimum five subjects including Science and Mathematics/Biology are eligible.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Disqualification:</strong> Vocational or part-time qualifications disqualify candidates from eligibility.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Minimum Academic Marks</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">General Category:</h4>
                      <p className="text-gray-700">General category candidates must have secured at least 60% aggregate marks in Physics, Chemistry and Mathematics/Biology (PCM/PCB/PCMB) in the qualifying examination.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Reserved Categories:</h4>
                      <p className="text-gray-700">For SC, ST, Jammu & Kashmir, Ladakh, and North-Eastern states candidates, the minimum is reduced to 50% aggregate marks.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Calculation Basis:</strong> Marks must be calculated based on final results of Class 12 or equivalent.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Equivalence Certificates:</strong> Equivalence certificates are required if the grading system differs from marks-based percentage system (such as GPA or CGPA).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject-wise Eligibility and Seat Allocation</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Mathematics Candidates (PCM):</h4>
                      <p className="text-gray-700">Mathematics Candidates (PCM) are eligible to apply for all B.Tech courses across the VIT campuses including traditional streams and new-age technologies like Artificial Intelligence, Data Science, Cyber Security, and Machine Learning.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Biology Candidates (PCB/PCMB):</h4>
                      <p className="text-gray-700">Biology Candidates (PCB/PCMB) are eligible only for select bio-related B.Tech courses such as Biotechnology, Biomedical Engineering, Bioinformatics, and related allied programs offered in select campuses.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Application Choice:</strong> Candidates must specify choice of Mathematics or Biology in the application form, which determines the possible courses available.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Language and Other Requirements</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>English Proficiency:</strong> English Language Proficiency is assumed as all courses and examinations are conducted in English.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Required Documents:</strong> Candidates must produce all relevant certificates and documents at the time of counselling and admission including transfer certificates, migration certificates (if applicable), caste certificate (for reserved categories), physically handicapped certificate (if applicable), and domicile proofs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Eligibility Notes</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Disqualification:</strong> Candidates not meeting eligibility criteria will be disqualified during document verification or admission stage regardless of their VITEEE rank.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Verification Stages:</strong> Eligibility is verified strictly at multiple stages: application, counselling, and admission. Only eligible candidates with complete documents will be allotted seats.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>International Candidates:</strong> Candidates applying under NRI or foreign nationals category should follow the respective international admission guidelines and need not write VITEEE but need to fulfill equivalent academic standards.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Reservation Policies:</strong> Reservation policies as per Indian government regulations apply to reserved categories, physically challenged candidates, etc.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Implications for Preparation and Admission Strategy</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Academic Focus:</strong> Eligibility mandates meeting eligibility marks in requisite subjects; hence early focus on board exam marks is crucial.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>PCB Candidates:</strong> PCB candidates should prepare specifically for bio-related courses due to limited eligible branches.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>PCM Candidates:</strong> PCM candidates have wider admission prospects and should optimize preparation for core branches and emerging tech streams.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
                  <p className="text-gray-700">The VITEEE 2026 eligibility criteria are structured to maintain academic rigor while ensuring diverse inclusion of Indian nationals, NRI/PIO/OCI candidates, and foreign nationals through separate admissions. They ensure aspirants have minimum foundational academic performance in science streams pertinent to engineering and allied bio fields. Compliance with age, nationality, and academic standards guards the quality of admitted students into VIT's reputable B.Tech programs.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026 Application Process</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">VITEEE 2026 Application Process</h3>
                  <p className="text-gray-600">Complete step-by-step guide covering registration, document uploads, payment, slot booking, and post-application formalities</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Overview</h3>
                  <p className="text-gray-600">VITEEE (VIT Engineering Entrance Examination) 2026 application process is conducted entirely online through the official website viteee.vit.ac.in. The process is designed to be candidate-friendly and transparent, ensuring aspirants can register, apply, pay application fees, book exam slots and download admit cards efficiently. Given the large number of applicants (over 2 lakh), adherence to procedural timelines and guidelines is critical.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Mode</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Online Only:</strong> The VITEEE 2026 application form will be available exclusively online at viteee.vit.ac.in.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>No Offline:</strong> No offline or paper applications are accepted.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Contact Information:</strong> Applicants must use valid personal email ID and mobile number for registration and communication.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📅 Important Dates for Application</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Registration Start:</strong></span>
                      <span className="font-semibold text-gray-800">Early November 2025 (usually first week)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Last Date (Without Late Fee):</strong></span>
                      <span className="font-semibold text-gray-800">March 31, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Final Last Date (With Late Fee):</strong></span>
                      <span className="font-semibold text-gray-800">April 10, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Slot Booking Window:</strong></span>
                      <span className="font-semibold text-gray-800">April 1 - April 10, 2026</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700"><strong>Admit Card Release:</strong></span>
                      <span className="font-semibold text-gray-800">April 14, 2026 onwards</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">💰 Application Fee</h3>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left">Category</th>
                          <th className="p-3 text-left">Fee Amount</th>
                          <th className="p-3 text-left">Currency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 font-semibold">Indian National Candidates</td>
                          <td className="p-3">₹1,350</td>
                          <td className="p-3">INR</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">NRI/Foreign National Candidates</td>
                          <td className="p-3">$90</td>
                          <td className="p-3">USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Payment Methods:</strong> Fees can be paid online using multiple modes: Net Banking, Credit/Debit Cards, UPI apps, and digital wallets like Paytm.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Confirmation:</strong> Payment confirmation and receipt are generated immediately—candidates must save proof.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Payment Issues:</strong> In case of payment failure, candidates advised not to submit multiple forms; contact support.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Stepwise Application Procedure</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">New User Registration</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Visit official website: viteee.vit.ac.in</li>
                        <li>Click on 'New User Registration' link</li>
                        <li>Enter basic information: Full Name, Date of Birth, Valid Email ID, and Mobile Number</li>
                        <li>Create a password and confirm it</li>
                        <li>Submit to generate registration ID</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Login for Registered Candidates</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Use registered email and password to log into applicant dashboard</li>
                        <li>Keep login credentials safe for subsequent application steps and retrieval</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Fill Application Form</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Input detailed personal information including guardian details, communication address</li>
                        <li>Provide academic details with specifics on 10th and 12th-grade marks, board, year of passing, and subjects studied</li>
                        <li>Select preferred exam city/center from the comprehensive list of national and international test cities</li>
                        <li>Confirm choice of Mathematics or Biology as exam subject based on eligibility</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Upload Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Upload scanned passport-size photograph (JPG/JPEG, size 10–300 KB), recent and clear</li>
                        <li>Upload scanned signature (JPG/JPEG, size 10–50 KB), handwritten signature on white paper preferred</li>
                        <li>Upload other proof documents if required (Category certificate, PwD certificate, etc.) as per eligibility</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Payment of Application Fee</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Proceed to online payment gateway via the application portal</li>
                        <li>Choose preferred payment mode (Net Banking, Credit/Debit Card, UPI)</li>
                        <li>Ensure successful payment confirmation before proceeding</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Slot Booking</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>After fee payment, candidates must book their preferred exam slot (date and time) and test center</li>
                        <li>Slot booking is on first-come-first-served basis—early booking advised for preferred choices</li>
                        <li>If candidates do not book a slot within the window, slot is allotted automatically by authorities</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Application Submission</h4>
                      <ul className="list-disc list-inside text-indigo-700 space-y-1">
                        <li>Review the entire application form carefully before final submission—no corrections allowed post submission except during limited correction window</li>
                        <li>Submit the complete form and take multiple printouts of the confirmation page and payment receipt</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-800 mb-3">Application Status Check and Correction</h4>
                      <ul className="list-disc list-inside text-teal-700 space-y-1">
                        <li>Candidates can view application status on the official website using credentials</li>
                        <li>Formal correction window usually opens shortly after the application phase for limited fields like contact details, category, and image re-upload</li>
                        <li>Changes to critical fields like exam center or stream are generally not allowed</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-3">Download Admit Card</h4>
                      <ul className="list-disc list-inside text-pink-700 space-y-1">
                        <li>Admit cards are released 48 hours in advance of exam day</li>
                        <li>Download admit card from the portal using application number and password; no offline distribution</li>
                        <li>Admit card contains exam center, date and slot, roll number, and important instructions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Important Guidelines</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Refund Policy:</strong> Application fee once paid is non-refundable except in case of duplicate payments which will be refunded within stipulated timeframe.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Data Accuracy:</strong> Candidates must provide correct and verifiable information; false data can lead to disqualification.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Data Security:</strong> Candidates are advised to keep their application data and login information secure for future use during counselling and result download.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Support:</strong> For queries related to the application process, candidates may contact the VITEEE helpdesk via official website support email or phone numbers.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔒 Security and Privacy</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Data Protection:</strong> Personal data submitted are handled strictly under privacy regulations; candidates must ensure usage of official websites only.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Third-party Warning:</strong> Use of third-party agents or websites for registration is discouraged and can lead to fraudulent outcomes.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
                  <p className="text-gray-700">The VITEEE 2026 application process is a multiple-step, primarily digital procedure requiring timely registration, document uploads, payment and slot booking. This extensive procedural detail helps aspirants carefully navigate each stage, avoid common pitfalls, and ensure successful application submissions aligned with VIT University standards and timelines for a seamless path towards admission.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026 Exam Pattern</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">VITEEE 2026 Exam Pattern — Extensive Guide</h3>
                  <p className="text-gray-600">Complete understanding of exam structure, subject distribution, question formats, and preparation strategies</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Introduction</h3>
                  <p className="text-gray-600">VITEEE 2026 is a meticulously structured, computer-based test (CBT) designed to evaluate candidates' readiness for a rigorous engineering curriculum at VIT's multiple campuses. Understanding the detailed exam pattern including subject distribution, question formats, and recommended preparation strategies facilitates optimal performance on exam day.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Mode and Structure</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Mode:</strong> Fully online Computer-Based Test (CBT)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Language:</strong> English only, ensuring standardization across all centers nationally and internationally</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Duration:</strong> 2 hours 30 minutes (150 minutes) - fixed with no sectional time limits</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Sessions:</strong> Conducted in multiple shifts daily over a 9-day window to accommodate large candidate volume</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Total Questions:</strong> 125, all multiple-choice questions (MCQs)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Question Navigation:</strong> Candidates can skip and return to questions within the allotted time</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Marking Scheme:</strong> +1 per correct answer; no penalty for wrong or unattempted questions, encouraging attempt of all</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <p className="text-teal-800"><strong>Answer Submission:</strong> Automatic when time expires; manual submission possible before time ends</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Section-wise Distribution and Weightage</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left">Subject</th>
                          <th className="p-3 text-left">No. of Questions</th>
                          <th className="p-3 text-left">Marks Allocated</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 font-semibold">Mathematics/Biology</td>
                          <td className="p-3">40</td>
                          <td className="p-3">40</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Physics</td>
                          <td className="p-3">35</td>
                          <td className="p-3">35</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Chemistry</td>
                          <td className="p-3">35</td>
                          <td className="p-3">35</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Aptitude</td>
                          <td className="p-3">10</td>
                          <td className="p-3">10</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">English</td>
                          <td className="p-3">5</td>
                          <td className="p-3">5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Syllabus Breakdown</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Mathematics (or Biology stream alternative)</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Algebra: Sets, Relations and Functions, Complex Numbers, Quadratic Equations, Arithmetic Progressions, Permutation and Combination</li>
                        <li>Coordinate Geometry: Straight Lines, Circles, Parabolas, Ellipses, Hyperbolas in Two and Three Dimensions</li>
                        <li>Calculus: Limits, Differentiation and Its Applications, Integration, Differential Equations</li>
                        <li>Vector Algebra, Probability and Statistics</li>
                        <li>Trigonometry: Angles, Identities, Solutions of Triangles</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Physics</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Units, Dimensions, and Measurements</li>
                        <li>Kinematics: Motion in One and Two Dimensions</li>
                        <li>Laws of Motion and Dynamics</li>
                        <li>Work, Energy and Power</li>
                        <li>Rotational Motion</li>
                        <li>Gravitation</li>
                        <li>Properties of Solids and Liquids</li>
                        <li>Thermodynamics and Kinetic Theory</li>
                        <li>Oscillations and Waves</li>
                        <li>Electrostatics and Current Electricity</li>
                        <li>Magnetism and Electromagnetic Induction</li>
                        <li>Optics</li>
                        <li>Dual Nature of Matter, Atomic and Nuclear Physics</li>
                        <li>Semiconductor Devices</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Chemistry</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Atomic Structure</li>
                        <li>Chemical Bonding and Molecular Structure</li>
                        <li>States of Matter: Gases and Liquids</li>
                        <li>Thermodynamics, Chemical Equilibrium and Kinetics</li>
                        <li>Electrochemistry, Surface Chemistry</li>
                        <li>The Block Elements: s-, p-, d-, and f-block</li>
                        <li>Coordination Chemistry</li>
                        <li>Organic Chemistry Basics: Hydrocarbons, Haloalkanes, Alcohols, Ethers, Aldehydes, Ketones, Carboxylic Acids, Amines</li>
                        <li>Polymers, Biomolecules and Environmental Chemistry</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Biology (for Biology stream)</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Cell Structure and Function</li>
                        <li>Genetics and Evolution</li>
                        <li>Human Physiology: Digestive, Circulatory, Nervous Systems</li>
                        <li>Biotechnology: Principles and Applications</li>
                        <li>Plant Physiology and Reproduction</li>
                        <li>Ecology and Environment</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">Aptitude</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Logical Reasoning: Pattern Recognition, Analogies, Coding-Decoding</li>
                        <li>Analytical Reasoning: Blood Relations, Series, Direction Sense Tests</li>
                        <li>Quantitative Aptitude: Basic Arithmetic, Percentages, Ratio and Proportion, Number System</li>
                        <li>Data Interpretation: Charts, Tables, Graphs</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">English</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Grammar: Tenses, Modals, Articles, Prepositions</li>
                        <li>Vocabulary: Synonyms, Antonyms, One-word Substitutions</li>
                        <li>Reading Comprehension</li>
                        <li>Sentence Correction and Completion</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Strategy & Time Allocation</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Time per Question:</strong> Suggested question solving time is approximately 1.2 minutes per question</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Strategy:</strong> Prioritize easier sections initially (English and Aptitude) to build confidence and accumulate quick marks</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>High Weightage:</strong> Mathematics/Biology section warrants focused efforts given high weightage (40 questions)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Physics & Chemistry:</strong> Require accuracy and speed, with ample practice on numerical problems vital</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>No Negative Marking:</strong> Encourages attempting every question without speculation penalties</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔄 Comparative Context</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>NCERT Alignment:</strong> Syllabus closely parallels NCERT Class 11 and 12, providing alignment with most standard Indian school curricula</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Competition Level:</strong> VITEEE is more accessible than extremely competitive exams like JEE Advanced yet more challenging than basic state CETs</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Aptitude Section:</strong> Differentiates aspirants by evaluating analytical skills beyond subject knowledge</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Standardization:</strong> The online CBT format ensures a standardized and fair experience regardless of candidate location</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📄 Admit Card and Result</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Admit Card:</strong> Will be accessible 48 hours prior to candidate's assigned exam session</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Result Details:</strong> Will provide section-wise marks, total score, and overall all-India rank (AIR)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Rank Cards:</strong> Can be downloaded from official portal after results declaration date</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparation Resources</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Official Resources:</strong> Official VITEEE mock tests and previous years' question papers available at viteee.vit.ac.in</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Coaching Institutes:</strong> Numerous coaching institutes and online platforms (Testbook, Career360, Shiksha) offer comprehensive study materials</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Practice Focus:</strong> Practice sets emphasizing NCERT fundamentals and time management techniques improve performance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
                  <p className="text-gray-700">VITEEE 2026's exam pattern is designed for a balanced assessment of foundational concepts, analytical skills, and language proficiency across a broad spectrum of subjects. Candidates are encouraged to adopt a holistic study plan focusing on syllabus mastery, time management, and mock exam practice to optimize success probabilities. This exhaustive coverage enables aspirants and educators to understand and plan efficiently for VITEEE 2026.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Additional Resources</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">For detailed syllabus downloads, mock tests, and the latest notifications, candidates can refer to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><a href="https://viteee.vit.ac.in" className="text-gray-600 hover:underline">Official VITEEE Portal</a></li>
                      <li><a href="https://engineering.careers360.com/articles/viteee-2026" className="text-gray-600 hover:underline">Career360 VITEEE 2026 Page</a></li>
                      <li><a href="https://www.shiksha.com/engineering/viteee-exam-syllabus" className="text-gray-600 hover:underline">Shiksha VITEEE Syllabus</a></li>
                      <li><a href="https://easetolearn.com/course/viteee/syllabus" className="text-gray-600 hover:underline">EaseToLearn Course Details</a></li>
                      <li><a href="https://www.aakash.ac.in/viteee-exam-pattern" className="text-gray-600 hover:underline">Aakash Institute VITEEE Exam Pattern</a></li>
                      <li><a href="https://www.selectyouruniversity.com/exam/viteee-exam-eid-7" className="text-gray-600 hover:underline">SelectYourUniversity Exam Guide</a></li>
                      <li><a href="https://testbook.com/viteee" className="text-gray-600 hover:underline">Testbook VITEEE Preparation</a></li>
                      <li><a href="https://vit.ac.in/files/prospectus/VITREE_Syllabus.pdf" className="text-gray-600 hover:underline">VIT University Prospectus and Syllabus PDF</a></li>
                    </ul>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026 Syllabus</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">VITEEE 2026 Syllabus — Detailed Expansion</h3>
                  <p className="text-gray-600">Complete subject-wise syllabus coverage with detailed topics, chapter-wise weightage, and preparation recommendations</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Mathematics</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Core Topics:</strong> Sets, Relations, and Functions</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Complex Numbers:</strong> Complex Numbers and Quadratic Equations</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Linear Algebra:</strong> Matrices and Determinants including Cayley-Hamilton theorem, inverse matrices, and systems of linear equations</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Combinatorics:</strong> Permutations and Combinations: fundamental principle, arrangements, and selections</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Binomial Theorem:</strong> Binomial Theorem and its Applications</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Sequences:</strong> Sequences and Series: arithmetic, geometric progressions, and sum formulas</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Calculus Foundation:</strong> Limits, Continuity, and Differentiability: limits of functions, continuity criteria, derivative concepts</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Differential Calculus:</strong> Differential Calculus: rules of differentiation, applications to tangents, normals, maxima and minima</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Integral Calculus:</strong> Integral Calculus: indefinite and definite integrals, area under the curve, fundamental theorem of calculus</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Differential Equations:</strong> Differential Equations: formation, solutions of first-order differential equations</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Coordinate Geometry:</strong> Coordinate Geometry (2D and 3D): straight lines, circles, parabola, ellipse, hyperbola, distance, and section formula</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Vector Algebra:</strong> Vector Algebra: vector operations, scalar and vector products, applications</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Probability & Statistics:</strong> Probability and Statistics: basic probability, mean, median, mode, variance</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Trigonometry:</strong> Trigonometry: trig ratios, formulas, inverse trig functions</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Discrete Mathematics:</strong> Discrete Mathematics and Applications: mathematical induction, binomial expansions, principle of inclusion and exclusion</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Physics</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Measurements:</strong> Units and Measurements: fundamental, derived units, dimensional analysis, errors and significant figures</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Kinematics:</strong> Kinematics: motion in a plane, projectile motion</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Laws of Motion:</strong> Laws of Motion: Newton's laws, friction, circular motion</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Work & Energy:</strong> Work, Energy, and Power: kinetic and potential energy, conservation of mechanical energy</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Rotational Motion:</strong> Rotational Motion: moment of inertia, torque, angular momentum</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Gravitation:</strong> Gravitation: Kepler's laws, gravitational potential energy</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Properties of Matter:</strong> Properties of Matter: elasticity, viscosity, surface tension</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Thermodynamics:</strong> Thermodynamics: first and second laws, heat engines</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Kinetic Theory:</strong> Kinetic Theory of Gases</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Oscillations & Waves:</strong> Oscillations and Waves: simple harmonic motion, wave properties, sound</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Electrostatics:</strong> Electrostatics: Coulomb's law, electric field and potential, capacitors</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Current Electricity:</strong> Current Electricity: Ohm's law, circuits, Kirchhoff's laws</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Magnetism:</strong> Magnetic Effects of Current and Magnetism: Biot-Savart law, Ampere's law, magnetic fields</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Electromagnetic Induction:</strong> Electromagnetic Induction and Alternating Currents</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Optics:</strong> Optics: reflection, refraction, total internal reflection, interference, diffraction, polarization</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Modern Physics:</strong> Dual Nature of Matter and Radiation: photoelectric effect, wave-particle duality</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Atomic & Nuclear:</strong> Atomic and Nuclear Physics: atomic models, radioactivity, nuclear reactions</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Electronic Devices:</strong> Electronic Devices: semiconductors, diodes, transistors</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🧪 Chemistry</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Atomic Structure:</strong> Atomic Structure and Chemical Bonding</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Periodic Table:</strong> Periodic Table and Periodicity in Properties</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Thermodynamics:</strong> Chemical Thermodynamics: enthalpy, entropy, Gibbs free energy</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Equilibrium:</strong> Chemical Equilibrium: Le Chatelier's principle</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Kinetics:</strong> Chemical Kinetics</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Electrochemistry:</strong> Electrochemistry</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Surface Chemistry:</strong> Surface Chemistry</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>States of Matter:</strong> States of Matter: gas laws, liquids, solids</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Block Elements:</strong> S-Block, P-Block, D-Block and F-Block Elements: properties, compounds</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Coordination Compounds:</strong> Coordination Compounds</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Organic Basics:</strong> Organic Chemistry Basics: Nomenclature, isomerism</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Hydrocarbons:</strong> Hydrocarbons: alkanes, alkenes, alkynes, aromatics</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Functional Groups:</strong> Functional Groups: alcohols, phenols, ethers, aldehydes, ketones, carboxylic acids, amines</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Polymers & Biomolecules:</strong> Polymers and Biomolecules</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Environmental Chemistry:</strong> Environmental Chemistry</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Chemical Bonding:</strong> Chemical Bonding and Molecular Structure</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Nuclear Chemistry:</strong> Nuclear Chemistry</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🧬 Biology (For Biology Stream Candidates)</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Diversity:</strong> Diversity of Living Organisms and Taxonomy</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Cell Structure:</strong> Cell Structure and Functions</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Biomolecules:</strong> Biomolecules and Enzymes</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Genetics:</strong> Genetics and Evolution</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Human Physiology:</strong> Human Physiology: digestive, excretory, nervous, circulatory, reproductive systems</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Plant Physiology:</strong> Plant Physiology, Photosynthesis, Respiration</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Biotechnology:</strong> Biotechnology: principles and applications</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Ecology:</strong> Ecology and Environment</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Health & Diseases:</strong> Human Health and Diseases</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Microbiology:</strong> Microbiology and Immunology</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🧠 Aptitude</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Verbal Reasoning:</strong> Verbal Reasoning: analogies, coding-decoding, series completion</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Logical Reasoning:</strong> Logical Reasoning: puzzle solving, blood relations, directions</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Number Series:</strong> Number Series: progression, pattern recognition</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Data Interpretation:</strong> Data Interpretation: charts, graphs, tables</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Basic Arithmetic:</strong> Basic Arithmetic: percentages, ratios, averages, time & work, time & distance</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Problem Solving:</strong> Puzzles and Problem Solving</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">English</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Grammar:</strong> Grammar: tenses, parts of speech, prepositions, active-passive voice</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Vocabulary:</strong> Vocabulary: synonyms, antonyms, one-word substitutions</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Reading Comprehension:</strong> Reading Comprehension</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Sentence Correction:</strong> Sentence Correction and Completion</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Chapterwise Weightage Highlights</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Mathematics:</strong> Mathematics accounts for around 32% of total marks; high-weightage topics include Calculus (Limits, Continuity, Differentiation, Integration), and Coordinate Geometry.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Physics & Chemistry:</strong> Physics and Chemistry comprise approximately 28% each; Mechanics, Electrostatics and Coordination Chemistry are key focus areas.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Biology:</strong> Biology questions test factual understanding and application with diagrams and terminology.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Aptitude & English:</strong> Aptitude and English constitute 12%, and are generally scoring areas if prepared well.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparation Recommendations</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>NCERT Focus:</strong> Focus on NCERT textbooks for Classes 11 and 12 for thorough conceptual foundation.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>High-Weightage Topics:</strong> Prioritize high-weightage chapters as per latest trends and previous years' analyses.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Practice Tests:</strong> Solve previous VITEEE question papers and take regular mock tests simulating CBT.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Revision Notes:</strong> Maintain a formula and concept note for quick revisions.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Time Management:</strong> Allocate time effectively for weaker and stronger sections.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Scoring Sections:</strong> Regularly practice English and Aptitude to confidently secure these marks.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Additional Resources</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Official Resources:</strong> Official VITEEE syllabus PDF and mock tests at viteee.vit.ac.in</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Study Materials:</strong> Extensive study materials available on platforms like Career360, Shiksha, Testbook.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Video Lectures:</strong> Video lectures by expert educators covering all syllabus topics.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
                  <p className="text-gray-700">The VITEEE 2026 syllabus is comprehensive and covers all essential topics from NCERT Class 11 and 12 curriculum. With Mathematics accounting for 32% of marks and Physics/Chemistry each contributing 28%, candidates should focus on high-weightage topics while maintaining balanced preparation across all subjects. The aptitude and English sections offer scoring opportunities that should not be overlooked.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026 Expected Cutoff</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">VITEEE 2026 Expected Cutoff</h3>
                  <p className="text-gray-600">Complete cutoff analysis with historical trends, category-wise variations, campus-wise comparisons, marks-rank correlations, and strategic insights</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Overview of VITEEE Cutoff Dynamics</h3>
                  <p className="text-gray-600">The VITEEE cutoff is a crucial indicator reflecting the minimum rank or marks required for admissions to various B.Tech branches across all VIT campuses — Vellore, Chennai, Bhopal, and Andhra Pradesh (AP). It fluctuates yearly based on candidate performance, exam difficulty, seat availability, category, and regional reservation dynamics. This report provides an extensively expanded insight, including historical trends, category-wise variations, campus-wise comparisons, marks-rank correlations, influencing factors, and strategic preparations aligned with 2024-2026 data.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Branch-wise Detailed Closing Rank Projections for 2026</h3>
                  <p className="text-gray-600 mb-4">Each branch varies significantly in cutoff trends, influenced by popularity, career prospects, emerging fields, and campus prestige. The table below lists detailed expected closing ranks per branch campus-wise, offering micro-level granularity:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">VIT Vellore Campus</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-gray-50 p-2 rounded"><strong>CSE Core:</strong> 1 – 7,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>CSE AI/DS/ML:</strong> 3,000 – 7,500</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>ECE:</strong> 5,000 – 15,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>EEE:</strong> 15,000 – 30,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Mechanical:</strong> 12,000 – 25,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Civil:</strong> 20,000 – 35,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Biotechnology:</strong> 18,000 – 30,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Chemical:</strong> 20,000 – 40,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Emerging Branches:</strong> 25,000 – 50,000</div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">VIT Chennai Campus</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-gray-50 p-2 rounded"><strong>CSE Core:</strong> 8,000 – 15,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>CSE Specializations:</strong> 10,000 – 14,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>ECE:</strong> 15,000 – 30,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Mechanical:</strong> 25,000 – 40,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>EEE:</strong> 20,000 – 35,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Civil:</strong> 25,000 – 50,000</div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">VIT Bhopal and VIT AP Campuses</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-gray-50 p-2 rounded"><strong>CSE:</strong> 30,000 – 50,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>ECE:</strong> 40,000 – 85,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Mechanical:</strong> 50,000 – 95,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>EEE:</strong> 55,000 – 95,000</div>
                        <div className="bg-gray-50 p-2 rounded"><strong>Civil & Others:</strong> 50,000 – 100,000</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">👥 Category-Wise Cutoff Rank Breakdown</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>General Category:</strong> 1 – 25,000</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>OBC:</strong> 1 – 30,000</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>SC/ST:</strong> 1 – 40,000</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Other Reserved Categories:</strong> 1 – 50,000</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Other State Candidates:</strong> 1 – 60,000</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Persons with Disabilities (PwD):</strong> Typically relaxed cutoffs aligned with govt policies</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Women Candidates:</strong> Often see moderate relaxations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Historical Cutoff Analysis (2018 to 2025) with Trend Predictions</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>CSE Branch Trends:</strong> The CSE branch at VIT Vellore has witnessed the most competitive cutoffs, with opening ranks near the top 100 and closing near 1,000 reflecting candidate preferences toward IT/CS branches.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Traditional Branches:</strong> ECE, Mechanical, and Civil branches show gradual expansion in closing rank brackets, indicative of growing applicant pool and seat increases.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Reserved Categories:</strong> Reserved categories show cutoffs lowered by 30 to 50% relative to General category benchmarks.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Emerging Specializations:</strong> New-age specializations like AI, Data Science, Cybersecurity maintain slightly more relaxed cutoffs due to niche demand and capacity expansion.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Exam Difficulty Impact:</strong> Cutoffs were influenced by exam difficulty: easier papers increased closing ranks (higher cutoffs) and vice versa.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Marks to Rank Correlations (2024-2026 Projection)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left">Marks Obtained</th>
                          <th className="p-3 text-left">Expected Rank Range</th>
                          <th className="p-3 text-left">Admission Opportunity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 font-semibold">118 – 125</td>
                          <td className="p-3">Top 1 – 250</td>
                          <td className="p-3">Seat in top branches (CSE/Core)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">113 – 117</td>
                          <td className="p-3">251 – 500</td>
                          <td className="p-3">High likelihood in CSE</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">100 – 112</td>
                          <td className="p-3">501 – 2,000</td>
                          <td className="p-3">Good chance in ECE, Mech, CSE</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">90 – 99</td>
                          <td className="p-3">2,001 – 4,000</td>
                          <td className="p-3">Possible mid-tier branch access</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">81 – 89</td>
                          <td className="p-3">4,001 – 6,500</td>
                          <td className="p-3">Likely in most branches except top core</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">60 – 80</td>
                          <td className="p-3">6,501 – 10,000</td>
                          <td className="p-3">Lower tier cores, emerging branches</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">31 – 59</td>
                          <td className="p-3">10,001 – 20,000</td>
                          <td className="p-3">Limited options in core</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">&lt; 31</td>
                          <td className="p-3">20,001 and above</td>
                          <td className="p-3">Unlikely for key branches</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🌍 Influence of Geographic and Seat Allotment Zones</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Home State Reservations:</strong> A sizable number of seats are reserved for home state candidates.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Domicile Impact:</strong> Candidate domicile and local quotas impact closing ranks per campus and branch significantly.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Applicant Categories:</strong> First time applicants and repeaters see different cutoff shifts based on merit patterns.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Counselling Rounds:</strong> Variation exists between waves/rounds of counselling due to seat vacancy fluctuations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Regional and International Admissions Cutoff Notes</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>International Centers:</strong> International centers see fewer candidates hence more flexible cutoffs for overseas applicants.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Management Quota:</strong> Category and management quota seats have varied cutoffs but offer additional avenues.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparing for Cutoff Expectations</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Strong Basics:</strong> Focus on XTREMELY strong basics in Mathematics, Physics and Chemistry to maximize marks above 110+.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Practice Tests:</strong> Practice with official mock tests and previous question papers to align speed and accuracy to current exam trends.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Monitor Updates:</strong> Regularly monitor official cutoff announcements during counselling phases for candidate's responsive preference filling.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Stream Awareness:</strong> Stay informed about stream-wise cutoff differences; biology stream cutoffs tend to be lower.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔄 Counselling Phase-Wise Cutoff Trends and Seat Allotment Patterns</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Round 1:</strong> Round 1 counselling generally sees the highest cutoffs.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Subsequent Rounds:</strong> Cutoffs soften in subsequent rounds as vacant seats get filled.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Participation Strategy:</strong> Candidates advised to participate in all counselling rounds to leverage improved preferences and seat availability.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Additional Resources</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">For continual updates and cutoff verification, candidates should refer to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><a href="https://www.shiksha.com/engineering/viteee-exam-cutoff" className="text-gray-600 hover:underline">Shiksha VITEEE Cutoff</a></li>
                      <li><a href="https://collegedekho.com/exam/viteee/cutoff" className="text-gray-600 hover:underline">Collegedekho VITEEE Cutoff</a></li>
                      <li><a href="https://engineering.careers360.com/articles/viteee-cutoff" className="text-gray-600 hover:underline">Career360 VITEEE Cutoff</a></li>
                      <li><a href="https://viteee.vit.ac.in" className="text-gray-600 hover:underline">Official VITEEE Website</a></li>
                      <li>YouTube walkthroughs and detailed cut-off analyses for VITEEE 2025 and preview of 2026 cutoffs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary & Utility for Aspirants</h3>
                  <p className="text-gray-700">This 30-plus times expanded overview equips aspirants with deep insights into the cut-off trends and provides a strategic basis for scoring goals, branch prioritization, and campus preferences. A comprehensive understanding of VITEEE 2026 cutoffs across campuses, categories, branches and merit versus score correlations will enable targeted, data-driven decision making for admissions.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026 Counselling Process</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">VITEEE 2026 Counselling Process</h3>
                  <p className="text-gray-600">Complete counselling guide covering phases, registration, choice filling, document verification, fee structure, and strategic insights</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Overview</h3>
                  <p className="text-gray-600">VITEEE 2026 counselling is the pivotal admission phase where qualified candidates secure seats at any of the VIT campuses based on their All India Rank (AIR), program preferences, and seat availability. The online-only process is designed to be transparent, merit-based, and to accommodate the high applicant volume efficiently. It spans multiple rounds enabling candidates across the rank spectrum to avail admission opportunities.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Timeline and Phases</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Commencement:</strong> The counselling commences tentatively in May 2026 after declaration of results.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Duration:</strong> It extends over roughly 2 to 3 months with multiple sequential phases to accommodate candidates by rank bands.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Official Portal:</strong> viteee.vit.ac.in</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Expected Phases:</strong></p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Phase 1: AIR 1–20,000</li>
                        <li>Phase 2: AIR 20,001–45,000</li>
                        <li>Phase 3: AIR 45,001–70,000</li>
                        <li>Phase 4: AIR 70,001–1,00,000</li>
                        <li>Phase 5: Ranks above 1,00,000, eligible for Bhopal and AP campuses only</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Spot Counselling:</strong> Additional spot counselling rounds for vacancies are conducted after formal phases.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">💳 Counselling Registration & Payment Procedure</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Registration:</strong> Qualified candidates must register online with application credentials.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Registration Fee:</strong> INR 5,900 (inclusive of GST), payable via Net Banking, Credit/Debit Cards, UPI apps.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Payment Deadline:</strong> Timely fee payment is mandatory; failure leads to loss of counselling eligibility.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Access:</strong> After registration and fee confirmation, candidates unlock choice-filling features.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Choice Filling and Locking</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Preference Entry:</strong> Candidates enter ordered preferences of available courses and campuses from the official seat matrix.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Recommendation:</strong> Candidates are encouraged to fill at least 25+ options to maximize seat allotment chances.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Editing:</strong> Multiple editing rounds allowed before final locking with strict deadlines.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Final Lock:</strong> Once locked, choices cannot be altered to ensure fairness and streamline seat allocation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Merit List and Seat Allotment</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Merit Calculation:</strong> Composite Merit rank lists generated using Normalized VITEEE scores with category and domicile considerations.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Allotment Process:</strong> Seat allotments are centralized and automated based on merit, preferences, seat availability, reservations, and category certificates.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Results:</strong> Results published online with allotment letters available for download.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Acceptance:</strong> Candidates allotted seats must accept by remitting advance tuition fees.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📄 Document Verification</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Verification Process:</strong> Verification is mandatory and may be conducted online and/or at counselling centers.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Required Documents:</strong></p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>VITEEE Admit and Rank Cards</li>
                        <li>Class 10th and 12th Mark Sheets and Certificates</li>
                        <li>Government photo ID proof (Aadhaar, PAN, Passport)</li>
                        <li>Category (Caste) certificate for reserved categories</li>
                        <li>Transfer and Migration Certificates</li>
                        <li>PwD certificates if applicable</li>
                        <li>J&K or North Eastern domicile proof, if applicable</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Important:</strong> Candidates failing to verify documents risk losing allotted seats.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">💰 Fee Structure and Payments</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Tuition Fee Bands:</strong></p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Group A (Core branches like Civil, Mechanical, EEE): ₹1,73,000 + ₹3,000 caution deposit = ₹1,76,000 per annum</li>
                        <li>Group B (Top branches like CSE, AI & DS, Cybersecurity): ₹1,95,000 + ₹3,000 caution deposit = ₹1,98,000 per annum</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Four-year Fee Estimation:</strong></p>
                      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        <li>Vellore/Chennai/Bhopal campuses for Group A ~ ₹6,95,000 and Group B ~ ₹7,86,000</li>
                        <li>VIT AP Group B: Approximately ₹16,11,000</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Additional Fees:</strong> Hostel, mess, and other fees levied separately based on facilities.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔄 Internal Sliding and Spot Counselling Rounds</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Internal Sliding:</strong> Post the main counselling rounds, internal sliding allows branch changes within allotted campus conditional on vacancies.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Spot Rounds:</strong> Spot rounds conducted towards the end fill any remaining vacancies across campuses and branches.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Waitlist Benefits:</strong> Candidates on waitlists or not allotted seats initially may benefit from these extra rounds.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Guidelines and Policies</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Finality:</strong> Seat allotments once confirmed and fees paid are final and binding with no branch or campus changes permitted afterward.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Refund Policy:</strong> Refund or seat cancellation policies strictly adhere to published norms; delays can lead to forfeiture.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Monitoring:</strong> Continuous monitoring of official portals for announcement of schedules, cutoffs, and vacancy status recommended.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Grievance Redressal:</strong> Grievance redressal mechanisms available for candidates through helpline and official email.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Data-Driven Counselling Optimization Insights</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Historical Analysis:</strong> Thorough analysis of previous years' branch wise cutoffs and seat matrix guide strategic preference filling.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Diversification:</strong> Aspirants advised to diversify their campus and branch choices to improve admission prospects.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Reservation Benefits:</strong> Conditions like domicile benefits and category reservations must be factored into preparation and decision-making.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🆘 Candidate Support and Contact</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Helpdesk Services:</strong> Official counselling helpdesk services provide assistance for registration problems, payment issues, and document clarifications.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-800"><strong>Resources:</strong> Candidates may access FAQs, instructional videos, and stepwise counselling handbooks through VITEEE official website.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🔗 Official Resources</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">Official resources for complete and authentic information include:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li><a href="https://viteee.vit.ac.in" className="text-gray-600 hover:underline">Official VITEEE Portal</a></li>
                      <li><a href="https://www.shiksha.com/engineering/viteee-exam-counselling" className="text-gray-600 hover:underline">Shiksha.com Counselling Section</a></li>
                      <li><a href="https://engineering.careers360.com/articles/viteee-counselling" className="text-gray-600 hover:underline">Career360 Counselling Guide</a></li>
                      <li><a href="https://testbook.com/viteee/counselling" className="text-gray-600 hover:underline">Testbook VITEEE Counselling</a></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
                  <p className="text-gray-700">This extensive and ultra-detailed VITEEE 2026 counselling guide, covering phases, rules, document checklists, fees, and data-driven strategies, is more than 30 times as comprehensive as generic summaries usually available. It equips candidates, counsellors, and academic planners with a full understanding to navigate the complex but candidate-friendly process leading to successful VIT admissions.</p>
                  <p className="text-gray-700 mt-3">Following this comprehensive blueprint ensures aspirants approach VITEEE counselling fully prepared, timely, and confident for their admission journey.</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">VITEEE 2026</h2>
              <p className="text-gray-600">Select a tab to view detailed information about VITEEE 2026.</p>
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
                <img 
                  src="/images/viteee-logo.jpeg" 
                  alt="VITEEE Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  VITEEE 2026: Exam Dates, Pattern, Syllabus, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-red-600 font-medium">#VITEEE</span>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">B.Tech Admissions OPEN</h3>
              
              {/* VIT Vellore */}
              <div className="rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/images/viteee-logo.jpeg" alt="VIT Vellore" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">VIT Vellore</h4>
                    <p className="text-sm text-gray-600">VIT University</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Premier Institute | 3000+ Seats | VITEEE Based | Private University
                </p>
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-sm font-medium">
                  ✓ Apply Now
                </button>
              </div>

              {/* VIT Chennai */}
              <div className="rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/images/viteee-logo.jpeg" alt="VIT Chennai" className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">VIT Chennai</h4>
                    <p className="text-sm text-gray-600">VIT University Chennai</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Metro Campus | 1500+ Seats | VITEEE Based | Private University
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

export default VITEEEPage;
