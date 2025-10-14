import { Exam } from '../types/exam';
import { getDataStatus } from '../utils/dateCalculator';

export const examsData: Exam[] = [
  {
    id: '1',
    name: 'EAMCET',
    fullName: 'Engineering, Agriculture and Medical Common Entrance Test',
    examDate: '2025-05-15',
    applicationStartDate: '2025-02-01',
    applicationEndDate: '2025-03-15',
    resultDate: '2025-06-15',
    category: 'Engineering',
    level: 'State',
    description: 'EAMCET is conducted for admission into Engineering, Agriculture and Medical courses in Telangana and Andhra Pradesh.',
    website: 'https://eamcet.tsche.ac.in',
    eligibility: '10+2 with Physics, Chemistry, Mathematics/Biology',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    isUpcoming: true,
    daysUntil: 45,
    applicationFee: {
      general: 800,
      obc: 800,
      sc: 500,
      st: 500,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2024,
        general: 86.8,
        obc: 83.6,
        sc: 76.5,
        st: 72.1,
        totalMarks: 160
      },
      {
        year: 2023,
        general: 85.5,
        obc: 82.3,
        sc: 75.2,
        st: 70.8,
        totalMarks: 160
      },
      {
        year: 2022,
        general: 87.2,
        obc: 84.1,
        sc: 77.5,
        st: 73.2,
        totalMarks: 160
      },
      {
        year: 2021,
        general: 83.8,
        obc: 80.6,
        sc: 74.1,
        st: 69.5,
        totalMarks: 160
      }
    ],
    dataStatus: getDataStatus('EAMCET')
  },
  {
    id: '2',
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination Main',
    examDate: '2025-04-06',
    applicationStartDate: '2025-01-01',
    applicationEndDate: '2025-02-28',
    resultDate: '2025-04-25',
    category: 'Engineering',
    level: 'National',
    description: 'JEE Main is conducted for admission to NITs, IIITs and other Centrally Funded Technical Institutions.',
    website: 'https://jeemain.nta.ac.in',
    eligibility: '10+2 with Physics, Chemistry, Mathematics',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    isUpcoming: true,
    daysUntil: 25,
    applicationFee: {
      general: 1000,
      obc: 800,
      sc: 500,
      st: 500,
      pwd: 500,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2024,
        general: 92.1,
        obc: 88.8,
        sc: 83.6,
        st: 80.2,
        pwd: 76.8,
        totalMarks: 300
      },
      {
        year: 2023,
        general: 90.8,
        obc: 87.5,
        sc: 82.3,
        st: 78.9,
        pwd: 75.2,
        totalMarks: 300
      },
      {
        year: 2022,
        general: 88.4,
        obc: 85.1,
        sc: 80.2,
        st: 76.8,
        pwd: 73.5,
        totalMarks: 300
      },
      {
        year: 2021,
        general: 87.9,
        obc: 84.6,
        sc: 79.7,
        st: 76.3,
        pwd: 73.0,
        totalMarks: 300
      }
    ],
    dataStatus: getDataStatus('JEE Main')
  },
  {
    id: '3',
    name: 'NEET',
    fullName: 'National Eligibility cum Entrance Test',
    examDate: '2025-05-05',
    applicationStartDate: '2025-02-09',
    applicationEndDate: '2025-03-09',
    resultDate: '2025-06-14',
    category: 'Medical',
    level: 'National',
    description: 'NEET is conducted for admission to MBBS, BDS and other medical courses in India.',
    website: 'https://neet.nta.nic.in',
    eligibility: '10+2 with Physics, Chemistry, Biology',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    isUpcoming: true,
    daysUntil: 35,
    applicationFee: {
      general: 1600,
      obc: 1500,
      sc: 900,
      st: 900,
      pwd: 900,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2024,
        general: 720,
        obc: 715,
        sc: 695,
        st: 690,
        pwd: 685,
        totalMarks: 720
      },
      {
        year: 2023,
        general: 720,
        obc: 715,
        sc: 695,
        st: 690,
        pwd: 685,
        totalMarks: 720
      },
      {
        year: 2022,
        general: 715,
        obc: 710,
        sc: 690,
        st: 685,
        pwd: 680,
        totalMarks: 720
      },
      {
        year: 2021,
        general: 720,
        obc: 715,
        sc: 695,
        st: 690,
        pwd: 685,
        totalMarks: 720
      }
    ],
    dataStatus: getDataStatus('NEET')
  },
  {
    id: '4',
    name: 'CAT',
    fullName: 'Common Admission Test',
    examDate: '2025-11-24',
    applicationStartDate: '2025-08-01',
    applicationEndDate: '2025-09-15',
    resultDate: '2025-12-20',
    category: 'Management',
    level: 'National',
    description: 'CAT is conducted for admission to IIMs and other top management institutes.',
    website: 'https://iimcat.ac.in',
    eligibility: 'Graduation with 50% marks',
    subjects: ['Quantitative Aptitude', 'Verbal Ability', 'Data Interpretation', 'Logical Reasoning'],
    isUpcoming: true,
    daysUntil: 245,
    applicationFee: {
      general: 2400,
      obc: 2400,
      sc: 1200,
      st: 1200,
      pwd: 1200,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2023,
        general: 95.5,
        obc: 92.8,
        sc: 88.5,
        st: 85.2,
        pwd: 82.1,
        totalMarks: 100
      },
      {
        year: 2022,
        general: 94.2,
        obc: 91.5,
        sc: 87.2,
        st: 83.9,
        pwd: 80.8,
        totalMarks: 100
      },
      {
        year: 2021,
        general: 96.1,
        obc: 93.4,
        sc: 89.1,
        st: 85.8,
        pwd: 82.7,
        totalMarks: 100
      }
    ],
    dataStatus: getDataStatus('CAT')
  },
  {
    id: '5',
    name: 'UPSC CSE',
    fullName: 'Union Public Service Commission Civil Services Examination',
    examDate: '2025-05-26',
    applicationStartDate: '2025-02-14',
    applicationEndDate: '2025-03-05',
    resultDate: '2025-08-16',
    category: 'Government',
    level: 'National',
    description: 'UPSC CSE is conducted for recruitment to various civil services of the Government of India.',
    website: 'https://upsc.gov.in',
    eligibility: 'Graduation in any discipline',
    subjects: ['General Studies', 'Optional Subject', 'Essay'],
    isUpcoming: true,
    daysUntil: 46,
    applicationFee: {
      general: 100,
      obc: 100,
      sc: 0,
      st: 0,
      pwd: 0,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2023,
        general: 75.4,
        obc: 72.1,
        sc: 68.5,
        st: 65.2,
        pwd: 62.8,
        totalMarks: 100
      },
      {
        year: 2022,
        general: 78.2,
        obc: 74.9,
        sc: 71.3,
        st: 68.0,
        pwd: 65.6,
        totalMarks: 100
      },
      {
        year: 2021,
        general: 76.8,
        obc: 73.5,
        sc: 69.9,
        st: 66.6,
        pwd: 64.2,
        totalMarks: 100
      }
    ],
    dataStatus: getDataStatus('UPSC CSE')
  },
  {
    id: '6',
    name: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    examDate: '2025-02-02',
    applicationStartDate: '2024-08-30',
    applicationEndDate: '2024-10-12',
    resultDate: '2025-03-16',
    category: 'Engineering',
    level: 'National',
    description: 'GATE is conducted for admission to M.Tech and Ph.D. programs in IITs and other institutes.',
    website: 'https://gate.iitk.ac.in',
    eligibility: 'B.E./B.Tech or equivalent',
    subjects: ['Engineering Mathematics', 'Core Engineering Subject'],
    isUpcoming: false,
    daysUntil: -15,
    applicationFee: {
      general: 1700,
      obc: 1700,
      sc: 850,
      st: 850,
      pwd: 850,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2023,
        general: 62.5,
        obc: 59.2,
        sc: 55.8,
        st: 52.5,
        pwd: 49.1,
        totalMarks: 100
      },
      {
        year: 2022,
        general: 65.1,
        obc: 61.8,
        sc: 58.4,
        st: 55.1,
        pwd: 51.7,
        totalMarks: 100
      },
      {
        year: 2021,
        general: 63.8,
        obc: 60.5,
        sc: 57.1,
        st: 53.8,
        pwd: 50.4,
        totalMarks: 100
      }
    ],
    dataStatus: getDataStatus('GATE')
  },
  {
    id: '7',
    name: 'CLAT',
    fullName: 'Common Law Admission Test',
    examDate: '2025-12-15',
    applicationStartDate: '2025-07-01',
    applicationEndDate: '2025-11-03',
    resultDate: '2025-12-26',
    category: 'Law',
    level: 'National',
    description: 'CLAT is conducted for admission to National Law Universities and other law colleges.',
    website: 'https://consortiumofnlus.ac.in',
    eligibility: '10+2 with 45% marks',
    subjects: ['English', 'General Knowledge', 'Mathematics', 'Legal Aptitude', 'Logical Reasoning'],
    isUpcoming: true,
    daysUntil: 266,
    applicationFee: {
      general: 4000,
      obc: 3500,
      sc: 3500,
      st: 3500,
      pwd: 3500,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2023,
        general: 85.2,
        obc: 82.1,
        sc: 78.5,
        st: 75.3,
        pwd: 72.8,
        totalMarks: 100
      },
      {
        year: 2022,
        general: 87.6,
        obc: 84.5,
        sc: 80.9,
        st: 77.7,
        pwd: 75.2,
        totalMarks: 100
      },
      {
        year: 2021,
        general: 86.3,
        obc: 83.2,
        sc: 79.6,
        st: 76.4,
        pwd: 73.9,
        totalMarks: 100
      }
    ],
    dataStatus: getDataStatus('CLAT')
  },
  {
    id: '8',
    name: 'NDA',
    fullName: 'National Defence Academy',
    examDate: '2025-04-21',
    applicationStartDate: '2025-01-10',
    applicationEndDate: '2025-02-06',
    resultDate: '2025-06-14',
    category: 'Defense',
    level: 'National',
    description: 'NDA exam is conducted for admission to Army, Navy and Air Force wings of NDA.',
    website: 'https://upsc.gov.in',
    eligibility: '10+2 or equivalent',
    subjects: ['Mathematics', 'General Ability Test'],
    isUpcoming: true,
    daysUntil: 40,
    applicationFee: {
      general: 100,
      obc: 100,
      sc: 0,
      st: 0,
      pwd: 0,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2023,
        general: 72.5,
        obc: 69.2,
        sc: 65.8,
        st: 62.5,
        pwd: 59.1,
        totalMarks: 100
      },
      {
        year: 2022,
        general: 75.1,
        obc: 71.8,
        sc: 68.4,
        st: 65.1,
        pwd: 61.7,
        totalMarks: 100
      },
      {
        year: 2021,
        general: 73.8,
        obc: 70.5,
        sc: 67.1,
        st: 63.8,
        pwd: 60.4,
        totalMarks: 100
      }
    ],
    dataStatus: getDataStatus('NDA')
  },
  {
    id: '10',
    name: 'BITSAT',
    fullName: 'Birla Institute of Technology and Science Admission Test',
    examDate: '2025-05-21',
    applicationStartDate: '2025-01-15',
    applicationEndDate: '2025-04-11',
    resultDate: '2025-06-15',
    category: 'Engineering',
    level: 'University',
    description: 'BITSAT is conducted for admission to BITS Pilani, Goa and Hyderabad campuses.',
    website: 'https://bitsadmission.com',
    eligibility: '10+2 with Physics, Chemistry, Mathematics',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English Proficiency', 'Logical Reasoning'],
    isUpcoming: true,
    daysUntil: 51,
    applicationFee: {
      general: 3400,
      obc: 3400,
      sc: 3400,
      st: 3400,
      currency: 'INR'
    },
    cutoffMarks: [
      {
        year: 2023,
        general: 285,
        obc: 275,
        sc: 265,
        st: 255,
        totalMarks: 390
      },
      {
        year: 2022,
        general: 290,
        obc: 280,
        sc: 270,
        st: 260,
        totalMarks: 390
      },
      {
        year: 2021,
        general: 288,
        obc: 278,
        sc: 268,
        st: 258,
        totalMarks: 390
      }
    ],
    dataStatus: getDataStatus('BITSAT')
  }
];
