import { useState, useEffect } from 'react';
import { X, Calendar, FileText, Download, ExternalLink, Star, Users, Clock, CheckCircle, AlertCircle, BookOpen, Award, Building } from 'lucide-react';
import { ComprehensiveExamData, allComprehensiveExamData } from '../../data/comprehensiveExamData';

interface EnhancedExamDetailModalProps {
  examCode: string;
  isOpen: boolean;
  onClose: () => void;
}

function EnhancedExamDetailModal({ examCode, isOpen, onClose }: EnhancedExamDetailModalProps) {
  const [examDetail, setExamDetail] = useState<ComprehensiveExamData | null>(null);

  useEffect(() => {
    if (examCode && isOpen) {
      const exam = allComprehensiveExamData.find(exam => exam.code === examCode);
      setExamDetail(exam || null);
    }
  }, [examCode, isOpen]);

  if (!isOpen || !examDetail) return null;

  const getCategoryColor = (category: string) => {
    const colors = {
      'Engineering': 'bg-blue-100 text-blue-800',
      'Medical': 'bg-red-100 text-red-800',
      'Law': 'bg-purple-100 text-purple-800',
      'Design': 'bg-pink-100 text-pink-800',
      'Architecture': 'bg-orange-100 text-orange-800',
      'Science': 'bg-green-100 text-green-800',
      'Agriculture': 'bg-yellow-100 text-yellow-800',
      'Management': 'bg-indigo-100 text-indigo-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'National': 'bg-green-100 text-green-800',
      'State': 'bg-blue-100 text-blue-800',
      'University': 'bg-purple-100 text-purple-800',
      'International': 'bg-yellow-100 text-yellow-800'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(examDetail.category)}`}>
                {examDetail.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(examDetail.level)}`}>
                {examDetail.level}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{examDetail.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Overview Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600">{examDetail.description}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Conducting Authority</h4>
                <p className="text-gray-600">{examDetail.conductingAuthority}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Eligibility</h4>
                <p className="text-gray-600">{examDetail.eligibility}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">States</h4>
                <p className="text-gray-600">{examDetail.states.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Exam Pattern Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Exam Pattern
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-1">Duration</h4>
                <p className="text-blue-700">{examDetail.examPattern.duration}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-1">Questions</h4>
                <p className="text-green-700">{examDetail.examPattern.questions}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-1">Marking</h4>
                <p className="text-purple-700">{examDetail.examPattern.marking}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-medium text-orange-900 mb-1">Mode</h4>
                <p className="text-orange-700">{examDetail.mode}</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {examDetail.examPattern.subjects.map((subject, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Important Dates Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Important Dates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-1">Application Start</h4>
                <p className="text-gray-600">{examDetail.importantDates.applicationStart}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-1">Application End</h4>
                <p className="text-gray-600">{examDetail.importantDates.applicationEnd}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-1">Admit Card Release</h4>
                <p className="text-gray-600">{examDetail.importantDates.admitCardRelease}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-1">Exam Date</h4>
                <p className="text-gray-600">{examDetail.importantDates.examDate}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-1">Result Date</h4>
                <p className="text-gray-600">{examDetail.importantDates.resultDate}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-1">Counseling Start</h4>
                <p className="text-gray-600">{examDetail.importantDates.counselingStart}</p>
              </div>
            </div>
          </div>

          {/* Syllabus Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Syllabus
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {examDetail.syllabus.map((subject, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{subject}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={examDetail.resources.syllabusLink}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Syllabus
                </a>
              </div>
            </div>
          </div>

          {/* Participating Colleges Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Participating Colleges
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {examDetail.participatingColleges.map((college, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">{college}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Counseling Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Counseling Process
            </h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Counseling Authority</h4>
                <p className="text-gray-600">{examDetail.counseling.authority}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Process Steps</h4>
                <div className="space-y-2">
                  {examDetail.counseling.process.map((step, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <a
                  href={examDetail.counseling.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Counseling Website
                </a>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href={examDetail.resources.syllabusLink}
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-blue-800 font-medium">Syllabus</span>
              </a>
              <a
                href={examDetail.resources.previousPapers}
                className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <FileText className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800 font-medium">Previous Papers</span>
              </a>
              <a
                href={examDetail.resources.mockTests}
                className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <Star className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-purple-800 font-medium">Mock Tests</span>
              </a>
              <a
                href={examDetail.resources.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-orange-600 mr-3" />
                <span className="text-orange-800 font-medium">Apply Now</span>
              </a>
            </div>
          </div>

          {/* FAQs Section */}
          {examDetail.faqs.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {examDetail.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnhancedExamDetailModal;
