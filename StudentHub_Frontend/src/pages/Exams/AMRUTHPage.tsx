import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AMRUTHPage() {
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Exam Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Name:</span>
                        <span className="text-gray-600">AMRUTH (All India Medical Research Undergraduate Test)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Conducting Authority:</span>
                        <span className="text-gray-600">All India Institute of Medical Sciences (AIIMS)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Level:</span>
                        <span className="text-gray-600">National Level Medical Entrance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Category:</span>
                        <span className="text-gray-600">Undergraduate Medical Entrance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Exam Frequency:</span>
                        <span className="text-gray-600">Once a year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Languages:</span>
                        <span className="text-gray-600">English and Hindi</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Exam Structure</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Mode:</span>
                        <span className="text-gray-600">Computer-Based Test (CBT)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Duration:</span>
                        <span className="text-gray-600">3 hours 30 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Total Questions:</span>
                        <span className="text-gray-600">200 questions</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Total Marks:</span>
                        <span className="text-gray-600">800 marks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Subjects:</span>
                        <span className="text-gray-600">Physics, Chemistry, Biology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">About AMRUTH</h3>
                <div className="p-4">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    AMRUTH (All India Medical Research Undergraduate Test) is a national-level medical entrance examination conducted by AIIMS for admission to undergraduate medical programs. The exam is designed to test candidates' knowledge in Physics, Chemistry, and Biology at the 10+2 level.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    AMRUTH serves as an alternative pathway for students seeking admission to medical colleges across India, providing opportunities for those who may not have qualified through other medical entrance examinations.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Participating Institutes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Primary Institutes</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All India Institute of Medical Sciences (AIIMS)</li>
                      <li>• Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER)</li>
                      <li>• Post Graduate Institute of Medical Education and Research (PGIMER)</li>
                      <li>• Various State Medical Colleges</li>
                    </ul>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Seat Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Total Seats:</span>
                        <span className="text-gray-600">~2,000+ seats</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Selection Process:</span>
                        <span className="text-gray-600">Merit-based</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Programs:</span>
                        <span className="text-gray-600">MBBS, BDS, B.Sc Nursing</span>
                      </div>
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026 Important Dates</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Event</th>
                      <th className="px-4 py-2 text-left">Tentative Date</th>
                      <th className="px-4 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-medium">Notification Release</td>
                      <td className="px-4 py-2">December 2025</td>
                      <td className="px-4 py-2">Official announcement</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Online Registration Opens</td>
                      <td className="px-4 py-2">January 2026</td>
                      <td className="px-4 py-2">Application portal opens</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Registration Closes</td>
                      <td className="px-4 py-2">February 2026</td>
                      <td className="px-4 py-2">Last date to apply</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Admit Card Release</td>
                      <td className="px-4 py-2">March 2026</td>
                      <td className="px-4 py-2">Download from portal</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 font-medium">Exam Date</td>
                      <td className="px-4 py-2 font-semibold">April 2026</td>
                      <td className="px-4 py-2">Computer-based test</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Answer Key Release</td>
                      <td className="px-4 py-2">Within 1 week post-exam</td>
                      <td className="px-4 py-2">Response sheet available</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Result Declaration</td>
                      <td className="px-4 py-2">May 2026</td>
                      <td className="px-4 py-2">Rank list published</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Counselling</td>
                      <td className="px-4 py-2">June 2026</td>
                      <td className="px-4 py-2">Seat allocation process</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'eligibility':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026 Eligibility Criteria</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Age Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700 font-medium">General Category</p>
                        <p className="text-gray-600 text-sm">Minimum 17 years, Maximum 25 years</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700 font-medium">SC/ST/OBC</p>
                        <p className="text-gray-600 text-sm">5-year relaxation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Academic Requirements</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700 font-medium">Qualification</p>
                        <p className="text-gray-600 text-sm">10+2 with Physics, Chemistry, Biology</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700 font-medium">Minimum Marks</p>
                        <p className="text-gray-600 text-sm">50% aggregate in PCB (40% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700 font-medium">Nationality</p>
                        <p className="text-gray-600 text-sm">Indian nationals only</p>
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
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026 Application Process</h2>
              
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <p className="font-semibold text-gray-800">Online Registration</p>
                      <p className="text-gray-600 text-sm">Register on official AMRUTH portal with valid email and mobile number</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <p className="font-semibold text-gray-800">Document Upload</p>
                      <p className="text-gray-600 text-sm">Upload required documents and photographs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <p className="font-semibold text-gray-800">Fee Payment</p>
                      <p className="text-gray-600 text-sm">Pay application fee online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <p className="font-semibold text-gray-800">Submit Application</p>
                      <p className="text-gray-600 text-sm">Review and submit the application form</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">5</div>
                    <div>
                      <p className="font-semibold text-gray-800">Download Admit Card</p>
                      <p className="text-gray-600 text-sm">Download admit card when available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026 Exam Pattern</h2>
              
              <div className="p-4">
                <div className="space-y-4">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Exam Structure</div>
                    <div className="text-gray-700 mt-2">
                      <p>Computer-Based Test (CBT) with 200 multiple choice questions</p>
                    </div>
                  </div>
                  
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Subject Distribution</div>
                    <div className="text-gray-700 mt-2">
                      <p>Physics (60), Chemistry (60), Biology (80)</p>
                    </div>
                  </div>
                  
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Marking Scheme</div>
                    <div className="text-gray-700 mt-2">
                      <p>+4 marks for correct answer, -1 mark for incorrect answer</p>
                    </div>
                  </div>
                  
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Duration</div>
                    <div className="text-gray-700 mt-2">
                      <p>3 hours 30 minutes</p>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026 Syllabus</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Physics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mechanics</li>
                    <li>• Thermodynamics</li>
                    <li>• Waves and Oscillations</li>
                    <li>• Electrostatics</li>
                    <li>• Current Electricity</li>
                    <li>• Magnetism</li>
                    <li>• Optics</li>
                    <li>• Modern Physics</li>
                  </ul>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Chemistry</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Physical Chemistry</li>
                    <li>• Inorganic Chemistry</li>
                    <li>• Organic Chemistry</li>
                    <li>• Chemical Bonding</li>
                    <li>• Thermodynamics</li>
                    <li>• Reaction Mechanisms</li>
                  </ul>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Biology</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Botany</li>
                    <li>• Zoology</li>
                    <li>• Cell Biology</li>
                    <li>• Ecology</li>
                    <li>• Biotechnology</li>
                    <li>• Evolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cutoff':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026 Cutoff Trends</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Expected Cutoff</th>
                      <th className="px-4 py-2 text-left">Approx Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 font-medium">General</td>
                      <td className="px-4 py-2">85-90%</td>
                      <td className="px-4 py-2">680-720</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">OBC-NCL</td>
                      <td className="px-4 py-2">80-85%</td>
                      <td className="px-4 py-2">640-680</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">SC</td>
                      <td className="px-4 py-2">70-75%</td>
                      <td className="px-4 py-2">560-600</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">ST</td>
                      <td className="px-4 py-2">65-70%</td>
                      <td className="px-4 py-2">520-560</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'counselling':
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026 Counselling Process</h2>
              
              <div className="p-4">
                <div className="space-y-4">
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Counselling Authority</div>
                    <div className="text-gray-700 mt-2">
                      <p>AIIMS conducts centralized counselling for AMRUTH qualified candidates</p>
                    </div>
                  </div>
                  
                  <div className="pl-4">
                    <div className="font-semibold text-gray-800">Process Steps</div>
                    <div className="text-gray-700 mt-2">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Online registration and choice filling</li>
                        <li>Multiple rounds of seat allotment</li>
                        <li>Seat acceptance fee payment and document upload</li>
                        <li>Physical reporting and verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AMRUTH 2026</h2>
              <p className="text-gray-600">Select a tab to view detailed information about AMRUTH 2026.</p>
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
            <span className="text-gray-800 font-medium">AMRUTH</span>
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">AM</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  AMRUTH 2026: Exam Dates, Pattern, Syllabus, Previous Year Papers, Cutoff and Latest Changes
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-600 font-medium">#AMRUTH</span>
                  <span className="text-gray-600 text-sm">All India Medical Research Undergraduate Test</span>
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
                        <span className="text-blue-600 font-bold text-sm">AM</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">AMRUTH B.Tech</div>
                        <div className="text-sm text-gray-600">All India Medical Research Undergraduate Test</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Top Medical Research Institute | 500+ Seats | AMRUTH Based | National Level
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      ✓ Apply Now
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">AM</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">AMRUTH B.Pharmacy</div>
                        <div className="text-sm text-gray-600">All India Medical Research Undergraduate Test</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Top Pharmacy Institute | 300+ Seats | AMRUTH Based | National Level
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
