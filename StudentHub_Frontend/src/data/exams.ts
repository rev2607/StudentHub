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
    name: "TS EAMCET",
    shortIntro:
      "State-level exam for Engineering, Agriculture admissions in Telangana.",
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
  {
    slug: "ap-eamcet",
    name: "AP EAMCET",
    shortIntro:
      "Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test for state admissions.",
  },
  {
    slug: "kcet",
    name: "KCET",
    shortIntro:
      "Karnataka Common Entrance Test for Engineering, Medical, and other professional courses.",
  },
  {
    slug: "keam",
    name: "KEAM",
    shortIntro:
      "Kerala Engineering Architecture Medical entrance exam for state admissions.",
  },
  {
    slug: "clat",
    name: "CLAT",
    shortIntro:
      "Common Law Admission Test for admission to National Law Universities.",
  },
  {
    slug: "ailet",
    name: "AILET",
    shortIntro:
      "All India Law Entrance Test for admission to National Law University Delhi.",
  },
  {
    slug: "icar-aieea-ug",
    name: "ICAR AIEEA UG",
    shortIntro:
      "ICAR All India Entrance Examination for admission to agricultural universities.",
  },
  {
    slug: "lsat-india",
    name: "LSAT India",
    shortIntro:
      "Law School Admission Test for admission to law schools in India.",
  },
  {
    slug: "slat",
    name: "SLAT",
    shortIntro:
      "Symbiosis Law Admission Test for admission to Symbiosis Law Schools.",
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
      "JEE Main 2026: NTA will release the JEE Main application form 2026 in October 2025. The JEE Main 2026 exam serves as the gateway to premier engineering institutions across India. This computer-based test features B.E./B.Tech papers lasting approximately 3 hours and carrying 300 marks (100 per section). The exam includes multiple-choice and numerical questions. Admissions follow through JoSAA seat matrix and seat allotment process based on JEE Main results. Read more at: https://engineering.careers360.com/exams/jee-main",
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
      { label: "JEE Main 2026 Application Form Release", date: "October 2026" },
      { label: "JEE Main 2026 Session 1", date: "January 2026" },
      { label: "JEE Main 2026 Session 2", date: "April 2026" },
      { label: "Registration Windows", date: "As per NTA schedule" },
      { label: "Response Sheet/Answer Key", date: "Posted on CollegeDunia" },
      { label: "JoSAA Seat Matrix", date: "Following JEE Main results" },
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
      negativeMarking: "As per NTA guidelines",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Physics", questions: 30, marks: 100, type: "MCQ + Numerical (2025 changes)" },
        { name: "Chemistry", questions: 30, marks: 100, type: "MCQ + Numerical (2025 changes)" },
        { name: "Mathematics", questions: 30, marks: 100, type: "MCQ + Numerical (2025 changes)" },
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
        year: "2026",
        session2Dates: "April 1-8, 2026",
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
    conductingBody: "IIT Roorkee (for 2026)",
    frequency: "Once a year",
    level: "National",
    language: "English and Hindi",
    applicationFee: { general: 2900, obc: 2900, sc: 1450, st: 1450, pwd: 1450, currency: "INR" },
    durationMinutes: 360,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 23,
    introduction:
      "JEE Advanced 2026: IIT Roorkee will conduct JEE Advanced 2026 tentatively in May 2026 (May 17 or May 24, 2026). Registration is expected to open in April-May 2026. The exam consists of two papers (Paper-1 & Paper-2), each lasting 3 hours in computer-based mode. Total of around 108 questions (54 per paper) with mixed question types including single-correct MCQs, multiple answer MCQs, numerical value/integer type, matching, etc. Only top 2,50,000 JEE Main qualifiers are eligible. AAT (Architecture Aptitude Test) will be conducted separately for B.Arch admissions. Results expected in June 2026 followed by JoSAA counselling.",
    eligibility: [
      "Must be among top 2,50,000 JEE Main qualifiers (all categories combined)",
      "Age limit: Born on or after October 1, 2001 (relaxation for SC/ST/PwD)",
      "Maximum 2 attempts in consecutive years",
      "Must have passed 10+2 or equivalent in 2024, 2025, or appearing in 2026",
      "Minimum 75% aggregate in 12th (65% for SC/ST/PwD) or be in top 20 percentile",
      "Indian nationals and OCI/PIO candidates eligible",
      "For Architecture (B.Arch) admissions, qualified candidates need to appear for AAT",
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
      { label: "JEE Advanced 2026 Notification", date: "December 2025 or early 2026" },
      { label: "Registration Opens", date: "April - early May 2026" },
      { label: "JEE Advanced 2026 Exam", date: "May 17 or May 24, 2026 (tentative)" },
      { label: "Admit Card Release", date: "May 2026 (few days before exam)" },
      { label: "Answer Key Release", date: "Late May / early June 2026" },
      { label: "Result Declaration", date: "June 2026" },
      { label: "AAT (Architecture Aptitude Test)", date: "After JEE Advanced results" },
      { label: "JoSAA Counselling", date: "June 2026 onwards" },
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
        { name: "Paper 1", duration: "3 hours", marks: 180, type: "MCQ + Numerical + MSQ + Matching", questions: 54 },
        { name: "Paper 2", duration: "3 hours", marks: 180, type: "MCQ + Numerical + MSQ + Matching", questions: 54 },
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
      "Reservation: ~10% for GEN-EWS, 27% for OBC-NCL, 15% for SC, 7.5% for ST",
      "Horizontal PwD reservations within each category",
      "JoSAA conducts centralized counselling for all IITs",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Seat matrix and cutoffs published before each round",
      "Multiple rounds of counselling for seat allocation",
      "Results expected in June 2026 followed by JoSAA counselling",
    ],
    slotAdmitResults: [
      "No slot booking required; exam city selection during application",
      "Admit card released in May 2026 (few days before exam)",
      "Results declared in June 2026 with rank, score, and category-wise cutoffs",
      "Scorecard downloadable from official portal",
      "Answer key available for challenge after exam",
      "Response sheets and provisional answer keys released after exam",
      "Objection window followed by final answer key and result",
    ],
    contact: { 
      phone: "To be announced by IIT Roorkee", 
      email: "To be announced by IIT Roorkee", 
      address: "IIT Roorkee, Roorkee, Uttarakhand - 247667" 
    },
    faqs: [
      { question: "Who is eligible for JEE Advanced?", answer: "Only the top 2,50,000 JEE Main qualifiers (all categories combined) are eligible to appear for JEE Advanced. Additionally, candidates must meet age and academic criteria." },
      { question: "What is the exam pattern for JEE Advanced 2026?", answer: "JEE Advanced 2026 consists of two papers, each of 3 hours duration in computer-based mode. Total of around 108 questions (54 per paper) with mixed question types including single-correct MCQs, multiple answer MCQs, numerical value/integer type, matching, etc." },
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
      "NEET (UG) is conducted by NTA. NEET 2025 was conducted on May 4, 2025 in a single shift. The exam pattern consists of 180 MCQs covering Physics, Chemistry, and Biology with a paper duration of 3 hours. Marking scheme and subject-wise breakdown are available on NEET pages. Cutoffs and qualifying marks summaries are also posted. Answer keys, question paper PDFs, and paper analysis are available on CollegeDunia.",
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
      { label: "NEET 2025 Exam", date: "May 4, 2025" },
      { label: "Single Shift", date: "As per NTA schedule" },
      { label: "Answer Keys", date: "Available on CollegeDunia" },
      { label: "Question Paper PDFs", date: "Available on CollegeDunia" },
      { label: "Paper Analysis", date: "Available on CollegeDunia" },
      { label: "Qualifying Marks", date: "Posted on CollegeDunia" },
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
    name: "TS EAMCET",
    shortName: "TS EAMCET",
    fullName: "Telangana State Engineering, Agriculture and Medical Common Entrance Test",
    conductingBody: "Telangana State Council of Higher Education (TSCHE)",
    frequency: "Once a year",
    level: "State",
    language: "English, Telugu, and Urdu",
    applicationFee: { general: 800, obc: 800, sc: 500, st: 500, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 300,
    introduction:
      "TS EAMCET 2026: TS EAMCET (Telangana State Engineering, Agriculture & Medical Common Entrance Test) is conducted by TSCHE (Telangana State Council of Higher Education) for admissions to undergraduate engineering, agriculture, pharmacy, and allied courses in Telangana state. The exam is computer-based (CBT) with 160 questions over 3 hours, covering Mathematics (80), Physics (40), and Chemistry (40) for Engineering stream. No negative marking applies. The exam is conducted in English and Telugu languages.",
    eligibility: [
      "Indian citizens (OCI/PIO may also be considered as per rules)",
      "Telangana domicile required (local/non-local status rules apply)",
      "Minimum age: 16 years for Engineering/Pharmacy, 17 years for Agriculture/Medical",
      "Maximum age: No upper limit for general (or 22 years), up to 25 years for SC/ST",
      "10+2 with required subjects: Physics, Chemistry, Mathematics for Engineering",
      "Minimum 45% aggregate in 10+2 (40% for reserved categories)",
      "Candidates appearing in 10+2 in 2026 may apply provisionally",
      "Diploma candidates may be eligible for lateral entry (check notification)",
    ],
    applicationProcedure: [
      "Visit official TS EAMCET portal (eamcet.tsche.ac.in)",
      "Register with valid email/mobile and create password",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities and stream (Engineering/Agriculture/Pharmacy)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Use correction window for any required changes",
      "Download admit card from official TS EAMCET portal",
    ],
    importantDates: [
      { label: "TS EAMCET 2026 Notification", date: "1st/2nd week of March 2026" },
      { label: "Application Start", date: "2nd week of March 2026" },
      { label: "Last Date to Apply", date: "April 24, 2026 (approx)" },
      { label: "Late Fee Period", date: "Early to mid May 2026" },
      { label: "Application Correction", date: "First week of May 2026" },
      { label: "Admit Card Release", date: "2nd week of May 2026" },
      { label: "Agriculture/Pharmacy Exam", date: "May 19-20, 2026 (tentative)" },
      { label: "Engineering Exam", date: "May 21-27, 2026 (tentative)" },
      { label: "Answer Key Release", date: "May 27-28, 2026" },
      { label: "Result Declaration", date: "June 8, 2026 (approx)" },
      { label: "Counselling", date: "July 2026 onward" },
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
      "BITSAT 2026: BITS Pilani will announce the BITSAT 2026 registration dates on the official website. The exam is an online CBT with approximately 130 MCQs in 3 hours covering physics, chemistry, english, logical reasoning, and math/biology. The marking scheme includes +3/-1 with bonus questions format. Paper analyses and day-wise updates are available on CollegeDunia.",
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
      { label: "BITSAT 2026 Registration Dates", date: "To be announced on official website" },
      { label: "BITSAT 2026 Session 1", date: "Tentative: May 2026" },
      { label: "BITSAT 2026 Session 2", date: "Tentative: June 2026" },
      { label: "Online CBT", date: "~130 MCQs in 3 hours" },
      { label: "Marking Scheme", date: "+3/-1 with bonus questions" },
      { label: "Paper Analysis", date: "Available on CollegeDunia" },
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
      "VITEEE 2025 - VIT Vellore will soon announce the VITEEE 2026 notification on the official website. VITEEE is conducted by VIT (Vellore) as a CBT lasting approximately 2.5 hours with 125 MCQs covering Physics, Chemistry, Maths/Biology, English, and Aptitude/Reasoning. Results, slot analysis, and rank/cutoff categories are available on CollegeDunia. Read more at: https://engineering.careers360.com/exams/viteee",
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
      { label: "VITEEE 2026 Notification", date: "To be announced on official website" },
      { label: "VITEEE 2026 Registration", date: "Tentative: November 2025" },
      { label: "VITEEE 2026 Exam", date: "Tentative: April 2026" },
      { label: "CBT Duration", date: "~2.5 hours, 125 MCQs" },
      { label: "Results & Slot Analysis", date: "Available on CollegeDunia" },
      { label: "Rank/Cutoff Categories", date: "Available on CollegeDunia" },
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
  "ap-eamcet": {
    slug: "ap-eamcet",
    name: "AP EAMCET",
    shortName: "AP EAMCET",
    fullName: "Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test",
    conductingBody: "Andhra Pradesh State Council of Higher Education (APSCHE)",
    frequency: "Once a year",
    level: "State",
    language: "English, Telugu, and Urdu",
    applicationFee: { general: 800, obc: 800, sc: 500, st: 500, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 200,
    introduction: "AP EAMCET 2026: Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test is conducted by APSCHE for admissions to undergraduate engineering, agriculture, pharmacy, and allied courses in Andhra Pradesh state. The exam is computer-based (CBT) with 160 questions over 3 hours, covering Mathematics (80), Physics (40), and Chemistry (40) for Engineering stream. No negative marking applies.",
    eligibility: [
      "Indian citizens (OCI/PIO may also be considered as per rules)",
      "Andhra Pradesh domicile required (local/non-local status rules apply)",
      "Minimum age: 16 years for Engineering/Pharmacy, 17 years for Agriculture/Medical",
      "Maximum age: No upper limit for general (or 22 years), up to 25 years for SC/ST",
      "10+2 with required subjects: Physics, Chemistry, Mathematics for Engineering",
      "Minimum 45% aggregate in 10+2 (40% for reserved categories)",
      "Candidates appearing in 10+2 in 2026 may apply provisionally",
    ],
    applicationProcedure: [
      "Visit official AP EAMCET portal (cets.apsche.ap.gov.in)",
      "Register with valid email/mobile and create password",
      "Fill detailed application form with personal and academic details",
      "Upload scanned documents (photo, signature, certificates)",
      "Select exam cities and stream (Engineering/Agriculture/Pharmacy)",
      "Pay application fee online (credit/debit card, net banking, UPI)",
      "Download confirmation page and keep for future reference",
      "Use correction window for any required changes",
      "Download admit card from official AP EAMCET portal",
    ],
    importantDates: [
      { label: "AP EAMCET 2026 Notification", date: "1st/2nd week of March 2026" },
      { label: "Application Start", date: "2nd week of March 2026" },
      { label: "Last Date to Apply", date: "April 24, 2026 (approx)" },
      { label: "Late Fee Period", date: "Early to mid May 2026" },
      { label: "Application Correction", date: "First week of May 2026" },
      { label: "Admit Card Release", date: "2nd week of May 2026" },
      { label: "Agriculture/Pharmacy Exam", date: "May 19-20, 2026 (tentative)" },
      { label: "Engineering Exam", date: "May 21-27, 2026 (tentative)" },
      { label: "Answer Key Release", date: "May 27-28, 2026" },
      { label: "Result Declaration", date: "June 8, 2026 (approx)" },
      { label: "Counselling", date: "July 2026 onward" },
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
          "Algebra: Quadratic Equations, Progressions, Permutations and Combinations",
          "Trigonometry: Trigonometric Ratios, Identities, Equations",
          "Coordinate Geometry: Straight Lines, Circles, Conic Sections",
          "Calculus: Limits, Derivatives, Integration, Differential Equations",
          "Statistics and Probability: Mean, Median, Mode, Probability",
          "Vectors: Vector Algebra, Scalar and Vector Products"
        ] 
      },
    ],
    examCentres: { 
      count: 50, 
      centres: [
        "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Kadapa", "Anantapur", "Kurnool", "Nellore", "Ongole", "Chittoor",
        "Rajahmundry", "Kakinada", "Eluru", "Machilipatnam", "Srikakulam", "Vizianagaram", "Prakasam", "Chittoor", "Kadapa", "Anantapur"
      ] 
    },
    cutoffsAndCounselling: [
      "Cutoffs vary by category and stream",
      "General category cutoffs for top branches: 80+ marks",
      "AP EAMCET conducts web-based counselling",
      "Counselling includes choice filling, seat allocation, and document verification",
      "Multiple rounds of counselling for seat allocation",
      "Separate cutoffs for Engineering, Agriculture, and Pharmacy streams"
    ],
    slotAdmitResults: [
      "Admit card available 1 week before exam",
      "Results declared within 2 weeks of exam",
      "Rank cards available for download",
      "Counselling schedule announced after results"
    ],
    contact: {
      phone: "040-23156111",
      email: "helpdesk@apsche.ap.gov.in",
      address: "Andhra Pradesh State Council of Higher Education, Hyderabad"
    },
    faqs: [
      { question: "What is AP EAMCET?", answer: "AP EAMCET is the Andhra Pradesh Engineering, Agriculture and Medical Common Entrance Test conducted by APSCHE for admissions to engineering, agriculture, and medical courses in Andhra Pradesh." },
      { question: "How many questions are there in AP EAMCET?", answer: "AP EAMCET has 160 questions - Mathematics (80), Physics (40), and Chemistry (40) for Engineering stream." },
      { question: "Is there negative marking in AP EAMCET?", answer: "No, there is no negative marking in AP EAMCET. Each correct answer carries 1 mark." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://cets.apsche.ap.gov.in" },
      { label: "Information Bulletin", url: "https://cets.apsche.ap.gov.in/information-bulletin" },
      { label: "Previous Year Papers", url: "https://cets.apsche.ap.gov.in/previous-year-papers" },
      { label: "Counselling", url: "https://cets.apsche.ap.gov.in/counselling" },
    ],
  },
  "kcet": {
    slug: "kcet",
    name: "KCET",
    shortName: "KCET",
    fullName: "Karnataka Common Entrance Test",
    conductingBody: "Karnataka Examinations Authority (KEA)",
    frequency: "Once a year",
    level: "State",
    language: "English and Kannada",
    applicationFee: { general: 500, obc: 500, sc: 250, st: 250, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Pen-and-paper (OMR)",
    participatingColleges: 400,
    introduction: "KCET 2026: Karnataka Common Entrance Test is conducted by KEA for admissions to Engineering, Medical, and other professional courses in Karnataka state. The exam is pen-and-paper based with multiple choice questions covering Physics, Chemistry, Mathematics, and Biology.",
    eligibility: [
      "Indian citizens with Karnataka domicile",
      "Minimum age: 17 years, Maximum age: 25 years",
      "10+2 with required subjects: Physics, Chemistry, Mathematics/Biology",
      "Minimum 45% aggregate in 10+2 (40% for reserved categories)",
      "Candidates appearing in 10+2 in 2026 may apply provisionally",
    ],
    applicationProcedure: [
      "Visit official KCET portal (cetonline.karnataka.gov.in)",
      "Register with valid email/mobile",
      "Fill application form with personal and academic details",
      "Upload required documents",
      "Pay application fee online",
      "Download confirmation page",
    ],
    importantDates: [
      { label: "KCET 2026 Notification", date: "February 2026" },
      { label: "Application Start", date: "March 2026" },
      { label: "Last Date to Apply", date: "April 2026" },
      { label: "Admit Card Release", date: "May 2026" },
      { label: "KCET Exam", date: "May 2026" },
      { label: "Result Declaration", date: "June 2026" },
      { label: "Counselling", date: "July 2026" },
    ],
    documentsRequired: [
      "Recent passport-size photograph",
      "Scanned signature",
      "Category certificate (if applicable)",
      "Photo ID proof",
      "Class 10th and 12th mark sheets",
      "Domicile certificate",
    ],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 180,
      negativeMarking: "No negative marking",
      modeOfExam: "Pen-and-paper (OMR)",
      sections: [
        { name: "Physics", questions: 60, marks: 60, type: "MCQ" },
        { name: "Chemistry", questions: 60, marks: 60, type: "MCQ" },
        { name: "Mathematics", questions: 60, marks: 60, type: "MCQ" },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Mechanics", "Thermodynamics", "Waves", "Electrostatics", "Current Electricity", "Magnetism", "Optics", "Modern Physics"] },
      { section: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Environmental Chemistry"] },
      { section: "Mathematics", topics: ["Algebra", "Trigonometry", "Coordinate Geometry", "Calculus", "Statistics", "Vectors"] },
    ],
    examCentres: { count: 50, centres: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary", "Bijapur", "Shimoga"] },
    cutoffsAndCounselling: ["Cutoffs vary by category", "KEA conducts centralized counselling", "Multiple rounds of seat allocation"],
    slotAdmitResults: ["Admit card available online", "Results declared within 2 weeks", "Rank cards available for download"],
    contact: { phone: "080-23460460", email: "kea@karnataka.gov.in", address: "Karnataka Examinations Authority, Bangalore" },
    faqs: [
      { question: "What is KCET?", answer: "KCET is the Karnataka Common Entrance Test conducted by KEA for admissions to engineering, medical, and other professional courses in Karnataka." },
      { question: "How many questions are there in KCET?", answer: "KCET has 180 questions - Physics (60), Chemistry (60), and Mathematics (60)." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://cetonline.karnataka.gov.in" },
      { label: "Information Bulletin", url: "https://cetonline.karnataka.gov.in/information-bulletin" },
    ],
  },
  "keam": {
    slug: "keam",
    name: "KEAM",
    shortName: "KEAM",
    fullName: "Kerala Engineering Architecture Medical",
    conductingBody: "Commissioner for Entrance Examinations (CEE), Kerala",
    frequency: "Once a year",
    level: "State",
    language: "English and Malayalam",
    applicationFee: { general: 1000, obc: 1000, sc: 500, st: 500, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Pen-and-paper (OMR)",
    participatingColleges: 150,
    introduction: "KEAM 2026: Kerala Engineering Architecture Medical entrance exam is conducted by CEE Kerala for admissions to engineering, architecture, and medical courses in Kerala state.",
    eligibility: [
      "Indian citizens with Kerala domicile",
      "Minimum age: 17 years",
      "10+2 with required subjects: Physics, Chemistry, Mathematics/Biology",
      "Minimum 50% aggregate in 10+2 (40% for reserved categories)",
    ],
    applicationProcedure: [
      "Visit official KEAM portal (cee.kerala.gov.in)",
      "Register and fill application form",
      "Upload documents and pay fee",
      "Download admit card",
    ],
    importantDates: [
      { label: "KEAM 2026 Notification", date: "January 2026" },
      { label: "Application Start", date: "February 2026" },
      { label: "Last Date to Apply", date: "March 2026" },
      { label: "KEAM Exam", date: "May 2026" },
      { label: "Result Declaration", date: "June 2026" },
    ],
    documentsRequired: [
      "Recent passport-size photograph",
      "Scanned signature",
      "Category certificate (if applicable)",
      "Photo ID proof",
      "Class 10th and 12th mark sheets",
    ],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 480,
      negativeMarking: "No negative marking",
      modeOfExam: "Pen-and-paper (OMR)",
      sections: [
        { name: "Physics", questions: 120, marks: 120, type: "MCQ" },
        { name: "Chemistry", questions: 120, marks: 120, type: "MCQ" },
        { name: "Mathematics", questions: 120, marks: 120, type: "MCQ" },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Mechanics", "Thermodynamics", "Waves", "Electrostatics", "Current Electricity", "Magnetism", "Optics", "Modern Physics"] },
      { section: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
      { section: "Mathematics", topics: ["Algebra", "Trigonometry", "Coordinate Geometry", "Calculus", "Statistics", "Vectors"] },
    ],
    examCentres: { count: 30, centres: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur", "Kollam", "Palakkad", "Malappuram"] },
    cutoffsAndCounselling: ["Cutoffs vary by category", "CEE Kerala conducts centralized counselling", "Multiple rounds of seat allocation"],
    slotAdmitResults: ["Admit card available online", "Results declared within 2 weeks", "Rank cards available for download"],
    contact: { phone: "0471-2525300", email: "cee@kerala.gov.in", address: "Commissioner for Entrance Examinations, Kerala" },
    faqs: [
      { question: "What is KEAM?", answer: "KEAM is the Kerala Engineering Architecture Medical entrance exam conducted by CEE Kerala for admissions to engineering, architecture, and medical courses in Kerala." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://cee.kerala.gov.in" },
      { label: "Information Bulletin", url: "https://cee.kerala.gov.in/information-bulletin" },
    ],
  },
  "clat": {
    slug: "clat",
    name: "CLAT",
    shortName: "CLAT",
    fullName: "Common Law Admission Test",
    conductingBody: "Consortium of National Law Universities",
    frequency: "Once a year",
    level: "National",
    language: "English",
    applicationFee: { general: 4000, obc: 3500, sc: 3500, st: 3500, currency: "INR" },
    durationMinutes: 120,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 22,
    introduction: "CLAT 2026: Common Law Admission Test is conducted by the Consortium of NLUs for admissions to undergraduate and postgraduate law programs at National Law Universities across India.",
    eligibility: [
      "Indian citizens and foreign nationals eligible",
      "For UG: 10+2 with minimum 45% aggregate (40% for SC/ST)",
      "For PG: LLB degree with minimum 50% aggregate (45% for SC/ST)",
      "No age limit",
    ],
    applicationProcedure: [
      "Visit official CLAT portal (consortiumofnlus.ac.in)",
      "Register and fill application form",
      "Upload documents and pay fee",
      "Download admit card",
    ],
    importantDates: [
      { label: "CLAT 2026 Notification", date: "January 2026" },
      { label: "Application Start", date: "February 2026" },
      { label: "Last Date to Apply", date: "March 2026" },
      { label: "CLAT Exam", date: "May 2026" },
      { label: "Result Declaration", date: "June 2026" },
    ],
    documentsRequired: [
      "Recent passport-size photograph",
      "Scanned signature",
      "Category certificate (if applicable)",
      "Photo ID proof",
      "Class 10th and 12th mark sheets",
    ],
    examPattern: {
      durationMinutes: 120,
      totalMarks: 120,
      negativeMarking: "0.25 marks deducted for wrong answer",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "English Language", questions: 28, marks: 28, type: "MCQ" },
        { name: "Current Affairs", questions: 35, marks: 35, type: "MCQ" },
        { name: "Legal Reasoning", questions: 35, marks: 35, type: "MCQ" },
        { name: "Logical Reasoning", questions: 28, marks: 28, type: "MCQ" },
        { name: "Quantitative Techniques", questions: 13, marks: 13, type: "MCQ" },
      ],
    },
    syllabus: [
      { section: "English Language", topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Sentence Correction"] },
      { section: "Current Affairs", topics: ["National and International Events", "Sports", "Awards", "Science and Technology"] },
      { section: "Legal Reasoning", topics: ["Legal Principles", "Case Laws", "Constitutional Law", "Criminal Law"] },
      { section: "Logical Reasoning", topics: ["Analytical Reasoning", "Critical Reasoning", "Syllogism", "Blood Relations"] },
      { section: "Quantitative Techniques", topics: ["Arithmetic", "Algebra", "Geometry", "Statistics"] },
    ],
    examCentres: { count: 100, centres: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Chandigarh", "Lucknow"] },
    cutoffsAndCounselling: ["Cutoffs vary by NLU and category", "Centralized counselling by Consortium", "Multiple rounds of seat allocation"],
    slotAdmitResults: ["Admit card available online", "Results declared within 2 weeks", "Rank cards available for download"],
    contact: { phone: "080-47162020", email: "clat@consortiumofnlus.ac.in", address: "Consortium of National Law Universities" },
    faqs: [
      { question: "What is CLAT?", answer: "CLAT is the Common Law Admission Test conducted by the Consortium of NLUs for admissions to undergraduate and postgraduate law programs at National Law Universities." },
      { question: "How many questions are there in CLAT?", answer: "CLAT has 120 questions covering English Language, Current Affairs, Legal Reasoning, Logical Reasoning, and Quantitative Techniques." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://consortiumofnlus.ac.in" },
      { label: "Information Bulletin", url: "https://consortiumofnlus.ac.in/information-bulletin" },
    ],
  },
  "ailet": {
    slug: "ailet",
    name: "AILET",
    shortName: "AILET",
    fullName: "All India Law Entrance Test",
    conductingBody: "National Law University Delhi",
    frequency: "Once a year",
    level: "National",
    language: "English",
    applicationFee: { general: 3050, obc: 3050, sc: 1050, st: 1050, currency: "INR" },
    durationMinutes: 90,
    modeOfApplication: "Online",
    modeOfExam: "Pen-and-paper (OMR)",
    participatingColleges: 1,
    introduction: "AILET 2026: All India Law Entrance Test is conducted by NLU Delhi for admissions to undergraduate and postgraduate law programs at National Law University Delhi.",
    eligibility: [
      "Indian citizens and foreign nationals eligible",
      "For UG: 10+2 with minimum 50% aggregate (45% for SC/ST)",
      "For PG: LLB degree with minimum 50% aggregate (45% for SC/ST)",
      "No age limit",
    ],
    applicationProcedure: [
      "Visit official AILET portal (nludelhi.ac.in)",
      "Register and fill application form",
      "Upload documents and pay fee",
      "Download admit card",
    ],
    importantDates: [
      { label: "AILET 2026 Notification", date: "January 2026" },
      { label: "Application Start", date: "February 2026" },
      { label: "Last Date to Apply", date: "March 2026" },
      { label: "AILET Exam", date: "May 2026" },
      { label: "Result Declaration", date: "June 2026" },
    ],
    documentsRequired: [
      "Recent passport-size photograph",
      "Scanned signature",
      "Category certificate (if applicable)",
      "Photo ID proof",
      "Class 10th and 12th mark sheets",
    ],
    examPattern: {
      durationMinutes: 90,
      totalMarks: 150,
      negativeMarking: "0.25 marks deducted for wrong answer",
      modeOfExam: "Pen-and-paper (OMR)",
      sections: [
        { name: "English", questions: 50, marks: 50, type: "MCQ" },
        { name: "General Knowledge", questions: 30, marks: 30, type: "MCQ" },
        { name: "Legal Aptitude", questions: 35, marks: 35, type: "MCQ" },
        { name: "Reasoning", questions: 35, marks: 35, type: "MCQ" },
      ],
    },
    syllabus: [
      { section: "English", topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Sentence Correction"] },
      { section: "General Knowledge", topics: ["Current Affairs", "History", "Geography", "Science", "Sports"] },
      { section: "Legal Aptitude", topics: ["Legal Principles", "Case Laws", "Constitutional Law", "Criminal Law"] },
      { section: "Reasoning", topics: ["Analytical Reasoning", "Critical Reasoning", "Syllogism", "Blood Relations"] },
    ],
    examCentres: { count: 50, centres: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Chandigarh", "Lucknow"] },
    cutoffsAndCounselling: ["Cutoffs vary by category", "NLU Delhi conducts counselling", "Single round of seat allocation"],
    slotAdmitResults: ["Admit card available online", "Results declared within 2 weeks", "Rank cards available for download"],
    contact: { phone: "011-28034255", email: "ailet@nludelhi.ac.in", address: "National Law University Delhi" },
    faqs: [
      { question: "What is AILET?", answer: "AILET is the All India Law Entrance Test conducted by NLU Delhi for admissions to undergraduate and postgraduate law programs at National Law University Delhi." },
      { question: "How many questions are there in AILET?", answer: "AILET has 150 questions covering English, General Knowledge, Legal Aptitude, and Reasoning." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://nludelhi.ac.in" },
      { label: "Information Bulletin", url: "https://nludelhi.ac.in/information-bulletin" },
    ],
  },
  "icar-aieea-ug": {
    slug: "icar-aieea-ug",
    name: "ICAR AIEEA UG",
    shortName: "ICAR AIEEA UG",
    fullName: "ICAR All India Entrance Examination for Admission",
    conductingBody: "Indian Council of Agricultural Research (ICAR)",
    frequency: "Once a year",
    level: "National",
    language: "English and Hindi",
    applicationFee: { general: 1000, obc: 1000, sc: 500, st: 500, currency: "INR" },
    durationMinutes: 150,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 100,
    introduction: "ICAR AIEEA UG 2026: ICAR All India Entrance Examination for Admission is conducted by ICAR for admissions to undergraduate agricultural programs at agricultural universities across India.",
    eligibility: [
      "Indian citizens eligible",
      "10+2 with Physics, Chemistry, Biology/Mathematics/Agriculture",
      "Minimum 50% aggregate in 10+2 (40% for SC/ST)",
      "Age limit: 16-23 years",
    ],
    applicationProcedure: [
      "Visit official ICAR portal (icar.org.in)",
      "Register and fill application form",
      "Upload documents and pay fee",
      "Download admit card",
    ],
    importantDates: [
      { label: "ICAR AIEEA UG 2026 Notification", date: "March 2026" },
      { label: "Application Start", date: "April 2026" },
      { label: "Last Date to Apply", date: "May 2026" },
      { label: "ICAR AIEEA UG Exam", date: "June 2026" },
      { label: "Result Declaration", date: "July 2026" },
    ],
    documentsRequired: [
      "Recent passport-size photograph",
      "Scanned signature",
      "Category certificate (if applicable)",
      "Photo ID proof",
      "Class 10th and 12th mark sheets",
    ],
    examPattern: {
      durationMinutes: 150,
      totalMarks: 200,
      negativeMarking: "0.25 marks deducted for wrong answer",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Physics", questions: 50, marks: 50, type: "MCQ" },
        { name: "Chemistry", questions: 50, marks: 50, type: "MCQ" },
        { name: "Biology", questions: 50, marks: 50, type: "MCQ" },
        { name: "Mathematics", questions: 50, marks: 50, type: "MCQ" },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Mechanics", "Thermodynamics", "Waves", "Electrostatics", "Current Electricity", "Magnetism", "Optics", "Modern Physics"] },
      { section: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Environmental Chemistry"] },
      { section: "Biology", topics: ["Botany", "Zoology", "Genetics", "Ecology", "Biotechnology"] },
      { section: "Mathematics", topics: ["Algebra", "Trigonometry", "Coordinate Geometry", "Calculus", "Statistics", "Vectors"] },
    ],
    examCentres: { count: 100, centres: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Chandigarh", "Lucknow"] },
    cutoffsAndCounselling: ["Cutoffs vary by university and category", "ICAR conducts centralized counselling", "Multiple rounds of seat allocation"],
    slotAdmitResults: ["Admit card available online", "Results declared within 2 weeks", "Rank cards available for download"],
    contact: { phone: "011-25841601", email: "icar@icar.org.in", address: "Indian Council of Agricultural Research, New Delhi" },
    faqs: [
      { question: "What is ICAR AIEEA UG?", answer: "ICAR AIEEA UG is the ICAR All India Entrance Examination for Admission conducted by ICAR for admissions to undergraduate agricultural programs at agricultural universities." },
      { question: "How many questions are there in ICAR AIEEA UG?", answer: "ICAR AIEEA UG has 200 questions covering Physics, Chemistry, Biology, and Mathematics." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://icar.org.in" },
      { label: "Information Bulletin", url: "https://icar.org.in/information-bulletin" },
    ],
  },
  "lsat-india": {
    slug: "lsat-india",
    name: "LSAT India",
    shortName: "LSAT India",
    fullName: "Law School Admission Test India",
    conductingBody: "Law School Admission Council (LSAC)",
    frequency: "Multiple times a year",
    level: "National",
    language: "English",
    applicationFee: { general: 3800, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 50,
    introduction: "LSAT India 2026: Law School Admission Test India is conducted by LSAC for admissions to undergraduate and postgraduate law programs at participating law schools in India.",
    eligibility: [
      "Indian citizens and foreign nationals eligible",
      "For UG: 10+2 with minimum 45% aggregate",
      "For PG: LLB degree with minimum 50% aggregate",
      "No age limit",
    ],
    applicationProcedure: [
      "Visit official LSAT India portal (lsatindia.in)",
      "Register and fill application form",
      "Upload documents and pay fee",
      "Download admit card",
    ],
    importantDates: [
      { label: "LSAT India 2026 Registration", date: "January 2026" },
      { label: "LSAT India Exam", date: "Multiple dates in 2026" },
      { label: "Result Declaration", date: "Within 2 weeks of exam" },
    ],
    documentsRequired: [
      "Recent passport-size photograph",
      "Scanned signature",
      "Photo ID proof",
      "Class 10th and 12th mark sheets",
    ],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 180,
      negativeMarking: "No negative marking",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "Analytical Reasoning", questions: 24, marks: 24, type: "MCQ" },
        { name: "Logical Reasoning", questions: 24, marks: 24, type: "MCQ" },
        { name: "Reading Comprehension", questions: 24, marks: 24, type: "MCQ" },
      ],
    },
    syllabus: [
      { section: "Analytical Reasoning", topics: ["Logic Games", "Syllogism", "Blood Relations", "Seating Arrangements"] },
      { section: "Logical Reasoning", topics: ["Critical Reasoning", "Argument Analysis", "Assumption", "Inference"] },
      { section: "Reading Comprehension", topics: ["Passage Analysis", "Main Idea", "Supporting Details", "Inference"] },
    ],
    examCentres: { count: 50, centres: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Chandigarh", "Lucknow"] },
    cutoffsAndCounselling: ["Cutoffs vary by law school and category", "Individual law schools conduct counselling", "Multiple rounds of seat allocation"],
    slotAdmitResults: ["Admit card available online", "Results declared within 2 weeks", "Score cards available for download"],
    contact: { phone: "011-40541000", email: "info@lsatindia.in", address: "Law School Admission Council, India" },
    faqs: [
      { question: "What is LSAT India?", answer: "LSAT India is the Law School Admission Test India conducted by LSAC for admissions to undergraduate and postgraduate law programs at participating law schools." },
      { question: "How many questions are there in LSAT India?", answer: "LSAT India has 72 questions covering Analytical Reasoning, Logical Reasoning, and Reading Comprehension." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://lsatindia.in" },
      { label: "Information Bulletin", url: "https://lsatindia.in/information-bulletin" },
    ],
  },
  "slat": {
    slug: "slat",
    name: "SLAT",
    shortName: "SLAT",
    fullName: "Symbiosis Law Admission Test",
    conductingBody: "Symbiosis International University",
    frequency: "Once a year",
    level: "National",
    language: "English",
    applicationFee: { general: 2250, currency: "INR" },
    durationMinutes: 150,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    participatingColleges: 4,
    introduction: "SLAT 2026: Symbiosis Law Admission Test is conducted by Symbiosis International University for admissions to undergraduate law programs at Symbiosis Law Schools.",
    eligibility: [
      "Indian citizens and foreign nationals eligible",
      "10+2 with minimum 45% aggregate (40% for SC/ST)",
      "No age limit",
    ],
    applicationProcedure: [
      "Visit official SLAT portal (set-test.org)",
      "Register and fill application form",
      "Upload documents and pay fee",
      "Download admit card",
    ],
    importantDates: [
      { label: "SLAT 2026 Notification", date: "December 2025" },
      { label: "Application Start", date: "January 2026" },
      { label: "Last Date to Apply", date: "April 2026" },
      { label: "SLAT Exam", date: "May 2026" },
      { label: "Result Declaration", date: "June 2026" },
    ],
    documentsRequired: [
      "Recent passport-size photograph",
      "Scanned signature",
      "Category certificate (if applicable)",
      "Photo ID proof",
      "Class 10th and 12th mark sheets",
    ],
    examPattern: {
      durationMinutes: 150,
      totalMarks: 150,
      negativeMarking: "No negative marking",
      modeOfExam: "Computer-Based Test (CBT)",
      sections: [
        { name: "English", questions: 30, marks: 30, type: "MCQ" },
        { name: "General Knowledge", questions: 30, marks: 30, type: "MCQ" },
        { name: "Legal Reasoning", questions: 30, marks: 30, type: "MCQ" },
        { name: "Logical Reasoning", questions: 30, marks: 30, type: "MCQ" },
        { name: "Analytical Reasoning", questions: 30, marks: 30, type: "MCQ" },
      ],
    },
    syllabus: [
      { section: "English", topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Sentence Correction"] },
      { section: "General Knowledge", topics: ["Current Affairs", "History", "Geography", "Science", "Sports"] },
      { section: "Legal Reasoning", topics: ["Legal Principles", "Case Laws", "Constitutional Law", "Criminal Law"] },
      { section: "Logical Reasoning", topics: ["Analytical Reasoning", "Critical Reasoning", "Syllogism", "Blood Relations"] },
      { section: "Analytical Reasoning", topics: ["Logic Games", "Seating Arrangements", "Puzzles", "Data Interpretation"] },
    ],
    examCentres: { count: 50, centres: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Chandigarh", "Lucknow"] },
    cutoffsAndCounselling: ["Cutoffs vary by law school and category", "Symbiosis conducts centralized counselling", "Multiple rounds of seat allocation"],
    slotAdmitResults: ["Admit card available online", "Results declared within 2 weeks", "Rank cards available for download"],
    contact: { phone: "020-25671905", email: "slat@symbiosis.ac.in", address: "Symbiosis International University, Pune" },
    faqs: [
      { question: "What is SLAT?", answer: "SLAT is the Symbiosis Law Admission Test conducted by Symbiosis International University for admissions to undergraduate law programs at Symbiosis Law Schools." },
      { question: "How many questions are there in SLAT?", answer: "SLAT has 150 questions covering English, General Knowledge, Legal Reasoning, Logical Reasoning, and Analytical Reasoning." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://set-test.org" },
      { label: "Information Bulletin", url: "https://set-test.org/information-bulletin" },
    ],
  },
};


