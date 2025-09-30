import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Dashboard from "../../components/Exams/Dashboard";
import Filters from "../../components/Exams/Filters";
import ExamCard from "../../components/Exams/ExamCard";
import ExamDetailModal from "../../components/Exams/ExamDetailModal";
import SidebarQuickLinks from "../../components/Exams/SidebarQuickLinks";
import ToolsWidgets from "../../components/Exams/ToolsWidgets";
import NewsDates from "../../components/Exams/NewsDates";
import ReviewsFaqs from "../../components/Exams/ReviewsFaqs";
import ComprehensiveFaqs from "../../components/Exams/ComprehensiveFaqs";
import Resources from "../../components/Exams/Resources";

function ExamsHome() {
  const [filters, setFilters] = useState({ stream: '' });
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recommendedExams = [
    { id: 'jee-main', title: 'JEE Main', subtitle: 'B.Tech Admissions', href: '/exams/jee-main' },
    { id: 'neet', title: 'NEET', subtitle: 'MBBS/Medical', href: '/exams/neet' },
  ];
  const recommendedColleges = [
    { id: 'iitb', title: 'IIT Bombay', subtitle: 'Mumbai, Maharashtra', href: '/engineering-colleges/iit-bombay' },
    { id: 'aiimsd', title: 'AIIMS Delhi', subtitle: 'New Delhi', href: '/medical-colleges/aiims-delhi' },
  ];

  const exams = [
    {
      title: 'EAMCET',
      code: 'eamcet',
      latestNotice: 'Hall tickets expected next week',
      nextDate: 'Forms close: Oct 10',
      stream: 'Engineering',
      state: 'Telangana',
      level: 'State',
      eligibility: '10+2 with PCM/PCB as required',
    },
    {
      title: 'JEE Main',
      code: 'jee-main',
      latestNotice: 'Session 1 notification out',
      nextDate: 'Registration: Nov 15',
      stream: 'Engineering',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with PCM',
    },
    {
      title: 'JEE Advanced',
      code: 'jee-advanced',
      latestNotice: 'Official brochure soon',
      nextDate: 'Exam: Jun 2',
      stream: 'Engineering',
      state: 'All India',
      level: 'National',
      eligibility: 'Qualified JEE Main + other criteria',
    },
    {
      title: 'VITEEE',
      code: 'viteee',
      latestNotice: 'Registration open',
      nextDate: 'Exam: Apr 19-30',
      stream: 'Engineering',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with PCM',
    },
    {
      title: 'BITSAT',
      code: 'bitsat',
      latestNotice: 'Application window open',
      nextDate: 'Exam: May 21-Jun 1',
      stream: 'Engineering',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with PCM',
    },
    {
      title: 'SRMJEEE',
      code: 'srmjee',
      latestNotice: 'Registration open',
      nextDate: 'Exam: Apr 25-May 5',
      stream: 'Engineering',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with PCM',
    },
    {
      title: 'NEET',
      code: 'neet',
      latestNotice: 'Syllabus unchanged this year',
      nextDate: 'Exam: May 4',
      stream: 'Medical',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with PCB',
    },
    // Medical
    {
      title: 'AIIMS MBBS (via NEET)',
      code: 'neet',
      stream: 'Medical',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with PCB',
      latestNotice: 'AIIMS admissions via NEET',
    },
    {
      title: 'JIPMER MBBS (via NEET)',
      code: 'neet',
      stream: 'Medical',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with PCB',
      latestNotice: 'JIPMER admissions via NEET',
    },
    // Law
    {
      title: 'CLAT (UG)',
      code: 'clat',
      stream: 'Law',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 in any stream',
      latestNotice: 'Application window open',
      applicationLink: '/exams/clat#application',
    },
    {
      title: 'AILET (UG)',
      code: 'ailet',
      stream: 'Law',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 in any stream',
    },
    {
      title: 'LSAT—India (UG)',
      code: 'lsat-india',
      stream: 'Law',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 in any stream',
    },
    {
      title: 'SLAT (Symbiosis Law)',
      code: 'slat',
      stream: 'Law',
      state: 'All India',
      level: 'University',
      eligibility: '10+2 in any stream',
    },
    // Agriculture
    {
      title: 'ICAR AIEEA-UG',
      code: 'icar-aieea-ug',
      stream: 'Agriculture',
      state: 'All India',
      level: 'National',
      eligibility: '10+2 with Agriculture/PCB/PCM as applicable',
    },
    {
      title: 'EAMCET (Agriculture)',
      code: 'eamcet',
      stream: 'Agriculture',
      state: 'Telangana',
      level: 'State',
      eligibility: '10+2 with relevant subjects',
    },
    // Engineering - State level
    {
      title: 'TS EAMCET (Engineering)',
      code: 'ts-eamcet',
      stream: 'Engineering',
      state: 'Telangana',
      level: 'State',
      eligibility: '10+2 with PCM',
      latestNotice: 'Internal Sliding ongoing - 116,877 seats available',
      nextDate: 'Counselling Phase 3 ongoing',
    },
    {
      title: 'AP EAMCET / EAPCET (Engineering)',
      code: 'ap-eamcet',
      stream: 'Engineering',
      state: 'Andhra Pradesh',
      level: 'State',
      eligibility: '10+2 with PCM',
    },
    {
      title: 'MHT CET (Engineering)',
      code: 'mht-cet',
      stream: 'Engineering',
      state: 'Maharashtra',
      level: 'State',
      eligibility: '10+2 with PCM',
    },
    {
      title: 'KCET (Engineering)',
      code: 'kcet',
      stream: 'Engineering',
      state: 'Karnataka',
      level: 'State',
      eligibility: '10+2 with PCM',
    },
    {
      title: 'KEAM (Engineering)',
      code: 'keam',
      stream: 'Engineering',
      state: 'Kerala',
      level: 'State',
      eligibility: '10+2 with PCM',
    },
    // Medical - State level (where applicable via NEET counseling)
    // Law - State level
    {
      title: 'MH CET Law (UG)',
      code: 'mh-cet-law',
      stream: 'Law',
      state: 'Maharashtra',
      level: 'State',
      eligibility: '10+2 in any stream',
    },
    {
      title: 'TS LAWCET',
      code: 'ts-lawcet',
      stream: 'Law',
      state: 'Telangana',
      level: 'State',
      eligibility: '10+2 in any stream',
    },
    {
      title: 'AP LAWCET',
      code: 'ap-lawcet',
      stream: 'Law',
      state: 'Andhra Pradesh',
      level: 'State',
      eligibility: '10+2 in any stream',
    },
  ];

  const filteredExams = exams.filter((ex) => {
    const byStream = !filters.stream || ex.stream === filters.stream;
    return byStream;
  });

  const handleViewDetails = (examCode: string) => {
    setSelectedExam(examCode);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExam(null);
  };

  const news = [
    { id: 'n1', title: 'JEE Main session schedule announced', href: '/news/jee-main-schedule', time: '2h ago' },
    { id: 'n2', title: 'NEET eligibility criteria clarified', href: '/news/neet-eligibility', time: '1d ago' },
  ];
  const dates = [
    { id: 'd1', label: 'JEE Main Reg. Opens', date: 'Nov 15' },
    { id: 'd2', label: 'NEET Application Start', date: 'Jan 2' },
  ];

  const reviews = [
    { id: 'r1', user: 'Ananya', rating: 5, text: 'Mock tests here are super helpful and realistic.' },
    { id: 'r2', user: 'Arjun', rating: 4, text: 'Great curation of resources and timelines.' },
  ];
  const faqs = [
    { id: 'f1', q: 'How many attempts for JEE Main?', a: 'As per NTA, there are multiple sessions each year; please refer to official guidelines.' },
    { id: 'f2', q: 'Is NEET syllabus same as last year?', a: 'Broadly yes; check the official information bulletin for any revisions.' },
  ];

  const mockTests = [
    { id: 'm1', title: 'JEE Main Mock Test 1', href: '/mock-tests' },
    { id: 'm2', title: 'NEET Biology Practice', href: '/mock-tests' },
  ];
  const downloads = [
    { id: 'dl1', title: 'JEE Main Syllabus PDF', href: '/exams/jee-main#syllabus' },
    { id: 'dl2', title: 'NEET Previous Year Papers', href: '/exams/neet#papers' },
  ];
  const stats = [
    { label: 'JEE Main Applicants (last year)', value: '11.3 Lakh' },
    { label: 'NEET Applicants (last year)', value: '20.4 Lakh' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Exams</h1>

      <Dashboard recommendedExams={recommendedExams} recommendedColleges={recommendedColleges} />

      <div className="mb-6">
        <SidebarQuickLinks />
      </div>

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

      <ExamDetailModal
        examCode={selectedExam || ''}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Outlet />
    </div>
  );
}

export default ExamsHome;


