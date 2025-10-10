import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jeeMainData from '../../../../data/exams/jee-main.json';

interface JEEMainData {
  "Exam Name": string;
  "Conducting Authority": string;
  "Exam Level": string;
  "Exam Category / Type": string;
  "Exam Frequency": string;
  "Languages Available": string[];
  "Mode of Exam": string;
  "Duration": string;
  "Total Papers": {
    "Paper 1": string;
    "Paper 2A": string;
    "Paper 2B": string;
  };
  "Number of Questions": {
    "Paper 1": string;
    "Paper 2A": string;
    "Paper 2B": string;
  };
  "Total Marks": string;
  "Marking Scheme": string;
  "Participating Institutes": string;
  "Significance": {
    "Gateway to JEE Advanced 2026": string;
    "Direct Admissions": string;
    "Expanded Opportunities": string;
    "Career Impact": string;
    "Global Benchmark": string;
  };
  "About / Overview": string;
  "Important Dates": {
    "Session 1 (January 2026)": {
      "Registration": string;
      "Correction": string;
      "Admit Card": string;
      "Paper 1 Exam": string;
      "Paper 2 Exam": string;
      "Provisional Answer Key": string;
      "Final Answer Key": string;
      "Result": string;
    };
    "Session 2 (April 2026)": {
      "Correction": string;
      "City Slip": string;
      "Admit Card": string;
      "Paper 1 Exam": string;
      "Paper 2 Exam": string;
      "Provisional Answer Key": string;
      "Final Key": string;
      "Result": string;
    };
    "Counselling": {
      "JoSAA Registration": string;
      "Rounds": string;
      "Final Reporting": string;
    };
  };
  "Eligibility Criteria": {
    "Age": string;
    "Qualification": string;
    "Subjects": string;
    "Attempts": string;
    "For NITs/IIITs/GFTIs": string;
  };
  "Application Process": {
    "Steps": string[];
    "Documents Required": string[];
    "Application Fee (India Centres)": {
      [key: string]: { [key: string]: string };
    };
  };
  "Syllabus": {
    "Paper 1 (B.E./B.Tech.)": {
      "Mathematics": string[];
      "Physics": string[];
      "Chemistry": {
        "Physical": string[];
        "Inorganic": string[];
        "Organic": string[];
      };
    };
    "Paper 2A (B.Arch.)": string[];
    "Paper 2B (B.Planning)": string[];
  };
  "Exam Structure": {
    "Mode of Exam": string;
    "Sessions": string;
    "Duration": string;
    "Papers": string;
    "Language Options": string;
    "Marking Scheme": string;
    "Medium": string;
  };
  "Paper-Wise Structure": {
    "Paper 1 (B.E./B.Tech)": {
      "Subjects": string;
      "Total Questions": string;
      "Marks": string;
      "Mode": string;
    };
    "Paper 2A (B.Arch)": {
      "Subjects": string;
      "Marks": string;
      "Duration": string;
    };
    "Paper 2B (B.Planning)": {
      "Subjects": string;
      "Marks": string;
      "Mode": string;
    };
  };
  "Exam Pattern": {
    "Paper 1": string;
    "Paper 2A": string;
    "Paper 2B": string;
  };
  "Admit Card Details": string;
  "Answer Key / Response Sheet": string;
  "Result & Score Calculation": string;
  "Normalization & Scoring Process": {
    "Normalization Formula": string;
    "Percentile Calculation": string;
    "Final Ranking": string;
    "Relative Performance": string;
  };
  "Cutoff (2026 Expected Percentile)": {
    "General": number;
    "EWS": number;
    "OBC-NCL": number;
    "SC": number;
    "ST": number;
    "PwD": number;
  };
  "Counselling Process": {
    "JoSAA": string;
    "CSAB": string;
  };
  "Participation & Statistics (Expected 2026)": {
    "Expected Applicants": string;
    "Average Attendance": string;
    "JEE Advanced Qualifiers": string;
    "Participating Institutes": string;
    "Average Cutoff (Gen)": string;
    "Top Rank Range": string;
    "Highest NIT Opening Score (CSE)": string;
  };
  "Career & Placement Opportunities": {
    "Top Recruiters": string;
    "Average Salary Range": string;
    "Highest Packages": {
      "NIT Trichy / Surathkal": string;
      "IIIT Hyderabad": string;
      "NIT Warangal": string;
    };
  };
  "Reservation Criteria": {
    "OBC-NCL": string;
    "EWS": string;
    "SC": string;
    "ST": string;
    "PwD": string;
  };
  "Preparation Tips / Books": string[];
  "Changes / Highlights (2026)": string[];
  "FAQs": Array<{ "Q": string; "A": string }>;
  "Conducting Authority": {
    "Name": string;
    "Established": string;
    "Website": string;
    "Role": string;
    "Functions": string[];
  };
  "Official Contact": {
    "Website": string;
    "Helpline": string;
    "Email": string;
  };
  "Summary Snapshot": {
    "Exam Name": string;
    "Conducting Body": string;
    "Exam Levels": string;
    "Mode": string;
    "Participants (Expected)": string;
    "Qualifiers for JEE Advanced": string;
    "Participating NITs": string;
    "Participating IIITs": string;
    "Participating GFTIs": string;
    "No. of Attempts Allowed": string;
    "Application Fee (Indicative)": string;
    "Official Website": string;
  };
  "Source URLs": string[];
}

type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling' | 'faq';

export default function JEEMainPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [data, setData] = useState<JEEMainData | null>(null);

  useEffect(() => {
    setData(jeeMainData as JEEMainData);
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
    { id: 'counselling', label: 'Counselling' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Main Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">About JEE Main 2025</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  JEE Main 2025 is India's premier national engineering entrance examination, conducted by the National Testing Agency (NTA). It serves as the qualifying gateway for admission to premier technical institutions including 31 National Institutes of Technology (NITs), over 25 Indian Institutes of Information Technology (IIITs), various Government Funded Technical Institutes (GFTIs), and acts as the preliminary qualifying exam for JEE Advanced, which leads to admission in the prestigious Indian Institutes of Technology (IITs). This computer-based exam attracts over 13 lakh students annually, making it one of the largest competitive exams worldwide.
                </p>
                
                <div className="bg-white p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Significance of JEE Main</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">🎯</span>
                      <span><strong>Qualifying for JEE Advanced:</strong> Only the top 2.5 lakh candidates (based on percentile cutoffs and rank) qualify to appear for JEE Advanced.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">🏛️</span>
                      <span><strong>Institute Admissions:</strong> Enables admission to engineering programs across NITs, IIITs, GFTIs, and invited private and state universities.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">💼</span>
                      <span><strong>Career Gateway:</strong> Opens paths to reputed engineering positions and global opportunities in technology and innovation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">🌍</span>
                      <span><strong>Global Recognition:</strong> The examination's rigorous standards uphold India's reputation for producing high-caliber engineers.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">🏢</span>Conducting Authority
                    </h4>
                    <p className="text-gray-800 font-medium">National Testing Agency (NTA)</p>
                    <p className="text-gray-600 text-sm mt-2">Established in 2017, administers JEE Main with advanced technology infrastructure, transparent evaluation mechanisms, and security protocols to ensure fairness.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">🌐</span>Exam Structure
                    </h4>
                    <p className="text-gray-800 font-medium">Computer Based Test (CBT)</p>
                    <p className="text-gray-600 text-sm mt-2">Conducted twice annually (January & April), 3 hours duration, all papers online except Drawing section.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">📊</span>Participation & Success
                    </h4>
                    <p className="text-gray-800 font-medium">13+ Lakh Annual Applicants</p>
                    <p className="text-gray-600 text-sm mt-2">Around 2.5 lakh qualify for JEE Advanced, 31 NITs, 25+ IIITs participate.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">🎓</span>Eligibility Requirements
                    </h4>
                    <p className="text-gray-800 font-medium">No Upper Age Limit</p>
                    <p className="text-gray-600 text-sm mt-2">Class 12 with PCM, 75% aggregate (65% for SC/ST), maximum 3 attempts allowed.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📈 Success Statistics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">13+ Lakh</div>
                      <div className="text-gray-600 text-sm">Annual Applicants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">2.5 Lakh</div>
                      <div className="text-gray-600 text-sm">JEE Advanced Qualifiers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">31 NITs</div>
                      <div className="text-gray-600 text-sm">Participating NITs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">25+ IIITs</div>
                      <div className="text-gray-600 text-sm">Participating IIITs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Dates for 2025 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📅 Important Dates for 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Session 1 (January)</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Registration</h5>
                      <p className="text-gray-600 text-sm">November 1 to December 4, 2024</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Exam Dates</h5>
                      <p className="text-gray-600 text-sm">January 24 to February 1, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Result</h5>
                      <p className="text-gray-600 text-sm">February 12, 2025</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Session 2 (April)</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Application Correction Window</h5>
                      <p className="text-gray-600 text-sm">February 14 to 16, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Exam Dates</h5>
                      <p className="text-gray-600 text-sm">April 4 to April 12, 2025</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-1">Result</h5>
                      <p className="text-gray-600 text-sm">April 25, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">🎓 Eligibility Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Age Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Age:</strong> No upper age limit. Must be at least 17 years by December 31, 2025</li>
                    <li>• <strong>Education:</strong> Passed Class 12 or equivalent in 2023, 2024 or appearing in 2025 with Physics, Chemistry, and Mathematics as subjects</li>
                    <li>• <strong>Attempts:</strong> Maximum of three consecutive years allowed</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Academic Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Minimum Marks:</strong> 75% aggregate for General/OBC, 65% for SC/ST or top 20 percentile in respective boards</li>
                    <li>• <strong>Subjects:</strong> Physics, Chemistry, and Mathematics are mandatory</li>
                    <li>• <strong>Board Recognition:</strong> Must be from a recognized educational board</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exam Pattern */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📊 Exam Pattern</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Paper 1 (B.E./B.Tech)</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Subjects:</strong> Physics, Chemistry, Mathematics</p>
                    <p><strong>Questions:</strong> 75 total (25 per subject; 20 MCQ + 5 numerical each)</p>
                    <p><strong>Duration:</strong> 3 hours</p>
                    <p><strong>Marks:</strong> 300 total</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Paper 2A (B.Arch)</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Subjects:</strong> Mathematics, Aptitude, Drawing</p>
                    <p><strong>Questions:</strong> 77 (MCQs + 2 offline drawing questions)</p>
                    <p><strong>Duration:</strong> 3 hours</p>
                    <p><strong>Marks:</strong> 400 total</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Paper 2B (B.Planning)</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Subjects:</strong> Mathematics, Aptitude, Planning</p>
                    <p><strong>Questions:</strong> 105 (all MCQs)</p>
                    <p><strong>Duration:</strong> 3 hours</p>
                    <p><strong>Marks:</strong> 400 total</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expected Cutoff Percentiles (2025) */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📈 Expected Cutoff Percentiles (2025)</h3>
              <div className="bg-white p-6 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">Percentile</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">Approximate Marks</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">General</td>
                        <td className="px-4 py-3 text-2xl font-bold text-gray-800">93.10%</td>
                        <td className="px-4 py-3 text-gray-600">85-95</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">EWS</td>
                        <td className="px-4 py-3 text-2xl font-bold text-gray-800">80.38%</td>
                        <td className="px-4 py-3 text-gray-600">65-75</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">OBC-NCL</td>
                        <td className="px-4 py-3 text-2xl font-bold text-gray-800">79.43%</td>
                        <td className="px-4 py-3 text-gray-600">65-74</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">SC</td>
                        <td className="px-4 py-3 text-2xl font-bold text-gray-800">61.15%</td>
                        <td className="px-4 py-3 text-gray-600">45-55</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">ST</td>
                        <td className="px-4 py-3 text-2xl font-bold text-gray-800">47.90%</td>
                        <td className="px-4 py-3 text-gray-600">38-45</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">PwD</td>
                        <td className="px-4 py-3 text-2xl font-bold text-gray-800">0.01%</td>
                        <td className="px-4 py-3 text-gray-600">Very low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Application Fee Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">💰 Application Fee Summary</h3>
              <div className="bg-white p-6 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">1 Paper Fee ₹</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-800">2 Papers Fee ₹</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">General/EWS/OBC-NCL</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">1,000</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">1,500</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">SC/ST/PwD</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">500</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">750</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">Foreign Centres General</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">5,000</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">7,500</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-medium text-gray-800">Foreign Centres SC/ST</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">2,500</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold">3,750</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Key Changes in 2025 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">🔄 Key Changes in 2025</h3>
              <div className="bg-white p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Removed option to choose questions in Section B:</strong> All 5 numerical questions are now mandatory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Negative marking (-1) introduced for numerical value questions</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Uniform syllabus with mandatory weightage for all chapters</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Exam conducted entirely in computer mode except Drawing section</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Available in 13 languages to enhance accessibility</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Counselling Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">🎓 Counselling Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">JoSAA</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Conducts six rounds of online counselling including registration, choice filling, seat allotment, document verification, fee payment, and seat withdrawal</li>
                    <li>• Registration & choice filling (June 3-12, 2025)</li>
                    <li>• Mock seat allotment in mid-June</li>
                    <li>• Seat allotment rounds from June 14</li>
                    <li>• Physical reporting & document verification</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Participating Institutes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All NITs, IIITs, GFTIs, IITs (through JEE Advanced), state universities, and private institutions</li>
                    <li>• CSAB conducts special counselling rounds for leftover seats in the NIT+ system</li>
                    <li>• 31 NITs, 25 IIITs, 39 GFTIs</li>
                    <li>• 23 IITs (via JEE Advanced ranks)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">💡 Preparation Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Study Strategy</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Build clear conceptual understanding with NCERT textbooks as foundation</li>
                    <li>• Regularly practice past year question papers and mock tests under timed conditions</li>
                    <li>• Time management: Allocate time wisely per section and practice pacing</li>
                    <li>• Since all numerical questions are mandatory, practice all topics comprehensively</li>
                    <li>• Don't skip any chapter due to uniform weightage</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Exam Day Tips</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• On exam day, arrive early, carry required documents, start with easier questions</li>
                    <li>• Use elimination techniques for MCQs, and stay calm to efficiently manage time</li>
                    <li>• Reach exam center 30-40 minutes early</li>
                    <li>• Carry valid ID proof and admit card</li>
                    <li>• Stay calm and manage time effectively</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates_old':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📅 JEE Main 2025 Complete Timeline & Important Dates</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                JEE Main offers three distinct papers, each leading to different engineering and architecture career paths. Choose the paper that aligns with your career aspirations and academic interests.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{Object.keys(data["Total Papers"])[0]}</h4>
                      <p className="text-gray-700 font-medium">{Object.values(data["Total Papers"])[0]}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">🎯 Career Opportunities</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Software Engineering at Google, Microsoft, Amazon</li>
                        <li>• Core Engineering in TCS, Infosys, Wipro</li>
                        <li>• Research & Development roles</li>
                        <li>• Entrepreneurship opportunities</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">📚 Subjects Covered</h5>
                      <p className="text-gray-700 text-sm">Physics, Chemistry, Mathematics</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">🏛️ Top Institutes</h5>
                      <p className="text-gray-700 text-sm">IITs, NITs, IIITs, BITS Pilani</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">2A</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{Object.keys(data["Total Papers"])[1]}</h4>
                      <p className="text-gray-700 font-medium">{Object.values(data["Total Papers"])[1]}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">🎯 Career Opportunities</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Architectural Design & Planning</li>
                        <li>• Urban Planning & Development</li>
                        <li>• Construction Management</li>
                        <li>• Interior Design & Landscape Architecture</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">📚 Subjects Covered</h5>
                      <p className="text-gray-700 text-sm">Mathematics, Aptitude, Drawing</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">🏛️ Top Institutes</h5>
                      <p className="text-gray-700 text-sm">SPA Delhi, IIT Kharagpur, NIT Trichy</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">2B</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{Object.keys(data["Total Papers"])[2]}</h4>
                      <p className="text-gray-700 font-medium">{Object.values(data["Total Papers"])[2]}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">🎯 Career Opportunities</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Urban Planning & Development</li>
                        <li>• Regional Planning & Policy</li>
                        <li>• Environmental Planning</li>
                        <li>• Transportation Planning</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">📚 Subjects Covered</h5>
                      <p className="text-gray-700 text-sm">Mathematics, Aptitude, Planning</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">🏛️ Top Institutes</h5>
                      <p className="text-gray-700 text-sm">SPA Delhi, IIT Kharagpur, CEPT Ahmedabad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Dates Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📅 Important Dates & Timeline 2025</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Plan your JEE Main preparation with our comprehensive timeline. Early registration and strategic preparation are key to success in this competitive examination.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">Session 1 (January 2025)</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">📝 Registration Opens</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Oct 28–Nov 22, 2024</span>
                      </div>
                      <p className="text-gray-700 text-sm">Early bird registration with multiple opportunities to apply and make corrections.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">📋 Correction Window</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Nov 26–27, 2024</span>
                      </div>
                      <p className="text-gray-700 text-sm">Last chance to modify application details and exam preferences.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">🎯 Exam Dates</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Jan 22–29, 2025</span>
                      </div>
                      <p className="text-gray-700 text-sm">Computer-based test across multiple shifts and exam centers nationwide.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">📊 Results</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Feb 11, 2025</span>
                      </div>
                      <p className="text-gray-700 text-sm">Scorecard with percentile, rank, and qualifying status for JEE Advanced.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">Session 2 (April 2025)</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">📝 Registration Opens</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Feb 1–Mar 7, 2025</span>
                      </div>
                      <p className="text-gray-700 text-sm">Second chance for those who missed Session 1 or want to improve their scores.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">🎯 Exam Dates</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Apr 2–8, 2025</span>
                      </div>
                      <p className="text-gray-700 text-sm">Final opportunity to secure your best possible JEE Main score.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">📊 Results</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Apr 18, 2025</span>
                      </div>
                      <p className="text-gray-700 text-sm">Final results with best score consideration for admission.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">🏛️ Counselling</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">June 3–12, 2025</span>
                      </div>
                      <p className="text-gray-700 text-sm">JoSAA counselling for seat allocation in NITs, IIITs, and CFTIs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">💡 Pro Tips for Success</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-gray-600 mr-2">🎯</span>
                      <span className="text-gray-800 text-sm">Register for both sessions to maximize your chances</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-600 mr-2">📚</span>
                      <span className="text-gray-800 text-sm">Start preparation at least 1 year in advance</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-600 mr-2">⏰</span>
                      <span className="text-gray-800 text-sm">Practice time management with mock tests</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-gray-600 mr-2">📝</span>
                      <span className="text-gray-800 text-sm">Keep all documents ready before registration</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-600 mr-2">🔍</span>
                      <span className="text-gray-800 text-sm">Analyze previous year papers and patterns</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-600 mr-2">💪</span>
                      <span className="text-gray-800 text-sm">Stay consistent with your study schedule</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Eligibility Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">✓</span>
                    <span className="text-gray-700">No upper age limit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">✓</span>
                    <span className="text-gray-700">Class 12 with PCM</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">✓</span>
                    <span className="text-gray-700">Three consecutive years attempts</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700">Min 75% in 12th for NITs/IIITs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700">Top 20 percentile in board</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exam Pattern Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Exam Pattern Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Paper 1 (B.E./B.Tech)</h4>
                  <p className="text-gray-700 text-sm">75 Questions, 300 Marks</p>
                  <p className="text-gray-600 text-xs">20 MCQ + 5 Numerical per subject</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Paper 2A (B.Arch)</h4>
                  <p className="text-gray-700 text-sm">77 Questions, 300 Marks</p>
                  <p className="text-gray-600 text-xs">Math + Aptitude + Drawing</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Paper 2B (B.Planning)</h4>
                  <p className="text-gray-700 text-sm">105 Questions, 300 Marks</p>
                  <p className="text-gray-600 text-xs">Math + Aptitude + Planning</p>
                </div>
              </div>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">Marking Scheme</h4>
                <p className="text-gray-700">{data["Marking Scheme"]}</p>
              </div>
            </div>

            {/* Expected Cutoffs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Expected Cutoff Percentiles (2025)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(data["Cutoff (2025 Expected Percentile)"]).map(([category, percentile]) => (
                  <div key={category} className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-800 text-sm">{category}</h4>
                    <p className="text-lg font-bold text-gray-600">{percentile.toFixed(2)}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Fee Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Application Fee Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-3 py-2 text-left">Category</th>
                      <th className="px-3 py-2 text-left">1 Paper</th>
                      <th className="px-3 py-2 text-left">2 Papers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(data["Application Process"]["Application Fee (India Centres)"]).map(([category, fees]) => (
                      <tr key={category}>
                        <td className="px-3 py-2 font-medium text-sm">{category}</td>
                        <td className="px-3 py-2 text-sm">{fees["1 Paper"]}</td>
                        <td className="px-3 py-2 text-sm">{fees["2 Papers"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2025 Changes & Highlights */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">2025 Changes & Highlights</h3>
              <ul className="space-y-2">
                {data["Changes / Highlights (2025)"].map((change, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700">{change}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick FAQs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Quick FAQs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data["FAQs"].slice(0, 6).map((faq, index) => (
                  <div key={index} className="rounded-lg p-3">
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">{faq["Q"]}</h4>
                    <p className="text-gray-700 text-sm">{faq["A"]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📅 JEE Main 2025 Complete Timeline & Important Dates</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Stay updated with the comprehensive JEE Main 2025 schedule. This detailed timeline covers all important dates from registration to counselling, ensuring you don't miss any crucial deadlines in your JEE Main journey.
              </p>
              
              {/* Session 1 (January 2025) */}
              <div className="bg-white p-6 rounded-lg mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Session 1 (January 2025)</h4>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Registration Window */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">📝 Registration Window</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Start Date:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">October 28, 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">End Date:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">November 22, 2024</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Application Portal:</p>
                        <p className="text-gray-700 text-sm">jeemain.nta.nic.in</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Activities:</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• New registration and account creation</li>
                          <li>• Filling personal and academic details</li>
                          <li>• Uploading documents (photo, signature, marksheet)</li>
                          <li>• Category/PwD certificate if required</li>
                          <li>• Online fee payment (UPI, net banking, cards)</li>
                        </ul>
                      </div>
                      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-800 font-semibold text-sm mb-1">Important Notes:</p>
                        <ul className="text-gray-700 text-xs space-y-1">
                          <li>• Only one registration per candidate per session</li>
                          <li>• Phone and email must be unique and active</li>
                          <li>• Correction facility available after registration closes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Correction Window */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">✏️ Correction Window</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Dates:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">Nov 26–27, 2024</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Allowed Corrections:</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Personal information</li>
                          <li>• Academic details</li>
                          <li>• Uploaded images</li>
                          <li>• Exam cities</li>
                          <li>• Category selection</li>
                          <li>• Gender</li>
                        </ul>
                      </div>
                      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-800 font-semibold text-sm mb-1">Important:</p>
                        <ul className="text-gray-700 text-xs space-y-1">
                          <li>• Only for registered candidates</li>
                          <li>• Correction fee payable for certain changes</li>
                          <li>• One-time use, no further changes after deadline</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Admit Card Issue */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">🎫 Admit Card Issue</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Release Dates:</span>
                        <div className="text-right">
                          <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-1">Jan 18, 2025</div>
                          <div className="text-gray-600 text-xs">(for exams Jan 22, 23, 24)</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Second Release:</span>
                        <div className="text-right">
                          <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-1">Jan 23, 2025</div>
                          <div className="text-gray-600 text-xs">(for exams Jan 28, 29, 30)</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Contains:</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Roll number and exam details</li>
                          <li>• Date, slot, and time</li>
                          <li>• Exam centre address</li>
                          <li>• COVID protocols and instructions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Exam Dates */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">📅 Exam Dates</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-800 font-semibold mb-2">Paper 1 (B.E./B.Tech):</p>
                        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          Jan 22, 23, 24, 28, 29, 2025
                        </div>
                        <p className="text-gray-600 text-xs mt-1">Multiple shifts (morning/afternoon)</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold mb-2">Paper 2A (B.Arch) & 2B (B.Planning):</p>
                        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          January 30, 2025
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Coverage:</p>
                        <p className="text-gray-700 text-sm">391 exam centres across 289 Indian cities and 12 international locations</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Timeline */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">📊 Provisional Answer Key</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 1:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">Feb 4, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 2:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">Feb 15, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">✅ Final Answer Key</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 1:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">Feb 10, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 2:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">Feb 22, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">🏆 Result Declaration</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 1:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">Feb 11, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 2:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">Feb 23, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Session 2 (April 2025) */}
              <div className="bg-white p-6 rounded-lg mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Session 2 (April 2025)</h4>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Application Correction */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">✏️ Application Correction Window</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Dates:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">Feb 27–28, 2025</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Session 2 Only</p>
                        <p className="text-gray-700 text-sm">Same correction policies as Session 1</p>
                      </div>
                    </div>
                  </div>

                  {/* Exam City Intimation */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">🏙️ Exam City Intimation Slip</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Release Date:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">March 20, 2025</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Shows:</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Allocated city and test centre</li>
                          <li>• Helps plan travel and logistics</li>
                          <li>• Final admit card gives full address</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Admit Card Issue Session 2 */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">🎫 Admit Card Issue</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">First Release:</span>
                        <div className="text-right">
                          <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-1">March 28, 2025</div>
                          <div className="text-gray-600 text-xs">(for April 2, 3, 4 exams)</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Second Release:</span>
                        <div className="text-right">
                          <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mb-1">April 3, 2025</div>
                          <div className="text-gray-600 text-xs">(for April 7, 8, 9 exams)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Exam Dates Session 2 */}
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">📅 Exam Dates</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-800 font-semibold mb-2">Paper 1:</p>
                        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          April 2, 3, 4, 7, 8, 2025
                        </div>
                        <p className="text-gray-600 text-xs mt-1">Multiple shifts</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold mb-2">Paper 2:</p>
                        <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                          April 9, 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Timeline Session 2 */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">📊 Provisional Answer Key</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 1:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">April 11, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 2:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">April 14, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">✅ Final Answer Key</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 1:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">April 18, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 2:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">May 22, 2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">🏆 Result Announcement</h6>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 1:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">April 18, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 text-sm">Paper 2:</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-semibold">May 23, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Counselling Schedule */}
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">🎓</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Counselling Schedule (JoSAA)</h4>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">📝 JoSAA Registration</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Open Period:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">June 3–12, 2025</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Activities:</p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Online registration for fresh candidates</li>
                          <li>• Fill choices and preferences</li>
                          <li>• Submit required documents</li>
                          <li>• Document verification</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">🔄 Counselling Rounds</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Round 1:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">June 14, 2025</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Final Round:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">July 16, 2025</span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Coverage:</p>
                        <p className="text-gray-700 text-sm">IITs (via JEE Advanced), NITs, IIITs, GFTIs</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">📋 Reporting/Admission</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Withdrawal Period:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">July 16–22, 2025</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Final Reporting:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">July 23–27, 2025</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Last Admission Date:</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">July 28, 2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">📄 Required Documents</h5>
                    <div className="mt-4">
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Scanned marksheet copies</li>
                        <li>• JEE Main admit card</li>
                        <li>• JEE Main scorecard</li>
                        <li>• Caste/EWS/PwD certificate</li>
                        <li>• Category-specific documents</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Additional Important Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">📋 Key Points to Remember:</h5>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• All dates and timings are strictly enforced as per official NTA notifications</li>
                      <li>• Multiple withdrawal/exit opportunities before Round 6</li>
                      <li>• Candidates can freeze, float, or surrender allotted seats</li>
                      <li>• Separate CSAB special rounds for leftover seats in NIT+ system</li>
                      <li>• Monitor official JoSAA portal for updates and schedule changes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">🎯 Pro Tips:</h5>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• Keep all documents ready well in advance</li>
                      <li>• Set reminders for important dates</li>
                      <li>• Check official websites regularly for updates</li>
                      <li>• Prepare for multiple rounds of counselling</li>
                      <li>• Have backup options ready</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">🎓 JEE Main 2025 Eligibility Criteria (Complete & Comprehensive)</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Understanding the eligibility criteria is crucial for JEE Main preparation. These requirements ensure that only qualified candidates appear for the examination and maintain the high standards of engineering education in India. Below is the complete, structured, and expanded eligibility criteria for JEE Main 2025.
              </p>
              
              {/* Age Criteria */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Age Criteria</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📅 Age Requirements</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>No Upper Age Limit:</strong> Candidates of any age can apply as per NTA guidelines</li>
                          <li>• <strong>Minimum Age (Admission):</strong> Some institutes may require candidates to be 17+ years old by December 31, 2025 for UG course admission, not for the exam itself</li>
                          <li>• <strong>Date of Birth Proof:</strong> Birth Certificate, Class X marksheet, Passport, Aadhaar Card required for application and at admission time</li>
                          <li>• <strong>Age Relaxation:</strong> Reserved categories (SC/ST/OBC/PwD) may get relaxation in minimum age for admission in certain institutes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Educational Qualifications */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Educational Qualifications</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📚 Academic Requirements</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Qualifying Exam:</strong> Class 12 (HSC) or equivalent examination recognized by NTA: CBSE, ICSE, State Boards, NIOS, International Boards</li>
                          <li>• <strong>Year of Passing:</strong> Must have cleared in 2023/2024 or appearing in 2025. Earlier years (2022 or before) are NOT eligible for 2025 cycle</li>
                          <li>• <strong>Open School/NIOS Candidates:</strong> Must have at least five subjects in qualifying exam</li>
                          <li>• <strong>International Candidates:</strong> Must provide AIU equivalency certificate for foreign qualifications</li>
                          <li>• <strong>Improvement Exam Candidates:</strong> Eligible only if they attempted all subjects in the improvement year</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🌍 Equivalent Exams Accepted</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• 2-year Pre-University Board/University</li>
                          <li>• Senior Secondary from NIOS (with five subjects minimum)</li>
                          <li>• NDA Joint Services Wing final exam</li>
                          <li>• General Certificate Education (GCE) Advanced Level (UK/Sri Lanka)</li>
                          <li>• IB Diploma (Geneva)</li>
                          <li>• H.S.C. Vocational exams, Diploma (AICTE/state technical, 3 years min)</li>
                          <li>• Exams recognized as equivalent to 10+2 by AIU (Association of Indian Universities)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject Requirements */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Subject Requirements</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🔬 Mandatory Subjects (as per course)</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h6 className="font-semibold text-gray-800 mb-2">B.E./B.Tech</h6>
                            <p className="text-gray-700 text-sm">Physics, Chemistry, Mathematics in Class 12 (PCM)</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h6 className="font-semibold text-gray-800 mb-2">B.Arch (Paper 2A)</h6>
                            <p className="text-gray-700 text-sm">Mathematics, Aptitude, Drawing (Math must be in Class 12)</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h6 className="font-semibold text-gray-800 mb-2">B.Planning (Paper 2B)</h6>
                            <p className="text-gray-700 text-sm">Mathematics, Aptitude, Planning (Math required in Class 12)</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">⚠️ Important Subject Rules</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Minimum Subjects:</strong> Must have studied at least five subjects in Class 12; fewer disqualifies</li>
                          <li>• <strong>Commerce or Non-Science Students:</strong> NOT eligible for B.E./B.Tech if Physics, Chemistry, Math were not studied</li>
                          <li>• <strong>Vocational/Technical Streams:</strong> Must meet subject combination requirements and equivalency as per AIU</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Number of Attempts */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Number of Attempts</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🔄 Attempt Rules</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Consecutive Attempts:</strong> Maximum 3 consecutive years (from year of first Class 12 eligibility), with two sessions (Jan/Apr) per year counting as one attempt</li>
                          <li>• <strong>Example:</strong> Class 12 passed in 2023 means eligible for 2023, 2024, and 2025 JEE Main attempts</li>
                          <li>• <strong>Session Policy:</strong> Both January and April sessions of the same year together count as a single attempt</li>
                          <li>• <strong>Gap Years:</strong> Permissible, provided attempts are within three consecutive years</li>
                          <li>• <strong>Previous Year Attempts:</strong> Do not affect current eligibility, unless three consecutive cycles are completed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility for NITs/IIITs/GFTIs */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Eligibility for NITs/IIITs/GFTIs (Admission Specific)</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🏛️ Institute-Specific Requirements</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Minimum Marks:</strong> For General/OBC candidates, at least 75% aggregate in Class 12; SC/ST/PwD: 65% aggregate</li>
                          <li>• <strong>Percentile Option:</strong> Alternatively, be among the top 20 percentile of Class 12 in respective Board/Stream</li>
                          <li>• <strong>Applicability:</strong> Essential for final admission, not for appearing in JEE Main</li>
                          <li>• <strong>Document Requirement:</strong> Original marksheet, percentile certificate/certificate from board required at counselling/admission</li>
                          <li>• <strong>Relaxation for Reserved Categories:</strong> As per government rules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nationality and Domicile */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Nationality and Domicile</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🌍 Nationality Requirements</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Indian Nationals:</strong> Eligible (must declare state code of eligibility based on Class 12 board, not permanent address)</li>
                          <li>• <strong>NRIs, PIOs, OCIs, Foreign Nationals:</strong> Can apply; state code based on permanent address for admission purposes</li>
                          <li>• <strong>State Code:</strong> Indicates the state where Class 12 exam was cleared, not residence</li>
                          <li>• <strong>Minority/Reserved Categories:</strong> Must provide category certificates as per latest guidelines during application and admission</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation & Application Readiness */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Documentation & Application Readiness</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📄 Must Have Documents</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="text-gray-700 space-y-2">
                            <li>• Valid email ID and mobile number (used for all official communication)</li>
                            <li>• Recent passport-sized photograph and signature (as per NTA specs)</li>
                            <li>• Class 10 marksheet/birth certificate for age proof</li>
                            <li>• Category/EWS/PwD certificate if applicable (latest financial year)</li>
                          </ul>
                          <ul className="text-gray-700 space-y-2">
                            <li>• AIU equivalency certificate (if international)</li>
                            <li>• Aadhaar card/ID proof</li>
                            <li>• Bank account details for fee payment</li>
                            <li>• Original marksheet, percentile certificate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Advisory */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">⚠</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Important Advisory</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🚨 Critical Information</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Eligibility verification is STRICT:</strong> Incorrect/missing information leads to disqualification at any stage—application, exam, counselling, or admission</li>
                          <li>• <strong>Provisional Candidates:</strong> Must ensure eligibility proof by admission date; failing which admission stands cancelled</li>
                          <li>• <strong>Institute Requirements:</strong> May impose additional requirements during final admission process; candidates must check institute-specific notifications</li>
                          <li>• <strong>Official Updates:</strong> Official clarifications and updates released on NTA portal, JEE Main official website before each session</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Checklist */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">✅ Comprehensive Eligibility Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">📋 Academic Requirements</h5>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">Passed/Appearing Class 12 (2023/24/25)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">Physics, Chemistry, Mathematics studied (for B.E/B.Tech)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">At least five subjects in qualifying exam</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">Valid email ID, phone number</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">📄 Documentation</h5>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">Photograph/signature scanned as per NTA specs</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">Category/Reservation/EWS/PwD certificate (if applicable)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">AIU equivalency for foreign/IB/GCE applicants</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">✓</span>
                        <span className="text-gray-700 text-sm">Birth certificate/class 10 marksheet for age proof</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📝 JEE Main 2025 Application Process (Highly Detailed Guide)</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The JEE Main application process is comprehensive and requires careful attention to detail. Follow this exhaustive guide to ensure a smooth application experience and avoid common mistakes that could lead to rejection.
              </p>
              
              {/* Timeline & Sessions */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Timeline & Sessions</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📅 Session 1 (January 2025)</h5>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• <strong>Registration:</strong> Nov 1–30, 2024</li>
                          <li>• <strong>Fee Payment Deadline:</strong> Nov 30, 2024</li>
                          <li>• <strong>Correction Window:</strong> Post registration, typically for 2 days</li>
                          <li>• <strong>Exam Dates:</strong> Jan 22–Feb 1, 2025</li>
                          <li>• <strong>Result:</strong> Feb 12, 2025</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📅 Session 2 (April 2025)</h5>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• <strong>Registration:</strong> Feb 2–Mar 2, 2025</li>
                          <li>• <strong>Fee Payment Deadline:</strong> Mar 2, 2025</li>
                          <li>• <strong>Correction Window:</strong> After registration close</li>
                          <li>• <strong>Exam Dates:</strong> Apr 2–15, 2025</li>
                          <li>• <strong>Result:</strong> Apr 25, 2025</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pre-Application Checklist */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Pre-Application Checklist</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">✅ Eligibility Requirements</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Class 12 passed/appearing, required subjects (PCM for engineering)</li>
                          <li>• Minimum age/admission-specific marks as per guidelines</li>
                          <li>• Valid email and mobile phone for OTP and communication</li>
                          <li>• Valid bank account for fee payment and refunds</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📄 Required Documents</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• <strong>Photo:</strong> 80% face on white, JPG/JPEG, 10–300 kb</li>
                            <li>• <strong>Signature:</strong> JPG/JPEG, 10–50 kb</li>
                            <li>• <strong>Class 10 marksheet:</strong> PDF format</li>
                          </ul>
                          <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• <strong>Category/EWS/PwD certificate:</strong> PDF, latest</li>
                            <li>• <strong>Other ID proof:</strong> Aadhaar, Passport, etc.</li>
                            <li>• <strong>Active email and mobile:</strong> For OTP and communication</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration Process */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Registration (Step-by-Step)</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🌐 Official Site Access</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Go to Official Site: <strong>jeemain.nta.nic.in</strong></li>
                          <li>• Click on "JEE Main 2025 Application Form" Link</li>
                          <li>• Read instructions carefully before proceeding</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">👤 Create Account</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Enter valid email, mobile number, Candidate's name, DOB, gender</li>
                          <li>• Get OTP on email/mobile, verify to activate account</li>
                          <li>• Set a secure password, pick a security question/answer</li>
                          <li>• System generates Application Number (note this down – used for all future logins)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📋 Read Advisory Pop-Ups</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• About single registration policy</li>
                          <li>• Photo/use/format guidelines</li>
                          <li>• Correction window limits</li>
                          <li>• Data privacy information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filling Application Form */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Filling the Application Form (Comprehensive Steps)</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">👤 Personal Details</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Full Name, Parents' Names, Nationality, Gender</li>
                          <li>• Category (Gen/OBC-NCL/SC/ST/EWS), Minority status (if any)</li>
                          <li>• Domicile state</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📞 Contact Details</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Present address, permanent address, pincode</li>
                          <li>• Email, mobile number</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📝 Exam Details</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Session (Jan/Apr), papers applying for (B.E./B.Tech, B.Arch, B.Planning)</li>
                          <li>• Choice of up to 4 exam cities (priority order)</li>
                          <li>• Exam language (English/Hindi/Regional)</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🎓 Education Details</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Class 10 passing year, school/board name, roll number</li>
                          <li>• Class 12 details (board, year, result status, subjects)</li>
                          <li>• Qualification stream (Science/PCM, Science/PCB, Commerce, etc.)</li>
                          <li>• Parents' educational qualification and income (for scholarship stats)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Uploading Documents */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Uploading Documents (Advanced)</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📸 Recent Photograph</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Colour, white/very light background, no sunglasses/caps/hats</li>
                          <li>• Recent without mask, face towards camera</li>
                          <li>• File size 10–300 kb, JPG/JPEG format</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">✍️ Signature</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Black/blue ink, white sheet, clear scan</li>
                          <li>• File size 10–50 kb, JPG/JPEG format</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📄 Other Documents</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Class 10 Certificate/Marksheet: PDF format, ensure clarity</li>
                          <li>• Category/EWS/PwD Certificate: Only if applicable, latest format</li>
                          <li>• Online Image Cropper: Provided in application for resizing</li>
                          <li>• Upload Confirmation: Auto-verifies file type/size</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee Payment */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Fee Payment (Expanded)</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">💳 Payment Modes</h5>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Credit/Debit Card (Domestic/International)</li>
                          <li>• Net banking, UPI</li>
                          <li>• Save digital receipt; check email/SMS for confirmation</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">💰 Fee Structure (Indian Centres)</h5>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="px-3 py-2 text-left">Category</th>
                                <th className="px-3 py-2 text-left">1 Paper</th>
                                <th className="px-3 py-2 text-left">2 Papers</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-3 py-2 font-medium">General (Male)</td>
                                <td className="px-3 py-2">Rs. 1000</td>
                                <td className="px-3 py-2">Rs. 2000</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 font-medium">General (Female)</td>
                                <td className="px-3 py-2">Rs. 800</td>
                                <td className="px-3 py-2">Rs. 1600</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 font-medium">OBC/EWS (Male)</td>
                                <td className="px-3 py-2">Rs. 900</td>
                                <td className="px-3 py-2">Rs. 2000</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 font-medium">OBC/EWS (Female)</td>
                                <td className="px-3 py-2">Rs. 800</td>
                                <td className="px-3 py-2">Rs. 1600</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2 font-medium">SC/ST/PwD/Transgender</td>
                                <td className="px-3 py-2">Rs. 500</td>
                                <td className="px-3 py-2">Rs. 1000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 text-xs mt-2">* International Centres: Higher fee amounts (see official portal)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation & Final Steps */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Confirmation Page & Final Steps</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">📄 Confirmation Process</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Download Confirmation:</strong> PDF available immediately after payment</li>
                          <li>• <strong>Print Multiple Copies:</strong> Download and print multiple copies for backup</li>
                          <li>• <strong>Auto-email Delivery:</strong> Confirmation PDF sent to registered email</li>
                          <li>• <strong>Required for:</strong> Admit card download, exam centre entry, future communication/counselling</li>
                          <li>• <strong>Important:</strong> Do NOT send printed form to NTA office</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Correction Window */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">8</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Correction Window (Critical)</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">⚠️ Important Correction Rules</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Timing:</strong> After registration closes, NTA opens correction window for 2–3 days</li>
                          <li>• <strong>Fields Editable:</strong> Category, gender, exam city, uploaded images, address, parents' names</li>
                          <li>• <strong>Fields NOT Editable:</strong> Name, date of birth, email, phone (unless specified)</li>
                          <li>• <strong>Correction Fee:</strong> Additional payment may apply for specific changes</li>
                          <li>• <strong>Status Tracking:</strong> Track status under candidate login; changes saved instantly</li>
                          <li>• <strong>Final Warning:</strong> NO corrections after window closes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Mistakes & Troubleshooting */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">⚠</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-4">Common Mistakes & Troubleshooting</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3">🚨 Critical Mistakes to Avoid</h5>
                        <ul className="text-gray-700 space-y-2">
                          <li>• <strong>Multiple Forms:</strong> Do NOT submit multiple forms; one valid registration per candidate per year</li>
                          <li>• <strong>Detail Verification:</strong> Check all details multiple times; incorrect spellings cause rejection</li>
                          <li>• <strong>Payment Issues:</strong> Try alternate payment method; don't refresh during payment</li>
                          <li>• <strong>Technical Problems:</strong> Clear browser cache, switch browser, contact NTA helpdesk</li>
                          <li>• <strong>Late Submission:</strong> No applications accepted after deadline, NO exceptions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support and Contact */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">📞 Support and Contact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-3">🌐 Official Resources</h5>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• <strong>Official Site:</strong> https://jeemain.nta.nic.in</li>
                      <li>• <strong>NTA Helpline:</strong> 0120–6895200 (9:30 AM to 5:30 PM, Mon–Sat)</li>
                      <li>• <strong>Email:</strong> jeemain@nta.ac.in</li>
                      <li>• <strong>Live Chat:</strong> Available during major dates on official portal</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-3">💡 Best Practices</h5>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Use official info-bulletin for latest changes</li>
                      <li>• Take 4+ printouts of confirmation receipt</li>
                      <li>• Monitor SMS/email for all updates</li>
                      <li>• Apply well BEFORE deadline to avoid issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">🔎 JEE Main 2025 Exam Pattern & Strategic Preparation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                JEE Main 2025 serves as the national gateway to top engineering (NITs, IIITs, GFTIs) and architecture/planning colleges. In 2025, NTA has enforced crucial changes to make the examination more standardized and challenging, directly impacting question formats, score calculation, and candidate strategies.
              </p>
              
              {/* Major 2025 Changes */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📢 Major 2025 Changes</h4>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Section B (Numerical Questions):</strong> No internal choices now; all 5 numerical questions per subject are mandatory. Previously, candidates chose any 5 out of 10.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Negative Marking:</strong> Negative marking (-1) introduced for numerical value questions, aligning them with MCQs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Uniform Syllabus & Compulsory Weightage:</strong> All chapters across Physics, Chemistry, and Mathematics now carry required weightage; selective study is discouraged.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Computer-Based Exam:</strong> All sections online except Drawing for B.Arch, which remains pen-and-paper.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span><strong>Multi-Language Support:</strong> Available in 13 languages to cater to diverse backgrounds.</span>
                  </li>
                </ul>
              </div>
              
              {/* Detailed Exam Structure */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🗂️ Detailed Exam Structure</h4>
                
                {/* Paper 1 */}
                <div className="bg-white p-6 rounded-lg mb-4">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Paper 1 (B.E./B.Tech)</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Subjects:</strong> Physics, Chemistry, Mathematics</p>
                      <p className="text-gray-700 mb-2"><strong>Total Questions:</strong> 75</p>
                      <p className="text-gray-700 mb-2"><strong>Marks:</strong> 300 (Each question 4 marks)</p>
                      <p className="text-gray-700 mb-2"><strong>Duration:</strong> 3 hours (180 minutes)</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Physics:</strong> 25 (20 MCQ, 5 Numerical)</p>
                      <p className="text-gray-700 mb-2"><strong>Chemistry:</strong> 25 (20 MCQ, 5 Numerical)</p>
                      <p className="text-gray-700 mb-2"><strong>Mathematics:</strong> 25 (20 MCQ, 5 Numerical)</p>
                      <p className="text-gray-700 mb-2"><strong>Languages:</strong> 13 Indian languages</p>
                    </div>
                  </div>
                </div>

                {/* Paper 2A */}
                <div className="bg-white p-6 rounded-lg mb-4">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Paper 2A (B.Arch)</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Subjects:</strong> Mathematics (25 MCQ), Aptitude (50 MCQ), Drawing (2 questions, offline)</p>
                      <p className="text-gray-700 mb-2"><strong>Total Questions:</strong> 77</p>
                      <p className="text-gray-700 mb-2"><strong>Marks:</strong> 400</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Mathematics:</strong> 100</p>
                      <p className="text-gray-700 mb-2"><strong>Aptitude:</strong> 200</p>
                      <p className="text-gray-700 mb-2"><strong>Drawing:</strong> 100</p>
                      <p className="text-gray-700 mb-2"><strong>Duration:</strong> 3 hours</p>
                    </div>
                  </div>
                </div>

                {/* Paper 2B */}
                <div className="bg-white p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Paper 2B (B.Planning)</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Subjects:</strong> Mathematics (25 MCQ), Aptitude (50 MCQ), Planning (25 MCQ)</p>
                      <p className="text-gray-700 mb-2"><strong>Total Questions:</strong> 105</p>
                      <p className="text-gray-700 mb-2"><strong>Marks:</strong> 400</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Mathematics:</strong> 100</p>
                      <p className="text-gray-700 mb-2"><strong>Aptitude:</strong> 200</p>
                      <p className="text-gray-700 mb-2"><strong>Planning:</strong> 100</p>
                      <p className="text-gray-700 mb-2"><strong>Duration:</strong> 3 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📑 Marking Scheme & Score Calculation</h3>
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📈 Marking System</h4>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Question Type</th>
                        <th className="px-4 py-2 text-left">Correct</th>
                        <th className="px-4 py-2 text-left">Incorrect</th>
                        <th className="px-4 py-2 text-left">Unattempted</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">MCQ</td>
                        <td className="px-4 py-2 text-gray-600 font-semibold">+4</td>
                        <td className="px-4 py-2 text-gray-600 font-semibold">-1</td>
                        <td className="px-4 py-2 text-gray-600">0</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Numerical</td>
                        <td className="px-4 py-2 text-gray-600 font-semibold">+4</td>
                        <td className="px-4 py-2 text-gray-600 font-semibold">-1</td>
                        <td className="px-4 py-2 text-gray-600">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-800 text-sm italic">*Multiple forms of correct numerical answers accepted (e.g., 5, 5.0, 05, etc.).</p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="text-gray-800 font-semibold">Raw Score Calculation:</p>
                  <p className="text-gray-700">Score = (Correct Answers × 4) - (Incorrect Answers × 1)</p>
                  <p className="text-gray-600 text-sm mt-2">Final score is normalized by session to yield percentiles and AIR (All India Rank).</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">⏱️ Test-Taking & Preparation Strategies</h3>
              
              {/* Time Management */}
              <div className="bg-white p-4 rounded-lg mb-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Time Management</h5>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Paper 1:</strong> Allocate 60 min per subject. Recommend 2 min per MCQ/Numerical, reserve final 15 min for revision and grid filling.</li>
                  <li><strong>Paper 2A/2B:</strong> Assign 70 min to Aptitude, 40 min each to Mathematics & Drawing/Planning. Use short breaks to reset focus.</li>
                  <li><strong>Mock Drills:</strong> Simulate full CBT at home (official NTA mock test portal)</li>
                </ul>
              </div>

              {/* Strategic Planning */}
              <div className="bg-white p-4 rounded-lg mb-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Strategic Planning</h5>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Accuracy First:</strong> Negative marking for ALL questions means guessing carelessly can lower scores. Attempt only if confident.</li>
                  <li><strong>Prioritize Easy Questions:</strong> Quick wins secure a base score; mark tough ones for review and return if time remains.</li>
                  <li><strong>Elimination:</strong> For MCQs, rule out known incorrect options.</li>
                  <li><strong>Numerical Practice:</strong> Now all numericals are compulsory. Practice for speed, precision, and format conversions (decimal/integers).</li>
                  <li><strong>Coverage:</strong> Since optional numericals have been removed, EVERY chapter may yield 1–2 direct questions: Do not skip any chapter!</li>
                  <li><strong>Chapter Weightage:</strong> Focus on chapters with historically high weightage, but revisit weaker areas frequently.</li>
                  <li><strong>Multi-Session Attempts:</strong> If taking both sessions, analyze results to adapt strategy, focusing effort where scores were lowest.</li>
                </ul>
              </div>

              {/* Advanced Preparation */}
              <div className="bg-white p-4 rounded-lg mb-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Advanced Preparation</h5>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Mock Exams:</strong> NTA provides official sample papers & mock tests. Aim to score 250+ in mocks before real exam.</li>
                  <li><strong>Error Log:</strong> Maintain a notebook for mistakes and recurring errors per topic.</li>
                  <li><strong>Time Audit:</strong> After every mock or practice set, review time spent per section/question.</li>
                  <li><strong>Exam Language:</strong> Practice answering in the selected language (English/Hindi/Regional).</li>
                  <li><strong>Drawing/Planning:</strong> For Paper 2A, practice sketching under time pressure (pen-paper format), using past years' official question patterns.</li>
                </ul>
              </div>
            </div>

            {/* Summary Table */}
            <div className="bg-white p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🖋️ Summary Table: Paper Structures</h4>
              <div className="bg-white p-4 rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">Paper</th>
                      <th className="px-4 py-2 text-left">Subjects</th>
                      <th className="px-4 py-2 text-left">Questions</th>
                      <th className="px-4 py-2 text-left">Marks</th>
                      <th className="px-4 py-2 text-left">Duration</th>
                      <th className="px-4 py-2 text-left">Section B (Numericals)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Paper 1</td>
                      <td className="px-4 py-2">PCM</td>
                      <td className="px-4 py-2">75</td>
                      <td className="px-4 py-2">300</td>
                      <td className="px-4 py-2">3 hrs</td>
                      <td className="px-4 py-2">5 mandatory/subject</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Paper 2A</td>
                      <td className="px-4 py-2">Math, Aptitude, Drawing</td>
                      <td className="px-4 py-2">77</td>
                      <td className="px-4 py-2">400</td>
                      <td className="px-4 py-2">3 hrs</td>
                      <td className="px-4 py-2">Drawing offline</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Paper 2B</td>
                      <td className="px-4 py-2">Math, Aptitude, Planning</td>
                      <td className="px-4 py-2">105</td>
                      <td className="px-4 py-2">400</td>
                      <td className="px-4 py-2">3 hrs</td>
                      <td className="px-4 py-2">MCQ Planning section</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Strategic Advice */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Additional Strategic Advice</h4>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Adaptive Difficulty:</strong> NTA may calibrate question difficulty by shift; accept that some shifts may feel harder or easier. Focus on NTA-provided normalization.</li>
                <li><strong>Revision:</strong> Quick recaps of formulas, tricks, error notebooks a week before exam. Practice past year's papers for final review.</li>
                <li><strong>Avoid Selective Study:</strong> Due to compulsory numericals, all topics must be prepped.</li>
              </ul>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📚 JEE Main 2025 Paper 1 (B.E./B.Tech) Detailed Syllabus and Structure</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                JEE Main 2025 Mathematics syllabus comprehensively covers concepts from Sets and Relations through advanced Calculus and Probability. The syllabus integrates Class 11 and Class 12 NCERT topics with a focus on problem-solving and analytical skills.
              </p>
              
              {/* Mathematics */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📐 Mathematics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Sets, Relations, and Functions</h5>
                      <p className="text-gray-700 text-sm">Representation of sets, union, intersection, complement, types of relations and functions, domain, co-domain.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Complex Numbers and Quadratic Equations</h5>
                      <p className="text-gray-700 text-sm">Algebraic properties, polar form, quadratic equations and roots.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Matrices and Determinants</h5>
                      <p className="text-gray-700 text-sm">Matrix operations, types of matrices, determinants and their properties, applications.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Permutations and Combinations</h5>
                      <p className="text-gray-700 text-sm">Fundamental principle of counting, factorial notation, permutations, combinations.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Binomial Theorem and Its Simple Applications</h5>
                      <p className="text-gray-700 text-sm">Expansion of binomial expressions, properties.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Sequences and Series</h5>
                      <p className="text-gray-700 text-sm">Arithmetic and geometric progressions, sum formulas, application problems.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Limits, Continuity and Differentiability</h5>
                      <p className="text-gray-700 text-sm">Concepts of limits, continuity of functions, derivatives, rules of differentiation.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Integral Calculus</h5>
                      <p className="text-gray-700 text-sm">Indefinite integrals, methods of integration, definite integrals, application of integrals.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Differential Equations</h5>
                      <p className="text-gray-700 text-sm">Formation, solution of first order differential equations.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Coordinate Geometry</h5>
                      <p className="text-gray-700 text-sm">Straight lines, circles, conic sections (parabola, ellipse, hyperbola).</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Three-Dimensional Geometry</h5>
                      <p className="text-gray-700 text-sm">Direction cosines and ratios, equation of a line and plane in space.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Vector Algebra</h5>
                      <p className="text-gray-700 text-sm">Addition, subtraction, scalar and vector products, applications.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Probability and Statistics</h5>
                      <p className="text-gray-700 text-sm">Measures of central tendency, probability rules.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Trigonometry</h5>
                      <p className="text-gray-700 text-sm">Trigonometric ratios, identities, equations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physics */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🔬 Physics</h4>
                <p className="text-gray-800 mb-4">The Physics syllabus spans fundamental concepts and experimental skills, focusing on both Class 11 & 12 NCERT topics:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Units and Measurements</h5>
                      <p className="text-gray-700 text-sm">SI units, dimension analysis, errors and significant figures.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Kinematics</h5>
                      <p className="text-gray-700 text-sm">Motion in one and two dimensions, projectile motion, relative velocity.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Laws of Motion</h5>
                      <p className="text-gray-700 text-sm">Newton's laws, friction, circular motion, dynamics of uniform circular motion.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Work, Energy and Power</h5>
                      <p className="text-gray-700 text-sm">Work done, kinetic and potential energy, power, conservation of energy.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Rotational Motion</h5>
                      <p className="text-gray-700 text-sm">Moment of inertia, torque, angular momentum.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Gravitation</h5>
                      <p className="text-gray-700 text-sm">Universal law of gravitation, acceleration due to gravity, orbital motion.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Properties of Solids and Liquids</h5>
                      <p className="text-gray-700 text-sm">Elasticity, fluid mechanics, viscosity, surface tension.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Thermodynamics</h5>
                      <p className="text-gray-700 text-sm">Laws of thermodynamics, kinetic theory of gases.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Oscillations and Waves</h5>
                      <p className="text-gray-700 text-sm">Simple harmonic motion, wave motion, sound waves.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Electrostatics</h5>
                      <p className="text-gray-700 text-sm">Charge, electric field, Gauss's law, potential and capacitance.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Current Electricity</h5>
                      <p className="text-gray-700 text-sm">Ohm's law, circuits, resistors in series and parallel.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Magnetic Effects of Current and Magnetism</h5>
                      <p className="text-gray-700 text-sm">Biot–Savart law, Ampere's law, magnetic field.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Electromagnetic Induction and Alternating Currents</h5>
                      <p className="text-gray-700 text-sm">Faraday's law, inductance, AC circuits.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Electromagnetic Waves</h5>
                      <p className="text-gray-700 text-sm">Properties and spectrum.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Optics</h5>
                      <p className="text-gray-700 text-sm">Reflection, refraction, wave optics.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Dual Nature of Matter and Radiation</h5>
                      <p className="text-gray-700 text-sm">Photoelectric effect, wave-particle duality.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Atoms and Nuclei</h5>
                      <p className="text-gray-700 text-sm">Atomic models, radioactivity, nuclear reactions.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Electronic Devices</h5>
                      <p className="text-gray-700 text-sm">Semiconductors, diodes, transistors.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Experimental Skills</h5>
                      <p className="text-gray-700 text-sm">Measurement techniques, error analysis, common experiments.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chemistry */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🧪 Chemistry</h4>
                <p className="text-gray-800 mb-4">Divided into Physical, Organic, and Inorganic Chemistry, the syllabus follows NCERT chapters with strong emphasis on conceptual clarity:</p>
                
                {/* Physical Chemistry */}
                <div className="bg-white p-6 rounded-lg mb-4">
                  <h5 className="text-lg font-semibold text-gray-800 mb-4">Physical Chemistry:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Basic Concepts and Atomic Structure</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Chemical Bonding and Molecular Structure</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Thermodynamics and Energetics</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Chemical Equilibrium</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Ionic Equilibrium</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Chemical Kinetics</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Surface Chemistry</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Solutions</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Electrochemistry</span>
                    </div>
                  </div>
                </div>

                {/* Inorganic Chemistry */}
                <div className="bg-white p-6 rounded-lg mb-4">
                  <h5 className="text-lg font-semibold text-gray-800 mb-4">Inorganic Chemistry:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Periodic Table and Periodicity</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Hydrogen and its Compounds</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">The Alkali and Alkaline earth Metals</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Group 13 to Group 18 Elements (P-block metals and non-metals)</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Transition Elements and Coordination Compounds</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Environmental Chemistry</span>
                    </div>
                  </div>
                </div>

                {/* Organic Chemistry */}
                <div className="bg-white p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 mb-4">Organic Chemistry:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Some Basic Principles</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Hydrocarbons</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Haloalkanes and Haloarenes</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Alcohols, Phenols and Ethers</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Aldehydes, Ketones and Carboxylic Acids</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Organic Compounds Containing Nitrogen</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Biomolecules, Polymers and Chemistry in Everyday Life</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Papers */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📋 Other Papers</h4>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Paper 2A (B.Arch)</h5>
                    <p className="text-gray-700 mb-3">Mathematics syllabus same as Paper 1, with additional modules on:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Aptitude:</strong> 50 questions testing mental ability, spatial visualization, awareness of architecture and environment</li>
                      <li><strong>Drawing:</strong> 2 subjective drawing questions conducted offline</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Paper 2B (B.Planning)</h5>
                    <p className="text-gray-700 mb-3">Includes Mathematics and Aptitude as in Paper 2A, plus a Planning section covering:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>General Awareness</li>
                      <li>Social Science</li>
                      <li>Map reading</li>
                      <li>Comprehension</li>
                      <li>Critical Reasoning</li>
                      <li>Planning-related knowledge</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Preparation Strategy */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 Preparation Strategy Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Comprehensive Coverage</h5>
                      <p className="text-gray-700 text-sm">Given all numerical questions are compulsory (Section B), uniform study across syllabus is critical.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Conceptual Clarity in Physics & Chemistry</h5>
                      <p className="text-gray-700 text-sm">Topics like Modern Physics, Thermodynamics, Coordination Chemistry, and Reaction Mechanisms have high weightage.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Advanced Mathematical Practice</h5>
                      <p className="text-gray-700 text-sm">Topics such as Calculus (Differentiation & Integration), Vector Algebra, and Coordinate Geometry require high problem-solving acumen.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Practice Past Papers</h5>
                      <p className="text-gray-700 text-sm">Analyze previous years to identify trends, frequently tested topics, and difficulty level.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Mock Tests & Time Management</h5>
                      <p className="text-gray-700 text-sm">Practice full-length tests simulating exam conditions to improve speed and accuracy.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Language Awareness</h5>
                      <p className="text-gray-700 text-sm">Syllabus available in multiple languages; choose language best suited for comprehension.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">📊 JEE Main 2025 Expected Cutoff Percentiles and Reservation Criteria</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Understanding cutoff percentiles and reservation criteria is crucial for JEE Main aspirants. This comprehensive guide provides expected cutoffs, reservation policies, and factors affecting admission trends for 2025.
              </p>
              
              {/* Expected Category-wise Cutoff Percentiles */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📈 Expected Category-wise Cutoff Percentiles for JEE Main 2025</h4>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Expected Cutoff Percentile</th>
                        <th className="px-4 py-2 text-left">Approximate Marks Equivalent (out of 300)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 font-medium">General</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">93.10%</td>
                        <td className="px-4 py-2 text-gray-700">85–95 marks</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">EWS</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">80.38%</td>
                        <td className="px-4 py-2 text-gray-700">65–75 marks</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">OBC-NCL</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">79.43%</td>
                        <td className="px-4 py-2 text-gray-700">65–74 marks</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">SC</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">61.15%</td>
                        <td className="px-4 py-2 text-gray-700">45–55 marks</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">ST</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">47.90%</td>
                        <td className="px-4 py-2 text-gray-700">38–45 marks</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">PwD</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">0.01%</td>
                        <td className="px-4 py-2 text-gray-700">Very low qualifying marks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Detailed Explanation */}
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Detailed Explanation</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>General Category:</strong> The cutoff percentile around 93.10 represents a high competition level due to the large pool of candidates from this category. Cutoffs vary slightly depending on exam difficulty and number of applicants.</li>
                    <li><strong>Economically Weaker Sections (EWS):</strong> Cutoff is roughly in the range of 80%, reflecting a reserved quota yet competitive level, given the broader applicant base compared to SC/ST.</li>
                    <li><strong>Other Backward Classes – Non-Creamy Layer (OBC-NCL):</strong> Similar to EWS but slight variation downwards due to category specifics in reservation policies.</li>
                    <li><strong>Scheduled Castes (SC) and Scheduled Tribes (ST):</strong> Cutoffs are significantly lower, reflecting reservation benefits and fewer seats compared to General/OBC, with SC generally higher than ST.</li>
                    <li><strong>Persons with Disability (PwD):</strong> The cutoff is extremely low due to horizontal reservation across all categories and special considerations.</li>
                  </ul>
                </div>
              </div>

              {/* Cutoff Variations */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🔄 Cutoff Variations Across Sessions and States</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>Cutoffs can vary marginally between Session 1 (January) and Session 2 (April) based on exam difficulty and candidate performance.</li>
                    <li>State-level admission cutoffs will differ depending on local seat availability and reservation implementation.</li>
                    <li>Candidates are advised to monitor JoSAA and state counselling authority releases for detailed cutoff info per institute/state.</li>
                  </ul>
                </div>
              </div>

              {/* Reservation Criteria */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📋 Reservation Criteria (% Seats Reserved)</h4>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Reservation Percentage</th>
                        <th className="px-4 py-2 text-left">Type of Reservation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 font-medium">OBC-NCL</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">27%</td>
                        <td className="px-4 py-2 text-gray-700">Vertical (Scheduled caste category)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">EWS</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">10%</td>
                        <td className="px-4 py-2 text-gray-700">Vertical (Economically weaker section)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">SC</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">15%</td>
                        <td className="px-4 py-2 text-gray-700">Vertical</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">ST</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">7.5%</td>
                        <td className="px-4 py-2 text-gray-700">Vertical</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">PwD</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">5%</td>
                        <td className="px-4 py-2 text-gray-700">Horizontal (across all categories)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Explanation */}
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Explanation</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Vertical Reservation:</strong> Reserved seats allotted within categories such as General, OBC, SC, and ST.</li>
                    <li><strong>Horizontal Reservation:</strong> PwD candidates get 5% reservation horizontally distributed across all categories, meaning 5% of seats in each category are reserved for PwD.</li>
                    <li><strong>Category Certificates:</strong> Candidates must submit valid certificates issued by competent authorities to avail reservation benefits.</li>
                    <li><strong>Interplay of Reservations:</strong> Horizontal reservation applies over vertical allocations, potentially increasing total reserved seats for PwD candidates within each category.</li>
                    <li><strong>Admission Authorities:</strong> Based on JEE Main ranklists, reservation is applied during seat allocation conducted by JoSAA for IITs, NITs, IIITs and other GFTIs.</li>
                  </ul>
                </div>
              </div>

              {/* Factors Affecting Cutoff Percentiles */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📊 Factors Affecting Cutoff Percentiles and Admission Trends</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Number of Applicants:</strong> Higher attendance generally leads to higher cutoff percentiles due to increased competition.</li>
                    <li><strong>Difficulty Level:</strong> Easier exams typically cause cutoffs to rise, whereas tougher papers lower cutoff scores.</li>
                    <li><strong>Seat Availability:</strong> Total number of seats in participating institutes directly influences the qualifying cutoff.</li>
                    <li><strong>Performance Distribution:</strong> If large numbers of candidates score similarly, the cutoff may fluctuate.</li>
                    <li><strong>Policy Changes:</strong> Reservation policy updates or seat matrix alterations can shift cutoff thresholds.</li>
                  </ul>
                </div>
              </div>

              {/* Historical Trends and Expert Predictions */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🔮 Historical Trends and Expert Predictions</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>Experts predict 2025 General category cutoff to be at least 92–95 percentile considering modest changes in exam difficulty.</li>
                    <li>EWS and OBC-NCL categories to hover around 79–82 percentile, consistent with prior years.</li>
                    <li>SC and ST cutoffs anticipated slightly increased due to greater participation and awareness.</li>
                    <li>PwD category's cutoff expected to remain minimal but competitive due to horizontal reservation.</li>
                    <li>Admission cutoffs generally higher than qualifying cutoffs due to limited seats.</li>
                  </ul>
                </div>
              </div>

              {/* Usage of Cutoff Percentiles */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 Usage of Cutoff Percentiles</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Qualifying JEE Advanced:</strong> Only top ~2,50,000 candidates clearing these cutoffs in JEE Main advance to JEE Advanced.</li>
                    <li><strong>Institutional Admission:</strong> Different NITs, IIITs, and GFTIs set separate cutoffs for admission based on JEE ranks and reservation categories.</li>
                    <li><strong>Counselling & Seat Allocation:</strong> JoSAA applies reservation and cutoff criteria during seat allotment rounds.</li>
                    <li><strong>Prioritizing Preparation:</strong> Understanding cutoffs helps aspirants set target scores and plan last phase of preparation.</li>
                  </ul>
                </div>
              </div>

              {/* Summary Table */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📋 Summary Table: Cutoff Percentiles & Reservation</h4>
                <div className="bg-white p-4 rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Expected Percentile</th>
                        <th className="px-4 py-2 text-left">Reservation %</th>
                        <th className="px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 font-medium">General</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">~93.10</td>
                        <td className="px-4 py-2 text-gray-600">-</td>
                        <td className="px-4 py-2 text-gray-700">Highly competitive; top scoring category</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">EWS</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">~80.38</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">10%</td>
                        <td className="px-4 py-2 text-gray-700">Reserved economically weaker section</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">OBC-NCL</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">~79.43</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">27%</td>
                        <td className="px-4 py-2 text-gray-700">Largest reserved category</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">SC</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">~61.15</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">15%</td>
                        <td className="px-4 py-2 text-gray-700">Reserved for Scheduled Castes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">ST</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">~47.90</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">7.5%</td>
                        <td className="px-4 py-2 text-gray-700">Reserved for Scheduled Tribes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">PwD</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">~0.01</td>
                        <td className="px-4 py-2 text-gray-600 font-bold">5% (horizontal)</td>
                        <td className="px-4 py-2 text-gray-700">Applies across all categories; requires certificate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">🎓 JEE Main 2025 Counselling Process – Expanded Comprehensive Guide</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The JEE Main counselling process is conducted through JoSAA (Joint Seat Allocation Authority) and CSAB (Central Seat Allocation Board) for admissions to IITs, NITs, IIITs, and Government Funded Technical Institutes. This comprehensive guide covers all aspects of the counselling process.
              </p>
              
              {/* JoSAA Overview */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🏛️ Joint Seat Allocation Authority (JoSAA)</h4>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <p className="text-gray-800 mb-4"><strong>Overview:</strong> JoSAA conducts the centralized counselling for admissions to IITs, NITs, IIITs, and Government Funded Technical Institutes (GFTIs) based on JEE Main and JEE Advanced ranks. It is a fully online system designed to allocate seats fairly and transparently.</p>
                </div>
                
                {/* Key Features */}
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Features of JoSAA Counselling 2025</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Six Online Counselling Rounds:</strong> Includes registration, choice filling and locking, seat allotment in rounds, acceptance and payment of seat acceptance fee, document upload, and reporting options. This multi-round system maximizes admission opportunities.</li>
                    <li><strong>Registration & Choice Filling:</strong> Candidates log in at josaa.nic.in using JEE Main or Advanced credentials. They register and enter preferences of institutes and courses (unlimited choices allowed in order of priority). Choice locking is mandatory before deadlines to proceed.</li>
                    <li><strong>Mock Seat Allotment:</strong> Conducted before the actual rounds. Helps students understand possible seat allotments and revise preferences if needed.</li>
                    <li><strong>Seat Allotment Rounds:</strong> Results are declared round-wise. Candidates can accept seats, reject, or wait for subsequent rounds with better options.</li>
                    <li><strong>Seat Acceptance Fee & Online Reporting:</strong> Seat acceptance fee paid online (amount varies by category, approximately ₹45,000 for General). Candidates must confirm allotment by uploading documents and completing online reporting within deadlines.</li>
                    <li><strong>Physical Reporting & Document Verification:</strong> After online acceptance, candidates physically visit designated reporting centres to verify original documents. Failure to report leads to seat forfeiture.</li>
                    <li><strong>Seat Withdrawal:</strong> Candidates can withdraw seats in specific windows after allotment to participate in further rounds or exit counselling.</li>
                  </ul>
                </div>
              </div>

              {/* Detailed Stepwise Process */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📋 Detailed Stepwise Process</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">1. Registration</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>Candidates register at josaa.nic.in during June (dates usually June 3–12).</li>
                      <li>Login using JEE application number and password.</li>
                      <li>Verify auto-populated personal and academic details.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">2. Choice Filling & Locking</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>Fill choices of institutes and courses; can select anywhere from 1 to all available options for maximizing chances.</li>
                      <li>Locking choice list is necessary by deadline; unlocked choices discarded.</li>
                      <li>Ability to modify choices before locking, after mock rounds.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">3. Mock Seat Allotments</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>Displayed before first round.</li>
                      <li>Candidates can gauge admission chances and adjust preferences.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">4. Seat Allotment & Acceptance</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>Six rounds with each round progressively allotting seats based on rank, preferences, category reservation, and seat availability.</li>
                      <li>Seat acceptance fee and choices must be finalized within given timeline.</li>
                      <li>Candidates who accept must upload documents and complete online formalities promptly.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">5. Physical Reporting & Document Verification</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>Candidates report physically to colleges/centres announced by JoSAA after seat acceptance.</li>
                      <li>Carry all original and photocopy documents as prescribed.</li>
                      <li>Non-compliance leads to cancellation of admission.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">6. Seat Withdrawal & Further Rounds</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>Allows candidates to exit or upgrade seats.</li>
                      <li>Multiple withdrawal opportunities after rounds 2, 3, 4, and more.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CSAB */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🏢 Central Seat Allocation Board (CSAB)</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Purpose:</strong> Conducts counselling for leftover seats after JoSAA rounds, including special rounds for NIT+ system.</li>
                    <li><strong>Who can participate:</strong> Candidates not allotted seats in JoSAA or seeking admission in special category seats.</li>
                    <li><strong>Rounds:</strong> Additional rounds held for filling vacant seats in NITs, IIITs, GFTIs, self-financing technical institutes, and North East states' institutions.</li>
                    <li><strong>Separate Counselling:</strong> CSAB also organizes counselling for Self Financing Technical Institutes (SFTIs), along with special sessions for Union Territories and Dai regions.</li>
                  </ul>
                </div>
              </div>

              {/* Participating Institutes */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🏫 Participating Institutes</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>All <strong>31 NITs</strong>, <strong>25 IIITs</strong>, and <strong>39 GFTIs</strong> participate in JoSAA counselling.</li>
                    <li><strong>IITs:</strong> All 23 IITs offer seats via JoSAA for JEE Advanced ranks.</li>
                    <li>Many <strong>state universities</strong>, <strong>private universities and institutions</strong> accept JEE Main ranks either through JoSAA or separate admission processes.</li>
                    <li>Participating institutes detail the provisional seat matrix annually – including branches and seat numbers per category.</li>
                  </ul>
                </div>
              </div>

              {/* Documents Required */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📄 Documents Required During Counselling and Reporting</h4>
                <div className="bg-white p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">JEE Main/Advanced Admit Card</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Rank Card/Scorecard</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Class 10 Marksheet and Certificate (DOB proof)</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Class 12 Marksheet and Passing Certificate</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Seat Allotment Letter</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Photo Identification Proof (Aadhaar, Passport, etc.)</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">PwD/EWS/Category Certificate (if applicable)</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Passport Size Photographs (same as application)</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Undertaking Forms (as provided by JoSAA)</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700 font-medium">Others as specified for particular institutions (Medical Certificate, etc.)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Dates */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">📅 Important Dates for 2025 JoSAA Counselling (Indicative)</h4>
                <div className="bg-white p-4 rounded-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Activity</th>
                        <th className="px-4 py-2 text-left">Dates</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 font-medium">Registration & Choice Filling</td>
                        <td className="px-4 py-2 text-gray-700">June 3 to June 12, 2025</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Mock Seat Allotment</td>
                        <td className="px-4 py-2 text-gray-700">Mid-June</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">1st Round Seat Allotment</td>
                        <td className="px-4 py-2 text-gray-700">June 14, 2025</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Subsequent Seat Allotment Rounds</td>
                        <td className="px-4 py-2 text-gray-700">June 20, 26, July 2, 8, 16, 2025</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Seat Acceptance & Online Reporting</td>
                        <td className="px-4 py-2 text-gray-700">After each round</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Physical Reporting at Colleges</td>
                        <td className="px-4 py-2 text-gray-700">As per allotted rounds</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Final Admission Complete</td>
                        <td className="px-4 py-2 text-gray-700">July 23 to July 28, 2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Counselling Tips and Strategies */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">💡 Counselling Tips and Strategies</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>Fill maximum institute-course preferences to widen admission chances.</li>
                    <li>Lock choices carefully; review mock allotment advisory.</li>
                    <li>Respond promptly to seat allotments to avoid losing seat during rounds.</li>
                    <li>Withdraw seats only when upgrading to a better preference is assured.</li>
                    <li>Keep all documents ready and verified before reporting.</li>
                    <li>Regularly check official JoSAA portal and emails for updates and possible schedule changes.</li>
                    <li>Use JoSAA helpline and resources for queries.</li>
                  </ul>
                </div>
              </div>

              {/* Official Resources */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">🔗 Official Resources and Support</h4>
                <div className="bg-white p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Website:</strong> <a href="https://josaa.nic.in" className="text-gray-600 hover:text-gray-800 underline">josaa.nic.in</a></li>
                    <li><strong>Helpline Contacts and Email Support</strong> available on official site</li>
                    <li><strong>Downloadable Information Brochures, User Manuals, and FAQs</strong> provided every year</li>
                    <li><strong>Mobile SMS & "Sandes" App notifications</strong> support counselling messaging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-gray-600">StudentHub</Link>
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-gray-500">Engineering and Architecture Exams</span>
                <span className="text-gray-400">›</span>
                <span className="text-gray-500">JEE Main Exam</span>
                <span className="text-gray-400">›</span>
                <span className="text-gray-800 font-medium">JEE Mains 2025</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Download PDF
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-6 flex-shrink-0">
              <div className="text-center">
                {/* Circular NTA Logo */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center relative">
                    {/* Orange top half */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-500"></div>
                    {/* Green bottom half */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-500"></div>
                    {/* White checkmark */}
                    <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                {/* NTA Text */}
                <div className="text-xs font-bold text-gray-900 leading-tight">
                  <div>NATIONAL</div>
                  <div>TESTING</div>
                  <div>AGENCY</div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              JEE Mains 2025 - Counselling (Started), Result, Marks vs Percentile, Cutoff, Toppers, Final Answer Key
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">#JEE Main</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-gray-800 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content and Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Tab Content */}
            <div className="mb-8">
              {renderTabContent()}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* University Advertisements */}
            <div className="sticky top-6">
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">B.Tech/B.Arch Admissions OPEN</h3>
              
              {/* Amity University */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">AMITY</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">Amity University Noida B.Tech...</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Among Top 30 National Universities for Engineering (NIRF 2024) | 30+ Specializations | AI Powered Learning...
                    </p>
                  </div>
                  <button className="bg-gray-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-orange-600 transition flex items-center space-x-1">
                    <span>✓</span>
                    <span>Apply</span>
                  </button>
                </div>
              </div>

              {/* Graphic Era University */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">Graphic Era (Deemed to be...)</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      NAAC A+ Grade | Among top 100 universities of India (NIRF 2024) | 40 crore+ scholarships distributed
                    </p>
                  </div>
                  <button className="bg-gray-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-orange-600 transition flex items-center space-x-1">
                    <span>✓</span>
                    <span>Apply</span>
                  </button>
                </div>
              </div>

              {/* Pimpri Chinchwad University */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">PCU</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">Pimpri Chinchwad University B.Tech...</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      1000+ Recruiters | 450+ Patents | 50000+ Alumni network
                    </p>
                  </div>
                  <button className="bg-gray-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-orange-600 transition flex items-center space-x-1">
                    <span>✓</span>
                    <span>Apply</span>
                  </button>
                </div>
              </div>

              {/* Atlas SkillTech University */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">ATLAS</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">Atlas SkillTech University | B.Tec...</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Hands on Mentoring and Code Coaching | Cutting Edge Curriculum with Real World Application
                    </p>
                  </div>
                  <button className="bg-gray-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-orange-600 transition flex items-center space-x-1">
                    <span>✓</span>
                    <span>Apply</span>
                  </button>
                </div>
              </div>

              {/* NIELIT University */}
              <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">NIELIT</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">NIELIT University (Govt. o...</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Campuses in Ropar, Agartala, Aizawl, Ajmer, Aurangabad, Calicut, Imphal, Itanagar, Kohima,...
                    </p>
                  </div>
                  <button className="bg-gray-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-orange-600 transition flex items-center space-x-1">
                    <span>✓</span>
                    <span>Apply</span>
                  </button>
                </div>
              </div>
            </div>

            {/* JEE Main Latest Updates */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-lg">📢</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">JEE Main Latest Updates</h3>
              </div>
              
              <div className="mb-3">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Latest</span>
              </div>

              <div className="space-y-4">
                {/* Update 1 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">📚</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
                        JEE Main Syllabus 2026 PDF for Physics, Chemistry, Maths
                      </h4>
                      <p className="text-gray-500 text-xs">Oct 08, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Update 2 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">📊</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
                        JEE Main Marks vs Percentile vs Rank 2025 - How to Calculate Percentile
                      </h4>
                      <p className="text-gray-500 text-xs">Oct 08, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Update 3 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">👤</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
                        How Many Attempts for JEE Mains 2026? - Eligibility & NTA Rules Explained
                      </h4>
                      <p className="text-gray-500 text-xs">Oct 08, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Update 4 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">📄</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
                        JEE Main 2026 Syllabus PDF - Download Paper 1, 2 Syllabus
                      </h4>
                      <p className="text-gray-500 text-xs">Oct 08, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Update 5 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">📅</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
                        JEE Main 2026 Registration Date - Application Form Release Date
                      </h4>
                      <p className="text-gray-500 text-xs">Oct 07, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Update 6 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">🎯</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
                        JEE Main 2026 Exam Pattern - Paper 1, 2A, 2B Pattern & Marking Scheme
                      </h4>
                      <p className="text-gray-500 text-xs">Oct 06, 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4">
                <button className="w-full text-center text-gray-600 hover:text-gray-800 text-sm font-medium">
                  View All Updates →
                </button>
              </div>
            </div>

            {/* Official Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Official Contact</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800">Website</h4>
                  <a href={data["Official Contact"]["Website"]} className="text-gray-600 hover:underline text-sm">
                    {data["Official Contact"]["Website"]}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Helpline</h4>
                  <p className="text-gray-700 text-sm">{data["Official Contact"]["Helpline"]}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href={`mailto:${data["Official Contact"]["Email"]}`} className="text-gray-600 hover:underline text-sm">
                    {data["Official Contact"]["Email"]}
                  </a>
                </div>
              </div>
            </div>

            </div>
            
            {/* Help Button */}
            <div className="fixed bottom-6 right-6 z-50">
              <button className="w-12 h-12 bg-gray-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center">
                <span className="text-lg">?</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">StudentHub</div>
              <div className="text-xl font-semibold">JEE MAINS 2026: Free Mock Test</div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                Applications Open
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                Mock Test Series
              </button>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold">
                Attempt Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
