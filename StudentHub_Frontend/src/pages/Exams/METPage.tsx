import { useState } from 'react';
import { Link } from 'react-router-dom';
import klLogo from '../../assets/Colleges/KL_Logo_Final_New-pdf_1.webp';
import vitLogo from '../../assets/Colleges/vit.png';
import srmLogo from '../../assets/Colleges/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png';

export default function METPage() {
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

  const renderTabContentFor = (tabId: string) => {
    switch (tabId) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 - Overview</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                MET (Manipal Entrance Test) is a university-level entrance examination conducted by Manipal Academy of Higher Education (MAHE) for admission to undergraduate engineering programs (B.Tech) at Manipal Institute of Technology and other constituent colleges. This comprehensive guide provides complete information about the MET 2026 examination.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">About MET 2026</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                MET is conducted annually by Manipal Academy of Higher Education, which is a deemed-to-be university located in Manipal, Karnataka, India. The examination serves as the gateway for admission to various B.Tech programs offered across MAHE campuses including Manipal Institute of Technology (MIT) and other engineering colleges under the Manipal banner.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights</h3>
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
                      <td className="border border-gray-300 px-4 py-2">Manipal Entrance Test (MET)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Body</td>
                      <td className="border border-gray-300 px-4 py-2">Manipal Academy of Higher Education (MAHE)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Level</td>
                      <td className="border border-gray-300 px-4 py-2">University Level Undergraduate Entrance Exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Official Website</td>
                      <td className="border border-gray-300 px-4 py-2">manipal.edu/met</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Frequency</td>
                      <td className="border border-gray-300 px-4 py-2">Once a year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Computer-Based Test (CBT)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                      <td className="border border-gray-300 px-4 py-2">150 minutes (2.5 hours)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2">200 questions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">800 marks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 Important Dates</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The MET 2026 examination is conducted in 2 phases, providing candidates with flexibility in scheduling their exam. The examination is administered by Manipal Academy of Higher Education (MAHE) as a computer-based test (CBT) with a duration of 120 minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Exam Duration</h4>
                  <p className="text-gray-700">120 minutes (2 hours)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Total Questions</h4>
                  <p className="text-gray-700">60 questions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Total Marks</h4>
                  <p className="text-gray-700">240 marks</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Maximum Attempts</h4>
                  <p className="text-gray-700">2 attempts allowed</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Phase 1 - Complete Schedule</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Registration & Application Period</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Official Notification Release</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Last week of September 2025</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Registration Portal Opens</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">September 30, 2025</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Early Registration Period</td>
                        <td className="border border-gray-300 px-4 py-2">October 1-31, 2025</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Regular Registration Period</td>
                        <td className="border border-gray-300 px-4 py-2">November 1, 2025 - January 31, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Extended Registration Period</td>
                        <td className="border border-gray-300 px-4 py-2">February 1-28, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Final Registration Period</td>
                        <td className="border border-gray-300 px-4 py-2">March 1-15, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Last Date to Apply (Phase 1)</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">March 15, 2026 (11:59 PM IST)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Slot Booking & Admit Card</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Online Test Booking System (OTBS) Opens</td>
                        <td className="border border-gray-300 px-4 py-2">April 1-2, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Slot Booking Period</td>
                        <td className="border border-gray-300 px-4 py-2">April 1-18, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Closes</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">April 18, 2026 (5:00 PM IST)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mock Test Portal Opens</td>
                        <td className="border border-gray-300 px-4 py-2">April 10, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">April 15-18, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Examination Period - Phase 1</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date/Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Dates</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">April 18-19, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Slot 1 Reporting Time</td>
                        <td className="border border-gray-300 px-4 py-2">7:30 AM</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Slot 1 Exam Timing</td>
                        <td className="border border-gray-300 px-4 py-2">8:00 AM - 9:00 AM</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Slot 2 Reporting Time</td>
                        <td className="border border-gray-300 px-4 py-2">11:00 AM</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Slot 2 Exam Timing</td>
                        <td className="border border-gray-300 px-4 py-2">11:30 AM - 12:30 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Result Declaration - Phase 1</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Answer Key Processing</td>
                        <td className="border border-gray-300 px-4 py-2">April 20-22, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Preliminary Answer Key Release</td>
                        <td className="border border-gray-300 px-4 py-2">Last week of April 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Objection Window</td>
                        <td className="border border-gray-300 px-4 py-2">2-3 days after answer key release</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Final Answer Key Release</td>
                        <td className="border border-gray-300 px-4 py-2">April 26-28, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">April 28-30, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Phase 2 - Complete Schedule</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Registration & Application Period</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Application Portal Reopens</td>
                        <td className="border border-gray-300 px-4 py-2">Last week of March 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Registration Start Date</td>
                        <td className="border border-gray-300 px-4 py-2">Late March - Early April 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Late Fee Registration Opens</td>
                        <td className="border border-gray-300 px-4 py-2">April 26, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Last Date to Apply</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">April 30, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Slot Booking & Admit Card</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Online Test Booking System Opens</td>
                        <td className="border border-gray-300 px-4 py-2">First week of May 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Slot Booking Period</td>
                        <td className="border border-gray-300 px-4 py-2">May 1-10, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Closes</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">May 10, 2026 (5:00 PM IST)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mock Test Opens</td>
                        <td className="border border-gray-300 px-4 py-2">May 5, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">May 8-10, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Examination & Results - Phase 2</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Date</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">May 12, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Answer Key Release</td>
                        <td className="border border-gray-300 px-4 py-2">Third week of May 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Final Answer Key</td>
                        <td className="border border-gray-300 px-4 py-2">Last week of May 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">May 25-28, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling & Admission Process</h3>
              
              <div className="mb-6">
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Combined Merit List Release</td>
                        <td className="border border-gray-300 px-4 py-2">June 10-15, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Counselling Portal Opens</td>
                        <td className="border border-gray-300 px-4 py-2">June 15, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Document Upload Period</td>
                        <td className="border border-gray-300 px-4 py-2">June 15-20, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Choice Filling Starts</td>
                        <td className="border border-gray-300 px-4 py-2">June 25, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Locking Deadline</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">July 5, 2026 (5:00 PM IST)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Round 1 Seat Allotment</td>
                        <td className="border border-gray-300 px-4 py-2">July 8-10, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Round 2 Processing</td>
                        <td className="border border-gray-300 px-4 py-2">July 15-17, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Final Seat Allotment</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">July 25-28, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Physical Reporting at Campus</td>
                        <td className="border border-gray-300 px-4 py-2">July 28 - August 5, 2026</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Academic Session Begins</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Mid-August 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Important Note:</strong> All dates are tentative and subject to change. Candidates are advised to regularly check the official website manipal.edu for the latest updates and announcements.
                </p>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 Eligibility Criteria</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Before applying for the Manipal Entrance Test (MET) 2026, it is crucial for aspiring candidates to understand the eligibility criteria in detail. The eligibility requirements help ensure that applicants meet the academic and age standards set by Manipal Academy of Higher Education (MAHE). This comprehensive guide outlines all the key aspects, including educational qualifications, subject combinations, age limits, and category-wise relaxations.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The MET 2026 eligibility criteria vary slightly depending on the course and specialization a student chooses. However, for most undergraduate engineering (B.Tech) programs, candidates must have completed their 10+2 or equivalent examination with specific subjects and minimum marks as prescribed by MAHE.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Eligibility Requirements</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Criteria</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Name</td>
                      <td className="border border-gray-300 px-4 py-2">Manipal Entrance Test (MET) 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Authority</td>
                      <td className="border border-gray-300 px-4 py-2">Manipal Academy of Higher Education (MAHE)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Course Offered</td>
                      <td className="border border-gray-300 px-4 py-2">B.Tech (Various specializations)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Level</td>
                      <td className="border border-gray-300 px-4 py-2">University-level entrance test</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Application Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Online</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educational Qualification</h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">To be eligible for MET 2026 B.Tech programs, candidates must meet the following academic requirements:</p>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li><strong>Qualifying Examination:</strong> The applicant should have passed the <strong>10+2 examination</strong>, <strong>A-Level</strong>, <strong>IB</strong>, or any equivalent exam recognized by MAHE.</li>
                  <li><strong>Subject Requirement:</strong> Candidates must have studied <strong>Physics</strong>, <strong>Mathematics</strong>, and <strong>English</strong> as compulsory subjects, along with <strong>Chemistry</strong> / <strong>Biotechnology</strong> / <strong>Biology</strong> / <strong>Technical Vocational</strong> as one of the optional subjects.</li>
                  <li><strong>Minimum Marks:</strong> Applicants must secure <strong>at least 50% aggregate marks</strong> in <strong>Physics, Mathematics, and one optional subject</strong>.</li>
                  <li><strong>Board Recognition:</strong> The qualifying examination must be recognized by a <strong>Central or State Board of Education</strong> or equivalent authority.</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Example:</strong> If you completed your 10+2 with Physics, Mathematics, and Chemistry and scored above 50% combined in these three subjects, you are eligible to apply for MET 2026.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility for Lateral Entry (B.Tech – 2nd Year Admission)</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <p className="text-gray-700 mb-3">Candidates seeking <strong>lateral entry</strong> into the second year of B.Tech must meet the following criteria:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Must have completed a <strong>3-year Diploma in Engineering</strong> awarded by a recognized Board of Technical Education in India.</li>
                  <li>Must have scored <strong>a minimum of 45% aggregate marks</strong> in their diploma (40% for reserved categories).</li>
                  <li>The diploma should correspond to the branch they wish to pursue in B.Tech.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nationality Criteria</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Only <strong>Indian Nationals</strong> are eligible to apply for MET 2026.</li>
                  <li><strong>Foreign/NRI/PIO candidates</strong> can apply through a separate international admission channel offered by MAHE.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Age Limit</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>MAHE has not specified any <strong>upper age limit</strong> for appearing in MET 2026.</li>
                  <li>However, the candidate should have been born <strong>on or after July 1, 2004</strong>, to be eligible for admission in the 2026 academic session.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria for NRI/Foreign/PIO Applicants</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <p className="text-gray-700 mb-3">Candidates applying under the <strong>NRI/Foreign/PIO category</strong> must meet the following:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Should have completed <strong>12 years of schooling abroad</strong> or in India with equivalent qualifications.</li>
                  <li>Must have studied <strong>Physics, Mathematics, and English</strong> along with one optional subject (Chemistry/Biotechnology/Biology/Technical Vocational).</li>
                  <li>A minimum of <strong>50% marks</strong> in the qualifying examination is required.</li>
                  <li>Such applicants are not required to appear for MET but can apply through the <strong>Direct Admission (International) channel</strong>.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course-Specific Eligibility Highlights</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Program</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Core Subjects Required</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Minimum Aggregate</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Other Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">B.Tech (All Specializations)</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Mathematics, and one optional subject</td>
                      <td className="border border-gray-300 px-4 py-2">50%</td>
                      <td className="border border-gray-300 px-4 py-2">Must pass individually in each subject</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">B.Tech (Biotechnology)</td>
                      <td className="border border-gray-300 px-4 py-2">Physics, Mathematics, Biology / Chemistry / Biotechnology</td>
                      <td className="border border-gray-300 px-4 py-2">50%</td>
                      <td className="border border-gray-300 px-4 py-2">Candidates with Biology can also apply</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">B.Tech (Lateral Entry)</td>
                      <td className="border border-gray-300 px-4 py-2">Diploma in relevant engineering stream</td>
                      <td className="border border-gray-300 px-4 py-2">45%</td>
                      <td className="border border-gray-300 px-4 py-2">Direct admission to 2nd year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Notes and Important Points</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Candidates awaiting <strong>10+2 results</strong> are also eligible to apply, provided they meet all eligibility conditions during counselling.</li>
                  <li>The eligibility will be <strong>verified during counselling and admission</strong>. Any discrepancy may lead to disqualification.</li>
                  <li>The <strong>minimum mark requirement</strong> applies to the aggregate of specific subjects only, not the overall percentage.</li>
                  <li>Applicants must provide <strong>valid documents</strong> (mark sheets, birth certificate, and ID proof) for verification.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Documents Required During Counselling</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Class 10 Mark Sheet / Birth Certificate (for date of birth verification)</li>
                  <li>Class 12 Mark Sheet (or equivalent)</li>
                  <li>Transfer Certificate / Migration Certificate</li>
                  <li>Community Certificate (if applicable)</li>
                  <li>Photo ID proof (Aadhaar / Passport / School ID)</li>
                  <li>MET 2026 Admit Card and Scorecard</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Takeaways</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <p className="text-gray-800"><strong>•</strong> Physics, Mathematics, and English are mandatory subjects.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <p className="text-gray-800"><strong>•</strong> Minimum 50% aggregate marks required in key subjects.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <p className="text-gray-800"><strong>•</strong> No specific upper age limit, but year of birth should be 2004 or later.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <p className="text-gray-800"><strong>•</strong> Lateral entry available for diploma holders with at least 45% marks.</p>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                <p className="text-gray-800">
                  <strong>Conclusion:</strong> Meeting the MET 2026 eligibility criteria is the first step toward securing admission to one of India's most reputed private universities — <strong>Manipal Academy of Higher Education (MAHE)</strong>. Candidates are strongly advised to verify their eligibility carefully before filling out the application form. Ineligible candidates will not be allowed to participate in counselling, regardless of their MET scores.
                </p>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 Application Process</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The application process for MET 2026 is entirely online and straightforward. Follow the steps below to complete your application successfully.
              </p>


              <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Fee Structure</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fee Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">General / OBC</td>
                      <td className="border border-gray-300 px-4 py-2">₹2,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SC/ST/PWD</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">NRI Candidates</td>
                      <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 Exam Pattern</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The MET 2026 is a Computer-Based Test (CBT) conducted by Manipal Academy of Higher Education (MAHE). The examination has a duration of 120 minutes with 60 questions carrying a total of 240 marks. Understanding the detailed pattern is essential for strategic preparation and effective time management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Exam Duration</h4>
                  <p className="text-gray-700 text-sm">120 minutes (2 hours)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-green-900 mb-2">Total Questions</h4>
                  <p className="text-gray-700 text-sm">60 questions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-purple-900 mb-2">Total Marks</h4>
                  <p className="text-gray-700 text-sm">240 marks</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-orange-900 mb-2">Question Types</h4>
                  <p className="text-gray-700 text-sm">MCQs & NAT</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Examination Details</h3>
              
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
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Authority</td>
                      <td className="border border-gray-300 px-4 py-2">Manipal Academy of Higher Education (MAHE)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Computer-Based Test (CBT) at designated centers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                      <td className="border border-gray-300 px-4 py-2">120 minutes (2 hours)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2">60 questions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">240 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Medium of Exam</td>
                      <td className="border border-gray-300 px-4 py-2">English only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Question Types</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Choice Questions (MCQs) and Numerical Answer Type (NAT)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Number of Phases</td>
                      <td className="border border-gray-300 px-4 py-2">2 phases</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Maximum Attempts</td>
                      <td className="border border-gray-300 px-4 py-2">2 attempts allowed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PwD Additional Time</td>
                      <td className="border border-gray-300 px-4 py-2">20 minutes extra per hour (total 140 minutes)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Question Type Details</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Multiple Choice Questions (MCQs)</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total MCQ Questions</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">45 questions (out of 60)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Options per Question</td>
                        <td className="border border-gray-300 px-4 py-2">4 options (A, B, C, D)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Correct Answer Reward</td>
                        <td className="border border-gray-300 px-4 py-2">+4 marks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Incorrect Answer Penalty</td>
                        <td className="border border-gray-300 px-4 py-2">-1 mark (negative marking)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Unattempted Questions</td>
                        <td className="border border-gray-300 px-4 py-2">0 marks (no negative marking)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Numerical Answer Type (NAT) Questions</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total NAT Questions</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">15 questions (out of 60)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Answer Format</td>
                        <td className="border border-gray-300 px-4 py-2">Numerical value (0-9999 range)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Decimal Places</td>
                        <td className="border border-gray-300 px-4 py-2">Up to 2 decimal places accepted</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Correct Answer Reward</td>
                        <td className="border border-gray-300 px-4 py-2">+4 marks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Incorrect Answer Penalty</td>
                        <td className="border border-gray-300 px-4 py-2">0 marks (NO negative marking)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Calculator Available</td>
                        <td className="border border-gray-300 px-4 py-2">Yes, on-screen calculator provided</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Section-wise Distribution (B.Tech)</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Physics Section</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Questions</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">15 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">MCQ Questions</td>
                        <td className="border border-gray-300 px-4 py-2">10 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">NAT Questions</td>
                        <td className="border border-gray-300 px-4 py-2">5 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Marks</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">60 marks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Weightage</td>
                        <td className="border border-gray-300 px-4 py-2">25% of total exam</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Recommended Time</td>
                        <td className="border border-gray-300 px-4 py-2">30 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Chemistry Section</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Questions</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">15 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">MCQ Questions</td>
                        <td className="border border-gray-300 px-4 py-2">10 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">NAT Questions</td>
                        <td className="border border-gray-300 px-4 py-2">5 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Marks</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">60 marks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Weightage</td>
                        <td className="border border-gray-300 px-4 py-2">25% of total exam</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Recommended Time</td>
                        <td className="border border-gray-300 px-4 py-2">30 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Mathematics Section (Highest Weightage)</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Questions</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">20 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">MCQ Questions</td>
                        <td className="border border-gray-300 px-4 py-2">15 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">NAT Questions</td>
                        <td className="border border-gray-300 px-4 py-2">5 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Marks</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">80 marks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Weightage</td>
                        <td className="border border-gray-300 px-4 py-2">33.33% of total exam</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Recommended Time</td>
                        <td className="border border-gray-300 px-4 py-2">40 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">English & General Aptitude Section</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Questions</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">10 questions (all MCQs)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">MCQ Questions</td>
                        <td className="border border-gray-300 px-4 py-2">10 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">NAT Questions</td>
                        <td className="border border-gray-300 px-4 py-2">0 questions</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Total Marks</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">40 marks</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Weightage</td>
                        <td className="border border-gray-300 px-4 py-2">16.67% of total exam</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Recommended Time</td>
                        <td className="border border-gray-300 px-4 py-2">20 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Marking Scheme</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-green-900 mb-2">Positive Marking</h4>
                  <p className="text-gray-700 text-sm mb-2">Correct MCQ Answer: <strong>+4 marks</strong></p>
                  <p className="text-gray-700 text-sm">Correct NAT Answer: <strong>+4 marks</strong></p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-red-900 mb-2">Negative Marking</h4>
                  <p className="text-red-700 text-sm mb-2">Incorrect MCQ Answer: <strong>-1 mark</strong></p>
                  <p className="text-red-700 text-sm">Incorrect NAT Answer: <strong>0 marks</strong> (No negative)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Score Calculation</h4>
                  <p className="text-gray-700 text-sm">Total = (Correct × 4) - (Incorrect MCQ × 1)</p>
                  <p className="text-gray-700 text-sm mt-2">Max Score: <strong>240 marks</strong></p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Time Management Strategy</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                    <span className="font-semibold text-blue-900">Physics</span>
                    <span className="text-gray-700">30 minutes (15 questions)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                    <span className="font-semibold text-blue-900">Chemistry</span>
                    <span className="text-gray-700">30 minutes (15 questions)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                    <span className="font-semibold text-blue-900">Mathematics</span>
                    <span className="text-gray-700">40 minutes (20 questions)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                    <span className="font-semibold text-blue-900">English</span>
                    <span className="text-gray-700">15 minutes (10 questions)</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-semibold text-blue-900">Review Time</span>
                    <span className="text-gray-700">5 minutes</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4">
                <p className="text-gray-800">
                  <strong>Important Strategy:</strong> Due to negative marking in MCQs, avoid random guessing. Attempt NAT questions confidently as they have no negative marking. Target at least 70% accuracy for attempted questions.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-purple-400 p-4">
                <p className="text-gray-800">
                  <strong>Exam Interface:</strong> On-screen calculator, rough work area, and question navigation panel will be available. You can switch between sections freely and review/change answers before final submission.
                </p>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 Syllabus</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The MET syllabus is based on the NCERT curriculum of Class 11 and Class 12, covering Physics, Chemistry, Mathematics, and English & General Aptitude. The syllabus is designed to assess candidates' understanding of fundamental concepts in these subjects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Mathematics</h4>
                  <p className="text-gray-700 text-sm">20 questions (80 marks)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-green-900 mb-2">Physics</h4>
                  <p className="text-gray-700 text-sm">15 questions (60 marks)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-purple-900 mb-2">Chemistry</h4>
                  <p className="text-gray-700 text-sm">15 questions (60 marks)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-orange-900 mb-2">English & Aptitude</h4>
                  <p className="text-gray-700 text-sm">10 questions (40 marks)</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mathematics Syllabus</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sets, Relations and Functions</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Sets and set operations, Venn diagrams, Laws of set operations</li>
                      <li>Relations: domain, range, types of relations, equivalence relations</li>
                      <li>Functions: types, domain, range, composition, inverse functions</li>
                      <li>Trigonometric functions: domain, range, graphs, identities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Algebra</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Mathematical induction and its applications</li>
                      <li>Complex numbers: algebra, modulus, argument, polar form, De Moivre's theorem</li>
                      <li>Quadratic equations: nature of roots, relations between roots and coefficients</li>
                      <li>Linear inequalities, permutations and combinations</li>
                      <li>Binomial theorem with applications</li>
                      <li>Arithmetic, geometric, and harmonic progressions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Coordinate Geometry</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Two-dimensional geometry: distance formula, section formula, area of triangle</li>
                      <li>Straight lines: various forms, angle between lines, distance from point to line</li>
                      <li>Circles: standard and general equation, tangent and normal</li>
                      <li>Conic sections: parabola, ellipse, hyperbola with standard equations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Calculus</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Limits and continuity: standard limits, L'Hospital's rule</li>
                      <li>Differentiation: chain rule, product rule, quotient rule, parametric differentiation</li>
                      <li>Applications: tangent and normal, maxima and minima, rate of change</li>
                      <li>Integration: methods of integration, definite integrals</li>
                      <li>Applications: area under curves, volume of solids of revolution</li>
                      <li>Differential equations: formation and solution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Vectors and 3D Geometry</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Vector algebra: dot product, cross product, scalar triple product</li>
                      <li>Three-dimensional geometry: direction cosines, equations of lines and planes</li>
                      <li>Distance from point to plane, angle between planes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Probability and Statistics</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Measures of central tendency: mean, median, mode</li>
                      <li>Measures of dispersion: range, variance, standard deviation</li>
                      <li>Probability: events, conditional probability, independent events</li>
                      <li>Binomial distribution, random variables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Matrices and Determinants</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Types of matrices, operations on matrices</li>
                      <li>Determinant and its properties</li>
                      <li>Adjoint and inverse of matrices</li>
                      <li>Solution of system of linear equations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Physics Syllabus</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Physical World and Measurement</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Physics scope and nature of physical laws</li>
                      <li>SI units, dimensional analysis</li>
                      <li>Significant figures and errors in measurement</li>
                      <li>Precision and accuracy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Kinematics</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Motion in straight line: position, velocity, acceleration</li>
                      <li>Equations of motion for uniformly accelerated motion</li>
                      <li>Motion in a plane: projectile motion, circular motion</li>
                      <li>Uniform circular motion and centripetal acceleration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Laws of Motion</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Newton's laws of motion and their applications</li>
                      <li>Friction: static and kinetic friction</li>
                      <li>Circular motion applications: banking of roads, vertical circle</li>
                      <li>Linear momentum and collisions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Work, Energy and Power</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Work-energy theorem</li>
                      <li>Kinetic and potential energy</li>
                      <li>Conservation of mechanical energy</li>
                      <li>Power and its applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">System of Particles and Rigid Body</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Center of mass and its motion</li>
                      <li>Rotational motion: angular velocity, acceleration</li>
                      <li>Moment of inertia and theorems</li>
                      <li>Torque and angular momentum</li>
                      <li>Rolling motion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Gravitation</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Universal law of gravitation</li>
                      <li>Acceleration due to gravity and its variation</li>
                      <li>Gravitational potential energy</li>
                      <li>Escape velocity and satellite motion</li>
                      <li>Kepler's laws of planetary motion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Additional Topics</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Thermodynamics and thermal physics</li>
                      <li>Electricity and magnetism</li>
                      <li>Optics and wave optics</li>
                      <li>Modern physics: atoms, nuclei, semiconductors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chemistry Syllabus</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Physical Chemistry</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>States of matter: gases, liquids, solids</li>
                      <li>Thermodynamics: laws, enthalpy, entropy, free energy</li>
                      <li>Chemical kinetics: rate of reaction, order, activation energy</li>
                      <li>Chemical equilibrium: Le Chatelier's principle</li>
                      <li>Electrochemistry: cells, EMF, conductance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Inorganic Chemistry</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Periodic table: modern periodic law, trends in properties</li>
                      <li>Chemical bonding: ionic, covalent, coordinate bonds</li>
                      <li>Hydrogen and its compounds</li>
                      <li>s-Block elements: alkali and alkaline earth metals</li>
                      <li>p-Block elements: groups 13-18</li>
                      <li>d and f Block elements: transition elements, inner transition elements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Organic Chemistry</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Hydrocarbons: alkanes, alkenes, alkynes, aromatic compounds</li>
                      <li>Functional groups: alcohols, ethers, aldehydes, ketones, carboxylic acids</li>
                      <li>Organic compounds: amines, amides, esters</li>
                      <li>Biomolecules: carbohydrates, proteins, lipids, nucleic acids</li>
                      <li>Polymers and environmental chemistry</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">English & General Aptitude Syllabus</h3>
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Vocabulary</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Synonyms and antonyms</li>
                      <li>Idioms and phrases</li>
                      <li>One-word substitutions</li>
                      <li>Word analogies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grammar</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Parts of speech, subject-verb agreement</li>
                      <li>Error detection and correction</li>
                      <li>Sentence completion</li>
                      <li>Sentence rearrangement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Reading Comprehension</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Passages followed by questions</li>
                      <li>Inference and interpretation</li>
                      <li>Vocabulary in context</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">General Aptitude</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                      <li>Logical reasoning: sequences, series, analogies</li>
                      <li>Analytical and critical thinking</li>
                      <li>Data interpretation</li>
                      <li>General knowledge: current affairs, science, technology</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                <p className="text-gray-800">
                  <strong>Note:</strong> The syllabus is based on NCERT textbooks (Class 11 and 12). Candidates should focus on conceptual understanding and problem-solving skills. Approximately 60% of questions come from Class 12 syllabus and 40% from Class 11 syllabus.
                </p>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 Cutoff</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                MET cutoffs are released as closing ranks after each counselling round. The cutoff represents the last rank at which admission was offered in each branch, campus, and category combination. Meeting cutoff doesn't guarantee admission but indicates higher chances of success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Total Marks</h4>
                  <p className="text-gray-700 text-sm">240 marks</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-green-900 mb-2">Cutoff Format</h4>
                  <p className="text-gray-700 text-sm">Closing Ranks (not marks)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-purple-900 mb-2">Weightage</h4>
                  <p className="text-gray-700 text-sm">50% Board + 50% MET</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Factors Determining Cutoff</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>Exam Difficulty:</strong> Higher difficulty leads to lower cutoff ranks</li>
                  <li><strong>Number of Applicants:</strong> Increased applicants push cutoffs higher</li>
                  <li><strong>Available Seats:</strong> More seats result in lower cutoff ranks</li>
                  <li><strong>Previous Year Trends:</strong> Historical data influences expected cutoffs</li>
                  <li><strong>Category Distribution:</strong> Different quotas affect category-wise cutoffs</li>
                  <li><strong>Board Percentage:</strong> 50% weightage significantly impacts final rank</li>
                  <li><strong>Campus Preference:</strong> Main campus has highest cutoffs</li>
                  <li><strong>Branch Popularity:</strong> CS branches have highest cutoffs</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">MIT Manipal Main Campus - Branch-wise Cutoffs</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">2024 Cutoff</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">2023 Cutoff</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer Science Engineering (CSE)</td>
                      <td className="border border-gray-300 px-4 py-2">1193</td>
                      <td className="border border-gray-300 px-4 py-2">1602</td>
                      <td className="border border-gray-300 px-4 py-2">1100-1700</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">AI & Machine Learning</td>
                      <td className="border border-gray-300 px-4 py-2">1659</td>
                      <td className="border border-gray-300 px-4 py-2">2382</td>
                      <td className="border border-gray-300 px-4 py-2">1600-2500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">CS Financial Technology</td>
                      <td className="border border-gray-300 px-4 py-2">2320</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                      <td className="border border-gray-300 px-4 py-2">2200-2600</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Information Technology</td>
                      <td className="border border-gray-300 px-4 py-2">4180</td>
                      <td className="border border-gray-300 px-4 py-2">4765</td>
                      <td className="border border-gray-300 px-4 py-2">3500-5000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Computer & Communication Engg</td>
                      <td className="border border-gray-300 px-4 py-2">4882</td>
                      <td className="border border-gray-300 px-4 py-2">6360</td>
                      <td className="border border-gray-300 px-4 py-2">4500-6500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mathematics & Computing</td>
                      <td className="border border-gray-300 px-4 py-2">5105</td>
                      <td className="border border-gray-300 px-4 py-2">6771</td>
                      <td className="border border-gray-300 px-4 py-2">5000-7000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Electronics & Communication</td>
                      <td className="border border-gray-300 px-4 py-2">6349</td>
                      <td className="border border-gray-300 px-4 py-2">8820</td>
                      <td className="border border-gray-300 px-4 py-2">6000-9000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Electronics & Instrumentation</td>
                      <td className="border border-gray-300 px-4 py-2">15493</td>
                      <td className="border border-gray-300 px-4 py-2">34087</td>
                      <td className="border border-gray-300 px-4 py-2">15000-35000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Aeronautical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">17015</td>
                      <td className="border border-gray-300 px-4 py-2">28850</td>
                      <td className="border border-gray-300 px-4 py-2">16000-30000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Cyber Physical Systems</td>
                      <td className="border border-gray-300 px-4 py-2">19121</td>
                      <td className="border border-gray-300 px-4 py-2">23818</td>
                      <td className="border border-gray-300 px-4 py-2">18000-25000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechatronics Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">19948</td>
                      <td className="border border-gray-300 px-4 py-2">38247</td>
                      <td className="border border-gray-300 px-4 py-2">18000-40000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Biotechnology</td>
                      <td className="border border-gray-300 px-4 py-2">23458</td>
                      <td className="border border-gray-300 px-4 py-2">30017</td>
                      <td className="border border-gray-300 px-4 py-2">20000-32000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mechanical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">23389</td>
                      <td className="border border-gray-300 px-4 py-2">47184</td>
                      <td className="border border-gray-300 px-4 py-2">20000-48000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Chemical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">28039</td>
                      <td className="border border-gray-300 px-4 py-2">48465</td>
                      <td className="border border-gray-300 px-4 py-2">25000-50000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Automobile Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">28284</td>
                      <td className="border border-gray-300 px-4 py-2">46461</td>
                      <td className="border border-gray-300 px-4 py-2">25000-48000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Biomedical Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">32704</td>
                      <td className="border border-gray-300 px-4 py-2">47120</td>
                      <td className="border border-gray-300 px-4 py-2">30000-48000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Civil Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">33327</td>
                      <td className="border border-gray-300 px-4 py-2">47893</td>
                      <td className="border border-gray-300 px-4 py-2">30000-50000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Industrial Engineering</td>
                      <td className="border border-gray-300 px-4 py-2">38663</td>
                      <td className="border border-gray-300 px-4 py-2">-</td>
                      <td className="border border-gray-300 px-4 py-2">35000-45000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Campus-wise Cutoff Comparison</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Campus</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">CSE 2024 Cutoff</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">CSE 2023 Cutoff</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected 2026 Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">MIT Manipal (Main)</td>
                      <td className="border border-gray-300 px-4 py-2">1193</td>
                      <td className="border border-gray-300 px-4 py-2">1602</td>
                      <td className="border border-gray-300 px-4 py-2">1100-1700</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">MIT Bangalore</td>
                      <td className="border border-gray-300 px-4 py-2">9116</td>
                      <td className="border border-gray-300 px-4 py-2">17587</td>
                      <td className="border border-gray-300 px-4 py-2">8000-18000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Manipal Jaipur</td>
                      <td className="border border-gray-300 px-4 py-2">24524</td>
                      <td className="border border-gray-300 px-4 py-2">24500</td>
                      <td className="border border-gray-300 px-4 py-2">23000-26000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SMIT Sikkim</td>
                      <td className="border border-gray-300 px-4 py-2">46801</td>
                      <td className="border border-gray-300 px-4 py-2">47593</td>
                      <td className="border border-gray-300 px-4 py-2">45000-49000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expected Marks to Rank Correlation</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Rank Range</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligible Branches</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">220-240 (92-100%)</td>
                      <td className="border border-gray-300 px-4 py-2">1-1500</td>
                      <td className="border border-gray-300 px-4 py-2">Top CS branches at MIT Manipal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">200-220 (83-92%)</td>
                      <td className="border border-gray-300 px-4 py-2">1500-5000</td>
                      <td className="border border-gray-300 px-4 py-2">IT, ECE at MIT Manipal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">180-200 (75-83%)</td>
                      <td className="border border-gray-300 px-4 py-2">5000-15000</td>
                      <td className="border border-gray-300 px-4 py-2">EEE, ECE at MIT Manipal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">160-180 (67-75%)</td>
                      <td className="border border-gray-300 px-4 py-2">15000-30000</td>
                      <td className="border border-gray-300 px-4 py-2">Mechanical, Aeronautical at MIT Manipal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">140-160 (58-67%)</td>
                      <td className="border border-gray-300 px-4 py-2">30000-50000</td>
                      <td className="border border-gray-300 px-4 py-2">Civil, Chemical at MIT Manipal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">120-140 (50-58%)</td>
                      <td className="border border-gray-300 px-4 py-2">50000-75000</td>
                      <td className="border border-gray-300 px-4 py-2">Most branches at other campuses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Category-wise Cutoff Relaxation</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Relaxation</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected CSE Cutoff Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">General</td>
                      <td className="border border-gray-300 px-4 py-2">No relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">1100-1700</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">OBC</td>
                      <td className="border border-gray-300 px-4 py-2">10-15% relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">1200-2000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">SC</td>
                      <td className="border border-gray-300 px-4 py-2">25-30% relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">1500-2500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ST</td>
                      <td className="border border-gray-300 px-4 py-2">30-35% relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">1600-2700</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">PwD</td>
                      <td className="border border-gray-300 px-4 py-2">35-40% relaxation</td>
                      <td className="border border-gray-300 px-4 py-2">1800-3000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Notes</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li><strong>Board Percentage Critical:</strong> 50% weightage from Class 12 boards + 50% from MET score determines final rank</li>
                  <li><strong>Minimum Board Requirement:</strong> 85%+ recommended for competitive branches; 95%+ gives significant advantage</li>
                  <li><strong>MET Score Target:</strong> 200+ marks out of 240 needed for top CS branches at MIT Manipal</li>
                  <li><strong>Campus Flexibility:</strong> Being open to Jaipur/Bangalore campuses greatly improves admission chances</li>
                  <li><strong>Branch Flexibility:</strong> Consider allied branches (IT, CCE) instead of only CSE for better conversion</li>
                  <li><strong>Round-wise Participation:</strong> Don't give up after Round 1; cutoffs relax in later rounds</li>
                </ul>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4">
                <p className="text-gray-800">
                  <strong>Note:</strong> All cutoffs represent closing ranks for General category. Cutoffs are released after each counselling round at counseling.manipal.edu. These are projections based on historical trends and may vary based on actual exam difficulty and applicant pool.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                <p className="text-gray-800">
                  <strong>Counseling Process:</strong> Round 1 has strictest cutoff; subsequent rounds (Round 2, 3, 4) may have relaxed cutoffs based on seat availability. Participate in all rounds for maximum opportunity.
                </p>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">MET 2026 Counselling Process</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Understanding the counselling process after your MET results can feel overwhelming, but this detailed guide breaks down every aspect to help you navigate through each step confidently and secure your dream engineering seat at Manipal Academy of Higher Education.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Eligibility</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <p className="text-gray-700 mb-3">To participate in counselling, you must:</p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Have appeared for MET 2026 and received a valid rank</li>
                  <li>Meet the minimum cutoff requirements for at least one program</li>
                  <li>Have all required documents ready and verified</li>
                  <li>Meet age and academic qualification criteria</li>
                  <li>Hold valid category certificate if claiming reservation</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Timeline</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                      <td className="border border-gray-300 px-4 py-2">Late April to Early May 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Counselling Registration Opens</td>
                      <td className="border border-gray-300 px-4 py-2">First week of May 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Round 1 Seat Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Third week of May 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Round 2 Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Late May 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Round 3 Allotment</td>
                      <td className="border border-gray-300 px-4 py-2">Early June 2026</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Physical Reporting</td>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">July-August 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Fee Structure</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fee Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Amount</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Refundable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration Fee</td>
                      <td className="border border-gray-300 px-4 py-2">INR 10,000</td>
                      <td className="border border-gray-300 px-4 py-2">Yes (if no admission)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">First Semester Fee (MIT Manipal)</td>
                      <td className="border border-gray-300 px-4 py-2">INR 1.9-2.5 lakhs</td>
                      <td className="border border-gray-300 px-4 py-2">Partial (check policy)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Hostel Charges</td>
                      <td className="border border-gray-300 px-4 py-2">INR 35-50K (semester)</td>
                      <td className="border border-gray-300 px-4 py-2">As per terms</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Choice Filling Strategy</h3>
              
              <div className="bg-gray-50 border-l-4 border-gray-400 p-5 mb-6">
                <p className="text-gray-800 mb-3"><strong>Important:</strong> Fill choices only for branches/campuses you'll genuinely accept. The system offers your highest preference choice for which your rank qualifies.</p>
                <div className="space-y-2 text-gray-800">
                  <p><strong>For Rank 1-5000:</strong> Focus on CSE, AI-ML, IT at MIT Manipal</p>
                  <p><strong>For Rank 5000-20000:</strong> Include MIT Manipal core branches + MIT Bangalore CSE</p>
                  <p><strong>For Rank 20000-50000:</strong> Be campus-flexible - include Bangalore, Jaipur, Sikkim options</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Freeze vs Float Decision</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-green-900 mb-2">Freeze Option</h4>
                  <ul className="text-gray-800 text-sm space-y-1">
                    <li>✓ Accept seat as final</li>
                    <li>✗ No participation in subsequent rounds</li>
                    <li>✓ Choose if completely satisfied</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-gray-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Float Option</h4>
                  <ul className="text-gray-800 text-sm space-y-1">
                    <li>✓ Accept seat but stay in contention</li>
                    <li>✓ Automatic upgrade if better choice available</li>
                    <li>✓ Recommended for most students</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Documents for Reporting</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Mandatory Documents:</h4>
                <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
                  <li>MET 2026 Rank Card & Admit Card (original + 2 copies)</li>
                  <li>Counselling Allotment Letter</li>
                  <li>Class 10 & 12 Marksheets & Certificates (original + 2 copies)</li>
                  <li>Transfer Certificate (Original - fresh within 3 months)</li>
                  <li>Migration Certificate (if board is different)</li>
                  <li>Aadhaar Card (original + 2 copies)</li>
                  <li>Parent PAN Card (original + 2 copies)</li>
                  <li>10 recent passport-size photos</li>
                  <li>Category Certificate (if applicable)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Counselling Tips</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                  <li><strong>Missing Deadlines:</strong> Costs INR 10,000 and possibly admission - set multiple reminders!</li>
                  <li><strong>Wrong Choice Order:</strong> You'll get highest preference available - ensure priorities are correct</li>
                  <li><strong>Fill 15-20+ Choices:</strong> Maximize your chances with diverse options</li>
                  <li><strong>Pay Fee Early:</strong> At least 1-2 days before deadline to avoid technical glitches</li>
                  <li><strong>Float When Uncertain:</strong> Keep options open for better choices in next rounds</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              
              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Official Portal</p>
                    <p className="text-gray-700 text-sm">counseling.manipal.edu</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Admission Helpdesk</p>
                    <p className="text-gray-700 text-sm">admissions@manipal.edu</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Phone</p>
                    <p className="text-gray-700 text-sm">+91-820-2925063</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Timing</p>
                    <p className="text-gray-700 text-sm">9 AM - 6 PM (Mon-Sat)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                <p className="text-gray-800">
                  <strong>Note:</strong> All deadlines are strict. Missing the fee payment deadline results in seat cancellation and INR 10,000 forfeiture. Always refer to official notifications at manipal.edu for the most current information.
                </p>
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

  const renderTabContent = () => {
    return renderTabContentFor(activeTab);
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
                <span className="text-gray-500">MET Exam</span>
                <span className="text-gray-400">›</span>
                <span className="text-gray-800 font-medium">MET 2026</span>
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
                  src="/images/MANIPAL-INSTITUTE-OF-TECHNOLOGY.png" 
                  alt="Manipal Institute of Technology Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  MET 2026: Exam Dates, Pattern, Syllabus, Cutoff and Latest Information
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 font-medium">#MET</span>
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
              
              {/* Manipal Institute of Technology */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/MANIPAL-INSTITUTE-OF-TECHNOLOGY.png" alt="Manipal Institute of Technology" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">Manipal Institute of Technology B.Tech</h4>
                    <p className="text-xs text-gray-600">Manipal Academy of Higher Education</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Deemed University | 1500+ Seats | MET Based | Excellent Infrastructure</p>
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-gray-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* KL University */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={klLogo} alt="KL University" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">KL University B.Tech</h4>
                    <p className="text-xs text-gray-600">Koneru Lakshmaiah Education Foundation</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Deemed University | 1000+ Seats | KLEEE Based | Excellent Placements</p>
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-gray-600 transition">
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
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-gray-600 transition">
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
                <p className="text-xs text-gray-600 mb-3">Deemed University | 800+ Seats | SRMJEEE Based | Excellent Facilities</p>
                <button className="w-full bg-gray-500 text-white text-xs py-2 px-3 rounded hover:bg-gray-600 transition">
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

