import { useState, useEffect } from 'react';
import { X, Calendar, FileText, Download, ExternalLink, Star, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface ExamDetail {
  id: string;
  title: string;
  code: string;
  overview: {
    purpose: string;
    eligibility: string;
    level: string;
    states: string[];
  };
  importantDates: {
    applicationStart: string;
    applicationEnd: string;
    admitCardRelease: string;
    examDate: string;
    resultDate: string;
    counselingStart: string;
  };
  latestUpdates: {
    title: string;
    date: string;
    description: string;
  }[];
  syllabus: {
    highlights: string[];
    downloadLink: string;
  };
  applicationProcess: {
    steps: string[];
    directApplyLink: string;
    instructions: string;
  };
  results: {
    date: string;
    howToCheck: string[];
    cutoffs: {
      year: string;
      general: string;
      obc: string;
      sc: string;
      st: string;
    }[];
  };
  counseling: {
    schedule: string;
    process: string[];
    website: string;
  };
  previousPapers: {
    year: string;
    downloadLink: string;
  }[];
  admitCard: {
    releaseStatus: string;
    downloadProcess: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  reviews: {
    rating: number;
    comment: string;
    user: string;
  }[];
  mockTests: {
    title: string;
    link: string;
  }[];
  studyResources: {
    title: string;
    type: string;
    link: string;
  }[];
}

interface ExamDetailModalProps {
  examCode: string;
  isOpen: boolean;
  onClose: () => void;
}

function ExamDetailModal({ examCode, isOpen, onClose }: ExamDetailModalProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [examDetail, setExamDetail] = useState<ExamDetail | null>(null);

  // Mock data for different exams
  const examDetails: Record<string, ExamDetail> = {
    'ts-neet-counseling': {
      id: 'ts-neet-counseling',
      title: 'TS NEET State Counseling',
      code: 'ts-neet-counseling',
      overview: {
        purpose: 'Telangana State NEET Counseling is conducted for admission to MBBS, BDS, and other medical courses in Telangana state through NEET scores.',
        eligibility: 'Qualified in NEET 2024 with minimum qualifying marks. Must be a resident of Telangana or have studied 10+2 in Telangana.',
        level: 'State Level',
        states: ['Telangana']
      },
      importantDates: {
        applicationStart: 'July 15, 2024',
        applicationEnd: 'July 25, 2024',
        admitCardRelease: 'Not Applicable',
        examDate: 'Not Applicable (Based on NEET)',
        resultDate: 'August 5, 2024',
        counselingStart: 'August 10, 2024'
      },
      latestUpdates: [
        {
          title: 'TS NEET Counseling 2024 Registration Opens',
          date: 'July 15, 2024',
          description: 'Online registration for TS NEET State Counseling 2024 has commenced. Students can register through the official website.'
        },
        {
          title: 'NEET 2024 Results Declared',
          date: 'June 14, 2024',
          description: 'NTA has announced NEET 2024 results. Students can now apply for state counseling.'
        }
      ],
      syllabus: {
        highlights: [
          'Based on NEET 2024 syllabus',
          'Physics: Mechanics, Thermodynamics, Waves, Optics',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Biology: Botany and Zoology from NCERT syllabus'
        ],
        downloadLink: '/downloads/neet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit TS NEET Counseling official website',
          'Register with NEET application number',
          'Fill counseling application form',
          'Upload required documents',
          'Pay counseling fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://tseamcet.nic.in',
        instructions: 'Ensure you have NEET 2024 scorecard and all required documents before registration.'
      },
      results: {
        date: 'August 5, 2024',
        howToCheck: [
          'Visit TS NEET Counseling website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download allotment letter'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '720',
            obc: '715',
            sc: '695',
            st: '690'
          }
        ]
      },
      counseling: {
        schedule: 'August 10 - September 15, 2024',
        process: [
          'Online registration and document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college',
          'Document verification at college'
        ],
        website: 'https://tseamcet.nic.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/neet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/neet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Not Applicable (Based on NEET)',
        downloadProcess: [
          'Use NEET admit card for counseling',
          'Download counseling admit card if required',
          'Carry both documents to counseling center'
        ]
      },
      faqs: [
        {
          question: 'What is the counseling fee for TS NEET?',
          answer: 'The counseling fee is ₹1,000 for general category and ₹500 for SC/ST candidates.'
        },
        {
          question: 'Can I participate in TS NEET counseling if I am from another state?',
          answer: 'Yes, if you have studied 10+2 in Telangana or are a resident of Telangana.'
        }
      ],
      reviews: [
        { rating: 4.6, comment: 'Smooth counseling process with good seat availability.', user: 'Rajesh K.' },
        { rating: 4.4, comment: 'Fair allotment process based on NEET scores.', user: 'Priya S.' }
      ],
      mockTests: [
        { title: 'NEET Mock Test 1', link: '/mock-tests/neet-1' },
        { title: 'NEET Mock Test 2', link: '/mock-tests/neet-2' }
      ],
      studyResources: [
        { title: 'NEET Study Material', type: 'PDF', link: '/resources/neet-material' },
        { title: 'NCERT Solutions', type: 'PDF', link: '/resources/ncert-solutions' }
      ]
    },
    'ap-neet-counseling': {
      id: 'ap-neet-counseling',
      title: 'AP NEET State Counseling',
      code: 'ap-neet-counseling',
      overview: {
        purpose: 'Andhra Pradesh NEET Counseling is conducted for admission to MBBS, BDS, and other medical courses in Andhra Pradesh through NEET scores.',
        eligibility: 'Qualified in NEET 2024 with minimum qualifying marks. Must be a resident of Andhra Pradesh or have studied 10+2 in Andhra Pradesh.',
        level: 'State Level',
        states: ['Andhra Pradesh']
      },
      importantDates: {
        applicationStart: 'July 20, 2024',
        applicationEnd: 'July 30, 2024',
        admitCardRelease: 'Not Applicable',
        examDate: 'Not Applicable (Based on NEET)',
        resultDate: 'August 8, 2024',
        counselingStart: 'August 12, 2024'
      },
      latestUpdates: [
        {
          title: 'AP NEET Counseling 2024 Registration Opens',
          date: 'July 20, 2024',
          description: 'Online registration for AP NEET State Counseling 2024 has commenced. Students can register through the official website.'
        },
        {
          title: 'NEET 2024 Results Declared',
          date: 'June 14, 2024',
          description: 'NTA has announced NEET 2024 results. Students can now apply for state counseling.'
        }
      ],
      syllabus: {
        highlights: [
          'Based on NEET 2024 syllabus',
          'Physics: Mechanics, Thermodynamics, Waves, Optics',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Biology: Botany and Zoology from NCERT syllabus'
        ],
        downloadLink: '/downloads/neet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit AP NEET Counseling official website',
          'Register with NEET application number',
          'Fill counseling application form',
          'Upload required documents',
          'Pay counseling fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://apneet.nic.in',
        instructions: 'Ensure you have NEET 2024 scorecard and all required documents before registration.'
      },
      results: {
        date: 'August 8, 2024',
        howToCheck: [
          'Visit AP NEET Counseling website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download allotment letter'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '720',
            obc: '715',
            sc: '695',
            st: '690'
          }
        ]
      },
      counseling: {
        schedule: 'August 12 - September 20, 2024',
        process: [
          'Online registration and document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college',
          'Document verification at college'
        ],
        website: 'https://apneet.nic.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/neet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/neet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Not Applicable (Based on NEET)',
        downloadProcess: [
          'Use NEET admit card for counseling',
          'Download counseling admit card if required',
          'Carry both documents to counseling center'
        ]
      },
      faqs: [
        {
          question: 'What is the counseling fee for AP NEET?',
          answer: 'The counseling fee is ₹1,000 for general category and ₹500 for SC/ST candidates.'
        },
        {
          question: 'Can I participate in AP NEET counseling if I am from another state?',
          answer: 'Yes, if you have studied 10+2 in Andhra Pradesh or are a resident of Andhra Pradesh.'
        }
      ],
      reviews: [
        { rating: 4.5, comment: 'Good counseling process with transparent allotment.', user: 'Suresh R.' },
        { rating: 4.3, comment: 'Fair process based on NEET scores and state quota.', user: 'Anjali M.' }
      ],
      mockTests: [
        { title: 'NEET Mock Test 1', link: '/mock-tests/neet-1' },
        { title: 'NEET Mock Test 2', link: '/mock-tests/neet-2' }
      ],
      studyResources: [
        { title: 'NEET Study Material', type: 'PDF', link: '/resources/neet-material' },
        { title: 'NCERT Solutions', type: 'PDF', link: '/resources/ncert-solutions' }
      ]
    },
    'mh-cet-law': {
      id: 'mh-cet-law',
      title: 'MH CET Law (UG)',
      code: 'mh-cet-law',
      overview: {
        purpose: 'MH CET Law is conducted for admission to 3-year and 5-year LLB courses in Maharashtra state law colleges.',
        eligibility: 'For 3-year LLB: Graduation in any stream. For 5-year LLB: 10+2 in any stream. Minimum 45% marks (40% for reserved categories).',
        level: 'State Level',
        states: ['Maharashtra']
      },
      importantDates: {
        applicationStart: 'March 1, 2024',
        applicationEnd: 'April 15, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 15, 2024',
        resultDate: 'June 15, 2024',
        counselingStart: 'July 1, 2024'
      },
      latestUpdates: [
        {
          title: 'MH CET Law 2024 Application Opens',
          date: 'March 1, 2024',
          description: 'Online registration for MH CET Law 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'February 15, 2024',
          description: 'Minor updates in Legal Reasoning and General Knowledge sections. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Legal Reasoning: Legal principles, case laws, legal maxims',
          'General Knowledge: Current affairs, history, geography, science',
          'Logical Reasoning: Analytical reasoning, critical thinking',
          'English: Grammar, vocabulary, comprehension',
          'Mathematics: Basic mathematics and statistics'
        ],
        downloadLink: '/downloads/mh-cet-law-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit MH CET Law official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://mhcetlaw.in',
        instructions: 'Ensure all documents are ready including 10th, 12th, and graduation mark sheets.'
      },
      results: {
        date: 'June 15, 2024',
        howToCheck: [
          'Visit MH CET Law website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '85',
            obc: '82',
            sc: '78',
            st: '75'
          }
        ]
      },
      counseling: {
        schedule: 'July 1 - August 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://mhcetlaw.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/mh-cet-law-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/mh-cet-law-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit MH CET Law website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for MH CET Law?',
          answer: 'The application fee is ₹800 for general category and ₹400 for SC/ST candidates.'
        },
        {
          question: 'Can I apply for both 3-year and 5-year LLB courses?',
          answer: 'Yes, you can apply for both courses with a single application.'
        }
      ],
      reviews: [
        { rating: 4.4, comment: 'Well-structured exam with good difficulty level.', user: 'Vikram S.' },
        { rating: 4.2, comment: 'Fair evaluation and timely results.', user: 'Priya L.' }
      ],
      mockTests: [
        { title: 'MH CET Law Mock Test 1', link: '/mock-tests/mh-cet-law-1' },
        { title: 'MH CET Law Mock Test 2', link: '/mock-tests/mh-cet-law-2' }
      ],
      studyResources: [
        { title: 'MH CET Law Study Guide', type: 'PDF', link: '/resources/mh-cet-law-guide' },
        { title: 'Legal Reasoning Practice', type: 'PDF', link: '/resources/legal-reasoning' }
      ]
    },
    'ts-lawcet': {
      id: 'ts-lawcet',
      title: 'TS LAWCET',
      code: 'ts-lawcet',
      overview: {
        purpose: 'TS LAWCET is conducted for admission to 3-year and 5-year LLB courses in Telangana state law colleges.',
        eligibility: 'For 3-year LLB: Graduation in any stream. For 5-year LLB: 10+2 in any stream. Minimum 45% marks (40% for reserved categories).',
        level: 'State Level',
        states: ['Telangana']
      },
      importantDates: {
        applicationStart: 'March 15, 2024',
        applicationEnd: 'April 30, 2024',
        admitCardRelease: 'May 10, 2024',
        examDate: 'May 25, 2024',
        resultDate: 'June 20, 2024',
        counselingStart: 'July 5, 2024'
      },
      latestUpdates: [
        {
          title: 'TS LAWCET 2024 Application Opens',
          date: 'March 15, 2024',
          description: 'Online registration for TS LAWCET 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'March 1, 2024',
          description: 'Minor updates in Legal Reasoning and General Knowledge sections. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Legal Reasoning: Legal principles, case laws, legal maxims',
          'General Knowledge: Current affairs, history, geography, science',
          'Logical Reasoning: Analytical reasoning, critical thinking',
          'English: Grammar, vocabulary, comprehension',
          'Mathematics: Basic mathematics and statistics'
        ],
        downloadLink: '/downloads/ts-lawcet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit TS LAWCET official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://lawcet.tsche.ac.in',
        instructions: 'Ensure all documents are ready including 10th, 12th, and graduation mark sheets.'
      },
      results: {
        date: 'June 20, 2024',
        howToCheck: [
          'Visit TS LAWCET website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '83',
            obc: '80',
            sc: '76',
            st: '73'
          }
        ]
      },
      counseling: {
        schedule: 'July 5 - August 25, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://lawcet.tsche.ac.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/ts-lawcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/ts-lawcet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 10, 2024',
        downloadProcess: [
          'Visit TS LAWCET website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for TS LAWCET?',
          answer: 'The application fee is ₹800 for general category and ₹400 for SC/ST candidates.'
        },
        {
          question: 'Can I apply for both 3-year and 5-year LLB courses?',
          answer: 'Yes, you can apply for both courses with a single application.'
        }
      ],
      reviews: [
        { rating: 4.3, comment: 'Good exam structure with fair difficulty level.', user: 'Rahul K.' },
        { rating: 4.1, comment: 'Timely results and smooth counseling process.', user: 'Sneha P.' }
      ],
      mockTests: [
        { title: 'TS LAWCET Mock Test 1', link: '/mock-tests/ts-lawcet-1' },
        { title: 'TS LAWCET Mock Test 2', link: '/mock-tests/ts-lawcet-2' }
      ],
      studyResources: [
        { title: 'TS LAWCET Study Guide', type: 'PDF', link: '/resources/ts-lawcet-guide' },
        { title: 'Legal Reasoning Practice', type: 'PDF', link: '/resources/legal-reasoning' }
      ]
    },
    'ap-lawcet': {
      id: 'ap-lawcet',
      title: 'AP LAWCET',
      code: 'ap-lawcet',
      overview: {
        purpose: 'AP LAWCET is conducted for admission to 3-year and 5-year LLB courses in Andhra Pradesh state law colleges.',
        eligibility: 'For 3-year LLB: Graduation in any stream. For 5-year LLB: 10+2 in any stream. Minimum 45% marks (40% for reserved categories).',
        level: 'State Level',
        states: ['Andhra Pradesh']
      },
      importantDates: {
        applicationStart: 'March 20, 2024',
        applicationEnd: 'May 5, 2024',
        admitCardRelease: 'May 15, 2024',
        examDate: 'May 30, 2024',
        resultDate: 'June 25, 2024',
        counselingStart: 'July 10, 2024'
      },
      latestUpdates: [
        {
          title: 'AP LAWCET 2024 Application Opens',
          date: 'March 20, 2024',
          description: 'Online registration for AP LAWCET 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'March 5, 2024',
          description: 'Minor updates in Legal Reasoning and General Knowledge sections. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Legal Reasoning: Legal principles, case laws, legal maxims',
          'General Knowledge: Current affairs, history, geography, science',
          'Logical Reasoning: Analytical reasoning, critical thinking',
          'English: Grammar, vocabulary, comprehension',
          'Mathematics: Basic mathematics and statistics'
        ],
        downloadLink: '/downloads/ap-lawcet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit AP LAWCET official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://lawcet.ap.gov.in',
        instructions: 'Ensure all documents are ready including 10th, 12th, and graduation mark sheets.'
      },
      results: {
        date: 'June 25, 2024',
        howToCheck: [
          'Visit AP LAWCET website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '82',
            obc: '79',
            sc: '75',
            st: '72'
          }
        ]
      },
      counseling: {
        schedule: 'July 10 - August 30, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://lawcet.ap.gov.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/ap-lawcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/ap-lawcet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 15, 2024',
        downloadProcess: [
          'Visit AP LAWCET website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for AP LAWCET?',
          answer: 'The application fee is ₹800 for general category and ₹400 for SC/ST candidates.'
        },
        {
          question: 'Can I apply for both 3-year and 5-year LLB courses?',
          answer: 'Yes, you can apply for both courses with a single application.'
        }
      ],
      reviews: [
        { rating: 4.2, comment: 'Well-organized exam with good difficulty level.', user: 'Kumar S.' },
        { rating: 4.0, comment: 'Fair evaluation and timely results.', user: 'Lakshmi R.' }
      ],
      mockTests: [
        { title: 'AP LAWCET Mock Test 1', link: '/mock-tests/ap-lawcet-1' },
        { title: 'AP LAWCET Mock Test 2', link: '/mock-tests/ap-lawcet-2' }
      ],
      studyResources: [
        { title: 'AP LAWCET Study Guide', type: 'PDF', link: '/resources/ap-lawcet-guide' },
        { title: 'Legal Reasoning Practice', type: 'PDF', link: '/resources/legal-reasoning' }
      ]
    },
    'lsat-india': {
      id: 'lsat-india',
      title: 'LSAT–India (Law School Admission Test)',
      code: 'lsat-india',
      overview: {
        purpose: 'LSAT–India is conducted for admission to 3-year and 5-year LLB courses in participating law schools across India.',
        eligibility: 'For 3-year LLB: Graduation in any stream. For 5-year LLB: 10+2 in any stream. No age limit. No domicile restrictions.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'January 15, 2024',
        applicationEnd: 'April 30, 2024',
        admitCardRelease: 'May 10, 2024',
        examDate: 'May 20, 2024',
        resultDate: 'June 15, 2024',
        counselingStart: 'July 1, 2024'
      },
      latestUpdates: [
        {
          title: 'LSAT–India 2024 Registration Opens',
          date: 'January 15, 2024',
          description: 'Online registration for LSAT–India 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'New Participating Colleges Added',
          date: 'January 10, 2024',
          description: '15 new law colleges have been added to the participating institutions list for 2024.'
        }
      ],
      syllabus: {
        highlights: [
          'Analytical Reasoning: Logic games, logical deductions',
          'Logical Reasoning: Argument analysis, critical thinking',
          'Reading Comprehension: Legal and non-legal passages',
          'English Language: Grammar, vocabulary, sentence correction'
        ],
        downloadLink: '/downloads/lsat-india-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit LSAT–India official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://lsatindia.in',
        instructions: 'Ensure all documents are ready including 10th, 12th, and graduation mark sheets.'
      },
      results: {
        date: 'June 15, 2024',
        howToCheck: [
          'Visit LSAT–India website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '85',
            obc: '82',
            sc: '78',
            st: '75'
          }
        ]
      },
      counseling: {
        schedule: 'July 1 - August 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://lsatindia.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/lsat-india-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/lsat-india-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 10, 2024',
        downloadProcess: [
          'Visit LSAT–India website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for LSAT–India?',
          answer: 'The application fee is ₹3,800 for general category and ₹2,800 for SC/ST candidates.'
        },
        {
          question: 'Can I apply for both 3-year and 5-year LLB courses?',
          answer: 'Yes, you can apply for both courses with a single application.'
        }
      ],
      reviews: [
        { rating: 4.6, comment: 'Well-structured exam with good difficulty level.', user: 'Arjun S.' },
        { rating: 4.4, comment: 'Fair evaluation and timely results.', user: 'Priya M.' }
      ],
      mockTests: [
        { title: 'LSAT–India Mock Test 1', link: '/mock-tests/lsat-india-1' },
        { title: 'LSAT–India Mock Test 2', link: '/mock-tests/lsat-india-2' }
      ],
      studyResources: [
        { title: 'LSAT–India Study Guide', type: 'PDF', link: '/resources/lsat-india-guide' },
        { title: 'Analytical Reasoning Practice', type: 'PDF', link: '/resources/analytical-reasoning' }
      ]
    },
    'slat': {
      id: 'slat',
      title: 'SLAT (Symbiosis Law Admission Test)',
      code: 'slat',
      overview: {
        purpose: 'SLAT is conducted for admission to 5-year integrated LLB programs at Symbiosis Law Schools across India.',
        eligibility: '10+2 in any stream with minimum 45% marks (40% for SC/ST). No age limit. No domicile restrictions.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'January 15, 2024',
        applicationEnd: 'April 20, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 15, 2024',
        resultDate: 'June 5, 2024',
        counselingStart: 'June 20, 2024'
      },
      latestUpdates: [
        {
          title: 'SLAT 2024 Registration Opens',
          date: 'January 15, 2024',
          description: 'Online registration for SLAT 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'New Symbiosis Law School Added',
          date: 'January 5, 2024',
          description: 'Symbiosis Law School, Noida has been added to the participating institutions for 2024.'
        }
      ],
      syllabus: {
        highlights: [
          'Legal Reasoning: Legal principles, case laws, legal maxims',
          'Logical Reasoning: Analytical reasoning, critical thinking',
          'English: Grammar, vocabulary, comprehension',
          'General Knowledge: Current affairs, history, geography',
          'Mathematics: Basic mathematics and statistics'
        ],
        downloadLink: '/downloads/slat-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit SLAT official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://slat.symbi.ac.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'June 5, 2024',
        howToCheck: [
          'Visit SLAT website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '88',
            obc: '85',
            sc: '82',
            st: '80'
          }
        ]
      },
      counseling: {
        schedule: 'June 20 - July 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://slat.symbi.ac.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/slat-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/slat-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit SLAT website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for SLAT?',
          answer: 'The application fee is ₹2,250 for general category and ₹1,750 for SC/ST candidates.'
        },
        {
          question: 'How many Symbiosis Law Schools participate in SLAT?',
          answer: 'Currently, 4 Symbiosis Law Schools participate in SLAT across different cities.'
        }
      ],
      reviews: [
        { rating: 4.5, comment: 'Good exam structure with fair difficulty level.', user: 'Rohit K.' },
        { rating: 4.3, comment: 'Timely results and smooth counseling process.', user: 'Anita S.' }
      ],
      mockTests: [
        { title: 'SLAT Mock Test 1', link: '/mock-tests/slat-1' },
        { title: 'SLAT Mock Test 2', link: '/mock-tests/slat-2' }
      ],
      studyResources: [
        { title: 'SLAT Study Guide', type: 'PDF', link: '/resources/slat-guide' },
        { title: 'Legal Reasoning Practice', type: 'PDF', link: '/resources/legal-reasoning' }
      ]
    },
    'icar-aieea-ug': {
      id: 'icar-aieea-ug',
      title: 'ICAR AIEEA-UG (All India Entrance Examination for Admission)',
      code: 'icar-aieea-ug',
      overview: {
        purpose: 'ICAR AIEEA-UG is conducted for admission to Bachelor degree programs in Agriculture, Veterinary, and allied sciences at ICAR institutes.',
        eligibility: '10+2 with Physics, Chemistry, Biology/Mathematics. Minimum 50% marks (40% for SC/ST/OBC). Age limit 16-20 years.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'March 1, 2024',
        applicationEnd: 'April 15, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 15, 2024',
        resultDate: 'June 10, 2024',
        counselingStart: 'July 1, 2024'
      },
      latestUpdates: [
        {
          title: 'ICAR AIEEA-UG 2024 Registration Opens',
          date: 'March 1, 2024',
          description: 'Online registration for ICAR AIEEA-UG 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'February 15, 2024',
          description: 'Minor updates in Biology and Chemistry sections. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Biology: Botany, Zoology, Genetics, Ecology',
          'Mathematics: Algebra, Calculus, Statistics',
          'Agriculture: Crop Science, Soil Science, Plant Pathology'
        ],
        downloadLink: '/downloads/icar-aieea-ug-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit ICAR AIEEA-UG official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://icar.org.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'June 10, 2024',
        howToCheck: [
          'Visit ICAR AIEEA-UG website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '82',
            obc: '79',
            sc: '75',
            st: '72'
          }
        ]
      },
      counseling: {
        schedule: 'July 1 - August 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://icar.org.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/icar-aieea-ug-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/icar-aieea-ug-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit ICAR AIEEA-UG website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for ICAR AIEEA-UG?',
          answer: 'The application fee is ₹1,200 for general category and ₹600 for SC/ST candidates.'
        },
        {
          question: 'How many ICAR institutes participate in AIEEA-UG?',
          answer: 'Over 100 ICAR institutes participate in AIEEA-UG across India.'
        }
      ],
      reviews: [
        { rating: 4.4, comment: 'Well-structured exam with good difficulty level.', user: 'Vikram S.' },
        { rating: 4.2, comment: 'Fair evaluation and timely results.', user: 'Priya L.' }
      ],
      mockTests: [
        { title: 'ICAR AIEEA-UG Mock Test 1', link: '/mock-tests/icar-aieea-ug-1' },
        { title: 'ICAR AIEEA-UG Mock Test 2', link: '/mock-tests/icar-aieea-ug-2' }
      ],
      studyResources: [
        { title: 'ICAR AIEEA-UG Study Guide', type: 'PDF', link: '/resources/icar-aieea-ug-guide' },
        { title: 'Agriculture Science Practice', type: 'PDF', link: '/resources/agriculture-science' }
      ]
    },
    'eamcet': {
      id: 'eamcet',
      title: 'EAMCET (Engineering, Agriculture & Medical Common Entrance Test)',
      code: 'eamcet',
      overview: {
        purpose: 'EAMCET is conducted for admission to Engineering, Agriculture, and Medical courses in Telangana and Andhra Pradesh.',
        eligibility: '10+2 with PCM/PCB as required for respective courses. Minimum 45% marks (40% for reserved categories).',
        level: 'State Level',
        states: ['Telangana', 'Andhra Pradesh']
      },
      importantDates: {
        applicationStart: 'March 1, 2024',
        applicationEnd: 'April 15, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 10-15, 2024',
        resultDate: 'June 1, 2024',
        counselingStart: 'June 15, 2024'
      },
      latestUpdates: [
        {
          title: 'EAMCET 2024 Application Window Opens',
          date: 'March 1, 2024',
          description: 'Online registration for EAMCET 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'February 15, 2024',
          description: 'Minor updates in Physics and Chemistry syllabus. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry',
          'Biology: Botany, Zoology (for Medical stream)'
        ],
        downloadLink: '/downloads/eamcet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit official EAMCET website',
          'Register with personal details',
          'Fill application form',
          'Upload documents',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://eamcet.tsche.ac.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 1, 2024',
        howToCheck: [
          'Visit official EAMCET website',
          'Click on Results link',
          'Enter hall ticket number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '85.5',
            obc: '82.3',
            sc: '78.9',
            st: '75.2'
          }
        ]
      },
      counseling: {
        schedule: 'June 15 - July 30, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Option entry and seat allotment',
          'Fee payment and reporting'
        ],
        website: 'https://eamcet.tsche.ac.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/eamcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/eamcet-2022-paper.pdf' },
        { year: '2021', downloadLink: '/downloads/eamcet-2021-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit official website',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for EAMCET?',
          answer: 'The application fee is ₹800 for general category and ₹400 for SC/ST candidates.'
        },
        {
          question: 'Can I change my exam center after application?',
          answer: 'No, exam center cannot be changed after the application deadline.'
        }
      ],
      reviews: [
        { rating: 4.5, comment: 'Well organized exam with clear instructions.', user: 'Rahul K.' },
        { rating: 4.0, comment: 'Good difficulty level, fair evaluation.', user: 'Priya S.' }
      ],
      mockTests: [
        { title: 'EAMCET Mock Test 1', link: '/mock-tests/eamcet-1' },
        { title: 'EAMCET Mock Test 2', link: '/mock-tests/eamcet-2' }
      ],
      studyResources: [
        { title: 'EAMCET Study Guide', type: 'PDF', link: '/resources/eamcet-guide' },
        { title: 'Video Lectures', type: 'Video', link: '/resources/eamcet-videos' }
      ]
    },
    'neet': {
      id: 'neet',
      title: 'NEET (National Eligibility cum Entrance Test)',
      code: 'neet',
      overview: {
        purpose: 'NEET is the single entrance examination for admission to MBBS, BDS, and other medical courses in India.',
        eligibility: '10+2 with Physics, Chemistry, Biology. Minimum 50% marks (40% for SC/ST/OBC). Age limit 17-25 years.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'March 1, 2024',
        applicationEnd: 'April 6, 2024',
        admitCardRelease: 'April 20, 2024',
        examDate: 'May 5, 2024',
        resultDate: 'June 14, 2024',
        counselingStart: 'July 1, 2024'
      },
      latestUpdates: [
        {
          title: 'NEET 2024 Registration Opens',
          date: 'March 1, 2024',
          description: 'NTA has released the application form for NEET 2024. Registration deadline is April 6, 2024.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Electromagnetism',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Biology: Botany and Zoology from NCERT syllabus'
        ],
        downloadLink: '/downloads/neet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit NTA NEET website',
          'Register with personal details',
          'Fill application form',
          'Upload photograph and signature',
          'Pay application fee',
          'Submit application'
        ],
        directApplyLink: 'https://neet.nta.nic.in',
        instructions: 'Keep all documents ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'June 14, 2024',
        howToCheck: [
          'Visit NTA NEET website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '137',
            obc: '107',
            sc: '107',
            st: '107'
          }
        ]
      },
      counseling: {
        schedule: 'July 1 - August 31, 2024',
        process: [
          'Registration for counseling',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://mcc.nic.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/neet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/neet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from April 20, 2024',
        downloadProcess: [
          'Visit NTA NEET website',
          'Login with application number and password',
          'Download admit card',
          'Verify all details'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for NEET?',
          answer: 'Application fee is ₹1,700 for general category and ₹1,600 for SC/ST/OBC candidates.'
        },
        {
          question: 'How many times can I attempt NEET?',
          answer: 'There is no limit on the number of attempts for NEET.'
        }
      ],
      reviews: [
        { rating: 4.8, comment: 'Comprehensive exam covering all important topics.', user: 'Amit R.' },
        { rating: 4.6, comment: 'Fair evaluation and transparent process.', user: 'Sneha M.' }
      ],
      mockTests: [
        { title: 'NEET Mock Test 1', link: '/mock-tests/neet-1' },
        { title: 'NEET Mock Test 2', link: '/mock-tests/neet-2' }
      ],
      studyResources: [
        { title: 'NEET Study Material', type: 'PDF', link: '/resources/neet-material' },
        { title: 'NCERT Solutions', type: 'PDF', link: '/resources/ncert-solutions' }
      ]
    },
    'jee-main': {
      id: 'jee-main',
      title: 'JEE Main (Joint Entrance Examination Main)',
      code: 'jee-main',
      overview: {
        purpose: 'JEE Main is conducted for admission to NITs, IIITs, and other engineering colleges in India.',
        eligibility: '10+2 with Physics, Chemistry, Mathematics. Minimum 75% marks (65% for SC/ST).',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'November 1, 2023',
        applicationEnd: 'December 4, 2023',
        admitCardRelease: 'January 15, 2024',
        examDate: 'January 24-31, 2024',
        resultDate: 'February 12, 2024',
        counselingStart: 'June 19, 2024'
      },
      latestUpdates: [
        {
          title: 'JEE Main 2024 Session 1 Results Declared',
          date: 'February 12, 2024',
          description: 'NTA has announced the results for JEE Main 2024 Session 1. Students can check their scores on the official website.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Organic, Inorganic Chemistry',
          'Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry'
        ],
        downloadLink: '/downloads/jee-main-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit NTA JEE Main website',
          'Register with personal details',
          'Fill application form',
          'Upload documents',
          'Pay application fee',
          'Submit application'
        ],
        directApplyLink: 'https://jeemain.nta.nic.in',
        instructions: 'Ensure you have all required documents before starting the application.'
      },
      results: {
        date: 'February 12, 2024',
        howToCheck: [
          'Visit NTA JEE Main website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '90.8',
            obc: '87.2',
            sc: '82.1',
            st: '78.5'
          }
        ]
      },
      counseling: {
        schedule: 'June 19 - July 31, 2024',
        process: [
          'Registration for JOSAA counseling',
          'Choice filling and locking',
          'Seat allotment rounds',
          'Reporting to allotted institute'
        ],
        website: 'https://josaa.nic.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/jee-main-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/jee-main-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from January 15, 2024',
        downloadProcess: [
          'Visit NTA JEE Main website',
          'Login with application number and password',
          'Download admit card',
          'Verify all details'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for JEE Main?',
          answer: 'Application fee is ₹1,000 for general category and ₹500 for SC/ST/OBC candidates.'
        },
        {
          question: 'How many sessions are there in JEE Main?',
          answer: 'JEE Main is conducted in two sessions - January and April. Best of two scores is considered.'
        }
      ],
      reviews: [
        { rating: 4.7, comment: 'Well-structured exam with good difficulty level.', user: 'Vikram S.' },
        { rating: 4.5, comment: 'Fair evaluation and timely results.', user: 'Anjali P.' }
      ],
      mockTests: [
        { title: 'JEE Main Mock Test 1', link: '/mock-tests/jee-main-1' },
        { title: 'JEE Main Mock Test 2', link: '/mock-tests/jee-main-2' }
      ],
      studyResources: [
        { title: 'JEE Main Study Guide', type: 'PDF', link: '/resources/jee-main-guide' },
        { title: 'Previous Year Solutions', type: 'PDF', link: '/resources/jee-main-solutions' }
      ]
    },
    'mht-cet': {
      id: 'mht-cet',
      title: 'MHT CET (Maharashtra Common Entrance Test)',
      code: 'mht-cet',
      overview: {
        purpose: 'MHT CET is conducted for admission to Engineering, Pharmacy, and other professional courses in Maharashtra state.',
        eligibility: '10+2 with PCM/PCB as required for respective courses. Minimum 50% marks (45% for reserved categories). Must be Maharashtra domicile.',
        level: 'State Level',
        states: ['Maharashtra']
      },
      importantDates: {
        applicationStart: 'March 1, 2024',
        applicationEnd: 'April 15, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 15-20, 2024',
        resultDate: 'June 10, 2024',
        counselingStart: 'July 1, 2024'
      },
      latestUpdates: [
        {
          title: 'MHT CET 2024 Application Opens',
          date: 'March 1, 2024',
          description: 'Online registration for MHT CET 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'February 15, 2024',
          description: 'Minor updates in Physics and Chemistry syllabus. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry',
          'Biology: Botany, Zoology (for Medical stream)'
        ],
        downloadLink: '/downloads/mht-cet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit MHT CET official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://mhtcet2024.mahacet.org',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets and domicile certificate.'
      },
      results: {
        date: 'June 10, 2024',
        howToCheck: [
          'Visit MHT CET website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '85',
            obc: '82',
            sc: '78',
            st: '75'
          }
        ]
      },
      counseling: {
        schedule: 'July 1 - August 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://mhtcet2024.mahacet.org'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/mht-cet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/mht-cet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit MHT CET website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for MHT CET?',
          answer: 'The application fee is ₹800 for general category and ₹400 for SC/ST candidates.'
        },
        {
          question: 'Can I apply for MHT CET if I am not from Maharashtra?',
          answer: 'Yes, but you need to have studied 10+2 in Maharashtra or have Maharashtra domicile.'
        }
      ],
      reviews: [
        { rating: 4.3, comment: 'Well-structured exam with good difficulty level.', user: 'Rajesh K.' },
        { rating: 4.1, comment: 'Fair evaluation and timely results.', user: 'Priya S.' }
      ],
      mockTests: [
        { title: 'MHT CET Mock Test 1', link: '/mock-tests/mht-cet-1' },
        { title: 'MHT CET Mock Test 2', link: '/mock-tests/mht-cet-2' }
      ],
      studyResources: [
        { title: 'MHT CET Study Guide', type: 'PDF', link: '/resources/mht-cet-guide' },
        { title: 'Previous Year Solutions', type: 'PDF', link: '/resources/mht-cet-solutions' }
      ]
    },
    'kcet': {
      id: 'kcet',
      title: 'KCET (Karnataka Common Entrance Test)',
      code: 'kcet',
      overview: {
        purpose: 'KCET is conducted for admission to Engineering, Medical, and other professional courses in Karnataka state.',
        eligibility: '10+2 with PCM/PCB as required for respective courses. Minimum 45% marks (40% for reserved categories). Must be Karnataka domicile.',
        level: 'State Level',
        states: ['Karnataka']
      },
      importantDates: {
        applicationStart: 'February 1, 2024',
        applicationEnd: 'March 15, 2024',
        admitCardRelease: 'April 1, 2024',
        examDate: 'April 20-21, 2024',
        resultDate: 'May 20, 2024',
        counselingStart: 'June 1, 2024'
      },
      latestUpdates: [
        {
          title: 'KCET 2024 Application Opens',
          date: 'February 1, 2024',
          description: 'Online registration for KCET 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'January 15, 2024',
          description: 'Minor updates in Physics and Chemistry syllabus. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry',
          'Biology: Botany, Zoology (for Medical stream)'
        ],
        downloadLink: '/downloads/kcet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit KCET official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://cetonline.karnataka.gov.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets and domicile certificate.'
      },
      results: {
        date: 'May 20, 2024',
        howToCheck: [
          'Visit KCET website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '88',
            obc: '85',
            sc: '82',
            st: '80'
          }
        ]
      },
      counseling: {
        schedule: 'June 1 - July 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://cetonline.karnataka.gov.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/kcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/kcet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from April 1, 2024',
        downloadProcess: [
          'Visit KCET website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for KCET?',
          answer: 'The application fee is ₹500 for general category and ₹250 for SC/ST candidates.'
        },
        {
          question: 'Can I apply for KCET if I am not from Karnataka?',
          answer: 'Yes, but you need to have studied 10+2 in Karnataka or have Karnataka domicile.'
        }
      ],
      reviews: [
        { rating: 4.4, comment: 'Well-organized exam with good difficulty level.', user: 'Suresh R.' },
        { rating: 4.2, comment: 'Fair evaluation and timely results.', user: 'Anjali M.' }
      ],
      mockTests: [
        { title: 'KCET Mock Test 1', link: '/mock-tests/kcet-1' },
        { title: 'KCET Mock Test 2', link: '/mock-tests/kcet-2' }
      ],
      studyResources: [
        { title: 'KCET Study Guide', type: 'PDF', link: '/resources/kcet-guide' },
        { title: 'Previous Year Solutions', type: 'PDF', link: '/resources/kcet-solutions' }
      ]
    },
    'keam': {
      id: 'keam',
      title: 'KEAM (Kerala Engineering Architecture Medical)',
      code: 'keam',
      overview: {
        purpose: 'KEAM is conducted for admission to Engineering, Architecture, Medical, and other professional courses in Kerala state.',
        eligibility: '10+2 with PCM/PCB as required for respective courses. Minimum 50% marks (40% for reserved categories). Must be Kerala domicile.',
        level: 'State Level',
        states: ['Kerala']
      },
      importantDates: {
        applicationStart: 'February 1, 2024',
        applicationEnd: 'March 15, 2024',
        admitCardRelease: 'April 1, 2024',
        examDate: 'April 20-21, 2024',
        resultDate: 'May 20, 2024',
        counselingStart: 'June 1, 2024'
      },
      latestUpdates: [
        {
          title: 'KEAM 2024 Application Opens',
          date: 'February 1, 2024',
          description: 'Online registration for KEAM 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'January 15, 2024',
          description: 'Minor updates in Physics and Chemistry syllabus. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics',
          'Chemistry: Organic, Inorganic, Physical Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry',
          'Biology: Botany, Zoology (for Medical stream)'
        ],
        downloadLink: '/downloads/keam-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit KEAM official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://cee.kerala.gov.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets and domicile certificate.'
      },
      results: {
        date: 'May 20, 2024',
        howToCheck: [
          'Visit KEAM website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '90',
            obc: '87',
            sc: '84',
            st: '82'
          }
        ]
      },
      counseling: {
        schedule: 'June 1 - July 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://cee.kerala.gov.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/keam-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/keam-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from April 1, 2024',
        downloadProcess: [
          'Visit KEAM website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for KEAM?',
          answer: 'The application fee is ₹800 for general category and ₹400 for SC/ST candidates.'
        },
        {
          question: 'Can I apply for KEAM if I am not from Kerala?',
          answer: 'Yes, but you need to have studied 10+2 in Kerala or have Kerala domicile.'
        }
      ],
      reviews: [
        { rating: 4.5, comment: 'Well-structured exam with good difficulty level.', user: 'Vikram S.' },
        { rating: 4.3, comment: 'Fair evaluation and timely results.', user: 'Priya L.' }
      ],
      mockTests: [
        { title: 'KEAM Mock Test 1', link: '/mock-tests/keam-1' },
        { title: 'KEAM Mock Test 2', link: '/mock-tests/keam-2' }
      ],
      studyResources: [
        { title: 'KEAM Study Guide', type: 'PDF', link: '/resources/keam-guide' },
        { title: 'Previous Year Solutions', type: 'PDF', link: '/resources/keam-solutions' }
      ]
    },
    'clat': {
      id: 'clat',
      title: 'CLAT (Common Law Admission Test)',
      code: 'clat',
      overview: {
        purpose: 'CLAT is conducted for admission to 5-year integrated LLB programs and 1-year LLM programs at 22 National Law Universities across India.',
        eligibility: 'For LLB: 10+2 with minimum 45% marks (40% for SC/ST). For LLM: LLB degree with minimum 55% marks (50% for SC/ST). No age limit.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'January 1, 2024',
        applicationEnd: 'March 31, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 12, 2024',
        resultDate: 'June 10, 2024',
        counselingStart: 'June 20, 2024'
      },
      latestUpdates: [
        {
          title: 'CLAT 2024 Registration Opens',
          date: 'January 1, 2024',
          description: 'Online registration for CLAT 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'New NLU Added to CLAT',
          date: 'December 15, 2023',
          description: 'National Law University, Tripura has been added to the participating institutions for 2024.'
        }
      ],
      syllabus: {
        highlights: [
          'English Language: Grammar, vocabulary, comprehension',
          'Current Affairs: National and international events',
          'Legal Reasoning: Legal principles, case laws, legal maxims',
          'Logical Reasoning: Analytical reasoning, critical thinking',
          'Quantitative Techniques: Mathematics and statistics'
        ],
        downloadLink: '/downloads/clat-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit CLAT official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://consortiumofnlus.ac.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'June 10, 2024',
        howToCheck: [
          'Visit CLAT website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '95',
            obc: '92',
            sc: '88',
            st: '85'
          }
        ]
      },
      counseling: {
        schedule: 'June 20 - August 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://consortiumofnlus.ac.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/clat-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/clat-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit CLAT website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for CLAT?',
          answer: 'The application fee is ₹4,000 for general category and ₹3,500 for SC/ST candidates.'
        },
        {
          question: 'How many NLUs participate in CLAT?',
          answer: 'Currently, 22 National Law Universities participate in CLAT across India.'
        }
      ],
      reviews: [
        { rating: 4.7, comment: 'Well-structured exam with good difficulty level.', user: 'Arjun S.' },
        { rating: 4.5, comment: 'Fair evaluation and timely results.', user: 'Priya M.' }
      ],
      mockTests: [
        { title: 'CLAT Mock Test 1', link: '/mock-tests/clat-1' },
        { title: 'CLAT Mock Test 2', link: '/mock-tests/clat-2' }
      ],
      studyResources: [
        { title: 'CLAT Study Guide', type: 'PDF', link: '/resources/clat-guide' },
        { title: 'Legal Reasoning Practice', type: 'PDF', link: '/resources/legal-reasoning' }
      ]
    },
    'ailet': {
      id: 'ailet',
      title: 'AILET (All India Law Entrance Test)',
      code: 'ailet',
      overview: {
        purpose: 'AILET is conducted by National Law University, Delhi for admission to 5-year integrated LLB and 1-year LLM programs.',
        eligibility: 'For LLB: 10+2 with minimum 50% marks (45% for SC/ST). For LLM: LLB degree with minimum 55% marks (50% for SC/ST). No age limit.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'January 1, 2024',
        applicationEnd: 'April 15, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 26, 2024',
        resultDate: 'June 15, 2024',
        counselingStart: 'June 25, 2024'
      },
      latestUpdates: [
        {
          title: 'AILET 2024 Registration Opens',
          date: 'January 1, 2024',
          description: 'Online registration for AILET 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'Syllabus Updated for 2024',
          date: 'December 20, 2023',
          description: 'Minor updates in Legal Reasoning and English sections. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'English: Grammar, vocabulary, comprehension',
          'General Knowledge: Current affairs, history, geography',
          'Legal Reasoning: Legal principles, case laws, legal maxims',
          'Logical Reasoning: Analytical reasoning, critical thinking',
          'Mathematics: Basic mathematics and statistics'
        ],
        downloadLink: '/downloads/ailet-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit AILET official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://nludelhi.ac.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'June 15, 2024',
        howToCheck: [
          'Visit AILET website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '98',
            obc: '95',
            sc: '92',
            st: '90'
          }
        ]
      },
      counseling: {
        schedule: 'June 25 - July 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://nludelhi.ac.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/ailet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/ailet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit AILET website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for AILET?',
          answer: 'The application fee is ₹3,050 for general category and ₹1,050 for SC/ST candidates.'
        },
        {
          question: 'How many seats are available in AILET?',
          answer: 'AILET offers 120 seats for LLB program and 80 seats for LLM program.'
        }
      ],
      reviews: [
        { rating: 4.8, comment: 'Excellent exam structure with good difficulty level.', user: 'Rohit K.' },
        { rating: 4.6, comment: 'Fair evaluation and timely results.', user: 'Anita S.' }
      ],
      mockTests: [
        { title: 'AILET Mock Test 1', link: '/mock-tests/ailet-1' },
        { title: 'AILET Mock Test 2', link: '/mock-tests/ailet-2' }
      ],
      studyResources: [
        { title: 'AILET Study Guide', type: 'PDF', link: '/resources/ailet-guide' },
        { title: 'Legal Reasoning Practice', type: 'PDF', link: '/resources/legal-reasoning' }
      ]
    },
    'viteee': {
      id: 'viteee',
      title: 'VITEEE (VIT Engineering Entrance Examination)',
      code: 'viteee',
      overview: {
        purpose: 'VITEEE is conducted by VIT University for admission to B.Tech programs at VIT campuses in Vellore, Chennai, Bhopal, and Amaravati.',
        eligibility: '10+2 with PCM with minimum 60% marks (50% for SC/ST). Physics, Chemistry, and Mathematics are mandatory subjects.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'November 1, 2023',
        applicationEnd: 'March 31, 2024',
        admitCardRelease: 'April 10, 2024',
        examDate: 'April 19-30, 2024',
        resultDate: 'May 10, 2024',
        counselingStart: 'May 20, 2024'
      },
      latestUpdates: [
        {
          title: 'VITEEE 2024 Registration Opens',
          date: 'November 1, 2023',
          description: 'Online registration for VITEEE 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'New VIT Campus Added',
          date: 'October 15, 2023',
          description: 'VIT University, Amaravati campus has been added to the participating institutions for 2024.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Organic, Inorganic Chemistry',
          'Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry',
          'English: Grammar, vocabulary, comprehension',
          'Aptitude: Logical reasoning, analytical ability'
        ],
        downloadLink: '/downloads/viteee-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit VITEEE official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://viteee.vit.ac.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'May 10, 2024',
        howToCheck: [
          'Visit VITEEE website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '85',
            obc: '82',
            sc: '78',
            st: '75'
          }
        ]
      },
      counseling: {
        schedule: 'May 20 - July 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://viteee.vit.ac.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/viteee-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/viteee-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from April 10, 2024',
        downloadProcess: [
          'Visit VITEEE website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for VITEEE?',
          answer: 'The application fee is ₹1,350 for general category and ₹1,200 for SC/ST candidates.'
        },
        {
          question: 'How many VIT campuses participate in VITEEE?',
          answer: 'VITEEE is conducted for admission to 4 VIT campuses: Vellore, Chennai, Bhopal, and Amaravati.'
        }
      ],
      reviews: [
        { rating: 4.4, comment: 'Well-structured exam with good difficulty level.', user: 'Vikram S.' },
        { rating: 4.2, comment: 'Fair evaluation and timely results.', user: 'Priya L.' }
      ],
      mockTests: [
        { title: 'VITEEE Mock Test 1', link: '/mock-tests/viteee-1' },
        { title: 'VITEEE Mock Test 2', link: '/mock-tests/viteee-2' }
      ],
      studyResources: [
        { title: 'VITEEE Study Guide', type: 'PDF', link: '/resources/viteee-guide' },
        { title: 'Previous Year Solutions', type: 'PDF', link: '/resources/viteee-solutions' }
      ]
    },
    'bitsat': {
      id: 'bitsat',
      title: 'BITSAT (Birla Institute of Technology and Science Admission Test)',
      code: 'bitsat',
      overview: {
        purpose: 'BITSAT is conducted by BITS Pilani for admission to B.E., B.Pharm, and M.Sc programs at BITS campuses in Pilani, Goa, and Hyderabad.',
        eligibility: '10+2 with PCM with minimum 75% marks (65% for SC/ST). Physics, Chemistry, and Mathematics are mandatory subjects.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'December 1, 2023',
        applicationEnd: 'April 15, 2024',
        admitCardRelease: 'May 1, 2024',
        examDate: 'May 21 - June 1, 2024',
        resultDate: 'June 10, 2024',
        counselingStart: 'June 20, 2024'
      },
      latestUpdates: [
        {
          title: 'BITSAT 2024 Registration Opens',
          date: 'December 1, 2023',
          description: 'Online registration for BITSAT 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'New BITS Campus Added',
          date: 'November 15, 2023',
          description: 'BITS Pilani, Hyderabad campus has been added to the participating institutions for 2024.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Organic, Inorganic Chemistry',
          'Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry',
          'English: Grammar, vocabulary, comprehension',
          'Logical Reasoning: Analytical reasoning, critical thinking'
        ],
        downloadLink: '/downloads/bitsat-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit BITSAT official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://bitsadmission.com',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'June 10, 2024',
        howToCheck: [
          'Visit BITSAT website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '280',
            obc: '275',
            sc: '270',
            st: '265'
          }
        ]
      },
      counseling: {
        schedule: 'June 20 - August 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://bitsadmission.com'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/bitsat-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/bitsat-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from May 1, 2024',
        downloadProcess: [
          'Visit BITSAT website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for BITSAT?',
          answer: 'The application fee is ₹3,400 for general category and ₹2,700 for SC/ST candidates.'
        },
        {
          question: 'How many BITS campuses participate in BITSAT?',
          answer: 'BITSAT is conducted for admission to 3 BITS campuses: Pilani, Goa, and Hyderabad.'
        }
      ],
      reviews: [
        { rating: 4.6, comment: 'Excellent exam structure with good difficulty level.', user: 'Arjun S.' },
        { rating: 4.4, comment: 'Fair evaluation and timely results.', user: 'Priya M.' }
      ],
      mockTests: [
        { title: 'BITSAT Mock Test 1', link: '/mock-tests/bitsat-1' },
        { title: 'BITSAT Mock Test 2', link: '/mock-tests/bitsat-2' }
      ],
      studyResources: [
        { title: 'BITSAT Study Guide', type: 'PDF', link: '/resources/bitsat-guide' },
        { title: 'Previous Year Solutions', type: 'PDF', link: '/resources/bitsat-solutions' }
      ]
    },
    'srmjee': {
      id: 'srmjee',
      title: 'SRMJEEE (SRM Joint Engineering Entrance Examination)',
      code: 'srmjee',
      overview: {
        purpose: 'SRMJEEE is conducted by SRM Institute of Science and Technology for admission to B.Tech programs at SRM campuses across India.',
        eligibility: '10+2 with PCM with minimum 60% marks (50% for SC/ST). Physics, Chemistry, and Mathematics are mandatory subjects.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'November 1, 2023',
        applicationEnd: 'April 15, 2024',
        admitCardRelease: 'April 20, 2024',
        examDate: 'April 25 - May 5, 2024',
        resultDate: 'May 15, 2024',
        counselingStart: 'May 25, 2024'
      },
      latestUpdates: [
        {
          title: 'SRMJEEE 2024 Registration Opens',
          date: 'November 1, 2023',
          description: 'Online registration for SRMJEEE 2024 has commenced. Students can apply through the official website.'
        },
        {
          title: 'New SRM Campus Added',
          date: 'October 20, 2023',
          description: 'SRM University, Sonipat campus has been added to the participating institutions for 2024.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Organic, Inorganic Chemistry',
          'Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry',
          'English: Grammar, vocabulary, comprehension',
          'Aptitude: Logical reasoning, analytical ability'
        ],
        downloadLink: '/downloads/srmjee-syllabus-2024.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit SRMJEEE official website',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photograph',
          'Pay application fee',
          'Submit application and take printout'
        ],
        directApplyLink: 'https://srmist.edu.in',
        instructions: 'Ensure all documents are ready including 10th and 12th mark sheets.'
      },
      results: {
        date: 'May 15, 2024',
        howToCheck: [
          'Visit SRMJEEE website',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2023',
            general: '80',
            obc: '77',
            sc: '74',
            st: '71'
          }
        ]
      },
      counseling: {
        schedule: 'May 25 - July 31, 2024',
        process: [
          'Online registration for counseling',
          'Document verification',
          'Choice filling and locking',
          'Seat allotment result',
          'Reporting to allotted college'
        ],
        website: 'https://srmist.edu.in'
      },
      previousPapers: [
        { year: '2023', downloadLink: '/downloads/srmjee-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/srmjee-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available from April 20, 2024',
        downloadProcess: [
          'Visit SRMJEEE website',
          'Login with application number and password',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for SRMJEEE?',
          answer: 'The application fee is ₹1,100 for general category and ₹550 for SC/ST candidates.'
        },
        {
          question: 'How many SRM campuses participate in SRMJEEE?',
          answer: 'SRMJEEE is conducted for admission to multiple SRM campuses across India including Chennai, Delhi, Sonipat, and others.'
        }
      ],
      reviews: [
        { rating: 4.3, comment: 'Well-structured exam with good difficulty level.', user: 'Rajesh K.' },
        { rating: 4.1, comment: 'Fair evaluation and timely results.', user: 'Priya S.' }
      ],
      mockTests: [
        { title: 'SRMJEEE Mock Test 1', link: '/mock-tests/srmjee-1' },
        { title: 'SRMJEEE Mock Test 2', link: '/mock-tests/srmjee-2' }
      ],
      studyResources: [
        { title: 'SRMJEEE Study Guide', type: 'PDF', link: '/resources/srmjee-guide' },
        { title: 'Previous Year Solutions', type: 'PDF', link: '/resources/srmjee-solutions' }
      ]
    }
  };

  useEffect(() => {
    if (isOpen && examCode) {
      setExamDetail(examDetails[examCode] || null);
    }
  }, [isOpen, examCode]);

  if (!isOpen || !examDetail) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'dates', label: 'Important Dates', icon: Calendar },
    { id: 'application', label: 'Application', icon: Download },
    { id: 'results', label: 'Results', icon: CheckCircle },
    { id: 'counseling', label: 'Counseling', icon: Users },
    { id: 'resources', label: 'Resources', icon: ExternalLink }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-[#262443]">{examDetail.title}</h2>
            <p className="text-gray-600 mt-1">{examDetail.overview.level} • {examDetail.overview.states.join(', ')}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#7bb53a] text-[#7bb53a]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#262443] mb-3">Exam Overview</h3>
                <p className="text-gray-700 mb-4">{examDetail.overview.purpose}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-[#262443] mb-2">Eligibility</h4>
                    <p className="text-sm text-gray-700">{examDetail.overview.eligibility}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-[#262443] mb-2">Level</h4>
                    <p className="text-sm text-gray-700">{examDetail.overview.level}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#262443] mb-3">Latest Updates</h3>
                <div className="space-y-3">
                  {examDetail.latestUpdates.map((update, index) => (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-blue-900">{update.title}</h4>
                          <p className="text-sm text-blue-700 mt-1">{update.description}</p>
                          <p className="text-xs text-blue-600 mt-2">{update.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#262443] mb-3">Syllabus Highlights</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {examDetail.syllabus.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <a
                  href={examDetail.syllabus.downloadLink}
                  className="inline-flex items-center mt-3 text-[#7bb53a] hover:text-[#6ea834] font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Complete Syllabus
                </a>
              </div>
            </div>
          )}

          {activeTab === 'dates' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#262443] mb-4">Important Dates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-medium text-green-900">Application Period</h4>
                  </div>
                  <p className="text-sm text-green-700">
                    {examDetail.importantDates.applicationStart} - {examDetail.importantDates.applicationEnd}
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-medium text-blue-900">Admit Card Release</h4>
                  </div>
                  <p className="text-sm text-blue-700">{examDetail.importantDates.admitCardRelease}</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-red-600 mr-2" />
                    <h4 className="font-medium text-red-900">Exam Date</h4>
                  </div>
                  <p className="text-sm text-red-700">{examDetail.importantDates.examDate}</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-medium text-purple-900">Result Declaration</h4>
                  </div>
                  <p className="text-sm text-purple-700">{examDetail.importantDates.resultDate}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'application' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#262443] mb-4">Application Process</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-[#262443] mb-3">Application Steps</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {examDetail.applicationProcess.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Important Instructions</h4>
                <p className="text-sm text-blue-700">{examDetail.applicationProcess.instructions}</p>
              </div>

              <div className="flex justify-center">
                <a
                  href={examDetail.applicationProcess.directApplyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#7bb53a] text-white font-medium rounded-lg hover:bg-[#6ea834] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </a>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#262443] mb-4">Results & Cutoffs</h3>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-900 mb-2">Result Declaration</h4>
                <p className="text-sm text-green-700 mb-3">{examDetail.results.date}</p>
                <h5 className="font-medium text-green-900 mb-2">How to Check Results</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-green-700">
                  {examDetail.results.howToCheck.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-medium text-[#262443] mb-3">Previous Year Cutoffs</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Year</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">General</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">OBC</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">SC</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ST</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examDetail.results.cutoffs.map((cutoff, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="px-4 py-2 text-sm text-gray-700">{cutoff.year}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{cutoff.general}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{cutoff.obc}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{cutoff.sc}</td>
                          <td className="px-4 py-2 text-sm text-gray-700">{cutoff.st}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'counseling' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#262443] mb-4">Counseling Information</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Counseling Schedule</h4>
                <p className="text-sm text-blue-700">{examDetail.counseling.schedule}</p>
              </div>

              <div>
                <h4 className="font-medium text-[#262443] mb-3">Counseling Process</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {examDetail.counseling.process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="flex justify-center">
                <a
                  href={examDetail.counseling.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Counseling Website
                </a>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#262443] mb-4">Study Resources</h3>
              
              <div>
                <h4 className="font-medium text-[#262443] mb-3">Previous Year Papers</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {examDetail.previousPapers.map((paper, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-[#262443]">{paper.year} Question Paper</h5>
                          <p className="text-sm text-gray-600">Download PDF</p>
                        </div>
                        <a
                          href={paper.downloadLink}
                          className="inline-flex items-center px-3 py-2 bg-[#7bb53a] text-white text-sm font-medium rounded hover:bg-[#6ea834] transition-colors"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#262443] mb-3">Mock Tests</h4>
                <div className="space-y-2">
                  {examDetail.mockTests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <span className="text-gray-700">{test.title}</span>
                      <a
                        href={test.link}
                        className="text-[#7bb53a] hover:text-[#6ea834] font-medium"
                      >
                        Take Test
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#262443] mb-3">Study Materials</h4>
                <div className="space-y-2">
                  {examDetail.studyResources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div>
                        <span className="text-gray-700">{resource.title}</span>
                        <span className="ml-2 text-xs text-gray-500">({resource.type})</span>
                      </div>
                      <a
                        href={resource.link}
                        className="text-[#7bb53a] hover:text-[#6ea834] font-medium"
                      >
                        Access
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#262443] mb-3">Student Reviews</h4>
                <div className="space-y-3">
                  {examDetail.reviews.map((review, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-[#262443]">{review.user}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#262443] mb-3">FAQs</h4>
                <div className="space-y-3">
                  {examDetail.faqs.map((faq, index) => (
                    <details key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <summary className="cursor-pointer font-medium text-[#262443] hover:text-[#7bb53a] transition-colors">
                        {faq.question}
                      </summary>
                      <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExamDetailModal;

