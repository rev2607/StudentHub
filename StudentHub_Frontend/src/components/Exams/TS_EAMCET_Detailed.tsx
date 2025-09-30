import { useState } from 'react';
import { Calendar, Award, BookOpen, ChevronDown, ChevronUp, Phone, Mail, MapPin, CheckCircle, AlertCircle, Info } from 'lucide-react';

function TS_EAMCET_Detailed() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview', 'timeline', 'pattern']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const timelineData = [
    { event: 'First Official Notification', date: 'February 20, 2025', status: 'upcoming' },
    { event: 'Application Form Release', date: 'March 1, 2025', status: 'upcoming' },
    { event: 'Last Date to Apply (without late fee)', date: 'April 4, 2025', status: 'upcoming' },
    { event: 'Application Correction Window', date: 'April 6–8, 2025', status: 'upcoming' },
    { event: 'Last Date (Late Fee ₹250)', date: 'April 8, 2025', status: 'upcoming' },
    { event: 'Last Date (Late Fee ₹500)', date: 'April 9, 2025', status: 'upcoming' },
    { event: 'Last Date (Late Fee ₹2,500)', date: 'April 18, 2025', status: 'upcoming' },
    { event: 'Last Date (Late Fee ₹5,000)', date: 'April 24, 2025', status: 'upcoming' },
    { event: 'Admit Card Download (A&P)', date: 'April 19, 2025', status: 'upcoming' },
    { event: 'Admit Card Download (Engineering)', date: 'April 22, 2025', status: 'upcoming' },
    { event: 'Exam Dates (Agriculture & Pharmacy)', date: 'April 29–30, 2025', status: 'upcoming' },
    { event: 'Exam Dates (Engineering)', date: 'May 2–5, 2025', status: 'upcoming' },
    { event: 'Answer Key & Challenge', date: 'May 4–7, 2025', status: 'upcoming' },
    { event: 'Result Declaration & Rank Card Download', date: 'May 11, 2025', status: 'upcoming' },
    { event: 'Counselling Registration (Phase 1)', date: 'June 28–July 7, 2025', status: 'upcoming' },
    { event: 'Certificate Verification', date: 'July 1–8, 2025', status: 'upcoming' },
    { event: 'Choice Filling/Option Entry', date: 'July 6–10, 2025', status: 'upcoming' },
    { event: 'Mock Allotment Result/Modification of Options', date: 'July 12–15, 2025', status: 'upcoming' },
    { event: 'First Seat Allotment & Tuition Fee Payment', date: 'July 18–22, 2025', status: 'upcoming' },
    { event: '2nd Phase Counseling Registration', date: 'July 25, 2025 and onwards', status: 'upcoming' },
    { event: 'Final Phase Counseling (Internal sliding, spot admissions)', date: 'Early August to late August 2025', status: 'upcoming' },
    { event: 'College Reporting (after seat acceptance)', date: 'By August 23, 2025', status: 'upcoming' }
  ];

  const examPatternData = [
    { stream: 'Engineering', subjects: 'Mathematics (80), Physics (40), Chemistry (40)', questions: 160, marks: 160, duration: '3 hrs' },
    { stream: 'Agriculture/Pharmacy', subjects: 'Biology/Botany+Zoology (80), Physics (40), Chemistry (40)', questions: 160, marks: 160, duration: '3 hrs' }
  ];

  const syllabusData = {
    Mathematics: ['Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Probability', 'Vectors'],
    Physics: ['Mechanics', 'Thermodynamics', 'Optics', 'Electromagnetics', 'Modern Physics'],
    Chemistry: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Environmental Chemistry'],
    Biology: ['Cell Biology', 'Genetics', 'Physiology', 'Ecology', 'Microbiology', 'Human Biology']
  };

  const marksRankAnalysis = [
    { marks: '155–160', rank: '1–50', description: 'CSE/Top branches in best colleges' },
    { marks: '150–154', rank: '51–200', description: 'Premium options in other branches' },
    { marks: '140–149', rank: '201–500', description: 'Secured seat in good branches' },
    { marks: '130–139', rank: '500–1,000', description: 'Best branches possible in private colleges' }
  ];

  const faqs = [
    {
      question: 'What is TS EAMCET?',
      answer: 'TS EAMCET (Telangana State Engineering, Agriculture & Medical Common Entrance Test) is the gateway for undergraduate admission to engineering, agriculture, pharmacy, and related programs in Telangana. Conducted annually by JNTUH on behalf of TSCHE, this CBT exam is one of the largest state-level entrance tests in India.'
    },
    {
      question: 'Is there negative marking in TS EAMCET?',
      answer: 'No, there is no negative marking. Only positive marks (+1) are awarded for correct answers. You can "guess" if unsure without penalty.'
    },
    {
      question: 'What are the exam timings?',
      answer: 'Morning session: 9:00 AM–12:00 PM; Afternoon session: 3:00 PM–6:00 PM'
    },
    {
      question: 'What languages are available for the exam?',
      answer: 'English, Telugu, and Urdu (Urdu only in Hyderabad centers)'
    },
    {
      question: 'What is the application fee?',
      answer: '₹900 for General category, ₹500 for reserved categories per stream'
    },
    {
      question: 'Can I challenge the answer key?',
      answer: 'Yes, candidates can challenge the preliminary answer key during the designated window (May 4-7, 2025)'
    },
    {
      question: 'What is internal sliding?',
      answer: 'Internal sliding allows branch changes within the same college before joining, based on availability and merit.'
    },
    {
      question: 'What documents are required for counseling?',
      answer: 'All original certificates, hall ticket, SSC/10th, Inter/12th, income/caste/domicile certificates are required.'
    },
    {
      question: 'What if I miss my counseling slot?',
      answer: 'You can attend the next available phase with requisite documents, but delay may reduce chances for preferred branches.'
    },
    {
      question: 'How are ranks calculated?',
      answer: 'Ranks are calculated through normalized marks if the exam is held in multiple sessions/shifts.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-4">TS EAMCET 2025: Complete Exam Overview</h1>
        <p className="text-xl opacity-90">
          Telangana State Engineering, Agriculture & Medical Common Entrance Test
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">State Level</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Computer-Based Test</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">320+ Participating Colleges</span>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <button
          onClick={() => toggleSection('overview')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <Info className="h-5 w-5 mr-2" />
            What is TS EAMCET?
          </h2>
          {expandedSections.has('overview') ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.has('overview') && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Exam Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Exam Level:</strong> Undergraduate, state-level</li>
                  <li><strong>Exam Streams:</strong> Engineering, Agriculture, Pharmacy</li>
                  <li><strong>Exam Mode:</strong> Computer-Based Test (online)</li>
                  <li><strong>Medium:</strong> English, Telugu, Urdu (Hyderabad only)</li>
                  <li><strong>Eligibility:</strong> 10+2 with relevant subjects (PCM or PCB); 45% (Gen.), 40% (reserved); minimum age 17</li>
                  <li><strong>Participating Colleges:</strong> Over 320 university and private colleges</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Official Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Official Website:</strong> <a href="https://eamcet.tsche.ac.in" className="text-blue-600 hover:underline">eamcet.tsche.ac.in</a></li>
                  <li><strong>Alternative Website:</strong> <a href="https://eapcet.tgche.ac.in" className="text-blue-600 hover:underline">eapcet.tgche.ac.in</a></li>
                  <li><strong>Help Desk:</strong> +91-7416923578, +91-7416908215</li>
                  <li><strong>Email:</strong> tseamcethelpdesk2025@jntuh.ac.in</li>
                  <li><strong>Timings:</strong> 10am–5pm (Excl. Sundays, Public Holidays)</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Complete Timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <button
          onClick={() => toggleSection('timeline')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Complete Key Dates & Timeline (2025)
          </h2>
          {expandedSections.has('timeline') ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.has('timeline') && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="mt-4 space-y-3">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.event}</h4>
                    <p className="text-gray-600">{item.date}</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    Upcoming
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Exam Pattern */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <button
          onClick={() => toggleSection('pattern')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Exam Pattern & Structure
          </h2>
          {expandedSections.has('pattern') ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.has('pattern') && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Stream</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Subjects</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Questions</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Total Marks</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examPatternData.map((pattern, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{pattern.stream}</td>
                        <td className="border border-gray-300 px-4 py-2">{pattern.subjects}</td>
                        <td className="border border-gray-300 px-4 py-2">{pattern.questions}</td>
                        <td className="border border-gray-300 px-4 py-2">{pattern.marks}</td>
                        <td className="border border-gray-300 px-4 py-2">{pattern.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-1">Type</h4>
                  <p className="text-blue-700">Objective, Multiple Choice</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-1">Marking Scheme</h4>
                  <p className="text-green-700">+1 for correct, no negative marking</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-1">Exam Shifts</h4>
                  <p className="text-purple-700">Morning (9:00 am–12:00 pm) & Afternoon (3:00 pm–6:00 pm)</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Syllabus Coverage */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <button
          onClick={() => toggleSection('syllabus')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Syllabus Coverage
          </h2>
          {expandedSections.has('syllabus') ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.has('syllabus') && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(syllabusData).map(([subject, topics]) => (
                <div key={subject} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{subject}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {topics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Marks vs Rank Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <button
          onClick={() => toggleSection('marks-rank')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Marks vs Rank Analysis
          </h2>
          {expandedSections.has('marks-rank') ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.has('marks-rank') && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="mt-4 space-y-3">
              {marksRankAnalysis.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-semibold text-gray-900">{item.marks} marks</span>
                    <span className="text-gray-600 mx-2">→</span>
                    <span className="font-medium text-blue-600">Rank {item.rank}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-600 inline mr-2" />
              <span className="text-yellow-800 font-medium">Note:</span>
              <span className="text-yellow-700 ml-2">Cutoff varies by branch, college, and category</span>
            </div>
          </div>
        )}
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <button
          onClick={() => toggleSection('faqs')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            Frequently Asked Questions
          </h2>
          {expandedSections.has('faqs') ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        
        {expandedSections.has('faqs') && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="mt-4 space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Phone className="h-5 w-5 mr-2" />
          Contact & Support
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600">+91-7416923578</p>
              <p className="text-gray-600">+91-7416908215</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">tseamcethelpdesk2025@jntuh.ac.in</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-gray-600">Examinations Building, JNTU Hyderabad Kukatpally, Hyderabad - 500085</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Timings:</strong> 10am–5pm (Excluding Sundays, Public Holidays)
          </p>
        </div>
      </div>
    </div>
  );
}

export default TS_EAMCET_Detailed;
