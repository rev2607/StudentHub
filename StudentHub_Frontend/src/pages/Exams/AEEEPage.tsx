import { useState } from 'react';
import { Link } from 'react-router-dom';

type TabType = 'overview' | 'dates' | 'eligibility' | 'application' | 'pattern' | 'syllabus' | 'cutoff' | 'counselling';

export default function AEEEPage() {
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

  const renderTabContentFor = (tabId: string) => {
    switch (tabId) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 - Overview</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                AEEE (Amrita Entrance Examination - Engineering) is a national-level entrance examination conducted by Amrita Vishwa Vidyapeetham (Amrita University) for admission to undergraduate engineering programs (B.Tech) at its campuses across India. This comprehensive guide provides complete information about the AEEE 2026 examination.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">About AEEE 2026</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                AEEE is conducted annually by Amrita Vishwa Vidyapeetham, a deemed-to-be university known for its excellence in technical education and research. The examination serves as the gateway for admission to various B.Tech programs offered across Amrita campuses including Amritapuri (Kerala), Bengaluru (Karnataka), Chennai (Tamil Nadu), Coimbatore (Tamil Nadu), and Amaravati (Andhra Pradesh).
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
                      <td className="border border-gray-300 px-4 py-2">Amrita Entrance Examination - Engineering (AEEE)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Conducting Body</td>
                      <td className="border border-gray-300 px-4 py-2">Amrita Vishwa Vidyapeetham (Amrita University)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Level</td>
                      <td className="border border-gray-300 px-4 py-2">National Level Undergraduate Entrance Exam</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Official Website</td>
                      <td className="border border-gray-300 px-4 py-2">aeee.amrita.edu</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Frequency</td>
                      <td className="border border-gray-300 px-4 py-2">Once a year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Computer-Based Test (CBT) / Online</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                      <td className="border border-gray-300 px-4 py-2">180 minutes (3 hours)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2">125 questions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">500 marks</td>
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
            {/* Exam Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 Complete Schedule & Important Dates</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Full Form:</span> Amrita Entrance Examination - Engineering</p>
                    <p><span className="font-semibold">Conducting Authority:</span> Amrita Vishwa Vidyapeetham</p>
                    <p><span className="font-semibold">Exam Level:</span> University-level entrance examination</p>
                    <p><span className="font-semibold">Frequency:</span> Conducted in 2 phases annually</p>
                    <p><span className="font-semibold">Mode of Exam:</span> Computer-Based Test (CBT) - Online</p>
                    <p><span className="font-semibold">Language:</span> English</p>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Duration:</span> 2 Hours 30 Minutes (150 minutes)</p>
                    <p><span className="font-semibold">Total Questions:</span> 100 Multiple Choice Questions (MCQs)</p>
                    <p><span className="font-semibold">Total Marks:</span> 300 marks (Each question carries 3 marks)</p>
                    <p><span className="font-semibold">Negative Marking:</span> Yes, 1 mark deducted for each wrong answer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 1 Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">PHASE 1 - Detailed Schedule (January-February 2026)</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Registration & Application Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Status</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Application Form Release</td>
                          <td className="border border-gray-300 px-4 py-2">October 29, 2025</td>
                          <td className="border border-gray-300 px-4 py-2">LIVE</td>
                          <td className="border border-gray-300 px-4 py-2">Registration portal activated at aeee.amrita.edu</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Registration Start Date</td>
                          <td className="border border-gray-300 px-4 py-2">October 29, 2025</td>
                          <td className="border border-gray-300 px-4 py-2">ONGOING</td>
                          <td className="border border-gray-300 px-4 py-2">Online application process begins</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Application Form Availability</td>
                          <td className="border border-gray-300 px-4 py-2">Oct 29, 2025 - Jan 15, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">ONGOING</td>
                          <td className="border border-gray-300 px-4 py-2">78-day application window</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Last Date to Register</td>
                          <td className="border border-gray-300 px-4 py-2">January 15, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">DEADLINE</td>
                          <td className="border border-gray-300 px-4 py-2">Final deadline for Phase 1 applications</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Application Fee Payment Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">January 15, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">DEADLINE</td>
                          <td className="border border-gray-300 px-4 py-2">Payment must be completed by this date</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Late Registration</td>
                          <td className="border border-gray-300 px-4 py-2">Not Available</td>
                          <td className="border border-gray-300 px-4 py-2">N/A</td>
                          <td className="border border-gray-300 px-4 py-2">No late applications accepted</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Application Fees:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>General Category: ₹1,300 (increased by ₹100 from previous year)</li>
                      <li>JEE Main Percentile Application (without AEEE exam): ₹500</li>
                      <li>Phase 2 Exam Fee (if appearing separately): ₹600</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Slot Booking Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Opens</td>
                          <td className="border border-gray-300 px-4 py-2">January 10, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Candidates can select preferred exam date and time</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Window</td>
                          <td className="border border-gray-300 px-4 py-2">Jan 10 - Jan 25, 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">15-day booking window</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Selection Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">January 27, 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Last date to book exam slot</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Modification Allowed</td>
                          <td className="border border-gray-300 px-4 py-2">Until 2 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">Changes permitted within booking window</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Confirmation</td>
                          <td className="border border-gray-300 px-4 py-2">Immediately after booking</td>
                          <td className="border border-gray-300 px-4 py-2">Instant confirmation via email and SMS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Admit Card Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                          <td className="border border-gray-300 px-4 py-2">January 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Expected 3-4 days before exam</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Download Start Date</td>
                          <td className="border border-gray-300 px-4 py-2">January 25, 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Available on candidate login portal</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Portal</td>
                          <td className="border border-gray-300 px-4 py-2">aeee.amrita.edu</td>
                          <td className="border border-gray-300 px-4 py-2">Login with application number and password</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Information on Admit Card</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">Name, photo, signature, roll number, exam center, date, time, reporting time</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Validity</td>
                          <td className="border border-gray-300 px-4 py-2">Only for Phase 1</td>
                          <td className="border border-gray-300 px-4 py-2">Separate admit card for Phase 2</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Hard Copy Required</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                          <td className="border border-gray-300 px-4 py-2">Must carry printout to exam center</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">ID Proof Required</td>
                          <td className="border border-gray-300 px-4 py-2">Valid Photo ID</td>
                          <td className="border border-gray-300 px-4 py-2">Aadhar Card/PAN/Driving License/Passport</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Examination Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Shift Timings</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Start Date</td>
                          <td className="border border-gray-300 px-4 py-2">January 29, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">First day of Phase 1 examination</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Exam End Date</td>
                          <td className="border border-gray-300 px-4 py-2">February 1, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">Last day of Phase 1 examination</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Total Exam Days</td>
                          <td className="border border-gray-300 px-4 py-2">4 days</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">Jan 29, 30, 31, Feb 1</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Shift 1 Timing</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">8:30 AM - 11:00 AM</td>
                          <td className="border border-gray-300 px-4 py-2">Morning shift</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Shift 2 Timing</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">12:00 PM - 2:30 PM</td>
                          <td className="border border-gray-300 px-4 py-2">Afternoon shift</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Shift 3 Timing</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">3:30 PM - 6:00 PM</td>
                          <td className="border border-gray-300 px-4 py-2">Evening shift</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Reporting Time</td>
                          <td className="border border-gray-300 px-4 py-2">30 min before exam</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">Candidates must report early</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Gate Closure Time</td>
                          <td className="border border-gray-300 px-4 py-2">15 min before exam</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">Entry not allowed after this</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Total Shifts per Day</td>
                          <td className="border border-gray-300 px-4 py-2">3 shifts</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">12 total shifts across 4 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Exam Day Instructions:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Arrive at center 30 minutes before exam time</li>
                      <li>Carry admit card and valid photo ID proof</li>
                      <li>No electronic devices allowed (mobiles, calculators, smartwatches)</li>
                      <li>Rough sheets provided by exam center</li>
                      <li>Biometric verification required</li>
                      <li>Frisking and security check mandatory</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Result & Score Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Answer Key Release</td>
                          <td className="border border-gray-300 px-4 py-2">February 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Provisional answer key published</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Objection Window Opens</td>
                          <td className="border border-gray-300 px-4 py-2">Within 48 hours of answer key</td>
                          <td className="border border-gray-300 px-4 py-2">Candidates can challenge answers</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Objection Fee</td>
                          <td className="border border-gray-300 px-4 py-2">₹500 per question (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Refunded if objection accepted</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Objection Window Closes</td>
                          <td className="border border-gray-300 px-4 py-2">2-3 days after opening</td>
                          <td className="border border-gray-300 px-4 py-2">Limited time to submit challenges</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Final Answer Key</td>
                          <td className="border border-gray-300 px-4 py-2">3-4 days after objections</td>
                          <td className="border border-gray-300 px-4 py-2">After review of challenges</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                          <td className="border border-gray-300 px-4 py-2">February 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Expected 7-10 days after exam</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Score Card Download</td>
                          <td className="border border-gray-300 px-4 py-2">Same as result date</td>
                          <td className="border border-gray-300 px-4 py-2">Available on candidate portal</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Rank Card</td>
                          <td className="border border-gray-300 px-4 py-2">Along with result</td>
                          <td className="border border-gray-300 px-4 py-2">AEEE rank mentioned</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Validity of Score</td>
                          <td className="border border-gray-300 px-4 py-2">For 2026 admissions only</td>
                          <td className="border border-gray-300 px-4 py-2">Valid for current academic year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">PHASE 2 - Detailed Schedule (April-May 2026)</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Registration Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 2 Registration Opens</td>
                          <td className="border border-gray-300 px-4 py-2">February 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">After Phase 1 results</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Registration for Phase 2 Only</td>
                          <td className="border border-gray-300 px-4 py-2">Feb-April 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Fresh registrations accepted</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 2 Registration Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">April 20, 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Last date to register</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Phase 2 Exam Fee</td>
                          <td className="border border-gray-300 px-4 py-2">₹600 (for Phase 1 candidates)</td>
                          <td className="border border-gray-300 px-4 py-2">Additional fee if appearing again</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Fresh Candidate Fee</td>
                          <td className="border border-gray-300 px-4 py-2">₹1,300</td>
                          <td className="border border-gray-300 px-4 py-2">Full fee for new applicants</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Slot Booking Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Opens</td>
                          <td className="border border-gray-300 px-4 py-2">April 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Expected 10 days before exam</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Period</td>
                          <td className="border border-gray-300 px-4 py-2">April 15-23, 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">8-10 day window</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Booking Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">April 23, 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Last date to book</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Slot Modification</td>
                          <td className="border border-gray-300 px-4 py-2">Until 2 days before exam</td>
                          <td className="border border-gray-300 px-4 py-2">Limited time for changes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Admit Card Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Admit Card Release</td>
                          <td className="border border-gray-300 px-4 py-2">April 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">3-4 days before exam</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Download Availability</td>
                          <td className="border border-gray-300 px-4 py-2">April 22, 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">From candidate login</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Validity</td>
                          <td className="border border-gray-300 px-4 py-2">Phase 2 only</td>
                          <td className="border border-gray-300 px-4 py-2">Different from Phase 1 admit card</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Examination Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Shift Timings</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Start Date</td>
                          <td className="border border-gray-300 px-4 py-2">April 25, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">First day of Phase 2</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Exam End Date</td>
                          <td className="border border-gray-300 px-4 py-2">April 30, 2026</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">Last day of Phase 2</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Total Exam Days</td>
                          <td className="border border-gray-300 px-4 py-2">6 days</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">April 25, 26, 27, 28, 29, 30</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Shift 1 Timing</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">9:30 AM - 12:00 Noon</td>
                          <td className="border border-gray-300 px-4 py-2">Morning shift</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Shift 2 Timing</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">2:00 PM - 4:30 PM</td>
                          <td className="border border-gray-300 px-4 py-2">Afternoon shift</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Total Shifts</td>
                          <td className="border border-gray-300 px-4 py-2">2 shifts per day</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">12 total shifts</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Reporting Time</td>
                          <td className="border border-gray-300 px-4 py-2">30 min before exam</td>
                          <td className="border border-gray-300 px-4 py-2">-</td>
                          <td className="border border-gray-300 px-4 py-2">Early arrival mandatory</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Result Phase</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Official Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Answer Key Release</td>
                          <td className="border border-gray-300 px-4 py-2">May 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">Within 2-3 days of exam</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Objection Period</td>
                          <td className="border border-gray-300 px-4 py-2">2-3 days</td>
                          <td className="border border-gray-300 px-4 py-2">Challenge window</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Final Answer Key</td>
                          <td className="border border-gray-300 px-4 py-2">May 2026</td>
                          <td className="border border-gray-300 px-4 py-2">After objection review</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Result Declaration</td>
                          <td className="border border-gray-300 px-4 py-2">May 2026 (Tentative)</td>
                          <td className="border border-gray-300 px-4 py-2">7-10 days after exam</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Combined Merit List</td>
                          <td className="border border-gray-300 px-4 py-2">With Phase 2 results</td>
                          <td className="border border-gray-300 px-4 py-2">Best scores from both phases</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Counselling & Admission Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">COUNSELLING & ADMISSION PROCESS (May-July 2026)</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Pre-Counselling Activities</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Combined Merit List</td>
                          <td className="border border-gray-300 px-4 py-2">May 2026</td>
                          <td className="border border-gray-300 px-4 py-2">After both phase results</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Notification</td>
                          <td className="border border-gray-300 px-4 py-2">May 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Detailed process announced</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Registration Opens</td>
                          <td className="border border-gray-300 px-4 py-2">June 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Online registration begins</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Registration Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">June 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Last date to register</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Document Verification</td>
                          <td className="border border-gray-300 px-4 py-2">June 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Upload documents online</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Filling Opens</td>
                          <td className="border border-gray-300 px-4 py-2">June 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Select program and campus preferences</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Choice Locking Deadline</td>
                          <td className="border border-gray-300 px-4 py-2">June 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Final submission of choices</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Counselling Rounds</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Round 1 - Seat Allotment</td>
                          <td className="border border-gray-300 px-4 py-2">Late June 2026</td>
                          <td className="border border-gray-300 px-4 py-2">First allotment list</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Round 1 - Fee Payment</td>
                          <td className="border border-gray-300 px-4 py-2">3-4 days after allotment</td>
                          <td className="border border-gray-300 px-4 py-2">Accept seat and pay fees</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Round 1 - Reporting</td>
                          <td className="border border-gray-300 px-4 py-2">Within 7 days</td>
                          <td className="border border-gray-300 px-4 py-2">Report to campus/online</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Round 2 - Seat Allotment</td>
                          <td className="border border-gray-300 px-4 py-2">Early July 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Second allotment for vacant seats</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Round 2 - Fee Payment</td>
                          <td className="border border-gray-300 px-4 py-2">3-4 days after allotment</td>
                          <td className="border border-gray-300 px-4 py-2">Payment deadline</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Round 2 - Reporting</td>
                          <td className="border border-gray-300 px-4 py-2">Within 7 days</td>
                          <td className="border border-gray-300 px-4 py-2">Campus reporting</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Spot Round</td>
                          <td className="border border-gray-300 px-4 py-2">Mid July 2026</td>
                          <td className="border border-gray-300 px-4 py-2">For remaining vacant seats</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Spot Round Registration</td>
                          <td className="border border-gray-300 px-4 py-2">2 days</td>
                          <td className="border border-gray-300 px-4 py-2">Quick registration window</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Spot Counselling</td>
                          <td className="border border-gray-300 px-4 py-2">1 day</td>
                          <td className="border border-gray-300 px-4 py-2">Physical/online spot round</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Final Seat Confirmation</td>
                          <td className="border border-gray-300 px-4 py-2">Late July 2026</td>
                          <td className="border border-gray-300 px-4 py-2">All admissions finalized</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Fee Payment & Joining</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Dates</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Acceptance Fee</td>
                          <td className="border border-gray-300 px-4 py-2">Within 3 days of allotment</td>
                          <td className="border border-gray-300 px-4 py-2">Partial payment to block seat</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Full Fee Payment</td>
                          <td className="border border-gray-300 px-4 py-2">Before reporting</td>
                          <td className="border border-gray-300 px-4 py-2">Complete tuition payment</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Document Submission</td>
                          <td className="border border-gray-300 px-4 py-2">During reporting</td>
                          <td className="border border-gray-300 px-4 py-2">Original certificates required</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Physical Reporting</td>
                          <td className="border border-gray-300 px-4 py-2">July 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Report to allotted campus</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-semibold">Academic Session Starts</td>
                          <td className="border border-gray-300 px-4 py-2">August 2026</td>
                          <td className="border border-gray-300 px-4 py-2">Classes commence</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* JEE Main Route */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">JEE Main Route (Alternative Admission Path)</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Event</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Tentative Dates</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">JEE Main Application</td>
                      <td className="border border-gray-300 px-4 py-2">₹500 only</td>
                      <td className="border border-gray-300 px-4 py-2">No need to appear for AEEE</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">JEE Main Score Submission</td>
                      <td className="border border-gray-300 px-4 py-2">After JEE Main results</td>
                      <td className="border border-gray-300 px-4 py-2">Submit percentile for admission</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Seat Allocation Basis</td>
                      <td className="border border-gray-300 px-4 py-2">30% seats reserved</td>
                      <td className="border border-gray-300 px-4 py-2">Via JEE Main ranks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Counselling Process</td>
                      <td className="border border-gray-300 px-4 py-2">Same as AEEE</td>
                      <td className="border border-gray-300 px-4 py-2">Combined merit list</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Notes & Guidelines */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Important Notes & Guidelines</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Exam Pattern Details</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><span className="font-semibold">Subjects:</span> Physics (20 Q), Chemistry (20 Q), Mathematics (20 Q), English (20 Q), Quantitative Aptitude (20 Q)</li>
                    <li><span className="font-semibold">Syllabus:</span> Based on Class 11 and 12 CBSE curriculum</li>
                    <li><span className="font-semibold">Question Type:</span> Multiple Choice Questions only</li>
                    <li><span className="font-semibold">Options per Question:</span> 4 options (A, B, C, D)</li>
                    <li><span className="font-semibold">Marking Scheme:</span> +3 for correct, -1 for incorrect, 0 for unattempted</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><span className="font-semibold">Academic Qualification:</span> Class 12 passed/appearing with PCM</li>
                    <li><span className="font-semibold">Minimum Percentage:</span> 60% aggregate in PCM (50% in each subject)</li>
                    <li><span className="font-semibold">Age Criteria:</span> Date of birth between July 1, 2004 and June 30, 2010</li>
                    <li><span className="font-semibold">Nationality:</span> Indian nationals and NRIs/Foreign nationals eligible</li>
                    <li><span className="font-semibold">Attempts:</span> No limit on number of attempts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Campuses Participating</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li><span className="font-semibold">Amritapuri Campus</span> (Kollam, Kerala)</li>
                    <li><span className="font-semibold">Bangalore Campus</span> (Karnataka)</li>
                    <li><span className="font-semibold">Coimbatore Campus</span> (Tamil Nadu)</li>
                    <li><span className="font-semibold">Chennai Campus</span> (Tamil Nadu)</li>
                    <li><span className="font-semibold">Amaravati Campus</span> (Andhra Pradesh)</li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Programs Offered (Through AEEE)</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>B.Tech Computer Science & Engineering</li>
                    <li>B.Tech Electronics & Communication Engineering</li>
                    <li>B.Tech Mechanical Engineering</li>
                    <li>B.Tech Civil Engineering</li>
                    <li>B.Tech Chemical Engineering</li>
                    <li>B.Tech Aerospace Engineering</li>
                    <li>And 15+ other specialized engineering branches</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Seat Distribution</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><span className="font-semibold">AEEE Quota:</span> 70% of total seats</li>
                    <li><span className="font-semibold">JEE Main Quota:</span> 30% of total seats</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Website & Helpline</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><span className="font-semibold">Official Website:</span> aeee.amrita.edu</li>
                    <li><span className="font-semibold">Helpline Number:</span> Available on official website</li>
                    <li><span className="font-semibold">Email Support:</span> admissions@amrita.edu</li>
                    <li><span className="font-semibold">Candidate Portal:</span> Login at aeee.amrita.edu</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Critical Reminders</h4>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>All dates are tentative except Phase 1 exam dates (Jan 29-Feb 1) and Phase 2 exam dates (April 25-30)</li>
                    <li>Candidates must check official website regularly for updates</li>
                    <li>Multiple exam sessions available across 4-6 days per phase</li>
                    <li>Both phases not compulsory; best score considered</li>
                    <li>Admit cards downloadable only from candidate login</li>
                    <li>No postal communication for admit cards/results</li>
                    <li>Counselling is online; physical reporting only after seat allotment</li>
                    <li>Document verification mandatory before admission</li>
                    <li>Fee payment must be completed within deadline to secure seat</li>
                    <li>Original certificates required at time of joining</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 Eligibility Criteria - Complete Guide</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Understanding Eligibility: Why It Matters</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Before you begin your journey toward securing admission to one of Amrita Vishwa Vidyapeetham's prestigious engineering campuses, understanding the eligibility criteria is absolutely crucial. The Amrita Entrance Examination - Engineering (AEEE) 2026 has specific requirements that every aspiring candidate must fulfill. Meeting these criteria isn't just a formality—it's your gateway to participating in one of India's most respected university-level engineering entrance examinations. If you don't meet even one criterion, your application could be rejected, and you might miss out on this excellent opportunity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The eligibility criteria for AEEE 2026 have been carefully designed by Amrita University to ensure that only academically prepared and age-appropriate candidates apply for their B.Tech programs. This year, the university has made some revisions to the criteria, so it's essential that you read every detail carefully, even if you've checked the requirements in previous years.
                </p>
              </div>
            </div>

            {/* Age Limit Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">1. AGE LIMIT CRITERIA - Detailed Breakdown</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Official Age Requirements</h4>
                  <div className="space-y-3 text-gray-700">
                    <p><span className="font-semibold">Minimum Age Requirement:</span></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Candidates must have been born <strong>on or after July 1, 2005</strong></li>
                      <li>This means if your date of birth is July 1, 2005, or any date after that (July 2, 2005; July 3, 2005, etc.), you are eligible</li>
                    </ul>
                    
                    <p className="mt-4"><span className="font-semibold">Maximum Age Requirement:</span></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Candidates must have been born <strong>on or before June 30, 2010</strong></li>
                      <li>If your date of birth is June 30, 2010, or any date before that, you meet the upper age limit</li>
                      <li>This effectively means candidates can be maximum 21 years old (approximately) at the time of admission</li>
                    </ul>
                    
                    <p className="mt-4"><span className="font-semibold">Age Eligibility Window:</span></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Eligible Birth Date Range: <strong>July 1, 2005 to June 30, 2010</strong></li>
                      <li>This creates a 5-year eligibility window</li>
                      <li>Candidates born in 2005, 2006, 2007, 2008, 2009, and 2010 (until June 30) are eligible</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Why This Age Limit?</h4>
                  <p className="text-gray-700 mb-3">The age restriction ensures that:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li><span className="font-semibold">Academic Readiness:</span> Students are at an appropriate educational stage for B.Tech programs</li>
                    <li><span className="font-semibold">Peer Group Consistency:</span> Maintains relatively similar age groups in classes for better learning dynamics</li>
                    <li><span className="font-semibold">Career Timeline:</span> Aligns with typical educational progression in India (10th at 16, 12th at 18, B.Tech completion at 22)</li>
                    <li><span className="font-semibold">Regulatory Compliance:</span> Meets AICTE (All India Council for Technical Education) guidelines for technical education</li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Important Age-Related Points</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Document Verification:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Your date of birth will be verified from your Class 10th board certificate</li>
                        <li>The date mentioned in your 10th certificate is considered final and binding</li>
                        <li>No requests for age relaxation or date corrections will be entertained</li>
                        <li>Make sure the date of birth you enter in the AEEE application matches your 10th certificate exactly</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">For Students Born on Boundary Dates:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Born on July 1, 2005? You're <strong>eligible</strong> (inclusive date)</li>
                        <li>Born on June 30, 2005? You're <strong>not eligible</strong> (one day before minimum)</li>
                        <li>Born on June 30, 2010? You're <strong>eligible</strong> (inclusive date)</li>
                        <li>Born on July 1, 2010? You're <strong>not eligible</strong> (one day after maximum)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Age Categories and Examples</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Birth Year</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Typical Class in 2025-26</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Eligibility Status</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2005 (July onwards)</td>
                          <td className="border border-gray-300 px-4 py-2">Passed 12th in 2023/2024</td>
                          <td className="border border-gray-300 px-4 py-2">✅ Eligible</td>
                          <td className="border border-gray-300 px-4 py-2">May have taken gap year(s)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2006</td>
                          <td className="border border-gray-300 px-4 py-2">Passed 12th in 2024</td>
                          <td className="border border-gray-300 px-4 py-2">✅ Eligible</td>
                          <td className="border border-gray-300 px-4 py-2">Fresh 12th pass students</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2007</td>
                          <td className="border border-gray-300 px-4 py-2">Appearing for 12th in 2026</td>
                          <td className="border border-gray-300 px-4 py-2">✅ Eligible</td>
                          <td className="border border-gray-300 px-4 py-2">Current 12th standard students</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2008</td>
                          <td className="border border-gray-300 px-4 py-2">Class 11 in 2025-26</td>
                          <td className="border border-gray-300 px-4 py-2">✅ Eligible</td>
                          <td className="border border-gray-300 px-4 py-2">Early/advanced learners only</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2010 (till June 30)</td>
                          <td className="border border-gray-300 px-4 py-2">Class 9 in 2025-26</td>
                          <td className="border border-gray-300 px-4 py-2">✅ Eligible</td>
                          <td className="border border-gray-300 px-4 py-2">Very rare, child prodigies</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2010 (from July 1)</td>
                          <td className="border border-gray-300 px-4 py-2">Class 9 in 2025-26</td>
                          <td className="border border-gray-300 px-4 py-2">❌ Not Eligible</td>
                          <td className="border border-gray-300 px-4 py-2">Too young per criteria</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">2005 (before July)</td>
                          <td className="border border-gray-300 px-4 py-2">Passed 12th in 2022/2023</td>
                          <td className="border border-gray-300 px-4 py-2">❌ Not Eligible</td>
                          <td className="border border-gray-300 px-4 py-2">Exceeds age limit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Qualification */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">2. EDUCATIONAL QUALIFICATION - Comprehensive Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Basic Educational Requirement</h4>
                  <p className="text-gray-700 mb-3 font-semibold">Qualifying Examination:</p>
                  <p className="text-gray-700 mb-3">Candidates must have <strong>passed</strong> or must be <strong>appearing</strong> in the following examinations:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li>10+2 Examination (Class 12th)</li>
                    <li>Intermediate Examination (in states following intermediate system)</li>
                    <li>Pre-University Course (PUC) (in Karnataka and some other states)</li>
                    <li>Higher Secondary Certificate (HSC) (in Maharashtra, Gujarat, etc.)</li>
                    <li>Senior Secondary Examination conducted by any recognized board in India</li>
                    <li>Any equivalent examination recognized by the Association of Indian Universities (AIU)</li>
                  </ol>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2 font-semibold">Recognized Boards Include:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Central Board of Secondary Education (CBSE)</li>
                      <li>Indian Certificate of Secondary Education (ICSE/ISC)</li>
                      <li>Council for the Indian School Certificate Examinations (CISCE)</li>
                      <li>All State Boards (Maharashtra, Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana, West Bengal, Uttar Pradesh, Bihar, Rajasthan, Madhya Pradesh, Gujarat, Odisha, Punjab, Haryana, Jharkhand, Chhattisgarh, Uttarakhand, Himachal Pradesh, Assam, and all other states)</li>
                      <li>National Institute of Open Schooling (NIOS)</li>
                      <li>International Boards (if AIU recognized): Cambridge (IGCSE/A Levels), IB (International Baccalaureate), etc.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Compulsory Subjects - The PCM Mandate</h4>
                  <p className="text-gray-700 mb-3 font-semibold">Three Compulsory Subjects:</p>
                  <p className="text-gray-700 mb-3">For B.Tech programs through AEEE, you <strong>must</strong> have studied the following three subjects in your 10+2:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Physics</strong> (Compulsory)</li>
                    <li><strong>Chemistry</strong> (Compulsory)</li>
                    <li><strong>Mathematics</strong> (Compulsory)</li>
                  </ol>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2 font-semibold">Subject Combinations Allowed:</p>
                    <p className="text-gray-700 mb-2">✅ <strong>Eligible Combinations:</strong></p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Physics + Chemistry + Mathematics + English (Classic PCM combination)</li>
                      <li>Physics + Chemistry + Mathematics + Computer Science + English (PCMCS)</li>
                      <li>Physics + Chemistry + Mathematics + Biology + English (PCMB - allowed for engineering!)</li>
                      <li>Physics + Chemistry + Mathematics + Economics + English</li>
                      <li>Physics + Chemistry + Mathematics + Any other elective + English</li>
                    </ul>
                    
                    <p className="text-gray-700 mt-3 mb-2">❌ <strong>Ineligible Combinations:</strong></p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Physics + Chemistry + Biology (PCB without Mathematics) - <strong>Not eligible</strong></li>
                      <li>Physics + Mathematics + Computer Science (without Chemistry) - <strong>Not eligible</strong></li>
                      <li>Chemistry + Mathematics + Biology (without Physics) - <strong>Not eligible</strong></li>
                      <li>Commerce stream (without PCM) - <strong>Not eligible</strong></li>
                      <li>Arts stream (without PCM) - <strong>Not eligible</strong></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Minimum Marks Requirement - Critical Threshold</h4>
                  <p className="text-gray-700 mb-3 font-semibold">Aggregate Marks Requirement:</p>
                  <p className="text-gray-700 mb-3">Candidates must score a <strong>minimum of 60% aggregate</strong> marks in the three core subjects:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Physics + Chemistry + Mathematics combined</li>
                    <li>Calculate: (Physics marks + Chemistry marks + Mathematics marks) ÷ 3 = Should be ≥ 60%</li>
                  </ul>
                  
                  <p className="text-gray-700 mt-4 mb-3 font-semibold">Individual Subject Requirement:</p>
                  <p className="text-gray-700 mb-3">Additionally, candidates must secure <strong>not less than 50% marks in EACH</strong> of the three subjects:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Physics: Minimum 50% marks</li>
                    <li>Chemistry: Minimum 50% marks</li>
                    <li>Mathematics: Minimum 50% marks</li>
                  </ul>
                  
                  <p className="text-gray-700 mt-4 mb-3 font-semibold">This is a DUAL requirement - Both conditions must be satisfied:</p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-2">Example 1: ELIGIBLE</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>Physics: 70%, Chemistry: 65%, Mathematics: 75%</li>
                        <li>Aggregate: (70+65+75)/3 = 70% ✅ (≥60%)</li>
                        <li>Individual: All three ≥50% ✅</li>
                        <li><strong>Result: Eligible</strong></li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-2">Example 2: NOT ELIGIBLE (Low aggregate)</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>Physics: 55%, Chemistry: 52%, Mathematics: 58%</li>
                        <li>Aggregate: (55+52+58)/3 = 55% ❌ (&lt;60%)</li>
                        <li>Individual: All three ≥50% ✅</li>
                        <li><strong>Result: Not Eligible</strong> (aggregate below 60%)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-2">Example 3: NOT ELIGIBLE (One subject below 50%)</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>Physics: 85%, Chemistry: 48%, Mathematics: 90%</li>
                        <li>Aggregate: (85+48+90)/3 = 74.33% ✅ (≥60%)</li>
                        <li>Individual: Chemistry is 48% ❌ (&lt;50%)</li>
                        <li><strong>Result: Not Eligible</strong> (Chemistry below 50%)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-2">Example 4: BORDERLINE CASE</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>Physics: 50%, Chemistry: 70%, Mathematics: 60%</li>
                        <li>Aggregate: (50+70+60)/3 = 60% ✅ (exactly 60%)</li>
                        <li>Individual: All three ≥50% ✅ (Physics exactly 50%)</li>
                        <li><strong>Result: Eligible</strong> (both conditions just met)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">English Language Requirement</h4>
                  <p className="text-gray-700 mb-3 font-semibold">Mandatory English Proficiency:</p>
                  <p className="text-gray-700 mb-3">Candidates must have studied <strong>English as a subject</strong> in:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Either Class 10th (SSLC/Matriculation)</li>
                    <li>Or Class 12th (10+2/Intermediate/HSC/PUC)</li>
                    <li>Or in both standards</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">For Students Appearing in 12th Examination (2026)</h4>
                  <p className="text-gray-700 mb-3 font-semibold">Current 12th Standard Students:</p>
                  <p className="text-gray-700 mb-3">If you're <strong>currently studying</strong> in Class 12 and will appear for your board exams in 2026:</p>
                  <p className="text-gray-700 mb-3">✅ <strong>You are ELIGIBLE to apply for AEEE 2026</strong></p>
                  
                  <p className="text-gray-700 mb-3 font-semibold">Important Conditions:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Provisional Admission:</strong> You'll receive provisional/conditional admission</li>
                    <li><strong>Marks Submission Deadline:</strong> You must submit your 12th mark sheet by the specified last date (typically July-August 2026)</li>
                    <li><strong>Meeting Criteria:</strong> Your 12th final marks must meet the 60% aggregate + 50% individual subject requirement</li>
                    <li><strong>Admission Confirmation:</strong> Your admission becomes final only after mark sheet verification</li>
                    <li><strong>Risk Factor:</strong> If you don't achieve required marks, your admission will be cancelled</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Nationality & Category */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">3. NATIONALITY & CATEGORY - Detailed Classification</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Indian Nationals</h4>
                  <p className="text-gray-700 mb-3">All Indian citizens are eligible to apply for AEEE 2026, regardless of:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>State of residence/domicile</li>
                    <li>Region (North, South, East, West, Central, Northeast India)</li>
                    <li>Urban or rural background</li>
                    <li>Economic background (fee waivers/scholarships available)</li>
                  </ul>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2 font-semibold">Reservation Categories for Indian Nationals:</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Reservation</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirements</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">General Category</td>
                            <td className="border border-gray-300 px-4 py-2">Open to all</td>
                            <td className="border border-gray-300 px-4 py-2">No caste/community restrictions</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Scheduled Caste (SC)</td>
                            <td className="border border-gray-300 px-4 py-2">15% seats</td>
                            <td className="border border-gray-300 px-4 py-2">Valid SC certificate required</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Scheduled Tribe (ST)</td>
                            <td className="border border-gray-300 px-4 py-2">7.5% seats</td>
                            <td className="border border-gray-300 px-4 py-2">Valid ST certificate required</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">OBC (Non-Creamy Layer)</td>
                            <td className="border border-gray-300 px-4 py-2">As per Central Government</td>
                            <td className="border border-gray-300 px-4 py-2">Valid OBC-NCL certificate (current year), Income &lt;₹8 lakhs</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">EWS</td>
                            <td className="border border-gray-300 px-4 py-2">10% seats</td>
                            <td className="border border-gray-300 px-4 py-2">Income &lt;₹8 lakhs, Valid EWS certificate</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">PwD</td>
                            <td className="border border-gray-300 px-4 py-2">As per Act</td>
                            <td className="border border-gray-300 px-4 py-2">Minimum 40% disability, Valid certificate</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">NRI (Non-Resident Indian) Category</h4>
                  <p className="text-gray-700 mb-3"><strong>Eligibility:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Students who are NRIs themselves</li>
                    <li>Children of NRIs (at least one parent must be NRI)</li>
                  </ul>
                  <p className="text-gray-700 mt-3 mb-3"><strong>Separate NRI Quota:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Dedicated seats reserved for NRI candidates</li>
                    <li>May have different fee structure (higher than domestic)</li>
                    <li>Separate merit list and counselling process</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">PIO (Person of Indian Origin) & Foreign Nationals</h4>
                  <p className="text-gray-700 mb-3">PIO/Foreign Nationals can apply under NRI quota or foreign nationals quota. Must meet same academic criteria (PCM with 60% aggregate).</p>
                </div>
              </div>
            </div>

            {/* JEE Main Route */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">4. JEE MAIN ROUTE - Alternative Admission Path</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">JEE Main Eligibility for Amrita Admission</h4>
                  <p className="text-gray-700 mb-3"><strong>Direct Admission through JEE Main:</strong></p>
                  <p className="text-gray-700 mb-3">Candidates who have appeared for JEE Main 2026 can seek admission to Amrita University B.Tech programs <strong>without appearing for AEEE</strong>.</p>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2 font-semibold">How It Works:</p>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>30% Seats Reserved:</strong> Approximately 30% of total B.Tech seats at Amrita are filled through JEE Main scores</li>
                      <li><strong>No AEEE Exam Required:</strong> You don't need to appear for AEEE examination</li>
                      <li><strong>Lower Application Fee:</strong> Pay only ₹500 (compared to ₹1,300 for AEEE exam registration)</li>
                      <li><strong>Same Campuses:</strong> Eligible for all Amrita campuses</li>
                      <li><strong>Same Programs:</strong> All B.Tech specializations available</li>
                    </ol>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2 font-semibold">Eligibility Criteria for JEE Main Route:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li><strong>Age Limit:</strong> Same as AEEE: Birth date between July 1, 2005 and June 30, 2010</li>
                      <li><strong>Academic Qualification:</strong> Same 60% aggregate in PCM, Same 50% minimum in each subject</li>
                      <li><strong>JEE Main Requirement:</strong> Must have appeared for JEE Main 2026, Must have valid JEE Main percentile score</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Dual Route Strategy - Best Practice</h4>
                  <p className="text-gray-700 mb-2">Many smart students apply through both AEEE and JEE Main to maximize chances:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li><strong>Two shots:</strong> Performance considered from both exams</li>
                    <li><strong>Best Score Counts:</strong> Amrita considers your highest score/rank</li>
                    <li><strong>Flexibility:</strong> Access to both quota seats (AEEE quota 70% + JEE quota 30%)</li>
                    <li><strong>Combined Application Fee:</strong> AEEE Registration ₹1,300 + JEE Main Score Submission ₹500 = Total ₹1,800</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Cases */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">5. SPECIAL CASES & EXEMPTIONS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Open School Students (NIOS)</h4>
                  <p className="text-gray-700 mb-2">Students who passed Class 12 from National Institute of Open Schooling:</p>
                  <p className="text-gray-700 mb-2">✅ <strong>Fully Eligible</strong> if:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>NIOS certificate with PCM subjects</li>
                    <li>Meet 60% aggregate + 50% individual subject criteria</li>
                    <li>Age criteria met</li>
                    <li>English studied in 10th or 12th</li>
                  </ul>
                  <p className="text-gray-700 mt-2"><strong>No Discrimination:</strong> NIOS students treated at par with regular board students</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">International Board Students</h4>
                  <p className="text-gray-700 mb-2">For Cambridge (IGCSE/A Levels), IB (International Baccalaureate), American High School:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Must have AIU equivalence certificate</li>
                    <li>Must show Physics, Chemistry, Mathematics at appropriate level</li>
                    <li>Score conversion to percentage required (should meet 60% equivalent threshold)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">State Board vs CBSE/ICSE</h4>
                  <p className="text-gray-700 mb-2"><strong>Equal Treatment:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>No preference given to any particular board</li>
                    <li>Students from all recognized boards compete on equal footing</li>
                    <li>Marks normalization not done (unlike JEE Main)</li>
                    <li>Your board marks taken as-is for eligibility check</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Eligibility Verification */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">6. HOW TO VERIFY YOUR ELIGIBILITY - Self-Check</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Step-by-Step Eligibility Verification</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Step 1: Check Your Date of Birth</p>
                      <p className="text-gray-700 ml-4">Get your Class 10th certificate. Check: Is it between July 1, 2005 and June 30, 2010? If YES → Proceed to Step 2. If NO → Unfortunately not eligible.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Step 2: Check Your Subjects</p>
                      <p className="text-gray-700 ml-4">Verify you have: Physics ✓ Chemistry ✓ Mathematics ✓. If YES → Proceed to Step 3. If NO → Not eligible.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Step 3: Calculate PCM Aggregate</p>
                      <p className="text-gray-700 ml-4">Add Physics + Chemistry + Mathematics marks, divide by 3. Is aggregate ≥ 60%? If YES → Proceed to Step 4. If NO → Not eligible.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Step 4: Check Individual Subject Minimums</p>
                      <p className="text-gray-700 ml-4">Are ALL three (Physics, Chemistry, Mathematics) ≥ 50%? If YES → Proceed to Step 5. If NO → Not eligible.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Step 5: English Verification</p>
                      <p className="text-gray-700 ml-4">Is English listed as a subject in 10th or 12th? If YES → <strong>CONGRATULATIONS! You are ELIGIBLE for AEEE 2026</strong></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Eligibility Calculator</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Criteria</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Requirement</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Your Status</th>
                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">✓ or ✗</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Date of Birth</td>
                          <td className="border border-gray-300 px-4 py-2">July 1, 2005 - June 30, 2010</td>
                          <td className="border border-gray-300 px-4 py-2">__________</td>
                          <td className="border border-gray-300 px-4 py-2">___</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Passed/Appearing 12th</td>
                          <td className="border border-gray-300 px-4 py-2">Yes</td>
                          <td className="border border-gray-300 px-4 py-2">__________</td>
                          <td className="border border-gray-300 px-4 py-2">___</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">PCM Aggregate</td>
                          <td className="border border-gray-300 px-4 py-2">≥60%</td>
                          <td className="border border-gray-300 px-4 py-2">__________%</td>
                          <td className="border border-gray-300 px-4 py-2">___</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Each Subject (P/C/M)</td>
                          <td className="border border-gray-300 px-4 py-2">≥50%</td>
                          <td className="border border-gray-300 px-4 py-2">__________</td>
                          <td className="border border-gray-300 px-4 py-2">___</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">English Studied</td>
                          <td className="border border-gray-300 px-4 py-2">Yes in 10th or 12th</td>
                          <td className="border border-gray-300 px-4 py-2">__________</td>
                          <td className="border border-gray-300 px-4 py-2">___</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-3"><strong>If ALL criteria show ✓ → You are ELIGIBLE!</strong></p>
                  <p className="text-gray-700"><strong>If ANY criterion shows ✗ → You are NOT ELIGIBLE</strong></p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">7. FREQUENTLY ASKED QUESTIONS (FAQs)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q1: I have 59.8% aggregate in PCM. Am I eligible?</p>
                  <p className="text-gray-700 ml-4">A: Unfortunately, NO. The requirement is minimum 60%. Even 59.99% won't qualify. You must have 60.00% or more.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q2: I have 65% aggregate but Chemistry is 49%. Am I eligible?</p>
                  <p className="text-gray-700 ml-4">A: NO. Both conditions must be met: (1) 60%+ aggregate AND (2) 50%+ in each subject. You fail the second condition.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q3: Can I apply if I passed 12th in 2024 and took a gap year?</p>
                  <p className="text-gray-700 ml-4">A: YES, if your date of birth is July 1, 2005 or later. Gap year is fine as long as age criteria is met.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q4: I'm from Bihar State Board. Am I eligible?</p>
                  <p className="text-gray-700 ml-4">A: YES, all state boards are accepted. As long as you meet marks and subject criteria, your board doesn't matter.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q5: I studied PCM + Biology. Am I eligible for engineering?</p>
                  <p className="text-gray-700 ml-4">A: YES! PCMB students are eligible. Having Biology as an additional subject doesn't disqualify you.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q6: I'm currently in 12th. Can I apply now or wait for results?</p>
                  <p className="text-gray-700 ml-4">A: Apply NOW! Don't wait for 12th results. You can apply while appearing for 12th exams.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q7: Is JEE Main score mandatory?</p>
                  <p className="text-gray-700 ml-4">A: NO. JEE Main is an alternative route. You can apply through AEEE without JEE Main. But having JEE Main gives you additional options.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Q8: Can I apply for multiple branches?</p>
                  <p className="text-gray-700 ml-4">A: You don't apply for specific branches. You apply for B.Tech program. Branch selection happens during counselling based on your rank.</p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">CONCLUSION</h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Meeting the AEEE 2026 eligibility criteria is your first step toward joining Amrita Vishwa Vidyapeetham's prestigious B.Tech programs. This comprehensive guide has covered every aspect of eligibility—from age limits to educational qualifications, from documentation to special cases.
              </p>
              
              <div className="mt-4">
                <p className="font-semibold text-gray-800 mb-2">Key Takeaways:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li><strong>Age:</strong> July 1, 2005 to June 30, 2010 (birth date)</li>
                  <li><strong>Qualification:</strong> 12th passed/appearing with PCM</li>
                  <li><strong>Marks:</strong> 60% aggregate + 50% in each subject (PCM)</li>
                  <li><strong>English:</strong> Must have studied in 10th or 12th</li>
                  <li><strong>Multiple routes:</strong> AEEE exam or JEE Main scores</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">If you're eligible—APPLY NOW!</p>
                <p className="text-gray-700 mb-2">Don't wait until the last minute. The application process is online, and the sooner you apply, the better.</p>
                <p className="text-gray-700 mb-2">If you have doubts about your eligibility, contact:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>AEEE Helpline (available on official website)</li>
                  <li>Email: admissions@amrita.edu</li>
                  <li>Visit: Nearest Amrita campus admissions office</li>
                </ul>
                <p className="text-gray-700 mt-2"><strong>Remember:</strong> Eligibility opens the door, but your AEEE performance determines which branch and campus you get. So once you've confirmed your eligibility, focus entirely on exam preparation.</p>
              </div>
            </div>
          </div>
        );

      case 'application':
        return (
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 Application Process - Complete Step-by-Step Guide</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction: Your First Step Toward Amrita University</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Congratulations on deciding to apply for AEEE 2026! The application process is your official entry point into the journey toward becoming an Amrita University B.Tech student. While the process might seem overwhelming at first, this comprehensive guide will walk you through every single step, every field you need to fill, every document you need to upload, and every payment option available. By the time you finish reading this guide, you'll know exactly what to do, when to do it, and how to avoid common mistakes that could delay or jeopardize your application.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The AEEE 2026 application is <strong>100% online</strong>—there's no offline application, no physical form submission, and no need to visit any Amrita campus to apply. Everything happens on your computer or mobile device through Amrita's official portal. This makes the process convenient, fast, and accessible from anywhere in India or abroad. However, it also means you need to be careful about accuracy, as once submitted, making corrections can be difficult.
                </p>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-800 font-semibold">Important First Note:</p>
                  <p className="text-gray-700">The AEEE 2026 registration is <strong>LIVE</strong> as of October 29, 2025. Don't delay—the earlier you apply, the better your chances of getting your preferred exam slot and city!</p>
                </div>
              </div>
            </div>

            {/* Pre-Application Preparation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">BEFORE YOU BEGIN: Pre-Application Preparation</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">1. System Requirements Check</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-semibold">Computer/Laptop Requirements:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li><strong>Operating System:</strong> Windows 7 or higher, MacOS 10.10 or higher, or any Linux distribution</li>
                      <li><strong>Browser:</strong> Latest version of Google Chrome (recommended), Mozilla Firefox, Safari, or Microsoft Edge</li>
                      <li><strong>Internet Connection:</strong> Stable broadband or mobile data (minimum 2 Mbps recommended)</li>
                      <li><strong>Screen Resolution:</strong> Minimum 1024 x 768 pixels</li>
                      <li><strong>JavaScript:</strong> Must be enabled in browser</li>
                      <li><strong>Pop-up Blocker:</strong> Disable for aeee.amrita.edu domain</li>
                      <li><strong>Cookies:</strong> Enable cookies for the website</li>
                    </ul>
                    
                    <p className="text-gray-700 mt-4 font-semibold">Mobile Device Requirements:</p>
                    <p className="text-gray-700 ml-4">While you CAN apply from mobile, a computer/laptop is STRONGLY recommended for better document upload experience and fewer compatibility issues.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">2. Gather Required Documents BEFORE Starting</h4>
                  <p className="text-gray-700 mb-3">Don't start filling the form until you have ALL these ready:</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">✅ Recent Passport-Size Photograph (Digital)</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Taken within last 3 months, colored photograph</li>
                        <li>Clear, frontal face view, white or light-colored background</li>
                        <li><strong>File specifications:</strong> Format: JPG or JPEG only | File size: 10 KB to 50 KB | Dimensions: 200 x 230 pixels</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">✅ Scanned Signature (Digital)</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Sign with black ink on white paper</li>
                        <li><strong>File specifications:</strong> Format: JPG or JPEG | File size: 5 KB to 20 KB | Dimensions: 140 x 60 pixels</li>
                        <li><strong>Critical:</strong> This signature must match the signature on your admit card and all future documents</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">✅ Class 10th Mark Sheet/Certificate (Digital Copy)</p>
                      <p className="text-gray-700 ml-4">For date of birth verification. Format: PDF or JPG (under 500 KB)</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">✅ Class 12th Mark Sheet (If Available)</p>
                      <p className="text-gray-700 ml-4">Should show Physics, Chemistry, Mathematics marks. Format: PDF or JPG (under 500 KB)</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">✅ Category Certificate (If Applicable)</p>
                      <p className="text-gray-700 ml-4">SC/ST/OBC-NCL/EWS/PwD certificate in prescribed format. Format: PDF (under 500 KB)</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">✅ Aadhaar Card (Digital Copy)</p>
                      <p className="text-gray-700 ml-4">Both sides scanned or photographed. Format: PDF or JPG</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">✅ JEE Main Scorecard (If Applicable)</p>
                      <p className="text-gray-700 ml-4">Only needed if applying through JEE Main route. Format: PDF</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">3. Create a Dedicated Email ID (Recommended)</h4>
                  <p className="text-gray-700 mb-2">All AEEE communication comes via email. Create a dedicated email account for admission-related emails to stay organized and avoid missing important notifications.</p>
                  <p className="text-gray-700"><strong>Email Setup:</strong> Create Gmail account or use existing but dedicated email. Ensure it's an email you check DAILY and add aeee.amrita.edu to safe senders list.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">4. Mobile Number Preparation</h4>
                  <p className="text-gray-700 mb-2"><strong>Critical Requirements:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Must be YOUR mobile number (or parent's if shared)</li>
                    <li>Must be active for next 12 months</li>
                    <li>Should receive SMS reliably</li>
                    <li>You'll receive OTP and all SMS alerts on this number</li>
                    <li>Cannot be changed easily later</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">5. Decide Your Strategy</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">Option 1: AEEE Only</p>
                      <p className="text-gray-700 ml-4">Will appear for AEEE exam (Phase 1 and/or Phase 2). Application Fee: ₹1,300</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">Option 2: JEE Main Only</p>
                      <p className="text-gray-700 ml-4">Will submit JEE Main percentile (not appear for AEEE). Application Fee: ₹500</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">Option 3: BOTH (Recommended)</p>
                      <p className="text-gray-700 ml-4">Will appear for AEEE + submit JEE Main score. Application Fee: ₹1,800 total. Amrita will consider your BEST performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Application Portal */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">THE OFFICIAL APPLICATION PORTAL</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Website Details</h4>
                  <p className="text-gray-700 mb-2"><strong>Primary Application Portal:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li><strong>URL:</strong> https://aeee.amrita.edu</li>
                    <li><strong>Alternative:</strong> https://www.amrita.edu/admissions/engineering/</li>
                    <li><strong>Portal Name:</strong> Amrita Online Application Portal (AOAP)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-gray-800 font-semibold mb-2">Beware of Fake Websites:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>❌ Avoid websites with URLs like: amrita-edu.com, aeee-admission.com, amrita-university.org</li>
                    <li>❌ Don't pay on any website other than official aeee.amrita.edu</li>
                    <li>✅ Always verify the URL has the green padlock (HTTPS secure)</li>
                    <li>✅ Bookmark the official page for easy access</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step-by-Step Application Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">STEP-BY-STEP APPLICATION PROCESS</h3>
              
              <div className="space-y-6">
                {/* Step 1: Initial Registration */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 1: INITIAL REGISTRATION (Creating Your Account)</h4>
                  <p className="text-gray-700 mb-3"><strong>Time Required:</strong> 5-10 minutes</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">1.1 Visit the Portal</p>
                      <p className="text-gray-700 ml-4">Open browser (Chrome recommended), type https://aeee.amrita.edu in address bar, press Enter, wait for page to load completely.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">1.2 Locate Registration Button</p>
                      <p className="text-gray-700 ml-4">On homepage, look for button saying "New Registration" or "Apply Now" or "Register for AEEE 2026". Click on this button.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">1.3 Fill Initial Registration Form</p>
                      <p className="text-gray-700 mb-2 ml-4">A registration form will appear asking for:</p>
                      <div className="ml-4 space-y-2">
                        <p className="text-gray-700"><strong>Full Name:</strong> Enter EXACTLY as in Class 10th certificate. Format: First Name Middle Name Last Name</p>
                        <p className="text-gray-700"><strong>Email Address:</strong> Enter your email ID (double-check spelling). This email will be used for ALL communication.</p>
                        <p className="text-gray-700"><strong>Mobile Number:</strong> Enter 10-digit mobile number. This number will receive OTP and SMS alerts.</p>
                        <p className="text-gray-700"><strong>State & City:</strong> Select your state from dropdown, then city/district.</p>
                        <p className="text-gray-700"><strong>Create Password:</strong> Must be 8-20 characters with uppercase, lowercase, number, and special character. <strong>Write this down somewhere safe!</strong></p>
                        <p className="text-gray-700"><strong>Captcha:</strong> Enter the captcha code shown (case-sensitive).</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">1.4 Submit Initial Registration</p>
                      <p className="text-gray-700 ml-4">Review all entered details carefully, click "Submit" or "Register" button, wait for page to process (may take 5-10 seconds).</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">1.5 Email Verification (OTP)</p>
                      <p className="text-gray-700 ml-4">Check your email inbox immediately. Email subject: "AEEE 2026 Registration - Verify Email". Find 6-digit OTP, enter on application portal. OTP valid for 10-15 minutes only. If expired, click "Resend OTP".</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">1.6 Mobile Verification (OTP)</p>
                      <p className="text-gray-700 ml-4">SMS message with 6-digit OTP sent to your mobile. Enter this OTP in mobile verification field. OTP valid for 10 minutes.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">1.7 Registration Successful</p>
                      <p className="text-gray-700 ml-4"><strong>CRITICAL:</strong> Note down your Application Number (format: AEEE2026XXXXXXX). This is your unique identifier. Write it down in multiple places: on paper, save in phone notes, email it to yourself, take screenshot. You'll need this for EVERYTHING from now on.</p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Complete Personal Information */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 2: COMPLETE PERSONAL INFORMATION PROFILE</h4>
                  <p className="text-gray-700 mb-3"><strong>Time Required:</strong> 15-20 minutes</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">2.1 Basic Personal Details</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Date of Birth:</strong> Select from calendar dropdown. Format: DD/MM/YYYY. <strong>CRITICAL:</strong> Enter EXACTLY as per 10th certificate. Even one day difference = document verification failure.</li>
                        <li><strong>Gender:</strong> Select: Male / Female / Other</li>
                        <li><strong>Social Status/Category:</strong> Select from dropdown (General, SC, ST, OBC-NCL, EWS, PwD)</li>
                        <li><strong>Nationality:</strong> Select: Indian / NRI / PIO / Foreign National</li>
                        <li><strong>Aadhaar Number:</strong> Enter 12-digit Aadhaar number. No Aadhaar? Contact helpline for alternative.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">2.2 Contact Information</p>
                      <p className="text-gray-700 ml-4">Fill in current address (complete with PIN code), permanent address (check "Same as above" if same), email and mobile (pre-filled), alternate mobile number (optional but recommended).</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">2.3 Parent/Guardian Information</p>
                      <p className="text-gray-700 ml-4">Fill in Father's details (name, occupation, mobile, email), Mother's details (name, occupation, mobile, email), Guardian details (if applicable). Also provide annual family income range if asked (for scholarship/EWS consideration).</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">2.5 Upload Photograph</p>
                      <p className="text-gray-700 mb-2 ml-4"><strong>Critical Step - Follow Precisely:</strong></p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Resize photo to EXACTLY 200 x 230 pixels (width x height)</li>
                        <li>Save as JPG/JPEG format</li>
                        <li>Check file size: Must be 10 KB to 50 KB (compress if larger)</li>
                        <li>Click "Browse", select photo file, upload, verify preview</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">2.6 Upload Signature</p>
                      <p className="text-gray-700 mb-2 ml-4">Sign on white paper with black pen, scan or photograph clearly, resize to 140 x 60 pixels, save as JPG (5-20 KB size). This signature must match on admit card and all documents.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">2.8 Save Personal Profile</p>
                      <p className="text-gray-700 ml-4">After filling ALL fields, click "Save" or "Save & Continue" button. Wait for "Saved Successfully" message. Once saved, you can logout and continue later.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3: Academic Profile */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 3: ACADEMIC PROFILE</h4>
                  <p className="text-gray-700 mb-3"><strong>Time Required:</strong> 10-15 minutes</p>
                  <p className="text-gray-700 mb-3"><strong>Note:</strong> If you're appearing for 12th in 2026, you can skip some fields now and fill later after results.</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">3.1 Class 10th Details</p>
                      <p className="text-gray-700 ml-4">Fill in: Board/Council (CBSE, ICSE, State Board, NIOS, etc.), Year of Passing, Roll Number, School Name, School Address, Marks Obtained (CGPA, percentage, or marks out of total as per your board).</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">3.2 Class 12th Details</p>
                      <p className="text-gray-700 mb-2 ml-4">Fill in: Board/Council, Stream (Science PCM for AEEE), Year of Passing (2026 if appearing), School Name and Address.</p>
                      
                      <div className="ml-4 space-y-2 mt-2">
                        <p className="text-gray-700 font-semibold">If You've PASSED 12th (Already Completed):</p>
                        <p className="text-gray-700">Fill: Roll Number, Physics Marks, Chemistry Marks, Mathematics Marks, Total/Aggregate (auto-calculated or manual), English Marks, Optional 5th Subject Marks, Total Percentage/CGPA in 12th.</p>
                        
                        <p className="text-gray-700 font-semibold mt-2">If You're APPEARING in 12th (Current Student):</p>
                        <p className="text-gray-700">Fill now: Stream, Expected month of result, School name and address. Fill later (after results): All marks fields, Roll number, Exact percentage. <strong>Deadline:</strong> Typically July-August 2026. Your admission is PROVISIONAL until marks submitted.</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">3.5 Save Academic Profile</p>
                      <p className="text-gray-700 ml-4">Click "Save & Continue". Verify all marks entered correctly. Green checkmark appears if section complete.</p>
                    </div>
                  </div>
                </div>

                {/* Step 4: Application Details */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 4: APPLICATION DETAILS</h4>
                  <p className="text-gray-700 mb-3"><strong>Time Required:</strong> 5-10 minutes</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">4.1 Choose Application Route</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Option 1: AEEE Examination Route</strong> - Fee: ₹1,300</li>
                        <li><strong>Option 2: JEE Main Score Route</strong> - Fee: ₹500</li>
                        <li><strong>Option 3: Both Routes (Recommended)</strong> - Fee: ₹1,800 total. Recommended for maximum flexibility.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">4.2 Choose Exam Phase (For AEEE Route)</p>
                      <p className="text-gray-700 ml-4">Select Phase 1 (Jan 29-Feb 1, 2026), Phase 2 (Apr 25-30, 2026), or Both Phases. Can appear for both - best score considered.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">4.3 Select Exam Cities (For AEEE Route)</p>
                      <p className="text-gray-700 mb-2 ml-4">You must select 3 preferred cities in order:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>First Preference:</strong> City where you MOST want to appear (usually your home city)</li>
                        <li><strong>Second Preference:</strong> Alternative city if first preference center full</li>
                        <li><strong>Third Preference:</strong> Second alternative</li>
                      </ul>
                      <p className="text-gray-700 mt-2 ml-4">Available cities include: Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Lucknow, Jaipur, Patna, Bhubaneswar, Guwahati, Kochi, Coimbatore, Vijayawada, and 65+ other cities.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">4.8 Declaration/Undertaking</p>
                      <p className="text-gray-700 ml-4">Read declaration carefully: "I declare that information provided is true and correct", "I have read and understood eligibility criteria", etc. Check the agreement checkbox. Without this, cannot proceed.</p>
                    </div>
                  </div>
                </div>

                {/* Step 5: Document Upload */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 5: DOCUMENT UPLOAD</h4>
                  <p className="text-gray-700 mb-3"><strong>Time Required:</strong> 10-15 minutes | <strong>Must Be Done:</strong> Before payment</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">5.1 Class 10th Certificate/Marksheet</p>
                      <p className="text-gray-700 ml-4">Upload clear scanned copy or photo. Format: PDF or JPG | Size: Under 500 KB</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">5.2 Class 12th Marksheet (If Passed)</p>
                      <p className="text-gray-700 ml-4">Upload 12th final marksheet showing PCM marks clearly. If 12th appearing, this field will show "Upload after results" - deadline: Before counselling (typically June-July 2026).</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">5.3 Photograph & 5.4 Signature</p>
                      <p className="text-gray-700 ml-4">Should already be uploaded from Personal Profile. If not, upload here.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">5.5 Category Certificate (If Applicable)</p>
                      <p className="text-gray-700 ml-4">Upload SC/ST/OBC-NCL/EWS/PwD certificate in prescribed format. OBC-NCL and EWS must be valid for current financial year.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">5.6 Aadhaar Card</p>
                      <p className="text-gray-700 ml-4">Upload both sides of Aadhaar card. Format: PDF or JPG | Size: Under 500 KB total</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">5.7 JEE Main Scorecard (If Applying via JEE Route)</p>
                      <p className="text-gray-700 ml-4">Upload JEE Main scorecard after results (typically May-June 2026). Format: PDF | Size: Under 1 MB</p>
                    </div>
                  </div>
                </div>

                {/* Step 6: Payment */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 6: PAYMENT OF APPLICATION FEE</h4>
                  <p className="text-gray-700 mb-3"><strong>Time Required:</strong> 5-10 minutes | <strong>Final Step Before Submission</strong></p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">6.1 Application Fee Structure</h5>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fee Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">General/OBC/Others</td>
                              <td className="border border-gray-300 px-4 py-2">₹1,300</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">SC/ST</td>
                              <td className="border border-gray-300 px-4 py-2">₹1,300 (same as general)</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">JEE Main Route Only</td>
                              <td className="border border-gray-300 px-4 py-2">₹500</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">AEEE + JEE Both</td>
                              <td className="border border-gray-300 px-4 py-2">₹1,800</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">Phase 2 Additional (if appeared in Phase 1)</td>
                              <td className="border border-gray-300 px-4 py-2">₹600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">Note: Updated from previous ₹1,200 to ₹1,300 (increased by ₹100 in 2026)</p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">6.3 Payment Methods Available</h5>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Credit Card:</strong> Visa, MasterCard, American Express, Rupay - Instant confirmation</li>
                        <li><strong>Debit Card:</strong> All banks' debit cards - Ensure sufficient balance</li>
                        <li><strong>Net Banking:</strong> All major banks supported (SBI, HDFC, ICICI, Axis, PNB, BOB, etc.)</li>
                        <li><strong>UPI:</strong> Google Pay, PhonePe, Paytm, BHIM - Recommended for quick payment</li>
                        <li><strong>Wallets:</strong> Paytm Wallet, Mobikwik, etc. if available</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">6.4 Payment Process - Step-by-Step</h5>
                      <div className="space-y-2 ml-4">
                        <p className="text-gray-700"><strong>Step 1:</strong> Review Fee Summary - Verify amount is correct, click "Proceed to Pay"</p>
                        <p className="text-gray-700"><strong>Step 2:</strong> Select Payment Method - Click on preferred method tab (Card/Net Banking/UPI)</p>
                        <p className="text-gray-700"><strong>Step 3:</strong> Enter Payment Details - Card number, expiry, CVV (for cards) OR select bank (for net banking) OR enter UPI ID/scan QR (for UPI)</p>
                        <p className="text-gray-700"><strong>Step 4:</strong> Payment Processing - Wait patiently (30-60 seconds). <strong>DO NOT:</strong> Click back, close browser, refresh page, or click pay button multiple times</p>
                        <p className="text-gray-700"><strong>Step 5:</strong> Payment Confirmation - Success page appears with Transaction ID. <strong>CRITICAL: Note down Transaction ID</strong></p>
                        <p className="text-gray-700"><strong>Step 6:</strong> Payment Receipt - Download PDF receipt, save securely in multiple locations</p>
                        <p className="text-gray-700"><strong>Step 7:</strong> Email Confirmation - Within 5-10 minutes, receive email with payment receipt attachment</p>
                        <p className="text-gray-700"><strong>Step 8:</strong> SMS Confirmation - SMS to registered mobile number with transaction details</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h5 className="text-lg font-semibold text-gray-800 mb-2">What If Payment Fails?</h5>
                      <p className="text-gray-700 mb-2">If amount NOT deducted: Simply try payment again, use different payment method.</p>
                      <p className="text-gray-700 mb-2">If amount DEDUCTED but payment status shows "Failed": DON'T pay again immediately. Wait 2-4 hours. Amount will be auto-refunded (typically 3-7 days). If still shows unpaid, contact helpline with transaction ID.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">6.7 Refund Policy</h5>
                      <p className="text-gray-700 mb-2"><strong>Important:</strong> Application fee is NON-REFUNDABLE once paid. Only refundable if: Exam cancelled by university, Duplicate payment (auto-refunded), or Technical error in payment (after verification). Refunds take 7-15 working days to credit back.</p>
                    </div>
                  </div>
                </div>

                {/* Step 7: Final Submission */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 7: FINAL SUBMISSION & CONFIRMATION</h4>
                  <p className="text-gray-700 mb-3"><strong>Time Required:</strong> 2-3 minutes | <strong>Point of No Return</strong></p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">7.1 Final Review Before Submission</p>
                      <p className="text-gray-700 mb-2 ml-4">Click "Preview Application" button. Review Every Section Carefully:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Personal Details: Name spelling, DOB, email, mobile, address correct?</li>
                        <li>Academic Details: 10th/12th details, subject marks entered correctly?</li>
                        <li>Application Details: Exam route, exam cities, phase selected correctly?</li>
                        <li>Documents: All mandatory documents uploaded, photo/signature clear?</li>
                        <li>Payment: Fee paid successfully, correct amount debited?</li>
                      </ul>
                      <p className="text-gray-700 mt-2 ml-4"><strong>Any Mistakes Found?</strong> Before final submission: Some portals allow editing. After final submission: Corrections very difficult - have to contact Directorate of Admissions. Better to get it right before final submit!</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">7.3 Click "Final Submit"</p>
                      <p className="text-gray-700 ml-4">Big button: "Submit Application" or "Final Submit". Warning: Once clicked, cannot edit (usually). Confirmation popup: "Are you sure you want to submit?" Click "Yes" or "Confirm". Processing takes 5-10 seconds.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">7.4 Application Successfully Submitted!</p>
                      <p className="text-gray-700 ml-4">Success message: "Your AEEE 2026 application has been successfully submitted!" Application number confirmed, email and SMS sent with confirmation, application locked (cannot edit).</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">7.5 Download Application Confirmation Page</p>
                      <p className="text-gray-700 mb-2 ml-4">PDF document summarizing your application. Click "Download Application Form" button. Save with meaningful name and in multiple locations (computer, email, cloud storage). Print 3-4 hard copies.</p>
                      <p className="text-gray-700 ml-4">Confirmation Page Contains: Your passport photo, signature, application number, name, DOB, contact details, academic details, exam preferences, payment transaction ID, important instructions, barcode/QR code.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">7.6 Confirmation Email & 7.7 Confirmation SMS</p>
                      <p className="text-gray-700 ml-4">Within 30 minutes, receive detailed confirmation email with application summary and PDF attachment. SMS received on registered mobile with application number. <strong>Save both!</strong></p>
                    </div>
                  </div>
                </div>

                {/* Step 8: Post-Submission */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">STEP 8: POST-SUBMISSION ACTIVITIES</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">8.1 Save Important Details</p>
                      <p className="text-gray-700 ml-4">Create a document/note with: Application Number, Login Password, Registered Email & Mobile, Transaction ID, Payment Date, Amount Paid, Exam Phase, Preferred Exam Cities. Keep this secure but accessible!</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">8.2 Login Verification</p>
                      <p className="text-gray-700 ml-4">Day after submission: Visit aeee.amrita.edu, login with application number and password, verify you can login successfully, dashboard should show "Application Submitted".</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-1">8.3 Check Application Status Regularly</p>
                      <p className="text-gray-700 ml-4">Login to portal once a week to check for notifications, important dates, document upload reminders (for 12th appearing students), slot booking opening dates, admit card download dates.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">8.6 For 12th Appearing Students - Reminder</p>
                      <p className="text-gray-700 mb-2 ml-4"><strong>Critical Pending Task:</strong></p>
                      <p className="text-gray-700 ml-4">After 12th results (May-June 2026): Login to AEEE portal, navigate to Academic Profile, update final marks in each subject, total percentage, roll number, upload 12th final marksheet. <strong>Deadline:</strong> Before counselling (typically July 2026). <strong>Don't forget this!</strong> Admission depends on it.</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">8.7 Next Steps Timeline</p>
                      <div className="ml-4 space-y-2">
                        <p className="text-gray-700"><strong>For Phase 1 Applicants (Exam Jan 29-Feb 1, 2026):</strong></p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li><strong>January 10, 2026:</strong> Slot booking opens - Login to portal, choose exact exam date and time slot, book your slot (first come first serve)</li>
                          <li><strong>January 25, 2026:</strong> Admit card download - Login and download admit card, print 2 copies, check exam center address</li>
                          <li><strong>January 29-Feb 1, 2026:</strong> Exam dates - Appear for exam on your slot, carry admit card, ID proof</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 Exam Pattern</h2>
            
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Exam Mode</td>
                      <td className="border border-gray-300 px-4 py-2">Computer-Based Test (CBT) / Online</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                      <td className="border border-gray-300 px-4 py-2">180 minutes (3 hours)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Questions</td>
                      <td className="border border-gray-300 px-4 py-2">125 questions</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Total Marks</td>
                      <td className="border border-gray-300 px-4 py-2">500 marks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Question Type</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Choice Questions (MCQs)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Marking Scheme</td>
                      <td className="border border-gray-300 px-4 py-2">+4 marks for correct answer, -1 mark for incorrect answer</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Language</td>
                      <td className="border border-gray-300 px-4 py-2">English</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Subject-wise Distribution</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Subject</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Physics</td>
                        <td className="border border-gray-300 px-4 py-2">25</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Chemistry</td>
                        <td className="border border-gray-300 px-4 py-2">25</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mathematics</td>
                        <td className="border border-gray-300 px-4 py-2">75</td>
                        <td className="border border-gray-300 px-4 py-2">300</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Total</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">125</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 Syllabus</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Physics Syllabus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Units and Measurements</li>
                    <li>Motion in a Straight Line</li>
                    <li>Motion in a Plane</li>
                    <li>Laws of Motion</li>
                    <li>Work, Energy and Power</li>
                    <li>System of Particles and Rotational Motion</li>
                    <li>Gravitation</li>
                    <li>Mechanical Properties of Solids</li>
                    <li>Mechanical Properties of Fluids</li>
                    <li>Thermal Properties of Matter</li>
                    <li>Thermodynamics</li>
                    <li>Kinetic Theory</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Oscillations</li>
                    <li>Waves</li>
                    <li>Electric Charges and Fields</li>
                    <li>Electrostatic Potential and Capacitance</li>
                    <li>Current Electricity</li>
                    <li>Moving Charges and Magnetism</li>
                    <li>Magnetism and Matter</li>
                    <li>Electromagnetic Induction</li>
                    <li>Alternating Current</li>
                    <li>Electromagnetic Waves</li>
                    <li>Ray Optics and Optical Instruments</li>
                    <li>Wave Optics</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Chemistry Syllabus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Some Basic Concepts of Chemistry</li>
                    <li>Structure of Atom</li>
                    <li>Classification of Elements and Periodicity</li>
                    <li>Chemical Bonding and Molecular Structure</li>
                    <li>States of Matter</li>
                    <li>Thermodynamics</li>
                    <li>Equilibrium</li>
                    <li>Redox Reactions</li>
                    <li>Hydrogen</li>
                    <li>s-Block Elements</li>
                    <li>p-Block Elements (Group 13-18)</li>
                    <li>Organic Chemistry - Basic Principles</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Hydrocarbons</li>
                    <li>Environmental Chemistry</li>
                    <li>Solid State</li>
                    <li>Solutions</li>
                    <li>Electrochemistry</li>
                    <li>Chemical Kinetics</li>
                    <li>Surface Chemistry</li>
                    <li>General Principles and Processes</li>
                    <li>d and f Block Elements</li>
                    <li>Coordination Compounds</li>
                    <li>Haloalkanes and Haloarenes</li>
                    <li>Alcohols, Phenols and Ethers</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Mathematics Syllabus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Sets, Relations and Functions</li>
                    <li>Complex Numbers and Quadratic Equations</li>
                    <li>Matrices and Determinants</li>
                    <li>Permutations and Combinations</li>
                    <li>Mathematical Induction</li>
                    <li>Binomial Theorem</li>
                    <li>Sequences and Series</li>
                    <li>Limit, Continuity and Differentiability</li>
                    <li>Integral Calculus</li>
                    <li>Differential Equations</li>
                    <li>Coordinate Geometry</li>
                    <li>Three Dimensional Geometry</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Vector Algebra</li>
                    <li>Statistics and Probability</li>
                    <li>Trigonometry</li>
                    <li>Mathematical Reasoning</li>
                    <li>Linear Programming</li>
                    <li>Conic Sections</li>
                    <li>Circle</li>
                    <li>Straight Lines</li>
                    <li>Parabola</li>
                    <li>Ellipse</li>
                    <li>Hyperbola</li>
                    <li>Area Under Curves</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700"><strong>Note:</strong> The syllabus is based on 11th and 12th standard CBSE curriculum. Candidates should refer to the official website for detailed topic-wise syllabus.</p>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 Cutoff</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Factors Affecting Cutoff</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Total number of applicants</li>
                  <li>Difficulty level of the examination</li>
                  <li>Number of available seats</li>
                  <li>Previous year cutoff trends</li>
                  <li>Performance of candidates in the current year</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Previous Year Cutoff Trends (Approximate)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Branch</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Expected Cutoff Range (Marks)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Computer Science Engineering</td>
                        <td className="border border-gray-300 px-4 py-2">350-450</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electronics & Communication Engineering</td>
                        <td className="border border-gray-300 px-4 py-2">320-420</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Mechanical Engineering</td>
                        <td className="border border-gray-300 px-4 py-2">300-400</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electrical Engineering</td>
                        <td className="border border-gray-300 px-4 py-2">310-410</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Civil Engineering</td>
                        <td className="border border-gray-300 px-4 py-2">280-380</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm mt-4">Note: Cutoff marks are indicative and may vary based on campus, category, and other factors.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Points</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Cutoff marks vary for different campuses (Amritapuri, Bengaluru, Chennai, Coimbatore, Amaravati).</li>
                  <li>Category-wise cutoff may have relaxations for reserved categories.</li>
                  <li>Candidates meeting the cutoff are eligible for counselling rounds.</li>
                  <li>Actual cutoff will be declared after the results are published.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">AEEE 2026 Counselling Process</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Overview</h3>
                <p className="text-gray-700 mb-4">
                  The counselling process for AEEE 2026 is conducted online. Eligible candidates (based on AEEE rank or JEE Main rank) must register and participate in the centralized counselling to secure admission to B.Tech programs across Amrita campuses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Process</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Registration</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Eligible candidates need to register for counselling on the official website.</li>
                      <li>Login using AEEE application number or JEE Main application number.</li>
                      <li>Fill in required details and pay counselling fee (if applicable).</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Choice Filling</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Select preferred branches and campuses in order of preference.</li>
                      <li>Can fill multiple choices based on eligibility.</li>
                      <li>Lock choices before the deadline.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Seat Allotment</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Seats are allotted based on AEEE/JEE Main rank, choices filled, and availability.</li>
                      <li>Allotment results are published online.</li>
                      <li>Multiple rounds of counselling may be conducted.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Document Verification</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Allotted candidates must report to the designated center with original documents.</li>
                      <li>Documents include: Class 10 & 12 mark sheets, AEEE/JEE Main rank card, category certificate (if applicable), etc.</li>
                      <li>After verification, pay admission fee to confirm the seat.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Documents Required for Counselling</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>AEEE 2026 Admit Card</li>
                  <li>AEEE 2026 Score Card/Rank Card</li>
                  <li>Class 10 Mark Sheet and Certificate</li>
                  <li>Class 12 Mark Sheet and Certificate</li>
                  <li>Transfer Certificate</li>
                  <li>Migration Certificate (if applicable)</li>
                  <li>Category Certificate (SC/ST/OBC/EWS if applicable)</li>
                  <li>Passport size photographs</li>
                  <li>Valid ID Proof (Aadhaar, Passport, etc.)</li>
                  <li>Payment proof for counselling fee</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Counselling Fee</h3>
                <p className="text-gray-700">Counselling fee details will be announced along with the counselling schedule. The fee is generally non-refundable.</p>
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
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-gray-900">Home</Link>
              <span>›</span>
              <Link to="/exams" className="hover:text-gray-900">Exams</Link>
              <span>›</span>
              <span className="text-gray-900">AEEE</span>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                <img src="/images/aeee-logo.png" alt="AEEE Logo" className="w-20 h-20 object-contain" onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-2xl font-bold text-blue-600">AEEE</span>';
                  }
                }} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AEEE 2026</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-600 font-medium">#AEEE</span>
                  <span className="text-gray-600 text-sm">Amrita Entrance Examination - Engineering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div>
            <div className="flex space-x-8">
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
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="https://aeee.amrita.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition"
                >
                  Download PDF
                </a>
                <a
                  href="https://aeee.amrita.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded transition"
                >
                  Brochure
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Engineering Admissions OPEN</h3>
              
              <div className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3 bg-blue-100 rounded">
                    <span className="text-blue-600 font-bold text-sm">AU</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">Amrita University B.Tech</h4>
                    <p className="text-xs text-gray-600">Amrita Vishwa Vidyapeetham</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Deemed University | 2000+ Seats | AEEE Based | Excellent Placements</p>
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

