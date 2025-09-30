export interface College {
  id: number;
  name: string;
  slug: string;
  location: string;
  state: string;
  stream: string;
  heroImageUrl: string;
  overview: string;
  establishmentYear: string;
  nirfRank: number;
  naacGrade: string;
  campusAreaAcres: number;
  highestPackageLpa: number;
  feesRangeLpa: [number, number];
  coursesOfferedCount?: number;
  streamsOffered?: string[];
  programs: Program[];
  careerOpportunities?: string[];
  approvedIntakeTotal?: string;
  totalStudents?: string;
  packagesSummary?: {
    averageLpa: number;
    medianLpa?: number;
    highestLpa: number;
  };
  studentsPlacedLastYear?: string;
  placementStats: PlacementStat[];
  topRecruitersOverall?: string[];
  facultyInfo: {
    withPhD: string;
    withoutPhD: string;
    facultyStudentRatio: string;
  };
  studentDemographics: {
    outsideStatePercent: number;
    withinStatePercent: number;
    boysPercent: number;
    girlsPercent: number;
  };
  hostelFacilities: {
    hostelFeesPerYear: number;
    hostelCapacity: string;
    libraryBooksCount: string;
    sportsFacilities: string[];
    labs: string[];
  };
  expenditureOutcomes: {
    graduationPercent: number;
    placementPercent: number;
    annualCapexCrore: number;
    annualOpexCrore: number;
  };
  campusLife: {
    description: string;
    hangoutSpots: string[];
    culturalEvents: string[];
    hackathons: string[];
  };
  whyChoose: string[];
  extended?: {
    rankings: Ranking[];
    admissions: {
      ugEntranceExams: string[];
      pgEntranceExams: string[];
      typicalCutoffsNote: string;
      applicationProcess: string;
      importantDatesNote: string;
    };
    scholarships: {
      institute: string[];
      government: string[];
      industry: string[];
      notes: string;
    };
    researchCenters: string[];
    collaborations: string[];
    infrastructure: {
      classroomsSmartEnabled: boolean;
      hostelsBlocks: number;
      cafeterias: number;
      medicalCenter24x7: boolean;
      auditoriums: number;
      sportsComplexes: number;
      innovationLabs: number;
      libraryDigitalSubscriptions: number;
    };
    clubsAndSocieties: string[];
    notableAlumni: string[];
    connectivity: {
      nearestAirport: string;
      nearestRailway: string;
      campusTransport: string;
    };
  };
  faqs: FAQ[];
  contact: {
    website: string;
    email: string;
    phone: string;
    address: string;
  };
}

interface Program {
  name: string;
  eligibility: string;
  durationYears: number;
  intake: string;
  feesPerYearLpa: number;
}

interface PlacementStat {
  year: string;
  percentPlaced: number;
  highestPackageLpa: number;
  averagePackageLpa: number;
  topRecruiters: string[];
}

interface Ranking {
  framework: string;
  year: string;
  rank: string;
  note?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export const colleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology Bombay",
    slug: "iit-bombay",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    stream: "Engineering",
    heroImageUrl: "/api/placeholder/800/400",
    overview: "IIT Bombay is one of the premier engineering institutes in India, known for its excellence in education and research. Established in 1958, it has consistently ranked among the top engineering colleges in India.",
    establishmentYear: "1958",
    nirfRank: 3,
    naacGrade: "A++",
    campusAreaAcres: 550,
    highestPackageLpa: 2.1,
    feesRangeLpa: [2.0, 2.5],
    coursesOfferedCount: 15,
    streamsOffered: ["Engineering", "Management", "Science"],
    programs: [
      {
        name: "B.Tech Computer Science Engineering",
        eligibility: "JEE Advanced",
        durationYears: 4,
        intake: "120",
        feesPerYearLpa: 2.2
      },
      {
        name: "B.Tech Mechanical Engineering",
        eligibility: "JEE Advanced",
        durationYears: 4,
        intake: "100",
        feesPerYearLpa: 2.2
      },
      {
        name: "B.Tech Electrical Engineering",
        eligibility: "JEE Advanced",
        durationYears: 4,
        intake: "80",
        feesPerYearLpa: 2.2
      },
      {
        name: "M.Tech Computer Science",
        eligibility: "GATE",
        durationYears: 2,
        intake: "30",
        feesPerYearLpa: 0.5
      }
    ],
    careerOpportunities: [
      "Software Engineering at top tech companies",
      "Research and Development",
      "Entrepreneurship",
      "Higher studies abroad"
    ],
    approvedIntakeTotal: "1200",
    totalStudents: "8000",
    packagesSummary: {
      averageLpa: 15.2,
      medianLpa: 12.5,
      highestLpa: 2.1
    },
    studentsPlacedLastYear: "95%",
    placementStats: [
      {
        year: "2023",
        percentPlaced: 95,
        highestPackageLpa: 2.1,
        averagePackageLpa: 15.2,
        topRecruiters: ["Google", "Microsoft", "Amazon", "Apple"]
      },
      {
        year: "2022",
        percentPlaced: 92,
        highestPackageLpa: 1.8,
        averagePackageLpa: 14.5,
        topRecruiters: ["Google", "Microsoft", "Amazon", "Meta"]
      }
    ],
    topRecruitersOverall: ["Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix"],
    facultyInfo: {
      withPhD: "85%",
      withoutPhD: "15%",
      facultyStudentRatio: "1:12"
    },
    studentDemographics: {
      outsideStatePercent: 60,
      withinStatePercent: 40,
      boysPercent: 70,
      girlsPercent: 30
    },
    hostelFacilities: {
      hostelFeesPerYear: 0.8,
      hostelCapacity: "4000",
      libraryBooksCount: "500,000",
      sportsFacilities: ["Cricket Ground", "Football Field", "Basketball Court", "Swimming Pool"],
      labs: ["Computer Lab", "Electronics Lab", "Mechanical Workshop", "Chemistry Lab"]
    },
    expenditureOutcomes: {
      graduationPercent: 98,
      placementPercent: 95,
      annualCapexCrore: 150,
      annualOpexCrore: 200
    },
    campusLife: {
      description: "IIT Bombay offers a vibrant campus life with numerous clubs, societies, and cultural events. The campus is known for its active student community and excellent facilities.",
      hangoutSpots: ["Central Library", "Student Activity Center", "Lake Side", "Food Court"],
      culturalEvents: ["Mood Indigo", "Techfest", "Inter IIT Sports Meet"],
      hackathons: ["Hackathon IITB", "Codefest", "Tech Challenge"]
    },
    whyChoose: [
      "World-class faculty and research facilities",
      "Excellent placement record",
      "Strong alumni network",
      "Cutting-edge curriculum",
      "Beautiful campus with modern infrastructure"
    ],
    extended: {
      rankings: [
        { framework: "NIRF Engineering", year: "2023", rank: "3" },
        { framework: "QS World", year: "2023", rank: "172" },
        { framework: "Times Higher Education", year: "2023", rank: "201-250" }
      ],
      admissions: {
        ugEntranceExams: ["JEE Advanced"],
        pgEntranceExams: ["GATE", "CEED"],
        typicalCutoffsNote: "JEE Advanced rank under 1000 for CSE",
        applicationProcess: "Online application through JEE Advanced counseling",
        importantDatesNote: "Application deadline: June 2024"
      },
      scholarships: {
        institute: ["Merit Scholarship", "Need-based Scholarship"],
        government: ["MHRD Scholarship", "State Government Scholarship"],
        industry: ["Corporate Sponsorship", "Industry Partnership"],
        notes: "Multiple scholarship options available based on merit and need"
      },
      researchCenters: [
        "Center for Technology Alternatives for Rural Areas",
        "Industrial Research and Consultancy Center",
        "Center for Research in Nanotechnology"
      ],
      collaborations: [
        "MIT, USA",
        "Stanford University, USA",
        "University of Cambridge, UK",
        "Technical University of Munich, Germany"
      ],
      infrastructure: {
        classroomsSmartEnabled: true,
        hostelsBlocks: 15,
        cafeterias: 8,
        medicalCenter24x7: true,
        auditoriums: 3,
        sportsComplexes: 2,
        innovationLabs: 5,
        libraryDigitalSubscriptions: 50
      },
      clubsAndSocieties: [
        "Robotics Club",
        "Programming Club",
        "Drama Society",
        "Music Club",
        "Debate Society"
      ],
      notableAlumni: [
        "Narayana Murthy (Infosys Founder)",
        "Nandan Nilekani (Infosys Co-founder)",
        "Raghuram Rajan (Former RBI Governor)"
      ],
      connectivity: {
        nearestAirport: "Mumbai Airport (45 km)",
        nearestRailway: "Powai Railway Station (2 km)",
        campusTransport: "Internal bus service and cycle sharing"
      }
    },
    faqs: [
      {
        question: "What is the admission process for IIT Bombay?",
        answer: "Admission is through JEE Advanced. Students need to qualify JEE Advanced and participate in the counseling process."
      },
      {
        question: "What are the hostel facilities like?",
        answer: "IIT Bombay has excellent hostel facilities with modern amenities, 24/7 security, and various recreational facilities."
      },
      {
        question: "What is the placement scenario?",
        answer: "IIT Bombay has an excellent placement record with 95%+ students getting placed in top companies with average package of 15+ LPA."
      }
    ],
    contact: {
      website: "https://www.iitb.ac.in",
      email: "info@iitb.ac.in",
      phone: "+91-22-2572-2545",
      address: "Powai, Mumbai, Maharashtra 400076"
    }
  },
  {
    id: 2,
    name: "All India Institute of Medical Sciences",
    slug: "aiims-delhi",
    location: "New Delhi",
    state: "Delhi",
    stream: "Medical",
    heroImageUrl: "/api/placeholder/800/400",
    overview: "AIIMS Delhi is India's premier medical institute, known for its excellence in medical education and healthcare.",
    establishmentYear: "1956",
    nirfRank: 1,
    naacGrade: "A++",
    campusAreaAcres: 200,
    highestPackageLpa: 1.8,
    feesRangeLpa: [0.5, 1.0],
    coursesOfferedCount: 8,
    streamsOffered: ["Medical", "Nursing", "Paramedical"],
    programs: [
      {
        name: "MBBS",
        eligibility: "NEET",
        durationYears: 5.5,
        intake: "100",
        feesPerYearLpa: 0.5
      }
    ],
    careerOpportunities: ["Clinical Practice", "Medical Research", "Public Health"],
    approvedIntakeTotal: "500",
    totalStudents: "3000",
    packagesSummary: {
      averageLpa: 12.5,
      medianLpa: 10.0,
      highestLpa: 1.8
    },
    studentsPlacedLastYear: "98%",
    placementStats: [
      {
        year: "2023",
        percentPlaced: 98,
        highestPackageLpa: 1.8,
        averagePackageLpa: 12.5,
        topRecruiters: ["AIIMS", "Government Hospitals", "Private Hospitals"]
      }
    ],
    topRecruitersOverall: ["AIIMS", "Government Hospitals", "Private Hospitals"],
    facultyInfo: {
      withPhD: "90%",
      withoutPhD: "10%",
      facultyStudentRatio: "1:8"
    },
    studentDemographics: {
      outsideStatePercent: 70,
      withinStatePercent: 30,
      boysPercent: 60,
      girlsPercent: 40
    },
    hostelFacilities: {
      hostelFeesPerYear: 0.2,
      hostelCapacity: "2000",
      libraryBooksCount: "300,000",
      sportsFacilities: ["Gymnasium", "Swimming Pool", "Basketball Court"],
      labs: ["Anatomy Lab", "Physiology Lab", "Pathology Lab"]
    },
    expenditureOutcomes: {
      graduationPercent: 99,
      placementPercent: 98,
      annualCapexCrore: 100,
      annualOpexCrore: 150
    },
    campusLife: {
      description: "AIIMS Delhi offers a vibrant campus life with excellent medical facilities.",
      hangoutSpots: ["Library", "Cafeteria", "Garden"],
      culturalEvents: ["Medical Fest", "Health Awareness Campaigns"],
      hackathons: ["Medical Innovation Challenge"]
    },
    whyChoose: [
      "Premier medical institute in India",
      "Excellent clinical exposure",
      "World-class faculty"
    ],
    faqs: [
      {
        question: "What is the admission process for AIIMS Delhi?",
        answer: "Admission is through NEET for MBBS programs."
      }
    ],
    contact: {
      website: "https://www.aiims.edu",
      email: "info@aiims.edu",
      phone: "+91-11-2658-8500",
      address: "Ansari Nagar, New Delhi 110029"
    }
  },
  {
    id: 3,
    name: "National Institute of Technology Trichy",
    slug: "nit-trichy",
    location: "Trichy, Tamil Nadu",
    state: "Tamil Nadu",
    stream: "Engineering",
    heroImageUrl: "/api/placeholder/800/400",
    overview: "NIT Trichy is one of the premier engineering institutes in India, known for its excellent academic programs.",
    establishmentYear: "1964",
    nirfRank: 15,
    naacGrade: "A+",
    campusAreaAcres: 800,
    highestPackageLpa: 1.2,
    feesRangeLpa: [1.5, 2.0],
    coursesOfferedCount: 12,
    streamsOffered: ["Engineering", "Management", "Science"],
    programs: [
      {
        name: "B.Tech Computer Science",
        eligibility: "JEE Main",
        durationYears: 4,
        intake: "120",
        feesPerYearLpa: 1.8
      }
    ],
    careerOpportunities: ["Software Engineering", "Core Engineering", "Research"],
    approvedIntakeTotal: "1000",
    totalStudents: "6000",
    packagesSummary: {
      averageLpa: 8.5,
      medianLpa: 7.0,
      highestLpa: 1.2
    },
    studentsPlacedLastYear: "85%",
    placementStats: [
      {
        year: "2023",
        percentPlaced: 85,
        highestPackageLpa: 1.2,
        averagePackageLpa: 8.5,
        topRecruiters: ["TCS", "Infosys", "Wipro", "Microsoft"]
      }
    ],
    topRecruitersOverall: ["TCS", "Infosys", "Wipro", "Microsoft", "Amazon"],
    facultyInfo: {
      withPhD: "80%",
      withoutPhD: "20%",
      facultyStudentRatio: "1:15"
    },
    studentDemographics: {
      outsideStatePercent: 50,
      withinStatePercent: 50,
      boysPercent: 75,
      girlsPercent: 25
    },
    hostelFacilities: {
      hostelFeesPerYear: 0.5,
      hostelCapacity: "3000",
      libraryBooksCount: "200,000",
      sportsFacilities: ["Cricket Ground", "Football Field", "Basketball Court"],
      labs: ["Computer Lab", "Electronics Lab", "Mechanical Workshop"]
    },
    expenditureOutcomes: {
      graduationPercent: 95,
      placementPercent: 85,
      annualCapexCrore: 50,
      annualOpexCrore: 80
    },
    campusLife: {
      description: "NIT Trichy offers a vibrant campus life with excellent facilities.",
      hangoutSpots: ["Central Library", "Student Center", "Sports Complex"],
      culturalEvents: ["Techfest", "Cultural Fest", "Sports Meet"],
      hackathons: ["Codefest", "Tech Challenge"]
    },
    whyChoose: [
      "Strong technical curriculum",
      "Good placement record",
      "Affordable fees"
    ],
    faqs: [
      {
        question: "What is the admission process for NIT Trichy?",
        answer: "Admission is through JEE Main followed by JoSAA counseling."
      }
    ],
    contact: {
      website: "https://www.nitt.edu",
      email: "info@nitt.edu",
      phone: "+91-431-250-3000",
      address: "Tanjore Main Road, Trichy, Tamil Nadu 620015"
    }
  }
];
