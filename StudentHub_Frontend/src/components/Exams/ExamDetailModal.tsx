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
  const [examDetail, setExamDetail] = useState<ExamDetail | null>(null);

  // Mock data for different exams
  const examDetails: Record<string, ExamDetail> = {
    'jee-main': {
      id: 'jee-main',
      title: 'JEE Main (Joint Entrance Examination Main)',
      code: 'jee-main',
      overview: {
        purpose: 'JEE Main by NTA is India\'s leading entrance for B.Tech, B.Arch, B.Planning at NITs, IIITs, GFTIs, and others.',
        eligibility: '10+2 (PCM); no age limit. Minimum percentage for NITs/IIITs if seeking direct admission.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'November 2024',
        applicationEnd: 'December 2024',
        admitCardRelease: 'Before each session',
        examDate: 'January 2025, April 2025',
        resultDate: 'Released after each attempt',
        counselingStart: 'June 2025'
      },
      latestUpdates: [
        {
          title: 'JEE Main 2025 Registration Opens',
          date: 'November 2024',
          description: 'Online registration for JEE Main 2025 has commenced. Students can apply through the official website.'
        },
        {
          title: 'JEE Main 2025 Exam Pattern Updated',
          date: 'October 2024',
          description: 'NTA has updated the exam pattern for JEE Main 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Inorganic, Organic Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry, Coordinate Geometry'
        ],
        downloadLink: '/downloads/jee-main-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit jeemain.nta.nic.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://jeemain.nta.nic.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'Released after each attempt',
        howToCheck: [
          'Visit NTA official website',
          'Click on JEE Main Results',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '95.5',
            obc: '92.3',
            sc: '88.9',
            st: '85.2'
          }
        ]
      },
      counseling: {
        schedule: 'June - July 2025',
        process: [
          'JoSAA registration',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://josaa.nic.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/jee-main-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/jee-main-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/jee-main-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available before each session',
        downloadProcess: [
          'Visit NTA official website',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'How many times can I attempt JEE Main?',
          answer: 'You can attempt JEE Main for 3 consecutive years after passing 12th class.'
        },
        {
          question: 'What is the application fee for JEE Main?',
          answer: 'The application fee varies: ₹1000 for general, ₹800 for OBC, ₹500 for SC/ST/PH candidates.'
        },
        {
          question: 'Is there negative marking in JEE Main?',
          answer: 'Yes, there is negative marking: -1 for incorrect answers in MCQ questions, no negative marking for numerical questions.'
        }
      ],
      reviews: [
        {
          rating: 5,
          comment: 'Excellent preparation platform with comprehensive study materials.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Great for understanding exam pattern and previous year questions.',
          user: 'Sneha Patel'
        }
      ],
      mockTests: [
        { title: 'JEE Main Physics Mock Test', link: '/mock-tests/jee-main-physics' },
        { title: 'JEE Main Chemistry Mock Test', link: '/mock-tests/jee-main-chemistry' },
        { title: 'JEE Main Mathematics Mock Test', link: '/mock-tests/jee-main-mathematics' }
      ],
      studyResources: [
        { title: 'JEE Main Physics Study Guide', type: 'PDF', link: '/resources/jee-physics-guide' },
        { title: 'JEE Main Chemistry Formula Sheet', type: 'PDF', link: '/resources/jee-chemistry-formulas' },
        { title: 'JEE Main Mathematics Practice Book', type: 'PDF', link: '/resources/jee-mathematics-practice' }
      ]
    },
    'jee-advanced': {
      id: 'jee-advanced',
      title: 'JEE Advanced (Joint Entrance Examination Advanced)',
      code: 'jee-advanced',
      overview: {
        purpose: 'JEE Advanced is for IIT admissions; top JEE Main rankers qualify.',
        eligibility: 'Top 2,50,000 JEE Main rankers, Class 12 passed. Only 2 attempts allowed in consecutive years.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'April 2025',
        applicationEnd: 'May 2025',
        admitCardRelease: 'Week before exam',
        examDate: 'May 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'JEE Advanced 2025 Registration Opens',
          date: 'April 2025',
          description: 'Online registration for JEE Advanced 2025 has commenced for qualified JEE Main candidates.'
        },
        {
          title: 'JEE Advanced 2025 Exam Pattern',
          date: 'March 2025',
          description: 'IIT has announced the exam pattern for JEE Advanced 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Advanced Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Advanced Physical, Inorganic, Organic Chemistry',
          'Mathematics: Advanced Algebra, Calculus, Trigonometry, Coordinate Geometry'
        ],
        downloadLink: '/downloads/jee-advanced-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Qualify JEE Main with top 2,50,000 rank',
          'Visit jeeadv.ac.in',
          'Register for JEE Advanced',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://jeeadv.ac.in',
        instructions: 'Only JEE Main qualified candidates can apply for JEE Advanced.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit jeeadv.ac.in',
          'Click on Results link',
          'Enter roll number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '98.5',
            obc: '95.3',
            sc: '92.9',
            st: '89.2'
          }
        ]
      },
      counseling: {
        schedule: 'July - August 2025',
        process: [
          'JoSAA registration',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://josaa.nic.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/jee-advanced-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/jee-advanced-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/jee-advanced-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available week before exam',
        downloadProcess: [
          'Visit jeeadv.ac.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'How many attempts are allowed for JEE Advanced?',
          answer: 'Only 2 consecutive attempts are allowed for JEE Advanced.'
        },
        {
          question: 'What is the difference between JEE Main and JEE Advanced?',
          answer: 'JEE Main is for NITs/IIITs, JEE Advanced is for IITs. JEE Advanced is more difficult and has different exam pattern.'
        },
        {
          question: 'Is there negative marking in JEE Advanced?',
          answer: 'Yes, there is partial negative marking in JEE Advanced for incorrect answers.'
        }
      ],
      reviews: [
        {
          rating: 5,
          comment: 'Most challenging exam in India. Excellent preparation required.',
          user: 'Rahul Sharma'
        },
        {
          rating: 4,
          comment: 'Great platform for IIT preparation with quality study materials.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'JEE Advanced Physics Mock Test', link: '/mock-tests/jee-advanced-physics' },
        { title: 'JEE Advanced Chemistry Mock Test', link: '/mock-tests/jee-advanced-chemistry' },
        { title: 'JEE Advanced Mathematics Mock Test', link: '/mock-tests/jee-advanced-mathematics' }
      ],
      studyResources: [
        { title: 'JEE Advanced Physics Study Guide', type: 'PDF', link: '/resources/jee-adv-physics-guide' },
        { title: 'JEE Advanced Chemistry Formula Sheet', type: 'PDF', link: '/resources/jee-adv-chemistry-formulas' },
        { title: 'JEE Advanced Mathematics Practice Book', type: 'PDF', link: '/resources/jee-adv-mathematics-practice' }
      ]
    },
    'viteee': {
      id: 'viteee',
      title: 'VITEEE (VIT Engineering Entrance Exam)',
      code: 'viteee',
      overview: {
        purpose: 'Entrance for BTech at all VIT University campuses.',
        eligibility: '10+2 with PCM/PCB, 60% marks (Gen); relaxations apply.',
        level: 'University Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'November 2024',
        applicationEnd: 'March 2025',
        admitCardRelease: 'April 2025',
        examDate: 'April 20-27, 2025',
        resultDate: 'April end 2025',
        counselingStart: 'May 2025'
      },
      latestUpdates: [
        {
          title: 'VITEEE 2025 Registration Opens',
          date: 'November 2024',
          description: 'Online registration for VITEEE 2025 has commenced. Students can apply through the official website.'
        },
        {
          title: 'VITEEE 2025 Exam Dates Announced',
          date: 'October 2024',
          description: 'VIT has announced the exam dates for VITEEE 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Mathematics: Algebra, Calculus, Trigonometry, Coordinate Geometry',
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Inorganic, Organic Chemistry',
          'Aptitude: Logical Reasoning, Data Interpretation',
          'English: Grammar, Vocabulary, Comprehension'
        ],
        downloadLink: '/downloads/viteee-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit viteee.vit.ac.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee ₹1350',
          'Submit and take printout'
        ],
        directApplyLink: 'https://viteee.vit.ac.in',
        instructions: 'Application fee is non-refundable. Ensure all documents are ready before starting.'
      },
      results: {
        date: 'April end 2025',
        howToCheck: [
          'Visit viteee.vit.ac.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '85.5',
            obc: '82.3',
            sc: '78.9',
            st: '75.2'
          }
        ]
      },
      counseling: {
        schedule: 'May 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://viteee.vit.ac.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/viteee-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/viteee-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/viteee-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in April 2025',
        downloadProcess: [
          'Visit viteee.vit.ac.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'Is there negative marking in VITEEE?',
          answer: 'No, there is no negative marking in VITEEE. +1 mark for each correct answer.'
        },
        {
          question: 'What is the application fee for VITEEE?',
          answer: 'The application fee is ₹1350 (non-refundable) for all candidates.'
        },
        {
          question: 'Can I apply for more than one VIT campus?',
          answer: 'Yes, you can apply for multiple VIT campuses during the counseling process.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for VIT admission. Well organized process.',
          user: 'Arjun Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding VIT exam pattern.',
          user: 'Kavya Reddy'
        }
      ],
      mockTests: [
        { title: 'VITEEE Physics Mock Test', link: '/mock-tests/viteee-physics' },
        { title: 'VITEEE Chemistry Mock Test', link: '/mock-tests/viteee-chemistry' },
        { title: 'VITEEE Mathematics Mock Test', link: '/mock-tests/viteee-mathematics' }
      ],
      studyResources: [
        { title: 'VITEEE Physics Study Guide', type: 'PDF', link: '/resources/viteee-physics-guide' },
        { title: 'VITEEE Chemistry Formula Sheet', type: 'PDF', link: '/resources/viteee-chemistry-formulas' },
        { title: 'VITEEE Mathematics Practice Book', type: 'PDF', link: '/resources/viteee-mathematics-practice' }
      ]
    },
    'neet': {
      id: 'neet',
      title: 'NEET (National Eligibility cum Entrance Test)',
      code: 'neet',
      overview: {
        purpose: 'National level entrance exam for admission to MBBS, BDS, AYUSH, and other medical courses in India.',
        eligibility: '10+2 with Physics, Chemistry, Biology/Biotechnology. Minimum 50% marks in PCB (40% for SC/ST/OBC, 45% for PwD). Minimum age 17 years.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'February 2025',
        applicationEnd: 'March 2025',
        admitCardRelease: 'April 2025',
        examDate: 'May 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'NEET 2025 Application Form Released',
          date: 'February 2025',
          description: 'NTA has released the application form for NEET 2025. Apply online through the official website.'
        },
        {
          title: 'NEET 2025 Exam Pattern Updated',
          date: 'January 2025',
          description: 'NTA has updated the exam pattern for NEET 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Electrostatics, Current Electricity, Optics, Modern Physics',
          'Chemistry: Physical Chemistry, Inorganic Chemistry, Organic Chemistry',
          'Biology: Diversity in Living World, Cell Structure, Plant Physiology, Human Physiology, Genetics, Evolution, Ecology'
        ],
        downloadLink: '/downloads/neet-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit neet.nta.nic.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://neet.nta.nic.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit neet.nta.nic.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '720-164',
            obc: '163-129',
            sc: '163-129',
            st: '163-129'
          }
        ]
      },
      counseling: {
        schedule: 'July - September 2025',
        process: [
          'MCC registration for 15% All India Quota',
          'State counseling for 85% State Quota',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://mcc.nic.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/neet-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/neet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/neet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in April 2025',
        downloadProcess: [
          'Visit neet.nta.nic.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'Is NEET mandatory for MBBS?',
          answer: 'Yes, NEET UG is the only entrance exam for MBBS/BDS admissions in India.'
        },
        {
          question: 'How many attempts are allowed for NEET?',
          answer: 'There is no limit on the number of attempts for NEET.'
        },
        {
          question: 'What is the application fee for NEET?',
          answer: 'The application fee varies: ₹1700 for general, ₹1600 for OBC, ₹1000 for SC/ST/PH candidates.'
        }
      ],
      reviews: [
        {
          rating: 5,
          comment: 'Comprehensive exam, fair process.',
          user: 'Rahul Kumar'
        },
        {
          rating: 4,
          comment: 'Good platform for medical entrance preparation.',
          user: 'Priya Sharma'
        }
      ],
      mockTests: [
        { title: 'NEET Physics Mock Test', link: '/mock-tests/neet-physics' },
        { title: 'NEET Chemistry Mock Test', link: '/mock-tests/neet-chemistry' },
        { title: 'NEET Biology Mock Test', link: '/mock-tests/neet-biology' }
      ],
      studyResources: [
        { title: 'NEET Physics Study Guide', type: 'PDF', link: '/resources/neet-physics-guide' },
        { title: 'NEET Chemistry Formula Sheet', type: 'PDF', link: '/resources/neet-chemistry-formulas' },
        { title: 'NEET Biology Practice Book', type: 'PDF', link: '/resources/neet-biology-practice' }
      ]
    },
    'jipmer-mbbs': {
      id: 'jipmer-mbbs',
      title: 'JIPMER MBBS (Via NEET)',
      code: 'jipmer-mbbs',
      overview: {
        purpose: 'Admission to MBBS at JIPMER Puducherry and Karaikal is only through the NEET-UG exam. The program lasts 5 years 6 months (including the internship). Both campuses offer around 200 seats in total.',
        eligibility: '10+2 with Physics, Chemistry, Biology/Biotechnology, and English. At least 50% (Gen/EWS), 40% (OBC/SC/ST/PwD) in PCB. No upper age limit; must be 17 before 31 Dec of admission.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'February 2025',
        applicationEnd: 'March 2025',
        admitCardRelease: 'April 2025',
        examDate: 'May 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'JIPMER MBBS 2025 Admission via NEET',
          date: 'February 2025',
          description: 'JIPMER MBBS admission is now through NEET-UG only. Apply for NEET-UG and select JIPMER during MCC counseling.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Electrostatics, Current Electricity, Optics, Modern Physics',
          'Chemistry: Physical Chemistry, Inorganic Chemistry, Organic Chemistry',
          'Biology: Diversity in Living World, Cell Structure, Plant Physiology, Human Physiology, Genetics, Evolution, Ecology'
        ],
        downloadLink: '/downloads/neet-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Apply for NEET-UG online',
          'Select JIPMER during MCC counseling',
          'Upload required documents',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://neet.nta.nic.in',
        instructions: 'JIPMER MBBS admission is only through NEET-UG. Apply for NEET and select JIPMER during counseling.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit neet.nta.nic.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: 'AIR 258-1200',
            obc: 'AIR 500-1500',
            sc: 'AIR 800-2000',
            st: 'AIR 1000-2500'
          }
        ]
      },
      counseling: {
        schedule: 'July - August 2025',
        process: [
          'MCC registration for JIPMER seats',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://mcc.nic.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/neet-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/neet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/neet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in April 2025',
        downloadProcess: [
          'Visit neet.nta.nic.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'Is JIPMER MBBS admission only through NEET?',
          answer: 'Yes, JIPMER MBBS admission is now only through NEET-UG. No separate entrance exam.'
        },
        {
          question: 'What is the fee structure for JIPMER MBBS?',
          answer: 'The total fee for JIPMER MBBS is around ₹42,000 for the full course.'
        },
        {
          question: 'How many seats are available in JIPMER?',
          answer: 'JIPMER offers around 200 seats in total across Puducherry and Karaikal campuses.'
        }
      ],
      reviews: [
        {
          rating: 5,
          comment: 'Excellent medical education with world-class facilities.',
          user: 'Dr. Rajesh Kumar'
        },
        {
          rating: 4,
          comment: 'Great research opportunities and clinical exposure.',
          user: 'Dr. Priya Sharma'
        }
      ],
      mockTests: [
        { title: 'NEET Physics Mock Test', link: '/mock-tests/neet-physics' },
        { title: 'NEET Chemistry Mock Test', link: '/mock-tests/neet-chemistry' },
        { title: 'NEET Biology Mock Test', link: '/mock-tests/neet-biology' }
      ],
      studyResources: [
        { title: 'NEET Physics Study Guide', type: 'PDF', link: '/resources/neet-physics-guide' },
        { title: 'NEET Chemistry Formula Sheet', type: 'PDF', link: '/resources/neet-chemistry-formulas' },
        { title: 'NEET Biology Practice Book', type: 'PDF', link: '/resources/neet-biology-practice' }
      ]
    },
    'clat': {
      id: 'clat',
      title: 'CLAT (Common Law Admission Test)',
      code: 'clat',
      overview: {
        purpose: 'Common Law Admission Test (CLAT) is the national entrance for 26 NLUs, held annually by the CLAT Consortium.',
        eligibility: '10+2 (any stream), 45% (Gen), 40% (SC/ST), no age cap. Apply online via consortiumofnlus.ac.in',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'July 2024',
        applicationEnd: 'November 2024',
        admitCardRelease: 'November 2024',
        examDate: 'December 2024',
        resultDate: 'December 2024',
        counselingStart: 'January 2025'
      },
      latestUpdates: [
        {
          title: 'CLAT 2025 Registration Opens',
          date: 'July 2024',
          description: 'Online registration for CLAT 2025 has commenced. Students can apply through the official consortium website.'
        },
        {
          title: 'CLAT 2025 Exam Pattern Updated',
          date: 'June 2024',
          description: 'CLAT Consortium has updated the exam pattern for 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'English Language: Reading comprehension, grammar, vocabulary',
          'Current Affairs & General Knowledge: National and international events',
          'Legal Reasoning: Legal principles and applications',
          'Logical Reasoning: Analytical and logical thinking',
          'Quantitative Techniques: Mathematics up to class 10'
        ],
        downloadLink: '/downloads/clat-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit consortiumofnlus.ac.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://consortiumofnlus.ac.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'December 2024',
        howToCheck: [
          'Visit consortiumofnlus.ac.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '80-120',
            obc: '75-110',
            sc: '70-100',
            st: '65-95'
          }
        ]
      },
      counseling: {
        schedule: 'January - March 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://consortiumofnlus.ac.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/clat-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/clat-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/clat-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in November 2024',
        downloadProcess: [
          'Visit consortiumofnlus.ac.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'How many NLUs participate in CLAT?',
          answer: '26 National Law Universities participate in CLAT, except NLU Delhi which has its own AILET exam.'
        },
        {
          question: 'Is there negative marking in CLAT?',
          answer: 'Yes, there is negative marking: +1 for correct answer, -0.25 for incorrect answer.'
        },
        {
          question: 'What is the application fee for CLAT?',
          answer: 'The application fee is ₹4000 for general category and ₹3500 for SC/ST candidates.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for law entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding law entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'CLAT English Mock Test', link: '/mock-tests/clat-english' },
        { title: 'CLAT Legal Reasoning Mock Test', link: '/mock-tests/clat-legal' },
        { title: 'CLAT Logical Reasoning Mock Test', link: '/mock-tests/clat-logical' }
      ],
      studyResources: [
        { title: 'CLAT English Study Guide', type: 'PDF', link: '/resources/clat-english-guide' },
        { title: 'CLAT Legal Reasoning Practice Book', type: 'PDF', link: '/resources/clat-legal-practice' },
        { title: 'CLAT Current Affairs Guide', type: 'PDF', link: '/resources/clat-current-affairs' }
      ]
    },
    'ailet': {
      id: 'ailet',
      title: 'AILET (All India Law Entrance Test)',
      code: 'ailet',
      overview: {
        purpose: 'All India Law Entrance Test is NLU Delhi\'s exclusive entrance for BA-LLB (Hons), LLM, and PhD.',
        eligibility: '10+2, 45% (Gen), 42% (OBC), 40% (SC/ST/PwD), no age limit. Register online at nludelhi.ac.in',
        level: 'University Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'August 2024',
        applicationEnd: 'October 2024',
        admitCardRelease: 'November 2024',
        examDate: 'December 14, 2024',
        resultDate: 'December 2024',
        counselingStart: 'January 2025'
      },
      latestUpdates: [
        {
          title: 'AILET 2025 Registration Opens',
          date: 'August 2024',
          description: 'Online registration for AILET 2025 has commenced. Students can apply through the official NLU Delhi website.'
        },
        {
          title: 'AILET 2025 Exam Date Announced',
          date: 'July 2024',
          description: 'NLU Delhi has announced the exam date for AILET 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'English Language: Reading comprehension, grammar, vocabulary (50 questions)',
          'Logical Reasoning: Analytical and logical thinking (70 questions)',
          'Current Affairs & General Knowledge: National and international events (30 questions)'
        ],
        downloadLink: '/downloads/ailet-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit nludelhi.ac.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://nludelhi.ac.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'December 2024',
        howToCheck: [
          'Visit nludelhi.ac.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '85-120',
            obc: '80-115',
            sc: '75-110',
            st: '70-105'
          }
        ]
      },
      counseling: {
        schedule: 'January - February 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://nludelhi.ac.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/ailet-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/ailet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/ailet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in November 2024',
        downloadProcess: [
          'Visit nludelhi.ac.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'How many seats are available in NLU Delhi?',
          answer: 'NLU Delhi offers approximately 110 seats for BA-LLB (Hons) program.'
        },
        {
          question: 'Is there negative marking in AILET?',
          answer: 'Yes, there is negative marking: +1 for correct answer, -0.25 for incorrect answer.'
        },
        {
          question: 'What is the application fee for AILET?',
          answer: 'The application fee is ₹3050 for general category and ₹1050 for SC/ST candidates.'
        }
      ],
      reviews: [
        {
          rating: 5,
          comment: 'Excellent law education with great faculty.',
          user: 'Rahul Kumar'
        },
        {
          rating: 4,
          comment: 'Good platform for law entrance preparation.',
          user: 'Priya Sharma'
        }
      ],
      mockTests: [
        { title: 'AILET English Mock Test', link: '/mock-tests/ailet-english' },
        { title: 'AILET Logical Reasoning Mock Test', link: '/mock-tests/ailet-logical' },
        { title: 'AILET Current Affairs Mock Test', link: '/mock-tests/ailet-current-affairs' }
      ],
      studyResources: [
        { title: 'AILET English Study Guide', type: 'PDF', link: '/resources/ailet-english-guide' },
        { title: 'AILET Logical Reasoning Practice Book', type: 'PDF', link: '/resources/ailet-logical-practice' },
        { title: 'AILET Current Affairs Guide', type: 'PDF', link: '/resources/ailet-current-affairs' }
      ]
    },
    'icar-aieea-ug': {
      id: 'icar-aieea-ug',
      title: 'ICAR AIEEA-UG (All India Entrance Examination for Agriculture)',
      code: 'icar-aieea-ug',
      overview: {
        purpose: 'ICAR AIEEA-UG is conducted for admission to undergraduate agricultural programs at ICAR-accredited institutions across India.',
        eligibility: '10+2 with agriculture/PCB/PCM as applicable (stream-specific), 50% Gen, 40% for reserved.',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'March 2025',
        applicationEnd: 'April 2025',
        admitCardRelease: 'May 2025',
        examDate: 'June 2025',
        resultDate: 'July 2025',
        counselingStart: 'August 2025'
      },
      latestUpdates: [
        {
          title: 'ICAR AIEEA-UG 2025 Registration Opens',
          date: 'March 2025',
          description: 'Online registration for ICAR AIEEA-UG 2025 has commenced. Students can apply through the official NTA ICAR website.'
        },
        {
          title: 'ICAR AIEEA-UG 2025 Exam Pattern',
          date: 'February 2025',
          description: 'NTA has announced the exam pattern for ICAR AIEEA-UG 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Inorganic, Organic Chemistry',
          'Biology: Diversity, Cell Structure, Plant Physiology, Human Physiology, Genetics, Evolution, Ecology',
          'Mathematics: Algebra, Calculus, Trigonometry, Coordinate Geometry',
          'Agriculture: Crop Production, Soil Science, Plant Breeding, Agricultural Economics'
        ],
        downloadLink: '/downloads/icar-aieea-ug-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit ntaicar.nic.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://ntaicar.nic.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'July 2025',
        howToCheck: [
          'Visit ntaicar.nic.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '75-120',
            obc: '70-115',
            sc: '65-110',
            st: '60-105'
          }
        ]
      },
      counseling: {
        schedule: 'August - September 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://ntaicar.nic.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/icar-aieea-ug-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/icar-aieea-ug-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/icar-aieea-ug-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in May 2025',
        downloadProcess: [
          'Visit ntaicar.nic.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What courses are available through ICAR AIEEA-UG?',
          answer: 'BSc Agriculture, BSc Horticulture, BSc Forestry, BSc Agricultural Engineering, and other allied courses.'
        },
        {
          question: 'How many seats are available through ICAR AIEEA-UG?',
          answer: 'ICAR AIEEA-UG offers 15% of seats in ICAR-accredited agricultural universities across India.'
        },
        {
          question: 'What is the application fee for ICAR AIEEA-UG?',
          answer: 'The application fee is ₹1500 for general category and ₹750 for SC/ST candidates.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for agricultural sciences. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding agricultural entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'ICAR AIEEA-UG Physics Mock Test', link: '/mock-tests/icar-physics' },
        { title: 'ICAR AIEEA-UG Chemistry Mock Test', link: '/mock-tests/icar-chemistry' },
        { title: 'ICAR AIEEA-UG Biology Mock Test', link: '/mock-tests/icar-biology' }
      ],
      studyResources: [
        { title: 'ICAR AIEEA-UG Physics Study Guide', type: 'PDF', link: '/resources/icar-physics-guide' },
        { title: 'ICAR AIEEA-UG Chemistry Formula Sheet', type: 'PDF', link: '/resources/icar-chemistry-formulas' },
        { title: 'ICAR AIEEA-UG Biology Practice Book', type: 'PDF', link: '/resources/icar-biology-practice' }
      ]
    },
    'lsat-india': {
      id: 'lsat-india',
      title: 'LSAT-India (Law School Admission Test)',
      code: 'lsat-india',
      overview: {
        purpose: 'LSAT India is for admission to undergraduate law programs at multiple private universities.',
        eligibility: '10+2 in any stream; minimum pass (percentage varies across universities).',
        level: 'National Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'January 2025',
        applicationEnd: 'April 2025',
        admitCardRelease: 'May 2025',
        examDate: 'May 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'LSAT-India 2025 Registration Opens',
          date: 'January 2025',
          description: 'Online registration for LSAT-India 2025 has commenced. Students can apply through the official website.'
        },
        {
          title: 'LSAT-India 2025 Exam Pattern',
          date: 'December 2024',
          description: 'LSAT-India has announced the exam pattern for 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Logical Reasoning: Analytical and logical thinking',
          'Analytical Reasoning: Problem-solving and critical thinking',
          'Reading Comprehension: English language and comprehension skills'
        ],
        downloadLink: '/downloads/lsat-india-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit discoverlaw.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://discoverlaw.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit discoverlaw.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '60-90',
            obc: '55-85',
            sc: '50-80',
            st: '45-75'
          }
        ]
      },
      counseling: {
        schedule: 'July - August 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://discoverlaw.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/lsat-india-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/lsat-india-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/lsat-india-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in May 2025',
        downloadProcess: [
          'Visit discoverlaw.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'How many times can I attempt LSAT-India?',
          answer: 'You can attempt LSAT-India multiple times in a year as it is conducted in multiple sessions.'
        },
        {
          question: 'Is there negative marking in LSAT-India?',
          answer: 'No, there is no negative marking in LSAT-India. +1 mark for each correct answer.'
        },
        {
          question: 'What is the application fee for LSAT-India?',
          answer: 'The application fee is ₹3800 for all candidates.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for law entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding law entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'LSAT-India Logical Reasoning Mock Test', link: '/mock-tests/lsat-logical' },
        { title: 'LSAT-India Analytical Reasoning Mock Test', link: '/mock-tests/lsat-analytical' },
        { title: 'LSAT-India Reading Comprehension Mock Test', link: '/mock-tests/lsat-reading' }
      ],
      studyResources: [
        { title: 'LSAT-India Logical Reasoning Study Guide', type: 'PDF', link: '/resources/lsat-logical-guide' },
        { title: 'LSAT-India Analytical Reasoning Practice Book', type: 'PDF', link: '/resources/lsat-analytical-practice' },
        { title: 'LSAT-India Reading Comprehension Guide', type: 'PDF', link: '/resources/lsat-reading-guide' }
      ]
    },
    'slat': {
      id: 'slat',
      title: 'SLAT (Symbiosis Law Admission Test)',
      code: 'slat',
      overview: {
        purpose: 'SLAT (Symbiosis Law Admission Test) is for the 5-year law program across Symbiosis campuses.',
        eligibility: '10+2 (any stream), 45% (Gen), 40% (SC/ST).',
        level: 'University Level',
        states: ['All India']
      },
      importantDates: {
        applicationStart: 'December 2024',
        applicationEnd: 'April 2025',
        admitCardRelease: 'May 2025',
        examDate: 'May 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'SLAT 2025 Registration Opens',
          date: 'December 2024',
          description: 'Online registration for SLAT 2025 has commenced. Students can apply through the official Symbiosis website.'
        },
        {
          title: 'SLAT 2025 Exam Pattern',
          date: 'November 2024',
          description: 'Symbiosis has announced the exam pattern for SLAT 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'English: Grammar, vocabulary, reading comprehension',
          'Reasoning: Logical and analytical reasoning',
          'General Knowledge: Current affairs and general awareness',
          'Legal: Basic legal concepts and principles',
          'Quantitative Aptitude: Mathematics up to class 10'
        ],
        downloadLink: '/downloads/slat-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit set-test.org',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://set-test.org',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit set-test.org',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '70-100',
            obc: '65-95',
            sc: '60-90',
            st: '55-85'
          }
        ]
      },
      counseling: {
        schedule: 'July - August 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://set-test.org'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/slat-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/slat-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/slat-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in May 2025',
        downloadProcess: [
          'Visit set-test.org',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'How many Symbiosis Law Schools participate in SLAT?',
          answer: '4 Symbiosis Law Schools participate: Pune, Noida, Hyderabad, and Nagpur.'
        },
        {
          question: 'Is there negative marking in SLAT?',
          answer: 'No, there is no negative marking in SLAT. +1 mark for each correct answer.'
        },
        {
          question: 'What is the application fee for SLAT?',
          answer: 'The application fee is ₹2250 for all candidates.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for Symbiosis law entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding Symbiosis law entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'SLAT English Mock Test', link: '/mock-tests/slat-english' },
        { title: 'SLAT Reasoning Mock Test', link: '/mock-tests/slat-reasoning' },
        { title: 'SLAT Legal Mock Test', link: '/mock-tests/slat-legal' }
      ],
      studyResources: [
        { title: 'SLAT English Study Guide', type: 'PDF', link: '/resources/slat-english-guide' },
        { title: 'SLAT Reasoning Practice Book', type: 'PDF', link: '/resources/slat-reasoning-practice' },
        { title: 'SLAT Legal Concepts Guide', type: 'PDF', link: '/resources/slat-legal-guide' }
      ]
    },
    'kcet': {
      id: 'kcet',
      title: 'KCET (Karnataka Common Entrance Test)',
      code: 'kcet',
      overview: {
        purpose: 'KCET (Karnataka Common Entrance Test) is a state-level entrance for Engineering, Agriculture, Pharmacy, Veterinary, and related courses in Karnataka.',
        eligibility: '10+2 with PCM/PCB from a recognized board. 45% marks (40% for reserved). Karnataka and non-Karnataka candidates eligible; domicile required for reservation.',
        level: 'State Level',
        states: ['Karnataka']
      },
      importantDates: {
        applicationStart: 'January 2025',
        applicationEnd: 'February 2025',
        admitCardRelease: 'April 2025',
        examDate: 'April 18-19, 2025',
        resultDate: 'May 2025',
        counselingStart: 'June 2025'
      },
      latestUpdates: [
        {
          title: 'KCET 2025 Registration Opens',
          date: 'January 2025',
          description: 'Online registration for KCET 2025 has commenced. Students can apply through the official KEA website.'
        },
        {
          title: 'KCET 2025 Exam Dates Announced',
          date: 'December 2024',
          description: 'KEA has announced the exam dates for KCET 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Inorganic, Organic Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry, Coordinate Geometry',
          'Biology: Diversity, Cell Structure, Plant Physiology, Human Physiology, Genetics, Evolution, Ecology'
        ],
        downloadLink: '/downloads/kcet-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit kea.kar.nic.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://kea.kar.nic.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'May 2025',
        howToCheck: [
          'Visit kea.kar.nic.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '50-80',
            obc: '45-75',
            sc: '40-70',
            st: '35-65'
          }
        ]
      },
      counseling: {
        schedule: 'June - July 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://kea.kar.nic.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/kcet-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/kcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/kcet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in April 2025',
        downloadProcess: [
          'Visit kea.kar.nic.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the application fee for KCET?',
          answer: 'The application fee is ₹500 for general category (Karnataka) and ₹750 for outside Karnataka candidates.'
        },
        {
          question: 'Is there negative marking in KCET?',
          answer: 'No, there is no negative marking in KCET. +1 mark for each correct answer.'
        },
        {
          question: 'How many colleges participate in KCET?',
          answer: '200+ colleges participate in KCET including engineering, pharmacy, agriculture, and veterinary colleges.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for Karnataka engineering entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding Karnataka entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'KCET Physics Mock Test', link: '/mock-tests/kcet-physics' },
        { title: 'KCET Chemistry Mock Test', link: '/mock-tests/kcet-chemistry' },
        { title: 'KCET Mathematics Mock Test', link: '/mock-tests/kcet-mathematics' }
      ],
      studyResources: [
        { title: 'KCET Physics Study Guide', type: 'PDF', link: '/resources/kcet-physics-guide' },
        { title: 'KCET Chemistry Formula Sheet', type: 'PDF', link: '/resources/kcet-chemistry-formulas' },
        { title: 'KCET Mathematics Practice Book', type: 'PDF', link: '/resources/kcet-mathematics-practice' }
      ]
    },
    'keam': {
      id: 'keam',
      title: 'KEAM (Kerala Engineering Architecture Medical)',
      code: 'keam',
      overview: {
        purpose: 'KEAM (Kerala Engineering Architecture Medical) is for admission to B.Tech, B.Pharm, B.Arch in Kerala.',
        eligibility: '10+2 with PCM for engineering. 50% in PCM aggregate expected. Application online at cee.kerala.gov.in',
        level: 'State Level',
        states: ['Kerala']
      },
      importantDates: {
        applicationStart: 'February 2025',
        applicationEnd: 'March 2025',
        admitCardRelease: 'April 2025',
        examDate: 'April 23, 25-28, 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'KEAM 2025 Registration Opens',
          date: 'February 2025',
          description: 'Online registration for KEAM 2025 has commenced. Students can apply through the official CEE Kerala website.'
        },
        {
          title: 'KEAM 2025 Exam Pattern Updated',
          date: 'January 2025',
          description: 'CEE Kerala has updated the exam pattern for KEAM 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Inorganic, Organic Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry, Coordinate Geometry'
        ],
        downloadLink: '/downloads/keam-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit cee.kerala.gov.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://cee.kerala.gov.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit cee.kerala.gov.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '60-100',
            obc: '55-95',
            sc: '50-90',
            st: '45-85'
          }
        ]
      },
      counseling: {
        schedule: 'July - August 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://cee.kerala.gov.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/keam-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/keam-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/keam-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in April 2025',
        downloadProcess: [
          'Visit cee.kerala.gov.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the exam pattern for KEAM?',
          answer: 'KEAM has 150 MCQs: 45 Physics, 30 Chemistry, 75 Mathematics. 4 marks per correct answer, -1 for wrong answer.'
        },
        {
          question: 'How many colleges participate in KEAM?',
          answer: '150+ colleges participate in KEAM including engineering, pharmacy, and architecture colleges.'
        },
        {
          question: 'What is the contact number for KEAM?',
          answer: 'CEE Kerala helpline: 0471-2525300'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for Kerala engineering entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding Kerala entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'KEAM Physics Mock Test', link: '/mock-tests/keam-physics' },
        { title: 'KEAM Chemistry Mock Test', link: '/mock-tests/keam-chemistry' },
        { title: 'KEAM Mathematics Mock Test', link: '/mock-tests/keam-mathematics' }
      ],
      studyResources: [
        { title: 'KEAM Physics Study Guide', type: 'PDF', link: '/resources/keam-physics-guide' },
        { title: 'KEAM Chemistry Formula Sheet', type: 'PDF', link: '/resources/keam-chemistry-formulas' },
        { title: 'KEAM Mathematics Practice Book', type: 'PDF', link: '/resources/keam-mathematics-practice' }
      ]
    },
    'mh-cet-law': {
      id: 'mh-cet-law',
      title: 'MH CET Law (Maharashtra Common Entrance Test Law)',
      code: 'mh-cet-law',
      overview: {
        purpose: 'MH CET Law is for 5-year and 3-year LLB programs in Maharashtra state law colleges.',
        eligibility: '10+2 in any stream; 45% (Gen). Online application at cetcell.mahacet.org',
        level: 'State Level',
        states: ['Maharashtra']
      },
      importantDates: {
        applicationStart: 'March 2025',
        applicationEnd: 'April 2025',
        admitCardRelease: 'May 2025',
        examDate: 'May 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'MH CET Law 2025 Registration Opens',
          date: 'March 2025',
          description: 'Online registration for MH CET Law 2025 has commenced. Students can apply through the official State CET Cell website.'
        },
        {
          title: 'MH CET Law 2025 Exam Pattern',
          date: 'February 2025',
          description: 'State CET Cell has announced the exam pattern for MH CET Law 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'General Knowledge: Current affairs, history, geography, polity',
          'English: Grammar, vocabulary, reading comprehension',
          'Mathematics: Basic arithmetic, algebra, geometry',
          'Logical Reasoning: Analytical and logical thinking',
          'Legal Aptitude: Basic legal concepts and principles'
        ],
        downloadLink: '/downloads/mh-cet-law-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit cetcell.mahacet.org',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://cetcell.mahacet.org',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit cetcell.mahacet.org',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '70-100',
            obc: '65-95',
            sc: '60-90',
            st: '55-85'
          }
        ]
      },
      counseling: {
        schedule: 'July - August 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://cetcell.mahacet.org'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/mh-cet-law-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/mh-cet-law-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/mh-cet-law-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in May 2025',
        downloadProcess: [
          'Visit cetcell.mahacet.org',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the exam pattern for MH CET Law?',
          answer: '5-year LLB: 5 sections (GK, English, Math, Logical, Legal Aptitude). 3-year LLB: 4 sections (GK, English, Logic, Legal Aptitude). 150/120 questions over 2 hours.'
        },
        {
          question: 'Is there negative marking in MH CET Law?',
          answer: 'No, there is no negative marking in MH CET Law. +1 mark for each correct answer.'
        },
        {
          question: 'What is the application fee for MH CET Law?',
          answer: 'The application fee varies by category. Check the official website for current fees.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for Maharashtra law entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding Maharashtra law entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'MH CET Law General Knowledge Mock Test', link: '/mock-tests/mh-cet-law-gk' },
        { title: 'MH CET Law English Mock Test', link: '/mock-tests/mh-cet-law-english' },
        { title: 'MH CET Law Legal Aptitude Mock Test', link: '/mock-tests/mh-cet-law-legal' }
      ],
      studyResources: [
        { title: 'MH CET Law General Knowledge Guide', type: 'PDF', link: '/resources/mh-cet-law-gk-guide' },
        { title: 'MH CET Law English Study Guide', type: 'PDF', link: '/resources/mh-cet-law-english-guide' },
        { title: 'MH CET Law Legal Aptitude Practice Book', type: 'PDF', link: '/resources/mh-cet-law-legal-practice' }
      ]
    },
    'ts-lawcet': {
      id: 'ts-lawcet',
      title: 'TS LAWCET (Telangana State Law Common Entrance Test)',
      code: 'ts-lawcet',
      overview: {
        purpose: 'TS LAWCET is for 3-year and 5-year LLB courses in Telangana law colleges.',
        eligibility: '10+2 or Graduate with specific marks (vary by course/category). Application via lawcet.tsche.ac.in',
        level: 'State Level',
        states: ['Telangana']
      },
      importantDates: {
        applicationStart: 'March 2025',
        applicationEnd: 'April 2025',
        admitCardRelease: 'May 2025',
        examDate: 'June 6, 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'TS LAWCET 2025 Registration Opens',
          date: 'March 2025',
          description: 'Online registration for TS LAWCET 2025 has commenced. Students can apply through the official TSCHE website.'
        },
        {
          title: 'TS LAWCET 2025 Exam Date Announced',
          date: 'February 2025',
          description: 'TSCHE has announced the exam date for TS LAWCET 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'General Knowledge & Mental Ability: Current affairs, general awareness, logical reasoning',
          'Current Affairs: National and international events, sports, awards',
          'Legal Aptitude: Basic legal concepts, constitutional law, criminal law, civil law'
        ],
        downloadLink: '/downloads/ts-lawcet-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit lawcet.tsche.ac.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://lawcet.tsche.ac.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit lawcet.tsche.ac.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '75-100',
            obc: '70-95',
            sc: '65-90',
            st: '60-85'
          }
        ]
      },
      counseling: {
        schedule: 'July - August 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://lawcet.tsche.ac.in'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/ts-lawcet-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/ts-lawcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/ts-lawcet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in May 2025',
        downloadProcess: [
          'Visit lawcet.tsche.ac.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the exam pattern for TS LAWCET?',
          answer: 'TS LAWCET has 120 MCQs: GK & Mental Ability (30), Current Affairs (30), Legal Aptitude (60). 90 minutes, no negative marking.'
        },
        {
          question: 'Is there negative marking in TS LAWCET?',
          answer: 'No, there is no negative marking in TS LAWCET. +1 mark for each correct answer.'
        },
        {
          question: 'What is the application fee for TS LAWCET?',
          answer: 'The application fee varies by category. Check the official website for current fees.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for Telangana law entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding Telangana law entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'TS LAWCET General Knowledge Mock Test', link: '/mock-tests/ts-lawcet-gk' },
        { title: 'TS LAWCET Current Affairs Mock Test', link: '/mock-tests/ts-lawcet-current-affairs' },
        { title: 'TS LAWCET Legal Aptitude Mock Test', link: '/mock-tests/ts-lawcet-legal' }
      ],
      studyResources: [
        { title: 'TS LAWCET General Knowledge Guide', type: 'PDF', link: '/resources/ts-lawcet-gk-guide' },
        { title: 'TS LAWCET Current Affairs Guide', type: 'PDF', link: '/resources/ts-lawcet-current-affairs' },
        { title: 'TS LAWCET Legal Aptitude Practice Book', type: 'PDF', link: '/resources/ts-lawcet-legal-practice' }
      ]
    },
    'ap-lawcet': {
      id: 'ap-lawcet',
      title: 'AP LAWCET (Andhra Pradesh Law Common Entrance Test)',
      code: 'ap-lawcet',
      overview: {
        purpose: 'AP LAWCET is for LLB admissions in Andhra Pradesh law colleges (3 and 5-year courses).',
        eligibility: '10+2 or Graduate, minimum marks required as per category. Apply on sche.ap.gov.in/lawcet',
        level: 'State Level',
        states: ['Andhra Pradesh']
      },
      importantDates: {
        applicationStart: 'March 2025',
        applicationEnd: 'April 2025',
        admitCardRelease: 'May 2025',
        examDate: 'June 2025',
        resultDate: 'July 2025',
        counselingStart: 'August 2025'
      },
      latestUpdates: [
        {
          title: 'AP LAWCET 2025 Registration Opens',
          date: 'March 2025',
          description: 'Online registration for AP LAWCET 2025 has commenced. Students can apply through the official APSCHE website.'
        },
        {
          title: 'AP LAWCET 2025 Exam Pattern',
          date: 'February 2025',
          description: 'APSCHE has announced the exam pattern for AP LAWCET 2025. Check official notification for details.'
        }
      ],
      syllabus: {
        highlights: [
          'General Knowledge & Mental Ability: Current affairs, general awareness, logical reasoning',
          'Current Affairs: National and international events, sports, awards',
          'Law Aptitude: Basic legal concepts, constitutional law, criminal law, civil law'
        ],
        downloadLink: '/downloads/ap-lawcet-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit sche.ap.gov.in/lawcet',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://sche.ap.gov.in/lawcet',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'July 2025',
        howToCheck: [
          'Visit sche.ap.gov.in/lawcet',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2024',
            general: '70-100',
            obc: '65-95',
            sc: '60-90',
            st: '55-85'
          }
        ]
      },
      counseling: {
        schedule: 'August - September 2025',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting'
        ],
        website: 'https://sche.ap.gov.in/lawcet'
      },
      previousPapers: [
        { year: '2024', downloadLink: '/downloads/ap-lawcet-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/ap-lawcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/ap-lawcet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in May 2025',
        downloadProcess: [
          'Visit sche.ap.gov.in/lawcet',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the exam pattern for AP LAWCET?',
          answer: 'AP LAWCET has 120 MCQs: GK & Mental Ability (30), Current Affairs (30), Law Aptitude (60). 90 minutes, no negative marking.'
        },
        {
          question: 'Is there negative marking in AP LAWCET?',
          answer: 'No, there is no negative marking in AP LAWCET. +1 mark for each correct answer.'
        },
        {
          question: 'What is the application fee for AP LAWCET?',
          answer: 'The application fee varies by category. Check the official website for current fees.'
        }
      ],
      reviews: [
        {
          rating: 4,
          comment: 'Good exam for Andhra Pradesh law entrance. Well organized process.',
          user: 'Amit Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding Andhra Pradesh law entrance pattern.',
          user: 'Priya Singh'
        }
      ],
      mockTests: [
        { title: 'AP LAWCET General Knowledge Mock Test', link: '/mock-tests/ap-lawcet-gk' },
        { title: 'AP LAWCET Current Affairs Mock Test', link: '/mock-tests/ap-lawcet-current-affairs' },
        { title: 'AP LAWCET Law Aptitude Mock Test', link: '/mock-tests/ap-lawcet-legal' }
      ],
      studyResources: [
        { title: 'AP LAWCET General Knowledge Guide', type: 'PDF', link: '/resources/ap-lawcet-gk-guide' },
        { title: 'AP LAWCET Current Affairs Guide', type: 'PDF', link: '/resources/ap-lawcet-current-affairs' },
        { title: 'AP LAWCET Law Aptitude Practice Book', type: 'PDF', link: '/resources/ap-lawcet-legal-practice' }
      ]
    },
    'ts-eamcet': {
      id: 'ts-eamcet',
      title: 'TS EAMCET (Telangana State Engineering, Agriculture & Medical Common Entrance Test)',
      code: 'ts-eamcet',
      overview: {
        purpose: 'TS EAMCET stands for the Telangana State Engineering, Agriculture & Medical Common Entrance Test. TS EAMCET, also known as TG EAPCET, is a state-level entrance examination for students seeking admission to undergraduate courses in engineering, agriculture, and medical fields in Telangana, India.',
        eligibility: 'Students who qualified in the TS EAMCET 2025 examination and obtained at least 45% marks in core subjects at the Intermediate level (40% for reserved categories) are eligible to participate in the TG EAPCET counselling process.',
        level: 'State Level',
        states: ['Telangana']
      },
      importantDates: {
        applicationStart: 'March 2025',
        applicationEnd: 'April 2025',
        admitCardRelease: 'May 2025',
        examDate: 'May 2025',
        resultDate: 'June 2025',
        counselingStart: 'July 2025'
      },
      latestUpdates: [
        {
          title: 'TS EAMCET 2025 Internal Sliding Ongoing',
          date: 'September 2025',
          description: 'The Telangana State Council of Higher Education (TSCHE) conducts the TS EAMCET 2025 Internal Sliding. Students who are assigned to a new branch must download the revised allotment order and report to their college within the specified timeline.'
        },
        {
          title: 'TS EAMCET 2025 Seat Intake Details Released',
          date: 'August 2025',
          description: 'There are a total of 116,877 seats for TS EAMCET. 9,433 seats were increased from the previous year. The increased TG EAPCET seats primarily focus on Computer Science and other allied engineering programs.'
        }
      ],
      syllabus: {
        highlights: [
          'Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics',
          'Chemistry: Physical, Inorganic, Organic Chemistry',
          'Mathematics: Algebra, Calculus, Trigonometry, Coordinate Geometry',
          'Biology: Diversity, Cell Structure, Plant Physiology, Human Physiology, Genetics, Evolution, Ecology'
        ],
        downloadLink: '/downloads/ts-eamcet-syllabus-2025.pdf'
      },
      applicationProcess: {
        steps: [
          'Visit tgeapcetd.nic.in',
          'Register with personal details',
          'Fill application form',
          'Upload documents and photos',
          'Pay application fee',
          'Submit and take printout'
        ],
        directApplyLink: 'https://tgeapcetd.nic.in',
        instructions: 'Ensure all documents are ready before starting the application process.'
      },
      results: {
        date: 'June 2025',
        howToCheck: [
          'Visit tgeapcetd.nic.in',
          'Click on Results link',
          'Enter application number and date of birth',
          'View and download scorecard'
        ],
        cutoffs: [
          {
            year: '2025',
            general: '100+ marks (Engineering), 90+ marks (Agriculture)',
            obc: '95+ marks (Engineering), 85+ marks (Agriculture)',
            sc: '90+ marks (Engineering), 80+ marks (Agriculture)',
            st: '85+ marks (Engineering), 75+ marks (Agriculture)'
          }
        ]
      },
      counseling: {
        schedule: 'July - September 2025 (3 rounds + spot admissions)',
        process: [
          'Online registration for counseling',
          'Choice filling and locking',
          'Seat allotment',
          'Document verification and reporting',
          'Internal sliding process'
        ],
        website: 'https://tgeapcetd.nic.in'
      },
      previousPapers: [
        { year: '2025', downloadLink: '/downloads/ts-eamcet-2025-paper.pdf' },
        { year: '2024', downloadLink: '/downloads/ts-eamcet-2024-paper.pdf' },
        { year: '2023', downloadLink: '/downloads/ts-eamcet-2023-paper.pdf' },
        { year: '2022', downloadLink: '/downloads/ts-eamcet-2022-paper.pdf' }
      ],
      admitCard: {
        releaseStatus: 'Available in May 2025',
        downloadProcess: [
          'Visit tgeapcetd.nic.in',
          'Login with credentials',
          'Download admit card',
          'Take printout for exam day'
        ]
      },
      faqs: [
        {
          question: 'What is the total number of seats available in TS EAMCET 2025?',
          answer: 'There are a total of 116,877 seats for TS EAMCET 2025, with 9,433 seats increased from the previous year.'
        },
        {
          question: 'How many rounds of counseling are there in TS EAMCET?',
          answer: 'There are 3 rounds of counseling followed by spot admissions. Internal sliding is also available.'
        },
        {
          question: 'What is the reservation criteria for TS EAMCET?',
          answer: 'TS EAMCET provides 15% seats for unreserved category and 85% seats for Telangana local candidates. Additional reservations: SC (6%), ST (15%), OBC (25%), PWD (3%), Defence (2%), Female (33%), Sports (0.5%), NCC (1%), EWS (10%).'
        },
        {
          question: 'What is considered a good score in TS EAMCET?',
          answer: 'For Engineering stream: 100+ marks are considered good. For Agriculture and Pharmacy: 90+ is considered good. Candidates can achieve a rank between 10,000-20,000 with these scores.'
        }
      ],
      reviews: [
        {
          rating: 5,
          comment: 'Excellent exam for Telangana engineering entrance. Well organized process with good seat availability.',
          user: 'Rajesh Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding Telangana engineering entrance pattern. Good counseling process.',
          user: 'Priya Sharma'
        }
      ],
      mockTests: [
        { title: 'TS EAMCET Physics Mock Test', link: '/mock-tests/ts-eamcet-physics' },
        { title: 'TS EAMCET Chemistry Mock Test', link: '/mock-tests/ts-eamcet-chemistry' },
        { title: 'TS EAMCET Mathematics Mock Test', link: '/mock-tests/ts-eamcet-mathematics' }
      ],
      studyResources: [
        { title: 'TS EAMCET Physics Study Guide', type: 'PDF', link: '/resources/ts-eamcet-physics-guide' },
        { title: 'TS EAMCET Chemistry Formula Sheet', type: 'PDF', link: '/resources/ts-eamcet-chemistry-formulas' },
        { title: 'TS EAMCET Mathematics Practice Book', type: 'PDF', link: '/resources/ts-eamcet-mathematics-practice' }
      ]
    },
    'eamcet': {
      id: 'eamcet',
      title: 'EAMCET (Engineering, Agriculture & Medical Common Entrance Test)',
      code: 'eamcet',
      overview: {
        purpose: 'EAMCET (now TG EAPCET) is a state-level entrance exam conducted by JNTU Hyderabad for TSCHE, admitting candidates to engineering, agriculture, and medical (UG) courses in Telangana and Andhra Pradesh.',
        eligibility: '10+2 (or equivalent) with PCM/PCB. 45% for general, 40% for reserved category. Minimum age: 17 years. No upper age limit; Telangana/Andhra candidates must meet local/non-local requirements.',
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
          question: 'How many times can I attempt EAMCET?',
          answer: 'There is no limit on the number of attempts for EAMCET. You can appear as many times as you want.'
        },
        {
          question: 'What is the exam pattern for EAMCET?',
          answer: 'EAMCET consists of 160 multiple choice questions with 3 hours duration. There is no negative marking.'
        }
      ],
      reviews: [
        {
          rating: 5,
          comment: 'Great exam preparation platform with excellent study materials.',
          user: 'Rahul Kumar'
        },
        {
          rating: 4,
          comment: 'Helpful for understanding exam pattern and previous year questions.',
          user: 'Priya Sharma'
        }
      ],
      mockTests: [
        { title: 'EAMCET Physics Mock Test', link: '/mock-tests/eamcet-physics' },
        { title: 'EAMCET Chemistry Mock Test', link: '/mock-tests/eamcet-chemistry' },
        { title: 'EAMCET Mathematics Mock Test', link: '/mock-tests/eamcet-mathematics' }
      ],
      studyResources: [
        { title: 'EAMCET Physics Study Guide', type: 'PDF', link: '/resources/physics-guide' },
        { title: 'EAMCET Chemistry Formula Sheet', type: 'PDF', link: '/resources/chemistry-formulas' },
        { title: 'EAMCET Mathematics Practice Book', type: 'PDF', link: '/resources/mathematics-practice' }
      ]
    }
  };

  useEffect(() => {
    if (examCode && examDetails[examCode]) {
      setExamDetail(examDetails[examCode]);
    }
  }, [examCode]);

  if (!isOpen || !examDetail) return null;

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

        {/* Content - Vertical Layout */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="space-y-8">
            {/* Introduction Section */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Introduction</h3>
              <p className="text-gray-700 mb-4">{examDetail.overview.purpose}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p><span className="font-medium">Frequency:</span> Annually</p>
                  <p><span className="font-medium">Languages:</span> English, Telugu, Urdu (select centers)</p>
                  <p><span className="font-medium">Application Fees:</span> ₹900 (Gen); ₹500 (SC/ST/PH) per stream</p>
                  <p><span className="font-medium">Duration:</span> 3 hours (CBT)</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium">Mode of Application:</span> Online</p>
                  <p><span className="font-medium">Participating Colleges:</span> 350+ (engineering, pharmacy, agri, allied sciences)</p>
                  <p><span className="font-medium">Streams:</span> Engineering, Agriculture/Pharmacy</p>
                  <p><span className="font-medium">Conducting Body:</span> JNTU Hyderabad for TSCHE</p>
                </div>
              </div>
            </div>

            {/* Eligibility and Application Procedure */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Eligibility and Application Procedure</h3>
              <div className="space-y-3 text-gray-700">
                <p>• 10+2 (or equivalent) with PCM/PCB</p>
                <p>• 45% for general, 40% for reserved category</p>
                <p>• Minimum age: 17 years</p>
                <p>• No upper age limit; Telangana/Andhra candidates must meet local/non-local requirements</p>
                <p>• Fill online form, upload docs, pay fees; only online mode available</p>
              </div>
            </div>

            {/* Important Dates */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Important Dates</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Application: March/April (expected)</p>
                <p>• Exam Dates: Engineering May 2–5, Agriculture/Pharmacy April 29–30</p>
                <p>• Admit Card release: April</p>
                <p>• Results: End of May</p>
                <p>• 3 rounds of counseling + spot admissions</p>
              </div>
            </div>

            {/* Documents Required */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Documents Required</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Hall ticket, rank card</p>
                <p>• Aadhaar, SSC, Inter marksheets</p>
                <p>• Category, income and residence certificates</p>
                <p>• Passport-size photos</p>
              </div>
            </div>

            {/* Exam Pattern */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Exam Pattern</h3>
              <div className="space-y-3 text-gray-700">
                <p>• 3 hours, 160 MCQs</p>
                <div className="ml-4 space-y-1">
                  <p>- Mathematics/Biology: 80</p>
                  <p>- Physics: 40</p>
                  <p>- Chemistry: 40</p>
                </div>
                <p>• +1 mark per correct answer, no negative marking</p>
                <p>• Language: English, Telugu, Urdu</p>
              </div>
            </div>

            {/* Syllabus */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Syllabus</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Based on 11th/12th TS Inter Board curriculum</p>
                <p>• Maths weightage: Algebra, Calculus highest</p>
                <p>• Physics: Thermodynamics, Mechanics</p>
                <p>• Chemistry: Structure, p-block, organic, chemical bonding</p>
                <p>• Biology (BiPC): Botany/Zoology</p>
              </div>
            </div>

            {/* Exam Centres */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Exam Centres</h3>
              <div className="space-y-3 text-gray-700">
                <p>• 100+ centres, major cities: Hyderabad, Warangal, Nizamabad, Karimnagar, Mahbubnagar, Khammam</p>
                <p>• Complete official list published each year</p>
              </div>
            </div>

            {/* Cutoffs & Counselling Procedure */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Cutoffs & Counselling Procedure</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Qualifying: 40/160 (Gen/OBC); no minimum for SC/ST</p>
                <p>• Seat reservation: 85% Telangana local, 15% unreserved</p>
                <p>• Seat allotment: 3 rounds + spot, online document verification and branch change</p>
              </div>
            </div>

            {/* Slot Booking, Admit Card & Results */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Slot Booking, Admit Card & Results</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Slot booking required for CBT</p>
                <p>• Admit card downloadable from eapcet.tsche.ac.in</p>
                <p>• Results and rank card online; check predicted colleges with rank predictor tool</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">Contact Details</h3>
              <div className="space-y-2 text-gray-700">
                <p>• TSCHE/JNTUH Helpdesk: Refer to eapcet.tsche.ac.in</p>
                <p>• Email/phone available on official portal</p>
              </div>
            </div>

            {/* FAQs */}
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-[#262443] mb-4">FAQs</h3>
              <div className="space-y-3 text-gray-700">
                <p>• <span className="font-medium">Age limit?</span> Min 17</p>
                <p>• <span className="font-medium">Attempts?</span> No formal cap</p>
                <p>• <span className="font-medium">Negative marking?</span> No</p>
                <p>• <span className="font-medium">Local/non-local definitions for seats</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamDetailModal;
