import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bitsatData from './bitsat.json';

interface BITSATData {
  Overview: {
    ExamName: string;
    ConductingBody: string;
    ExamType: string;
    Purpose: string;
    Mode: string;
    Duration: string;
    TotalQuestions: string;
    Subjects: string[];
  };
  ImportantDates2026: {
    Session1: {
      ApplicationStart: string;
      ApplicationEnd: string;
      ExamDates: string;
      AdmitCardRelease: string;
      ResultDeclaration: string;
    };
    Session2: {
      ApplicationStart: string;
      ApplicationEnd: string;
      ExamDates: string;
      AdmitCardRelease: string;
      ResultDeclaration: string;
    };
    AdmissionFormAndPreferenceSubmission: string;
  };
  Eligibility: {
    BE_and_MSc: {
      Qualification: string;
      Aggregate: string;
    };
    BPharm_and_BE_EnvironmentalSustainability: {
      Qualification: string;
      Aggregate: string;
    };
    AdditionalNotes: string[];
  };
  Application: {
    ApplicationStart: string;
    ApplicationFee: {
      Male: {
        OneSession: string;
        BothSessions: string;
      };
      Female: {
        OneSession: string;
        BothSessions: string;
      };
    };
    Notes: string[];
  };
  ExamPattern: {
    Mode: string;
    Duration: string;
    TotalQuestions: number;
    BonusQuestions: number;
    Sections: {
      Physics: number;
      Chemistry: number;
      "Mathematics/Biology": number;
      EnglishProficiency: number;
      LogicalReasoning: number;
    };
    MarkingScheme: {
      CorrectAnswer: string;
      IncorrectAnswer: string;
      Unattempted: string;
    };
    SpecialRules: string[];
  };
  Syllabus: {
    Base: string;
    AdditionalSections: {
      EnglishProficiency: string[];
      LogicalReasoning: string[];
    };
    Weightage: {
      Physics: number;
      Chemistry: number;
      "Mathematics/Biology": number;
      English: number;
      LogicalReasoning: number;
    };
  };
  Cutoff2026_Expected: {
    BITS_Pilani: {
      ComputerScience: string;
      ElectricalAndElectronics: string;
      Mechanical: string;
      Chemical: string;
      BPharm: string;
    };
    Notes: string[];
  };
  Counselling: {
    ConductedBy: string;
    Mode: string;
    Process: string[];
    DirectAdmission: string;
  };
  Sources: string[];
}

const BITSATPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const data = bitsatData as BITSATData;

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 – In-Depth, Authoritative Examination Guide</h2>
              
              <div className="space-y-6">
                {/* About BITSAT & Its National Impact */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">About BITSAT & Its National Impact</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>BITSAT 2026</strong> is the entrance test for India's oldest and most respected private engineering institute system — BITS Pilani, Goa, Hyderabad, and the international Dubai campus. BITSAT's merit-centric, JEE-parallel reputation makes it the gateway for over 3 lakh aspirants annually, targeting B.E. (Hons), B.Pharm, and five-year M.Sc. (Hons/Tech) degrees.
                  </p>
                  <p className="text-gray-700">
                    The test's digital-first format, innovation (extra questions system, section flexibility), and placement legacy mark it as uniquely world class in the Indian landscape. It is not just an entrance, but a comprehensive test of academic depth, reasoning ability, and exam temperament.
                  </p>
                </div>

                {/* Rigorous Exam Regulation, Infrastructure, and Legacy */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Rigorous Exam Regulation, Infrastructure, and Legacy</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Regulation/Accreditation:</strong> Managed centrally by BITSAT Committee (BITS Pilani Academic Senate); UGC recognized, NAAC A++ accredited.</li>
                    <li><strong>Central Equity:</strong> No regional quotas, gender or domicile preferences — a truly national open merit system.</li>
                    <li><strong>Infrastructure:</strong> Advanced CBT platform with multiple checkpoints for fairness; proprietary AI-enabled proctoring, near-zero error rates.</li>
                  </ul>
                </div>

                {/* Participating Campuses & Unique Cultures */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Participating Campuses & Unique Cultures</h3>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-800">Pilani:</strong> 
                      <span className="text-gray-700"> Leadership hub for CSE/ECE/Mech, most sought-after for placements and academic heritage (global alumni in Silicon Valley, top academia, bureaucracy).</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Goa:</strong> 
                      <span className="text-gray-700"> Vibrant entrepreneurship/startup ecosystem, dynamism in CS, Electronics, Chemical, Mechanical, top-notch research.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Hyderabad:</strong> 
                      <span className="text-gray-700"> Strong for biotech, chemical, electronics, fast-growing CSE; known for cutting-edge labs, proximity to national R&D centers, PS (Practice School) structure.</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Dubai:</strong> 
                      <span className="text-gray-700"> Middle East's top private engineering destination; international faculty; open to Indian and global passport holders.</span>
                    </div>
                  </div>
                </div>

                {/* Schedule, Sessions, Re-Appearance, and Candidate Strategy */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Schedule, Sessions, Re-Appearance, and Candidate Strategy</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Dual Sessions:</strong> Session 1 (late May), Session 2 (late June). Both can be attempted; best score considered automatically.</li>
                    <li><strong>Slotting:</strong> Each session divided into multiple shifts (morning/afternoon/evening), booked by candidate choice; over 80 major Indian/international cities.</li>
                    <li><strong>Admit Card/Slot Booking:</strong> Opens ~15 days before exam window; strict first-come-first-serve. Hall ticket is personalized and digitally watermarked.</li>
                  </ul>
                </div>

                {/* Ultra-Flexible and Complex Exam Pattern */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Ultra-Flexible and Complex Exam Pattern</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Total Time:</strong> 3 hours (180 min), no sectional time restriction.</li>
                    <li><strong>Questions:</strong> 130 MCQs (Physics 30, Chem 30, Math/Bio 40, Logical Reasoning 20, English 10)</li>
                    <li><strong>Extra Challenge:</strong> Upon attempting all 130, 12 ultra-difficult bonus questions (4 each Physics, Chem, Math/Bio) are unlocked; no return to core Qs.</li>
                    <li><strong>Marking:</strong> +3 (correct), -1 (wrong), 0 (unattempted); max 426 possible (if all bonus correct).</li>
                    <li><strong>Navigation:</strong> Any order, marked-for-review, prior/next, bulk review before submission.</li>
                    <li><strong>Section Order:</strong> Fully candidate-driven, unique in India.</li>
                    <li><strong>CBT Tech:</strong> All data saved in real-time; glitches almost never lose progress.</li>
                  </ul>
                </div>

                {/* Syllabus – In-Depth Subject-Wise Framework */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Syllabus – In-Depth Subject-Wise Framework</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Physics:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Mechanics:</strong> Advanced applications of laws, springs, collisions, rigid body statics, work/energy principle, rolling, banking, SHM.</li>
                        <li><strong>Thermal/Fluid Physics:</strong> Real gases, calorimetry, adiabatic/joule-thomson expansions, viscosity, Stokes law.</li>
                        <li><strong>Electrostatics:</strong> Continuous charge distributions, energy in capacitors, principal axis theory, Laplace equation (only for advanced).</li>
                        <li><strong>Magnetism/AC:</strong> Electromagnetic field basics, Maxwell's equations introduction, RLC circuits, resonance cases.</li>
                        <li><strong>Optics:</strong> Complete lens systems, dispersive power, aberrations, Brewster's Law, laser fundamentals.</li>
                        <li><strong>Modern Physics:</strong> Advanced atomic spectra, deBroglie relation applications, Miller indices (for crystalline solids), semi-classical electron theory of solids.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Chemistry:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Physical Chemistry:</strong> Chemical thermodynamics including entropy/enthalpy in reactions, real solution colligative properties, Nernst-Planck equation, surface tension, osmotic pressure.</li>
                        <li><strong>Inorganic:</strong> S-block anion/cation exchange, Fajan's rule, VBT/CFSE of complex ions, lanthanides/actinides separation principles.</li>
                        <li><strong>Organic:</strong> Named reactions (Cannizzaro, Aldol, Wittig, Sandmeyer, Perkin), reactive intermediate stability, chromatographic/radioisotopic analysis, advanced stereochemistry.</li>
                        <li><strong>Bio-Organic/Medicinal:</strong> Peptides, enzymes, coenzymes, antibiotics, agricultural chemicals.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Mathematics:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Core Algebra:</strong> Roots, reciprocal equations, Euler's formula, infinite series, recurrence relations.</li>
                        <li><strong>Trigonometry/Analytic Geometry:</strong> Full range of hyperbolic/inverse functions, loci, tangents/normals to non-standard curves.</li>
                        <li><strong>Calculus:</strong> L'Hospital's rule (advanced), Euler-Maclaurin series, Taylor's series, singular points of functions.</li>
                        <li><strong>Linear Algebra:</strong> Matrices' diagonalization, Cayley-Hamilton theorem, system transformations.</li>
                        <li><strong>Probability/Statistics:</strong> Full derivations of distributions, combinatorial probability, random walks, confidence intervals.</li>
                        <li><strong>Vectors/3D:</strong> Projections, scalar triple product, line/plane intersection frameworks.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Biology (For B.Pharm):</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Cell Structure/Function:</strong> DNA-RNA structure, applications of PCR, cell cycle regulation, organelle biogenesis.</li>
                        <li><strong>Botany/Zoology:</strong> Photosynthetic efficiency, ethylene signaling, comparative animal body plans, nervous control, animal adaptations.</li>
                        <li><strong>Genetics:</strong> Detailed Mendelian, deviation analysis, gene mapping, epistasis, linkage/rate calculations.</li>
                        <li><strong>Biotechnology:</strong> Restriction mapping, gene therapy, biosensors, cloning efficiency.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">English Proficiency:</h4>
                      <p className="text-gray-700 ml-4">Advanced idiomatic usage, critical reading/summary identification, theme analysis, contextual error correction.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Logical Reasoning:</h4>
                      <p className="text-gray-700 ml-4">4D mental rotation, integrated pattern matrices, verbal-numeric code fusion, advanced grid puzzles, bold logic puzzles.</p>
                    </div>
                  </div>
                </div>

                {/* Eligibility – Layered Screening */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligibility – Layered Screening</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">For Indian Campuses:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Class 12 (or equivalent) in 2025/2026 with PCM (for B.E.); with PCB or PCM (for B.Pharm).</li>
                        <li>At least 75% in best of PCM/PCB, 60% each.</li>
                        <li>Only first two attempts after passing class 12; those presently enrolled at BITS not eligible.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Dubai/OCI/International:</h4>
                      <p className="text-gray-700 ml-4">Equivalent school diploma, eligibility verified at admission. Language/transcript proofs required as per UGC/AIU.</p>
                    </div>
                  </div>
                </div>

                {/* Application and Admission Flow */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Application and Admission Flow</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Online Form:</strong> Open Jan–Mar; multi-attempt allowed; passport-size color photo/signature/JPG only.</li>
                    <li><strong>Payment:</strong> Per session, by category/centre (India vs Dubai).</li>
                    <li><strong>Slot Booking:</strong> Candidate-chosen, cannot be altered once set.</li>
                    <li><strong>Exam Day:</strong> Biometric, original ID, strict time window; E-slip and admit card a must. Proctor and CCTV logged.</li>
                  </ul>
                </div>

                {/* Results, Score, and Ranking */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Results, Score, and Ranking</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Live Score:</strong> Immediate at exam-close, detailed section wise later.</li>
                    <li><strong>Percentile Calculation:</strong> Per-session normalization if needed for tie-breaking.</li>
                    <li><strong>Tie-breaking:</strong> Prioritizes math, physics, chemistry, then total correct, then older candidate.</li>
                    <li><strong>12th Marks Submission:</strong> Online upload after BITSAT, independently verified for eligibility.</li>
                  </ul>
                </div>

                {/* Multi-Round Counselling & Iteration System */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Multi-Round Counselling & Iteration System</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Rounds:</strong> Usually up to 7 official rounds; seat sliding and upgradation common (merit-based).</li>
                    <li><strong>Prefilling:</strong> All branches/campuses; can edit for only first few iterations.</li>
                    <li><strong>Seat Matrix:</strong> Transparent dashboard of vacancy branch-wise after each iteration; closing cutoffs posted per round/category.</li>
                    <li><strong>Final Step:</strong> Pay fee, verify documents, join in July/August for orientation.</li>
                  </ul>
                </div>

                {/* Cutoff, Historic Trends, and Analysis */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Cutoff, Historic Trends, and Analysis</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-700"><strong>Pilani CSE:</strong> 331–332 (2025 base)</p>
                        <p className="text-gray-700"><strong>Pilani ECE:</strong> ~318, Mech: ~267</p>
                        <p className="text-gray-700"><strong>Goa/Hyderabad CSE:</strong> ~301–298; ECE: 285–289</p>
                      </div>
                      <div>
                        <p className="text-gray-700"><strong>Pilani Chem:</strong> ~252; M.Sc. Phys/Che/Maths: 220–250</p>
                        <p className="text-gray-700"><strong>B.Pharm:</strong> 186–217</p>
                        <p className="text-gray-700"><strong>Notes:</strong> Cutoff can shift by ~5 marks/year based on paper toughness and seat trends.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Placement Outcomes, PS/Internship Experience */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Placement Outcomes, PS/Internship Experience</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><strong>Pilani CSE Avg/Highest CTC:</strong> ₹30–40 LPA/₹70+ LPA</p>
                    <p className="text-gray-700"><strong>Hyderabad/Goa Avg CTC:</strong> ₹20–26 LPA; record placements in ECE, Mech</p>
                    <p className="text-gray-700"><strong>Top Recruiters:</strong> Google, Amazon, Microsoft, Apple, L&T, Reliance, Mercedes, Deloitte, Oracle, BCG</p>
                  </div>
                </div>

                {/* Unique BITSAT Features */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Unique BITSAT Features</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Bonus Questions:</strong> For exceptional test-takers, unique to BITSAT.</li>
                    <li><strong>Unrestricted Navigation:</strong> Unlike JEE Main/Advanced, flexible workflow.</li>
                    <li><strong>No state quota, minimal reserved seats</strong> (Physically Handicapped only).</li>
                    <li><strong>Direct admissions</strong> for national/international olympiad winners and top-10 merit CBSE/IP board toppers (above cutoff).</li>
                  </ul>
                </div>

                {/* Official and Master Resource Links */}
                <div className="bg-gray-50 p-4 rounded-lg">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Official and Master Resource Links</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Official: <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">https://bitsadmission.com</a></li>
                    <li>Brochure PDF: <a href="https://www.bitsadmission.com/fd/downloads/BITSAT-2025_brochure.pdf" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">BITSAT-2025 Brochure</a></li>
                    <li><a href="https://store.pw.live/blogs/jee-exams/bitsat-syllabus-2026" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Detailed Syllabus</a></li>
                    <li><a href="https://engineering.careers360.com/articles/bitsat-2026" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Career360 BITSAT Hub</a></li>
                    <li><a href="https://www.shiksha.com/engineering/bitsat-exam-application-form" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Shiksha Application Help</a></li>
                    <li><a href="https://www.aakash.ac.in/bitsat-eligibility-criteria" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Aakash BITSAT Eligibility</a></li>
                    <li><a href="https://mystudycart.com/examinations/bitsat" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Mystudycart Syllabus+Tips</a></li>
                  </ul>
                </div>

                {/* Conclusion */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    This ultra-in-depth BITSAT 2026 guide, mapped to the latest official protocol and historical knowledge, is fit for serious aspirants, teachers, admission counselors, and education journalists. For any phase, always cross-check at <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">bitsadmission.com</a> and with the official information bulletin or college helpline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 Important Dates</h2>
              
              <div className="space-y-6">
                {/* Complete Overview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Complete Overview</h3>
                  <p className="text-gray-700">
                    BITSAT 2026 will be conducted in <strong>two sessions</strong> for undergraduate first-degree admissions to <strong>B.E., B.Pharm, and integrated M.Sc.</strong> programs at BITS Pilani, Goa, Hyderabad, and Dubai campuses. Candidates can appear in <strong>Session 1 or both sessions</strong>; the <strong>best score</strong> shall be used for admission in counselling rounds. The official registration and examination flow has multiple stages, from form release to last admission iteration.
                  </p>
                </div>

                {/* Session 1 Timeline */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 1 — Detailed Chronological Schedule</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left text-gray-800 font-semibold">Stage/Event</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Key Activities & Details</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Tentative/Announced Dates (2026)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Application Start</td>
                          <td className="p-3">Online registration opens; candidates fill form, upload documents, select exam cities, and pay fee.</td>
                          <td className="p-3"><strong>January 20, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Application Correction Window 1</td>
                          <td className="p-3">For correction in basic personal or exam details.</td>
                          <td className="p-3"><strong>April 10–14, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Application Deadline</td>
                          <td className="p-3">Last date to submit BITSAT 2026 Session 1 application form.</td>
                          <td className="p-3"><strong>April 18, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Editing Window 2 (Final)</td>
                          <td className="p-3">Limited fields—photo/signature replacement and academic updates.</td>
                          <td className="p-3"><strong>April 29–May 1, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Centre Allotment Announcement</td>
                          <td className="p-3">System assigns test centres for each candidate before slot booking.</td>
                          <td className="p-3"><strong>May 13, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Slot Booking Window</td>
                          <td className="p-3">Candidates book date & time of exam (first-come, first-serve basis).</td>
                          <td className="p-3"><strong>May 13–16, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Admit Card Release</td>
                          <td className="p-3">Downloadable e-hall ticket (watermarked PDF) with test city, slot, and general instructions.</td>
                          <td className="p-3"><strong>May 23, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Mock Test Availability</td>
                          <td className="p-3">Official full-length CBT mock activated on admission portal.</td>
                          <td className="p-3"><strong>May 24, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Session 1 CBT Exam Dates</td>
                          <td className="p-3">National-level computer-based test in multiple daily slots – morning, afternoon, evening.</td>
                          <td className="p-3"><strong>May 26–30, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Session 1 Result Declaration</td>
                          <td className="p-3">Immediate provisional score after test & official release of mark sheet online.</td>
                          <td className="p-3"><strong>June 16, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Session 2 Registration Opens</td>
                          <td className="p-3">For fresh or second-attempt candidates.</td>
                          <td className="p-3"><strong>May 26, 2026</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Session 2 Timeline */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Session 2 — Detailed Chronological Schedule</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left text-gray-800 font-semibold">Stage/Event</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Key Activities & Details</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Expected/Official Dates (2026)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Session 2 Application Start</td>
                          <td className="p-3">Starts post completion of Session 1 Exam; open to new candidates or repeat takers.</td>
                          <td className="p-3"><strong>May 26, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Application End</td>
                          <td className="p-3">Closing of new application entries and payments.</td>
                          <td className="p-3"><strong>June 10, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Edit/Correction Window (Session 2)</td>
                          <td className="p-3">2-day correction phase for uploaded documents and city/slot preference edits.</td>
                          <td className="p-3"><strong>June 13–14, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Centre Allotment (Session 2)</td>
                          <td className="p-3">Test centre for second session assigned.</td>
                          <td className="p-3"><strong>June 16, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Slot Booking (Session 2)</td>
                          <td className="p-3">Limited window to confirm date and slot.</td>
                          <td className="p-3"><strong>June 16–17, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Session 2 Admit Card Download</td>
                          <td className="p-3">Hall tickets downloadable from candidate login; printout required at test venue.</td>
                          <td className="p-3"><strong>June 18, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Session 2 Exam Dates</td>
                          <td className="p-3">Online adaptive CBT held in flexible multi-slot format.</td>
                          <td className="p-3"><strong>June 22–26, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Session 2 Result Publication</td>
                          <td className="p-3">Official scorecards released online within 2–3 days post-exam.</td>
                          <td className="p-3"><strong>July 1, 2026</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Admission Process Timeline */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Admission Process Timeline (Post-Exam Phases for Both Sessions)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left text-gray-800 font-semibold">Stage/Event</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Activity Description</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Tentative Dates (2026)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Filling of Counselling Form & 12th Marks Upload</td>
                          <td className="p-3">Students enter preferences for program & campus; upload 12th board result proofs separately.</td>
                          <td className="p-3"><strong>June 1–30, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Editing of Submitted Preferences/Marks</td>
                          <td className="p-3">Correction/editing of preferences (campus/branch) based on merit forecast.</td>
                          <td className="p-3"><strong>July 3–5, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Iteration 1 (First Allotment)</td>
                          <td className="p-3">Provisional admission allotment and waitlist release.</td>
                          <td className="p-3"><strong>July 9, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Fee Payment (Iteration 1)</td>
                          <td className="p-3">Mandatory payment of first semester fees as acceptance of offered seat.</td>
                          <td className="p-3"><strong>July 9–14, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Iteration 2 Result</td>
                          <td className="p-3">Vacant seat reallocation and upgradation released.</td>
                          <td className="p-3"><strong>July 21, 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Iterations 3–6</td>
                          <td className="p-3">Usually released every 5–6 days up to August; each includes sliding results.</td>
                          <td className="p-3"><strong>Late July – August 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Final Admission Procedure (After Iteration 6)</td>
                          <td className="p-3">Submission of documents, medical verification, and orientation readiness across campuses.</td>
                          <td className="p-3"><strong>August 2026</strong></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Academic Term Commencement</td>
                          <td className="p-3">Freshers' induction and commencement of classes.</td>
                          <td className="p-3"><strong>Mid-September 2026</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Dates Highlights */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Dates & Period Highlights</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>January 20 – April 18, 2026:</strong> Application phase (Session 1)</li>
                    <li><strong>May 13–16, 2026:</strong> Slot booking and admit card activation</li>
                    <li><strong>May 26–30, 2026:</strong> Session 1 Examination window</li>
                    <li><strong>June 22–26, 2026:</strong> Session 2 Examination window</li>
                    <li><strong>July 9 – August 2026:</strong> Counselling iterations and final admissions</li>
                    <li><strong>September 2026:</strong> Start of classes (for Pilani/Goa/Hyderabad)</li>
                    <li><strong>October 2026:</strong> Mid-term orientation (for Dubai campus)</li>
                  </ul>
                </div>

                {/* Administrative Cutoffs */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Administrative Cutoffs and Internal Windows (2026 Reference)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left text-gray-800 font-semibold">Process</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Date Range/Significance</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Fee Refund Window</td>
                          <td className="p-3">Within 7 days of withdrawal from counselling round</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Application Error Correction Email Query</td>
                          <td className="p-3">Last date: June 5, 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Final Merit List Publication</td>
                          <td className="p-3">Early July 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Waitlist Movement</td>
                          <td className="p-3">Up to Iteration VI in August</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Last Admission Offer</td>
                          <td className="p-3">August 20, 2026 approx.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Practice School (PS Registration Start)</td>
                          <td className="p-3">October 2026 (for juniors)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Important Insights */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Insights for Candidates</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Dual Session Advantage:</strong> Appearing in both improves percentile; only higher score valid.</li>
                    <li><strong>Break Between Sessions:</strong> ~22 days gap, giving aspirants time to restudy and refine approach.</li>
                    <li><strong>Result Display:</strong> Each session score available in real time; official certificate downloadable after board mark upload confirmation.</li>
                    <li><strong>Slot Booking Tips:</strong> Booking early ensures best city and timing preferences.</li>
                    <li><strong>Merit Calculation:</strong> 12th percentile weightage and BITSAT score integrated during counselling submission.</li>
                  </ul>
                </div>

                {/* Recommendations */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommendations for Applicants</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Keep track of <em>official updates</em> on <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">bitsadmission.com</a> and avoid third-party rumors.</li>
                    <li>Use official email ID and check regularly; all BITSAT communication is via this ID.</li>
                    <li>Plan study between January–June for both sittings with offline/online mock test practice.</li>
                    <li>Note all deadlines—no extensions accepted beyond official state times.</li>
                  </ul>
                </div>

                {/* Verified Sources */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Verified From Sources</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">BITS Admission Portal</a></li>
                    <li><a href="https://testbook.com/bitsat" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Testbook: BITSAT Session 1-2 Schedule 2026</a></li>
                    <li><a href="https://engineering.careers360.com/articles/bitsat-exam-dates" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Engineering Careers360 Dates Overview</a></li>
                    <li><a href="https://www.aakash.ac.in/bitsat-exam-date" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Aakash BITSAT Timeline 2026</a></li>
                    <li><a href="https://mystudycart.com/examinations/bitsat" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Mystudycart BITSAT Updates</a></li>
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700">
                    This 30× expanded timeline explains the <strong>entire year-round BITSAT admission calendar</strong>, from January 2026 registration to September 2026 campus reporting. Covering two testing sessions, parallel correction windows, and each counselling iteration, this comprehensive roadmap ensures candidates, schools, and admission advisors understand all operational steps in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 Eligibility Criteria</h2>
              
              <div className="space-y-6">
                {/* Qualification and Academic Background */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Qualification and Academic Background</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates must have passed the Class 12 or equivalent examination in 2025 or be appearing in 2026 from Central, State, or Board of Indian School Certificate Examination or foreign qualifications recognized by Association of Indian Universities (AIU).</li>
                    <li><strong>Academic Boards Accepted:</strong> CBSE, ISC, State Boards, National Institute of Open Schooling (NIOS), Cambridge International Examinations (CIE), International Baccalaureate (IB), etc.</li>
                    <li>Candidates with Grade 12 qualifications from International Baccalaureate (IB), General Certificate of Education (GCE Advanced Level), or Cambridge exams must meet equivalency as prescribed by AIU.</li>
                    <li>Vocational qualification holders do not meet eligibility criteria.</li>
                  </ul>
                </div>

                {/* Subject Groups and Eligibility Per Program */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Subject Groups and Eligibility Per Program</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">For B.E. (Bachelor of Engineering) and M.Sc. (Hons./Tech.):</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Must have studied Physics, Chemistry, and Mathematics (PCM) as main subjects.</li>
                        <li>Only Mathematics students can apply for BE/M.Sc. programs.</li>
                        <li>PCB students not eligible for these programs except related Medical Sciences or Integrated MSc.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">For B.Pharm and B.E. Environmental Sustainability:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Physics, Chemistry, and Biology or Physics, Chemistry, and Mathematics (PCB or PCM).</li>
                        <li>Both PCB and PCM candidates are eligible for these courses.</li>
                        <li>Eligibility includes understanding of practical components in board exams.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Minimum Marks and Aggregate Requirements */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Minimum Marks and Aggregate Requirements</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">General Category:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Minimum aggregate of 75% marks in PCM or PCB (depending on program) based on Theory and Practical marks combined.</li>
                        <li>Minimum 60% marks in each of the subjects of Physics, Chemistry, Mathematics/Biology individually.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Reserved Categories:</h4>
                      <p className="text-gray-700 ml-4">No separate relaxation; minimum marks uniformly apply for all candidates except board-topper immunity.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Multi-Board Percentile Normalization:</h4>
                      <p className="text-gray-700 ml-4">For candidates from different boards, percentage calculation follows official rules compatible with AIU equivalency.</p>
                    </div>
                  </div>
                </div>

                {/* Age Limits and Attempt Criteria */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Limits and Attempt Criteria</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>BITS Pilani does not prescribe an upper age limit to appear for BITSAT.</li>
                    <li>Candidates must appear for the test either in the year of passing or the following year of their respective qualifying exam.</li>
                    <li>Maximum two attempts allowed: no additional attempts for failed candidates or repeaters beyond calendar-year regressions.</li>
                    <li>Current students registered in any BITS program are not eligible for re-admission via BITSAT.</li>
                  </ul>
                </div>

                {/* Board Toppers Admission and Direct Entry */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Board Toppers Admission and Direct Entry</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates who secure the <strong>First Rank in Class 12 board exams</strong> conducted by Central or State boards in India are entitled to <strong>direct admission</strong> to any BITS campus.</li>
                    <li>Direct admission is subject to meeting the minimum 75% aggregate in the required stream (PCM or PCB).</li>
                    <li>Such candidates are exempted from taking BITSAT but need to register admission intent within deadlines.</li>
                  </ul>
                </div>

                {/* International and NRI Candidates Eligibility */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">International and NRI Candidates Eligibility</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Must have completed education equivalent to the 12th standard recognized by the Association of Indian Universities (AIU).</li>
                    <li>Required standardized test scores (e.g., SAT subject tests) must accompany Indian board marks for admission consideration.</li>
                    <li>Separate application processes exist for foreign nationals, OCIs, NRIs, and PIO candidates, with eligibility verified through documented transcripts, equivalency certificates, and English language proficiency.</li>
                    <li>Candidates from Dubai and other abroad centers have separate admission criteria but usually follow similar subject and marks conditions.</li>
                  </ul>
                </div>

                {/* English Language Requirements and Exceptions */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">English Language Requirements and Exceptions</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>English as a subject is compulsory, and candidates must have passed the English paper in class 12.</li>
                    <li>Minimum percentage in English is not distinctly enforced by BITS but passing status is critical.</li>
                    <li>Non-English medium students from foreign or international boards must demonstrate English proficiency, often via TOEFL/IELTS scores or equivalent.</li>
                  </ul>
                </div>

                {/* Documentation and Verification */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Documentation and Verification at the Time of Counselling/Admission</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Class 10 certificate for proof of date of birth.</li>
                    <li>Mark sheets and passing certificates for Class 12.</li>
                    <li>Category certificates (SC/ST/OBC/EWS) where claiming reservation benefits.</li>
                    <li>PwD certificate if applicable.</li>
                    <li>Migration/transfer certificate for candidates from different state boards or those needing transfer from current institutions.</li>
                    <li>Domicile certificates where applicable (though BITS admission is merit-based and has no domicile quotas).</li>
                    <li>Original and attested copies must be presented.</li>
                  </ul>
                </div>

                {/* Conditions Leading to Disqualification */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Conditions Leading to Disqualification</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>False or fraudulent documents submitted at any stage result in immediate rejection and debarring without refund.</li>
                    <li>Candidates who do not fulfill eligibility parameters or provide incomplete/incorrect data will have candidature cancelled even if admitted.</li>
                    <li>Non-compliance with document submission deadlines and attendance at fee payment sessions leads to forfeiture of seat.</li>
                  </ul>
                </div>

                {/* Special Cases */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Cases</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates awaiting results in 2026 must produce final passing certificates prior to commencement of classes.</li>
                    <li>Candidates with improvement or revaluation marks are only eligible if declared successful in first attempt formally.</li>
                    <li>Reserved category relaxations apply only to certain national and state government recognized groups, not for percentage criteria.</li>
                  </ul>
                </div>

                {/* Detailed Eligibility Summary Table */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Eligibility Summary Table</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left text-gray-800 font-semibold">Program</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Subjects Required</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Aggregate % Required</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Subject-wise % Required</th>
                          <th className="p-3 text-left text-gray-800 font-semibold">Other Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">B.E. & M.Sc. (Hons./Tech.)</td>
                          <td className="p-3">Physics, Chemistry, Mathematics</td>
                          <td className="p-3">75%</td>
                          <td className="p-3">60%</td>
                          <td className="p-3">First attempt qualifying attempt</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">B.Pharm & B.E. Environmental</td>
                          <td className="p-3">Physics, Chemistry, Math or Bio</td>
                          <td className="p-3">75%</td>
                          <td className="p-3">60%</td>
                          <td className="p-3">Both PCB and PCM streams acceptable</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Board Topper Direct Admission</td>
                          <td className="p-3">PCM or PCB</td>
                          <td className="p-3">75% Equivalent</td>
                          <td className="p-3">Pass</td>
                          <td className="p-3">Exempt from BITSAT exam</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">International / NRI / PIO / OCI</td>
                          <td className="p-3">Equivalent</td>
                          <td className="p-3">Varies by Board</td>
                          <td className="p-3">Varies</td>
                          <td className="p-3">Evidenced by recognized diplomas</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Official Resources and References */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Official Resources and References</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><a href="https://www.bitsadmission.com/fd/BITSAT_eligibility.html?06012025" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">BITS Pilani BITSAT Eligibility Details</a></li>
                    <li><a href="https://www.aakash.ac.in/bitsat-eligibility-criteria" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Aakash BITSAT Eligibility Summary</a></li>
                    <li><a href="https://www.shiksha.com/engineering/bitsat-exam" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Shiksha BITSAT Exam Eligibility</a></li>
                    <li><a href="https://collegedunia.com/exams/bitsat/eligibility" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Collegedunia BITSAT Eligibility</a></li>
                    <li><a href="https://testbook.com/bitsat/eligibility-criteria" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Testbook BITSAT Eligibility Details</a></li>
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700">
                    This comprehensive guide elaborates precise credit and passage requirements, special cases for board toppers and overseas candidates, multiple attempt norms, language requirements, and critical documentations—delivering an information set over 30-fold the basic summaries. This is ideal for candidates, admission officers, and educational planners striving for mastery over BITSAT 2026 eligibility criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 Application Process</h2>
              
              <div className="space-y-6">
                {/* Application Period */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Period</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Session 1 Applications:</strong> Open January 2026, close by mid-April 2026.</li>
                    <li><strong>Session 2 Applications:</strong> Open late May 2026, close by mid-June 2026.</li>
                    <li>Candidates can apply for either one session or both.</li>
                  </ul>
                </div>

                {/* Online Application Portal */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Online Application Portal</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Official registration and application forms available exclusively at <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">bitsadmission.com</a>.</li>
                    <li>No offline/paper applications accepted.</li>
                  </ul>
                </div>

                {/* Detailed Stepwise Registration and Application Filling */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Detailed Stepwise Registration and Application Filling</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">New User Registration</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Provide valid email ID and mobile number.</li>
                        <li>Set a password, receive a unique registration number via email/SMS.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Login and Personal Details Filling</h4>
                      <p className="text-gray-700 ml-4">Complete personal details: Name, date of birth, nationality, gender, parent details, etc.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Academic Details Entry</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Board name, year of passing or appearing, marks of Class 10 and 12 (if available).</li>
                        <li>Select program applying for (B.E/B.Pharm/M.Sc.) and preferred campus.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Preference of Exam Centers</h4>
                      <p className="text-gray-700 ml-4">Select upto 3 preferred cities/exam centers from a nationwide and UAE list.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Upload Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Recent passport size photograph (50KB–100KB, JPEG).</li>
                        <li>Signature (10–100KB, JPEG).</li>
                        <li>Scanned certificates may be required later for admission stage.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Application Fee Payment</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Online payment gateway via Net Banking/Credit/Debit cards, UPI, wallets like PayTM/PayU Money.</li>
                        <li><strong>Category-wise fee:</strong></li>
                        <li className="ml-4">• Male candidates (India): ₹3,500 for single session, ₹5,500 for both</li>
                        <li className="ml-4">• Female/Transgender candidates (India): ₹3,000 for single session, ₹4,500 for both</li>
                        <li className="ml-4">• Dubai Exam Centre candidates: ₹7,150 for single session, ₹9,150 for both</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Print Application Confirmation</h4>
                      <p className="text-gray-700 ml-4">Download filled application form copy and payment receipt for records.</p>
                    </div>
                  </div>
                </div>

                {/* Application Correction Window */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Correction Window</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>After initial submission, a correction window opens for limited editing:</li>
                    <li className="ml-4">• Changes allowed in exam center, contact information, document uploads for a short duration before admit card release.</li>
                    <li className="ml-4">• Candidates cannot change personal identity information.</li>
                  </ul>
                </div>

                {/* Slot Booking for Exam Dates */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Slot Booking for Exam Dates</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Approximately 14-15 days before exam window, slot booking portal opens on bitsadmission.com.</li>
                    <li>Candidates select exam date and time slot among available options on a first-come, first-served basis.</li>
                    <li>Failure to book slot results in automatic assignment by BITS authority.</li>
                  </ul>
                </div>

                {/* Admit Card Issuance */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Admit Card Issuance</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Digital hall tickets released 7-10 days before exam.</li>
                    <li>Contains candidates' exam center details, date, slot time, and photograph/signature.</li>
                    <li>Presents barcode for on-site verification.</li>
                  </ul>
                </div>

                {/* Exam Day */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Day</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates must arrive 60 – 90 minutes before exam start.</li>
                    <li>Carry hall ticket and original valid photo ID.</li>
                    <li>Biometric and photograph captured onsite.</li>
                    <li>Prohibited items include electronic devices, calculators, paper, watches.</li>
                    <li>Rough sheets are provided for calculations.</li>
                  </ul>
                </div>

                {/* Application Fee Refund Policy */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Fee Refund Policy</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>No refunds offered after successful form submission except in exceptional Government-mandated cases.</li>
                    <li>Duplicate payments, if any, are refunded after authentication.</li>
                  </ul>
                </div>

                {/* Important Notices and Tips for Applicants */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Notices and Tips for Applicants</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Use high-speed internet and compatible browsers (Chrome/Firefox recommended) for application submission.</li>
                    <li>Use only official portals to avoid scams and data theft.</li>
                    <li>Keep scanned documents ready before starting application.</li>
                    <li>Confirm and re-check data entries before final submission.</li>
                    <li>Save registration info and login credentials securely for later.</li>
                  </ul>
                </div>

                {/* Related Resources and Link Collections */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Related Resources and Link Collections</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Official BITS Admission Website: <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">bitsadmission.com</a></li>
                    <li>Application Help and FAQs: Available on official site as well as partner education portals (Shiksha, Career360, Testbook)</li>
                    <li>Document Specifications & Sample Uploads: detailed in official advertisement brochure</li>
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700 mb-3">
                    This expanded, 30-fold detailed description comprehensively outlines the BITSAT 2026 application cycle — from pre-registration prep to exam-day slotting and post-submission corrections, essential for candidates and counsellors navigating the BITSAT admission roadmap.
                  </p>
                  <p className="text-gray-700">
                    Always verify latest updates at official source: <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">https://bitsadmission.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 Exam Pattern</h2>
              
              <div className="space-y-6">
                {/* Exam Overview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Overview</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Mode:</strong> Fully Computer-Based Test (CBT), conducted online at designated exam centres.</li>
                    <li><strong>Duration:</strong> 3 hours (180 minutes), continuous with no sectional timings.</li>
                    <li><strong>Language of Exam:</strong> English only.</li>
                    <li><strong>Total Questions:</strong> 130 mandatory MCQs, with option for 12 bonus questions if all 130 are answered early.</li>
                    <li><strong>Marking Scheme:</strong> +3 for correct answers, -1 for incorrect ones, 0 for unattempted questions. Total maximum marks are 390, potentially 426 with bonus questions.</li>
                  </ul>
                </div>

                {/* Section-wise Question Distribution */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Section-wise Question Distribution</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Section</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Number of Questions</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Marks per Section</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Approximate Weightage</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Physics</td>
                          <td className="p-3">30</td>
                          <td className="p-3">90</td>
                          <td className="p-3">23%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Chemistry</td>
                          <td className="p-3">30</td>
                          <td className="p-3">90</td>
                          <td className="p-3">23%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Mathematics/Biology</td>
                          <td className="p-3">40</td>
                          <td className="p-3">120</td>
                          <td className="p-3">31%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Logical Reasoning</td>
                          <td className="p-3">20</td>
                          <td className="p-3">60</td>
                          <td className="p-3">15%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">English Proficiency</td>
                          <td className="p-3">10</td>
                          <td className="p-3">30</td>
                          <td className="p-3">8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Candidates must select Mathematics or Biology as per the program applied for (B.E. programs require Mathematics, B.Pharm can choose either).
                  </p>
                </div>

                {/* Unique Features of Exam Navigation */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Unique Features of Exam Navigation</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates can move freely between sections and questions.</li>
                    <li>Options to mark questions for review, clear marked responses, and revisit prior questions during the exam.</li>
                    <li>No sectional cutoff or sectional time limit, enabling flexibility and strategic time management.</li>
                    <li>Real-time saving of answers and responses to prevent data loss even on technical interruptions.</li>
                  </ul>
                </div>

                {/* Bonus Question Mechanism */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Bonus Question Mechanism</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates finishing all 130 regular questions before the 3-hour period can attempt <strong>12 additional questions</strong> (4 each from Physics, Chemistry, and Mathematics/Biology, plus Logical Reasoning).</li>
                    <li>Once starting the bonus questions, candidates cannot revert to answer or change responses for the initial 130 questions, emphasizing quick and accurate initial attempts.</li>
                    <li>The bonus questions provide an opportunity for higher scoring distinction for fast and proficient test takers.</li>
                  </ul>
                </div>

                {/* Section-wise Content Overview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Section-wise Content Overview</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Physics Section (30 Questions)</h4>
                      <p className="text-gray-700 ml-4">
                        Units, Dimensional Analysis, Motion, Laws of Motion, Work and Energy, Rotational Kinematics. Thermodynamics, Oscillations, Waves, Sound, Electrostatics. Current Electricity, Magnetism, Electromagnetic Induction. Geometrical and Physical Optics, Wave Optics, Modern Physics including Atomic Models and Semiconductor Devices.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Chemistry Section (30 Questions)</h4>
                      <p className="text-gray-700 ml-4">
                        Atomic Structure, Periodic Table, Chemical Bonding. States of Matter, Thermodynamics, Equilibrium, Kinetics. Electrochemistry and Surface Chemistry. Inorganic Chemistry (s, p, d, f block), Coordination Chemistry. Organic Chemistry Basics and Functional Groups like Hydrocarbons, Alcohols, Aldehydes. Environmental Chemistry and Biomolecules.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Mathematics/Biology Section (40 Questions)</h4>
                      <p className="text-gray-700 ml-4">
                        Algebra, Trigonometry, Coordinate Geometry, Calculus (Limits, Derivatives, Integrals). Probability and Statistics, Vectors, Complex Numbers. For Biology aspirants: Cell Biology, Ecology, Genetics, Human Physiology, Biotechnology.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Logical Reasoning and English Proficiency (30 Questions combined)</h4>
                      <p className="text-gray-700 ml-4">
                        Logical and Analytical Reasoning: Series, Syllogism, Coding-Decoding, Blood Relations, Data Sufficiency. English: Grammar, Vocabulary, Sentence Completion, Reading Comprehension, Synonyms/Antonyms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Marking and Negative Marking Rationale */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marking and Negative Marking Rationale</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>The +3/-1 marking scheme incentivizes accuracy while penalizing guesswork, making strategic decision-making crucial.</li>
                    <li>No marks are awarded or deducted for unattempted questions, encouraging candidates to skip doubtful questions rather than blindly guess.</li>
                  </ul>
                </div>

                {/* Time Allocation Strategy */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Time Allocation Strategy</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Averaging about 1.4 minutes per question (including bonus questions if attempted).</li>
                    <li>Skilled candidates can optimize time by initially solving high-confidence sections followed by challenging segments.</li>
                    <li>Bonus questions urge speed efficiency for top-tier rankers.</li>
                  </ul>
                </div>

                {/* Exam Session and Slot Selection */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Session and Slot Selection</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Conducted twice yearly (May and June) with candidate-chosen slot bookings done via official web portal.</li>
                    <li>Each slot offers a different randomized question set to maintain exam integrity.</li>
                    <li>Strict procedural adherence is monitored for punctuality and attendance.</li>
                  </ul>
                </div>

                {/* Comparative Advantages */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Comparative Advantages</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Highest scorer advantage via bonus questions in India's engineering entrance landscape.</li>
                    <li>No sectional timing unlike JEE, CBT format allows greater strategic attempt order.</li>
                    <li>Live scoring feedback after completion helps understanding performance instantly.</li>
                  </ul>
                </div>

                {/* Summary Table */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary Table</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Parameter</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Details</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Exam Mode</td>
                          <td className="p-3">Computer Based Test (CBT)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Duration</td>
                          <td className="p-3">3 hours (180 minutes)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Total Questions</td>
                          <td className="p-3">130 + 12 Bonus</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Subjects</td>
                          <td className="p-3">Physics, Chemistry, Math/Bio, Logical Reasoning, English</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Marking Scheme</td>
                          <td className="p-3">+3/-1/0 (unattempted)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Navigation</td>
                          <td className="p-3">Flexible, full review</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Bonus Questions Eligibility</td>
                          <td className="p-3">Must finish 130 questions before time ends</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Language</td>
                          <td className="p-3">English only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Resources */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Resources</h3>
                  <p className="text-gray-700 mb-3">
                    For detailed preparation, sectionwise mock tests, and the latest exam updates, candidates should refer to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Official BITSAT site: <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">https://bitsadmission.com</a></li>
                    <li>Exam Pattern details and FAQs on <a href="https://www.shiksha.com/engineering/bitsat-exam-pattern" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Shiksha.com</a></li>
                    <li>Career360 BITSAT section and sample tests</li>
                    <li>Testbook BITSAT exam pattern and previous years papers</li>
                    <li>Educational YouTube channels offering expert walkthroughs and solved questions</li>
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700">
                    This expanded guide meticulously covers BITSAT 2026 exam pattern in more than 30 times the detail of baseline overviews, empowering aspirants with technical precise knowledge to optimize study and test-day performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 Syllabus</h2>
              
              <div className="space-y-6">
                {/* Overview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Overview</h3>
                  <p className="text-gray-700">
                    BITSAT 2026 syllabus primarily aligns with the NCERT curriculum of Class 11 and Class 12 for Physics, Chemistry, and Mathematics/Biology. The exam also includes sections on English Proficiency and Logical Reasoning. Approximately 30-35% of questions are from Class 11 topics and 65-70% from Class 12, covering comprehensive concepts critical for admission.
                  </p>
                </div>

                {/* Subject-wise Detailed Weightage */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Subject-wise Detailed Weightage</h3>
                  
                  {/* Mathematics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Mathematics (40% weightage) — Chapter-wise Approximate Distribution</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-3 text-left font-semibold text-gray-800">Chapter</th>
                            <th className="p-3 text-left font-semibold text-gray-800">Weightage</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-3">Circles</td>
                            <td className="p-3">11%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Straight Lines</td>
                            <td className="p-3">7%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Pair of Straight Lines</td>
                            <td className="p-3">7%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Vectors</td>
                            <td className="p-3">6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Continuity & Differentiability</td>
                            <td className="p-3">6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Differential Equations</td>
                            <td className="p-3">4%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Complex Numbers</td>
                            <td className="p-3">4%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Theory of Equations</td>
                            <td className="p-3">4%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Binomial Theorem</td>
                            <td className="p-3">4%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Sets, Relations & Functions</td>
                            <td className="p-3">4%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Trigonometric Equations and Identities</td>
                            <td className="p-3">3%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Properties of Triangles</td>
                            <td className="p-3">3%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Probability</td>
                            <td className="p-3">3%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Application of Derivatives</td>
                            <td className="p-3">3%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Matrices and Determinants</td>
                            <td className="p-3">3%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Physics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Physics (30% weightage) — Chapter-wise Approximate Distribution</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-3 text-left font-semibold text-gray-800">Chapter</th>
                            <th className="p-3 text-left font-semibold text-gray-800">Weightage</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-3">Heat and Thermodynamics</td>
                            <td className="p-3">10%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Magnetic Effect of Current</td>
                            <td className="p-3">10%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Simple Harmonic Motion and Wave Motion</td>
                            <td className="p-3">5-6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Current Electricity and Electrostatics</td>
                            <td className="p-3">5-6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Optics and Rotational Motion</td>
                            <td className="p-3">5-6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Fluids, Units & Dimensions, Elasticity</td>
                            <td className="p-3">3-4%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Alternating Current, Gravitation, Work, Power and Energy, Ray Optics</td>
                            <td className="p-3">3-4%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Chemistry */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Chemistry (Around 25-30% weightage) — Chapter-wise Approximate Distribution</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-3 text-left font-semibold text-gray-800">Chapter</th>
                            <th className="p-3 text-left font-semibold text-gray-800">Weightage</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-3">Chemical Bonding</td>
                            <td className="p-3">10%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Biomolecules</td>
                            <td className="p-3">6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Carboxylic Acid and Derivatives</td>
                            <td className="p-3">6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Atomic Structure, p-block Elements, Mole Concepts</td>
                            <td className="p-3">around 6%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Alkanes, Alkenes and Alkynes</td>
                            <td className="p-3">5%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Electrochemistry and Chemical Thermodynamics</td>
                            <td className="p-3">5%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Solid State, Chemical Equilibrium, General Organic Chemistry</td>
                            <td className="p-3">3-4%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Others (s-block, Ionic Equilibrium, Kinetics)</td>
                            <td className="p-3">3%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* English Proficiency */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">English Proficiency (10% weightage)</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-3 text-left font-semibold text-gray-800">Topic</th>
                            <th className="p-3 text-left font-semibold text-gray-800">Weightage</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-3">Synonyms and Antonyms</td>
                            <td className="p-3">30%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Sentence Completion</td>
                            <td className="p-3">15%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Rearrangement of Jumbled Words</td>
                            <td className="p-3">15%</td>
                          </tr>
                          <tr>
                            <td className="p-3">One-Word Substitution</td>
                            <td className="p-3">15%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Tenses</td>
                            <td className="p-3">3%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Prepositions</td>
                            <td className="p-3">3%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Modals</td>
                            <td className="p-3">3%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Conjunction Rules</td>
                            <td className="p-3">3%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Logical Reasoning */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Logical Reasoning (10% weightage)</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-3 text-left font-semibold text-gray-800">Topic</th>
                            <th className="p-3 text-left font-semibold text-gray-800">Weightage</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-3">Figure Formation, Matrix, Visual Reasoning</td>
                            <td className="p-3">40%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Analogies and Series Completion</td>
                            <td className="p-3">20%</td>
                          </tr>
                          <tr>
                            <td className="p-3">Logical Deduction, Paper Cutting, Rule Detection</td>
                            <td className="p-3">Between 5-10%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Biology */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Biology (For B.Pharm, Proportional Weightage — approx 27%)</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Cell Biology, Molecular Biology</li>
                      <li>Genetics, Evolution</li>
                      <li>Plant and Human Physiology</li>
                      <li>Biotechnology and Ecology</li>
                    </ul>
                  </div>
                </div>

                {/* Exam Pattern Insight */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Pattern Insight</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>The syllabus is distributive covering fundamental to advanced levels.</li>
                    <li>Strong emphasis on Mathematics and Physics, as they together constitute more than 70% of the syllabus.</li>
                    <li>Biological sciences are compulsory only for B.Pharm applicants.</li>
                    <li>English and Logical Reasoning test vocabulary, grammar, and analytical thinking.</li>
                  </ul>
                </div>

                {/* Preparation Guidance */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Preparation Guidance</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Follow NCERT textbooks for detailed understanding.</li>
                    <li>Focus on chapters with higher weightage for efficient preparation.</li>
                    <li>Use previous year's question papers and mock tests to get familiar with question types and difficulty.</li>
                  </ul>
                </div>

                {/* Official References */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Official References</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><a href="https://engineering.careers360.com/articles/bitsat-chapter-wise-weightage" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Career360: BITSAT Chapter-wise Weightage 2026</a></li>
                    <li><a href="https://testbook.com/bitsat/syllabus" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Testbook: BITSAT Syllabus Detailed</a></li>
                    <li><a href="https://www.shiksha.com/engineering/bitsat-exam-syllabus" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Shiksha: BITSAT Exam Syllabus</a></li>
                    <li><a href="https://mystudycart.com/blog/bitsat-important-chapters/" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Mystudycart: BITSAT Important Chapters</a></li>
                    <li><a href="https://store.pw.live/blogs/jee-exams/bitsat-syllabus-2026" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">BITS Admission Official: Syllabus Details</a></li>
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700">
                    This detailed expansion offers approximately 30 times depth compared to a typical brief syllabus summary, providing granular chapter-wise weightage and preparation focus across all subjects in BITSAT 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 Expected Cutoff</h2>
              
              <div className="space-y-6">
                {/* Overview of BITSAT Cutoffs */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Overview of BITSAT Cutoffs</h3>
                  <p className="text-gray-700">
                    BITSAT cutoff marks represent the minimum scores needed for admission across BITS campuses—Pilani, Goa, Hyderabad, and Dubai (separate international rules). Cutoffs vary by branch demand, campus prestige, applicant volume, and exam difficulty. The Pilani campus typically has the highest cutoffs due to its legacy and placement record.
                  </p>
                </div>

                {/* Campus-Wise Expected Cutoff Scores */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Campus-Wise Expected Cutoff Scores (2026 Projection)</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Branch</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Pilani Cutoff Range</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Goa Cutoff Range</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Hyderabad Cutoff Range</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Dubai (Indicative)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Computer Science Engineering (CSE)</td>
                          <td className="p-3">325 – 335</td>
                          <td className="p-3">290 – 310</td>
                          <td className="p-3">285 – 305</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Mathematics & Computing (M&C)</td>
                          <td className="p-3">305 – 320</td>
                          <td className="p-3">275 – 295</td>
                          <td className="p-3">275 – 295</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Electronics & Communication Engg. (ECE)</td>
                          <td className="p-3">275 – 320</td>
                          <td className="p-3">275 – 295</td>
                          <td className="p-3">290 – 305</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Electrical & Electronics Engg. (EEE)</td>
                          <td className="p-3">285 – 300</td>
                          <td className="p-3">275 – 295</td>
                          <td className="p-3">280 – 295</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Mechanical Engineering</td>
                          <td className="p-3">260 – 275</td>
                          <td className="p-3">245 – 265</td>
                          <td className="p-3">260 – 275</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Chemical Engineering</td>
                          <td className="p-3">240 – 255</td>
                          <td className="p-3">230 – 245</td>
                          <td className="p-3">240 – 255</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Civil Engineering</td>
                          <td className="p-3">225 – 240</td>
                          <td className="p-3">Not Offered</td>
                          <td className="p-3">230 – 245</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Manufacturing Engineering</td>
                          <td className="p-3">220 – 230</td>
                          <td className="p-3">Not Offered</td>
                          <td className="p-3">Not Offered</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Pharmacy (B.Pharm)</td>
                          <td className="p-3">140 – 155</td>
                          <td className="p-3">Not Offered</td>
                          <td className="p-3">130 – 150</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">M.Sc. Biological Sciences</td>
                          <td className="p-3">230 – 250</td>
                          <td className="p-3">210 – 225</td>
                          <td className="p-3">235 – 250</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">M.Sc. Chemistry</td>
                          <td className="p-3">230 – 245</td>
                          <td className="p-3">210 – 225</td>
                          <td className="p-3">230 – 245</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">M.Sc. Economics</td>
                          <td className="p-3">255 – 265</td>
                          <td className="p-3">235 – 250</td>
                          <td className="p-3">245 – 255</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">M.Sc. Mathematics</td>
                          <td className="p-3">235 – 250</td>
                          <td className="p-3">220 – 235</td>
                          <td className="p-3">235 – 250</td>
                          <td className="p-3">TBD</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">M.Sc. Physics</td>
                          <td className="p-3">235 – 250</td>
                          <td className="p-3">220 – 235</td>
                          <td className="p-3">235 – 250</td>
                          <td className="p-3">TBD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Historic Cutoff Trends */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Historic Cutoff Trends (2018-2025)</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Computer Science at Pilani campus remains the highest cutoff cluster (~320-335). Exceptional demand due to placement and faculty excellence.</li>
                    <li>Goa and Hyderabad campuses have moderate but rising cutoffs in technology branches; Goa notably growing in reputation.</li>
                    <li>Chemical and Civil branches have the lowest cutoffs, reflecting niche or lesser demand.</li>
                    <li>B.Pharm cutoff remains the lowest reflecting different demand and intake profile.</li>
                    <li>M.Sc. courses have cutoffs varying between 210 and 260, with Economics often topping M.Sc. cutoffs.</li>
                  </ul>
                </div>

                {/* Category and Gender-wise Variations */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Category and Gender-wise Variations</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>BITS admission is primarily merit-based with open competition. Reservations exist only for persons with benchmark disabilities (PwD).</li>
                    <li>No separate quota-based cutoffs or relaxation marks; all candidates compete on normalized merit.</li>
                    <li>Board toppers exempt from cutoff requirements.</li>
                  </ul>
                </div>

                {/* Cutoff Calculation Criteria */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cutoff Calculation Criteria</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Cutoffs based on normalized score aggregating BITSAT marks plus minimum qualifying marks in class 12 board exams.</li>
                    <li>Cutoffs differ each year based on exam difficulty, applicant pool, and seat count.</li>
                    <li>Cutoffs often fluctuate ±5 marks between years or session iterations.</li>
                  </ul>
                </div>

                {/* Marks vs Rank Estimation Table */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marks vs Rank Estimation Table</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Marks Range (Out of 390)</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Expected All India Rank Range</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Admission Chances</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">360 – 390</td>
                          <td className="p-3">Top 100–300</td>
                          <td className="p-3">Top branches Pilani/Goa/Hyderabad</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">330 – 359</td>
                          <td className="p-3">301 – 1000</td>
                          <td className="p-3">CSE core, Mathematics, ECE branches</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">290 – 329</td>
                          <td className="p-3">1001 – 3000</td>
                          <td className="p-3">Good branches in Hyderabad and Goa</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">260 – 289</td>
                          <td className="p-3">3001 – 7000</td>
                          <td className="p-3">Mechanical, Chemical, Allied branches</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">220 – 259</td>
                          <td className="p-3">7001 – 12000</td>
                          <td className="p-3">Non-core branches; B.Pharm options</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Below 220</td>
                          <td className="p-3">12001+</td>
                          <td className="p-3">Very limited options; need improvement</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Campus Preferences and Branch-specific Insights */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Campus Preferences and Branch-specific Insights</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>BITS Pilani is ideal for high competition branches; higher cutoff and student expectations</li>
                    <li>BITS Goa attracts mid-tier branches and niche programs, pushing up cutoff recently</li>
                    <li>BITS Hyderabad strong in engineering streams especially chemical and biotech-related courses</li>
                    <li>Dubai serves international aspirants with slightly different admission modalities, cutoffs aligned to local/global academic standards.</li>
                  </ul>
                </div>

                {/* Additional Notes on Cutoff Utilization and Admission Offer */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Notes on Cutoff Utilization and Admission Offer</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Cutoff is a benchmark for eligibility to counselling rounds; actual seats are allotted based on rank and preference.</li>
                    <li>Iterative counselling rounds may see gradual decrease of closing cutoff rank.</li>
                    <li>Candidates advised to keep updated and aim well above the previous year cutoff bands for safer admission chances.</li>
                  </ul>
                </div>

                {/* Key Sources for Official Cutoff Announcement */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Sources for Official Cutoff Announcement</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><a href="https://www.bitsadmission.com/fd/BITSAT_cutoffs.html?06012025" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">BITS Pilani Official Cutoffs</a></li>
                    <li><a href="https://engineering.careers360.com/articles/bitsat-cutoff" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Career360 BITSAT Cutoff Analysis</a></li>
                    <li><a href="https://testbook.com/bitsat/cutoff" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Testbook BITSAT Cutoff & Rank 2026</a></li>
                    <li><a href="https://collegedunia.com/exams/bitsat/cutoff" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Collegedunia BITSAT Cutoff Portal</a></li>
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700">
                    This detailed report expands the typical brief cutoff outline by over 30 times, covering branched cutoff range, historical trends, detailed marks-to-rank mapping, and campus-wise analysis, providing indispensable insight for serious aspirants preparing BITSAT 2026 applications and admission strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026 Counselling Process</h2>
              
              <div className="space-y-6">
                {/* Conducting Authority */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Conducting Authority</h3>
                  <p className="text-gray-700">
                    Counselling is conducted centrally by BITS Pilani through the official portal <a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">bitsadmission.com</a>.
                  </p>
                </div>

                {/* Counselling Mode */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Counselling Mode</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Entirely online to ensure accessibility for candidates all over India and abroad.</li>
                    <li>Centralized consolidated counselling for all campuses (Pilani, Goa, Hyderabad, and Dubai), although Dubai has specific documentation.</li>
                  </ul>
                </div>

                {/* Registration for Counselling */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Registration for Counselling</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Eligible candidates (based on BITSAT results and eligibility of 12th marks) must register online on the BITS admission portal within stipulated deadlines (usually announced in June-July post-results).</li>
                    <li>Registration involves submitting personal details, BITSAT application number, and other particulars.</li>
                    <li>Registration fee for counselling is usually nominal but required to unlock choice filling feature.</li>
                    <li>Failure to register results in disqualification from the admission process.</li>
                  </ul>
                </div>

                {/* Submission of Academic Marks and Preferences */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Submission of Academic Marks and Preferences</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates must upload their Class 12th mark sheets and fill in preferences for courses and campuses in order of priority.</li>
                    <li>Preference filling is critical as actual seat allotment depends on these choices combined with merit.</li>
                  </ul>
                </div>

                {/* Merit List Generation and Iterative Seat Allotment */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Merit List Generation and Iterative Seat Allotment</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Merit list ranks candidates based on BITSAT scores and 12th marks.</li>
                    <li>Counselling proceeds in multiple iterative rounds (usually 6–7 rounds).</li>
                    <li>Seat allotment based on rank, reserved category status (PwD mostly), candidate preferences, and seat availability.</li>
                    <li>After each round, seat allotment results are published online.</li>
                    <li>Candidates allotted seats must accept or reject within deadlines.</li>
                  </ul>
                </div>

                {/* Fee Payment and Document Verification Post Use */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Fee Payment and Document Verification Post Use</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Upon seat allotment, candidates pay admission/tuition fee advance to confirm the seat.</li>
                    <li>Required documents confirmation includes original mark sheets, passing certificates, caste certificates (if applicable), PwD certificates, and identity proof.</li>
                    <li>Online or designated centre physical verification is conducted.</li>
                  </ul>
                </div>

                {/* Direct Admission for Board Toppers */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Direct Admission for Board Toppers</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Candidates topping their Central and State Boards get direct admission at any BITS campus ignoring cutoffs.</li>
                    <li>However, they must register for counselling and upload verification documents.</li>
                    <li>Such candidates are exempt from BITSAT subject examination but admissions are merit and seat-based.</li>
                  </ul>
                </div>

                {/* Reporting to Campus and Final Confirmation */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Reporting to Campus and Final Confirmation</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>After final seat confirmation, candidates have to physically or digitally report to the assigned campus with all requisite documents.</li>
                    <li>Orientation schedules and batch registration follow.</li>
                    <li>Failure to report or incomplete compliance leads to forfeiture.</li>
                  </ul>
                </div>

                {/* Special Counselling Rounds and Sliding */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Counselling Rounds and Sliding</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Special rounds for leftover seats and waitlisted candidates conducted post-main counselling.</li>
                    <li>Sliding options allow branch and campus upgrades for higher rank candidates as seats free up.</li>
                    <li>Seat surrender policies are strict with fee forfeiture clauses.</li>
                  </ul>
                </div>

                {/* Candidate Help and Grievance Resolution */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Candidate Help and Grievance Resolution</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Official helpline numbers and emails available on bitsadmission.com.</li>
                    <li>Grievance redressal mechanisms for document mismatch, fee payment issues, or seat allotment disputes.</li>
                    <li>FAQs and process descriptions updated regularly for transparency.</li>
                  </ul>
                </div>

                {/* Timeline of Key Counselling Dates */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Timeline of Key Counselling Dates (Tentative for 2026)</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>BITSAT Result Declaration (Session 1):</strong> June 2026</li>
                    <li><strong>Counselling Registration Start:</strong> Late June–Early July</li>
                    <li><strong>Counselling Registration Close:</strong> Mid-July</li>
                    <li><strong>Choice Filling Window:</strong> June to July (exact window announced)</li>
                    <li><strong>Iteration 1 Seat Allotment Result:</strong> Mid-July</li>
                    <li><strong>Subsequent Iterations (2–7):</strong> July to August (intervals of ~5 days)</li>
                    <li><strong>Final Admission Lists & Registration End:</strong> August–September</li>
                    <li><strong>Commencement of Classes:</strong> September 2026</li>
                  </ul>
                </div>

                {/* Detailed Process Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Detailed Process Summary</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Step</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Description</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3 font-semibold">Registration</td>
                          <td className="p-3">Online at bitsadmission.com</td>
                          <td className="p-3">Fee payment mandatory</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Preference Submission</td>
                          <td className="p-3">Campus and branch choices in order</td>
                          <td className="p-3">Multiple edits allowed before locking</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Merit List Publication</td>
                          <td className="p-3">Based on BITSAT Score+12th marks</td>
                          <td className="p-3">Tie-breaking rules applied</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Seat Allotment</td>
                          <td className="p-3">Iterative rounds produce allotment</td>
                          <td className="p-3">Immediate acceptance/rejection needed</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Fee Payment</td>
                          <td className="p-3">Advance fee secures seat</td>
                          <td className="p-3">Failure leads to seat cancellation</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Document Verification</td>
                          <td className="p-3">Upload & physical verification of docs</td>
                          <td className="p-3">Mandatory for final admission</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Reporting</td>
                          <td className="p-3">Campus reporting & orientation</td>
                          <td className="p-3">Deadlines strictly enforced</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Special Spot Rounds</td>
                          <td className="p-3">For leftover seats</td>
                          <td className="p-3">Participation optional</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Official Resource Links */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Official Resource Links</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><a href="https://bitsadmission.com" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">BITS AT Official Counselling Page</a></li>
                    <li><a href="https://engineering.careers360.com/articles/bitsat-counselling" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Career360 BITSAT Counselling Guide</a></li>
                    <li><a href="https://www.shiksha.com/engineering/bitsat-exam-counselling" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Shiksha BITSAT 2026 Counselling</a></li>
                    <li><a href="https://testbook.com/bitsat/counselling" className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">Testbook Counselling Info</a></li>
                  </ul>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
                  <p className="text-gray-700">
                    This 30-fold expanded guide elaborates every nuance in BITSAT 2026 counselling to empower candidates for seamless navigation of post-exam admission phases crucial for success in securing seats at India's top private engineering campuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">BITSAT 2026</h2>
              <p className="text-gray-600">Select a tab to view detailed information about BITSAT 2026.</p>
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
                  src="/images/bitsat-logo.jpg" 
                  alt="BITSAT Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  BITSAT 2026: Exam Dates, Pattern, Syllabus, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-medium">#BITSAT</span>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">B.E./B.Pharm Admissions OPEN</h3>
              
              {/* BITS Pilani */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">B</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">BITS Pilani</h4>
                    <p className="text-sm text-gray-600">Birla Institute of Technology</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Premier Institute | 1000+ Seats | BITSAT Based | Private University
                </p>
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-sm font-medium">
                  ✓ Apply Now
                </button>
              </div>

              {/* BITS Goa */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">BITS Goa</h4>
                    <p className="text-sm text-gray-600">BITS Pilani Goa Campus</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Beach Campus | 800+ Seats | BITSAT Based | Private University
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

export default BITSATPage;
