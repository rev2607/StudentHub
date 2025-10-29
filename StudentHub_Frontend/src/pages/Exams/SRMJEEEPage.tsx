import { useState } from 'react';
import srmLogo from '../../assets/Colleges/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png';
import vitLogo from '../../assets/Colleges/vit.png';
import bitsLogo from '../../assets/Colleges/BITS_Pilani-Logo.png';

type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling';

export default function SRMJEEEPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

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
            {/* Complete SRMJEEE 2026 Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRM Joint Engineering Entrance Examination (SRMJEEE) 2026</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Examination Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Name:</span>
                    <span className="text-gray-600">SRM Joint Engineering Entrance Examination (SRMJEEE) 2026</span>
                      </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Authority:</span>
                    <span className="text-gray-600">SRM Institute of Science and Technology (SRMIST), Kattankulathur</span>
                      </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Level:</span>
                    <span className="text-gray-600">National-level Undergraduate Engineering Entrance Exam</span>
                      </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Category:</span>
                    <span className="text-gray-600">UG – B.Tech / B.E. / B.Arch / B.Des Admissions</span>
                      </div>
                      </div>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Frequency:</span>
                    <span className="text-gray-600">Held annually in multiple phases (generally April–May)</span>
                      </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Language:</span>
                    <span className="text-gray-600">English only</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Introduced:</span>
                    <span className="text-gray-600">2007</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Applicants:</span>
                    <span className="text-gray-600">Around 1.8 to 2 lakh students every year</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Results:</span>
                    <span className="text-gray-600">Usually released within 24–48 hours after the test</span>
                  </div>
                    </div>
                  </div>
                  
              <h3 className="text-xl font-semibold text-gray-800 mb-4">About SRMJEEE 2026</h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  SRMJEEE (SRM Joint Engineering Entrance Examination) is the university's own online test for admission to engineering, architecture, and design programs offered across all SRM campuses in India.
                </p>
                <p>
                  The exam is conducted entirely as a computer-based test (CBT) and is known for its flexible structure — multiple phases, easy slot booking, instant results, and no negative marking. Each year, SRMJEEE opens the door to about 7,500–8,000 engineering seats at one of India's leading private universities.
                </p>
                <p>
                  SRM Institute of Science and Technology is renowned for its 250+ acre main campus, NAAC A++ accreditation, strong placement network (600+ recruiters), and international tie-ups with over 150 universities worldwide. With top NIRF and QS rankings, SRM is one of India's most sought-after private engineering institutions.
                </p>
                      </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">SRMJEEE 2026 Highlights</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Particular</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Name</td>
                      <td className="border border-gray-300 px-4 py-2">SRM Joint Engineering Entrance Examination (SRMJEEE)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Body</td>
                      <td className="border border-gray-300 px-4 py-2">SRM Institute of Science and Technology (SRMIST)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Level</td>
                      <td className="border border-gray-300 px-4 py-2">National (University Level UG Engineering Test)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mode of Exam</td>
                      <td className="border border-gray-300 px-4 py-2">Online – Computer Based Test (CBT)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                      <td className="border border-gray-300 px-4 py-2">2 hours 30 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Type of Questions</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Choice Questions (MCQs)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">125 (1 mark per question)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Negative Marking</td>
                      <td className="border border-gray-300 px-4 py-2">None</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phases</td>
                      <td className="border border-gray-300 px-4 py-2">Usually two (Phase 1 & Phase 2)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Participating Campuses</td>
                      <td className="border border-gray-300 px-4 py-2">Kattankulathur, Ramapuram, Vadapalani, NCR-Delhi, Amravati (AP) etc.</td>
                    </tr>
                  </tbody>
                </table>
                      </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Dates (Tentative 2026)</h3>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Application Form Release – November 2025</p>
                <p>• Last Date for Phase 1 Application – March 2026</p>
                <p>• Phase 1 Exam – April 2026</p>
                <p>• Phase 2 Exam – May 2026</p>
                <p>• Result Declaration – Within 48 hours after each phase</p>
                <p>• Counselling Rounds – June–July 2026</p>
                      </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria</h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <div>
                  <p><strong>Nationality:</strong> Indian citizens and NRI candidates are eligible.</p>
                      </div>
                <div>
                  <p><strong>Age Limit:</strong> Candidates should have attained 17 years of age as of 31 December 2026.</p>
                      </div>
                <div>
                  <p><strong>Educational Qualification:</strong></p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Passed or appearing in Class 12 in 2024 / 2025 with Physics and Mathematics as mandatory subjects.</li>
                    <li>Minimum aggregate of 60% in PCM or PCB group.</li>
                  </ul>
                    </div>
                <div>
                  <p><strong>Accepted Boards:</strong> State Boards / CBSE / ICSE / equivalent recognized boards.</p>
                  </div>
                <div>
                  <p><strong>For B.Tech Biotechnology:</strong> Candidates with Biology / Biotechnology / Chemistry instead of Mathematics are eligible.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Pattern and Marking Scheme</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">No. of Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Physics</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Mathematics / Biology</td>
                      <td className="border border-gray-300 px-4 py-2">40</td>
                      <td className="border border-gray-300 px-4 py-2">40</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">English</td>
                      <td className="border border-gray-300 px-4 py-2">5</td>
                      <td className="border border-gray-300 px-4 py-2">5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Aptitude</td>
                      <td className="border border-gray-300 px-4 py-2">10</td>
                      <td className="border border-gray-300 px-4 py-2">10</td>
                    </tr>
                    <tr className="bg-gray-50 font-semibold">
                      <td className="border border-gray-300 px-4 py-2">Total</td>
                      <td className="border border-gray-300 px-4 py-2">125</td>
                      <td className="border border-gray-300 px-4 py-2">125 marks</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Each question carries 1 mark.</p>
                <p>• No negative marking for incorrect answers.</p>
                <p>• Duration: 2 hours 30 minutes (150 minutes).</p>
                <p>• Mode: Online CBT.</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Overview</h3>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>Physics:</strong> Kinematics, Laws of Motion, Work and Energy, Thermodynamics, Current Electricity, Optics, Modern Physics.</p>
                <p><strong>Chemistry:</strong> Atomic Structure, Chemical Bonding, Organic Chemistry, Equilibrium, Electrochemistry, Surface Chemistry.</p>
                <p><strong>Mathematics:</strong> Algebra, Trigonometry, Coordinate Geometry, Calculus, Vectors, Statistics.</p>
                <p><strong>Biology:</strong> Human Physiology, Genetics, Ecology, Plant Physiology.</p>
                <p><strong>English & Aptitude:</strong> Grammar, Comprehension, Logical Reasoning, Numerical Ability.</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Process 2026</h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>Visit the official SRMJEEE application portal.</li>
                  <li>Register with a valid email ID and mobile number.</li>
                  <li>Fill in personal and academic details in the form.</li>
                  <li>Upload photograph and signature as per specifications.</li>
                  <li>Pay the application fee (around ₹1,200) online using debit/credit card or net banking.</li>
                  <li>Submit and save a copy of the application for future reference.</li>
                </ul>
                
                <div className="mt-4">
                  <p><strong>Documents Required:</strong></p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Class 10 and 12 mark sheets</li>
                    <li>Passport-size photo and signature files</li>
                    <li>Valid ID proof (Aadhaar, PAN, etc.)</li>
                    </ul>
                </div>
                  </div>
                  
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Admit Card and Slot Booking</h3>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Slot booking opens a few days before the exam. Candidates can choose preferred date and time.</p>
                <p>• Admit cards are released after slot booking is complete.</p>
                <p>• The admit card must be downloaded and carried to the exam center with a photo ID.</p>
                      </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Result and Counselling Process</h3>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• Results are published online within 24–48 hours of each exam phase.</p>
                <p>• Rank lists are generated based on total marks scored.</p>
                <p>• Short-listed candidates participate in online counselling through the admissions portal.</p>
                <p>• Seat allotment depends on rank, preference of branch and campus, and seat availability.</p>
                      </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expected Cutoff 2026</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Course / Campus</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Cutoff Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">CSE – Kattankulathur</td>
                      <td className="border border-gray-300 px-4 py-2">110–120</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">ECE – Ramapuram</td>
                      <td className="border border-gray-300 px-4 py-2">95–105</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Mechanical – NCR Campus</td>
                      <td className="border border-gray-300 px-4 py-2">80–90</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Civil – Vadapalani</td>
                      <td className="border border-gray-300 px-4 py-2">70–80</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Biotechnology</td>
                      <td className="border border-gray-300 px-4 py-2">75–85</td>
                    </tr>
                  </tbody>
                </table>
                      </div>
              <p className="text-gray-700 mb-6">Cutoffs vary every year depending on exam difficulty and number of applicants.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Tips</h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Strengthen concepts from NCERT textbooks for Classes 11 & 12.</li>
                  <li>Practice sample papers and SRMJEEE mock tests regularly.</li>
                  <li>Focus on time management and accuracy during practice.</li>
                  <li>Revise formulas and shortcuts for Physics and Maths.</li>
                  <li>Attempt sectional tests to identify weak areas.</li>
                </ul>
                
                <div>
                  <p><strong>Recommended Books:</strong></p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>H.C. Verma – Concepts of Physics</li>
                    <li>R.D. Sharma – Mathematics</li>
                    <li>O.P. Tandon – Chemistry</li>
                  </ul>
                    </div>
                  </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose SRM University?</h3>
              <div className="space-y-2 text-gray-700 mb-6">
                <p>• NAAC A++ Accredited Institution</p>
                <p>• NIRF Rank Top 20 Engineering Colleges in India</p>
                <p>• 600+ Top Recruiters (TCS, Infosys, Microsoft, Amazon, Deloitte etc.)</p>
                <p>• Over 150 Global University Collaborations</p>
                <p>• State-of-the-art labs and innovation centers</p>
                </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p><strong>Q1. Is SRMJEEE harder than JEE Main?</strong></p>
                  <p>SRMJEEE is generally easier than JEE Main, but speed and accuracy are key factors.</p>
              </div>
                <div>
                  <p><strong>Q2. How many phases does SRMJEEE have?</strong></p>
                  <p>Usually two phases — Phase 1 in April and Phase 2 in May.</p>
            </div>
                <div>
                  <p><strong>Q3. What is the application fee for SRMJEEE 2026?</strong></p>
                  <p>Around ₹1,200 per application.</p>
          </div>
                <div>
                  <p><strong>Q4. Is there negative marking in the exam?</strong></p>
                  <p>No, there is no negative marking in SRMJEEE.</p>
                </div>
                <div>
                  <p><strong>Q5. Which courses are offered through SRMJEEE?</strong></p>
                  <p>B.Tech in various disciplines such as CSE, ECE, EEE, Mechanical, Civil, Biotech, and AI – across SRM campuses.</p>
                </div>
              </div>
            </div>

            {/* Detailed Exam Structure and Pattern */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Exam Structure and Pattern</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Computer-Based Test (CBT) Specifications</h4>
              <div className="space-y-3 text-gray-700 mb-6">
                <p><strong>Technical Infrastructure:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Mode:</strong> Online Computer-Based Test (CBT) at authorized test centers</li>
                  <li><strong>Platform:</strong> Secure browser-based examination system</li>
                  <li><strong>Computer Requirements:</strong> Desktop/Laptop with stable internet, minimum 15-inch screen</li>
                  <li><strong>Backup Systems:</strong> Power backup and technical support at all centers</li>
                  <li><strong>Security Features:</strong> Biometric verification, CCTV surveillance, randomized question papers</li>
                  <li><strong>Accessibility:</strong> Special provisions for differently-abled candidates (scribe facility, extra time)</li>
                </ul>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Phase-wise Examination Schedule</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Phase</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Dates</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Application Deadline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Slot Booking</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Result Declaration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Test Centers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">April 12-18, 2026 (tentative)</td>
                      <td className="border border-gray-300 px-4 py-2">April 5, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">April 6-10, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">April 19-20, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">135+ cities across India</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 2</td>
                      <td className="border border-gray-300 px-4 py-2">April 22-28, 2026 (tentative)</td>
                      <td className="border border-gray-300 px-4 py-2">April 18, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">April 19-21, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">April 29-30, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Additional opportunity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 3</td>
                      <td className="border border-gray-300 px-4 py-2">May 3-8, 2026 (tentative, if conducted)</td>
                      <td className="border border-gray-300 px-4 py-2">April 30, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">May 1-2, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">May 9-10, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final opportunity</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Daily Test Sessions and Shifts</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Shift</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Time Slot</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Reporting Time</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Entry Closure</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Typical Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Morning</td>
                      <td className="border border-gray-300 px-4 py-2">9:00 AM – 11:30 AM</td>
                      <td className="border border-gray-300 px-4 py-2">8:00 AM</td>
                      <td className="border border-gray-300 px-4 py-2">8:45 AM</td>
                      <td className="border border-gray-300 px-4 py-2">30% of daily test takers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Afternoon</td>
                      <td className="border border-gray-300 px-4 py-2">12:30 PM – 3:00 PM</td>
                      <td className="border border-gray-300 px-4 py-2">11:30 AM</td>
                      <td className="border border-gray-300 px-4 py-2">12:15 PM</td>
                      <td className="border border-gray-300 px-4 py-2">40% of daily test takers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Evening</td>
                      <td className="border border-gray-300 px-4 py-2">4:00 PM – 6:30 PM</td>
                      <td className="border border-gray-300 px-4 py-2">3:00 PM</td>
                      <td className="border border-gray-300 px-4 py-2">3:45 PM</td>
                      <td className="border border-gray-300 px-4 py-2">30% of daily test takers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Comprehensive Question Paper Structure</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks per Question</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Total Marks</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Time Allocation</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Difficulty Distribution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">A</td>
                      <td className="border border-gray-300 px-4 py-2">Physics</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">Varies (1-3)</td>
                      <td className="border border-gray-300 px-4 py-2">105</td>
                      <td className="border border-gray-300 px-4 py-2">45 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Easy:12, Medium:18, Hard:5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">B</td>
                      <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">Varies (1-3)</td>
                      <td className="border border-gray-300 px-4 py-2">105</td>
                      <td className="border border-gray-300 px-4 py-2">45 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Easy:12, Medium:18, Hard:5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">C</td>
                      <td className="border border-gray-300 px-4 py-2">Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">40</td>
                      <td className="border border-gray-300 px-4 py-2">Varies (1-3)</td>
                      <td className="border border-gray-300 px-4 py-2">120</td>
                      <td className="border border-gray-300 px-4 py-2">55 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Easy:14, Medium:20, Hard:6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">D</td>
                      <td className="border border-gray-300 px-4 py-2">English</td>
                      <td className="border border-gray-300 px-4 py-2">5</td>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">10</td>
                      <td className="border border-gray-300 px-4 py-2">5 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Easy:3, Medium:2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">E</td>
                      <td className="border border-gray-300 px-4 py-2">Aptitude</td>
                      <td className="border border-gray-300 px-4 py-2">10</td>
                      <td className="border border-gray-300 px-4 py-2">3</td>
                      <td className="border border-gray-300 px-4 py-2">30</td>
                      <td className="border border-gray-300 px-4 py-2">15 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Easy:4, Medium:5, Hard:1</td>
                    </tr>
                    <tr className="bg-gray-50 font-semibold">
                      <td className="border border-gray-300 px-4 py-2">Total</td>
                      <td className="border border-gray-300 px-4 py-2">All Sections</td>
                      <td className="border border-gray-300 px-4 py-2">125</td>
                      <td className="border border-gray-300 px-4 py-2">Variable</td>
                      <td className="border border-gray-300 px-4 py-2">370</td>
                      <td className="border border-gray-300 px-4 py-2">165 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Easy:45, Medium:63, Hard:17</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>Note:</strong> Mathematics can be replaced by Biology for candidates applying to Biotechnology, Biomedical, Genetic Engineering programs
                </p>
            </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Marking Scheme Details</h4>
              <div className="space-y-3 text-gray-700">
                <p><strong>Standard Marking:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Correct Answer:</strong> +3 marks (standard for most questions)</li>
                  <li><strong>Incorrect Answer:</strong> 0 marks (No negative marking)</li>
                  <li><strong>Unanswered:</strong> 0 marks</li>
                  <li><strong>Easy Questions:</strong> May carry +1 or +2 marks</li>
                  <li><strong>Difficult Questions:</strong> Uniformly +3 marks</li>
                </ul>
                
                <p><strong>Subject-wise Maximum Marks:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Physics: 105 marks (35 × 3)</li>
                  <li>Chemistry: 105 marks (35 × 3)</li>
                  <li>Mathematics: 120 marks (40 × 3)</li>
                  <li>English: 10 marks (5 × 2)</li>
                  <li>Aptitude: 30 marks (10 × 3)</li>
                  <li><strong>Total Maximum Score:</strong> 370 marks</li>
                </ul>
          </div>
            </div>

            {/* Comprehensive Syllabus */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Comprehensive Syllabus (CBSE Class XI-XII Standard)</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Physics Detailed Syllabus</h4>
              <div className="space-y-4 text-gray-700">
                      <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 1: Mechanics</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Kinematics:</strong> Motion in straight line, projectile motion, uniform circular motion</li>
                    <li><strong>Laws of Motion:</strong> Newton's laws, friction, dynamics of circular motion</li>
                    <li><strong>Work, Energy & Power:</strong> Work-energy theorem, conservation of energy, collisions</li>
                    <li><strong>Rotational Motion:</strong> Centre of mass, torque, moment of inertia, angular momentum</li>
                    <li><strong>Gravitation:</strong> Universal law, satellite motion, Kepler's laws</li>
                  </ul>
                      </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 2: Properties of Matter</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Elasticity:</strong> Stress, strain, Hooke's law, Young's modulus</li>
                    <li><strong>Surface Tension:</strong> Molecular theory, capillarity, applications</li>
                    <li><strong>Fluid Mechanics:</strong> Pascal's law, Archimedes' principle, Bernoulli's theorem</li>
                  </ul>
                    </div>
                
                      <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 3: Thermodynamics</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Heat & Temperature:</strong> Thermal expansion, calorimetry, heat transfer</li>
                    <li><strong>Kinetic Theory:</strong> Pressure exerted by gas, degrees of freedom</li>
                    <li><strong>Laws of Thermodynamics:</strong> First law, second law, entropy, Carnot engine</li>
                  </ul>
                      </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 4: Electromagnetism</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Electrostatics:</strong> Coulomb's law, electric field, potential, capacitance</li>
                    <li><strong>Current Electricity:</strong> Ohm's law, Kirchhoff's laws, potentiometer</li>
                    <li><strong>Magnetic Effects:</strong> Biot-Savart law, Ampere's law, electromagnetic induction</li>
                    <li><strong>Alternating Current:</strong> AC circuits, LCR circuit, transformer</li>
                  </ul>
                    </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 5: Optics</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Ray Optics:</strong> Reflection, refraction, lenses, optical instruments</li>
                    <li><strong>Wave Optics:</strong> Interference, diffraction, polarization</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 6: Modern Physics</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Dual Nature:</strong> Photoelectric effect, de Broglie hypothesis</li>
                    <li><strong>Atoms:</strong> Bohr's model, hydrogen spectrum</li>
                    <li><strong>Nuclei:</strong> Radioactivity, nuclear fission, fusion</li>
                    <li><strong>Semiconductors:</strong> p-n junction, transistor, communication systems</li>
                  </ul>
                  </div>
                </div>
                
              <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Chemistry Detailed Syllabus</h4>
              <div className="space-y-4 text-gray-700">
                      <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 1: Physical Chemistry</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Atomic Structure:</strong> Quantum mechanical model, electronic configuration</li>
                    <li><strong>Chemical Bonding:</strong> Ionic, covalent, VSEPR theory, hybridization</li>
                    <li><strong>States of Matter:</strong> Gas laws, kinetic theory, solid state</li>
                    <li><strong>Thermodynamics:</strong> Laws of thermodynamics, Gibbs free energy</li>
                    <li><strong>Equilibrium:</strong> Chemical equilibrium, ionic equilibrium, pH</li>
                    <li><strong>Electrochemistry:</strong> Electrochemical cells, Nernst equation</li>
                    <li><strong>Kinetics:</strong> Rate of reaction, Arrhenius equation</li>
                    <li><strong>Solutions:</strong> Colligative properties, Raoult's law</li>
                  </ul>
                      </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 2: Inorganic Chemistry</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Periodic Table:</strong> Trends, s-block, p-block elements</li>
                    <li><strong>d-Block & f-Block:</strong> Transition elements, coordination compounds</li>
                    <li><strong>Metallurgy:</strong> Extraction, refining processes</li>
                  </ul>
                    </div>
                
                      <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 3: Organic Chemistry</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Basic Concepts:</strong> IUPAC nomenclature, isomerism, electronic effects</li>
                    <li><strong>Hydrocarbons:</strong> Alkanes, alkenes, alkynes, aromatic compounds</li>
                    <li><strong>Functional Groups:</strong> Alcohols, phenols, ethers, aldehydes, ketones</li>
                    <li><strong>Carboxylic Acids:</strong> Acids and derivatives, amines</li>
                    <li><strong>Biomolecules:</strong> Carbohydrates, proteins, nucleic acids, vitamins</li>
                    <li><strong>Polymers:</strong> Classification, important polymers</li>
                    <li><strong>Chemistry in Everyday Life:</strong> Drugs, medicines, food chemistry</li>
                  </ul>
                      </div>
                    </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Mathematics Detailed Syllabus</h4>
              <div className="space-y-4 text-gray-700">
                      <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 1: Algebra</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Complex Numbers:</strong> Argand plane, De Moivre's theorem</li>
                    <li><strong>Quadratic Equations:</strong> Nature of roots, discriminant</li>
                    <li><strong>Sequences & Series:</strong> AP, GP, harmonic progression</li>
                    <li><strong>Permutations & Combinations:</strong> Fundamental principle, binomial theorem</li>
                    <li><strong>Matrices:</strong> Operations, determinants, inverse</li>
                  </ul>
                      </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 2: Calculus</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Limits:</strong> Standard limits, L'Hospital's rule</li>
                    <li><strong>Continuity:</strong> Types of discontinuities</li>
                    <li><strong>Differentiation:</strong> Rules, applications, maxima-minima</li>
                    <li><strong>Integration:</strong> Methods, applications, definite integrals</li>
                  </ul>
                    </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 3: Coordinate Geometry</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Straight Lines:</strong> Various forms, angle between lines</li>
                    <li><strong>Circles:</strong> Standard equation, tangents</li>
                    <li><strong>Conic Sections:</strong> Parabola, ellipse, hyperbola</li>
                  </ul>
                  </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 4: 3D Geometry & Vectors</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>3D Coordinates:</strong> Distance formula, section formula</li>
                    <li><strong>Lines & Planes:</strong> Vector forms, angles</li>
                    <li><strong>Vectors:</strong> Dot product, cross product, applications</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 5: Trigonometry</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Trigonometric Functions:</strong> Ratios, identities, equations</li>
                    <li><strong>Inverse Trigonometry:</strong> Principal values, properties</li>
                  </ul>
              </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Unit 6: Probability & Statistics</h5>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Probability:</strong> Conditional probability, Bayes' theorem</li>
                    <li><strong>Statistics:</strong> Measures of central tendency, dispersion</li>
                  </ul>
            </div>
          </div>
            </div>

            {/* Programs and Campuses */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Programs, Specializations, Campuses & Intake</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Campus-wise Complete Program List</h4>
              
              <div className="space-y-6">
                    <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Kattankulathur Campus (Chennai, Tamil Nadu)</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-semibold text-gray-700 mb-2">Computer Science & Engineering Domain (18 specializations):</h6>
                      <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
                        <li>B.Tech Computer Science and Engineering (CSE)</li>
                        <li>B.Tech CSE - Artificial Intelligence and Machine Learning</li>
                        <li>B.Tech CSE - Data Science</li>
                        <li>B.Tech CSE - Internet of Things (IoT)</li>
                        <li>B.Tech CSE - Cyber Security</li>
                        <li>B.Tech CSE - Big Data Analytics</li>
                        <li>B.Tech CSE - Cloud Computing</li>
                        <li>B.Tech CSE - Block Chain Technology</li>
                        <li>B.Tech CSE - Business Systems</li>
                        <li>B.Tech CSE - Gaming Technology</li>
                        <li>B.Tech Computer Science and Business Systems (CSBS)</li>
                        <li>B.Tech Software Engineering</li>
                        <li>B.Tech Information Technology</li>
                        <li>B.Tech Artificial Intelligence and Data Science</li>
                        <li>B.Tech Computer and Communication Engineering</li>
                        <li>B.Tech Computer Science and Engineering (with specialization in Health Informatics)</li>
                        <li>B.Tech CSE with specialization in Augmented Reality/Virtual Reality</li>
                        <li>B.Tech Computational Intelligence</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-700 mb-2">Other Engineering Domains:</h6>
                      <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
                        <li><strong>Electronics & Communication:</strong> ECE, VLSI Design, Communication Systems, IoT, Medical Electronics, Avionics</li>
                        <li><strong>Electrical & Electronics:</strong> EEE, Power Systems, Electric Vehicle Technology, Renewable Energy</li>
                        <li><strong>Mechanical & Automobile:</strong> ME, CAD/CAM, Additive Manufacturing, Automobile, Mechatronics, Robotics, Aerospace</li>
                        <li><strong>Civil & Infrastructure:</strong> Civil Engineering, Smart City Management, Structural Engineering</li>
                        <li><strong>Biotechnology & Life Sciences:</strong> Biotechnology, Biomedical, Genetic Engineering, Food Technology, Bioinformatics</li>
                        <li><strong>Chemical & Materials:</strong> Chemical Engineering, Polymer Engineering, Nanotechnology</li>
                        <li><strong>Interdisciplinary:</strong> Data Science and Engineering, Environmental Engineering, Safety Engineering</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2"><strong>Kattankulathur Intake:</strong> 5,000-5,500 seats across all branches</p>
                  </div>
                  
                    <div>
                  <h5 className="font-semibold text-gray-800 mb-2">NCR Campus (Ghaziabad, Delhi-NCR)</h5>
                  <p className="text-gray-700 mb-2">Engineering Programs (12 programs): CSE, CSE AI/ML, CSE Data Science, IT, ECE, EEE, ME, Mechatronics, Automobile, Civil, CSBS, Biotechnology</p>
                  <p className="text-sm text-gray-600"><strong>NCR Intake:</strong> 1,200-1,400 seats</p>
                    </div>
                  
                    <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Amaravati Campus (Andhra Pradesh)</h5>
                  <p className="text-gray-700 mb-2">Engineering Programs (13 programs): CSE, CSE AI, CSE Data Science, IT, ECE, EEE, ME, Mechatronics, Civil, Chemical, Environmental, CSBS, Robotics and Automation</p>
                  <p className="text-sm text-gray-600"><strong>Amaravati Intake:</strong> 900-1,100 seats</p>
                  </div>
                  
                    <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Sikkim Campus (Sikkim)</h5>
                  <p className="text-gray-700 mb-2">Engineering Programs (8 programs): CSE, CSE AI/ML, IT, ECE, EEE, ME, Civil, Environmental</p>
                  <p className="text-sm text-gray-600"><strong>Sikkim Intake:</strong> 400-500 seats</p>
                    </div>
                  </div>
                  
              <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Total Intake Statistics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Overall B.Tech Seats: 7,500-8,500 annually</h5>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Kattankulathur: 65-68% (5,000-5,500 seats)</li>
                    <li>NCR: 15-17% (1,200-1,400 seats)</li>
                    <li>Amaravati: 11-13% (900-1,100 seats)</li>
                    <li>Sikkim: 5-6% (400-500 seats)</li>
                  </ul>
                    </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Branch-wise Intake (Approximate):</h5>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>CSE and variants: 35-40% (2,800-3,400 seats)</li>
                    <li>ECE and variants: 20-25% (1,600-2,000 seats)</li>
                    <li>EEE and variants: 10-12% (800-1,000 seats)</li>
                    <li>Mechanical and variants: 12-15% (960-1,200 seats)</li>
                    <li>Civil: 5-7% (400-560 seats)</li>
                    <li>Biotechnology/Biomedical: 4-5% (320-400 seats)</li>
                    <li>Others: 8-10% (640-800 seats)</li>
                  </ul>
                  </div>
                    </div>
                  </div>
                  
            {/* Detailed Cutoff Analysis */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Cutoff Analysis (2025 & Expected 2026)</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Kattankulathur Campus Cutoffs</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Opening Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Opening</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Closing</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Seat Capacity</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Avg Score Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE (Core)</td>
                      <td className="border border-gray-300 px-4 py-2">1,500</td>
                      <td className="border border-gray-300 px-4 py-2">6,000</td>
                      <td className="border border-gray-300 px-4 py-2">1,200</td>
                      <td className="border border-gray-300 px-4 py-2">7,000</td>
                      <td className="border border-gray-300 px-4 py-2">600</td>
                      <td className="border border-gray-300 px-4 py-2">240-260/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE AI/ML</td>
                      <td className="border border-gray-300 px-4 py-2">3,000</td>
                      <td className="border border-gray-300 px-4 py-2">8,000</td>
                      <td className="border border-gray-300 px-4 py-2">2,500</td>
                      <td className="border border-gray-300 px-4 py-2">9,000</td>
                      <td className="border border-gray-300 px-4 py-2">480</td>
                      <td className="border border-gray-300 px-4 py-2">225-245/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE Data Science</td>
                      <td className="border border-gray-300 px-4 py-2">4,000</td>
                      <td className="border border-gray-300 px-4 py-2">9,500</td>
                      <td className="border border-gray-300 px-4 py-2">3,500</td>
                      <td className="border border-gray-300 px-4 py-2">10,500</td>
                      <td className="border border-gray-300 px-4 py-2">360</td>
                      <td className="border border-gray-300 px-4 py-2">215-235/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE Cyber Security</td>
                      <td className="border border-gray-300 px-4 py-2">5,000</td>
                      <td className="border border-gray-300 px-4 py-2">11,000</td>
                      <td className="border border-gray-300 px-4 py-2">4,500</td>
                      <td className="border border-gray-300 px-4 py-2">12,000</td>
                      <td className="border border-gray-300 px-4 py-2">240</td>
                      <td className="border border-gray-300 px-4 py-2">205-225/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Technology</td>
                      <td className="border border-gray-300 px-4 py-2">4,500</td>
                      <td className="border border-gray-300 px-4 py-2">10,000</td>
                      <td className="border border-gray-300 px-4 py-2">4,000</td>
                      <td className="border border-gray-300 px-4 py-2">11,000</td>
                      <td className="border border-gray-300 px-4 py-2">300</td>
                      <td className="border border-gray-300 px-4 py-2">210-230/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">7,000</td>
                      <td className="border border-gray-300 px-4 py-2">12,000</td>
                      <td className="border border-gray-300 px-4 py-2">6,500</td>
                      <td className="border border-gray-300 px-4 py-2">13,000</td>
                      <td className="border border-gray-300 px-4 py-2">420</td>
                      <td className="border border-gray-300 px-4 py-2">195-215/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">12,000</td>
                      <td className="border border-gray-300 px-4 py-2">20,000</td>
                      <td className="border border-gray-300 px-4 py-2">11,000</td>
                      <td className="border border-gray-300 px-4 py-2">21,000</td>
                      <td className="border border-gray-300 px-4 py-2">300</td>
                      <td className="border border-gray-300 px-4 py-2">160-180/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical</td>
                      <td className="border border-gray-300 px-4 py-2">14,000</td>
                      <td className="border border-gray-300 px-4 py-2">22,000</td>
                      <td className="border border-gray-300 px-4 py-2">13,000</td>
                      <td className="border border-gray-300 px-4 py-2">23,000</td>
                      <td className="border border-gray-300 px-4 py-2">360</td>
                      <td className="border border-gray-300 px-4 py-2">155-175/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil</td>
                      <td className="border border-gray-300 px-4 py-2">18,000</td>
                      <td className="border border-gray-300 px-4 py-2">28,000</td>
                      <td className="border border-gray-300 px-4 py-2">17,000</td>
                      <td className="border border-gray-300 px-4 py-2">29,000</td>
                      <td className="border border-gray-300 px-4 py-2">240</td>
                      <td className="border border-gray-300 px-4 py-2">140-160/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Biotechnology</td>
                      <td className="border border-gray-300 px-4 py-2">16,000</td>
                      <td className="border border-gray-300 px-4 py-2">25,000</td>
                      <td className="border border-gray-300 px-4 py-2">15,000</td>
                      <td className="border border-gray-300 px-4 py-2">26,000</td>
                      <td className="border border-gray-300 px-4 py-2">180</td>
                      <td className="border border-gray-300 px-4 py-2">145-165/370</td>
                    </tr>
                  </tbody>
                </table>
                    </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">NCR Campus Cutoffs</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Opening Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Opening</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Closing</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Seat Capacity</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Avg Score Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                      <td className="border border-gray-300 px-4 py-2">8,000</td>
                      <td className="border border-gray-300 px-4 py-2">14,000</td>
                      <td className="border border-gray-300 px-4 py-2">7,500</td>
                      <td className="border border-gray-300 px-4 py-2">15,000</td>
                      <td className="border border-gray-300 px-4 py-2">300</td>
                      <td className="border border-gray-300 px-4 py-2">185-205/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE AI/ML</td>
                      <td className="border border-gray-300 px-4 py-2">10,000</td>
                      <td className="border border-gray-300 px-4 py-2">16,000</td>
                      <td className="border border-gray-300 px-4 py-2">9,500</td>
                      <td className="border border-gray-300 px-4 py-2">17,000</td>
                      <td className="border border-gray-300 px-4 py-2">180</td>
                      <td className="border border-gray-300 px-4 py-2">175-195/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">15,000</td>
                      <td className="border border-gray-300 px-4 py-2">22,000</td>
                      <td className="border border-gray-300 px-4 py-2">14,000</td>
                      <td className="border border-gray-300 px-4 py-2">23,000</td>
                      <td className="border border-gray-300 px-4 py-2">180</td>
                      <td className="border border-gray-300 px-4 py-2">155-175/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical</td>
                      <td className="border border-gray-300 px-4 py-2">18,000</td>
                      <td className="border border-gray-300 px-4 py-2">26,000</td>
                      <td className="border border-gray-300 px-4 py-2">17,000</td>
                      <td className="border border-gray-300 px-4 py-2">27,000</td>
                      <td className="border border-gray-300 px-4 py-2">180</td>
                      <td className="border border-gray-300 px-4 py-2">145-165/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">17,000</td>
                      <td className="border border-gray-300 px-4 py-2">25,000</td>
                      <td className="border border-gray-300 px-4 py-2">16,000</td>
                      <td className="border border-gray-300 px-4 py-2">26,000</td>
                      <td className="border border-gray-300 px-4 py-2">120</td>
                      <td className="border border-gray-300 px-4 py-2">148-168/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil</td>
                      <td className="border border-gray-300 px-4 py-2">22,000</td>
                      <td className="border border-gray-300 px-4 py-2">32,000</td>
                      <td className="border border-gray-300 px-4 py-2">21,000</td>
                      <td className="border border-gray-300 px-4 py-2">33,000</td>
                      <td className="border border-gray-300 px-4 py-2">120</td>
                      <td className="border border-gray-300 px-4 py-2">130-150/370</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                  
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Amaravati Campus Cutoffs</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Opening Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Opening</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Closing</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Seat Capacity</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Avg Score Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                      <td className="border border-gray-300 px-4 py-2">10,000</td>
                      <td className="border border-gray-300 px-4 py-2">16,000</td>
                      <td className="border border-gray-300 px-4 py-2">9,500</td>
                      <td className="border border-gray-300 px-4 py-2">17,000</td>
                      <td className="border border-gray-300 px-4 py-2">240</td>
                      <td className="border border-gray-300 px-4 py-2">175-195/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE AI</td>
                      <td className="border border-gray-300 px-4 py-2">12,000</td>
                      <td className="border border-gray-300 px-4 py-2">18,000</td>
                      <td className="border border-gray-300 px-4 py-2">11,500</td>
                      <td className="border border-gray-300 px-4 py-2">19,000</td>
                      <td className="border border-gray-300 px-4 py-2">120</td>
                      <td className="border border-gray-300 px-4 py-2">165-185/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">16,000</td>
                      <td className="border border-gray-300 px-4 py-2">24,000</td>
                      <td className="border border-gray-300 px-4 py-2">15,500</td>
                      <td className="border border-gray-300 px-4 py-2">25,000</td>
                      <td className="border border-gray-300 px-4 py-2">120</td>
                      <td className="border border-gray-300 px-4 py-2">150-170/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical</td>
                      <td className="border border-gray-300 px-4 py-2">19,000</td>
                      <td className="border border-gray-300 px-4 py-2">28,000</td>
                      <td className="border border-gray-300 px-4 py-2">18,500</td>
                      <td className="border border-gray-300 px-4 py-2">29,000</td>
                      <td className="border border-gray-300 px-4 py-2">120</td>
                      <td className="border border-gray-300 px-4 py-2">142-162/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">18,000</td>
                      <td className="border border-gray-300 px-4 py-2">27,000</td>
                      <td className="border border-gray-300 px-4 py-2">17,500</td>
                      <td className="border border-gray-300 px-4 py-2">28,000</td>
                      <td className="border border-gray-300 px-4 py-2">90</td>
                      <td className="border border-gray-300 px-4 py-2">145-165/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil</td>
                      <td className="border border-gray-300 px-4 py-2">23,000</td>
                      <td className="border border-gray-300 px-4 py-2">34,000</td>
                      <td className="border border-gray-300 px-4 py-2">22,500</td>
                      <td className="border border-gray-300 px-4 py-2">35,000</td>
                      <td className="border border-gray-300 px-4 py-2">90</td>
                      <td className="border border-gray-300 px-4 py-2">128-148/370</td>
                    </tr>
                  </tbody>
                </table>
                    </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Sikkim Campus Cutoffs</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Opening Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank (2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Opening</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Closing</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Seat Capacity</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Avg Score Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                      <td className="border border-gray-300 px-4 py-2">15,000</td>
                      <td className="border border-gray-300 px-4 py-2">25,000</td>
                      <td className="border border-gray-300 px-4 py-2">14,500</td>
                      <td className="border border-gray-300 px-4 py-2">28,000</td>
                      <td className="border border-gray-300 px-4 py-2">120</td>
                      <td className="border border-gray-300 px-4 py-2">145-165/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE AI/ML</td>
                      <td className="border border-gray-300 px-4 py-2">18,000</td>
                      <td className="border border-gray-300 px-4 py-2">28,000</td>
                      <td className="border border-gray-300 px-4 py-2">17,500</td>
                      <td className="border border-gray-300 px-4 py-2">30,000</td>
                      <td className="border border-gray-300 px-4 py-2">60</td>
                      <td className="border border-gray-300 px-4 py-2">138-158/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">22,000</td>
                      <td className="border border-gray-300 px-4 py-2">32,000</td>
                      <td className="border border-gray-300 px-4 py-2">21,500</td>
                      <td className="border border-gray-300 px-4 py-2">34,000</td>
                      <td className="border border-gray-300 px-4 py-2">60</td>
                      <td className="border border-gray-300 px-4 py-2">130-150/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical</td>
                      <td className="border border-gray-300 px-4 py-2">25,000</td>
                      <td className="border border-gray-300 px-4 py-2">38,000</td>
                      <td className="border border-gray-300 px-4 py-2">24,500</td>
                      <td className="border border-gray-300 px-4 py-2">40,000</td>
                      <td className="border border-gray-300 px-4 py-2">60</td>
                      <td className="border border-gray-300 px-4 py-2">120-140/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">24,000</td>
                      <td className="border border-gray-300 px-4 py-2">36,000</td>
                      <td className="border border-gray-300 px-4 py-2">23,500</td>
                      <td className="border border-gray-300 px-4 py-2">38,000</td>
                      <td className="border border-gray-300 px-4 py-2">45</td>
                      <td className="border border-gray-300 px-4 py-2">123-143/370</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil</td>
                      <td className="border border-gray-300 px-4 py-2">28,000</td>
                      <td className="border border-gray-300 px-4 py-2">42,000</td>
                      <td className="border border-gray-300 px-4 py-2">27,500</td>
                      <td className="border border-gray-300 px-4 py-2">45,000</td>
                      <td className="border border-gray-300 px-4 py-2">45</td>
                      <td className="border border-gray-300 px-4 py-2">115-135/370</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                  
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Category-wise Cutoff Variations</h4>
              <div className="space-y-3 text-gray-700">
                    <div>
                  <p><strong>General Category:</strong> Base cutoffs as mentioned above</p>
                    </div>
                <div>
                  <p><strong>OBC (Non-Creamy Layer):</strong> Typically 1,000-2,000 ranks relaxation</p>
                  <p className="text-sm text-gray-600 ml-4">Example: CSE KTR General closing 7,000 → OBC closing ~9,000</p>
                  </div>
                <div>
                  <p><strong>SC Category:</strong> Typically 3,000-5,000 ranks relaxation</p>
                  <p className="text-sm text-gray-600 ml-4">Example: CSE KTR General closing 7,000 → SC closing ~12,000</p>
                </div>
                <div>
                  <p><strong>ST Category:</strong> Typically 4,000-6,000 ranks relaxation</p>
                  <p className="text-sm text-gray-600 ml-4">Example: CSE KTR General closing 7,000 → ST closing ~13,000</p>
              </div>
                <div>
                  <p><strong>PWD Category:</strong> Additional 5-10% relaxation over respective category</p>
                  <p className="text-sm text-gray-600 ml-4">Separate horizontal reservation across all categories</p>
                </div>
                <div>
                  <p><strong>NRI/PIO/OCI/Foreign National Quota:</strong> Direct admission based on SRMJEEE marks (no rank cutoff)</p>
                  <p className="text-sm text-gray-600 ml-4">Minimum qualifying score: 100-120/370 for premium branches</p>
              </div>
            </div>
          </div>

            {/* Fee Structure */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fee Structure (2026, Approximate)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch/Campus</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tuition Fee/Year</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Hostel/Year</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mess/Year</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Admission Fee (One Time)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Total 4 Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">CSE (KTR/NCR/AMA)</td>
                      <td className="border border-gray-300 px-4 py-2">₹2,75,000-₹3,75,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹75,000-₹1,20,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹63,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹10,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹12-16 lakh</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Branches (ECE/EEE/ME)</td>
                      <td className="border border-gray-300 px-4 py-2">₹2,50,000-₹2,75,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹75,000+</td>
                      <td className="border border-gray-300 px-4 py-2">₹63,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹10,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹11-12 lakh</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Sikkim</td>
                      <td className="border border-gray-300 px-4 py-2">₹2,00,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹60,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹55,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                      <td className="border border-gray-300 px-4 py-2">₹8-9 lakh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Additional Expenses:</strong> Books/study material, laptop, health insurance.
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Fee Waivers</h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>100% for Rank 1-1000 (KTR), 50% for 1001-5000, 25% for 5001-7000</li>
                  <li>Scholarship schemes for topper girls, economically weaker sections, state rankers</li>
                  </ul>
              </div>
                </div>
                
            {/* Placements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Placements (2024-2025 Data)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Statistics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Highest Domestic CTC:</strong> ₹57 LPA (2024), Multiple &gt;₹40 LPA</li>
                    <li><strong>Average CTC (Overall):</strong> ₹8.7 LPA; CSE Avg: ₹11.5 LPA</li>
                    <li><strong>Median CTC:</strong> ₹7–8 LPA</li>
                    <li><strong>Placement Rate:</strong> 95–98% UG batch</li>
                    <li><strong>International Offers:</strong> 10+ per year (Japan/Europe)</li>
                    <li><strong>PPOs & Dream Offers:</strong> 150+ each</li>
                    <li><strong>Companies:</strong> 600+ companies visit across 3 phases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Top Recruiters</h4>
                  <p className="text-gray-700">
                    Microsoft, Amazon, Google, TCS, Wipro, Infosys, Cognizant, Accenture, Tech Mahindra, Capgemini, L&T, Deloitte, Morgan Stanley, Bank of America, PayPal, Siemens, CISCO, Zoho
                  </p>
                </div>
              </div>
                </div>
                
            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Campus Amenities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Hostels:</strong> Boys/girls separate, 25+ hostels, AC and non-AC rooms, Biometrics, CCTV</li>
                    <li><strong>Library:</strong> More than 2 lakh books, 10,000+ journals, e-learning portal (NPTEL/SWAYAM)</li>
                    <li><strong>Labs:</strong> 200+ state-of-the-art teaching/research labs, Apple iOS Center, Siemens Lab, Nanotechnology, Supercomputing, AI/ML, AWS & Google Cloud Academy</li>
                    <li><strong>Sports:</strong> FIFA-standard floodlit grounds, basketball/tennis/badminton/squash, Olympic swimming pools, gymnasiums, yoga/meditation halls, SRM Premier League cricket</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Additional Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Food:</strong> 15+ messes/cafeterias, North/South/Continental cuisines, 24x7 night canteens</li>
                    <li><strong>Medical:</strong> 24x7 SRM Medical College Hospital on campus (150+ beds)</li>
                    <li><strong>Banks:</strong> Several (ICICI, SBI, City Union, etc.) with on-campus branches and ATMs</li>
                    <li><strong>Retail:</strong> Bookstores, stationery, cycle shop, computer stores, laundry, beauty salons</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Official Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">General Contact</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Website:</strong> <a href="https://www.srmist.edu.in" className="text-blue-600 hover:underline">https://www.srmist.edu.in</a></li>
                    <li><strong>Email:</strong> admissions.india@srmist.edu.in</li>
                    <li><strong>Phone (Kattankulathur):</strong> +91-44-27455510, +91-44-27417777</li>
                    <li><strong>Toll-Free:</strong> 1800-102-1525</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Address</h4>
                  <p className="text-gray-700">
                    SRM Institute of Science and Technology (SRMIST),<br />
                    Kattankulathur, Chengalpattu,<br />
                    Tamil Nadu – 603203, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            {/* SRMJEEE 2026 Important Dates - Complete Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026 Important Dates</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Phase-wise Detailed Timeline</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Phase 1 (Primary Admission Phase)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Additional Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Official Notification Release</td>
                      <td className="border border-gray-300 px-4 py-2">October 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Published on srmist.edu.in and applications.srmist.edu.in/btech</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Brochure Release</td>
                      <td className="border border-gray-300 px-4 py-2">October 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Complete details of courses, eligibility, fees, syllabus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Portal Opening</td>
                      <td className="border border-gray-300 px-4 py-2">November 12, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Online registration begins at applications.srmist.edu.in/btech</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Early Application Period</td>
                      <td className="border border-gray-300 px-4 py-2">November 12, 2025 - January 31, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Recommended period for early application</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Peak Application Period</td>
                      <td className="border border-gray-300 px-4 py-2">February 1 - March 31, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">High volume of applications expected</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Last Date for Registration</td>
                      <td className="border border-gray-300 px-4 py-2">April 16, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final deadline without late fee</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Late Registration (if available)</td>
                      <td className="border border-gray-300 px-4 py-2">April 17-20, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">May incur additional late fee charges</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Form Correction Window</td>
                      <td className="border border-gray-300 px-4 py-2">April 2026 (2-3 days)</td>
                      <td className="border border-gray-300 px-4 py-2">Candidates can edit application details</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release Notification</td>
                      <td className="border border-gray-300 px-4 py-2">First week of April 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Email/SMS notification to registered candidates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Opens</td>
                      <td className="border border-gray-300 px-4 py-2">April 18-20, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Choose exam date, time slot, and test center</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mock Test Access Opens</td>
                      <td className="border border-gray-300 px-4 py-2">April 10-27, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Practice test available on exam portal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Download Opens</td>
                      <td className="border border-gray-300 px-4 py-2">After slot booking completion</td>
                      <td className="border border-gray-300 px-4 py-2">Available immediately post slot confirmation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Last Date for Slot Booking</td>
                      <td className="border border-gray-300 px-4 py-2">24 hours before chosen exam slot</td>
                      <td className="border border-gray-300 px-4 py-2">System closes slot booking automatically</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Technical Support Helpline Active</td>
                      <td className="border border-gray-300 px-4 py-2">April 20-27, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">For exam-related technical queries</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Dates - Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">April 22-27, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple slots per day across 6 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Morning Slot</td>
                      <td className="border border-gray-300 px-4 py-2">10:00 AM - 12:30 PM</td>
                      <td className="border border-gray-300 px-4 py-2">Login starts 9:30 AM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Afternoon Slot</td>
                      <td className="border border-gray-300 px-4 py-2">2:00 PM - 4:30 PM</td>
                      <td className="border border-gray-300 px-4 py-2">Login starts 1:30 PM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Answer Key Release (Provisional)</td>
                      <td className="border border-gray-300 px-4 py-2">Within 24-48 hours of each slot</td>
                      <td className="border border-gray-300 px-4 py-2">Candidates can download from portal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Answer Key Challenge Window</td>
                      <td className="border border-gray-300 px-4 py-2">2-3 days after provisional release</td>
                      <td className="border border-gray-300 px-4 py-2">Submit objections with supporting documents</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Final Answer Key Release</td>
                      <td className="border border-gray-300 px-4 py-2">Last week of April 2026</td>
                      <td className="border border-gray-300 px-4 py-2">After reviewing all challenges</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration - Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Last week of April / First week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Rank card available for download</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Scorecard Download</td>
                      <td className="border border-gray-300 px-4 py-2">After result declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Individual marks, rank, percentile available</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration Opens</td>
                      <td className="border border-gray-300 px-4 py-2">First week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Qualified candidates can register</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Document Verification (Online)</td>
                      <td className="border border-gray-300 px-4 py-2">May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Upload scanned documents for verification</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Fee Payment</td>
                      <td className="border border-gray-300 px-4 py-2">May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Non-refundable registration fee</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling Opens</td>
                      <td className="border border-gray-300 px-4 py-2">Second week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Select campus, branch preferences (unlimited changes allowed)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling Closes</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final deadline for preference submission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mock Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Before actual allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Practice round to understand process</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Round 1 Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Third week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Based on rank, preferences, seat availability</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Acceptance & Fee Payment</td>
                      <td className="border border-gray-300 px-4 py-2">Within 3-5 days of allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Accept seat and pay counselling fee (₹50,000-₹1,00,000)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Provisional Admission Letter (PAL)</td>
                      <td className="border border-gray-300 px-4 py-2">After fee payment</td>
                      <td className="border border-gray-300 px-4 py-2">Digital letter issued immediately</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Balance Fee Payment Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">Late May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Pay remaining tuition fee amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Online Enrollment Process</td>
                      <td className="border border-gray-300 px-4 py-2">Late May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Complete student profile, bio-data submission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Spot Round (if seats vacant)</td>
                      <td className="border border-gray-300 px-4 py-2">End of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Additional round for unfilled seats</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physical Document Verification</td>
                      <td className="border border-gray-300 px-4 py-2">May-June 2026 (on campus)</td>
                      <td className="border border-gray-300 px-4 py-2">Original certificates verification at campus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class Commencement</td>
                      <td className="border border-gray-300 px-4 py-2">First week of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Academic session begins</td>
                    </tr>
                  </tbody>
                </table>
                    </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Phase 2 (Extended Admission Phase)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Additional Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 2 Registration Opens</td>
                      <td className="border border-gray-300 px-4 py-2">March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Parallel to Phase 1 ongoing process</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Updates</td>
                      <td className="border border-gray-300 px-4 py-2">March-May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Updates on seat availability after Phase 1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Peak Application Period</td>
                      <td className="border border-gray-300 px-4 py-2">April-May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Students who missed Phase 1 or want better score</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Last Date for Registration</td>
                      <td className="border border-gray-300 px-4 py-2">June 10, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final deadline for Phase 2 applications</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Correction Window</td>
                      <td className="border border-gray-300 px-4 py-2">June 2026 (2 days)</td>
                      <td className="border border-gray-300 px-4 py-2">Limited window for corrections</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Opens</td>
                      <td className="border border-gray-300 px-4 py-2">June 8-10, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Choose exam slot for Phase 2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mock Test Access</td>
                      <td className="border border-gray-300 px-4 py-2">June 5-17, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Practice portal access</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Download</td>
                      <td className="border border-gray-300 px-4 py-2">After slot booking</td>
                      <td className="border border-gray-300 px-4 py-2">Immediate download after slot confirmation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Dates - Phase 2</td>
                      <td className="border border-gray-300 px-4 py-2">June 12-17, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">6-day exam window with multiple slots</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Morning Slot</td>
                      <td className="border border-gray-300 px-4 py-2">10:00 AM - 12:30 PM</td>
                      <td className="border border-gray-300 px-4 py-2">Login from 9:30 AM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Afternoon Slot</td>
                      <td className="border border-gray-300 px-4 py-2">2:00 PM - 4:30 PM</td>
                      <td className="border border-gray-300 px-4 py-2">Login from 1:30 PM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Provisional Answer Key</td>
                      <td className="border border-gray-300 px-4 py-2">Within 24-48 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Slot-wise answer keys</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Answer Key Challenge Period</td>
                      <td className="border border-gray-300 px-4 py-2">2-3 days</td>
                      <td className="border border-gray-300 px-4 py-2">Submit objections online</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Final Answer Key</td>
                      <td className="border border-gray-300 px-4 py-2">Third week of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Post-challenge review</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration - Phase 2</td>
                      <td className="border border-gray-300 px-4 py-2">Last week of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Rank card with AIR and phase rank</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Combined Rank List Update</td>
                      <td className="border border-gray-300 px-4 py-2">After Phase 2 results</td>
                      <td className="border border-gray-300 px-4 py-2">Best score from Phase 1 & 2 considered</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration</td>
                      <td className="border border-gray-300 px-4 py-2">Last week of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">For Phase 2 candidates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Document Upload & Verification</td>
                      <td className="border border-gray-300 px-4 py-2">Late June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Online document submission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling Opens</td>
                      <td className="border border-gray-300 px-4 py-2">Fourth week of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Campus and branch selection</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">End of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final preference submission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Round 2 Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">First week of July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Based on updated merit list</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Acceptance & Fee Payment</td>
                      <td className="border border-gray-300 px-4 py-2">Within 3-5 days</td>
                      <td className="border border-gray-300 px-4 py-2">Accept allotted seat and pay fees</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Balance Fee Payment</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Complete fee payment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physical Verification</td>
                      <td className="border border-gray-300 px-4 py-2">July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">On-campus document check</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Classes Begin</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Join ongoing academic session</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                  
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Phase 3 (Final Admission Phase)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Additional Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 3 Registration Opens</td>
                      <td className="border border-gray-300 px-4 py-2">May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">For candidates seeking final opportunity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Availability Announcement</td>
                      <td className="border border-gray-300 px-4 py-2">After Phase 1 & 2 allotments</td>
                      <td className="border border-gray-300 px-4 py-2">Remaining vacant seats published</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Last Date for Registration</td>
                      <td className="border border-gray-300 px-4 py-2">July 2, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final and absolute deadline</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">No Correction Window</td>
                      <td className="border border-gray-300 px-4 py-2">N/A</td>
                      <td className="border border-gray-300 px-4 py-2">Applications must be accurate initially</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking</td>
                      <td className="border border-gray-300 px-4 py-2">July 1-3, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Very limited window</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mock Test Available</td>
                      <td className="border border-gray-300 px-4 py-2">June 25 - July 5, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Practice opportunity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Download</td>
                      <td className="border border-gray-300 px-4 py-2">After slot booking</td>
                      <td className="border border-gray-300 px-4 py-2">Digital admit card</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Dates - Phase 3</td>
                      <td className="border border-gray-300 px-4 py-2">July 4-5, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Short 2-day examination window</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Morning Slot</td>
                      <td className="border border-gray-300 px-4 py-2">10:00 AM - 12:30 PM</td>
                      <td className="border border-gray-300 px-4 py-2">Standard timing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Afternoon Slot</td>
                      <td className="border border-gray-300 px-4 py-2">2:00 PM - 4:30 PM</td>
                      <td className="border border-gray-300 px-4 py-2">Standard timing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Provisional Answer Key</td>
                      <td className="border border-gray-300 px-4 py-2">Within 24 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Quick release for faster processing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Challenge Window</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 days only</td>
                      <td className="border border-gray-300 px-4 py-2">Abbreviated challenge period</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Final Answer Key</td>
                      <td className="border border-gray-300 px-4 py-2">Second week of July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">After review</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration - Phase 3</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final rank list of 2026 cycle</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Final Combined Merit List</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Best scores from all three phases</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Limited seats available</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Rapid Choice Filling</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026 (1-2 days)</td>
                      <td className="border border-gray-300 px-4 py-2">Quick preference submission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Final Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Third week of July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Last allotment round</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Immediate Fee Payment</td>
                      <td className="border border-gray-300 px-4 py-2">Within 24-48 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Faster payment deadline</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Document Verification</td>
                      <td className="border border-gray-300 px-4 py-2">Late July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Expedited verification</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Spot Admission (Walk-in)</td>
                      <td className="border border-gray-300 px-4 py-2">Last week of July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">For any remaining vacant seats</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Classes Join</td>
                      <td className="border border-gray-300 px-4 py-2">August 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Join academic session in progress</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Academic Calendar Adjustment</td>
                      <td className="border border-gray-300 px-4 py-2">Provided to late joiners</td>
                      <td className="border border-gray-300 px-4 py-2">Catch-up plan and extra classes</td>
                    </tr>
                  </tbody>
                </table>
                    </div>
                  </div>
                  
            {/* Application Process - Detailed */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Process - Detailed</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Pre-Registration Phase</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Step</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Research & Information Gathering</td>
                      <td className="border border-gray-300 px-4 py-2">October - November 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Visit official website, download brochure, understand eligibility</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Eligibility Self-Assessment</td>
                      <td className="border border-gray-300 px-4 py-2">Before registration</td>
                      <td className="border border-gray-300 px-4 py-2">Check age (≥16 by July 31, 2026), 10+2 passed/appearing, 60% in PCM/PCB</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Document Collection</td>
                      <td className="border border-gray-300 px-4 py-2">November 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Gather Class 10 marksheet, Class 12 marksheet/admit card, ID proof, photos</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Email & Mobile Verification</td>
                      <td className="border border-gray-300 px-4 py-2">Before starting form</td>
                      <td className="border border-gray-300 px-4 py-2">Ensure active email and mobile number (all communications sent here)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Fee Arrangement</td>
                      <td className="border border-gray-300 px-4 py-2">Before application</td>
                      <td className="border border-gray-300 px-4 py-2">Keep ₹1,400 ready for online payment (per phase)</td>
                    </tr>
                  </tbody>
                </table>
                    </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Registration Process (20-30 minutes)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Step</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Action Required</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Important Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Visit Portal</td>
                      <td className="border border-gray-300 px-4 py-2">Go to applications.srmist.edu.in/btech</td>
                      <td className="border border-gray-300 px-4 py-2">Use Chrome/Firefox for best experience</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Click "New Registration"</td>
                      <td className="border border-gray-300 px-4 py-2">Select appropriate phase (1/2/3)</td>
                      <td className="border border-gray-300 px-4 py-2">Cannot apply for same phase twice</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Enter Basic Details</td>
                      <td className="border border-gray-300 px-4 py-2">Name, DOB, Email ID, Mobile Number, Password</td>
                      <td className="border border-gray-300 px-4 py-2">Use permanent email & mobile (valid for 4 years)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Verify Email</td>
                      <td className="border border-gray-300 px-4 py-2">Click verification link sent to email</td>
                      <td className="border border-gray-300 px-4 py-2">Link valid for 24 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Verify Mobile</td>
                      <td className="border border-gray-300 px-4 py-2">Enter OTP sent to mobile</td>
                      <td className="border border-gray-300 px-4 py-2">OTP valid for 10 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Create Login Credentials</td>
                      <td className="border border-gray-300 px-4 py-2">Note down Registration ID & Password</td>
                      <td className="border border-gray-300 px-4 py-2">Keep safely - needed throughout admission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Re-login</td>
                      <td className="border border-gray-300 px-4 py-2">Login with new credentials</td>
                      <td className="border border-gray-300 px-4 py-2">System may auto-logout after registration</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                  
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Application Form Filling (45-60 minutes)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details to Fill</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tips</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Personal Information</td>
                      <td className="border border-gray-300 px-4 py-2">Full name (as per Class 10), Gender, DOB, Father's name, Mother's name, Guardian details, Nationality, Aadhaar number</td>
                      <td className="border border-gray-300 px-4 py-2">Match name exactly with Class 10 certificate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Category Information</td>
                      <td className="border border-gray-300 px-4 py-2">General/OBC/SC/ST/PWD, Religion, Annual family income</td>
                      <td className="border border-gray-300 px-4 py-2">Keep caste/income certificate ready if applicable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Contact Details</td>
                      <td className="border border-gray-300 px-4 py-2">Permanent address, Communication address, Pin code, State, District</td>
                      <td className="border border-gray-300 px-4 py-2">Mobile & email already captured in registration</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Academic Details - Class 10</td>
                      <td className="border border-gray-300 px-4 py-2">Board name, Roll number, Passing year, Percentage/CGPA, School name</td>
                      <td className="border border-gray-300 px-4 py-2">Upload Class 10 marksheet (PDF, max 500 KB)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Academic Details - Class 12</td>
                      <td className="border border-gray-300 px-4 py-2">Board (CBSE/State), Stream (PCM/PCB), School name, Roll no, Appearing/Passed</td>
                      <td className="border border-gray-300 px-4 py-2">If appearing, upload admit card or school ID</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Subject-wise Marks (12th)</td>
                      <td className="border border-gray-300 px-4 py-2">Physics marks, Chemistry marks, Mathematics/Biology marks, Total marks, Percentage</td>
                      <td className="border border-gray-300 px-4 py-2">For passed students - upload marksheet</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Program Preferences</td>
                      <td className="border border-gray-300 px-4 py-2">Select B.Tech, Campus interest (can modify during counselling)</td>
                      <td className="border border-gray-300 px-4 py-2">Not final - actual choice filling during counselling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Center Preference</td>
                      <td className="border border-gray-300 px-4 py-2">First choice city, Second choice, Third choice</td>
                      <td className="border border-gray-300 px-4 py-2">Select nearest cities with test centers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Special Categories</td>
                      <td className="border border-gray-300 px-4 py-2">NRI/PIO/OCI, Defense quota, Sports quota, Disability certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Upload supporting documents if applicable</td>
                    </tr>
                  </tbody>
                </table>
                    </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Document Upload Requirements</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Document</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Specifications</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mandatory/Optional</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Recent Photograph</td>
                      <td className="border border-gray-300 px-4 py-2">JPEG/JPG, 10-50 KB, Passport size, White background, Face 70-80% of photo</td>
                      <td className="border border-gray-300 px-4 py-2">Mandatory</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Signature</td>
                      <td className="border border-gray-300 px-4 py-2">JPEG/JPG, 10-30 KB, Black ink on white paper, Clear and legible</td>
                      <td className="border border-gray-300 px-4 py-2">Mandatory</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 10 Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">PDF format, Max 500 KB, Clear and readable</td>
                      <td className="border border-gray-300 px-4 py-2">Mandatory</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Marksheet/Admit Card</td>
                      <td className="border border-gray-300 px-4 py-2">PDF format, Max 500 KB, All pages if multiple</td>
                      <td className="border border-gray-300 px-4 py-2">Mandatory</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Category Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">SC/ST/OBC certificate, PDF, Max 500 KB, Valid format</td>
                      <td className="border border-gray-300 px-4 py-2">If claiming reservation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PWD Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Disability certificate, PDF, Issued by competent authority, Min 40% disability</td>
                      <td className="border border-gray-300 px-4 py-2">If applicable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Income Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">For EWS scholarship, Issued within 6 months, PDF, Max 500 KB</td>
                      <td className="border border-gray-300 px-4 py-2">If claiming fee waiver</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Aadhaar Card</td>
                      <td className="border border-gray-300 px-4 py-2">PDF, Max 500 KB, Clear scan</td>
                      <td className="border border-gray-300 px-4 py-2">Mandatory</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Domicile Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">State domicile, PDF format</td>
                      <td className="border border-gray-300 px-4 py-2">Optional but helpful</td>
                    </tr>
                  </tbody>
                </table>
                  </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Fee Payment Process</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Payment Stage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Amount</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Payment Modes</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Fee (Per Phase)</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,400</td>
                      <td className="border border-gray-300 px-4 py-2">Net Banking, Debit Card, Credit Card, UPI, Payment Gateway</td>
                      <td className="border border-gray-300 px-4 py-2">Non-refundable, for each phase separately</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Payment Gateway Charges</td>
                      <td className="border border-gray-300 px-4 py-2">~₹15-30</td>
                      <td className="border border-gray-300 px-4 py-2">Included in transaction</td>
                      <td className="border border-gray-300 px-4 py-2">Varies by payment method</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Failed Transaction Reversal</td>
                      <td className="border border-gray-300 px-4 py-2">5-7 working days</td>
                      <td className="border border-gray-300 px-4 py-2">Auto-refund to source account</td>
                      <td className="border border-gray-300 px-4 py-2">Keep transaction ID for reference</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Payment Confirmation</td>
                      <td className="border border-gray-300 px-4 py-2">Immediate</td>
                      <td className="border border-gray-300 px-4 py-2">Email + SMS confirmation</td>
                      <td className="border border-gray-300 px-4 py-2">Screenshot payment receipt</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Number Generation</td>
                      <td className="border border-gray-300 px-4 py-2">After successful payment</td>
                      <td className="border border-gray-300 px-4 py-2">Unique application number issued</td>
                      <td className="border border-gray-300 px-4 py-2">Note down for future reference</td>
                    </tr>
                  </tbody>
                </table>
                </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Post-Application Steps</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Action</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Download Application Form</td>
                      <td className="border border-gray-300 px-4 py-2">Immediately after payment</td>
                      <td className="border border-gray-300 px-4 py-2">Keep printed copy for records</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Note Application Number</td>
                      <td className="border border-gray-300 px-4 py-2">Same day</td>
                      <td className="border border-gray-300 px-4 py-2">Needed for slot booking, admit card download</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Correction Window (if announced)</td>
                      <td className="border border-gray-300 px-4 py-2">April/June/July 2026 (phase-wise)</td>
                      <td className="border border-gray-300 px-4 py-2">Edit details if mistakes found</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Regular Email/Portal Check</td>
                      <td className="border border-gray-300 px-4 py-2">Daily during April/June/July</td>
                      <td className="border border-gray-300 px-4 py-2">For slot booking, admit card notifications</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Keep Payment Receipt</td>
                      <td className="border border-gray-300 px-4 py-2">Until admission</td>
                      <td className="border border-gray-300 px-4 py-2">Proof of application fee payment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Eligibility Criteria - Comprehensive Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria - Comprehensive Details</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Age Eligibility</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Acceptable DOB Range (For 2026)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Verification Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Minimum Age</td>
                      <td className="border border-gray-300 px-4 py-2">16 years as on July 31, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Born on or after July 1, 2004</td>
                      <td className="border border-gray-300 px-4 py-2">Class 10 certificate showing DOB</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Maximum Age</td>
                      <td className="border border-gray-300 px-4 py-2">No upper age limit</td>
                      <td className="border border-gray-300 px-4 py-2">Any year before 2010</td>
                      <td className="border border-gray-300 px-4 py-2">Date of birth proof</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Age Relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">Not applicable</td>
                      <td className="border border-gray-300 px-4 py-2">No relaxation for any category</td>
                      <td className="border border-gray-300 px-4 py-2">Standard for all</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Foreign Nationals</td>
                      <td className="border border-gray-300 px-4 py-2">Same as Indian nationals</td>
                      <td className="border border-gray-300 px-4 py-2">Born after July 1, 2004</td>
                      <td className="border border-gray-300 px-4 py-2">Passport copy required</td>
                    </tr>
                  </tbody>
                </table>
          </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Qualification</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Qualifying Exam</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject Requirements</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Minimum Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Passed</td>
                      <td className="border border-gray-300 px-4 py-2">Completed 10+2 from recognized board (2024 or earlier)</td>
                      <td className="border border-gray-300 px-4 py-2">PCM (Physics, Chemistry, Mathematics) OR PCB (for Bio-related programs)</td>
                      <td className="border border-gray-300 px-4 py-2">60% aggregate in PCM/PCB</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Appearing</td>
                      <td className="border border-gray-300 px-4 py-2">Currently in Class 12 (2025-26 academic year)</td>
                      <td className="border border-gray-300 px-4 py-2">Must have studied PCM/PCB in 11th & 12th</td>
                      <td className="border border-gray-300 px-4 py-2">Admission provisional until 60% achieved</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CBSE/ICSE Board</td>
                      <td className="border border-gray-300 px-4 py-2">Central Board, ISC Council</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics (3 subjects)</td>
                      <td className="border border-gray-300 px-4 py-2">60% aggregate in PCM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">State Boards</td>
                      <td className="border border-gray-300 px-4 py-2">Any recognized Indian state board</td>
                      <td className="border border-gray-300 px-4 py-2">PCM or PCB mandatory</td>
                      <td className="border border-gray-300 px-4 py-2">60% aggregate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">International Boards</td>
                      <td className="border border-gray-300 px-4 py-2">IB, Cambridge (A-Level), Australian boards</td>
                      <td className="border border-gray-300 px-4 py-2">Equivalent subjects to PCM</td>
                      <td className="border border-gray-300 px-4 py-2">Equivalence certificate + 60% equivalent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Open School</td>
                      <td className="border border-gray-300 px-4 py-2">NIOS, State Open Schools</td>
                      <td className="border border-gray-300 px-4 py-2">PCM/PCB from recognized open schools</td>
                      <td className="border border-gray-300 px-4 py-2">60% aggregate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Improvement Candidates</td>
                      <td className="border border-gray-300 px-4 py-2">Students who appeared for improvement exam</td>
                      <td className="border border-gray-300 px-4 py-2">Can apply with improvement marks</td>
                      <td className="border border-gray-300 px-4 py-2">60% in improved result</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Subject-wise Requirements</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Program Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mandatory Subjects</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weightage Subjects for SRMJEEE</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Alternative Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer Science/IT</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">PCM - All three equally important</td>
                      <td className="border border-gray-300 px-4 py-2">No biology option</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Electronics/Electrical</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">PCM - Physics and Math critical</td>
                      <td className="border border-gray-300 px-4 py-2">No alternative</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical/Civil/Aerospace</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">PCM mandatory</td>
                      <td className="border border-gray-300 px-4 py-2">No biology acceptable</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Biotechnology/Biomedical</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Biology OR Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">PCB OR PCM both acceptable</td>
                      <td className="border border-gray-300 px-4 py-2">Can choose either stream</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">PCM required</td>
                      <td className="border border-gray-300 px-4 py-2">No biology option</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Genetic Engineering/Food Tech</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Biology preferred (Math acceptable)</td>
                      <td className="border border-gray-300 px-4 py-2">PCB strongly recommended</td>
                      <td className="border border-gray-300 px-4 py-2">PCM candidates eligible</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Category-wise Eligibility</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Reserved Seats %</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Minimum Marks Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Supporting Documents</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">General/Unreserved</td>
                      <td className="border border-gray-300 px-4 py-2">50-55%</td>
                      <td className="border border-gray-300 px-4 py-2">60% in PCM/PCB</td>
                      <td className="border border-gray-300 px-4 py-2">No certificate needed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OBC (Non-Creamy Layer)</td>
                      <td className="border border-gray-300 px-4 py-2">27-30%</td>
                      <td className="border border-gray-300 px-4 py-2">55% in PCM/PCB</td>
                      <td className="border border-gray-300 px-4 py-2">Valid OBC-NCL certificate issued within 1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SC (Scheduled Caste)</td>
                      <td className="border border-gray-300 px-4 py-2">12-15%</td>
                      <td className="border border-gray-300 px-4 py-2">50% in PCM/PCB</td>
                      <td className="border border-gray-300 px-4 py-2">SC caste certificate from competent authority</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ST (Scheduled Tribe)</td>
                      <td className="border border-gray-300 px-4 py-2">5-7%</td>
                      <td className="border border-gray-300 px-4 py-2">50% in PCM/PCB</td>
                      <td className="border border-gray-300 px-4 py-2">ST caste certificate from competent authority</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PWD (Persons with Disabilities)</td>
                      <td className="border border-gray-300 px-4 py-2">3-5% horizontal</td>
                      <td className="border border-gray-300 px-4 py-2">50% in PCM/PCB</td>
                      <td className="border border-gray-300 px-4 py-2">Disability certificate (min 40% disability)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EWS (Economically Weaker Section)</td>
                      <td className="border border-gray-300 px-4 py-2">10% (if applicable)</td>
                      <td className="border border-gray-300 px-4 py-2">60% in PCM/PCB</td>
                      <td className="border border-gray-300 px-4 py-2">Income certificate (annual income &lt; ₹8 lakh)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Defense Quota</td>
                      <td className="border border-gray-300 px-4 py-2">Management discretion</td>
                      <td className="border border-gray-300 px-4 py-2">60% in PCM/PCB</td>
                      <td className="border border-gray-300 px-4 py-2">Service certificate of parent (serving/retired/martyred)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions (FAQs)</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p><strong>Q: Can I appear in multiple phases of SRMJEEE?</strong></p>
                  <p>A: Yes, you can appear in all three phases. Your best score across all attempts will be considered for counselling.</p>
                </div>
                <div>
                  <p><strong>Q: Is there negative marking in SRMJEEE?</strong></p>
                  <p>A: No, there is no negative marking. It's advisable to attempt all questions.</p>
                </div>
                <div>
                  <p><strong>Q: What if I'm currently in Class 12?</strong></p>
                  <p>A: You can apply and appear for the exam. Admission will be provisional until you submit Class 12 marksheet with minimum 60% in PCM/PCB.</p>
                </div>
                <div>
                  <p><strong>Q: Can I change my exam center after slot booking?</strong></p>
                  <p>A: No, once slot is booked, center and date/time cannot be changed.</p>
                </div>
                <div>
                  <p><strong>Q: What is the validity of SRMJEEE score?</strong></p>
                  <p>A: Valid only for 2026 admissions. Cannot be used for 2027 or future years.</p>
                </div>
                <div>
                  <p><strong>Q: Do I need JEE Main score for SRMJEEE admission?</strong></p>
                  <p>A: No, JEE Main is not mandatory. However, good JEE Main percentile (90+) can qualify you for scholarships.</p>
                </div>
                <div>
                  <p><strong>Q: Is SRMJEEE easier than JEE Main?</strong></p>
                  <p>A: Generally, SRMJEEE is considered slightly easier with no negative marking and more straightforward questions.</p>
                </div>
                <div>
                  <p><strong>Q: When do classes start?</strong></p>
                  <p>A: Phase 1 admitted students: June 2026; Phase 2: July 2026; Phase 3: August 2026.</p>
                </div>
                <div>
                  <p><strong>Q: Can I get hostel if I join in Phase 2 or 3?</strong></p>
                  <p>A: Yes, hostel seats are reserved for all phases, but room choice may be limited for late joiners.</p>
                </div>
                <div>
                  <p><strong>Q: Is laptop mandatory from first year?</strong></p>
                  <p>A: Yes, especially for CSE/IT students. University recommends specific configurations.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            {/* SRMJEEE 2026 Eligibility Criteria - Comprehensive Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026 Eligibility Criteria</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview of Eligibility Framework</h3>
              <p className="text-gray-700 mb-6">
                The SRM Institute of Science and Technology (SRMIST) has established comprehensive eligibility criteria for SRMJEEE 2026 to ensure that candidates possess the necessary academic foundation, age maturity, and documentation for pursuing undergraduate engineering programs.
              </p>

              {/* 1. Nationality & Residency Eligibility */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Nationality & Residency Eligibility</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">1.1 Indian Nationals</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Documents Required</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Additional Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Indian Citizens (Residing in India)</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Aadhaar Card, Passport, Voter ID, or PAN Card</td>
                      <td className="border border-gray-300 px-4 py-2">Most straightforward category</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Indian Citizens (Residing Abroad)</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Valid Indian Passport</td>
                      <td className="border border-gray-300 px-4 py-2">Treated as Indian nationals for admission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Indian Citizens (Born Abroad)</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Indian Passport + Birth Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Citizenship proof mandatory</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Domicile Certificate Holders</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">State Domicile Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Helpful for state quota (if any)</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                
              <h4 className="text-lg font-semibold text-gray-800 mb-3">1.2 Non-Resident Indians (NRI)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">NRI Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Required Documentation</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Seat Quota</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">NRI - Parent Working Abroad</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible under NRI quota</td>
                      <td className="border border-gray-300 px-4 py-2">Parent's valid work permit/visa, Employment letter, Passport copies</td>
                      <td className="border border-gray-300 px-4 py-2">10-15% supernumerary seats</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">NRI - Parent Settled Abroad</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible under NRI quota</td>
                      <td className="border border-gray-300 px-4 py-2">Proof of permanent residency (Green Card/PR), Passport, Property documents abroad</td>
                      <td className="border border-gray-300 px-4 py-2">Management quota consideration</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">NRI - Student Born Abroad</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible under NRI quota</td>
                      <td className="border border-gray-300 px-4 py-2">Student's foreign birth certificate, Indian origin proof, Parent's NRI status</td>
                      <td className="border border-gray-300 px-4 py-2">Special category admission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">NRI - Recent Return to India</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible under NRI quota</td>
                      <td className="border border-gray-300 px-4 py-2">Previous residency proof abroad (min 2 years), Parent's employment history</td>
                      <td className="border border-gray-300 px-4 py-2">Documentation scrutiny required</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                
              <h4 className="text-lg font-semibold text-gray-800 mb-3">1.3 Person of Indian Origin (PIO) - Now merged with OCI</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Documents</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Admission Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PIO Cardholder (Old Cards)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Valid PIO card issued by Govt of India before 2015</td>
                      <td className="border border-gray-300 px-4 py-2">NRI/Foreign quota</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Converting PIO to OCI</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Application proof for OCI conversion</td>
                      <td className="border border-gray-300 px-4 py-2">Interim eligibility granted</td>
                    </tr>
                  </tbody>
                </table>
                </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">1.4 Overseas Citizen of India (OCI)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">OCI Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Required Proof</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Processing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OCI Cardholder</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Valid OCI card issued by Ministry of Home Affairs, India</td>
                      <td className="border border-gray-300 px-4 py-2">Treated under NRI quota</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OCI - Child of Indian Origin</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Parent's Indian passport/citizenship proof, OCI card</td>
                      <td className="border border-gray-300 px-4 py-2">Simplified documentation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OCI - Spouse of Indian Citizen</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Marriage certificate, Spouse's Indian citizenship, OCI card</td>
                      <td className="border border-gray-300 px-4 py-2">Additional verification</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OCI - Grandchild of Indian Citizen</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Grandparent's Indian documents, Family tree proof, OCI card</td>
                      <td className="border border-gray-300 px-4 py-2">Detailed verification</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">1.5 Foreign Nationals</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Foreign National Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Admission Route</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Documents Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SAARC Country Citizens</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Foreign student quota</td>
                      <td className="border border-gray-300 px-4 py-2">Valid passport, Student visa, Educational certificates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Non-SAARC Foreign Nationals</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Direct admission/SRMJEEE</td>
                      <td className="border border-gray-300 px-4 py-2">Passport, Visa, Equivalence certificate for 12th grade</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Children of Indian Workers in Gulf (CIWG)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Special consideration under NRI</td>
                      <td className="border border-gray-300 px-4 py-2">Parent's Gulf employment proof, Passport, Educational certificates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Dual Citizenship Holders (India + Other)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Choose category during application</td>
                      <td className="border border-gray-300 px-4 py-2">Both passports, Declaration of chosen nationality</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Students on Student Exchange</td>
                      <td className="border border-gray-300 px-4 py-2">Not Eligible for B.Tech Year 1</td>
                      <td className="border border-gray-300 px-4 py-2">Can apply for exchange programs later</td>
                      <td className="border border-gray-300 px-4 py-2">N/A</td>
                    </tr>
                  </tbody>
                </table>
          </div>

              {/* 2. Age Eligibility - Detailed Breakdown */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Age Eligibility - Detailed Breakdown</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">2.1 Minimum Age Requirement</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Parameter</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Calculation Method</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Minimum Age</td>
                      <td className="border border-gray-300 px-4 py-2">16 years completed</td>
                      <td className="border border-gray-300 px-4 py-2">As on July 31, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Born on or before July 31, 2010</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Alternative Interpretation</td>
                      <td className="border border-gray-300 px-4 py-2">16 years and 6 months</td>
                      <td className="border border-gray-300 px-4 py-2">Some documents mention this</td>
                      <td className="border border-gray-300 px-4 py-2">Born on or before January 31, 2010</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Official Guideline</td>
                      <td className="border border-gray-300 px-4 py-2">Born on or after July 1, 2004</td>
                      <td className="border border-gray-300 px-4 py-2">Based on past year patterns</td>
                      <td className="border border-gray-300 px-4 py-2">Candidates born July 1, 2004 onwards eligible</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Verification Document</td>
                      <td className="border border-gray-300 px-4 py-2">Class 10 certificate</td>
                      <td className="border border-gray-300 px-4 py-2">DOB mentioned on certificate is final</td>
                      <td className="border border-gray-300 px-4 py-2">Any mismatch leads to disqualification</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">2.2 Age Calculation Examples</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date of Birth</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Age on July 31, 2026</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">July 1, 2004</td>
                      <td className="border border-gray-300 px-4 py-2">22 years</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Meets minimum age</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">January 15, 2008</td>
                      <td className="border border-gray-300 px-4 py-2">18 years 6 months</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Comfortably eligible</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">July 31, 2010</td>
                      <td className="border border-gray-300 px-4 py-2">16 years 0 days</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Borderline case - eligible</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">August 1, 2010</td>
                      <td className="border border-gray-300 px-4 py-2">15 years 11 months</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>NOT Eligible</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Below minimum age</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">December 31, 2009</td>
                      <td className="border border-gray-300 px-4 py-2">16 years 7 months</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Typical candidate age</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">June 15, 2005</td>
                      <td className="border border-gray-300 px-4 py-2">21 years</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Older candidate, no issue</td>
                    </tr>
                  </tbody>
                </table>
                </div>

              {/* 3. Educational Qualification - Comprehensive Details */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Educational Qualification - Comprehensive Details</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">3.1 Qualifying Examination Overview</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Qualifying Exam</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Academic Year</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Result Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Passed (2024)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">2023-24 academic year</td>
                      <td className="border border-gray-300 px-4 py-2">Result already declared with 60%+</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Passed (2025)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">2024-25 academic year</td>
                      <td className="border border-gray-300 px-4 py-2">Result declared before counselling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Appearing (2026)</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>Eligible (Conditional)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">2025-26 academic year</td>
                      <td className="border border-gray-300 px-4 py-2">Must secure 60%+ in final result</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Passed (2023 or earlier)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Earlier years</td>
                      <td className="border border-gray-300 px-4 py-2">60%+ aggregate required</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Improvement (2025/2026)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Improvement exam</td>
                      <td className="border border-gray-300 px-4 py-2">Best of original/improvement marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Compartment Cleared</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">After clearing compartment</td>
                      <td className="border border-gray-300 px-4 py-2">Must clear before counselling with 60%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">3.3 Recognized Boards of Education</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Board Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Board Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Additional Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold" rowSpan={3}>Central Boards</td>
                      <td className="border border-gray-300 px-4 py-2">CBSE (Central Board of Secondary Education)</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Most common, no additional documents</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">CISCE/ISC (Indian School Certificate Examination)</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Direct eligibility</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">NIOS (National Institute of Open Schooling)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible with conditions</td>
                      <td className="border border-gray-300 px-4 py-2">Both 10th & 12th from NIOS = NOT eligible; Either one from NIOS = Eligible</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold" rowSpan={3}>State Boards</td>
                      <td className="border border-gray-300 px-4 py-2">All State Board of Secondary Education (35+ states/UTs)</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Maharashtra, Tamil Nadu, UP, Karnataka, Kerala, etc.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">West Bengal Council of Higher Secondary Education</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Standard eligibility</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Any recognized state board</td>
                      <td className="border border-gray-300 px-4 py-2">Fully Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Board must be recognized by respective state govt</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold" rowSpan={3}>International Boards</td>
                      <td className="border border-gray-300 px-4 py-2">Cambridge International (A-Level, AS-Level, IGCSE)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Need equivalence certificate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">International Baccalaureate (IB Diploma/Certificate)</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Equivalence to 10+2 required</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">GCE A-Level</td>
                      <td className="border border-gray-300 px-4 py-2">Eligible</td>
                      <td className="border border-gray-300 px-4 py-2">Must have Physics, Chemistry, Math at A-level</td>
                    </tr>
                  </tbody>
                </table>
            </div>

              {/* 4. Reserved Category Eligibility */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Reserved Category Eligibility</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">4.1 OBC (Other Backward Classes) - Non-Creamy Layer</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Documents Needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Certificate Type</td>
                      <td className="border border-gray-300 px-4 py-2">OBC-NCL (Non-Creamy Layer) certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Issued by competent authority</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Issuing Authority</td>
                      <td className="border border-gray-300 px-4 py-2">Tehsildar/SDM/District Magistrate/Revenue Officer (minimum rank)</td>
                      <td className="border border-gray-300 px-4 py-2">State government authorized officer</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Validity Period</td>
                      <td className="border border-gray-300 px-4 py-2">Certificate must be issued within <strong>1 year</strong> of application date</td>
                      <td className="border border-gray-300 px-4 py-2">Certificate dated after October 2025 for 2026 admission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Parent Annual Income Limit</td>
                      <td className="border border-gray-300 px-4 py-2">Less than ₹8,00,000 per annum (as per latest GOI norms)</td>
                      <td className="border border-gray-300 px-4 py-2">From all sources combined</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Reservation</td>
                      <td className="border border-gray-300 px-4 py-2">27-30% seats reserved across all branches</td>
                      <td className="border border-gray-300 px-4 py-2">Subject to availability</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Minimum Marks</td>
                      <td className="border border-gray-300 px-4 py-2">55% in PCM (5% relaxation from General category)</td>
                      <td className="border border-gray-300 px-4 py-2">Must be achieved in Class 12</td>
                    </tr>
                  </tbody>
                </table>
          </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">4.2 SC (Scheduled Caste)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Documents Needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Certificate Type</td>
                      <td className="border border-gray-300 px-4 py-2">SC Caste Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">From competent authority</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Validity</td>
                      <td className="border border-gray-300 px-4 py-2">No expiry (valid permanently unless revoked)</td>
                      <td className="border border-gray-300 px-4 py-2">One-time issuance</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Reservation</td>
                      <td className="border border-gray-300 px-4 py-2">12-15% seats reserved</td>
                      <td className="border border-gray-300 px-4 py-2">Across all campuses and branches</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Minimum Marks</td>
                      <td className="border border-gray-300 px-4 py-2">50% in PCM (10% relaxation from General)</td>
                      <td className="border border-gray-300 px-4 py-2">Class 12 requirement</td>
                    </tr>
                  </tbody>
                </table>
            </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">4.3 ST (Scheduled Tribe)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Documents Needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Certificate Type</td>
                      <td className="border border-gray-300 px-4 py-2">ST Tribal Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Issued by competent authority</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Validity</td>
                      <td className="border border-gray-300 px-4 py-2">Permanent validity</td>
                      <td className="border border-gray-300 px-4 py-2">No renewal needed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Reservation</td>
                      <td className="border border-gray-300 px-4 py-2">5-7% seats reserved</td>
                      <td className="border border-gray-300 px-4 py-2">Proportional distribution</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Minimum Marks</td>
                      <td className="border border-gray-300 px-4 py-2">50% in PCM (10% relaxation)</td>
                      <td className="border border-gray-300 px-4 py-2">Class 12 aggregate</td>
                    </tr>
                  </tbody>
                </table>
      </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">4.5 PWD (Persons with Disabilities)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Disability Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Minimum Disability %</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Documents Required</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Special Provisions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Locomotor Disability</td>
                      <td className="border border-gray-300 px-4 py-2">40% or more</td>
                      <td className="border border-gray-300 px-4 py-2">Disability certificate from govt hospital/medical board</td>
                      <td className="border border-gray-300 px-4 py-2">Wheelchair accessibility, ground floor rooms</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Visual Impairment (Blind)</td>
                      <td className="border border-gray-300 px-4 py-2">40% or more</td>
                      <td className="border border-gray-300 px-4 py-2">Certificate from ophthalmologist (govt hospital)</td>
                      <td className="border border-gray-300 px-4 py-2">Scribe facility, audio materials, extra time</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Hearing Impairment (Deaf)</td>
                      <td className="border border-gray-300 px-4 py-2">40% or more</td>
                      <td className="border border-gray-300 px-4 py-2">ENT specialist certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Sign language interpreter support</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Learning Disability</td>
                      <td className="border border-gray-300 px-4 py-2">Certified by medical board</td>
                      <td className="border border-gray-300 px-4 py-2">Psychologist + Psychiatrist certificate</td>
                      <td className="border border-gray-300 px-4 py-2">Extra time, scribe, alternate assessment</td>
                    </tr>
                  </tbody>
                </table>
          </div>

              {/* Frequently Asked Questions */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility FAQs</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p><strong>Q1: Can I apply if I have a gap of 3 years after Class 12?</strong></p>
                  <p>A: Yes, there is no upper age limit. You need to provide a gap certificate explaining the reason for the gap.</p>
                      </div>
                      <div>
                  <p><strong>Q2: I studied Biology instead of Mathematics. Can I apply for Computer Science?</strong></p>
                  <p>A: No, Mathematics is mandatory for CS/IT/ECE/EEE/ME/Civil branches. You can apply for Biotechnology/Biomedical with PCB.</p>
                      </div>
                <div>
                  <p><strong>Q3: My Class 12 result will come in May 2026. Can I still apply for SRMJEEE?</strong></p>
                  <p>A: Yes, appearing students can apply and appear for the exam. Admission will be provisional until you submit the marksheet with minimum 60%.</p>
                    </div>
                <div>
                  <p><strong>Q4: I scored 58% in PCM. Am I eligible?</strong></p>
                  <p>A: If you belong to General category, no. If you belong to OBC (55% required), SC/ST (50% required), you may be eligible based on your category.</p>
                    </div>
                <div>
                  <p><strong>Q5: Can I take SRMJEEE in Hindi or my regional language?</strong></p>
                  <p>A: No, SRMJEEE is conducted only in English. All questions will be in English.</p>
                  </div>
                <div>
                  <p><strong>Q6: I have both Indian and foreign citizenship. Which should I use?</strong></p>
                  <p>A: You can choose to apply as Indian national or foreign national. Choose the one that gives you better benefits. Declare your choice during application.</p>
                      </div>
                      <div>
                  <p><strong>Q7: Do I need to appear for JEE Main to apply for SRMJEEE?</strong></p>
                  <p>A: No, JEE Main is not mandatory for SRMJEEE admission. However, good JEE Main scores can get you additional scholarships at SRM.</p>
                      </div>
                <div>
                  <p><strong>Q8: I cleared one subject in compartment. Am I eligible?</strong></p>
                  <p>A: Yes, if you have cleared the compartment and achieved 60% aggregate in PCM, you are eligible.</p>
                    </div>
                <div>
                  <p><strong>Q9: Can I change my category (from General to OBC) after applying?</strong></p>
                  <p>A: Only during the correction window (if available). After that, changes are not allowed. Apply with correct category initially.</p>
                    </div>
                <div>
                  <p><strong>Q10: My caste is in State OBC list but not in Central list. Will I get OBC reservation?</strong></p>
                  <p>A: SRM accepts both Central and State OBC lists. Ensure your caste certificate is valid and issued by competent authority.</p>
                  </div>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            {/* SRMJEEE 2026 Application Process - Complete Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026 Application Process</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview of the Application Journey</h3>
              <p className="text-gray-700 mb-6">
                The SRM Joint Engineering Entrance Examination application process for 2026 is conducted exclusively through the official online portal at <strong>applications.srmist.edu.in/btech</strong>. The entire process is paperless and requires candidates to have stable internet access, valid email addresses, active mobile numbers, and digital copies of all required documents.
              </p>

              {/* Pre-Application Preparation and Requirements */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pre-Application Preparation and Requirements</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical System Requirements</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Technical Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Minimum Specification</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Recommended Specification</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer/Laptop</td>
                      <td className="border border-gray-300 px-4 py-2">Windows 7/Mac OS X 10.10/Linux</td>
                      <td className="border border-gray-300 px-4 py-2">Windows 10/11 or Mac OS latest</td>
                      <td className="border border-gray-300 px-4 py-2">Form filling and document upload</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Web Browser</td>
                      <td className="border border-gray-300 px-4 py-2">Chrome 90+/Firefox 88+</td>
                      <td className="border border-gray-300 px-4 py-2">Latest Chrome version</td>
                      <td className="border border-gray-300 px-4 py-2">Best compatibility with portal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Internet Speed</td>
                      <td className="border border-gray-300 px-4 py-2">2 Mbps stable</td>
                      <td className="border border-gray-300 px-4 py-2">5+ Mbps broadband</td>
                      <td className="border border-gray-300 px-4 py-2">Prevent timeouts and upload failures</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Email Account</td>
                      <td className="border border-gray-300 px-4 py-2">Active personal email</td>
                      <td className="border border-gray-300 px-4 py-2">Gmail/Outlook with storage</td>
                      <td className="border border-gray-300 px-4 py-2">Receive all official communications</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mobile Number</td>
                      <td className="border border-gray-300 px-4 py-2">Active Indian number (+91)</td>
                      <td className="border border-gray-300 px-4 py-2">Personal number with SMS access</td>
                      <td className="border border-gray-300 px-4 py-2">OTP verification and alerts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Document Preparation Requirements</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Document Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Format</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">File Size</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Specific Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Recent Photograph</td>
                      <td className="border border-gray-300 px-4 py-2">JPEG/JPG</td>
                      <td className="border border-gray-300 px-4 py-2">10-50 KB</td>
                      <td className="border border-gray-300 px-4 py-2">Color, white background, face 70-80%, taken within 3 months</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Signature</td>
                      <td className="border border-gray-300 px-4 py-2">JPEG/JPG</td>
                      <td className="border border-gray-300 px-4 py-2">10-30 KB</td>
                      <td className="border border-gray-300 px-4 py-2">Black/blue ink on white paper, clear scan, matches future documents</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 10 Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">PDF</td>
                      <td className="border border-gray-300 px-4 py-2">Max 500 KB</td>
                      <td className="border border-gray-300 px-4 py-2">Complete marksheet with board seal, all pages if multiple</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Class 12 Marksheet/Admit Card</td>
                      <td className="border border-gray-300 px-4 py-2">PDF</td>
                      <td className="border border-gray-300 px-4 py-2">Max 500 KB</td>
                      <td className="border border-gray-300 px-4 py-2">Final marksheet if passed; admit card/school ID if appearing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Category Certificate</td>
                      <td className="border border-gray-300 px-4 py-2">PDF</td>
                      <td className="border border-gray-300 px-4 py-2">Max 500 KB</td>
                      <td className="border border-gray-300 px-4 py-2">SC/ST/OBC-NCL certificate from competent authority (if applicable)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Aadhaar Card</td>
                      <td className="border border-gray-300 px-4 py-2">PDF</td>
                      <td className="border border-gray-300 px-4 py-2">Max 500 KB</td>
                      <td className="border border-gray-300 px-4 py-2">Valid Aadhaar number mandatory for Indian nationals</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Online Registration Process */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Registration Process</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Accessing the Application Portal</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Registration Step</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Action Required</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Outcome</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Time Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Portal Access</td>
                      <td className="border border-gray-300 px-4 py-2">Open browser, navigate to applications.srmist.edu.in/btech</td>
                      <td className="border border-gray-300 px-4 py-2">Application homepage loads</td>
                      <td className="border border-gray-300 px-4 py-2">1 minute</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Read Instructions</td>
                      <td className="border border-gray-300 px-4 py-2">Click "Instructions to Candidates" link</td>
                      <td className="border border-gray-300 px-4 py-2">Understand all requirements and rules</td>
                      <td className="border border-gray-300 px-4 py-2">5-10 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Download Brochure</td>
                      <td className="border border-gray-300 px-4 py-2">Download SRMJEEE 2026 Information Brochure (PDF)</td>
                      <td className="border border-gray-300 px-4 py-2">Complete exam and admission information</td>
                      <td className="border border-gray-300 px-4 py-2">2-3 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Start Registration</td>
                      <td className="border border-gray-300 px-4 py-2">Click "New Registration" or "Register Now" button</td>
                      <td className="border border-gray-300 px-4 py-2">Registration form page opens</td>
                      <td className="border border-gray-300 px-4 py-2">Immediate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Email and Mobile Verification</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Verification Stage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Process</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Validity Period</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Troubleshooting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Email Verification</td>
                      <td className="border border-gray-300 px-4 py-2">Click link in verification email</td>
                      <td className="border border-gray-300 px-4 py-2">Link valid for 24 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Check Spam folder; request new verification if expired</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Email Delivery Time</td>
                      <td className="border border-gray-300 px-4 py-2">Typically 2-5 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Monitor inbox</td>
                      <td className="border border-gray-300 px-4 py-2">Wait 10 minutes before reporting non-delivery</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OTP Generation</td>
                      <td className="border border-gray-300 px-4 py-2">6-digit code sent via SMS</td>
                      <td className="border border-gray-300 px-4 py-2">OTP valid for 10 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Request resend if not received in 3 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Registration Completion</td>
                      <td className="border border-gray-300 px-4 py-2">Both email and mobile verified</td>
                      <td className="border border-gray-300 px-4 py-2">Account permanently created</td>
                      <td className="border border-gray-300 px-4 py-2">Confirmation via email + SMS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Application Fee Payment */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Fee Payment</h3>
              
              <p className="text-gray-700 mb-6">
                The SRMJEEE 2026 application fee structure is designed to allow candidates flexibility in choosing the number of exam phases they wish to attempt. According to official sources, the application fee is <strong>₹1,400 per phase</strong>. This means if a candidate applies only for Phase 1, they pay ₹1,400. If they wish to attempt Phase 2 as well, they can either pay ₹2,800 upfront during initial application (₹1,400 × 2) or apply separately for Phase 2 later by paying another ₹1,400.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Payment Process Steps</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Payment Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Important Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Fee Amount</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,400 per phase</td>
                      <td className="border border-gray-300 px-4 py-2">Non-refundable; verify before payment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Payment Modes</td>
                      <td className="border border-gray-300 px-4 py-2">Debit Card/Credit Card/Net Banking/UPI</td>
                      <td className="border border-gray-300 px-4 py-2">All major banks accepted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Processing Time</td>
                      <td className="border border-gray-300 px-4 py-2">10-30 seconds typically</td>
                      <td className="border border-gray-300 px-4 py-2">Don't refresh or press back button</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Confirmation</td>
                      <td className="border border-gray-300 px-4 py-2">Transaction ID + email + SMS</td>
                      <td className="border border-gray-300 px-4 py-2">Save screenshot and note transaction ID</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Failed Payment</td>
                      <td className="border border-gray-300 px-4 py-2">Retry immediately</td>
                      <td className="border border-gray-300 px-4 py-2">No amount deducted if transaction fails</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Slot Booking and Admit Card */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Slot Booking for Examination</h3>
              <p className="text-gray-700 mb-6">
                Slot booking is a critical step that allows candidates to choose their preferred exam date, time slot, and city (from their previously selected preferences) for appearing in SRMJEEE 2026. This facility typically opens approximately 5-10 days before the exam phase begins.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Slot Booking Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Opening Date</td>
                      <td className="border border-gray-300 px-4 py-2">Approximately 5-10 days before Phase exam</td>
                      <td className="border border-gray-300 px-4 py-2">Notified via email and SMS</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Booking Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">Typically 24-48 hours before the earliest chosen date</td>
                      <td className="border border-gray-300 px-4 py-2">Book early to avoid last-minute issues</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Modification</td>
                      <td className="border border-gray-300 px-4 py-2">Not allowed once confirmed</td>
                      <td className="border border-gray-300 px-4 py-2">Choose carefully before final submission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Availability</td>
                      <td className="border border-gray-300 px-4 py-2">Immediately after slot confirmation</td>
                      <td className="border border-gray-300 px-4 py-2">Download and print multiple copies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Counselling Process</h3>
              <p className="text-gray-700 mb-6">
                Candidates who have qualified in SRMJEEE (typically those who have scored above minimum qualifying marks and secured a rank) are eligible to participate in counselling. The counselling is conducted online in multiple rounds corresponding to each exam phase.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Counselling Stage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Action Required</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fee (if applicable)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration</td>
                      <td className="border border-gray-300 px-4 py-2">Pay counselling fee, accept terms</td>
                      <td className="border border-gray-300 px-4 py-2">Opens 10-15 days post-result</td>
                      <td className="border border-gray-300 px-4 py-2">₹25,000-₹50,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Document Upload</td>
                      <td className="border border-gray-300 px-4 py-2">Upload all required certificates</td>
                      <td className="border border-gray-300 px-4 py-2">During registration</td>
                      <td className="border border-gray-300 px-4 py-2">Included</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling</td>
                      <td className="border border-gray-300 px-4 py-2">Add campus+branch preferences in order</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 days window</td>
                      <td className="border border-gray-300 px-4 py-2">Included</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">System allocates seat based on rank+choices</td>
                      <td className="border border-gray-300 px-4 py-2">Announced on specific date</td>
                      <td className="border border-gray-300 px-4 py-2">No fee</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Acceptance</td>
                      <td className="border border-gray-300 px-4 py-2">Accept or reject allotted seat</td>
                      <td className="border border-gray-300 px-4 py-2">Within 3-5 days of allotment</td>
                      <td className="border border-gray-300 px-4 py-2">No additional fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary</h3>
              <p className="text-gray-700 mb-6">
                This comprehensive guide covers all aspects of the SRMJEEE 2026 application process with detailed information on pre-application preparation, online registration, application form filling, document uploads, fee payment, slot booking, and the counselling process. The application fee is ₹1,400 per phase, and the entire process is conducted online through the official portal at applications.srmist.edu.in/btech.
              </p>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            {/* SRMJEEE 2026 Exam Pattern - Complete Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026 Exam Pattern</h2>
              
              <p className="text-gray-700 mb-6">
                The SRMJEEE (SRM Joint Engineering Entrance Examination) 2026 exam pattern has undergone recent modifications to provide a more comprehensive assessment of candidates' abilities. Understanding the exam pattern is crucial for effective preparation and time management during the actual test. This guide provides complete details about the structure, marking scheme, sections, and key features of the examination.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview of SRMJEEE 2026 Exam Pattern</h3>
              <p className="text-gray-700 mb-6">
                The SRMJEEE 2026 is a computer-based online examination conducted in Remote Proctored Online Mode (RPOM), allowing candidates to take the test from their homes using their personal computers or laptops. The exam is designed to assess candidates' knowledge in core science subjects along with their aptitude and English language proficiency. The examination is conducted in multiple phases (typically Phase 1, Phase 2, and Phase 3) during April-July 2026, giving candidates multiple opportunities to attempt and improve their scores.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights of SRMJEEE 2026 Exam Pattern</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Exam Feature</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Body</td>
                      <td className="border border-gray-300 px-4 py-2">SRM Institute of Science and Technology (SRMIST)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Online - Remote Proctored Online Mode (RPOM)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Location</td>
                      <td className="border border-gray-300 px-4 py-2">From home/chosen location with internet and webcam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Duration</td>
                      <td className="border border-gray-300 px-4 py-2">2 hours 30 minutes (150 minutes)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Language</td>
                      <td className="border border-gray-300 px-4 py-2">English only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Number of Questions</td>
                      <td className="border border-gray-300 px-4 py-2">130 questions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">130 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Number of Sections</td>
                      <td className="border border-gray-300 px-4 py-2">4 sections</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Type of Questions</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Choice Questions (MCQs) with 4 options each</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Marking Scheme</td>
                      <td className="border border-gray-300 px-4 py-2">+1 mark for correct answer, 0 for wrong/unattempted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Negative Marking</td>
                      <td className="border border-gray-300 px-4 py-2">No negative marking</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Question Difficulty Level</td>
                      <td className="border border-gray-300 px-4 py-2">Based on Class 11 and 12 (10+2) syllabus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Navigation</td>
                      <td className="border border-gray-300 px-4 py-2">Free movement between questions and sections allowed</td>
                    </tr>
                  </tbody>
                </table>
                    </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Changes in SRMJEEE Exam Pattern</h3>
              <p className="text-gray-700 mb-6">
                The SRMJEEE exam pattern has been updated for 2026 with significant changes from previous years. According to official sources, the most notable modifications include an increase in the total number of questions from 125 to 130, and a restructuring of the sections from five to four.
              </p>
              <p className="text-gray-700 mb-6">
                Previously, the exam had separate sections for English (5 questions) and Aptitude (10 questions), totaling 15 questions. These have now been merged into a single combined section called "English and Aptitude" with 20 questions, representing an increase of 5 questions in this category. The Physics, Chemistry, and Mathematics/Biology sections remain unchanged with 35, 35, and 40 questions respectively.
              </p>
              <p className="text-gray-700 mb-6">
                The marking scheme continues to follow the candidate-friendly approach of awarding 1 mark for each correct answer with no negative marking for incorrect or unattempted questions. The total marks have increased from 125 to 130, while the exam duration remains constant at 2 hours and 30 minutes.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Comparison of Previous vs Current Pattern</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Previous Pattern</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">SRMJEEE 2026 Pattern</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2">125</td>
                      <td className="border border-gray-300 px-4 py-2">130</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">125</td>
                      <td className="border border-gray-300 px-4 py-2">130</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Number of Sections</td>
                      <td className="border border-gray-300 px-4 py-2">5 (separate English and Aptitude)</td>
                      <td className="border border-gray-300 px-4 py-2">4 (merged English & Aptitude)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">English Questions</td>
                      <td className="border border-gray-300 px-4 py-2">5 (separate section)</td>
                      <td className="border border-gray-300 px-4 py-2">20 (combined with Aptitude)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Aptitude Questions</td>
                      <td className="border border-gray-300 px-4 py-2">10 (separate section)</td>
                      <td className="border border-gray-300 px-4 py-2">Included in 20 (combined section)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physics Questions</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">35 (unchanged)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemistry Questions</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">35 (unchanged)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mathematics/Biology</td>
                      <td className="border border-gray-300 px-4 py-2">40</td>
                      <td className="border border-gray-300 px-4 py-2">40 (unchanged)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                      <td className="border border-gray-300 px-4 py-2">2 hours 30 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">2 hours 30 minutes (unchanged)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Negative Marking</td>
                      <td className="border border-gray-300 px-4 py-2">No</td>
                      <td className="border border-gray-300 px-4 py-2">No (unchanged)</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
                  
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Section-wise Detailed Breakdown</h3>
              <p className="text-gray-700 mb-6">
                The SRMJEEE 2026 examination is divided into four main sections, each assessing specific subject knowledge and skills. All questions are in Multiple Choice Question (MCQ) format with four options, of which only one is correct. The questions are based on the Class 11 and Class 12 (10+2 level) syllabus of recognized Indian boards like CBSE, ICSE, and State Boards.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Section 1: Physics</h4>
              <p className="text-gray-700 mb-6">
                The Physics section contains 35 questions covering various topics from Class 11 and 12 Physics curriculum. This section tests conceptual understanding, problem-solving ability, and application of physical principles. Each question carries 1 mark, making the total marks for this section 35.
              </p>

              <h5 className="text-base font-semibold text-gray-800 mb-3">Key Topics Covered:</h5>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Mechanics (Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion)</li>
                <li>Thermodynamics and Heat Transfer</li>
                <li>Electrostatics and Current Electricity</li>
                <li>Magnetism and Electromagnetic Induction</li>
                <li>Optics (Ray and Wave Optics)</li>
                <li>Modern Physics (Atomic Structure, Nuclear Physics, Semiconductors)</li>
                <li>Waves and Oscillations</li>
                      </ul>

              <p className="text-gray-700 mb-6">
                The Physics questions range from easy to difficult, with approximately 40% easy, 40% medium, and 20% hard questions. The section requires strong conceptual clarity and the ability to apply formulas and principles to solve numerical problems quickly.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Section 2: Chemistry</h4>
              <p className="text-gray-700 mb-6">
                The Chemistry section also comprises 35 questions worth 35 marks, covering Physical Chemistry, Inorganic Chemistry, and Organic Chemistry from the 10+2 curriculum. This section evaluates understanding of chemical concepts, reactions, nomenclature, and problem-solving in chemical calculations.
              </p>

              <h5 className="text-base font-semibold text-gray-800 mb-3">Key Topics Covered:</h5>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Physical Chemistry (Atomic Structure, Chemical Bonding, States of Matter, Thermodynamics, Equilibrium, Electrochemistry, Kinetics)</li>
                <li>Inorganic Chemistry (Periodic Table, s/p/d/f Block Elements, Coordination Compounds, Metallurgy)</li>
                <li>Organic Chemistry (Hydrocarbons, Functional Groups, Reaction Mechanisms, Biomolecules, Polymers)</li>
              </ul>

              <p className="text-gray-700 mb-6">
                The Chemistry section typically has a balanced distribution with emphasis on Organic Chemistry (40-45%), Physical Chemistry (35-40%), and Inorganic Chemistry (20-25%). Questions test both theoretical knowledge and numerical problem-solving skills.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Section 3: Mathematics or Biology</h4>
              <p className="text-gray-700 mb-6">
                This section contains 40 questions worth 40 marks and is unique in that candidates must choose between Mathematics and Biology based on their intended program of study. Engineering aspirants (B.Tech programs in Computer Science, Electronics, Mechanical, Civil, etc.) must attempt the Mathematics section, while candidates applying for Biotechnology, Biomedical Engineering, or Genetic Engineering programs should attempt the Biology section.
              </p>

              <h5 className="text-base font-semibold text-gray-800 mb-3">Mathematics Topics:</h5>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Algebra (Complex Numbers, Quadratic Equations, Sequences and Series, Permutations and Combinations)</li>
                <li>Calculus (Limits, Continuity, Differentiation, Integration, Differential Equations)</li>
                <li>Coordinate Geometry (Straight Lines, Circles, Conic Sections)</li>
                <li>Trigonometry and Inverse Trigonometric Functions</li>
                <li>Vectors and 3D Geometry</li>
                <li>Probability and Statistics</li>
              </ul>

              <h5 className="text-base font-semibold text-gray-800 mb-3">Biology Topics (for Biotech/Biomedical candidates):</h5>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Cell Biology and Genetics</li>
                <li>Plant and Animal Physiology</li>
                <li>Ecology and Environment</li>
                <li>Human Health and Diseases</li>
                <li>Biotechnology Principles</li>
                <li>Diversity in Living Organisms</li>
                <li>Reproduction and Development</li>
              </ul>

              <p className="text-gray-700 mb-6">
                Candidates who attempt Physics, Chemistry, Mathematics, English, and Aptitude are eligible for all B.Tech degree programs. However, those who attempt Biology instead of Mathematics can only apply for Biotechnology-related programs.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Section 4: English and Aptitude (Combined)</h4>
              <p className="text-gray-700 mb-6">
                This is the newly restructured section for SRMJEEE 2026, combining English language proficiency and general aptitude assessment. The section contains 20 questions worth 20 marks, an increase from the previous total of 15 questions when these were separate sections.
              </p>

              <h5 className="text-base font-semibold text-gray-800 mb-3">English Component (Approximately 8-10 questions):</h5>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Vocabulary (Synonyms, Antonyms, One-word Substitutions)</li>
                <li>Grammar (Articles, Prepositions, Tenses, Subject-Verb Agreement)</li>
                <li>Sentence Correction and Error Spotting</li>
                <li>Reading Comprehension (Short passages with questions)</li>
                <li>Verbal Ability (Sentence Completion, Para Jumbles)</li>
              </ul>

              <h5 className="text-base font-semibold text-gray-800 mb-3">Aptitude Component (Approximately 10-12 questions):</h5>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Logical Reasoning (Series Completion, Pattern Recognition, Analogies, Blood Relations)</li>
                <li>Quantitative Aptitude (Number Systems, Percentages, Ratios, Profit-Loss, Time-Speed-Distance)</li>
                <li>Data Interpretation (Tables, Bar Graphs, Pie Charts, Line Graphs)</li>
                <li>Visual Reasoning (Figure Completion, Pattern Matching, Mirror Images)</li>
                <li>General Awareness (Basic current affairs, science facts)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Marking Scheme and Scoring</h3>
              <p className="text-gray-700 mb-6">
                The SRMJEEE 2026 follows a transparent and student-friendly marking scheme that encourages candidates to attempt all questions without fear of losing marks for incorrect answers.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Marking Breakdown</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Answer Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Awarded</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Correct Answer</td>
                      <td className="border border-gray-300 px-4 py-2">+1 mark</td>
                      <td className="border border-gray-300 px-4 py-2">Each correctly answered question adds 1 mark to total score</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Incorrect Answer</td>
                      <td className="border border-gray-300 px-4 py-2">0 marks</td>
                      <td className="border border-gray-300 px-4 py-2">No marks deducted (no negative marking)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Unattempted Question</td>
                      <td className="border border-gray-300 px-4 py-2">0 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Questions left blank receive no marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Multiple Selections</td>
                      <td className="border border-gray-300 px-4 py-2">0 marks (Invalid)</td>
                      <td className="border border-gray-300 px-4 py-2">System allows only one option selection per question</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Changed Answer</td>
                      <td className="border border-gray-300 px-4 py-2">Last saved answer evaluated</td>
                      <td className="border border-gray-300 px-4 py-2">Candidates can change answers multiple times before final submission</td>
                    </tr>
                  </tbody>
                </table>
                    </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Section-wise Maximum Marks</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Number of Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks per Question</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Total Maximum Marks</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physics</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">26.9%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemistry</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">26.9%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mathematics/Biology</td>
                      <td className="border border-gray-300 px-4 py-2">40</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">40</td>
                      <td className="border border-gray-300 px-4 py-2">30.8%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">English & Aptitude</td>
                      <td className="border border-gray-300 px-4 py-2">20</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">20</td>
                      <td className="border border-gray-300 px-4 py-2">15.4%</td>
                    </tr>
                    <tr className="bg-gray-50 font-semibold">
                      <td className="border border-gray-300 px-4 py-2">Total</td>
                      <td className="border border-gray-300 px-4 py-2">130</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">130</td>
                      <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                  </tbody>
                </table>
                  </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Strategic Advantages of No Negative Marking</h4>
              <p className="text-gray-700 mb-6">
                The absence of negative marking in SRMJEEE is a significant advantage for candidates and influences exam strategy:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Attempt All Questions:</strong> Since there's no penalty for wrong answers, candidates should attempt all 130 questions even if unsure about some answers. Random guessing in case of uncertainty can potentially add marks without any risk.</li>
                <li><strong>Time Management:</strong> With no negative marking, candidates can quickly move through difficult questions, mark them for review, complete easier questions first, and return to challenging ones if time permits.</li>
                <li><strong>Educated Guessing:</strong> If candidates can eliminate even one or two incorrect options, their probability of guessing correctly increases to 33% or 50% respectively, making informed guessing a viable strategy.</li>
                <li><strong>Reduced Exam Stress:</strong> The no-negative-marking policy reduces anxiety during the exam, allowing candidates to focus on maximizing correct answers rather than avoiding mistakes.</li>
                <li><strong>Higher Scoring Potential:</strong> Candidates can achieve higher scores compared to exams with negative marking, as even uncertain attempts may result in additional marks.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Time Allocation Strategy</h3>
              <p className="text-gray-700 mb-6">
                With 130 questions to be completed in 150 minutes (2 hours 30 minutes), candidates have an average of approximately 69 seconds (1 minute 9 seconds) per question. However, questions vary in difficulty and time requirement, so strategic time allocation is essential.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Recommended Time Distribution:</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Suggested Time</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Time per Question</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physics</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">45-50 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">~1.3-1.4 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt second (after Math)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemistry</td>
                      <td className="border border-gray-300 px-4 py-2">35</td>
                      <td className="border border-gray-300 px-4 py-2">40-45 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">~1.1-1.3 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt first (usually fastest)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mathematics/Biology</td>
                      <td className="border border-gray-300 px-4 py-2">40</td>
                      <td className="border border-gray-300 px-4 py-2">50-55 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">~1.2-1.4 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt third (most calculations)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">English & Aptitude</td>
                      <td className="border border-gray-300 px-4 py-2">20</td>
                      <td className="border border-gray-300 px-4 py-2">10-15 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">~30-45 seconds</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt last (quickest section)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Review & Final Check</td>
                      <td className="border border-gray-300 px-4 py-2">All</td>
                      <td className="border border-gray-300 px-4 py-2">5-10 minutes</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                      <td className="border border-gray-300 px-4 py-2">Final review of marked questions</td>
                    </tr>
                  </tbody>
                </table>
                </div>

              <p className="text-gray-700 mb-6">
                This is a suggested strategy; candidates should adapt based on their strengths. Some may prefer to attempt their strongest section first to build confidence and secure maximum marks early.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Difficulty Level and Question Distribution</h3>
              <p className="text-gray-700 mb-6">
                SRMJEEE questions are designed to test understanding at the Class 11 and 12 level, with a mix of difficulty levels to differentiate candidates across the performance spectrum.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Difficulty Distribution (Approximate)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Difficulty Level</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage of Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Characteristics</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Easy</td>
                      <td className="border border-gray-300 px-4 py-2">30-35% (~40 questions)</td>
                      <td className="border border-gray-300 px-4 py-2">Direct formula application, recall-based, single-step problems</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt first, aim for 100% accuracy</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Medium</td>
                      <td className="border border-gray-300 px-4 py-2">45-50% (~60 questions)</td>
                      <td className="border border-gray-300 px-4 py-2">Multi-step problems, concept application, moderate calculations</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt second, target 70-80% accuracy</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Difficult</td>
                      <td className="border border-gray-300 px-4 py-2">15-20% (~25 questions)</td>
                      <td className="border border-gray-300 px-4 py-2">Complex problems, advanced concepts, lengthy calculations, tricky questions</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt last if time permits, educated guessing acceptable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Question Nature</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Question Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Example Topics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conceptual</td>
                      <td className="border border-gray-300 px-4 py-2">Test understanding of theories, principles, and concepts</td>
                      <td className="border border-gray-300 px-4 py-2">Laws of thermodynamics, organic reaction mechanisms, calculus theorems</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Numerical</td>
                      <td className="border border-gray-300 px-4 py-2">Require calculations using formulas and data</td>
                      <td className="border border-gray-300 px-4 py-2">Kinematics problems, chemical calculations, integration problems</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application-Based</td>
                      <td className="border border-gray-300 px-4 py-2">Apply concepts to real-world scenarios or novel situations</td>
                      <td className="border border-gray-300 px-4 py-2">Circuit analysis, organic synthesis pathways, word problems</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Recall-Based</td>
                      <td className="border border-gray-300 px-4 py-2">Direct memory of facts, formulas, definitions</td>
                      <td className="border border-gray-300 px-4 py-2">Periodic table properties, organic compound names, standard formulas</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Delivery Mode: Remote Proctored Online Mode (RPOM)</h3>
              <p className="text-gray-700 mb-6">
                The SRMJEEE 2026 is conducted in Remote Proctored Online Mode, meaning candidates can take the exam from their homes or any location with proper internet connectivity and required technical setup. This mode was adopted to provide convenience and wider accessibility to candidates across India.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Requirements for Remote Proctored Exam</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Specification</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mandatory</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer/Laptop</td>
                      <td className="border border-gray-300 px-4 py-2">Desktop or laptop with Windows/Mac OS</td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Webcam</td>
                      <td className="border border-gray-300 px-4 py-2">Built-in or external webcam with video capability</td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Microphone</td>
                      <td className="border border-gray-300 px-4 py-2">Built-in or external microphone</td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Internet Connection</td>
                      <td className="border border-gray-300 px-4 py-2">Stable broadband minimum 2 Mbps</td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Browser</td>
                      <td className="border border-gray-300 px-4 py-2">Chrome/Firefox latest version with safe exam browser</td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Room Setup</td>
                      <td className="border border-gray-300 px-4 py-2">Well-lit, private, quiet room with clear desk</td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ID Proof</td>
                      <td className="border border-gray-300 px-4 py-2">Valid photo ID for verification</td>
                      <td className="border border-gray-300 px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Power Backup</td>
                      <td className="border border-gray-300 px-4 py-2">UPS/inverter recommended</td>
                      <td className="border border-gray-300 px-4 py-2">Recommended</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Strategy Based on Exam Pattern</h3>
              <p className="text-gray-700 mb-6">
                Understanding the exam pattern helps in creating an effective preparation strategy:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Section-wise Weightage Analysis:</strong> Mathematics/Biology has the highest weightage (30.8%), followed by Physics and Chemistry (26.9% each), and English & Aptitude (15.4%). Allocate study time proportionally.</li>
                <li><strong>No Negative Marking Advantage:</strong> Practice attempting all questions within the time limit. Take more risks with educated guessing during preparation to build confidence.</li>
                <li><strong>Time Management Practice:</strong> Take regular full-length mock tests (130 questions in 150 minutes) to develop speed and accuracy. Identify which section takes most time and work on improving speed.</li>
                <li><strong>Strengthen Weak Areas:</strong> Analyze mock test performance section-wise. If Chemistry takes too long, focus on memorizing reactions and quick calculation techniques.</li>
                <li><strong>Formula and Shortcut Mastery:</strong> With an average of only 69 seconds per question, memorize all important formulas, shortcuts, and tricks for quick problem-solving.</li>
                <li><strong>English & Aptitude Focus:</strong> Don't neglect this section despite lower weightage. These 20 questions can be answered quickly (30-45 seconds each) and provide easy marks with minimal preparation.</li>
                <li><strong>Previous Year Analysis:</strong> Solve SRMJEEE previous year papers and analyze question patterns, frequently asked topics, and difficulty trends to prioritize preparation.</li>
              </ul>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026 Exam Syllabus</h2>
              
              <p className="text-gray-700 mb-6">
                The SRMJEEE 2026 syllabus is designed based on the NCERT curriculum for Classes 11 and 12, encompassing Physics, Chemistry, Mathematics/Biology, English, and Aptitude. This comprehensive guide provides detailed information including topic-wise breakdown, chapter-wise weightage, important concepts, and preparation strategies for each section.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview of SRMJEEE 2026 Syllabus</h3>
              <p className="text-gray-700 mb-6">
                The syllabus for SRMJEEE 2026 covers five main subject areas aligned with the 10+2 level curriculum prescribed by CBSE, ICSE, and various State Boards across India. The exam tests conceptual understanding, application skills, problem-solving abilities, and speed in these subjects. The syllabus is comprehensive and requires thorough preparation of all topics from both Class 11 and Class 12 to achieve a competitive rank.
              </p>
              <p className="text-gray-700 mb-6">
                The total examination consists of 130 questions worth 130 marks distributed across Physics (35 questions), Chemistry (35 questions), Mathematics or Biology (40 questions), and English & Aptitude combined (20 questions). Candidates must prepare all topics thoroughly as questions can be asked from any chapter within the prescribed syllabus.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Physics Syllabus (35 Questions, 35 Marks)</h3>
              <p className="text-gray-700 mb-6">
                The Physics syllabus for SRMJEEE 2026 covers a wide range of topics from mechanics to modern physics, testing both theoretical understanding and numerical problem-solving skills. The questions are designed to evaluate conceptual clarity, application of principles, and mathematical calculation abilities.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 1: Units and Measurements</h4>
              <p className="text-gray-700 mb-4">This foundational unit covers the basic concepts of physical quantities, their measurements, and the systems used to express them. Understanding this unit is crucial as it forms the basis for all quantitative physics.</p>
              <p className="text-gray-700 mb-4"><strong>Topics Covered:</strong> Physical quantities (fundamental and derived), SI units, dimensional analysis, significant figures, errors in measurement, accuracy and precision, error propagation.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 1-2 questions (Low priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 2: Kinematics</h4>
              <p className="text-gray-700 mb-4">Kinematics deals with the motion of objects without considering the forces causing the motion. This is one of the most important units with high weightage and frequent numerical problems.</p>
              <p className="text-gray-700 mb-4"><strong>Topics Covered:</strong> Motion in a straight line (position, displacement, velocity, acceleration, equations of motion), motion in a plane, projectile motion (time of flight, maximum height, range), uniform circular motion (angular displacement, angular velocity, centripetal acceleration).</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 3: Laws of Motion</h4>
              <p className="text-gray-700 mb-4">This unit introduces Newton's laws of motion and their applications, forming the foundation of classical mechanics.</p>
              <p className="text-gray-700 mb-4"><strong>Topics Covered:</strong> Newton's three laws, momentum, impulse, friction (static, kinetic, rolling), dynamics of circular motion, banking of roads.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 4: Work, Energy and Power</h4>
              <p className="text-gray-700 mb-4">This unit covers the concepts of energy transformations and conservation, which are fundamental to solving complex physics problems efficiently.</p>
              <p className="text-gray-700 mb-4"><strong>Topics Covered:</strong> Work done by forces, kinetic energy, potential energy, conservative and non-conservative forces, law of conservation of mechanical energy, power, elastic and inelastic collisions, coefficient of restitution.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 5: Rotational Motion</h4>
              <p className="text-gray-700 mb-4">Rotational motion requires understanding of torque, angular momentum, and moment of inertia.</p>
              <p className="text-gray-700 mb-4"><strong>Topics Covered:</strong> Centre of mass, torque and angular momentum, moment of inertia, parallel and perpendicular axis theorems, rolling motion, kinetic energy of rotation.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 6: Gravitation</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Universal law of gravitation, acceleration due to gravity, gravitational potential, escape velocity, orbital velocity, satellite motion, Kepler's laws.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 2-4 questions (Medium priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 7: Properties of Solids and Fluids</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Stress and strain, elastic moduli, Bernoulli's theorem, viscosity, surface tension, Stokes' law.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 2-4 questions (Medium priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 8: Thermodynamics</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Heat and temperature, kinetic theory of gases, first and second law of thermodynamics, heat engines, Carnot engine, efficiency.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (Medium-High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 9: Oscillations and Waves</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Simple harmonic motion (displacement, velocity, acceleration, energy), waves (transverse, longitudinal), interference, Doppler effect, beats.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (Medium-High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 10: Electrostatics</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Electric charge, Coulomb's law, electric field and potential, electric dipole, Gauss's law, capacitance, capacitors in series and parallel.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 2-4 questions (Medium-High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 11: Current Electricity</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Electric current, Ohm's law, resistance, resistivity, combination of resistors, Kirchhoff's laws, Wheatstone bridge, potentiometer.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 2-4 questions (Medium priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 12: Magnetic Effects of Current</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Magnetic field, Biot-Savart law, Ampere's circuital law, force on current carrying conductor, torque on coil, Earth's magnetism, magnetic materials.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-5 questions (High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 13: Electromagnetic Induction</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Faraday's laws, Lenz's law, self and mutual induction, alternating current, RMS values, impedance, resonance in LCR circuits, transformer.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 14: Electromagnetic Waves</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> EM spectrum, properties of EM waves, speed of light.</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 1-2 questions (Low priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 15: Optics</h4>
              <p className="text-gray-700 mb-6"><strong>Topics Covered:</strong> Ray optics (reflection, refraction, mirrors, lenses, optical instruments), wave optics (interference, diffraction, polarization).</p>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 3-4 questions (High priority)</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 16: Modern Physics</h4>
              <p className="text-gray-700 mb-4"><strong>Topics Covered:</strong></p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Dual Nature:</strong> Photoelectric effect, Einstein's equation, de Broglie wavelength</li>
                <li><strong>Atoms and Nuclei:</strong> Bohr's model, energy levels, nuclear composition, binding energy, radioactivity, nuclear fission and fusion</li>
                <li><strong>Electronic Devices:</strong> Semiconductors, p-n junction, diode, transistor, logic gates</li>
              </ul>
              <p className="text-gray-700 mb-6"><strong>Chapter-wise Weightage:</strong> 4-5 questions each (Very High priority)</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Chemistry Syllabus (35 Questions, 35 Marks)</h3>
              <p className="text-gray-700 mb-6">
                The Chemistry syllabus for SRMJEEE 2026 is divided into Physical Chemistry, Inorganic Chemistry, and Organic Chemistry, with questions distributed approximately as 35-40% Physical, 25-30% Inorganic, and 30-40% Organic Chemistry.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Physical Chemistry Units:</h4>
              <p className="text-gray-700 mb-2"><strong>Unit 1:</strong> Some Basic Concepts of Chemistry (1-2 questions) - Mole concept, stoichiometry, limiting reagent</p>
              <p className="text-gray-700 mb-2"><strong>Unit 2:</strong> States of Matter (3-4 questions) - Gas laws, ideal gas equation, kinetic theory, solid state, close packing</p>
              <p className="text-gray-700 mb-2"><strong>Unit 3:</strong> Atomic Structure (2-3 questions) - Quantum mechanical model, quantum numbers, electronic configuration</p>
              <p className="text-gray-700 mb-2"><strong>Unit 4:</strong> Chemical Bonding (3-4 questions) - Ionic, covalent, VSEPR theory, hybridization, molecular orbital theory</p>
              <p className="text-gray-700 mb-2"><strong>Unit 5:</strong> Chemical Thermodynamics (3-4 questions) - Laws, enthalpy, entropy, Gibbs free energy</p>
              <p className="text-gray-700 mb-2"><strong>Unit 6:</strong> Solutions (2-3 questions) - Concentration terms, Raoult's law, colligative properties</p>
              <p className="text-gray-700 mb-2"><strong>Unit 7:</strong> Equilibrium (3-4 questions) - Chemical and ionic equilibrium, pH, buffers, solubility product</p>
              <p className="text-gray-700 mb-2"><strong>Unit 8:</strong> Redox Reactions (1-2 questions) - Oxidation number, balancing redox equations</p>
              <p className="text-gray-700 mb-2"><strong>Unit 9:</strong> Electrochemistry (3-4 questions) - Conductance, Nernst equation, batteries, corrosion</p>
              <p className="text-gray-700 mb-2"><strong>Unit 10:</strong> Chemical Kinetics (3-4 questions) - Rate of reaction, order, Arrhenius equation</p>
              <p className="text-gray-700 mb-6"><strong>Unit 11:</strong> Surface Chemistry (2-3 questions) - Adsorption, catalysis, colloids</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Inorganic Chemistry Units:</h4>
              <p className="text-gray-700 mb-2"><strong>Unit 12:</strong> Classification and Periodicity (2-3 questions) - Periodic trends</p>
              <p className="text-gray-700 mb-2"><strong>Unit 13:</strong> Isolation of Elements (2-3 questions) - Metallurgy, extraction processes</p>
              <p className="text-gray-700 mb-2"><strong>Unit 14:</strong> p-Block Elements (3-4 questions) - Nitrogen, oxygen, halogens, noble gases families</p>
              <p className="text-gray-700 mb-6"><strong>Unit 15:</strong> d and f Block Elements (3-4 questions) - Transition elements, lanthanoids, coordination compounds</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Organic Chemistry Units:</h4>
              <p className="text-gray-700 mb-2"><strong>Unit 16:</strong> Basic Principles (2-3 questions) - IUPAC nomenclature, isomerism, electronic effects</p>
              <p className="text-gray-700 mb-2"><strong>Unit 17:</strong> Hydrocarbons (3-4 questions) - Alkanes, alkenes, alkynes, benzene reactions</p>
              <p className="text-gray-700 mb-2"><strong>Unit 18:</strong> Haloalkanes/Haloarenes (2-3 questions) - Substitution and elimination reactions</p>
              <p className="text-gray-700 mb-2"><strong>Unit 19:</strong> Alcohols, Phenols, Ethers (2-3 questions) - Preparation, reactions, acidity</p>
              <p className="text-gray-700 mb-2"><strong>Unit 20:</strong> Aldehydes, Ketones, Carboxylic Acids (3-4 questions) - Nucleophilic addition, oxidation, reduction</p>
              <p className="text-gray-700 mb-2"><strong>Unit 21:</strong> Organic Compounds with Nitrogen (2-3 questions) - Amines, diazonium salts, cyanides</p>
              <p className="text-gray-700 mb-2"><strong>Unit 22:</strong> Biomolecules (1-3 questions) - Carbohydrates, proteins, nucleic acids, vitamins, hormones</p>
              <p className="text-gray-700 mb-2"><strong>Unit 23:</strong> Polymers (2-3 questions) - Classification, important polymers</p>
              <p className="text-gray-700 mb-6"><strong>Unit 24:</strong> Chemistry in Everyday Life (1-2 questions) - Drugs, medicines, food additives, soaps, detergents</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Mathematics Syllabus (40 Questions, 40 Marks)</h3>
              <p className="text-gray-700 mb-6">
                The Mathematics syllabus for SRMJEEE 2026 covers topics from both Class 11 and Class 12, with emphasis on Calculus, Algebra, and Coordinate Geometry.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Mathematics Units:</h4>
              <p className="text-gray-700 mb-2"><strong>Unit 1:</strong> Sets, Relations and Functions (2-3 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 2:</strong> Complex Numbers and Quadratic Equations (3-4 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 3:</strong> Matrices and Determinants (2-3 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 4:</strong> Permutations and Combinations (2-3 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 5:</strong> Binomial Theorem and Induction (2-3 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 6:</strong> Sequences and Series (2-3 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 7:</strong> Trigonometry (3-4 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 8:</strong> Differential Calculus (3-4 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 9:</strong> Integral Calculus (3-4 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 10:</strong> Vectors (4-5 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 11:</strong> 3D Geometry (2-3 questions)</p>
              <p className="text-gray-700 mb-6"><strong>Unit 12:</strong> Statistics and Probability (3-4 questions)</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Biology Syllabus (40 Questions, 40 Marks - Alternative to Mathematics)</h3>
              <p className="text-gray-700 mb-6">
                Biology is an alternative to Mathematics for candidates applying to Biotechnology, Biomedical Engineering, Genetic Engineering, and related programs. The syllabus covers topics from Class 11 and Class 12 Biology (Botany and Zoology).
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Biology Units:</h4>
              <p className="text-gray-700 mb-2"><strong>Unit 1:</strong> Diversity in Living World (2-3 questions)</p>
              <p className="text-gray-700 mb-2"><strong>Unit 2:</strong> Structural Organization (3-4 questions) - Plant and animal tissues</p>
              <p className="text-gray-700 mb-2"><strong>Unit 3:</strong> Cell Structure and Function (4-5 questions) - Cell organelles, mitosis, meiosis</p>
              <p className="text-gray-700 mb-2"><strong>Unit 4:</strong> Plant Physiology (4-5 questions) - Photosynthesis, respiration, mineral nutrition</p>
              <p className="text-gray-700 mb-2"><strong>Unit 5:</strong> Human Physiology (5-6 questions) - Digestion, breathing, circulation, excretion, neural control, chemical coordination</p>
              <p className="text-gray-700 mb-2"><strong>Unit 6:</strong> Reproduction (4-5 questions) - Plants and human reproduction</p>
              <p className="text-gray-700 mb-2"><strong>Unit 7:</strong> Genetics and Evolution (5-6 questions) - Mendel's laws, DNA, protein synthesis, evolution</p>
              <p className="text-gray-700 mb-2"><strong>Unit 8:</strong> Biology and Human Welfare (3-4 questions) - Health, disease, microbes</p>
              <p className="text-gray-700 mb-6"><strong>Unit 9:</strong> Biotechnology (2-3 questions) - Principles and applications</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">English and Aptitude (20 Questions Combined)</h3>
              <p className="text-gray-700 mb-4"><strong>English Component (8-10 questions):</strong></p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                <li>Vocabulary (Synonyms, Antonyms, One-word Substitutions)</li>
                <li>Grammar (Articles, Prepositions, Tenses, Subject-Verb Agreement)</li>
                <li>Sentence Correction and Error Spotting</li>
                <li>Reading Comprehension</li>
                <li>Verbal Ability</li>
              </ul>

              <p className="text-gray-700 mb-4"><strong>Aptitude Component (10-12 questions):</strong></p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Logical Reasoning (Series, Pattern Recognition, Analogies, Blood Relations)</li>
                <li>Quantitative Aptitude (Number Systems, Percentages, Ratios, Profit-Loss)</li>
                <li>Data Interpretation (Tables, Bar Graphs, Pie Charts)</li>
                <li>Visual Reasoning</li>
                <li>General Awareness</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> This comprehensive syllabus guide covers all topics that may appear in SRMJEEE 2026. Candidates should focus on understanding concepts, practicing numerical problems, and developing speed and accuracy to score well in the examination.
                </p>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
  return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026 Cutoff – Everything You Need to Know</h2>
              
              <p className="text-gray-700 mb-6">
                The SRMJEEE cutoff is the minimum rank required to get admission into B.Tech programs offered across various SRM University campuses. Knowing these cutoffs can help you understand which campus and branch you're likely to get during the counselling process.
              </p>
              <p className="text-gray-700 mb-6">
                Let's go through all the important details — from factors affecting cutoffs to expected ranks for 2026.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is the SRMJEEE Cutoff?</h3>
              <p className="text-gray-700 mb-4">
                In simple terms, the SRMJEEE cutoff is the <strong>last rank at which admission is offered</strong> to a specific branch at a specific campus.
              </p>
              <p className="text-gray-700 mb-4">
                SRM Institute of Science and Technology doesn't officially release cutoff ranks before counselling. Instead, they are revealed <strong>during seat allotment</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                Cutoffs vary every year depending on factors like:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>The <strong>difficulty level</strong> of the exam</li>
                <li><strong>Number of students</strong> who appeared</li>
                <li><strong>Seat availability</strong> in each campus</li>
                <li>The <strong>popularity</strong> of a particular branch (CSE and AI/ML are usually the toughest to get)</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Generally, top branches like <strong>Computer Science Engineering (CSE)</strong> have much lower (more competitive) cutoffs compared to traditional ones like <strong>Civil or Chemical Engineering</strong>.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Factors Affecting SRMJEEE Cutoff</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Factor</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Effect on Cutoff</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Difficulty</td>
                      <td className="border border-gray-300 px-4 py-2">Tough exam → Higher closing ranks</td>
                      <td className="border border-gray-300 px-4 py-2">If the paper is hard, more students score lower marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Number of Candidates</td>
                      <td className="border border-gray-300 px-4 py-2">More students → Lower closing ranks</td>
                      <td className="border border-gray-300 px-4 py-2">High competition makes it harder to qualify</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Availability</td>
                      <td className="border border-gray-300 px-4 py-2">More seats → Easier admission</td>
                      <td className="border border-gray-300 px-4 py-2">Limited seats in top branches increase competition</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Previous Trends</td>
                      <td className="border border-gray-300 px-4 py-2">Sets expectations</td>
                      <td className="border border-gray-300 px-4 py-2">Past patterns help predict upcoming cutoffs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Campus Popularity</td>
                      <td className="border border-gray-300 px-4 py-2">More popular → Tougher to get</td>
                      <td className="border border-gray-300 px-4 py-2">Kattankulathur is the most in-demand campus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Phase</td>
                      <td className="border border-gray-300 px-4 py-2">Later phases → Slightly easier cutoffs</td>
                      <td className="border border-gray-300 px-4 py-2">Phase 3 often has relaxed ranks due to remaining seats</td>
                    </tr>
                  </tbody>
                </table>
        </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expected SRMJEEE 2026 Cutoff (All Campuses Combined)</h3>
              <p className="text-gray-700 mb-4">
                Based on previous trends and the expected level of competition this year, here's what you can expect for <strong>SRMJEEE 2026:</strong>
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Expected Cutoff by Branch (General Category)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Engineering Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Closing Rank 2026</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Score Range Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer Science Engineering (CSE)</td>
                      <td className="border border-gray-300 px-4 py-2">9,500 - 10,500</td>
                      <td className="border border-gray-300 px-4 py-2">60-75 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE - Artificial Intelligence & ML</td>
                      <td className="border border-gray-300 px-4 py-2">12,000 - 15,000</td>
                      <td className="border border-gray-300 px-4 py-2">55-70 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE - Data Science</td>
                      <td className="border border-gray-300 px-4 py-2">15,000 - 18,000</td>
                      <td className="border border-gray-300 px-4 py-2">52-65 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE - Cyber Security</td>
                      <td className="border border-gray-300 px-4 py-2">18,000 - 22,000</td>
                      <td className="border border-gray-300 px-4 py-2">48-60 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Technology</td>
                      <td className="border border-gray-300 px-4 py-2">8,000 - 12,000</td>
                      <td className="border border-gray-300 px-4 py-2">58-72 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Electronics & Communication (ECE)</td>
                      <td className="border border-gray-300 px-4 py-2">26,700 - 27,200</td>
                      <td className="border border-gray-300 px-4 py-2">42-55 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Electrical & Electronics (EEE)</td>
                      <td className="border border-gray-300 px-4 py-2">39,000 - 40,000</td>
                      <td className="border border-gray-300 px-4 py-2">38-50 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">45,000 - 50,000</td>
                      <td className="border border-gray-300 px-4 py-2">35-45 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Aerospace Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">51,500 - 52,500</td>
                      <td className="border border-gray-300 px-4 py-2">33-43 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Automobile Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">54,000 - 55,000</td>
                      <td className="border border-gray-300 px-4 py-2">32-42 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">69,000 - 70,000</td>
                      <td className="border border-gray-300 px-4 py-2">28-38 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">69,000 - 70,000</td>
                      <td className="border border-gray-300 px-4 py-2">28-38 marks</td>
                    </tr>
                  </tbody>
                </table>
      </div>

              <p className="bg-gray-50 p-4 rounded-lg mb-6">
                <strong>Note:</strong> A lower rank means a better chance. For example, if the closing rank for CSE (Kattankulathur) is 2,000, only students with ranks up to 2,000 can get that seat.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Campus-wise Expected Cutoffs (2026)</h3>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">1. Kattankulathur (Main Campus)</h4>
              <p className="text-gray-700 mb-4">
                Most competitive and prestigious SRM campus.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Opening Rank</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Competition Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">2,000</td>
                      <td className="border border-gray-300 px-4 py-2">Extremely High</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE - AI/ML</td>
                      <td className="border border-gray-300 px-4 py-2">1,500</td>
                      <td className="border border-gray-300 px-4 py-2">8,000</td>
                      <td className="border border-gray-300 px-4 py-2">Very High</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Technology</td>
                      <td className="border border-gray-300 px-4 py-2">800</td>
                      <td className="border border-gray-300 px-4 py-2">5,000</td>
                      <td className="border border-gray-300 px-4 py-2">Very High</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">1,800</td>
                      <td className="border border-gray-300 px-4 py-2">10,000</td>
                      <td className="border border-gray-300 px-4 py-2">High</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">5,000</td>
                      <td className="border border-gray-300 px-4 py-2">18,000</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">8,000</td>
                      <td className="border border-gray-300 px-4 py-2">22,000</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">15,000</td>
                      <td className="border border-gray-300 px-4 py-2">35,000</td>
                      <td className="border border-gray-300 px-4 py-2">Low</td>
                    </tr>
                  </tbody>
                </table>
            </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">2. NCR Campus (Ghaziabad)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Recommended Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                      <td className="border border-gray-300 px-4 py-2">14,000 - 15,000</td>
                      <td className="border border-gray-300 px-4 py-2">55-65 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE - AI/ML</td>
                      <td className="border border-gray-300 px-4 py-2">18,000 - 20,000</td>
                      <td className="border border-gray-300 px-4 py-2">50-60 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Technology</td>
                      <td className="border border-gray-300 px-4 py-2">16,000 - 18,000</td>
                      <td className="border border-gray-300 px-4 py-2">52-62 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">22,000 - 25,000</td>
                      <td className="border border-gray-300 px-4 py-2">45-55 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">30,000 - 35,000</td>
                      <td className="border border-gray-300 px-4 py-2">40-48 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">35,000 - 40,000</td>
                      <td className="border border-gray-300 px-4 py-2">38-45 marks</td>
                    </tr>
                  </tbody>
                </table>
            </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">3. Amaravati (AP Campus)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Score Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                      <td className="border border-gray-300 px-4 py-2">16,000 - 18,000</td>
                      <td className="border border-gray-300 px-4 py-2">50-60 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE - AI</td>
                      <td className="border border-gray-300 px-4 py-2">20,000 - 23,000</td>
                      <td className="border border-gray-300 px-4 py-2">45-55 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">28,000 - 32,000</td>
                      <td className="border border-gray-300 px-4 py-2">42-52 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">35,000 - 40,000</td>
                      <td className="border border-gray-300 px-4 py-2">38-48 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">40,000 - 45,000</td>
                      <td className="border border-gray-300 px-4 py-2">36-45 marks</td>
                    </tr>
                  </tbody>
                </table>
          </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">4. Sikkim Campus</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Closing Rank</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Score Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                      <td className="border border-gray-300 px-4 py-2">25,000 - 28,000</td>
                      <td className="border border-gray-300 px-4 py-2">42-52 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                      <td className="border border-gray-300 px-4 py-2">40,000 - 45,000</td>
                      <td className="border border-gray-300 px-4 py-2">35-45 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">EEE</td>
                      <td className="border border-gray-300 px-4 py-2">50,000 - 55,000</td>
                      <td className="border border-gray-300 px-4 py-2">32-42 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">55,000 - 60,000</td>
                      <td className="border border-gray-300 px-4 py-2">30-40 marks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Category-wise Cutoff Relaxation (Expected)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Approx. CSE Cutoff (KTR)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Relaxation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">General/Unreserved</td>
                      <td className="border border-gray-300 px-4 py-2">Up to 2,000</td>
                      <td className="border border-gray-300 px-4 py-2">Baseline</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OBC (Non-Creamy Layer)</td>
                      <td className="border border-gray-300 px-4 py-2">Up to 4,000</td>
                      <td className="border border-gray-300 px-4 py-2">~2x relaxation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SC (Scheduled Caste)</td>
                      <td className="border border-gray-300 px-4 py-2">Up to 8,000</td>
                      <td className="border border-gray-300 px-4 py-2">~4x relaxation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ST (Scheduled Tribe)</td>
                      <td className="border border-gray-300 px-4 py-2">Up to 10,000</td>
                      <td className="border border-gray-300 px-4 py-2">~5x relaxation</td>
                    </tr>
                  </tbody>
                </table>
                </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">SRMJEEE Marks vs Rank (Expected Analysis)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks (out of 130)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Rank Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentile</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Possible Branches</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">115+ marks</td>
                      <td className="border border-gray-300 px-4 py-2">1 - 250</td>
                      <td className="border border-gray-300 px-4 py-2">99.8+</td>
                      <td className="border border-gray-300 px-4 py-2">CSE at any campus, Merit scholarships</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">100-109 marks</td>
                      <td className="border border-gray-300 px-4 py-2">480 - 900</td>
                      <td className="border border-gray-300 px-4 py-2">99-99.5</td>
                      <td className="border border-gray-300 px-4 py-2">CSE KTR, IT KTR, CSE NCR</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">90-99 marks</td>
                      <td className="border border-gray-300 px-4 py-2">900 - 2,500</td>
                      <td className="border border-gray-300 px-4 py-2">98-99</td>
                      <td className="border border-gray-300 px-4 py-2">CSE KTR/NCR, IT, ECE KTR</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">80-89 marks</td>
                      <td className="border border-gray-300 px-4 py-2">2,500 - 6,000</td>
                      <td className="border border-gray-300 px-4 py-2">95-98</td>
                      <td className="border border-gray-300 px-4 py-2">CSE NCR/Amaravati, ECE KTR, IT NCR</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">70-74 marks</td>
                      <td className="border border-gray-300 px-4 py-2">10,000 - 14,000</td>
                      <td className="border border-gray-300 px-4 py-2">90-93</td>
                      <td className="border border-gray-300 px-4 py-2">ECE NCR, CSE Sikkim, EEE KTR</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">60-69 marks</td>
                      <td className="border border-gray-300 px-4 py-2">14,000 - 24,000</td>
                      <td className="border border-gray-300 px-4 py-2">85-90</td>
                      <td className="border border-gray-300 px-4 py-2">EEE, Mechanical, ECE Sikkim</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">50-59 marks</td>
                      <td className="border border-gray-300 px-4 py-2">24,000 - 40,000</td>
                      <td className="border border-gray-300 px-4 py-2">75-85</td>
                      <td className="border border-gray-300 px-4 py-2">Mechanical, Civil, Chemical</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">40-49 marks</td>
                      <td className="border border-gray-300 px-4 py-2">40,000 - 60,000</td>
                      <td className="border border-gray-300 px-4 py-2">60-75</td>
                      <td className="border border-gray-300 px-4 py-2">Civil, Chemical, Biotech</td>
                    </tr>
                  </tbody>
                </table>
          </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Final Words</h3>
              <p className="text-gray-700 mb-6">
                The <strong>SRMJEEE 2026 cutoff</strong> will depend largely on the difficulty level of the exam and the number of students applying. Candidates aiming for top campuses like <strong>Kattankulathur or NCR</strong> should target <strong>at least 65–75 marks</strong> for a strong chance in CSE or related branches.
              </p>
              <p className="text-gray-700 mb-6">
                Staying updated with official notifications and previous-year data can help you make smarter choices during counselling.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Important Notes:</strong> These cutoffs are based on previous year trends and expected patterns. Actual cutoffs may vary based on exam difficulty, number of applicants, and seat availability. Cutoffs are determined during counselling based on actual seat allotment.
                </p>
            </div>
          </div>
        </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026 Counselling Details</h2>
              
              <p className="text-gray-700 mb-6">
                The SRMJEEE 2026 counselling is the final and crucial step in the admission process where qualified candidates can secure their seats in B.Tech programs across SRM campuses. This comprehensive guide covers all aspects of the counselling process including registration, choice filling, seat allotment, fee payment, and document verification.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding SRMJEEE Counselling</h3>
              <p className="text-gray-700 mb-6">
                SRMJEEE counselling is conducted entirely online through the official portal after the declaration of results for each examination phase. The counselling process is designed to allocate seats to qualified candidates based on their rank, preferences, and seat availability. Candidates who meet the SRMJEEE cutoff criteria are eligible to participate in the counselling rounds.
              </p>
              <p className="text-gray-700 mb-6">
                The counselling is conducted separately for each phase (Phase 1, Phase 2, and Phase 3) of the SRMJEEE examination. This means candidates who appear in Phase 1 will participate in Phase 1 counselling, and similarly for other phases. However, if a candidate appears in multiple phases, their best score across all attempts will be considered for the final counselling process.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features of SRMJEEE Counselling</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Completely Online (no physical reporting required initially)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Portal</td>
                      <td className="border border-gray-300 px-4 py-2">applications.srmist.edu.in/btech</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phases</td>
                      <td className="border border-gray-300 px-4 py-2">Separate counselling for Phase 1, 2, and 3 exam takers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Modifications</td>
                      <td className="border border-gray-300 px-4 py-2">Allowed unlimited times before deadline</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Allotment Basis</td>
                      <td className="border border-gray-300 px-4 py-2">Rank, choices/preferences, seat availability</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Payment Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Online (credit/debit card, net banking, UPI)</td>
                    </tr>
                  </tbody>
                </table>
      </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">SRMJEEE 2026 Counselling Schedule</h3>
              <p className="text-gray-700 mb-6">
                The counselling schedule is announced separately for each phase after the respective result declaration. Based on the examination timeline and previous year patterns, here's the expected counselling schedule for SRMJEEE 2026:
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Phase 1 Counselling Schedule</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Last week of April 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Within 24-48 hours</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration Opens</td>
                      <td className="border border-gray-300 px-4 py-2">First week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling Period</td>
                      <td className="border border-gray-300 px-4 py-2">First week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Allotment Announced</td>
                      <td className="border border-gray-300 px-4 py-2">Third week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Acceptance Window</td>
                      <td className="border border-gray-300 px-4 py-2">Third week of May 2026</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Fee Payment Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">Within 3-5 days of allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Limited window</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Classes Commencement</td>
                      <td className="border border-gray-300 px-4 py-2">First week of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                  </tbody>
                </table>
          </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Phase 2 Counselling Schedule</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Last week of June 2026</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration</td>
                      <td className="border border-gray-300 px-4 py-2">First week of July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling Period</td>
                      <td className="border border-gray-300 px-4 py-2">First week of July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Fee Payment Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Classes Join</td>
                      <td className="border border-gray-300 px-4 py-2">Late July 2026</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                    </tr>
                  </tbody>
                </table>
                      </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Process</h3>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Check Eligibility and Result</h4>
              <p className="text-gray-700 mb-4">
                After the SRMJEEE result is declared, verify your qualification status and rank.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Visit the official website: applications.srmist.edu.in/btech</li>
                <li>Login using your Registration ID and Password</li>
                <li>Check your All India Rank (AIR) and category rank</li>
                <li>Download and print the Rank Card</li>
                <li>Verify all details on rank card (name, DOB, rank, score)</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Counselling Registration</h4>
              <p className="text-gray-700 mb-4">
                Once you confirm your eligibility, register for counselling.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Login to Portal using registration credentials</li>
                <li>Navigate to Counselling Section and click "Register for Counselling"</li>
                <li>Read and accept Terms and Conditions</li>
                <li>Verify and update personal and academic details</li>
                <li>Complete registration (Time required: 10-15 minutes)</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Document Upload</h4>
              <p className="text-gray-700 mb-6">
                During counselling registration, candidates must upload digital copies of all required documents including Class 10 & 12 certificates, SRMJEEE rank card, category certificates (if applicable), and other necessary documents. All documents should be in PDF/JPEG format with size limits as specified.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Counselling Fee Payment</h4>
              <p className="text-gray-700 mb-6">
                Candidates must pay the counselling fee to proceed with choice filling. The counselling registration fee is approximately ₹10,000 and counselling fee ranges from ₹25,000 - ₹50,000 depending on the program. This fee is non-refundable but adjusted in tuition fee if seat is accepted.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Choice Filling (Program and Campus Selection)</h4>
              <p className="text-gray-700 mb-4">
                Choice filling allows candidates to select their preferred branch and campus combinations in order of preference.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Strategy:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Add 20-30 choices minimum (dream, realistic, and safe options)</li>
                <li>Top 5-10 choices should be aspirational branches</li>
                <li>Next 10-15 choices based on expected cutoff for your rank</li>
                <li>Last 5-10 choices as safe backup options</li>
                <li>Choices can be modified unlimited times before deadline</li>
                <li>Use mock seat allotment predictor to refine choices</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Seat Allotment</h4>
              <p className="text-gray-700 mb-6">
                After the choice filling deadline, SRM University processes all candidate choices and allocates seats based on rank, choice priority, and seat availability. Seat allotment results are published online and candidates receive notifications via email and SMS. The allotment status can be: Seat Allotted, Waitlisted, or Not Allotted.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Seat Acceptance and Fee Payment</h4>
              <p className="text-gray-700 mb-4">
                Once a seat is allotted, candidates must accept or reject within 3-5 days. Upon acceptance, they must pay the balance counselling fee and advance tuition fee (₹50,000 - ₹1,00,000) to secure the seat.
              </p>
              <p className="text-gray-700 mb-6">
                After payment, candidates receive Provisional Admission Letter (PAL) which confirms seat allotment and contains details about balance fee payment, physical verification date, and reporting instructions.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Balance Fee Payment</h4>
              <p className="text-gray-700 mb-6">
                After securing the seat, candidates must pay the balance tuition fee within 15-30 days. Total first year cost including tuition ranges from ₹3,00,000 - ₹4,25,000 depending on branch. Additional fees include admission fee (₹10,000), caution deposit (₹5,000), library deposit (₹2,000), development fee (₹25,000), university fee (₹5,000), and examination fee (₹3,000).
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Online Enrollment and Profile Creation</h4>
              <p className="text-gray-700 mb-6">
                After complete fee payment, candidates complete online enrollment to create their official student profile including personal details, family information, address, emergency contacts, and other required information. Permanent Student ID, Roll number, and University email ID are assigned at this stage.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Physical Document Verification</h4>
              <p className="text-gray-700 mb-6">
                Physical verification of all original documents at the allotted campus is required. Candidates must bring originals and photocopies of Class 10 & 12 certificates, Transfer Certificate, Migration Certificate (if applicable), Character Certificate, Category Certificate (if applicable), fee payment receipts, and other required documents. After successful verification, students receive ID cards, complete hostel allotment (if opted), and attend orientation program.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling FAQs</h3>
              <div className="space-y-4 text-gray-700 mb-6">
                      <div>
                  <p><strong>Q: Can I participate in multiple phase counsellings?</strong></p>
                  <p>A: If you appear in multiple exam phases, your best score is considered. You participate in counselling corresponding to your best performance phase.</p>
                      </div>
                <div>
                  <p><strong>Q: What if I don't get any seat in choice filling?</strong></p>
                  <p>A: You can participate in subsequent counselling rounds or later phases. You can also wait for spot counselling if seats remain vacant.</p>
                    </div>
                <div>
                  <p><strong>Q: Is counselling fee refundable?</strong></p>
                  <p>A: No, the counselling fee is non-refundable. It's adjusted in total tuition fee if seat is accepted.</p>
                    </div>
                <div>
                  <p><strong>Q: Can I change my choices after submission?</strong></p>
                  <p>A: Yes, unlimited modifications are allowed until the choice filling deadline. After deadline, no changes possible.</p>
                  </div>
                <div>
                  <p><strong>Q: What if I miss the seat acceptance deadline?</strong></p>
                  <p>A: Your allotted seat will be cancelled and offered to the next candidate. You forfeit your counselling fee.</p>
                      </div>
                      <div>
                  <p><strong>Q: Is physical reporting mandatory?</strong></p>
                  <p>A: Yes, original document verification and physical reporting are mandatory to complete admission process.</p>
                      </div>
                    </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> This comprehensive guide covers all aspects of SRMJEEE 2026 counselling process. Candidates should regularly check the official website for exact dates and updates. All information provided is based on previous year patterns and expected timelines for 2026.
                </p>
                    </div>
                  </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">SRMJEEE 2026</h2>
              <p className="text-gray-600">Select a tab to view detailed information about SRMJEEE 2026.</p>
                      </div>
                      </div>
  );
}
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SRMJEEE 2026</h1>
          <p className="text-gray-600">SRM Joint Engineering Entrance Examination - Complete Information</p>
                    </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
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
            </nav>
                  </div>
                </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">B.Tech Admissions OPEN</h3>

              {/* SRM University */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={srmLogo} alt="SRM University" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">SRM University B.Tech</h4>
                    <p className="text-xs text-gray-600">SRM Institute of Science and Technology</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Deemed University | 800+ Seats | SRMJEEE Based | Excellent Placements</p>
                <button className="w-full bg-green-600 text-white text-xs py-2 px-3 rounded hover:bg-green-700 transition-colors">
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
                <button className="w-full bg-green-600 text-white text-xs py-2 px-3 rounded hover:bg-green-700 transition-colors">
                  ✓ Apply Now
                </button>
              </div>

              {/* BITS Pilani */}
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={bitsLogo} alt="BITS Pilani" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">BITS Pilani B.E</h4>
                    <p className="text-xs text-gray-600">Birla Institute of Technology & Science</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Private Deemed | 2500+ Seats | BITSAT Based | Top Placements</p>
                <button className="w-full bg-green-600 text-white text-xs py-2 px-3 rounded hover:bg-green-700 transition-colors">
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