export type ExamLink = {
  label: string;
  url: string;
};

export type ExamFAQ = {
  question: string;
  answer: string;
};

export type ExamImportantDate = {
  label: string;
  date: string;
};

export type ExamPattern = {
  durationMinutes: number;
  totalMarks?: number;
  negativeMarking?: string;
  modeOfExam: string;
  sections: Array<{
    name: string;
    questions?: number;
    marks?: number;
    type?: string;
    duration?: string;
  }>;
};

export type ExamSyllabusSection = {
  section: string;
  topics: string[];
};

export type ExamApplicationFee = {
  general: number;
  obc?: number;
  sc?: number;
  st?: number;
  pwd?: number;
  currency: string;
};

export type ExamSummary = {
  slug: string;
  name: string;
  shortIntro: string;
};

export type ExamDetail = {
  slug: string;
  name: string;
  shortName: string;
  fullName: string;
  conductingBody: string;
  frequency: string;
  level: string;
  language: string;
  applicationFee: ExamApplicationFee;
  durationMinutes: number;
  modeOfApplication: string;
  modeOfExam: string;
  modeOfCounselling?: string;
  participatingColleges: number;
  introduction: string;
  eligibility: string[];
  applicationProcedure: string[];
  importantDates: ExamImportantDate[];
  documentsRequired: string[];
  examPattern: ExamPattern;
  syllabus: ExamSyllabusSection[];
  examCentres: {
    count: number;
    centres: string[];
  };
  cutoffsAndCounselling: string[];
  slotAdmitResults: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  faqs: ExamFAQ[];
  officialLinks: ExamLink[];
  upcomingExamDetails?: {
    year: string;
    notificationRelease: string;
    keyConsiderations: string[];
    tentativeSchedule: {
      session1: {
        notification: string;
        registration: string;
        applicationEnd: string;
        correctionWindow: string;
        cityIntimation: string;
        admitCard: string;
        examDates: string;
        result: string;
      };
      session2: {
        registration: string;
        applicationEnd: string;
        correctionWindow: string;
        cityIntimation: string;
        admitCard: string;
        examDates: string;
        result: string;
      };
    };
    recentPastReference: {
      year: string;
      session2Dates: string;
      examShifts: string;
      revisedSchedule: string;
    };
  };
  comprehensiveGuide?: {
    overview: {
      title: string;
      description: string;
      keyPoints: string[];
    };
    jeeMainDetails: {
      title: string;
      papers: Array<{
        name: string;
        subjects: string[];
        questions: number;
        toAttempt: number;
        duration: string;
        mode: string;
      }>;
      markingScheme: {
        correctAnswer: string;
        incorrectAnswer: string;
        unattempted: string;
        totalMarks: number;
      };
    };
    jeeAdvancedDetails: {
      title: string;
      papers: Array<{
        name: string;
        duration: string;
        subjects: string[];
        questionTypes: string[];
      }>;
      difficulty: string;
      colleges: string[];
    };
    eligibilityCriteria: {
      jeeMain: {
        ageLimit: string;
        qualification: string;
        attempts: string;
        minimumMarks: string;
      };
      jeeAdvanced: {
        prerequisite: string;
        ageLimit: string;
        attempts: string;
        minimumMarks: string;
      };
    };
    examPattern: {
      jeeMain: {
        totalQuestions: number;
        toAttempt: number;
        questionTypes: string[];
        duration: string;
        mode: string;
      };
      jeeAdvanced: {
        papers: number;
        duration: string;
        questionTypes: string[];
        difficulty: string;
      };
    };
    syllabus: {
      physics: string[];
      chemistry: string[];
      mathematics: string[];
    };
    preparationStrategy: {
      timeline: {
        "1Year": string;
        "2Year": string;
      };
      studyMaterials: string[];
      approach: string[];
    };
    cutoffsAndCounselling: {
      jeeMain: {
        qualifyingCutoff: string;
        admissionCutoff: string;
        counselling: string;
      };
      jeeAdvanced: {
        cutoff: string;
        counselling: string;
        specialRounds: string;
      };
    };
    participatingColleges: {
      iits: {
        count: number;
        description: string;
        popularBranches: string[];
      };
      nits: {
        count: number;
        description: string;
        popularBranches: string[];
      };
      iiits: {
        count: number;
        description: string;
        popularBranches: string[];
      };
      cftis: {
        count: string;
        description: string;
        examples: string[];
      };
    };
    trendsAndAnalysis: {
      applicants: string;
      successRate: string;
      difficultyTrends: string[];
      careerScope: string[];
    };
    alternatives: {
      title: string;
      exams: string[];
    };
  };
};

export const examsList: ExamSummary[] = [
  {
    slug: "jee-main",
    name: "JEE Main",
    shortIntro:
      "National-level entrance exam for admission to NITs, IIITs and CFTIs. Conducted by NTA in multiple sessions.",
  },
  {
    slug: "jee-advanced",
    name: "JEE Advanced",
    shortIntro:
      "Gateway to IITs. Conducted by one of the IITs annually for top performers of JEE Main.",
  },
  {
    slug: "neet",
    name: "NEET",
    shortIntro:
      "Single medical entrance exam for MBBS, BDS and AYUSH courses across India. Conducted by NTA.",
  },
  {
    slug: "eamcet",
    name: "EAMCET",
    shortIntro:
      "State-level exam for Engineering, Agriculture admissions in Telangana/Andhra Pradesh.",
  },
  {
    slug: "bitsat",
    name: "BITSAT",
    shortIntro:
      "University-level entrance test for admission to BITS Pilani campuses.",
  },
  {
    slug: "viteee",
    name: "VITEEE",
    shortIntro:
      "Entrance exam for admission to VIT campuses for B.Tech programs.",
  },
];

export const examsDetails: Record<string, ExamDetail> = {
  "jee-main": {
    slug: "jee-main",
    name: "JEE Main",
    shortName: "JEE Main",
    fullName: "Joint Entrance Examination Main",
    conductingBody: "National Testing Agency (NTA)",
    frequency: "Twice a year (January & April)",
    level: "National",
    language: "English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu",
    applicationFee: { general: 1000, obc: 900, sc: 800, st: 800, pwd: 800, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    modeOfCounselling: "JoSAA/CSAB online",
    participatingColleges: 2500,
    introduction:
      "JEE Main is India's most prestigious engineering entrance examination, serving as the gateway to premier institutions like NITs, IIITs, and other Centrally Funded Technical Institutions (CFTIs). It's also the qualifying exam for JEE Advanced, which leads to IITs. Conducted by NTA twice annually, JEE Main offers multiple opportunities for students to secure admission to top engineering colleges across India. The upcoming JEE Main 2026 cycle is expected to follow the established pattern with Session 1 in January/February and Session 2 in April, with careful scheduling to avoid conflicts with CBSE board exams. With over 10-12 lakh candidates appearing annually, JEE Main is the most competitive exam in India, with less than 2% of candidates reaching IITs through JEE Advanced.",
    eligibility: [
      "Passed/appearing in 10+2 with Physics, Chemistry, and Mathematics",
      "Minimum 75% aggregate in 12th (65% for SC/ST/PwD) or be in top 20 percentile",
      "No age limit (as per current policy)",
      "Maximum 2 attempts per year (both sessions)",
      "Indian nationals and OCI/PIO candidates eligible",
    ],
    applicationProcedure: [
      "Visit jeemain.nta.ac.in and register with valid email/mobile",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities (up to 4 preferences)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Admit card will be released 3-4 days before exam",
    ],
    importantDates: [
      { label: "JEE Main 2026 Notification Release", date: "November 2025" },
      { label: "Session 1 Registration Start", date: "November 2025" },
      { label: "Session 1 Application End", date: "December 2025" },
      { label: "Session 1 Correction Window", date: "December 2025" },
      { label: "Session 1 City Intimation", date: "January 2026" },
      { label: "Session 1 Admit Card", date: "Third week of January 2026" },
      { label: "Session 1 Exam Dates", date: "Late January / Early February 2026" },
      { label: "Session 1 Answer Key", date: "February 2026" },
      { label: "Session 1 Result", date: "February 2026" },
      { label: "Session 2 Registration Start", date: "February 2026" },
      { label: "Session 2 Application End", date: "March 2026" },
      { label: "Session 2 Correction Window", date: "March 2026" },
      { label: "Session 2 City Intimation", date: "March 2026" },
      { label: "Session 2 Admit Card", date: "Late March / Early April 2026" },
      { label: "Session 2 Exam Dates", date: "April 2-12, 2026 (Tentative)" },
      { label: "Session 2 Answer Key", date: "Mid April 2026" },
      { label: "Session 2 Result", date: "Late April / Early May 2026" },
      { label: "JoSAA Counselling", date: "June 2026" },
    ],
    documentsRequired: [
      "Recent passport-size photograph (JPG/JPEG, 10-200 KB)",
      "Scanned signature (JPG/JPEG, 4-30 KB)",
      "Category certificate (if applicable) - SC/ST/OBC-NCL/EWS",
      "PwD certificate (if applicable)",
      "Photo ID proof (Aadhaar/PAN/Passport/Driving License)",
      "Class 10th and 12th mark sheets",
      "Bank account details for fee payment",
    ],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 300,
      negativeMarking: "-1 for incorrect MCQ, 0 for unattempted",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Physics", questions: 30, marks: 100, type: "MCQ + Numerical" },
        { name: "Chemistry", questions: 30, marks: 100, type: "MCQ + Numerical" },
        { name: "Mathematics", questions: 30, marks: 100, type: "MCQ + Numerical" },
      ],
    },
    syllabus: [
      { 
        section: "Physics", 
        topics: [
          "Mechanics: Kinematics, Laws of Motion, Work Energy Power",
          "Thermodynamics: Heat, Temperature, Laws of Thermodynamics",
          "Waves and Oscillations: Simple Harmonic Motion, Wave Motion",
          "Electrostatics: Electric Field, Potential, Capacitance",
          "Current Electricity: Ohm's Law, Resistance, Power",
          "Magnetism: Magnetic Field, Electromagnetic Induction",
          "Optics: Ray Optics, Wave Optics, Interference, Diffraction",
          "Modern Physics: Photoelectric Effect, Atomic Structure, Nuclear Physics"
        ] 
      },
      { 
        section: "Chemistry", 
        topics: [
          "Physical Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics",
          "Organic Chemistry: Hydrocarbons, Functional Groups, Reaction Mechanisms",
          "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds",
          "Environmental Chemistry: Pollution, Green Chemistry",
          "Biomolecules: Carbohydrates, Proteins, Nucleic Acids"
        ] 
      },
      { 
        section: "Mathematics", 
        topics: [
          "Algebra: Complex Numbers, Quadratic Equations, Sequences and Series",
          "Calculus: Limits, Continuity, Differentiation, Integration",
          "Coordinate Geometry: Straight Lines, Circles, Conic Sections",
          "Trigonometry: Trigonometric Ratios, Identities, Equations",
          "Statistics and Probability: Mean, Median, Mode, Probability",
          "Vectors: Vector Algebra, Scalar and Vector Products"
        ] 
      },
    ],
    examCentres: {
      count: 400,
      centres: [
        "Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad", "Bengaluru", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
        "Chandigarh", "Bhopal", "Indore", "Bhubaneswar", "Guwahati", "Patna", "Ranchi", "Raipur", "Dehradun", "Srinagar"
      ],
    },
    cutoffsAndCounselling: [
      "Cutoffs vary significantly by institute, category, and branch",
      "General category cutoffs for top NITs: 95+ percentile",
      "JoSAA conducts centralized counselling for NITs, IIITs, and CFTIs",
      "CSAB conducts additional rounds for vacant seats",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Seat matrix and cutoffs published before each round",
    ],
    slotAdmitResults: [
      "No slot booking required; exam city selection during application",
      "Admit card released 3-4 days before exam with exam center details",
      "Results declared with percentile, rank, and score",
      "Scorecard downloadable from NTA portal",
      "Normalization applied across different shifts for fair evaluation",
    ],
    contact: {
      phone: "+91-11-40759000, +91-11-40759001",
      email: "jeemain@nta.ac.in, helpdesk@nta.ac.in",
      address: "National Testing Agency, Plot No. 15, Knowledge Park-III, Greater Noida, Uttar Pradesh - 201310",
    },
    faqs: [
      { question: "How many attempts are allowed for JEE Main?", answer: "Students can appear for JEE Main twice in a year (January and April sessions). Both attempts are considered separate, and the best score is used for admission." },
      { question: "Is there any age limit for JEE Main?", answer: "Currently, there is no upper age limit for appearing in JEE Main. However, candidates must have passed 10+2 or equivalent examination." },
      { question: "What is the exam mode for JEE Main?", answer: "JEE Main is conducted in Computer-Based Test (CBT) mode. All questions are displayed on computer screens and answered using mouse and keyboard." },
      { question: "Can I appear in both sessions of JEE Main?", answer: "Yes, candidates can appear in both sessions. The best of the two scores (if appeared in both sessions) will be considered for ranking and admission." },
      { question: "How is the percentile calculated in JEE Main?", answer: "Percentile is calculated using normalization across different shifts to ensure fairness. It represents the percentage of candidates who scored equal to or below the candidate's score." },
      { question: "What is the difference between JEE Main and JEE Advanced?", answer: "JEE Main is the first stage for admission to NITs, IIITs, and CFTIs. JEE Advanced is the second stage for admission to IITs, and only top JEE Main qualifiers can appear for it." },
      { question: "Is there negative marking in JEE Main?", answer: "Yes, there is negative marking of -1 mark for each incorrect answer in MCQ questions. No marks are deducted for unattempted questions." },
      { question: "When will JEE Main 2026 notification be released?", answer: "The official notification for JEE Main 2026 is expected to be released in November 2025, with detailed exam dates and application procedures." },
      { question: "How does JEE Main 2026 avoid conflicts with board exams?", answer: "JEE Main 2026 Session 2 is scheduled after April 9, 2026, to avoid conflicts with CBSE Class 12 board exams which run from February 17 to April 9, 2026." },
      { question: "What is the exam duration for different papers?", answer: "B.E./B.Tech and B.Arch/B.Planning papers are 3 hours each. If appearing for both B.Arch and B.Planning, the duration extends to 3 hours 30 minutes." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://jeemain.nta.ac.in" },
      { label: "Application Form", url: "https://jeemain.nta.ac.in/" },
      { label: "Information Bulletin", url: "https://jeemain.nta.ac.in/information-bulletin" },
      { label: "Previous Year Papers", url: "https://jeemain.nta.ac.in/previous-year-papers" },
    ],
    upcomingExamDetails: {
      year: "2026",
      notificationRelease: "November 2025",
      keyConsiderations: [
        "JEE Main 2026 Session 1: Late January/Early February 2026",
        "JEE Main 2026 Session 2: April 2-12, 2026 (Tentative)",
        "Session 2 scheduled after April 9, 2026 to avoid CBSE board exam conflicts",
        "CBSE Class 12 board exams: February 17 to April 9, 2026",
        "Two-session scoring: Best score considered for ranking",
        "Exam duration: 3 hours for B.E./B.Tech, 3.5 hours for B.Arch + B.Planning",
        "Correction windows available for form adjustments",
        "City intimation and admit card releases staggered by exam dates"
      ],
      tentativeSchedule: {
        session1: {
          notification: "November 2025",
          registration: "November 2025",
          applicationEnd: "December 2025",
          correctionWindow: "December 2025",
          cityIntimation: "January 2026",
          admitCard: "Third week of January 2026",
          examDates: "Late January/Early February 2026",
          result: "February 2026"
        },
        session2: {
          registration: "February 2026",
          applicationEnd: "March 2026",
          correctionWindow: "March 2026",
          cityIntimation: "March 2026",
          admitCard: "Late March/Early April 2026",
          examDates: "April 2-12, 2026 (Tentative)",
          result: "Late April/Early May 2026"
        }
      },
      recentPastReference: {
        year: "2025",
        session2Dates: "April 1-8, 2025",
        examShifts: "Morning (9:00 AM-12:00 PM) and Afternoon (3:00 PM-6:00 PM)",
        revisedSchedule: "Due to board exam clash: April 2,3,4,7 (two shifts), April 8 (single shift 3 PM-6 PM), BArch/BPlanning on April 9"
      }
    },
    comprehensiveGuide: {
      overview: {
        title: "Complete JEE Ecosystem Overview",
        description: "JEE (Joint Entrance Examination) is India's most competitive engineering entrance exam system, consisting of JEE Main and JEE Advanced. It serves as the gateway to premier institutions like IITs, NITs, IIITs, and other top engineering colleges across India.",
        keyPoints: [
          "JEE Main: Conducted by NTA, 2 sessions per year (January & April)",
          "JEE Advanced: Conducted by IITs, only for top 2.5 lakh JEE Main qualifiers",
          "Over 10-12 lakh candidates appear annually for JEE Main",
          "Success rate: Less than 2% reach IITs through JEE Advanced",
          "Gateway to 23 IITs, 31 NITs, 25+ IIITs, and other CFTIs"
        ]
      },
      jeeMainDetails: {
        title: "JEE Main Comprehensive Details",
        papers: [
          {
            name: "Paper 1 (B.E./B.Tech)",
            subjects: ["Physics", "Chemistry", "Mathematics"],
            questions: 90,
            toAttempt: 75,
            duration: "3 hours",
            mode: "Computer Based Test (CBT)"
          },
          {
            name: "Paper 2A (B.Arch)",
            subjects: ["Mathematics", "Aptitude", "Drawing"],
            questions: 82,
            toAttempt: 77,
            duration: "3 hours",
            mode: "Computer Based Test + Drawing (Pen & Paper)"
          },
          {
            name: "Paper 2B (B.Planning)",
            subjects: ["Mathematics", "Aptitude", "Planning"],
            questions: 105,
            toAttempt: 100,
            duration: "3 hours",
            mode: "Computer Based Test (CBT)"
          }
        ],
        markingScheme: {
          correctAnswer: "+4 marks",
          incorrectAnswer: "-1 mark",
          unattempted: "0 marks",
          totalMarks: 300
        }
      },
      jeeAdvancedDetails: {
        title: "JEE Advanced Comprehensive Details",
        papers: [
          {
            name: "Paper 1",
            duration: "3 hours",
            subjects: ["Physics", "Chemistry", "Mathematics"],
            questionTypes: ["MCQ", "Numerical", "Matrix Match", "Multiple Correct"]
          },
          {
            name: "Paper 2",
            duration: "3 hours",
            subjects: ["Physics", "Chemistry", "Mathematics"],
            questionTypes: ["MCQ", "Numerical", "Matrix Match", "Multiple Correct"]
          }
        ],
        difficulty: "High level of difficulty compared to JEE Main",
        colleges: ["23 IITs", "IISc Bangalore", "IISERs", "RGIPT", "IIST"]
      },
      eligibilityCriteria: {
        jeeMain: {
          ageLimit: "No age limit (as per current policy)",
          qualification: "10+2 with Physics, Chemistry, Mathematics",
          attempts: "Maximum 3 consecutive years",
          minimumMarks: "75% aggregate in 12th (65% for SC/ST/PwD) or top 20 percentile"
        },
        jeeAdvanced: {
          prerequisite: "Must qualify JEE Main (top 2.5 lakh)",
          ageLimit: "Born on/after October 1, 2000 (relaxation for reserved categories)",
          attempts: "Maximum 2 consecutive years",
          minimumMarks: "75% aggregate in 12th (65% for SC/ST/PwD)"
        }
      },
      examPattern: {
        jeeMain: {
          totalQuestions: 90,
          toAttempt: 75,
          questionTypes: ["MCQ", "Numerical Value Questions"],
          duration: "3 hours",
          mode: "Computer Based Test (CBT)"
        },
        jeeAdvanced: {
          papers: 2,
          duration: "3 hours each",
          questionTypes: ["MCQ", "Numerical", "Matrix Match", "Multiple Correct"],
          difficulty: "Advanced level problem solving"
        }
      },
      syllabus: {
        physics: [
          "Mechanics: Kinematics, Laws of Motion, Work Energy Power, Rotational Motion",
          "Thermodynamics: Heat, Temperature, Laws of Thermodynamics, Kinetic Theory",
          "Waves and Oscillations: Simple Harmonic Motion, Wave Motion, Sound",
          "Electrostatics: Electric Field, Potential, Capacitance, Gauss's Law",
          "Current Electricity: Ohm's Law, Resistance, Power, Kirchhoff's Laws",
          "Magnetism: Magnetic Field, Electromagnetic Induction, AC Circuits",
          "Optics: Ray Optics, Wave Optics, Interference, Diffraction",
          "Modern Physics: Photoelectric Effect, Atomic Structure, Nuclear Physics"
        ],
        chemistry: [
          "Physical Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics, Kinetics",
          "Organic Chemistry: Hydrocarbons, Functional Groups, Reaction Mechanisms, Biomolecules",
          "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds",
          "Environmental Chemistry: Pollution, Green Chemistry, Sustainable Development"
        ],
        mathematics: [
          "Algebra: Complex Numbers, Quadratic Equations, Sequences and Series, Matrices",
          "Calculus: Limits, Continuity, Differentiation, Integration, Differential Equations",
          "Coordinate Geometry: Straight Lines, Circles, Conic Sections, 3D Geometry",
          "Trigonometry: Trigonometric Ratios, Identities, Equations, Inverse Functions",
          "Statistics and Probability: Mean, Median, Mode, Probability, Random Variables",
          "Vectors: Vector Algebra, Scalar and Vector Products, Applications"
        ]
      },
      preparationStrategy: {
        timeline: {
          "1Year": "Intensive preparation with 8-10 hours daily study",
          "2Year": "Balanced approach with 6-8 hours daily study"
        },
        studyMaterials: [
          "NCERT textbooks (Class 11 & 12)",
          "HC Verma (Physics)",
          "RD Sharma (Mathematics)",
          "NCERT Chemistry",
          "Previous Year Question Papers",
          "NTA Abhyas App for mock tests"
        ],
        approach: [
          "Focus on concept clarity over rote learning",
          "Regular practice of numerical problems",
          "Time management during exams",
          "Mock test analysis and improvement",
          "Revision of important formulas and concepts"
        ]
      },
      cutoffsAndCounselling: {
        jeeMain: {
          qualifyingCutoff: "Varies by category (General: ~90+ percentile)",
          admissionCutoff: "Varies by college and branch",
          counselling: "JoSAA conducts centralized counselling for NITs, IIITs, CFTIs"
        },
        jeeAdvanced: {
          cutoff: "Category-wise ranks vary by IIT and branch",
          counselling: "JoSAA counselling for IITs",
          specialRounds: "CSAB counselling for additional rounds"
        }
      },
      participatingColleges: {
        iits: {
          count: 23,
          description: "Indian Institutes of Technology - Premier engineering institutes",
          popularBranches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical"]
        },
        nits: {
          count: 31,
          description: "National Institutes of Technology - Government engineering colleges",
          popularBranches: ["Computer Science", "Electronics", "Mechanical", "Civil"]
        },
        iiits: {
          count: 25,
          description: "Indian Institutes of Information Technology - Focus on IT and related fields",
          popularBranches: ["Computer Science", "Information Technology", "Electronics"]
        },
        cftis: {
          count: "Multiple",
          description: "Centrally Funded Technical Institutions - Government engineering colleges",
          examples: ["IIITs", "NITs", "IITs", "Other CFTIs"]
        }
      },
      trendsAndAnalysis: {
        applicants: "10-12 lakh candidates annually for JEE Main",
        successRate: "Less than 2% reach IITs through JEE Advanced",
        difficultyTrends: [
          "Mathematics: Generally toughest section",
          "Chemistry: Balanced difficulty",
          "Physics: Moderate to high difficulty"
        ],
        careerScope: [
          "Engineering careers in AI, Data Science, Robotics",
          "Traditional engineering: Civil, Mechanical, Electrical",
          "Emerging fields: Computer Science, Information Technology",
          "Research and development opportunities"
        ]
      },
      alternatives: {
        title: "Alternative Engineering Entrance Exams",
        exams: [
          "BITSAT (BITS Pilani)",
          "VITEEE (VIT University)",
          "SRMJEEE (SRM University)",
          "State CETs (Various states)",
          "Private university entrance exams"
        ]
      }
    },
  },
  "jee-advanced": {
    slug: "jee-advanced",
    name: "JEE Advanced",
    shortName: "JEE Adv",
    fullName: "Joint Entrance Examination Advanced",
    conductingBody: "IITs (rotational - IIT Delhi for 2025)",
    frequency: "Once a year",
    level: "National",
    language: "English and Hindi",
    applicationFee: { general: 2900, obc: 2900, sc: 1450, st: 1450, pwd: 1450, currency: "INR" },
    durationMinutes: 360,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 23,
    introduction:
      "JEE Advanced is India's most challenging engineering entrance examination, serving as the gateway to the prestigious Indian Institutes of Technology (IITs). Only the top 2,50,000 JEE Main qualifiers are eligible to appear for JEE Advanced. This exam tests advanced problem-solving skills and deep understanding of concepts in Physics, Chemistry, and Mathematics. Success in JEE Advanced opens doors to world-class engineering education at IITs, which are globally recognized for their excellence in technical education.",
    eligibility: [
      "Must be among top 2,50,000 JEE Main qualifiers (all categories combined)",
      "Age limit: Born on or after October 1, 2000 (relaxation for SC/ST/PwD)",
      "Maximum 2 attempts in consecutive years",
      "Must have passed 10+2 or equivalent in 2023, 2024, or appearing in 2025",
      "Minimum 75% aggregate in 12th (65% for SC/ST/PwD) or be in top 20 percentile",
      "Indian nationals and OCI/PIO candidates eligible",
    ],
    applicationProcedure: [
      "Register on JEE Advanced portal (jeeadv.ac.in) after JEE Main results",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities (up to 3 preferences)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Admit card will be released 1 week before exam",
    ],
    importantDates: [
      { label: "JEE Main Result Declaration", date: "2025-04-25" },
      { label: "JEE Advanced Registration Start", date: "2025-04-30" },
      { label: "JEE Advanced Registration End", date: "2025-05-05" },
      { label: "Admit Card Release", date: "2025-05-20" },
      { label: "JEE Advanced Exam (Paper 1)", date: "2025-05-25 (9:00 AM - 12:00 PM)" },
      { label: "JEE Advanced Exam (Paper 2)", date: "2025-05-25 (2:30 PM - 5:30 PM)" },
      { label: "Answer Key Release", date: "2025-05-26" },
      { label: "Result Declaration", date: "2025-06-09" },
      { label: "JoSAA Counselling Start", date: "2025-06-15" },
    ],
    documentsRequired: [
      "Recent passport-size photograph (JPG/JPEG, 10-200 KB)",
      "Scanned signature (JPG/JPEG, 4-30 KB)",
      "Category certificate (if applicable) - SC/ST/OBC-NCL/EWS",
      "PwD certificate (if applicable)",
      "Photo ID proof (Aadhaar/PAN/Passport/Driving License)",
      "Class 10th and 12th mark sheets",
      "JEE Main scorecard and admit card",
      "Bank account details for fee payment",
    ],
    examPattern: {
      durationMinutes: 360,
      totalMarks: 360,
      negativeMarking: "Varies by question type and paper",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Paper 1", duration: "3 hours", marks: 180, type: "MCQ + Numerical + MSQ" },
        { name: "Paper 2", duration: "3 hours", marks: 180, type: "MCQ + Numerical + MSQ" },
      ],
    },
    syllabus: [
      { 
        section: "Physics", 
        topics: [
          "Mechanics: Kinematics, Dynamics, Work Energy Power, Rotational Motion",
          "Thermodynamics: Heat, Temperature, Laws of Thermodynamics, Kinetic Theory",
          "Waves and Oscillations: Simple Harmonic Motion, Wave Motion, Sound",
          "Electrostatics: Electric Field, Potential, Capacitance, Gauss's Law",
          "Current Electricity: Ohm's Law, Resistance, Power, Kirchhoff's Laws",
          "Magnetism: Magnetic Field, Electromagnetic Induction, AC Circuits",
          "Optics: Ray Optics, Wave Optics, Interference, Diffraction, Polarization",
          "Modern Physics: Photoelectric Effect, Atomic Structure, Nuclear Physics, Semiconductor"
        ] 
      },
      { 
        section: "Chemistry", 
        topics: [
          "Physical Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics, Kinetics",
          "Organic Chemistry: Hydrocarbons, Functional Groups, Reaction Mechanisms, Biomolecules",
          "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds, Metallurgy",
          "Environmental Chemistry: Pollution, Green Chemistry, Sustainable Development",
          "Analytical Chemistry: Qualitative and Quantitative Analysis, Instrumental Methods"
        ] 
      },
      { 
        section: "Mathematics", 
        topics: [
          "Algebra: Complex Numbers, Quadratic Equations, Sequences and Series, Matrices",
          "Calculus: Limits, Continuity, Differentiation, Integration, Differential Equations",
          "Coordinate Geometry: Straight Lines, Circles, Conic Sections, 3D Geometry",
          "Trigonometry: Trigonometric Ratios, Identities, Equations, Inverse Functions",
          "Statistics and Probability: Mean, Median, Mode, Probability, Random Variables",
          "Vectors: Vector Algebra, Scalar and Vector Products, Applications"
        ] 
      },
    ],
    examCentres: { 
      count: 200, 
      centres: [
        "Delhi", "Mumbai", "Chennai", "Kolkata", "Hyderabad", "Bengaluru", "Pune", "Indore", "Jaipur", "Lucknow",
        "Chandigarh", "Bhopal", "Bhubaneswar", "Guwahati", "Patna", "Ranchi", "Raipur", "Dehradun", "Srinagar", "Kochi"
      ] 
    },
    cutoffsAndCounselling: [
      "Cutoffs vary significantly by IIT, category, and branch",
      "General category cutoffs for top IITs: 95+ percentile",
      "JoSAA conducts centralized counselling for all IITs",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Seat matrix and cutoffs published before each round",
      "Multiple rounds of counselling for seat allocation",
    ],
    slotAdmitResults: [
      "No slot booking required; exam city selection during application",
      "Admit card released 1 week before exam with exam center details",
      "Results declared with rank, score, and category-wise cutoffs",
      "Scorecard downloadable from official portal",
      "Answer key available for challenge after exam",
    ],
    contact: { 
      phone: "+91-11-26591785, +91-11-26591786", 
      email: "jeeadv@iitd.ac.in, help@jeeadv.ac.in", 
      address: "IIT Delhi, Hauz Khas, New Delhi - 110016" 
    },
    faqs: [
      { question: "Who is eligible for JEE Advanced?", answer: "Only the top 2,50,000 JEE Main qualifiers (all categories combined) are eligible to appear for JEE Advanced. Additionally, candidates must meet age and academic criteria." },
      { question: "What is the exam pattern for JEE Advanced?", answer: "JEE Advanced consists of two papers, each of 3 hours duration. Both papers are mandatory and contain questions from Physics, Chemistry, and Mathematics." },
      { question: "Is there negative marking in JEE Advanced?", answer: "Yes, there is negative marking in JEE Advanced, but the pattern varies by question type. Details are provided in the information brochure." },
      { question: "How many attempts are allowed for JEE Advanced?", answer: "A candidate can attempt JEE Advanced maximum of two times in consecutive years. The attempts need not be consecutive." },
      { question: "What is the difference between JEE Main and JEE Advanced?", answer: "JEE Main is the qualifying exam for JEE Advanced. JEE Advanced is more challenging and tests advanced problem-solving skills. Only top JEE Main performers can appear for JEE Advanced." },
      { question: "How are the results declared for JEE Advanced?", answer: "Results are declared with All India Rank (AIR), category rank, and subject-wise marks. The results are available on the official website." },
      { question: "What is the counselling process for JEE Advanced?", answer: "JoSAA (Joint Seat Allocation Authority) conducts centralized counselling for all IITs. Candidates need to fill choices and participate in multiple rounds of seat allocation." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://jeeadv.ac.in" },
      { label: "Information Brochure", url: "https://jeeadv.ac.in/information-brochure" },
      { label: "Previous Year Papers", url: "https://jeeadv.ac.in/previous-year-papers" },
      { label: "JoSAA Counselling", url: "https://josaa.nic.in" },
    ],
  },
  neet: {
    slug: "neet",
    name: "NEET",
    shortName: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    conductingBody: "National Testing Agency (NTA)",
    frequency: "Once a year",
    level: "National",
    language: "English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Urdu",
    applicationFee: { general: 1700, obc: 1600, sc: 1000, st: 1000, pwd: 1000, currency: "INR" },
    durationMinutes: 200,
    modeOfApplication: "Online",
    modeOfExam: "Pen-and-paper (OMR)",
    participatingColleges: 600,
    introduction:
      "NEET (National Eligibility cum Entrance Test) is India's single largest medical entrance examination, serving as the unified gateway for admission to MBBS, BDS, BAMS, BHMS, and other medical programs across the country. Conducted by NTA, NEET has replaced all state-level and private medical entrance exams, ensuring a standardized and fair selection process for medical aspirants nationwide. With over 15 lakh candidates appearing annually, NEET is one of the most competitive exams in India.",
    eligibility: [
      "Passed/appearing in 10+2 with Physics, Chemistry, Biology/Biotechnology",
      "Minimum 50% aggregate in PCB (40% for SC/ST/OBC, 45% for PwD)",
      "Age limit: Minimum 17 years, Maximum 25 years (30 years for reserved categories)",
      "Indian nationals, OCI, PIO, and foreign nationals eligible",
      "No limit on number of attempts",
      "Must have studied Biology as a subject in 10+2",
    ],
    applicationProcedure: [
      "Visit neet.nta.nic.in and register with valid email/mobile",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities (up to 4 preferences)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Admit card will be released 1 week before exam",
    ],
    importantDates: [
      { label: "Application Start", date: "2025-02-01" },
      { label: "Application End", date: "2025-03-09" },
      { label: "Correction Window", date: "2025-03-10 to 2025-03-15" },
      { label: "Admit Card Release", date: "2025-04-20" },
      { label: "NEET Exam", date: "2025-05-05 (2:00 PM - 5:20 PM)" },
      { label: "Answer Key Release", date: "2025-05-06" },
      { label: "Result Declaration", date: "2025-06-14" },
      { label: "Counselling Start", date: "2025-07-01" },
    ],
    documentsRequired: [
      "Recent passport-size photograph (JPG/JPEG, 10-200 KB)",
      "Scanned signature (JPG/JPEG, 4-30 KB)",
      "Category certificate (if applicable) - SC/ST/OBC-NCL/EWS",
      "PwD certificate (if applicable)",
      "Photo ID proof (Aadhaar/PAN/Passport/Driving License)",
      "Class 10th and 12th mark sheets",
      "Birth certificate for age proof",
      "Bank account details for fee payment",
    ],
    examPattern: {
      durationMinutes: 200,
      totalMarks: 720,
      negativeMarking: "-1 for incorrect MCQ, 0 for unattempted",
      modeOfExam: "Pen-and-paper (OMR)",
      sections: [
        { name: "Physics", questions: 50, marks: 180, type: "MCQ" },
        { name: "Chemistry", questions: 50, marks: 180, type: "MCQ" },
        { name: "Biology", questions: 100, marks: 360, type: "MCQ" },
      ],
    },
    syllabus: [
      { 
        section: "Physics", 
        topics: [
          "Mechanics: Kinematics, Laws of Motion, Work Energy Power, Rotational Motion",
          "Thermodynamics: Heat, Temperature, Laws of Thermodynamics, Kinetic Theory",
          "Waves and Oscillations: Simple Harmonic Motion, Wave Motion, Sound",
          "Electrostatics: Electric Field, Potential, Capacitance, Gauss's Law",
          "Current Electricity: Ohm's Law, Resistance, Power, Kirchhoff's Laws",
          "Magnetism: Magnetic Field, Electromagnetic Induction, AC Circuits",
          "Optics: Ray Optics, Wave Optics, Interference, Diffraction",
          "Modern Physics: Photoelectric Effect, Atomic Structure, Nuclear Physics"
        ] 
      },
      { 
        section: "Chemistry", 
        topics: [
          "Physical Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics, Kinetics",
          "Organic Chemistry: Hydrocarbons, Functional Groups, Reaction Mechanisms, Biomolecules",
          "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds",
          "Environmental Chemistry: Pollution, Green Chemistry, Sustainable Development",
          "Analytical Chemistry: Qualitative and Quantitative Analysis"
        ] 
      },
      { 
        section: "Biology", 
        topics: [
          "Botany: Plant Kingdom, Morphology, Anatomy, Physiology, Reproduction",
          "Zoology: Animal Kingdom, Human Physiology, Reproduction, Genetics",
          "Cell Biology: Cell Structure, Cell Division, Biomolecules",
          "Ecology: Ecosystem, Biodiversity, Environmental Issues",
          "Biotechnology: Principles and Applications, Genetic Engineering",
          "Evolution: Origin of Life, Darwin's Theory, Human Evolution"
        ] 
      },
    ],
    examCentres: { 
      count: 500, 
      centres: [
        "Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad", "Bengaluru", "Pune", "Ahmedabad", "Chandigarh", "Patna",
        "Jaipur", "Lucknow", "Bhopal", "Indore", "Bhubaneswar", "Guwahati", "Ranchi", "Raipur", "Dehradun", "Srinagar"
      ] 
    },
    cutoffsAndCounselling: [
      "Cutoffs vary significantly by category and state",
      "General category cutoffs for top medical colleges: 600+ marks",
      "MCC conducts centralized counselling for 15% All India Quota seats",
      "State authorities conduct counselling for 85% state quota seats",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Multiple rounds of counselling for seat allocation",
    ],
    slotAdmitResults: [
      "No slot booking required; exam city selection during application",
      "Admit card released 1 week before exam with exam center details",
      "Results declared with score, rank, and category-wise cutoffs",
      "Scorecard downloadable from NTA portal",
      "Answer key available for challenge after exam",
    ],
    contact: { 
      phone: "+91-11-40759000, +91-11-40759001", 
      email: "neet@nta.ac.in, helpdesk@nta.ac.in", 
      address: "National Testing Agency, Plot No. 15, Knowledge Park-III, Greater Noida, Uttar Pradesh - 201310" 
    },
    faqs: [
      { question: "Is NEET mandatory for MBBS admission in India?", answer: "Yes, NEET is mandatory for admission to MBBS, BDS, and other medical courses in India. No medical college can admit students without NEET qualification." },
      { question: "What is the age limit for NEET?", answer: "The minimum age is 17 years and maximum age is 25 years (30 years for reserved categories) as on December 31 of the year of admission." },
      { question: "Is there negative marking in NEET?", answer: "Yes, there is negative marking of -1 mark for each incorrect answer. No marks are deducted for unattempted questions." },
      { question: "How many times can I appear for NEET?", answer: "There is no limit on the number of attempts for NEET. Candidates can appear as many times as they want, provided they meet the age and academic criteria." },
      { question: "What is the exam mode for NEET?", answer: "NEET is conducted in pen-and-paper mode (OMR-based). Candidates need to mark answers on the OMR sheet using a ballpoint pen." },
      { question: "How is the NEET counselling conducted?", answer: "NEET counselling is conducted in two phases: 15% All India Quota counselling by MCC and 85% state quota counselling by respective state authorities." },
      { question: "What documents are required for NEET counselling?", answer: "Documents required include NEET scorecard, 10th and 12th mark sheets, category certificate (if applicable), photo ID proof, and other relevant certificates." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://neet.nta.nic.in" },
      { label: "Information Bulletin", url: "https://neet.nta.nic.in/information-bulletin" },
      { label: "Previous Year Papers", url: "https://neet.nta.nic.in/previous-year-papers" },
      { label: "MCC Counselling", url: "https://mcc.nic.in" },
    ],
  },
  eamcet: {
    slug: "eamcet",
    name: "EAMCET",
    shortName: "EAMCET",
    fullName: "Engineering, Agriculture and Medical Common Entrance Test",
    conductingBody: "Telangana State Council of Higher Education (TSCHE) / Andhra Pradesh State Higher Education Council (APSHE)",
    frequency: "Once a year",
    level: "State",
    language: "English, Telugu, and Urdu",
    applicationFee: { general: 800, obc: 800, sc: 500, st: 500, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 300,
    introduction:
      "EAMCET (Engineering, Agriculture and Medical Common Entrance Test) is a state-level entrance examination conducted by TSCHE for Telangana and APSHE for Andhra Pradesh. It serves as the gateway for admission to Engineering, Agriculture, and Medical courses in both states. EAMCET is one of the most popular state-level entrance exams in South India, with over 2 lakh candidates appearing annually. The exam offers admission to prestigious institutions like JNTU, Osmania University, and other state universities.",
    eligibility: [
      "Passed/appearing in 10+2 with Physics, Chemistry, and Mathematics/Biology",
      "Minimum 45% aggregate in 12th (40% for reserved categories)",
      "Age limit: Minimum 16 years, Maximum 22 years (25 years for reserved categories)",
      "Must be a resident of Telangana/Andhra Pradesh or studied in the state",
      "Indian nationals eligible",
      "No limit on number of attempts",
    ],
    applicationProcedure: [
      "Visit eamcet.tsche.ac.in (Telangana) or eamcet.apsche.ac.in (Andhra Pradesh)",
      "Register with valid email/mobile and create password",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities (up to 3 preferences)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Admit card will be released 1 week before exam",
    ],
    importantDates: [
      { label: "Application Start", date: "2025-02-01" },
      { label: "Application End", date: "2025-03-15" },
      { label: "Correction Window", date: "2025-03-16 to 2025-03-20" },
      { label: "Admit Card Release", date: "2025-05-10" },
      { label: "EAMCET Exam", date: "2025-05-15 (10:00 AM - 1:00 PM)" },
      { label: "Answer Key Release", date: "2025-05-16" },
      { label: "Result Declaration", date: "2025-06-15" },
      { label: "Counselling Start", date: "2025-07-01" },
    ],
    documentsRequired: [
      "Recent passport-size photograph (JPG/JPEG, 10-200 KB)",
      "Scanned signature (JPG/JPEG, 4-30 KB)",
      "Category certificate (if applicable) - SC/ST/OBC",
      "PwD certificate (if applicable)",
      "Photo ID proof (Aadhaar/PAN/Passport/Driving License)",
      "Class 10th and 12th mark sheets",
      "Domicile certificate (if applicable)",
      "Bank account details for fee payment",
    ],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 160,
      negativeMarking: "No negative marking",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Physics", questions: 40, marks: 40, type: "MCQ" },
        { name: "Chemistry", questions: 40, marks: 40, type: "MCQ" },
        { name: "Mathematics", questions: 80, marks: 80, type: "MCQ" },
      ],
    },
    syllabus: [
      { 
        section: "Physics", 
        topics: [
          "Mechanics: Kinematics, Laws of Motion, Work Energy Power, Rotational Motion",
          "Thermodynamics: Heat, Temperature, Laws of Thermodynamics, Kinetic Theory",
          "Waves and Oscillations: Simple Harmonic Motion, Wave Motion, Sound",
          "Electrostatics: Electric Field, Potential, Capacitance, Gauss's Law",
          "Current Electricity: Ohm's Law, Resistance, Power, Kirchhoff's Laws",
          "Magnetism: Magnetic Field, Electromagnetic Induction, AC Circuits",
          "Optics: Ray Optics, Wave Optics, Interference, Diffraction",
          "Modern Physics: Photoelectric Effect, Atomic Structure, Nuclear Physics"
        ] 
      },
      { 
        section: "Chemistry", 
        topics: [
          "Physical Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics, Kinetics",
          "Organic Chemistry: Hydrocarbons, Functional Groups, Reaction Mechanisms, Biomolecules",
          "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds",
          "Environmental Chemistry: Pollution, Green Chemistry, Sustainable Development",
          "Analytical Chemistry: Qualitative and Quantitative Analysis"
        ] 
      },
      { 
        section: "Mathematics", 
        topics: [
          "Algebra: Complex Numbers, Quadratic Equations, Sequences and Series, Matrices",
          "Calculus: Limits, Continuity, Differentiation, Integration, Differential Equations",
          "Coordinate Geometry: Straight Lines, Circles, Conic Sections, 3D Geometry",
          "Trigonometry: Trigonometric Ratios, Identities, Equations, Inverse Functions",
          "Statistics and Probability: Mean, Median, Mode, Probability, Random Variables",
          "Vectors: Vector Algebra, Scalar and Vector Products, Applications"
        ] 
      },
    ],
    examCentres: { 
      count: 100, 
      centres: [
        "Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Vijayawada", "Guntur", "Visakhapatnam", "Tirupati", "Kurnool", "Anantapur",
        "Khammam", "Nalgonda", "Mahabubnagar", "Adilabad", "Nellore", "Kadapa", "Chittoor", "Prakasam", "Srikakulam", "Vizianagaram"
      ] 
    },
    cutoffsAndCounselling: [
      "Cutoffs vary significantly by branch, category, and college",
      "General category cutoffs for top engineering colleges: 90+ marks",
      "TSCHE/APSHE conducts centralized counselling for all participating colleges",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Multiple rounds of counselling for seat allocation",
      "Seat matrix and cutoffs published before each round",
    ],
    slotAdmitResults: [
      "No slot booking required; exam city selection during application",
      "Admit card released 1 week before exam with exam center details",
      "Results declared with score, rank, and category-wise cutoffs",
      "Scorecard downloadable from official portal",
      "Answer key available for challenge after exam",
    ],
    contact: { 
      phone: "+91-40-23120301, +91-40-23120302", 
      email: "support@eamcet.tsche.ac.in, help@eamcet.apsche.ac.in", 
      address: "TSCHE, Hyderabad - 500001 / APSHE, Vijayawada - 520010" 
    },
    faqs: [
      { question: "Is there negative marking in EAMCET?", answer: "No, there is no negative marking in EAMCET. Candidates are not penalized for incorrect answers." },
      { question: "What is the eligibility criteria for EAMCET?", answer: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics/Biology with minimum 45% aggregate (40% for reserved categories)." },
      { question: "How many times can I appear for EAMCET?", answer: "There is no limit on the number of attempts for EAMCET. Candidates can appear as many times as they want, provided they meet the age and academic criteria." },
      { question: "What is the exam mode for EAMCET?", answer: "EAMCET is conducted in Computer-Based Test (CBT) mode. All questions are displayed on computer screens and answered using mouse and keyboard." },
      { question: "How is the EAMCET counselling conducted?", answer: "EAMCET counselling is conducted by TSCHE for Telangana and APSHE for Andhra Pradesh. It includes choice filling, seat allocation, and document verification." },
      { question: "What documents are required for EAMCET counselling?", answer: "Documents required include EAMCET scorecard, 10th and 12th mark sheets, category certificate (if applicable), photo ID proof, and domicile certificate." },
      { question: "Can I apply for both Telangana and Andhra Pradesh EAMCET?", answer: "No, candidates can apply for either Telangana EAMCET or Andhra Pradesh EAMCET, not both. The choice depends on the state of residence or study." },
    ],
    officialLinks: [
      { label: "Official Website (Telangana)", url: "https://eamcet.tsche.ac.in" },
      { label: "Official Website (Andhra Pradesh)", url: "https://eamcet.apsche.ac.in" },
      { label: "Information Bulletin", url: "https://eamcet.tsche.ac.in/information-bulletin" },
      { label: "Previous Year Papers", url: "https://eamcet.tsche.ac.in/previous-year-papers" },
    ],
  },
  bitsat: {
    slug: "bitsat",
    name: "BITSAT",
    shortName: "BITSAT",
    fullName: "BITS Admission Test",
    conductingBody: "Birla Institute of Technology and Science (BITS Pilani)",
    frequency: "Once a year",
    level: "University",
    language: "English",
    applicationFee: { general: 3400, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 3,
    introduction:
      "BITSAT (BITS Admission Test) is a university-level entrance examination conducted by BITS Pilani for admission to its prestigious campuses at Pilani, Goa, and Hyderabad. BITS Pilani is one of India's most renowned private technical universities, known for its excellent academic standards and industry-relevant curriculum. BITSAT offers admission to various B.Tech programs and is known for its unique features like slot booking, flexible exam dates, and comprehensive evaluation process.",
    eligibility: [
      "Passed/appearing in 10+2 with Physics, Chemistry, and Mathematics",
      "Minimum 75% aggregate in 12th (60% for reserved categories)",
      "Age limit: Minimum 17 years, Maximum 25 years",
      "Indian nationals and foreign nationals eligible",
      "No limit on number of attempts",
      "Must have studied English as a subject in 10+2",
    ],
    applicationProcedure: [
      "Visit bitsadmission.com and register with valid email/mobile",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities (up to 3 preferences)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Book exam slot within the specified window",
      "Admit card will be released after slot booking",
    ],
    importantDates: [
      { label: "Application Start", date: "2025-01-15" },
      { label: "Application End", date: "2025-04-11" },
      { label: "Slot Booking Start", date: "2025-04-15" },
      { label: "Slot Booking End", date: "2025-04-20" },
      { label: "BITSAT Exam", date: "2025-05-21 to 2025-05-25" },
      { label: "Result Declaration", date: "2025-06-15" },
      { label: "Counselling Start", date: "2025-07-01" },
    ],
    documentsRequired: [
      "Recent passport-size photograph (JPG/JPEG, 10-200 KB)",
      "Scanned signature (JPG/JPEG, 4-30 KB)",
      "Category certificate (if applicable) - SC/ST/OBC",
      "PwD certificate (if applicable)",
      "Photo ID proof (Aadhaar/PAN/Passport/Driving License)",
      "Class 10th and 12th mark sheets",
      "English proficiency certificate (if applicable)",
      "Bank account details for fee payment",
    ],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 390,
      negativeMarking: "-1 for incorrect MCQ, 0 for unattempted",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Physics", questions: 40, marks: 120, type: "MCQ" },
        { name: "Chemistry", questions: 40, marks: 120, type: "MCQ" },
        { name: "Mathematics", questions: 40, marks: 120, type: "MCQ" },
        { name: "English Proficiency", questions: 15, marks: 15, type: "MCQ" },
        { name: "Logical Reasoning", questions: 10, marks: 15, type: "MCQ" },
      ],
    },
    syllabus: [
      { 
        section: "Physics", 
        topics: [
          "Mechanics: Kinematics, Laws of Motion, Work Energy Power, Rotational Motion",
          "Thermodynamics: Heat, Temperature, Laws of Thermodynamics, Kinetic Theory",
          "Waves and Oscillations: Simple Harmonic Motion, Wave Motion, Sound",
          "Electrostatics: Electric Field, Potential, Capacitance, Gauss's Law",
          "Current Electricity: Ohm's Law, Resistance, Power, Kirchhoff's Laws",
          "Magnetism: Magnetic Field, Electromagnetic Induction, AC Circuits",
          "Optics: Ray Optics, Wave Optics, Interference, Diffraction",
          "Modern Physics: Photoelectric Effect, Atomic Structure, Nuclear Physics"
        ] 
      },
      { 
        section: "Chemistry", 
        topics: [
          "Physical Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics, Kinetics",
          "Organic Chemistry: Hydrocarbons, Functional Groups, Reaction Mechanisms, Biomolecules",
          "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds",
          "Environmental Chemistry: Pollution, Green Chemistry, Sustainable Development",
          "Analytical Chemistry: Qualitative and Quantitative Analysis"
        ] 
      },
      { 
        section: "Mathematics", 
        topics: [
          "Algebra: Complex Numbers, Quadratic Equations, Sequences and Series, Matrices",
          "Calculus: Limits, Continuity, Differentiation, Integration, Differential Equations",
          "Coordinate Geometry: Straight Lines, Circles, Conic Sections, 3D Geometry",
          "Trigonometry: Trigonometric Ratios, Identities, Equations, Inverse Functions",
          "Statistics and Probability: Mean, Median, Mode, Probability, Random Variables",
          "Vectors: Vector Algebra, Scalar and Vector Products, Applications"
        ] 
      },
      { 
        section: "English Proficiency", 
        topics: [
          "Grammar: Tenses, Articles, Prepositions, Conjunctions",
          "Vocabulary: Synonyms, Antonyms, Word Meanings",
          "Reading Comprehension: Passages, Questions, Inference",
          "Sentence Completion: Fill in the blanks, Sentence structure"
        ] 
      },
      { 
        section: "Logical Reasoning", 
        topics: [
          "Verbal Reasoning: Analogies, Classification, Series",
          "Non-Verbal Reasoning: Patterns, Figures, Spatial reasoning",
          "Logical Puzzles: Syllogisms, Logical deductions",
          "Critical Thinking: Argument analysis, Assumption identification"
        ] 
      },
    ],
    examCentres: { 
      count: 60, 
      centres: [
        "Pilani", "Goa", "Hyderabad", "Delhi", "Mumbai", "Kolkata", "Chennai", "Bengaluru", "Pune", "Ahmedabad",
        "Jaipur", "Lucknow", "Chandigarh", "Bhopal", "Indore", "Bhubaneswar", "Guwahati", "Patna", "Ranchi", "Raipur"
      ] 
    },
    cutoffsAndCounselling: [
      "Cutoffs vary significantly by campus, branch, and category",
      "General category cutoffs for top branches: 300+ marks",
      "BITS conducts centralized counselling for all campuses",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Multiple rounds of counselling for seat allocation",
      "Seat matrix and cutoffs published before each round",
    ],
    slotAdmitResults: [
      "Slot booking mandatory; candidates must book exam slot within the window",
      "Admit card released after successful slot booking",
      "Results declared with score, rank, and category-wise cutoffs",
      "Scorecard downloadable from official portal",
      "Answer key available for challenge after exam",
    ],
    contact: { 
      phone: "+91-1596-242210, +91-1596-242211", 
      email: "admissions@bits-pilani.ac.in, help@bits-pilani.ac.in", 
      address: "BITS Pilani, Pilani, Rajasthan - 333031" 
    },
    faqs: [
      { question: "Is slot booking mandatory for BITSAT?", answer: "Yes, slot booking is mandatory for BITSAT. Candidates must book their exam slot within the specified window to appear for the exam." },
      { question: "What is the eligibility criteria for BITSAT?", answer: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with minimum 75% aggregate (60% for reserved categories)." },
      { question: "How many times can I appear for BITSAT?", answer: "There is no limit on the number of attempts for BITSAT. Candidates can appear as many times as they want, provided they meet the age and academic criteria." },
      { question: "What is the exam mode for BITSAT?", answer: "BITSAT is conducted in Computer-Based Test (CBT) mode. All questions are displayed on computer screens and answered using mouse and keyboard." },
      { question: "How is the BITSAT counselling conducted?", answer: "BITSAT counselling is conducted by BITS Pilani for all campuses. It includes choice filling, seat allocation, and document verification." },
      { question: "What documents are required for BITSAT counselling?", answer: "Documents required include BITSAT scorecard, 10th and 12th mark sheets, category certificate (if applicable), photo ID proof, and English proficiency certificate." },
      { question: "Can I choose my exam date for BITSAT?", answer: "Yes, BITSAT offers slot booking where candidates can choose their preferred exam date and time from the available slots." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://bitsadmission.com" },
      { label: "Information Bulletin", url: "https://bitsadmission.com/information-bulletin" },
      { label: "Previous Year Papers", url: "https://bitsadmission.com/previous-year-papers" },
      { label: "Slot Booking", url: "https://bitsadmission.com/slot-booking" },
    ],
  },
  viteee: {
    slug: "viteee",
    name: "VITEEE",
    shortName: "VITEEE",
    fullName: "VIT Engineering Entrance Examination",
    conductingBody: "Vellore Institute of Technology (VIT)",
    frequency: "Once a year",
    level: "University",
    language: "English",
    applicationFee: { general: 1350, currency: "INR" },
    durationMinutes: 150,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 4,
    introduction:
      "VITEEE (VIT Engineering Entrance Examination) is a university-level entrance examination conducted by VIT for admission to its prestigious B.Tech programs at Vellore, Chennai, Amaravati, and Bhopal campuses. VIT is one of India's leading private technical universities, known for its excellent academic standards, industry partnerships, and global recognition. VITEEE offers admission to various engineering disciplines and is known for its comprehensive evaluation process and merit-based admissions.",
    eligibility: [
      "Passed/appearing in 10+2 with Physics, Chemistry, and Mathematics/Biology",
      "Minimum 60% aggregate in 12th (50% for reserved categories)",
      "Age limit: Minimum 17 years, Maximum 25 years",
      "Indian nationals and foreign nationals eligible",
      "No limit on number of attempts",
      "Must have studied English as a subject in 10+2",
    ],
    applicationProcedure: [
      "Visit viteee.vit.ac.in and register with valid email/mobile",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities (up to 3 preferences)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Book exam slot within the specified window",
      "Admit card will be released after slot booking",
    ],
    importantDates: [
      { label: "Application Start", date: "2025-01-10" },
      { label: "Application End", date: "2025-03-31" },
      { label: "Slot Booking Start", date: "2025-04-01" },
      { label: "Slot Booking End", date: "2025-04-10" },
      { label: "VITEEE Exam", date: "2025-04-18 to 2025-04-22" },
      { label: "Result Declaration", date: "2025-05-02" },
      { label: "Counselling Start", date: "2025-05-15" },
    ],
    documentsRequired: [
      "Recent passport-size photograph (JPG/JPEG, 10-200 KB)",
      "Scanned signature (JPG/JPEG, 4-30 KB)",
      "Category certificate (if applicable) - SC/ST/OBC",
      "PwD certificate (if applicable)",
      "Photo ID proof (Aadhaar/PAN/Passport/Driving License)",
      "Class 10th and 12th mark sheets",
      "English proficiency certificate (if applicable)",
      "Bank account details for fee payment",
    ],
    examPattern: {
      durationMinutes: 150,
      totalMarks: 125,
      negativeMarking: "-1 for incorrect MCQ, 0 for unattempted",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Mathematics/Biology", questions: 40, marks: 40, type: "MCQ" },
        { name: "Physics", questions: 35, marks: 35, type: "MCQ" },
        { name: "Chemistry", questions: 35, marks: 35, type: "MCQ" },
        { name: "Aptitude", questions: 10, marks: 10, type: "MCQ" },
        { name: "English", questions: 5, marks: 5, type: "MCQ" },
      ],
    },
    syllabus: [
      { 
        section: "Mathematics", 
        topics: [
          "Algebra: Complex Numbers, Quadratic Equations, Sequences and Series, Matrices",
          "Calculus: Limits, Continuity, Differentiation, Integration, Differential Equations",
          "Coordinate Geometry: Straight Lines, Circles, Conic Sections, 3D Geometry",
          "Trigonometry: Trigonometric Ratios, Identities, Equations, Inverse Functions",
          "Statistics and Probability: Mean, Median, Mode, Probability, Random Variables",
          "Vectors: Vector Algebra, Scalar and Vector Products, Applications"
        ] 
      },
      { 
        section: "Biology", 
        topics: [
          "Botany: Plant Kingdom, Morphology, Anatomy, Physiology, Reproduction",
          "Zoology: Animal Kingdom, Human Physiology, Reproduction, Genetics",
          "Cell Biology: Cell Structure, Cell Division, Biomolecules",
          "Ecology: Ecosystem, Biodiversity, Environmental Issues",
          "Biotechnology: Principles and Applications, Genetic Engineering",
          "Evolution: Origin of Life, Darwin's Theory, Human Evolution"
        ] 
      },
      { 
        section: "Physics", 
        topics: [
          "Mechanics: Kinematics, Laws of Motion, Work Energy Power, Rotational Motion",
          "Thermodynamics: Heat, Temperature, Laws of Thermodynamics, Kinetic Theory",
          "Waves and Oscillations: Simple Harmonic Motion, Wave Motion, Sound",
          "Electrostatics: Electric Field, Potential, Capacitance, Gauss's Law",
          "Current Electricity: Ohm's Law, Resistance, Power, Kirchhoff's Laws",
          "Magnetism: Magnetic Field, Electromagnetic Induction, AC Circuits",
          "Optics: Ray Optics, Wave Optics, Interference, Diffraction",
          "Modern Physics: Photoelectric Effect, Atomic Structure, Nuclear Physics"
        ] 
      },
      { 
        section: "Chemistry", 
        topics: [
          "Physical Chemistry: Atomic Structure, Chemical Bonding, Thermodynamics, Kinetics",
          "Organic Chemistry: Hydrocarbons, Functional Groups, Reaction Mechanisms, Biomolecules",
          "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds",
          "Environmental Chemistry: Pollution, Green Chemistry, Sustainable Development",
          "Analytical Chemistry: Qualitative and Quantitative Analysis"
        ] 
      },
      { 
        section: "Aptitude", 
        topics: [
          "Verbal Reasoning: Analogies, Classification, Series, Syllogisms",
          "Non-Verbal Reasoning: Patterns, Figures, Spatial reasoning",
          "Logical Puzzles: Logical deductions, Critical thinking",
          "Quantitative Aptitude: Number systems, Arithmetic, Geometry"
        ] 
      },
      { 
        section: "English", 
        topics: [
          "Grammar: Tenses, Articles, Prepositions, Conjunctions",
          "Vocabulary: Synonyms, Antonyms, Word Meanings",
          "Reading Comprehension: Passages, Questions, Inference",
          "Sentence Completion: Fill in the blanks, Sentence structure"
        ] 
      },
    ],
    examCentres: { 
      count: 120, 
      centres: [
        "Vellore", "Chennai", "Bengaluru", "Hyderabad", "Mumbai", "Kolkata", "Delhi", "Bhopal", "Jaipur", "Lucknow",
        "Pune", "Ahmedabad", "Chandigarh", "Bhopal", "Indore", "Bhubaneswar", "Guwahati", "Patna", "Ranchi", "Raipur"
      ] 
    },
    cutoffsAndCounselling: [
      "Cutoffs vary significantly by campus, branch, and category",
      "General category cutoffs for top branches: 100+ marks",
      "VIT conducts centralized counselling for all campuses",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Multiple rounds of counselling for seat allocation",
      "Seat matrix and cutoffs published before each round",
    ],
    slotAdmitResults: [
      "Slot booking mandatory; candidates must book exam slot within the window",
      "Admit card released after successful slot booking",
      "Results declared with score, rank, and category-wise cutoffs",
      "Scorecard downloadable from official portal",
      "Answer key available for challenge after exam",
    ],
    contact: { 
      phone: "+91-416-2202155, +91-416-2202156", 
      email: "ugadmission@vit.ac.in, help@vit.ac.in", 
      address: "VIT Vellore, Vellore, Tamil Nadu - 632014" 
    },
    faqs: [
      { question: "Is Mathematics mandatory for VITEEE?", answer: "Mathematics is required for most B.Tech programs. Biology candidates have limited options and can only apply for Biotechnology and related programs." },
      { question: "What is the eligibility criteria for VITEEE?", answer: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics/Biology with minimum 60% aggregate (50% for reserved categories)." },
      { question: "How many times can I appear for VITEEE?", answer: "There is no limit on the number of attempts for VITEEE. Candidates can appear as many times as they want, provided they meet the age and academic criteria." },
      { question: "What is the exam mode for VITEEE?", answer: "VITEEE is conducted in Computer-Based Test (CBT) mode. All questions are displayed on computer screens and answered using mouse and keyboard." },
      { question: "How is the VITEEE counselling conducted?", answer: "VITEEE counselling is conducted by VIT for all campuses. It includes choice filling, seat allocation, and document verification." },
      { question: "What documents are required for VITEEE counselling?", answer: "Documents required include VITEEE scorecard, 10th and 12th mark sheets, category certificate (if applicable), photo ID proof, and English proficiency certificate." },
      { question: "Can I choose my exam date for VITEEE?", answer: "Yes, VITEEE offers slot booking where candidates can choose their preferred exam date and time from the available slots." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://viteee.vit.ac.in" },
      { label: "Information Bulletin", url: "https://viteee.vit.ac.in/information-bulletin" },
      { label: "Previous Year Papers", url: "https://viteee.vit.ac.in/previous-year-papers" },
      { label: "Slot Booking", url: "https://viteee.vit.ac.in/slot-booking" },
    ],
  },
};


