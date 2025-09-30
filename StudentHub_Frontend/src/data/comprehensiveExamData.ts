export interface ComprehensiveExamData {
  id: string;
  title: string;
  code: string;
  category: 'Engineering' | 'Medical' | 'Law' | 'Design' | 'Architecture' | 'Science' | 'Agriculture' | 'Management' | 'General';
  level: 'National' | 'State' | 'University' | 'International';
  conductingAuthority: string;
  frequency: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  eligibility: string;
  applicationWebsite: string;
  syllabus: string[];
  examPattern: {
    duration: string;
    questions: number;
    marking: string;
    subjects: string[];
  };
  importantDates: {
    applicationStart: string;
    applicationEnd: string;
    admitCardRelease: string;
    examDate: string;
    resultDate: string;
    counselingStart: string;
  };
  participatingColleges: string[];
  counseling: {
    authority: string;
    website: string;
    process: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  resources: {
    syllabusLink: string;
    previousPapers: string;
    mockTests: string;
    applicationLink: string;
  };
  description: string;
  states: string[];
}

export const comprehensiveExamData: ComprehensiveExamData[] = [
  {
    id: 'jee-main',
    title: 'JEE Main',
    code: 'jee-main',
    category: 'Engineering',
    level: 'National',
    conductingAuthority: 'National Testing Agency',
    frequency: 'Twice a year',
    mode: 'Online',
    eligibility: '10+2 PCM, no age limit',
    applicationWebsite: 'jeemain.nta.nic.in',
    syllabus: ['Physics (Class 11 & 12)', 'Chemistry (Class 11 & 12)', 'Mathematics (Class 11 & 12)'],
    examPattern: {
      duration: '3 hours',
      questions: 90,
      marking: 'Negative marking',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    importantDates: {
      applicationStart: 'November 2024',
      applicationEnd: 'December 2024',
      admitCardRelease: 'Before each session',
      examDate: 'January 2025, April 2025',
      resultDate: 'Released after each attempt',
      counselingStart: 'June 2025'
    },
    participatingColleges: ['NITs', 'IIITs', 'GFTIs', 'Private and State Colleges'],
    counseling: {
      authority: 'JoSAA',
      website: 'josaa.nic.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'How many attempts are allowed for JEE Main?',
        answer: 'There is no limit on the number of attempts for JEE Main. Students can appear for the exam as many times as they want.'
      },
      {
        question: 'What is the minimum percentage required for NITs/IIITs?',
        answer: 'For NITs and IIITs, candidates need to secure at least 75% marks in 12th class or be in the top 20 percentile of their respective boards.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/jee-main-syllabus-2025.pdf',
      previousPapers: '/downloads/jee-main-previous-papers',
      mockTests: '/mock-tests/jee-main',
      applicationLink: 'https://jeemain.nta.nic.in'
    },
    description: 'National-level entrance for B.E./B.Tech, B.Arch, B.Planning at government and private institutes.',
    states: ['All India']
  },
  {
    id: 'jee-advanced',
    title: 'JEE Advanced',
    code: 'jee-advanced',
    category: 'Engineering',
    level: 'National',
    conductingAuthority: 'IITs (rotation)',
    frequency: 'Once a year',
    mode: 'Online',
    eligibility: 'Top 2.5 lakh JEE Main rankers; 10+2 PCM',
    applicationWebsite: 'jeeadv.ac.in',
    syllabus: ['Reduced/class 11 & 12 PCM'],
    examPattern: {
      duration: '3 hours each paper',
      questions: 0,
      marking: 'Variable marking scheme',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    importantDates: {
      applicationStart: 'May 2025',
      applicationEnd: 'May 2025',
      admitCardRelease: 'Before exam',
      examDate: 'June 2025',
      resultDate: 'June 2025',
      counselingStart: 'July 2025'
    },
    participatingColleges: ['23 IITs'],
    counseling: {
      authority: 'JoSAA',
      website: 'josaa.nic.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is the minimum rank required for JEE Advanced?',
        answer: 'Candidates need to be in the top 2.5 lakh rankers of JEE Main to be eligible for JEE Advanced.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/jee-advanced-syllabus-2025.pdf',
      previousPapers: '/downloads/jee-advanced-previous-papers',
      mockTests: '/mock-tests/jee-advanced',
      applicationLink: 'https://jeeadv.ac.in'
    },
    description: 'IIT Joint admission for top JEE Main qualifiers.',
    states: ['All India']
  },
  {
    id: 'neet-ug',
    title: 'NEET UG',
    code: 'neet-ug',
    category: 'Medical',
    level: 'National',
    conductingAuthority: 'National Testing Agency',
    frequency: 'Once a year',
    mode: 'Offline',
    eligibility: '10+2 PCB, min. 50%/40% (Gen/Reserved); min age 17',
    applicationWebsite: 'neet.nta.nic.in',
    syllabus: ['Class 11 & 12 Physics', 'Class 11 & 12 Chemistry', 'Class 11 & 12 Biology'],
    examPattern: {
      duration: '3 hours 20 minutes',
      questions: 200,
      marking: '4 marks for correct, -1 for incorrect',
      subjects: ['Physics', 'Chemistry', 'Biology']
    },
    importantDates: {
      applicationStart: 'January 2025',
      applicationEnd: 'February 2025',
      admitCardRelease: 'Before exam',
      examDate: 'May 2025',
      resultDate: 'June 2025',
      counselingStart: 'July 2025'
    },
    participatingColleges: ['AIIMS', 'JIPMER', 'All Medical Colleges', 'Dental Colleges'],
    counseling: {
      authority: 'MCC (All India), State-level',
      website: 'mcc.nic.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is the age limit for NEET?',
        answer: 'The minimum age is 17 years and maximum age is 25 years (30 years for reserved categories) as on December 31 of the year of admission.'
      },
      {
        question: 'Can I apply for NEET if I have appeared for improvement exam?',
        answer: 'Yes, you can apply for NEET even if you have appeared for improvement exam, provided you meet the eligibility criteria.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/neet-syllabus-2025.pdf',
      previousPapers: '/downloads/neet-previous-papers',
      mockTests: '/mock-tests/neet',
      applicationLink: 'https://neet.nta.nic.in'
    },
    description: 'National-level medical entrance for MBBS, BDS, BAMS, BHMS, B.Sc Nursing.',
    states: ['All India']
  },
  {
    id: 'viteee',
    title: 'VITEEE',
    code: 'viteee',
    category: 'Engineering',
    level: 'National',
    conductingAuthority: 'Vellore Institute of Technology',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 PCM, 60% marks',
    applicationWebsite: 'vit.ac.in',
    syllabus: ['Physics', 'Chemistry', 'Mathematics', 'English'],
    examPattern: {
      duration: '2.5 hours',
      questions: 125,
      marking: 'No negative marking',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English']
    },
    importantDates: {
      applicationStart: 'November 2024',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'April 2025',
      resultDate: 'May 2025',
      counselingStart: 'June 2025'
    },
    participatingColleges: ['VIT Vellore', 'VIT Chennai', 'VIT Bhopal', 'VIT AP'],
    counseling: {
      authority: 'VIT',
      website: 'vit.ac.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is the minimum percentage required for VITEEE?',
        answer: 'Candidates need to secure at least 60% marks in Physics, Chemistry, and Mathematics/Biology in 12th class.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/viteee-syllabus-2025.pdf',
      previousPapers: '/downloads/viteee-previous-papers',
      mockTests: '/mock-tests/viteee',
      applicationLink: 'https://vit.ac.in'
    },
    description: 'Engineering admission to VIT campuses.',
    states: ['All India']
  },
  {
    id: 'bitsat',
    title: 'BITSAT',
    code: 'bitsat',
    category: 'Engineering',
    level: 'National',
    conductingAuthority: 'BITS Pilani',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 PCM, 75% marks',
    applicationWebsite: 'bitsadmission.com',
    syllabus: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Logical Reasoning'],
    examPattern: {
      duration: '3 hours',
      questions: 130,
      marking: 'No negative marking',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Logical Reasoning']
    },
    importantDates: {
      applicationStart: 'January 2025',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'May 2025',
      resultDate: 'June 2025',
      counselingStart: 'July 2025'
    },
    participatingColleges: ['BITS Pilani', 'BITS Goa', 'BITS Hyderabad'],
    counseling: {
      authority: 'BITS',
      website: 'bitsadmission.com',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is the minimum percentage required for BITSAT?',
        answer: 'Candidates need to secure at least 75% marks in Physics, Chemistry, and Mathematics in 12th class.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/bitsat-syllabus-2025.pdf',
      previousPapers: '/downloads/bitsat-previous-papers',
      mockTests: '/mock-tests/bitsat',
      applicationLink: 'https://bitsadmission.com'
    },
    description: 'Admission to BITS campuses (Pilani, Goa, Hyderabad).',
    states: ['All India']
  },
  {
    id: 'clat-ug',
    title: 'CLAT UG',
    code: 'clat-ug',
    category: 'Law',
    level: 'National',
    conductingAuthority: 'Consortium of NLUs',
    frequency: 'Annual',
    mode: 'Offline',
    eligibility: '10+2 in any stream',
    applicationWebsite: 'consortiumofnlus.ac.in',
    syllabus: ['English Language', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques'],
    examPattern: {
      duration: '2 hours',
      questions: 120,
      marking: '1 mark for correct, -0.25 for incorrect',
      subjects: ['English', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques']
    },
    importantDates: {
      applicationStart: 'January 2025',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'May 2025',
      resultDate: 'June 2025',
      counselingStart: 'July 2025'
    },
    participatingColleges: ['22 NLUs'],
    counseling: {
      authority: 'Consortium of NLUs',
      website: 'consortiumofnlus.ac.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is the age limit for CLAT?',
        answer: 'There is no upper age limit for CLAT. Candidates who have completed 10+2 or equivalent are eligible.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/clat-syllabus-2025.pdf',
      previousPapers: '/downloads/clat-previous-papers',
      mockTests: '/mock-tests/clat',
      applicationLink: 'https://consortiumofnlus.ac.in'
    },
    description: 'National Law Universities entrance exam.',
    states: ['All India']
  },
  {
    id: 'ailet-ug',
    title: 'AILET UG',
    code: 'ailet-ug',
    category: 'Law',
    level: 'National',
    conductingAuthority: 'NLU Delhi',
    frequency: 'Annual',
    mode: 'Offline',
    eligibility: '10+2 in any stream',
    applicationWebsite: 'nludelhi.ac.in',
    syllabus: ['English Language', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques'],
    examPattern: {
      duration: '2 hours',
      questions: 100,
      marking: '1 mark for correct, -0.25 for incorrect',
      subjects: ['English', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques']
    },
    importantDates: {
      applicationStart: 'January 2025',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'May 2025',
      resultDate: 'June 2025',
      counselingStart: 'July 2025'
    },
    participatingColleges: ['NLU Delhi'],
    counseling: {
      authority: 'NLU Delhi',
      website: 'nludelhi.ac.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is the difference between CLAT and AILET?',
        answer: 'CLAT is for admission to 22 NLUs while AILET is specifically for NLU Delhi. Both have similar patterns but AILET is conducted separately.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/ailet-syllabus-2025.pdf',
      previousPapers: '/downloads/ailet-previous-papers',
      mockTests: '/mock-tests/ailet',
      applicationLink: 'https://nludelhi.ac.in'
    },
    description: 'NLU Delhi entrance exam.',
    states: ['All India']
  },
  {
    id: 'nata',
    title: 'NATA',
    code: 'nata',
    category: 'Architecture',
    level: 'National',
    conductingAuthority: 'Council of Architecture',
    frequency: 'Twice a year',
    mode: 'Online',
    eligibility: '10+2 with Mathematics',
    applicationWebsite: 'nata.in',
    syllabus: ['Mathematics', 'General Aptitude', 'Drawing Test'],
    examPattern: {
      duration: '3 hours',
      questions: 0,
      marking: 'Variable marking',
      subjects: ['Mathematics', 'General Aptitude', 'Drawing Test']
    },
    importantDates: {
      applicationStart: 'January 2025',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'April 2025',
      resultDate: 'May 2025',
      counselingStart: 'June 2025'
    },
    participatingColleges: ['All Architecture Colleges'],
    counseling: {
      authority: 'Individual Colleges',
      website: 'nata.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is the validity of NATA score?',
        answer: 'NATA score is valid for one year from the date of declaration of result.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/nata-syllabus-2025.pdf',
      previousPapers: '/downloads/nata-previous-papers',
      mockTests: '/mock-tests/nata',
      applicationLink: 'https://nata.in'
    },
    description: 'National Aptitude Test in Architecture.',
    states: ['All India']
  },
  {
    id: 'icar-aieea-ug',
    title: 'ICAR AIEEA UG',
    code: 'icar-aieea-ug',
    category: 'Agriculture',
    level: 'National',
    conductingAuthority: 'ICAR',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 with Agriculture/PCB/PCM as applicable',
    applicationWebsite: 'icar.org.in',
    syllabus: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Agriculture'],
    examPattern: {
      duration: '2.5 hours',
      questions: 120,
      marking: '4 marks for correct, -1 for incorrect',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Agriculture']
    },
    importantDates: {
      applicationStart: 'March 2025',
      applicationEnd: 'April 2025',
      admitCardRelease: 'Before exam',
      examDate: 'May 2025',
      resultDate: 'June 2025',
      counselingStart: 'July 2025'
    },
    participatingColleges: ['Central Agricultural Universities'],
    counseling: {
      authority: 'ICAR',
      website: 'icar.org.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What courses are available through ICAR AIEEA?',
        answer: 'ICAR AIEEA offers admission to various agriculture, veterinary, and allied science courses at central agricultural universities.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/icar-syllabus-2025.pdf',
      previousPapers: '/downloads/icar-previous-papers',
      mockTests: '/mock-tests/icar',
      applicationLink: 'https://icar.org.in'
    },
    description: 'Central agricultural universities admissions.',
    states: ['All India']
  },
  {
    id: 'cuet-ug',
    title: 'CUET UG',
    code: 'cuet-ug',
    category: 'General',
    level: 'National',
    conductingAuthority: 'National Testing Agency',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 in any stream',
    applicationWebsite: 'cuet.samarth.ac.in',
    syllabus: ['Language', 'Domain Subjects', 'General Test'],
    examPattern: {
      duration: 'Variable',
      questions: 0,
      marking: 'Variable marking',
      subjects: ['Language', 'Domain Subjects', 'General Test']
    },
    importantDates: {
      applicationStart: 'February 2025',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'May 2025',
      resultDate: 'June 2025',
      counselingStart: 'July 2025'
    },
    participatingColleges: ['Central Universities'],
    counseling: {
      authority: 'Individual Universities',
      website: 'cuet.samarth.ac.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is CUET?',
        answer: 'CUET (Common University Entrance Test) is conducted for admission to various undergraduate and postgraduate courses in central universities.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/cuet-syllabus-2025.pdf',
      previousPapers: '/downloads/cuet-previous-papers',
      mockTests: '/mock-tests/cuet',
      applicationLink: 'https://cuet.samarth.ac.in'
    },
    description: 'Central University Entrance Tests for a broad range of subjects.',
    states: ['All India']
  },
  {
    id: 'ts-eamcet',
    title: 'TS EAMCET 2025 (TS EAPCET)',
    code: 'ts-eamcet',
    category: 'Engineering',
    level: 'State',
    conductingAuthority: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH) on behalf of TSCHE',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 with PCM or PCB; Minimum age 17; Aggregate: 45% (Gen), 40% (Reserved)',
    applicationWebsite: 'eamcet.tsche.ac.in / eapcet.tgche.ac.in',
    syllabus: [
      'Mathematics: Algebra, Trigonometry, Calculus, Coordinate Geometry, Probability, Vectors',
      'Physics: Mechanics, Thermodynamics, Optics, Electromagnetics, Modern Physics, Laws of Motion, Electricity, Magnetism',
      'Chemistry: Physical, Organic, Inorganic Chemistry, Environmental Chemistry, Atomic Structure, Chemical Bonding',
      'Biology (Botany/Zoology): Cell Biology, Genetics, Physiology, Ecology, Microbiology, Human Biology'
    ],
    examPattern: {
      duration: '3 hours (180 minutes)',
      questions: 160,
      marking: '+1 for correct response, no negative marking',
      subjects: ['Mathematics/Biology (80)', 'Physics (40)', 'Chemistry (40)']
    },
    importantDates: {
      applicationStart: 'March 1, 2025',
      applicationEnd: 'April 4, 2025 (without late fee)',
      admitCardRelease: 'April 19, 2025 (A&P); April 22, 2025 (Engineering)',
      examDate: 'April 29-30, 2025 (A&P); May 2-5, 2025 (Engineering)',
      resultDate: 'May 11, 2025 (11 AM onward)',
      counselingStart: 'June 28, 2025'
    },
    participatingColleges: ['Over 320 university and private colleges across Telangana'],
    counseling: {
      authority: 'TSCHE',
      website: 'tgeapcet.nic.in',
      process: [
        'Online Registration (June 28-July 7)',
        'Document Verification (July 1-8)',
        'Choice Filling/Option Entry (July 6-10)',
        'Mock Allotment Result (July 12-15)',
        'First Seat Allotment & Payment (July 18-22)',
        'Second Phase Counseling (July 25 onwards)',
        'Final Phase: Internal Sliding/Spot Admission (Early-Late August)',
        'Physical Reporting to College (By August 23)'
      ]
    },
    faqs: [
      {
        question: 'What is TS EAMCET?',
        answer: 'TS EAMCET (Telangana State Engineering, Agriculture & Medical Common Entrance Test), now officially rebranded as TS EAPCET (Telangana State Engineering, Agriculture & Pharmacy Common Entrance Test), is the gateway for undergraduate admission to engineering, agriculture, pharmacy, and related programs in Telangana. Conducted annually by JNTUH on behalf of TSCHE, this CBT exam is one of the largest state-level entrance tests in India.'
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
      },
      {
        question: 'What is the marks vs rank analysis?',
        answer: '155-160 marks: Ranks 1-50 (CSE/Top branches in best colleges); 150-154: Ranks 51-200 (premium options in other branches); 140-149: Ranks 201-500 (secured seat in good branches); 130-139: Ranks 500-1,000 (best branches possible in private colleges). Cutoff varies by branch, college, and category.'
      },
      {
        question: 'Are local and non-local students eligible?',
        answer: 'Yes, both local and non-local students are eligible, but quotas in colleges differ per reservation policy.'
      },
      {
        question: 'What if my application has errors?',
        answer: 'Use the correction window (April 6-8, 2025) to rectify any errors in your application.'
      },
      {
        question: 'How many exam centers are there?',
        answer: 'The exam is held across 100+ CBT centers in Telangana & Andhra Pradesh.'
      },
      {
        question: 'What is the exam day experience like?',
        answer: 'Admit card and valid photo ID are mandatory for entry. COVID protocols, biometric verification, and safe seating are enforced. Arrive ahead of time and follow all security protocols.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/ts-eamcet-syllabus-2025.pdf',
      previousPapers: '/downloads/ts-eamcet-previous-papers',
      mockTests: '/mock-tests/ts-eamcet',
      applicationLink: 'https://eamcet.tsche.ac.in'
    },
    description: 'TS EAMCET (Telangana State Engineering, Agriculture & Medical Common Entrance Test), now officially rebranded as TS EAPCET (Telangana State Engineering, Agriculture & Pharmacy Common Entrance Test), is the gateway for undergraduate admission to engineering, agriculture, pharmacy, and related programs in Telangana. Conducted annually by JNTUH on behalf of TSCHE, this CBT exam is one of the largest state-level entrance tests in India.',
    states: ['Telangana']
  }
];

// State and Regional Engineering Exams
export const stateEngineeringExams: ComprehensiveExamData[] = [
  {
    id: 'ts-eamcet-state',
    title: 'TS EAMCET 2025 (TS EAPCET)',
    code: 'ts-eamcet',
    category: 'Engineering',
    level: 'State',
    conductingAuthority: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH) on behalf of TSCHE',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 with PCM or PCB; Minimum age 17; Aggregate: 45% (Gen), 40% (Reserved)',
    applicationWebsite: 'eamcet.tsche.ac.in / eapcet.tgche.ac.in',
    syllabus: [
      'Mathematics: Algebra, Trigonometry, Calculus, Coordinate Geometry, Probability, Vectors',
      'Physics: Mechanics, Thermodynamics, Optics, Electromagnetics, Modern Physics, Laws of Motion, Electricity, Magnetism',
      'Chemistry: Physical, Organic, Inorganic Chemistry, Environmental Chemistry, Atomic Structure, Chemical Bonding',
      'Biology (Botany/Zoology): Cell Biology, Genetics, Physiology, Ecology, Microbiology, Human Biology'
    ],
    examPattern: {
      duration: '3 hours (180 minutes)',
      questions: 160,
      marking: '+1 for correct response, no negative marking',
      subjects: ['Mathematics/Biology (80)', 'Physics (40)', 'Chemistry (40)']
    },
    importantDates: {
      applicationStart: 'March 1, 2025',
      applicationEnd: 'April 4, 2025 (without late fee)',
      admitCardRelease: 'April 19, 2025 (A&P); April 22, 2025 (Engineering)',
      examDate: 'April 29-30, 2025 (A&P); May 2-5, 2025 (Engineering)',
      resultDate: 'May 11, 2025 (11 AM onward)',
      counselingStart: 'June 28, 2025'
    },
    participatingColleges: ['Over 320 university and private colleges across Telangana'],
    counseling: {
      authority: 'TSCHE',
      website: 'tgeapcet.nic.in',
      process: [
        'Online Registration (June 28-July 7)',
        'Document Verification (July 1-8)',
        'Choice Filling/Option Entry (July 6-10)',
        'Mock Allotment Result (July 12-15)',
        'First Seat Allotment & Payment (July 18-22)',
        'Second Phase Counseling (July 25 onwards)',
        'Final Phase: Internal Sliding/Spot Admission (Early-Late August)',
        'Physical Reporting to College (By August 23)'
      ]
    },
    faqs: [
      {
        question: 'What is TS EAMCET?',
        answer: 'TS EAMCET (Telangana State Engineering, Agriculture & Medical Common Entrance Test), now officially rebranded as TS EAPCET (Telangana State Engineering, Agriculture & Pharmacy Common Entrance Test), is the gateway for undergraduate admission to engineering, agriculture, pharmacy, and related programs in Telangana. Conducted annually by JNTUH on behalf of TSCHE, this CBT exam is one of the largest state-level entrance tests in India.'
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
      },
      {
        question: 'What is the marks vs rank analysis?',
        answer: '155-160 marks: Ranks 1-50 (CSE/Top branches in best colleges); 150-154: Ranks 51-200 (premium options in other branches); 140-149: Ranks 201-500 (secured seat in good branches); 130-139: Ranks 500-1,000 (best branches possible in private colleges). Cutoff varies by branch, college, and category.'
      },
      {
        question: 'Are local and non-local students eligible?',
        answer: 'Yes, both local and non-local students are eligible, but quotas in colleges differ per reservation policy.'
      },
      {
        question: 'What if my application has errors?',
        answer: 'Use the correction window (April 6-8, 2025) to rectify any errors in your application.'
      },
      {
        question: 'How many exam centers are there?',
        answer: 'The exam is held across 100+ CBT centers in Telangana & Andhra Pradesh.'
      },
      {
        question: 'What is the exam day experience like?',
        answer: 'Admit card and valid photo ID are mandatory for entry. COVID protocols, biometric verification, and safe seating are enforced. Arrive ahead of time and follow all security protocols.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/ts-eamcet-syllabus-2025.pdf',
      previousPapers: '/downloads/ts-eamcet-previous-papers',
      mockTests: '/mock-tests/ts-eamcet',
      applicationLink: 'https://eamcet.tsche.ac.in'
    },
    description: 'TS EAMCET (Telangana State Engineering, Agriculture & Medical Common Entrance Test), now officially rebranded as TS EAPCET (Telangana State Engineering, Agriculture & Pharmacy Common Entrance Test), is the gateway for undergraduate admission to engineering, agriculture, pharmacy, and related programs in Telangana. Conducted annually by JNTUH on behalf of TSCHE, this CBT exam is one of the largest state-level entrance tests in India.',
    states: ['Telangana']
  },
  {
    id: 'kcet',
    title: 'KCET',
    code: 'kcet',
    category: 'Engineering',
    level: 'State',
    conductingAuthority: 'Karnataka Examination Authority',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 PCM',
    applicationWebsite: 'kea.kar.nic.in',
    syllabus: ['Physics', 'Chemistry', 'Mathematics'],
    examPattern: {
      duration: '1.5 hours each',
      questions: 60,
      marking: '1 mark for correct, no negative marking',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    importantDates: {
      applicationStart: 'February 2025',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'April 2025',
      resultDate: 'May 2025',
      counselingStart: 'June 2025'
    },
    participatingColleges: ['Karnataka Government and Private Colleges'],
    counseling: {
      authority: 'Karnataka Examination Authority',
      website: 'kea.kar.nic.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is KCET?',
        answer: 'KCET (Karnataka Common Entrance Test) is conducted for admission to engineering, medical, and other professional courses in Karnataka.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/kcet-syllabus-2025.pdf',
      previousPapers: '/downloads/kcet-previous-papers',
      mockTests: '/mock-tests/kcet',
      applicationLink: 'https://kea.kar.nic.in'
    },
    description: 'Karnataka engineering entrance exam.',
    states: ['Karnataka']
  },
  {
    id: 'wbjee',
    title: 'WBJEE',
    code: 'wbjee',
    category: 'Engineering',
    level: 'State',
    conductingAuthority: 'West Bengal Joint Entrance Examinations Board',
    frequency: 'Annual',
    mode: 'Offline',
    eligibility: '10+2 PCM',
    applicationWebsite: 'wbjeeb.nic.in',
    syllabus: ['Physics', 'Chemistry', 'Mathematics'],
    examPattern: {
      duration: '2 hours each',
      questions: 0,
      marking: 'Variable marking',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    importantDates: {
      applicationStart: 'December 2024',
      applicationEnd: 'January 2025',
      admitCardRelease: 'Before exam',
      examDate: 'April 2025',
      resultDate: 'May 2025',
      counselingStart: 'June 2025'
    },
    participatingColleges: ['West Bengal Government and Private Colleges'],
    counseling: {
      authority: 'West Bengal Joint Entrance Examinations Board',
      website: 'wbjeeb.nic.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is WBJEE?',
        answer: 'WBJEE (West Bengal Joint Entrance Examination) is conducted for admission to engineering, medical, and other professional courses in West Bengal.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/wbjee-syllabus-2025.pdf',
      previousPapers: '/downloads/wbjee-previous-papers',
      mockTests: '/mock-tests/wbjee',
      applicationLink: 'https://wbjeeb.nic.in'
    },
    description: 'West Bengal engineering entrance exam.',
    states: ['West Bengal']
  },
  {
    id: 'keam',
    title: 'KEAM',
    code: 'keam',
    category: 'Engineering',
    level: 'State',
    conductingAuthority: 'Commissioner for Entrance Examinations, Kerala',
    frequency: 'Annual',
    mode: 'Offline',
    eligibility: '10+2 PCM',
    applicationWebsite: 'cee.kerala.gov.in',
    syllabus: ['Physics', 'Chemistry', 'Mathematics'],
    examPattern: {
      duration: '2.5 hours each',
      questions: 120,
      marking: '4 marks for correct, -1 for incorrect',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    importantDates: {
      applicationStart: 'January 2025',
      applicationEnd: 'February 2025',
      admitCardRelease: 'Before exam',
      examDate: 'April 2025',
      resultDate: 'May 2025',
      counselingStart: 'June 2025'
    },
    participatingColleges: ['Kerala Government and Private Colleges'],
    counseling: {
      authority: 'Commissioner for Entrance Examinations, Kerala',
      website: 'cee.kerala.gov.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is KEAM?',
        answer: 'KEAM (Kerala Engineering Architecture Medical) is conducted for admission to engineering, architecture, and medical courses in Kerala.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/keam-syllabus-2025.pdf',
      previousPapers: '/downloads/keam-previous-papers',
      mockTests: '/mock-tests/keam',
      applicationLink: 'https://cee.kerala.gov.in'
    },
    description: 'Kerala engineering entrance exam.',
    states: ['Kerala']
  },
  {
    id: 'mht-cet',
    title: 'MHT CET',
    code: 'mht-cet',
    category: 'Engineering',
    level: 'State',
    conductingAuthority: 'State Common Entrance Test Cell, Maharashtra',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: '10+2 PCM',
    applicationWebsite: 'mhtcet2025.mahacet.org',
    syllabus: ['Physics', 'Chemistry', 'Mathematics'],
    examPattern: {
      duration: '1.5 hours each',
      questions: 50,
      marking: '2 marks for correct, no negative marking',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    importantDates: {
      applicationStart: 'January 2025',
      applicationEnd: 'March 2025',
      admitCardRelease: 'Before exam',
      examDate: 'April 2025',
      resultDate: 'May 2025',
      counselingStart: 'June 2025'
    },
    participatingColleges: ['Maharashtra Government and Private Colleges'],
    counseling: {
      authority: 'State Common Entrance Test Cell, Maharashtra',
      website: 'mhtcet2025.mahacet.org',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is MHT CET?',
        answer: 'MHT CET (Maharashtra Common Entrance Test) is conducted for admission to engineering, pharmacy, and other professional courses in Maharashtra.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/mht-cet-syllabus-2025.pdf',
      previousPapers: '/downloads/mht-cet-previous-papers',
      mockTests: '/mock-tests/mht-cet',
      applicationLink: 'https://mhtcet2025.mahacet.org'
    },
    description: 'Maharashtra engineering entrance exam.',
    states: ['Maharashtra']
  }
];

// Management Exams
export const managementExams: ComprehensiveExamData[] = [
  {
    id: 'cat',
    title: 'CAT',
    code: 'cat',
    category: 'Management',
    level: 'National',
    conductingAuthority: 'IIMs',
    frequency: 'Annual',
    mode: 'Online',
    eligibility: 'Graduation with 50% marks',
    applicationWebsite: 'iimcat.ac.in',
    syllabus: ['Verbal Ability', 'Quantitative Ability', 'Data Interpretation', 'Logical Reasoning'],
    examPattern: {
      duration: '2 hours',
      questions: 66,
      marking: '3 marks for correct, -1 for incorrect',
      subjects: ['Verbal Ability', 'Quantitative Ability', 'Data Interpretation', 'Logical Reasoning']
    },
    importantDates: {
      applicationStart: 'August 2025',
      applicationEnd: 'September 2025',
      admitCardRelease: 'Before exam',
      examDate: 'November 2025',
      resultDate: 'December 2025',
      counselingStart: 'January 2026'
    },
    participatingColleges: ['IIMs', 'Other Management Institutes'],
    counseling: {
      authority: 'Individual Institutes',
      website: 'iimcat.ac.in',
      process: ['Registration', 'Choice Filling', 'Seat Allotment', 'Reporting']
    },
    faqs: [
      {
        question: 'What is CAT?',
        answer: 'CAT (Common Admission Test) is conducted for admission to MBA/PGDM programs at IIMs and other management institutes.'
      }
    ],
    resources: {
      syllabusLink: '/downloads/cat-syllabus-2025.pdf',
      previousPapers: '/downloads/cat-previous-papers',
      mockTests: '/mock-tests/cat',
      applicationLink: 'https://iimcat.ac.in'
    },
    description: 'Common Admission Test for MBA/PGDM programs.',
    states: ['All India']
  }
];

// Combined comprehensive exam data
export const allComprehensiveExamData = [
  ...comprehensiveExamData,
  ...stateEngineeringExams,
  ...managementExams
];
