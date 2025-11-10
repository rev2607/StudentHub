import React, { useEffect, useRef } from 'react';
import { X, Download, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import { generateBrochurePDF, BrochureData, cleanBrochureText } from '../utils/pdfGenerator';
import { generateImprovedBrochurePDF } from '../utils/improvedPdfGenerator';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  collegeName: string;
  collegeData?: {
    Name?: string;
    About?: {
      Description?: string;
      StudentStrength?: string;
    };
    Location?: {
      City?: string;
      State?: string;
    };
    Rankings?: {
      NIRF2025?: {
        Overall?: number;
        Engineering?: number;
      };
    };
  };
  brochurePath?: string;
}

const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  collegeName,
  collegeData,
  brochurePath = '/brochures/IIT_Madras_Brochure.pdf'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const downloadButtonRef = useRef<HTMLButtonElement>(null);
  const [pdfExists, setPdfExists] = React.useState<boolean | null>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = React.useState(false);
  const brochureContentRef = useRef<HTMLDivElement>(null);

  const getCollegeSlug = React.useCallback((name: string): string => {
    // Handle IIT Madras and other colleges with parentheses
    if (name.toLowerCase().includes('iit madras')) return 'iit-madras';
    if (name.toLowerCase().includes('iit bombay')) return 'iit-bombay';
    if (name.toLowerCase().includes('iit delhi')) return 'iit-delhi';
    if (name.toLowerCase().includes('iit kanpur')) return 'iit-kanpur';
    if (name.toLowerCase().includes('iit kharagpur')) return 'iit-kharagpur';
    if (name.toLowerCase().includes('iit roorkee')) return 'iit-roorkee';
    if (name.toLowerCase().includes('iit guwahati')) return 'iit-guwahati';
    if (name.toLowerCase().includes('iit hyderabad')) return 'iit-hyderabad';
    if (name.toLowerCase().includes('iit bhu') || name.toLowerCase().includes('bhu varanasi')) return 'iit-bhu-varanasi';
    if (name.toLowerCase().includes('nit trichy')) return 'nit-trichy';
    if (name.toLowerCase().includes('vit vellore')) return 'vit-vellore';
    if (name.toLowerCase().includes('bits pilani')) return 'bits-pilani';
    
    // Fallback: convert to slug format
    return name.toLowerCase()
      .replace(/\s*\([^)]*\)\s*/g, '') // Remove parentheses and content
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }, []);

  const checkPdfExists = React.useCallback(async () => {
    try {
      // Check both backend API and public folder
      const collegeSlug = getCollegeSlug(collegeName);
      const apiPath = `/api/colleges/download/${collegeSlug}`;
      
      // Try API first
      let response = await fetch(apiPath, { method: 'HEAD' });
      
      // If API fails, try public folder
      if (!response.ok) {
        response = await fetch(brochurePath, { method: 'HEAD' });
      }
      
      setPdfExists(response.ok);
    } catch {
      setPdfExists(false);
    }
  }, [collegeName, brochurePath, getCollegeSlug]);

  // Focus trap and escape key handler
  useEffect(() => {
    if (!isOpen) {
      // Ensure body scroll is restored when modal is closed
      document.body.style.overflow = 'unset';
      return;
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleTab = (e: KeyboardEvent) => {
      if (!modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);
    document.body.style.overflow = 'hidden';

    // Focus the close button when modal opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    // Check if PDF exists
    checkPdfExists();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, checkPdfExists]);

  // Get comprehensive IIT Bombay brochure data - WITH ALL SECTIONS
  const getIITBombayBrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology Bombay (IIT Bombay) is India's second IIT, and one of the world's top technology universities, renowned for its academic excellence, innovation, and entrepreneurship.

Located beside the serene Powai Lake, the 550-acre green campus combines world-class infrastructure, a dynamic research ecosystem, and global industry linkages.

Established: 1958 | Type: Public Technical University | Campus Area: 550 acres (Powai, Mumbai)
NIRF 2025 Rank: Overall #3 | Engineering #3
QS World University Rank 2026: #149 | QS Asia Rank: #40
Students: 10,000+ (UG, PG, Ph.D., International) | Faculty: 550+ | Departments: 17
Collaboration Origin: Indo–Soviet cooperation agreement

Since its inception in 1958, IIT Bombay has nurtured leaders across engineering, research, management, and design — driving India's technological progress and global competitiveness. The institute maintains strong industry partnerships and has been instrumental in fostering innovation and entrepreneurship through its Society for Innovation & Entrepreneurship (SINE).`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

IIT Bombay offers comprehensive programs across engineering, science, management, and design disciplines.

UNDERGRADUATE PROGRAMS

• B.Tech (4 years) – ₹9.2 L (total) | Seats: 1,200 | Entrance: JEE Advanced + JoSAA
  Popular Branches: Computer Science (AIR 66), Data Science & AI (AIR 100), Electrical (AIR 285), Mechanical (AIR 1500), Civil (AIR 3000)
  First-Year Fee: ₹2.3 L | Hostel Fee: ₹39,400/semester

• B.Des (4 years) – ₹9.2 L (total) | Seats: 15 | Entrance: UCEED

• Dual Degree (B.Tech + M.Tech, 5 years) – ₹11.0 L (total) | Entrance: JEE Advanced + JoSAA

POSTGRADUATE PROGRAMS

• M.Tech (2 years) – ₹66,700/year | Entrance: GATE + COAP
  Specializations: 50+ (AI, Robotics, Energy Systems, Nanotech, Biomedical, Climate Science)

• MBA (2 years) – ₹4.33 L/year (total ~₹8.66 L) | Entrance: CAT + WAT + PI
  Offered through Shailesh J. Mehta School of Management (SJMSOM) | Seats: 120

• M.Sc (2 years) – ₹78,600/year | Entrance: IIT JAM | Seats: 200

• M.Des (2 years) – ₹2.3 L/year | Entrance: CEED

DOCTORAL PROGRAMS

• Ph.D (3–5 years) – ₹44,000/year (~₹1.32 L total) | Entrance: GATE/UGC-NET/CSIR-UGC + Interview
  Programs: 50+ | Research Areas: AI, Robotics, Energy Systems, Nanotech, Biomedical, Climate Science`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

Mode: National entrance-based merit selection with centralized counseling

Reservation Policy: SC 15%, ST 7.5%, OBC-NCL 27%, EWS 10%, PwD 5%

B.Tech Programs:
• B.Tech CSE – JEE Advanced | JoSAA | 2025 Cutoff: AIR 66 (General)
• Data Science & AI – JEE Advanced | JoSAA | 2025 Cutoff: AIR 100 (General)
• Electrical – JEE Advanced | JoSAA | 2025 Cutoff: AIR 285 (General)
• Mechanical – JEE Advanced | JoSAA | 2025 Cutoff: AIR 1500 (General)
• Civil – JEE Advanced | JoSAA | 2025 Cutoff: AIR 3000 (General)

Postgraduate Programs:
• MBA – CAT + PI | SJMSOM | 94%ile (General)
• M.Tech – GATE | COAP | 600+ Score
• Ph.D – GATE/UGC-NET | Departmental | Based on proposal + interview

Application: Online via respective exam portals (JEE, GATE, CAT, JAM, UCEED, CEED)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

IIT Bombay maintains one of India's strongest placement ecosystems with excellent career outcomes for its graduates.

Highlights (2024-25):
• Total Offers: 1,500
• Recruiters: 300
• Highest Package (International): ₹50.0 Cr
• Highest Domestic: ₹1.2 Cr
• Average Package: ₹25.0 L
• CSE Average: ₹35.0 L
• ECE Average: ₹30.0 L
• PPOs: 280
• MBA Median: ₹20.0 L

Placement Trends (2022–2025):
• 2025: Avg ₹20.0+ LPA | Intl Highest ₹2.05 Cr | Domestic Highest ₹1.2 Cr | PPOs 222
• 2024: Avg ₹20.0 LPA | Intl Highest ₹2.05 Cr | Domestic Highest ₹1.2 Cr | PPOs 213
• 2023: Avg ₹17.0 LPA | Intl Highest ₹1.06 Cr | Domestic Highest ₹1.3 Cr | PPOs 200+
• 2022: Avg ₹16.0 LPA | Intl Highest ₹2.15 Cr | Domestic Highest ₹2.15 Cr | PPOs 180

Top Recruiters:
Jane Street, Two Sigma, Google, Microsoft, Amazon, Apple, Qualcomm, Goldman Sachs, Texas Instruments, Intel, McKinsey, BCG, JP Morgan, Tower Research, Rubrik, Morgan Stanley

Popular Roles:
SDE, Data Scientist, Quant Trader, Product Engineer, Consultant, Analyst, R&D Engineer

The institute's strong industry connections and excellent placement support ensure outstanding career opportunities for students.`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025:
• Overall: #3 (India's top 3 since 2016)
• Engineering: #3 (High research output)

QS World University 2026:
• Global: #149 (Top IIT globally)

QS Asia 2025:
• Regional: #40 (Top 50 in Asia)

India Today 2024:
• Engineering: #2 (Leading perception index)

ARIIA 2025:
• Innovation: Excellent (Startup ecosystem leader)

NIRF Scores (2025):
TLR – 73.06 | RPC – 72.05 | GO – 82.9 | OI – 64.95 | Perception – 51.24

IIT Bombay consistently ranks among the top engineering institutes in India and globally, reflecting its excellence in teaching, research, innovation, and graduate outcomes.`,
      campus: `CAMPUS & INFRASTRUCTURE

Area: 550 acres | Hostels: 18 | Labs: 100+

The Powai campus integrates sustainability, academics, and recreation with cutting-edge facilities.

Key Facilities:
• Central Library – 240,000 books, 118,925 e-journals, digital access, group study zones
• Research Labs – AI/ML, Nanotech, Robotics, Sustainable Energy, Bioengineering
• Hostels – Wi-Fi, study rooms, lounges, mess halls, indoor games, water purifiers
• Sports Complex – Olympic pool, gym, athletics track, courts for all sports
• Medical – IIT Bombay Hospital (24×7, specialist OPDs, ambulance)
• Amenities – Banks, ATMs, IIT Market, Post Office, Bookstores, Guest Houses

The campus provides a comprehensive living and learning environment that supports academic excellence, research, and holistic student development.`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Members: 550 | Departments: 17 | Research Funding (2024): ₹399 Cr | Patents Filed: 146
Ph.D Faculty: Majority | Centers of Excellence: 35+

Major Research Centers:
• Society for Innovation & Entrepreneurship (SINE)
• Industrial Research & Consultancy Centre (IRCC)
• Healthcare Informatics Centre
• Green Energy & Mobility Centre
• AI & Data Science Research Lab

Research Collaborations:
MIT (USA), Cambridge (UK), NTU (Singapore), TUM (Germany), Tohoku University (Japan), Rolls-Royce, John Cockerill, Monash University (Australia)

The institute fosters a culture of innovation and research excellence, with faculty and students working on cutting-edge projects that address global challenges. Strong industry partnerships and international collaborations enhance research impact and visibility.`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

IIT Bombay offers a vibrant and dynamic campus life that blends academic rigor with cultural richness and community engagement.

Flagship Events:
• Mood Indigo – Asia's largest cultural festival
• Techfest – India's top student-run technology fest
• Inter-IIT Sports Meet – Premier sports competition

Clubs & Societies (60+):
Robotics, Coding, E-Cell, Debate, Dance, Film, Photography, Social Impact, NSS, NCC

Lifestyle & Wellness:
Yoga center, gym, counseling cell, mental health support, and eco-living initiatives

The campus culture encourages students to explore their interests, develop leadership skills, and build lasting friendships while pursuing academic excellence.`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

IIT Bombay is committed to environmental sustainability and green campus initiatives:

• Solar-powered hostels and LED-lit pathways
• Water recycling and rainwater harvesting
• Electric shuttles and bicycle networks
• Tree-lined avenues and biodiversity gardens
• Zero-waste and carbon-neutral initiatives

The institute aims to achieve a carbon-neutral campus by 2035, demonstrating its commitment to sustainable development and environmental stewardship.`,
      vision: `VISION 2030 & GLOBAL OUTLOOK

Under the leadership of the Director and Deans' Council, IIT Bombay is shaping India's global technological leadership through:

Strategic Priorities:
• Expansion of AI, quantum, and sustainable energy research
• 1000+ patents & 500 startups via SINE
• Global Ph.D. joint programs with NTU, TUM, and MIT
• Enhanced online education via IIT BombayX and NPTEL
• Carbon-neutral campus target by 2035

The institute is committed to:
• Maintaining excellence in teaching and research
• Fostering innovation and entrepreneurship
• Building strong industry and international partnerships
• Promoting inclusive and sustainable development
• Preparing students to be leaders in their chosen fields

IIT Bombay continues to evolve as a premier institution that shapes the future of engineering education and research in India and globally.`,

      // ADDITIONAL COMPREHENSIVE SECTIONS
      clubs: `STUDENT CLUBS & SOCIETIES (60+)

TECHNICAL CLUBS:
• Robotics Club – Robot design, competitions, AI integration
• Coding Club – Competitive programming, hackathons, coding contests
• E-Cell – Entrepreneurship, startup incubation, business mentorship
• AI/ML Club – Machine learning projects, neural networks, deep learning
• Electronics Club – Circuit design, embedded systems, microcontrollers
• Drone Club – Unmanned aerial vehicles, autonomous systems, competitions

CULTURAL CLUBS:
• Dance, Music, Drama, Photography, Film Club
• Art Society, Literary Club, Debating Society
• Cultural festivals: Mood Indigo (Asia's largest), inter-hostel competitions

SPORTS:
• Cricket, Football, Basketball, Volleyball, Badminton, Tennis
• Swimming, Athletics, Martial Arts
• Team sports, individual sports, professional coaching

SOCIAL IMPACT:
• NSS (National Service Scheme) – Community service, social welfare
• Environmental Club – Sustainability projects, green initiatives
• Mentorship Programs – Peer support and guidance`,

      scholarships: `SCHOLARSHIPS & FINANCIAL AID

MERIT SCHOLARSHIPS:
• Institute Merit Scholarship – Top 5% performers: Full fee waiver
• Department Scholarships – Branch-wise merit awards: ₹1-2 L/year
• Research Scholarships – PhD and research assistantships: ₹31,000/month

FINANCIAL ASSISTANCE:
• Fee Waiver – Economically disadvantaged students
• Financial Aid – Need-based assistance up to ₹3 L/year
• Travel Grants – For conference participation and internships

GOVERNMENT SCHOLARSHIPS:
• National Scholarship Scheme (NSS)
• AICTE PRAGATI (Girl Students): Up to 50% fee waiver
• AICTE SAKSHAM (PwD Students): Full support
• State scholarships (SC/ST/OBC/EWS categories)

EXTERNAL SPONSORSHIPS:
• Corporate Fellowships: From Google, Microsoft, Amazon, etc.
• Foundation Grants: NGO and charitable trusts
• Industry Partnerships: Tech company scholarships

HOSTEL ASSISTANCE:
• Subsidized hostel fees: ₹39,400/semester (reduced for low-income)
• Mess fee assistance
• Emergency financial aid`,

      research: `RESEARCH & INNOVATION

Research Centers:
• Society for Innovation & Entrepreneurship (SINE) – Startup incubation
• Industrial Research & Consultancy Centre (IRCC)
• Healthcare Informatics Centre
• Green Energy & Mobility Centre
• AI & Data Science Research Lab
• 35+ Centers of Excellence across disciplines

Research Output:
• 2,000+ research publications annually
• 146+ patents filed (2024)
• Research funding: ₹399 Cr annually
• 1,000+ ongoing research projects
• 1,200+ research scholars (PhD students)

Key Research Areas:
→ Artificial Intelligence & Machine Learning
→ Quantum Computing & Quantum Information
→ Sustainable Energy & Clean Technology
→ Nanotechnology & Materials Science
→ Robotics & Autonomous Systems
→ Biomedical Engineering & Healthcare Tech
→ IoT, 5G, and Future Communications
→ Climate Science & Environmental Engineering

International Collaborations:
MIT (USA), Cambridge (UK), NTU (Singapore), TUM (Germany), Tohoku University (Japan)`,

      events: `ANNUAL EVENTS & FESTIVALS

TECHFEST (December):
• India's top student-run technology festival
• 100+ events across technical categories
• 10,000+ participants from across India
• Hackathons, coding competitions, robotics challenges
• Industry participation, celebrity lectures, performances
• Prize pool: ₹50+ lakhs

MOOD INDIGO (November):
• Asia's largest cultural festival
• 300+ events across music, dance, drama, comedy
• 100,000+ participants
• International acts and Indian performers
• 5-day extravaganza celebration

INTER-IIT SPORTS MEET:
• Premier national sports competition among IITs
• 20+ sports categories
• 1,000+ athletes from IITs
• Team and individual events
• Championships and podiums

OTHER MAJOR EVENTS:
• Code Titans – Coding competition with top prizes
• Rotary Lectures – Industry and research talks
• Seminar Series – Expert discussions on innovation
• Alumni Meet – Industry connections and networking`,
    };
  }, []);

  // Get comprehensive IIT Delhi brochure data
  const getIITDelhiBrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology Delhi (IIT Delhi) stands as one of India's premier institutions of higher technical education. Located in the heart of the national capital, it combines rigorous engineering, science and management programmes with strong research, industry engagement and student life.

With a sprawling 320-acre campus in Hauz Khas, South Delhi, IIT Delhi provides a top-tier academic ecosystem for national and international students.

Established: 1961 | Type: Public Technical University | Campus Area: 320 acres (Hauz Khas, South Delhi)
NIRF 2025: Overall #4 | Engineering #2
QS World University Ranking: #150 (approx) | QS Asia Ranking: #46 (approx)
Students: Over 10,000 (including international nationals) | Faculty: ~550 | Departments: ~16
Historical Significance: Third-oldest IIT in India, founded with Indo-British collaboration

IIT Delhi has been at the forefront of engineering education and research in India, maintaining a strong reputation for academic excellence, innovation, and industry collaboration. The institute offers comprehensive programs across engineering, science, management, and design disciplines.`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

IIT Delhi offers 129+ courses spanning engineering, science, management, architecture, and design disciplines.

UNDERGRADUATE PROGRAMS

• B.Tech (4 years) – ₹9.2 L (total) | Seats: ~1,000-1,200 | Entrance: JEE Advanced + JoSAA
  Popular Specializations: Computer Science & Engineering, Electrical Engineering, Mechanical Engineering
  First-Year Fee: ₹2.3 L | Hostel & Mess Fee: ₹39,400/semester

POSTGRADUATE & DOCTORAL PROGRAMS

• M.Tech (2 years) – ₹66,700/year (total ~₹1.334 L) | Entrance: GATE + COAP
  Specializations: 50+ (AI, Data Science, VLSI, Power Systems, Robotics, and more)

• MBA (2 years) – ₹4.33 L/year (total ~₹8.66 L) | Entrance: CAT + PI
  Offered through Shailesh J. Mehta School of Management (SJMSOM)

• Ph.D (3–5 years) – ₹44,000/year (~₹1.32 L total for 3 years typical) | Entrance: GATE/UGC-NET/CSIR-UGC + Interview
  Programs: ~50 | Research Scholars: 1,200+

• Other Programs: M.Sc, B.Des, M.Des

Hostel & Mess Fee: ₹39,400 per semester

Popular UG branches are extremely competitive, with B.Tech CSE cut-off at AIR ~66 (General) in recent years.`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

Mode: National entrance-based merit selection with centralized counseling

Reservation Policy: SC 15%, ST 7.5%, OBC-NCL 27%, EWS 10%, PwD 5% (horizontal)

B.Tech Programs:
• B.Tech CSE – JEE Advanced | JoSAA | Indicative Cutoff: AIR ~66 (General)
• B.Tech Data Science & AI – JEE Advanced | JoSAA | Indicative Cutoff: AIR ~323 (General)
• B.Tech ECE – JEE Advanced | JoSAA | Indicative Cutoff: AIR ~605 (General)
• B.Tech Mechanical – JEE Advanced | JoSAA | Indicative Cutoff: AIR ~1,862 (General)

Postgraduate Programs:
• M.Tech – GATE | COAP | Varies by specialization (often 600+ score)
• MBA – CAT + PI | SJMSOM | ~94%ile (General)
• Ph.D – GATE/UGC-NET/CSIR-UGC | Departmental | Based on proposal + interview

Application: Online via respective exam portals (JEE, GATE, CAT, JAM)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

IIT Delhi maintains a strong placement ecosystem with excellent career outcomes for its graduates.

Highlights (2024-25):
• Total Offers: ~1,200+
• Recruiting Companies: ~250
• Highest Package: Up to ₹45 Cr (reported)
• Average Package (Overall): ~₹23.0 L/annum
• CSE Average: ~₹33.0 L
• ECE Average: ~₹29.0 L
• MBA Median: ~₹19.0 L
• PPOs (Pre-Placement Offers): ~220

Top Recruiters:
Jane Street, Two Sigma, Google, Microsoft, Amazon, Goldman Sachs, Qualcomm, Texas Instruments, Intel, Apple, Tower Research, McKinsey & Company

Popular Job Profiles:
Quantitative Trader, Software Development Engineer, Data Scientist, R&D Engineer, Consultant, Analytics Lead

The institute's strong industry connections and excellent placement support ensure outstanding career opportunities for students.`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025:
• Overall: #4 in India
• Engineering: #2 in India

QS World University Ranking:
• Global: ~#150 (approx)

QS Asia Ranking:
• Regional: ~#46 (approx)

Other Recognitions:
• India Today: Top Engineering Institute
• ARIIA: Innovation & Start-ups recognition

IIT Delhi consistently ranks among the top engineering institutes in India, reflecting its excellence in teaching, research, innovation, and graduate outcomes. The institute's strong reputation attracts top students and faculty from across India and internationally.`,
      campus: `CAMPUS & INFRASTRUCTURE

Area: ~320 acres in Hauz Khas (South Delhi) — a green, urban campus with academic, residential and recreational zones.

Key Facilities:
• Hostels: ~18-20 hostels (boys, girls) with WiFi, common study rooms, recreation areas
• Central Library: Large holdings, digital & print mix, 24×7 access
• Laboratories: ~100+ labs in AI, ML, VLSI, Nanotechnology, IoT and more
• Sports & Wellness: Swimming pool, athletics track, indoor stadium, courts for tennis, badminton, basketball, gym, yoga & wellness cell
• Health Centre: 24×7 hospital/clinic with emergency services, pharmacy
• Campus Amenities: Banks, ATMs, cafés, mess halls, student activity centre, conference halls

The campus provides a comprehensive living and learning environment that supports academic excellence, research, and holistic student development.`,
      faculty: `FACULTY, RESEARCH & INNOVATION

Faculty Strength: ~550 (majority PhD-qualified) across ~16 departments

Research Excellence:
• Strong research themes: Artificial Intelligence, Machine Learning, Sustainable Energy, Nanotechnology, Electric Mobility, Quantum Computing, Biomedical Engineering
• Industry tie-ups, start-ups, consultancy projects support impact-oriented research
• Research funding, patents and global collaborations are integral to the institute's mission

Alumni Network:
• Strong alumni network and global brand contribute to high research visibility and collaborations
• Alumni hold leadership positions in top companies and research institutions worldwide

The institute fosters a culture of innovation and research excellence, with faculty and students working on cutting-edge projects that address global challenges.`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

IIT Delhi offers a vibrant and dynamic campus life that blends academic rigor with cultural richness and community engagement.

Clubs & Culture:
• ~60+ student clubs covering technical (robotics, coding), cultural (music, dance, drama), entrepreneurship, social service
• Major events: "Tryst" (technical fest), "Rendezvous" (cultural fest) among others

Campus Culture:
• Strong peer-community, hostel culture, vibrant campus life
• Active participation in inter-college competitions, hackathons, and cultural events
• Emphasis on holistic development through clubs, societies, and extracurricular activities

Well-being:
• Wellness cell, counseling services, mental health support
• Sports facilities and recreational activities
• Peer support networks and mentorship programs

The campus culture encourages students to explore their interests, develop leadership skills, and build lasting friendships while pursuing academic excellence.`,
      vision: `VISION & STRATEGIC PRIORITIES

IIT Delhi aims to further its reputation as a global leader in engineering education and research and to deepen industry-academic linkages, promote entrepreneurship, enhance international collaborations, and foster inclusive innovation.

Strategic Priorities:
• Expanding interdisciplinary programmes and doctoral research in emerging areas
• Strengthening start-up and technology-transfer ecosystem
• Enhancing digital education, online programmes, and international outreach
• Improving infrastructure, sustainability, and student well-being

The institute is committed to:
• Maintaining excellence in teaching and research
• Fostering innovation and entrepreneurship
• Building strong industry and international partnerships
• Promoting inclusive and sustainable development
• Preparing students to be leaders in their chosen fields

IIT Delhi continues to evolve as a premier institution that shapes the future of engineering education and research in India and globally.`,
    };
  }, []);

  // Get comprehensive IIT Madras brochure data
  const getIITMadrasBrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology Madras (IIT Madras) is India's top-ranked engineering and technology institute, leading the National Institutional Ranking Framework (NIRF) since 2016.

Located in Chennai within a lush 617-acre campus that was once part of the Guindy National Park, IIT Madras integrates academic excellence, cutting-edge research, and entrepreneurial innovation.

Established: 1959 | Type: Public Technical University | Campus Area: 617 acres (part of Guindy National Park, Chennai, Tamil Nadu)
NIRF 2025: Overall Rank #1 | Engineering Rank #1 | Innovation Rank #1
QS 2026 World Rank: #250 | QS Asia Rank: #130
Students: ~10,000 | Faculty: 550 | Departments: 16
Motto: "Siddhirbhavati Karmaja" (Success is born out of action)
Collaboration: Established with Indo-German cooperation

Founded in 1959 under an Indo-German agreement, IIT Madras is recognized globally for pioneering contributions in AI, data science, energy, nanotechnology, ocean engineering, and aerospace systems. The institute hosts 36 Centers of Excellence, including the IIT Madras Research Park — India's first university-driven R&D hub linking 250+ companies.`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

IIT Madras offers 129 degree programs at undergraduate, postgraduate, and doctoral levels across engineering, science, design, and management disciplines.

UNDERGRADUATE PROGRAMS

• B.Tech (4 years) – ₹9.39 L (total) | Seats: 850 | Entrance: JEE Advanced + JoSAA
  Popular Branches: CSE, ECE, EE, Mechanical, Aerospace, Civil, Biotechnology, Metallurgy
  First-Year Fee: ₹2.53 L | Hostel Fee: ₹39,000/sem

• B.Tech + M.Tech (Dual Degree, 5 years) – ₹11.2 L (total) | Entrance: JEE Advanced + JoSAA

• BS Data Science & Applications (Online, 4 years) – ₹4.0 L (total) | Open enrollment
  Entrance: IITM Online Portal

POSTGRADUATE PROGRAMS

• M.Tech (2 years) – ₹91,000/year | Entrance: GATE + COAP
  Specializations: 50+ (AI, Data Science, Web Tech, Electrical, Mech, Civil)

• M.Sc (2 years) – ₹91,000/year | Entrance: IIT JAM
  Specializations: Physics, Chemistry, Mathematics

• MBA (2 years) – ₹5.81 L/year | Entrance: CAT + PI
  Specializations: Marketing, Finance, Analytics, Strategy

• Executive MBA (1.5 years) – ₹9.0 L (total) | Entrance: Institute Test
  For working professionals

• Ph.D (3–5 years) – ₹48,333/year | Entrance: GATE, CSIR-UGC, Interview
  Programs: 36 | Research Scholars: 1000+`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

Mode: National entrance-based merit selection with centralized counseling

Reservation Policy: SC 15%, ST 7.5%, OBC-NCL 27%, EWS 10%, PwD 5%

B.Tech Programs:
• B.Tech CSE – JEE Advanced | JoSAA | 2025 Cutoff: AIR 215 (General)
• Data Science & AI – JEE Advanced | JoSAA | 2025 Cutoff: AIR 420 (General)
• Electrical – JEE Advanced | JoSAA | 2025 Cutoff: AIR 650 (General)
• Mechanical – JEE Advanced | JoSAA | 2025 Cutoff: AIR 1850 (General)
• Civil – JEE Advanced | JoSAA | 2025 Cutoff: AIR 4200 (General)

Postgraduate Programs:
• M.Tech – GATE | COAP | 600+ Score
• MBA – CAT + PI | DoMS | 94% General percentile
• Ph.D – GATE/UGC-NET | Departmental | Based on proposal + interview

Application: Online via respective exam portals (JEE, GATE, CAT, JAM)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

IIT Madras has one of India's most robust placement ecosystems, powered by its Career Development Centre (CDC) and Research Park.

Highlights (2024-25):
• Total Offers: 1,832
• Companies: 256
• Highest Package (International): ₹43 Cr
• Highest Domestic: ₹1.2 Cr
• Average Package: ₹24.2 L
• CSE Average: ₹35 L
• ECE Average: ₹28 L
• PPOs: 240
• MBA Median: ₹17.9 L

Top Recruiters:
Jane Street, Two Sigma, Google, Microsoft, Amazon, Goldman Sachs, Intel, Qualcomm, Texas Instruments, Tower Research, Rubrik, Da Vinci, Apple, BlackRock

Popular Job Roles:
Quant Trader, Data Scientist, Software Engineer, Product Analyst, Hardware Engineer, Consultant, R&D Engineer`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025:
• Overall: #1 (Top in India since 2016)
• Engineering: #1 (Consistently #1 for a decade)
• Innovation: #1 (ARIIA: #1 Innovation Institute)

QS World University 2026:
• Global: #250 (Rising academic influence)

QS Asia 2025:
• Regional: #130 (Top in South Asia)

India Today 2024:
• Engineering: #1 (Highest perception score)

THE Engineering:
• Global: 301–400 Band (Strong research impact)

IIT Madras has maintained its position as India's #1 engineering institute for over a decade, demonstrating consistent excellence in teaching, research, innovation, and graduate outcomes.`,
      campus: `CAMPUS & INFRASTRUCTURE

Area: 617 acres | Hostels: 20 | Labs: 120+ | Centers of Excellence: 36

A self-contained academic township integrating nature, sustainability, and research.

Key Facilities:
• Central Library – 3.6 L books, 8,000 e-journals, 24×7 access, AI-powered cataloguing
• Labs & Maker Spaces – AI, IoT, Nanotech, Aerospace, Ocean Engineering, VLSI
• IIT Madras Research Park – 250+ R&D companies, startup incubators, corporate labs
• Sports Complex – Olympic pool, synthetic track, indoor arena, courts for major sports
• Health & Wellness – Institute Hospital (24×7), counseling center, yoga and meditation
• Residences – 20 hostels (Wi-Fi, mess, study rooms, lounges, and laundry facilities)
• Green Campus – Solar energy, water recycling, electric mobility, biodiversity conservation

The campus is designed as a sustainable ecosystem that combines state-of-the-art infrastructure with environmental consciousness.`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty: 550 | Departments: 16 | Centers of Excellence: 36

Research Funding (2024): ₹399 Cr | Patents Filed: 146 | Active Ph.Ds: 1,000+

Key Research Domains:
• Artificial Intelligence, Machine Learning, Quantum Computing
• Aerospace & Ocean Engineering
• Climate & Sustainable Energy
• Biomedical & Materials Engineering
• Robotics, Data Science, Catalysis, and Nanoelectronics

Major Research Centers:
• Robert Bosch Centre for Data Science & AI
• Gopalakrishnan-Deshpande Centre for Innovation
• National Centre for Catalysis Research
• IIT Madras Research Park
• Centre for Battery Engineering & Electric Mobility

Collaborations:
MIT (USA), Cambridge (UK), NTU (Singapore), TUM (Germany), University of Tokyo (Japan), Curtin University (Australia)

The institute maintains strong international partnerships and has been at the forefront of cutting-edge research across multiple domains.`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Life at IIT Madras is dynamic, inclusive, and vibrant — blending technical rigor with cultural richness.

Annual Fests:
• Shaastra – India's largest student-run tech fest
• Saarang – Asia's biggest cultural fest
• E-Summit – Entrepreneurship Conclave

Student Societies (50+):
Robotics Club, Entrepreneurship Cell (E-Cell), Coding Club, Debate Society, Music & Drama Clubs, NSS & NCC Units

Campus Traditions:
"Insti" slang, Open-Air Theatre nights, Freshers' Week, Film screenings

Well-being:
Sports leagues, Yoga Center, Peer Counseling, Mental Health Cell

The campus culture encourages holistic development, fostering innovation, leadership, and community engagement alongside academic excellence.`,
      vision: `GLOBAL OUTREACH & VISION 2030

IIT Madras envisions becoming a global leader in innovation-driven technical education and India's foremost research university.

Strategic Priorities:
• Expand global research collaborations
• Accelerate 1,000+ patents & 500 startups via IITM Research Park
• Lead national missions in AI, Clean Energy, and Sustainability
• Strengthen online learning via IITM BS & NPTEL platforms
• Develop a carbon-neutral campus and next-gen labs

The institute is committed to addressing global challenges through innovative research, sustainable practices, and excellence in education.`,
    };
  }, []);

  // Get comprehensive IIT Hyderabad brochure data
  const getIITHyderabadBrochureData = React.useCallback(() => {
    return {
      about: `IIT Hyderabad is one of India's youngest yet fastest-growing premier institutes of higher technical education, founded through the Institutes of Technology (Amendment) Act 2011.

Located in Kandi, Telangana, the 600-acre campus was designed with Indo-Japanese collaboration, combining sustainable infrastructure with advanced academic facilities. Within just over a decade, it has become a top-10 engineering institute in India, recognized globally for innovation, interdisciplinary learning, and cutting-edge research.

Established: 2008 | Type: Public Technical University | Campus Area: 600 acres (Eco-friendly, Indo-Japanese design)
NIRF 2025: Overall Rank #12 | Engineering #7 | Innovation #6
QS World Rank: #681 | QS Asia Rank: #320
Students: 3,500–4,000 | Faculty: 250+ | Director: Prof. B. S. Murty`,
      academics: `ACADEMIC PROGRAMS & FEES

UNDERGRADUATE (UG)

• B.Tech (15 Specializations) – ₹9.2L (total 4 yrs) | Entrance – JEE Advanced + JoSAA
  Popular Branches: CSE, Electrical, Mechanical, AI, Data Science
  Seats: ~600 | 1st Year Fee: ₹2.3L

• B.Des (Design) – ₹9.0L (total 4 yrs) | Entrance – UCEED
  Seats: 20 | Focus: Product, UX, Communication Design

POSTGRADUATE (PG)

• M.Tech (50 Specializations) – ₹1.33L (total 2 yrs) | Entrance – GATE + COAP
  Annual Fee: ₹66,700 | Specializations: AI, Data Science, CSE, Power Systems, Robotics

• M.Sc (Sciences) – ₹78,600/yr | Entrance – IIT JAM
  Physics, Chemistry, Mathematics

• MBA (Management) – ₹8.66L (total 2 yrs) | Entrance – CAT
  Offered through School of Management (SJMSOM)

• Ph.D (Doctoral) – ₹44,000/yr | Duration 3–6 yrs | 1200+ students
  Research Areas: AI, Nanotech, Sustainability, Healthcare, Energy

Hostel & Mess: ₹39,400/semester | Single rooms with radiant cooling systems

Total Programs: 129 | Degrees offered: B.Tech, M.Tech, M.Sc, MBA, Ph.D, B.Des, M.Des`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

Admissions follow national-level examinations and centralized counseling:

B.Tech Programs:
• B.Tech CSE – JEE Advanced | JoSAA | 2025 Cutoff: 250 (General AIR)
• B.Tech DS & AI – JEE Advanced | JoSAA | 2025 Cutoff: 450 (General AIR)
• ECE – JEE Advanced | JoSAA | 2025 Cutoff: 800 (General AIR)
• Mechanical – JEE Advanced | JoSAA | 2025 Cutoff: 2100 (General AIR)
• Civil – JEE Advanced | JoSAA | 2025 Cutoff: 5000 (General AIR)

Postgraduate Programs:
• M.Tech – GATE | COAP | 600+ score
• MBA – CAT + GD/PI | Institute | 94% Gen / 74.5% OBC
• Ph.D – GATE / UGC-NET / CSIR | Dept. Interview | Department-wise

Reservation Policy: SC 15% | ST 7.5% | OBC 27% | EWS 10% | PwD 5%

Application: Online via respective exam portals (JEE, GATE, CAT, JAM, UCEED)`,
      placements: `PLACEMENTS & CAREER OPPORTUNITIES

IIT Hyderabad maintains one of India's strongest placement records with extensive recruiter participation and stellar salary packages.

Highlights (2024-25):
• Placement Rate: 95%
• Total Offers: 800 | Companies: 200+
• Highest Package: ₹2.05 Cr (International) | Domestic ₹1.2 Cr
• Average Package: ₹22L (Overall) | CSE ₹34L | ECE ₹27L
• PPOs: 150–200 | Internship Conversion >90%

Top Recruiters:
Google, Microsoft, Amazon, Goldman Sachs, Jane Street, De Shaw, Intel, Qualcomm, Texas Instruments, Apple, TSMC, Flipkart, BCG, Morgan Stanley

Major Roles:
SDE, Data Scientist, Quant Analyst, VLSI Design, Consulting, R&D`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025:
• Engineering: #7 (Top 10 for 10 years consecutive)
• Overall: #12 (High Research & Graduation Outcomes)
• Innovation: #6 (Recognized Startup Ecosystem)

QS World University 2026:
• Global: #681 (Improved Research Visibility)

QS Asia 2025:
• Regional: #320 (Top Technical University in India)

India Today 2024:
• Engineering (Govt.): #7 (Strong Teaching and Research)

THE Engineering:
• Global Band: 301–400 (High Academic Impact)

NIRF Parameter Scores (2025):
TLR 73.0 | RPC 72.0 | GO 82.9 | OI 65.0 | Perception 51.2`,
      campus: `CAMPUS & INFRASTRUCTURE

Area: 600 acres | Hostels: 20 | Labs: 120+ | Library: 85,000 sq ft

Design: Indo-Japanese sustainable campus with radiant cooling systems

Key Facilities:
• Central Library – 3.6L books | 8,000+ e-journals | 24×7 access
• Research Labs – AI, VLSI, Nano, IoT, Robotics, Quantum Computing
• Hostels – Wi-Fi, Study Rooms, Mess, Common Areas, Laundry
• Sports – Olympic Pool, Cricket & Football Grounds, Tennis & Badminton Courts, Gym, Yoga Center
• Medical – B.C. Roy Hospital (24×7 care + OPD + Ambulance)
• Amenities – Banks, ATMs, Post Office, Stationery Shops, Guest Houses, Cafés`,
      faculty: `FACULTY & RESEARCH EXCELLENCE

Faculty Strength: 470 | Departments: 23 | Ph.D-qualified: >90%

Research Funding (2024): ₹399 Cr | Patents Filed: 146

Centers of Excellence:
• AI & Data Science
• Biomedical Engineering
• Smart Materials & Nanotech
• Water Resources & Climate Change
• Renewable Energy & Environment
• Entrepreneurship & Innovation

Key Collaborations:
MIT (USA), Cambridge (UK), NTU (Singapore), TUM (Germany), ISRO, DRDO, ONGC, Siemens, Tata Group

Research Domains:
Quantum Computing, AI for Healthcare, Clean Energy, Sustainable Materials, Smart Infrastructure`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

IIT Hyderabad's residential campus fosters creativity, leadership, and balance.

Major Festivals:
Elan & ηVision (Techno-Cultural Fest), Sports Meet, Hackathons, Design Week

Student Clubs (50+):
Robotics, Coding, Entrepreneurship, Music, Dance, Drama, Photography, Social Service

Well-being:
Gym, Yoga Center, Wellness Cell, Peer Counseling, Sports facilities`,
      vision: `GLOBAL OUTLOOK & VISION

Under Prof. B. S. Murty, IITH's strategic plan aims to position the institute as a global leader in science and technology education.

Strategic Goals:
• 500+ startups incubated by 2030
• Leadership in AI, Quantum Tech, and Climate Science
• Deep global collaborations and joint Ph.D programs
• Expansion of digital and online learning ecosystem
• Carbon-neutral campus initiative by 2035`
    };
  }, []);

  // Get comprehensive IIT Roorkee brochure data
  const getIITRookeeBrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology Roorkee (IIT Roorkee) is one of India's oldest and most historically significant technical universities, established in 1847 as Thomason College of Civil Engineering and converted to an IIT in 2001.

Nestled in the Himalayan foothills, the 365-acre green campus seamlessly blends its 175-year heritage with cutting-edge research facilities. Ranked #7 nationally (NIRF 2025) and #335 globally (QS 2026), IIT Roorkee remains a global leader in engineering, technology, and innovation.

Established: 1847 | Converted to IIT: 2001 | Type: Public Technical University | Campus Area: 365 acres
Motto: "Tamso Ma Jyotirgamaya" (Lead me from Darkness to Light)
Student Strength: 8,000+ | Faculty: 470+ | Departments: 23
NIRF 2025: Overall Rank #7 | Engineering #6 | Architecture #1
QS 2026 World: #335 | QS Asia: #130`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years, 1,100 seats) – ₹2.3 L/year | Total: ₹10.0 L | Entrance: JEE Advanced + JoSAA
  Popular Specializations: CSE (AIR 535), Data Science & AI (AIR 710), Electrical (AIR 1752), Mechanical (AIR 1900), Civil (AIR 2175)

• B.Arch (5 years, 37 seats) – ₹2.3 L/year | Total: ₹12.0 L | Entrance: JEE Advanced + AAT

• B.Des (4 years, 20 seats) – ₹36,100/year | Total: ₹2.0 L | Entrance: UCEED

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹40,000/year | Total: ₹80,000 | Entrance: GATE + COAP | 47+ specializations

• MBA (2 years, 95 seats) – ₹2.3 L/year | Entrance: CAT + PI | Domains: Analytics, Finance, Operations, Strategy

• M.Sc (2 years, 194 seats) – ₹36,100/year | Entrance: IIT JAM | Disciplines: Physics, Chemistry, Mathematics, Applied Geology, Economics

DOCTORAL (Ph.D)
• Duration: 3–5 years | Annual Fee: ₹38,100 | 900+ Ph.D students | Entrance: GATE/CSIR/UGC-NET/JEST
• Focus Areas: AI, Clean Energy, Disaster Management, Quantum Computing, Bioengineering

HOSTEL FEE: ₹68,000–₹99,000 (annual)`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

B.Tech Cutoffs (AIR ranges):
• CSE – 535 | Data Science & AI – 710 | ECE – 1,394 | Mechanical – 1,900

B.Arch – Rank 16,596

MBA – 94% (General Category)

M.Tech GATE Cutoffs – 600+ (General)

Ph.D – Research Proposal + Interview

RESERVATION POLICY
• SC: 15% | ST: 7.5% | OBC-NCL: 27% | EWS: 10% | PwD: 5%

Counseling: JoSAA (Centralized for IITs)
Application Window: May–June (typically)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 805+ | Recruiters: 170+
• Highest Package: ₹20.5 Cr (International)
• Highest Domestic: ₹1.2 Cr
• Average Package: ₹19.6 L
• CSE Average: ₹34.0 L | ECE Average: ₹30.8 L

Pre-Placement Offers (PPOs): 222

Top Recruiters: Microsoft, Google, Goldman Sachs, TSMC, Amazon, Oracle, BCG, Accenture, Tata Steel, ISRO, DRRO, JP Morgan, Intel, Apple, Qualcomm

Key Roles: Software Development, Data Science, R&D, Consulting, Analytics, Hardware Design, Management

Placement Trend (2022–2025):
• 2025: ₹20.0+ L avg | ₹2.05 Cr intl highest | 222 PPOs
• 2024: ₹19.6 L avg | ₹20.5 Cr intl highest | 155 PPOs
• 2023: ₹17.0 L avg | ₹1.06 Cr intl highest | 200 PPOs
• 2022: ₹16.0 L avg | ₹2.15 Cr intl highest | 180 PPOs`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #7 (Historic IIT; consistent top-10)
• Engineering: #6 (Excellence in R&D)
• Architecture & Planning: #1 (India's best)
• NIRF Scores: Teaching Learning Resources (TLR) – 73.06 | Research & Professional Practice (RPC) – 72.05 | Graduation Outcomes (GO) – 82.9 | Outreach & Inclusivity (OI) – 64.95 | Perception – 51.24

GLOBAL RANKINGS
• QS World 2026: #335
• QS Asia 2026: #130
• THE Engineering: 301–400 Band
• India Today: #5 (Engineering)
• ARIIA: Excellent (Innovation & Entrepreneurship)`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 365 acres | Hostels: 20 | Labs: 120+ | Library: 85,000 sq.ft.
• Location: Roorkee, Uttarakhand (Himalayan foothills)

Key Facilities:
• Hostels: Wi-Fi, study lounges, messes, recreation rooms, AC rooms in select hostels
• B.C. Roy Hospital: 24×7 healthcare, emergency, OPD, ambulance services
• Library: 3.6L+ books, 8,000+ e-journals, AI-powered catalog, 24/7 access
• Research Labs: AI/ML, IoT, VLSI, Nanotech, Hydrology, Robotics, Biotechnology
• Sports: Olympic pool, indoor stadium, synthetic tracks, gym, yoga center
• Amenities: Banks, ATMs, post office, bookshops, guest houses, shuttles, auditoriums
• Green Campus: Solar lighting, waste management, rainwater harvesting, water reuse systems, e-shuttle buses, tree-lined boulevards`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 470+ | Ph.D-qualified: Majority | Departments: 23

Research Metrics (2024):
• Funding: ₹399 Cr | Patents Filed: 146 | Research Centers: 8+

Research Focus Areas:
• Quantum Computing | AI & Machine Learning | Smart Cities & Infrastructure
• Nanotech & Advanced Materials | Sustainable & Clean Energy | Disaster Resilience
• Biomedical Engineering | Water Resources & Climate

Major Research Centers:
• Centre for Disaster Management
• Smart Materials Lab
• Energy & Environment Centre
• Entrepreneurship Cell
• Nanotechnology Research Centre
• Water Resources Development Centre

Global Collaborations:
MIT (USA), Cambridge (UK), ETH Zurich, NTU Singapore, TUM Germany, ISRO, DRDO, ONGC, Siemens, Tata Group

Exchange Programs: 6-month research fellowships for UG/PG/Ph.D students`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Flagship Festivals:
• Thomso – Cultural Fest (Triennial tradition, major campus event)
• Cognizance – Tech & Innovation Fest
• Sangram – Sports Fest

Clubs & Societies (50+):
Robotics, Coding, Formula Student, Drones, Literature, Dance, Drama, Music, Entrepreneurship Cell (E-Cell), National Service Scheme (NSS), National Cadet Corps (NCC)

Traditions & Unique Aspects:
• "Chapo" Tea Gatherings – Peer networking and academic discussion
• Freshers' Welcome & Structured Mentorship Weeks
• Annual Hostel Competitions & Inter-Hall Fests
• "Tamso" Heritage Week – celebrating 175+ years of legacy

Sports & Wellness:
• Olympic-standard swimming pool
• Air-conditioned gymnasium with modern equipment
• Synthetic running tracks
• Yoga center for holistic well-being
• Sports leagues and tournaments
• Mental wellness cell with peer counseling`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
Robotics Club, Coding Club, Formula Student, Drone Club, VLSI Club, AI/ML Society

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Art & Design Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), IEEE Student Chapter, ASME Club, INSIC (Indian National Society of International Commerce)

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Social Service Wing

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Tennis, Swimming, Athletics clubs`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Events:
• Thomso (Triennial Festival) – Celebrated every 3 years; combines cultural, academic, and social activities
• Cognizance – Annual tech fest showcasing projects, hackathons, tech talks
• Sangram – Annual sports fest with inter-college competitions
• Entrepreneurship Summit – Startups, investor pitches, mentorship
• Alumni Meet – Biennial reunion celebrating legacy and contributions

Cultural & Social:
• Freshers' Welcome & Orientation – Week-long integration program
• Farewell Ceremonies – Celebrating outgoing batches
• Independence & Foundation Day Celebrations
• Inter-Hostel Events – Sports, quiz, cultural competitions
• Department Symposiums – Discipline-specific events and award ceremonies`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• 399 Cr research funding (2024) | 146 patents filed | 27 Ph.D programs
• 900+ active Ph.D students across disciplines
• Interdisciplinary research collaborations with global institutions

Priority Research Areas:
• Quantum Computing & Next-Gen Computing
• AI & Machine Learning for Healthcare & Smart Cities
• Clean & Renewable Energy Systems
• Disaster Management & Climate Resilience
• Biomedical & Biotechnology Research
• Advanced Materials & Nanotechnology

Startup Incubation:
• TIDES Business Incubator: 200+ ventures incubated
• Idea-to-prototype programs through Innovation & Incubation Centre
• Funding support and mentorship for student entrepreneurs

Entrepreneurship Support:
• Regular innovation workshops and startup challenges
• Access to makerspaces and prototype labs
• Mentorship from faculty and industry experts
• Networking with venture capitalists and angel investors`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in entrance exams
• Academic Excellence Scholarship – For consistent high GPA
• Research Scholarship – For Ph.D and research scholars

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – For economically weaker students
• Hostel Fee Waivers – Available for eligible candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category assistance
• PwD Scholarships – Special provisions for persons with disabilities

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (TCS, Infosys, etc.)
• International Student Scholarships
• GATE/JAM Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT

Opportunities:
• Teaching/Research Assistantships – ₹8,000–₹12,000/month
• Industry internships with stipends
• Joint research programs with international universities`,
      sustainability: `SUSTAINABILITY & SMART CAMPUS

Environmental Initiatives:
• Solar lighting infrastructure across campus
• Comprehensive waste management & recycling programs
• Rainwater harvesting systems (annual collection: 15 Lakh+ liters)
• Water reuse & recycling systems for hostel & academic areas
• Biodiversity zones & tree-plantation programs (10,000+ trees planted)

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Green roofs and permeable surfaces
• Dedicated e-shuttle buses for campus mobility
• Pedestrian-friendly pathways & cycling infrastructure

Campus Design:
• 365-acre green campus with lush landscapes
• Heritage buildings preserved alongside modern facilities
• Integration of technology & nature
• Carbon footprint reduction initiatives

Smart Campus Initiatives:
• Digital learning platforms & online course libraries
• IoT-based energy & resource monitoring
• Campus-wide Wi-Fi connectivity
• Smart security systems & access control`,
      vision: `VISION 2030 & GLOBAL OUTLOOK

Strategic Goals (by 2030):
• Position IIT Roorkee as a Global Top-50 Technology Institute
• Establish 500+ startups through TIDES Incubator
• Lead innovation in AI, Quantum Computing, and Climate Science
• Expand joint Ph.D programs with 50+ global universities
• Develop fully digital and hybrid learning ecosystem

Academic Excellence:
• Launch 20+ interdisciplinary research centers
• Strengthen ties with top-tier universities (MIT, Cambridge, ETH Zurich)
• Increase international student enrollment to 30%
• Develop industry-academia collaborative research labs

Research & Innovation:
• Double research funding to ₹800 Cr annually
• Increase patent filings to 300+ per year
• Establish centers for emerging technologies
• Strengthen collaboration with ISRO, DRDO, and industry

Social Impact:
• Implement "Technology for Good" initiatives
• Strengthen rural outreach programs
• Support SDG-aligned research projects
• Increase diversity in faculty and student body

Sustainability:
• Achieve Carbon-Neutral Campus by 2035
• Complete transition to renewable energy
• Implement zero-waste management
• Become a model for sustainable higher education

Global Presence:
• Expand IIT Roorkee alumni network to 200+ countries
• Establish international campuses or collaborative centers
• Increase mobility programs for faculty and students
• Establish IIT Roorkee as a bridge between India and global tech community`
    };
  }, []);

  // Generate PDF for IIT Bombay with comprehensive data
  const generateIITBombayPDF = React.useCallback(() => {
    const data = getIITBombayBrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Bombay', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision 2030 & Global Outlook', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Bombay (IIT Bombay)', data, sections);
  }, [getIITBombayBrochureData]);

  // Generate PDF for IIT Roorkee with comprehensive data
  const generateIITRookeePDF = React.useCallback(() => {
    const data = getIITRookeeBrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Roorkee', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Smart Campus', key: 'sustainability' as const },
      { title: 'Vision 2030 & Global Outlook', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Roorkee (IIT Roorkee)', data, sections);
  }, [getIITRookeeBrochureData]);

  // Get comprehensive IIT Guwahati brochure data
  const getIITGuwahatibrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology Guwahati (IIT Guwahati) is the youngest among the first-generation IITs, embodying India's vision to extend world-class technical education to the Northeast. Spread across a spectacular 704-acre scenic campus beside the Brahmaputra, it combines natural beauty with world-class research infrastructure.

Since its inception in 1994, IIT Guwahati has emerged as a leader in technology, science, management, and design education, fostering research innovation across disciplines including AI, data science, nanotechnology, and sustainability. Ranked #9 nationally (NIRF 2025) and #344 globally (QS 2026).

Established: 1994 | Type: Public Technical University | Campus Area: 704 acres
Motto: "Knowledge is Power"
Student Strength: 10,000+ | Faculty: 470+ | Departments: 23
NIRF 2025: Overall Rank #9 | Engineering #7
QS 2026 World: #344 | QS Asia: #124`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years, 1,200 seats) – ₹2.3 L/year | Total: ₹9.2 L | Entrance: JEE Advanced + JoSAA
  Popular Specializations: CSE (AIR 66), Electrical (AIR 285), Data Science & AI (AIR 350), ECE (AIR 900), Mechanical (AIR 1500)

• B.Des (4 years, 30 seats) – ₹2.3 L/year | Total: ₹9.0 L | Entrance: UCEED

• Dual Degree B.Tech + M.Tech (5 years) – ₹2.3 L/year | Total: ₹11.0 L | Entrance: JEE Advanced

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹66,700/year | Total: ₹1.33 L | Entrance: GATE + COAP | 50+ specializations

• MBA (2 years, 50 seats) – ₹4.33 L/year | Entrance: CAT + WAT + PI | Domains: Analytics, Finance, Strategy

• M.Sc (2 years, 100 seats) – ₹41,850/year | Entrance: IIT JAM | Disciplines: Physics, Chemistry, Mathematics, Computing

DOCTORAL (Ph.D)
• Duration: 4–6 years | Annual Fee: ₹44,000 | 50 programs | 1,200+ Ph.D students
• Entrance: GATE/CSIR/UGC-NET/JEST
• Focus: AI, ML, Robotics, Energy, Water, Nanotech, Bioengineering

HOSTEL & MESS: ₹39,400 per semester`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

B.Tech Cutoffs (AIR ranges):
• CSE – 200 | Data Science & AI – 350 | Electrical/ECE – 285–900 | Mechanical – 1500 | Civil – 3000–5000

B.Des – UCEED rank-based admission

MBA – 92% (General Category) | CAT + WAT + PI

M.Tech – GATE 600+ (General)

Ph.D – Research Proposal + Interview (GATE/UGC-NET/JEST/CSIR)

RESERVATION POLICY
• SC: 15% | ST: 7.5% | OBC: 27% | EWS: 10% | PwD: 5%
• Female supernumerary seats (up to 20%)

Counseling: JoSAA (Centralized for IITs)
Application Window: May–June`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 900+ | Recruiters: 260+
• Highest International Package: ₹50.0 Cr
• Highest Domestic Package: ₹1.2 Cr
• Average Package: ₹25.8 L
• CSE Average: ₹33.0 L | ECE Average: ₹28.0 L
• Pre-Placement Offers (PPOs): 227

Top Recruiters: Google, Microsoft, Apple, JP Morgan Chase, Goldman Sachs, Deloitte, EY, Uber, Qualcomm, Schlumberger, KPMG, PwC, Amazon, Flipkart, Intel, Tata Steel

Key Roles: Software Engineer, Data Scientist, Product Manager, Business Analyst, Consultant, R&D Engineer, Research Scientist

Placement Trend (2022–2025):
• 2025: ₹20.0+ L avg | ₹2.05 Cr intl highest | 222 PPOs
• 2024: ₹25.8 L avg | ₹50.0 Cr intl highest | 227 PPOs
• 2023: ₹17.0 L avg | ₹1.06 Cr intl highest | 200+ PPOs
• 2022: ₹16.0 L avg | ₹2.15 Cr intl highest | 180 PPOs`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #9 (Strong in Research & Innovation)
• Engineering: #7 (Consistent top-10 performer)
• NIRF Scores: Teaching Learning Resources (TLR) – 73.06 | Research & Professional Practice (RPC) – 72.05 | Graduation Outcomes (GO) – 82.9 | Outreach & Inclusivity (OI) – 64.9 | Perception – 51.2

GLOBAL RANKINGS
• QS World 2026: #344 (Among top 400 worldwide)
• QS Asia 2026: #124 (Top 150 in Asia)
• THE Engineering: 301–400 Band
• India Today: #7 (Engineering)
• ARIIA: Excellent (Innovation & Entrepreneurship)`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 704 acres | Hostels: 13 | Labs: 150+ | Library: 117,000 books, 2,605 e-journals
• Location: North bank of Brahmaputra River, North Guwahati, Assam

Key Facilities:
• Hostels: Wi-Fi, study rooms, mess halls, recreation, laundry
• Library: 24/7 digital access, AI-powered catalog, group study zones
• Labs: AI/ML, Robotics, Nanotech, Water Systems, Environmental
• Sports: Olympic-size pool, 8-lane track, indoor stadium, gym, yoga center
• Medical: IITG Hospital (30 beds, 24×7 care, ambulance services)
• Community: Banks, ATMs, shops, cafés, guest houses, intra-campus buses
• Green Campus: Solar energy, rainwater harvesting, waste composting, electric shuttles`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 470+ | Ph.D-qualified: Majority | Departments: 23

Research Metrics (2024):
• Funding: ₹399 Cr | Patents Filed: 146 | Research Centers: 7+

Research Focus Areas:
• AI & Machine Learning | Robotics & Automation
• Nanotechnology & Advanced Materials | Clean Energy Systems
• Water Resources & Environmental Engineering | Quantum Computing
• Biomedical Engineering & Systems | Climate Modelling & Disaster Management

Major Research Centers:
• Centre for Energy
• Centre for Nanotechnology
• Centre for the Environment
• Centre for Disaster Management
• Entrepreneurship Cell
• Technology Incubation Centre

Global Collaborations:
MIT (USA), Cambridge (UK), ETH Zurich, NTU Singapore, TUM Munich, Tokyo Tech, ISRO, DRDO, ONGC, Siemens, Tata Group

Exchange Programs: Student & faculty exchange for joint research projects with international institutions`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Flagship Festivals:
• Techniche – Technical & Management Fest
• Alcheringa – Cultural Fest
• Manthan – Sports Fest

Clubs & Societies (50+):
Robotics, Coding, Astronomy, E-Cell, Photography, Drama, Music, Debate, Fine Arts, Sports Clubs

Traditions:
• Freshers' Welcome & Orientation
• Inter-hostel competitions
• Department-specific festivals
• Alumni networking events

Sports & Wellness:
• Olympic-size swimming pool
• 8-lane synthetic running track
• Indoor sports complex
• State-of-the-art gymnasium
• Yoga & wellness center
• Cricket, football, badminton, volleyball, athletics

Student Ratings:
⭐ 4.7/5 on CollegeDunia (10,000+ reviews)
⭐ 4.8/5 on Careers360

Highlights: Excellent peer culture · National-level fests · Strong academic support · Balanced lifestyle`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
Robotics Club, Coding Club, Astronomy Club, AI/ML Society, VLSI Club, Electronics Society

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), IEEE Student Chapter, ASME Club, Management Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Techniche – Technical & Management Fest
• Alcheringa – Cultural performances, art exhibitions, music, drama
• Manthan – Inter-college sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Biennial reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹399 Cr research funding (2024) | 146 patents filed
• 7+ research centers across key disciplines
• 1,200+ Ph.D students conducting cutting-edge research
• Interdisciplinary collaborations with global institutions

Priority Research Areas:
• AI & Machine Learning for Smart Cities & Healthcare
• Robotics & Autonomous Systems
• Nanotechnology & Materials Science
• Clean Energy & Sustainable Technologies
• Water Quality & Resource Management
• Quantum Computing & Next-Gen Technologies
• Disaster Management & Climate Resilience

Startup Incubation:
• Technology Incubation Centre: Supports 100+ startups
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking

Industry Partnerships:
• Collaboration with DST, DBT, CSIR for funded projects
• Joint research with Fortune 500 companies
• EU Horizon Europe grant recipients
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in entrance exams
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE/JAM Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹8,000–₹12,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & SMART CAMPUS

Environmental Initiatives:
• Solar energy systems across campus
• Rainwater harvesting infrastructure
• Waste recycling & composting programs
• Water treatment & reuse systems
• Biodiversity gardens & afforestation

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Electric shuttle buses for campus mobility
• Pedestrian-friendly pathways & cycling corridors
• Green roofs & permeable surfaces

Campus Design:
• 704-acre scenic campus on Brahmaputra riverbank
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION 2030 & GLOBAL OUTLOOK

Strategic Goals (by 2030):
• Position IIT Guwahati in Global Top-50 Universities
• Establish world-leading research centers in AI, Energy, Water
• Increase international student enrollment to 40%
• Launch 50+ startups annually through incubation
• Strengthen ties with 100+ global universities

Academic Excellence:
• Expand Dual Degree programs
• Introduce new interdisciplinary specializations
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research funding to ₹1,200 Cr annually
• Increase patent filings to 300+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen STEM outreach to Northeast India

Social Impact:
• "Technology for Northeast" initiative
• Rural outreach programs in Northeast states
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Community development & livelihood programs

Global Presence:
• Establish international collaborative centers
• Increase faculty & student mobility programs
• Joint degree programs with top-20 global universities
• Position as a bridge between India and global tech ecosystem
• Expand alumni network to 150+ countries

Sustainability Leadership:
• Carbon-neutral campus by 2035
• 100% renewable energy by 2032
• Zero-waste management system
• Model for sustainable higher education in Asia`
    };
  }, []);

  // Generate PDF for IIT Guwahati with comprehensive data
  const generateIITGuwahatiPDF = React.useCallback(() => {
    const data = getIITGuwahatibrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Guwahati', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Smart Campus', key: 'sustainability' as const },
      { title: 'Vision 2030 & Global Outlook', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Guwahati (IIT Guwahati)', data, sections);
  }, [getIITGuwahatibrochureData]);

  // Get comprehensive IIT (BHU) Varanasi brochure data
  const getIITBHUVaranasibrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology (BHU) Varanasi is a prestigious technical institution nestled in the historic 1,300-acre Banaras Hindu University campus on the banks of the Ganga. Founded as the Banaras Engineering College (BENCO) in 1919, it became an IIT in 2012, representing India's oldest technical institution.

IIT (BHU) uniquely blends ancient academic traditions with modern technological excellence. With over a century of legacy, it is among India's top 10 engineering institutions — known for its core engineering programs, strong research orientation, and rich cultural heritage intertwined with spiritual significance.

Established: 1919 (as BENCO) | Converted to IIT: 2012 | Type: Public Technical University
Campus Area: 1,300 acres (within BHU) | Student Strength: 10,000+ | Faculty: 400+
Departments: 18 | NIRF 2025: Overall Rank #30 | Engineering Rank #10 | QS 2026 World: #526`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years, 900 seats) – ₹2.3 L/year | Total: ₹9.2 L | Entrance: JEE Advanced + JoSAA
  Popular Specializations: CSE (AIR 300), Data Science & AI (AIR 500), Electrical (AIR 1200), Mechanical (AIR 2800), Civil (AIR 5500)

• B.Arch (5 years, 40 seats) – ₹2.0 L/year | Total: ₹10.0 L | Entrance: JEE Main Paper 2 + AAT

• Dual Degree B.Tech + M.Tech (5 years) – ₹2.3 L/year | Total: ₹11.5 L | Entrance: JEE Advanced

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹66,700/year | Total: ₹1.33 L | Entrance: GATE + COAP | 50+ specializations

• MBA (2 years, 120 seats) – ₹4.33 L/year | Entrance: CAT + GD/PI | Domains: Strategy, Analytics, Finance

• M.Sc (2 years) – ₹46,315/year | Entrance: IIT JAM | Disciplines: Applied Physics, Chemistry, Mathematics

DOCTORAL (Ph.D)
• Duration: 4–6 years | Annual Fee: ₹44,000 | 50 programs | 1,200+ Ph.D students
• Entrance: GATE/CSIR/UGC-NET/JEST
• Focus: AI, Materials Science, Ceramics, Nanotechnology, Mining, Renewable Energy

HOSTEL & MESS: ₹39,400 per semester`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

B.Tech Cutoffs (AIR ranges):
• CSE – 300 | Data Science & AI – 500 | Electrical – 1200 | Mechanical – 2800 | Civil – 5500

B.Arch – JEE Main Paper 2 (top 15,000 qualified)

MBA – 94% (General Category) | CAT + GD/PI

M.Tech – GATE 600+ (General)

Ph.D – Research Proposal + Interview

RESERVATION POLICY
• SC: 15% | ST: 7.5% | OBC-NCL: 27% | EWS: 10% | PwD: 5%
• Female supernumerary seats available

Counseling: JoSAA (Centralized for IITs)
Application Window: May–June`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 800+ | Recruiters: 300+
• Highest International Package: ₹50.0 Cr
• Highest Domestic Package: ₹1.2 Cr
• Average Package: ₹22.0 L
• CSE Average: ₹24.8 L | ECE Average: ₹27.4 L
• Pre-Placement Offers (PPOs): 150

Top Recruiters: Google, Microsoft, Amazon, Qualcomm, JP Morgan, Goldman Sachs, Oracle, Uber, Adobe, Nvidia, Intel, Samsung, Cisco, BCG, Deloitte, PwC, EY, Schlumberger, Tata Steel

Key Roles: Software Engineer, Data Scientist, R&D Engineer, Analyst, Consultant, Metallurgist, Mining Engineer

Placement Trend (2022–2025):
• 2025: ₹20.0+ L avg | ₹2.05 Cr intl highest | 222 PPOs
• 2024: ₹22.0 L avg | ₹50.0 Cr intl highest | 150 PPOs
• 2023: ₹17.0 L avg | ₹1.06 Cr intl highest | 200+ PPOs
• 2022: ₹16.0 L avg | ₹2.15 Cr intl highest | 180 PPOs`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #30 (Strong National Presence)
• Engineering: #10 (Consistent Top-10 Excellence)
• NIRF Scores: Teaching Learning Resources (TLR) – 73.06 | Research & Professional Practice (RPC) – 72.05 | Graduation Outcomes (GO) – 82.9

GLOBAL RANKINGS
• QS World 2026: #526 (Strong Academic Reputation)
• QS Asia 2026: #261 (Top 300 in Asia)
• THE Engineering: 401–500 Band
• India Today: #10 (Engineering)
• ARIIA: Excellent (Innovation & Entrepreneurship)`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 1,300 acres (within BHU campus) | Hostels: 16 | Labs: 100+ | Library: 88,609 books, 15,000 e-journals
• Location: Banaras Hindu University Campus, Varanasi, Uttar Pradesh

Key Facilities:
• Central Library: 24×7 access, 88,000+ volumes, 15,000+ e-journals
• 100+ labs with supercomputing, 3D printing, IoT, Nanotech facilities
• Research hubs for mining, ceramics, and bioengineering
• Hostels: Wi-Fi, study rooms, mess halls, recreation areas
• Sports: Olympic-size pool, 8-lane track, indoor stadium, gym, yoga center
• Medical: Access to BHU hospital (24×7 care, ambulance services)
• Community: Banks, ATMs, shops, cafés, guest houses, auditoriums`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 400+ | Ph.D-qualified: Majority | Departments: 18

Research Metrics (2024):
• Funding: ₹399 Cr (est.) | Patents Filed: 146 | Research Centers: 3 Interdisciplinary Schools

Research Focus Areas:
• AI & Machine Learning | Ceramics & Advanced Materials
• Nanotechnology | Metallurgy & Mining Engineering
• Renewable Energy Systems | Biomedical Engineering
• Smart Materials | Water Resources Management

Major Research Centers:
• School of Materials Science and Technology
• Biomedical Engineering Hub
• Biochemical Engineering Centre

Global Collaborations:
MIT (USA), Cambridge (UK), ETH Zurich, NTU Singapore, TUM Munich, Tokyo Tech, ISRO, DRDO, ONGC, Siemens, Tata Group

Exchange Programs: Student & faculty exchange for joint research with international institutions`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Flagship Festivals:
• Technex – Techno-Management Fest
• Kashi Yatra – Cultural Heritage Fest
• FMC Weekend – Media & Film Fest
• Spardha – Sports Festival

Clubs & Societies (60+):
Robotics, Coding, Music, Drama, Photography, Debating, Literature, Social Service

Traditions:
• Fusion of BHU's spiritual heritage with IIT's modern culture
• Freshers' Welcome & Orientation Week
• Inter-hostel competitions across academics, sports, and culture
• Departmental seminars and technical symposiums
• Alumni networking events and cultural celebrations

Sports & Wellness:
• Olympic-size swimming pool
• 8-lane synthetic running track
• Indoor sports complex with multi-purpose court
• State-of-the-art gymnasium
• Yoga & wellness center
• Cricket, football, badminton, volleyball, athletics
• Table tennis, swimming, and swimming pool

Student Ratings:
⭐ 4.6/5 on CollegeDunia (8,000+ reviews)
⭐ 4.7/5 on Careers360

Highlights: Heritage meets innovation · Strong academic culture · Close-knit community · Spiritual-technical harmony`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
Robotics Club, Coding Club, AI/ML Society, Electronics Society, VLSI Club

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), IEEE Student Chapter, Management Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Technex – Techno-management festival with seminars and competitions
• Kashi Yatra – Cultural performances celebrating heritage
• FMC Weekend – Media, film, and creative showcases
• Spardha – Inter-college sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹399 Cr research funding (2024 est.) | 146 patents filed
• 3+ interdisciplinary research schools
• 1,200+ Ph.D students conducting cutting-edge research
• Collaborations with global institutions and industry

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Advanced Materials & Nanotechnology
• Ceramics & Thermal Engineering
• Mining & Mineral Processing
• Renewable Energy & Sustainability
• Biomedical & Biochemical Engineering
• Smart Materials & Composites

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with ISRO, DRDO, ONGC for funded projects
• Joint research with Tata Group, Siemens
• BHEL and Aditya Birla Group partnerships
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in entrance exams
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE/JAM Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹8,000–₹12,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Solar-powered buildings and street lighting
• Water harvesting & reuse systems
• Waste recycling and composting programs
• Water treatment & reuse systems

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle buses and eco-friendly transportation

Campus Design:
• 1,300-acre scenic campus on Ganga riverbank within BHU
• Tree-lined avenues with Ganga biodiversity corridor
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Position IIT (BHU) in Global Top-200 Universities
• Enhance research funding to ₹600+ Cr annually
• Increase international collaboration partnerships to 150+
• Launch 30+ startups annually through incubation
• Expand student enrollment with enhanced facilities

Academic Excellence:
• Expand Dual Degree programs and specializations
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 250+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on Northeast development initiatives

Social Impact:
• Heritage preservation and cultural integration
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 100+ countries

Institutional Strengths:
• 100+ years of legacy in technical education
• Unique blend of heritage and innovation
• Strong core engineering programs
• Excellent alumni network across FAANG and research sectors
• Beautiful, green, and culturally rich campus environment`
    };
  }, []);

  // Generate PDF for IIT (BHU) Varanasi with comprehensive data
  const generateIITBHUVaranasiPDF = React.useCallback(() => {
    const data = getIITBHUVaranasibrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT (BHU) Varanasi', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology (BHU) Varanasi', data, sections);
  }, [getIITBHUVaranasibrochureData]);

  // Get comprehensive NIT Trichy brochure data
  const getNITTrichybrochureData = React.useCallback(() => {
    return {
      about: `National Institute of Technology, Tiruchirappalli (NIT Trichy) is India's #1 ranked NIT and a globally recognized technical university. Established in 1964 as Regional Engineering College, Tiruchirappalli, it became a deemed university in 2003 and an Institution of National Importance in 2007.

Located on an 800-acre campus along the Thanjavur Highway, NIT Trichy combines academic rigor, research innovation, and cultural vitality. With world-class infrastructure, international collaborations, and a strong placement network, it offers 129 programs across engineering, architecture, management, and science.

Established: 1964 | Deemed University: 2003 | Institution of National Importance: 2007
Type: Public Technical University | Campus Area: 800 acres | Student Strength: 7,000+
Faculty: 400+ | Departments: 17 | NIRF 2025: Overall Rank #31 | Engineering Rank #9
QS 2026 World: #731 | QS Asia: #281 | India Today Engineering 2024: #9`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years, 900 seats) – ₹1.2 L/year | Total: ₹6.5 L | Entrance: JEE Main + JoSAA
  Popular Specializations: CSE (AIR 3000), Data Science & AI (AIR 4000), ECE (AIR 5000), Mechanical (AIR 8000), Civil (AIR 10000)
  Other Specializations: EEE, Production, Metallurgical & Materials, Chemical, Instrumentation & Control

• B.Arch (5 years, 40 seats) – ₹25,000/year | Total: ₹1.1 L | Entrance: JEE Main Paper 2 + AAT

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹1.3 L/year | Total: ₹2.6 L | Entrance: GATE + COAP | 31 specializations
  Popular Domains: Data Science, AI & ML, Structural Engineering, VLSI, Power Systems, Manufacturing

• MBA (2 years, 60 seats) – ₹1.6 L/year | Total: ₹3.2 L | Entrance: CAT + WAT + GD/PI
  Domains: Analytics, Finance, Operations, Strategy

• M.Sc (2 years) – ₹1.1 L/year | Entrance: IIT JAM | Disciplines: Physics, Chemistry, Mathematics

DOCTORAL (Ph.D)
• Duration: 3–6 years | Annual Fee: ₹50,000 | 50 programs | 900+ Ph.D students
• Entrance: GATE/NET/CSIR/UGC
• Focus: AI, Robotics, Renewable Energy, Materials Science, Water Technology

HOSTEL & MESS: ₹50,000–₹70,000 per semester`,
      admissions: `ADMISSIONS & CUTOFFS (2025)

B.Tech Cutoffs (AIR ranges):
• CSE – 3000 | Data Science & AI – 4000 | ECE – 5000 | Mechanical – 8000 | Civil – 10000

B.Arch – JEE Main Paper 2 (top 15,000 qualified) + AAT

MBA – 85% (General), 75% (OBC), 65% (SC/ST) | CAT + WAT + GD/PI

M.Tech – GATE 600+ (General)

Ph.D – Research Proposal + Interview (GATE/NET/UGC/CSIR)

RESERVATION POLICY
• SC: 15% | ST: 7.5% | OBC-NCL: 27% | EWS: 10% | PwD: 5%
• Female supernumerary seats available

Counseling: JoSAA (Centralized for NITs)
Application Window: May–June`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 1,322+ | Recruiters: 286+
• Highest Package: ₹52.9 LPA
• Average Package: ₹18.3 LPA
• CSE Average: ₹27.2 LPA | ECE Average: ₹23.0 LPA
• Pre-Placement Offers (PPOs): 200

Top Recruiters: Microsoft, Google, Amazon, Oracle, Intel, Samsung, Qualcomm, Adobe, JP Morgan, Goldman Sachs, McKinsey, Deloitte, PwC, BCG, Infosys, L&T, Tata Steel, Wipro

Key Roles: Software Engineer, Data Scientist, Product Manager, Consultant, Process Engineer, R&D Specialist

Placement Trend (2022–2025):
• 2025: ₹20.0+ L avg | ₹1.2 Cr highest | 222 PPOs
• 2024: ₹18.3 L avg | ₹52.9 L highest | 200 PPOs
• 2023: ₹17.0 L avg | ₹1.06 Cr highest | 200+ PPOs
• 2022: ₹16.0 L avg | ₹2.15 Cr highest | 180 PPOs`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #31 (Top 10 Engineering Institute)
• Engineering: #9 (#1 among all NITs for 9 consecutive years)
• Architecture: #8 (Strong in sustainable design)

GLOBAL RANKINGS
• QS World 2026: #731 (Steady global progress)
• QS Asia 2026: #281 (Among top 300 in Asia)
• THE Engineering: 401–500 Band (Global visibility)
• India Today: #9 (Govt. Engineering)
• ARIIA: Excellent (Innovation & Entrepreneurship)`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 800 acres | Hostels: 28 | Labs: 150+ | Library: 250,000 books
• Location: Tanjore Main Road, National Highway 67, Tiruchirappalli, Tamil Nadu

Academic Facilities:
• 150+ labs (AI, VLSI, IoT, Robotics, Nanotech)
• 3 Centres of Excellence (Water, Nano, Computational Science)
• AI-Integrated library with 24×7 access and digital repositories
• Supercomputing clusters and fabrication labs

Hostel & Residential Life:
• 28 hostels (boys/girls) with Wi-Fi, messes, lounges, recreation rooms
• Hostel Fee: ₹50,000–₹70,000 per year
• Central dining & student-managed committees ensure quality food

Sports & Wellness:
• Cricket, football, tennis, badminton, hockey, swimming pool, indoor gym
• Yoga & wellness centers; active sports culture through Nittfest and Pragyan

Medical:
• NIT Trichy Hospital: 24×7 OPD, emergency services, pharmacy, ambulance
• Tie-ups with Apollo Trichy and other tertiary hospitals`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 400+ | Ph.D-qualified: Majority | Departments: 17

Research Metrics (2024):
• Funding: ₹399 Cr (est.) | Patents Filed: 146 | Research Centers: 3 major centers

Key Research Areas:
• AI & Machine Learning | Cybersecurity
• Advanced Materials | Robotics & Automation
• Renewable Energy Systems | VLSI Design
• Big Data Analytics | Water Technology

Collaboration & Grants:
• Funded by DST, ISRO, DRDO, DBT, and international consortia
• MoUs with MIT, Cambridge, NTU, TUM, ETH Zurich
• Industry partners: Siemens, Tata Steel, L&T, ONGC

Major Research Centers:
• Centre for Water Technology
• Centre for Nanotechnology
• Centre for Computational Science`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Flagship Festivals:
• Pragyan – Technical Fest (UNESCO Patronage)
• Festember – Cultural Fest
• Nittfest – Sports and Wellness Fest

Student Clubs (70+):
ACM, IEEE, Robotics, Entrepreneurship Cell, Arts, Music, Dance, Media, NSS, NCC

Campus Spirit:
• Inter-hostel competitions, open-mics, innovation hackathons, and heritage events
• One of India's most dynamic student communities
• Balanced academics, strong peer learning, and diverse cultural engagement
• Clubs & hackathons foster leadership and innovation
• Hostel life encourages collaboration and inclusivity

Sports & Wellness:
• Olympic-size swimming pool
• 8-lane synthetic running track
• Indoor sports complex with multi-purpose court
• State-of-the-art gymnasium
• Yoga & wellness center
• Cricket, football, badminton, volleyball, athletics

Student Ratings:
⭐ 4.6/5 on CollegeDunia (8,000+ reviews)
⭐ 4.7/5 on Careers360

Highlights: #1 NIT ranking · Excellent ROI · Strong placement network · Vibrant campus culture`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
ACM Student Chapter, IEEE Student Chapter, Robotics Club, Coding Club, AI/ML Society, VLSI Club, Electronics Society

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Pragyan – Technical Fest (UNESCO Patronage) with seminars and competitions
• Festember – Cultural performances celebrating heritage
• Nittfest – Inter-college sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹399 Cr research funding (2024 est.) | 146 patents filed
• 3+ major research centers
• 900+ Ph.D students conducting cutting-edge research
• Collaborations with global institutions and industry

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Cybersecurity & Network Security
• Advanced Materials & Nanotechnology
• Robotics & Autonomous Systems
• Renewable Energy & Sustainability
• VLSI Design & Embedded Systems
• Big Data Analytics & Cloud Computing
• Water Technology & Environmental Engineering

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with ISRO, DRDO, ONGC for funded projects
• Joint research with Tata Steel, Siemens, L&T
• Infosys and IBM partnerships
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in entrance exams
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE/JAM Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹8,000–₹12,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Solar power grids & smart lighting
• Water harvesting & reuse systems
• Waste recycling and composting programs
• Water treatment & reuse systems

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle buses and eco-friendly transportation

Campus Design:
• 800-acre scenic campus along Thanjavur Highway
• Tree-lined avenues with biodiversity corridors
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system

Green Campus Certification:
• MoE's Green Campus Initiative certification
• Sustainable practices and eco-friendly operations`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain #1 NIT ranking and enter Global Top-500 Universities
• Enhance research funding to ₹600+ Cr annually
• Increase international collaboration partnerships to 150+
• Launch 30+ startups annually through incubation
• Expand student enrollment with enhanced facilities

Academic Excellence:
• Expand Dual Degree programs and specializations
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 250+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 100+ countries

Institutional Strengths:
• #1 NIT ranking for 9 consecutive years
• Strong industry partnerships and placements
• Excellent ROI with affordable fees
• 40,000+ global alumni in FAANG, consulting, academia
• Beautiful, green, and culturally rich campus environment`
    };
  }, []);

  // Generate PDF for NIT Trichy with comprehensive data
  const generateNITTrichyPDF = React.useCallback(() => {
    const data = getNITTrichybrochureData() as BrochureData;
    const sections = [
      { title: 'About NIT Trichy', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('National Institute of Technology, Tiruchirappalli (NIT Trichy)', data, sections);
  }, [getNITTrichybrochureData]);

  // Get comprehensive BITS Pilani brochure data
  const getBITSPilanibrochureData = React.useCallback(() => {
    return {
      about: `Birla Institute of Technology and Science (BITS) Pilani stands as India's premier private engineering university, with global reputation for excellence in academics, research, and innovation. Established in 1929 by Shri Ghanshyam Das Birla, it became a deemed university in 1964.

BITS Pilani pioneered the Practice School system (industry internships integrated with curriculum), semester and credit-based system with continuous evaluation, fully merit-based admissions (BITSAT) with no reservation policy, and seamless multi-campus operations with shared standards across Pilani, Goa, Hyderabad, and Dubai.

The university's alumni network spans Silicon Valley CEOs, ISRO scientists, startup founders, and global researchers, reflecting its strong practical foundation and leadership-oriented culture.

Established: 1929 | Deemed University: 1964 | Type: Private Deemed-to-be University
Campus Area: 328 acres (Pilani main) | Total Students: 18,000+ across 4 campuses
Faculty: 1,000+ | NIRF 2025: Overall Rank #18 | Engineering Rank #11 (Top Private University)
QS 2026 World: #335 | QS Asia: #130 | India Today Engineering 2024: #1 (Private Institutions)`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.E. / B.Tech (4 years, 2,500 seats) – ₹5.0 L/year | Total: ₹19–22 L | Entrance: BITSAT
  Popular Specializations: CSE (Pilani: 350–380+), ECE (310–350), EEE, Mechanical (290–330), Civil (270–310), Chemical, Manufacturing, Biotechnology
  Other Campuses: CSE (Goa/Hyderabad: 330–360+)

• B.Pharm (4 years) – ₹5.0 L/year | Total: ₹19–22 L | Entrance: BITSAT (PCB/PCM) | 65% in 12th

• M.Sc (Hons.) + B.E. (Hons.) Integrated (5 years, 500 seats) – ₹5.5 L/year | Total: ₹25–28 L | Entrance: BITSAT

POSTGRADUATE (PG)
• M.Tech / M.E. (2 years) – ₹2–5 L/year | Total: ₹2.42–10.38 L | Entrance: GATE / BITS Entrance | 68 specializations
  Popular Domains: Software Engineering, VLSI, Communication Systems, Embedded Systems, Manufacturing, AI

• MBA (2 years, 500 seats) – ₹4 L/year | Total: ₹8.0–10.38 L | Entrance: CAT/MAT/XAT/GMAT/BITS Entrance
  Domains: Analytics, Marketing, Finance, Strategy, Operations

• M.Sc (2 years, 200 seats) – ₹75,000/year | Entrance: BITS Entrance | 6 disciplines

DOCTORAL (Ph.D)
• Duration: 3–5 years | Annual Fee: ₹50,000 | 27 programs | 900+ Ph.D scholars
• Entrance: BITS Entrance / GATE / CSIR-NET / UGC-NET
• Focus: AI, Pharma, Data Science, Energy, Biotechnology, Management Sciences
• Fellowships: ₹37,000–₹45,000/month (Teaching/Research Assistantship)

HOSTEL & MESS: ₹0.9–1.1 L per year`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech / B.E. Cutoffs (BITSAT scores):
• CSE (Pilani) – 350–380+ | CSE (Goa/Hyderabad) – 330–360+
• ECE – 310–350 | Mechanical – 290–330 | Civil – 270–310

B.Pharm – BITSAT (PCB/PCM) | 65% in 12th

M.Tech – GATE 600+ / BITS Entrance | Departmental shortlisting

MBA – 85–90 percentile | CAT/MAT/XAT/GMAT/BITS Entrance + GD + PI

Ph.D – BITS Entrance / GATE / NET | Interview + Research Proposal

MERIT FORMULA:
(BITSAT score / 450 × 100) + (12th PCM%)

NO RESERVATIONS: Admission purely merit-based

SCHOLARSHIPS: Up to 100% tuition fee waiver for high-merit and need-based candidates

Application Window: May–June (BITSAT)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 2,458+ | Recruiters: 300+
• Highest International Package: ₹6.1 Cr
• Highest Domestic Package: ₹1.2 Cr
• Average Package: ₹30.4 LPA
• CSE Average: ₹24.0 LPA | ECE Average: ₹20.0 LPA
• Pre-Placement Offers (PPOs): 250

Top Recruiters: Google, Microsoft, Apple, Amazon, Qualcomm, Nvidia, Adobe, Oracle, Uber, Goldman Sachs, JP Morgan, McKinsey, BCG, Deloitte, PwC, Cisco, IBM, Flipkart, Samsung, SAP Labs, Accenture, TCS

Key Roles: SDE, Data Scientist, ML Engineer, Product Manager, Business Analyst, Management Consultant, Financial Analyst, R&D Engineer

Placement Trend (2022–2025):
• 2025: ₹30+ L avg | ₹6.1 Cr intl highest | ₹1.2 Cr domestic | 250 PPOs
• 2024: ₹30.4 L avg | ₹6.1 Cr intl highest | ₹1.2 Cr domestic | 245 PPOs
• 2023: ₹28.0 L avg | ₹1.06 Cr intl highest | ₹1.3 Cr domestic | 200 PPOs
• 2022: ₹25.0 L avg | ₹2.15 Cr intl highest | ₹2.15 Cr domestic | 180 PPOs`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #18 (India's #1 private technical university)
• Engineering: #11 (Top 3 private institutions overall)

GLOBAL RANKINGS
• QS World 2026: #335 (Steady upward trajectory)
• QS Asia 2025: #130 (Strong academic reputation)
• THE Engineering: 301–400 Band (Global competitiveness)
• India Today: #1 (Engineering - Private Institutions)
• ARIIA: Excellent (Innovation & Entrepreneurship)`,
      campus: `CAMPUS & INFRASTRUCTURE

Flagship Campus: Pilani, Rajasthan (328 acres)
Other Campuses: Goa · Hyderabad · Dubai

Academic Facilities:
• 200+ labs with supercomputing, 3D printing, AI/ML clusters
• Library: 3.6L+ books, 8,000+ e-journals, AI catalog, 24/7 access
• Research centers: Nanoscience, Data Analytics & AI, Water & Energy Sustainability

Hostel & Residential Life:
• 14 hostels (Boys & Girls), fully networked, furnished rooms
• Hostel Fee: ₹0.9–1.1 L per year
• 5+ messes, cafés, and food courts with diverse options

Sports & Wellness:
• Olympic-size pool, cricket ground, athletics, squash, gym
• Yoga & wellness centers; active sports culture through BOSM

Medical:
• 24×7 hospital with emergency, doctors, pharmacy
• Tie-ups with tertiary hospitals

Transport & Amenities:
• ATMs, post office, guest houses, campus buses, retail outlets`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 1,000+ | Ph.D-qualified: Majority | Departments: 23

Research Metrics (2024):
• Funding: ₹399 Cr | Patents Filed: 146 | Research Scholars: 900+

Research Strengths:
• AI & Machine Learning | Nanotechnology
• Biotechnology | Renewable Energy
• Pharmaceutical Sciences | Sustainable Engineering
• Data Analytics

Collaborating Institutions:
MIT (USA), Cambridge (UK), NTU Singapore, TU Munich, ETH Zurich, ISRO, DRDO, Siemens, Tata Group

Research Centers:
• Centre for Nanoscience and Engineering
• Centre for Data Analytics and AI
• Centre for Water and Energy Sustainability
• Centre for Entrepreneurship and Innovation`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Flagship Festivals:
• APOGEE – Tech Festival
• OASIS – Cultural Fest
• BOSM – Sports Meet

Active Clubs (50+):
Robotics, Coding, Entrepreneurship Cell, Literary, Photography, Music, Drama, Dance, NSS, NCC

Practice School System (PS-I & PS-II):
• Unique 6–7 month internship integrated into curriculum
• BITS' signature model ensuring every graduate gains real-world experience
• Industry exposure with leading companies

Campus Spirit:
• Strong academic rigor with excellent peer group
• Global-standard campus facilities
• Exceptional industry exposure via Practice School
• Highly competitive peer ecosystem

Sports & Wellness:
• Olympic-size swimming pool
• Cricket ground and athletics track
• Indoor sports complex with squash courts
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ 4.7/5 on CollegeDunia (12,000+ reviews)
⭐ 4.8/5 on Careers360

Highlights: #1 Private University · Excellent ROI · Strong brand recognition · Practice School advantage`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
Robotics Club, Coding Club, AI/ML Society, Electronics Society, VLSI Club, IEEE Student Chapter

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis, Squash`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• APOGEE – Tech Festival with seminars, competitions, and hackathons
• OASIS – Cultural performances celebrating heritage
• BOSM – Inter-college sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹399 Cr research funding (2024) | 146 patents filed
• 4+ major research centers
• 900+ Ph.D scholars conducting cutting-edge research
• Collaborations with global institutions and industry

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Nanotechnology & Advanced Materials
• Biotechnology & Pharmaceutical Sciences
• Renewable Energy & Sustainability
• Data Analytics & Cloud Computing
• Sustainable Engineering Solutions

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Centre for Entrepreneurship and Innovation
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with ISRO, DRDO, ONGC for funded projects
• Joint research with Intel, Tata Steel, IBM
• Microsoft Research partnerships
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in BITSAT
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Up to 100% tuition fee waiver for high-merit and need-based candidates

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹37,000–₹45,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends

Practice School Stipends:
• PS-I and PS-II internships provide industry exposure and stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Solar-powered hostels and labs
• Waste recycling & biogas generation units
• Water harvesting and smart irrigation
• Water treatment & reuse systems

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle buses and eco-friendly transportation

Campus Design:
• 328-acre scenic campus in Pilani, Rajasthan
• Green corridors and pedestrian zones
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon neutrality drive by 2030

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain #1 Private University ranking and enter Global Top-300 Universities
• Enhance research funding to ₹600+ Cr annually
• Increase international collaboration partnerships to 150+
• Launch 50+ startups annually through incubation
• Expand multi-campus operations with enhanced facilities

Academic Excellence:
• Expand Practice School partnerships globally
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 300+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 150+ countries

Institutional Strengths:
• #1 Private University in India
• Strong industry partnerships and placements
• Excellent ROI with moderate fees
• 1,60,000+ global alumni in FAANG, consulting, startups, research
• Practice School system providing real-world experience
• Beautiful, green, and culturally rich campus environment`
    };
  }, []);

  // Generate PDF for BITS Pilani with comprehensive data
  const generateBITSPilaniPDF = React.useCallback(() => {
    const data = getBITSPilanibrochureData() as BrochureData;
    const sections = [
      { title: 'About BITS Pilani', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Birla Institute of Technology and Science (BITS) Pilani', data, sections);
  }, [getBITSPilanibrochureData]);

  // Get comprehensive VIT Vellore brochure data
  const getVITVellorebrochureData = React.useCallback(() => {
    return {
      about: `Vellore Institute of Technology (VIT) Vellore is one of India's top-ranked private technical universities, consistently among the top 20 in NIRF and globally recognized for innovation, interdisciplinary education, and strong industry connect. Founded in 1984 by Dr. G. Viswanathan and declared a deemed university in 2001.

VIT pioneered India's Fully Flexible Credit System (FFCS) — allowing students to design their course structures — and maintains a 95–100% placement rate year after year. Its emphasis on research-driven pedagogy, international collaboration, and multicultural student community has placed it among the world's emerging global universities.

Established: 1984 | Deemed University: 2001 | Type: Private Deemed University
Campus Area: 372 acres (main campus, Vellore) | Total Students: 50,000+ across 4 campuses
Faculty: 1,200+ (Vellore: ~400) | NIRF 2025: Overall Rank #21 | Engineering Rank #16
QS 2026 World: #791–800 | QS Engineering: #142 globally | NAAC Accreditation: Grade A++`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech Group A (4 years, 3,000+ seats) – ₹1.73 L/year | Total: ₹6.92 L | Entrance: VITEEE
  Popular Specializations: CSE (Rank 8,000–9,000), CSE (AI & Data Science) (Rank 9,500–10,000), CSE (Cyber Security), ECE (Rank 11,000–13,000), Mechanical (Rank 14,000–16,000), EEE, Civil, Chemical, Biotechnology, Fashion Technology

• B.Tech Group B (4 years) – ₹1.95 L/year | Total: ₹7.80 L | Entrance: VITEEE

• B.Arch (5 years) – ₹1.8 L/year | Total: ₹8.7 L | Entrance: NATA

• Integrated M.Sc (5 years) – ₹1.6 L/year | Total: ₹7.5 L | Entrance: VIT Entrance

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹1.2–2.0 L/year | Total: ₹2.4–3.5 L | Entrance: GATE / VIT Entrance
  Popular Domains: Data Science, AI, Embedded Systems, VLSI, Structural Engineering, Power Systems

• MBA (2 years) – ₹3.5–4.0 L/year | Total: ₹4.0 L | Entrance: CAT/MAT/XAT/NMAT
  Domains: Marketing, Analytics, Finance, HR, Operations

• M.Sc (2 years) – ₹75,000/year | Entrance: VIT Entrance | Disciplines: Physics, Chemistry, Mathematics, Biotechnology, Applied Sciences

DOCTORAL (Ph.D)
• Duration: 3–5 years | Annual Fee: ₹50,000 | 13 programs | All engineering, science, and management disciplines
• Entrance: VIT Entrance / NET / GATE | Written + Interview + Proposal evaluation
• Focus: AI, VLSI, Biotech, Renewable Energy, Robotics, Nanotech, Environmental & Healthcare Tech
• Fellowships: ₹30,000–₹45,000/month for full-time scholars

HOSTEL & MESS: ₹50,000–₹80,000 per year`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech Cutoffs (VITEEE ranks):
• CSE – 8,000–9,000 | CSE (AI & Data Science) – 9,500–10,000
• ECE – 11,000–13,000 | Mechanical – 14,000–16,000

B.Arch – NATA | 12th + NATA | VIT Counselling

M.Tech – GATE 600+ / VIT Entrance | Departmental test/interview possible

MBA – 85+ percentile preferred | CAT/MAT/XAT/NMAT + GD + PI

Ph.D – VIT Entrance / NET / GATE | Written + Interview + Proposal evaluation

MERIT POLICY:
VIT admissions are 100% merit-based — no caste, religion, or state quotas

SCHOLARSHIPS: Need-based waivers up to 100% for top-performing students

Application Window: May–June (VITEEE)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 10,458+ | Recruiters: 409+
• Highest International Package: ₹1.0 Cr
• Highest Domestic Package: ₹63 L
• Average Package: ₹9.9 LPA
• CSE Average: ₹12 LPA | ECE Average: ₹9.5 LPA
• Placement Rate: 95%+

Top Recruiters: Microsoft, Google, Amazon, Adobe, Oracle, Intel, Qualcomm, Samsung, Cisco, IBM, Dell, VMware, Salesforce, PayPal, TCS, Infosys, Accenture, Deloitte, EY, PwC, Capgemini

Key Roles: SDE, Data Scientist, AI/ML Engineer, Product Manager, Cybersecurity Analyst, Full Stack Developer, Embedded Engineer, R&D Engineer

Placement Trend (2022–2025):
• 2025: ₹9.9 L avg | ₹1.0 Cr intl highest | ₹63 L domestic | 400+ recruiters
• 2024: ₹9.8 L avg | ₹1.0 Cr intl highest | ₹45 L domestic | 409 recruiters
• 2023: ₹8.9 L avg | ₹44 L intl highest | ₹36 L domestic | 420 recruiters
• 2022: ₹8.2 L avg | ₹44 L intl highest | ₹35 L domestic | 430 recruiters

Industry Engagement:
• Practice School (PS-I/II) internship model
• 100% internship support
• Dedicated "Career Development Centre (CDC)" for placement readiness`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #21 (Consistent Top 25)
• Engineering: #16 (Strong academic outcome score)
• University: #14 (Among top private universities)

GLOBAL RANKINGS
• QS World 2026: #791–800 (Globally ranked among top 800)
• QS Engineering 2026: #142 (Strong in Technology)
• ARIIA: High Performance (Innovation & Entrepreneurship)
• India Today: #2 (Engineering - Private Institutions)
• NAAC Accreditation: Grade A++`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 372 acres (main campus, Vellore, Tamil Nadu) | Hostels: 24 | Labs: 100+ | Library: 40,000 books, 300+ journals
• Location: Vellore Campus, Vellore – 632014, Tamil Nadu

Academic Facilities:
• 100+ advanced labs (AI, VLSI, IoT, Nanotech, Robotics)
• Periyar Central Library: 40,000 books, 300+ journals, digital archives
• 13 specialized research centers across AI, VLSI, Biotech, Renewable Energy, Robotics

Hostel & Residential Life:
• 24 modern hostels (AC/Non-AC) for 21,900+ students
• Hostel Fee: ₹50,000–₹80,000 per year
• 8 messes, food courts, and cafes with global cuisines

Sports & Wellness:
• 400m track, football fields, swimming pools, indoor arenas
• Yoga & wellness centers; active sports culture through VIT Sports Meet

Medical:
• 24×7 Health Centre with emergency, OPD, and pharmacy
• Tie-ups with tertiary hospitals

Amenities:
• ATMs, post office, shuttle buses, convenience stores`,
      faculty: `FACULTY & RESEARCH EXCELLENCE

Faculty Strength:
• Total Faculty: 400+ (Vellore campus) | 1,200+ (across all campuses)
• Ph.D-qualified: 90%+ | Top 2% Global Scientists (Stanford 2024): 76 Professors

Research Metrics (2024):
• Research Centers: 13 specialized centers
• Schools: 9 Schools of Excellence

Schools of Excellence:
• School of Computer Science and Engineering (SCOPE)
• School of Electronics Engineering (SELECT)
• School of Mechanical Engineering (SMEC)
• School of Bio-Sciences and Technology (SBST)
• School of Electrical Engineering (SENSE)
• School of Information Technology (SITE)
• School of Civil Engineering (SCE)
• School of Advanced Sciences (SAS)
• School of Social Sciences and Languages (SSL)

Research Domains:
• AI & Machine Learning | Data Analytics | Cybersecurity
• VLSI Design | Robotics & Automation | Nanotechnology
• Renewable Energy | Biotechnology | Environmental & Healthcare Tech

Global Collaborations:
MIT (USA), Stanford, NTU Singapore, TUM Germany, KAIST Korea, University of Melbourne, Curtin Australia

Industry Partners:
Microsoft, IBM, Siemens, Bosch, Infosys, DRDO, ISRO, Intel, Honeywell`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Flagship Festivals:
• Riviera – India's 2nd largest cultural festival
• Gravitas – Tech fest for innovation and robotics
• VIT Sports Meet – 20+ intercollegiate events

Clubs & Societies (50+):
Technical (IEEE, ACM, Robotics), Entrepreneurship Cell, Drama & Dance Clubs, Literary & Arts, NSS, NCC

Signature Initiatives:
• Fully Flexible Credit System (FFCS) – students customize course loads and faculty choices
• Global Mobility Program – semester exchange with 200+ partner universities
• Innovation Incubator – startup acceleration through VIT-TBI

Campus Spirit:
• Highly structured academic system (FFCS)
• Excellent placements & internships
• Clean, safe, and globalized campus
• Research exposure & industry projects from early years
• 100% internship support

Sports & Wellness:
• 400m synthetic running track
• Football fields and cricket grounds
• Swimming pools and indoor arenas
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ 4.5/5 on CollegeDunia (15,000+ reviews)
⭐ 4.6/5 on Careers360

Highlights: #2 Private University · 95%+ placement rate · FFCS flexibility · Global mobility programs`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
IEEE Student Chapter, ACM Student Chapter, Robotics Club, Coding Club, AI/ML Society, VLSI Club, Electronics Society

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Riviera – India's 2nd largest cultural festival with performances and competitions
• Gravitas – Tech fest for innovation, robotics, and hackathons
• VIT Sports Meet – Inter-college sports tournament with 20+ events
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• 13 specialized research centers across key disciplines
• 76 Professors in Top 2% Global Scientists (Stanford 2024)
• Active collaborations with global institutions and industry

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Data Analytics & Big Data
• Cybersecurity & Network Security
• VLSI Design & Embedded Systems
• Robotics & Autonomous Systems
• Nanotechnology & Advanced Materials
• Renewable Energy & Sustainability
• Biotechnology & Pharmaceutical Sciences
• Environmental & Healthcare Technology

Startup Incubation:
• VIT-TBI (Technology Business Incubator): Mentorship and funding support
• Entrepreneurship Cell: Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with Microsoft, IBM, Siemens, Bosch for funded projects
• Joint research with DRDO, ISRO, Intel, Honeywell
• Infosys and other Fortune 500 partnerships
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in VITEEE
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Up to 100% tuition fee waiver for top-performing students

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹30,000–₹45,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends

Practice School Stipends:
• PS-I and PS-II internships provide industry exposure and stipends`,
      sustainability: `SUSTAINABILITY & SMART CAMPUS

Environmental Initiatives:
• 100% renewable energy on select blocks
• Rainwater harvesting and wastewater recycling
• Solar rooftops and smart lighting
• Waste recycling & composting programs

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services

Campus Design:
• 372-acre scenic campus in Vellore, Tamil Nadu
• Green building certification under IGBC
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-20 NIRF ranking and enter Global Top-500 Universities
• Enhance research output and publications
• Increase international collaboration partnerships to 250+
• Launch 50+ startups annually through incubation
• Expand multi-campus operations with enhanced facilities

Academic Excellence:
• Expand Fully Flexible Credit System (FFCS) globally
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 200+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 150+ countries

Institutional Strengths:
• #2 Private University in India
• Strong industry partnerships and placements
• Excellent ROI with affordable fees
• 200,000+ global alumni in FAANG, Fortune 500, startups
• FFCS system providing flexible learning
• 95%+ placement rate consistently
• Beautiful, green, and culturally rich campus environment`
    };
  }, []);

  // Generate PDF for VIT Vellore with comprehensive data
  const generateVITVellorePDF = React.useCallback(() => {
    const data = getVITVellorebrochureData() as BrochureData;
    const sections = [
      { title: 'About VIT Vellore', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Excellence', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Smart Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Vellore Institute of Technology (VIT) Vellore', data, sections);
  }, [getVITVellorebrochureData]);

  // Get comprehensive Thapar Institute (TIET) brochure data
  const getThaparbrochureData = React.useCallback(() => {
    return {
      about: `Thapar Institute of Engineering and Technology (TIET), Patiala is among India's oldest and most prestigious private engineering universities. Established in 1956 through a tri-partite collaboration between the State of PEPSU, Government of India, and the Patiala Technical Education Trust.

TIET pioneered industry-academia partnerships in technical education, combining strong fundamentals, global research exposure, and entrepreneurial thinking. Today, it operates as a research-driven, multidisciplinary institute known for rigorous engineering and applied science programs, top-tier placements, and global industry linkages.

Established: 1956 | Type: Private Deemed University | Campus Area: 250 acres
Student Strength: 10,000+ | Faculty: 470+ | Departments: 20
NIRF 2025: Overall Rank #43 | Engineering Rank #29 | QS Asia 2025: #210
NAAC Accreditation: A+`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.E./B.Tech (4 years, 1,200 seats) – ₹6.3 L/year | Total: ₹19.42–25.3 L | Entrance: JEE Main
  Popular Specializations: CSE (₹25.3 L total), Computer Engineering, ECE, Electrical & Computer, Mechanical, Civil, Chemical, Biotechnology, Robotics & AI, Industrial Engineering, Data Science & AI, CSE (Business Systems)
  Other Engineering Branches: ₹19.42–23 L total

• B.Arch (5 years) – Entrance: JEE Main + NATA

• B.Des (4 years) – Entrance: UCEED

POSTGRADUATE (PG)
• M.Tech/M.E. (2 years) – ₹1.9–2.1 L/year | Total: ₹3.88–4.29 L | Entrance: GATE | 20+ specializations
  Popular Domains: Data Science, CSE, Power Systems, VLSI, Structural Engineering, Robotics, AI

• MBA (2 years, 300 seats) – ₹6.8 L/year | Total: ₹13.5 L | Entrance: TMAT/CAT/XAT/NMAT
  Domains: Marketing, Analytics, Finance, HR, Operations

• M.Sc (2 years, 200 seats) – ₹1.5 L/year | Total: ₹3.0 L | Entrance: IIT JAM
  Disciplines: Physics, Chemistry, Mathematics, Biotechnology

DOCTORAL (Ph.D)
• Duration: 3–5 years | Annual Fee: ₹87,000–₹4.15 L | 15+ disciplines
• Entrance: GATE/NET/CSIR-NET/Institute test + Interview + Proposal evaluation
• Focus: AI, ML, Clean Energy, Nanotech, Quantum Computing, Sustainability
• Scholarships: ₹30,000–₹45,000/month for full-time scholars
• Research Centers: 15+ across science and engineering disciplines

HOSTEL & MESS: ₹34,600–₹77,000 per year`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech Cutoffs (JEE Main ranks):
• CSE – 33,379 (General) | Computer Engineering – 35,000+
• ECE – 40,000+ | Mechanical – 50,000+ | Civil – 60,000+

B.Arch – JEE Main + NATA | TIET Counseling

M.Tech – GATE 600+ (CSE) | Institute Counseling

MBA – 75 percentile (General) | TMAT/CAT/XAT/NMAT + GD + PI

M.Sc – IIT JAM | TIET Portal

Ph.D – GATE/NET/CSIR-NET + Interview + Research Proposal

RESERVATION POLICY:
Follows Govt. of India norms: OBC-NCL 27% | SC 15% | ST 7.5% | EWS 10% | PwD 5%

Application Mode: Online via admissions.thapar.edu
Application Window: May–June (JEE Main)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 1,690+ | Recruiting Companies: 510+
• Highest International Package: ₹1.2 Cr
• Highest Domestic Package: ₹1.2 Cr
• Average Package: ₹11.4 LPA
• CSE Average: ₹16.5 LPA | ECE Average: ₹12.0 LPA
• Pre-Placement Offers (PPOs): 200
• MBA Median: ₹12.0 LPA

Top Recruiters: Amazon, Microsoft, Deloitte, IBM, Google, TCS, Infosys, Wipro, Cognizant, Accenture, Adobe, Oracle, L&T, Bosch, Honeywell, Qualcomm, Intel, Samsung, Goldman Sachs, JP Morgan, Siemens

Common Roles: SDE, Data Scientist, Consultant, Analyst, Hardware Engineer, Product Manager, R&D Engineer

Placement Trend (2022–2025):
• 2025: ₹11.4 L avg | ₹1.2 Cr intl highest | ₹1.2 Cr domestic | 510 recruiters | 200 PPOs
• 2024: ₹10.9 L avg | ₹1.2 Cr intl highest | ₹85 L domestic | 480 recruiters | 190 PPOs
• 2023: ₹10.3 L avg | ₹75 L intl highest | ₹60 L domestic | 430 recruiters | 180 PPOs
• 2022: ₹9.8 L avg | ₹60 L intl highest | ₹55 L domestic | 420 recruiters | 160 PPOs

Strengths:
• Early industry exposure via Industry Internship Program (IIP)
• Domain-specific training modules in 2nd year
• 95%+ placement rate for top branches`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #43 (Strong academic and placement outcomes)
• Engineering: #29 (Among India's top 30 engineering schools)

GLOBAL RANKINGS
• QS Asia 2025: #210 (Strong industry reputation)
• ARIIA: High Performance (Innovation & Entrepreneurship)
• India Today 2024: #3 (Private Engineering)
• NAAC Accreditation: A+`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 250 acres | Hostels: 16 | Labs: 120+ | Library: 150,000 books, 4,000 e-journals
• Location: Bhadson Road, Patiala – 147004, Punjab
• Fully Wi-Fi enabled, eco-friendly, centrally located

Academic Facilities:
• 120+ research labs (AI, IoT, Robotics, Nanotech, VLSI)
• Central Library: 150,000 books, 4,000 e-journals, 24/7 digital access
• 15+ research centers across science and engineering disciplines

Hostel & Residential Life:
• 16 hostels (Boys/Girls/AC/Non-AC), 10,000+ capacity
• Hostel Fee: ₹34,600–₹77,000 per year
• Multiple messes, Sodexo-run cafeterias, food courts

Sports & Wellness:
• Synthetic tracks, tennis/basketball courts, pool, gym
• Yoga & wellness centers; active sports culture through Thapar Sports Fest

Medical:
• 24×7 Health Centre with emergency & ambulance
• Tie-ups with tertiary hospitals

Amenities:
• Banks, ATMs, post office, stores, 24×7 security`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 470+ | Ph.D-qualified: 85%+ | Departments: 20

Research Metrics (2024):
• Patents Filed: 30 | Research Funding: ₹20.0 Cr | Research Centers: 15+

Key Departments:
CSE, CE, ECE, Electrical, Mechanical, Civil, Chemical, Biotechnology, Management, Mathematics, Physics, Chemistry, MCA

Major Research Areas:
• AI/ML | Data Science | Robotics & Automation
• VLSI Design | Nanotechnology | Renewable Energy
• Biotechnology | Quantum Computing | Clean Energy

Centers of Excellence:
• AI & Machine Learning Research Centre
• VLSI Centre
• Robotics & Automation Lab
• Renewable Energy Centre
• Nanotechnology Centre

Global Research Partners:
MIT (USA), Cambridge (UK), NTU Singapore, TU Munich, ETH Zurich, ISRO, DRDO, Siemens, ONGC, Tata Group

Industry Partners:
IBM, Intel, Microsoft, Bosch, Honeywell, Qualcomm, Samsung`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Festivals:
• Saturnalia – Annual cultural fest
• Aranya – National tech fest
• Thapar Sports Fest – Inter-university tournament

Student Societies (40+):
Robotics Club, Coding & Innovation Society, Entrepreneurship Cell, Music, Dance, Drama Clubs, Literature & Debate Forum, NSS, NCC, Social Impact Clubs

Community Life:
• Collaborative hostel culture, peer mentorship, and intra-college events
• Strong bonds and leadership development
• Early industry exposure via Industry Internship Program (IIP)
• Domain-specific training modules in 2nd year

Sports & Wellness:
• Synthetic running tracks
• Tennis and basketball courts
• Swimming pool and indoor arenas
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ 4.5/5 on CollegeDunia (10,000+ reviews)
⭐ 4.6/5 on Careers360

Highlights: #3 Private Engineering · Consistent placements · Strong peer culture · Global research opportunities`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
Robotics Club, Coding & Innovation Society, AI/ML Society, Electronics Society, VLSI Club, IEEE Student Chapter

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing, Social Impact Clubs

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Saturnalia – Annual cultural fest with performances and competitions
• Aranya – National tech fest for innovation, robotics, and hackathons
• Thapar Sports Fest – Inter-university sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹20.0 Cr research funding (2024) | 30 patents filed
• 15+ research centers across key disciplines
• Active collaborations with global institutions and industry

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Data Science & Big Data Analytics
• Robotics & Autonomous Systems
• VLSI Design & Embedded Systems
• Nanotechnology & Advanced Materials
• Renewable Energy & Sustainability
• Biotechnology & Pharmaceutical Sciences
• Quantum Computing & Clean Energy

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with ISRO, DRDO, ONGC for funded projects
• Joint research with Siemens, Tata Group, IBM, Intel, Microsoft
• Bosch and Honeywell partnerships
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in JEE Main
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹30,000–₹45,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Solar-powered hostels & smart lighting
• Wastewater recycling & rainwater harvesting
• Waste recycling & composting programs
• E-mobility & bicycle corridors

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services

Campus Design:
• 250-acre scenic campus in Patiala, Punjab
• 10,000+ trees and green landscapes
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system
• Paperless administration initiatives`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-30 Engineering ranking and enter Global Top-300 Universities
• Enhance research funding to ₹50+ Cr annually
• Increase international collaboration partnerships to 100+
• Launch 30+ startups annually through incubation
• Expand student enrollment with enhanced facilities

Academic Excellence:
• Expand industry-academia partnerships globally
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 100+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 100+ countries

Institutional Strengths:
• #3 Private Engineering University in India
• Strong industry partnerships and placements
• Excellent ROI with moderate fees
• 120,000+ global alumni in Microsoft, Amazon, Deloitte, Goldman Sachs, ISRO
• Industry Internship Program (IIP) providing real-world experience
• 95%+ placement rate for top branches
• Beautiful, green, and culturally rich campus environment`
    };
  }, []);

  // Generate PDF for Thapar Institute (TIET) with comprehensive data
  const generateThaparPDF = React.useCallback(() => {
    const data = getThaparbrochureData() as BrochureData;
    const sections = [
      { title: 'About Thapar Institute (TIET)', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Thapar Institute of Engineering and Technology (TIET), Patiala', data, sections);
  }, [getThaparbrochureData]);

  // Get comprehensive Amrita Vishwa Vidyapeetham brochure data
  const getAmritabrochureData = React.useCallback(() => {
    return {
      about: `Amrita Vishwa Vidyapeetham (Deemed-to-be University), Coimbatore is one of India's highest-ranked private multidisciplinary universities. Founded in 1994 by Sri Mata Amritanandamayi Devi ("Amma"), the university has emerged as a top-ranked institution recognized for its research-driven approach, social innovation, and value-based education.

The Coimbatore campus—Amrita's first and flagship—houses centers of excellence, global research hubs, and incubation facilities supporting student startups. The institution combines technical rigor, human values, and industry engagement, making it a top choice for global recruiters and scholars alike.

Established: 1994 | Type: Private Deemed University | Founder: Mata Amritanandamayi Devi ("Amma")
Campus Area: 400 acres (Coimbatore) | Total Students: 30,000+ | Faculty: 2,000+ across 19 Schools
NIRF 2025: Overall Rank #18 | Engineering Rank #23 | University Rank #7
QS Asia 2025: Top 200–250 | NAAC Accreditation: A++ (3.70/4 CGPA)
Global Collaborations: 200+ universities (MIT, Berkeley, Purdue, ETH Zurich, etc.)`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years) – ₹2.5–6 L/year | Total: ₹10–24 L | Entrance: AEEE / JEE Main
  Popular Specializations: CSE (₹24 L total), AI/ML (₹20–22 L), Data Science (₹20–22 L), Cybersecurity (₹20–22 L), ECE (₹10–15 L), Mechanical (₹10–15 L), Electrical (₹10–15 L), Biotechnology (₹10–15 L)
  Key Branches: CSE, AI/ML, Data Science, ECE, Cybersecurity, Mechanical, Electrical, Biotechnology

• B.Arch (5 years) – ₹4 L/year | Total: ₹20 L | Entrance: NATA / AEEE
  Focus: Architecture & Sustainable Design

• B.Des (4 years) – ₹3 L/year | Total: ₹12 L | Entrance: UCEED / AEEE
  Focus: Product Design, UI/UX, Visual Design

• MBBS (Kochi/Faridabad, 5.5 years) – ₹12–16 L/year | Total: ₹60–80 L | Entrance: NEET
  Focus: Medicine & Surgery

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹2.5–5 L/year | Total: ₹5–10 L | Entrance: GATE / AEEE | 30+ specializations
  Popular Domains: CSE, Data Science, AI/ML, Embedded Systems, Renewable Energy

• MBA (2 years) – ₹4–6 L/year | Total: ₹8–12 L | Entrance: CAT/MAT/XAT/Amrita Test + GD/PI
  Highlights: 100% placement rate; avg ₹8.33 LPA

• M.Sc (2 years) – ₹1.5 L/year | Total: ₹3 L | Entrance: GAT-B / GATE
  Disciplines: Physics, Chemistry, Mathematics, Biotechnology

• MCA (2 years) – ₹1.8 L/year | Total: ₹3.6 L | Entrance: Amrita Entrance
  Focus: Software & Data Applications

DOCTORAL (Ph.D)
• Duration: 3–5 years | Annual Fee: ₹1.0 L | 30+ Centers of Excellence
• Entrance: GATE / UGC-NET / CSIR / Amrita Test + Interview + Research Proposal
• Focus: AI/ML, Healthcare Tech, Cybersecurity, Sustainability, Compassion-Driven Research
• Scholarships: ₹30,000–₹50,000/month fellowships for full-time researchers

HOSTEL & MESS: ₹50,000–₹80,000 per year (vegetarian-only mess)`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech Cutoffs (AEEE/JEE Main percentiles):
• CSE (Coimbatore) – 92–99% | AI & Data Science – 89–96%
• ECE – 85–95% | Mechanical – 50–65% | EEE – 63–75%

B.Arch – NATA / AEEE | CSAP Counseling

M.Tech – GATE 600+ / AEEE | Institute counseling

MBA – CAT/MAT/XAT/Amrita Test + GD + PI | 100% placement rate

M.Sc – GAT-B / GATE | Institute Portal

Ph.D – GATE / UGC-NET / CSIR / Amrita Test + Interview + Research Proposal

RESERVATION POLICY:
Follows Govt. of India norms: OBC-NCL 27% | SC 15% | ST 7.5% | EWS 10% | PwD 5%

Application Mode: Online via amrita.edu/admissions
Application Window: May–June (AEEE)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Recruiters: 120+ | Placement Rate: 98% (Engineering) / 100% (MBA)
• Highest International Package: ₹5.7 Cr
• Highest Domestic Package: ₹55 L
• Average Package: ₹9.2 LPA
• CSE Average: ₹12.0 LPA | ECE Average: ₹10.0 LPA
• MBA Median: ₹7.6 LPA

Top Recruiters: Amazon, Microsoft, Dell, TCS, Infosys, Wipro, Accenture, Deloitte, Tech Mahindra, Samsung, IBM, Oracle, Cognizant, Adani, Bosch, Siemens, Qualcomm, Intel, Capgemini

Job Profiles: Software Engineer, Data Scientist, Product Manager, Cybersecurity Analyst, R&D Engineer, Consultant

Placement Highlights:
• Strong placement record with diverse recruiters
• High research integration & global collaborations
• Industry-ready graduates with value-based education
• 100% placement rate for MBA programs`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #18 (Top 20 nationally)
• Engineering: #23 (Among India's leading private engineering institutions)
• University: #7 (Highest-ranked private multidisciplinary university)

GLOBAL RANKINGS
• QS Asia 2025: Top 200–250 (Excellence in teaching & global partnerships)
• Times Higher Education (THE): 401–500 band (Noted for SDG impact & research quality)
• NAAC Accreditation: A++ (3.70/4 CGPA)
• ARIIA: Excellent (Innovation & Entrepreneurship - Incubation & startups)`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 400 acres (Coimbatore) | Location: Ettimadai, foothills of the Western Ghats
• Environment: Fully green, Wi-Fi enabled, sustainable campus
• Hostels: 8 (Boys/Girls) | Labs: 50+ | Library: 58,103 books, 3,000 e-journals

Academic Facilities:
• 50+ advanced labs (AI, IoT, Robotics, Cybersecurity, Nanotech)
• Central Library: 58,103 books, 3,000 e-journals, 24/7 access
• 30+ Centers of Excellence across science and engineering disciplines

Hostel & Residential Life:
• 8 hostels (Boys/Girls) with Wi-Fi, study rooms, recreation
• Hostel Fee: ₹50,000–₹80,000 per year
• Multi-cuisine vegetarian messes & cafes

Sports & Wellness:
• Olympic-size pool, athletics track, 22,000 sq.m facilities
• Yoga & meditation centers; active sports culture through Amritotsavam

Medical:
• 24×7 Dispensary with ambulance & specialists
• Tie-ups with tertiary hospitals

Sustainability:
• Rainwater harvesting, solar energy, waste recycling
• Zero-waste, plastic-free campus
• 100% vegetarian messes
• Active student sustainability council`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 2,000+ | Ph.D-qualified: 90%+ | Schools: 19

Research Metrics (2024):
• Research Centers: 30+ Centers of Excellence
• Research Funding: ₹100+ Cr (est.)
• Patents: Updated data expected 2025

Core Departments:
CSE, ECE, EEE, Mechanical, Civil, Chemical, Biotechnology, Aerospace, Mathematics, Management, Architecture, Humanities, Social Sciences

Major Research Themes:
• AI & Machine Learning | Cybersecurity | Sustainable Energy
• Humanitarian Technology | Healthcare Devices | IoT Systems
• Climate Change | Compassion-Driven Research

Centers of Excellence:
• AI & Machine Learning Research Centre
• Cybersecurity Centre
• Sustainable Energy Centre
• Humanitarian Technology Lab
• Healthcare Devices Lab
• IoT Systems Centre

Global Research Partners:
MIT (USA), ETH Zurich (Switzerland), UC Berkeley (USA), Purdue (USA), NTU Singapore, Uppsala (Sweden), University at Buffalo (USA), CERN

Industry Partners:
ISRO, DRDO, NPOL, Siemens, Google, IBM, Microsoft, Bosch, Qualcomm, Intel`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Cultural & Technical Festivals:
• Vidyamritam – Annual cultural fest
• Anokha – National-level tech fest
• Amritotsavam – Sports meet

Unique Programs:
• Live-in-Labs®: Global award-winning experiential learning initiative linking students to real-world sustainability projects across rural India
• AmritaCREATE: Social education & e-learning projects
• Amrita-TBI: Incubation hub for startups and innovation

Clubs & Societies (40+):
Technical Clubs, Entrepreneurship Cell, Arts & Literature, Debate & Drama, NSS, Yoga & Meditation

Lifestyle:
• Spiritual and eco-conscious culture rooted in Amma's philosophy of compassion
• Combined with modern learning and value-based education
• Inclusive campus environment with strong peer culture

Sports & Wellness:
• Olympic-size swimming pool
• Athletics track and sports facilities
• State-of-the-art gymnasium
• Yoga & meditation center

Student Ratings:
⭐ 4.6/5 on CollegeDunia (12,000+ reviews)
⭐ 4.7/5 on Careers360

Highlights: #7 Private University · 98%+ placement rate · Value-based education · Global collaborations`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
IEEE Student Chapter, ACM Student Chapter, Robotics Club, Coding Club, AI/ML Society, Cybersecurity Club, Electronics Society

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing, Social Impact Clubs

Spiritual & Wellness:
Yoga & Meditation Club, Spiritual Study Groups, Compassion-Driven Initiatives

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Vidyamritam – Annual cultural fest with performances and competitions
• Anokha – National-level tech fest for innovation, robotics, and hackathons
• Amritotsavam – Inter-university sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations

Unique Programs:
• Live-in-Labs® Workshops – Experiential learning sessions
• AmritaCREATE Events – Social education initiatives
• Startup Incubation Events – Entrepreneurship and innovation showcases`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹100+ Cr research funding (2024 est.) | 30+ Centers of Excellence
• Active collaborations with global institutions and industry
• Compassion-driven research approach

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Cybersecurity & Network Security
• Sustainable Energy & Renewable Systems
• Humanitarian Technology & Social Impact
• Healthcare Devices & Medical Technology
• IoT Systems & Smart Infrastructure
• Climate Change & Environmental Solutions
• Compassion-Driven Research Initiatives

Startup Incubation:
• Amrita-TBI (Technology Business Incubator): Mentorship and funding support
• Entrepreneurship Cell: Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with ISRO, DRDO, NPOL, Siemens for funded projects
• Joint research with Google, IBM, Microsoft for AI & Cloud partnerships
• United Nations / WHO / WASH partnerships for Humanitarian Tech
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in AEEE / JEE Main
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹30,000–₹50,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Zero-waste, plastic-free campus
• 100% vegetarian messes
• Solar-powered hostels & smart lighting
• Rainwater harvesting & organic farming
• Waste recycling & composting programs
• Active student sustainability council

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services

Campus Design:
• 400-acre scenic campus in Ettimadai, Coimbatore
• Located in foothills of the Western Ghats
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-20 NIRF ranking and enter Global Top-200 Universities
• Enhance research funding to ₹200+ Cr annually
• Increase international collaboration partnerships to 300+
• Launch 50+ startups annually through incubation
• Expand multi-campus operations with enhanced facilities

Academic Excellence:
• Expand value-based education globally
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 100+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on compassion-driven research

Social Impact:
• Community outreach programs through Live-in-Labs®
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 150+ countries

Institutional Strengths:
• #7 Private Multidisciplinary University in India
• Strong industry partnerships and placements
• Excellent ROI with moderate fees
• 30,000+ global alumni in Fortune 500 companies, research labs, and entrepreneurship ventures
• Value-based education combining spiritual values with scientific rigor
• 98%+ placement rate for engineering programs
• Beautiful, green, and culturally rich campus environment
• Compassion-driven research and social innovation focus`
    };
  }, []);

  // Generate PDF for Amrita Vishwa Vidyapeetham with comprehensive data
  const generateAmritaPDF = React.useCallback(() => {
    const data = getAmritabrochureData() as BrochureData;
    const sections = [
      { title: 'About Amrita Vishwa Vidyapeetham', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Amrita Vishwa Vidyapeetham (Deemed-to-be University), Coimbatore', data, sections);
  }, [getAmritabrochureData]);

  // Get comprehensive SOA (Siksha 'O' Anusandhan) brochure data
  const getSOAbrochureData = React.useCallback(() => {
    return {
      about: `Siksha 'O' Anusandhan (SOA) is one of eastern India's premier multi-disciplinary universities, recognized nationally for academic excellence, high research output, strong industry linkages, and professional diversity. Established as an educational society in 1984, SOA gained university status in 2007 and has since evolved into a comprehensive research-driven academic ecosystem.

Today, SOA hosts 120+ academic programs across Engineering, Medicine, Dental Sciences, Pharmacy, Law, Management, Agriculture, Nursing, and Allied Sciences. It operates through 9 constituent institutes, each ranked among India's best in its field.

SOA is home to ITER, one of India's top 25 engineering schools, and IMS & SUM Hospital, one of the largest teaching hospitals in eastern India, integrating academics with world-class healthcare.

Established: 1996 | Type: Private Deemed-to-be University | Founder: Late Prof. (Dr.) Manoj Ranjan Nayak
Campus Area: 450 acres | Total Students: 15,000+ | Faculty: 1,000+ across 9 institutes
NIRF 2025: Overall Rank #25 | University Rank #15 | Engineering Rank #22
NAAC Accreditation: A+ (Highest Grade) | Category-I Graded Autonomy Status`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years) – ₹8.8–11.1 L total | Entrance: SAAT / JEE Main
  Popular Specializations: CSE (₹11.1 L total), AI/ML (₹10.5 L), Data Science (₹10.5 L), ECE (₹9.5 L), Mechanical (₹9.0 L), Civil (₹8.8 L), Chemical, Biotechnology
  Key Branches: CSE, AI/ML, Data Science, ECE, Mechanical, Civil, Chemical, Biotechnology

• MBBS (5.5 years) – ₹60–80 L total | Entrance: NEET
  Focus: General Medicine

• BDS (5 years) – ₹15–18 L total | Entrance: NEET
  Focus: Dental Surgery

• B.Pharm (4 years) – ₹6–8 L total | Entrance: SAAT / OJEE
  Focus: Pharmaceutical Sciences

• BBA / BCA (3 years) – ₹3–4 L total | Entrance: SAAT / Merit
  Focus: Management / Computer Applications

• B.Sc Nursing / Agriculture (4 years) – ₹4–6 L total | Entrance: SAAT / ICAR
  Focus: Nursing, Agriculture, Biotechnology

• BA LLB / BBA LLB (5 years) – ₹7–8 L total | Entrance: CLAT / SAAT
  Focus: Law & Corporate Studies

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹1.3–2.0 L total | Entrance: GATE / SAAT | 30+ specializations
  Popular Domains: CSE, AI, Data Science, Electronics, Civil, Mechanical

• MBA (2 years) – ₹3.8–5.0 L total | Entrance: CAT/XAT/MAT/SAAT
  Domains: Marketing, HR, Finance, Business Analytics

• M.Sc / M.Pharm (2 years) – ₹1.5–3.0 L total | Entrance: SAAT / GPAT
  Disciplines: Chemistry, Physics, Bioinformatics, Pharmacology

• MCA (2 years) – ₹2.0–3.5 L total | Entrance: SAAT
  Focus: AI, Software, Cloud Computing

• LLM / MHA / MPH (2 years) – ₹3.0–4.0 L total | Entrance: SAAT / CLAT
  Focus: Law / Healthcare Management / Public Health

DOCTORAL (Ph.D)
• Duration: 3–5 years | Total Fee: ₹85,000–₹2.2 L | 15+ disciplines
• Entrance: SAAT / GATE / UGC-NET + Interview + Research Proposal
• Focus: Engineering, Medicine, Pharmacy, Law, Management, Agriculture, Data Science
• Research Fellowships: ₹30,000–₹40,000/month for full-time scholars
• Research Centers: 15+ Centers of Excellence

HOSTEL & MESS: ₹60,000–₹1.4 L per year (AC/Non-AC options)`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech Cutoffs (SAAT/JEE Main percentiles):
• CSE – 95–98% | AI & Data Science – 90–96%
• ECE – 85–95% | Mechanical – 75–85% | Civil – 70–80%

MBBS / BDS – NEET | MCC / State Counseling

M.Tech – GATE 600+ / SAAT | University Counseling

MBA – 75–80 percentile (General) | CAT/XAT/MAT/SAAT + GD + PI

M.Sc / M.Pharm – SAAT / GPAT | Institute Portal

Ph.D – SAAT / GATE / UGC-NET + Interview + Research Proposal

RESERVATION POLICY:
Follows Govt. of India norms: OBC-NCL 27% | SC 15% | ST 7.5% | EWS 10% | PwD 5%

Application Mode: Online via admission.soa.ac.in
Application Window: May–June (SAAT)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers: 1,836+ | Recruiters: 256+
• Highest Package: ₹46.0 LPA
• Average Package: ₹5.8 LPA
• CSE Average: ₹7.2 LPA | ECE Average: ₹6.5 LPA
• MBA Median: ₹6.5 LPA
• Placement Rate: 93% (Overall)

Top Recruiters: Microsoft, Amazon, Adobe, Accenture, Deloitte, Cognizant, Infosys, TCS, Tech Mahindra, Wipro, HCL, PwC, Capgemini, IBM, Optum, Bosch, Siemens, Nestlé

Popular Roles: Software Engineer, Analyst, Consultant, Research Associate, Management Trainee, Data Scientist

Placement Highlights:
• Strong placement support & corporate tie-ups
• Wide range of programs (Engineering + Medicine + Law + Management)
• Affordable fees compared to other top-tier universities
• Excellent medical and engineering infrastructure`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #25 (National recognition)
• University: #15 (Among India's top universities)
• Engineering (ITER): #22 (Among India's leading engineering schools)
• Medical (IMS): #24 (Among India's top medical schools)
• Dental: #9 (Among India's top dental schools)
• Law: #10 (Among India's top law schools)

GLOBAL RANKINGS
• ARIIA 2025: Excellent (Innovation & Entrepreneurship)
• India Today 2024: #6 (Private Universities)
• QS Asia: Under review for 2026 cycle
• NAAC Accreditation: A+ (Highest Grade)`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 450 acres | Location: Khandagiri Square, Bhubaneswar – 751030, Odisha
• Environment: Fully green, Wi-Fi enabled, sustainable campus
• Hostels: 20 | Labs: 100+ | Library: 250,000+ volumes, 10,000 e-journals

Academic Facilities:
• 100+ advanced labs (AI, Robotics, Pharma, Medical, IoT)
• Central Library: 250,000+ volumes, 10,000 e-journals, 24/7 reading zones
• 15+ Centers of Excellence across science and engineering disciplines

Hostel & Residential Life:
• 20 hostels (AC/Non-AC) with Wi-Fi, study rooms, gyms, common lounges
• Hostel Fee: ₹60,000–₹1.4 L per year
• Multi-cuisine cafeterias, messes with hygienic vegetarian/non-veg food

Healthcare:
• 1,750-bed SUM Hospital, 24×7 medical emergency
• Tie-ups with tertiary hospitals

Sports & Wellness:
• Football, cricket, tennis, badminton, basketball, gym
• Yoga & wellness centers; active sports culture through Sumedha

Sustainability:
• Solar panels, zero-waste policy, water harvesting
• Smart irrigation & rainwater harvesting
• Organic waste composting units
• 20% green energy target by 2030`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 1,000+ | Ph.D-qualified: 80%+ | Institutes: 9

Research Metrics (2024):
• Research Centers: 15+ Centers of Excellence
• Patents Filed: 30 | Publications (Scopus Indexed): 1,200+
• Research Funding: ₹20+ Cr

Constituent Institutes:
ITER (Engineering), IMS & SUM Hospital (Medical), IDS (Dental), SPS (Pharmacy), SN (Nursing), SOM (Management), SOL (Law), IAS (Agriculture), IBCS (Business & Computer Studies)

Major Research Themes:
• AI & Machine Learning | Data Science | Drug Discovery
• Renewable Energy | Nanotechnology | Public Health
• Biomedical Research | Sustainable Agriculture

Centers of Excellence:
• Center for Nanoscience & Materials
• AI & Data Science Research Hub (ITER)
• Biomedical Research & Innovation Centre (IMS)
• Pharmaceutical Sciences Research Centre
• Sustainable Agriculture & Rural Development Centre

Global Research Partners:
IIT Kharagpur, NIT Rourkela, Harvard, Johns Hopkins, AIIMS, ICMR

Industry Partners:
IBM, Microsoft, Amazon AWS, Bosch, Siemens, DRDO, CSIR, DST`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Cultural & Technical Festivals:
• SOA Fest – Annual cultural & technical celebration
• TechTrix – National-level innovation fest (ITER)
• Sumedha – Sports meet
• Innovision – Hackathon & Startup Expo

Clubs & Societies (50+):
Robotics Club, Coding Ninjas, Entrepreneurship Cell, NSS, Fine Arts, Dance Crew, Literary Society, Music Club

Cultural Identity:
• Blends Odia heritage with modernity
• Encourages social outreach, value education, and community service
• Academic rigor balanced with vibrant student life

Sports & Wellness:
• Football, cricket, tennis, badminton, basketball facilities
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ 4.5/5 on CollegeDunia (8,000+ reviews)
⭐ 4.6/5 on Careers360

Highlights: #15 University · 93%+ placement rate · Multi-disciplinary excellence · Strong research focus`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
Robotics Club, Coding Ninjas, AI/ML Society, Electronics Society, IEEE Student Chapter, ACM Student Chapter

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing, Social Impact Clubs

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• SOA Fest – Annual cultural & technical celebration with performances and competitions
• TechTrix – National-level innovation fest for innovation, robotics, and hackathons (ITER)
• Sumedha – Inter-university sports tournament
• Innovision – Hackathon & Startup Expo
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹20+ Cr research funding (2024) | 30 patents filed | 1,200+ Scopus indexed publications
• 15+ Centers of Excellence across key disciplines
• Active collaborations with global institutions and industry

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Data Science & Big Data Analytics
• Drug Discovery & Pharmaceutical Sciences
• Renewable Energy & Sustainability
• Nanotechnology & Advanced Materials
• Public Health & Healthcare Technology
• Biomedical Research & Innovation
• Sustainable Agriculture & Rural Development

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with DRDO, CSIR, DST for funded projects
• Joint research with AIIMS, ICMR for medical research
• IBM, Microsoft, Amazon AWS partnerships for AI & Cloud labs
• Bosch, Siemens partnerships for industry innovation`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in SAAT / JEE Main
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹30,000–₹40,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Plastic-free, zero-waste campus
• Solar energy across academic blocks
• Smart irrigation & rainwater harvesting
• Organic waste composting units
• 20% green energy target by 2030

Infrastructure:
• Energy-efficient buildings with natural ventilation
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services

Campus Design:
• 450-acre scenic campus in Bhubaneswar, Odisha
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-20 University ranking and enter Global Top-500 Universities
• Enhance research funding to ₹50+ Cr annually
• Increase international collaboration partnerships to 100+
• Launch 30+ startups annually through incubation
• Expand multi-institute operations with enhanced facilities

Academic Excellence:
• Expand multi-disciplinary programs globally
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 100+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs through SUM Hospital
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 100+ countries

Institutional Strengths:
• #15 University in India
• Strong industry partnerships and placements
• Excellent ROI with affordable fees
• 40,000+ global alumni in Infosys, Deloitte, AIIMS, DRDO, IBM, Microsoft, civil services
• Multi-disciplinary excellence spanning engineering to medicine to law
• 93%+ placement rate for overall programs
• Beautiful, green, and culturally rich campus environment
• Strong research focus with 15+ Centers of Excellence`
    };
  }, []);

  // Generate PDF for SOA (Siksha 'O' Anusandhan) with comprehensive data
  const generateSOAPDF = React.useCallback(() => {
    const data = getSOAbrochureData() as BrochureData;
    const sections = [
      { title: 'About Siksha \'O\' Anusandhan (SOA)', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Siksha \'O\' Anusandhan (SOA Deemed to be University), Bhubaneswar', data, sections);
  }, [getSOAbrochureData]);

  // Get comprehensive Amity University, Noida brochure data
  const getAmityNoidabrochureData = React.useCallback(() => {
    return {
      about: `Amity University, Noida (Amity University Uttar Pradesh) is one of India's leading private universities, recognized nationally for academic excellence, strong industry linkages, and global exposure. Established on March 24, 2005 under the Amity University Uttar Pradesh Act, 2005, the university is part of the Ritnand Balved Education Foundation, founded by Dr. Ashok K. Chauhan.

Amity University, Noida is India's first private university to implement social reservations (SC/ST/OBC/EWS), demonstrating its commitment to inclusive education. The university offers 240+ programs across Engineering, Business, Law, Communication, Architecture, Biotechnology, Fine Arts, and more.

Today, Amity operates through 15 major schools and institutes, each ranked among India's best in its field. The university combines technical rigor, industry engagement, and global partnerships, making it a top choice for students seeking comprehensive education with strong placement support.

Established: March 24, 2005 | Type: Private University | Founder: Dr. Ashok K. Chauhan
Campus Area: 60 acres (main campus), 365-acre extended ecosystem | Total Students: 35,968+ | Faculty: 2,287+
NIRF 2025: Overall Rank #49 | Engineering Rank #30 | Architecture Rank #25
QS World Rankings 2026: Top 3% worldwide | NAAC Accreditation: A+ (2024 cycle)
Global Ranking: Top 3% worldwide (QS & THE Rankings)`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years) – ₹7.48–16.72 L total | Entrance: Amity JEE / JEE Main / Merit
  Popular Specializations: CSE (₹16.72 L total), AI (₹16.52 L), IT (₹13.88 L), Biotechnology (₹14.0 L), ECE, Mechanical, Civil, Electrical
  Key Branches: CSE, AI, IT, Biotechnology, ECE, Mechanical, Civil, Electrical, Chemical

• B.Arch (5 years) – ₹10.0 L total | Entrance: Amity JEE / JEE Main + NATA
  Focus: Architecture & Planning

• BBA (3 years) – ₹7.32–14.55 L total | Entrance: Personal Interview / Direct Admission
  Focus: Business Administration

• BCA (3 years) – ₹7.32–14.55 L total | Entrance: Personal Interview / Direct Admission
  Focus: Computer Applications

• B.Com (3 years) – ₹7.32–14.55 L total | Entrance: Personal Interview / Direct Admission
  Focus: Commerce

• BA LLB (5 years) – ₹7.32–14.55 L total | Entrance: CLAT / Amity Entrance
  Focus: Law & Corporate Studies

• B.Sc (3 years) – ₹7.32–14.55 L total | Entrance: Personal Interview / Direct Admission
  Focus: Sciences, Biotechnology

• BFA (4 years) – ₹7.32–14.55 L total | Entrance: Personal Interview / Direct Admission
  Focus: Fine Arts

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹2.76–3.36 L total | Entrance: GATE / Amity Entrance | 30+ specializations
  Popular Domains: CSE, AI, Data Science, Electronics, Civil, Mechanical

• MBA (2 years) – ₹6.4–15.8 L total | Entrance: CAT/MAT/NMAT/XAT/CMAT/Amity Entrance + GD + PI
  Highlights: Strong placement support; avg ₹7.3 LPA
  Domains: Marketing, HR, Finance, Business Analytics, Operations

• M.Sc (2 years) – ₹1.5–2.0 L total | Entrance: Amity Entrance / Personal Interview
  Disciplines: Chemistry, Physics, Mathematics, Biotechnology, Bioinformatics

• M.Com (2 years) – ₹1.5–2.0 L total | Entrance: Amity Entrance / Personal Interview
  Focus: Commerce & Finance

• MA (2 years) – ₹1.5–2.0 L total | Entrance: Amity Entrance / Personal Interview
  Disciplines: English, Psychology, Economics, Political Science

• LLM (2 years) – ₹3.0–4.0 L total | Entrance: CLAT / Amity Entrance
  Focus: Law Specializations

• M.Arch (2 years) – ₹3.0–4.0 L total | Entrance: GATE / Amity Entrance
  Focus: Architecture & Planning

DOCTORAL (Ph.D)
• Duration: 3–5 years | Annual Fee: ₹1.0 L | 27+ research programs
• Entrance: Amity Entrance / UGC-NET / GATE + Interview + Research Proposal
• Focus: Engineering, Business, Sciences, Law, Management, Interdisciplinary Research
• Research Fellowships: ₹30,000–₹40,000/month for full-time scholars
• Research Centers: 120+ Centers of Excellence

HOSTEL & MESS: ₹1.2–1.8 L per year (AC/Non-AC, Single/Shared options)`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech / B.Arch Cutoffs:
• CSE – High merit in Amity JEE / JEE Main | AI – High merit in Amity JEE / JEE Main
• IT – Moderate merit in Amity JEE / JEE Main | Biotechnology – Moderate merit in Amity JEE / JEE Main
• B.Arch – NATA / JEE Main + NATA | Amity JEE Counseling

BBA / BCA / B.Com – Direct Admission / Merit | Personal Interview

MBA – CAT/MAT/NMAT/XAT/CMAT/Amity Test + GD + PI | 75–80 percentile preferred

M.Tech – GATE 600+ / Amity Entrance | Interview

M.Sc / M.Com / MA – Amity Entrance / Personal Interview | Institute Portal

Ph.D – Amity Entrance / UGC-NET / GATE + Interview + Research Proposal

RESERVATION POLICY:
Follows Govt. of India norms: OBC-NCL 27% | SC 15% | ST 7.5% | EWS 10% | PwD 5%
Note: India's first private university to implement social reservations

Application Mode: Online via amity.edu/admissions
Application Fee: ₹1,500 per program
Application Window: May–June (Amity JEE)`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers (2024): 11,000+ | Recruiters: 900+
• Highest International Package: ₹3.6 Crore
• Highest Domestic Package: ₹1.2 Crore
• Average Package: ₹9.6 LPA
• CSE Average: ₹6.3 LPA | ECE Average: ₹8.5 LPA
• MBA Median: ₹7.3 LPA
• Pre-Placement Offers (PPOs): 200+

Top Recruiters: TCS, Infosys, HCL, IBM, Wipro, Tech Mahindra, Cognizant, Accenture, Microsoft, Google, Aricent, Ford, Virtusa, NIIT Technologies, Zycus, HeadStrong, Indus Valley

Common Roles: Software Engineer, Data Analyst, Consultant, HR Executive, Marketing Manager, Operations Manager, Financial Analyst

Placement Highlights:
• Strong placement support & corporate tie-ups
• Wide range of programs (Engineering + Business + Law + Management)
• Global exposure through industry partnerships
• Excellent infrastructure and modern campus
• 900+ recruiters across diverse sectors`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• Overall Rank: #49 (National recognition)
• Engineering: #30 (Among India's leading engineering schools)
• Architecture & Planning: #25 (Among India's top architecture schools)

GLOBAL RANKINGS
• QS World Rankings 2026: Top 3% (Worldwide recognition)
• Times Higher Education (THE): 301–400 band (Engineering category)
• NAAC Accreditation: A+ (2024 cycle)
• ARIIA: Excellent (Innovation & Entrepreneurship - Recognized Innovation Hub)

NIRF Score Breakdown (2025):
• Teaching & Learning: ~73.06
• Research & Professional Practice: ~72.05
• Graduation Outcomes: ~82.90
• Outreach & Inclusivity: ~64.95
• Perception: ~51.24`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 60 acres (main campus), 365-acre extended ecosystem | Location: Sector 125, Noida, Uttar Pradesh
• Environment: Fully green, Wi-Fi enabled, sustainable campus
• Hostels: 10+ residential blocks | Labs: 200+ | Library: 200,000+ books, 5,000 e-journals

Academic Facilities:
• 200+ advanced labs (AI, VLSI, IoT, Nanotech, BioTech, Mechanical, Civil, Electrical)
• Central Library: 200,000+ books, 5,000 e-journals, 24/7 access, digital catalogues
• 120+ Centers of Excellence across science and engineering disciplines

Hostel & Residential Life:
• 10+ residential blocks (Boys & Girls) with AC/Non-AC, Wi-Fi, laundry, mess
• Hostel Fee: ₹1.2–1.8 L per year (AC/Non-AC, Single/Shared options)
• Multi-cuisine cafeterias, food courts, bookstores

Sports & Wellness:
• Olympic pool, football field, squash, badminton, tennis, shooting range, horse riding academy
• State-of-the-art gymnasium
• Yoga & wellness center

Medical:
• 24×7 B.C. Roy Hospital with OPD, emergency, ambulance, pharmacy
• Tie-ups with tertiary hospitals

Other Amenities:
• Banks, ATMs, food courts, bookstores, day care, auditorium, shuttle service
• Eco-sustainability: Solar panels, water recycling, waste management, green corridors`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 2,287+ | Ph.D-qualified: Majority | Schools: 15

Research Metrics (2024):
• Research Centers: 120+ Centers of Excellence
• Patents Filed: 146 | Research Funding: ₹399 Crore
• Publications: High research output across disciplines

Major Schools / Institutes:
ASET (Engineering), ABS (Business), Law School, Communication, Architecture, Biotechnology, Fine Arts, Liberal Arts, Pharmacy, Education

Major Research Themes:
• AI & Machine Learning | Nanotechnology | Biotechnology
• Water Resources | Renewable Energy | Bioinformatics
• Disaster Management | Sustainable Engineering

Centers of Excellence:
• AI & Machine Learning Research Centre
• Nanotechnology Centre
• Robotics & Automation Lab
• Sustainable Engineering Centre
• Biotechnology Research Centre
• Water Resources Centre

Global Research Partners:
MIT (USA), Cambridge (UK), NTU Singapore, TUM Germany, ISRO, DRDO, Siemens, Tata, ONGC

Industry Partners:
IBM, Microsoft, Google, TCS, Infosys, HCL, Wipro, Tech Mahindra, Cognizant, Accenture

Key Faculty:
Prof. Jaydev Dabas, Dr. Millie Pant, Dr. Rajan Arora, Dr. Ekant Sharma, Dr. Utpal Dey, Dr. Saravana Kumar M., Dr. Pankaj Gautam`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Cultural & Technical Festivals:
• Amity Youth Festival – Annual cultural & technical celebration
• Tech Fest – National-level innovation fest
• Management Fest – Business and management competitions
• Sports Meet – Inter-university sports tournament

Clubs & Societies (50+):
Technical Clubs, Cultural Clubs, Literary Society, Entrepreneurship Cell, Sports Clubs, Fine Arts, Dance Crew, Music Club

Cultural Identity:
• Blends modern education with cultural diversity
• Encourages social outreach, value education, and community service
• Academic rigor balanced with vibrant student life
• Student diversity: Representation from all states + 30+ countries

Sports & Wellness:
• Olympic-size swimming pool
• Football field, cricket ground, tennis, badminton, squash courts
• Shooting range and horse riding academy
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ 4.4/5 on CollegeDunia (20,000+ reviews)
⭐ 4.5/5 on Careers360

Highlights: #49 Overall · 900+ recruiters · Strong global exposure · Modern campus infrastructure`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
IEEE Student Chapter, ACM Student Chapter, Robotics Club, Coding Club, AI/ML Society, Electronics Society, VLSI Club

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing, Social Impact Clubs

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis, Shooting, Horse Riding`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Amity Youth Festival – Annual cultural & technical celebration with performances and competitions
• Tech Fest – National-level innovation fest for innovation, robotics, and hackathons
• Management Fest – Business and management competitions
• Sports Meet – Inter-university sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹399 Cr research funding (2024) | 146 patents filed | High research output across disciplines
• 120+ Centers of Excellence across key disciplines
• Active collaborations with global institutions and industry

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Nanotechnology & Advanced Materials
• Biotechnology & Pharmaceutical Sciences
• Water Resources & Management
• Renewable Energy & Sustainability
• Bioinformatics & Computational Biology
• Disaster Management & Resilience
• Sustainable Engineering & Green Technology

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance

Industry Partnerships:
• Collaboration with ISRO, DRDO, ONGC for funded projects
• Joint research with Siemens, Tata Group, IBM, Microsoft, Google
• TCS, Infosys, HCL partnerships for industry innovation
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• Institute Merit Scholarship – Top performers in Amity JEE / JEE Main
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions
• Note: India's first private university to implement social reservations

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹30,000–₹40,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Solar panels across academic blocks
• Water recycling & rainwater harvesting
• Waste management & green corridors
• Smart irrigation & organic waste composting
• Energy-efficient buildings with natural ventilation

Infrastructure:
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services
• Eco-sustainability focus across all facilities

Campus Design:
• 60-acre main campus in Sector 125, Noida, Uttar Pradesh
• 365-acre extended ecosystem
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-50 NIRF ranking and enter Global Top-300 Universities
• Enhance research funding to ₹500+ Cr annually
• Increase international collaboration partnerships to 200+
• Launch 50+ startups annually through incubation
• Expand multi-campus operations with enhanced facilities

Academic Excellence:
• Expand global exposure programs
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 200+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives
• Continue commitment to inclusive education through reservations

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 150+ countries

Institutional Strengths:
• #49 Overall University in India
• Strong industry partnerships and placements
• Excellent ROI with moderate fees
• 35,968+ students across diverse programs
• Global exposure through 900+ recruiters
• 11,000+ placement offers (2024)
• Beautiful, green, and culturally rich campus environment
• Strong research focus with 120+ Centers of Excellence
• India's first private university to implement social reservations`
    };
  }, []);

  // Generate PDF for Amity University, Noida with comprehensive data
  const generateAmityNoidaPDF = React.useCallback(() => {
    const data = getAmityNoidabrochureData() as BrochureData;
    const sections = [
      { title: 'About Amity University, Noida', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Amity University, Noida (Amity University Uttar Pradesh)', data, sections);
  }, [getAmityNoidabrochureData]);

  // Get comprehensive Chandigarh University (CU) brochure data
  const getChandigarhUniversitybrochureData = React.useCallback(() => {
    return {
      about: `Chandigarh University (CU), Gharuan – Mohali, Punjab is one of India's leading private state universities, recognized nationally for academic excellence, strong industry linkages, and global exposure. Established in 2012 by Punjab State Legislature Act No. 7 of 2012, the university has rapidly emerged as a top-ranked institution known for innovation, research, and comprehensive education.

Chandigarh University is NAAC Grade A+ accredited (highest for a university established post-2000) and offers 450+ programs across Engineering, Management, Computer Applications, Architecture, Law, Hotel Management, Pharmaceutical Sciences, Sciences, Liberal Arts, Media Studies, Agriculture, and Fashion Design.

Today, CU operates through 20+ departments, each ranked among India's best in its field. The university combines technical rigor, industry engagement, and global partnerships, making it a top choice for students seeking comprehensive education with strong placement support and international exposure.

Established: 2012 | Type: Private State University (UGC Recognized) | Campus Area: ~150 acres
Total Students: 30,000+ from all Indian states & 40+ countries | Faculty: 1,500+ (85% Ph.D qualified)
NIRF 2025: University Rank #19 | Engineering Rank #32
QS World Rankings 2026: #=575 (Top 2% Globally) | QS Asia Rankings 2025: Top 150
NAAC Accreditation: A+ (3.28/4.00 CGPA) | Global Collaborations: 460+ international MoUs across 90+ countries
Motto: "Discover. Learn. Empower."`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years) – ₹7.65–14.05 L total | Entrance: CUCET / JEE Main
  Popular Specializations: CSE (₹11.68 L total), IT (₹10.5 L), ECE (₹9.5 L), AI & ML (₹12.5 L), Cyber Security (₹12.0 L), Data Science (₹11.5 L), Mechanical, Civil, Electrical, Chemical
  Key Branches: CSE, IT, ECE, AI & ML, Cyber Security, Data Science, Mechanical, Civil, Electrical, Chemical, Biotechnology

• B.Tech (CSE) – ₹11.68 L total | Entrance: CUCET / JEE Main
  Specializations: CSBS, AI, IoT, Cloud Computing

• BBA (3 years) – ₹6.77 L total | Entrance: CUCET
  Focus: General, International Business, Digital Marketing

• BCA (3 years) – ₹4.50 L total | Entrance: CUCET
  Focus: Cloud Computing, AI, Data Analytics

• B.Sc Biotechnology (4 years) – ₹5.88 L total | Entrance: CUCET
  Focus: Biotechnology, Microbiology, Life Sciences

• B.Arch (5 years) – ₹10.0 L total | Entrance: CUCET + NATA
  Focus: Sustainable Architecture, Urban Design

• BA LLB (5 years) – ₹7.32–14.55 L total | Entrance: CUCET / CLAT
  Focus: Law & Corporate Studies

• B.Des (4 years) – ₹7.32–14.55 L total | Entrance: CUCET
  Focus: Fashion & Interior Design

POSTGRADUATE (PG)
• M.Tech (2 years) – ₹3.0–5.0 L total | Entrance: CUCET / GATE | 30+ specializations
  Popular Domains: AI, VLSI, Data Science, IoT, Cyber Security

• MBA (2 years) – ₹6–12 L total | Entrance: CUCET / CAT / MAT / XAT / CMAT + GD + PI
  Highlights: Strong placement support; avg ₹9.5 LPA
  Domains: Finance, HR, Marketing, Business Analytics, Operations

• M.Sc (2 years) – ₹1.5–2.0 L total | Entrance: CUCET / Personal Interview
  Disciplines: Chemistry, Physics, Mathematics, Biotechnology, Life Sciences

• MCA (2 years) – ₹2.0–3.5 L total | Entrance: CUCET
  Focus: AI, Software, Cloud Computing

• LLM (2 years) – ₹3.0–4.0 L total | Entrance: CUCET / CLAT
  Focus: Law Specializations

DOCTORAL (Ph.D)
• Duration: 3–5 years | Annual Fee: ₹1.5 L | 27+ research programs
• Entrance: CUCET + Interview + Research Proposal
• Focus: Engineering, Business, Sciences, Law, Management, Interdisciplinary Research
• Research Fellowships: ₹30,000–₹40,000/month for full-time scholars
• Research Centers: 200+ Labs in AI, ML, IoT, VLSI, Biotechnology, Robotics

HOSTEL & MESS: ₹1.06–2.1 L per year (Non-AC 5-seater: ₹1.06L, AC Double: ₹1.65L, AC Single: ₹2.1L)`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech / B.Arch Cutoffs:
• CSE – High merit in CUCET / JEE Main | AI & ML – High merit in CUCET / JEE Main
• IT – Moderate merit in CUCET / JEE Main | ECE – Moderate merit in CUCET / JEE Main
• B.Arch – CUCET + NATA | University Counseling

BBA / BCA / B.Sc – CUCET | University Counseling

MBA – CUCET / CAT / MAT / XAT / CMAT + GD + PI | 75–80 percentile preferred

M.Tech – CUCET / GATE 600+ | Interview

M.Sc / MCA – CUCET / Personal Interview | Institute Portal

Ph.D – CUCET + Interview + Research Proposal

RESERVATION POLICY:
Follows Govt. of India norms: OBC-NCL 27% | SC 15% | ST 7.5% | EWS 10% | PwD 5%

Application Mode: Online via cucet.cuchd.in
Application Window: May–June (CUCET)

SCHOLARSHIPS:
• Based on CUCET score (up to 100% tuition fee waiver)
• National exam toppers (JEE Main, CAT, MAT, XAT, GATE, NEET) eligible for merit scholarships
• Defense, sports, and alumni scholarships also available`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Offers (2024): 9,000+ | Recruiters: 1,100+
• Highest International Package: ₹1.7 Crore
• Highest Domestic Package: ₹54.75 LPA
• Average Package: ₹9.5 LPA
• CSE Average: ₹12.0 LPA | ECE Average: ₹10.0 LPA
• MBA Median: ₹9.5 LPA | Top MBA Package: ₹28 LPA

Top Recruiters: Microsoft, Google, Amazon, IBM, Adobe, Intel, Deloitte, Accenture, TCS, Infosys, Wipro, Cognizant, HDFC Bank, Bosch, L&T, Siemens, Morgan Stanley, Goldman Sachs, Tech Mahindra

Major Job Profiles: Software Developer, Data Scientist, Business Analyst, Management Trainee, Consultant, Product Manager, System Analyst

Placement Highlights:
• Pre-placement training & aptitude sessions
• Resume & soft skill workshops
• Industry interaction & internship drives
• International placement cells for overseas roles
• Strong placement support & corporate tie-ups
• 1,100+ recruiters across diverse sectors`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2025
• University Rank: #19 (Among India's top universities)
• Engineering: #32 (Among India's leading engineering schools)

GLOBAL RANKINGS
• QS World Rankings 2026: #=575 (Top 2% Globally)
• QS Asia Rankings 2025: Top 150 (Regional recognition)
• Times Higher Education (THE) 2025: 301–400 band (Emerging Asia)
• India Today Rankings 2024: Top 10 (Private Universities)
• ARIIA 2024: Excellent (Innovation Category)
• NAAC Accreditation: A+ (3.28/4.00 CGPA)

GLOBAL ACCREDITATION:
ABET-accredited engineering programs and international MoUs with 460+ universities in 90+ nations`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: ~150 acres | Location: Gharuan, Mohali – 15 km from Chandigarh, Punjab
• Environment: Fully green, Wi-Fi enabled, sustainable campus
• Hostels: 16,000+ rooms | Labs: 200+ | Library: 2+ lakh books, 5,000 e-journals

Academic Facilities:
• 200+ Labs in AI, ML, IoT, VLSI, Biotechnology, and Robotics
• Central Library: 2+ lakh books, 5,000 e-journals, 24/7 e-library & research access
• High-performance computing labs & AI innovation hubs
• Smart classrooms with modern technology

Hostel & Residential Life:
• 16,000+ rooms across Boys' and Girls' hostels
• AC/Non-AC options with single/double/triple occupancy
• Hostel Fee: ₹1.06–2.1 L per year (Non-AC 5-seater: ₹1.06L, AC Double: ₹1.65L, AC Single: ₹2.1L)
• Wi-Fi, laundry, 24×7 security, gyms, and canteens

Sports & Wellness:
• Olympic-size swimming pool, indoor stadium, cricket/football grounds
• Tennis, volleyball, badminton, basketball courts
• Gym & yoga centers with trainers
• State-of-the-art sports facilities

Medical:
• 24×7 campus medical center with ambulance and pharmacy
• Partnerships with Fortis & Max Hospitals

Daily Amenities:
• ATMs, food courts, retail outlets, salon, printing & stationery, transport, 24×7 Wi-Fi, eco-shuttles`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 1,500+ | Ph.D-qualified: 85%+ | Departments: 20+

Research Metrics (2024):
• Research Centers: 200+ Labs in AI, ML, IoT, VLSI, Biotechnology, Robotics
• Patents Filed: 100+ | Research Funding: ₹45+ Crores
• Publications: High research output across disciplines

Major Faculties / Disciplines:
Engineering & Technology, Management & Commerce, Computer Applications, Architecture & Design, Law & Legal Studies, Hotel Management & Tourism, Pharmaceutical Sciences, Sciences & Biotechnology, Liberal Arts & Humanities, Media Studies & Mass Communication, Agriculture & Environmental Sciences, Fashion & Interior Design

Major Research Themes:
• AI & Machine Learning | Data Science | Cyber Security
• Clean Energy | Renewable Resources | Quantum Computing
• Bioengineering | Biotechnology | Robotics

Centers of Excellence:
• AI & Machine Learning Research Centre
• Data Science & Analytics Hub
• Cyber Security Centre
• Biotechnology Research Centre
• Robotics & Automation Lab
• Clean Energy Centre

Global Research Partners:
MIT (USA), Stanford (USA), NTU Singapore, University of Toronto (Canada), UC Berkeley (USA), University of Tokyo (Japan)

Industry Partners:
Siemens, IBM, TCS, Microsoft, Google, Amazon, Intel, Adobe, Deloitte, Accenture

Key Faculty:
Dr. R.S. Bawa (Pro-Chancellor), Dr. Harpreet Singh (Vice-Chancellor), Prof. (Dr.) Prabhdeep Singh (Dean, Engineering), Prof. (Dr.) Archana Mantri (Pro-Vice-Chancellor), Prof. (Dr.) Meenakshi Malhotra (Dean, Research)`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Cultural & Technical Festivals:
• CU Fest – Annual cultural & technical celebration
• TechInvent – National-level innovation fest
• Global Week – International cultural and academic events
• Sports Meet – Inter-university sports tournament

Clubs & Societies (50+):
Technical Clubs, Cultural Clubs, Literary Society, Entrepreneurship Cell, Sports Clubs, Fine Arts, Dance Crew, Music Club, NSS, NCC

Cultural Identity:
• Blends modern education with cultural diversity
• Encourages social outreach, value education, and community service
• Academic rigor balanced with vibrant student life
• Student diversity: Representation from all Indian states + 40+ countries

Sports & Wellness:
• Olympic-size swimming pool
• Indoor stadium, cricket/football grounds
• Tennis, volleyball, badminton, basketball courts
• Shooting range and horse riding academy
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ 4.5/5 on CollegeDunia (15,000+ reviews)
⭐ 4.6/5 on Careers360

Highlights: #19 University · 1,100+ recruiters · Global exposure · Modern campus infrastructure`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
IEEE Student Chapter, ACM Student Chapter, Robotics Club, Coding Club, AI/ML Society, Electronics Society, VLSI Club, Cyber Security Club

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing, Social Impact Clubs

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis, Shooting, Horse Riding`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• CU Fest – Annual cultural & technical celebration with performances and competitions
• TechInvent – National-level innovation fest for innovation, robotics, and hackathons
• Global Week – International cultural and academic events
• Sports Meet – Inter-university sports tournament
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations

Unique Programs:
• Innovation Week – Showcasing student startups
• Global Exchange Programs – International student mobility
• Industry Interaction Sessions – Corporate mentorship programs`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• ₹45+ Cr research funding (2024) | 100+ patents filed | High research output across disciplines
• 200+ Labs in AI, ML, IoT, VLSI, Biotechnology, and Robotics
• Active collaborations with global institutions and industry
• 460+ International MoUs (MIT, Stanford, NTU, Toronto, etc.)

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Data Science & Big Data Analytics
• Cyber Security & Network Security
• Clean Energy & Renewable Resources
• Quantum Computing & Advanced Computing
• Bioengineering & Biotechnology
• Robotics & Autonomous Systems
• Sustainable Engineering & Green Technology

Startup Incubation:
• Technology Business Incubator (TBI): Mentorship and funding support
• Centre for Innovation, Research & Entrepreneurship (CIRE)
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance
• Annual "Innovation Week" showcasing student startups

Industry Partnerships:
• Collaboration with Siemens, IBM, TCS for funded projects
• Joint research with Microsoft, Google, Amazon for AI & Cloud partnerships
• Intel, Adobe partnerships for industry innovation
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• CUCET Score-Based Scholarship – Up to 100% tuition fee waiver based on CUCET score
• National Exam Toppers – JEE Main, CAT, MAT, XAT, GATE, NEET toppers eligible for merit scholarships
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Defense Scholarships – For defense personnel families
• Alumni Scholarships – For alumni families
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – ₹30,000–₹40,000/month
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Solar panels across academic blocks
• Water recycling & rainwater harvesting
• Waste management & green corridors
• Smart irrigation & organic waste composting
• Energy-efficient buildings with natural ventilation

Infrastructure:
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services (eco-shuttles)
• Eco-sustainability focus across all facilities

Campus Design:
• ~150-acre scenic campus in Gharuan, Mohali, Punjab
• 15 km from Chandigarh
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus (24×7)
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-20 University ranking and enter Global Top-500 Universities
• Enhance research funding to ₹100+ Cr annually
• Increase international collaboration partnerships to 500+
• Launch 50+ startups annually through incubation
• Expand multi-campus operations with enhanced facilities

Academic Excellence:
• Expand global exposure programs
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Triple research output and publications
• Increase patent filings to 200+ per year
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top-100 global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network to 150+ countries

Institutional Strengths:
• #19 University in India
• Strong industry partnerships and placements
• Excellent ROI with affordable fees
• 30,000+ students from all Indian states & 40+ countries
• Global exposure through 460+ international MoUs
• 9,000+ placement offers (2024)
• Beautiful, green, and culturally rich campus environment
• Strong research focus with 200+ Labs
• QS World #575 (Top 2% Globally)
• NAAC A+ Accredited (highest for post-2000 universities)`
    };
  }, []);

  // Generate PDF for Chandigarh University (CU) with comprehensive data
  const generateChandigarhUniversityPDF = React.useCallback(() => {
    const data = getChandigarhUniversitybrochureData() as BrochureData;
    const sections = [
      { title: 'About Chandigarh University (CU)', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Chandigarh University (CU), Gharuan – Mohali, Punjab', data, sections);
  }, [getChandigarhUniversitybrochureData]);

  // Get comprehensive KL University (KLEF) brochure data
  const getKLUniversitybrochureData = React.useCallback(() => {
    return {
      about: `Koneru Lakshmaiah Education Foundation (KLEF) / K L (Deemed-to-be) University, commonly known as KL University or KLU, is one of India's leading private deemed universities, recognized nationally for academic excellence, strong industry linkages, and global exposure. Established in 1980 as K L College of Engineering, the university has evolved into a comprehensive institution offering programs across Engineering, Management, Sciences, Architecture, Pharmacy, Law, and other disciplines.

KL University is recognized as a Category-I Deemed University by UGC (under UGC Act Section 12B) and offers programs through eight schools across multiple disciplines. The university combines technical rigor, industry engagement, and global partnerships, making it a top choice for students seeking comprehensive education with strong placement support and international exposure.

Established: 1980 (as K L College of Engineering) | Type: Private Deemed-to-be University
Campus Area: ~100 acres | Location: Vaddeswaram (near Vijayawada / Guntur district, Andhra Pradesh)
Student Strength: 300+ international students from 23 countries (verified data)
NIRF 2024: University Rank #22 | Overall Rank #40 | Engineering Rank #35
Global Rankings: Listed by Times Higher Education (THE Impact, THE Emerging Economies)
UGC Recognition: Category-I status (UGC Act Section 12B)
Motto: "To Make Every Man a Success and No Man a Failure"`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years) – Fee structure varies by specialization | Entrance: KLEEE / JEE Main
  Popular Specializations: CSE, IT, ECE, AI & ML, Cyber Security, Data Science, Mechanical, Civil, Electrical, Chemical
  Key Branches: CSE, IT, ECE, AI & ML, Cyber Security, Data Science, Mechanical, Civil, Electrical, Chemical, Biotechnology

• B.Arch (5 years) – Fee structure varies | Entrance: KLEEE / JEE Main + NATA
  Focus: Architecture & Planning

• BBA (3 years) – Fee structure varies | Entrance: KLEEE / Direct Admission
  Focus: Business Administration

• BCA (3 years) – Fee structure varies | Entrance: KLEEE / Direct Admission
  Focus: Computer Applications

• B.Sc (3–4 years) – Fee structure varies | Entrance: KLEEE / Direct Admission
  Focus: Sciences, Biotechnology, Life Sciences

• B.Pharm (4 years) – Fee structure varies | Entrance: KLEEE / State Entrance
  Focus: Pharmaceutical Sciences

• BA LLB (5 years) – Fee structure varies | Entrance: KLEEE / CLAT
  Focus: Law & Corporate Studies

POSTGRADUATE (PG)
• M.Tech (2 years) – Fee structure varies | Entrance: KLEEE / GATE | 30+ specializations
  Popular Domains: CSE, AI, VLSI, Data Science, IoT, Cyber Security

• MBA (2 years) – Fee structure varies | Entrance: KLEEE / CAT / MAT / XAT / CMAT + GD + PI
  Highlights: Strong placement support
  Domains: Finance, HR, Marketing, Business Analytics, Operations

• M.Sc (2 years) – Fee structure varies | Entrance: KLEEE / Personal Interview
  Disciplines: Chemistry, Physics, Mathematics, Biotechnology, Life Sciences

• MCA (2 years) – Fee structure varies | Entrance: KLEEE
  Focus: AI, Software, Cloud Computing

• LLM (2 years) – Fee structure varies | Entrance: KLEEE / CLAT
  Focus: Law Specializations

• M.Pharm (2 years) – Fee structure varies | Entrance: KLEEE / GPAT
  Focus: Pharmaceutical Sciences

DOCTORAL (Ph.D)
• Duration: 3–5 years | Fee structure varies | 27+ research programs
• Entrance: KLEEE + Interview + Research Proposal
• Focus: Engineering, Business, Sciences, Law, Management, Interdisciplinary Research
• Research Fellowships: Available for full-time scholars
• Research Centers: 344 labs & research centres

Note: Exact fee structure per program needs verification from the official university website.`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech / B.Arch Cutoffs:
• CSE – High merit in KLEEE / JEE Main | AI & ML – High merit in KLEEE / JEE Main
• IT – Moderate merit in KLEEE / JEE Main | ECE – Moderate merit in KLEEE / JEE Main
• B.Arch – KLEEE / JEE Main + NATA | University Counseling

BBA / BCA / B.Sc – KLEEE / Direct Admission | University Counseling

MBA – KLEEE / CAT / MAT / XAT / CMAT + GD + PI | 75–80 percentile preferred

M.Tech – KLEEE / GATE 600+ | Interview

M.Sc / MCA – KLEEE / Personal Interview | Institute Portal

Ph.D – KLEEE + Interview + Research Proposal

RESERVATION POLICY:
Follows Govt. of India norms: OBC-NCL 27% | SC 15% | ST 7.5% | EWS 10% | PwD 5%

Application Mode: Online via official university portal
Application Window: May–June (KLEEE)

SCHOLARSHIPS:
• Merit-based scholarships available
• National exam toppers (JEE Main, CAT, MAT, XAT, GATE, NEET) eligible for merit scholarships
• Need-based financial assistance available`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Companies Visited: 480+ | Recruiters: 480+ companies
• Highest Package (Engineering, 2024): ₹56.5 LPA
• Highest Package (Overall, 2025): ₹75 LPA
• Average Package (Engineering, 2024): ₹11 LPA
• Average Package (Overall, 2025): ₹11 LPA
• CSE Average: Higher than overall average | ECE Average: Competitive packages
• MBA Median: Competitive packages

Top Recruiters: Microsoft, Google, Amazon, IBM, Adobe, Intel, Deloitte, Accenture, TCS, Infosys, Wipro, Cognizant, HDFC Bank, Bosch, L&T, Siemens, Tech Mahindra

Major Job Profiles: Software Developer, Data Scientist, Business Analyst, Management Trainee, Consultant, Product Manager, System Analyst, Engineer

Placement Highlights:
• Pre-placement training & aptitude sessions
• Resume & soft skill workshops
• Industry interaction & internship drives
• Strong placement support & corporate tie-ups
• 480+ companies across diverse sectors
• Good placement outcomes for select branches (especially engineering)`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2024
• University Rank: #22 (Among India's top universities)
• Overall Rank: #40 (National recognition)
• Engineering: #35 (Among India's leading engineering schools)

GLOBAL RANKINGS
• Times Higher Education (THE): Listed in THE Impact Rankings and THE Emerging Economies
• Global Recognition: Listed by multiple international ranking agencies
• International Collaborations: Multiple universities worldwide

RECOGNITIONS & ACCREDITATIONS:
• UGC Recognition: Category-I status (UGC Act Section 12B)
• Awards: Excellence in Water Management, Energy Conservation Awards
• Sustainability: Recognized for environmental initiatives
• Research: Strong research infrastructure and global partnerships`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: ~100 acres | Location: Vaddeswaram (near Vijayawada / Guntur district, Andhra Pradesh)
• Environment: Fully green, Wi-Fi enabled, sustainable campus
• Hostels: Multiple residential blocks | Labs: 344 labs & research centres | Library: Extensive collection

Academic Facilities:
• 344 Labs & Research Centres in AI, ML, IoT, VLSI, Biotechnology, and Robotics
• Central Library: Extensive collection of books, e-journals, 24/7 e-library & research access
• High-performance computing labs & AI innovation hubs
• Smart classrooms with modern technology

Hostel & Residential Life:
• Multiple residential blocks (Boys & Girls) with AC/Non-AC options
• Hostel Fee: Varies by accommodation type
• Wi-Fi, laundry, 24×7 security, gyms, and canteens
• Multi-cuisine cafeterias and food courts

Sports & Wellness:
• Olympic-size swimming pool, indoor stadium, cricket/football grounds
• Tennis, volleyball, badminton, basketball courts
• Gym & yoga centers with trainers
• State-of-the-art sports facilities

Medical:
• 24×7 campus medical center with ambulance and pharmacy
• Tie-ups with tertiary hospitals

Daily Amenities:
• ATMs, food courts, retail outlets, salon, printing & stationery, transport, 24×7 Wi-Fi, eco-shuttles`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: 850+ (for Guntur campus) | Ph.D-qualified: Majority | Schools: 8

Research Metrics (2024):
• Research Centers: 344 labs & research centres
• Publications: High research output across disciplines
• Global Partnerships: Multiple international collaborations

Major Schools / Disciplines:
Engineering, Management, Sciences, Architecture, Pharmacy, Law, Liberal Arts, Applied Sciences

Major Research Themes:
• AI & Machine Learning | Data Science | Cyber Security
• Clean Energy | Renewable Resources | Quantum Computing
• Bioengineering | Biotechnology | Robotics

Centers of Excellence:
• AI & Machine Learning Research Centre
• Data Science & Analytics Hub
• Cyber Security Centre
• Biotechnology Research Centre
• Robotics & Automation Lab
• Clean Energy Centre

Global Research Partners:
Multiple universities worldwide (details available on official website)

Industry Partners:
Microsoft, Google, Amazon, IBM, Intel, Adobe, Deloitte, Accenture, TCS, Infosys, Wipro, Cognizant, Bosch, L&T, Siemens, Tech Mahindra

Key Faculty:
Faculty members with strong academic and industry credentials (details available on official website)`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Cultural & Technical Festivals:
• Annual cultural & technical festivals
• Tech fests and innovation competitions
• Management fests and business competitions
• Sports meets and inter-university tournaments

Clubs & Societies (50+):
Technical Clubs, Cultural Clubs, Literary Society, Entrepreneurship Cell, Sports Clubs, Fine Arts, Dance Crew, Music Club, NSS, NCC

Cultural Identity:
• Blends modern education with cultural diversity
• Encourages social outreach, value education, and community service
• Academic rigor balanced with vibrant student life
• Student diversity: 300+ international students from 23 countries

Sports & Wellness:
• Olympic-size swimming pool
• Indoor stadium, cricket/football grounds
• Tennis, volleyball, badminton, basketball courts
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ High ratings on various platforms
⭐ Positive feedback on infrastructure and placements

Highlights: #22 University · 480+ recruiters · Global exposure · Modern campus infrastructure`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
IEEE Student Chapter, ACM Student Chapter, Robotics Club, Coding Club, AI/ML Society, Electronics Society, VLSI Club, Cyber Security Club

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing, Social Impact Clubs

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Annual cultural & technical celebration with performances and competitions
• Tech fests for innovation, robotics, and hackathons
• Management fests for business and management competitions
• Sports meets for inter-university sports tournaments
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations

Unique Programs:
• Innovation Week – Showcasing student startups
• Global Exchange Programs – International student mobility
• Industry Interaction Sessions – Corporate mentorship programs`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• 344 labs & research centres across key disciplines
• High research output across disciplines
• Active collaborations with global institutions and industry
• Multiple international MoUs with universities worldwide

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Data Science & Big Data Analytics
• Cyber Security & Network Security
• Clean Energy & Renewable Resources
• Quantum Computing & Advanced Computing
• Bioengineering & Biotechnology
• Robotics & Autonomous Systems
• Sustainable Engineering & Green Technology

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance
• Innovation Week showcasing student startups

Industry Partnerships:
• Collaboration with Microsoft, Google, Amazon for AI & Cloud partnerships
• Joint research with IBM, Intel, Adobe for industry innovation
• TCS, Infosys, Wipro partnerships for industry innovation
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• KLEEE Score-Based Scholarship – Based on entrance exam performance
• National Exam Toppers – JEE Main, CAT, MAT, XAT, GATE, NEET toppers eligible for merit scholarships
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – Available for eligible candidates
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• Excellence in Water Management (Award received)
• Energy Conservation Awards (Recognized)
• Waste management & green corridors
• Smart irrigation & organic waste composting
• Energy-efficient buildings with natural ventilation

Infrastructure:
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services (eco-shuttles)
• Eco-sustainability focus across all facilities

Campus Design:
• ~100-acre scenic campus in Vaddeswaram, Andhra Pradesh
• Near Vijayawada / Guntur district
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus (24×7)
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-25 University ranking and enhance global recognition
• Enhance research funding and output
• Increase international collaboration partnerships
• Launch startups annually through incubation
• Expand multi-campus operations with enhanced facilities

Academic Excellence:
• Expand global exposure programs
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies

Research & Innovation:
• Increase research output and publications
• Increase patent filings
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network globally

Institutional Strengths:
• #22 University in India (NIRF 2024)
• Strong industry partnerships and placements
• Excellent ROI with affordable fees
• 300+ international students from 23 countries
• Global exposure through international MoUs
• 480+ placement partners
• Beautiful, green, and culturally rich campus environment
• Strong research focus with 344 labs & research centres
• Category-I Deemed University status (UGC)
• Excellence in Water Management and Energy Conservation Awards`
    };
  }, []);

  // Generate PDF for KL University (KLEF) with comprehensive data
  const generateKLUniversityPDF = React.useCallback(() => {
    const data = getKLUniversitybrochureData() as BrochureData;
    const sections = [
      { title: 'About KL University (KLEF)', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Koneru Lakshmaiah Education Foundation (KLEF) / K L (Deemed-to-be) University', data, sections);
  }, [getKLUniversitybrochureData]);

  // Get comprehensive Kalasalingam Academy of Research and Education (KARE) brochure data
  const getKalasalingamAcademybrochureData = React.useCallback(() => {
    return {
      about: `Kalasalingam Academy of Research and Education (KARE) is one of India's leading private deemed universities, recognized nationally for academic excellence, strong research output, and global exposure. Established in 1984 as Arulmigu Kalasalingam College of Engineering, the institution became a Deemed-to-be University in 2006 under Section 3 of the UGC Act.

KARE is recognized as a Category-I Deemed University and offers programs across Engineering, Sciences, Management, Architecture, Agriculture/Horticulture, and other disciplines. The university is known for its strong research culture, ABET-accredited engineering programs, and inclusive education initiatives, including special B.Tech programs for differently-abled (speech/hearing impaired) students.

Established: 1984 (as Arulmigu Kalasalingam College of Engineering) | Deemed University: 2006 | Type: Private Deemed-to-be University
Campus Area: 400 acres | Location: Anand Nagar, Krishnankoil (Virudhunagar district), Tamil Nadu
Student Strength: ~7,000–8,000 students | Built-up Area: 70 lakh sq ft
NIRF 2024: University Rank #50 | Engineering Rank #36
Global Rankings: THE World University Rankings 2026 (1001–1200 band)
Accreditation: NAAC 'A++' (institution claims) | NBA & ABET accreditation for multiple engineering programs
Motto: "Education for Excellence"`,
      academics: `ACADEMIC PROGRAMS & FEES (2025–26)

UNDERGRADUATE (UG)
• B.Tech (4 years) – ₹4–7.4 L total (varies by specialization) | Entrance: JEE Main / KARE Entrance
  Popular Specializations: CSE, IT, ECE, AI & ML, Cyber Security, Data Science, Mechanical, Civil, Electrical, Chemical
  Key Branches: CSE, IT, ECE, AI & ML, Cyber Security, Data Science, Mechanical, Civil, Electrical, Chemical, Biotechnology
  Unique Feature: Special B.Tech program for differently-abled (speech/hearing impaired) students

• B.Arch (5 years) – Fee structure varies | Entrance: JEE Main + NATA / KARE Entrance
  Focus: Architecture & Planning

• BBA (3 years) – Fee structure varies | Entrance: KARE Entrance / Direct Admission
  Focus: Business Administration

• BCA (3 years) – Fee structure varies | Entrance: KARE Entrance / Direct Admission
  Focus: Computer Applications

• B.Sc (3–4 years) – Fee structure varies | Entrance: KARE Entrance / Direct Admission
  Focus: Sciences, Biotechnology, Life Sciences, Agriculture/Horticulture

• B.Pharm (4 years) – Fee structure varies | Entrance: KARE Entrance / State Entrance
  Focus: Pharmaceutical Sciences

POSTGRADUATE (PG)
• M.Tech (2 years) – Fee structure varies | Entrance: GATE / KARE Entrance | 30+ specializations
  Popular Domains: CSE, AI, VLSI, Data Science, IoT, Cyber Security

• MBA (2 years) – Fee structure varies | Entrance: CAT / MAT / TANCET / KARE Entrance + GD + PI
  Highlights: Strong placement support
  Domains: Finance, HR, Marketing, Business Analytics, Operations

• M.Sc (2 years) – Fee structure varies | Entrance: KARE Entrance / Personal Interview
  Disciplines: Chemistry, Physics, Mathematics, Biotechnology, Life Sciences

• MCA (2 years) – Fee structure varies | Entrance: KARE Entrance
  Focus: AI, Software, Cloud Computing

• M.Arch (2 years) – Fee structure varies | Entrance: GATE / KARE Entrance
  Focus: Architecture & Planning

DOCTORAL (Ph.D)
• Duration: 3–5 years | Fee structure varies | Multiple research programs
• Entrance: KARE Entrance + Interview + Research Proposal
• Focus: Engineering, Business, Sciences, Architecture, Management, Interdisciplinary Research
• Research Fellowships: Available for full-time scholars
• Research Centers: International Research Centre with high-end instruments

Note: Exact fee structure per program needs verification from the official university website.`,
      admissions: `ADMISSIONS & SELECTION CRITERIA (2025)

B.Tech / B.Arch Cutoffs:
• CSE – High merit in JEE Main / KARE Entrance | AI & ML – High merit in JEE Main / KARE Entrance
• IT – Moderate merit in JEE Main / KARE Entrance | ECE – Moderate merit in JEE Main / KARE Entrance
• B.Arch – JEE Main + NATA / KARE Entrance | University Counseling
• Special B.Tech for differently-abled students – Separate admission process

BBA / BCA / B.Sc – KARE Entrance / Direct Admission | University Counseling

MBA – CAT / MAT / TANCET / KARE Entrance + GD + PI | 75–80 percentile preferred

M.Tech – GATE 600+ / KARE Entrance | Interview

M.Sc / MCA – KARE Entrance / Personal Interview | Institute Portal

Ph.D – KARE Entrance + Interview + Research Proposal

RESERVATION POLICY:
Follows Govt. of India norms: OBC-NCL 27% | SC 15% | ST 7.5% | EWS 10% | PwD 5%

Application Mode: Online via official university portal
Application Window: May–June (KARE Entrance)

SCHOLARSHIPS:
• Merit-based scholarships available
• National exam toppers (JEE Main, CAT, MAT, GATE, NEET) eligible for merit scholarships
• Need-based financial assistance available
• Special scholarships for differently-abled students`,
      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

Overall Placement Metrics:
• Total Companies Visited: Multiple recruiters across diverse sectors
• Placement Support: Strong industry connections and placement cell
• CSE Average: Competitive packages | ECE Average: Competitive packages
• MBA Median: Competitive packages

Top Recruiters: Microsoft, Google, Amazon, IBM, Adobe, Intel, Deloitte, Accenture, TCS, Infosys, Wipro, Cognizant, HDFC Bank, Bosch, L&T, Siemens, Tech Mahindra

Major Job Profiles: Software Developer, Data Scientist, Business Analyst, Management Trainee, Consultant, Product Manager, System Analyst, Engineer

Placement Highlights:
• Pre-placement training & aptitude sessions
• Resume & soft skill workshops
• Industry interaction & internship drives
• Strong placement support & corporate tie-ups
• Multiple recruiters across diverse sectors
• Good placement outcomes for engineering branches

Note: Detailed placement statistics (highest packages, branch-wise averages) need verification from official placement reports.`,
      rankings: `RANKINGS & RECOGNITION

NIRF 2024
• University Rank: #50 (Among India's top universities)
• Engineering: #36 (Among India's leading engineering schools)

GLOBAL RANKINGS
• Times Higher Education (THE) World University Rankings 2026: 1001–1200 band
• Global Recognition: Listed by multiple international ranking agencies
• International Collaborations: MoUs with many countries (Belgium, Brazil, Germany, USA, etc.)

RECOGNITIONS & ACCREDITATIONS:
• UGC Recognition: Deemed-to-be University under Section 3 of UGC Act
• NAAC Accreditation: 'A++' (institution claims)
• NBA Accreditation: For multiple engineering programs
• ABET Accreditation: For multiple engineering programs (rare for Indian private institutions)
• Research Recognition: Strong research infrastructure and global partnerships`,
      campus: `CAMPUS & INFRASTRUCTURE

Campus Overview:
• Area: 400 acres | Location: Anand Nagar, Krishnankoil (Virudhunagar district), Tamil Nadu
• Environment: Scenic foothills of Western Ghats, fully green, Wi-Fi enabled, sustainable campus
• Built-up Area: 70 lakh sq ft | Setting: Rural, scenic environment

Academic Facilities:
• International Research Centre with high-end research instruments (SEM, XRD, FT-IR, AA spectrophotometer)
• Central Library: Extensive collection of books, e-journals, 24/7 e-library & research access
• High-performance computing labs & AI innovation hubs
• Smart classrooms with modern technology
• 344+ labs & research centres

Hostel & Residential Life:
• Multi-storey hostels for thousands of students (Boys & Girls) with AC/Non-AC options
• Hostel Fee: Varies by accommodation type
• Wi-Fi, laundry, 24×7 security, gyms, and canteens
• Multi-cuisine cafeterias and food courts

Sports & Wellness:
• Indoor auditorium, swimming pool, extensive sport grounds
• Tennis, volleyball, badminton, basketball courts
• Gym & yoga centers with trainers
• State-of-the-art sports facilities

Medical:
• 24×7 campus medical center with ambulance and pharmacy
• Tie-ups with tertiary hospitals

Daily Amenities:
• ATMs, food courts, retail outlets, salon, printing & stationery, transport, 24×7 Wi-Fi, eco-shuttles`,
      faculty: `FACULTY & RESEARCH ECOSYSTEM

Faculty Strength:
• Total Faculty: Strong faculty base | Ph.D-qualified: Majority | Schools: Multiple

Research Metrics (2024):
• Completed Projects: 113 | Ongoing Projects: 33
• H-index: 110 | Publications: 7,743 in SCOPUS indexed journals
• Research Centers: International Research Centre with high-end instruments
• Global Partnerships: MoUs with many countries (Belgium, Brazil, Germany, USA, etc.)

Major Schools / Disciplines:
Engineering & Technology, Science & Humanities, Management, Architecture & Design, Agriculture/Horticulture, Applied Sciences

Major Research Themes:
• AI & Machine Learning | Data Science | Cyber Security
• Clean Energy | Renewable Resources | Quantum Computing
• Bioengineering | Biotechnology | Robotics
• Materials Science | Advanced Manufacturing

Centers of Excellence:
• International Research Centre (with SEM, XRD, FT-IR, AA spectrophotometer)
• AI & Machine Learning Research Centre
• Data Science & Analytics Hub
• Cyber Security Centre
• Biotechnology Research Centre
• Robotics & Automation Lab
• Clean Energy Centre

Global Research Partners:
Multiple universities worldwide (Belgium, Brazil, Germany, USA, etc.)

Industry Partners:
Microsoft, Google, Amazon, IBM, Intel, Adobe, Deloitte, Accenture, TCS, Infosys, Wipro, Cognizant, Bosch, L&T, Siemens, Tech Mahindra

Key Faculty:
Faculty members with strong academic and industry credentials (details available on official website)`,
      campusLife: `STUDENT LIFE & CAMPUS CULTURE

Cultural & Technical Festivals:
• Annual cultural & technical festivals
• Tech fests and innovation competitions
• Management fests and business competitions
• Sports meets and inter-university tournaments

Clubs & Societies (50+):
Technical Clubs, Cultural Clubs, Literary Society, Entrepreneurship Cell, Sports Clubs, Fine Arts, Dance Crew, Music Club, NSS, NCC

Cultural Identity:
• Blends modern education with cultural diversity
• Encourages social outreach, value education, and community service
• Academic rigor balanced with vibrant student life
• Inclusive education: Special programs for differently-abled students

Sports & Wellness:
• Indoor auditorium, swimming pool
• Extensive sport grounds, cricket/football grounds
• Tennis, volleyball, badminton, basketball courts
• State-of-the-art gymnasium
• Yoga & wellness center

Student Ratings:
⭐ High ratings on various platforms
⭐ Positive feedback on infrastructure, research, and inclusive education

Highlights: #50 University · Strong research output · ABET-accredited programs · Inclusive education · Scenic campus`,
      clubs: `STUDENT CLUBS & SOCIETIES

Academic & Technical:
IEEE Student Chapter, ACM Student Chapter, Robotics Club, Coding Club, AI/ML Society, Electronics Society, VLSI Club, Cyber Security Club

Cultural & Creative:
Literary Society, Photography Club, Dance Club, Drama Society, Music Society, Fine Arts Club

Professional & Entrepreneurial:
E-Cell (Entrepreneurship Cell), Management Club, Consulting Club

Social & Service:
NSS (National Service Scheme), NCC (National Cadet Corps), Community Development Wing, Social Impact Clubs, Inclusive Education Support Groups

Sports:
Cricket, Football, Basketball, Badminton, Volleyball, Lawn Tennis, Swimming, Athletics, Table Tennis`,
      events: `ANNUAL EVENTS & FESTIVALS

Major Fests:
• Annual cultural & technical celebration with performances and competitions
• Tech fests for innovation, robotics, and hackathons
• Management fests for business and management competitions
• Sports meets for inter-university sports tournaments
• Tech Symposium – Department-specific technical events
• Engineering Expo – Showcase of student projects & innovations

Academic & Social:
• Freshers' Week – Orientation and integration program
• Convocation & Awards Ceremony – Celebrating academic excellence
• Inter-hostel competitions – Sports, cultural, and academic events
• Alumni Meet – Annual reunion with networking opportunities
• Departmental Seminars – Expert lectures and research presentations

Unique Programs:
• Innovation Week – Showcasing student startups
• Global Exchange Programs – International student mobility
• Industry Interaction Sessions – Corporate mentorship programs
• Inclusive Education Events – Supporting differently-abled students`,
      research: `RESEARCH & INNOVATION

Research Ecosystem:
• Completed Projects: 113 | Ongoing Projects: 33
• H-index: 110 | Publications: 7,743 in SCOPUS indexed journals
• International Research Centre with high-end instruments (SEM, XRD, FT-IR, AA spectrophotometer)
• Active collaborations with global institutions and industry
• MoUs with many countries (Belgium, Brazil, Germany, USA, etc.)

Priority Research Areas:
• AI & Machine Learning for Industrial Applications
• Data Science & Big Data Analytics
• Cyber Security & Network Security
• Clean Energy & Renewable Resources
• Quantum Computing & Advanced Computing
• Bioengineering & Biotechnology
• Robotics & Autonomous Systems
• Sustainable Engineering & Green Technology
• Materials Science & Advanced Manufacturing

Startup Incubation:
• Entrepreneurship Cell: Mentorship and funding support
• Idea-to-prototype programs
• Seed funding and investor networking
• Industry placement assistance
• Innovation Week showcasing student startups

Industry Partnerships:
• Collaboration with Microsoft, Google, Amazon for AI & Cloud partnerships
• Joint research with IBM, Intel, Adobe for industry innovation
• TCS, Infosys, Wipro partnerships for industry innovation
• National mission participation (Clean India, Digital India)`,
      scholarships: `SCHOLARSHIPS & FINANCIAL AID

Merit-Based Scholarships:
• KARE Entrance Score-Based Scholarship – Based on entrance exam performance
• National Exam Toppers – JEE Main, CAT, MAT, GATE, NEET toppers eligible for merit scholarships
• Academic Excellence Scholarship – Consistent high GPA holders
• Research Scholarship – Ph.D and research scholars
• Sports Scholarship – Exceptional athletic performers

Need-Based Financial Aid:
• Financial Assistance (FA) – Based on family income
• Fee Waiver Programs – Economically weaker students
• Hostel Fee Waivers – Eligible low-income candidates

Government Assistance:
• SC/ST Scholarships – Central and State government awards
• OBC & EWS Scholarships – Reserved category support
• PwD Scholarships – Special provisions for persons with disabilities
• Female Supernumerary Support – Additional seats with fee concessions

Special Scholarships:
• Differently-abled Student Scholarships – For speech/hearing impaired students
• Inclusive Education Support – Additional financial aid for special programs

External & Sponsored Scholarships:
• Corporate-sponsored scholarships (Google, Microsoft, TCS, Infosys, etc.)
• International Student Scholarships
• GATE Fellowship for PG and Ph.D students
• Research Scholarships from DST, CSIR, DBT, DBT-STAR

Assistantships:
• Teaching/Research Assistantships – Available for eligible candidates
• Project Assistantships – Paid research positions
• Industry internships with competitive stipends`,
      sustainability: `SUSTAINABILITY & GREEN CAMPUS

Environmental Initiatives:
• 400-acre green campus in scenic foothills of Western Ghats
• Waste management & green corridors
• Smart irrigation & organic waste composting
• Energy-efficient buildings with natural ventilation
• Water conservation initiatives

Infrastructure:
• LED lighting throughout campus
• Pedestrian-friendly pathways & cycling corridors
• Electric shuttle services (eco-shuttles)
• Eco-sustainability focus across all facilities
• Wi-Fi enabled green campus

Campus Design:
• 400-acre scenic campus in Anand Nagar, Krishnankoil, Tamil Nadu
• Foothills of Western Ghats, rural setting
• 70 lakh sq ft built-up area
• Natural forests integrated into campus layout
• Heritage preservation alongside modern facilities
• Carbon-neutral operations target

Smart Campus Initiatives:
• Wi-Fi connectivity across campus (24×7)
• Digital learning platforms & online libraries
• IoT-based energy monitoring
• Smart security systems
• Online student portals & services
• Campus-wide information system`,
      vision: `VISION & STRATEGIC PRIORITIES

Strategic Goals (by 2030):
• Maintain Top-50 University ranking and enhance global recognition
• Enhance research funding and output (target: 200+ projects)
• Increase international collaboration partnerships
• Launch startups annually through incubation
• Expand multi-campus operations with enhanced facilities

Academic Excellence:
• Expand global exposure programs
• Introduce new interdisciplinary programs
• Enhance online & hybrid learning ecosystem
• Increase international faculty collaborations
• Develop Centers of Excellence in emerging technologies
• Strengthen ABET-accredited programs

Research & Innovation:
• Increase research output and publications (target: 10,000+ SCOPUS publications)
• Increase patent filings
• Establish joint research labs with global partners
• Lead national missions in sustainability & technology
• Strengthen focus on industry-academia collaboration

Social Impact:
• Community outreach programs
• SDG-aligned research projects
• Scholarship expansion for underprivileged students
• Livelihood and skill development programs
• Rural technology adoption initiatives
• Strengthen inclusive education programs for differently-abled students

Global Presence:
• Establish international collaborative research centers
• Increase faculty & student mobility programs
• Joint degree programs with top global universities
• Position as bridge between India and global tech ecosystem
• Expand alumni network globally

Institutional Strengths:
• #50 University in India (NIRF 2024)
• Strong research output (7,743 SCOPUS publications, H-index 110)
• ABET-accredited engineering programs (rare for Indian private institutions)
• Inclusive education: Special B.Tech programs for differently-abled students
• 400-acre scenic campus in foothills of Western Ghats
• Strong industry partnerships and placements
• Excellent ROI with affordable fees
• Global exposure through international MoUs
• Beautiful, green, and culturally rich campus environment
• Strong research focus with International Research Centre`
    };
  }, []);

  // Generate PDF for Kalasalingam Academy of Research and Education (KARE) with comprehensive data
  const generateKalasalingamAcademyPDF = React.useCallback(() => {
    const data = getKalasalingamAcademybrochureData() as BrochureData;
    const sections = [
      { title: 'About Kalasalingam Academy of Research and Education (KARE)', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Selection Criteria (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Kalasalingam Academy of Research and Education (KARE)', data, sections);
  }, [getKalasalingamAcademybrochureData]);

  // Generate PDF for IIT Delhi with comprehensive data
  const generateIITDelhiPDF = React.useCallback(() => {
    const data = getIITDelhiBrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Delhi', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty, Research & Innovation', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Vision & Strategic Priorities', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Delhi (IIT Delhi)', data, sections);
  }, [getIITDelhiBrochureData]);

  // Generate PDF for IIT Madras with comprehensive data
  const generateIITMadrasPDF = React.useCallback(() => {
    const data = getIITMadrasBrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Madras', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Global Outreach & Vision 2030', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Madras (IIT Madras)', data, sections);
  }, [getIITMadrasBrochureData]);

  // Generate PDF for IIT Hyderabad with comprehensive data
  const generateIITHyderabadPDF = React.useCallback(() => {
    const data = getIITHyderabadBrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Hyderabad', key: 'about' as const },
      { title: 'Academic Programs & Fees', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Opportunities', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Excellence', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Global Outlook & Vision', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Hyderabad (IIT Hyderabad)', data, sections);
  }, [getIITHyderabadBrochureData]);

  // Get comprehensive IIT Kanpur brochure data (Professional 2025-26 Edition)
  const getIITKanpurBrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology Kanpur (IIT Kanpur)

Established: 1960 | Type: Public Technical University | Campus Area: 1,040 acres (Kalyanpur, Uttar Pradesh)
NIRF 2025 Rank: Overall #5 | Engineering #4
QS 2026 World Rank: #278 | QS Asia Rank: #63
Student Strength: 10,000+ (UG, PG, PhD) | Faculty: 570 | Departments: 18

IIT Kanpur (IITK) is one of India's first-generation IITs and a national leader in technical education, research, and innovation. Founded under the Kanpur Indo-American Programme (KIAP) — a consortium of 9 US universities including MIT, UC Berkeley, and Princeton — IIT Kanpur pioneered modern engineering pedagogy and research-driven curricula.

Historical Significance: First Indian institution to introduce Computer Science education (1963).

Over six decades, the institute has built a global legacy through academic rigor, world-class research, entrepreneurship, and societal impact. Its sprawling 1,040-acre campus in Kalyanpur is a hub of innovation, sustainability, and vibrant student culture.

Distinguished for: Research excellence, pioneering AI/ML, global partnerships (MIT, Princeton, UC Berkeley, Carnegie Mellon), and strong industry collaborations (ISRO, DRDO, Tata Group, Siemens).`,

      academics: `ACADEMIC PROGRAMS & FEE STRUCTURE (2025–26)

UNDERGRADUATE (UG) — 4 Years

B.Tech: 1,000 seats | Annual Fee: ₹1.4 L | Total: ₹10.2 L | Entrance: JEE Advanced + JoSAA

Popular Branches:
• Computer Science (AIR 107) | Data Science & AI (AIR 200) | Electrical (AIR 550)
• ECE (AIR 550) | Mechanical (AIR 1,700) | Civil (AIR 4,500)

B.Des: Annual Fee: ₹2.3 L | Total: ₹9.2 L | Entrance: UCEED

Dual Degree (B.Tech + M.Tech): 5 years | Annual: ₹2.3 L | Total: ₹11.0 L | Entrance: JEE Advanced

Hostel & Mess Fee: ₹30,770 per semester

POSTGRADUATE (PG) — 2 Years

M.Tech: Fee: ₹10,000/year | Entrance: GATE + COAP | 50+ specializations (AI, Quantum, Clean Energy, Advanced Materials)

MBA: Fee: ₹2.1 L/year | Entrance: CAT + PI | Specializations: Analytics, Finance, Strategy

M.Sc: Fee: ₹6,000/year | Entrance: IIT JAM | Physics, Chemistry, Mathematics, Economics

DOCTORAL (Ph.D) — 4-6 Years

Annual Fee: ₹5,000 | Entrance: GATE / CSIR-NET / UGC-NET + Interview
Total Ph.D Students: 1,200+ | Programs: 50+ Focus Areas: AI, Robotics, Quantum Computing, Clean Energy, Aerospace, Biomedical

Key Facts: Majority faculty hold Ph.D degrees | Research-intensive program | Strong international exposure.`,

      admissions: `ADMISSIONS & CUTOFFS (2025)

ENTRANCE EXAMINATIONS

Undergraduate: JEE Advanced + JoSAA
Postgraduate: GATE (M.Tech), CAT (MBA), IIT JAM (M.Sc)
Doctoral: GATE / UGC-NET / CSIR-NET + Interview

RESERVATION POLICY
SC 15% | ST 7.5% | OBC-NCL 27% | EWS 10% | PwD 5% | Female Supernumerary Seats

2025 CUTOFF TRENDS (B.Tech General Category)
B.Tech CSE: AIR 107
Data Science & AI: AIR 200
Electrical: AIR 550
ECE: AIR 550
Mechanical: AIR 1,700
Civil: AIR 4,500

MBA (General): 93%ile (CAT)

ADMISSION PROCESS
Applications: Online via national portals (JEE, GATE, CAT, JAM, UCEED)
Counseling: JoSAA (UG) | COAP/Institute (PG) | Departmental (Ph.D)
Merit-Based: Entrance rank + interview + academic record

International Students: Limited seats available via special counseling process.`,

      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

PLACEMENT STATISTICS
Total Offers: 1,400
Recruiters: 300
Highest Package: ₹35.0 Cr (International)
Domestic Highest: ₹1.2 Cr
Average Package: ₹25.0 L
CSE Average: ₹34.0 L
ECE Average: ₹28.0 L
MBA Median: ₹18.0 L
PPOs: 200+
100% BTech CSE Placement

MAJOR RECRUITERS (2024-25)
Jane Street | Optiver | Google | Microsoft | Amazon | Goldman Sachs | De Shaw | Morgan Stanley | Intel | Texas Instruments | Qualcomm | Apple | Citadel | JP Morgan | Tower Research | McKinsey | Boston Consulting Group

COMMON ROLES
Quantitative Trader | Software Engineer | Data Scientist | Hardware Design Engineer | R&D Engineer | Product Analyst | Consultant | Quant Analyst

PLACEMENT TRENDS (2022–2025)
Year 2025: Avg ₹20.0+ L | Intl Highest ₹2.05 Cr | PPOs 222 | Trend: AI & DS surge
Year 2024: Avg ₹25.0 L | Intl Highest ₹2.05 Cr | PPOs 213 | 100% CSE placement
Year 2023: Avg ₹17.0 L | Intl Highest ₹1.06 Cr | PPOs 200+
Year 2022: Avg ₹16.0 L | Intl Highest ₹2.15 Cr | PPOs 180`,

      rankings: `RANKINGS & RECOGNITION (2025)

NATIONAL RANKINGS
NIRF Overall: #5 | Engineering: #4
India Today: Engineering #4
ARIIA: Innovation Ecosystem – Excellent

INTERNATIONAL RANKINGS
QS World: #278 (Global) | #63 (Asia) | Engineering: Competitive band
THE World: Engineering 301–400 Band

NIRF 2025 SCORE BREAKDOWN
Teaching, Learning & Resources (TLR): 73.06
Research, Professional Practice & Collaboration (RPC): 72.05
Graduation Outcomes (GO): 82.9
Outreach & Inclusivity (OI): 64.9
Perception Score: 51.2

INSTITUTIONAL DISTINCTIONS
First-generation IIT (1960) | Pioneer of CS education in India (1963)
Kanpur Indo-American Programme legacy | Global research partnerships
Strong STEM education model | Innovation & startup ecosystem`,

      campus: `CAMPUS & INFRASTRUCTURE

CAMPUS OVERVIEW
Area: 1,040 acres | Hostels: 12 | Labs: 150 | Library: P.K. Kelkar Library

LIBRARY FACILITIES
Books: 300,000+ | E-journals: 1,000+ | Digital Resources: 24/7 access
Study Zones: Group study areas, reading rooms, research commons

RESEARCH & INNOVATION SPACES
150+ research labs with advanced facilities
Wind Tunnel Facility | Nanofabrication Lab | Supercomputing Centre | Materials Testing Labs
Samtel Centre for Display Technologies | National Centre for Mechatronics
Design Studios | Prototyping Hubs

SPORTS & WELLNESS
Olympic-size pool | Badminton/Tennis courts | Squash court | Football grounds
Fitness center | Yoga facility | Athletics track | Volleyball/Basketball courts

HEALTH & SUPPORT SERVICES
24×7 Medical Facility | OPD Services | Mental Health Counseling | Ambulance Service
Specialist doctors | Emergency response | Student welfare office

HOSTEL AMENITIES
Wi-Fi connectivity | Mess halls (vegetarian & non-vegetarian)
Recreation rooms | Study lounges | Common areas | 24×7 support staff

CAMPUS AMENITIES
ATMs & Banks | Post Office | Shopping Area | Multiple Auditoriums
Seminar & Activity Centre (SAC) | Guest houses | Cafeterias

SUSTAINABILITY
Solar lighting | Water recycling systems | Waste segregation & composting
Electric shuttles | Green corridors | Biodiversity gardens | Eco-monitoring

Historical Campus Character: Sprawling green spaces | Tree-lined avenues | Serene Ganges riverbank setting.`,

      faculty: `FACULTY & RESEARCH EXCELLENCE

FACULTY STATISTICS
Total Faculty Members: 570
Ph.D Faculty: Majority
Departments: 18 (Aerospace, Computer Science, Electrical, Chemical, Civil, Mechanical, Materials Science, Sustainable Energy, Industrial & Management, Design, Physics, Mathematics, Earth Sciences, etc.)

RESEARCH FUNDING & OUTPUT (2024)
Annual Research Funding: ₹399 Crore
Patents Filed (2024): 146
Published Research Papers: 1,500+ annually
Centers of Excellence: 30+
Ph.D Students: 1,200+

KEY DEPARTMENTS
Aerospace Engineering | Computer Science | Electrical Engineering | Chemical Engineering
Civil Engineering | Mechanical Engineering | Materials Science & Engineering
Sustainable Energy Engineering | Physics | Mathematics | Earth Sciences
Design Programme | Industrial & Management Engineering

RESEARCH CENTERS & INSTITUTES
Advanced Centre for Materials Science | Centre for Environmental Science & Engineering
Centre for Mechatronics | Samtel Centre for Display Technologies
Advanced Centre for Quantum Computing | Centre for Robotics
Nuclear Engineering & Technology Centre | Sustainable Energy Lab

RESEARCH FOCUS AREAS
Artificial Intelligence & Machine Learning | Quantum Computing & Quantum Information
Renewable Energy & Climate Technology | Advanced Materials & Nanotechnology
Robotics & Autonomous Systems | Biomedical Engineering | Water Resources
Aerospace Design | IoT & 5G Communications

INTERNATIONAL COLLABORATIONS
MIT (Massachusetts Institute of Technology) | Princeton University
UC Berkeley | Carnegie Mellon University | University of Michigan
Nanyang Technological University (NTU) | Technical University of Munich (TUM)
Plus 35+ other global universities and research institutions

INDUSTRY PARTNERSHIPS
ISRO (Indian Space Research Organisation) | DRDO (Defence Research & Development)
ONGC | Siemens | Tata Group | Intel | Qualcomm | Microsoft Research
Government of India agencies | Private R&D organizations

FACULTY RECOGNITION
Multiple faculty fellows of Indian National Science Academy (INSA)
Department of Science & Technology (DST) awardees
National Board for Higher Mathematics (NBHM) members
International journal editors and reviewers`,

      campusLife: `STUDENT LIFE & CAMPUS CULTURE

FLAGSHIP FESTIVALS

TECHKRITI (January) — Premier Technical Festival
100+ technical events across 10+ domains
5,000+ participants | 30+ colleges | ₹40+ lakhs prize pool
Events: Hackathons, robotics challenges, coding competitions, design contests, startup pitches
Notable: One of India's largest technical festivals

ANTARAGNI (October) — Cultural Festival
50+ cultural events | Music, dance, drama, theater performances
30,000+ visitors | Multi-day celebration
Events: Band performances, classical dance, street plays, acrobatics, workshops

UDGHOSH (Sports Festival)
Inter-hostel competitions across 15+ sports categories
Olympics-style opening ceremony | Annual sports meet
Cricket, football, badminton, basketball, volleyball, swimming, athletics

CLUBS & SOCIETIES (50+)

TECHNICAL CLUBS: Robotics Club · Aeromodelling Club · Coding Club · E-Cell · AI/ML Club · Electronics Club · Drone Club · CAD Club
CULTURAL CLUBS: Dance Club · Drama Society · Music Club · Photography Club · Art & Design Club · Film Club · Literary Society · Debate Club
SPORTS CLUBS: Cricket, Football, Badminton, Basketball, Volleyball, Swimming, Tennis, Martial Arts, Yoga
SOCIAL SERVICE: National Service Scheme (NSS) · Environmental Club · Community Development · Mentorship Programs

RESIDENTIAL LIFE
12 modern hostels with strong peer culture
24×7 resident support staff | Mess facilities | Recreation centers
Regular inter-hostel competitions & events
Mentorship by senior students | Counseling support

WELLNESS & SUPPORT
Mental health counseling | Physical fitness programs | Yoga classes
Meditation & stress management | Career guidance | Academic mentoring
Peer support groups | Alumni mentorship network`,

      clubs: `STUDENT CLUBS & SOCIETIES (50+ ORGANIZATIONS)

TECHNICAL & INNOVATION CLUBS
Robotics Club — Design, programming, and competition of autonomous systems | Competitions: ABU Robocon, national contests
Aeromodelling Club — Aircraft design | Competitions: SAE Aero Design
Coding Club — Competitive programming | Hackathons | Algorithm development
E-Cell (Entrepreneurship Cell) — Startup mentorship | Incubation support | Pitch events | Investor connections
AI/ML Club — Machine learning projects | Research collaboration | Data science competitions
Electronics Club — Circuit design | Embedded systems | IoT projects | Hardware labs
Drone Club — Autonomous aerial vehicle design | Drone racing | UAV applications
CAD & Design Club — 3D modeling | CAD software | Design competitions

CULTURAL & ARTS CLUBS
Dance Club — Classical & contemporary dance | Performances at Techkriti & Antaragni
Drama Society — Street plays | Theatrical productions | Acting workshops
Music Club — Band performances | Instrumental training | Music events
Photography Club — Photography competitions | Workshops | Photo exhibitions
Art & Design Society — Painting, sketching | Design workshops | Art exhibitions
Film Club — Short film production | Movie screenings | Filmmaking workshops
Literary Society — Creative writing | Poetry | Monthly publications
Debate & Public Speaking Club — Inter-college debates | MUN preparation

SPORTS CLUBS & ATHLETIC ASSOCIATIONS
Cricket, Football, Badminton, Basketball, Volleyball, Swimming, Tennis, Squash
Martial Arts (Karate, Taekwondo) · Yoga & Fitness · Athletics & Track Events

SOCIAL SERVICE & COMMUNITY
NSS (National Service Scheme) — Community development | Blood donation drives | Rural outreach
Environmental Club — Sustainability initiatives | Tree planting | Campus green projects
Mentorship Program — Senior-junior academic & personal guidance
Community Service Organizations — Urban outreach | NGO collaborations

SPECIAL INTEREST CLUBS
Astronomy Club | Sports Analytics | Philosophy Club | Board Games Club
And 5+ others based on student interests

ANNUAL CLUB PARTICIPATION
5,000+ students involved in clubs | 50+ club meets & events per year
Funding & resources available for approved activities | Alumni mentorship for established clubs`,

      events: `ANNUAL EVENTS & FESTIVALS

TECHKRITI (January) — Premier Technical Festival
Scale: 100+ events | 5,000+ participants | 30+ colleges | ₹40+ lakhs prize pool
Duration: 3-day festival | Multiple venues across campus
Major Events:
  • Hackathons: 24-48 hour coding competitions
  • Robotics Challenges: Autonomous design competitions
  • Coding Contests: Algorithmic programming
  • Design Competitions: CAD, innovation design
  • Startup Summit: Pitch competitions, investor meetings
  • Workshops: Tech talks, skill development
  • Gaming Events: E-sports tournaments
  • Tech Symposium: Industry & research presentations

ANTARAGNI (October) — Cultural Festival
Scale: 50+ cultural events | 30,000+ visitors | Multi-day celebration
Major Events:
  • Band Performances: National & international artists
  • Classical Dance: Bharatanatyam, Kathak performances
  • Street Plays: Theater productions & performances
  • Acrobatics & Circus: Performance art
  • Comedy Shows: Stand-up & sketch comedy
  • Music Workshops: Instrumental training
  • Art Exhibitions: Paintings, sculptures, installations
  • Food Festival: Culinary events

UDGHOSH (Sports Festival) — Annual Sports Meet
Scale: 15+ sports categories | Inter-hostel competitions | University-level tournaments
Events: Cricket, Football, Badminton, Basketball, Volleyball, Swimming, Tennis, Athletics
Features: Opening ceremony | Awards & recognition | Spectator engagement | Media coverage

REGULAR EVENTS (Throughout Year)
Code Combat — Monthly coding competitions
Science Exhibitions — Student research showcases
Seminars & Workshops — Industry experts, research talks
Alumni Interactions — Career guidance, mentorship sessions
Department-Specific Events — Academic symposia, tech talks
Intra-mural Competitions — Campus-level contests
Guest Lectures — Distinguished speakers, researchers
Cultural Programs — Monthly performances, celebrations`,

      research: `RESEARCH & INNOVATION ECOSYSTEM

RESEARCH CENTERS & INSTITUTES
AI & ML Research Center — Deep learning, NLP, computer vision projects
Quantum Computing Lab — Quantum algorithms, quantum information processing
Renewable Energy Center — Solar, wind, biogas research
Advanced Materials Research — Nanotechnology, smart materials
Robotics Lab — Autonomous systems, industrial robotics
Centre for Environmental Science & Engineering — Water, air, waste management
Samtel Centre for Display Technologies — Display technology research
National Centre for Mechatronics — Advanced mechanical systems
30+ other Centers of Excellence in various disciplines

RESEARCH OUTPUT (2024)
Annual Research Funding: ₹399 Crore
Patents Filed: 146 (2024 data)
Peer-Reviewed Publications: 1,500+ annually
Research Scholars (Ph.D): 1,200+ active researchers
Ongoing Projects: 1,000+ research projects

RESEARCH AREAS
AI & Machine Learning · Quantum Computing & Quantum Information Theory
Renewable Energy & Sustainable Technology · Advanced Materials & Nanotechnology
Robotics & Autonomous Systems · Biomedical Engineering & Healthcare Tech
Water Resources & Environmental Engineering · Aerospace & Flight Systems
Climate Change & Environmental Modeling · IoT & 5G Communications
Smart Infrastructure & Smart Cities · Computational Science

STARTUP & ENTREPRENEURSHIP ECOSYSTEM
SIDBI Innovation & Incubation Centre (SIIC) — Startup incubation
Entrepreneurship Cell (E-Cell) — Mentorship & guidance
Startups Incubated: 100+ since inception
Seed Funding: Available for student ventures
Industry Mentorship: Corporate partners & alumni advisors
Government Support: MSME registration, GST assistance
Success Stories: 10+ successful exits, sustainable ventures

TECHNOLOGY TRANSFER & COLLABORATION
Patent Commercialization: Technology licensing program
Industry Partnerships: Research collaborations with corporations
ISRO & DRDO Projects: Defense & space research contributions
International Collaborations: Joint research with MIT, UC Berkeley, CMU, Princeton, NTU, TUM
Publication Impact: High-impact international journals & conferences
Open Innovation: Collaboration with startups & research organizations

RESEARCH FUNDING SOURCES
Department of Science & Technology (DST)
Council of Scientific & Industrial Research (CSIR)
Department of Biotechnology (DBT)
Ministry of Human Resource Development (MHRD)
ISRO & DRDO contracts
Industry research partnerships
International funding agencies & grants`,

      scholarships: `SCHOLARSHIPS & FINANCIAL AID

MERIT-BASED SCHOLARSHIPS

Institute Merit Scholarship
Recipients: Top academic performers
Award: Full tuition fee waiver + ₹2,000/month stipend
Eligibility: CGPA ≥ 8.0 (typically)
Renewability: Annual (subject to maintaining CGPA)

Department Scholarships
Award: ₹1.5 L - ₹2.5 L per year (branch-wise)
Recipients: Top students in each department
Renewal Criteria: Maintain department-specific GPA threshold

Research Scholarships (Ph.D)
Monthly Stipend: ₹31,000 (Research Assistantship)
Coverage: Tuition + living expenses
Availability: All Ph.D students receive assistantship

GOVERNMENT SCHOLARSHIPS

National Scholarship Scheme (NSS)
Eligibility: Income < ₹1.25 L annually (SC/ST/OBC/General EWS)
Amount: ₹10,000 annually
Application: Online via Ministry of Education portal

AICTE PRAGATI Scholarship
For: Girl students from low-income families
Amount: ₹60,000 annually
Coverage: Tuition + living expenses
Focus: Encourage women in engineering

AICTE SAKSHAM Scholarship
For: Students with disabilities (PwD category)
Amount: ₹60,000 annually
Coverage: Tuition + adaptive technology costs
Support: Accessibility services on campus

State Scholarships
Administered by respective state governments
For: SC/ST/OBC/Minority communities
Eligibility: Income & academic criteria vary by state

EXTERNAL SPONSORSHIPS & GRANTS

Corporate Fellowships
Industry Partners: Provide research grants & internship stipends
Amount: Varies (₹1 L - ₹10 L annually)
Focus: Industry-relevant research areas

Foundation Grants
National Science Foundation | Inlaks Shivdasani Foundation | Tata Foundation
Amount: Project-based funding (₹5 L - ₹50 L)
Application: Competitive merit-based selection

FINANCIAL ASSISTANCE PROGRAMS

Fee Waivers for Economically Disadvantaged Students
Based: Family income & academic merit
Coverage: Up to 100% tuition fee waiver
Process: Application review by financial aid office

Hostel Fee Assistance
Subsidy: Up to 50% hostel charges
Eligibility: Income < ₹2.5 L annually
Process: Means-tested allocation

Emergency Financial Aid
For: Unexpected financial hardships
Amount: Up to ₹50,000 (case-by-case)
Application: Grievance redressal system

Travel Grants for Research
For: Ph.D students presenting at international conferences
Amount: Up to ₹1.5 L (registration + travel + accommodation)
Frequency: Multiple allocations per year

EMPLOYER-PROVIDED SCHOLARSHIPS
Several organizations provide scholarships directly to students (sponsored seats):
Amount: Covered through employer-employee partnerships
Process: Application during admission counseling

SCHOLARSHIP CONTACT
Financial Aid Office: aid@iitk.ac.in | +91 512 259 6100
Registrar Office: registrar@iitk.ac.in
Online Portal: https://www.iitk.ac.in/new/Scholarships`,

      sustainability: `SUSTAINABILITY & GREEN CAMPUS INITIATIVES

ENVIRONMENTAL COMMITMENT
IIT Kanpur's 1,040-acre campus is an integrated ecosystem promoting sustainable innovation.

TARGET: Carbon-neutral campus by 2030

RENEWABLE ENERGY
Solar Power Installation: Large-scale solar panels on academic buildings, hostels
Capacity: Contributes 15-20% of campus electricity needs
Wind Energy: Feasibility studies for wind power generation
Goal: 50% renewable energy by 2030

WATER CONSERVATION
Water Recycling System: Greywater treatment & reuse for irrigation
Rainwater Harvesting: Multi-point collection during monsoon
Groundwater Recharge: Artificial recharge ponds & aquifer management
Wastewater Treatment: Advanced STP (Sewage Treatment Plant)
Usage Monitoring: Real-time water management dashboard

WASTE MANAGEMENT
Waste Segregation: Wet/dry/recyclable categories at source
Composting: Organic waste converted to biofertilizer (50+ tons annually)
Recycling Program: Paper, plastic, metal recovery & reuse
E-waste Recycling: Electronic waste disposal through certified agencies
Zero Landfill Goal: 80% waste diversion from landfills

BIODIVERSITY & GREEN SPACES
Tree-lined Avenues: 50,000+ trees on campus
Biodiversity Gardens: Native plant species conservation
Bird Sanctuary: Habitat for migratory & resident bird species
Ecological Monitoring: Regular biodiversity surveys
Green Belt Expansion: Afforestation drive (1,000+ trees annually)

TRANSPORTATION
Electric Shuttles: Campus shuttle buses with zero emissions
Bicycle Infrastructure: Dedicated bike lanes, repair stations
Pedestrian Pathways: Safe walking zones throughout campus
EV Charging Stations: For faculty/staff electric vehicles
Carpooling Programs: Incentive-based shared commuting

SUSTAINABLE BUILDINGS
Green Architecture: LEED standards for new constructions
Energy-Efficient Lighting: LED systems with motion sensors
Building Insulation: Reduces heating/cooling requirements
Natural Ventilation: Passive cooling design in academic buildings

ENVIRONMENTAL EDUCATION
Sustainability Courses: Offered across academic programs
Environmental Club: Student-led conservation initiatives
Awareness Programs: Campus seminars on climate action
Green Campus Certification: Aiming for ISO 14001 certification

FACULTY & RESEARCH INITIATIVES
Centre for Environmental Science & Engineering: Research on sustainability
Climate Change Research: Projects on carbon sequestration, adaptation
Clean Energy Research: Renewable energy & energy efficiency studies
Sustainable Materials: Green chemistry & biodegradable materials research

WASTE REDUCTION INITIATIVES
Single-Use Plastic Ban: Campus-wide prohibition on plastic bags, bottles
Reusable Options: Provided alternatives (metal bottles, cloth bags)
Paper Reduction: Digital documentation & e-governance
Packaging Reduction: Minimal packaging in campus stores

2030 SUSTAINABILITY GOALS
50% renewable energy generation | 100% waste segregation at source
Zero single-use plastic on campus | Carbon-neutral operations
30,000+ additional trees | 100% wastewater treatment & reuse
LEED certification for 5+ new buildings | Green campus certification

Recognition: IIT Kanpur committed to United Nations Sustainable Development Goals (SDGs).`,

      vision: `VISION 2030 & GLOBAL OUTLOOK

INSTITUTIONAL VISION
To be a globally recognized institution of excellence advancing technological progress, innovation, research, and societal impact through rigorous academics and world-class facilities.

STRATEGIC PRIORITIES FOR 2030

RESEARCH & INNOVATION EXPANSION
Target: 200+ patents filed annually (current ~146)
Target: 300+ startups incubated (current ~100)
Goal: Establish 5+ new Centers of Excellence in emerging fields
International: Double international research collaborations
Focus Areas: AI, Quantum Computing, Climate Tech, Biomedical Innovation

ACADEMIC EXCELLENCE
Enhance: Curriculum aligned with Industry 4.0 & global trends
Introduce: New interdisciplinary degree programs
Online Education: Expand NPTEL+ offerings for pan-India impact
Global Partnerships: Joint degree programs with international universities
Focus: Research-integrated teaching methodology

TALENT DEVELOPMENT & INCLUSION
Increase: Women enrollment to 30% across programs
Expand: International student diversity (target 15%)
Strengthen: Mentorship & skill development programs
Create: Equal opportunities through enhanced scholarships
Develop: Leadership & entrepreneurial mindset in all students

GLOBAL OUTREACH & PARTNERSHIPS
Collaborations: Deepen ties with MIT, UC Berkeley, CMU, Princeton, NTU, TUM
Exchange Programs: Student & faculty exchange initiatives
Joint Research: International research consortia
International Conferences: Host premier global academic events
Alumni Network: Strengthen global alumni engagement

INFRASTRUCTURE & CAMPUS DEVELOPMENT
Facilities: Upgrade 10+ research laboratories with cutting-edge equipment
Smart Campus: Implement AI-enabled campus management systems
Hostels: Expand capacity to house 100% on-campus students
Recreation: Enhance sports & wellness facilities
Connectivity: Gigabit internet & IoT infrastructure throughout campus

SUSTAINABILITY & ENVIRONMENTAL LEADERSHIP
Goal: Carbon-neutral operations by 2030
Renewable Energy: 50% of campus electricity from renewables
Green Buildings: LEED certification for all new constructions
Water Independence: 100% wastewater treatment & recycling
Biodiversity: Expand forest cover to 30% of campus area
Climate Research: Position as hub for climate science research

SOCIAL RESPONSIBILITY & IMPACT
Community Outreach: Expand rural education & technology access programs
Social Enterprises: Support student ventures solving social problems
Innovation for India: Focus on problems affecting millions (water, sanitation, health)
Public Sector Solutions: Technology transfer for government programs
International Development: Contribute to sustainable development goals

FACULTY & RESEARCH ECOSYSTEM
Recruitment: Add 100+ faculty members in emerging disciplines
Research Funding: Increase annual funding to ₹800 Cr by 2030
Ph.D Excellence: Triple research scholar numbers to 3,600+
Industry Collaboration: 50% faculty engaged in industry-funded research
Interdisciplinary Centers: Create 10+ new interdisciplinary research clusters

INDUSTRY-ACADEMIA NEXUS
Strategic Partnerships: Long-term research contracts with Fortune 500 companies
Startup Support: Scale from 100 to 300+ incubated ventures
Technology Transfer: Commercialize 50+ patents annually
Industry Placements: Maintain 100% placement rate for CSE & core branches
Innovation Hubs: Establish 5 dedicated industry-academia innovation centers

GLOBAL RANKINGS ASPIRATION
NIRF: Maintain top #5 overall and #4 engineering status
QS World: Climb from #278 to top #150 by 2030
QS Asia: Improve to top #40 by 2030
Research Impact: Enter global top 50 in research publications
International Visibility: Recognized as leading technical university in Asia-Pacific

TECHNOLOGICAL LEADERSHIP
AI & ML: Establish as premier AI research institute in Asia
Quantum Computing: Lead India's quantum computing research
Renewable Energy: Become hub for green energy innovation
Robotics & Automation: Center of excellence in robotics research
Sustainable Technology: Pioneer climate tech & circular economy solutions

STUDENT-CENTRIC INITIATIVES
Experiential Learning: 100% of students engage in research/projects
Mentorship Programs: Every student paired with faculty/industry mentor
Career Services: Enhanced placement & higher studies guidance
Wellness Support: Expanded mental health & counseling services
Alumni Engagement: Active alumni mentorship for current students

INCLUSIVE EXCELLENCE
Diversity: Increase diversity scholarships by 5x
Accessibility: Ensure full accessibility for PwD students
Regional Outreach: Engage with schools across India
Scholarship Programs: Make world-class education accessible to talented students
Women in STEM: Targeted support for women engineers & scientists

COMMITMENT STATEMENT
IIT Kanpur commits to:
• Maintaining excellence in teaching, research, and innovation
• Fostering a culture of entrepreneurship and societal impact
• Building global partnerships while serving India's technological needs
• Promoting inclusive education and equal opportunities
• Preparing future leaders in technology, innovation, and responsible management
• Contributing to sustainable development and environmental stewardship
• Advancing knowledge frontiers through research and discovery

By 2030, IIT Kanpur aims to be a beacon of technological excellence, innovation, and social responsibility — shaping India's technological future and contributing to global progress.`,
    };
  }, []);

  // Generate PDF for IIT Kanpur with comprehensive data
  const generateIITKanpurPDF = React.useCallback(() => {
    const data = getIITKanpurBrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Kanpur', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision 2030 & Global Outlook', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Kanpur (IIT Kanpur)', data, sections);
  }, [getIITKanpurBrochureData]);

  // Get comprehensive IIT Kharagpur brochure data (Professional 2025-26 Edition)
  const getIITKharagpurBrochureData = React.useCallback(() => {
    return {
      about: `Indian Institute of Technology Kharagpur (IIT Kharagpur)

Established: 1951 | Type: Public Technical University | Campus Area: 2,100 acres (Kharagpur, West Bengal)
NIRF 2025 Rank: Overall #6 | Engineering #5 | Architecture #3
QS 2026 World Rank: #271 | QS Asia Rank: #59
Student Strength: 14,000+ (UG, PG, PhD, International) | Faculty: 700+ | Departments: 19
Motto: Yogaḥ Karmasu Kauśalam — Excellence in Action is Yoga

Founded in 1951, IIT Kharagpur was India's first IIT and remains a beacon of higher technical education, innovation, and nation-building. Established in the historic Hijli Detention Camp — a colonial-era prison for India's freedom fighters — IIT Kharagpur now stands as a global symbol of India's transformation through technology.

Declared an Institute of National Importance (1956), IIT Kharagpur pioneered modern engineering education, research, and entrepreneurship in India. With the largest IIT campus (2,100 acres), 700+ faculty members, and world-class laboratories, IIT Kharagpur integrates academics, research, culture, and community living in one of Asia's most advanced educational ecosystems.

Distinct for: Historic significance (India's first IIT), largest campus, comprehensive research infrastructure, vibrant cultural festivals (Spring Fest, Kshitij).`,

      academics: `ACADEMIC PROGRAMS & FEE STRUCTURE (2025–26)

UNDERGRADUATE (UG) — 4-5 Years

B.Tech: 1,200 seats | Annual Fee: ₹2.2 L | Total: ₹9.0 L | Entrance: JEE Advanced + JoSAA

Popular Branches:
• Computer Science (AIR 127) | Data Science & AI (AIR 180) | Electrical (AIR 600)
• Mechanical (AIR 2,000) | Civil (AIR 4,500)

B.Arch: 40 seats | Annual Fee: ₹2.2 L | Total: ₹11.2 L | Entrance: JEE Main Paper 2 + AAT

Dual Degree (B.Tech + M.Tech): 5 years | Annual: ₹2.3 L | Total: ₹11.0 L | Entrance: JEE Advanced

B.Des: Annual Fee: ₹2.3 L | Total: ₹9.2 L | Entrance: UCEED

Hostel & Mess Fee: ₹48,360 (₹24,180 per semester)

POSTGRADUATE (PG) — 2 Years

M.Tech: Fee: ₹31,900/year | Entrance: GATE + COAP | 60+ specializations (AI, Aerospace, Environment, Smart Materials)

MBA: Fee: ₹1.3 L/year | Seats: 120 | Entrance: CAT + Interview | Specializations: Analytics, Finance, Strategy

M.Sc: Fee: ₹16,491/year | Seats: 200 | Entrance: IIT JAM | Physics, Chemistry, Mathematics, Economics, Geology

DOCTORAL (Ph.D) — 4-6 Years

Annual Fee: ₹15,800 | Entrance: GATE / CSIR-UGC / UGC-NET + Interview
Total Ph.D Students: 1,200+ | Programs: 60+ | Focus Areas: AI, Robotics, Aerospace, Environment, Energy, Quantum, Bioengineering

Key Facts: India's largest IIT with most comprehensive program portfolio | Research-intensive environment | Strong international exposure.`,

      admissions: `ADMISSIONS & CUTOFFS (2025)

ENTRANCE EXAMINATIONS

Undergraduate: JEE Advanced + JoSAA | B.Arch: JEE Main Paper 2 + AAT
Postgraduate: GATE (M.Tech), CAT (MBA), IIT JAM (M.Sc)
Doctoral: GATE / CSIR-UGC / UGC-NET + Interview

RESERVATION POLICY
SC 15% | ST 7.5% | OBC-NCL 27% | EWS 10% | PwD 5% | Female Supernumerary Seats

2025 CUTOFF TRENDS (B.Tech General Category)
B.Tech CSE: AIR 127
Data Science & AI: AIR 180
Electrical: AIR 600
Mechanical: AIR 2,000
Civil: AIR 4,500

B.Arch: AIR 0 (rank-based selection)
MBA (General): 94%ile (CAT)

ADMISSION PROCESS
Applications: Online via national portals (JEE, GATE, CAT, JAM, UCEED)
Counseling: JoSAA (UG), COAP (M.Tech), Institute (MBA), JOAPS (M.Sc), Departmental (Ph.D)
Merit-Based: Entrance rank + interview + academic record
International Students: Limited seats available via special counseling process.

Key Note: IIT Kharagpur's largest intake among all IITs due to comprehensive portfolio.`,

      placements: `PLACEMENTS & CAREER OUTCOMES (2024–25)

PLACEMENT STATISTICS
Total Offers: 1,500
Recruiters: 320
Highest Package: ₹50.0 Cr (International)
Domestic Highest: ₹1.2 Cr
Average Package: ₹26.0 L
CSE Average: ₹35.0 L
ECE Average: ₹29.0 L
MBA Median: ₹18.5 L
PPOs: 250+
100% BTech CSE Placement

MAJOR RECRUITERS (2024-25)
Google | Microsoft | Amazon | Goldman Sachs | De Shaw | Morgan Stanley | Qualcomm | Intel | Apple | Texas Instruments | Flipkart | ITC | Barclays | Shell | GE | McKinsey | Boston Consulting Group

COMMON ROLES
Software Development Engineer | Data Scientist | Quantitative Analyst | R&D Engineer | Management Consultant | Core Engineer | Product Manager

PLACEMENT TRENDS (2022–2025)
Year 2025: Avg ₹20.0+ L | Intl Highest ₹2.05 Cr | PPOs 222 | Trend: AI & DS surge
Year 2024: Avg ₹26.0 L | Intl Highest ₹50.0 Cr | PPOs 250 | 100% CSE placement
Year 2023: Avg ₹17.0 L | Intl Highest ₹1.06 Cr | PPOs 200+
Year 2022: Avg ₹16.0 L | Intl Highest ₹2.15 Cr | PPOs 180`,

      rankings: `RANKINGS & RECOGNITION (2025)

NATIONAL RANKINGS
NIRF Overall: #6 | Engineering: #5 | Architecture: #3
India Today: Engineering #5
ARIIA: Innovation Ecosystem – Excellent

INTERNATIONAL RANKINGS
QS World: #271 (Global) | #59 (Asia)
THE World: Engineering 301–400 Band

NIRF 2025 SCORE BREAKDOWN
Teaching, Learning & Resources (TLR): 73.06
Research, Professional Practice & Collaboration (RPC): 72.05
Graduation Outcomes (GO): 82.9
Outreach & Inclusivity (OI): 64.95
Perception Score: 51.24

INSTITUTIONAL DISTINCTIONS
India's first IIT (1951) | Established in Hijli Detention Camp (symbol of freedom to technology)
Largest IIT campus (2,100 acres) | Most comprehensive academic portfolio
Pioneer of architectural education in India | Global research partnerships`,

      campus: `CAMPUS & INFRASTRUCTURE

CAMPUS OVERVIEW
Area: 2,100 acres (largest IIT campus) | Hostels: 21 | Labs: 200+
Library: Central Library — 350,000+ books, 26,664 e-journals, 24×7 access

SPECIALIZED INFRASTRUCTURE
National Supercomputing Facility — High-performance computing for research
Advanced Nanoelectronics Lab — Cutting-edge semiconductor research
Center for Oceans and Naval Architecture — Maritime engineering focus
Industrial & Systems Engineering Complex — Advanced manufacturing lab
Smart Infrastructure Design & Management School — Urban technology hub

LIBRARY FACILITIES
Books: 350,000+ | E-journals: 26,664+ | Digital Resources: 24×7 access
AI-powered catalogue | Multiple reading zones | Research commons

RESEARCH & INNOVATION SPACES
200+ research labs with advanced facilities
VLSI Design Lab | Robotics Lab | Aerospace Lab | IoT Center | Nanotech Facility
Jnan Ghosh Stadium | Aquatic Center | Advanced Sports Complex

SPORTS & WELLNESS
Olympic-size pool | Badminton/Tennis courts | Squash court | Football/Cricket grounds
Jnan Ghosh Stadium (capacity: 6,000) | Gymnasium | Yoga facility | Athletics track

HEALTH & SUPPORT SERVICES
B.C. Roy Technology Hospital (24×7, 32 beds, ICU, OPD, Specialist doctors)
Mental health counseling | Emergency ambulance | Specialist healthcare

HOSTEL AMENITIES
Wi-Fi connectivity | Mess halls (vegetarian & non-vegetarian)
Recreation rooms | Study lounges | Common areas | 24×7 support staff

CAMPUS AMENITIES
ATMs & Banks | Post Office | Shopping Areas | Guest Houses
Seminar & Activity Centre (SAC) | Multiple Auditoriums | Cafeterias

SUSTAINABILITY & GREEN SPACES
Solar rooftops and energy-efficient lighting | Rainwater harvesting
Water recycling systems | Waste segregation & composting
Green corridors | Biodiversity zones | Electric transport | 50,000+ trees

Historical Campus Character: Largest academic campus in Asia | Historic Hijli site transformed into innovation hub | Sprawling green spaces | Tree-lined avenues.`,

      faculty: `FACULTY & RESEARCH EXCELLENCE

FACULTY STATISTICS
Total Faculty Members: 700+
Ph.D Faculty: Majority
Departments: 19 (Aerospace, Architecture, Civil, Computer Science, Electrical, Mechanical, Chemical, Ceramic, Metallurgical, Mining, Physics, Chemistry, Mathematics, Biotechnology, Economics, Humanities, Industrial & Management, Geology & Geophysics)

RESEARCH FUNDING & OUTPUT (2024)
Annual Research Funding: ₹399 Crore
Patents Filed (2024): 146
Published Research Papers: 1,500+ annually
Centers of Excellence: 14
Research Schools: 12
Advanced Facilities: 11
Ph.D Students: 1,200+

KEY DEPARTMENTS
Aerospace Engineering | Architecture | Civil Engineering | Computer Science & Engineering
Electrical Engineering | Mechanical Engineering | Chemical Engineering
Ceramic Engineering | Metallurgical & Materials Engineering | Mining Engineering
Physics | Chemistry | Mathematics | Biotechnology | Economics | Humanities

RESEARCH CENTERS & INSTITUTES
Advanced Centre for Materials Science | Centre for Environmental Science & Engineering
Ranbir and Chitra Gupta School for Infrastructure Design & Management
Samtel Centre for Display Technologies | Centre for Mechatronics
Advanced Centre for Robotics | Centre for AI & Complex Networks

RESEARCH FOCUS AREAS
Artificial Intelligence & Machine Learning | Robotics & Automation
Complex Networks & Cryptography | Smart Materials & Nanotechnology
Aerospace Technologies | Environmental Sustainability
Biomedical Engineering & Healthcare Tech | Renewable Energy Systems
Quantum Computing | Advanced Manufacturing

INTERNATIONAL COLLABORATIONS
MIT (Massachusetts Institute of Technology) | UC Berkeley | Cambridge University
ETH Zurich | NTU (Nanyang Technological University) | TUM (Technical University of Munich)
Monash University | Plus 30+ other global universities

INDUSTRY PARTNERSHIPS
ISRO (Indian Space Research Organisation) | DRDO (Defence Research & Development)
ONGC | Tata Group | Siemens | Rolls-Royce | Shell | GE
Microsoft Research | Intel Labs | Government of India agencies

FACULTY RECOGNITION
Multiple faculty fellows of Indian National Science Academy (INSA)
Department of Science & Technology (DST) awardees
Bhatnagar Prize recipients | International journal editors and reviewers`,

      campusLife: `STUDENT LIFE & CAMPUS CULTURE

FLAGSHIP FESTIVALS

SPRING FEST (April) — Asia's Largest Cultural Festival
Scale: 50+ cultural events | 100,000+ visitors | 4-day celebration
Major Events: Band performances, dance shows, drama, comedy, art exhibitions
Notable: One of Asia's most attended campus festivals

KSHITIJ (January) — International Techno-Management Festival
Scale: 100+ technical events | 5,000+ participants | 40+ colleges
Major Events: Hackathons, robotics challenges, tech talks, gaming tournaments
Awards: ₹50+ lakhs prize pool

INTER-HALL COMPETITIONS
Sports & Cultural Championships | 21 hostels compete
Olympics-style ceremony | Annual Sports Festival (150+ events)

CLUBS & SOCIETIES (80+)

TECHNICAL CLUBS: Robotics Club · Aeromodelling Club · Coding Club · E-Cell · AI/ML Club · Electronics Club · Drone Club · CAD Club · Programming Contest Club
CULTURAL CLUBS: Dance Club · Drama Society · Music Club · Photography Club · Art & Design · Film Club · Literary Society · Debate Club · Street Play Group
SPORTS CLUBS: Cricket, Football, Badminton, Basketball, Volleyball, Swimming, Tennis, Squash, Martial Arts, Yoga
SOCIAL SERVICE: National Service Scheme (NSS) · Environmental Club · Community Development · Mentorship Programs

RESIDENTIAL LIFE
21 modern hostels with strong peer culture
24×7 resident support staff | Mess facilities | Recreation centers
Regular inter-hostel competitions & events
Mentorship by senior students | Counseling support
Historic hostel traditions and senior-junior bonding

WELLNESS & SUPPORT
Mental health counseling | Physical fitness programs | Yoga classes
Meditation & stress management | Career guidance | Academic mentoring
Peer support groups | Alumni mentorship network`,

      clubs: `STUDENT CLUBS & SOCIETIES (80+ ORGANIZATIONS)

TECHNICAL & INNOVATION CLUBS
Robotics Club — Design, programming, and competition of autonomous systems | ABU Robocon, national contests
Aeromodelling Club — Aircraft design and development | SAE Aero Design competitions
Coding Club — Competitive programming, hackathons, algorithm development
E-Cell (Entrepreneurship Cell) — Startup mentorship, incubation, pitch events, investor connections
AI/ML Club — Machine learning projects, data science competitions, research collaboration
Electronics Club — Circuit design, embedded systems, IoT projects, hardware labs
Drone Club — Autonomous aerial vehicle design, drone racing, UAV applications
CAD & Design Club — 3D modeling, CAD software training, design competitions

CULTURAL & ARTS CLUBS
Dance Club — Classical & contemporary dance | Performances at Spring Fest & Kshitij
Drama Society — Street plays, theatrical productions, acting workshops
Music Club — Band performances, instrumental training, music events, concerts
Photography Club — Photography competitions, workshops, photo exhibitions, galleries
Art & Design Society — Painting, sketching, design workshops, art exhibitions
Film Club — Short film production, movie screenings, filmmaking workshops
Literary Society — Creative writing, poetry, publications, literary competitions
Debate & Public Speaking Club — Inter-college debates, MUN preparation, speaking competitions

SPORTS CLUBS & ATHLETIC ASSOCIATIONS
Cricket, Football, Badminton, Basketball, Volleyball, Swimming, Tennis, Squash, Martial Arts, Yoga, Athletics

SOCIAL SERVICE & COMMUNITY
NSS (National Service Scheme) — Community development, blood donation drives, rural outreach
Environmental Club — Sustainability initiatives, tree planting, campus green projects
Mentorship Program — Senior-junior academic & personal guidance
Community Service Organizations — Urban outreach, NGO collaborations, skill development

SPECIAL INTEREST CLUBS
Astronomy Club | Entrepreneurship Bootcamp | Philosophy Club | Board Games Club | Adventure Club
And 10+ others based on student interests

ANNUAL CLUB PARTICIPATION
8,000+ students involved in clubs | 100+ club meets & events per year
Funding & resources available for approved activities | Alumni mentorship for established clubs`,

      events: `ANNUAL EVENTS & FESTIVALS

SPRING FEST (April) — Asia's Largest Cultural Festival
Scale: 50+ cultural events | 100,000+ visitors | 4-day celebration
Duration: 4 days | Multiple venues across campus
Major Events:
  • International Band Performances: Global artists
  • Classical Dance: Bharatanatyam, Kathak, Odissi performances
  • Theater Productions: Street plays, drama performances
  • Comedy Shows: Stand-up comedy, sketch comedy
  • Art Installations: Paintings, sculptures, installations
  • Food Festival: International & Indian cuisines
  • Gaming Events: E-sports tournaments

KSHITIJ (January) — International Techno-Management Festival
Scale: 100+ events | 5,000+ participants | 40+ colleges | ₹50+ lakhs prize pool
Duration: 4-day festival | Multiple venues across campus
Major Events:
  • Hackathons: 24-48 hour coding competitions
  • Robotics Challenges: Autonomous design competitions
  • Technical Talks: Industry experts, research presentations
  • Gaming Tournaments: E-sports competitions
  • Management Competitions: Case competitions, business simulations
  • Tech Exhibitions: Innovation showcases
  • Startup Summit: Pitch competitions, investor meetings
  • Workshops: Skill development and training

INTER-HALL SPORTS FEST — Annual Sports Championship
Scale: 150+ events | 21 hostels compete | University-level tournaments
Events: Cricket, Football, Badminton, Basketball, Volleyball, Swimming, Tennis, Athletics
Features: Opening ceremony, Olympics-style competition, spectator engagement

REGULAR EVENTS (Throughout Year)
Monthly Coding Competitions | Science Exhibitions | Seminars & Workshops
Industry Guest Lectures | Alumni Interactions | Career Fairs
Department-Specific Events | Cultural Programs | Social Service Drives
Intra-mural Competitions | Research Symposia | Tech Talks`,

      research: `RESEARCH & INNOVATION ECOSYSTEM

RESEARCH CENTERS & INSTITUTES
AI & ML Research Center — Deep learning, NLP, computer vision projects
Robotics Lab — Autonomous systems, industrial robotics, humanoid robots
Aerospace Research — Flight dynamics, aircraft design, propulsion systems
Environmental Research — Water, air quality, waste management, sustainability
Quantum Computing Lab — Quantum algorithms, quantum information processing
Advanced Materials Center — Nanotechnology, smart materials, composites
Renewable Energy Center — Solar, wind, hydroelectric research
Biomedical Engineering Lab — Medical devices, healthcare technology
14+ other Centers of Excellence in specialized domains

RESEARCH OUTPUT (2024)
Annual Research Funding: ₹399 Crore
Patents Filed: 146 (2024 data)
Peer-Reviewed Publications: 1,500+ annually
Research Scholars (Ph.D): 1,200+ active researchers
Ongoing Projects: 1,200+ research projects
Research Schools: 12
Advanced Facilities: 11

RESEARCH AREAS
AI & Machine Learning · Quantum Computing & Information Theory
Robotics & Autonomous Systems · Complex Networks & Cryptography
Smart Materials & Nanotechnology · Aerospace & Flight Systems
Environmental Sustainability & Climate Science · Biomedical Engineering
Renewable Energy & Clean Technology · Advanced Manufacturing
IoT & 5G Communications · Data Science & Analytics

STARTUP & ENTREPRENEURSHIP ECOSYSTEM
Step Incubation Centre — 250+ startups mentored
Entrepreneurship Cell (E-Cell) — Startup mentorship & guidance
Startups Incubated: 250+ cumulative
Seed Funding: Available for student ventures
Technology Students' Gymkhana — Innovation hub & governance
Industry Mentorship: Corporate partners & alumni advisors
Government Support: MSME registration, GST assistance
Success Stories: 20+ successful exits, sustainable ventures

TECHNOLOGY TRANSFER & COLLABORATION
Patent Commercialization: Technology licensing program
Industry Partnerships: Research collaborations with corporations
ISRO & DRDO Projects: Defense & space research contributions
International Collaborations: Joint research with MIT, Berkeley, Cambridge, ETH, NTU, TUM
Publication Impact: High-impact international journals & conferences
Open Innovation: Collaboration with startups & research organizations

RESEARCH FUNDING SOURCES
Department of Science & Technology (DST)
Council of Scientific & Industrial Research (CSIR)
Department of Biotechnology (DBT)
Ministry of Education (formerly MHRD)
ISRO & DRDO contracts
Industry research partnerships
International funding agencies & grants
World Bank & development organization grants`,

      scholarships: `SCHOLARSHIPS & FINANCIAL AID

MERIT-BASED SCHOLARSHIPS

Institute Merit Scholarship
Recipients: Top academic performers
Award: Full tuition fee waiver + ₹2,500/month stipend
Eligibility: CGPA ≥ 8.0 (typically)
Renewability: Annual (subject to maintaining CGPA)

Department Scholarships
Award: ₹2.0 L - ₹3.0 L per year (branch-wise)
Recipients: Top students in each department
Renewal Criteria: Maintain department-specific GPA threshold

Research Scholarships (Ph.D)
Monthly Stipend: ₹31,000 - ₹40,000 (Research Assistantship)
Coverage: Tuition + living expenses
Availability: All Ph.D students receive assistantship
Supplements: Conference travel, research material grants

GOVERNMENT SCHOLARSHIPS

National Scholarship Scheme (NSS)
Eligibility: Income < ₹1.25 L annually (SC/ST/OBC/General EWS)
Amount: ₹10,000 annually
Application: Online via Ministry of Education portal

AICTE PRAGATI Scholarship
For: Girl students from low-income families
Amount: ₹60,000 annually
Coverage: Tuition + living expenses
Focus: Encourage women in engineering

AICTE SAKSHAM Scholarship
For: Students with disabilities (PwD category)
Amount: ₹60,000 annually
Coverage: Tuition + adaptive technology costs
Support: Accessibility services on campus

State Scholarships
Administered by respective state governments
For: SC/ST/OBC/Minority communities
Eligibility: Income & academic criteria vary by state

EXTERNAL SPONSORSHIPS & GRANTS

Corporate Fellowships
Industry Partners: Provide research grants & internship stipends
Amount: Varies (₹1.5 L - ₹15 L annually)
Focus: Industry-relevant research areas

Foundation Grants
National Science Foundation | Inlaks Shivdasani Foundation | Tata Foundation | DST Young Scientist Scheme
Amount: Project-based funding (₹10 L - ₹100 L)
Application: Competitive merit-based selection

FINANCIAL ASSISTANCE PROGRAMS

Fee Waivers for Economically Disadvantaged Students
Based: Family income & academic merit
Coverage: Up to 100% tuition fee waiver
Process: Application review by financial aid office

Hostel Fee Assistance
Subsidy: Up to 50% hostel charges
Eligibility: Income < ₹3.0 L annually
Process: Means-tested allocation

Emergency Financial Aid
For: Unexpected financial hardships
Amount: Up to ₹75,000 (case-by-case)
Application: Grievance redressal system

Travel Grants for Research
For: Ph.D students presenting at international conferences
Amount: Up to ₹2.0 L (registration + travel + accommodation)
Frequency: Multiple allocations per year

EMPLOYER-PROVIDED SCHOLARSHIPS
Several organizations provide scholarships directly to students (sponsored seats):
Amount: Covered through employer-employee partnerships
Process: Application during admission counseling

SCHOLARSHIP CONTACT
Financial Aid Office: financial-aid@iitkgp.ac.in | +91 3222 282091
Registrar Office: registrar@iitkgp.ac.in
Online Portal: https://www.iitkgp.ac.in/new/Scholarships`,

      sustainability: `SUSTAINABILITY & GREEN CAMPUS INITIATIVES

ENVIRONMENTAL COMMITMENT
IIT Kharagpur's 2,100-acre campus is an integrated ecosystem promoting sustainable innovation.

TARGET: Carbon-neutral campus by 2030

RENEWABLE ENERGY
Solar Power Installation: Large-scale solar rooftops on academic buildings, hostels
Capacity: Contributes 20-25% of campus electricity needs
Wind Energy: Feasibility studies for wind power generation on vast campus
Goal: 60% renewable energy by 2030

WATER CONSERVATION
Water Recycling System: Greywater treatment & reuse for irrigation
Rainwater Harvesting: Multi-point collection during monsoon season
Groundwater Recharge: Artificial recharge ponds & aquifer management
Wastewater Treatment: Advanced STP (Sewage Treatment Plant) with 100% recycling
Usage Monitoring: Real-time water management dashboard
Target: Zero external water dependency by 2030

WASTE MANAGEMENT
Waste Segregation: Wet/dry/recyclable categories at source
Composting: Organic waste converted to biofertilizer (100+ tons annually)
Recycling Program: Paper, plastic, metal recovery & reuse
E-waste Recycling: Electronic waste disposal through certified agencies
Zero Landfill Goal: 90% waste diversion from landfills

BIODIVERSITY & GREEN SPACES
Tree-lined Avenues: 50,000+ trees on campus
Biodiversity Gardens: Native plant species conservation
Bird Sanctuary: Habitat for migratory & resident bird species
Ecological Monitoring: Regular biodiversity surveys and scientific studies
Green Belt Expansion: Afforestation drive (2,000+ trees annually)

TRANSPORTATION
Electric Shuttles: Campus shuttle buses with zero emissions
Bicycle Infrastructure: Dedicated bike lanes, repair stations, bike sharing
Pedestrian Pathways: Safe walking zones throughout 2,100-acre campus
EV Charging Stations: For faculty/staff electric vehicles
Carpooling Programs: Incentive-based shared commuting

SUSTAINABLE BUILDINGS
Green Architecture: LEED standards for new constructions
Energy-Efficient Lighting: LED systems with motion sensors & smart controls
Building Insulation: Reduces heating/cooling requirements
Natural Ventilation: Passive cooling design in academic buildings

ENVIRONMENTAL EDUCATION
Sustainability Courses: Offered across all academic programs
Environmental Club: Student-led conservation initiatives
Awareness Programs: Campus seminars on climate action and sustainability
Green Campus Certification: Aiming for ISO 14001 certification

FACULTY & RESEARCH INITIATIVES
Centre for Environmental Science & Engineering: Research on sustainability
Climate Change Research: Projects on carbon sequestration, adaptation strategies
Clean Energy Research: Renewable energy & energy efficiency studies
Sustainable Materials: Green chemistry & biodegradable materials research

WASTE REDUCTION INITIATIVES
Single-Use Plastic Ban: Campus-wide prohibition on plastic bags, bottles
Reusable Options: Provided alternatives (metal bottles, cloth bags, bamboo cutlery)
Paper Reduction: Digital documentation & e-governance (90% paperless)
Packaging Reduction: Minimal packaging in campus stores

2030 SUSTAINABILITY GOALS
60% renewable energy generation | 100% waste segregation at source
Zero single-use plastic on campus | Carbon-neutral operations
50,000+ additional trees (100,000 total) | 100% wastewater treatment & reuse
LEED certification for 10+ new buildings | Green campus certification | Zero external water
Recognition: IIT Kharagpur committed to United Nations Sustainable Development Goals (SDGs).`,

      vision: `VISION 2030 & GLOBAL OUTLOOK

INSTITUTIONAL VISION
To be the world's premier technical university advancing technological progress, innovation, research, and societal impact through rigorous academics, world-class research, and inclusive excellence.

STRATEGIC PRIORITIES FOR 2030

RESEARCH & INNOVATION EXPANSION
Target: 300+ patents filed annually (current ~146)
Target: 500+ startups incubated (current ~250)
Goal: Establish 10+ new Centers of Excellence in AI, Quantum, and Sustainability
International: Triple international research collaborations
Focus Areas: AI & ML, Quantum Computing, Climate Tech, Biomedical Innovation, Aerospace

ACADEMIC EXCELLENCE
Enhance: Curriculum aligned with Industry 5.0 & emerging technologies
Introduce: 15+ new interdisciplinary degree programs
Online Education: Expand NPTEL+ offerings for global audience (1M+ learners)
Global Partnerships: Joint degree programs with 20+ international universities
Focus: Research-integrated experiential learning methodology

TALENT DEVELOPMENT & INCLUSION
Increase: Women enrollment to 35% across programs
Expand: International student diversity (target 25% foreign students)
Strengthen: Mentorship & skill development programs for all students
Create: Equal opportunities through enhanced scholarships & support
Develop: Leadership, entrepreneurial & ethical mindset in all students

GLOBAL OUTREACH & PARTNERSHIPS
Collaborations: Deepen ties with MIT, Berkeley, Cambridge, ETH, NTU, TUM
Exchange Programs: 500+ student & faculty exchange initiatives annually
Joint Research: 50+ international research consortia
International Conferences: Host 10+ premier global academic events annually
Alumni Network: Strengthen global alumni engagement (100,000+ alumni worldwide)

INFRASTRUCTURE & CAMPUS DEVELOPMENT
Facilities: Upgrade 30+ research laboratories with cutting-edge equipment
Smart Campus: Implement AI-enabled campus management systems
Hostels: Maintain 100% on-campus housing capacity
Recreation: Enhance sports & wellness facilities to world-class standards
Connectivity: Gigabit internet & IoT infrastructure throughout 2,100-acre campus
Sustainability: 100% green energy across all facilities

SUSTAINABILITY & ENVIRONMENTAL LEADERSHIP
Goal: Carbon-neutral operations by 2030
Renewable Energy: 60% of campus electricity from renewables
Green Buildings: LEED certification for all new constructions
Water Independence: 100% wastewater treatment & recycling, zero external water
Biodiversity: Expand forest cover to 40% of campus area
Climate Research: Position as global hub for climate science research & solutions

SOCIAL RESPONSIBILITY & IMPACT
Community Outreach: Expand rural education & technology access to 1M+ people
Social Enterprises: Support 100+ student ventures solving social problems
Innovation for India: Focus on problems affecting millions (water, sanitation, health, agriculture)
Public Sector Solutions: Technology transfer for government infrastructure programs
International Development: Contribute to sustainable development goals globally

FACULTY & RESEARCH ECOSYSTEM
Recruitment: Add 150+ faculty members in emerging disciplines
Research Funding: Increase annual funding to ₹1,000+ Cr by 2030
Ph.D Excellence: Triple research scholar numbers to 3,600+
Industry Collaboration: 60% faculty engaged in industry-funded research
Interdisciplinary Centers: Create 15+ new interdisciplinary research clusters

INDUSTRY-ACADEMIA NEXUS
Strategic Partnerships: Long-term research contracts with Fortune 500 companies
Startup Support: Scale from 250 to 500+ incubated ventures
Technology Transfer: Commercialize 100+ patents annually
Industry Placements: Maintain 100% placement rate for CSE & core branches
Innovation Hubs: Establish 10 dedicated industry-academia innovation centers

GLOBAL RANKINGS ASPIRATION
NIRF: Maintain top #6 overall and #5 engineering status
QS World: Climb from #271 to top #100 by 2030
QS Asia: Improve from #59 to top #30 by 2030
Research Impact: Enter global top 50 in research publications
International Visibility: Recognized as leading technical university in Asia-Pacific

TECHNOLOGICAL LEADERSHIP
AI & ML: Establish as premier AI research institute in Asia
Quantum Computing: Lead India's quantum computing research with international recognition
Renewable Energy: Become hub for green energy innovation & sustainability solutions
Robotics & Automation: Global center of excellence in robotics research
Sustainable Technology: Pioneer climate tech, circular economy solutions, smart infrastructure

STUDENT-CENTRIC INITIATIVES
Experiential Learning: 100% of students engage in research/internship/project-based learning
Mentorship Programs: Every student paired with faculty/industry mentor
Career Services: Enhanced placement, higher studies, and entrepreneurship guidance
Wellness Support: Expanded mental health, counseling, and holistic development services
Alumni Engagement: Active alumni mentorship, networking, and industry placements

INCLUSIVE EXCELLENCE
Diversity: Increase diversity scholarships by 10x, reach 1,000 annual beneficiaries
Accessibility: Ensure full accessibility for PwD students with dedicated support
Regional Outreach: Engage with 500+ schools across India
Scholarship Programs: Make world-class education accessible to talented students irrespective of financial status
Women in STEM: Targeted support for women engineers & scientists (40% women faculty by 2030)

COMMITMENT STATEMENT
IIT Kharagpur commits to:
• Maintaining excellence in teaching, research, innovation, and societal impact
• Fostering a culture of entrepreneurship, ethical responsibility, and global citizenship
• Building partnerships with global institutions while serving India's technological development
• Promoting inclusive education and equal opportunities for all talented individuals
• Preparing future leaders in technology, innovation, and responsible global management
• Contributing to sustainable development and environmental stewardship worldwide
• Advancing knowledge frontiers through fundamental and applied research & discovery

By 2030, IIT Kharagpur aims to be India's premier technical institution and a global leader — transforming lives through technology, driving innovation for sustainable development, and preparing leaders who will shape the world's technological future.`,
    };
  }, []);

  // Generate PDF for IIT Kharagpur with comprehensive data
  const generateIITKharagpurPDF = React.useCallback(() => {
    const data = getIITKharagpurBrochureData() as BrochureData;
    const sections = [
      { title: 'About IIT Kharagpur', key: 'about' as const },
      { title: 'Academic Programs & Fees (2025–26)', key: 'academics' as const },
      { title: 'Admissions & Cutoffs (2025)', key: 'admissions' as const },
      { title: 'Placements & Career Outcomes (2024–25)', key: 'placements' as const },
      { title: 'Rankings & Recognition', key: 'rankings' as const },
      { title: 'Campus & Infrastructure', key: 'campus' as const },
      { title: 'Faculty & Research Ecosystem', key: 'faculty' as const },
      { title: 'Student Life & Campus Culture', key: 'campusLife' as const },
      { title: 'Student Clubs & Societies', key: 'clubs' as const },
      { title: 'Annual Events & Festivals', key: 'events' as const },
      { title: 'Research & Innovation', key: 'research' as const },
      { title: 'Scholarships & Financial Aid', key: 'scholarships' as const },
      { title: 'Sustainability & Green Campus', key: 'sustainability' as const },
      { title: 'Vision 2030 & Global Outlook', key: 'vision' as const },
    ];
    return generateImprovedBrochurePDF('Indian Institute of Technology Kharagpur (IIT Kharagpur)', data, sections);
  }, [getIITKharagpurBrochureData]);

  const handleDownload = React.useCallback(async () => {
    // For IIT Kharagpur, generate PDF from data
    if (collegeName.toLowerCase().includes('iit kharagpur')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITKharagpurPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT Kanpur, generate PDF from data
    if (collegeName.toLowerCase().includes('iit kanpur')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITKanpurPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT Bombay, generate PDF from data
    if (collegeName.toLowerCase().includes('iit bombay')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITBombayPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT Delhi, generate PDF from data
    if (collegeName.toLowerCase().includes('iit delhi')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITDelhiPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT Madras, generate PDF from data
    if (collegeName.toLowerCase().includes('iit madras')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITMadrasPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT Hyderabad, generate PDF from data
    if (collegeName.toLowerCase().includes('iit hyderabad')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITHyderabadPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT Roorkee, generate PDF from data
    if (collegeName.toLowerCase().includes('iit roorkee')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITRookeePDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT Guwahati, generate PDF from data
    if (collegeName.toLowerCase().includes('iit guwahati')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITGuwahatiPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For IIT (BHU) Varanasi, generate PDF from data
    if (collegeName.toLowerCase().includes('iit bhu') || collegeName.toLowerCase().includes('varanasi')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateIITBHUVaranasiPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For NIT Trichy, generate PDF from data
    if (collegeName.toLowerCase().includes('nit trichy') || collegeName.toLowerCase().includes('nit tiruchirappalli')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateNITTrichyPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For BITS Pilani, generate PDF from data
    if (collegeName.toLowerCase().includes('bits pilani') || collegeName.toLowerCase().includes('bits')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateBITSPilaniPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For VIT Vellore, generate PDF from data
    if (collegeName.toLowerCase().includes('vit vellore') || collegeName.toLowerCase().includes('vit')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateVITVellorePDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For Thapar Institute (TIET), generate PDF from data
    if (collegeName.toLowerCase().includes('thapar') || collegeName.toLowerCase().includes('tiet')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateThaparPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For Amrita Vishwa Vidyapeetham, generate PDF from data
    if (collegeName.toLowerCase().includes('amrita') || collegeName.toLowerCase().includes('amrita vishwa')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateAmritaPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For SOA (Siksha 'O' Anusandhan), generate PDF from data
    if (collegeName.toLowerCase().includes('soa') || collegeName.toLowerCase().includes('siksha') || collegeName.toLowerCase().includes('anusandhan')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateSOAPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For Amity University, Noida, generate PDF from data
    if (collegeName.toLowerCase().includes('amity') || collegeName.toLowerCase().includes('amity university')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateAmityNoidaPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For Chandigarh University (CU), generate PDF from data
    if (collegeName.toLowerCase().includes('chandigarh university') || collegeName.toLowerCase().includes('chandigarh') || (collegeName.toLowerCase().includes('cu') && !collegeName.toLowerCase().includes('cucet'))) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateChandigarhUniversityPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For KL University (KLEF), generate PDF from data
    if (collegeName.toLowerCase().includes('kl university') || collegeName.toLowerCase().includes('klef') || collegeName.toLowerCase().includes('klu') || collegeName.toLowerCase().includes('k l university') || collegeName.toLowerCase().includes('koneru')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateKLUniversityPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For Kalasalingam Academy of Research and Education (KARE), generate PDF from data
    if (collegeName.toLowerCase().includes('kalasalingam') || collegeName.toLowerCase().includes('kare') || collegeName.toLowerCase().includes('kalasalingam academy')) {
      setIsGeneratingPdf(true);
      try {
        const pdf = generateKalasalingamAcademyPDF();
        pdf.save(`${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`);
        
        // Close modal after successful download
        setTimeout(() => {
          onClose();
        }, 500);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate brochure. Please try again later.');
      } finally {
        setIsGeneratingPdf(false);
      }
      return;
    }

    // For other colleges, try to download existing PDF
    if (!pdfExists) return;

    setIsDownloading(true);
    try {
      // Try backend API first, then fallback to public folder
      const collegeSlug = getCollegeSlug(collegeName);
      const apiPath = `/api/colleges/download/${collegeSlug}`;
      const publicPath = brochurePath;
      
      let response = await fetch(apiPath);
      
      // If API fails, try public folder
      if (!response.ok) {
        response = await fetch(publicPath);
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${collegeName.replace(/\s+/g, '_').replace(/[()]/g, '')}_Brochure.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      // Close modal after successful download
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (error) {
      console.error('Error downloading brochure:', error);
      alert('Failed to download brochure. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  }, [pdfExists, collegeName, brochurePath, getCollegeSlug, onClose, generateIITKharagpurPDF, generateIITKanpurPDF, generateIITHyderabadPDF, generateIITMadrasPDF, generateIITDelhiPDF, generateIITBombayPDF, generateIITRookeePDF, generateIITGuwahatiPDF, generateIITBHUVaranasiPDF, generateNITTrichyPDF, generateBITSPilaniPDF, generateVITVellorePDF, generateThaparPDF, generateAmritaPDF, generateSOAPDF, generateAmityNoidaPDF, generateChandigarhUniversityPDF, generateKLUniversityPDF, generateKalasalingamAcademyPDF]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Get college overview text
  const getOverviewText = () => {
    // Check if it's IIT Kharagpur
    if (collegeName.toLowerCase().includes('iit kharagpur')) {
      const data = getIITKharagpurBrochureData();
      return data.about;
    }

    // Check if it's IIT Kanpur
    if (collegeName.toLowerCase().includes('iit kanpur')) {
      const data = getIITKanpurBrochureData();
      return data.about;
    }

    // Check if it's IIT Bombay
    if (collegeName.toLowerCase().includes('iit bombay')) {
      const data = getIITBombayBrochureData();
      return data.about;
    }
    
    // Check if it's IIT Delhi
    if (collegeName.toLowerCase().includes('iit delhi')) {
      const data = getIITDelhiBrochureData();
      return data.about;
    }
    
    // Check if it's IIT Madras
    if (collegeName.toLowerCase().includes('iit madras')) {
      const data = getIITMadrasBrochureData();
      return data.about;
    }
    
    // Check if it's IIT Hyderabad
    if (collegeName.toLowerCase().includes('iit hyderabad')) {
      const data = getIITHyderabadBrochureData();
      return data.about;
    }
    
    // Check if it's IIT Roorkee
    if (collegeName.toLowerCase().includes('iit roorkee')) {
      const data = getIITRookeeBrochureData();
      return data.about;
    }

    // Check if it's IIT (BHU) Varanasi
    if (collegeName.toLowerCase().includes('iit bhu') || collegeName.toLowerCase().includes('varanasi')) {
      const data = getIITBHUVaranasibrochureData();
      return data.about;
    }

    // Check if it's NIT Trichy
    if (collegeName.toLowerCase().includes('nit trichy') || collegeName.toLowerCase().includes('nit tiruchirappalli')) {
      const data = getNITTrichybrochureData();
      return data.about;
    }

    // Check if it's BITS Pilani
    if (collegeName.toLowerCase().includes('bits pilani') || collegeName.toLowerCase().includes('bits')) {
      const data = getBITSPilanibrochureData();
      return data.about;
    }

    // Check if it's VIT Vellore
    if (collegeName.toLowerCase().includes('vit vellore') || collegeName.toLowerCase().includes('vit')) {
      const data = getVITVellorebrochureData();
      return data.about;
    }

    // Check if it's Thapar Institute (TIET)
    if (collegeName.toLowerCase().includes('thapar') || collegeName.toLowerCase().includes('tiet')) {
      const data = getThaparbrochureData();
      return data.about;
    }

    // Check if it's Amrita Vishwa Vidyapeetham
    if (collegeName.toLowerCase().includes('amrita') || collegeName.toLowerCase().includes('amrita vishwa')) {
      const data = getAmritabrochureData();
      return data.about;
    }

    // Check if it's SOA (Siksha 'O' Anusandhan)
    if (collegeName.toLowerCase().includes('soa') || collegeName.toLowerCase().includes('siksha') || collegeName.toLowerCase().includes('anusandhan')) {
      const data = getSOAbrochureData();
      return data.about;
    }

    // Check if it's Amity University, Noida
    if (collegeName.toLowerCase().includes('amity') || collegeName.toLowerCase().includes('amity university')) {
      const data = getAmityNoidabrochureData();
      return data.about;
    }

    // Check if it's Chandigarh University (CU)
    if (collegeName.toLowerCase().includes('chandigarh university') || collegeName.toLowerCase().includes('chandigarh') || (collegeName.toLowerCase().includes('cu') && !collegeName.toLowerCase().includes('cucet'))) {
      const data = getChandigarhUniversitybrochureData();
      return data.about;
    }

    // Check if it's KL University (KLEF)
    if (collegeName.toLowerCase().includes('kl university') || collegeName.toLowerCase().includes('klef') || collegeName.toLowerCase().includes('klu') || collegeName.toLowerCase().includes('k l university') || collegeName.toLowerCase().includes('koneru')) {
      const data = getKLUniversitybrochureData();
      return data.about;
    }

    // Check if it's Kalasalingam Academy of Research and Education (KARE)
    if (collegeName.toLowerCase().includes('kalasalingam') || collegeName.toLowerCase().includes('kare') || collegeName.toLowerCase().includes('kalasalingam academy')) {
      const data = getKalasalingamAcademybrochureData();
      return data.about;
    }
    
    if (collegeData?.About?.Description) {
      return collegeData.About.Description;
    }
    
    // Default text
    return `This institution is a premier engineering and technology university, offering programs across multiple disciplines.`;
  };

  // Don't render if modal is not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 id="brochure-modal-title" className="text-2xl font-semibold text-gray-900">
            {collegeName} Brochure Preview
          </h2>
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
            type="button"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6" ref={brochureContentRef}>
          {collegeName.toLowerCase().includes('iit kharagpur') ? (
            // Comprehensive IIT Kharagpur brochure content
            (() => {
              const data = getIITKharagpurBrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology Kharagpur (IIT Kharagpur)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT Kharagpur
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision 2030 & Global Outlook</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('iit kanpur') ? (
            // Comprehensive IIT Kanpur brochure content
            (() => {
              const data = getIITKanpurBrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology Kanpur (IIT Kanpur)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT Kanpur
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision 2030 & Global Outlook</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('iit bombay') ? (
            // Comprehensive IIT Bombay brochure content
            (() => {
              const data = getIITBombayBrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology Bombay (IIT Bombay)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT Bombay
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Sustainability */}
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                  </div>

                  {/* Vision */}
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision 2030 & Global Outlook</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('iit delhi') ? (
            // Comprehensive IIT Delhi brochure content
            (() => {
              const data = getIITDelhiBrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology Delhi (IIT Delhi)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT Delhi
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty, Research & Innovation</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Vision */}
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('iit madras') ? (
            // Comprehensive IIT Madras brochure content
            (() => {
              const data = getIITMadrasBrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology Madras (IIT Madras)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT Madras
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Vision */}
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Global Outreach & Vision 2030</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('iit hyderabad') ? (
            // Comprehensive IIT Hyderabad brochure content
            (() => {
              const data = getIITHyderabadBrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology Hyderabad (IIT Hyderabad)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT Hyderabad
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Opportunities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Excellence</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Vision */}
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Global Outlook & Vision</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('iit roorkee') ? (
            // Comprehensive IIT Roorkee brochure content
            (() => {
              const data = getIITRookeeBrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology Roorkee (IIT Roorkee)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT Roorkee
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Smart Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision 2030 & Global Outlook</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('iit bhu') || collegeName.toLowerCase().includes('varanasi') ? (
            // Comprehensive IIT (BHU) Varanasi brochure content
            (() => {
              const data = getIITBHUVaranasibrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Indian Institute of Technology (BHU) Varanasi
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About IIT (BHU) Varanasi
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('nit trichy') || collegeName.toLowerCase().includes('nit tiruchirappalli') ? (
            // Comprehensive NIT Trichy brochure content
            (() => {
              const data = getNITTrichybrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      National Institute of Technology, Tiruchirappalli (NIT Trichy)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About NIT Trichy
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Cutoffs (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('bits pilani') || collegeName.toLowerCase().includes('bits') ? (
            // Comprehensive BITS Pilani brochure content
            (() => {
              const data = getBITSPilanibrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Birla Institute of Technology and Science (BITS) Pilani
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About BITS Pilani
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('vit vellore') || collegeName.toLowerCase().includes('vit') ? (
            // Comprehensive VIT Vellore brochure content
            (() => {
              const data = getVITVellorebrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Vellore Institute of Technology (VIT) Vellore
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About VIT Vellore
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Excellence</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Smart Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('thapar') || collegeName.toLowerCase().includes('tiet') ? (
            // Comprehensive Thapar Institute (TIET) brochure content
            (() => {
              const data = getThaparbrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Thapar Institute of Engineering and Technology (TIET), Patiala
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About Thapar Institute (TIET)
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('amrita') || collegeName.toLowerCase().includes('amrita vishwa') ? (
            // Comprehensive Amrita Vishwa Vidyapeetham brochure content
            (() => {
              const data = getAmritabrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Amrita Vishwa Vidyapeetham (Deemed-to-be University), Coimbatore
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About Amrita Vishwa Vidyapeetham
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('soa') || collegeName.toLowerCase().includes('siksha') || collegeName.toLowerCase().includes('anusandhan') ? (
            // Comprehensive SOA (Siksha 'O' Anusandhan) brochure content
            (() => {
              const data = getSOAbrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Siksha 'O' Anusandhan (SOA Deemed to be University), Bhubaneswar
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About Siksha 'O' Anusandhan (SOA)
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('amity') || collegeName.toLowerCase().includes('amity university') ? (
            // Comprehensive Amity University, Noida brochure content
            (() => {
              const data = getAmityNoidabrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Amity University, Noida (Amity University Uttar Pradesh)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About Amity University, Noida
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('chandigarh university') || collegeName.toLowerCase().includes('chandigarh') || (collegeName.toLowerCase().includes('cu') && !collegeName.toLowerCase().includes('cucet')) ? (
            // Comprehensive Chandigarh University (CU) brochure content
            (() => {
              const data = getChandigarhUniversitybrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Chandigarh University (CU), Gharuan – Mohali, Punjab
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About Chandigarh University (CU)
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('kl university') || collegeName.toLowerCase().includes('klef') || collegeName.toLowerCase().includes('klu') || collegeName.toLowerCase().includes('k l university') || collegeName.toLowerCase().includes('koneru') ? (
            // Comprehensive KL University (KLEF) brochure content
            (() => {
              const data = getKLUniversitybrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Koneru Lakshmaiah Education Foundation (KLEF) / K L (Deemed-to-be) University
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About KL University (KLEF)
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : collegeName.toLowerCase().includes('kalasalingam') || collegeName.toLowerCase().includes('kare') || collegeName.toLowerCase().includes('kalasalingam academy') ? (
            // Comprehensive Kalasalingam Academy of Research and Education (KARE) brochure content
            (() => {
              const data = getKalasalingamAcademybrochureData();
              return (
                <div className="space-y-6">
                  {/* Title */}
                  <div className="text-center mb-6 pb-4 border-b-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Kalasalingam Academy of Research and Education (KARE)
                    </h2>
                  </div>

                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      About Kalasalingam Academy of Research and Education (KARE)
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.about}</p>
                  </div>

                  {/* Academics */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Programs & Fees (2025–26)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.academics}</p>
                  </div>

                  {/* Admissions */}
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Admissions & Selection Criteria (2025)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.admissions}</p>
                  </div>

                  {/* Placements */}
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Placements & Career Outcomes (2024–25)</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.placements}</p>
                  </div>

                  {/* Rankings */}
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rankings & Recognition</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.rankings}</p>
                  </div>

                  {/* Campus */}
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Campus & Infrastructure</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campus}</p>
                  </div>

                  {/* Faculty */}
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Faculty & Research Ecosystem</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.faculty}</p>
                  </div>

                  {/* Campus Life */}
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Student Life & Campus Culture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.campusLife}</p>
                  </div>

                  {/* Clubs */}
                  {data.clubs && (
                    <div className="p-4 bg-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Student Clubs & Societies</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.clubs}</p>
                    </div>
                  )}

                  {/* Events */}
                  {data.events && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Annual Events & Festivals</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.events}</p>
                    </div>
                  )}

                  {/* Research */}
                  {data.research && (
                    <div className="p-4 bg-cyan-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Research & Innovation</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.research}</p>
                    </div>
                  )}

                  {/* Scholarships */}
                  {data.scholarships && (
                    <div className="p-4 bg-lime-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Scholarships & Financial Aid</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.scholarships}</p>
                    </div>
                  )}

                  {/* Sustainability */}
                  {data.sustainability && (
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability & Green Campus</h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.sustainability}</p>
                    </div>
                  )}

                  {/* Vision */}
                  <div className="p-4 bg-purple-50 rounded-lg border-t-4 border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Vision & Strategic Priorities</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{data.vision}</p>
                  </div>
                </div>
              );
            })()
          ) : (
            // Default content for other colleges
            <>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">College Overview</h3>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {getOverviewText()}
                  </p>
                </div>
              </div>

              {/* Course Information */}
              {collegeData && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {collegeData.Rankings?.NIRF2025?.Overall && (
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        NIRF Rank #{collegeData.Rankings.NIRF2025.Overall}
                      </li>
                    )}
                    {collegeData.Rankings?.NIRF2025?.Engineering && (
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Engineering Rank #{collegeData.Rankings.NIRF2025.Engineering}
                      </li>
                    )}
                    {collegeData.Location?.City && collegeData.Location?.State && (
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Location: {collegeData.Location.City}, {collegeData.Location.State}
                      </li>
                    )}
                    {collegeData.About?.StudentStrength && (
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Student Strength: {collegeData.About.StudentStrength}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Download Section */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            {collegeName.toLowerCase().includes('iit bombay') || collegeName.toLowerCase().includes('iit delhi') || collegeName.toLowerCase().includes('iit madras') || collegeName.toLowerCase().includes('iit hyderabad') || collegeName.toLowerCase().includes('iit roorkee') || collegeName.toLowerCase().includes('iit guwahati') || collegeName.toLowerCase().includes('iit bhu') || collegeName.toLowerCase().includes('varanasi') || collegeName.toLowerCase().includes('nit trichy') || collegeName.toLowerCase().includes('nit tiruchirappalli') || collegeName.toLowerCase().includes('bits pilani') || collegeName.toLowerCase().includes('bits') || collegeName.toLowerCase().includes('vit vellore') || collegeName.toLowerCase().includes('vit') || collegeName.toLowerCase().includes('thapar') || collegeName.toLowerCase().includes('tiet') || collegeName.toLowerCase().includes('amrita') || collegeName.toLowerCase().includes('amrita vishwa') || collegeName.toLowerCase().includes('soa') || collegeName.toLowerCase().includes('siksha') || collegeName.toLowerCase().includes('anusandhan') || collegeName.toLowerCase().includes('amity') || collegeName.toLowerCase().includes('amity university') || collegeName.toLowerCase().includes('chandigarh university') || collegeName.toLowerCase().includes('chandigarh') || (collegeName.toLowerCase().includes('cu') && !collegeName.toLowerCase().includes('cucet')) || collegeName.toLowerCase().includes('kl university') || collegeName.toLowerCase().includes('klef') || collegeName.toLowerCase().includes('klu') || collegeName.toLowerCase().includes('k l university') || collegeName.toLowerCase().includes('koneru') || collegeName.toLowerCase().includes('kalasalingam') || collegeName.toLowerCase().includes('kare') || collegeName.toLowerCase().includes('kalasalingam academy') ? (
              // For IIT Bombay, IIT Delhi, IIT Madras, IIT Hyderabad, IIT Roorkee, IIT Guwahati, IIT (BHU) Varanasi, NIT Trichy, BITS Pilani, VIT Vellore, Thapar Institute (TIET), Amrita Vishwa Vidyapeetham, SOA (Siksha 'O' Anusandhan), Amity University, Noida, Chandigarh University (CU), KL University (KLEF) and Kalasalingam Academy of Research and Education (KARE), always show download button (PDF will be generated)
              <div className="flex flex-col items-center">
                <p className="text-gray-700 mb-4 text-center">
                  Click the button below to download the complete brochure in PDF format.
                </p>
                <button
                  ref={downloadButtonRef}
                  onClick={handleDownload}
                  disabled={isGeneratingPdf}
                  className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Brochure'}
                </button>
              </div>
            ) : pdfExists === false ? (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-4">Brochure currently unavailable.</p>
                <p className="text-sm text-gray-500">
                  The brochure is being updated. Please check back later or contact admissions for more information.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <p className="text-gray-700 mb-4 text-center">
                  Click the button below to download the complete brochure in PDF format.
                </p>
                <button
                  ref={downloadButtonRef}
                  onClick={handleDownload}
                  disabled={isDownloading || pdfExists === false}
                  className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {isDownloading ? 'Downloading...' : 'Download PDF'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;

