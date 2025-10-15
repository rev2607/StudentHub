import { addDays, addMonths, format, parseISO } from 'date-fns';

export interface HistoricalDatePattern {
  examName: string;
  years: {
    year: number;
    examDate: string;
    applicationStart: string;
    applicationEnd: string;
    resultDate: string;
  }[];
}

// Historical patterns for major exams
const historicalPatterns: HistoricalDatePattern[] = [
  {
    examName: 'JEE Main',
    years: [
      { year: 2024, examDate: '2024-04-06', applicationStart: '2024-01-01', applicationEnd: '2024-02-29', resultDate: '2024-04-25' },
      { year: 2023, examDate: '2023-04-06', applicationStart: '2023-01-01', applicationEnd: '2023-02-28', resultDate: '2023-04-25' },
      { year: 2022, examDate: '2022-06-20', applicationStart: '2022-03-01', applicationEnd: '2022-04-30', resultDate: '2022-07-11' },
      { year: 2021, examDate: '2021-07-20', applicationStart: '2021-02-23', applicationEnd: '2021-03-31', resultDate: '2021-08-10' }
    ]
  },
  {
    examName: 'NEET',
    years: [
      { year: 2024, examDate: '2024-05-05', applicationStart: '2024-02-09', applicationEnd: '2024-03-09', resultDate: '2024-06-14' },
      { year: 2023, examDate: '2023-05-07', applicationStart: '2023-02-09', applicationEnd: '2023-03-09', resultDate: '2023-06-13' },
      { year: 2022, examDate: '2022-07-17', applicationStart: '2022-04-06', applicationEnd: '2022-05-06', resultDate: '2022-09-07' },
      { year: 2021, examDate: '2021-09-12', applicationStart: '2021-07-13', applicationEnd: '2021-08-06', resultDate: '2021-11-01' }
    ]
  },
  {
    examName: 'EAMCET',
    years: [
      { year: 2024, examDate: '2024-05-15', applicationStart: '2024-02-01', applicationEnd: '2024-03-15', resultDate: '2024-06-15' },
      { year: 2023, examDate: '2023-05-15', applicationStart: '2023-02-01', applicationEnd: '2023-03-15', resultDate: '2023-06-15' },
      { year: 2022, examDate: '2022-07-11', applicationStart: '2022-04-01', applicationEnd: '2022-05-10', resultDate: '2022-08-05' },
      { year: 2021, examDate: '2021-08-04', applicationStart: '2021-05-01', applicationEnd: '2021-06-10', resultDate: '2021-09-09' }
    ]
  },
  {
    examName: 'CAT',
    years: [
      { year: 2024, examDate: '2024-11-24', applicationStart: '2024-08-01', applicationEnd: '2024-09-15', resultDate: '2024-12-20' },
      { year: 2023, examDate: '2023-11-26', applicationStart: '2023-08-02', applicationEnd: '2023-09-13', resultDate: '2023-12-21' },
      { year: 2022, examDate: '2022-11-27', applicationStart: '2022-08-03', applicationEnd: '2022-09-14', resultDate: '2022-12-21' },
      { year: 2021, examDate: '2021-11-28', applicationStart: '2021-08-04', applicationEnd: '2021-09-15', resultDate: '2021-12-22' }
    ]
  },
  {
    examName: 'UPSC CSE',
    years: [
      { year: 2024, examDate: '2024-05-26', applicationStart: '2024-02-14', applicationEnd: '2024-03-05', resultDate: '2024-08-16' },
      { year: 2023, examDate: '2023-05-28', applicationStart: '2023-02-01', applicationEnd: '2023-02-21', resultDate: '2023-08-16' },
      { year: 2022, examDate: '2022-06-05', applicationStart: '2022-02-02', applicationEnd: '2022-02-22', resultDate: '2022-08-16' },
      { year: 2021, examDate: '2021-10-10', applicationStart: '2021-02-10', applicationEnd: '2021-03-02', resultDate: '2021-08-16' }
    ]
  }
];

export function calculateExpectedDates(examName: string, currentYear: number = 2025) {
  const pattern = historicalPatterns.find(p => p.examName === examName);
  
  if (!pattern || pattern.years.length < 2) {
    return null;
  }

  // Calculate average intervals between dates
  const intervals = {
    examToApplicationStart: [] as number[],
    applicationStartToEnd: [] as number[],
    examToResult: [] as number[]
  };

  // Calculate intervals from historical data
  for (let i = 0; i < pattern.years.length - 1; i++) {
    const current = pattern.years[i];
    const next = pattern.years[i + 1];
    
    const currentExam = parseISO(current.examDate);
    const nextExam = parseISO(next.examDate);
    const currentAppStart = parseISO(current.applicationStart);
    const nextAppStart = parseISO(next.applicationStart);
    const currentAppEnd = parseISO(current.applicationEnd);
    const nextAppEnd = parseISO(next.applicationEnd);
    const currentResult = parseISO(current.resultDate);
    const nextResult = parseISO(next.resultDate);

    // Calculate days between exam dates
    const examInterval = Math.abs(nextExam.getTime() - currentExam.getTime()) / (1000 * 60 * 60 * 24);
    intervals.examToApplicationStart.push(examInterval);
    
    // Calculate application period
    const appPeriod = Math.abs(currentAppEnd.getTime() - currentAppStart.getTime()) / (1000 * 60 * 60 * 24);
    intervals.applicationStartToEnd.push(appPeriod);
    
    // Calculate exam to result period
    const resultPeriod = Math.abs(currentResult.getTime() - currentExam.getTime()) / (1000 * 60 * 60 * 24);
    intervals.examToResult.push(resultPeriod);
  }

  // Calculate averages
  const avgExamInterval = intervals.examToApplicationStart.reduce((a, b) => a + b, 0) / intervals.examToApplicationStart.length;
  const avgAppPeriod = intervals.applicationStartToEnd.reduce((a, b) => a + b, 0) / intervals.applicationStartToEnd.length;
  const avgResultPeriod = intervals.examToResult.reduce((a, b) => a + b, 0) / intervals.examToResult.length;

  // Get the most recent exam date
  const latestExam = pattern.years[0];
  const latestExamDate = parseISO(latestExam.examDate);
  
  // Calculate expected dates for next year
  const expectedExamDate = addDays(latestExamDate, avgExamInterval);
  const expectedAppStart = addDays(expectedExamDate, -Math.floor(avgAppPeriod * 0.7));
  const expectedAppEnd = addDays(expectedAppStart, avgAppPeriod);
  const expectedResultDate = addDays(expectedExamDate, avgResultPeriod);

  return {
    examDate: format(expectedExamDate, 'yyyy-MM-dd'),
    applicationStart: format(expectedAppStart, 'yyyy-MM-dd'),
    applicationEnd: format(expectedAppEnd, 'yyyy-MM-dd'),
    resultDate: format(expectedResultDate, 'yyyy-MM-dd')
  };
}

export function getDataStatus(examName: string, currentDate: string) {
  const pattern = historicalPatterns.find(p => p.examName === examName);
  
  if (!pattern) {
    return {
      examDateStatus: 'not_announced' as const,
      applicationStatus: 'not_announced' as const,
      resultStatus: 'not_announced' as const,
      lastUpdated: new Date().toISOString().split('T')[0],
      dataSource: 'StudentHub.IN Analysis'
    };
  }

  // For demo purposes, we'll simulate some exams as announced and others as expected
  const announcedExams = ['JEE Main', 'NEET', 'UPSC CSE'];
  const expectedExams = ['EAMCET', 'CAT', 'GATE', 'CLAT', 'NDA', 'BITSAT'];

  if (announcedExams.includes(examName)) {
    return {
      examDateStatus: 'announced' as const,
      applicationStatus: 'announced' as const,
      resultStatus: 'announced' as const,
      lastUpdated: new Date().toISOString().split('T')[0],
      dataSource: 'Official Website'
    };
  } else if (expectedExams.includes(examName)) {
    const expectedDates = calculateExpectedDates(examName);
    return {
      examDateStatus: 'expected' as const,
      applicationStatus: 'expected' as const,
      resultStatus: 'expected' as const,
      lastUpdated: new Date().toISOString().split('T')[0],
      dataSource: 'Historical Analysis',
      expectedDateRange: expectedDates
    };
  } else {
    return {
      examDateStatus: 'not_announced' as const,
      applicationStatus: 'not_announced' as const,
      resultStatus: 'not_announced' as const,
      lastUpdated: new Date().toISOString().split('T')[0],
      dataSource: 'StudentHub.IN Analysis'
    };
  }
}
