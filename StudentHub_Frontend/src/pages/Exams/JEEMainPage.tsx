import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jeeMainData from '../../../../data/exams/jee-main.json';
import nittLogo from '../../assets/Colleges/NITT_logo.png';
import iitDelhiLogo from '../../assets/Colleges/indian-institute-of-technology-delhi.png';
import vitLogo from '../../assets/Colleges/vit.png';

interface JEEMainData {
  "Overview": {
    "ExamName": string;
    "ConductingAuthority": string;
    "LevelAndType": string;
    "Frequency": string;
    "Languages": string[];
    "Mode": string;
  "Duration": string;
    "Papers": string[];
    "ParticipatingInstitutes": string;
    "Purpose": string;
  };
  "ImportantDates": {
    "Session1": {
      "RegistrationStart": string;
      "RegistrationEnd": string;
      "AdmitCard": string;
      "ExamDates": string;
      "ProvisionalAnswerKey": string;
      "ResultDeclaration": string;
    };
    "Session2": {
      "RegistrationStart": string;
      "RegistrationEnd": string;
      "AdmitCard": string;
      "ExamDates": string;
      "ProvisionalAnswerKey": string;
      "ResultDeclaration": string;
    };
  };
  "ExamPattern": {
    "Paper1_BE_BTech": {
      "Subjects": string[];
      "TotalQuestions": number;
      "Structure": string;
      "TotalMarks": number;
      "Type": string;
    };
    "Paper2A_BArch": {
      "Subjects": string[];
      "TotalQuestions": number;
      "TotalMarks": number;
    };
    "Paper2B_BPlan": {
      "Subjects": string[];
      "TotalQuestions": number;
      "TotalMarks": number;
    };
  };
  "MarkingScheme": {
    "MCQ": string;
    "Numerical": string;
    "NewChange2026": string;
  };
  "Syllabus": {
    "Base": string;
    "RemovedTopics2026": string[];
    "Paper1_BE_BTech": {
      "Mathematics": string;
      "Physics": string;
      "Chemistry": string;
    };
    "Paper2A_BArch": string;
    "Paper2B_BPlan": string;
  };
  "EligibilityCriteria": {
    "AgeLimit": string;
    "AcademicQualification": string;
    "Subjects": string[];
    "AttemptsAllowed": string;
    "NITs_IIITs_GFTIs": string;
    "AdditionalNotes": string;
  };
  "ApplicationProcess": string[];
  "ApplicationFee": {
    "Gen_Male": { "1Paper": string; "2Papers": string; };
    "Gen_Female": { "1Paper": string; "2Papers": string; };
    "OBC_EWS_Male": { "1Paper": string; "2Papers": string; };
    "OBC_EWS_Female": { "1Paper": string; "2Papers": string; };
    "SC_ST_PwD_Transgender": { "1Paper": string; "2Papers": string; };
  };
  "CutoffTrends": {
    "General": string;
    "EWS": string;
    "OBC-NCL": string;
    "SC": string;
    "ST": string;
    "PwD": string;
  };
  "Counselling": {
    "Description": string;
    "StartDate": string;
      "Mode": string;
    "Rounds": string;
  };
  "Reservation": {
    "OBC-NCL": string;
    "EWS": string;
    "SC": string;
    "ST": string;
    "PwD": string;
  };
  "PreparationTips": string[];
  "Highlights": string[];
  "OfficialContact": {
    "Website": string;
    "Helpline": string;
    "Email": string;
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
}

type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling';

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
    { id: 'counselling', label: 'Counselling' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* --- BEGIN: JEE Main 2026 Data-Rich Guide --- */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900">JEE Main 2026</h2>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">What Is JEE Main?</h3>
                  <p className="mb-2">JEE Main (Joint Entrance Examination – Main) is one of India's biggest engineering entrance exams, organized by the <em>National Testing Agency (NTA)</em>. It is conducted twice a year — in January and April — and serves two key purposes:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Admission to top engineering institutes like <strong>NITs, IIITs, and GFTIs</strong>.</li>
                    <li>Qualification for <strong>JEE Advanced</strong> for admission to the IITs.</li>
                  </ul>
                  <p className="mt-2">Nearly <strong>13 lakh students</strong> appear each year. The test is <strong>computer-based (CBT)</strong> and available in <strong>13 languages</strong>.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Overview</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Paper</th>
                          <th className="p-2 text-left">Course</th>
                          <th className="p-2 text-left">Subjects</th>
                          <th className="p-2 text-left">Mode</th>
                          <th className="p-2 text-left">Total Marks</th>
                          <th className="p-2 text-left">Key Info</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 italic">Paper 1</td>
                          <td className="p-2">B.E./B.Tech</td>
                          <td className="p-2">Physics, Chemistry, Maths</td>
                          <td className="p-2">CBT</td>
                          <td className="p-2">300</td>
                          <td className="p-2">90 questions (attempt 75)</td>
                        </tr>
                        <tr>
                          <td className="p-2 italic">Paper 2A</td>
                          <td className="p-2">B.Arch</td>
                          <td className="p-2">Maths, Aptitude, Drawing</td>
                          <td className="p-2">Hybrid</td>
                          <td className="p-2">400</td>
                          <td className="p-2">Drawing part on paper</td>
                        </tr>
                        <tr>
                          <td className="p-2 italic">Paper 2B</td>
                          <td className="p-2">B.Planning</td>
                          <td className="p-2">Maths, Aptitude, Planning</td>
                          <td className="p-2">CBT</td>
                          <td className="p-2">400</td>
                          <td className="p-2">105 questions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Note: For numerical-type questions, all questions are compulsory (no choices).</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Subject-Wise Weightage (Based on Past 10 Years)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold">Mathematics</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Sequences & Series – 6.6%</li>
                        <li>Straight Lines – 6.6%</li>
                        <li>3D Geometry – 6.6%</li>
                        <li>Probability, Complex Numbers, P&amp;C – ~3.3% each</li>
                        <li>Algebra, Calculus &amp; Coordinate Geometry – ~30% combined</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Physics</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Modern Physics – 10–12%</li>
                        <li>Optics – 8–9%</li>
                        <li>Current Electricity – 6.5%</li>
                        <li>Mechanics – 13–15%</li>
                        <li>Electrostatics &amp; Magnetism – ~9%</li>
                        <li>Thermodynamics &amp; Kinetic Theory – ~8%</li>
                        <li>Oscillations &amp; Waves – 3–4%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chemistry</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>s/p/d/f Block Elements – 5–6%</li>
                        <li>Coordination Compounds – 4–5%</li>
                        <li>Thermodynamics – 4–6%</li>
                        <li>Atomic Structure – 3–4%</li>
                        <li>Chemical Kinetics &amp; Solutions – ~3.5%</li>
                        <li>Organic (Polymers, Acids, etc.) – ~10% total</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Institute-Wise Cutoff Trends (CSE – General)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="overflow-x-auto">
                      <h4 className="font-semibold mb-2">IITs</h4>
                      <table className="min-w-full text-sm border">
                        <thead><tr className="bg-gray-100"><th className="p-2 text-left">IIT</th><th className="p-2 text-left">Closing Rank</th></tr></thead>
                        <tbody>
                          <tr><td className="p-2">Bombay</td><td className="p-2">67</td></tr>
                          <tr><td className="p-2">Delhi</td><td className="p-2">118</td></tr>
                          <tr><td className="p-2">Madras</td><td className="p-2">163</td></tr>
                          <tr><td className="p-2">Kanpur</td><td className="p-2">238</td></tr>
                          <tr><td className="p-2">Kharagpur</td><td className="p-2">270</td></tr>
                          <tr><td className="p-2">Roorkee</td><td className="p-2">400</td></tr>
                          <tr><td className="p-2">Guwahati</td><td className="p-2">600</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="overflow-x-auto">
                      <h4 className="font-semibold mb-2">NITs</h4>
                      <table className="min-w-full text-sm border">
                        <thead><tr className="bg-gray-100"><th className="p-2 text-left">NIT</th><th className="p-2 text-left">Rank Range</th></tr></thead>
                        <tbody>
                          <tr><td className="p-2">Trichy</td><td className="p-2">1200–4000</td></tr>
                          <tr><td className="p-2">Warangal</td><td className="p-2">1800–5300</td></tr>
                          <tr><td className="p-2">Surathkal</td><td className="p-2">2200–6700</td></tr>
                          <tr><td className="p-2">Delhi</td><td className="p-2">&lt;3000–4500</td></tr>
                          <tr><td className="p-2">Allahabad</td><td className="p-2">3300–5000</td></tr>
                          <tr><td className="p-2">Puducherry</td><td className="p-2">6000–8000</td></tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-gray-600 mt-1">Lower-tier NITs (Mizoram, Arunachal, Sikkim) can close up to ~2.7 lakh, especially for non-CSE branches.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marks vs Percentile vs Rank (Approx.)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                      <thead>
                        <tr className="bg-gray-100"><th className="p-2 text-left">Marks</th><th className="p-2 text-left">Percentile</th><th className="p-2 text-left">Rank Range</th><th className="p-2 text-left">Admission Level</th></tr>
                      </thead>
                      <tbody>
                        <tr><td className="p-2">≥280</td><td className="p-2">99.99–100</td><td className="p-2">1–200</td><td className="p-2">Top IITs / IIITs</td></tr>
                        <tr><td className="p-2">250–279</td><td className="p-2">97–99.99</td><td className="p-2">200–500</td><td className="p-2">Tier-1 IIIT/NIT</td></tr>
                        <tr><td className="p-2">220–249</td><td className="p-2">90–97</td><td className="p-2">500–1500</td><td className="p-2">NIT/IIIT</td></tr>
                        <tr><td className="p-2">200–219</td><td className="p-2">90–96</td><td className="p-2">1500–3000</td><td className="p-2">Strong NIT</td></tr>
                        <tr><td className="p-2">160–199</td><td className="p-2">82–89</td><td className="p-2">3k–10k</td><td className="p-2">Mid NIT / GFTI</td></tr>
                        <tr><td className="p-2">130–159</td><td className="p-2">70–81</td><td className="p-2">10k–21k</td><td className="p-2">Reserved seats</td></tr>
                        <tr><td className="p-2">80–129</td><td className="p-2">43k–75k</td><td className="p-2">—</td><td className="p-2">Lower NITs / Private</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Caution: A 10–20 mark difference can shift rank by thousands.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Category-Wise Cutoff (Expected 2026)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                      <thead><tr className="bg-gray-100"><th className="p-2 text-left">Category</th><th className="p-2 text-left">Percentile</th><th className="p-2 text-left">Marks</th></tr></thead>
                      <tbody>
                        <tr><td className="p-2">General</td><td className="p-2">93.5%</td><td className="p-2">105–115</td></tr>
                        <tr><td className="p-2">EWS</td><td className="p-2">81%</td><td className="p-2">75–85</td></tr>
                        <tr><td className="p-2">OBC-NCL</td><td className="p-2">80.2%</td><td className="p-2">75–85</td></tr>
                        <tr><td className="p-2">SC</td><td className="p-2">62.2%</td><td className="p-2">65–75</td></tr>
                        <tr><td className="p-2">ST</td><td className="p-2">49%</td><td className="p-2">50–60</td></tr>
                        <tr><td className="p-2">PwD</td><td className="p-2">0.01%</td><td className="p-2">Minimal</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligibility Criteria</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><em>Age:</em> No upper age limit. Must have passed Class 12 or equivalent.</li>
                    <li><em>Subjects:</em> PCM (Physics, Chemistry, Mathematics) mandatory for B.E./B.Tech.</li>
                    <li><em>Marks:</em> Gen/OBC/EWS: 75% or top 20 percentile; SC/ST/PwD: 65% or top 20 percentile.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Process (Step-by-Step)</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Visit <a href="https://jeemain.nta.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">jeemain.nta.nic.in</a></li>
                    <li>Register using active email ID and mobile number</li>
                    <li>Fill personal, academic, and examination details</li>
                    <li>Upload photograph &amp; signature</li>
                    <li>Pay the fee online</li>
                    <li>Submit and download the confirmation page</li>
                  </ul>
                  <div className="mt-3">
                    <p className="font-medium">Documents Needed:</p>
                    <ul className="list-disc ml-6 text-sm">
                      <li>Passport-size photo &amp; signature (JPEG)</li>
                      <li>10th &amp; 12th marksheets</li>
                      <li>Category/PwD certificate (if applicable)</li>
                      <li>Valid photo ID (Aadhaar/Passport/PAN)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Fee (Per Paper)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                      <thead><tr className="bg-gray-100"><th className="p-2 text-left">Category</th><th className="p-2 text-left">Fee</th></tr></thead>
                      <tbody>
                        <tr><td className="p-2">General / OBC</td><td className="p-2">₹1000</td></tr>
                        <tr><td className="p-2">SC / ST / PwD</td><td className="p-2">₹500</td></tr>
                        <tr><td className="p-2">Foreign centres</td><td className="p-2">Higher fee</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Dates</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                      <thead><tr className="bg-gray-100"><th className="p-2 text-left">Event</th><th className="p-2 text-left">Session 1 (Jan 2026)</th><th className="p-2 text-left">Session 2 (Apr 2026)</th></tr></thead>
                      <tbody>
                        <tr><td className="p-2">Registration</td><td className="p-2">Oct 10–Nov 18, 2025</td><td className="p-2">Feb 2026</td></tr>
                        <tr><td className="p-2">Admit Card</td><td className="p-2">Jan 19–23</td><td className="p-2">Mar 30–Apr 3</td></tr>
                        <tr><td className="p-2">Exam Dates</td><td className="p-2">Jan 22–30</td><td className="p-2">Apr 2–9</td></tr>
                        <tr><td className="p-2">Result</td><td className="p-2">Feb 2026</td><td className="p-2">Apr 2026</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Counselling Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-1">JoSAA (Main Counselling)</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>For: IITs, NITs, IIITs, GFTIs</li>
                        <li>Rounds: 6</li>
                        <li>Fee: ₹40,000 (Gen/OBC), ₹20,000 (SC/ST/PwD)</li>
                        <li>Website: <a className="text-blue-600 hover:underline" href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer">josaa.nic.in</a></li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-1">CSAB (Special Rounds)</h4>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>For: Vacant seats in NITs/IIITs/GFTIs</li>
                        <li>Fee: ₹30,000 (Gen/OBC), ₹15,000 (SC/ST/PwD)</li>
                        <li>Website: <a className="text-blue-600 hover:underline" href="https://csab.nic.in" target="_blank" rel="noopener noreferrer">csab.nic.in</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Preparation Strategy</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">Follow a Smart, Data-Based Plan</p>
                      <ul className="list-disc ml-6 text-sm">
                        <li>Analyze last 10 years' PYQs to identify high-frequency topics.</li>
                        <li>Allocate ~70% time to chapters covering ~80% of questions.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Practice &amp; Revise Regularly</p>
                      <ul className="list-disc ml-6 text-sm">
                        <li>Solve 50+ PYQs weekly; take one full mock every 10 days.</li>
                        <li>Maintain a "mistake notebook" to track weak areas.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Useful Resources</p>
                      <ul className="list-disc ml-6 text-sm">
                        <li>NTA Mock Test Portal</li>
                        <li>Allen, Vedantu, PW, Mathongo (chapter-wise practice)</li>
                        <li>CollegeDunia, Shiksha, CareerOrbits (rank/seat tools)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Health &amp; Balance</p>
                      <ul className="list-disc ml-6 text-sm">
                        <li>Sleep at least 7 hours daily; add light exercise.</li>
                        <li>Use short breaks to avoid fatigue and maintain focus.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Final Takeaway</h3>
                  <p>JEE Main 2026 is expected to be highly competitive. Prepare smartly using trends and analysis, focus on accuracy and speed, and treat both sessions strategically — use the first to learn and the second to improve. Keep monitoring official NTA updates and syllabus notices.</p>
                </div>
              </div>
            </div>
            {/* --- END: JEE Main 2026 Data-Rich Guide --- */}

            {/* Detailed Chapter-wise Weightage Analysis for 2026 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Chapter-wise Weightage Analysis for 2026</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Mathematics Weightage */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Mathematics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Sequences & Series</span>
                      <span className="font-semibold">6.6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Straight Lines</span>
                      <span className="font-semibold">6.6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3-D Geometry</span>
                      <span className="font-semibold">6.6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Probability</span>
                      <span className="font-semibold">3.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Complex Numbers</span>
                      <span className="font-semibold">3.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Permutations & Combinations</span>
                      <span className="font-semibold">3.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Integration</span>
                      <span className="font-semibold">3.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trigonometric Equations</span>
                      <span className="font-semibold">3.3%</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
                    <strong>Note:</strong> Algebra, Calculus, and Coordinate Geometry collectively account for a significant portion, with Calculus often representing nearly one-third of the questions.
                  </div>
                </div>

                {/* Physics Weightage */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Physics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Modern Physics</span>
                      <span className="font-semibold">10%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Optics</span>
                      <span className="font-semibold">8-9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Current Electricity</span>
                      <span className="font-semibold">6.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mechanics (Overall)</span>
                      <span className="font-semibold">13-15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Electrostatics</span>
                      <span className="font-semibold">4.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Moving Charges & Magnetism</span>
                      <span className="font-semibold">4-5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Electromagnetic Induction</span>
                      <span className="font-semibold">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thermodynamics & Kinetic Theory</span>
                      <span className="font-semibold">4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Oscillations & Waves</span>
                      <span className="font-semibold">3-4%</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
                    <strong>Note:</strong> Waves and Sound, Heat Transfer, and properties of matter continue to receive moderate focus.
                  </div>
                </div>

                {/* Chemistry Weightage */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Chemistry</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>s/p/d/f Block Elements</span>
                      <span className="font-semibold">5-6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coordination Compounds</span>
                      <span className="font-semibold">4-5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thermodynamics</span>
                      <span className="font-semibold">4-6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Atomic Structure</span>
                      <span className="font-semibold">3-4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chemical Kinetics</span>
                      <span className="font-semibold">3.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Solutions</span>
                      <span className="font-semibold">3-4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Organic: Polymers</span>
                      <span className="font-semibold">3.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carboxylic Acids</span>
                      <span className="font-semibold">3.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hydrocarbons</span>
                      <span className="font-semibold">2-3%</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-gray-100 rounded text-xs">
                    <strong>Note:</strong> Organic Chemistry topics cumulatively around 10%. Inclusive of Environmental Chemistry and Chemistry in Everyday Life as minor but important sections.
                  </div>
                </div>
              </div>
            </div>

            {/* Institute-wise Opening & Closing Ranks */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Institute-wise Opening & Closing Ranks 2026</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* IITs Ranks */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">IITs (General Category, CSE Branch)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>IIT Bombay</span>
                      <span className="font-semibold">67</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IIT Delhi</span>
                      <span className="font-semibold">118</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IIT Kanpur</span>
                      <span className="font-semibold">238</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IIT Madras</span>
                      <span className="font-semibold">163</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IIT Kharagpur</span>
                      <span className="font-semibold">270</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IIT Roorkee</span>
                      <span className="font-semibold">400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IIT Guwahati</span>
                      <span className="font-semibold">600</span>
                    </div>
                  </div>
                </div>

                {/* NITs Ranks */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">NITs (General Category, CSE Branch)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>NIT Surathkal</span>
                      <span className="font-semibold">2265</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NIT Trichy</span>
                      <span className="font-semibold">~1200-2800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NIT Warangal</span>
                      <span className="font-semibold">~1800-3500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NIT Delhi</span>
                      <span className="font-semibold">&lt;3000-4500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NIT Allahabad</span>
                      <span className="font-semibold">~3000-5000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NIT Puducherry</span>
                      <span className="font-semibold">~6000-8000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IIIT Hyderabad (ECE)</span>
                      <span className="font-semibold">4350</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Year Question Paper Insights */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Previous Year Question Paper Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits of PYQs</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Builds confidence and improves time management</li>
                    <li>• Identifies frequently tested topics</li>
                    <li>• Reduces exam-day anxiety</li>
                    <li>• Sharpens focus on high-weightage chapters</li>
                    <li>• Candidates using PYQs score 10-12 percentile higher</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Resources</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• JEE Main papers from 2015-2025 available</li>
                    <li>• Subjectwise and shiftwise review with solutions</li>
                    <li>• Marking trends and question type variations</li>
                    <li>• Complete analysis of 2022-2025 results</li>
                    <li>• Mock tests with exact exam timing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Seat Matrix and Trends */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Seat Matrix and Trends 2026</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Total Seats</h3>
                  <p className="text-gray-600 font-bold text-2xl">58,000+</p>
                  <p className="text-gray-700 text-sm">NIT+IIIT+GFTI seats for 2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Real-time Ranks</h3>
                  <p className="text-gray-600 font-bold text-2xl">Live</p>
                  <p className="text-gray-700 text-sm">Opening/closing ranks on JoSAA</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Top Branches</h3>
                  <p className="text-gray-600 font-bold text-2xl">CSE/ECE</p>
                  <p className="text-gray-700 text-sm">Close at highest ranks</p>
                </div>
              </div>
            </div>

            {/* Preparation Strategies and Recommendations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Preparation Strategies and Recommendations</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">High-Weightage Focus Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Mathematics:</strong> Concentrate on Sequences & Series, Straight Lines, and 3-D Geometry</li>
                    <li>• <strong>Physics:</strong> Allocate more study time to Modern Physics, Optics, and Current Electricity</li>
                    <li>• <strong>Chemistry:</strong> Prioritize s/p/d/f Block Elements and Coordination Compounds for scoring opportunities</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Strategic Study Plan</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete PYQ practice for the last 5 to 10 years, simulating actual exam timings</li>
                    <li>• Employ targeted revision on chapters historically accounting for 15–20% of questions to maximize scoring probability</li>
                    <li>• Leverage advanced test series and mock exams from reputed coaching institutes for performance benchmarking</li>
                    <li>• For weak chapters, conduct deep-dive learning and problem solving to convert weaknesses into strengths</li>
                    <li>• Utilize systematic error logs during preparation to track and mitigate recurring mistakes</li>
                    <li>• Analyze results across both sessions if appearing twice to adapt and refine strategy dynamically</li>
                    <li>• Maintain balance between conceptual clarity and problem-solving speed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* JEE Main 2026 Key Statistics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Key Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Total Registrations</h3>
                  <p className="text-gray-600 font-bold text-2xl">12-13 Lakh</p>
                  <p className="text-gray-700 text-sm">Candidates register annually</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Participating Institutes</h3>
                  <p className="text-gray-600 font-bold text-2xl">100+</p>
                  <p className="text-gray-700 text-sm">NITs, IIITs, GFTIs</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Total Seats</h3>
                  <p className="text-gray-600 font-bold text-2xl">58,000+</p>
                  <p className="text-gray-700 text-sm">Available across India</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Data Points & Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">The exam's rigorous and uniform pattern ensures equitable evaluation and comprehensive knowledge testing across all branches</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Increased focus on numerical questions with mandatory answering discourages selective answering and empowers consistent preparation</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">The availability of the exam in multiple languages facilitates access to non-Hindi or English speaking students from different states</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Data-driven ranking and normalization across sessions minimize the impact of varying difficulty levels across exam shifts</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Integration of PYQ data, analytical insights, and adaptive strategies fosters an evidence-based preparation methodology</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">A sizable fraction of candidates appear for both sessions, leveraging the exam's biannual structure to improve performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources, Educational Platforms, and Reference Material */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Resources, Educational Platforms, and Reference Material</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Official Resources</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Official NTA mock tests and previous year question papers</li>
                    <li>• Chapter-wise test series and analysis from Allen, Vedantu, PW Live, CareerOrbits</li>
                    <li>• Video-based tutorials and strategy sessions by expert educators such as Mathongo, TMU</li>
                    <li>• Online coaching platforms and discussion forums for ongoing updates</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Preparation Support</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Access to error logs, timeliness verification, and subject proficiency reports</li>
                    <li>• New strategies and community support platforms</li>
                    <li>• Publication and discussion forums for ongoing updates</li>
                    <li>• Evidence-based preparation methodology with analytical insights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Summary and Emphases */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Final Summary and Emphases</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  JEE Main 2026 remains the most crucial and competitive gateway for engineering aspirants aspiring to join India's top technical institutes. The exam's evolving patterns, increased weightage on numericals, and uniform syllabus mandate a thorough and comprehensive preparation strategy. Candidates are urged to utilize past years' data, practice rigorously, hone time and accuracy skills, and keep abreast of exam updates issued by NTA to maximize their success chances.
                </p>
              </div>
            </div>

            {/* Detailed Important Dates Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Dates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 1 Registration</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Registration Opens:</span>
                      <span className="font-semibold text-gray-800">Oct 10-16, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Registration Closes:</span>
                      <span className="font-semibold text-gray-800">Nov 18-22, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Correction Window:</span>
                      <span className="font-semibold text-gray-800">Nov 25-27, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Demo Registration:</span>
                      <span className="font-semibold text-gray-800">Early Oct 2025</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 2 Registration</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Registration Opens:</span>
                      <span className="font-semibold text-gray-800">Feb 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Correction Window:</span>
                      <span className="font-semibold text-gray-800">Feb 25-27, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Portal:</span>
                      <span className="font-semibold text-gray-800">jeemain.nta.nic.in</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Fees</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>General/OBC:</span>
                    <span className="font-semibold">₹1000 per paper</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SC/ST/PwD:</span>
                    <span className="font-semibold">₹500 per paper</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Foreign Centers:</span>
                    <span className="font-semibold">Higher fees</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Exam Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Exam Schedule</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 1 (January 2026)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 1 Dates:</span>
                      <span className="font-semibold text-gray-800">Jan 22, 23, 24, 28, 29</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 2 Date:</span>
                      <span className="font-semibold text-gray-800">Jan 30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">City Intimation:</span>
                      <span className="font-semibold text-gray-800">Jan 10-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Admit Card:</span>
                      <span className="font-semibold text-gray-800">Jan 19 & 23</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 2 (April 2026)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 1 Dates:</span>
                      <span className="font-semibold text-gray-800">Apr 2, 3, 4, 7, 8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 2 Date:</span>
                      <span className="font-semibold text-gray-800">Apr 9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">City Intimation:</span>
                      <span className="font-semibold text-gray-800">Mar 20-22</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Admit Card:</span>
                      <span className="font-semibold text-gray-800">Mar 30 & Apr 3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Eligibility Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Eligibility Criteria</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Limit</h3>
                  <p className="text-gray-700">No upper age limit for JEE Main 2026. Candidates born on or after October 1, 2000, are eligible. However, candidates born before October 1, 2000, can also apply.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Qualification</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Passed or appearing in Class 12th or equivalent examination</li>
                    <li>Must have studied Physics, Chemistry, and Mathematics as compulsory subjects</li>
                    <li>For B.Arch: Mathematics, Physics, and Chemistry OR Mathematics, Physics, and Chemistry OR Mathematics, Physics, and Chemistry</li>
                    <li>For B.Planning: Mathematics as compulsory subject</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Minimum Marks Requirement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">General/OBC/EWS</h4>
                      <p className="text-gray-700">75% aggregate marks in Class 12th OR be in top 20 percentile</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">SC/ST/PwD</h4>
                      <p className="text-gray-700">65% aggregate marks in Class 12th OR be in top 20 percentile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Application Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Process</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Process</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Visit the official website jeemain.nta.nic.in</li>
                    <li>Click on "JEE Main 2026 Application Form"</li>
                    <li>Register with valid email ID and mobile number</li>
                    <li>Fill in personal details, academic information, and exam preferences</li>
                    <li>Upload scanned photograph and signature</li>
                    <li>Pay the application fee online</li>
                    <li>Submit the application form and take a printout</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Required Documents</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Recent passport-size photograph (JPEG format, 10-200 KB)</li>
                    <li>Scanned signature (JPEG format, 4-30 KB)</li>
                    <li>Class 10th and 12th mark sheets</li>
                    <li>Category certificate (if applicable)</li>
                    <li>PwD certificate (if applicable)</li>
                    <li>Valid photo ID proof</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Exam Pattern Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Exam Pattern</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Paper 1 (B.E./B.Tech)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Subjects</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Physics: 25 questions</li>
                        <li>Chemistry: 25 questions</li>
                        <li>Mathematics: 25 questions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Details</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Total Questions: 75 (Attempt 75)</li>
                        <li>Total Marks: 300</li>
                        <li>Duration: 3 hours</li>
                        <li>Mode: Computer-Based Test (CBT)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Paper 2A (B.Arch)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Subjects</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Mathematics: 25 questions</li>
                        <li>Aptitude Test: 50 questions</li>
                        <li>Drawing Test: 2 questions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Details</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Total Questions: 77 (Attempt 77)</li>
                        <li>Total Marks: 400</li>
                        <li>Duration: 3 hours</li>
                        <li>Mode: Hybrid (CBT + Pen & Paper)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marking Scheme</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Correct Answer: +4 marks</li>
                    <li>Incorrect Answer: -1 mark</li>
                    <li>Unanswered: 0 marks</li>
                    <li>Numerical Questions: +4 marks for correct answer, 0 for incorrect</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Syllabus Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Syllabus</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Physics Syllabus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Mechanics</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>Laws of Motion</li>
                        <li>Work, Energy and Power</li>
                        <li>Rotational Motion</li>
                        <li>Gravitation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Modern Physics</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>Dual Nature of Matter</li>
                        <li>Atoms and Nuclei</li>
                        <li>Electronic Devices</li>
                        <li>Communication Systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Chemistry Syllabus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Physical Chemistry</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>Atomic Structure</li>
                        <li>Chemical Bonding</li>
                        <li>Thermodynamics</li>
                        <li>Chemical Kinetics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Inorganic Chemistry</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>Periodic Table</li>
                        <li>s-Block Elements</li>
                        <li>p-Block Elements</li>
                        <li>d and f Block Elements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Organic Chemistry</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>Basic Principles</li>
                        <li>Hydrocarbons</li>
                        <li>Functional Groups</li>
                        <li>Biomolecules</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Mathematics Syllabus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Algebra & Trigonometry</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>Complex Numbers</li>
                        <li>Quadratic Equations</li>
                        <li>Sequences and Series</li>
                        <li>Trigonometric Functions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Calculus & Geometry</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>Limits and Derivatives</li>
                        <li>Integrals</li>
                        <li>Coordinate Geometry</li>
                        <li>3D Geometry</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Cutoff Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cutoff Analysis</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">JEE Main 2025 Cutoff Percentiles</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Category</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Cutoff Percentile</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Approximate Marks</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">General</td>
                          <td className="p-3">93.5</td>
                          <td className="p-3">105-115</td>
                        </tr>
                        <tr>
                          <td className="p-3">EWS</td>
                          <td className="p-3">81.0</td>
                          <td className="p-3">75-85</td>
                        </tr>
                        <tr>
                          <td className="p-3">OBC-NCL</td>
                          <td className="p-3">80.2</td>
                          <td className="p-3">75-85</td>
                        </tr>
                        <tr>
                          <td className="p-3">SC</td>
                          <td className="p-3">62.2</td>
                          <td className="p-3">65-75</td>
                        </tr>
                        <tr>
                          <td className="p-3">ST</td>
                          <td className="p-3">49.0</td>
                          <td className="p-3">50-60</td>
                        </tr>
                        <tr>
                          <td className="p-3">PwD</td>
                          <td className="p-3">0.01</td>
                          <td className="p-3">Minimal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Expected Cutoff Trends for 2026</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>General category cutoff expected to remain around 93-94 percentile</li>
                    <li>EWS and OBC-NCL cutoffs likely to be 80-82 percentile</li>
                    <li>SC cutoff expected around 60-65 percentile</li>
                    <li>ST cutoff expected around 45-50 percentile</li>
                    <li>Cutoffs may vary slightly based on difficulty level and normalization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Counselling Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Counselling Process</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">JoSAA Counselling</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Eligibility:</strong> Top 2.5 lakh JEE Main rankers are eligible for JoSAA counselling</p>
                    <p className="text-gray-700"><strong>Participating Institutes:</strong> IITs, NITs, IIITs, and GFTIs</p>
                    <p className="text-gray-700"><strong>Rounds:</strong> 6 rounds of seat allocation</p>
                    <p className="text-gray-700"><strong>Portal:</strong> josaa.nic.in</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">CSAB Counselling</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Eligibility:</strong> Candidates not allotted seats in JoSAA</p>
                    <p className="text-gray-700"><strong>Participating Institutes:</strong> NITs, IIITs, and GFTIs</p>
                    <p className="text-gray-700"><strong>Rounds:</strong> 2 rounds of seat allocation</p>
                    <p className="text-gray-700"><strong>Portal:</strong> csab.nic.in</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Counselling Fee</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">JoSAA Fee</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>General/OBC: ₹40,000</li>
                        <li>SC/ST/PwD: ₹20,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">CSAB Fee</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        <li>General/OBC: ₹30,000</li>
                        <li>SC/ST/PwD: ₹15,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            {/* Registration Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Registration Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 1 Registration</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Registration Opens:</span>
                      <span className="font-semibold text-gray-800">Oct 10-16, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Registration Closes:</span>
                      <span className="font-semibold text-gray-800">Nov 18-22, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Correction Window:</span>
                      <span className="font-semibold text-gray-800">Nov 25-27, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Demo Registration:</span>
                      <span className="font-semibold text-gray-800">Early Oct 2025</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 2 Registration</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Registration Opens:</span>
                      <span className="font-semibold text-gray-800">Feb 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Correction Window:</span>
                      <span className="font-semibold text-gray-800">Feb 25-27, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Portal:</span>
                      <span className="font-semibold text-gray-800">jeemain.nta.nic.in</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Fees</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>General/OBC:</span>
                    <span className="font-semibold">₹1000 per paper</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SC/ST/PwD:</span>
                    <span className="font-semibold">₹500 per paper</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Foreign Centers:</span>
                    <span className="font-semibold">Higher fees</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exam Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Exam Schedule</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 1 (January 2026)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 1 Dates:</span>
                      <span className="font-semibold text-gray-800">Jan 22, 23, 24, 28, 29</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 2 Date:</span>
                      <span className="font-semibold text-gray-800">Jan 30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">City Intimation:</span>
                      <span className="font-semibold text-gray-800">Jan 10-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Admit Card:</span>
                      <span className="font-semibold text-gray-800">Jan 19 & 23</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 2 (April 2026)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 1 Dates:</span>
                      <span className="font-semibold text-gray-800">Apr 2, 3, 4, 7, 8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Paper 2 Date:</span>
                      <span className="font-semibold text-gray-800">Apr 9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">City Intimation:</span>
                      <span className="font-semibold text-gray-800">Mar 19-22</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Admit Card:</span>
                      <span className="font-semibold text-gray-800">Mar 29 & Apr 3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Timing & Format</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">3 hours (3.5 hours for B.Arch + B.Planning)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shifts:</span>
                    <span className="font-semibold">Morning (9 AM-12 PM), Afternoon (3 PM-6 PM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-semibold">Computer-based (except Drawing offline)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <span className="font-semibold">13 languages available</span>
                  </div>
                </div>
              </div>
            </div>
                
            {/* Results & Answer Keys */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Results & Answer Keys Timeline</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 1 Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Provisional Answer Key (P1):</span>
                      <span className="font-semibold text-gray-800">Feb 4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Provisional Answer Key (P2):</span>
                      <span className="font-semibold text-gray-800">Feb 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Final Answer Key (P1):</span>
                      <span className="font-semibold text-gray-800">Feb 10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Final Answer Key (P2):</span>
                      <span className="font-semibold text-gray-800">Feb 22</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Results (P1):</span>
                      <span className="font-semibold text-gray-800">Feb 11</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Results (P2):</span>
                      <span className="font-semibold text-gray-800">Feb 23</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 2 Results</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Provisional Answer Key (P1):</span>
                      <span className="font-semibold text-gray-800">Apr 11</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Provisional Answer Key (P2):</span>
                      <span className="font-semibold text-gray-800">Apr 14</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Final Answer Key (P1):</span>
                      <span className="font-semibold text-gray-800">Apr 18</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Final Answer Key (P2):</span>
                      <span className="font-semibold text-gray-800">Apr 22</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Results (P1):</span>
                      <span className="font-semibold text-gray-800">Apr 18</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Results (P2):</span>
                      <span className="font-semibold text-gray-800">Apr 23</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* JoSAA Counselling */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JoSAA Counselling & Seat Allotment 2026</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Registration:</span>
                      <span className="font-semibold text-gray-800">June 5-15, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Choice Filling:</span>
                      <span className="font-semibold text-gray-800">June 5-15, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Seat Allotment:</span>
                      <span className="font-semibold text-gray-800">June 17 - July 20</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Reporting:</span>
                      <span className="font-semibold text-gray-800">July 20-25, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Withdrawal:</span>
                      <span className="font-semibold text-gray-800">July 25-30, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">CSAB Rounds:</span>
                      <span className="font-semibold text-gray-800">For leftover seats</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Required Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 12th marksheet</li>
                      <li>• JEE Main admit card</li>
                      <li>• JEE Main scorecard</li>
                      <li>• Aadhaar card</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Caste/EWS/PwD certificates</li>
                      <li>• Domicile proof (if applicable)</li>
                      <li>• Passport size photos</li>
                      <li>• Signature specimen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Instructions & Pro Tips */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Instructions & Pro Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Before Registration</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Update Aadhaar and caste/EWS certificates</li>
                    <li>• Keep scanned copies of all documents ready</li>
                    <li>• Use demo registration link for practice</li>
                    <li>• Register early for preferred exam city</li>
                    <li>• Upload clear, correct images</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">During Process</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Monitor NTA and JoSAA websites regularly</li>
                    <li>• Use correction window carefully</li>
                    <li>• No changes accepted after deadline</li>
                    <li>• Multiple withdrawals allowed in counselling</li>
                    <li>• Preserve multiple document copies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Official Resources */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Official Resources & Portals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Official Portals</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>NTA JEE Main:</span>
                      <span className="font-semibold text-gray-800">jeemain.nta.nic.in</span>
                    </div>
                    <div className="flex justify-between">
                      <span>JoSAA Counselling:</span>
                      <span className="font-semibold text-gray-800">josaa.nic.in</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NTA Official:</span>
                      <span className="font-semibold text-gray-800">nta.ac.in</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Education Portals</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Updates & Guides:</span>
                      <span className="font-semibold text-gray-800">Shiksha, Allen, Vedantu</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Process Guides:</span>
                      <span className="font-semibold text-gray-800">Careers360, TMU</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Info Bulletin:</span>
                      <span className="font-semibold text-gray-800">Available on NTA site</span>
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
            {/* Age Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Age Criteria</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <p className="text-gray-700">No official upper age limit set by NTA for appearing in JEE Main.</p>
                  <p className="text-gray-700">Some institutes may require candidates to be at least <strong>17 years old</strong> as of <strong>December 31, 2026</strong>.</p>
                  <p className="text-gray-700">Accepted age proofs include a <strong>birth certificate</strong>, <strong>Class 10 mark sheet</strong>, or <strong>Aadhaar card</strong>.</p>
                  <p className="text-gray-700"><strong>Transgender candidates</strong> are now officially recognized as a <strong>separate category</strong>.</p>
                </div>
              </div>
            </div>

            {/* Qualifying Examination */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualifying Examination & Passing Year</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligible Years</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">Students who passed Class 12 in <strong>2024</strong>, <strong>2025</strong>, or are appearing in <strong>2026</strong> are eligible.</p>
                    <p className="text-gray-700 text-sm">Those who passed Class 12 <strong>before 2024</strong> are <strong>not eligible</strong>.</p>
                    <p className="text-gray-700 text-sm">Candidates from <strong>Open School/NIOS</strong> are eligible if they studied <strong>five or more subjects</strong>.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Recognized Boards</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">Accepted boards include <strong>CBSE</strong>, <strong>ICSE</strong>, <strong>State Boards</strong>, and <strong>NIOS</strong>.</p>
                    <p className="text-gray-700 text-sm">Also valid: <strong>International boards</strong> recognized by <strong>AIU</strong> (Association of Indian Universities).</p>
                    <p className="text-gray-700 text-sm">Other accepted qualifications: <strong>2-year Pre-University</strong>, <strong>NDA final exam</strong>, <strong>IB Diploma</strong>.</p>
                    <p className="text-gray-700 text-sm"><strong>GCE Advanced Level</strong> and <strong>AICTE/state-approved diplomas (3 years or more)</strong> are also eligible.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Subject Criteria and Combinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">B.E./B.Tech</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">Must have studied <strong>Physics, Chemistry, and Mathematics (PCM)</strong> compulsorily.</p>
                    <p className="text-gray-700 text-sm">A minimum of <strong>5 subjects</strong> in Class 12 is required.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">B.Arch (Paper 2A)</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">Requires <strong>Mathematics, Aptitude, and Drawing</strong> as core subjects.</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">B.Planning (Paper 2B)</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">Requires <strong>Mathematics, Aptitude, and Planning</strong> as core subjects.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Number of Attempts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Number of Attempts & Attempts Counting Policy</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <p className="text-gray-700">Students can appear within a <strong>maximum of 3 consecutive years</strong>.</p>
                  <p className="text-gray-700">Both <strong>January and April sessions</strong> of the same year count as <strong>one attempt</strong>.</p>
                  <p className="text-gray-700"><strong>Example:</strong> A student passing Class 12 in 2024 can appear in <strong>2024, 2025, and 2026</strong> (6 total sessions).</p>
                  <p className="text-gray-700">Gap years are acceptable as long as they are within the <strong>3-year continuous limit</strong>.</p>
                </div>
              </div>
            </div>

            {/* Admission Eligibility */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Admission Eligibility for NITs/IIITs/GFTIs/Other Institutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Minimum Marks Required</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700"><strong>General/OBC/EWS:</strong></span>
                      <span className="font-semibold text-gray-800">75% marks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700"><strong>SC/ST:</strong></span>
                      <span className="font-semibold text-gray-800">65% marks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700"><strong>Alternative:</strong></span>
                      <span className="font-semibold text-gray-800">Top 20 percentile</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Notes</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">These marks are required <strong>only for admission</strong>, not for appearing in the exam.</p>
                    <p className="text-gray-700 text-sm">Candidates under reserved categories must submit valid <strong>certificates during counselling</strong>.</p>
                    <p className="text-gray-700 text-sm">Some institutes may have <strong>additional criteria</strong> for admission.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nationality & Domicile */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nationality, Domicile & State Code Rules</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligible Nationalities</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm"><strong>Indian Nationals</strong></p>
                    <p className="text-gray-700 text-sm"><strong>NRIs, OCIs, and PIOs</strong> are also eligible.</p>
                    <p className="text-gray-700 text-sm"><strong>Foreign Nationals</strong> can apply too.</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">State Code Rules</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">The <strong>state code</strong> depends on the <strong>state where the Class 12 board exam</strong> was taken.</p>
                    <p className="text-gray-700 text-sm">Indian students studying abroad must provide their <strong>permanent Indian address</strong>.</p>
                    <p className="text-gray-700 text-sm">Some institutions may require a <strong>state domicile certificate</strong> for quota-based admissions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Documentation & Application Essentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Mandatory Documents</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">Active <strong>email ID</strong> and <strong>mobile number</strong></p>
                    <p className="text-gray-700 text-sm">Recent <strong>passport-size photograph</strong> and <strong>scanned signature</strong></p>
                    <p className="text-gray-700 text-sm"><strong>Birth certificate</strong>, <strong>Class 10 mark sheet</strong>, or <strong>Aadhaar card</strong></p>
                    <p className="text-gray-700 text-sm"><strong>Caste/Category/EWS/Disability</strong> certificates (if applicable)</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm"><strong>AIU equivalency certificate</strong> for foreign qualifications</p>
                    <p className="text-gray-700 text-sm"><strong>Aadhaar</strong> or any valid <strong>government-issued ID</strong></p>
                    <p className="text-gray-700 text-sm"><strong>Original Class 12 mark sheets</strong> and <strong>percentile proof</strong></p>
                    <p className="text-gray-700 text-sm"><strong>Self-declaration certificate</strong> for candidates under the transgender category</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Matrix */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Matrix (Summary Table)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Criteria Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Age Limit</td>
                      <td className="border border-gray-300 px-4 py-2">No upper age limit; minimum 17+ years for some institutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Year of Passing</td>
                      <td className="border border-gray-300 px-4 py-2">2024, 2025 passed, or 2026 appearing candidates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Subjects</td>
                      <td className="border border-gray-300 px-4 py-2">At least 5 subjects; PCM mandatory for B.E./B.Tech</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Marks Exam</td>
                      <td className="border border-gray-300 px-4 py-2">No minimum marks required to appear</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Marks Admission</td>
                      <td className="border border-gray-300 px-4 py-2">75% (Gen/OBC/EWS); 65% (SC/ST) or top 20 percentile</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Number of Attempts</td>
                      <td className="border border-gray-300 px-4 py-2">3 consecutive years; Jan + Apr sessions = 1 attempt</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Nationality</td>
                      <td className="border border-gray-300 px-4 py-2">Indian, NRI, PIO, OCI, and foreign nationals eligible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* New & Noteworthy for 2026 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">New & Noteworthy for 2026</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Transgender category</strong> introduced for both registration and admissions.</p>
                  <p className="text-gray-700"><strong>SC/ST/PwD candidates:</strong> minimum marks lowered from <strong>50% to 40% in PCM</strong>.</p>
                  <p className="text-gray-700"><strong>Document verification</strong> made stricter — Aadhaar and category proofs must match.</p>
                  <p className="text-gray-700">Clear rules now prevent <strong>multiple or unclear entries</strong> during registration.</p>
                  <p className="text-gray-700">Eligibility rules for <strong>diploma holders</strong> are now clearly defined.</p>
                  <p className="text-gray-700">Greater importance placed on <strong>accurate state code selection</strong> as it affects <strong>quota and seat allotment</strong>.</p>
                </div>
              </div>
            </div>

            {/* Important Advisory */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Important Advisory</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <p className="text-gray-700">Any <strong>false information</strong> or <strong>missing document</strong> can lead to <strong>disqualification</strong>.</p>
                  <p className="text-gray-700">Candidates marked as <strong>provisional</strong> who fail to submit valid proof may lose their seats.</p>
                  <p className="text-gray-700">It's essential to <strong>check NTA's official website regularly</strong> for updates.</p>
                  <p className="text-gray-700">Institutes may enforce <strong>stricter or additional rules</strong> beyond NTA guidelines.</p>
                  <p className="text-gray-700">Candidates must ensure their <strong>Aadhaar and category certificates</strong> are updated before registration.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Application Process</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Steps to Apply:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {data.ApplicationProcess.map((step, index) => (
                    <li key={index} className="text-gray-600">{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Fee Structure</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">1 Paper</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">2 Papers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">General (Male)</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.Gen_Male["1Paper"]}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.Gen_Male["2Papers"]}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">General (Female)</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.Gen_Female["1Paper"]}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.Gen_Female["2Papers"]}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">OBC/EWS (Male)</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.OBC_EWS_Male["1Paper"]}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.OBC_EWS_Male["2Papers"]}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">OBC/EWS (Female)</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.OBC_EWS_Female["1Paper"]}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.OBC_EWS_Female["2Papers"]}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">SC/ST/PwD/Transgender</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.SC_ST_PwD_Transgender["1Paper"]}</td>
                      <td className="border border-gray-300 px-4 py-2">{data.ApplicationFee.SC_ST_PwD_Transgender["2Papers"]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Extended JEE Main 2026 Application Correction Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Extended JEE Main 2026 Application Correction Guide</h2>
              
              {/* Correction Window Timing & Availability */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Correction Window Timing & Availability</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Session 1 correction expected: December 1–3, 2025 (3 days)</li>
                  <li>• Session 2 correction expected: March 10–12, 2026 (3 days)</li>
                  <li>• Window opens online exclusively at the NTA official portal https://jeemain.nta.nic.in</li>
                  <li>• NTA sends email and SMS alerts to candidates with correction links or instructions</li>
                  <li>• Correction window is a <strong>single opportunity</strong> for applicants; no further edits afterward</li>
                </ul>
              </div>

              {/* Editable Fields and Details */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Editable Fields and Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Candidate's Name, Father's or Mother's Name</strong> (only one at a time), strictly as per Class 10 mark sheet</li>
                  <li>• <strong>Date of Birth</strong> correction allowed to match official documents</li>
                  <li>• <strong>Gender</strong> change possible</li>
                  <li>• <strong>Category/Subcategory</strong> changes allowed (SC/ST/OBC/General/EWS/PwD/Transgender), additional fees applicable if moving to General/OBC</li>
                  <li>• <strong>Aadhaar Number</strong> can be updated</li>
                  <li>• <strong>Paper Choice (B.E./B.Tech, B.Arch, B.Planning):</strong> Add or change exams; pay any balance fee</li>
                  <li>• <strong>Exam City Preferences:</strong> Change order or update exam centers</li>
                  <li>• <strong>Medium of Examination:</strong> Switch between English, Hindi, and select regional languages</li>
                  <li>• <strong>Upload New Photograph and Signature:</strong> Conform to NTA specifications (color photo, no mask, no caps)</li>
                  <li>• <strong>Communication Address:</strong> Postal address corrections allowed</li>
                  <li>• <strong>Contact Number and Email:</strong> Occasionally changeable; often locked dependent on stage</li>
                  <li>• <strong>Academic Details:</strong> Modify Class 10/12 board, roll numbers, passing year, results if pending or verification issues arise</li>
                  <li>• <strong>Parents' Education and Names:</strong> Editable for corrections</li>
                </ul>
              </div>

              {/* Non-Editable Fields */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Non-Editable Fields</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Permanent Address frequently non-editable due to identity verification</li>
                  <li>• Sessions (January/April) locked in many cases</li>
                  <li>• Mobile number and Email may be locked once verified/locked, except under special NTA provisions</li>
                  <li>• Candidates must ensure these data accurate during registration to avoid issues</li>
                </ul>
              </div>

              {/* Fees for Corrections */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Fees for Corrections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Category upgrade (Reserved to General/OBC) or adding papers can trigger extra fees</li>
                  <li>• Payment to be made online during correction window</li>
                  <li>• No refund policies; candidates must verify fee status pre-submission</li>
                  <li>• Fee modes: credit/debit cards, net banking, UPI</li>
                </ul>
              </div>

              {/* Step-by-Step Correction Procedure */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Correction Procedure</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Access https://jeemain.nta.nic.in during the correction window dates</li>
                  <li>2. Log in with Application No., Password, and Security Pin</li>
                  <li>3. Select 'Manage Form Particulars Correction'</li>
                  <li>4. Edit allowed fields per instructions</li>
                  <li>5. Upload fresh scanned photos/signatures if required</li>
                  <li>6. Pay additional fees if any arise from changes</li>
                  <li>7. Submit corrected form</li>
                  <li>8. Download and save the correction confirmation slip</li>
                </ol>
              </div>

              {/* Best Practices for Correction */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Practices for Correction</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plan corrections promptly once window opens; delays risk missing deadlines</li>
                  <li>• Triple-check entries against official documents for exact spellings/dates/numbers</li>
                  <li>• Use the official cropper tool for photos/signatures to avoid mismatches</li>
                  <li>• Keep multiple downloaded copies of confirmation receipts safely</li>
                  <li>• Contact NTA helpline immediately if any issues processing corrections</li>
                </ul>
              </div>

              {/* Common Errors to Avoid */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Errors to Avoid</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Submitting late corrections or attempting after deadline</li>
                  <li>• Uploading incorrect or blurred images</li>
                  <li>• Missing or underpaying additional fees leading to rejection</li>
                  <li>• Incorrect category declaration inconsistent with certificates</li>
                  <li>• Ignoring NTA instructions or not reviewing confirmation before logout</li>
                </ul>
              </div>

              {/* Support and Candidate Resources */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Support and Candidate Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>NTA Helpline:</strong> 0120-6895200 (Mon-Sat, 9:30 AM - 5:30 PM)</li>
                  <li>• <strong>Email:</strong> jeemain@nta.ac.in</li>
                  <li>• <strong>Live Chat:</strong> Available on NTA portal during key phases</li>
                  <li>• <strong>FAQs:</strong> Provided on official website regarding common concerns of corrections</li>
                  <li>• <strong>Educational sites:</strong> Shiksha, Careers360, Motion, Collegedunia regularly upload tutorials and example walkthroughs for correction steps</li>
                </ul>
              </div>

              {/* Official and Trusted Sources */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Official and Trusted Sources for Further Reading</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <a href="https://www.shiksha.com/engineering/articles/jee-main-application-form-and-image-correction-blogId-19439" className="text-blue-600 hover:underline">Shiksha: JEE Main 2026 Application Correction Guide</a></li>
                  <li>• <a href="https://www.kollegeapply.com/articles/jee-main-2026-application-form-correction-dates-fees-procedure-1817" className="text-blue-600 hover:underline">KollegeApply: Detailed Correction Dates & Procedure</a></li>
                  <li>• <a href="https://origineducare.com/jee-main-2026-application-form-correction/" className="text-blue-600 hover:underline">OriginEducare: Stepwise Correction Instructions</a></li>
                  <li>• <a href="https://motion.ac.in/blog/jee-main-application-form/" className="text-blue-600 hover:underline">Motion Education: Application Form Correction Walkthrough</a></li>
                  <li>• <a href="https://jeemain.nta.nic.in" className="text-blue-600 hover:underline">NTA Official JEE Main Portal</a></li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            {/* Subject-wise Exam Pattern */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Subject-wise Exam Pattern</h2>
              
              {/* Major Policy and Structural Changes */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Major Policy and Structural Changes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Numerical Questions:</strong> Entire Section B per subject (5 questions) mandatory without internal choice; this elevates the emphasis on thorough numerical problem-solving skills across all syllabus topics</li>
                  <li>• <strong>Negative Marking:</strong> Uniform -1 penalty for incorrect answers in both MCQs and numerical questions fosters precision and discourages guesswork</li>
                  <li>• <strong>Syllabus Weightage:</strong> The syllabus enforces compulsory chapterwise weightage in Physics, Chemistry, and Mathematics, urging aspirants to engage in holistic subject-wise study</li>
                  <li>• <strong>Format and Mode:</strong> The entire exam is computer-based except for the Drawing section in Paper 2A (B.Arch), which remains offline, ensuring evaluative integrity for creative domains</li>
                  <li>• <strong>Language Diversity:</strong> Facilitates inclusivity by offering 13 language options encompassing Hindi, English, and regional Indian languages, enabling candidates to choose their most comfortable medium</li>
                </ul>
              </div>

              {/* Exam Paper Breakdown */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Paper Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Paper</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject-wise</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Question Types</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Total Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Marks</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Paper 1</td>
                        <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics</td>
                        <td className="border border-gray-300 px-4 py-2">20 MCQs + 5 Numerical per subject</td>
                        <td className="border border-gray-300 px-4 py-2">75</td>
                        <td className="border border-gray-300 px-4 py-2">300</td>
                        <td className="border border-gray-300 px-4 py-2">3 hours</td>
                        <td className="border border-gray-300 px-4 py-2">Numerical negative marking; compulsory numericals</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Paper 2A</td>
                        <td className="border border-gray-300 px-4 py-2">Mathematics, Aptitude, Drawing</td>
                        <td className="border border-gray-300 px-4 py-2">25 MCQs (Math), 50 MCQs (Aptitude), 2 Drawing offline</td>
                        <td className="border border-gray-300 px-4 py-2">77</td>
                        <td className="border border-gray-300 px-4 py-2">400</td>
                        <td className="border border-gray-300 px-4 py-2">3 hours</td>
                        <td className="border border-gray-300 px-4 py-2">Pen & paper Drawing section</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Paper 2B</td>
                        <td className="border border-gray-300 px-4 py-2">Mathematics, Aptitude, Planning</td>
                        <td className="border border-gray-300 px-4 py-2">25 MCQs (Math), 50 MCQs (Aptitude), 25 MCQs (Planning)</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">400</td>
                        <td className="border border-gray-300 px-4 py-2">3 hours</td>
                        <td className="border border-gray-300 px-4 py-2">Fully online, MCQ format</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                
              {/* Scoring Schema & Rank Computation */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Scoring Schema & Rank Computation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Correct answer:</strong> +4 marks</li>
                  <li>• <strong>Incorrect answer:</strong> -1 mark</li>
                  <li>• <strong>Unattempted:</strong> 0 marks</li>
                  <li>• <strong>Numerical answers</strong> accepted in multiple valid formats (e.g., 5, 5.0, 05)</li>
                  <li>• <strong>Raw score formula:</strong> Score = (4 × correct) - (1 × incorrect)</li>
                  <li>• <strong>Normalization:</strong> Scores normalized/session-wise to produce percentiles and All India Ranks (AIR), ensuring fairness</li>
                </ul>
              </div>

              {/* Difficulty Level & Topic Trends */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Difficulty Level & Topic Trends</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Physics:</strong> Moderate difficulty; emphasis on Mechanics, Modern Physics, Current Electricity</li>
                  <li>• <strong>Chemistry:</strong> NCERT-centric; Physical and Inorganic chemistry more scoring; Organic chemistry requires strong conceptual grasp</li>
                  <li>• <strong>Mathematics:</strong> Most challenging; focus on Calculus, Coordinate Geometry, Algebra; longer, integrative problems common</li>
                </ul>
              </div>

              {/* Chapter-Wise Weightage */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Chapter-Wise Weightage (Last 5 Years' Data)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Topics</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Weightage (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={4}>Mathematics</td>
                        <td className="border border-gray-300 px-4 py-2">Calculus</td>
                        <td className="border border-gray-300 px-4 py-2">28-36</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Coordinate Geometry</td>
                        <td className="border border-gray-300 px-4 py-2">15</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Algebra (Quadratic, Complex, Sequences)</td>
                        <td className="border border-gray-300 px-4 py-2">20</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Probability, Trigonometry, Vectors</td>
                        <td className="border border-gray-300 px-4 py-2">20-25</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={5}>Physics</td>
                        <td className="border border-gray-300 px-4 py-2">Mechanics (Laws of Motion)</td>
                        <td className="border border-gray-300 px-4 py-2">20-25</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Modern Physics</td>
                        <td className="border border-gray-300 px-4 py-2">10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Optics</td>
                        <td className="border border-gray-300 px-4 py-2">8-9</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Current Electricity</td>
                        <td className="border border-gray-300 px-4 py-2">6.5</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electromagnetism & Thermodynamics</td>
                        <td className="border border-gray-300 px-4 py-2">~22</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={3}>Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2">Physical Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2">30-35</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Inorganic Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2">35-40</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Organic Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2">25-30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                
              {/* Time Management & Exam Strategy */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Time Management & Exam Strategy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Allocate ~60 mins per subject in Paper 1, targeting 2 mins per question, reserving final 15 mins for review</li>
                  <li>• For Paper 2A/2B, allocate 70 mins to Aptitude, 40 mins each to Mathematics and Drawing or Planning</li>
                  <li>• Accuracy is paramount—guess only when confident due to negative marking</li>
                  <li>• Solve easier questions first to secure marks; mark complex ones for review</li>
                  <li>• Use elimination methods for MCQs to improve chances</li>
                  <li>• Practice numerical questions in exam conditions to mitigate negative marks risk</li>
                </ul>
              </div>

              {/* Preparation Techniques */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Preparation Techniques</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analyze past 10 years' papers for topic patterns and question difficulty</li>
                  <li>• Regularly attempt official NTA mock tests; incorporate error logs to track weaknesses</li>
                  <li>• Join coaching or online platforms providing structured test series and live problem-solving sessions</li>
                  <li>• Prioritize all chapters due to uniform weightage; do not neglect any syllabus part</li>
                  <li>• For Paper 2A, dedicate time to timed drawing practice; for Planning, focus on reasoning and comprehension</li>
                  <li>• Hone proficiency in chosen exam language; test comprehension and answering strategies accordingly</li>
                </ul>
              </div>

              {/* Resources & Support */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Resources & Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Official NTA mock tests and detailed PDFs of previous year question papers on the official website</li>
                  <li>• Coaching resources from Allen, Vedantu, PW Live offering chapter tests and extensive problem sets</li>
                  <li>• Video lessons by TMU, MathonGo, and other leading educators</li>
                  <li>• Apps and online platforms for timed tests, error mapping, and peer group discussions</li>
                </ul>
              </div>

              {/* Final Advice */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Final Advice</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avoid selective study; every chapter counts equally</li>
                  <li>• Perfect accuracy to circumvent negative marking losses</li>
                  <li>• Leverage realistic mock exam conditions to build confidence and endurance</li>
                  <li>• Track performance trends and adapt strategies post-session 1 results</li>
                  <li>• Maintain balance between concept learning and problem-solving efficiency</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Exam Pattern</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Paper 1 (B.E./B.Tech)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.ExamPattern.Paper1_BE_BTech.Subjects.map((subject, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Total Questions</h4>
                      <p className="text-gray-600">{data.ExamPattern.Paper1_BE_BTech.TotalQuestions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Total Marks</h4>
                      <p className="text-gray-600">{data.ExamPattern.Paper1_BE_BTech.TotalMarks}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Type</h4>
                      <p className="text-gray-600">{data.ExamPattern.Paper1_BE_BTech.Type}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Structure</h4>
                    <p className="text-gray-600">{data.ExamPattern.Paper1_BE_BTech.Structure}</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Paper 2A (B.Arch)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.ExamPattern.Paper2A_BArch.Subjects.map((subject, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Total Questions</h4>
                      <p className="text-gray-600">{data.ExamPattern.Paper2A_BArch.TotalQuestions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Total Marks</h4>
                      <p className="text-gray-600">{data.ExamPattern.Paper2A_BArch.TotalMarks}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Paper 2B (B.Plan)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.ExamPattern.Paper2B_BPlan.Subjects.map((subject, index) => (
                          <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Total Questions</h4>
                      <p className="text-gray-600">{data.ExamPattern.Paper2B_BPlan.TotalQuestions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Total Marks</h4>
                      <p className="text-gray-600">{data.ExamPattern.Paper2B_BPlan.TotalMarks}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Marking Scheme</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">MCQ Questions</h3>
                  <p className="text-gray-600">{data.MarkingScheme.MCQ}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Numerical Questions</h3>
                  <p className="text-gray-600">{data.MarkingScheme.Numerical}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">New Change 2026</h3>
                  <p className="text-yellow-700">{data.MarkingScheme.NewChange2026}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Syllabus</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Base Syllabus</h3>
                  <p className="text-gray-600">{data.Syllabus.Base}</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Removed Topics 2026</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {data.Syllabus.RemovedTopics2026.map((topic, index) => (
                      <li key={index} className="text-red-700">{topic}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Paper 1 (B.E./B.Tech) Syllabus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Mathematics</h4>
                      <p className="text-gray-600 text-sm">{data.Syllabus.Paper1_BE_BTech.Mathematics}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Physics</h4>
                      <p className="text-gray-600 text-sm">{data.Syllabus.Paper1_BE_BTech.Physics}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Chemistry</h4>
                      <p className="text-gray-600 text-sm">{data.Syllabus.Paper1_BE_BTech.Chemistry}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Paper 2A (B.Arch)</h3>
                    <p className="text-gray-600">{data.Syllabus.Paper2A_BArch}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-2">Paper 2B (B.Plan)</h3>
                    <p className="text-gray-600">{data.Syllabus.Paper2B_BPlan}</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Expected Cutoff Trends 2026</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">General</h3>
                  <p className="text-2xl font-bold text-blue-600">{data.CutoffTrends.General}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">EWS</h3>
                  <p className="text-2xl font-bold text-green-600">{data.CutoffTrends.EWS}</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">OBC-NCL</h3>
                  <p className="text-2xl font-bold text-yellow-600">{data.CutoffTrends["OBC-NCL"]}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">SC</h3>
                  <p className="text-2xl font-bold text-red-600">{data.CutoffTrends.SC}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">ST</h3>
                  <p className="text-2xl font-bold text-purple-600">{data.CutoffTrends.ST}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">PwD</h3>
                  <p className="text-2xl font-bold text-gray-600">{data.CutoffTrends.PwD}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Counselling Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                  <p className="text-gray-600">{data.Counselling.Description}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Start Date</h3>
                  <p className="text-gray-600">{data.Counselling.StartDate}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Mode</h3>
                  <p className="text-gray-600">{data.Counselling.Mode}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Rounds</h3>
                  <p className="text-gray-600">{data.Counselling.Rounds}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Reservation Policy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">OBC-NCL</h3>
                  <p className="text-2xl font-bold text-blue-600">{data.Reservation["OBC-NCL"]}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">EWS</h3>
                  <p className="text-2xl font-bold text-green-600">{data.Reservation.EWS}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">SC</h3>
                  <p className="text-2xl font-bold text-red-600">{data.Reservation.SC}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">ST</h3>
                  <p className="text-2xl font-bold text-purple-600">{data.Reservation.ST}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">PwD</h3>
                  <p className="text-2xl font-bold text-gray-600">{data.Reservation.PwD}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Overview</h2>
              <p className="text-gray-600">Select a tab to view detailed information about JEE Main 2026.</p>
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
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-gray-500">JEE Main Exam</span>
                <span className="text-gray-400">›</span>
                <span className="text-gray-800 font-medium">JEE Main 2026</span>
              </div>
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
                  alt="JEE Main Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  JEE Main 2026: Exam Dates, Pattern, Syllabus, Previous Year Papers, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-medium">#JEEMain</span>
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
            <div>
              {renderTabContent()}
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">B.Tech/B.E Admissions OPEN</h3>
              
              {/* NIT Trichy */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={nittLogo} alt="NIT Trichy" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">NIT Trichy B.Tech</h4>
                    <p className="text-xs text-gray-600">National Institute of Technology</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Top Engineering Institute | 1000+ Seats | JEE Main Based | Government Funded</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
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
                    <p className="text-xs text-gray-600">Indian Institute of Technology</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Premier Institute | 800+ Seats | JEE Advanced Based | Government Funded</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* IIIT Hyderabad */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold text-sm">IIIT</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">IIIT Hyderabad B.Tech</h4>
                    <p className="text-xs text-gray-600">International Institute of Information Technology</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Deemed University | 400+ Seats | JEE Main Based | Excellent Placements</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* VIT Vellore */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={vitLogo} alt="VIT Vellore" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">VIT Vellore B.Tech</h4>
                    <p className="text-xs text-gray-600">Vellore Institute of Technology</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Private University | 2000+ Seats | VITEEE Based | Excellent Infrastructure</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
