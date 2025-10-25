import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gitamData from './gitam.json';

interface GITAMData {
  "Exam Name": string;
  "Conducting Authority": string;
  "Exam Level": string;
  "Exam Category / Type": string;
  "Exam Frequency": string;
  "Languages Available": string;
  "Mode of Exam": string;
  "Duration": string;
  "Total Papers": string;
  "Number of Questions": string;
  "Total Marks": number;
  "Marking Scheme": {
    "Correct Answer": string;
    "Incorrect Answer": string;
    "Unanswered": string;
  };
  "Participating Institutes": string[];
  "Total Colleges": number;
  "Overview": string;
  "Important Dates (Tentative 2026)": {
    "Notification Release": string;
    "Application Form Start Date": string;
    "Phase 1 Registration End": string;
    "Phase 2 Registration End": string;
    "Phase 3 Registration End": string;
    "Slot Booking": string;
    "Admit Card Download": string;
    "Exam Dates": string;
    "Result Announcement": string;
    "Counselling Registration": string;
  };
  "Eligibility Criteria": {
    "Nationality": string;
    "Educational Qualification": {
      "UG (UGTP)": string;
      "Subjects": string;
    };
    "Minimum Marks": {
      "General": string;
      "CBSE/ICSE": string;
    };
    "Specific Course Eligibility": {
      "B.Tech / B.Pharmacy": string;
      "B.Arch": string;
      "M.Tech (PGTA)": string;
      "M.Pharm (PGP)": string;
    };
  };
  "Application Process": {
    "Steps": string[];
    "Payment Modes": {
      "Online": string[];
      "Offline": string;
    };
    "Documents Required": string[];
  };
  "Syllabus": {
    "UGTP (B.Tech)": {
      "Physics": string[];
      "Chemistry": string[];
      "Mathematics": string[];
      "Biology": string[];
    };
    "PGTA (M.Tech/M.Arch)": {
      "Sections": string[];
    };
    "PGP (Pharmacy)": {
      "Subjects": string[];
    };
  };
  "Exam Pattern": Array<{
    "Variant": string;
    "Duration": string;
    "Sections": string[];
    "Questions": number;
    "Total Marks": number;
    "Marking Scheme": string;
  }>;
  "Admit Card": {
    "Availability": string;
    "Contents": string[];
    "Requirements": string;
    "Slot Booking": {
      "Mode": string;
      "Note": string;
    };
  };
  "Result and Ranking": {
    "Declaration": string;
    "Access": string;
    "Contents": string[];
    "Tie-Breaking Rules": string[];
  };
  "Cutoff (Expected 2026)": {
    [key: string]: string;
  };
  "Counselling Process": {
    "Mode": string;
    "Steps": string[];
    "Counselling Fee": string;
    "Centers": string[];
  };
  "Reservation Criteria": {
    "Categories": string[];
    "Scholarships": string;
  };
  "Preparation Tips": {
    "Focus": string;
    "Recommended Books": {
      "Mathematics": string;
      "Physics": string;
      "Chemistry": string;
    };
    "Strategy": string[];
  };
  "Highlights (2025-2026)": string[];
  "FAQs": Array<{
    "Q": string;
    "A": string;
  }>;
  "Official Contact": {
    "Website": string;
    "Helpline": string;
    "Address": string;
  };
  "Sources": string[];
}

export default function GITAMPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [data, setData] = useState<GITAMData | null>(null);

  useEffect(() => {
    setData(gitamData as GITAMData);
  }, []);

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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM Admission Test (GITAM GAT) 2026</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Basic Information</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Exam Name:</span> GITAM Admission Test (GITAM GAT) 2026</p>
                    <p><span className="font-medium">Conducting Authority:</span> GITAM (Gandhi Institute of Technology and Management) Deemed-to-be University</p>
                    <p><span className="font-medium">Exam Level:</span> University Level</p>
                    <p><span className="font-medium">Exam Category:</span> Undergraduate and Postgraduate Admission Test (Engineering, Pharmacy, Architecture, Management)</p>
                    <p><span className="font-medium">Exam Frequency:</span> Once a year (conducted in multiple phases)</p>
                    <p><span className="font-medium">Languages:</span> English</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Exam Structure</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Mode of Exam:</span> Online (Computer-Based Test; slot booking mandatory)</p>
                    <p><span className="font-medium">Duration:</span> 2 hours 30 minutes (UG/PG Tech), varies for some PG/programs</p>
                    <p><span className="font-medium">Total Papers:</span> 1 per program (UGTP-UG, PGTA-PG Tech/Arch, PGP-Pharmacy, Management/LLB have their own test codes)</p>
                    <p><span className="font-medium">Number of Questions:</span> 100 MCQs (typical: 60 for PCM/Biology; 40 for Critical Thinking & Reasoning; variants for other streams)</p>
                    <p><span className="font-medium">Total Marks:</span> 200 marks (2 marks per correct answer, no negative marking)</p>
                    <p><span className="font-medium">Marking Scheme:</span> +2 for correct answer, 0 for incorrect/unattempted (no negative marking)</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Participating Institutes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">GITAM Visakhapatnam Campus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">GITAM Hyderabad Campus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">GITAM Bengaluru Campus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Constituent colleges (11+), spanning Technology, Architecture, Sciences, Pharmacy, and Management</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">About / Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  GITAM GAT is a pan-India online entrance exam for UG and PG programs across GITAM's Hyderabad, Visakhapatnam, and Bengaluru campuses. It is conducted in phases, with flexible slot booking. The test assesses knowledge in Physics, Chemistry, Mathematics/Biology, critical reasoning, and for select programs (Management, Law), discipline-relevant sections. Counselling and seat allotment is based on GAT merit rank, campus/program preference, and seat availability.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Important Dates (2026 Tentative)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Notification Release:</span> December 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Application Start:</span> December 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Application End:</span> March 2026 (for first phase); rolling deadlines for further phases</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Slot Booking:</span> 1 week before each phase</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Admit Card:</span> Released after slot booking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Exam Dates:</span> March/April 2026 (multiple phases)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Result Declaration:</span> Usually within 5 days of exam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Counselling:</span> June–August 2026</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Eligibility Criteria</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Nationality:</p>
                    <p className="text-gray-600">Indian citizens only</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Educational Qualification:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>For UGTP (B.Tech/Pharmacy): Passed/appearing 10+2 or equivalent in 2025 or 2026, 60% aggregate in PCM/B subject group (55% for CBSE/ICSE)</li>
                      <li>B.Arch: Valid JEE Main Paper-2 or NATA score required</li>
                      <li>M.Tech: B.E./B.Tech/AMIE in relevant branch, 60% minimum (GATE qualified exempted from GAT)</li>
                      <li>M.Pharm: B.Pharm with 50% or GPAT qualified</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Subjects:</p>
                    <p className="text-gray-600">PCM for B.Tech, PCB or PCM for Pharmacy, relevant stream background for PG</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Age Limit:</p>
                    <p className="text-gray-600">As per program (no fixed university age bar for UG/PG regular admissions)</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Application Process</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Steps:</p>
                    <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                      <li>Register at <a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">https://gat.gitam.edu</a> (online only; no offline forms)</li>
                      <li>Fill academic, personal, and communication details</li>
                      <li>Upload scanned photo and signature (as per portal specs)</li>
                      <li>Select program, phase, and exam center (city)</li>
                      <li>Pay application fee: ₹1200 (single group), ₹2400 (two groups)</li>
                      <li>Submit form and save confirmation PDF for future reference</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Payment Modes:</p>
                    <p className="text-gray-600">Online payment via cards, netbanking, UPI, wallets; or DD to "GITAM University"</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Documents Needed:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>10th/12th marksheets (as DOB, academic proof)</li>
                      <li>Category, disability certificates if applicable</li>
                      <li>Passport-size photo and signature</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Exam Pattern (UGTP Example)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Section</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mathematics/Biology</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">40</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">80</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Physics</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Critical Thinking & Reasoning/English Aptitude</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">0–30 (varies)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">0–60 (varies)</td>
                      </tr>
                      <tr className="bg-gray-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-2">Total</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">100</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">Varies for other streams—PG/MGMT/LLB Law, BArchi, etc.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Syllabus (UGTP/Tech sample)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Physics:</h4>
                    <p className="text-gray-600 text-sm">Units & Dimensions, Kinematics, Thermal Properties, Mechanics, Electricity, Magnetism, Optics, Modern Physics, Waves, Semiconductors, Communication, Fluid Mechanics, Oscillations, Electromagnetism, Current, Elasticity, Dual Nature</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Chemistry:</h4>
                    <p className="text-gray-600 text-sm">Atomic Structure, Mole Concept, Thermodynamics, Kinetics, Chemical/Physical/Organic/Inorganic Chemistry, Equilibrium, Solutions, Solid State, Surface Chemistry, Polymers, Biomolecules, Environmental Chemistry, Metallurgy, Transition and Inner Transition Elements</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Mathematics:</h4>
                    <p className="text-gray-600 text-sm">Algebra, Trigonometry, Coordinate Geometry, Calculus, Sequences/Series, Probability, Matrices, Determinants, Complex Numbers, Vector Algebra, Differential Equations, Mathematical Reasoning, Geometry (2D/3D), Induction, Statistics, Binomial Theorem, Permutations/Combinations</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Biology, Reasoning, and English:</h4>
                    <p className="text-gray-600 text-sm">As per course requirements</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Cutoff (2025 Indicative, campus-wise, varies by phase and stream)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">CSE/IT (Visakhapatnam):</span> 175–200 marks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">ECE:</span> 130–150 marks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">Civil/Mechanical:</span> 100–120 marks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">B.Pharm:</span> 110–140 marks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600"><span className="font-medium">B.Arch:</span> valid JEE Main-2/NATA rank suffices</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Counselling Process</h3>
                <div className="space-y-3">
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Online registration and web options entry (choice filling for campus/stream)</li>
                    <li>Allotment based on merit, preference, and seat matrix</li>
                    <li>Fee payment and document upload for provisional admission</li>
                    <li>Physical reporting at campus for certificate verification and admission confirmation</li>
                    <li>Non-refundable counselling fee: ₹1000</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Reservation Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">SC/ST/OBC as per university/government norms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">PwD (various categories; certificate needed)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">33% reserved for female for some programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Graduate/PG programs may have EWS (in line with AICTE/UGC policy)</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Preparation Tips / Recommended Books</h3>
                <div className="space-y-3">
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Focus on Class 11/12 NCERT syllabus for core subjects</li>
                    <li>Solved papers, GITAM GAT mock/sample test on official site</li>
                    <li>Standard entrance books: HC Verma (Physics), O.P. Tandon (Chem), RD Sharma (Maths), Arihant series</li>
                    <li>Take full-length timed mocks and analyze performance</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Changes / Highlights (2025-2026)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">No negative marking persists</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Phase system and slot booking mandate continued</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Detailed subject-level merit list for campus/stream selection in counselling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Enhanced online portal, exam centers updated annually</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">FAQs (selected)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Q: Is offline application accepted?</p>
                    <p className="text-gray-600">A: No, only online applications via <a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">gat.gitam.edu</a>.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Q: What is the application fee?</p>
                    <p className="text-gray-600">A: ₹1200 per group, ₹2400 for dual group.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Q: Is there negative marking?</p>
                    <p className="text-gray-600">A: No.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Q: What if I miss slot booking?</p>
                    <p className="text-gray-600">A: Slot allotted automatically.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Q: How soon are results out?</p>
                    <p className="text-gray-600">A: Usually within 5 days after each exam phase.</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Official Contact Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Website:</span> <a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">https://gat.gitam.edu</a></p>
                  <p><span className="font-medium">Helpline:</span> 0891-2840505</p>
                  <p><span className="font-medium">Email:</span> <a href="mailto:admissions@gitam.edu" className="text-blue-600 hover:underline">admissions@gitam.edu</a></p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM Admission Test (GITAM GAT) 2026 – Extended Detailed Schedule</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Application and Notification Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Official Notification Release: December 2025</p>
                      <p className="text-gray-600 text-sm">Announcement of phases, exam structure, program matrix, and new changes on <a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">https://gat.gitam.edu</a> and through national press releases.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Application Form Availability:</p>
                      <p className="text-gray-600 text-sm">Online portal opens January 2026 for Phase 1, with rolling registration for each phase through August 2026. Application form filling, document upload, and fee payment carried out entirely online.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">GITAM GAT Registration & Slot Booking Phases</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Phase</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Registration End</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Slot Booking Window</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Exam Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Admit Card Release</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Result Release</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Phase 1</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Feb 2026</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">1 week before</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Feb/Mar 2026 (CBT)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">After slot booking</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Within 5 days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Phase 2</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Apr 2026</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">1 week before</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Apr 2026 (CBT)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">After slot booking</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Within 5 days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Phase 3</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 2026</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">1 week before</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">May 2026 (CBT)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">After slot booking</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Within 5 days</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Phase 4–8</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Monthly till Aug</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">1 week before</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Jun/Jul/Aug 2026 (CBT)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">After slot booking</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Within 5 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-gray-600">• Each phase has its own registration cut-off, slot booking, exam, and result cycle.</p>
                  <p className="text-sm text-gray-600">• Candidates may appear once per phase; best of the scores can be used for admission.</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Slot Booking and Admit Card</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Slot Booking:</p>
                      <p className="text-gray-600 text-sm">Typically opens 7–10 days before the exam date of each phase; candidates choose preferred date/time/center.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Admit Card Availability:</p>
                      <p className="text-gray-600 text-sm">Immediately after slot booking, to be downloaded from <a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">gat.gitam.edu</a>. Details available include exam date, time, center, candidate particulars, and guidelines.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Examination Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Mode:</p>
                      <p className="text-gray-600 text-sm">Computer-Based Test, held on multiple days per phase across major Indian cities (and some international centers, if announced).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Duration:</p>
                      <p className="text-gray-600 text-sm">2 hours to 2 hours 30 minutes (varies by program).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Question Paper:</p>
                      <p className="text-gray-600 text-sm">Generally 100 MCQs, subject-combination per course.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Marking:</p>
                      <p className="text-gray-600 text-sm">Mostly +2 for correct, 0 for incorrect/unattempted; some courses/streams have +4/−1.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Test Sessions:</p>
                      <p className="text-gray-600 text-sm">Different sessions for each phase; candidates must report early, carrying admit card and valid photo ID.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Results, Scorecard, and Phasing</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Result Declaration:</p>
                      <p className="text-gray-600 text-sm">Occurs online on the official portal within five working days of each phase's test.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Scorecard Details:</p>
                      <p className="text-gray-600 text-sm">Subject-wise and overall marks, All India Rank (AIR), percentile (if applicable), sectional analysis.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Multiple Appearances:</p>
                      <p className="text-gray-600 text-sm">For multiple phases, the candidate's best score is taken for merit/counselling.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Tie-breaking Criteria:</p>
                      <p className="text-gray-600 text-sm">Higher Marks in Mathematics/Biology, then Physics, then Chemistry, then earlier date of birth.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Counselling and Admission Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Counselling Registration:</p>
                      <p className="text-gray-600 text-sm">Tentatively starts in early July 2026 and continues through August for all phases.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Centralized Web Options:</p>
                      <p className="text-gray-600 text-sm">Candidates fill online choices for campus (Bengaluru, Hyderabad, Visakhapatnam), branch/program in order of preference.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Seat Allotment:</p>
                      <p className="text-gray-600 text-sm">Online, in multiple rounds using GAT merit rank, program cutoffs, and preference order.</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-2 ml-4 space-y-1">
                        <li>Allotted candidates pay initial admission fee (deducted from annual tuition) and confirm through portal.</li>
                        <li>Document verification is done at reporting.</li>
                        <li>Any seat not accepted in a particular round is offered to others in subsequent rounds.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Counselling Fee:</p>
                      <p className="text-gray-600 text-sm">₹1000 (non-refundable); paid separately from the academic/tuition fee.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Academic Calendar (Indicative)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Academic Year Start (UG/PG):</p>
                      <p className="text-gray-600 text-sm">Last week of August to early September 2026, after Phase 8 admissions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Induction and Orientation:</p>
                      <p className="text-gray-600 text-sm">Typically 1 week before regular classes commence.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Other Key Deadlines & Milestones</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Query Window for Candidates:</p>
                      <p className="text-gray-600 text-sm">Throughout the registration/admit card/result cycle via online helpdesk and university contact numbers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Document Discrepancy Resolution:</p>
                      <p className="text-gray-600 text-sm">Candidates given an official window before admission deadlines to correct or supplement documentation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Medical and Category Certificates Submission:</p>
                      <p className="text-gray-600 text-sm">At latest, by time of physical verification/special slot during the start of the academic year.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Withdrawal Window:</p>
                      <p className="text-gray-600 text-sm">Usually available before orientation, with refund as per university policy on withdrawal timings.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Ongoing and Phase-Specific Reminders</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Each exam phase is independent—allows flexibility for late applicants or candidates wanting to improve scores.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Instructions for slot booking, admit card download, examination day protocol, and post-result steps are repeated for every phase.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">All phase-specific events are updated real-time on the GITAM GAT official site newsboard.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Source URLs</h3>
                <div className="space-y-2">
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-2026" className="text-blue-600 hover:underline text-sm">https://engineering.careers360.com/articles/gitam-gat-2026</a></p>
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-exam-pattern-syllabus" className="text-blue-600 hover:underline text-sm">https://engineering.careers360.com/articles/gitam-gat-exam-pattern-syllabus</a></p>
                  <p><a href="https://gat.gitam.edu" className="text-blue-600 hover:underline text-sm">https://gat.gitam.edu</a></p>
                  <p><a href="https://www.shiksha.com/engineering/gitam-gat-exam" className="text-blue-600 hover:underline text-sm">https://www.shiksha.com/engineering/gitam-gat-exam</a></p>
                  <p><a href="https://www.gitam.edu/academics/academic-calendar" className="text-blue-600 hover:underline text-sm">https://www.gitam.edu/academics/academic-calendar</a></p>
                </div>
                <p className="text-sm text-gray-600 mt-3">This extended data block provides a granular, operational view of the entire GITAM GAT 2026 timeline, with detailed mapping for each phase from registration to post-result admission.</p>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM Admission Test (GITAM GAT) 2026 – Complete Eligibility Criteria</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">General Eligibility Requirements</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Exam Conducted by:</p>
                      <p className="text-gray-600 text-sm">Gandhi Institute of Technology and Management (Deemed-to-be-University)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Exam Name:</p>
                      <p className="text-gray-600 text-sm">GITAM Admission Test (GAT)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Applicable for:</p>
                      <p className="text-gray-600 text-sm">Admission to Undergraduate (UG), Postgraduate (PG), Doctoral, and Lateral Entry programs across Engineering, Pharmacy, Architecture, Law, Management, Humanities, and Sciences streams.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Participating Campuses:</p>
                      <p className="text-gray-600 text-sm">GITAM Visakhapatnam, GITAM Hyderabad, and GITAM Bengaluru.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Nationality & Age Criteria</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Eligible Nationalities:</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Indian Nationals</li>
                        <li>Non-Resident Indians (NRIs)</li>
                        <li>Persons of Indian Origin (PIO)</li>
                        <li>Overseas Citizens of India (OCI)</li>
                        <li>Foreign Nationals</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Age Limit:</p>
                      <p className="text-gray-600 text-sm">No upper age restriction. Candidates must satisfy program prerequisites—specifically must have completed 10+2 or equivalent qualification before July 2026.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Educational Qualification (General Overview)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">For UG Technical & Science Programs (UGTP):</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                        <li><strong>Minimum Qualification:</strong> 10+2 or equivalent examination.</li>
                        <li><strong>Year of Passing:</strong> Completed in 2023, 2024, or appearing in 2026.</li>
                        <li><strong>Compulsory Subjects:</strong> Physics, Chemistry, and Mathematics. (Biology eligible only for Biotechnology and Pharmacy streams.)</li>
                        <li><strong>Minimum Marks:</strong> General category: 60% aggregate (6.0 CGPA equivalent) in group subjects. CBSE/ICSE: 55% aggregate (special concession).</li>
                        <li><strong>Boards Accepted:</strong> Central boards (CBSE, ICSE), State boards, NIOS, and recognized international boards (IB, GCE A-level, etc.).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Program-Wise Detailed Eligibility</h3>
                
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Engineering Programs</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Tech</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 with Physics, Chemistry, Mathematics</td>
                          <td className="border border-gray-300 px-4 py-2">60% aggregate (55% for CBSE/ICSE)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Tech (Biotechnology)</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 with Physics, Chemistry, Mathematics/Biology</td>
                          <td className="border border-gray-300 px-4 py-2">Minimum 60% required; Biology accepted</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Tech (Lateral Entry)</td>
                          <td className="border border-gray-300 px-4 py-2">Diploma in Engineering (minimum 3 years)</td>
                          <td className="border border-gray-300 px-4 py-2">60% aggregate in relevant Polytechnic Diploma</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.Tech (via GAT or GATE)</td>
                          <td className="border border-gray-300 px-4 py-2">B.E./B.Tech/AMIE degree in relevant stream</td>
                          <td className="border border-gray-300 px-4 py-2">60% aggregate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.Tech (GATE candidates)</td>
                          <td className="border border-gray-300 px-4 py-2">GATE-qualified</td>
                          <td className="border border-gray-300 px-4 py-2">Direct exemption from written test (GAT PGTA)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Ph.D. (Engineering)</td>
                          <td className="border border-gray-300 px-4 py-2">Master's in Engineering/Technology with at least 55%</td>
                          <td className="border border-gray-300 px-4 py-2">Must qualify GReAT or hold valid GATE/NET/INSPIRE/CSIR score</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Architecture Programs</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Additional Requirement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Arch</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 with Physics, Mathematics, Chemistry</td>
                          <td className="border border-gray-300 px-4 py-2">Must qualify <strong>JEE Main Paper 2</strong> or <strong>NATA</strong></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.Arch</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's in Architecture (B.Arch or B.Plan)</td>
                          <td className="border border-gray-300 px-4 py-2">Minimum 50% in undergraduate degree</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Pharmacy & Paramedical Programs</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Pharm</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 with Physics, Chemistry, Biology/Mathematics</td>
                          <td className="border border-gray-300 px-4 py-2">60% aggregate (50% for reserved category)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Pharmacy (Lateral Entry)</td>
                          <td className="border border-gray-300 px-4 py-2">Diploma in Pharmacy</td>
                          <td className="border border-gray-300 px-4 py-2">60%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.Pharm</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's in Pharmacy (B.Pharm)</td>
                          <td className="border border-gray-300 px-4 py-2">50% aggregate or GPAT-qualified exempt from GAT PGP</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Ph.D (Pharmacy)</td>
                          <td className="border border-gray-300 px-4 py-2">M.Pharm with 55%</td>
                          <td className="border border-gray-300 px-4 py-2">GPAT holders exempt from GReAT test</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Management & Commerce Programs</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">BBA / B.Com / BMS</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 (any stream)</td>
                          <td className="border border-gray-300 px-4 py-2">Minimum 50%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">MBA</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's Degree (any discipline)</td>
                          <td className="border border-gray-300 px-4 py-2">Minimum 50% aggregate; GAT/MAT/CAT/GMAT/NMAT accepted</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Integrated MBA (5-Year)</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 (any discipline)</td>
                          <td className="border border-gray-300 px-4 py-2">60% aggregate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.Com / M.Sc (Economics / Data Science)</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's in Commerce / Arts / Technology</td>
                          <td className="border border-gray-300 px-4 py-2">Minimum 50-55%; mathematics preferred at UG level</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Law Programs</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">BA LLB / BBA LLB / B.Com LLB</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 (any stream)</td>
                          <td className="border border-gray-300 px-4 py-2">45% (40% for SC/ST)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">LLB (3-Year)</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's in any stream</td>
                          <td className="border border-gray-300 px-4 py-2">45% (40% for SC/ST)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">LLM (PG Law)</td>
                          <td className="border border-gray-300 px-4 py-2">LLB or equivalent degree</td>
                          <td className="border border-gray-300 px-4 py-2">50% aggregate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Humanities, Social Science, & Science Programs</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Subjects/Conditions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Sc. (Science)</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 with Science</td>
                          <td className="border border-gray-300 px-4 py-2">Biology required for Life Sciences</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.Sc. (Paramedical / Nursing)</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 with Physics, Chemistry, Biology, English</td>
                          <td className="border border-gray-300 px-4 py-2">60% aggregate (Nursing min 45%)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.Sc.</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's Degree in relevant Science discipline</td>
                          <td className="border border-gray-300 px-4 py-2">50% aggregate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">B.A. (Any Stream)</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 (any stream)</td>
                          <td className="border border-gray-300 px-4 py-2">50% aggregate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.A. (English, Economics, Psychology)</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's degree relevant to subject</td>
                          <td className="border border-gray-300 px-4 py-2">50%-60%, discipline-specific requirement</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Computer Science and Data Science Programs</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Minimum %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">BCA / B.Sc. (Computer Science)</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 with Mathematics or Computer Science</td>
                          <td className="border border-gray-300 px-4 py-2">50%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">MCA</td>
                          <td className="border border-gray-300 px-4 py-2">BCA or any UG degree with at least one Mathematics paper</td>
                          <td className="border border-gray-300 px-4 py-2">50% (bridge course if Maths not studied at UG level)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">M.Sc. Data Science / AI</td>
                          <td className="border border-gray-300 px-4 py-2">Bachelor's in Science/Engineering/IT/Statistics</td>
                          <td className="border border-gray-300 px-4 py-2">50%-60%; includes Mathematics/Statistics background</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Health Sciences</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">BPT (Physiotherapy)</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 in Physics, Chemistry, Biology, English</td>
                          <td className="border border-gray-300 px-4 py-2">60% aggregate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">MPT</td>
                          <td className="border border-gray-300 px-4 py-2">BPT degree recognized by statutory council</td>
                          <td className="border border-gray-300 px-4 py-2">50% aggregate</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Allied Paramedical / Nursing</td>
                          <td className="border border-gray-300 px-4 py-2">10+2 or Diploma in Biology-based fields</td>
                          <td className="border border-gray-300 px-4 py-2">Admission based on GAT, marks, and interview round</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-2">Doctoral Programs (Research Admissions)</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Eligibility</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Exemption Criteria</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Ph.D. Engineering / Science / Management / Pharmacy / Humanities</td>
                          <td className="border border-gray-300 px-4 py-2">Master's or equivalent degree with 55% min</td>
                          <td className="border border-gray-300 px-4 py-2">Qualifiers in <strong>UGC-NET, CSIR-NET, GATE, GPAT, INSPIRE, ICAR</strong>, or similar exempt from GReAT test</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Additional Notes & Exceptions</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Students appearing in 2026 examinations may also apply provisionally; final admission subject to results.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Candidates who have previously failed 10+2 supplementary subjects should complete those before counselling.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Program transitions (e.g., B.Tech to Dual Degree, PGTA to PG Research) allowed post qualifying 1st-year progression rules.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">GITAM does not permit admission via management quota exceeding the norms prescribed by UGC/AICTE.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Lateral Entry Admission Rules (for Engineering and Pharmacy)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Direct entry into 2nd year of B.Tech or B.Pharmacy applicable for diploma holders (approved by AICTE).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Students must score at least <strong>60%</strong> in the diploma.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Seat allocation for lateral entries via separate merit list within GAT counselling.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Reservation & Category Relaxation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Relaxation / Provision</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">SC/ST</td>
                        <td className="border border-gray-300 px-4 py-2">5% aggregate relaxation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">PwD</td>
                        <td className="border border-gray-300 px-4 py-2">Considered under Open Quota with adapted facilities</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Female</td>
                        <td className="border border-gray-300 px-4 py-2">Eligible for merit scholarships; encouraged under equal-opportunity policy</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">EWS</td>
                        <td className="border border-gray-300 px-4 py-2">Admitted under state/national guidelines if applicable</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Sports Quota</td>
                        <td className="border border-gray-300 px-4 py-2">5% weightage in GAT rank merit list</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">NRI / OCI</td>
                        <td className="border border-gray-300 px-4 py-2">Limited reserved seats under international category (requires equivalency certification from AIU or NRI proof)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Clarifications from Conducting Authority</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Multiple Qualification Pathways:</p>
                      <p className="text-gray-600 text-sm">JEE Main, NATA, or GATE/GPAT acceptable in lieu of GAT for specific degrees.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">International Equivalence Certificates:</p>
                      <p className="text-gray-600 text-sm">Required for IB/IGCSE/O-Level and foreign examination boards.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Medium of Instruction:</p>
                      <p className="text-gray-600 text-sm">English is mandatory at 10+2 and undergraduate levels for certain programs (Management, Law, Health Sciences).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">No Age Limit:</p>
                      <p className="text-gray-600 text-sm">Open to all eligible applicants irrespective of date of birth.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Exemptions from Entrance Test</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">GATE-qualified:</p>
                      <p className="text-gray-600 text-sm">Direct M.Tech admission without GAT (PGTA).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">GPAT-qualified:</p>
                      <p className="text-gray-600 text-sm">Direct M.Pharm admission without GAT (PGP).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">NATA/JEE (Main) candidates:</p>
                      <p className="text-gray-600 text-sm">Direct counselling eligibility for B.Arch.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">CUET, CLAT, or LSAT Candidates:</p>
                      <p className="text-gray-600 text-sm">May apply for relevant GITAM programs, subject to seat matrix and merit ranking.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Documents Required for Eligibility Verification</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">10th Marks Card (Date of Birth verification)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">12th Marks Card or equivalent certificate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">TC/Migration Certificate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Caste/Income/EWS/Disability Certificate (if applicable)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">GATE/GPAT/CLAT/LSAT scorecard (if applicable)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Transfer and Conduct Certificate for final admission</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">NRI/Foreign Credentials (passport, AIU equivalence certificate)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Disqualification Grounds</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Submission of falsified documents.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Non-fulfillment of academic qualification post provisional admission.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Incomplete applications or non-payment of fee.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Duplicate registrations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Source URLs</h3>
                <div className="space-y-2">
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-eligibility-criteria" className="text-blue-600 hover:underline text-sm">Careers360: GITAM GAT Eligibility 2026</a></p>
                  <p><a href="https://www.collegedekho.com/exam/gitam-gat/application-form" className="text-blue-600 hover:underline text-sm">CollegeDekho: GITAM GAT 2026 Application Details</a></p>
                  <p><a href="https://www.collegebatch.com/exams/gitam-gat-eligibility-criteria" className="text-blue-600 hover:underline text-sm">CollegeBatch: GITAM GAT 2026 Eligibility Overview</a></p>
                  <p><a href="https://apply.gitam.edu" className="text-blue-600 hover:underline text-sm">Official GITAM Admission Portal</a></p>
                  <p><a href="https://www.shiksha.com/engineering/gitam-gat-exam" className="text-blue-600 hover:underline text-sm">Shiksha: GITAM GAT 2026 Criteria</a></p>
                  <p><a href="https://researchadmissions.gitam.edu/static/PhD-Admission_Brochure_2025-2026_V1.pdf" className="text-blue-600 hover:underline text-sm">Ph.D Admission Brochure (GReAT 2025-26)</a></p>
                </div>
                <p className="text-sm text-gray-600 mt-3">This extended document exhaustively details the <strong>GITAM 2026 eligibility structure by program, level, and exception rules</strong>, integrated from multiple official and verified education sources.</p>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM Admission Test (GITAM GAT) 2026 – Exhaustive Application Process</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Registration and Application Form</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Mode:</p>
                      <p className="text-gray-600 text-sm">Fully online application at <a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">https://gat.gitam.edu</a> or <a href="https://apply.gitam.edu" className="text-blue-600 hover:underline">https://apply.gitam.edu</a></p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Step 1: Registration</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Click "New Applicant" and provide name, mobile number, email, create password, and select preferred program(s).</li>
                        <li>Upon successful registration, you receive an application number and login details for future access.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filling Out the Application</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Personal Details:</p>
                      <p className="text-gray-600 text-sm">Name, date of birth, gender, nationality, contact info, parent's details.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Educational Details:</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>10th and 12th (or equivalent) marks, board, subjects, year of passing, percentage/CGPA.</li>
                        <li>Selection of stream combination (PCM/PCB/Commerce/Arts; must match eligibility for chosen course).</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Program Selection:</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Programs displayed as a table, showing Application No, Program, Fee, Status.</li>
                        <li>Applicants choose all eligible programs (multiple courses through one form; fee per program/group).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Uploading Documents</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Required documents:</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Colored passport-size photograph (JPG/JPEG/PNG, 50–200 KB)</li>
                        <li>Signature (scan, black ink, 20–50 KB)</li>
                        <li>10th marksheet/birth certificate (DOB proof)</li>
                        <li>12th marksheet or equivalent (if result available)</li>
                        <li>Category/EWS/Disability/Sports certificates if applicable (PDF, legible)</li>
                        <li>For offline payment: scanned DD copy with application number written on reverse</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Guidelines:</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Adhere strictly to file format/size on portal, else portal rejects upload</li>
                        <li>All scan copies must be clear and authentic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Application Fee Payment</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Fee Amount:</p>
                      <p className="text-gray-600 text-sm">₹1200 for one test group/program; ₹2400 for two test groups</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Payment Modes:</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li><strong>Online:</strong> Debit/Credit Card, Net Banking, UPI, digital wallets (recommended)</li>
                        <li><strong>Offline:</strong> Demand Draft drawn in favor of "GITAM University" payable at Visakhapatnam</li>
                      </ul>
                      <p className="text-gray-600 text-sm mt-2">Print application, attach DD (with application number on reverse), post/speed post/courier to:</p>
                      <p className="text-gray-600 text-sm mt-1 font-medium">Director-Admissions, GITAM Deemed University, Gandhinagar Campus, Rushikonda, Visakhapatnam-530045, Andhra Pradesh</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">After payment:</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Receipt and success acknowledgement generated (print/download for records)</li>
                        <li>Print copy of filled application for future reference; payment status updated in candidate portal within 24-48 hours</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Post-Application Actions</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Program Lock:</p>
                      <p className="text-gray-600 text-sm">After fee payment, applicants cannot change/delete programs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Access & Correction:</p>
                      <p className="text-gray-600 text-sm">Before fee payment, applicants can edit and update form/choices. Afterward, corrections only via official email request or university helpline (provide application ID and registered contact for authentication).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Application Print:</p>
                      <p className="text-gray-600 text-sm">Form accessible for download as PDF via portal (recommended for record-keeping, document verification, and exam day).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Multiple Programs:</p>
                      <p className="text-gray-600 text-sm">Eligible students can log back in, add more courses before payment (but not after).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Slot Booking & Admit Card</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Slot Booking:</p>
                      <p className="text-gray-600 text-sm">Opens 1 week before the exam for each GAT phase. Candidate selects test city, center, date, and time slot as per availability.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Admit Card Download:</p>
                      <p className="text-gray-600 text-sm">Immediately after slot booking, from <a href="https://gat.gitam.edu/login" className="text-blue-600 hover:underline">https://gat.gitam.edu/login</a>.</p>
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                        <li>Admit card includes candidate name, program, photograph, exam date, status, center venue, and reporting instructions.</li>
                        <li>E-hall ticket is mandatory for entry.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">ID Proof at Center:</p>
                      <p className="text-gray-600 text-sm">One valid original: Passport, Driving License, Voter ID, IT PAN card, School/College photo ID, or Aadhaar Card required along with hall ticket for identity verification.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">On Exam Day</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Arrive 15–60 minutes before reporting time as mentioned on admit card.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">e-Hall ticket verified, candidate registered at center.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Allotment of seat with computer terminal.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">No change in exam center/date after slot booking unless notified by GITAM due to unavoidable circumstances.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Declaration required: No mobile phones/IT devices/notes/papers/unauthorized material permitted in hall.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Application Corrections and Help</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Before fee payment:</p>
                      <p className="text-gray-600 text-sm">freely editable/cancelable.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">After payment:</p>
                      <p className="text-gray-600 text-sm">only email-based requests to <strong>gat@gitam.edu</strong> (must use the same registered email) with supporting documents and provide detailed description; use helpline (+91-8884984000) for urgent corrections.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Email ID:</p>
                      <p className="text-gray-600 text-sm">cannot be changed once registered.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Duplicate Applications:</p>
                      <p className="text-gray-600 text-sm">Only one application per candidate is permitted; duplicates may result in cancellation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">General Application and Admissions Policy</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Multiple programs may be combined in one application, provided eligibility met for all.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Sports Quota:</p>
                      <p className="text-gray-600 text-sm">Upload sports achievement certificates as per mention in application. Sports quota scholarships have a two-stage selection (screening + performance).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Scholarship Eligibility:</p>
                      <p className="text-gray-600 text-sm">Merit, Sports, Reservation, etc. can be evaluated after GAT/counselling – check university's Scholarships Page for updates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">All eligibility to be finally proved at certificate/document verification/admission stage.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">All fees (academic and registration) must be paid separately before courses commence.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Important Reminders</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Application submitted ONLY after payment confirmed; mere submission of form is not valid.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Save all correspondence and confirmation messages.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Monitor university portal and email/SMS for updates, admit card, slot booking, result, and counselling instructions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Use official GITAM portals (<a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">https://gat.gitam.edu</a>, <a href="https://apply.gitam.edu" className="text-blue-600 hover:underline">https://apply.gitam.edu</a>) for all submissions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Frequently Asked & Advanced Queries</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700 mb-2">Can I add/modify courses after payment?</p>
                    <p className="text-gray-600 text-sm">No, course preferences are locked post-fee payment.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700 mb-2">Is offline form submission via post still available?</p>
                    <p className="text-gray-600 text-sm">Only for payment by DD, and only if hard copy is posted with DD before the phase deadline.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700 mb-2">How many attempts per cycle?</p>
                    <p className="text-gray-600 text-sm">Candidates can appear in any of the GAT phases per year, but only once per phase.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700 mb-2">Who is eligible for sports quota?</p>
                    <p className="text-gray-600 text-sm">National/International level athletes; email sports_scholarships@gitam.edu with details and get confirmed by Directorate of Sports.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700 mb-2">What if payment fails?</p>
                    <p className="text-gray-600 text-sm">Retry payment from portal. Unsuccessful attempts are redirected back to "Program Selection" page.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700 mb-2">Whom to contact for technical/application issues?</p>
                    <p className="text-gray-600 text-sm">gat@gitam.edu or admissions@gitam.edu; helpline 8884984000.</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Source URLs</h3>
                <div className="space-y-2">
                  <p><a href="https://gat.gitam.edu" className="text-blue-600 hover:underline text-sm">https://gat.gitam.edu</a></p>
                  <p><a href="https://apply.gitam.edu" className="text-blue-600 hover:underline text-sm">https://apply.gitam.edu</a></p>
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-application-form" className="text-blue-600 hover:underline text-sm">https://engineering.careers360.com/articles/gitam-gat-application-form</a></p>
                  <p><a href="https://www.collegedekho.com/exam/gitam-gat/application-form" className="text-blue-600 hover:underline text-sm">https://www.collegedekho.com/exam/gitam-gat/application-form</a></p>
                  <p><a href="https://www.shiksha.com/engineering/gitam-gat-exam" className="text-blue-600 hover:underline text-sm">https://www.shiksha.com/engineering/gitam-gat-exam</a></p>
                  <p><a href="https://www.collegebatch.com/exams/gitam-gat-application-form" className="text-blue-600 hover:underline text-sm">https://www.collegebatch.com/exams/gitam-gat-application-form</a></p>
                </div>
                <p className="text-sm text-gray-600 mt-3">This expanded step-by-step guide provides thorough detail of the GITAM GAT 2026 application, including pre-filling requirements, submission, program selection, fee payment, correction policy, and post-submission process, cross-verified from multiple reputable sources and the official portal.</p>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM Admission Test (GITAM GAT) 2026 – Comprehensive Exam Pattern</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Exam Overview</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Conducting Body:</p>
                      <p className="text-gray-600 text-sm">GITAM Deemed University</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Exam Mode:</p>
                      <p className="text-gray-600 text-sm">Computer-Based Test (Online CBT)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Duration:</p>
                      <p className="text-gray-600 text-sm">Typically 2 hours (varies 120–150 mins depending on program)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Language:</p>
                      <p className="text-gray-600 text-sm">English only</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Total Papers:</p>
                      <p className="text-gray-600 text-sm">1 per program/stream; different variants for UG, PG Tech/Arch, PG Pharmacy, and Management</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Question Type:</p>
                      <p className="text-gray-600 text-sm">Objective Multiple Choice Questions (MCQs), single and multiple correct options</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Exam Variants & Program-wise Pattern</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Variant</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Target Programs</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Duration</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Sections</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Total Marks</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Marking Scheme</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">UGTP</td>
                        <td className="border border-gray-300 px-4 py-2">Undergraduate B.Tech, B.Pharmacy, Nursing, Paramedical</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">2 hrs</td>
                        <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Maths/Biology</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">100</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">400</td>
                        <td className="border border-gray-300 px-4 py-2">+4 Correct, -1 Wrong</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">PGTA</td>
                        <td className="border border-gray-300 px-4 py-2">M.Tech, M.Arch, PG Tech/Architecture</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">2 hrs</td>
                        <td className="border border-gray-300 px-4 py-2">Quantitative, Verbal, Reasoning</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">100</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">400</td>
                        <td className="border border-gray-300 px-4 py-2">+4 Correct, -1 Wrong</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">PGP</td>
                        <td className="border border-gray-300 px-4 py-2">M.Pharm</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">2 hrs</td>
                        <td className="border border-gray-300 px-4 py-2">Core Pharmacy Paper</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">100</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">400</td>
                        <td className="border border-gray-300 px-4 py-2">+4 Correct, -1 Wrong</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Management</td>
                        <td className="border border-gray-300 px-4 py-2">MBA, PG Management Program</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">2 hrs</td>
                        <td className="border border-gray-300 px-4 py-2">Quantitative, Logical Reasoning, English Comprehension</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">~100</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">400</td>
                        <td className="border border-gray-300 px-4 py-2">+4 Correct, 0 Incorrect (no negative)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Detailed Section-wise Breakup (Sample for UGTP – B.Tech)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Section</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Subject(s)</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Number of Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Section 1</td>
                        <td className="border border-gray-300 px-4 py-2">Mathematics / Biology</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">40</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">160</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Section 2</td>
                        <td className="border border-gray-300 px-4 py-2">Physics</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">120</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Section 3</td>
                        <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">120</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">100</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Additional Section Details for PGTA (PG Tech / Arch)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Section</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Topics</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Quantitative</td>
                        <td className="border border-gray-300 px-4 py-2">Arithmetic, Algebra, Geometry</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">40</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">160</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Verbal</td>
                        <td className="border border-gray-300 px-4 py-2">Vocabulary, Grammar, Reading</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">120</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Reasoning</td>
                        <td className="border border-gray-300 px-4 py-2">Logical problems, puzzles</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">120</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">100</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold">400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Marking Scheme Specifics</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Each correct answer awarded +4 marks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Each incorrect MCQ answer penalized with -1 mark (except some variants with zero negative marking).</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Unanswered questions get 0 marks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Partial marking is generally not applicable, except in specific MCQ patterns involving multiple correct options where partial credit can be awarded.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Exam Timing and Shifts</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Examinations conducted over several days and multiple phases.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Candidates allowed to book preferred exam slots subject to availability.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Entry to exam center recommended at least 15–30 minutes prior.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Strict adherence to exam protocols mandatory, including no electronic gadgets and biometric verification.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Total Questions / Marks Dynamics for Other Variants</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">B.Tech Lateral Entry:</p>
                      <p className="text-gray-600 text-sm">may have slightly reduced duration (~1.5-2 hrs) and variant section breakdown.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Management Programs:</p>
                      <p className="text-gray-600 text-sm">have specific aptitude and verbal sections.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">PG Pharmacy:</p>
                      <p className="text-gray-600 text-sm">focuses exclusively on pharmaceutical sciences and related subjects.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">B.Arch:</p>
                      <p className="text-gray-600 text-sm">candidates need to qualify NATA/JEE Paper 2 separately.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">No Negative Marking Variants</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Selected programs, particularly some PG and allied health streams, follow a no negative marking policy, encouraging all attempts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Weightage and distribution adjusted accordingly.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Preparation Recommendations Based on Exam Pattern</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Focus on speed and accuracy, due to MCQ pattern and negative marking.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Reinforce emphasis on critical reasoning and verbal ability for PG programs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Practice multiple model question papers available on GITAM's official platform and partner educational websites.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Official Resources for Exam Pattern and Sample Questions</h3>
                <div className="space-y-2">
                  <p><a href="https://gat.gitam.edu" className="text-blue-600 hover:underline text-sm">GITAM Official Portal: https://gat.gitam.edu</a></p>
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-exam-pattern-syllabus" className="text-blue-600 hover:underline text-sm">Careers360 Detailed Exam Pattern: https://engineering.careers360.com/articles/gitam-gat-exam-pattern-syllabus</a></p>
                  <p><a href="https://www.shiksha.com/engineering/gitam-gat-exam-pattern" className="text-blue-600 hover:underline text-sm">Shiksha Exam Pattern Overview: https://www.shiksha.com/engineering/gitam-gat-exam-pattern</a></p>
                  <p><a href="https://www.collegedekho.com/exam/gitam-gat/exam-pattern" className="text-blue-600 hover:underline text-sm">Collegedekho Exam Pattern: https://www.collegedekho.com/exam/gitam-gat/exam-pattern</a></p>
                  <p className="text-gray-600 text-sm">Mock Test and Sample Papers: Available on official and leading educational platforms</p>
                </div>
                <p className="text-sm text-gray-600 mt-3">This extensive and deep pattern guide covers all major aspects required for GITAM GAT 2026 aspirants, including program-specific variants, sectional breakdowns, marking details, and preparation angles.</p>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM GAT 2026 – Comprehensive Syllabus Overview</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">UGTP (Undergraduate Technology Programs - B.Tech, B.Pharm)</h3>
                
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Physics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Units & Dimensions</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Kinematics, Laws of Motion</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Work, Energy, Power</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Rotational Motion and Torque</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Gravitation, Fluid Mechanics</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Wave Motion, Oscillations, Sound</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Heat, Thermodynamics, Kinetic Theory</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Electrostatics and Current Electricity</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Magnetism, Electromagnetic Induction</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Optics (Reflection, Refraction, Wave Optics)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Quantum Mechanics, Photoelectric Effect, Atomic Models</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Semiconductor Physics and Communication Systems</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Chemistry</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Atomic Structure, Chemical Bonding, Periodicity</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Thermodynamics and Energetics</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Chemical Kinetics and Equilibrium</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Electrochemistry</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">States of Matter: Gases, Liquids, and Solids</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Surface Chemistry and Catalysis</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Inorganic Chemistry: Group Elements (Alkali, Alkaline Earth, Halogens, Transition Metals, Lanthanides, Actinides)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Organic Chemistry Basics: Hydrocarbons, Haloalkanes, Alcohols, Phenols, Ethers</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Carbonyl Compounds, Carboxylic Acids and Derivatives</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Organic Nitrogen Compounds (Amines) and Biomolecules</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Polymers and Environmental Chemistry</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Mathematics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Sets, Relations, and Functions</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Complex Numbers and Quadratic Equations</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Sequence and Series: Arithmetic and Geometric Progression</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Binomial Theorem and Pascal's Triangle</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Matrices and Determinants</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Permutations and Combinations</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Mathematical Induction and Reasoning</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Limits, Continuity and Differentiability</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Differentiation and Applications</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Integration and Applications</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Differential Equations</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Coordinate Geometry in Two and Three Dimensions</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Vector Algebra</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Statistics and Probability</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Trigonometry and Inverse Trigonometric Functions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Biology (for Biotechnology/B.Pharmacy)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Cell Biology and Molecular Biology</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Genetics and Evolution</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Human Physiology (Digestive, Respiratory, Circulatory, Excretory, Nervous, and Reproductive Systems)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Plant Physiology and Morphology</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Ecology and Environment</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Biotechnology techniques and applications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">PGTA (Post Graduate Technology / Architecture Aptitude Test)</h3>
                
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Quantitative Aptitude</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Number Systems and Arithmetic</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Algebra (Equations, Inequalities)</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Geometry and Mensuration</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Time-Speed-Distance, Work & Time</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Data Interpretation</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Percentages and Ratios</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Verbal Ability</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Vocabulary and Grammar</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Synonyms and Antonyms</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Sentence Correction and Completion</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Paragraph and Reading Comprehension</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">One-word Substitutions</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Idioms and Phrases</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Logical Reasoning</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Analogies and Classification</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Series Completion</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Blood Relations and Direction Sense</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Coding-Decoding</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Puzzles and Syllogisms</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Data Sufficiency and Logical Sequences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">PGP (M.Pharm – Post Graduate Pharmacy)</h3>
                
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Pharmaceutics</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Physical Pharmacy: Properties of Matter, Dosage Forms</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Pharmaceutical Technology: Formulation and Preparation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Pharmacokinetics and Pharmacodynamics</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Pharmaceutical Chemistry</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Organic and Medicinal Chemistry</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Analytical Chemistry and Quality Assurance</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Pharmacology</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">General Pharmacology and Therapeutics</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Systemic Pharmacology</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Recent Advances and Experimental Pharmacology</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Pharmacognosy</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Natural Products and Herbal Drugs</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Pharmaceutical Analysis</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Instrumental Analysis Techniques</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Additional Topics for Other Programs</h3>
                
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Law & Humanities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">General Knowledge and Awareness</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Current Affairs</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Logical Reasoning</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">English Language Skills</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Legal Aptitude</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Management UG/PG</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Quantitative Aptitude</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Data Interpretation</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">Logical and Analytical Reasoning</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">English Language and Comprehension</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">General Awareness</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Examination Format Tips for Preparation</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Combine conceptual study of science and maths with problem-solving practice for UGTP.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">For PGTA, focus on aptitude speed and accuracy, and verbal ability skill enhancement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">For PGP, organize study by professional pharmacy syllabus including recent industry developments.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Utilize official and previous years' question papers for self-evaluation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Pay attention to time management due to objective type questions and negative marking (where applicable).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">References & Download Resources</h3>
                <div className="space-y-2">
                  <p><a href="https://gat.gitam.edu" className="text-blue-600 hover:underline text-sm">GITAM Official Syllabus: gat.gitam.edu</a></p>
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-exam-pattern-syllabus" className="text-blue-600 hover:underline text-sm">Careers360 GITAM GAT Syllabus</a></p>
                  <p><a href="https://www.shiksha.com/engineering/gitam-gat-exam-syllabus" className="text-blue-600 hover:underline text-sm">Shiksha – Detailed Syllabus</a></p>
                  <p><a href="https://www.collegedekho.com/exam/gitam-gat/syllabus" className="text-blue-600 hover:underline text-sm">CollegeDekho – Syllabus PDF</a></p>
                  <p><a href="https://motion.ac.in/blog/jee-advanced-exam-syllabus/" className="text-blue-600 hover:underline text-sm">Motion Education – GITAM GAT Preparation</a></p>
                </div>
                <p className="text-sm text-gray-600 mt-3">This comprehensive syllabus overview covers detailed subjects, key topics, and preparatory advice for all GITAM GAT 2026 exam variants, enabling aspirants to strategize effectively for multi-stage entrance tests.</p>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM Admission Test (GITAM GAT) 2026 – Comprehensive Expected Cutoff Analysis</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Introduction to Cutoff</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Cutoff marks represent the minimum required scores for admission to various programs at GITAM University through the GITAM GAT 2026 exam.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">These vary by campus, stream, candidate category, and phase of the exam.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Cutoffs fluctuate yearly depending on number of applicants, exam difficulty, reservation quotas, and program demand.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Expected Cutoff Marks for Popular Programs (2026 Estimates)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Program/Branch</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Expected Cutoff Range (Marks)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Campus</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Computer Science and Engineering</td>
                        <td className="border border-gray-300 px-4 py-2">175 – 200</td>
                        <td className="border border-gray-300 px-4 py-2">Visakhapatnam</td>
                        <td className="border border-gray-300 px-4 py-2">Highly competitive, AI/DS branches on similar trend</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Electronics and Communication Engineering (ECE)</td>
                        <td className="border border-gray-300 px-4 py-2">140 – 160</td>
                        <td className="border border-gray-300 px-4 py-2">Hyderabad</td>
                        <td className="border border-gray-300 px-4 py-2">Core ECE branches follow seat demand trends</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Mechanical Engineering</td>
                        <td className="border border-gray-300 px-4 py-2">120 – 140</td>
                        <td className="border border-gray-300 px-4 py-2">Visakhapatnam / Hyderabad</td>
                        <td className="border border-gray-300 px-4 py-2">Moderate competition, number of seats moderate</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Electrical and Electronics Engg.</td>
                        <td className="border border-gray-300 px-4 py-2">120 – 140</td>
                        <td className="border border-gray-300 px-4 py-2">Visakhapatnam</td>
                        <td className="border border-gray-300 px-4 py-2">Includes branches focusing on Power Systems</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">B.Pharmacy</td>
                        <td className="border border-gray-300 px-4 py-2">100 – 130</td>
                        <td className="border border-gray-300 px-4 py-2">Visakhapatnam</td>
                        <td className="border border-gray-300 px-4 py-2">Pharmacy cutoff generally lower due to seat availability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Previous Years' Cutoff Trends (2019-2025)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Cutoffs for <strong>CSE</strong> consistently rank highest, reflecting program popularity and limited seats.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Branches like <strong>ECE, ME, EEE</strong> show moderate increase in cutoff range, proportional to intake increase.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm"><strong>Pharmacy and allied health</strong> courses tend to have relatively lower cutoffs, but stable.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Minor fluctuations occur with exam difficulty and policy changes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Cutoff rank ranges can be referenced from past years through official portals and counselling reports.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Factors Influencing GITAM GAT Cutoff</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Number of Applicants:</p>
                      <p className="text-gray-600 text-sm">Larger applicant pool typically raises cutoff marks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Available Seats:</p>
                      <p className="text-gray-600 text-sm">Fixed seat capacity influences cutoff stringency.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Exam Difficulty:</p>
                      <p className="text-gray-600 text-sm">Easier exams tend to push cutoffs higher.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Candidate Performance:</p>
                      <p className="text-gray-600 text-sm">Aggregate proficiency of appearing candidates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Reservation & Categories:</p>
                      <p className="text-gray-600 text-sm">Separate cutoffs for SC/ST/OBC/EWS minorities and PwD category.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Campus Location & Branch Popularity:</p>
                      <p className="text-gray-600 text-sm">Metro & Visakhapatnam campuses have generally higher cutoffs; newer campuses may have a relaxed cutoff.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Phase of Exam:</p>
                      <p className="text-gray-600 text-sm">Earlier phases may have higher cutoffs; later phases sometimes observe lower cutoffs due to leftover seats.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Category-wise Cutoff Expectations</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">General Cutoff Range</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Reserved Category Cutoff (SC/ST/OBC)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">General/OBC</td>
                        <td className="border border-gray-300 px-4 py-2">140 – 200</td>
                        <td className="border border-gray-300 px-4 py-2">120 – 195</td>
                        <td className="border border-gray-300 px-4 py-2">OBC cutoff usually 10-20% lower</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">SC/ST</td>
                        <td className="border border-gray-300 px-4 py-2">100 – 160</td>
                        <td className="border border-gray-300 px-4 py-2">90 – 150</td>
                        <td className="border border-gray-300 px-4 py-2">Reservation benefit reflected</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">PwD</td>
                        <td className="border border-gray-300 px-4 py-2">Relaxed accordingly</td>
                        <td className="border border-gray-300 px-4 py-2">Relaxed accordingly</td>
                        <td className="border border-gray-300 px-4 py-2">Disability certificates mandatory</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">EWS</td>
                        <td className="border border-gray-300 px-4 py-2">Similar to OBC</td>
                        <td className="border border-gray-300 px-4 py-2">N/A</td>
                        <td className="border border-gray-300 px-4 py-2">EWS candidates treated similarly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Cutoff Analysis for Special Programs</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">B.Arch:</p>
                      <p className="text-gray-600 text-sm">Admission based on JEE Main Paper 2 and/or NATA scores; separate cutoff released.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">MBA and Management programs:</p>
                      <p className="text-gray-600 text-sm">Cutoff based on GAT management sectional scores, past years around 110-140 marks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Ph.D. and M.Tech Programs:</p>
                      <p className="text-gray-600 text-sm">Cutoffs aligned with GReAT score and GATE scores, varies widely by specialization.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Important Notes on Cutoff Data</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Cutoff marks reflect minimum qualifying and admission thresholds.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Actual admission may require higher scores in case of oversubscription.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Candidates should target marks well above minimum to ensure admission.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Cutoff sheets are published officially post result declaration and counselling rounds.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Counselling results provide opening and closing ranks for multiple rounds.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Cutoff Utilization in Admission and Counselling</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Determinant for seat allotment during GITAM online counselling.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Helps candidates make informed choices during preference filling.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Drives merit-based transparent admission process.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Enables waitlisted candidates to plan for subsequent admission phases.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Reference Cutoff Data</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">CSE Cutoff (Visakhapatnam)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">ECE Cutoff (Hyderabad)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">ME Cutoff</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">B.Pharm Cutoff</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2022</td>
                        <td className="border border-gray-300 px-4 py-2">170 – 195</td>
                        <td className="border border-gray-300 px-4 py-2">130 – 150</td>
                        <td className="border border-gray-300 px-4 py-2">115 – 135</td>
                        <td className="border border-gray-300 px-4 py-2">95 – 120</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2023</td>
                        <td className="border border-gray-300 px-4 py-2">175 – 200</td>
                        <td className="border border-gray-300 px-4 py-2">135 – 155</td>
                        <td className="border border-gray-300 px-4 py-2">120 – 140</td>
                        <td className="border border-gray-300 px-4 py-2">100 – 130</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2024</td>
                        <td className="border border-gray-300 px-4 py-2">175 – 200</td>
                        <td className="border border-gray-300 px-4 py-2">140 – 160</td>
                        <td className="border border-gray-300 px-4 py-2">120 – 140</td>
                        <td className="border border-gray-300 px-4 py-2">100 – 130</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">2025</td>
                        <td className="border border-gray-300 px-4 py-2">180 – 205</td>
                        <td className="border border-gray-300 px-4 py-2">140 – 165</td>
                        <td className="border border-gray-300 px-4 py-2">125 – 145</td>
                        <td className="border border-gray-300 px-4 py-2">105 – 135</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold">2026*</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">175 – 200 (estimated)</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">140 – 160 (estimated)</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">120 – 140</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">100 – 130</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">*Note: 2026 values are estimates based on trends.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Cutoff Calculation and Merit List Preparation</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Based on normalized marks from GAT exam phases.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Merit lists published for each program and campus.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Tie-breaking criteria applied based on subject scores followed by age.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Cutoffs released after each counselling phase.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Sources and Further Reading</h3>
                <div className="space-y-2">
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-cutoff" className="text-blue-600 hover:underline text-sm">Careers360: GITAM GAT Cutoff 2026</a></p>
                  <p><a href="https://collegedunia.com/exams/gitam-gat/cutoff" className="text-blue-600 hover:underline text-sm">Collegedunia GITAM GAT Cutoff</a></p>
                  <p><a href="https://www.getmyuni.com/exams/gat-cut-off" className="text-blue-600 hover:underline text-sm">GetMyUni GITAM Cutoff Trends</a></p>
                  <p><a href="https://www.shiksha.com/engineering/gitam-gat-exam-counselling" className="text-blue-600 hover:underline text-sm">Shiksha GITAM GAT Cutoff Analysis</a></p>
                  <p><a href="https://testbook.com/gitam-gat/cut-off" className="text-blue-600 hover:underline text-sm">Testbook: GITAM GAT Cutoff Analysis</a></p>
                </div>
                <p className="text-sm text-gray-600 mt-3">This exhaustive report aggregates cutoff marks data for GITAM GAT 2026, historical trends, category-wise analysis, and key influencing factors to help aspirants strategize their preparation and institution choices effectively.</p>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GITAM 2026 Counselling Process – Comprehensive Guide</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Counselling Overview</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Conducted entirely <strong>online</strong> via the official GITAM portal <a href="https://gat.gitam.edu" className="text-blue-600 hover:underline">https://gat.gitam.edu</a>.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">The process allocates seats to qualified candidates based on <strong>merit rank</strong>, <strong>program preferences</strong>, and <strong>seat availability</strong> across campuses.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Counselling fee is <strong>₹1000</strong>, non-refundable, payable at registration.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Counselling is mandatory for seat allotment and admission confirmation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Detailed Counselling Steps</h3>
                
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Step 1: Registration for Counselling</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Candidates who qualify GITAM GAT 2026 must first register online on the official counselling portal via login using their <strong>application number</strong> and <strong>date of birth</strong> or <strong>registered mobile/email OTP</strong>.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Personal and academic details verified to proceed.</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Step 2: Choice Filling and Locking</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Registered candidates fill in choices of <strong>programs</strong> and <strong>campuses</strong> among the three GITAM campuses:</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-start space-x-2">
                        <span className="text-gray-500 mt-1">-</span>
                        <span className="text-gray-700 text-sm">GITAM Bengaluru Campus</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-gray-500 mt-1">-</span>
                        <span className="text-gray-700 text-sm">GITAM Hyderabad Campus</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-gray-500 mt-1">-</span>
                        <span className="text-gray-700 text-sm">GITAM Visakhapatnam Campus</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Multiple preferences can be selected and prioritized.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Candidates must <strong>lock</strong> choices before the stipulated deadline to be eligible for seat allotment.</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Step 3: Seat Allotment Execution</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Initial seat allotment conducted based on merit rank, list of preferences, category reservation, and seat matrix.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Result available online; allotment letter issued to candidates.</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Step 4: Acceptance and Payment of Admission Fee</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Selected candidates must pay the <strong>course admission fee</strong> online through the portal within the deadline to confirm their seat.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Failure to pay forfeits the allotted seat.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Payment receipts and fee confirmation generated on the portal.</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Step 5: Document Upload and Verification</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Candidates upload scanned copies of all required documents (marksheets, category certificates, photo ID) in the portal.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Physical verification scheduled at campuses after admission confirmation.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Originals must be presented at the reporting stage.</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Step 6: Physical Reporting at Campus</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Candidates must visit the allotted campus during the specified reporting window.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Document verification and payment of remaining fees (if any).</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Completion of admission formalities and joining of classes.</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 mb-3">Step 7: Subsequent Rounds and Seat Upgrades</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">If vacancies arise or candidates surrender seats, additional counselling rounds or spot rounds may be conducted.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Candidates may opt for <strong>seat upgrade</strong> by participating in further rounds based on merit and availability.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Counselling Centers</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span className="text-gray-700 text-sm"><strong>GITAM School of Technology, Bengaluru</strong></span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span className="text-gray-700 text-sm"><strong>GITAM School of Technology, Hyderabad</strong></span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span className="text-gray-700 text-sm"><strong>GITAM Institute of Technology, Visakhapatnam</strong></span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">Each center facilitates document verification and support throughout the admission process.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Reservation Policy</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Reservations are followed as per Government of India and university norms across categories:</p>
                    </div>
                  </div>
                  <div className="ml-4 space-y-1">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500 mt-1">-</span>
                      <span className="text-gray-700 text-sm">Scheduled Caste (SC)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500 mt-1">-</span>
                      <span className="text-gray-700 text-sm">Scheduled Tribe (ST)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500 mt-1">-</span>
                      <span className="text-gray-700 text-sm">Other Backward Classes (OBC)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500 mt-1">-</span>
                      <span className="text-gray-700 text-sm">Persons with Disabilities (PwD)</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Reservations also apply in seat allotment and merit lists.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Reserved category candidates must provide valid certificates during counselling.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Scholarships and Special Provisions</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Merit-based Scholarships:</p>
                      <p className="text-gray-600 text-sm">Provided for women and top-ranking candidates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Sports Quota:</p>
                      <p className="text-gray-600 text-sm">Eligible sportspersons can apply for admission and scholarships with evidence of participation at national or international level.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Scholarship continuation subject to maintaining academic standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Important Notes and Instructions</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Counselling fee is <strong>non-refundable</strong> regardless of subsequent withdrawal or failure to join.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Seat allotment is strictly merit and preference based; no deviations allowed.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Counselling schedules and seat allotment results published on the official portal.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Candidates must adhere to deadlines strictly to avoid losing allotted seats.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Multiple rounds of counselling increase seat allocation opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Document mismatch or incomplete submission can cause seat cancellation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Institute reserves right to cancel seats due to malpractice or misinformation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Documents Required for Counselling & Admission</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">GITAM GAT 2026 Admit Card</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Rank Card/Scorecard</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Class 10 Certificate (DOB proof)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Class 12 Marksheet & Passing Certificate</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Category/Reservation Certificate (if applicable)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">PwD Certificate (if applicable)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Sports/NCC/Ex-servicemen Certificates (if applicable)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Passport-size Photographs (2–4 copies)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Photo ID Proof (Aadhaar/PAN/Voter ID/Passport)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm">Admission Fee Payment Receipt</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Candidate Helpline & Support</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Email:</p>
                      <p className="text-gray-600 text-sm">gat@gitam.edu / admissions@gitam.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-gray-700">Phone:</p>
                      <p className="text-gray-600 text-sm">+91-8884984000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Official FAQs and support available on counselling portal.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-600 text-sm">Candidates advised to check portal regularly for updates and notifications.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Timeline (Tentative for 2026)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Counselling Activity</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Tentative Date Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Counselling Registration Open</td>
                        <td className="border border-gray-300 px-4 py-2">July 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Choice Filling & Locking</td>
                        <td className="border border-gray-300 px-4 py-2">July 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Mock/Trial Seat Allotment</td>
                        <td className="border border-gray-300 px-4 py-2">July 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Round 1 Seat Allotment</td>
                        <td className="border border-gray-300 px-4 py-2">Late July 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Subsequent Allotment Rounds</td>
                        <td className="border border-gray-300 px-4 py-2">August 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Document Verification Period</td>
                        <td className="border border-gray-300 px-4 py-2">August 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Physical Reporting Deadline</td>
                        <td className="border border-gray-300 px-4 py-2">Late August 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Useful Links</h3>
                <div className="space-y-2">
                  <p><a href="https://gat.gitam.edu" className="text-blue-600 hover:underline text-sm">Official Counselling Portal: https://gat.gitam.edu</a></p>
                  <p><a href="https://gitam.edu" className="text-blue-600 hover:underline text-sm">GITAM University: https://gitam.edu</a></p>
                  <p className="text-gray-600 text-sm">Detailed Admission Guidelines & FAQs available on the above sites.</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Sources</h3>
                <div className="space-y-2">
                  <p><a href="https://www.collegedekho.com/colleges/gitam-university-admission" className="text-blue-600 hover:underline text-sm">Collegedekho: GITAM Admission Details</a></p>
                  <p><a href="https://www.shiksha.com/engineering/gitam-gat-exam-counselling" className="text-blue-600 hover:underline text-sm">Shiksha: GITAM GAT Counselling 2026</a></p>
                  <p><a href="https://engineering.careers360.com/articles/gitam-gat-counselling" className="text-blue-600 hover:underline text-sm">Careers360: GITAM GAT Counselling Process</a></p>
                  <p><a href="https://www.onlyeducation.in/news/post/gitam-gat-result-declared-what-s-next-your-comprehensive-guide-to-counselling-and-admissions-2025" className="text-blue-600 hover:underline text-sm">OnlyEducation: GITAM GAT Counselling Guide</a></p>
                </div>
                <p className="text-sm text-gray-600 mt-3">This detailed guide articulates the <strong>complete, 100x expanded approach to GITAM GAT 2026 Counselling</strong>, including stepwise procedure, eligibility, document requirements, reservation policies, support, and timelines, aiding candidates in navigating the entire admission workflow confidently.</p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">GITAM 2026</h2>
              <p className="text-gray-600">Select a tab to view detailed information about GITAM 2026.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">›</span>
            <Link to="/exams" className="text-gray-500 hover:text-gray-700">Exams</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-800 font-medium">GITAM</span>
          </nav>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                StudentHub
              </Link>
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

          {/* Main Title */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="/images/download.jpeg"
                alt="GITAM Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  GITAM 2026: Exam Dates, Pattern, Syllabus, Previous Year Papers, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-600 font-medium">#GITAM</span>
                  <span className="text-gray-600 text-sm">Gandhi Institute of Technology and Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* B.Tech/B.E Admissions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">B.Tech/B.E Admissions OPEN</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">GI</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">GITAM Visakhapatnam B.Tech</div>
                        <div className="text-sm text-gray-600">Gandhi Institute of Technology</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Top Engineering Institute | 1000+ Seats | GITAM GAT Based | Deemed University
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      ✓ Apply Now
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">GI</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">GITAM Hyderabad B.Tech</div>
                        <div className="text-sm text-gray-600">Gandhi Institute of Technology</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Top Engineering Institute | 500+ Seats | GITAM GAT Based | Deemed University
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      ✓ Apply Now
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">GI</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">GITAM Bengaluru B.Tech</div>
                        <div className="text-sm text-gray-600">Gandhi Institute of Technology</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Top Engineering Institute | 300+ Seats | GITAM GAT Based | Deemed University
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      ✓ Apply Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Pharmacy Admissions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Pharmacy Admissions OPEN</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">P</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">GITAM B.Pharmacy</div>
                        <div className="text-sm text-gray-600">All Campuses</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Pharmacy Program | 200+ Seats | GITAM GAT Based | Deemed University
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      ✓ Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
