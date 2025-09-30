import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Dashboard from "../../components/Exams/Dashboard";
import Filters from "../../components/Exams/Filters";
import ExamCard from "../../components/Exams/ExamCard";
import EnhancedExamDetailModal from "../../components/Exams/EnhancedExamDetailModal";
import ScrollableExamReference from "../../components/Exams/ScrollableExamReference";
import SidebarQuickLinks from "../../components/Exams/SidebarQuickLinks";
import ToolsWidgets from "../../components/Exams/ToolsWidgets";
import NewsDates from "../../components/Exams/NewsDates";
import ReviewsFaqs from "../../components/Exams/ReviewsFaqs";
import ComprehensiveFaqs from "../../components/Exams/ComprehensiveFaqs";
import Resources from "../../components/Exams/Resources";
import { ComprehensiveExamData, allComprehensiveExamData } from "../../data/comprehensiveExamData";

function EnhancedExamsHome() {
  const [filters, setFilters] = useState({ stream: '', searchTerm: '', level: 'All' });
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'reference'>('grid');

  const recommendedExams = [
    { id: 'jee-main', title: 'JEE Main', subtitle: 'B.Tech Admissions', href: '/exams/jee-main' },
    { id: 'neet-ug', title: 'NEET', subtitle: 'MBBS/Medical', href: '/exams/neet-ug' },
    { id: 'clat-ug', title: 'CLAT', subtitle: 'Law Admissions', href: '/exams/clat-ug' },
  ];
  
  const recommendedColleges = [
    { id: 'iitb', title: 'IIT Bombay', subtitle: 'Mumbai, Maharashtra', href: '/engineering-colleges/iit-bombay' },
    { id: 'aiimsd', title: 'AIIMS Delhi', subtitle: 'New Delhi', href: '/medical-colleges/aiims-delhi' },
    { id: 'nlu-delhi', title: 'NLU Delhi', subtitle: 'New Delhi', href: '/law-colleges/nlu-delhi' },
  ];

  // Convert comprehensive exam data to the format expected by ExamCard
  const exams = allComprehensiveExamData.map(exam => ({
    title: exam.title,
    code: exam.code,
    latestNotice: `${exam.conductingAuthority} - ${exam.frequency}`,
    nextDate: `Application: ${exam.importantDates.applicationStart}`,
    stream: exam.category,
    state: exam.states.join(', '),
    level: exam.level,
    eligibility: exam.eligibility,
    applicationLink: exam.resources.applicationLink,
    syllabusLink: exam.resources.syllabusLink,
    resultsLink: '#',
    counsellingLink: exam.counseling.website,
  }));

  const filteredExams = exams.filter((ex) => {
    const byStream = !filters.stream || ex.stream === filters.stream;
    const bySearch = !filters.searchTerm || 
      ex.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      ex.stream.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const byLevel = filters.level === 'All' || ex.level === filters.level;
    
    return byStream && bySearch && byLevel;
  });

  const handleViewDetails = (examCode: string) => {
    setSelectedExam(examCode);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExam(null);
  };

  const handleExamSelect = (exam: ComprehensiveExamData) => {
    setSelectedExam(exam.code);
    setIsModalOpen(true);
  };

  const news = [
    { id: 'n1', title: 'JEE Main 2025 session schedule announced', href: '/news/jee-main-schedule', time: '2h ago' },
    { id: 'n2', title: 'NEET 2025 eligibility criteria clarified', href: '/news/neet-eligibility', time: '1d ago' },
    { id: 'n3', title: 'CLAT 2025 registration opens', href: '/news/clat-registration', time: '3d ago' },
  ];
  
  const dates = [
    { id: 'd1', label: 'JEE Main Reg. Opens', date: 'Nov 15' },
    { id: 'd2', label: 'NEET Application Start', date: 'Jan 2' },
    { id: 'd3', label: 'CLAT Registration', date: 'Jan 1' },
  ];

  const reviews = [
    { id: 'r1', user: 'Ananya', rating: 5, text: 'Comprehensive exam information and realistic mock tests.' },
    { id: 'r2', user: 'Arjun', rating: 4, text: 'Great curation of resources and detailed timelines.' },
    { id: 'r3', user: 'Priya', rating: 5, text: 'Excellent reference for all entrance exams in one place.' },
  ];
  
  const faqs = [
    { id: 'f1', q: 'How many attempts for JEE Main?', a: 'There is no limit on the number of attempts for JEE Main. Students can appear for the exam as many times as they want.' },
    { id: 'f2', q: 'Is NEET syllabus same as last year?', a: 'The NEET syllabus is generally consistent, but students should check the official information bulletin for any updates.' },
    { id: 'f3', q: 'What is the difference between CLAT and AILET?', a: 'CLAT is for admission to 22 NLUs while AILET is specifically for NLU Delhi. Both have similar patterns but AILET is conducted separately.' },
  ];

  const mockTests = [
    { id: 'm1', title: 'JEE Main Mock Test Series', href: '/mock-tests/jee-main' },
    { id: 'm2', title: 'NEET Biology Practice Tests', href: '/mock-tests/neet' },
    { id: 'm3', title: 'CLAT Logical Reasoning', href: '/mock-tests/clat' },
  ];
  
  const downloads = [
    { id: 'dl1', title: 'JEE Main Syllabus PDF', href: '/exams/jee-main#syllabus' },
    { id: 'dl2', title: 'NEET Previous Year Papers', href: '/exams/neet#papers' },
    { id: 'dl3', title: 'CLAT Sample Papers', href: '/exams/clat#papers' },
  ];
  
  const stats = [
    { label: 'JEE Main Applicants (2024)', value: '11.3 Lakh' },
    { label: 'NEET Applicants (2024)', value: '20.4 Lakh' },
    { label: 'CLAT Applicants (2024)', value: '1.2 Lakh' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Comprehensive Exam Information</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'grid' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('reference')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'reference' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Reference View
          </button>
        </div>
      </div>

      <Dashboard recommendedExams={recommendedExams} recommendedColleges={recommendedColleges} />

      <div className="mb-6">
        <SidebarQuickLinks />
      </div>

      {viewMode === 'grid' ? (
        <>
          <div className="mb-4">
            <Filters value={filters} onChange={setFilters} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {filteredExams.map(ex => (
              <ExamCard
                key={`${ex.code}-${ex.title}`}
                title={ex.title}
                code={ex.code}
                latestNotice={ex.latestNotice}
                nextDate={ex.nextDate}
                eligibility={ex.eligibility}
                stateLabel={ex.state}
                level={ex.level}
                applicationLink={ex.applicationLink}
                syllabusLink={ex.syllabusLink}
                resultsLink={ex.resultsLink}
                counsellingLink={ex.counsellingLink}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          <ToolsWidgets />

          <div className="mt-6">
            <NewsDates news={news} dates={dates} />
          </div>

          <div className="mt-6">
            <ReviewsFaqs reviews={reviews} faqs={faqs} />
          </div>

          <div className="mt-6">
            <ComprehensiveFaqs />
          </div>

          <div className="mt-6">
            <Resources mockTests={mockTests} downloads={downloads} stats={stats} />
          </div>
        </>
      ) : (
        <ScrollableExamReference onExamSelect={handleExamSelect} />
      )}

      <EnhancedExamDetailModal
        examCode={selectedExam || ''}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Outlet />
    </div>
  );
}

export default EnhancedExamsHome;
