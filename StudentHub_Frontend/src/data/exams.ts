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
    frequency: "Twice a year",
    level: "National",
    language: "English, Hindi and regional languages",
    applicationFee: { general: 1000, obc: 900, sc: 800, st: 800, pwd: 800, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "Computer-Based Test (CBT)",
    modeOfCounselling: "JoSAA/CSAB online",
    participatingColleges: 2500,
    introduction:
      "JEE Main is the first stage of India’s premier engineering entrance pathway, enabling admission into NITs, IIITs and other CFTIs, and it also serves as the eligibility test for JEE Advanced.",
    eligibility: [
      "Passed/appearing in 10+2 (PCM)",
      "No age limit (as per current policy)",
      "Up to 2 attempts per year",
    ],
    applicationProcedure: [
      "Register on the NTA portal",
      "Fill application, upload documents, choose exam cities",
      "Pay fees and download confirmation page",
    ],
    importantDates: [
      { label: "Application Start", date: "2025-01-01" },
      { label: "Application End", date: "2025-02-28" },
      { label: "Admit Card", date: "2025-03-25" },
      { label: "Exam Dates", date: "2025-04-06 to 2025-04-12" },
      { label: "Result", date: "2025-04-25" },
    ],
    documentsRequired: [
      "Passport-size photo",
      "Signature",
      "Category and PwD certificate (if applicable)",
      "Photo ID proof",
    ],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 300,
      negativeMarking: "-1 for incorrect MCQ",
      modeOfExam: "CBT",
      sections: [
        { name: "Physics", questions: 30, marks: 100 },
        { name: "Chemistry", questions: 30, marks: 100 },
        { name: "Mathematics", questions: 30, marks: 100 },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Kinematics", "Thermodynamics", "Waves", "Electrostatics", "Modern Physics"] },
      { section: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] },
      { section: "Mathematics", topics: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry"] },
    ],
    examCentres: {
      count: 400,
      centres: [
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai",
        "Hyderabad",
        "Bengaluru",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
      ],
    },
    cutoffsAndCounselling: [
      "Cutoffs vary by institute, category and branch",
      "Counselling conducted via JoSAA, followed by CSAB rounds",
    ],
    slotAdmitResults: [
      "No slot booking; exam city selection during application",
      "Admit card released online",
      "Results available on NTA portal; scorecard downloadable",
    ],
    contact: {
      phone: "+91-11-40759000",
      email: "jeemain@nta.ac.in",
      address: "NTA HQ, New Delhi",
    },
    faqs: [
      { question: "How many attempts are allowed?", answer: "Two sessions per year; both considered separate attempts." },
      { question: "Is there age limit?", answer: "Currently no age limit for JEE Main." },
      { question: "What is exam mode?", answer: "Computer-Based Test (CBT)." },
      { question: "Can I appear in both sessions?", answer: "Yes, the best of the two scores is considered." },
      { question: "How is percentile calculated?", answer: "Using normalization across shifts as per NTA methodology." },
    ],
    officialLinks: [
      { label: "Official Website", url: "https://jeemain.nta.ac.in" },
      { label: "Application Form", url: "https://jeemain.nta.ac.in/" },
    ],
  },
  "jee-advanced": {
    slug: "jee-advanced",
    name: "JEE Advanced",
    shortName: "JEE Adv",
    fullName: "Joint Entrance Examination Advanced",
    conductingBody: "IITs (rotational)",
    frequency: "Once a year",
    level: "National",
    language: "English and Hindi",
    applicationFee: { general: 2900, obc: 2900, sc: 1450, st: 1450, pwd: 1450, currency: "INR" },
    durationMinutes: 360,
    modeOfApplication: "Online",
    modeOfExam: "CBT",
    participatingColleges: 23,
    introduction:
      "JEE Advanced is the second stage for admissions to the prestigious IITs. Only top JEE Main performers are eligible to appear.",
    eligibility: [
      "Among top qualifying candidates in JEE Main",
      "Age and attempt limits apply",
    ],
    applicationProcedure: [
      "Register on JEE Advanced portal",
      "Upload documents and pay fee",
    ],
    importantDates: [
      { label: "Registration", date: "2025-04-30" },
      { label: "Admit Card", date: "2025-05-20" },
      { label: "Exam", date: "2025-05-25" },
      { label: "Result", date: "2025-06-09" },
    ],
    documentsRequired: ["Photo", "Signature", "Category/PwD certificates", "JEE Main scorecard"],
    examPattern: {
      durationMinutes: 360,
      modeOfExam: "CBT",
      sections: [
        { name: "Paper 1" },
        { name: "Paper 2" },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Mechanics", "Electricity", "Optics"] },
      { section: "Chemistry", topics: ["Organic", "Inorganic", "Physical"] },
      { section: "Mathematics", topics: ["Algebra", "Calculus", "Geometry"] },
    ],
    examCentres: { count: 200, centres: ["Delhi", "Mumbai", "Chennai", "Kolkata", "Hyderabad", "Bengaluru", "Pune", "Indore", "Jaipur", "Lucknow"] },
    cutoffsAndCounselling: ["Cutoffs vary by IIT and category", "Counselling via JoSAA"],
    slotAdmitResults: ["No slot booking", "Admit card online", "Results on official portal"],
    contact: { phone: "+91-11-00000000", email: "help@jeeadv.ac.in", address: "IIT (organizing institute)" },
    faqs: [
      { question: "Who can apply?", answer: "Top JEE Main candidates meeting eligibility criteria." },
      { question: "Is there negative marking?", answer: "Pattern varies; details in information brochure." },
      { question: "How many papers?", answer: "Two papers in one day." },
    ],
    officialLinks: [{ label: "Official Website", url: "https://jeeadv.ac.in" }],
  },
  neet: {
    slug: "neet",
    name: "NEET",
    shortName: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    conductingBody: "NTA",
    frequency: "Once a year",
    level: "National",
    language: "English, Hindi and regional languages",
    applicationFee: { general: 1700, obc: 1600, sc: 1000, st: 1000, pwd: 1000, currency: "INR" },
    durationMinutes: 200,
    modeOfApplication: "Online",
    modeOfExam: "Pen-and-paper (OMR)",
    participatingColleges: 600,
    introduction:
      "NEET is India’s unified medical entrance exam for MBBS, BDS, BAMS, BHMS and other medical programs.",
    eligibility: ["10+2 with PCB", "Minimum age 17 years"],
    applicationProcedure: ["Register on NTA portal", "Fill form, upload documents", "Pay fee"],
    importantDates: [
      { label: "Application Start", date: "2025-02-01" },
      { label: "Application End", date: "2025-03-09" },
      { label: "Admit Card", date: "2025-04-20" },
      { label: "Exam", date: "2025-05-05" },
      { label: "Result", date: "2025-06-14" },
    ],
    documentsRequired: ["Photo", "Signature", "Category/PwD certificates", "Photo ID"],
    examPattern: {
      durationMinutes: 200,
      totalMarks: 720,
      negativeMarking: "-1 for incorrect MCQ",
      modeOfExam: "OMR",
      sections: [
        { name: "Physics", questions: 50, marks: 180 },
        { name: "Chemistry", questions: 50, marks: 180 },
        { name: "Biology", questions: 100, marks: 360 },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Mechanics", "Electrodynamics", "Optics"] },
      { section: "Chemistry", topics: ["Physical", "Organic", "Inorganic"] },
      { section: "Biology", topics: ["Botany", "Zoology"] },
    ],
    examCentres: { count: 500, centres: ["Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad", "Bengaluru", "Pune", "Ahmedabad", "Chandigarh", "Patna"] },
    cutoffsAndCounselling: ["Cutoffs vary annually", "Counselling via MCC and state authorities"],
    slotAdmitResults: ["No slot booking", "Admit card online", "Results on NTA portal"],
    contact: { phone: "+91-11-40759000", email: "neet@nta.ac.in", address: "NTA HQ, New Delhi" },
    faqs: [
      { question: "Is NEET mandatory for MBBS?", answer: "Yes, NEET is mandatory for MBBS in India." },
      { question: "Is there negative marking?", answer: "Yes, -1 for incorrect answers." },
    ],
    officialLinks: [{ label: "Official Website", url: "https://neet.nta.nic.in" }],
  },
  eamcet: {
    slug: "eamcet",
    name: "EAMCET",
    shortName: "EAMCET",
    fullName: "Engineering, Agriculture and Medical Common Entrance Test",
    conductingBody: "TSCHE/APSHE",
    frequency: "Once a year",
    level: "State",
    language: "English and regional",
    applicationFee: { general: 800, obc: 800, sc: 500, st: 500, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "CBT",
    participatingColleges: 300,
    introduction:
      "EAMCET is a state-level exam for admissions into engineering and agriculture programs in Telangana and Andhra Pradesh.",
    eligibility: ["10+2 with PCM/PCB"],
    applicationProcedure: ["Online registration", "Fee payment", "Form submission"],
    importantDates: [
      { label: "Application Start", date: "2025-02-01" },
      { label: "Application End", date: "2025-03-15" },
      { label: "Exam", date: "2025-05-15" },
      { label: "Result", date: "2025-06-15" },
    ],
    documentsRequired: ["Photo", "Signature", "Category certificate (if applicable)", "Hall ticket of qualifying exam"],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 160,
      negativeMarking: "No negative marking",
      modeOfExam: "CBT",
      sections: [
        { name: "Physics", questions: 40, marks: 40 },
        { name: "Chemistry", questions: 40, marks: 40 },
        { name: "Mathematics", questions: 80, marks: 80 },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Mechanics", "Heat", "Electricity"] },
      { section: "Chemistry", topics: ["Physical", "Organic", "Inorganic"] },
      { section: "Mathematics", topics: ["Algebra", "Calculus", "Geometry"] },
    ],
    examCentres: { count: 100, centres: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Vijayawada", "Guntur", "Visakhapatnam", "Tirupati", "Kurnool", "Anantapur"] },
    cutoffsAndCounselling: ["Cutoffs vary by branch and category", "TS/AP EAMCET counselling online"],
    slotAdmitResults: ["No slot booking", "Admit card online", "Results on official portal"],
    contact: { phone: "+91-40-00000000", email: "support@eamcet.tsche.ac.in", address: "TSCHE, Hyderabad" },
    faqs: [
      { question: "Is there negative marking?", answer: "No negative marking in EAMCET." },
    ],
    officialLinks: [{ label: "Official Website", url: "https://eamcet.tsche.ac.in" }],
  },
  bitsat: {
    slug: "bitsat",
    name: "BITSAT",
    shortName: "BITSAT",
    fullName: "BITS Admission Test",
    conductingBody: "BITS Pilani",
    frequency: "Once a year",
    level: "University",
    language: "English",
    applicationFee: { general: 3400, currency: "INR" },
    durationMinutes: 180,
    modeOfApplication: "Online",
    modeOfExam: "CBT",
    participatingColleges: 3,
    introduction:
      "BITSAT is conducted by BITS Pilani for admission to its campuses at Pilani, Goa and Hyderabad.",
    eligibility: ["10+2 with PCM", "Minimum aggregate as prescribed"],
    applicationProcedure: ["Online registration", "Form fill and payment"],
    importantDates: [
      { label: "Application Start", date: "2025-01-15" },
      { label: "Application End", date: "2025-04-11" },
      { label: "Exam", date: "2025-05-21" },
      { label: "Result", date: "2025-06-15" },
    ],
    documentsRequired: ["Photo", "Signature", "ID proof"],
    examPattern: {
      durationMinutes: 180,
      totalMarks: 390,
      negativeMarking: "-1 for incorrect MCQ",
      modeOfExam: "CBT",
      sections: [
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Mathematics" },
        { name: "English Proficiency" },
        { name: "Logical Reasoning" },
      ],
    },
    syllabus: [
      { section: "Physics", topics: ["Mechanics", "Waves", "Electrostatics"] },
      { section: "Chemistry", topics: ["Physical", "Organic", "Inorganic"] },
      { section: "Mathematics", topics: ["Algebra", "Calculus", "Probability"] },
    ],
    examCentres: { count: 60, centres: ["Pilani", "Goa", "Hyderabad", "Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad City", "Bengaluru", "Pune"] },
    cutoffsAndCounselling: ["Score-based admissions; branch-wise cutoffs released post results"],
    slotAdmitResults: ["Slot booking available", "Admit card online", "Results on portal"],
    contact: { phone: "+91-1596-000000", email: "admissions@bits-pilani.ac.in", address: "BITS Pilani, Rajasthan" },
    faqs: [
      { question: "Is there slot booking?", answer: "Yes, candidates book slots within the window." },
    ],
    officialLinks: [{ label: "Official Website", url: "https://bitsadmission.com" }],
  },
  viteee: {
    slug: "viteee",
    name: "VITEEE",
    shortName: "VITEEE",
    fullName: "VIT Engineering Entrance Examination",
    conductingBody: "VIT",
    frequency: "Once a year",
    level: "University",
    language: "English",
    applicationFee: { general: 1350, currency: "INR" },
    durationMinutes: 150,
    modeOfApplication: "Online",
    modeOfExam: "CBT",
    participatingColleges: 4,
    introduction:
      "VITEEE is conducted by VIT for admission to its B.Tech programs at Vellore, Chennai, Amaravati and Bhopal campuses.",
    eligibility: ["10+2 with PCM/PCB"],
    applicationProcedure: ["Online registration", "Form fill", "Fee payment"],
    importantDates: [
      { label: "Application Start", date: "2025-01-10" },
      { label: "Application End", date: "2025-03-31" },
      { label: "Exam", date: "2025-04-18" },
      { label: "Result", date: "2025-05-02" },
    ],
    documentsRequired: ["Photo", "Signature", "ID Proof"],
    examPattern: {
      durationMinutes: 150,
      modeOfExam: "CBT",
      sections: [
        { name: "Maths/Biology" },
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Aptitude" },
        { name: "English" },
      ],
    },
    syllabus: [
      { section: "Maths/Biology", topics: ["Algebra/Biology basics"] },
      { section: "Physics", topics: ["Mechanics", "Electricity"] },
      { section: "Chemistry", topics: ["Physical", "Organic"] },
    ],
    examCentres: { count: 120, centres: ["Vellore", "Chennai", "Bengaluru", "Hyderabad", "Mumbai", "Kolkata", "Delhi", "Bhopal", "Jaipur", "Lucknow"] },
    cutoffsAndCounselling: ["VIT uses rank-based counselling and campus/branch allocation"],
    slotAdmitResults: ["Slot booking mandatory", "Admit card online", "Results on portal"],
    contact: { phone: "+91-416-000000", email: "ugadmission@vit.ac.in", address: "VIT Vellore" },
    faqs: [
      { question: "Is Maths mandatory?", answer: "Maths is required for most B.Tech programs; Biology candidates have limited options." },
    ],
    officialLinks: [{ label: "Official Website", url: "https://viteee.vit.ac.in" }],
  },
};


