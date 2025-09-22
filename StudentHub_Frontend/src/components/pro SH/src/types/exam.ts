export interface Exam {
  id: string;
  name: string;
  fullName: string;
  examDate: string;
  applicationStartDate: string;
  applicationEndDate: string;
  resultDate: string;
  category: ExamCategory;
  level: ExamLevel;
  description: string;
  website: string;
  eligibility: string;
  subjects: string[];
  isUpcoming: boolean;
  daysUntil: number;
  applicationFee: {
    general: number;
    obc?: number;
    sc?: number;
    st?: number;
    ews?: number;
    pwd?: number;
    currency: string;
  };
  cutoffMarks: {
    year: number;
    general: number;
    obc?: number;
    sc?: number;
    st?: number;
    ews?: number;
    pwd?: number;
    totalMarks: number;
  }[];
  dataStatus: {
    examDateStatus: 'announced' | 'expected' | 'not_announced';
    applicationStatus: 'announced' | 'expected' | 'not_announced';
    resultStatus: 'announced' | 'expected' | 'not_announced';
    lastUpdated: string;
    dataSource: string;
    expectedDateRange?: {
      examDate: string;
      applicationStart: string;
      applicationEnd: string;
      resultDate: string;
    };
  };
}

export type ExamCategory = 
  | 'Engineering'
  | 'Medical'
  | 'Management'
  | 'Government'
  | 'Defense'
  | 'Arts & Science'
  | 'Law'
  | 'Agriculture'
  | 'Architecture'
  | 'Other';

export type ExamLevel = 
  | 'National'
  | 'State'
  | 'University'
  | 'International';

export interface ExamFilter {
  category: ExamCategory | 'All';
  level: ExamLevel | 'All';
  searchTerm: string;
  upcomingOnly: boolean;
  maxFee: number | null;
}
