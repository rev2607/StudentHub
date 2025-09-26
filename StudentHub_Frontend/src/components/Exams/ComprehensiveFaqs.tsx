interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  title: string;
  icon: string;
  faqs: FaqItem[];
}

interface ComprehensiveFaqsProps {
  className?: string;
}

function ComprehensiveFaqs({ className = "" }: ComprehensiveFaqsProps) {
  const faqSections: FaqSection[] = [
    {
      id: 'law',
      title: 'Law Stream FAQs',
      icon: '⚖️',
      faqs: [
        {
          id: 'law-1',
          question: 'What are the eligibility requirements for CLAT and LSAT-India?',
          answer: 'For CLAT: 10+2 with minimum 45% marks (40% for SC/ST). No age limit. For LSAT-India: 10+2 from any recognized board with no minimum percentage requirement. Both exams are open to students from any stream (Science, Commerce, Arts).'
        },
        {
          id: 'law-2',
          question: 'How many law entrance exams are conducted at state and national level?',
          answer: 'National level: CLAT, AILET, LSAT-India, SLAT. State level: MH CET Law (Maharashtra), TS LAWCET (Telangana), AP LAWCET (Andhra Pradesh), and many other state-specific law entrance exams. Each state typically conducts its own law entrance for state law colleges.'
        },
        {
          id: 'law-3',
          question: 'Can students from any stream take law entrance after 12th?',
          answer: 'Yes, law entrance exams are open to students from all streams - Science, Commerce, and Arts. The exams test general knowledge, logical reasoning, legal aptitude, and English language skills rather than subject-specific knowledge.'
        },
        {
          id: 'law-4',
          question: 'When does the law entrance application window usually open?',
          answer: 'CLAT applications typically open in January-February with exams in May-June. AILET applications open around March-April. LSAT-India has multiple sessions throughout the year. State law entrance applications usually open between March-May.'
        }
      ]
    },
    {
      id: 'medical',
      title: 'Medical Stream FAQs',
      icon: '🏥',
      faqs: [
        {
          id: 'med-1',
          question: 'What are the eligibility requirements for NEET and other medical entrance exams?',
          answer: 'For NEET: 10+2 with Physics, Chemistry, Biology/Biotechnology with minimum 50% marks (40% for SC/ST/OBC). Age limit is 17-25 years (relaxation for reserved categories). Must have studied English in 10+2. For AIIMS and JIPMER, admission is now through NEET only.'
        },
        {
          id: 'med-2',
          question: 'How many medical entrance exams are conducted at state and national level?',
          answer: 'National level: NEET (for MBBS/BDS), AIIMS (now through NEET), JIPMER (now through NEET). State level: Most states use NEET scores for counseling, but some have additional state medical entrance exams. NEET is the single entrance for all medical courses in India.'
        },
        {
          id: 'med-3',
          question: 'Which subjects are included in medical entrance exams?',
          answer: 'NEET includes Physics (45 questions), Chemistry (45 questions), and Biology (90 questions). Total 180 questions with 720 marks. Syllabus is based on NCERT 11th and 12th standard books. Biology includes Botany and Zoology, Chemistry includes Organic, Inorganic, and Physical Chemistry.'
        },
        {
          id: 'med-4',
          question: 'What courses are available after qualifying medical entrance exams?',
          answer: 'MBBS (5.5 years), BDS (5 years), BAMS (Ayurveda), BHMS (Homeopathy), BUMS (Unani), BSMS (Siddha), BPT (Physiotherapy), B.Sc. Nursing, B.Pharm, and various other paramedical courses. NEET score is required for most of these courses.'
        }
      ]
    },
    {
      id: 'general',
      title: 'General Stream FAQs',
      icon: '🎓',
      faqs: [
        {
          id: 'gen-1',
          question: 'How to prepare for entrance exams for management, medical, or law after 12th?',
          answer: 'Start with understanding the exam pattern and syllabus. Create a study schedule covering all subjects. Practice previous year papers and take mock tests regularly. For management: focus on quantitative aptitude, logical reasoning, and English. For medical: strengthen Physics, Chemistry, Biology concepts. For law: practice legal reasoning and general knowledge.'
        },
        {
          id: 'gen-2',
          question: 'Are previous year papers and mock tests available for every stream?',
          answer: 'Yes, most entrance exams provide previous year papers and official mock tests. Additionally, various coaching institutes and online platforms offer practice tests. NTA provides official mock tests for JEE Main, NEET, and other national exams. State exam boards also release sample papers and mock tests.'
        },
        {
          id: 'gen-3',
          question: 'How can I find the counseling schedule after results?',
          answer: 'Counseling schedules are published on official exam websites and state counseling websites. For national exams like JEE Main/Advanced, check josaa.nic.in and csab.nic.in. For NEET, check mcc.nic.in for all-India quota and respective state counseling websites for state quota. Most counseling processes are conducted online.'
        },
        {
          id: 'gen-4',
          question: 'What are the key dates to remember for different entrance exams?',
          answer: 'JEE Main: Registration (Nov), Exam (Jan-Apr), Results (Apr-May). NEET: Registration (Mar), Exam (May), Results (Jun). CLAT: Registration (Jan-Feb), Exam (May-Jun). Most state exams: Registration (Mar-May), Exam (Apr-Jun). Always check official notifications for exact dates as they may vary each year.'
        }
      ]
    }
  ];

  return (
    <section className={`bg-white border border-gray-200 rounded-lg p-6 shadow-lg ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#262443] mb-2">Comprehensive FAQs</h2>
        <p className="text-gray-600">Expert answers for Law, Medical, and other streams after 12th</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {faqSections.map((section) => (
          <div key={section.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{section.icon}</span>
              <h3 className="text-lg font-semibold text-[#262443]">{section.title}</h3>
            </div>
            
            <div className="space-y-3">
              {section.faqs.map((faq) => (
                <details key={faq.id} className="group">
                  <summary className="cursor-pointer text-[#2c6e49] font-medium text-sm hover:text-[#1e4d2e] transition-colors duration-200 flex items-start">
                    <span className="mr-2 text-[#2c6e49] group-open:rotate-90 transition-transform duration-200">▶</span>
                    <span className="flex-1">{faq.question}</span>
                  </summary>
                  <div className="mt-2 ml-4 pl-2 border-l-2 border-[#2c6e49]">
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-blue-800">Need More Help?</h4>
            <p className="text-sm text-blue-700 mt-1">
              For specific exam details, eligibility criteria, and application procedures, 
              always refer to the official exam websites and notifications. 
              Our guidance counselors are also available to help you choose the right path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComprehensiveFaqs;