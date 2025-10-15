import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jeeMainData from '../../../../data/exams/jee-main.json';

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

type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling' | 'preparation';

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026: Data-Rich Guide</h2>
              <div className="space-y-4 text-gray-700 text-base">
                <p><strong>About:</strong> JEE Main is India's largest undergraduate engineering entrance test conducted twice a year by NTA (January and April sessions). It offers entry to B.Tech, B.E., B.Arch, and B.Planning courses at 100+ premier institutions (NITs, IIITs, GFTIs, and many private/state universities) and serves as the sole qualifying exam for JEE Advanced for IIT admissions.</p>
                <ul className="list-disc ml-6">
                  <li>Over 13 lakh candidates appear annually; increasing by 1–2 lakh every year.</li>
                  <li>The exam is computer-based (CBT) and offered in 13 major languages.</li>
                  <li>Only top 2.5 lakh JEE Main scorers are eligible to appear for JEE Advanced.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6">Exam Structure & Syllabus</h3>
                <ul className="list-disc ml-6">
                  <li><strong>Paper 1:</strong> Physics, Chemistry, Maths – 90 Qs (Attempt 75), 300 marks, -1 for MCQ, Online</li>
                  <li><strong>Paper 2A:</strong> Maths, Aptitude, Drawing – 82 Qs (Attempt 77), 400 marks, -1 for MCQ, Hybrid</li>
                  <li><strong>Paper 2B:</strong> Maths, Aptitude, Planning – 105 Qs, 400 marks, -1 for MCQ, Online</li>
                  <li>No optional questions for numerical section; compulsory answering for all questions.</li>
                </ul>
                <h4 className="font-semibold mt-4">Chapterwise & Sectionwise Weightage</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Mathematics</strong>
                    <ul className="list-disc ml-4">
                      <li>Sequences & Series: 2 Qs (6.6%)</li>
                      <li>Straight Lines: 2 Qs (6.6%)</li>
                      <li>3-D Geometry: 2 Qs (6.6%)</li>
                      <li>Probability, Complex Numbers, Permutations: 1 Q each (~3.3%)</li>
                      <li>Algebra, Calculus, Coord.: 28–33% collectively</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Physics</strong>
                    <ul className="list-disc ml-4">
                      <li>Modern Physics: 10–12%</li>
                      <li>Optics: 8–9%</li>
                      <li>Current Electricity: 6.5%</li>
                      <li>Mechanics: 13–15%</li>
                      <li>Electrostatics/Magnetism: ~9%</li>
                      <li>Thermodynamics/Kinetic: ~8%</li>
                      <li>Oscillations & Waves: 3–4%</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Chemistry</strong>
                    <ul className="list-disc ml-4">
                      <li>s/p/d/f Block Elements: 5–6%</li>
                      <li>Coordination Compounds: 4–5%</li>
                      <li>Thermodynamics: 4–6%</li>
                      <li>Atomic Structure: 3–4%</li>
                      <li>Chemical Kinetics/Solutions: ~3.5%</li>
                      <li>Organic (Polymers, Acids): 10% cumul.</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mt-6">Institute Wise: Rank, Seat Matrix, Category Trends</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs border mb-4">
                    <thead><tr className="bg-gray-100"><th className="p-2">IIT</th><th className="p-2">CSE Closing Rank</th></tr></thead>
                    <tbody>
                      <tr><td className="p-2">Bombay</td><td className="p-2">67</td></tr>
                      <tr><td className="p-2">Delhi</td><td className="p-2">118</td></tr>
                      <tr><td className="p-2">Kanpur</td><td className="p-2">238</td></tr>
                      <tr><td className="p-2">Madras</td><td className="p-2">163</td></tr>
                      <tr><td className="p-2">Kharagpur</td><td className="p-2">270</td></tr>
                      <tr><td className="p-2">Roorkee</td><td className="p-2">400</td></tr>
                      <tr><td className="p-2">Guwahati</td><td className="p-2">600</td></tr>
                    </tbody>
                  </table>
                  <table className="min-w-full text-xs border mb-4">
                    <thead><tr className="bg-gray-100"><th className="p-2">NIT</th><th className="p-2">CSE Rank Range</th></tr></thead>
                    <tbody>
                      <tr><td className="p-2">Surathkal</td><td className="p-2">2265–6705</td></tr>
                      <tr><td className="p-2">Trichy</td><td className="p-2">1200–3982</td></tr>
                      <tr><td className="p-2">Warangal</td><td className="p-2">1800–5350</td></tr>
                      <tr><td className="p-2">Delhi</td><td className="p-2">&lt;3000–4500</td></tr>
                      <tr><td className="p-2">Allahabad</td><td className="p-2">3300–5000</td></tr>
                      <tr><td className="p-2">Puducherry</td><td className="p-2">6000–8000</td></tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-600">IIIT Hyderabad ECE: 1,000–3,000 | IIIT Allahabad CSE: 5,000–10,000 | IIT Hyderabad CSE: 620 | GFTIs/Lower NITs: 60,000–3,00,000 (varies by branch/seat type)</p>
                  <p className="text-xs text-gray-600">Seat Matrix 2026: 58,000+ combined seats for NITs, IIITs, GFTIs. State/Category quotas impact lowest accessible ranks in lower-tier NITs (Mizoram, Arunachal, Sikkim; closing ranks for Civil/Electrical can exceed 2.7 lakh).</p>
                </div>
                <h3 className="text-lg font-semibold mt-6">Cutoffs, Ranks and Percentile Analysis</h3>
                <table className="min-w-full text-xs border mb-4">
                  <thead><tr className="bg-gray-100"><th className="p-2">Category</th><th className="p-2">Cutoff %</th><th className="p-2">Approx. Marks</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2">General</td><td className="p-2">93.5%</td><td className="p-2">105–115</td></tr>
                    <tr><td className="p-2">EWS</td><td className="p-2">81%</td><td className="p-2">75–85</td></tr>
                    <tr><td className="p-2">OBC-NCL</td><td className="p-2">80.2%</td><td className="p-2">75–85</td></tr>
                    <tr><td className="p-2">SC</td><td className="p-2">62.2%</td><td className="p-2">65–75</td></tr>
                    <tr><td className="p-2">ST</td><td className="p-2">49.0%</td><td className="p-2">50–60</td></tr>
                    <tr><td className="p-2">PwD</td><td className="p-2">~0.01%</td><td className="p-2">Minimal</td></tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600">Top IITs require ranks under 600 (CSE), NIT Trichy/Warangal under 4,000, Surathkal up to 6,700 for open category. IIITs: CSE cutoff 1,000–10,000 (varies, General category). Lower NIT: Possible with percentiles as low as 70–85%, especially for non-CSE branches/context-specific seat quotas (Home State/OBC/SC-ST).</p>
                <h4 className="font-semibold mt-4">Marks vs Percentile vs Rank</h4>
                <table className="min-w-full text-xs border mb-4">
                  <thead><tr className="bg-gray-100"><th className="p-2">Marks</th><th className="p-2">Percentile</th><th className="p-2">Rank (Projected)</th><th className="p-2">Admission Tier</th></tr></thead>
                  <tbody>
                    <tr><td className="p-2">≥280</td><td className="p-2">99.99–100</td><td className="p-2">Top 1–200</td><td className="p-2">IIT Flagships/IIIT</td></tr>
                    <tr><td className="p-2">250–279</td><td className="p-2">97–99.99</td><td className="p-2">200–500</td><td className="p-2">Top-tier IIIT/NIT</td></tr>
                    <tr><td className="p-2">220–249</td><td className="p-2">90–97</td><td className="p-2">500–1500</td><td className="p-2">NIT/IIIT</td></tr>
                    <tr><td className="p-2">200–219</td><td className="p-2">90–96</td><td className="p-2">1500–3,000</td><td className="p-2">Strong NIT/IIIT</td></tr>
                    <tr><td className="p-2">160–199</td><td className="p-2">82–89</td><td className="p-2">3,000–10,000</td><td className="p-2">Mid-tier NIT/GFTI</td></tr>
                    <tr><td className="p-2">130–159</td><td className="p-2">70–81</td><td className="p-2">10,000–21,000</td><td className="p-2">Reserved/state quota</td></tr>
                    <tr><td className="p-2">80–129</td><td className="p-2">43,000–75,000</td><td className="p-2">GFTI/private/state</td></tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600">Trend: Even small shifts in marks (10–20 can shift rank by thousands).</p>
                <h3 className="text-lg font-semibold mt-6">State Quotas, Reservations, Board % Criteria</h3>
                <ul className="list-disc ml-6">
                  <li>OBC-NCL: 27%, EWS: 10%, SC: 15%, ST: 7.5%, PwD: 5% (horizontal).</li>
                  <li>Home State Quota: Critical for candidates from less competitive states; ranks required may be 30–50% higher than All India quota.</li>
                  <li>NITs/IIITs require either 75% in Class 12 or top 20 percentile board rank for eligibility (General/OBC/EWS); SC/ST/PwD: 65% or top 20 percentile.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6">Preparation: 10-Year Chapter Map, Strategy, and Expert Insights</h3>
                <ul className="list-disc ml-6">
                  <li>Review past 10 years' PYQs per chapter and session. Build heatmaps of question frequency. Calibrate time allocation to chapters contributing ≥20% of total questions.</li>
                  <li>Attempt 50+ PYQs per week, minimum 1 mock per 10 days. Track mistake/analysis log per topic; deep-dive into recurring error sources.</li>
                  <li>Use leading test series (Allen, Vedantu, PW Live) for simulated exam patterns. Try single-session and dual-session exam simulations; compare rank/score differentials.</li>
                  <li>Resource Platforms: NTA’s own mock test portal, Allen, Vedantu, Mathongo, TMU, Shiksha, CollegeDunia, CareerOrbits.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6">Tips for Maximizing Success</h3>
                <ul className="list-disc ml-6">
                  <li>Systematic syllabus completion: Cover every topic—no selective gaps allowed.</li>
                  <li>Allocate 50% time for dynamic revision and note building (short notes/formulae sheets).</li>
                  <li>Use percentile/score comparison tools to set realistic goals each session.</li>
                  <li>For two-attempt strategy: Analyze Session 1/Session 2 score patterns to refine approach and adjust focus for Session 2.</li>
                  <li>For routine: Balanced schedule, 7+ hours sleep, physical exercise, scheduled breaks increase retention and lower burnout.</li>
                  <li>For weak chapters: Fix via targeted PYQ review, repeated concept drills, error log analytics.</li>
                  <li>Always keep abreast with NTA circulars, session normalization changes, and topical shifts for 2026.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6">Data Maps & Tables (For Study/Print Use)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs border mb-4">
                    <thead><tr className="bg-gray-100"><th className="p-2">NIT</th><th className="p-2">Round 1 (Open)</th><th className="p-2">Round 5 (Open)</th></tr></thead>
                    <tbody>
                      <tr><td className="p-2">Warangal</td><td className="p-2">792</td><td className="p-2">2285</td></tr>
                      <tr><td className="p-2">Trichy</td><td className="p-2">2079</td><td className="p-2">4170</td></tr>
                      <tr><td className="p-2">Surathkal</td><td className="p-2">5130</td><td className="p-2">7080</td></tr>
                      <tr><td className="p-2">Rourkela</td><td className="p-2">4370</td><td className="p-2">7054</td></tr>
                      <tr><td className="p-2">Nagpur</td><td className="p-2">7229</td><td className="p-2">11706</td></tr>
                      <tr><td className="p-2">Durgapur</td><td className="p-2">12068</td><td className="p-2">18918</td></tr>
                      <tr><td className="p-2">Calicut</td><td className="p-2">2744</td><td className="p-2">4714</td></tr>
                      <tr><td className="p-2">Jaipur</td><td className="p-2">4291</td><td className="p-2">7830</td></tr>
                      <tr><td className="p-2">Silchar</td><td className="p-2">8900</td><td className="p-2">13094</td></tr>
                      <tr><td className="p-2">Jalandhar</td><td className="p-2">10110</td><td className="p-2">16899</td></tr>
                    </tbody>
                  </table>
                  <table className="min-w-full text-xs border mb-4">
                    <thead><tr className="bg-gray-100"><th className="p-2">IIT</th><th className="p-2">CSE</th><th className="p-2">ECE</th><th className="p-2">ME</th><th className="p-2">EE</th><th className="p-2">CE</th></tr></thead>
                    <tbody>
                      <tr><td className="p-2">Bombay</td><td className="p-2">67</td><td className="p-2">1085</td><td className="p-2">1804</td><td className="p-2">1158</td><td className="p-2">2531</td></tr>
                      <tr><td className="p-2">Delhi</td><td className="p-2">118</td><td className="p-2">1290</td><td className="p-2">1794</td><td className="p-2">1204</td><td className="p-2">2600</td></tr>
                      <tr><td className="p-2">Kanpur</td><td className="p-2">238</td><td className="p-2">1791</td><td className="p-2">2536</td><td className="p-2">2090</td><td className="p-2">3285</td></tr>
                      <tr><td className="p-2">Madras</td><td className="p-2">163</td><td className="p-2">1700</td><td className="p-2">2350</td><td className="p-2">2015</td><td className="p-2">3100</td></tr>
                      <tr><td className="p-2">Kharagpur</td><td className="p-2">270</td><td className="p-2">2100</td><td className="p-2">2950</td><td className="p-2">2500</td><td className="p-2">3500</td></tr>
                      <tr><td className="p-2">Roorkee</td><td className="p-2">400</td><td className="p-2">2700</td><td className="p-2">3300</td><td className="p-2">3000</td><td className="p-2">4200</td></tr>
                      <tr><td className="p-2">Guwahati</td><td className="p-2">600</td><td className="p-2">3200</td><td className="p-2">4100</td><td className="p-2">3700</td><td className="p-2">4900</td></tr>
                    </tbody>
                  </table>
                  <table className="min-w-full text-xs border mb-4">
                    <thead><tr className="bg-gray-100"><th className="p-2">Chapter</th><th className="p-2">Weight (%)</th></tr></thead>
                    <tbody>
                      <tr><td className="p-2">Sequences & Series</td><td className="p-2">6.6</td></tr>
                      <tr><td className="p-2">Straight Lines</td><td className="p-2">6.6</td></tr>
                      <tr><td className="p-2">3-D Geometry</td><td className="p-2">6.6</td></tr>
                      <tr><td className="p-2">Probability</td><td className="p-2">3.3</td></tr>
                      <tr><td className="p-2">Complex Numbers</td><td className="p-2">3.3</td></tr>
                      <tr><td className="p-2">Permutations/Combin.</td><td className="p-2">3.3</td></tr>
                      <tr><td className="p-2">Integration Topics</td><td className="p-2">3.3–6.6</td></tr>
                      <tr><td className="p-2">Algebra/Calculus</td><td className="p-2">28–33</td></tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg font-semibold mt-6">Additional Career and Academic Insights</h3>
                <ul className="list-disc ml-6">
                  <li>JEE Main is linked to NIRF rankings, placement indices, and academic outcome trends.</li>
                  <li>In 2025, most admitted candidates use PYQ/data-driven analytics for strategic branch selection.</li>
                  <li>Newer IIITs and GFTIs offer rising placement potential; data indexed placements by branch available through official portals.</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6">Final Remarks</h3>
                <p>JEE Main 2026 presents an intensified competitive landscape, with higher cut-offs across all categories, a robust normalization process, and immense demand for top tech branches. Topic coverage and adaptive strategies based on rigorous analytics and expert resources form the foundation for success. Candidates should leverage the two-session format, deep-dive into 10-year question analytics, keep a dynamic error log, and remain tuned to every official update for maximal performance and branch/institute access.</p>
              </div>
            </div>
            {/* --- END: JEE Main 2026 Data-Rich Guide --- */}

            {/* About JEE Main 2026 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About JEE Main 2026</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  JEE Main or Joint Entrance Examination - Main is conducted by NTA (National Testing Agency) to allow eligible candidates to get admission to various engineering courses like B.Tech, B.E, B.Arch, B.Planning in NITs, IIITs, GFTIs, and other participating institutes. It also serves as a qualifier for JEE Advanced for admission to IITs.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Conducted twice a year (January and April sessions)</li>
                    <li>• Gateway to IITs through JEE Advanced</li>
                    <li>• Over 12-13 lakh candidates appear annually</li>
                    <li>• Computer-based test (CBT) mode</li>
                    <li>• Available in 13 languages</li>
                  </ul>
                </div>
              </div>
            </div>

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
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Step-by-Step Application Process</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Visit the official website jeemain.nta.nic.in</li>
                    <li>Click on "JEE Main 2026 Application Form"</li>
                    <li>Register with valid email ID and mobile number</li>
                    <li>Fill in personal details, academic information, and exam preferences</li>
                    <li>Upload scanned photograph and signature</li>
                    <li>Pay the application fee online</li>
                    <li>Submit the application form and take a printout</li>
                  </ol>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Age Criteria</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">No formal upper age limit by NTA for appearing in JEE Main</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Some institutes may impose minimum 17 years as of December 31, 2026</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Valid proof of age required: birth certificate, Class 10 mark sheet, or Aadhaar card</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Transgender candidates officially recognized as separate category</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Qualifying Examination */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Qualifying Examination & Passing Year</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligible Years</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Passed Class 12 in 2024, 2025, or appearing in 2026</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Students who passed Class 12 prior to 2024 are ineligible</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Open School/NIOS candidates eligible with 5+ subjects</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Recognized Boards</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">CBSE, ICSE, State Boards, NIOS</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">International boards with AIU equivalency</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">2-year Pre-University, NDA final exam, IB Diploma</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">GCE Advanced Level, AICTE/state-approved diplomas (3+ years)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Subject Criteria and Combinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">B.E./B.Tech</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Compulsory PCM: Physics, Chemistry, Mathematics</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Minimum 5 subjects in Class 12</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">B.Arch (Paper 2A)</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Mandatory Mathematics, Aptitude, Drawing</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">B.Planning (Paper 2B)</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Mandatory Mathematics, Aptitude, Planning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Number of Attempts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Number of Attempts & Attempts Counting Policy</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Maximum 3 consecutive years eligibility window</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">January and April sessions of same year count as ONE attempt</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Example: Passed Class 12 in 2024 → eligible for 2024, 2025, and 2026 (total 6 actual appearances)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Gap years allowed if within three continuous year limit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission Eligibility */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Admission Eligibility for NITs/IIITs/GFTIs/Other Institutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Minimum Marks Required</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">General/OBC/EWS:</span>
                      <span className="font-semibold text-gray-800">75% marks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">SC/ST:</span>
                      <span className="font-semibold text-gray-800">65% marks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Alternative:</span>
                      <span className="font-semibold text-gray-800">Top 20 percentile</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Notes</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Criteria valid for admissions; does not restrict exam eligibility</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Reservation category certificates must be submitted during counselling</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Institutes may apply additional criteria for admission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nationality & Domicile */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Nationality, Domicile & State Code Rules</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligible Nationalities</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Indian Nationals</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">NRIs, OCIs, PIOs</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Foreign Nationals</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">State Code Rules</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">State code reflects Class 12 board exam state</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Indian students abroad must mention permanent Indian address</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">State domicile certificate required by some institutions for quotas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Documentation & Application Essentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Mandatory Documents</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Active email ID and mobile number</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Recent passport-size photograph and scanned signature</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Birth certificate, 10th marksheet, or Aadhaar</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Caste/Category/EWS/Disability certificates</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">AIU equivalency certificate for foreign education</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Aadhaar or government-issued ID document</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Original Class 12 marksheets and percentile documents</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 text-sm">Valid self-declaration certificates for transgender category</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Matrix */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Eligibility Matrix (Summary Table)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Eligibility Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Criteria Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Age Limit</td>
                      <td className="border border-gray-300 px-4 py-2">No upper limit; min 17+ years for some institutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Year of Passing</td>
                      <td className="border border-gray-300 px-4 py-2">2024, 2025 passed, or 2026 appearing candidates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Subjects</td>
                      <td className="border border-gray-300 px-4 py-2">Minimum 5 subjects, PCM mandatory for B.E./B.Tech</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Marks Exam</td>
                      <td className="border border-gray-300 px-4 py-2">No minimum marks to appear</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Minimum Marks Admission</td>
                      <td className="border border-gray-300 px-4 py-2">75% Gen/OBC/EWS; 65% SC/ST or top 20 percentile</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Number of Attempts</td>
                      <td className="border border-gray-300 px-4 py-2">3 consecutive years, Jan + Apr sessions considered 1 attempt</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Nationality</td>
                      <td className="border border-gray-300 px-4 py-2">Indian nationals, NRIs, PIOs, OCIs, Foreign nationals eligible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* New & Noteworthy for 2026 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">New & Noteworthy for 2026</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Introduction of <strong>transgender category</strong> for registration and admissions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">SC/ST/PwD candidates: minimum marks for eligibility reduced from 50% to <strong>40%</strong> in PCM</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Updated document policies tightening Aadhaar and caste certificate requirements</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Clear guidelines discourage candidates from ambiguous or multiple entries</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Diploma holder restrictions clarified</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Renewed emphasis on accurate state code declaration; affects seat allotment and quota</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Advisory */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Important Advisory</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Misinformation or missing documentation at any stage leads to disqualification</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Provisional candidates without final proofs by admission time risk seats being cancelled</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Candidate must continuously monitor NTA's official website for updates</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Institutes hold rights to impose stricter or additional requirements beyond NTA eligibility</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Candidates should promptly update Aadhaar and category certificates pre-registering</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Application Process</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Steps to Apply:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {data.ApplicationProcess.map((step, index) => (
                    <li key={index} className="text-gray-600">{step}</li>
                  ))}
                </ol>
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
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Step-by-Step Correction Procedure</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>Access https://jeemain.nta.nic.in during the correction window dates</li>
                  <li>Log in with Application No., Password, and Security Pin</li>
                  <li>Select 'Manage Form Particulars Correction'</li>
                  <li>Edit allowed fields per instructions</li>
                  <li>Upload fresh scanned photos/signatures if required</li>
                  <li>Pay additional fees if any arise from changes</li>
                  <li>Submit corrected form</li>
                  <li>Download and save the correction confirmation slip</li>
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

            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            {/* Introduction and Context */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Introduction and Context</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  JEE Main 2026 stands as the definitive national-level engineering and architecture entrance examination, shaping the careers of over 14 lakh aspiring candidates annually. It serves as the pivotal gateway to prestigious technical institutions such as NITs, IIITs, GFTIs, and a mandatory qualifier for JEE Advanced leading to admission in IITs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Instituted in 2013, succeeding the AIEEE, and administered by the National Testing Agency (NTA) since 2019, JEE Main has evolved into a bi-annual examination (January & April sessions), providing multiple attempts and necessitating versatile and comprehensive preparation approaches.
                </p>
              </div>
            </div>

            {/* 2026 Exam Pattern: In-Depth Structural Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">2026 Exam Pattern: In-Depth Structural Details</h2>
              
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
                        <th className="border border-gray-300 px-4 py-2 text-left">Subjects</th>
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
            {/* Comprehensive JEE Main 2026 Syllabus Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Syllabus</h2>
              
              {/* Base Framework */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Base Framework</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-4">
                    The JEE Main 2026 syllabus follows the <strong>NCERT Class 11 and 12 curriculum</strong> for Physics, Chemistry, and Mathematics as the core foundation across all papers. This allows standardized preparation aligned with most Indian schools.
                  </p>
                </div>
                </div>
                
              {/* Removed Topics for 2026 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Removed Topics for 2026</h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-4">
                    These topics are removed to streamline the syllabus and reduce the candidate workload:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-red-800 mb-2">Physics</h4>
                      <p className="text-red-700">Communication Systems</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-red-800 mb-2">Chemistry</h4>
                      <p className="text-red-700">States of Matter</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-red-800 mb-2">Mathematics</h4>
                      <p className="text-red-700">Mathematical Reasoning</p>
                    </div>
                  </div>
                </div>
                </div>

              {/* Paper 1 (B.E./B.Tech) Syllabus Detail */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Paper 1 (B.E./B.Tech) Syllabus Detail</h3>
                
                {/* Mathematics */}
                <div className="mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Mathematics</h4>
                    <p className="text-gray-700 mb-3">
                      Extensive topics from both Class 11 and 12 including but not limited to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Sets & Functions</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Sets, Relations, and Functions</li>
                          <li>• Domain, range, types of relations</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Complex Numbers</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Complex Numbers and Quadratic Equations</li>
                          <li>• Modulus, argument, roots</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Matrices</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Matrices and Determinants</li>
                          <li>• Operations, properties, applications</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Permutations</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Permutations and Combinations</li>
                          <li>• Binomial Theorem and Its Applications</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Sequences</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Sequences and Series</li>
                          <li>• Arithmetic & Geometric Progression</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Coordinate Geometry</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 2D and 3D geometry</li>
                          <li>• Straight lines, circles, conics</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Calculus</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Differential Calculus</li>
                          <li>• Integral Calculus</li>
                          <li>• Limits, continuity, differentiation</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Differential Equations</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Formation and solution</li>
                          <li>• Area under curves</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Statistics</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Probability and Statistics</li>
                          <li>• Mean, median, mode, standard deviation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Physics */}
                <div className="mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Physics</h4>
                    <p className="text-gray-700 mb-3">
                      Divided broadly into theory part and experimental skills (practical component):
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Mechanics</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Physics and Measurement</li>
                          <li>• Kinematics (1D & 2D motion)</li>
                          <li>• Laws of Motion</li>
                          <li>• Work, Energy, and Power</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Rotational Motion</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Rotational Motion</li>
                          <li>• Gravitation</li>
                          <li>• Properties of Solids and Liquids</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Thermodynamics</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Thermodynamics</li>
                          <li>• Kinetic Theory of Gases</li>
                          <li>• Oscillations and Waves</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Electrostatics</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Electrostatics</li>
                          <li>• Current Electricity</li>
                          <li>• Ohm's law, circuits</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Magnetism</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Magnetic Effects of Current</li>
                          <li>• Electromagnetic Induction</li>
                          <li>• Electromagnetic Waves</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Optics & Modern Physics</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Optics (reflection, refraction)</li>
                          <li>• Dual Nature of Matter</li>
                          <li>• Atoms and Nuclei</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 rounded-lg p-3">
                      <h5 className="font-semibold text-yellow-800 mb-2">Experimental Skills</h5>
                      <p className="text-sm text-gray-700">
                        <strong>20% weightage</strong> involving understanding of experiments, apparatus, data analysis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chemistry */}
                <div className="mb-6">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">Chemistry</h4>
                    <p className="text-gray-700 mb-3">
                      Topics from both physical, inorganic and organic branches include:
                    </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Physical Chemistry</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Basic Concepts of Chemistry</li>
                          <li>• Chemical Bonding and Molecular Structure</li>
                          <li>• Chemical Thermodynamics</li>
                          <li>• Solutions and Equilibrium</li>
                          <li>• Redox Reactions and Electrochemistry</li>
                          <li>• Chemical Kinetics</li>
                          <li>• Surface Chemistry</li>
                        </ul>
                    </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Inorganic Chemistry</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Classification of Elements</li>
                          <li>• Periodicity in Properties</li>
                          <li>• The p-Block Elements</li>
                          <li>• The d-Block and f-Block Elements</li>
                          <li>• Coordination Compounds</li>
                          <li>• Organometallics and Bioinorganic Chemistry</li>
                        </ul>
                    </div>
                      <div className="bg-white rounded-lg p-3">
                        <h5 className="font-semibold text-gray-800 mb-2">Organic Chemistry</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Purification and Characterization</li>
                          <li>• Basic Principles and Techniques</li>
                          <li>• Hydrocarbons (alkanes, alkenes, alkynes)</li>
                          <li>• Organic Compounds (Halogens, Oxygen, Nitrogen)</li>
                          <li>• Biomolecules</li>
                          <li>• Polymers</li>
                          <li>• Chemistry in Everyday Life</li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

              {/* Paper 2A (B.Arch) Syllabus Expanded */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Paper 2A (B.Arch) Syllabus Expanded</h3>
                  <div className="bg-green-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 mb-2">Mathematics</h4>
                      <p className="text-sm text-gray-600">From Paper 1's syllabus</p>
                  </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 mb-2">Aptitude Test</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Spatial visualization</li>
                        <li>• Mental ability</li>
                        <li>• 3D perception</li>
                        <li>• Analytical reasoning</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 mb-2">Drawing Test</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Understanding of scale and proportions</li>
                        <li>• Drawing of geometrical shapes</li>
                        <li>• Visualization of 3D objects</li>
                        <li>• Architectural awareness and creativity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paper 2B (B.Plan) Syllabus Expanded */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Paper 2B (B.Plan) Syllabus Expanded</h3>
                  <div className="bg-purple-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-purple-800 mb-2">Mathematics</h4>
                      <p className="text-sm text-gray-600">As per Class 11 & 12 NCERT syllabus</p>
                  </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-purple-800 mb-2">Planning Aptitude</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Understanding of urban and regional planning</li>
                        <li>• Basic statistics</li>
                        <li>• Social sciences</li>
                      </ul>
                </div>
                    <div className="bg-white rounded-lg p-3">
                      <h4 className="font-semibold text-purple-800 mb-2">Aptitude Test</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Logical reasoning</li>
                        <li>• Data interpretation</li>
                        <li>• Analytical thinking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes on Syllabus Structure */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Notes on Syllabus Structure</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-800">Question Types</div>
                      <div className="text-gray-700">The exam paper contains two types of questions:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• <strong>Section A:</strong> Multiple Choice Questions (MCQs) testing conceptual clarity</li>
                        <li>• <strong>Section B:</strong> Numerical answer type questions (NAT) requiring calculations and answers without options</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-800">Weightage Distribution</div>
                      <div className="text-gray-700">The weightage varies by topic with more questions from core topics such as:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Calculus (Mathematics)</li>
                        <li>• Mechanics (Physics)</li>
                        <li>• Organic Chemistry (Chemistry)</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <div className="font-semibold text-gray-800">Physics Component Breakdown</div>
                      <div className="text-gray-700">Detailed breakdowns of Physics theory vs practical components account for:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• <strong>Theory:</strong> 80% weightage</li>
                        <li>• <strong>Experimental Skills:</strong> 20% weightage</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold text-gray-800">Preparation Recommendation</div>
                      <div className="text-gray-700">For candidate preparation, accessing official and popular mock test portals reflecting this dense syllabus is recommended.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Official Sources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <a href="https://allen.in/jee-main/syllabus" className="text-blue-600 hover:underline">Allen: JEE Main Syllabus 2026</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <a href="https://www.vedantu.com/jee-main/syllabus-jee-main-2026" className="text-blue-600 hover:underline">Vedantu: Syllabus JEE Main 2026</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <a href="https://jeemain.nta.nic.in/document/syllabus-for-jee-main-2025/" className="text-blue-600 hover:underline">NTA Official Syllabus</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Portals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <a href="https://engineering.careers360.com/articles/jee-main-syllabus-2026" className="text-blue-600 hover:underline">Careers360: Syllabus 2026</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/engineering/jee-main-exam-syllabus" className="text-blue-600 hover:underline">Shiksha: Exam Syllabus</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <a href="https://www.pw.live/iit-jee" className="text-blue-600 hover:underline">PW: JEE Preparation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This comprehensive syllabus overview provides detailed topic coverage for JEE Main 2026. For detailed chapter-wise topic lists, sample questions per chapter, suggested preparation timelines based on this expanded syllabus, or integration of past years' trends to focus on high-yield topics, please refer to the additional resources above.
                </p>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Main 2026 Cutoff Trends Analysis */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Expected Cutoff Trends — Detailed Category-wise Analysis</h2>
              
              {/* Core Expected Percentile Cutoffs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Core Expected Percentile Cutoffs (2026 Projection)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Expected Percentile Range</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Estimated Marks Range (out of 300)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Notes / Implications</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">General (UR)</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">92.5 – 95.0</td>
                        <td className="border border-gray-300 px-4 py-2">105 – 115</td>
                        <td className="border border-gray-300 px-4 py-2">Highly competitive; top NIT/IIIT admissions require scores in this range</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">EWS</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">80.0 – 83.0</td>
                        <td className="border border-gray-300 px-4 py-2">75 – 85</td>
                        <td className="border border-gray-300 px-4 py-2">Reserved category; cutoff rising yearly in line with General category</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">OBC-NCL</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">79.0 – 82.0</td>
                        <td className="border border-gray-300 px-4 py-2">75 – 85</td>
                        <td className="border border-gray-300 px-4 py-2">Similar to EWS with slight variations per institute</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">SC</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">61.0 – 64.0</td>
                        <td className="border border-gray-300 px-4 py-2">60 – 75</td>
                        <td className="border border-gray-300 px-4 py-2">Cutoff steadily increasing, reflecting normalization post-pandemic</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">ST</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">48.0 – 52.0</td>
                        <td className="border border-gray-300 px-4 py-2">50 – 60</td>
                        <td className="border border-gray-300 px-4 py-2">Significant improvement over prior years; seek percentile over 50+ for safety</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">PwD</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">~0.001 – 0.02</td>
                        <td className="border border-gray-300 px-4 py-2">Minimal threshold (0–10 marks)</td>
                        <td className="border border-gray-300 px-4 py-2">Focused on inclusivity; very low cutoff as per government mandates</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Historical Cutoff Trends */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Historical Cutoff Trends and Percentile Evolution (2022–2026)</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-4">
                    This indicates a <strong>steady rise in cutoffs</strong>, especially post-pandemic, due to normalization of exam difficulty parameters and increased candidate pool.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">General (%)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">EWS (%)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">OBC-NCL (%)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">SC (%)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">ST (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">2026*</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">93.5</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">81.0</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">80.2</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">62.2</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">49.0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2025</td>
                        <td className="border border-gray-300 px-4 py-2">93.1</td>
                        <td className="border border-gray-300 px-4 py-2">80.3</td>
                        <td className="border border-gray-300 px-4 py-2">79.4</td>
                        <td className="border border-gray-300 px-4 py-2">61.1</td>
                        <td className="border border-gray-300 px-4 py-2">47.9</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2024</td>
                        <td className="border border-gray-300 px-4 py-2">93.2</td>
                        <td className="border border-gray-300 px-4 py-2">81.3</td>
                        <td className="border border-gray-300 px-4 py-2">79.7</td>
                        <td className="border border-gray-300 px-4 py-2">60.1</td>
                        <td className="border border-gray-300 px-4 py-2">46.7</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2023</td>
                        <td className="border border-gray-300 px-4 py-2">90.8</td>
                        <td className="border border-gray-300 px-4 py-2">75.6</td>
                        <td className="border border-gray-300 px-4 py-2">73.6</td>
                        <td className="border border-gray-300 px-4 py-2">52.0</td>
                        <td className="border border-gray-300 px-4 py-2">37.2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2022</td>
                        <td className="border border-gray-300 px-4 py-2">88.4</td>
                        <td className="border border-gray-300 px-4 py-2">63.1</td>
                        <td className="border border-gray-300 px-4 py-2">67.0</td>
                        <td className="border border-gray-300 px-4 py-2">43.1</td>
                        <td className="border border-gray-300 px-4 py-2">26.8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 text-sm text-gray-600">*Projected</div>
              </div>

              {/* Cutoff Score vs Percentile Correlation */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cutoff Score vs Percentile Correlation</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-800">Top 99+ Percentile Marks</div>
                      <div className="text-gray-700">Approximately 260–280+ marks out of 300, needed for IIT/Top IIITs admission</div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-800">Safe Score for General</div>
                      <div className="text-gray-700">Around <strong>105–115 marks</strong>, correlating with 92–95 percentile; safe target for NITs</div>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <div className="font-semibold text-gray-800">Category-wise Marks-to-Percentile Mapping</div>
                      <div className="text-gray-700">Varies slightly per year due to exam difficulty but follows stable trends</div>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold text-gray-800">Marks Range for Lowest Qualifiers</div>
                      <div className="text-gray-700">
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• General: ~95 marks (90 percentile)</li>
                          <li>• SC/ST/PwD: ~35–60 marks (corresponding percentiles varying widely)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Factors Affecting Cutoff Trends */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Factors Affecting Cutoff Trends</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Primary Factors</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Number of Candidates</p>
                          <p className="text-sm text-gray-600">Increase in candidate pool pushes percentile cutoffs higher</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Exam Difficulty</p>
                          <p className="text-sm text-gray-600">Lower difficulty leads to higher scores hence higher cutoffs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Reservation Policies</p>
                          <p className="text-sm text-gray-600">Quota seat adjustments affect percentile thresholds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Secondary Factors</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Number of Seats</p>
                          <p className="text-sm text-gray-600">Changes in seat availability at NITs, IIITs, GFTIs influence cutoffs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Performance Clustering</p>
                          <p className="text-sm text-gray-600">Batch-wise performance distribution impacts relative ranking</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">JoSAA Counselling Trends</p>
                          <p className="text-sm text-gray-600">Seat matrix and academic choices influence closing ranks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category-wise Cutoff Expectations */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Category-wise Cutoff Expectations and Observations</h3>
                <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">General (UR)</h4>
                        <p className="text-gray-700">The highest cutoff category; consistent need for scores above 90th percentile</p>
                </div>
                    </div>
                  </div>
                  
                <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">EWS</h4>
                        <p className="text-gray-700">Cutoffs have risen due to increased awareness and candidate participation; expected to hover around 80-83 percentile</p>
                </div>
                    </div>
                  </div>
                  
                <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">OBC-NCL</h4>
                        <p className="text-gray-700">Closely aligned with EWS trends, with minor variations depending on specific state quotas</p>
                </div>
                    </div>
                  </div>
                  
                <div className="bg-red-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SC/ST</h4>
                        <p className="text-gray-700">Increasing elevated cutoffs reflect more equitable access and competitive aspirant quality</p>
                </div>
                    </div>
                  </div>
                  
                <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">PwD</h4>
                        <p className="text-gray-700">Cutoff remains minimal, designed for enabling access with lowered barriers</p>
                </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admission Implications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Admission Implications Based on Expected Cutoffs</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-800">High Probability Admissions</div>
                      <div className="text-gray-700">Candidates scoring above <strong>110 marks (General)</strong> can expect high probability of NIT or reputed IIIT seat allotment in popular branches (CSE, ECE)</div>
                </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-800">Reserved Category Admissions</div>
                      <div className="text-gray-700">Scores in the <strong>75–85 marks</strong> bracket likely ensure admission into reserved categories under respective quotas</div>
              </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <div className="font-semibold text-gray-800">Important Note</div>
                      <div className="text-gray-700">Applicants must aim higher than qualifying cutoffs because <strong>cutoff percentile is not admission guarantee</strong> but minimum eligibility</div>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold text-gray-800">College-wise Expectations</div>
                      <div className="text-gray-700">
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• <strong>Top colleges</strong> generally close admissions around 95+ percentile</li>
                          <li>• <strong>Mid-tier NITs</strong> around 90–92 percentile for top branches</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Preparation */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Preparation Based on Cutoff Trends</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Target Percentiles</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1"></div>
                        <div>
                          <p className="font-semibold text-gray-800">Aim for 95+ Percentile</p>
                          <p className="text-sm text-gray-600">For strongest admission positioning</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1"></div>
                        <div>
                          <p className="font-semibold text-gray-800">Maximize Scoring Efficiency</p>
                          <p className="text-sm text-gray-600">Focus on Physics, Chemistry, and Mathematics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Preparation Strategy</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-1"></div>
                        <div>
                          <p className="font-semibold text-gray-800">Regular Mock Tests</p>
                          <p className="text-sm text-gray-600">Aligned with last year cutoff trends</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-1"></div>
                        <div>
                          <p className="font-semibold text-gray-800">Time Management</p>
                          <p className="text-sm text-gray-600">Improve percentile awareness and efficiency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marks Distribution Example */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Supporting Data: Marks Distribution Example (General Category)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Marks Range</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Approximate Percentile Range</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Admission Potential</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">270 – 300</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">99.9 – 100</td>
                        <td className="border border-gray-300 px-4 py-2">IITs, top IIITs, CSE at premier NITs</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">210 – 260</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">95 – 99</td>
                        <td className="border border-gray-300 px-4 py-2">CSE, ECE branches in NITs/IIITs</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">150 – 205</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">85 – 94</td>
                        <td className="border border-gray-300 px-4 py-2">Other engineering branches in NITs, GFTIs</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">100 – 145</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">70 – 85</td>
                        <td className="border border-gray-300 px-4 py-2">State-level colleges, private deemed universities</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">&lt;100</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">&lt; 70</td>
                        <td className="border border-gray-300 px-4 py-2">Limited options, alternate pathways</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-800">Target Percentile</div>
                      <div className="text-gray-700">Preparing to exceed the <strong>93+ percentile general category cutoff</strong> provides a competitive edge</div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-800">Safety Margin</div>
                      <div className="text-gray-700">Reservations raise competitive thresholds in respective categories, so category candidates should aim to exceed their estimated percentile cutoffs by 2-3 points for safety</div>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <div className="font-semibold text-gray-800">Continuous Monitoring</div>
                      <div className="text-gray-700">Continuous monitoring of official NTA updates and JoSAA seat matrices helps adjust target scores and priorities</div>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold text-gray-800">Score vs Rank vs Percentile</div>
                      <div className="text-gray-700">Candidates must be aware of <strong>score versus rank versus percentile</strong> nuances while planning</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Official Sources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/news/engineering-jee-main-cutoff-check-past-5-years-cutoff-trends-to-know-the-safe-scores-for-2026-blogId-211814" className="text-blue-600 hover:underline">Shiksha: JEE Main Cutoff Trends 2026</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <a href="https://www.pw.live/iit-jee/exams/jee-main-cutoff-prediction" className="text-blue-600 hover:underline">PW: JEE Main Cutoff Prediction</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <a href="https://www.aakash.ac.in/jee-main-cut-off" className="text-blue-600 hover:underline">Aakash: JEE Main Cutoff Analysis</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Analysis Tools</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <a href="https://www.toprankers.com/jee-main-marks-vs-percentile" className="text-blue-600 hover:underline">TopRankers: Marks vs Percentile</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <a href="https://collegedunia.com/exams/jee-main/cutoff" className="text-blue-600 hover:underline">Collegedunia: Cutoff Analysis</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <a href="https://studyriserr.com/news/jee-main-cutoff-2026" className="text-blue-600 hover:underline">StudyRiser: Cutoff Trends 2026</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This comprehensive, data-rich overview offers an in-depth understanding of expected JEE Main 2026 cutoff percentile trends thoroughly supported with historical analysis, mark mappings, and strategic insights. For detailed tables of closing ranks for top NITs, IIITs, and GFTIs or interactive admission scenario simulations, please refer to the additional resources above.
                </p>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            {/* Comprehensive JEE Main 2026 Counselling Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026 Counselling Process</h2>
              
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Description</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-4">
                    The <strong>joint counselling process</strong> for JEE Main 2026 is conducted centrally by the <strong>Joint Seat Allocation Authority (JoSAA)</strong>, along with the <strong>Central Seat Allocation Board (CSAB)</strong>. This centralized process ensures the merit-based, transparent, and fair allocation of seats to candidates in premier engineering institutions across India, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-800 mb-2">IITs</h4>
                      <p className="text-blue-700 text-sm">Through JEE Advanced</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 mb-2">NITs, IIITs, GFTIs</h4>
                      <p className="text-green-700 text-sm">Through JEE Main ranks</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="font-semibold text-purple-800 mb-2">Other Institutes</h4>
                      <p className="text-purple-700 text-sm">Participating technical institutes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Date and Mode */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Start Date and Mode</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Timeline</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <div className="font-semibold text-gray-800">Counselling Commencement</div>
                        <div className="text-gray-700">Expected to commence in June 2026 after result declaration</div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-semibold text-gray-800">Process Duration</div>
                        <div className="text-gray-700">Multiple rounds conducted over several weeks</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Online Process</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">Entire process is online</p>
                          <p className="text-sm text-gray-600">Conducted through official portals</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">JoSAA Portal</p>
                          <p className="text-sm text-gray-600">josaa.nic.in for JoSAA counselling</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                        <div>
                          <p className="text-gray-700 font-medium">CSAB Portal</p>
                          <p className="text-sm text-gray-600">csab.nic.in for CSAB counselling rounds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Online Steps Include</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-800">Registration</p>
                        <p className="text-sm text-gray-600">With JEE Main credentials</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-800">Choice Filling</p>
                        <p className="text-sm text-gray-600">And locking of preferred institutes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-800">Seat Allotment</p>
                        <p className="text-sm text-gray-600">Based on AIR and choices</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-800">Document Verification</p>
                        <p className="text-sm text-gray-600">Scanned uploads and physical verification</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-800">Fee Payment</p>
                        <p className="text-sm text-gray-600">Seat acceptance fee</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1"></div>
                      <div>
                        <p className="font-semibold text-gray-800">Reporting</p>
                        <p className="text-sm text-gray-600">At allotted institute</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Counselling Rounds */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Counselling Rounds</h3>
                <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-800">Multiple Rounds Structure</div>
                      <div className="text-gray-700">Multiple rounds of counselling are conducted:</div>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Initial JoSAA rounds (typically 6-7 rounds) allocate most seats</li>
                        <li>• Post JoSAA rounds, CSAB conducts separate counselling to fill leftover seats</li>
                        <li>• Special counselling rounds include NEUT for North-Eastern states and SFTI for self-financed technical institutes</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-800">Candidate Participation</div>
                      <div className="text-gray-700">Candidates can update preferences and participate across rounds depending on seat allotment and acceptance/refusal in previous rounds</div>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <div className="font-semibold text-gray-800">Choice Locking</div>
                      <div className="text-gray-700">After each round, candidates must lock their choice list to confirm preferences for subsequent seat allotment rounds</div>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold text-gray-800">Upgradation Facilities</div>
                      <div className="text-gray-700">Candidates can opt for seat upgrades in successive rounds by filling higher-preference choices</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation Policy */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Reservation Policy</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-4">
                    Reservation of seats follows the Government of India norms:
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Reservation Percentage</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">OBC-NCL</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">27%</td>
                        <td className="border border-gray-300 px-4 py-2">Non-Creamy Layer; valid certificate required</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">EWS</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">10%</td>
                        <td className="border border-gray-300 px-4 py-2">Economically Weaker Sections</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">SC</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">15%</td>
                        <td className="border border-gray-300 px-4 py-2">Scheduled Castes</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">ST</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">7.5%</td>
                        <td className="border border-gray-300 px-4 py-2">Scheduled Tribes</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">PwD</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">5% (horizontal)</td>
                        <td className="border border-gray-300 px-4 py-2">Horizontal across categories; PwD certificate mandatory</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Important Notes</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Reservation applies to all participating institutes through JoSAA counselling</li>
                    <li>• Candidates must upload correct and valid category/PwD certificates during online registration for reservation benefits</li>
                    <li>• Failure to produce valid documents can lead to cancellation or disqualification of reserved category status</li>
                  </ul>
                </div>
              </div>

              {/* Counselling Step-by-Step */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Counselling Step-by-Step</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Registration</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Log into JoSAA portal using JEE Main roll number, application number, and password</li>
                          <li>• Accept terms and conditions; complete registration form</li>
                          <li>• Upload essential documents (marksheets, category certificates, PwD certificates, etc.)</li>
                          <li>• Pay counselling registration and seat acceptance fees if applicable</li>
                        </ul>
                </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Choice Filling and Locking</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Select preferred institutes and courses from the list of participating colleges</li>
                          <li>• Arrange choices in order of priority</li>
                          <li>• Lock choices before the deadline; changes not possible after locking</li>
                          <li>• Candidates are advised to be cautious and strategic while choosing branches and colleges</li>
                        </ul>
                </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
                <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Seat Allotment</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Based on AIR, category rank, and choices submitted</li>
                          <li>• Candidates receive provisional seat allotment letter on portal</li>
                          <li>• Must decide to accept, float (seek better option in next round), or withdraw (reject all offers)</li>
                        </ul>
                </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Document Verification</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• At reporting institute, candidates must submit originals of all required documents</li>
                          <li>• Verification includes eligibility, qualification, category, PwD status, etc.</li>
                        </ul>
                </div>
              </div>
            </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Fee Payment & Reporting</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Pay the seat acceptance fee online or at the institute</li>
                          <li>• Complete admission by physically reporting at allotted institute before deadline</li>
                        </ul>
                </div>
                </div>
                </div>
                </div>
              </div>

              {/* Frequently Asked Notes */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Notes</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-800">No Separate Age Limit for Counselling</div>
                      <div className="text-gray-700">Follow JEE exam age criteria</div>
                </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-800">Admission Eligibility</div>
                      <div className="text-gray-700">Candidates must meet cutoffs and qualifying exam requirements</div>
              </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <div className="font-semibold text-gray-800">Multiple Withdrawals Allowed</div>
                      <div className="text-gray-700">Candidates can withdraw from seat without penalty in dedicated windows</div>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold text-gray-800">Counselling for B.Arch and B.Planning</div>
                      <div className="text-gray-700">Conducted jointly with JEE Main ranks; requires clearing AAT for B.Arch candidates</div>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <div className="font-semibold text-gray-800">Preparatory Courses</div>
                      <div className="text-gray-700">Available only for SC/ST/PwD candidates through specific IITs after counselling</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Links & Helpline */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Important Links & Helpline</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Official Portals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <a href="https://josaa.nic.in" className="text-blue-600 hover:underline">Official JoSAA website for counselling: josaa.nic.in</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <a href="https://csab.nic.in" className="text-blue-600 hover:underline">CSAB counselling details: csab.nic.in</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Resources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <a href="https://www.vedantu.com/jee-main/counselling" className="text-blue-600 hover:underline">Vedantu JEE Main Counselling Guide</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <a href="https://www.shiksha.com/engineering/jee-main-exam-counselling" className="text-blue-600 hover:underline">Shiksha Counselling Information</a>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <a href="https://collegedunia.com/exams/jee-main/josaa-counselling" className="text-blue-600 hover:underline">Collegedunia JoSAA Counselling</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This expanded overview arms candidates with a clear understanding of the entire counselling lifecycle, ensuring that JEE Main 2026 qualified students are well-prepared to navigate online registration, strategic choice filling, seat allotment, and admission formalities perfectly aligned to reservation policies.
                </p>
              </div>
            </div>
          </div>
        );


      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">JEE Main 2026</h2>
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
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-sm">NIT</span>
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
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">IIT</span>
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
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold text-sm">VIT</span>
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
