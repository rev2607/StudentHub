import { useState } from 'react';
import { Link } from 'react-router-dom';
import srmLogo from '../../assets/Colleges/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png';
import vitLogo from '../../assets/Colleges/vit.png';

export default function KLUPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Exam Overview</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                KLEEE (KL Engineering Entrance Examination) is a university-level entrance examination conducted by KL University (Koneru Lakshmaiah Education Foundation) for admission to undergraduate engineering programs (B.Tech) at its campuses. This comprehensive guide provides complete information about the KLEEE 2026 examination.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">About KLEEE 2026</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                KLEEE is conducted annually by KL University, which is recognized as a deemed-to-be university located in Andhra Pradesh, India. The examination serves as the gateway for admission to various B.Tech programs offered across KL University campuses including the main campus at Vaddeswaram (Vijayawada) and other centers.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights of KLEEE 2026</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Full Form</td>
                      <td className="border border-gray-300 px-4 py-2">KL Engineering Entrance Examination (KLEEE)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Body</td>
                      <td className="border border-gray-300 px-4 py-2">KL University (Koneru Lakshmaiah Education Foundation)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Level</td>
                      <td className="border border-gray-300 px-4 py-2">University Level Undergraduate Entrance Exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Official Website</td>
                      <td className="border border-gray-300 px-4 py-2">kluniversity.in</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Frequency</td>
                      <td className="border border-gray-300 px-4 py-2">Once a year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Purpose</td>
                      <td className="border border-gray-300 px-4 py-2">Admission to B.Tech programs at KL University campuses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Recognition</td>
                      <td className="border border-gray-300 px-4 py-2">Valid for KL University admissions only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Age Limit</td>
                      <td className="border border-gray-300 px-4 py-2">Typically 17 years as on December 31, 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Eligibility</td>
                      <td className="border border-gray-300 px-4 py-2">10+2 with Physics, Chemistry, Mathematics (PCM)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">KLEEE 2026 Exam Pattern</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Understanding the exam pattern is crucial for effective preparation. KLEEE follows a specific structure designed to assess candidates' knowledge in core science subjects.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Exam Mode and Duration</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Parameter</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Online (Remote Proctored Test) and Offline (Pen & Paper Based)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Language</td>
                      <td className="border border-gray-300 px-4 py-2">English only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Duration</td>
                      <td className="border border-gray-300 px-4 py-2">180 minutes (3 hours)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Sessions</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple sessions conducted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Type of Questions</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Choice Questions (MCQs)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Number of Options</td>
                      <td className="border border-gray-300 px-4 py-2">4 options per question</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2">75 questions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">75 marks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Section-wise Distribution</h4>
              <p className="text-gray-700 mb-3 leading-relaxed">
                The KLEEE 2026 exam is divided into three major sections, each testing a different subject area:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject/Section</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Number of Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks per Question</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Total Marks</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Compulsory Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">All 25 must be attempted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physics</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">All 25 must be attempted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemistry</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">All 25 must be attempted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">75</td>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">75</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">All 75 questions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                <strong>Note:</strong> Some candidates may have the option to choose Biology instead of Mathematics for specific biotechnology-related programs, though Mathematics is standard for engineering courses.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Marking Scheme</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Answer Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Awarded</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Correct Answer</td>
                      <td className="border border-gray-300 px-4 py-2">+1 mark</td>
                      <td className="border border-gray-300 px-4 py-2">None</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Incorrect Answer</td>
                      <td className="border border-gray-300 px-4 py-2">0 marks</td>
                      <td className="border border-gray-300 px-4 py-2">No negative marking</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Unattempted Question</td>
                      <td className="border border-gray-300 px-4 py-2">0 marks</td>
                      <td className="border border-gray-300 px-4 py-2">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Key Advantage:</strong> The absence of negative marking means candidates should attempt all 75 questions, as there is no penalty for wrong answers.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Exam Difficulty Level</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                According to official information, the KLEEE 2026 exam difficulty level will be similar to JEE Main, meaning it tests conceptual understanding and application skills at the 10+2 level but with a moderate to high difficulty standard.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">KLEEE 2026 Syllabus</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The KLEEE syllabus is based on the Class 11 and Class 12 (10+2) curriculum prescribed by various Indian educational boards (CBSE, State Boards). The syllabus covers three main subjects with multiple units and topics in each.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Physics Syllabus</h4>
              <p className="text-gray-700 mb-3 leading-relaxed">
                The Physics section covers 27 major units spanning classical mechanics to modern physics:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Unit Number</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Topic/Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">Physics and Measurement / Units and Dimensions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">Elements of Vectors / Kinematics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">3</td>
                      <td className="border border-gray-300 px-4 py-2">Kinematics-Dynamics / Laws of Motion</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">4</td>
                      <td className="border border-gray-300 px-4 py-2">Work, Power, and Energy</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">5</td>
                      <td className="border border-gray-300 px-4 py-2">Centre of Mass</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">6</td>
                      <td className="border border-gray-300 px-4 py-2">Friction</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">7</td>
                      <td className="border border-gray-300 px-4 py-2">Rotatory Motion / Rotational Motion</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">8</td>
                      <td className="border border-gray-300 px-4 py-2">Gravitation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">9</td>
                      <td className="border border-gray-300 px-4 py-2">Simple Harmonic Motion / Oscillations and Waves</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">10</td>
                      <td className="border border-gray-300 px-4 py-2">Elasticity / Properties of Solids and Liquids</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">11</td>
                      <td className="border border-gray-300 px-4 py-2">Surface Tension</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">12</td>
                      <td className="border border-gray-300 px-4 py-2">Hydrodynamics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">13</td>
                      <td className="border border-gray-300 px-4 py-2">Viscosity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">14</td>
                      <td className="border border-gray-300 px-4 py-2">Expansion of Solids-Liquids-Gases</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">15</td>
                      <td className="border border-gray-300 px-4 py-2">Thermodynamics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">16</td>
                      <td className="border border-gray-300 px-4 py-2">Thermal Radiations / Kinetic Theory of Gases</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">17</td>
                      <td className="border border-gray-300 px-4 py-2">Sound</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">18</td>
                      <td className="border border-gray-300 px-4 py-2">Geometrical Optics / Optics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">19</td>
                      <td className="border border-gray-300 px-4 py-2">Physical Optics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">20</td>
                      <td className="border border-gray-300 px-4 py-2">Magnetism / Magnetic Effects of Current and Magnetism</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">21</td>
                      <td className="border border-gray-300 px-4 py-2">Electrostatics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">22</td>
                      <td className="border border-gray-300 px-4 py-2">Current Electricity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">23</td>
                      <td className="border border-gray-300 px-4 py-2">Thermo Electricity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">24</td>
                      <td className="border border-gray-300 px-4 py-2">Electro Magnetics / Electromagnetic Induction</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">Atomic Physics / Atoms and Nuclei</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">26</td>
                      <td className="border border-gray-300 px-4 py-2">Nuclear Physics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">27</td>
                      <td className="border border-gray-300 px-4 py-2">Semiconductor Devices / Electronic Devices</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                <strong>Additional Topics:</strong> Electromagnetic Waves, Dual Nature of Matter and Radiation, Communication Systems, Experimental Skills.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Chemistry Syllabus</h4>
              <p className="text-gray-700 mb-3 leading-relaxed">
                The Chemistry syllabus is comprehensive, covering Physical, Inorganic, and Organic Chemistry with 31 major units:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Unit Number</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Topic/Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">Atomic Structure</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">Nuclear Chemistry</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">3</td>
                      <td className="border border-gray-300 px-4 py-2">Periodic Classification of Elements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">4</td>
                      <td className="border border-gray-300 px-4 py-2">Chemical Bonding and Molecular Structure</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">5</td>
                      <td className="border border-gray-300 px-4 py-2">Stoichiometry / Some Basic Concepts in Chemistry</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">6</td>
                      <td className="border border-gray-300 px-4 py-2">Gaseous State / States of Matter</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">7</td>
                      <td className="border border-gray-300 px-4 py-2">Solutions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">8</td>
                      <td className="border border-gray-300 px-4 py-2">Acids and Bases</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">9</td>
                      <td className="border border-gray-300 px-4 py-2">Electro Chemistry / Redox Reactions and Electrochemistry</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">10</td>
                      <td className="border border-gray-300 px-4 py-2">Chemical Equilibrium and Chemical Kinetics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">11</td>
                      <td className="border border-gray-300 px-4 py-2">Chemical Energetics / Chemical Thermodynamics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">12</td>
                      <td className="border border-gray-300 px-4 py-2">Surface Chemistry</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">13</td>
                      <td className="border border-gray-300 px-4 py-2">Hydrogen and its Compounds</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">14</td>
                      <td className="border border-gray-300 px-4 py-2">Alkali and Alkaline Earth Metals / s-Block Elements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">15</td>
                      <td className="border border-gray-300 px-4 py-2">Group Elements (p-Block Elements)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">16</td>
                      <td className="border border-gray-300 px-4 py-2">IV Group Elements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">17</td>
                      <td className="border border-gray-300 px-4 py-2">V Group Elements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">18</td>
                      <td className="border border-gray-300 px-4 py-2">VI Group Elements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">19</td>
                      <td className="border border-gray-300 px-4 py-2">VII Group Elements</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">20</td>
                      <td className="border border-gray-300 px-4 py-2">Noble Gases</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">21</td>
                      <td className="border border-gray-300 px-4 py-2">Transition Elements (d-Block)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">22</td>
                      <td className="border border-gray-300 px-4 py-2">Environmental Chemistry</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">23</td>
                      <td className="border border-gray-300 px-4 py-2">Hydrocarbons I (Alkanes and Alkenes)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">24</td>
                      <td className="border border-gray-300 px-4 py-2">Hydrocarbons II</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">Alkyl Halides / Organic Compounds Containing Halogens</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">26</td>
                      <td className="border border-gray-300 px-4 py-2">Alcohols</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">27</td>
                      <td className="border border-gray-300 px-4 py-2">Ethers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">28</td>
                      <td className="border border-gray-300 px-4 py-2">Aldehydes and Ketones / Organic Compounds Containing Oxygen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">29</td>
                      <td className="border border-gray-300 px-4 py-2">Carboxylic Acids</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">30</td>
                      <td className="border border-gray-300 px-4 py-2">Nitrogen Compounds / Organic Compounds Containing Nitrogen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">31</td>
                      <td className="border border-gray-300 px-4 py-2">Chemistry in Biology and Medicine / Chemistry in Everyday Life</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                <strong>Additional Topics:</strong> Classification of Elements and Periodicity, General Principles and Processes of Isolation of Metals, d- and f-Block Elements, Co-Ordination Compounds, Purification and Characterisation of Organic Compounds, Some Basic Principles of Organic Chemistry, Polymers, Biomolecules, Principles Related to Practical Chemistry.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Mathematics Syllabus</h4>
              <p className="text-gray-700 mb-3 leading-relaxed">
                The Mathematics section covers fundamental and advanced topics essential for engineering education:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Major Topic Areas</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Sub-topics/Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Algebra</td>
                      <td className="border border-gray-300 px-4 py-2">Complex numbers, Quadratic equations, Sequences and series, Permutations and combinations, Binomial theorem, Matrices and determinants</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Trigonometry</td>
                      <td className="border border-gray-300 px-4 py-2">Trigonometric functions, Trigonometric equations, Inverse trigonometric functions, Properties and identities</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Vector Algebra</td>
                      <td className="border border-gray-300 px-4 py-2">Vector operations, Scalar and vector products, Applications</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Coordinate Geometry</td>
                      <td className="border border-gray-300 px-4 py-2">Straight lines, Circles, Conic sections (Parabola, Ellipse, Hyperbola), 3D geometry</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Calculus</td>
                      <td className="border border-gray-300 px-4 py-2">Limits and continuity, Differentiation, Applications of derivatives, Integration, Applications of integrals, Differential equations</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Probability</td>
                      <td className="border border-gray-300 px-4 py-2">Basic probability, Conditional probability, Probability distributions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                <strong>Additional Topics:</strong> Sets and relations, Functions, Mathematical reasoning, Statistics.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria for KLEEE 2026</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To appear for KLEEE 2026, candidates must meet the following eligibility requirements:
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Educational Qualification</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Criterion</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Qualifying Exam</td>
                      <td className="border border-gray-300 px-4 py-2">10+2 or equivalent from a recognized board</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mandatory Subjects</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, and Mathematics (PCM)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Minimum Marks</td>
                      <td className="border border-gray-300 px-4 py-2">Typically 60% aggregate in PCM for General category; relaxation for reserved categories</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Appearing Candidates</td>
                      <td className="border border-gray-300 px-4 py-2">Students appearing for Class 12 in 2026 are eligible (admission provisional until results)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Recognized Boards</td>
                      <td className="border border-gray-300 px-4 py-2">CBSE, ICSE, State Boards, International boards with equivalence</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Age Requirement</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Candidates should typically be at least 17 years old as on December 31, 2026</li>
                <li>No upper age limit specified</li>
                <li>Date of birth as per Class 10 certificate is considered final</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Nationality</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Indian nationals</li>
                <li>NRI candidates</li>
                <li>Foreign nationals (with valid documentation)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">KLEEE 2026 Application Process</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The KLEEE application process is conducted entirely online through the official KL University website.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Application Steps</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Visit Official Website: Go to kluniversity.in</li>
                <li>Register: Create new account with email and mobile number</li>
                <li>Fill Application Form: Complete personal, academic, and contact details</li>
                <li>Upload Documents: Recent photograph, signature, Class 10 & 12 certificates</li>
                <li>Pay Application Fee: Online payment through debit/credit card, net banking, or UPI</li>
                <li>Submit Application: Review and final submission</li>
                <li>Download Confirmation: Save application form and payment receipt</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Application Fee</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Application Fee (Approximate)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">General/OBC</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,000 - ₹1,500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SC/ST</td>
                      <td className="border border-gray-300 px-4 py-2">₹500 - ₹750 (usually 50% discount)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Payment Modes</td>
                      <td className="border border-gray-300 px-4 py-2">Credit card, Debit card, Net banking, UPI</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Dates for KLEEE 2026</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                While specific dates for 2026 haven't been officially announced yet, based on previous year patterns, here's the expected timeline:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Notification Release</td>
                      <td className="border border-gray-300 px-4 py-2">December 2025 - January 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Opens</td>
                      <td className="border border-gray-300 px-4 py-2">January 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">March-April 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 weeks before exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Date</td>
                      <td className="border border-gray-300 px-4 py-2">April-May 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Within 2-3 weeks of exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling</td>
                      <td className="border border-gray-300 px-4 py-2">May-June 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling and Admission Process</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                After the KLEEE results are declared, qualified candidates participate in online counselling:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Counselling Registration: Register on the counselling portal</li>
                <li>Choice Filling: Select preferred branch and campus combinations</li>
                <li>Seat Allotment: Based on rank and preferences</li>
                <li>Fee Payment: Pay counselling fee and advance tuition fee</li>
                <li>Document Verification: Submit original documents</li>
                <li>Final Admission: Complete enrollment formalities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Programs Offered Through KLEEE</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                KL University offers various B.Tech specializations including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Computer Science and Engineering (CSE)</li>
                <li>Electronics and Communication Engineering (ECE)</li>
                <li>Mechanical Engineering</li>
                <li>Civil Engineering</li>
                <li>Electrical and Electronics Engineering (EEE)</li>
                <li>Computer Science and Business Systems</li>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Data Science</li>
                <li>Cyber Security</li>
                <li>Biotechnology</li>
                <li>Chemical Engineering</li>
                <li>Aerospace Engineering</li>
                <li>And many more specialized programs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Tips for KLEEE 2026</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Study the Syllabus Thoroughly: Cover all topics from Physics, Chemistry, and Mathematics</li>
                <li>Practice Previous Years' Papers: Understand question patterns and difficulty level</li>
                <li>Solve JEE Main Papers: Since KLEEE difficulty is similar to JEE, practice JEE papers</li>
                <li>Take Mock Tests: Regular timed tests to improve speed and accuracy</li>
                <li>Focus on Weak Areas: Identify and strengthen weak topics</li>
                <li>Time Management: Practice completing 75 questions in 3 hours</li>
                <li>No Negative Marking Advantage: Attempt all questions, use educated guessing</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Points to Remember</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>No Negative Marking: Major advantage - attempt all 75 questions</li>
                <li>Similar to JEE Main: Difficulty level comparable to JEE Main</li>
                <li>University-Specific: Valid only for KL University admissions</li>
                <li>Multiple Campuses: KL University has multiple campuses in Andhra Pradesh</li>
                <li>Good Alternative: For students seeking quality engineering education in South India</li>
                <li>Online/Offline Options: Flexibility in exam mode</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                This comprehensive overview provides all essential information about KLEEE 2026, helping candidates understand the examination structure, syllabus, and admission process.
              </p>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Important Dates - Comprehensive Schedule</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                KLEEE (KL Engineering Entrance Examination) 2026 is conducted by Koneru Lakshmaiah University (KL University) in multiple phases to provide flexibility to candidates. The official dates for Phase 1 have been announced, while Phase 2 and Phase 3 dates are expected to follow. Here's a complete timeline of all important dates for KLEEE 2026.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">KLEEE 2026 Phase 1 - Complete Schedule</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                KL University has officially announced the Phase 1 schedule for KLEEE 2026. This is the primary admission phase for B.Tech, B.Arch, and B.Pharma programs.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date/Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Important Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Notification Release</td>
                      <td className="border border-gray-300 px-4 py-2">September 18, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Completed</td>
                      <td className="border border-gray-300 px-4 py-2">Official announcement made</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Form Availability</td>
                      <td className="border border-gray-300 px-4 py-2">September 18, 2025 onwards</td>
                      <td className="border border-gray-300 px-4 py-2">ONGOING</td>
                      <td className="border border-gray-300 px-4 py-2">Available at kluniversity.in</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Registration Opens</td>
                      <td className="border border-gray-300 px-4 py-2">September 18, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">ONGOING</td>
                      <td className="border border-gray-300 px-4 py-2">Online application started</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Last Date</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">November 12, 2025</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Deadline approaching</td>
                      <td className="border border-gray-300 px-4 py-2">Final date to submit application</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Fee Payment Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">November 12, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">Non-refundable ₹1,000</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">November 13, 2025</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Upcoming</td>
                      <td className="border border-gray-300 px-4 py-2">Download from official website</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">KLEEE 2026 Phase 1 Exam Dates</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">November 14-18, 2025</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Upcoming</td>
                      <td className="border border-gray-300 px-4 py-2">5-day exam window</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Online (CBT) and Offline (PBT)</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple sessions available</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Duration</td>
                      <td className="border border-gray-300 px-4 py-2">180 minutes (3 hours)</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                      <td className="border border-gray-300 px-4 py-2">75 questions to be attempted</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Late November / Early December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Expected</td>
                      <td className="border border-gray-300 px-4 py-2">Within 2-3 weeks after exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration</td>
                      <td className="border border-gray-300 px-4 py-2">December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Expected</td>
                      <td className="border border-gray-300 px-4 py-2">For qualified candidates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Expected</td>
                      <td className="border border-gray-300 px-4 py-2">Based on rank and preferences</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Classes Commencement</td>
                      <td className="border border-gray-300 px-4 py-2">January 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Expected</td>
                      <td className="border border-gray-300 px-4 py-2">Academic session begins</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Important Alert:</strong> The application deadline for Phase 1 is November 12, 2025. Candidates must complete registration before this date.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">KLEEE 2026 Phase 2 - Expected Schedule</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                While official dates for Phase 2 have not been announced yet, based on the university's historical pattern, here's the expected timeline:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Date/Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Notification Release</td>
                      <td className="border border-gray-300 px-4 py-2">December 2025 / January 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Tentative</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Form Opens</td>
                      <td className="border border-gray-300 px-4 py-2">January 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Separate application required</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Last Date</td>
                      <td className="border border-gray-300 px-4 py-2">Late January / Early February 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Approximately 3-4 weeks window</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                      <td className="border border-gray-300 px-4 py-2">February 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">1-2 days before exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">KLEEE 2026 Phase 2 Exam Dates</td>
                      <td className="border border-gray-300 px-4 py-2">February 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Expected 3-5 day window</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Late February 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Within 2 weeks after exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling</td>
                      <td className="border border-gray-300 px-4 py-2">March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">For Phase 2 candidates</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Classes Join</td>
                      <td className="border border-gray-300 px-4 py-2">March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Join ongoing session</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                <strong>Note:</strong> Candidates who appear in Phase 1 can also appear in Phase 2 to improve their scores. The best score across all phases will be considered for admission.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">KLEEE 2026 Phase 3 - Expected Schedule</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Phase 3 provides the final opportunity for candidates to appear for KLEEE 2026 and secure admission.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Date/Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Notification Release</td>
                      <td className="border border-gray-300 px-4 py-2">February 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Final phase notification</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Form Opens</td>
                      <td className="border border-gray-300 px-4 py-2">February / March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Last registration opportunity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Last Date</td>
                      <td className="border border-gray-300 px-4 py-2">March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Final deadline</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                      <td className="border border-gray-300 px-4 py-2">March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Before exam date</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">KLEEE 2026 Phase 3 Exam Dates</td>
                      <td className="border border-gray-300 px-4 py-2">March 23-25, 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Expected</td>
                      <td className="border border-gray-300 px-4 py-2">Based on previous pattern</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Early April 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Quick result processing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Final Counselling</td>
                      <td className="border border-gray-300 px-4 py-2">April 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Last counselling round</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Classes Join</td>
                      <td className="border border-gray-300 px-4 py-2">April 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Not announced</td>
                      <td className="border border-gray-300 px-4 py-2">Late joiners provided catch-up support</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Milestones and Deadlines</h3>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Critical Dates to Remember</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Milestone</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Days Remaining (from Oct 26, 2025)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Action Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Deadline</td>
                      <td className="border border-gray-300 px-4 py-2">November 12, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">17 days</td>
                      <td className="border border-gray-300 px-4 py-2">Complete registration, upload documents, pay fee</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                      <td className="border border-gray-300 px-4 py-2">November 13, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">18 days</td>
                      <td className="border border-gray-300 px-4 py-2">Download and print admit card, book exam slot</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Day (First Date)</td>
                      <td className="border border-gray-300 px-4 py-2">November 14, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">19 days</td>
                      <td className="border border-gray-300 px-4 py-2">Appear for examination with admit card and ID proof</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Day (Last Date)</td>
                      <td className="border border-gray-300 px-4 py-2">November 18, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">23 days</td>
                      <td className="border border-gray-300 px-4 py-2">Final day to take Phase 1 exam</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Month-wise Timeline Overview</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Month</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Key Activities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">September 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Notification released, Application process begins</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">October 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Application process ongoing, Candidates preparing for exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">November 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Application closes (12th), Admit card (13th), Exams (14-18th), Result expected</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Result declaration, Counselling registration and choice filling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">January 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Phase 1 admissions complete, Classes begin, Phase 2 notification expected</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">February 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Phase 2 exams expected, Phase 2 counselling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Phase 3 exams expected (23-25th), Final admissions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">April 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Phase 3 results and counselling, All admissions complete</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Multiple Phase Strategy</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Since KLEEE 2026 is conducted in three phases, candidates can adopt the following strategy:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Scenario</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">If satisfied with Phase 1 score</td>
                      <td className="border border-gray-300 px-4 py-2">Wait for counselling, don't appear for Phase 2/3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">If not satisfied with Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Appear in Phase 2 to improve score</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Missed Phase 1 deadline</td>
                      <td className="border border-gray-300 px-4 py-2">Apply for Phase 2 when notifications are released</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Want to maximize chances</td>
                      <td className="border border-gray-300 px-4 py-2">Appear in all three phases, best score will be considered</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Preparing for other exams too</td>
                      <td className="border border-gray-300 px-4 py-2">Phase 2 (Feb) and Phase 3 (March) provide additional opportunities</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Reminders and Tips</h3>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Before Application Deadline (November 12, 2025)</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Complete registration at least 2-3 days before deadline to avoid last-minute technical issues</li>
                <li>Keep all documents ready in specified format (scanned copies)</li>
                <li>Ensure stable internet connection during form submission</li>
                <li>Double-check all entered information before final submission</li>
                <li>Save payment receipt and application confirmation</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Before Admit Card Release (November 13, 2025)</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Regularly check official website and registered email</li>
                <li>Keep login credentials handy</li>
                <li>Prepare ID proofs (Aadhaar, School ID, etc.)</li>
                <li>Plan travel to exam center if required</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Before Exam Day (November 14-18, 2025)</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Download and print 2-3 copies of admit card</li>
                <li>Visit exam center location one day before if unfamiliar</li>
                <li>Prepare original ID proof and photocopy</li>
                <li>Review syllabus and take mock tests</li>
                <li>Keep simple analog watch (if allowed)</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">During Result Waiting Period</h4>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Check official website regularly for result notification</li>
                <li>Keep application number ready for result login</li>
                <li>Prepare for counselling by researching available branches</li>
                <li>Arrange funds for counselling fee and admission</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800">
                  <strong>Final Note:</strong> This comprehensive timeline ensures candidates don't miss any critical deadlines for KLEEE 2026. It's strongly recommended to set reminders for important dates, especially the application deadline (November 12, 2025) and exam dates (November 14-18, 2025).
                </p>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Eligibility Criteria</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Choosing to pursue engineering is an exciting decision, and understanding whether you're eligible for KLEEE (KL Engineering Entrance Examination) 2026 is your first important step. Let me walk you through everything you need to know about eligibility in a way that's easy to understand and relatable to your situation.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is KLEEE and Why Does Eligibility Matter?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                KLEEE is the gateway to joining KL University (Koneru Lakshmaiah Education Foundation), a well-respected deemed-to-be university with campuses in Vijayawada (Andhra Pradesh) and Hyderabad. Every year, thousands of students like you dream of studying engineering here, and the eligibility criteria are designed to ensure you have the right foundation to succeed in rigorous engineering programs.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Think of eligibility criteria as the university's way of saying, "Here's what we need to see in you to know you'll thrive in our programs." It's not just about ticking boxes—it's about ensuring you're academically prepared for the challenging yet rewarding journey ahead.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Good News About Age: No Restrictions!</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Let's start with what might be the most liberating aspect of KLEEE 2026: <strong>there are absolutely no age restrictions</strong>. Yes, you read that right—neither a minimum age nor a maximum age limit.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">What This Means for Different Students</h4>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">If You're a Young Achiever:</h5>
                  <p className="text-gray-700 text-sm">Maybe you're that brilliant 16-year-old who completed Class 12 early because you skipped a grade or accelerated through school. You're absolutely welcome to apply. The university recognizes academic talent regardless of how young you are.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">If You Took Some Time Off:</h5>
                  <p className="text-gray-700 text-sm">Perhaps you're 21 or 22 and spent a couple of years preparing for competitive exams, dealing with health issues, or managing family responsibilities. The absence of an age limit means your dreams aren't on a timer. You can apply whenever you're ready.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">If You're Making a Career Change:</h5>
                  <p className="text-gray-700 text-sm">Maybe you're 28, 35, or even 45 years old, working in a completely different field, and you've always wanted to study engineering. This is your chance! The university welcomes mature students who bring life experience and perspective to the classroom.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educational Qualifications: The Foundation You Need</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At its core, you need to have completed Class 12 (or what many call 10+2, Higher Secondary, or PUC depending on your state) from a recognized educational board. If you're currently in Class 12 and will complete your exams in March/April 2026, you can still apply—your admission will just be provisional until you submit your final results.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">What "Recognized Board" Includes:</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This is beautifully inclusive. Whether you studied under CBSE, ICSE/ISC, Any State Board, NIOS, or International boards like Cambridge A-Levels, IB Diploma—you're eligible! The university doesn't discriminate based on which board you studied under, as long as it's recognized.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">The Subject Combination: PCM is Your Ticket</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For B.Tech in Most Engineering Branches, you absolutely must have studied these three subjects in both Class 11 and Class 12:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Physics</strong> - Understanding motion, energy, forces, electricity</li>
                <li><strong>Chemistry</strong> - The science of matter and its interactions</li>
                <li><strong>Mathematics</strong> - The language of engineering calculations</li>
              </ul>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This combination, known as PCM, is non-negotiable for branches like Computer Science Engineering, Information Technology, Electronics and Communication Engineering, Mechanical Engineering, Civil Engineering, and more.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800">
                  <strong>The Biology Exception:</strong> If you studied <strong>Physics, Chemistry, and Biology (PCB)</strong> instead of Mathematics, you can still apply—but ONLY for B.Tech in Biotechnology. If you studied PCMB (all four subjects), you're eligible for every engineering branch, including Biotechnology!
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Minimum Marks: The 60% Threshold</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Having the right subjects isn't enough—you need to have performed well in them. KL University requires you to score <strong>at least 60% marks</strong> in two different ways:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h5 className="font-semibold text-gray-800 mb-2">Requirement 1: 60% in Overall Class 12</h5>
                  <p className="text-gray-700 text-sm">When you add up marks from all your Class 12 subjects (Physics, Chemistry, Math, English, and any other subjects), your overall percentage should be 60% or higher.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h5 className="font-semibold text-gray-800 mb-2">Requirement 2: 60% in PCM Group Subjects</h5>
                  <p className="text-gray-700 text-sm">Separately, when you calculate the percentage using only Physics, Chemistry, and Mathematics marks, that should also be 60% or higher.</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Both conditions must be met.</strong> You can't have 70% in PCM but 58% overall, or vice versa. Both need to cross the 60% threshold.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Who Can Apply: Nationality and Domicile</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                KL University is proud of its inclusive admission policy when it comes to nationality and location.
              </p>

              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Indian Students: Welcome from Every Corner</h5>
                  <p className="text-gray-700 text-sm mb-2"><strong>No Domicile Restrictions:</strong> Unlike some state universities that reserve most seats for students from that state, KL University treats all Indian students equally. Your state of residence doesn't give you any advantage or disadvantage.</p>
                  <p className="text-gray-700 text-sm">You need: Valid Aadhaar card, educational certificates, and any government-issued photo ID. That's it!</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">NRI Students: Bringing Global Perspectives</h5>
                  <p className="text-gray-700 text-sm">If you're a Non-Resident Indian (meaning you or your parents live/work outside India), you're not just eligible—KL University has a dedicated NRI quota for you with separate seat availability.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">International Students: The World is Welcome</h5>
                  <p className="text-gray-700 text-sm">Students from any country can apply to KL University. The university values diversity and welcomes students from SAARC countries, African nations, Middle Eastern countries, and literally any other country.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Alternative Routes: Other Ways to Get Admitted</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Here's something many students don't know: you don't necessarily have to take KLEEE to get into KL University!
              </p>

              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                  <h5 className="font-semibold text-gray-800 mb-2">If You Have JEE Main Score</h5>
                  <p className="text-gray-700 text-sm">If you've appeared for JEE Main 2026 and have a valid scorecard, you can get direct admission to KL University without appearing for KLEEE. Your JEE score is used instead of KLEEE score.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                  <h5 className="font-semibold text-gray-800 mb-2">If You Have State CET Scores</h5>
                  <p className="text-gray-700 text-sm">Candidates with valid scores in state-level engineering entrance tests like AP EAMCET, TS EAMCET, Karnataka CET, or other recognized state CETs can apply directly for admission without KLEEE.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                  <h5 className="font-semibold text-gray-800 mb-2">Sports and Cultural Quota</h5>
                  <p className="text-gray-700 text-sm">If you have exceptional achievements in sports or cultural activities at state or national level, you may get direct admission or relaxation in marks. This includes sports like cricket, football, athletics, badminton, chess, or excellence in music, dance, theater, arts.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course-Specific Eligibility</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Program</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Required Subjects</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Additional Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">B.Tech (Engineering)</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics</td>
                      <td className="border border-gray-300 px-4 py-2">60% minimum</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">B.Tech (Biotechnology)</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Biology/Math</td>
                      <td className="border border-gray-300 px-4 py-2">60% minimum</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">B.Arch</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Mathematics, Chemistry/Biology</td>
                      <td className="border border-gray-300 px-4 py-2">Must qualify NATA + KLEEE</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">B.Pharma</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics/Biology</td>
                      <td className="border border-gray-300 px-4 py-2">60% minimum</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation Policy</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Approximate Reservation %</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">What It Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OBC (Other Backward Classes)</td>
                      <td className="border border-gray-300 px-4 py-2">22%</td>
                      <td className="border border-gray-300 px-4 py-2">~22 out of every 100 seats reserved</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SC (Scheduled Castes)</td>
                      <td className="border border-gray-300 px-4 py-2">5%</td>
                      <td className="border border-gray-300 px-4 py-2">~5 out of every 100 seats reserved</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ST (Scheduled Tribes)</td>
                      <td className="border border-gray-300 px-4 py-2">2%</td>
                      <td className="border border-gray-300 px-4 py-2">~2 out of every 100 seats reserved</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Others (PwD, Defense, etc.)</td>
                      <td className="border border-gray-300 px-4 py-2">1%</td>
                      <td className="border border-gray-300 px-4 py-2">Special consideration</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important FAQs</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: I scored 59.8% in PCM. Am I eligible?</p>
                  <p className="text-gray-700 text-sm">A: Unfortunately, no. The requirement is 60% or above. Even 59.9% doesn't qualify. However, check if your board rounds up marks—some do, which might take you to 60%.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: Can I apply for multiple phases?</p>
                  <p className="text-gray-700 text-sm">A: Yes! KLEEE has 3 phases. You can apply for all three. Your best score across all attempts will be considered for admission.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: I'm 32 years old. Will I face any issues?</p>
                  <p className="text-gray-700 text-sm">A: Officially, no—there's no age limit. You're eligible. However, be prepared for being in a class with mostly 18-20 year olds.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: I have PCB but want to do Computer Science. Can I?</p>
                  <p className="text-gray-700 text-sm">A: No, Mathematics is mandatory for Computer Science. You can only do Biotechnology with PCB.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Documents You'll Need</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">For Application Stage:</h5>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                    <li>Recent passport-size photograph</li>
                    <li>Signature specimen</li>
                    <li>Class 10 certificate</li>
                    <li>Class 12 marksheet or admit card</li>
                    <li>Aadhaar card</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">For Counselling Stage:</h5>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                    <li>Transfer certificate from school</li>
                    <li>Migration certificate (if applicable)</li>
                    <li>Character certificate</li>
                    <li>Category certificate (if claiming reservation)</li>
                    <li>Medical fitness certificate</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Application Process</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Welcome! If you're reading this, you've already taken the first important step toward joining KL University (Koneru Lakshmaiah Education Foundation). The application process might seem daunting at first, but I'm here to walk you through every single step in a way that feels like having a knowledgeable friend guide you through the process.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800">
                  <strong>Important Clarification:</strong> The main campus is in Vaddeswaram, Vijayawada, Andhra Pradesh. However, KL University does have a Hyderabad campus, and the KLEEE exam is the same for admission to all KL University campuses.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Timeline Overview: When Things Happen</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Phase</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Key Date</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">What You Need to Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Application Open: September 18, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Start applying anytime</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>Application Deadline: November 12, 2025</strong></td>
                      <td className="border border-gray-300 px-4 py-2"><strong>Complete application before this!</strong></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Exam Dates: November 14-18, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Take the entrance exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 2</td>
                      <td className="border border-gray-300 px-4 py-2">Expected: January-February 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Second opportunity to apply</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 3</td>
                      <td className="border border-gray-300 px-4 py-2">Expected: March 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Final chance for 2026 admission</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800">
                  <strong>Right now, Phase 1 applications are ONGOING</strong>, and the deadline is approaching on November 12, 2025. Don't wait until the last moment!
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Before You Start - Getting Prepared</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Think of this as packing your bags before a journey. You wouldn't start a trip without your essentials, right? Similarly, let's get everything ready before you begin the online application.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">What You'll Need: Your Application Toolkit</h4>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">1. A Reliable Internet Connection</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                    <li>Minimum 2 Mbps speed recommended</li>
                    <li>Stable connection to prevent form timeout</li>
                    <li>If home internet is unstable, consider going to a friend's place or a cyber cafe</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">2. A Computer or Laptop (Preferred)</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                    <li>Desktop or laptop works best for form filling</li>
                    <li>While you can technically use a phone, it's not recommended</li>
                    <li>Any operating system works: Windows, Mac, or Linux</li>
                    <li>Browser: Latest version of Chrome, Firefox, or Edge</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">3. Valid Email Address</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                    <li>Use a personal email you check regularly (not your parent's)</li>
                    <li>This will be your primary communication channel</li>
                    <li>You'll receive application confirmation, admit card links, and result notifications here</li>
                    <li><strong>Keep the password safe!</strong> You'll need it to log in multiple times</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">4. Active Mobile Number</p>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                    <li>Must be your personal number with SMS facility</li>
                    <li>Required for OTP verification</li>
                    <li>You'll receive important alerts via SMS</li>
                    <li>Can't use a landline or someone else's number</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Digital Documents Ready</h4>
              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">Your Recent Photograph</h5>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Should be taken within the last 3 months</li>
                  <li>Passport-size format, plain white or light-colored background</li>
                  <li>Your face should be clearly visible (no sunglasses, no cap)</li>
                  <li>Formal attire preferred (school uniform is perfect)</li>
                  <li><strong>Digital specifications:</strong> JPEG or JPG format, File size: Between 10 KB and 50 KB</li>
                  <li>Dimensions: Minimum 200×230 pixels</li>
                  <li>File name: Keep it simple like "Photo_YourName.jpg"</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3">How to Get This: Go to a photo studio, use online tools to resize, or use mobile apps like Photo Resizer or ID Photo Maker</p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">Your Signature</h5>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Sign with a black or blue pen on plain white A4 paper</li>
                  <li>Make your signature clear and bold</li>
                  <li>Scan it or take a clear photo</li>
                  <li><strong>Digital specifications:</strong> JPEG or JPG format, File size: Between 10 KB and 30 KB</li>
                  <li>Dimensions: Minimum 140×60 pixels</li>
                  <li>Background should be white, signature in black/blue</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">Educational Certificates Required:</h5>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>Class 10 Certificate/Marksheet:</strong> For age proof and name verification (PDF, Max 500 KB)</li>
                  <li><strong>Class 12 Marksheet (if completed):</strong> Shows your PCM marks for eligibility verification (PDF, Max 500 KB)</li>
                  <li><strong>OR Class 12 Admit Card (if appearing):</strong> From your board examination (PDF, Max 500 KB)</li>
                  <li><strong>Aadhaar Card:</strong> Identity proof mandatory for Indian students (PDF, Max 500 KB)</li>
                  <li><strong>Category Certificate (if applicable):</strong> SC/ST/OBC certificate from competent authority (PDF, Max 500 KB)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Application Process - Step by Step</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Visit the Official Website</h4>
                  <p className="text-gray-700 mb-3">Open your browser and type: <strong>www.kluniversity.in</strong></p>
                  <p className="text-gray-700 mb-3">Once you're on the homepage, look for:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-3">
                    <li>"Admissions" tab in the main menu</li>
                    <li>"Apply Now" button (usually prominently displayed)</li>
                    <li>"KLEEE 2026" banner or link</li>
                    <li>"B.Tech Admissions" section</li>
                  </ul>
                  <p className="text-gray-700 text-sm">Click on it, and you'll be redirected to the application portal. Take 5 minutes to read the instructions displayed on the page and download the KLEEE 2026 Information Brochure (PDF).</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">New User Registration (Creating Your Account)</h4>
                  <p className="text-gray-700 mb-3">Click on <strong>"New Registration"</strong> or <strong>"Register Now"</strong> button.</p>
                  <p className="text-gray-700 mb-3">You'll see a registration form with several fields. Enter the following:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800 mb-2">Personal Details:</p>
                      <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                        <li>Full Name (exactly as on Class 10 certificate)</li>
                        <li>Date of Birth</li>
                        <li>Gender</li>
                        <li>Father's Name</li>
                        <li>Mother's Name</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800 mb-2">Contact Details:</p>
                      <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                        <li>Email Address (double-check for typos)</li>
                        <li>Confirm Email Address</li>
                        <li>Mobile Number (10-digit)</li>
                        <li>Confirm Mobile Number</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded p-4">
                    <p className="text-blue-800 font-semibold mb-2">Create Password:</p>
                    <p className="text-blue-700 text-sm">Must be 8-20 characters long. Include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special character (@, #, $, %, &, *). Example: <strong>Klueee@2026</strong></p>
                    <p className="text-blue-700 text-sm mt-2"><strong>Write it down somewhere safe!</strong> You'll need this to log in later.</p>
                  </div>
                  <p className="text-gray-700 text-sm mt-3">After filling all fields and entering the captcha, click "Register" or "Submit". Review every single field, especially email and mobile number, before clicking submit.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Email and Mobile Verification</h4>
                  <p className="text-gray-700 mb-3">Immediately after registration, two things happen:</p>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-semibold text-gray-800 mb-2">1. Verification Email Arrives:</p>
                      <p className="text-gray-700 text-sm">Check your email inbox (may take 1-5 minutes). If you don't see it, check your Spam/Junk folder. Open the email and click the verification link.</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-semibold text-gray-800 mb-2">2. OTP via SMS:</p>
                      <p className="text-gray-700 text-sm">A 6-digit One-Time Password is sent to your mobile, usually arrives within 1-2 minutes. Enter this OTP on the verification page and click "Verify OTP".</p>
                    </div>
                  </div>
                  <p className="text-yellow-700 text-sm mt-3 font-semibold">⚠️ What If You Don't Receive OTP?</p>
                  <p className="text-gray-700 text-sm">Wait for 2-3 minutes first, click "Resend OTP" button, check if your mobile has signal, ensure the number is active. If still not received, contact helpline immediately.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Filling Personal Information</h4>
                  <p className="text-gray-700 mb-3">After logging in with your Application Number and Password, you'll fill detailed sections:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>Personal Information:</strong> Nationality, Religion, Category (General/OBC/SC/ST), PWD status, Annual Family Income</li>
                    <li><strong>Educational Qualification:</strong> Class 10 & 12 details, board name, marks, year of passing, subject-wise marks (Physics, Chemistry, Mathematics)</li>
                    <li><strong>Address Information:</strong> Permanent address and correspondence address</li>
                    <li><strong>Parent/Guardian Information:</strong> Father's and Mother's details, occupation, income</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-3">Most importantly, ensure your PCM percentage shows 60% or above. The system will calculate it automatically, but verify it matches your marksheet!</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Upload Documents</h4>
                  <p className="text-gray-700 mb-3">This is where you upload all those documents you prepared earlier:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Recent Photograph (Photo.jpg)</li>
                    <li>Signature (Signature.jpg)</li>
                    <li>Class 10 Certificate/Marksheet</li>
                    <li>Class 12 Marksheet OR Admit Card</li>
                    <li>Aadhaar Card</li>
                    <li>Category Certificate (if applicable)</li>
                    <li>PWD Certificate (if applicable)</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-3"><strong>For Each Document:</strong> Click "Choose File", navigate to your folder, select the file, click "Upload", wait for confirmation message. Don't refresh the page during uploads!</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Application Fee Payment</h4>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Application Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">General/OBC</td>
                          <td className="border border-gray-300 px-4 py-2">₹1,000 - ₹1,500</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">SC/ST</td>
                          <td className="border border-gray-300 px-4 py-2">₹500 - ₹750 (usually 50% discount)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Payment Methods Available:</strong></p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Credit Card (Visa, MasterCard, American Express)</li>
                    <li>Debit Card (Visa, MasterCard, RuPay, Maestro)</li>
                    <li>Net Banking (All major banks)</li>
                    <li>UPI (Google Pay, PhonePe, PayTM, BHIM, etc.)</li>
                    <li>Wallets (Paytm, PhonePe, etc.)</li>
                  </ul>
                  <p className="text-red-600 text-sm mt-3 font-semibold">⚠️ Important: Do NOT click back button, close browser, or refresh page during payment processing. Just wait patiently!</p>
                  <p className="text-gray-700 mt-3">After successful payment, you'll receive a confirmation page with Transaction ID. <strong>Immediately take a screenshot, download payment receipt (PDF), and note down Transaction ID.</strong></p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Final Submission and Declaration</h4>
                  <p className="text-gray-700 mb-3">After payment, you'll see a declaration statement. Read it carefully and tick the checkboxes:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>☐ I have read and understood all instructions</li>
                    <li>☐ I confirm all information provided is accurate</li>
                    <li>☐ I accept terms and conditions</li>
                    <li>☐ I authorize KL University to verify my documents</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-3">Click <strong>"Submit Application" or "Final Submit"</strong>, then confirm in the popup. After submission, download your Application Form PDF and save it in multiple safe places.</p>
                  <p className="text-green-700 mt-4 font-semibold">🎉 Congratulations! Your KLEEE 2026 application is now complete!</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">What Happens Next?</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Admit Card Release</h5>
                  <p className="text-gray-700 text-sm mb-2">Approximately 1-2 days before the exam date (November 13, 2025 for Phase 1)</p>
                  <p className="text-gray-700 text-sm">Visit kluniversity.in, click "Download Admit Card", login with your Application Number and Password, download and print 2-3 copies.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Taking the KLEEE Exam</h5>
                  <p className="text-gray-700 text-sm mb-2">Duration: 3 hours (180 minutes), Questions: 75 (Physics 25, Chemistry 25, Mathematics 25), Type: Multiple Choice Questions (MCQs), Marks: 1 mark per question, <strong>Negative Marking: NO</strong> - So attempt all questions!</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Result Declaration</h5>
                  <p className="text-gray-700 text-sm">Within 2-3 weeks after exam completion. Visit kluniversity.in, click "KLEEE 2026 Results", enter Application Number and Date of Birth, your result with rank will be displayed.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Counselling Process</h5>
                  <p className="text-gray-700 text-sm">If you qualify, you'll be called for counselling to register, fill choices, get seat allotment, accept the seat, pay advance fee, and complete final admission with document verification.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important FAQs</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: Can I edit my application after submission?</p>
                  <p className="text-gray-700 text-sm">A: No, once submitted you cannot edit. There may be a correction window announced later, but don't rely on it. Get it right the first time.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: Can I apply for multiple phases?</p>
                  <p className="text-gray-700 text-sm">A: Yes! You can apply for Phase 1, 2, and 3. Your best score will be considered. But you'll pay application fee separately for each phase.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: My payment was successful but application shows "Payment Pending"?</p>
                  <p className="text-gray-700 text-sm">A: Wait for 30 minutes to 24 hours. Usually updates automatically. If not, contact helpline with transaction ID and payment proof.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2">Q: Is there any application fee refund?</p>
                  <p className="text-gray-700 text-sm">A: No, application fee is non-refundable even if you don't appear for the exam or don't get admission.</p>
                </div>
              </div>


            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Exam Pattern</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Welcome! If you're preparing for KLEEE 2026, understanding the exam pattern is like having a roadmap before starting a journey. You wouldn't drive to a new city without knowing the route, right? Similarly, knowing the exam pattern helps you navigate your preparation confidently. Let me walk you through every aspect of the KLEEE exam pattern in a way that feels like we're having a friendly conversation.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is an Exam Pattern and Why Should You Care?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Before diving into specifics, let's understand what "exam pattern" means. Think of it as the blueprint of your exam—it tells you how the exam will be conducted (online or offline), how many questions you'll face, how much time you'll have, how marks are distributed, what subjects will be tested, and whether wrong answers will cost you marks.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Big Picture - KLEEE 2026 at a Glance</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Let me start with the overall structure so you understand what you're dealing with.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Exam Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">What This Means for You</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Name</td>
                      <td className="border border-gray-300 px-4 py-2">KLEEE (KL Engineering Entrance Examination) 2026</td>
                      <td className="border border-gray-300 px-4 py-2">Gateway to KL University B.Tech programs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Body</td>
                      <td className="border border-gray-300 px-4 py-2">KL University (Koneru Lakshmaiah Education Foundation)</td>
                      <td className="border border-gray-300 px-4 py-2">Deemed-to-be University in Andhra Pradesh</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Mode</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>Both Online (Computer-Based) AND Offline (Pen & Paper)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">You can choose your comfort zone!</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Duration</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>3 hours (180 minutes)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Enough time, but practice time management</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>75 questions</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Manageable number—quality over quantity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>75 marks</strong></td>
                      <td className="border border-gray-300 px-4 py-2">1 mark per question, simple scoring</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Question Type</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Choice Questions (MCQs)</td>
                      <td className="border border-gray-300 px-4 py-2">4 options, 1 correct answer</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Number of Subjects</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>3 core subjects</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics (or Biology)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Language</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>English only</strong></td>
                      <td className="border border-gray-300 px-4 py-2">All questions in English</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Negative Marking</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>NO negative marking!</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Huge advantage—attempt everything!</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Difficulty Level</td>
                      <td className="border border-gray-300 px-4 py-2">Similar to JEE Main</td>
                      <td className="border border-gray-300 px-4 py-2">Challenging but manageable with preparation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800 font-semibold">
                  The Bottom Line: KLEEE is a 3-hour, 75-question MCQ exam with no negative marking, testing you on Physics, Chemistry, and Mathematics. Simple structure, but don't underestimate it!
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Game-Changer: No Negative Marking!</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This is HUGE and deserves special attention. In exams with negative marking, wrong answers cost marks. In KLEEE, you don't lose anything for wrong answers!
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Your Answer</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Awarded</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Correct Answer</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">+1 mark</td>
                      <td className="border border-gray-300 px-4 py-2">You get the mark, obviously!</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Wrong Answer</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold"><strong>0 marks</strong></td>
                      <td className="border border-gray-300 px-4 py-2"><strong>NO deduction! You don't lose anything!</strong></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Unattempted Question</td>
                      <td className="border border-gray-300 px-4 py-2">0 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Leaving blank = same as wrong answer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <p className="text-green-800 font-semibold mb-3">Strategic Implication #1: Attempt EVERY Single Question</p>
                <p className="text-green-700 mb-3">
                  Even if you have no idea about a question, make an educated guess! You have a 25% chance (1 out of 4 options) of getting it right. And even if wrong, you lose nothing!
                </p>
                <p className="text-green-700">
                  <strong>Example:</strong> If you're confident about 60 questions—attempt them, get 60 marks. Remaining 15 questions you're unsure about? Guess them all! Statistically get 3-4 right by chance = Final score: 63-64/75 instead of just 60/75!
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Section-wise Breakdown - The Complete Picture</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weightage</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Estimated Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physics</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">33.33%</td>
                      <td className="border border-gray-300 px-4 py-2">45-50 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemistry</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">33.33%</td>
                      <td className="border border-gray-300 px-4 py-2">40-45 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mathematics/Biology</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">25</td>
                      <td className="border border-gray-300 px-4 py-2">33.33%</td>
                      <td className="border border-gray-300 px-4 py-2">50-55 minutes</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">75</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">75</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">100%</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">180 minutes (3 hours)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="font-semibold text-gray-800 mb-3">Key Observations:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>All three subjects have <strong>equal weightage</strong>—no subject is more important</li>
                  <li>Each question is worth <strong>exactly 1 mark</strong>—simple scoring</li>
                  <li>You need to attempt <strong>all 75 questions</strong> in 3 hours</li>
                  <li>Average time per question: <strong>2.4 minutes</strong> (144 seconds)</li>
                  <li>But distribute time based on your strengths and question difficulty</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Difficulty Level - What to Expect</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                According to KL University, KLEEE difficulty level is <strong>similar to JEE Main</strong>.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Difficulty Level</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentage of Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Question Nature</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Your Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Easy</td>
                      <td className="border border-gray-300 px-4 py-2">30-35% (~25 questions)</td>
                      <td className="border border-gray-300 px-4 py-2">Direct formula application, NCERT-level, straightforward</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt first, aim for 100% accuracy, finish in 40-50 minutes</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Moderate</td>
                      <td className="border border-gray-300 px-4 py-2">40-45% (~32 questions)</td>
                      <td className="border border-gray-300 px-4 py-2">Requires 2-3 steps, concept understanding, moderate calculations</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt second, target 80% accuracy, spend 60-70 minutes</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Difficult</td>
                      <td className="border border-gray-300 px-4 py-2">20-25% (~18 questions)</td>
                      <td className="border border-gray-300 px-4 py-2">Complex, multi-step, tricky, time-consuming</td>
                      <td className="border border-gray-300 px-4 py-2">Attempt last, even 50% accuracy is good, remaining time</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-6">
                <p className="text-gray-800 font-semibold mb-3">My Honest Assessment:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>If you've thoroughly studied NCERT 11th & 12th, you can handle 60-70% questions</li>
                  <li>If you've practiced JEE Main level problems, you can handle 80-90% questions</li>
                  <li>The key is not just knowledge but also speed—practicing timed mock tests is crucial</li>
                </ul>
              </div>

            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Syllabus - Complete Details</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based on the official KLEEE 2026 syllabus published by KL University (Koneru Lakshmaiah Education Foundation), here is the comprehensive subject-wise breakdown for B.Tech admissions.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Overview</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Name</td>
                      <td className="border border-gray-300 px-4 py-2">KLEEE (KL Engineering Entrance Examination) 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Subjects Covered</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Chemistry, Mathematics (or Biology for Biotechnology)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Syllabus Based On</td>
                      <td className="border border-gray-300 px-4 py-2">NCERT Class 11 and Class 12 curriculum</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Questions per Subject</td>
                      <td className="border border-gray-300 px-4 py-2">25 questions each</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2">75 questions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Curriculum</td>
                      <td className="border border-gray-300 px-4 py-2">CBSE/ICSE/State Board 10+2 syllabus</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Physics Syllabus (18 Major Units)</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 1: Physics and Measurement</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Units and dimensions</li>
                    <li>Dimensional analysis and its applications</li>
                    <li>Significant figures</li>
                    <li>Errors in measurement</li>
                    <li>Accuracy and precision</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 2: Kinematics</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Motion in a straight line (Position, displacement, velocity, acceleration)</li>
                    <li>Equations of motion</li>
                    <li>Projectile motion and uniform circular motion</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 3: Laws of Motion</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Newton's laws of motion, Inertia and momentum</li>
                    <li>Impulse, Conservation of momentum</li>
                    <li>Friction (static, kinetic, rolling), Circular motion dynamics</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 4: Work, Energy and Power</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Work done by constant and variable forces, Work-energy theorem</li>
                    <li>Kinetic and potential energy, Conservation of mechanical energy</li>
                    <li>Power, Collisions (elastic and inelastic)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 5: Rotational Motion</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Centre of mass, Torque and angular momentum</li>
                    <li>Moment of inertia, Theorems: Parallel axis, perpendicular axis</li>
                    <li>Rotational kinetic energy, Rolling motion</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 6: Gravitation</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Universal law of gravitation, Acceleration due to gravity</li>
                    <li>Gravitational potential and potential energy</li>
                    <li>Escape velocity, Orbital velocity, Satellite motion, Kepler's laws</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 7: Properties of Solids and Liquids</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Mechanical properties of solids (stress, strain, elastic moduli)</li>
                    <li>Mechanical properties of fluids (pressure, Pascal's law, Archimedes' principle)</li>
                    <li>Viscosity, surface tension, capillarity</li>
                    <li>Fluid dynamics (Bernoulli's theorem, equation of continuity)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 8: Thermodynamics</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Thermal expansion, Heat transfer (conduction, convection, radiation)</li>
                    <li>Kinetic theory of gases, Ideal gas equation</li>
                    <li>Specific heat capacities, Laws of thermodynamics</li>
                    <li>Heat engines, Carnot cycle</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 9: Oscillations and Waves</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Simple harmonic motion, Damped and forced oscillations, Resonance</li>
                    <li>Wave motion, Superposition of waves, Standing waves</li>
                    <li>Beats, Doppler effect</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 10: Electrostatics</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Electric charges and fields, Coulomb's law</li>
                    <li>Electric potential and potential energy, Gauss's law</li>
                    <li>Capacitance, Dielectrics, Energy stored in capacitors</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 11: Current Electricity</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Electric current, resistance, resistivity, Ohm's law</li>
                    <li>Combination of resistors, Kirchhoff's laws</li>
                    <li>Wheatstone bridge, Potentiometer, Electric power and energy</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 12: Magnetic Effects of Current & Magnetism</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Biot-Savart law, Ampere's circuital law</li>
                    <li>Force on current-carrying conductor, Torque on current loop</li>
                    <li>Moving coil galvanometer, Earth's magnetism</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 13: Electromagnetic Induction</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Faraday's laws, Lenz's law</li>
                    <li>Self and mutual induction</li>
                    <li>AC circuits (resistor, inductor, capacitor)</li>
                    <li>LCR circuits and resonance, Transformer</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 14: Electromagnetic Waves</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Electromagnetic spectrum</li>
                    <li>Properties of EM waves</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 15: Optics</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Reflection and refraction</li>
                    <li>Spherical mirrors and lenses, Lens formula and magnification</li>
                    <li>Optical instruments</li>
                    <li>Wave optics (interference, diffraction, polarization)</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 16: Dual Nature of Matter and Radiation</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Photoelectric effect, Photons</li>
                    <li>de Broglie waves, Davisson-Germer experiment</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 17: Atoms and Nuclei</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Atomic models (Rutherford, Bohr), Hydrogen spectrum</li>
                    <li>Nuclear composition, Radioactivity</li>
                    <li>Nuclear reactions (fission, fusion), Binding energy</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Unit 18: Electronic Devices</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Semiconductors, p-n junction diode</li>
                    <li>Diode applications, Transistors</li>
                    <li>Logic gates</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chemistry Syllabus (31 Units)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Unit</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1", "Atomic Structure"],
                      ["2", "Nuclear Chemistry"],
                      ["3", "Periodic Classification of Elements"],
                      ["4", "Chemical Bonding and Molecular Structure"],
                      ["5", "Stoichiometry / Some Basic Concepts in Chemistry"],
                      ["6", "Gaseous State / States of Matter"],
                      ["7", "Solutions"],
                      ["8", "Acids and Bases"],
                      ["9", "Electro Chemistry / Redox Reactions and Electrochemistry"],
                      ["10", "Chemical Equilibrium and Chemical Kinetics"],
                      ["11", "Chemical Energetics / Chemical Thermodynamics"],
                      ["12", "Surface Chemistry"],
                      ["13", "Hydrogen and its Compounds"],
                      ["14", "Alkali and Alkaline Earth Metals / s-Block Elements"],
                      ["15", "Group Elements (p-Block Elements)"],
                      ["16", "IV Group Elements"],
                      ["17", "V Group Elements"],
                      ["18", "VI Group Elements"],
                      ["19", "VII Group Elements"],
                      ["20", "Noble Gases"],
                      ["21", "Transition Elements (d-Block)"],
                      ["22", "Environmental Chemistry"],
                      ["23", "Hydrocarbons I (Alkanes and Alkenes)"],
                      ["24", "Hydrocarbons II"],
                      ["25", "Alkyl Halides / Organic Compounds Containing Halogens"],
                      ["26", "Alcohols"],
                      ["27", "Ethers"],
                      ["28", "Aldehydes and Ketones / Organic Compounds Containing Oxygen"],
                      ["29", "Carboxylic Acids"],
                      ["30", "Nitrogen Compounds / Organic Compounds Containing Nitrogen"],
                      ["31", "Chemistry in Biology and Medicine / Chemistry in Everyday Life"],
                    ].map(([unit, topic]) => (
                      <tr key={unit}>
                        <td className="border border-gray-300 px-4 py-2">{unit}</td>
                        <td className="border border-gray-300 px-4 py-2">{topic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mathematics Syllabus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Algebra</h4>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                    <li>Complex numbers</li>
                    <li>Quadratic equations</li>
                    <li>Sequences and series</li>
                    <li>Permutations and combinations</li>
                    <li>Binomial theorem</li>
                    <li>Matrices and determinants</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Trigonometry</h4>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                    <li>Trigonometric functions</li>
                    <li>Trigonometric equations</li>
                    <li>Inverse trigonometric functions</li>
                    <li>Properties and identities</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Vector Algebra</h4>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                    <li>Vector operations</li>
                    <li>Scalar and vector products</li>
                    <li>Applications</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Coordinate Geometry</h4>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                    <li>Straight lines</li>
                    <li>Circles</li>
                    <li>Conic sections (Parabola, Ellipse, Hyperbola)</li>
                    <li>3D geometry</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Calculus</h4>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                    <li>Limits and continuity</li>
                    <li>Differentiation</li>
                    <li>Applications of derivatives</li>
                    <li>Integration</li>
                    <li>Applications of integrals</li>
                    <li>Differential equations</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Probability</h4>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                    <li>Basic probability</li>
                    <li>Conditional probability</li>
                    <li>Probability distributions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>Note:</strong> Additional topics include Sets and relations, Functions, Mathematical reasoning, and Statistics. The syllabus is comprehensive and requires thorough preparation of all topics from both Class 11 and Class 12.
                </p>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Cutoff - KL University</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding KLEEE Cutoff</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                KLEEE cutoff refers to the minimum rank or score required to secure admission to various B.Tech programs at KL University. The cutoff varies based on branch, campus, category, and competition level each year.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800 font-semibold mb-2">Important Note About Cutoff Publication</p>
                <p className="text-yellow-800">
                  <strong>KL University does not officially publish cutoff ranks in advance.</strong> Cutoffs are determined during the counselling process based on number of candidates appearing, number of seats available, difficulty level of exam, candidate preferences during choice filling, and previous year admission trends.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expected KLEEE 2026 Cutoff (Tentative)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Based on previous year trends and admission patterns, here are the expected closing ranks:
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Branch-wise Expected Cutoff (All Campuses Combined)</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Closing Rank</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Score Range (out of 75)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Competition Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer Science Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">8,000 - 10,000</td>
                      <td className="border border-gray-300 px-4 py-2">50-60 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Very High</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer Science & Engineering (AI/ML)</td>
                      <td className="border border-gray-300 px-4 py-2">10,000 - 12,000</td>
                      <td className="border border-gray-300 px-4 py-2">48-55 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Very High</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Technology</td>
                      <td className="border border-gray-300 px-4 py-2">9,000 - 11,000</td>
                      <td className="border border-gray-300 px-4 py-2">48-58 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Very High</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Electronics & Communication Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">15,000 - 18,000</td>
                      <td className="border border-gray-300 px-4 py-2">42-50 marks</td>
                      <td className="border border-gray-300 px-4 py-2">High</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Electrical & Electronics Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">20,000 - 25,000</td>
                      <td className="border border-gray-300 px-4 py-2">38-45 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">25,000 - 30,000</td>
                      <td className="border border-gray-300 px-4 py-2">35-42 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">30,000 - 35,000</td>
                      <td className="border border-gray-300 px-4 py-2">32-40 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Low to Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Biotechnology</td>
                      <td className="border border-gray-300 px-4 py-2">20,000 - 25,000</td>
                      <td className="border border-gray-300 px-4 py-2">38-45 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Aerospace Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">22,000 - 28,000</td>
                      <td className="border border-gray-300 px-4 py-2">36-44 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Moderate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">28,000 - 33,000</td>
                      <td className="border border-gray-300 px-4 py-2">33-41 marks</td>
                      <td className="border border-gray-300 px-4 py-2">Low to Moderate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6 italic">
                <strong>Note:</strong> Lower rank numbers indicate higher competition (e.g., rank 1000 is better than rank 10,000).
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Campus-wise Cutoff Variation</h4>
              
              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-2">Main Campus - Vaddeswaram (Vijayawada)</h5>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Closing Rank</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Most Competitive Campus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                        <td className="border border-gray-300 px-4 py-2">5,000 - 7,000</td>
                        <td className="border border-gray-300 px-4 py-2">Highest competition</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                        <td className="border border-gray-300 px-4 py-2">10,000 - 13,000</td>
                        <td className="border border-gray-300 px-4 py-2">High competition</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">18,000 - 22,000</td>
                        <td className="border border-gray-300 px-4 py-2">Moderate competition</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Civil</td>
                        <td className="border border-gray-300 px-4 py-2">25,000 - 30,000</td>
                        <td className="border border-gray-300 px-4 py-2">Lower competition</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 className="font-semibold text-gray-800 mb-2">Hyderabad Campus</h5>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Closing Rank</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">CSE</td>
                        <td className="border border-gray-300 px-4 py-2">12,000 - 15,000</td>
                        <td className="border border-gray-300 px-4 py-2">Relatively easier than main campus</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">ECE</td>
                        <td className="border border-gray-300 px-4 py-2">18,000 - 22,000</td>
                        <td className="border border-gray-300 px-4 py-2">Good option for mid-range ranks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical</td>
                        <td className="border border-gray-300 px-4 py-2">28,000 - 32,000</td>
                        <td className="border border-gray-300 px-4 py-2">More accessible</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Civil</td>
                        <td className="border border-gray-300 px-4 py-2">35,000 - 40,000</td>
                        <td className="border border-gray-300 px-4 py-2">Easier admission</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-4 italic">
                  <strong>Pattern:</strong> Main campus (Vijayawada) typically has 1.5-2x more competitive cutoffs compared to Hyderabad campus.
                </p>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Category-wise Cutoff</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Approximate Relaxation</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Example for CSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">General/OBC</td>
                      <td className="border border-gray-300 px-4 py-2">Baseline</td>
                      <td className="border border-gray-300 px-4 py-2">Rank up to 10,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OBC-NCL</td>
                      <td className="border border-gray-300 px-4 py-2">5-10% relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">Rank up to 11,000-11,500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SC</td>
                      <td className="border border-gray-300 px-4 py-2">20-30% relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">Rank up to 13,000-14,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ST</td>
                      <td className="border border-gray-300 px-4 py-2">30-40% relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">Rank up to 14,000-15,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PWD</td>
                      <td className="border border-gray-300 px-4 py-2">Additional 5-10%</td>
                      <td className="border border-gray-300 px-4 py-2">Further relaxation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Score vs Rank Analysis</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Understanding the correlation between marks and expected rank:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Range (out of 75)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Rank Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Percentile</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch Possibilities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">65-75 marks</td>
                      <td className="border border-gray-300 px-4 py-2">1 - 2,000</td>
                      <td className="border border-gray-300 px-4 py-2">98-100</td>
                      <td className="border border-gray-300 px-4 py-2">All branches at any campus, scholarships</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">60-64 marks</td>
                      <td className="border border-gray-300 px-4 py-2">2,000 - 5,000</td>
                      <td className="border border-gray-300 px-4 py-2">95-98</td>
                      <td className="border border-gray-300 px-4 py-2">CSE at main campus, all branches elsewhere</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">55-59 marks</td>
                      <td className="border border-gray-300 px-4 py-2">5,000 - 10,000</td>
                      <td className="border border-gray-300 px-4 py-2">90-95</td>
                      <td className="border border-gray-300 px-4 py-2">CSE at Hyderabad, ECE at main campus</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">50-54 marks</td>
                      <td className="border border-gray-300 px-4 py-2">10,000 - 15,000</td>
                      <td className="border border-gray-300 px-4 py-2">85-90</td>
                      <td className="border border-gray-300 px-4 py-2">IT/ECE at most campuses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">45-49 marks</td>
                      <td className="border border-gray-300 px-4 py-2">15,000 - 22,000</td>
                      <td className="border border-gray-300 px-4 py-2">75-85</td>
                      <td className="border border-gray-300 px-4 py-2">ECE/EEE at all campuses</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">40-44 marks</td>
                      <td className="border border-gray-300 px-4 py-2">22,000 - 30,000</td>
                      <td className="border border-gray-300 px-4 py-2">65-75</td>
                      <td className="border border-gray-300 px-4 py-2">Mechanical/Chemical/Biotech</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">35-39 marks</td>
                      <td className="border border-gray-300 px-4 py-2">30,000 - 40,000</td>
                      <td className="border border-gray-300 px-4 py-2">50-65</td>
                      <td className="border border-gray-300 px-4 py-2">Civil/less competitive branches</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">30-34 marks</td>
                      <td className="border border-gray-300 px-4 py-2">40,000 - 50,000</td>
                      <td className="border border-gray-300 px-4 py-2">40-50</td>
                      <td className="border border-gray-300 px-4 py-2">Limited options, mainly Civil</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Below 30 marks</td>
                      <td className="border border-gray-300 px-4 py-2">50,000+</td>
                      <td className="border border-gray-300 px-4 py-2">Below 40</td>
                      <td className="border border-gray-300 px-4 py-2">Difficult to secure admission</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">What is a Good Score in KLEEE 2026?</h4>
                <ul className="list-disc ml-6 space-y-2 text-blue-800">
                  <li><strong>Excellent (60+ marks):</strong> CSE/IT at any campus, scholarship opportunities</li>
                  <li><strong>Very Good (50-59 marks):</strong> CSE at Hyderabad, ECE/EEE at main campus</li>
                  <li><strong>Good (40-49 marks):</strong> ECE/EEE/Mechanical at most campuses</li>
                  <li><strong>Decent (35-39 marks):</strong> Core branches (Mechanical, Civil, Chemical)</li>
                  <li><strong>Qualifying (30-34 marks):</strong> Limited options, mainly Civil/less preferred branches</li>
                </ul>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Important Points to Remember</h4>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>Cutoffs Vary Each Year:</strong> Don't rely solely on previous year cutoffs</li>
                  <li><strong>No Official Pre-Publication:</strong> Cutoffs known only during counselling</li>
                  <li><strong>Multiple Factors:</strong> Seat availability, difficulty level, candidates affect cutoff</li>
                  <li><strong>Category Benefits:</strong> SC/ST/OBC candidates get relaxation</li>
                  <li><strong>Campus Matters:</strong> Main campus always more competitive than Hyderabad</li>
                  <li><strong>Best Score Considered:</strong> If appearing in multiple phases, best score counts</li>
                  <li><strong>JEE Scores Accepted:</strong> Students with JEE Main scores can apply directly</li>
                  <li><strong>Choice Filling Important:</strong> Smart choice filling can secure better seats</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h4 className="text-xl font-semibold text-green-800 mb-3">FAQs About KLEEE Cutoff</h4>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded p-3 bg-white">
                    <p className="font-semibold text-gray-800 mb-2">Q: What is the minimum rank required for CSE at KL University?</p>
                    <p className="text-gray-700 text-sm">A: Expected closing rank around 10,000 for CSE at main campus, 15,000 for Hyderabad campus.</p>
                  </div>
                  <div className="border border-gray-200 rounded p-3 bg-white">
                    <p className="font-semibold text-gray-800 mb-2">Q: Can I get admission with 40 marks in KLEEE?</p>
                    <p className="text-gray-700 text-sm">A: Yes, you can get admission in branches like EEE, Mechanical, Civil, Chemical depending on cutoff.</p>
                  </div>
                  <div className="border border-gray-200 rounded p-3 bg-white">
                    <p className="font-semibold text-gray-800 mb-2">Q: Does KL University have branch change option?</p>
                    <p className="text-gray-700 text-sm">A: Yes, branch change possible after first year based on CGPA and seat availability.</p>
                  </div>
                  <div className="border border-gray-200 rounded p-3 bg-white">
                    <p className="font-semibold text-gray-800 mb-2">Q: If I appear in multiple phases, which score is considered?</p>
                    <p className="text-gray-700 text-sm">A: Your best score across all phases is considered for admission.</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">KLEEE 2026 Counselling Process</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Congratulations! If you're reading this, you've likely qualified for KLEEE 2026 and are now standing at the threshold of the final step—counselling. This is where your hard work translates into an actual seat in your desired engineering program at KL University. Let me walk you through this crucial process in a friendly, detailed manner, as if I'm sitting right beside you explaining everything.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is KLEEE Counselling?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Think of counselling as the bridge between clearing the exam and actually getting admitted. It's the official process where you register your interest in admission, choose which engineering branches and campuses you prefer, get a seat allocated based on your rank, confirm your admission by paying fees, complete document verification, and finally become a KL University student!
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800 font-semibold">
                  The Bottom Line: Counselling is mandatory—even if you aced the exam, you won't get admission without participating in counselling.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">When Will KLEEE 2026 Counselling Happen?</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Based on the exam pattern and previous years, counselling typically happens as follows:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Phase</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Timeline</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">What Happens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Late November 2025</td>
                      <td className="border border-gray-300 px-4 py-2">2-3 weeks after exam (Nov 14-18)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Counselling Registration Opens</td>
                      <td className="border border-gray-300 px-4 py-2">Early December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Soon after results</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Choice Filling</td>
                      <td className="border border-gray-300 px-4 py-2">December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 days window</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Mid-December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Based on rank and choices</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 1</td>
                      <td className="border border-gray-300 px-4 py-2">Admission Confirmation</td>
                      <td className="border border-gray-300 px-4 py-2">Late December 2025</td>
                      <td className="border border-gray-300 px-4 py-2">Fee payment, document verification</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Important:</strong> Official dates will be announced on kluniversity.in after results are declared. Check the website daily once results are out.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Who is Eligible for KLEEE Counselling?</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Your Rank Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Class 12 Marks Required</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Counselling Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Rank 1 - 30,000</td>
                      <td className="border border-gray-300 px-4 py-2">80% & above</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Eligible for counselling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Rank 30,001 - 60,000</td>
                      <td className="border border-gray-300 px-4 py-2">70% & above</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Eligible for counselling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Rank 60,001 - 1,00,000</td>
                      <td className="border border-gray-300 px-4 py-2">60% & above</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Eligible for counselling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Any Rank</td>
                      <td className="border border-gray-300 px-4 py-2">80 percentile & above in JEE Main 2026</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Eligible (can use JEE score)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800">
                  <strong>The Good News:</strong> If you have a valid KLEEE rank and met the basic eligibility (60% in PCM), you're likely eligible for counselling. If you have a JEE Main 2026 score with 80+ percentile, you can participate in counselling even without appearing for KLEEE! This is a fantastic option for those who took JEE Main.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding the Counselling Mode</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                KLEEE counselling is conducted <strong>primarily online</strong> for registration and choice filling, but <strong>may require physical reporting</strong> for final admission confirmation.
              </p>
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <p className="font-semibold text-gray-800 mb-3">What This Means for You:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Initial steps (registration, choice filling) done from home on computer</li>
                  <li>Document verification might be online or require campus visit</li>
                  <li>Final admission confirmation typically requires physical presence at campus</li>
                  <li>You'll be informed of exact mode when counselling schedule is announced</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3 italic">
                  <strong>Pro Tip:</strong> Be prepared for both—keep your documents ready digitally (scanned PDFs) and also have originals handy in case you need to visit campus.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">KLEEE Counselling Process</h3>
              
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Check Your Result and Rank</h4>
                  <p className="text-gray-700 mb-3">When: After exam completion (results typically within 2-3 weeks)</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Visit the official website: <strong>kluniversity.in</strong></li>
                    <li>Look for "KLEEE 2026 Results" or "Check Your Rank" link</li>
                    <li>Enter your Application Number and Date of Birth</li>
                    <li>Your result appears with total marks, section-wise marks, and your All India Rank (AIR)</li>
                    <li>Download Rank Card/Score Card as PDF and print 3-4 copies</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Online Counselling Registration</h4>
                  <p className="text-gray-700 mb-3">When: As per dates announced (usually 3-5 day window)</p>
                  <p className="text-gray-700 mb-3">How to Register:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Go to kluniversity.in and look for "KLEEE 2026 Counselling Registration"</li>
                    <li>Login with your KLEEE Application Number and Password</li>
                    <li>Fill registration form with personal details, educational details, category information</li>
                    <li>Upload scanned copies of required documents</li>
                    <li>Pay counselling fee (₹20,000 - ₹25,000 for General, ₹15,000 - ₹20,000 for SC/ST/OBC)</li>
                    <li>Download registration confirmation</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Choice Filling - THE Most Important Step</h4>
                  <p className="text-gray-700 mb-3">When: Specific dates announced (usually 3-5 day window after registration)</p>
                  <p className="text-gray-700 mb-3">Strategic Approach:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>Top 5-7 Choices (Dream Options):</strong> Your aspirational branches—you probably won't get these based on previous cutoffs, but no harm trying!</li>
                    <li><strong>Next 10-15 Choices (Realistic Options):</strong> These are branches you'll likely get based on your rank and previous cutoffs</li>
                    <li><strong>Last 5-10 Choices (Safe Backups):</strong> Branches you'll definitely get but might not be your first preference</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-3 font-semibold">Total Choices: Add at least 20-25 choices, if not all available options. More choices = better safety net.</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Seat Allotment - The Moment of Truth</h4>
                  <p className="text-gray-700 mb-3">When: Announced on specified date (usually 3-5 days after choice filling closes)</p>
                  <p className="text-gray-700 mb-3">Three Possible Outcomes:</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li><strong>✅ SEAT ALLOTTED:</strong> Congratulations! You've been allotted a seat. Download allotment letter and proceed with fee payment.</li>
                    <li><strong>⏳ WAITING LIST / NOT ALLOTTED:</strong> You don't have a seat in this round. Check for second counselling round or participate in next phase.</li>
                    <li><strong>❌ NOT ELIGIBLE / DISQUALIFIED:</strong> Contact university helpline immediately to resolve the issue.</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Seat Acceptance and Fee Payment</h4>
                  <p className="text-gray-700 mb-3">When: Within 3-5 days of seat allotment (strict deadline mentioned in allotment letter)</p>
                  <div className="overflow-x-auto mb-3">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fee Component</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Amount (Varies by Branch)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Balance Counselling Fee</td>
                          <td className="border border-gray-300 px-4 py-2">As per earlier payment</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Tuition Fee (Partial/Full)</td>
                          <td className="border border-gray-300 px-4 py-2">₹1,00,000 - ₹2,00,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Development Fee</td>
                          <td className="border border-gray-300 px-4 py-2">₹20,000 - ₹30,000</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Caution Deposit</td>
                          <td className="border border-gray-300 px-4 py-2">₹10,000 (Refundable)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 text-sm mt-3">Total Approximate: ₹1,50,000 - ₹2,70,000 (Varies by branch and campus). <strong>CSE/IT typically most expensive, Civil/Mechanical slightly less.</strong></p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Document Verification</h4>
                  <p className="text-gray-700 mb-3">When: After fee payment, as per schedule (might be online or physical)</p>
                  <p className="text-gray-700 mb-3 font-semibold">Documents Required (Originals + 2 Photocopies Each):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Class 10 & 12 Certificates</li>
                      <li>KLEEE Rank Card</li>
                      <li>Transfer Certificate (TC)</li>
                      <li>Migration Certificate</li>
                      <li>Aadhaar Card</li>
                    </ul>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Category Certificate (if applicable)</li>
                      <li>Seat Allotment Letter</li>
                      <li>Fee Payment Receipt</li>
                      <li>Passport-size photographs (6-10 copies)</li>
                      <li>Anti-Ragging Affidavit</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Final Admission Confirmation and Enrollment</h4>
                  <p className="text-gray-700 mb-3">When: After document verification approval</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Fill complete enrollment form with bio-data</li>
                    <li>Hostel allotment (if opted) - AC Rooms: ₹60,000-₹80,000/year, Non-AC: ₹40,000-₹50,000/year</li>
                    <li>ID Card creation and biometric enrollment</li>
                    <li>Library registration</li>
                    <li>Academic registration - Roll Number assignment, timetable</li>
                    <li>Attend mandatory orientation program</li>
                    <li>Congratulations! You're now officially enrolled as a KL University student!</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Tips for Successful Counselling</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Before Counselling Starts:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>All documents scanned and ready</li>
                      <li>Originals neatly organized in a folder</li>
                      <li>Fees arranged (keep ₹2.5-3 lakhs ready)</li>
                      <li>Research about branches and campuses</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">During Counselling:</p>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Check website daily for updates</li>
                      <li>Fill at least 20-25 choices</li>
                      <li>Review your choices 3-4 times</li>
                      <li>Don't delay fee payment if allotted</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600">Content for this section will be added soon.</p>
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
                <span className="text-gray-500">KLEEE Exam</span>
                <span className="text-gray-400">›</span>
                <span className="text-gray-800 font-medium">KLEEE 2026</span>
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
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="/images/KL_University_logo.svg.png" 
                    alt="KL University Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-medium">KL UNIVERSITY</div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  KLEEE 2026: Exam Dates, Pattern, Syllabus, Cutoff and Latest Information
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-medium">#KLEEE</span>
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
                onClick={() => setActiveTab(tab.id)}
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">B.Tech Admissions OPEN</h3>
              
              {/* KL University */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img 
                      src="/images/KL_University_logo.svg.png" 
                      alt="KL University Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">KL University B.Tech</h4>
                    <p className="text-xs text-gray-600">Koneru Lakshmaiah Education Foundation</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Deemed University | 1000+ Seats | KLEEE Based | Excellent Placements</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

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
                <p className="text-xs text-gray-600 mb-3">Deemed University | 800+ Seats | SRMJEEE Based | Government Funded</p>
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

              {/* GITAM University */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/gitam-logo.jpg" alt="GITAM University" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">GITAM University B.Tech</h4>
                    <p className="text-xs text-gray-600">Gandhi Institute of Technology and Management</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Private University | 1500+ Seats | GITAM Based | Excellent Placements</p>
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

