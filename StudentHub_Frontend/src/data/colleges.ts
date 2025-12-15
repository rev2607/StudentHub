// Import assets so Vite resolves them correctly during client-side navigation
import vitLogo from "../assets/vit_logo.png";
import headerImage from "../assets/header.png";
export type Program = {
  name: string;
  eligibility: string;
  durationYears: number;
  intake: number;
  feesPerYearLpa: number;
};

export type PlacementYearStat = {
  year: number;
  percentPlaced: number;
  highestPackageLpa: number;
  averagePackageLpa: number;
  topRecruiters: string[];
};

export type FacultyInfo = {
  withPhD: number;
  withoutPhD: number;
  facultyStudentRatio: string;
};

export type StudentDemographics = {
  outsideStatePercent: number;
  withinStatePercent: number;
  boysPercent: number;
  girlsPercent: number;
};

export type HostelFacilities = {
  hostelFeesPerYear: number;
  hostelCapacity: number;
  libraryBooksCount: number;
  sportsFacilities: string[];
  labs: string[];
};

export type ExpenditureOutcomes = {
  graduationPercent: number;
  placementPercent: number;
  annualCapexCrore: number;
  annualOpexCrore: number;
};

export type ContactInfo = {
  website: string;
  email: string;
  phone: string;
  address: string;
};

export type College = {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  heroImageUrl: string;
  state: string;
  stream: string;
  location: string;
  nirfRank: number;
  naacGrade: string;
  establishmentYear: number;
  campusAreaAcres: number;
  highestPackageLpa: number;
  feesRangeLpa: [number, number];
  overview: string;
  programs: Program[];
  placementStats: PlacementYearStat[];
  facultyInfo: FacultyInfo;
  studentDemographics: StudentDemographics;
  hostelFacilities: HostelFacilities;
  expenditureOutcomes: ExpenditureOutcomes;
  campusLife: {
    description: string;
    hangoutSpots: string[];
    culturalEvents: string[];
    hackathons: string[];
  };
  whyChoose: string[];
  faqs: { question: string; answer: string }[];
  contact: ContactInfo;
  // New high-level counts and summaries
  coursesOfferedCount?: number;
  streamsOffered?: string[];
  approvedIntakeTotal?: number;
  totalStudents?: number;
  careerOpportunities?: string[];
  packagesSummary?: { averageLpa: number; medianLpa?: number; highestLpa: number };
  studentsPlacedLastYear?: number;
  topRecruitersOverall?: string[];
  extended?: {
    rankings: { framework: string; year: number; rank: number | string; note?: string }[];
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
};

const placeholderLogo = vitLogo as unknown as string;
const placeholderHero = headerImage as unknown as string;

const defaultPrograms: Program[] = [
  {
    name: "B.Tech Computer Science and Engineering (CSE)",
    eligibility: "10+2 with Physics, Chemistry, Mathematics; JEE Main/Advanced or institute test",
    durationYears: 4,
    intake: 300,
    feesPerYearLpa: 2.25,
  },
  {
    name: "B.Tech Electronics and Communication Engineering (ECE)",
    eligibility: "10+2 with PCM; national/state entrance as applicable",
    durationYears: 4,
    intake: 180,
    feesPerYearLpa: 2.0,
  },
  {
    name: "M.Tech Computer Science and Engineering",
    eligibility: "B.E/B.Tech in relevant discipline + valid GATE score",
    durationYears: 2,
    intake: 60,
    feesPerYearLpa: 1.5,
  },
  {
    name: "MBA (Technology Management)",
    eligibility: "Graduation with 50%+; CAT/GMAT/MAT/Institute test + PI",
    durationYears: 2,
    intake: 120,
    feesPerYearLpa: 3.0,
  },
];

function createCollege(partial: Partial<College> & Pick<College, "id" | "slug" | "name" | "state" | "location" | "nirfRank">): College {
  return {
    id: partial.id,
    slug: partial.slug,
    name: partial.name,
    logoUrl: partial.logoUrl || placeholderLogo,
    heroImageUrl: partial.heroImageUrl || placeholderHero,
    state: partial.state,
    stream: partial.stream || "Engineering",
    location: partial.location,
    nirfRank: partial.nirfRank,
    naacGrade: partial.naacGrade || "A++",
    establishmentYear: partial.establishmentYear || 1950,
    campusAreaAcres: partial.campusAreaAcres || 200,
    highestPackageLpa: partial.highestPackageLpa || 50,
    feesRangeLpa: partial.feesRangeLpa || [1, 3],
    overview: partial.overview || "A nationally top-ranked institute recognized for interdisciplinary research, rigorous academics, and deep industry engagement. The campus houses multiple Centers of Excellence and incubation facilities that support student startups from idea to scale. Undergraduate programs emphasize strong fundamentals while offering modern electives in AI/ML, data engineering, cybersecurity, and product design. Students benefit from project-based learning, competitive hackathons, and semester-long capstone projects mentored by faculty and industry practitioners.",
    programs: partial.programs || defaultPrograms,
    placementStats: partial.placementStats || [
      { year: 2024, percentPlaced: 94, highestPackageLpa: 65, averagePackageLpa: 14.2, topRecruiters: ["Google", "Amazon", "Microsoft", "NVIDIA", "TCS"] },
      { year: 2023, percentPlaced: 92, highestPackageLpa: 52, averagePackageLpa: 12.8, topRecruiters: ["Infosys", "Wipro", "Accenture", "Flipkart"] },
      { year: 2022, percentPlaced: 90, highestPackageLpa: 45, averagePackageLpa: 11.4, topRecruiters: ["Deloitte", "PwC", "Capgemini", "SAP"] },
    ],
    facultyInfo: partial.facultyInfo || { withPhD: 300, withoutPhD: 100, facultyStudentRatio: "1:12" },
    studentDemographics: partial.studentDemographics || { outsideStatePercent: 60, withinStatePercent: 40, boysPercent: 70, girlsPercent: 30 },
    hostelFacilities: partial.hostelFacilities || {
      hostelFeesPerYear: 1.2,
      hostelCapacity: 8000,
      libraryBooksCount: 500000,
      sportsFacilities: ["Cricket", "Football", "Basketball", "Badminton", "Gym"],
      labs: ["AI Lab", "High-Performance Computing Lab", "Robotics Lab", "IoT & Embedded Systems Lab"],
    },
    expenditureOutcomes: partial.expenditureOutcomes || { graduationPercent: 92, placementPercent: 96, annualCapexCrore: 220, annualOpexCrore: 320 },
    campusLife: partial.campusLife || {
      description: "Student life blends academics with a rich co-curricular ecosystem—120+ active clubs across technology, culture, entrepreneurship, and sports. Annual technical and cultural fests attract national participation. Dedicated maker-spaces, a 24x7 library, and vibrant hostel communities create a collaborative environment that encourages experimentation and leadership.",
      hangoutSpots: ["Students' Activity Center", "Central Library lawns", "Innovation Hub", "Hostel Quadrangles"],
      culturalEvents: ["Tech Fest", "Cultural Night", "Research Expo", "Entrepreneurship Summit"],
      hackathons: ["National Hackathon", "Smart India Hackathon", "Open Source Sprint"],
    },
    whyChoose: partial.whyChoose || [
      "Consistently high placement rates with rising average packages",
      "Project-based pedagogy and modern electives in frontier areas",
      "Strong research culture with funded labs and publication support",
      "Industry-connected curriculum and compulsory internships",
      "Active incubation center and access to alumni mentors",
      "Large, green campus with excellent hostel and sports facilities",
    ],
    faqs: partial.faqs || [
      { question: "What are the major admission routes?", answer: "For undergraduate engineering programs, admission typically occurs through national exams such as JEE Main/Advanced or institute-specific tests. Postgraduate admissions (M.Tech/MSc) rely on GATE and departmental screening. MBA admissions accept CAT/GMAT and include group discussion and personal interviews." },
      { question: "Is financial aid or scholarship available?", answer: "Yes. The institute offers need-based fee concessions, merit scholarships, and government-backed schemes. Students can also apply for external fellowships and industry-sponsored assistantships for research roles." },
      { question: "Do students get internship opportunities?", answer: "Absolutely. Most programs include a mandatory internship. The Career Development Cell partners with leading companies for summer internships, and many students convert internships into pre-placement offers (PPOs)." },
      { question: "How strong is the alumni network?", answer: "The alumni network spans top technology firms, startups, academia, and public sector organizations. Alumni chapters actively mentor students, fund labs, and support innovation challenges and seed grants." },
      { question: "What kind of campus support exists for startups?", answer: "Dedicated pre-incubation and incubation facilities provide lab access, mentorship, IP support, and investor connects. Selected student founders receive seed grants and credits for entrepreneurial projects." },
    ],
    // New counts/summaries with sensible defaults derived from programs/placements
    coursesOfferedCount: partial.coursesOfferedCount ?? (partial.programs?.length || defaultPrograms.length),
    streamsOffered: partial.streamsOffered || Array.from(new Set((partial.programs || defaultPrograms).map(p => p.name.split(" ")[1] || "Engineering"))).slice(0, 6),
    approvedIntakeTotal: partial.approvedIntakeTotal ?? (partial.programs || defaultPrograms).reduce((sum, p) => sum + (p.intake || 0), 0),
    totalStudents: partial.totalStudents ?? 8000,
    careerOpportunities: partial.careerOpportunities || [
      "Software Engineer / Data Engineer",
      "AI/ML Engineer / Research Engineer",
      "VLSI / Embedded Systems Engineer",
      "Product / Program Manager",
      "Consulting / Analyst roles",
      "Higher studies and research (MS/PhD)",
    ],
    packagesSummary: partial.packagesSummary || { averageLpa: 14.2, medianLpa: 12.0, highestLpa: 65 },
    studentsPlacedLastYear: partial.studentsPlacedLastYear ?? Math.round(0.92 * (partial.totalStudents ?? 8000) / 4),
    topRecruitersOverall: partial.topRecruitersOverall || ["Google", "Microsoft", "Amazon", "NVIDIA", "TCS", "Accenture", "Deloitte"],
    contact: partial.contact || { website: "https://www.example.edu", email: "info@example.edu", phone: "+91-0000000000", address: `${partial.name}, ${partial.location}` },
    extended: partial.extended || {
      rankings: [
        { framework: "NIRF Engineering", year: 2024, rank: partial.nirfRank, note: "Based on teaching, learning, research, and perception" },
        { framework: "QS Asia Subject: Engineering", year: 2024, rank: "Top 200" },
      ],
      admissions: {
        ugEntranceExams: ["JEE Main", "JEE Advanced", "Institute Test (where applicable)"],
        pgEntranceExams: ["GATE", "CAT (for MBA)", "Institute Interview"],
        typicalCutoffsNote: "Top branches close within early rounds for top AIR; state quota varies by category.",
        applicationProcess: "Register on the national counseling portal, fill choices, lock, and report for document verification; PG via CCMT/COAP/Institute portal.",
        importantDatesNote: "UG counseling typically June–August; PG rounds May–July; MBA cycle Oct–Mar.",
      },
      scholarships: {
        institute: ["Merit Scholarships", "Need-based Fee Waiver", "Research Assistantships"],
        government: ["NSP Scholarships", "State BC/MBC/SC/ST schemes", "AICTE Pragati & Saksham"],
        industry: ["Corporate fellowships", "Chair scholarships"],
        notes: "Students can combine institute schemes with external fellowships subject to rules.",
      },
      researchCenters: [
        "Center for Artificial Intelligence and Data Science",
        "Robotics and Autonomous Systems Lab",
        "Sustainable Energy and Materials Research Center",
        "High Performance Computing Center",
      ],
      collaborations: [
        "MoU with IITs/NITs for joint supervision",
        "Industry labs with NVIDIA, Microsoft, and SAP",
        "International exchange with EU and US universities",
      ],
      infrastructure: {
        classroomsSmartEnabled: true,
        hostelsBlocks: 18,
        cafeterias: 6,
        medicalCenter24x7: true,
        auditoriums: 2,
        sportsComplexes: 2,
        innovationLabs: 5,
        libraryDigitalSubscriptions: 120,
      },
      clubsAndSocieties: [
        "Coding Club", "Entrepreneurship Cell", "Robotics Society", "Aero Modelling", "Finance & Consulting Club", "Debating Society", "Music & Dance", "Photography", "Literary Society", "Drama Club"
      ],
      notableAlumni: [
        "Founders of deep-tech startups in AI/Robotics",
        "Senior engineers at FAANG companies",
        "Civil services officers and policy fellows",
      ],
      connectivity: {
        nearestAirport: "International Airport within 30–60 km depending on campus",
        nearestRailway: "Major junction within 5–20 km with frequent connectivity",
        campusTransport: "Battery-operated campus shuttles; public buses at main gate",
      },
    },
  };
}

export const colleges: College[] = [
  createCollege({ id: "clg-1", slug: "iit-madras", name: "IIT Madras", state: "Tamil Nadu", location: "Chennai, Tamil Nadu", nirfRank: 1, highestPackageLpa: 1.5 * 100, establishmentYear: 1959 }),
  createCollege({ id: "clg-2", slug: "iit-delhi", name: "IIT Delhi", state: "Delhi", location: "New Delhi, Delhi", nirfRank: 2, establishmentYear: 1961 }),
  createCollege({ id: "clg-3", slug: "iit-bombay", name: "IIT Bombay", state: "Maharashtra", location: "Mumbai, Maharashtra", nirfRank: 3, establishmentYear: 1958 }),
  createCollege({ id: "clg-4", slug: "iit-kanpur", name: "IIT Kanpur", state: "Uttar Pradesh", location: "Kanpur, Uttar Pradesh", nirfRank: 4, establishmentYear: 1959 }),
  createCollege({ id: "clg-5", slug: "iit-kharagpur", name: "IIT Kharagpur", state: "West Bengal", location: "Kharagpur, West Bengal", nirfRank: 5, establishmentYear: 1951 }),
  createCollege({ id: "clg-6", slug: "iit-roorkee", name: "IIT Roorkee", state: "Uttarakhand", location: "Roorkee, Uttarakhand", nirfRank: 6, establishmentYear: 1847 }),
  createCollege({ id: "clg-7", slug: "iit-guwahati", name: "IIT Guwahati", state: "Assam", location: "Guwahati, Assam", nirfRank: 7, establishmentYear: 1994 }),
  createCollege({ id: "clg-8", slug: "bits-pilani", name: "BITS Pilani", state: "Rajasthan", location: "Pilani, Rajasthan", nirfRank: 18, establishmentYear: 1964, naacGrade: "A" }),
  createCollege({ id: "clg-8a", slug: "bits-goa", name: "BITS Goa", state: "Goa", location: "Zuarinagar, South Goa", nirfRank: 18, establishmentYear: 2004, naacGrade: "A" }),
  createCollege({ id: "clg-8b", slug: "bits-hyderabad", name: "BITS Hyderabad", state: "Telangana", location: "Hyderabad, Telangana", nirfRank: 18, establishmentYear: 2008, naacGrade: "A" }),
  createCollege({ id: "clg-8c", slug: "bits-mumbai", name: "BITS Mumbai", state: "Maharashtra", location: "Mumbai, Maharashtra", nirfRank: 18, establishmentYear: 2024, naacGrade: "A" }),
  createCollege({ id: "clg-9", slug: "iit-hyderabad", name: "IIT Hyderabad", state: "Telangana", location: "Sangareddy, Telangana", nirfRank: 8, establishmentYear: 2008 }),
  createCollege({ id: "clg-10", slug: "iiit-hyderabad", name: "IIIT Hyderabad", state: "Telangana", location: "Hyderabad, Telangana", nirfRank: 55, establishmentYear: 1998 }),
  createCollege({ id: "clg-11", slug: "nit-trichy", name: "National Institute of Technology Tiruchirappalli", state: "Tamil Nadu", location: "Tiruchirappalli, Tamil Nadu", nirfRank: 9, establishmentYear: 1964 }),
  createCollege({ id: "clg-12", slug: "nit-karnataka", name: "National Institute of Technology Karnataka", state: "Karnataka", location: "Surathkal, Karnataka", nirfRank: 12, establishmentYear: 1960 }),
  createCollege({ id: "clg-13", slug: "nit-warangal", name: "National Institute of Technology Warangal", state: "Telangana", location: "Warangal, Telangana", nirfRank: 21, establishmentYear: 1959 }),
  createCollege({ id: "clg-14", slug: "vit-vellore", name: "VIT Vellore", state: "Tamil Nadu", location: "Vellore, Tamil Nadu", nirfRank: 11, establishmentYear: 1984, logoUrl: "/src/assets/vit_logo.png" }),
  createCollege({ id: "clg-15", slug: "anna-university-ceg", name: "Anna University (CEG)", state: "Tamil Nadu", location: "Chennai, Tamil Nadu", nirfRank: 22, establishmentYear: 1794 }),
  createCollege({ id: "clg-16", slug: "jadavpur-university", name: "Jadavpur University", state: "West Bengal", location: "Kolkata, West Bengal", nirfRank: 10, establishmentYear: 1906 }),
  createCollege({ id: "clg-17", slug: "manipal-mit", name: "Manipal Institute of Technology", state: "Karnataka", location: "Manipal, Karnataka", nirfRank: 43, establishmentYear: 1957 }),
  createCollege({ id: "clg-18", slug: "amrita-coimbatore", name: "Amrita Vishwa Vidyapeetham (Coimbatore)", state: "Tamil Nadu", location: "Coimbatore, Tamil Nadu", nirfRank: 19, establishmentYear: 1994 }),
  createCollege({ id: "clg-19", slug: "psg-tech", name: "PSG College of Technology", state: "Tamil Nadu", location: "Coimbatore, Tamil Nadu", nirfRank: 63, establishmentYear: 1951 }),
  createCollege({ id: "clg-20", slug: "dtu-delhi", name: "Delhi Technological University (DTU)", state: "Delhi", location: "New Delhi, Delhi", nirfRank: 29, establishmentYear: 1941 }),
  createCollege({ id: "clg-21", slug: "srm", name: "SRM Institute of Science and Technology", state: "Tamil Nadu", location: "Chennai, Tamil Nadu", nirfRank: 14, establishmentYear: 1985 }),
  createCollege({ id: "clg-22", slug: "thapar", name: "Thapar Institute of Engineering and Technology", state: "Punjab", location: "Patiala, Punjab", nirfRank: 29, establishmentYear: 1956 }),
  createCollege({ id: "clg-23", slug: "soa-bhubaneswar", name: "Siksha 'O' Anusandhan (SOA) Bhubaneswar", state: "Odisha", location: "Bhubaneswar, Odisha", nirfRank: 22, establishmentYear: 1996 }),
  createCollege({ id: "clg-24", slug: "amity-noida", name: "Amity University, Noida", state: "Uttar Pradesh", location: "Noida, Uttar Pradesh", nirfRank: 30, establishmentYear: 2005 }),
  createCollege({ id: "clg-25", slug: "chandigarh-university", name: "Chandigarh University", state: "Punjab", location: "Mohali, Punjab", nirfRank: 32, establishmentYear: 2012 }),
  createCollege({ id: "clg-26", slug: "kl-university", name: "KL University (KLEF)", state: "Andhra Pradesh", location: "Vaddeswaram, Guntur", nirfRank: 35, establishmentYear: 1980 }),
  createCollege({ id: "clg-27", slug: "kalasalingam", name: "Kalasalingam Academy of Research and Education", state: "Tamil Nadu", location: "Krishnankoil, Virudhunagar", nirfRank: 33, establishmentYear: 1984 }),
  // NIT Colleges
  createCollege({ id: "clg-28", slug: "nit-rourkela", name: "National Institute of Technology Rourkela", state: "Odisha", location: "Rourkela, Odisha", nirfRank: 15, establishmentYear: 1961 }),
  createCollege({ id: "clg-30", slug: "nit-calicut", name: "National Institute of Technology Calicut", state: "Kerala", location: "Calicut, Kerala", nirfRank: 16, establishmentYear: 1961 }),
  createCollege({ id: "clg-31", slug: "nit-agartala", name: "National Institute of Technology Agartala", state: "Tripura", location: "Agartala, Tripura", nirfRank: 45, establishmentYear: 2006 }),
  createCollege({ id: "clg-32", slug: "nit-delhi", name: "National Institute of Technology Delhi", state: "Delhi", location: "New Delhi, Delhi", nirfRank: 25, establishmentYear: 2010 }),
  createCollege({ id: "clg-33", slug: "nit-jalandhar", name: "National Institute of Technology Jalandhar", state: "Punjab", location: "Jalandhar, Punjab", nirfRank: 38, establishmentYear: 1987 }),
  createCollege({ id: "clg-34", slug: "nit-durgapur", name: "National Institute of Technology Durgapur", state: "West Bengal", location: "Durgapur, West Bengal", nirfRank: 28, establishmentYear: 1960 }),
  createCollege({ id: "clg-35", slug: "nit-silchar", name: "National Institute of Technology Silchar", state: "Assam", location: "Silchar, Assam", nirfRank: 32, establishmentYear: 1967 }),
  createCollege({ id: "clg-36", slug: "nit-jamshedpur", name: "National Institute of Technology Jamshedpur", state: "Jharkhand", location: "Jamshedpur, Jharkhand", nirfRank: 31, establishmentYear: 1960 }),
  createCollege({ id: "clg-37", slug: "nit-kurukshetra", name: "National Institute of Technology Kurukshetra", state: "Haryana", location: "Kurukshetra, Haryana", nirfRank: 26, establishmentYear: 1963 }),
  createCollege({ id: "clg-38", slug: "nit-hamirpur", name: "National Institute of Technology Hamirpur", state: "Himachal Pradesh", location: "Hamirpur, Himachal Pradesh", nirfRank: 48, establishmentYear: 1986 }),
  createCollege({ id: "clg-39", slug: "nit-meghalaya", name: "National Institute of Technology Meghalaya", state: "Meghalaya", location: "Shillong, Meghalaya", nirfRank: 65, establishmentYear: 2010 }),
  createCollege({ id: "clg-40", slug: "nit-srinagar", name: "National Institute of Technology Srinagar", state: "Jammu and Kashmir", location: "Srinagar, Jammu and Kashmir", nirfRank: 42, establishmentYear: 1960 }),
  createCollege({ id: "clg-41", slug: "nit-patna", name: "National Institute of Technology Patna", state: "Bihar", location: "Patna, Bihar", nirfRank: 40, establishmentYear: 2004 }),
  createCollege({ id: "clg-42", slug: "nit-goa", name: "National Institute of Technology Goa", state: "Goa", location: "Ponda, Goa", nirfRank: 58, establishmentYear: 2010 }),
  createCollege({ id: "clg-43", slug: "nit-manipur", name: "National Institute of Technology Manipur", state: "Manipur", location: "Imphal, Manipur", nirfRank: 62, establishmentYear: 2010 }),
  createCollege({ id: "clg-44", slug: "nit-uttarakhand", name: "National Institute of Technology Uttarakhand", state: "Uttarakhand", location: "Srinagar, Uttarakhand", nirfRank: 67, establishmentYear: 2010 }),
  createCollege({ id: "clg-45", slug: "nit-arunachal-pradesh", name: "National Institute of Technology Arunachal Pradesh", state: "Arunachal Pradesh", location: "Yupia, Arunachal Pradesh", nirfRank: 72, establishmentYear: 2010 }),
  createCollege({ id: "clg-46", slug: "nit-sikkim", name: "National Institute of Technology Sikkim", state: "Sikkim", location: "Ravangla, Sikkim", nirfRank: 75, establishmentYear: 2010 }),
  createCollege({ id: "clg-47", slug: "nit-mizoram", name: "National Institute of Technology Mizoram", state: "Mizoram", location: "Aizawl, Mizoram", nirfRank: 78, establishmentYear: 2010 }),
  createCollege({ id: "clg-48", slug: "nit-nagaland", name: "National Institute of Technology Nagaland", state: "Nagaland", location: "Dimapur, Nagaland", nirfRank: 80, establishmentYear: 2010 }),
  createCollege({ id: "clg-49", slug: "nit-puducherry", name: "National Institute of Technology Puducherry", state: "Puducherry", location: "Karaikal, Puducherry", nirfRank: 70, establishmentYear: 2010 }),
  createCollege({ id: "clg-50", slug: "nit-andhra-pradesh", name: "National Institute of Technology Andhra Pradesh", state: "Andhra Pradesh", location: "Tadepalligudem, Andhra Pradesh", nirfRank: 68, establishmentYear: 2015 }),
  createCollege({ id: "clg-51", slug: "nit-raipur", name: "National Institute of Technology Raipur", state: "Chhattisgarh", location: "Raipur, Chhattisgarh", nirfRank: 35, establishmentYear: 1956 }),
  createCollege({ id: "clg-52", slug: "nit-surat", name: "National Institute of Technology Surat", state: "Gujarat", location: "Surat, Gujarat", nirfRank: 37, establishmentYear: 1961 }),
  createCollege({ id: "clg-53", slug: "nit-assam", name: "National Institute of Technology Assam", state: "Assam", location: "Silchar, Assam", nirfRank: 32, establishmentYear: 1967 }),
  // IIIT Colleges
  createCollege({ id: "clg-54", slug: "abv-iiitm-gwalior", name: "ABV-IIITM Gwalior", state: "Madhya Pradesh", location: "Gwalior, Madhya Pradesh", nirfRank: 101, establishmentYear: 1997 }),
  createCollege({ id: "clg-55", slug: "iiitdm-kancheepuram", name: "IIITDM Kancheepuram", state: "Tamil Nadu", location: "Chennai, Tamil Nadu", nirfRank: 182, establishmentYear: 2007 }),
  createCollege({ id: "clg-56", slug: "iiitdm-jabalpur", name: "IIITDM Jabalpur", state: "Madhya Pradesh", location: "Jabalpur, Madhya Pradesh", nirfRank: 198, establishmentYear: 2005 }),
  createCollege({ id: "clg-57", slug: "iiit-bangalore", name: "IIIT Bangalore", state: "Karnataka", location: "Bengaluru, Karnataka", nirfRank: 74, establishmentYear: 1999 }),
  createCollege({ id: "clg-58", slug: "iiit-pune", name: "IIIT Pune", state: "Maharashtra", location: "Pune, Maharashtra", nirfRank: 190, establishmentYear: 2016 }),
  createCollege({ id: "clg-59", slug: "iiit-delhi", name: "IIIT Delhi", state: "Delhi", location: "New Delhi, Delhi", nirfRank: 75, establishmentYear: 2008 }),
  createCollege({ id: "clg-60", slug: "iiit-guwahati", name: "IIIT Guwahati", state: "Assam", location: "Guwahati, Assam", nirfRank: 112, establishmentYear: 2013 }),
  createCollege({ id: "clg-61", slug: "iiit-bhagalpur", name: "IIIT Bhagalpur", state: "Bihar", location: "Bhagalpur, Bihar", nirfRank: 189, establishmentYear: 2017 }),
  createCollege({ id: "clg-62", slug: "iiit-ranchi", name: "IIIT Ranchi", state: "Jharkhand", location: "Ranchi, Jharkhand", nirfRank: 186, establishmentYear: 2016 }),
  createCollege({ id: "clg-63", slug: "iiit-lucknow", name: "IIIT Lucknow", state: "Uttar Pradesh", location: "Lucknow, Uttar Pradesh", nirfRank: 182, establishmentYear: 2015 }),
  createCollege({ id: "clg-64", slug: "iiit-bhopal", name: "IIIT Bhopal", state: "Madhya Pradesh", location: "Bhopal, Madhya Pradesh", nirfRank: 187, establishmentYear: 2017 }),
  createCollege({ id: "clg-65", slug: "iiit-dharwad", name: "IIIT Dharwad", state: "Karnataka", location: "Dharwad, Karnataka", nirfRank: 184, establishmentYear: 2015 }),
  createCollege({ id: "clg-66", slug: "iiit-nagpur", name: "IIIT Nagpur", state: "Maharashtra", location: "Nagpur, Maharashtra", nirfRank: 182, establishmentYear: 2016 }),
  createCollege({ id: "clg-67", slug: "iiit-vadodara", name: "IIIT Vadodara", state: "Gujarat", location: "Vadodara, Gujarat", nirfRank: 179, establishmentYear: 2013 }),
  createCollege({ id: "clg-68", slug: "iiit-kottayam", name: "IIIT Kottayam", state: "Kerala", location: "Kottayam, Kerala", nirfRank: 181, establishmentYear: 2015 }),
  createCollege({ id: "clg-69", slug: "iiit-tiruchirappalli", name: "IIIT Tiruchirappalli", state: "Tamil Nadu", location: "Tiruchirappalli, Tamil Nadu", nirfRank: 185, establishmentYear: 2016 }),
  createCollege({ id: "clg-70", slug: "iiit-una", name: "IIIT Una", state: "Himachal Pradesh", location: "Una, Himachal Pradesh", nirfRank: 180, establishmentYear: 2014 }),
  createCollege({ id: "clg-71", slug: "iiit-sonepat", name: "IIIT Sonepat", state: "Haryana", location: "Sonepat, Haryana", nirfRank: 183, establishmentYear: 2014 }),
  createCollege({ id: "clg-72", slug: "iiit-sri-city", name: "IIIT Sri City (Chittoor)", state: "Andhra Pradesh", location: "Sri City, Andhra Pradesh", nirfRank: 176, establishmentYear: 2013 }),
  createCollege({ id: "clg-73", slug: "iiit-kota", name: "IIIT Kota", state: "Rajasthan", location: "Kota, Rajasthan", nirfRank: 178, establishmentYear: 2013 }),
  createCollege({ id: "clg-74", slug: "iiit-kalyani", name: "IIIT Kalyani", state: "West Bengal", location: "Kalyani, West Bengal", nirfRank: 177, establishmentYear: 2014 }),
  createCollege({ id: "clg-75", slug: "iiit-agartala", name: "IIIT Agartala", state: "Tripura", location: "Agartala, Tripura", nirfRank: 191, establishmentYear: 2018 }),
  createCollege({ id: "clg-76", slug: "iiit-manipur", name: "IIIT Manipur", state: "Manipur", location: "Imphal, Manipur", nirfRank: 188, establishmentYear: 2015 }),
];


