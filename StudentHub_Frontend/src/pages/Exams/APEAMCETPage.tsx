import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apeamcetData from './apeamcet.json';
import vitLogo from '../../assets/Colleges/vit.png';

const APEAMCETPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = apeamcetData as any;

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 – Examination Guide</h2>
              
              <div className="space-y-6">
                {/* Overview Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Overview</h3>
                  <p className="text-gray-700">{data.Overview}</p>
                </div>

                {/* Important Dates Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Dates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Notification Release:</strong> {data["Important Dates"]["Notification Release"]}</p>
                      <p className="text-gray-700"><strong>Application Window Opens:</strong> {data["Important Dates"]["Application Window Opens"]}</p>
                      <p className="text-gray-700"><strong>Last Date to Apply:</strong> {data["Important Dates"]["Last Date to Apply"]}</p>
                      <p className="text-gray-700"><strong>Application Correction Window:</strong> {data["Important Dates"]["Application Correction Window"]}</p>
                      <p className="text-gray-700"><strong>Admit Card Release:</strong> {data["Important Dates"]["Admit Card Release"]}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Exam Dates:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li className="text-gray-700"><strong>Agriculture & Pharmacy:</strong> {data["Important Dates"]["Exam Dates"]["Agriculture & Pharmacy"]}</li>
                        <li className="text-gray-700"><strong>Engineering:</strong> {data["Important Dates"]["Exam Dates"]["Engineering"]}</li>
                      </ul>
                      <p className="text-gray-700"><strong>Preliminary Answer Key:</strong> {data["Important Dates"]["Preliminary Answer Key"]}</p>
                      <p className="text-gray-700"><strong>Objection Window:</strong> {data["Important Dates"]["Objection Window"]}</p>
                      <p className="text-gray-700"><strong>Final Answer Key:</strong> {data["Important Dates"]["Final Answer Key"]}</p>
                      <p className="text-gray-700"><strong>Result/Rank Card Release:</strong> {data["Important Dates"]["Result/Rank Card Release"]}</p>
                      <p className="text-gray-700"><strong>Counselling Begins:</strong> {data["Important Dates"]["Counselling Begins"]}</p>
                    </div>
                  </div>
                </div>

                {/* Eligibility Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligibility Criteria</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Nationality:</strong> {data.Eligibility.Nationality}</p>
                    <p className="text-gray-700"><strong>Domicile:</strong> {data.Eligibility.Domicile}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Minimum Age</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering & Pharmacy:</strong> {data.Eligibility["Minimum Age"]["Engineering & Pharmacy"]}</li>
                        <li><strong>Agriculture & Allied Courses:</strong> {data.Eligibility["Minimum Age"]["Agriculture & Allied Courses"]}</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Educational Qualification</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering:</strong> {data.Eligibility["Educational Qualification"].Engineering}</li>
                        <li><strong>Agriculture & Pharmacy:</strong> {data.Eligibility["Educational Qualification"]["Agriculture & Pharmacy"]}</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Minimum Marks</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>General:</strong> {data.Eligibility["Minimum Marks"].General}</li>
                        <li><strong>SC/ST:</strong> {data.Eligibility["Minimum Marks"]["SC/ST"]}</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 mt-2"><strong>Additional:</strong> {data.Eligibility.Additional}</p>
                  </div>
                </div>

                {/* Application Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Process</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Mode:</strong> {data.Application.Mode}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Application Fee</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Engineering or Agriculture & Pharmacy:</strong> {data.Application.Fee["Engineering or Agriculture & Pharmacy"]}</li>
                        <li><strong>Both Streams:</strong> {data.Application.Fee["Both Streams"]}</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Application["Documents Required"].map((doc: string, index: number) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Application Steps</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Application.Steps.map((step: string, index: number) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exam Pattern Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Exam Pattern</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Mode:</strong> {data["Exam Pattern"].Mode}</p>
                    <p className="text-gray-700"><strong>Duration:</strong> {data["Exam Pattern"].Duration}</p>
                    <p className="text-gray-700"><strong>Languages:</strong> {data["Exam Pattern"].Languages}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Number of Papers</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data["Exam Pattern"]["Number of Papers"].map((paper: string, index: number) => (
                          <li key={index}>{paper}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Question Distribution</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Engineering Stream</h5>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Mathematics:</strong> {data["Exam Pattern"].Questions.Engineering.Mathematics} questions</li>
                            <li><strong>Physics:</strong> {data["Exam Pattern"].Questions.Engineering.Physics} questions</li>
                            <li><strong>Chemistry:</strong> {data["Exam Pattern"].Questions.Engineering.Chemistry} questions</li>
                        </ul>
                      </div>
                        <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Agriculture/Pharmacy Stream</h5>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li><strong>Botany:</strong> {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Botany} questions</li>
                            <li><strong>Zoology:</strong> {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Zoology} questions</li>
                            <li><strong>Physics:</strong> {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Physics} questions</li>
                            <li><strong>Chemistry:</strong> {data["Exam Pattern"].Questions["Agriculture/Pharmacy"].Chemistry} questions</li>
                        </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Syllabus Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Syllabus</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Based On:</strong> {data.Syllabus.Foundation?.["Based On"] || "Not available"}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Engineering Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Mathematics</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Engineering Stream"].Mathematics && typeof data.Syllabus["Engineering Stream"].Mathematics === 'object' 
                              ? Object.entries(data.Syllabus["Engineering Stream"].Mathematics).map(([category, topics]) => (
                                  <div key={category} className="mb-2">
                                    <strong className="text-gray-800">{category}:</strong>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                      {Array.isArray(topics) ? topics.map((topic, index) => (
                                        <li key={index} className="text-gray-700">{topic}</li>
                                      )) : null}
                                    </ul>
                                  </div>
                                ))
                              : <li>Mathematics topics not available</li>
                            }
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Physics</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Engineering Stream"].Physics && typeof data.Syllabus["Engineering Stream"].Physics === 'object' 
                              ? Object.entries(data.Syllabus["Engineering Stream"].Physics).map(([category, topics]) => (
                                  <div key={category} className="mb-2">
                                    <strong className="text-gray-800">{category}:</strong>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                      {Array.isArray(topics) ? topics.map((topic, index) => (
                                        <li key={index} className="text-gray-700">{topic}</li>
                                      )) : null}
                                    </ul>
                                  </div>
                                ))
                              : <li>Physics topics not available</li>
                            }
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Chemistry</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Engineering Stream"].Chemistry && typeof data.Syllabus["Engineering Stream"].Chemistry === 'object' 
                              ? Object.entries(data.Syllabus["Engineering Stream"].Chemistry).map(([category, topics]) => (
                                  <div key={category} className="mb-2">
                                    <strong className="text-gray-800">{category}:</strong>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                      {Array.isArray(topics) ? topics.map((topic, index) => (
                                        <li key={index} className="text-gray-700">{topic}</li>
                                      )) : null}
                                    </ul>
                                  </div>
                                ))
                              : <li>Chemistry topics not available</li>
                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Agriculture & Pharmacy Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Botany</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Agriculture & Pharmacy Stream"].Botany && typeof data.Syllabus["Agriculture & Pharmacy Stream"].Botany === 'object' 
                              ? Object.entries(data.Syllabus["Agriculture & Pharmacy Stream"].Botany).map(([category, topics]) => (
                                  <div key={category} className="mb-2">
                                    <strong className="text-gray-800">{category}:</strong>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                      {Array.isArray(topics) ? topics.map((topic, index) => (
                                        <li key={index} className="text-gray-700">{topic}</li>
                                      )) : null}
                                    </ul>
                                  </div>
                                ))
                              : <li>Botany topics not available</li>
                            }
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">Zoology</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {data.Syllabus["Agriculture & Pharmacy Stream"].Zoology && typeof data.Syllabus["Agriculture & Pharmacy Stream"].Zoology === 'object' 
                              ? Object.entries(data.Syllabus["Agriculture & Pharmacy Stream"].Zoology).map(([category, topics]) => (
                                  <div key={category} className="mb-2">
                                    <strong className="text-gray-800">{category}:</strong>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                      {Array.isArray(topics) ? topics.map((topic, index) => (
                                        <li key={index} className="text-gray-700">{topic}</li>
                                      )) : null}
                                    </ul>
                                  </div>
                                ))
                              : <li>Zoology topics not available</li>
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cutoff Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cutoff Information</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Minimum Qualifying Marks:</strong> {data.Cutoff["Minimum Qualifying Marks"]}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Engineering Stream Expected Ranks (2026)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-3 text-left font-semibold text-gray-800">Marks Range</th>
                              <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            {Object.entries(data.Cutoff["Engineering Stream (expected ranks for 2026)"]).map(([marks, rank]) => (
                              <tr key={marks}>
                                <td className="p-3">{marks}</td>
                                <td className="p-3">{String(rank)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Agriculture & Pharmacy Stream Expected Ranks (2026)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-3 text-left font-semibold text-gray-800">Marks Range</th>
                              <th className="p-3 text-left font-semibold text-gray-800">Expected Rank</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            {Object.entries(data.Cutoff["Agriculture & Pharmacy Stream (expected ranks for 2026)"]).map(([marks, rank]) => (
                              <tr key={marks}>
                                <td className="p-3">{marks}</td>
                                <td className="p-3">{String(rank)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Counselling Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Counselling Process</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Mode:</strong> {data.Counselling.Mode}</p>
                    <p className="text-gray-700"><strong>Fee:</strong> {data.Counselling.Fee}</p>
                    <p className="text-gray-700"><strong>Seat Allocation:</strong> {data.Counselling["Seat Allocation"]}</p>
                    <p className="text-gray-700"><strong>Additional Rounds:</strong> {data.Counselling["Additional Rounds"]}</p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Counselling Steps</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Counselling.Steps.map((step: string, index: number) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Required Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.Counselling["Documents Required"].map((doc: string, index: number) => (
                          <li key={index}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* References Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Official References</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {data.References.map((reference: string, index: number) => (
                      <li key={index}>
                        <a href={reference} className="text-gray-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {reference}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dates':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Complete Timeline</h2>
              
              <div className="space-y-6">
                {/* Complete Timeline Table */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Complete Timeline (Including Micro-Events)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Date/Window</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Event/Step</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Description, Notes & Next Steps</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">1st week of March 2026</td>
                          <td className="p-3">Notification Release</td>
                          <td className="p-3">Brochure, eligibility, seat matrix, instructions, FAQs, contacts published</td>
                        </tr>
                        <tr>
                          <td className="p-3">2nd week of March 2026</td>
                          <td className="p-3">Application Begins (Phase 1)</td>
                          <td className="p-3">Online registration open—personal, academic, contact details required</td>
                        </tr>
                        <tr>
                          <td className="p-3">3rd week of March 2026</td>
                          <td className="p-3">Early Registration</td>
                          <td className="p-3">Lowest fee phase, most technical support, pre-filling for reserved categories</td>
                        </tr>
                        <tr>
                          <td className="p-3">2nd/3rd week of April 2026</td>
                          <td className="p-3">Application Close (Without Late Fee)</td>
                          <td className="p-3">Last day normal fee, most fields editable till this point</td>
                        </tr>
                        <tr>
                          <td className="p-3">Last week April 2026</td>
                          <td className="p-3">Application (Late Fee ₹1000)</td>
                          <td className="p-3">Minor late penalty, some fields auto-locked, limited helpdesk</td>
                        </tr>
                        <tr>
                          <td className="p-3">1st week of May 2026</td>
                          <td className="p-3">Late Application (₹2000–₹5000 surcharge)</td>
                          <td className="p-3">Extended for emergencies; high penalty—no refund</td>
                        </tr>
                        <tr>
                          <td className="p-3">1st week of May 2026</td>
                          <td className="p-3">Correction Window</td>
                          <td className="p-3">Specific fields editable online, PDF download of changes</td>
                        </tr>
                        <tr>
                          <td className="p-3">2nd week of May 2026</td>
                          <td className="p-3">Correction Final Review</td>
                          <td className="p-3">Convener contact for locked/certification fields or scanned image upload errors</td>
                        </tr>
                        <tr>
                          <td className="p-3">2nd week of May 2026</td>
                          <td className="p-3">Admit Card/Hall Ticket Download</td>
                          <td className="p-3">Portal open, download PDF, check center/shift, address errors immediately</td>
                        </tr>
                        <tr>
                          <td className="p-3">2nd week of May 2026</td>
                          <td className="p-3">Candidate Help Desk Open</td>
                          <td className="p-3">24x7 access for urgent corrections, reporting lost admit card, helpline</td>
                        </tr>
                        <tr>
                          <td className="p-3">May 19–20, 2026</td>
                          <td className="p-3">Exam: Agriculture & Pharmacy</td>
                          <td className="p-3">3-hour CBT in assigned center/shift—report 1 hr early with ID and admit card</td>
                        </tr>
                        <tr>
                          <td className="p-3">May 21–27, 2026</td>
                          <td className="p-3">Exam: Engineering</td>
                          <td className="p-3">Multi-shift (morning/evening) slots, biometric and facial identification</td>
                        </tr>
                        <tr>
                          <td className="p-3">Each Exam Day</td>
                          <td className="p-3">Attendance, Hall Entry, System Check</td>
                          <td className="p-3">Thumb/fingerprint validation before sitting for CBT</td>
                        </tr>
                        <tr>
                          <td className="p-3">Up to Exam Date</td>
                          <td className="p-3">Mock Test Practice</td>
                          <td className="p-3">Open-access sample tests; system compatibility check</td>
                        </tr>
                        <tr>
                          <td className="p-3">May 27–28, 2026</td>
                          <td className="p-3">Preliminary Answer Key Release</td>
                          <td className="p-3">Unofficial answer sheets, candidate-specific response sheet published</td>
                        </tr>
                        <tr>
                          <td className="p-3">May 27–30, 2026</td>
                          <td className="p-3">Objection Window Opens</td>
                          <td className="p-3">Objection form, upload documentary proof, online tracking for all objections</td>
                        </tr>
                        <tr>
                          <td className="p-3">May 31–June 5, 2026</td>
                          <td className="p-3">Expert Committee Review</td>
                          <td className="p-3">All disputed questions/keys reviewed by senior academic panel</td>
                        </tr>
                        <tr>
                          <td className="p-3">June 6, 2026</td>
                          <td className="p-3">Final Answer Key</td>
                          <td className="p-3">All changes/finalizations published, cannot be challenged further</td>
                        </tr>
                        <tr>
                          <td className="p-3">June 8, 2026</td>
                          <td className="p-3">Result & Rank Card Publication</td>
                          <td className="p-3">Portal reopens, printable score card, rank list by stream/category</td>
                        </tr>
                        <tr>
                          <td className="p-3">2nd week of June 2026</td>
                          <td className="p-3">Qualifying Certificate Verification Window</td>
                          <td className="p-3">Uploads for board mark memos, category, study/residence/proof; batch-wise slots</td>
                        </tr>
                        <tr>
                          <td className="p-3">June 12–20, 2026</td>
                          <td className="p-3">Minority/Defence/Ex-Servicemen Documents Verification</td>
                          <td className="p-3">Special category slots, in-person and online</td>
                        </tr>
                        <tr>
                          <td className="p-3">4th week of June 2026</td>
                          <td className="p-3">Counselling Notification</td>
                          <td className="p-3">Full seat matrix, phase-1 timeline, helpline, dashboard opens</td>
                        </tr>
                        <tr>
                          <td className="p-3">July 2026 onwards (by phases)</td>
                          <td className="p-3">Counselling: Phase 1 Choice Entry</td>
                          <td className="p-3">Web options: branch/college selection, prioritized list, preview available</td>
                        </tr>
                        <tr>
                          <td className="p-3">2–5 days after phase deadline</td>
                          <td className="p-3">Seat Allotment Results</td>
                          <td className="p-3">College, branch, tuition status (Govt/Private), sliding possibility</td>
                        </tr>
                        <tr>
                          <td className="p-3">48–72 hours post allotment</td>
                          <td className="p-3">Self-Reporting (Online or In-Person)</td>
                          <td className="p-3">Accept/decline seat, upload joining report, pay provisional tuition</td>
                        </tr>
                        <tr>
                          <td className="p-3">Within phase windows</td>
                          <td className="p-3">Allotted College/Branch Reporting</td>
                          <td className="p-3">Documentation originals required, anti-ragging declaration</td>
                        </tr>
                        <tr>
                          <td className="p-3">August/September 2026</td>
                          <td className="p-3">Spot/Special Rounds</td>
                          <td className="p-3">Mop-up of vacant seats after all regular rounds</td>
                        </tr>
                        <tr>
                          <td className="p-3">September 2026</td>
                          <td className="p-3">Academic Session Commencement</td>
                          <td className="p-3">Orientation, curriculum introduction, campus induction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                    {/* Application and Timeline Nuances */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Application and Timeline Nuances</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Multiple Application Deadlines</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Up to four escalating late fee deadlines—₹1000, ₹2000, ₹5000, some years up to ₹10,000</li>
                        <li>Early registration offers lowest fees and maximum technical support</li>
                        <li>Late applications have limited helpdesk support and field restrictions</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Application Correction Facility</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Editable Online:</strong> Contact, category, academic details, gender, address, parental info, income, community, special category</li>
                        <li><strong>Non-editable Fields:</strong> Name, signature/image, DOB require written appeal to Convener office</li>
                        <li>PDF download of changes available for record keeping</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Common Application Errors</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Mismatched SSC hall ticket number</li>
                        <li>Wrong category code selection</li>
                        <li>Missing income certificate upload</li>
                        <li>Scanned image format errors (size, resolution, format)</li>
                      </ul>
                    </div>
                  </div>
                    </div>

                    {/* Admit Card & Exam Centers */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Admit Card & Exam Centers</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Exam Centers</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>25+ districts in Andhra Pradesh, select Hyderabad zones</li>
                        <li>Multiple venues per city with Google Maps locations</li>
                        <li>Students choose three preferred centers during application</li>
                        <li>Allocation based on preference and seat availability</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Admit Card Download</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Login using registration number, DOB, hall ticket number</li>
                        <li>Must print and bring to examination venue—no digital-only admittance</li>
                        <li>Check center/shift details and address errors immediately</li>
                        <li>24x7 helpdesk available for lost admit card issues</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Prohibited Items</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Mobile devices, smart watches, reference material</li>
                        <li>Calculators, wallets, jewelry</li>
                        <li>Any electronic devices or study materials</li>
                      </ul>
                    </div>
                  </div>
                    </div>

                    {/* Exam Sessions and Day-Wise Flow */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Sessions and Day-Wise Flow</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Sessions</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Morning:</strong> 9:00 AM – 12:00 PM</li>
                        <li><strong>Afternoon:</strong> 2:30 PM – 5:30 PM</li>
                        <li>Center-specific time slots may vary by crowd size</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Entry Requirements</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Printed admit card</li>
                        <li>Photo ID (Aadhaar/passport/SSC card)</li>
                        <li>Original signature verification</li>
                        <li>Report 1 hour early for biometric verification</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Biometric Capture</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Thumb and photo scanned at entry and exit</li>
                        <li>Prevents impersonation and ensures exam integrity</li>
                        <li>Facial identification system in place</li>
                      </ul>
                    </div>
                  </div>
                    </div>

                    {/* Objection Management & Result Processing */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Objection Management & Result Processing</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Objection Submission</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Use online portal for objection submission</li>
                        <li>Each question challenged must have brief explanation and proof</li>
                        <li>Required: textbook reference, official key, academic citation</li>
                        <li>Online tracking available for all objections</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Committee Scrutiny</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Academic committee reviews each challenge</li>
                        <li>Only valid objections accepted after expert review</li>
                        <li>Senior academic panel handles disputed questions/keys</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Result Content</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Raw score and normalized score (if multiple shifts)</li>
                        <li>State rank and stream/category rank</li>
                        <li>Qualifying status and downloadable rank card</li>
                        <li>Required for all further admissions, can be regenerated all year</li>
                      </ul>
                    </div>
                  </div>
                    </div>

                    {/* Counselling, Web Options, and Admission */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling, Web Options, and Admission</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Timeline</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Usually 3–4 rounds, plus special spot/mop-up round</li>
                        <li>Full seat matrix published with phase-1 timeline</li>
                        <li>Dashboard opens with helpline support</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Choice Filling</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Collections locked per round</li>
                        <li>Only higher-preference "float" permitted after seat allotment</li>
                        <li>Branch/college selection with prioritized list</li>
                        <li>Preview available before final submission</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Verification</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Performed online (upload) and selective in-person checks</li>
                        <li>Required: hall ticket, rank card, SSC/Intermediate/Birth/TC</li>
                        <li>Study/residency, EWS/caste, Aadhaar/photo verification</li>
                        <li>Batch-wise slots for efficient processing</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Self-Reporting</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Commitment to join must be completed or eligibility will lapse</li>
                        <li>Accept/decline seat within 48–72 hours post allotment</li>
                        <li>Upload joining report and pay provisional tuition</li>
                        <li>Anti-ragging and academic code declarations mandatory</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Additional Resources */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Resources & Important Notes</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Mock Test Release Dates</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Each week ahead of exam (sometimes by stream/shift)</li>
                        <li>Solution and analytics also published</li>
                        <li>Open-access sample tests for system compatibility check</li>
                  </ul>
                </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Data Validation and Official Sources</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Primary: cets.apsche.ap.gov.in, Shiksha, Careers360, Collegedunia</li>
                        <li>Compare with notification and FAQ for every stage</li>
                        <li>Check for delays or external disruptions (weather, elections)</li>
                        <li>Historical schedules available for comparison and trend analysis</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Schedules</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>City/Center wise reporting protocols with Google Maps locations</li>
                        <li>Day-wise subject focus: Agriculture/Pharmacy, Engineering</li>
                        <li>Optional Makeup Rounds for special circumstances</li>
                        <li>Center-specific time slots may vary by crowd size</li>
                      </ul>
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Eligibility Criteria</h2>
              
              <div className="space-y-6">
                {/* Nationality & Domicile */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Nationality & Domicile Requirements</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Eligible Candidates</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Indian citizens, OCI (Overseas Citizens of India), PIO (Persons of Indian Origin), and NRI (Non-Resident Indians)</li>
                        <li>Must meet domicile/local status rules for Andhra Pradesh or Telangana</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Domicile Criteria</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Residence or education in Andhra Pradesh or Telangana for at least 4 years prior to qualifying examination</li>
                        <li>Eligibility through parentage or property ownership</li>
                        <li>Continuous study certificates from Class VI to Intermediate</li>
                        <li>Nativity certificates or residence certificates from Mandal Revenue Officer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Local vs Non-Local Status</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Local Candidates:</strong> Proved by integrated community and nativity certificate or residence certificates</li>
                        <li><strong>Non-Local Candidates:</strong> Admitted under open or unreserved seats without local quotas</li>
                        <li>Foreign board students must produce equivalency certificates and comply with local status rules</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Age Requirements */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Age Requirements & Relaxations</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Engineering & Pharmacy</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Minimum 16 years as of December 31, 2026</li>
                          <li>No upper age limit for general/OBC categories</li>
                          <li>Age proof via birth certificate or SSC certificate</li>
                        </ul>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Agriculture & Allied Courses</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Minimum 17 years, maximum 22 years (general)</li>
                          <li>Maximum 25 years for SC, ST, and BC categories</li>
                          <li>Age relaxations up to 3 years for special categories</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Age Relaxations</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Ex-Servicemen: Up to 3 years additional relaxation</li>
                        <li>Physically Handicapped: Up to 3 years additional relaxation</li>
                        <li>Reserved categories (SC/ST/OBC): Up to 3 years additional relaxation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Educational Qualifications */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Educational Qualifications</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Stream</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Required Qualification</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Special Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3"><strong>Engineering</strong></td>
                          <td className="p-3">Passed/appearing 10+2 with Mathematics, Physics, Chemistry; or approved Diploma holders</td>
                          <td className="p-3">Diploma holders eligible for lateral entry after clearing diploma with required marks</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>Pharmacy</strong></td>
                          <td className="p-3">Passed/appearing 10+2 with Physics, Chemistry, and either Biology or Mathematics</td>
                          <td className="p-3">Biology mandatory for Pharm-D courses; minimum marks apply per category</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>Agriculture/Allied</strong></td>
                          <td className="p-3">Passed/appearing 10+2 with Physics, Chemistry, Biology/Mathematics or Vocational Agriculture subjects</td>
                          <td className="p-3">Subject streams vary by specific agricultural discipline</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>Diploma Holders</strong></td>
                          <td className="p-3">State or nationally recognized Diploma in engineering or relevant field</td>
                          <td className="p-3">Must appear for AP ECET lateral entry or join as per merit</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>Others</strong></td>
                          <td className="p-3">Equivalent qualifications recognized by Board of Intermediate Education</td>
                          <td className="p-3">Foreign qualifications require equivalency certificates from AIU/State Boards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Minimum Marks */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Minimum Percentage Marks</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">General Category</h4>
                        <p className="text-gray-700"><strong>45% aggregate marks</strong> in qualifying examination</p>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Reserved Categories</h4>
                        <p className="text-gray-700"><strong>40% aggregate marks</strong> for SC/ST/OBC/PWD candidates</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Important Notes</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Only marks from core subjects (Physics, Chemistry, Mathematics/Biology) counted for eligibility</li>
                        <li>Students appearing for 10+2 in 2026 can apply provisionally but must clear eligibility before admission</li>
                        <li>AP EAMCET ranking based entirely on entrance test performance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Reservations */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Reservations & Special Categories</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">SC</div>
                        <div className="text-gray-700 text-sm">6%</div>
                </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">ST</div>
                        <div className="text-gray-700 text-sm">15%</div>
              </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">OBC</div>
                        <div className="text-gray-700 text-sm">25%</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">PH</div>
                        <div className="text-gray-700 text-sm">3%</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">Women</div>
                        <div className="text-gray-700 text-sm">33%</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">EWS</div>
                        <div className="text-gray-700 text-sm">10%</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">Ex-Servicemen</div>
                        <div className="text-gray-700 text-sm">2%</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border text-center">
                        <div className="text-gray-700 font-semibold">NCC/Sports</div>
                        <div className="text-gray-700 text-sm">As per norms</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Category Requirements</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Physically Handicapped candidates need valid disability certificate attested by medical authorities</li>
                        <li>Special category admissions require separate certificate verification during counselling</li>
                        <li>Reserved candidates get age relaxations of up to 3 years</li>
                        <li>All certificates must be verified by authorities during counselling</li>
                      </ul>
                    </div>
                  </div>
                    </div>

                {/* Documentation */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Documentation</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Mandatory Documents</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>SSC certificate (age proof)</li>
                          <li>Intermediate marksheet/pass certificate</li>
                          <li>Caste/community reservation certificate (if applicable)</li>
                          <li>Integrated nativity and domicile certificates</li>
                          <li>Study certificates (Class VI to Intermediate)</li>
                      </ul>
                    </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Additional Documents</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Income certificate for EWS category</li>
                          <li>Disability certificate for PH candidates</li>
                          <li>Diploma certificate for lateral entrants</li>
                          <li>Equivalency certificates for foreign qualifications</li>
                          <li>Special category certificates (NCC, Sports, etc.)</li>
                      </ul>
                    </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Verification Process</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>All documents verified by certificate verification authorities during counselling</li>
                        <li>Failure to produce required documents leads to cancellation</li>
                        <li>Candidates must keep originals and multiple photocopies</li>
                        <li>Documents must be attested and valid as per current guidelines</li>
                      </ul>
                    </div>
                  </div>
                    </div>

                {/* Real-Life Examples */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Real-Life Applicant Scenarios</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">CBSE Student from Mumbai</h4>
                      <p className="text-gray-700">Can apply as non-local without reservation benefits; must produce domicile proof where applicable but competes in unreserved category.</p>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Diploma Holder Seeking B.Tech</h4>
                      <p className="text-gray-700">Eligible after clearing specific diploma with minimum aggregate; must appear in AP ECET examination for lateral entry.</p>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">SC/ST Student Aged 24</h4>
                      <p className="text-gray-700">Eligible for agriculture courses due to relaxed upper age limit of 25 years for reserved category.</p>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">10+2 Appearing Candidate</h4>
                      <p className="text-gray-700">Can apply provisionally but must pass with minimum marks before admission confirmation.</p>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">OCI Holder with Foreign Certificates</h4>
                      <p className="text-gray-700">Need equivalency certificates and must fulfill local/non-local domicile status to avail reservations.</p>
                    </div>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Notes & Updates</h3>
                  <ul className="list-disc list-inside text-yellow-700 space-y-2">
                    <li>Eligibility criteria may be updated by APSCHE; candidates should check official notifications regularly</li>
                    <li>All candidates must meet both academic and domicile requirements for admission</li>
                    <li>Reservation benefits are subject to certificate verification and government norms</li>
                    <li>Candidates with interrupted residency may require additional affidavits during verification</li>
                    <li>Foreign board students must comply with both equivalency and local status requirements</li>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Application Process</h2>
              
              <div className="space-y-6">
                {/* Application Mode */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Mode & Portal</h3>
                  <div className="space-y-3">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Online Application Portal</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Official portal: <strong>cets.apsche.ap.gov.in/EAPCET</strong></li>
                        <li>Entirely online process - no offline submissions allowed</li>
                        <li>Create login profile with valid email and mobile number</li>
                        <li>Streamlined processing with reduced errors</li>
                      </ul>
                  </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Technical Requirements</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Use Chrome or Firefox updated versions for smooth portal usage</li>
                        <li>Clear browser cache if experiencing issues</li>
                        <li>APSCHE MyCET mobile app available for tracking application status</li>
                        <li>Dedicated helpline numbers and email support available</li>
                      </ul>
                </div>
                  </div>
                </div>

                {/* Stepwise Application Procedure */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Stepwise Application Procedure</h3>
                  <div className="space-y-4">
                    {/* Step 1: Fee Payment */}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Fee Payment</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">Payment Methods</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Online: Debit/Credit cards, Net banking, UPI</li>
                            <li>In-person: AP Online, Mee-Seva, E-Seva facilitation centers</li>
                          </ul>
                  </div>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">Important Notes</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Unique transaction ID generated after payment - mandatory for registration</li>
                            <li>Payment confirmation takes up to 72 hours to reflect on portal</li>
                            <li>Confirm payment status before proceeding to registration</li>
                          </ul>
                </div>
                  <div className="overflow-x-auto">
                          <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                                <th className="p-2 text-left font-semibold text-gray-800">Category</th>
                                <th className="p-2 text-left font-semibold text-gray-800">Single Stream Fee</th>
                                <th className="p-2 text-left font-semibold text-gray-800">Both Streams Fee</th>
                        </tr>
                      </thead>
                            <tbody className="text-gray-700">
                              <tr>
                                <td className="p-2">General</td>
                                <td className="p-2">₹600</td>
                                <td className="p-2">₹1200</td>
                        </tr>
                        <tr>
                                <td className="p-2">OBC</td>
                                <td className="p-2">₹550</td>
                                <td className="p-2">₹1100</td>
                        </tr>
                        <tr>
                                <td className="p-2">SC/ST</td>
                                <td className="p-2">₹500</td>
                                <td className="p-2">₹1000</td>
                        </tr>
                      </tbody>
                    </table>
                        </div>
                  </div>
                </div>

                    {/* Step 2: Registration */}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Registration & Form Filling</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Enter accurate personal details: Name, DOB, gender, contact info</li>
                        <li>Provide academic information, including qualifying exam board and hall ticket</li>
                        <li>Choose stream preference: Engineering, Agriculture & Pharmacy, or both</li>
                        <li>Select preferred test centers (usually 2 districts)</li>
                        <li>Double-check all entries, especially name, DOB, exam details</li>
                  </ul>
                </div>

                    {/* Step 3: Document Upload */}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Upload</h4>
                  <div className="space-y-3">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="p-2 text-left font-semibold text-gray-800">Document Type</th>
                                <th className="p-2 text-left font-semibold text-gray-800">Size Limit</th>
                                <th className="p-2 text-left font-semibold text-gray-800">Format</th>
                                <th className="p-2 text-left font-semibold text-gray-800">Notes</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-700">
                              <tr>
                                <td className="p-2">Photograph</td>
                                <td className="p-2">Up to 30 KB</td>
                                <td className="p-2">JPG</td>
                                <td className="p-2">Recent, clear, no shadows</td>
                              </tr>
                              <tr>
                                <td className="p-2">Signature</td>
                                <td className="p-2">Up to 15 KB</td>
                                <td className="p-2">JPG</td>
                                <td className="p-2">On white background, clear</td>
                              </tr>
                              <tr>
                                <td className="p-2">Birth Certificate/SSC</td>
                                <td className="p-2">N/A</td>
                                <td className="p-2">PDF/JPG</td>
                                <td className="p-2">Clear age verification</td>
                              </tr>
                              <tr>
                                <td className="p-2">Intermediate Marksheet</td>
                                <td className="p-2">N/A</td>
                                <td className="p-2">PDF/JPG</td>
                                <td className="p-2">Scanned clear image</td>
                              </tr>
                              <tr>
                                <td className="p-2">Caste/Income Certificate</td>
                                <td className="p-2">N/A</td>
                                <td className="p-2">PDF/JPG</td>
                                <td className="p-2">If applicable</td>
                              </tr>
                              <tr>
                                <td className="p-2">Aadhaar Card</td>
                                <td className="p-2">N/A</td>
                                <td className="p-2">PDF/JPG</td>
                                <td className="p-2">Identification</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                          <p className="text-yellow-700 text-sm"><strong>Important:</strong> Format and size compliance is mandatory. Uploads failing criteria will be rejected. Multiple retries allowed but final upload must pass specifications.</p>
                      </div>
                  </div>
                </div>

                    {/* Step 4: Review & Submit */}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Review & Submit</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Verify all entered data thoroughly before final submission</li>
                        <li>Unique registration number and application confirmation slip generated</li>
                        <li>Print multiple copies of confirmation slip for future reference</li>
                        <li>Save payment receipts and transaction IDs</li>
                      </ul>
              </div>

                    {/* Step 5: Correction Window */}
                <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Application Correction Window</h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">Opens in May 2026 for limited time</p>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">Online Corrections Allowed:</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Parents' names</li>
                            <li>Intermediate year</li>
                            <li>Category details</li>
                            <li>Non-critical fields</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-1">Requires Formal Appeal:</h5>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                            <li>Name changes</li>
                            <li>Date of birth</li>
                            <li>Photo/signature updates</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Timeline */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Application Timeline</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Milestone</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Tentative Date</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">Notification & Application Start</td>
                          <td className="p-3">1st - 2nd week March 2026</td>
                          <td className="p-3">Portal opens for fee payment & registration</td>
                        </tr>
                        <tr>
                          <td className="p-3">Last Date to Apply (No Late Fee)</td>
                          <td className="p-3">Mid-April 2026</td>
                          <td className="p-3">Submit forms with base fee</td>
                        </tr>
                        <tr>
                          <td className="p-3">Late Fee Window</td>
                          <td className="p-3">Late April - May 2026</td>
                          <td className="p-3">Additional fees for late applicants</td>
                        </tr>
                        <tr>
                          <td className="p-3">Correction Window Opens</td>
                          <td className="p-3">1st week of May 2026</td>
                          <td className="p-3">Online limited editing period</td>
                        </tr>
                        <tr>
                          <td className="p-3">Admit Card Release</td>
                          <td className="p-3">2nd week of May 2026</td>
                          <td className="p-3">Downloadable online, mandatory for exam</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Common Errors & Solutions */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Common Application Errors & Solutions</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Common Errors</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Uploading photos/signatures beyond specified sizes</li>
                          <li>Incorrect SSC hall ticket number entry</li>
                          <li>Mismatch in caste/income certificates</li>
                          <li>Forgetting transaction ID</li>
                          <li>Multiple registrations</li>
                          <li>Incomplete form submissions</li>
                  </ul>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Resolution Strategies</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Use correction windows for non-critical edits</li>
                          <li>Contact helpline for technical issues</li>
                          <li>Revisit fee payment and re-upload sections</li>
                          <li>Clear browser cache and cookies</li>
                          <li>Follow official remediation protocols</li>
                          <li>Keep all documents ready before starting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tips for Applicants */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Essential Tips for Applicants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Before Starting Application</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Keep all certificates and documents scanned and ready</li>
                        <li>Ensure stable internet connection</li>
                        <li>Use compatible browser (Chrome/Firefox)</li>
                        <li>Have payment method ready</li>
                        <li>Verify all personal details match certificates</li>
                      </ul>
                        </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">During Application Process</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Double-check all entries before submission</li>
                        <li>Confirm payment status before proceeding</li>
                        <li>Upload documents meeting size/format requirements</li>
                        <li>Save confirmation slips and receipts</li>
                        <li>Apply well before deadlines</li>
                      </ul>
                      </div>
                  </div>
                </div>

                {/* Technical Support */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Support & Resources</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Support Channels</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Dedicated helpline numbers (available on portal)</li>
                          <li>Email support for technical issues</li>
                          <li>Official FAQs accessible on portal</li>
                          <li>APSCHE MyCET mobile app for tracking</li>
                        </ul>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Official Resources</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Official Website: cets.apsche.ap.gov.in/EAPCET</li>
                          <li>Detailed Application Guide available</li>
                          <li>Stepwise instructions and tutorials</li>
                          <li>Application correction portal</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="p-6 border-l-4 border-yellow-400">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Notes & Warnings</h3>
                  <ul className="list-disc list-inside text-yellow-700 space-y-2">
                    <li>Failure to correct erroneous information can lead to rejection or cancellation of candidature</li>
                    <li>Apply well before deadlines to avoid last-minute technical glitches</li>
                    <li>Keep multiple copies of all confirmation documents and receipts</li>
                    <li>Utilize correction window judiciously for non-critical editing only</li>
                    <li>Use official helpline or mobile app for real-time updates and issue resolution</li>
                    <li>All information must match exactly with official certificates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Exam Pattern</h2>
              
              <div className="space-y-6">
                {/* Exam Mode & Timing */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Exam Mode & Timing</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Exam Details</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Computer-Based Test (CBT) conducted at authorized centers</li>
                        <li>Total duration: <strong>3 hours (180 minutes)</strong></li>
                        <li>Multiple shifts: Morning (9:00 AM – 12:00 PM), Afternoon (2:30 PM – 5:30 PM)</li>
                        <li>Candidates must report one hour prior for biometric and ID verification</li>
                      </ul>
                  </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Exam Instructions</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Candidates receive randomized question sets to maintain fairness</li>
                        <li>Use provided computer systems and follow invigilator instructions strictly</li>
                        <li>Calculators, mobile phones, smartwatches, and electronic devices strictly prohibited</li>
                        <li>Biometric verification at entry and exit to avoid impersonation</li>
                        <li>Rough sheets provided for calculations must be returned</li>
                        <li>Carry hall ticket and valid photo ID for examination entry</li>
                      </ul>
                  </div>
                  </div>
                </div>

                {/* Subject-wise Question Distribution */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject-wise Question Distribution & Weightage</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Stream</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Subject</th>
                          <th className="p-3 text-left font-semibold text-gray-800">No. of Questions</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Marks</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Weightage (%)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3" rowSpan={3}><strong>Engineering</strong></td>
                          <td className="p-3">Mathematics</td>
                          <td className="p-3">80</td>
                          <td className="p-3">80</td>
                          <td className="p-3">50%</td>
                        </tr>
                        <tr>
                          <td className="p-3">Physics</td>
                          <td className="p-3">40</td>
                          <td className="p-3">40</td>
                          <td className="p-3">25%</td>
                        </tr>
                        <tr>
                          <td className="p-3">Chemistry</td>
                          <td className="p-3">40</td>
                          <td className="p-3">40</td>
                          <td className="p-3">25%</td>
                        </tr>
                        <tr>
                          <td className="p-3" rowSpan={3}><strong>Agriculture & Pharmacy</strong></td>
                          <td className="p-3">Botany + Zoology</td>
                          <td className="p-3">80</td>
                          <td className="p-3">80</td>
                          <td className="p-3">50%</td>
                        </tr>
                        <tr>
                          <td className="p-3">Physics</td>
                          <td className="p-3">40</td>
                          <td className="p-3">40</td>
                          <td className="p-3">25%</td>
                        </tr>
                        <tr>
                          <td className="p-3">Chemistry</td>
                          <td className="p-3">40</td>
                          <td className="p-3">40</td>
                          <td className="p-3">25%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Chapter-wise High Weightage Topics */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Chapter-wise High Weightage Topics (Physics Example)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Chapter</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Weightage (%)</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Approximate No. of Questions</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">Thermodynamics</td>
                          <td className="p-3">9%</td>
                          <td className="p-3">3-4</td>
                        </tr>
                        <tr>
                          <td className="p-3">Work, Energy and Power</td>
                          <td className="p-3">6%</td>
                          <td className="p-3">2-3</td>
                        </tr>
                        <tr>
                          <td className="p-3">System of Particles, Rotational Motion</td>
                          <td className="p-3">6%</td>
                          <td className="p-3">2-3</td>
                        </tr>
                        <tr>
                          <td className="p-3">Moving Charges and Magnetism</td>
                          <td className="p-3">5%</td>
                          <td className="p-3">2</td>
                        </tr>
                        <tr>
                          <td className="p-3">Motion in a Plane</td>
                          <td className="p-3">5%</td>
                          <td className="p-3">2</td>
                        </tr>
                        <tr>
                          <td className="p-3">Laws of Motion</td>
                          <td className="p-3">5%</td>
                          <td className="p-3">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 mt-4">
                    <p className="text-gray-700 text-sm"><strong>Note:</strong> Lower weight chapters include Oscillations, Gravitation, Waves, Electrostatics, etc.</p>
                  </div>
                </div>

                {/* Marking Scheme */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Marking Scheme</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-4">
                      <span className="text-gray-700 font-medium">Correct Answer</span>
                      <span className="text-gray-800 font-semibold">+1 mark</span>
                        </div>
                    <div className="flex justify-between items-center p-4">
                      <span className="text-gray-700 font-medium">Incorrect Answer</span>
                      <span className="text-gray-800 font-semibold">0 marks</span>
                        </div>
                    <div className="flex justify-between items-center p-4">
                      <span className="text-gray-700 font-medium">Unattempted</span>
                      <span className="text-gray-800 font-semibold">0 marks</span>
                        </div>
                      </div>
                  <div className="p-4 mt-4">
                    <p className="text-gray-700"><strong>Important:</strong> No negative marking for incorrect or unattempted questions. This encourages candidates to attempt all questions.</p>
                      </div>
                    </div>

                {/* Question Types & Difficulty */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Question Types & Difficulty Level</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Question Format</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>All questions are Multiple Choice Questions (MCQs) with four options</li>
                        <li>Questions test conceptual understanding, application, and problem-solving</li>
                        <li>Difficulty varies: Math section tends to be most time-consuming and challenging</li>
                        <li>Physics and chemistry sections are moderate in difficulty</li>
                        <li>Previous years show emphasis on NCERT syllabus topics</li>
                      </ul>
                        </div>
                        </div>
                        </div>

                {/* Preparation and Time Management */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Preparation and Time Management</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Suggested Time Distribution for Engineering Stream</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Mathematics</span>
                            <span className="text-gray-800 font-semibold">85 minutes</span>
                        </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Physics</span>
                            <span className="text-gray-800 font-semibold">45 minutes</span>
                      </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Chemistry</span>
                            <span className="text-gray-800 font-semibold">45 minutes</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Buffer time for review</span>
                            <span className="text-gray-800 font-semibold">5 minutes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Strategy Tips</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Use a "3-pass" approach — first solve easy questions, then moderate, finally difficult</li>
                        <li>Focus study on high-weightage chapters and practice previous year papers</li>
                        <li>Practice mock CBTs for better familiarity with the interface</li>
                        <li>Download previous years' question papers and official sample papers</li>
                        <li>Follow official syllabus and topic-wise weightage charts from APSCHE</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Additional Resources */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Resources</h3>
                  <div className="space-y-3">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Study Materials</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Download previous years' question papers and official sample papers in PDF format</li>
                        <li>Utilize official syllabus and topic-wise weightage charts from APSCHE and educational portals</li>
                        <li>Follow official exam day instructions and practice mock CBTs</li>
                        <li>Access chapter-wise weightage analysis and important topics guides</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Preparation Tips</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Focus on NCERT syllabus topics as they form the foundation</li>
                        <li>Practice time management with mock tests</li>
                        <li>Revise high-weightage chapters thoroughly</li>
                        <li>Solve previous year papers to understand question patterns</li>
                        <li>Take online mock tests to get familiar with CBT interface</li>
                      </ul>
                    </div>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Syllabus</h2>
              
              <div className="space-y-6">
                {/* Syllabus Foundation */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Foundation</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Based On:</strong> {data.Syllabus.Foundation?.["Based On"] || "Not available"}</p>
                    <p className="text-gray-700"><strong>Description:</strong> {data.Syllabus.Foundation?.Description || "Not available"}</p>
                  </div>
                </div>

                {/* Engineering Stream Detailed Syllabus */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Engineering Stream Syllabus Detail</h3>
                  
                  <div className="space-y-6">
                    {/* Mathematics */}
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Mathematics (Comprehensive Topics)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.Syllabus["Engineering Stream"].Mathematics && typeof data.Syllabus["Engineering Stream"].Mathematics === 'object' 
                          ? Object.entries(data.Syllabus["Engineering Stream"].Mathematics).map(([category, topics]) => (
                          <div key={category} className="bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">{category}:</h5>
                            <ul className="list-disc list-inside space-y-1">
                                  {Array.isArray(topics) ? topics.map((topic, index) => (
                                <li key={index} className="text-gray-700 text-sm">{topic}</li>
                                  )) : null}
                            </ul>
                          </div>
                            ))
                          : <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-gray-700 text-sm">Mathematics topics not available</p>
                            </div>
                        }
                      </div>
                    </div>

                    {/* Physics */}
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Physics (Expanded Topics)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.Syllabus["Engineering Stream"].Physics && typeof data.Syllabus["Engineering Stream"].Physics === 'object' 
                          ? Object.entries(data.Syllabus["Engineering Stream"].Physics).map(([category, topics]) => (
                          <div key={category} className="bg-green-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">{category}:</h5>
                            <ul className="list-disc list-inside space-y-1">
                                  {Array.isArray(topics) ? topics.map((topic, index) => (
                                <li key={index} className="text-gray-700 text-sm">{topic}</li>
                                  )) : null}
                            </ul>
                          </div>
                            ))
                          : <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-gray-700 text-sm">Physics topics not available</p>
                            </div>
                        }
                      </div>
                    </div>

                    {/* Chemistry */}
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Chemistry (In-Depth Topics)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.Syllabus["Engineering Stream"].Chemistry && typeof data.Syllabus["Engineering Stream"].Chemistry === 'object' 
                          ? Object.entries(data.Syllabus["Engineering Stream"].Chemistry).map(([category, topics]) => (
                          <div key={category} className="bg-purple-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">{category}:</h5>
                            <ul className="list-disc list-inside space-y-1">
                                  {Array.isArray(topics) ? topics.map((topic, index) => (
                                <li key={index} className="text-gray-700 text-sm">{topic}</li>
                                  )) : null}
                            </ul>
                          </div>
                            ))
                          : <div className="bg-purple-50 p-4 rounded-lg">
                              <p className="text-gray-700 text-sm">Chemistry topics not available</p>
                            </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agriculture & Pharmacy Stream */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Agriculture & Pharmacy Stream Syllabus Detailed</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Botany */}
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Botany</h4>
                      <div className="space-y-4">
                        {data.Syllabus["Agriculture & Pharmacy Stream"].Botany && typeof data.Syllabus["Agriculture & Pharmacy Stream"].Botany === 'object' 
                          ? Object.entries(data.Syllabus["Agriculture & Pharmacy Stream"].Botany).map(([category, topics]) => (
                          <div key={category} className="bg-green-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">{category}:</h5>
                            <ul className="list-disc list-inside space-y-1">
                                  {Array.isArray(topics) ? topics.map((topic, index) => (
                                <li key={index} className="text-gray-700 text-sm">{topic}</li>
                                  )) : null}
                            </ul>
                          </div>
                            ))
                          : <div className="bg-green-50 p-4 rounded-lg">
                              <p className="text-gray-700 text-sm">Botany topics not available</p>
                            </div>
                        }
                      </div>
                    </div>

                    {/* Zoology */}
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Zoology</h4>
                      <div className="space-y-4">
                        {data.Syllabus["Agriculture & Pharmacy Stream"].Zoology && typeof data.Syllabus["Agriculture & Pharmacy Stream"].Zoology === 'object' 
                          ? Object.entries(data.Syllabus["Agriculture & Pharmacy Stream"].Zoology).map(([category, topics]) => (
                          <div key={category} className="bg-orange-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-gray-800 mb-2">{category}:</h5>
                            <ul className="list-disc list-inside space-y-1">
                                  {Array.isArray(topics) ? topics.map((topic, index) => (
                                <li key={index} className="text-gray-700 text-sm">{topic}</li>
                                  )) : null}
                            </ul>
                          </div>
                            ))
                          : <div className="bg-orange-50 p-4 rounded-lg">
                              <p className="text-gray-700 text-sm">Zoology topics not available</p>
                            </div>
                        }
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Physics & Chemistry</h4>
                    <p className="text-gray-700">Same as Engineering stream</p>
                  </div>
                </div>

                {/* Weightage and Topic Prioritization */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Subject Weightage and Topic Prioritization</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Engineering Stream Weightage */}
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Engineering Stream Weightage</h4>
                      <div className="space-y-3">
                        {data.Syllabus.Weightage?.["Engineering Stream"] && Object.entries(data.Syllabus.Weightage["Engineering Stream"]).map(([subject, weightage]) => (
                          <div key={subject} className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                            <span className="font-semibold text-gray-800">{subject}</span>
                            <span className="text-gray-700 font-bold">{String(weightage)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Agriculture & Pharmacy Stream Weightage */}
                    <div className="bg-white p-6 rounded-lg border">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Agriculture & Pharmacy Stream Weightage</h4>
                      <div className="space-y-3">
                        {data.Syllabus.Weightage?.["Agriculture & Pharmacy Stream"] && Object.entries(data.Syllabus.Weightage["Agriculture & Pharmacy Stream"]).map(([subject, weightage]) => (
                          <div key={subject} className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                            <span className="font-semibold text-gray-800">{subject}</span>
                            <span className="text-gray-700 font-bold">{String(weightage)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* High Priority Topics */}
                  <div className="mt-6 bg-white p-6 rounded-lg border">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">High Priority Topics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {data.Syllabus["High Priority Topics"] && Object.entries(data.Syllabus["High Priority Topics"]).map(([subject, topics]) => (
                        <div key={subject} className="p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">{subject}</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {Array.isArray(topics) && topics.map((topic, index) => (
                              <li key={index} className="text-gray-700 text-sm">{topic}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Exam Preparation Recommendations */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Exam Preparation Recommendations</h3>
                  <div className="bg-white p-6 rounded-lg border">
                    <ul className="list-disc list-inside space-y-2">
                      {data.Syllabus["Preparation Recommendations"] && data.Syllabus["Preparation Recommendations"].map((recommendation: string, index: number) => (
                        <li key={index} className="text-gray-700">{recommendation}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Official and Recommended Resources */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Official and Recommended Resources</h3>
                  <div className="bg-white p-6 rounded-lg border">
                    <ul className="list-disc list-inside space-y-2">
                      {data.Syllabus["Official Resources"] && data.Syllabus["Official Resources"].map((resource: string, index: number) => (
                        <li key={index} className="text-gray-700">{resource}</li>
                      ))}
                    </ul>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 – 30x Expanded Expected Cutoff & Rank Analysis</h2>
              
              <div className="space-y-6">
                {/* Overview of AP EAMCET 2026 Cutoff System */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Overview of AP EAMCET 2026 Cutoff System</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <p className="text-gray-700 mb-3">AP EAMCET cutoffs are divided into:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Qualifying Cutoff (Rank List Eligibility):</strong> Minimum score required to appear in counselling and be listed in ranks</li>
                        <li><strong>Admission Cutoff:</strong> Final opening and closing ranks for college admissions through counselling rounds (after considering reservation and courses)</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700">The overall exam difficulty, normalization of marks, and competition size (~2.5 lakh candidates) directly affect these values yearly.</p>
                    </div>
                  </div>
                </div>

                {/* Qualifying Marks & Criteria */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Qualifying Marks & Criteria (2026 Projection Based on Trends 2023–2025)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Category</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Minimum % per Subject</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Minimum Aggregate %</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Expected Marks (out of 160)</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Trend (2023–25 Avg)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3"><strong>General (CRL)</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Highest variation (paper difficulty dependent)</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>BC-A</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Similar to General cutoff</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>BC-B</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Steady increase since 2023</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>BC-C</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Relatively consistent</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>BC-D</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Slightly higher expected due to fewer seats</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>BC-E</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Limited variation</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>SC</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Relatively consistent</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>ST</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Slightly higher expected due to fewer seats</td>
                        </tr>
                        <tr>
                          <td className="p-3"><strong>PwD (All)</strong></td>
                          <td className="p-3">25%</td>
                          <td className="p-3">25%</td>
                          <td className="p-3">40</td>
                          <td className="p-3">Limited variation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 mt-4">
                    <p className="text-gray-700"><strong>Expected 2026 aggregate cutoff for inclusion in rank list (CRL) is 25%, translating to ~40 Marks out of 160.</strong></p>
                  </div>
                </div>

                {/* AP EAMCET 2026 Marks vs Rank Analysis */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">AP EAMCET 2026 Marks vs Rank (Predicted Analysis)</h3>
                  
                  {/* General Category */}
                  <div className="p-4 mb-4">
                    <h4 className="font-semibold text-gray-700 mb-3">(A) General / Open Category</h4>
                  <div className="overflow-x-auto">
                      <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 text-left font-semibold text-gray-800">Marks Range</th>
                            <th className="p-2 text-left font-semibold text-gray-800">Expected AIR (CRL)</th>
                            <th className="p-2 text-left font-semibold text-gray-800">Remarks</th>
                        </tr>
                      </thead>
                        <tbody className="text-gray-700">
                        <tr>
                            <td className="p-2">150–160</td>
                            <td className="p-2">1–50</td>
                            <td className="p-2">JNTU Hyderabad CSE guaranteed</td>
                        </tr>
                        <tr>
                            <td className="p-2">140–149</td>
                            <td className="p-2">51–200</td>
                            <td className="p-2">Top 3 Universities (CSE, EE, ME)</td>
                        </tr>
                        <tr>
                            <td className="p-2">130–139</td>
                            <td className="p-2">201–500</td>
                            <td className="p-2">Top Universities (Mech, Civil, Engineering Physics)</td>
                        </tr>
                        <tr>
                            <td className="p-2">120–129</td>
                            <td className="p-2">501–1000</td>
                            <td className="p-2">SVU, AU branches</td>
                        </tr>
                        <tr>
                            <td className="p-2">110–119</td>
                            <td className="p-2">1001–2000</td>
                            <td className="p-2">IIT Hyderabad CSE & ECE</td>
                          </tr>
                          <tr>
                            <td className="p-2">100–109</td>
                            <td className="p-2">2001–5000</td>
                            <td className="p-2">Tier-II Universities like ANU, OU</td>
                          </tr>
                          <tr>
                            <td className="p-2">90–99</td>
                            <td className="p-2">5001–10000</td>
                            <td className="p-2">Entry into Metallurgy/Chemical programs</td>
                          </tr>
                          <tr>
                            <td className="p-2">80–89</td>
                            <td className="p-2">10001–20000</td>
                            <td className="p-2">Lower tier colleges</td>
                          </tr>
                          <tr>
                            <td className="p-2">70–79</td>
                            <td className="p-2">20001–35000</td>
                            <td className="p-2">Private colleges</td>
                          </tr>
                          <tr>
                            <td className="p-2">Below 70</td>
                            <td className="p-2">35000+</td>
                            <td className="p-2">Below cutoff for most colleges</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                  {/* BC Categories */}
                  <div className="p-4 mb-4">
                    <h4 className="font-semibold text-gray-700 mb-3">(B) BC Categories</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 text-left font-semibold text-gray-800">Marks</th>
                            <th className="p-2 text-left font-semibold text-gray-800">Rank Range</th>
                            <th className="p-2 text-left font-semibold text-gray-800">College Admission Example</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-2">140+</td>
                            <td className="p-2">1–100</td>
                            <td className="p-2">CSE JNTU Hyderabad, AU</td>
                          </tr>
                          <tr>
                            <td className="p-2">120–139</td>
                            <td className="p-2">100–500</td>
                            <td className="p-2">EE/ME SVU, AU, JNTU</td>
                          </tr>
                          <tr>
                            <td className="p-2">100–119</td>
                            <td className="p-2">500–1500</td>
                            <td className="p-2">ANU, OU—Core branches</td>
                          </tr>
                          <tr>
                            <td className="p-2">80–99</td>
                            <td className="p-2">1500–5000</td>
                            <td className="p-2">Other Universities, Interdisciplinary branches</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* SC Category */}
                  <div className="p-4 mb-4">
                    <h4 className="font-semibold text-gray-700 mb-3">(C) SC Category</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 text-left font-semibold text-gray-800">Marks</th>
                            <th className="p-2 text-left font-semibold text-gray-800">Rank</th>
                            <th className="p-2 text-left font-semibold text-gray-800">Admission Range</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-2">120+</td>
                            <td className="p-2">Top 50</td>
                            <td className="p-2">JNTU Hyderabad CSE</td>
                          </tr>
                          <tr>
                            <td className="p-2">100–119</td>
                            <td className="p-2">51–500</td>
                            <td className="p-2">All main Universities (EE, ME, CSE, Civil)</td>
                          </tr>
                          <tr>
                            <td className="p-2">80–99</td>
                            <td className="p-2">501–2000</td>
                            <td className="p-2">Tier-2 Universities</td>
                          </tr>
                          <tr>
                            <td className="p-2">60–79</td>
                            <td className="p-2">2001–5000</td>
                            <td className="p-2">Remaining Universities / specialized courses</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* ST Category */}
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-700 mb-3">(D) ST Category</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 text-left font-semibold text-gray-800">Marks</th>
                            <th className="p-2 text-left font-semibold text-gray-800">Rank</th>
                            <th className="p-2 text-left font-semibold text-gray-800">Admission Insight</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-2">100+</td>
                            <td className="p-2">1–20</td>
                            <td className="p-2">CSE JNTU Hyderabad, AU</td>
                          </tr>
                          <tr>
                            <td className="p-2">80–99</td>
                            <td className="p-2">21–200</td>
                            <td className="p-2">EE, ME, Civil across Universities</td>
                          </tr>
                          <tr>
                            <td className="p-2">60–79</td>
                            <td className="p-2">201–800</td>
                            <td className="p-2">ANU, OU, SVU</td>
                          </tr>
                          <tr>
                            <td className="p-2">40–59</td>
                            <td className="p-2">801–2000</td>
                            <td className="p-2">Peripheral Universities</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Expected University-wise Closing Ranks */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Expected University-wise Closing Ranks (General Category)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">University</th>
                          <th className="p-3 text-left font-semibold text-gray-800">CSE</th>
                          <th className="p-3 text-left font-semibold text-gray-800">EE</th>
                          <th className="p-3 text-left font-semibold text-gray-800">ECE</th>
                          <th className="p-3 text-left font-semibold text-gray-800">ME</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Civil</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Chemical</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">JNTU Hyderabad</td>
                          <td className="p-3">66</td>
                          <td className="p-3">433</td>
                          <td className="p-3">1085</td>
                          <td className="p-3">1834</td>
                          <td className="p-3">4250</td>
                          <td className="p-3">2464</td>
                        </tr>
                        <tr>
                          <td className="p-3">Andhra University</td>
                          <td className="p-3">200</td>
                          <td className="p-3">800</td>
                          <td className="p-3">1500</td>
                          <td className="p-3">2500</td>
                          <td className="p-3">4000</td>
                          <td className="p-3">3000</td>
                        </tr>
                        <tr>
                          <td className="p-3">SVU Tirupati</td>
                          <td className="p-3">500</td>
                          <td className="p-3">1200</td>
                          <td className="p-3">2000</td>
                          <td className="p-3">3000</td>
                          <td className="p-3">5000</td>
                          <td className="p-3">3500</td>
                        </tr>
                        <tr>
                          <td className="p-3">ANU Guntur</td>
                          <td className="p-3">800</td>
                          <td className="p-3">1800</td>
                          <td className="p-3">2500</td>
                          <td className="p-3">4000</td>
                          <td className="p-3">6000</td>
                          <td className="p-3">4500</td>
                        </tr>
                        <tr>
                          <td className="p-3">OU Hyderabad</td>
                          <td className="p-3">1000</td>
                          <td className="p-3">2200</td>
                          <td className="p-3">3000</td>
                          <td className="p-3">5000</td>
                          <td className="p-3">7000</td>
                          <td className="p-3">5500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Notes & Analysis</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Cutoff Trends</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Cutoffs vary significantly based on exam difficulty and number of applicants</li>
                        <li>Engineering stream typically has higher cutoffs than Agriculture stream</li>
                        <li>Computer Science Engineering consistently has the highest cutoffs</li>
                        <li>Reservation categories have different cutoff ranges based on seat availability</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Rank vs Marks Relationship</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Higher marks generally correspond to better ranks and college options</li>
                        <li>Rank distribution is not linear - small mark differences can mean significant rank changes</li>
                        <li>Previous year trends provide guidance but current year performance is key</li>
                        <li>Mock test performance can help predict actual exam performance</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Counselling Considerations</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Closing ranks may vary between counselling rounds</li>
                        <li>Seat availability changes based on withdrawals and new admissions</li>
                        <li>Branch-wise cutoffs depend on popularity and seat matrix</li>
                        <li>Reservation policies affect cutoff ranges for different categories</li>
                      </ul>
                    </div>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AP EAMCET 2026 Counselling Process – Ultra-Expanded & Structured Reference</h2>
              
              <div className="space-y-6">
                {/* Counselling Overview */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Overview</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Authority:</strong> Andhra Pradesh State Council of Higher Education (APSCHE)</li>
                        <li><strong>Exam:</strong> AP EAMCET (Andhra Pradesh Engineering, Agriculture & Pharmacy Common Entrance Test)</li>
                        <li><strong>Mode:</strong> Entirely Online, except for physical document verification (July–August 2026, multi-phase)</li>
                        <li><strong>Rounds:</strong> 3 Main rounds (plus sliding/spot/admission rounds)</li>
                        <li><strong>Registration Portal:</strong> <a href="https://eapcet-sche.aptonline.in/EAPCET" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">https://eapcet-sche.aptonline.in/EAPCET</a></li>
                      </ul>
                    </div>
                    </div>
                </div>

                {/* Key Dates & Phases */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Dates & Phases (Tentative for 2026)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Event</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Tentative Date</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">Notification for Counselling</td>
                          <td className="p-3">June 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3">Registration Start</td>
                          <td className="p-3">Late June 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3">Certificate/document Verification</td>
                          <td className="p-3">June–July 2026 (ongoing)</td>
                        </tr>
                        <tr>
                          <td className="p-3">Choice Filling and Locking</td>
                          <td className="p-3">July 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3">Seat Allotment Round 1</td>
                          <td className="p-3">July 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3">Seat Allotment Round 2</td>
                          <td className="p-3">August 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3">Spot Rounds/Sliding</td>
                          <td className="p-3">Mid–late August 2026</td>
                        </tr>
                        <tr>
                          <td className="p-3">Final Seat Allotment</td>
                          <td className="p-3">Late August 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Complete Counselling Steps */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Complete Counselling Steps</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Registration & Payment of Counselling Fee</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Candidate registers online at official portal using Hall Ticket & AP EAMCET rank</li>
                        <li>Fee: ₹1,200 for General/OBC, ₹600 for SC/ST (payable via debit/credit card, net banking)</li>
                        <li>Reference number provided after payment, to be used throughout the process</li>
                      </ul>
                        </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Document Verification (Physical/Online)</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Upload scanned documents online (see below) and/or attend designated help centers for in-person verification as directed</li>
                        <li>Data and eligibility are validated by officials; queries resolved live or via notification</li>
                      </ul>
                      </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Web Options Entry (Choice Filling)</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Log in and select preferred colleges and branches from entire list (322+ colleges, ~1.53 lakh seats, incl. state & private universities)</li>
                        <li>Enter options in priority order, with flexibility to revise/select multiple branches/colleges per round</li>
                        <li>View last year's cutoffs and predicted seat trends to inform choices</li>
                        <li>Lock web options before cutoff date</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Seat Allotment (Round-wise)</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Seats allotted based on AP EAMCET rank, reservation category, local/non-local status, gender, preferences, and seat matrix</li>
                        <li>Result posted online; candidates can download seat allotment letter</li>
                        <li>Seat acceptance requires payment of admission/tuition fee (amount varies by course/institute)</li>
                        <li>Multiple rounds allow for upgrades, internal branch sliding, and spot admission opportunities</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Reporting to Allotted College</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Self-reporting online, then physically visit college with original documents for verification and final admission confirmation</li>
                        <li>Failing to report within timeline results in seat forfeiture</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Internal Branch Sliding/Spot Admission</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Internal sliding allows movement to preferred branches if seats are vacated due to withdrawals</li>
                        <li>Spot admissions held after regular rounds for leftover/vacant seats (separate registration/fee required)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Eligibility to Participate */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Eligibility to Participate in Counselling</h3>
                  <div className="p-4">
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Must qualify AP EAMCET 2026 and obtain a valid rank</li>
                      <li>Class 12/equivalent with Physics, Chemistry, Maths for Engineering (BiPC for Pharmacy/Agriculture)</li>
                      <li>Minimum 45% (General), 40% (BC/SC/ST) in group subjects</li>
                      <li>At least 16 years of age by Dec 31, 2026</li>
                      <li>Non-local candidates must meet additional domicile criteria</li>
                    </ul>
                  </div>
                </div>

                {/* Documents Required */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed List of Documents Required (Verification/Admission)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Essential Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>AP EAMCET 2026 Hall Ticket (Admit Card)</li>
                        <li>AP EAMCET Rank Card</li>
                        <li>SSC/Class 10 marksheet & certificate (DOB proof)</li>
                        <li>Intermediate/Class 12 marksheet/memo (all semesters)</li>
                        <li>Transfer Certificate (TC)</li>
                        <li>Study Certificates (Class VI to Intermediate)</li>
                        <li>Aadhaar Card</li>
                        <li>Passport-size photographs (min. 4–6 copies, recent)</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Reservation/Category Documents</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>EWS Certificate (for OCs seeking EWS reservation)</li>
                        <li>Residence Certificate (last 7 years for private candidates)</li>
                        <li>Residence Certificate of father/mother for non-local candidates</li>
                        <li>Community/Caste Certificate (BC/SC/ST)</li>
                        <li>Integrated Community Certificate</li>
                        <li>Income Certificate/White Ration Card</li>
                        <li>Local Status Certificate (Telangana migrants)</li>
                        <li>Non-local certificate (if applicable)</li>
                        <li>Physically Handicapped certificate</li>
                        <li>NCC/Sports/Ex-servicemen certificate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Counselling Fee Details */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Fee Details</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Category</th>
                          <th className="p-3 text-left font-semibold text-gray-800">Fee (Processing/Counselling)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">General/OBC</td>
                          <td className="p-3">₹1,200</td>
                        </tr>
                        <tr>
                          <td className="p-3">SC/ST</td>
                          <td className="p-3">₹600</td>
                        </tr>
                        <tr>
                          <td className="p-3">Special Category</td>
                          <td className="p-3">Additional fee, varies per quota</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Seat Allocation System */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Seat Allocation System</h3>
                  <div className="p-4">
                    <ul className="list-disc list-inside text-teal-600 space-y-2">
                      <li><strong>Based on:</strong> Candidate's AP EAMCET rank, web option choices, reservation (SC/ST/OBC/EWS/PwD/NCC/Sports/Ex-Servicemen), local/non-local status</li>
                      <li><strong>Algorithm:</strong> Automated; seat matrix published before each round, highly transparent via official portal</li>
                      <li><strong>College List:</strong> 17 universities, 322 colleges, 1,53,000+ seats (engineering/agriculture/pharmacy streams)</li>
                      <li><strong>Quota:</strong> Open, reserved, gender-neutral, female-only, local/non-local (Andhra Pradesh/Telangana migration rules apply)</li>
                      <li><strong>Sliding:</strong> Prior to final round, branch upgrades allowed if candidate ranks and seat matrix permit</li>
                  </ul>
                </div>
              </div>

                {/* Reservation Matrix */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Reservation Matrix for AP EAMCET Counselling</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-yellow-100">
                        <tr>
                          <th className="p-3 text-left font-semibold text-gray-800">Category</th>
                          <th className="p-3 text-left font-semibold text-gray-800">% Reservation</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="p-3">OBC-A/B/C/D/E</td>
                          <td className="p-3">25%</td>
                        </tr>
                        <tr>
                          <td className="p-3">SC</td>
                          <td className="p-3">15%</td>
                        </tr>
                        <tr>
                          <td className="p-3">ST</td>
                          <td className="p-3">6%</td>
                        </tr>
                        <tr>
                          <td className="p-3">EWS</td>
                          <td className="p-3">10%</td>
                        </tr>
                        <tr>
                          <td className="p-3">PwD</td>
                          <td className="p-3">3%</td>
                        </tr>
                        <tr>
                          <td className="p-3">Girls</td>
                          <td className="p-3">33% (vertical, in each branch)</td>
                        </tr>
                        <tr>
                          <td className="p-3">Ex-Servicemen</td>
                          <td className="p-3">2%</td>
                        </tr>
                        <tr>
                          <td className="p-3">NCC/Sports</td>
                          <td className="p-3">1%</td>
                        </tr>
                      </tbody>
                    </table>
            </div>
                  <div className="p-4 mt-4">
                    <p className="text-yellow-600">All claims require valid central/state-format certificates uploaded and verified physically</p>
          </div>
                </div>

                {/* Counselling Support & FAQs */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Counselling Support & FAQs</h3>
                  <div className="space-y-4">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Support Channels</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li><strong>Help Centers:</strong> Over 40+ in-state centers for document verification and grievance redressal</li>
                        <li><strong>Counselling Helpline:</strong> Toll-free, live chat support, query ticketing via official portal</li>
                        <li><strong>Announcements:</strong> All dates, seat matrices, results, and notices posted online; candidates receive SMS/email alerts at each step</li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Special Protocols</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Migrated candidates (Telangana to Andhra Pradesh) considered as local for AP EAMCET seat allocation if certificates prove status</li>
                        <li>Sports/NCC quota checked during physical verification; limited seats available</li>
                        <li>PwD candidates must attend special help centers for medical board validation</li>
                        <li>Spot round admissions require additional physical documentation submission</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Useful Links */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Useful Links & Official Portals</h3>
                  <div className="p-4">
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><a href="https://eapcet-sche.aptonline.in/EAPCET" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">APSCHE official portal</a></li>
                      <li>Real-time counselling updates, help center list, notification archive, seat matrix publication, document verification tracking</li>
                    </ul>
                  </div>
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
                  src="/images/ap-eamcet-logo.png" 
                  alt="AP EAMCET Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  AP EAMCET 2026: Exam Dates, Pattern, Syllabus, Previous Year Papers, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium">#AP-EAMCET</span>
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
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Main Content Area */}
            <div>
            {renderTabContent()}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">AP EAMCET 2026 Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Seats</span>
                  <span className="font-semibold text-gray-800">2,50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Engineering Seats</span>
                  <span className="font-semibold text-gray-800">1,80,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Agriculture Seats</span>
                  <span className="font-semibold text-gray-800">70,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Exam Mode</span>
                  <span className="font-semibold text-gray-800">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-800">3 Hours</span>
                </div>
              </div>
            </div>

            {/* Engineering Admissions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Engineering Admissions OPEN</h3>
              
              {/* JNTU Hyderabad */}
              <div className="p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/jntu-hyderabad-logo.png" alt="JNTU Hyderabad" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">JNTU Hyderabad B.Tech</h4>
                    <p className="text-xs text-gray-600">Jawaharlal Nehru Technological University</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Top Engineering Institute | 5000+ Seats | AP EAMCET Based | Government Funded</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* Andhra University */}
              <div className="p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/andhra-university-logo.jpeg" alt="Andhra University" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">Andhra University B.Tech</h4>
                    <p className="text-xs text-gray-600">Andhra University</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Government University | 3000+ Seats | AP EAMCET Based | Excellent Placements</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* SVU */}
              <div className="p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/ap-eamcet-logo.png" alt="SVU" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">SVU Tirupati B.Tech</h4>
                    <p className="text-xs text-gray-600">Sri Venkateswara University</p>
          </div>
        </div>
                <p className="text-xs text-gray-600 mb-3">State University | 2000+ Seats | AP EAMCET Based | Research Focus</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* VIT */}
              <div className="p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src={vitLogo} alt="VIT Bhopal" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">VIT Bhopal B.Tech</h4>
                    <p className="text-xs text-gray-600">Vellore Institute of Technology</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Private Deemed University | 1500+ Seats | AP EAMCET Based | Industry Ready</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>
            </div>

            {/* Agriculture Admissions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Agriculture Admissions OPEN</h3>
              
              {/* ANGRAU */}
              <div className="p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-3">
                    <img src="/images/ap-eamcet-logo.png" alt="ANGRAU" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">ANGRAU B.Sc Agriculture</h4>
                    <p className="text-xs text-gray-600">Acharya N.G. Ranga Agricultural University</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Top Agriculture University | 2000+ Seats | AP EAMCET Based | Government Funded</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>

              {/* SV Agricultural College */}
              <div className="p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold text-sm">SVAC</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">SVAC Tirupati B.Sc Agriculture</h4>
                    <p className="text-xs text-gray-600">Sri Venkateswara Agricultural College</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-3">Agricultural College | 500+ Seats | AP EAMCET Based | Research Programs</p>
                <button className="w-full bg-green-500 text-white text-xs py-2 px-3 rounded hover:bg-green-600 transition">
                  ✓ Apply Now
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">AP EAMCET Official Website</a>
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">Application Form</a>
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">Syllabus & Pattern</a>
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">Previous Year Papers</a>
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">Cutoff Analysis</a>
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">Counselling Process</a>
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">College Predictor</a>
                <a href="#" className="block text-gray-700 hover:text-gray-800 text-sm">Helpline Numbers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APEAMCETPage;