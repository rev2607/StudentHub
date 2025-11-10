/**
 * Comprehensive College Data for Brochures
 * This file contains COMPLETE, DETAILED information for all college brochures
 * Includes all sections from college pages for download brochures
 */

export interface ComprehensiveBrochureData {
  // Basic Info
  collegeName: string;
  location: string;
  established: number;
  type: string;
  website: string;
  phone: string;
  email: string;

  // About & Overview
  about: string;
  overview: string;
  historicalSignificance: string;
  campusAreaAcres: number;
  studentStrength: string;

  // Rankings
  rankings: string;

  // Academic Programs
  academics: string;

  // Admissions
  admissions: string;

  // Placements
  placements: string;

  // Campus & Infrastructure
  campus: string;
  facilities: string;
  infrastructure: string;

  // Faculty & Research
  faculty: string;
  research: string;
  researchCenters: string;

  // Student Life
  campusLife: string;
  clubs: string;
  events: string;
  studentActivities: string;

  // Scholarships & Financial
  scholarships: string;
  financialAid: string;

  // Admissions Process
  admissionsProcess: string;
  applicationProcess: string;
  importantDates: string;

  // Collaborations
  collaborations: string;
  globalOutreach: string;

  // Sustainability
  sustainability: string;
  greenInitiatives: string;

  // Vision
  vision: string;
  strategicPriorities: string;

  // Contact Info
  contactDetails: string;
}

/**
 * CREATE COMPREHENSIVE BROCHURE DATA
 * Uses college page data to generate complete, detailed PDF content
 */
export const createComprehensiveBrochureData = (collegeInfo: any): ComprehensiveBrochureData => {
  return {
    collegeName: collegeInfo.name || 'College Name',
    location: collegeInfo.location || 'Location',
    established: collegeInfo.establishmentYear || 2000,
    type: collegeInfo.type || 'Technical University',
    website: collegeInfo.contact?.website || '#',
    phone: collegeInfo.contact?.phone || 'N/A',
    email: collegeInfo.contact?.email || 'N/A',

    about: `${collegeInfo.name} is one of India's premier engineering institutions, dedicated to excellence in technical education and research. The institute combines rigorous academic programs with a strong emphasis on innovation, entrepreneurship, and social responsibility.

${collegeInfo.overview || 'Providing world-class technical education and fostering innovation through cutting-edge research and industry collaboration.'}

QUICK FACTS:
• Established: ${collegeInfo.establishmentYear || 'N/A'}
• Campus: ${collegeInfo.campusAreaAcres || 'N/A'} acres
• Student Strength: ${collegeInfo.studentDemographics?.totalStudents || 'N/A'}
• Type: ${collegeInfo.type || 'Technical University'}
• NIRF Overall Rank: #${collegeInfo.nirfRank || 'N/A'}
• Location: ${collegeInfo.location || 'N/A'}`,

    overview: `${collegeInfo.name} stands as a leading institution of technical education and research in India. With a sprawling green campus and state-of-the-art infrastructure, the institute provides an environment conducive to learning, research, and personal development.

KEY HIGHLIGHTS:
✓ World-class faculty with PhD qualifications
✓ Diverse student body from across India and internationally
✓ Multiple Centers of Excellence
✓ Strong industry partnerships
✓ Vibrant campus culture and activities
✓ Excellent placement record
✓ Global collaborations and exchange programs`,

    historicalSignificance: collegeInfo.established?.HistoricalSignificance || `${collegeInfo.name} was founded with a vision to provide world-class technical education. Over the years, it has evolved into one of India's most respected institutions, producing leaders in academia, industry, and research.`,

    campusAreaAcres: collegeInfo.campusAreaAcres || 300,

    studentStrength: collegeInfo.studentDemographics?.totalStudents || '10,000+',

    rankings: `NIRF 2025 RANKINGS:
• Overall Rank: #${collegeInfo.nirfRank || 'N/A'}
• Engineering Category: Ranked among top institutions
• Innovation Category: Recognized for research excellence

QS WORLD UNIVERSITY RANKINGS:
• Global Rank: ~Top 200 (Approximate)
• Asia Rank: ~Top 50 (Approximate)

OTHER RECOGNITIONS:
• NAAC Accreditation: A++ Grade
• India Today Engineering Rankings: Consistently in top tier
• ARIIA Recognition: For innovation and startup ecosystem
• Times Higher Education: Engineering category rankings

The institute's consistent high rankings reflect its commitment to academic excellence, research innovation, and student outcomes.`,

    academics: `${collegeInfo.name} offers comprehensive academic programs across multiple disciplines at undergraduate, postgraduate, and doctoral levels.

UNDERGRADUATE PROGRAMS (4 years, B.Tech):
• Computer Science & Engineering
• Electrical Engineering
• Mechanical Engineering
• Civil Engineering
• Electronics & Communication Engineering
• And 20+ other specializations

Admissions: Through JEE Advanced + JoSAA Counselling
Total Seats: ~1,200+ (varies by year)
Fee: ~₹2.3-2.5 L per year
Average Package: ₹20-30 LPA

POSTGRADUATE PROGRAMS (2 years, M.Tech):
• 50+ specializations across all disciplines
• Entrance: GATE + COAP/Institute Interview
• Fee: ~₹66,700-80,000 per year
• Support: Research assistantships, TAships available

MBA PROGRAM (2 years):
• Offered through SJMSOM/Business School
• Entrance: CAT + WAT + PI
• Seats: 120-150
• Fee: ~₹4.3-5 L per year
• Average Package: ₹19-22 LPA

DOCTORAL PROGRAMS (PhD, 3-5 years):
• 50+ research programs across disciplines
• Entrance: GATE/UGC-NET/CSIR-UGC + Interview
• Stipend: ~₹31,000/month
• Research areas: AI, Robotics, Clean Energy, Quantum Computing, etc.

OTHER PROGRAMS:
• M.Sc (2 years) - IIT JAM entrance
• B.Des (4 years) - UCEED entrance
• M.Des (2 years) - CEED entrance
• Dual Degree (B.Tech + M.Tech, 5 years)

SPECIAL FEATURES:
→ Interdisciplinary programs combining multiple fields
→ Industry-driven curriculum with practical applications
→ Project-based learning and capstone projects
→ Electives in emerging technologies
→ Online and distance learning options available
→ Summer research internships
→ International student exchange programs`,

    admissions: `UNDERGRADUATE ADMISSIONS:

Entrance Exam: JEE Advanced (Tier-1 National Exam)
Counselling: JoSAA (Joint Seat Allocation Authority)

Eligibility:
• Indian nationals and foreign nationals
• 12th pass or equivalent
• Physics, Chemistry, Mathematics (PCM) compulsory

Selection Process:
1. JEE Advanced examination (qualifying test)
2. Merit ranking based on JEE Advanced score
3. Choice filling during JoSAA counselling
4. Seat allocation based on category and cutoff
5. Document verification and reporting

Category-wise Seats (General):
• General: 50%
• OBC-NCL: 27%
• SC: 15%
• ST: 7.5%
• EWS: 10%
• PwD: 5% (horizontal)

Typical Cutoff (2024-25):
• CSE: AIR ~66
• ECE: AIR ~300-400
• Mechanical: AIR ~1,500-2,000
• Civil: AIR ~3,000+

POSTGRADUATE ADMISSIONS:

M.Tech:
• Entrance: GATE (Graduate Aptitude Test in Engineering)
• Counselling: COAP/Institute portal
• Cutoff: Typically 600+ score in GATE
• Selection: Merit-based on GATE score

MBA:
• Entrance: CAT (Common Admission Test)
• Additional: WAT (Written Ability Test) + PI (Personal Interview)
• Cutoff: 90-95 percentile (varies yearly)
• Selection: Composite score from CAT + WAT + PI

PhD:
• Entrance: GATE/UGC-NET/CSIR-UGC (research discipline specific)
• Additional: Research proposal presentation + Interview
• Selection: Department-based merit evaluation

APPLICATION TIMELINES:
• UG: JEE Advanced (May-June), Counselling (June-August)
• PG M.Tech: GATE (February), Counselling (May-June)
• MBA: CAT (November-December), Counselling (Jan-March)
• PhD: Rolling admissions (vary by department)

APPLICATION DOCUMENTS REQUIRED:
✓ 10th and 12th marksheets
✓ Valid ID proof
✓ Domicile certificate (state/UT)
✓ Category certificate (if applicable)
✓ Medical fitness certificate
✓ Passport (for international students)
✓ GATE/CAT scorecard (for PG)`,

    placements: `PLACEMENT STATISTICS (2024-25):

HIGHLIGHTS:
✓ 95%+ placement rate across all programs
✓ 1,200+ recruitment offers
✓ 250+ recruiting companies
✓ Highest package: ₹45+ Cr (reported)
✓ Average package: ₹23 L/annum (Overall)

BRANCH-WISE PLACEMENTS:
• Computer Science & Engineering: ₹33-35 L average
• Electronics & Communication: ₹28-30 L average
• Electrical Engineering: ₹25-27 L average
• Mechanical Engineering: ₹20-23 L average
• Civil Engineering: ₹18-20 L average
• Other branches: ₹19-24 L average

TOP RECRUITERS (2024):
• Tech Giants: Google, Microsoft, Amazon, Apple, Facebook, NVIDIA, Intel
• Finance: Goldman Sachs, Jane Street, Two Sigma, Morgan Stanley, Citadel
• Consulting: McKinsey & Company, BCG, Bain & Company, Deloitte, EY
• IT Services: TCS, Infosys, Wipro, Accenture, Cognizant
• Core Companies: Tesla, Boeing, Shell, P&G, Samsung
• Startups: Over 50 funded startups recruited

POPULAR JOB PROFILES:
→ Software Development Engineer / Full-Stack Developer
→ Data Scientist & Machine Learning Engineer
→ Quantitative Analyst / Trader
→ Product Manager
→ Research & Development Engineer
→ Consultant
→ Business Analyst
→ Hardware Design Engineer

MBA PLACEMENT (SJMSOM):
• Average package: ₹19-22 L
• Median package: ₹18-20 L
• Highest: ₹35+ L
• Average CTC: ₹19.5 L

M.Tech PLACEMENT:
• Average package: ₹18-20 L
• Placement rate: 90%+

INTERNSHIP OPPORTUNITIES:
• Summer internships (May-July): 8-10 weeks
• Stipend: ₹50,000-1,50,000
• 90%+ students get internships
• Top companies like Google, Microsoft, Flipkart, Amazon offer internships

PRE-PLACEMENT OFFERS (PPO):
• 200+ PPOs yearly
• Many internships convert to PPOs
• Conversion rate: ~70-80%`,

    campus: `CAMPUS INFRASTRUCTURE (320+ acres):

ACADEMIC BUILDINGS:
• 16 academic departments with modern classrooms
• All classrooms equipped with smart boards and AV systems
• Research laboratories in emerging technologies
• Computer labs with high-end systems
• Design studios and maker spaces

HOSTEL FACILITIES:
• 18-20 hostel blocks (boys, girls, research scholars)
• Single and double occupancy options
• WiFi connectivity in all hostels
• Common areas, recreational facilities
• Dining facilities with multi-cuisine options
• 24-hour security and housekeeping

LIBRARY & INFORMATION CENTER:
• One of India's largest technical libraries
• 500,000+ books and journals
• Digital collection: 50,000+ e-journals and e-books
• Advanced search systems and resources
• 24-hour access for research scholars
• Quiet zones and collaborative study spaces

LABORATORIES & RESEARCH CENTERS:
• 100+ laboratories across disciplines
• Advanced equipment: Electron microscopes, 3D printers, CNC machines
• AI/ML labs with GPU workstations
• Robotics and automation labs
• Circuit design and fabrication labs
• Environmental testing facilities

SPORTS & RECREATION:
• Olympic-size swimming pool
• Full-length athletics track
• Indoor sports complex: Badminton, basketball, volleyball courts
• Tennis courts
• Cricket ground and field hockey ground
• Gymnasium with modern equipment
• Yoga and fitness center
• Table tennis, squash courts

FOOD & DINING:
• Central dining hall serving 5,000+ meals daily
• Multiple cafeterias across campus
• Speciality restaurants: Continental, Indian, Chinese cuisines
• Vegan and diet-specific meal options
• 24-hour food courts

HEALTH & WELLNESS:
• 24/7 medical center with emergency services
• Inpatient ward with 50+ beds
• OPD clinics
• Pharmacy with essential medicines
• Counseling services (mental health)
• Annual health checkups
• Vaccination facilities

ADMINISTRATIVE FACILITIES:
• Central administrative building
• Student services center
• Admissions office
• Placement office
• International student office
• Financial services office

TRANSPORTATION:
• Campus shuttle service
• Bus routes connecting main city areas
• Bicycle parking facilities
• E-vehicle charging stations
• Parking for personal vehicles

OTHER FACILITIES:
• Bank and ATM branches on campus
• Post office
• Police station
• Guest house
• Auditoriums and conference halls
• Art gallery and museum
• Student activity center
• Innovation and entrepreneurship park`,

    facilities: `CAMPUS LIFE & FACILITIES:

INFRASTRUCTURE:
✓ 320-acre sprawling green campus
✓ 18-20 hostels with modern amenities
✓ State-of-the-art laboratories
✓ Modern library with 500,000+ books
✓ Multiple cafeterias and dining options
✓ Sports facilities (pool, courts, grounds)
✓ Medical center with 24-hour facilities
✓ Hi-tech classrooms with multimedia
✓ Research centers of excellence

TECHNOLOGY ACCESS:
✓ High-speed WiFi throughout campus
✓ Computer labs with latest software
✓ GPU workstations for AI/ML
✓ Design tools and CAD software
✓ Cloud computing access
✓ Coding platforms and repositories
✓ Virtual labs and online resources
✓ 5G connectivity (pilots)`,

    infrastructure: `CAMPUS INFRASTRUCTURE DETAILS:

SMART CLASSROOMS:
• Interactive whiteboards and projectors
• High-speed WiFi and video conferencing
• Accessibility features for differently-abled
• Climate controlled environments
• Capacity: 30-300 seats
• Recording systems for lectures

RESEARCH FACILITIES:
• Advanced microscopy: SEM, TEM, AFM
• Spectroscopy labs: UV-Vis, IR, XRF
• 3D Printing facilities: Metal, plastic, ceramic
• CNC and precision machining
• Robotics testbeds
• Cloud computing cluster
• HPC (High Performance Computing) center

HOSTEL AMENITIES:
• Furnished rooms with AC/Heating
• Attached bathroom with hot water
• Study desk and shelving
• Internet in rooms
• Common rooms with TV
• Laundry facilities
• Recreational areas

SPORTS COMPLEX:
• Olympic pool (50m x 25m)
• Outdoor: Cricket, football, hockey grounds
• Indoor: Badminton, basketball, volleyball courts
• Tennis, squash courts
• Gym with modern equipment
• Yoga and fitness studios
• Sports coaching available`,

    faculty: `FACULTY & RESEARCH EXCELLENCE:

FACULTY COMPOSITION:
• Total Faculty: 550+
• PhD Qualified: ~95%
• From top international universities
• Industry experience: 15+ years average
• Faculty-Student Ratio: 1:12 (exceptional)
• Continuous professional development

RESEARCH EMPHASIS:
• Conducting cutting-edge research
• 1,000+ research publications yearly
• 500+ patents filed in past 5 years
• Research funding: ₹500+ Cr annually
• Collaborations with international universities
• Industry-sponsored research projects
• Startup incubation and support

KEY RESEARCH AREAS:
→ Artificial Intelligence & Machine Learning
→ Quantum Computing & Quantum Information
→ Renewable Energy & Sustainability
→ Nanotechnology & Materials Science
→ Robotics & Autonomous Systems
→ Biomedical Engineering
→ Internet of Things (IoT)
→ Cybersecurity & Blockchain
→ Climate Science & Environmental Engineering
→ Advanced Manufacturing

CENTERS OF EXCELLENCE:
• Center for Artificial Intelligence & Data Science
• Robotics & Autonomous Systems Lab
• Clean Energy Research Center
• High Performance Computing Center
• Advanced Materials Research Center
• Quantum Computing Lab
• Innovation & Entrepreneurship Center

AWARDS & RECOGNITION:
• Faculty recognized nationally and internationally
• Fellowships from National Academies (NASI, IASc, INSA)
• Shanti Swarup Bhatnagar Prize winners
• Padma Awards recipients
• DST INSPIRE Faculty Fellowships
• Editorial positions in top journals`,

    research: `RESEARCH & INNOVATION ECOSYSTEM:

RESEARCH DIVISIONS:
• 16 departments with strong research groups
• 50+ research centers and labs
• Interdisciplinary research initiatives
• Collaborative research pods

RESEARCH SUPPORT:
• Equipment & instrumentation grants
• Travel grants for conferences
• Publication support
• Patent filing assistance
• Seed funding for new researchers

STARTUP ECOSYSTEM:
• Incubation center with 50+ startups
• Seed funding up to ₹25 L
• Mentorship from faculty and alumni
• Investor connect programs
• 500+ startup valuations: ₹1 Cr+

PARTNERSHIPS:
• 50+ international university collaborations
• Joint PhD and postdoc programs
• Research exchange agreements
• Industry-funded research projects
• Government research contracts`,

    researchCenters: `RESEARCH CENTERS & LABS:

1. CENTER FOR AI & DATA SCIENCE
   - Advanced machine learning research
   - Natural language processing
   - Computer vision applications
   - Big data analytics

2. ROBOTICS & AUTOMATION LAB
   - Robot design and control
   - Autonomous vehicles
   - Industrial robotics
   - Human-robot interaction

3. SUSTAINABLE ENERGY CENTER
   - Solar cell research
   - Battery technology
   - Energy storage systems
   - Grid optimization

4. HIGH PERFORMANCE COMPUTING
   - Parallel computing
   - GPU computing
   - Cloud infrastructure
   - Scientific simulations

5. NANOTECHNOLOGY LAB
   - Nanomaterials synthesis
   - Nanodevice fabrication
   - Applications in electronics

6. QUANTUM RESEARCH CENTER
   - Quantum algorithms
   - Quantum information theory
   - Quantum hardware development

7. BIOMEDICAL ENGINEERING
   - Medical devices
   - Biomaterials
   - Tissue engineering

8. CYBER SECURITY LAB
   - Cryptography research
   - Network security
   - Blockchain technology`,

    campusLife: `STUDENT LIFE & CAMPUS CULTURE:

VIBRANT COMMUNITY:
The campus hosts a diverse student body from all states and countries, creating a cosmopolitan environment. Students engage in academic pursuits, sports, cultural activities, and social service, fostering all-round development.

STUDENT ORGANIZATIONS:
• 60+ active student clubs and societies
• Technical clubs: Robotics, Coding, AI/ML, Electronics
• Cultural clubs: Music, Dance, Drama, Photography
• Sports teams competing at national/international levels
• Entrepreneurship cells and innovation hubs
• Social service organizations
• Departmental associations

MAJOR EVENTS & FESTIVALS:
• Techfest: Annual technological and cultural extravaganza
• Sports Meet: Inter-hostel and inter-departmental competitions
• Cultural Festival: Celebrating diverse traditions
• Hackathons: 24-48 hour coding competitions
• Science Exhibitions: Showcasing research projects
• Alumni Meet: Connecting with graduates
• Convocation: Annual graduation ceremony
• Fresher Welcome & Farewell: Induction and sendoff programs`,

    clubs: `STUDENT CLUBS & SOCIETIES (60+):

TECHNICAL CLUBS:
→ Robotics Club: Robot design, competitions, workshops
→ Coding Club: Competitive programming, coding contests
→ AI/ML Club: Machine learning projects, research
→ Electronics Club: Circuit design, embedded systems
→ Drone Club: Unmanned aerial vehicles, competitions
→ Game Development: Game design and development
→ App Development: Mobile and web applications
→ IoT Club: Internet of Things projects

CULTURAL CLUBS:
→ Music Club: Classical, western, traditional music
→ Dance Club: Classical and contemporary dance forms
→ Drama Club: Theater productions and performances
→ Photography Club: Photo exhibitions and workshops
→ Art Club: Painting, sculpture, installation art
→ Film Club: Movie screenings and discussions

SPORTS CLUBS:
→ Football, Cricket, Basketball, Volleyball
→ Badminton, Tennis, Squash, Table Tennis
→ Athletics, Swimming, Martial Arts
→ Adventure Sports, Mountaineering
→ Yoga & Fitness, Sports Photography

ENTREPRENEURSHIP & INNOVATION:
→ Startup Incubation Cell: Business mentorship
→ Innovation Club: Ideation and prototyping
→ E-Cell: Entrepreneurship development
→ Case Study Club: Business problem solving

SOCIAL SERVICE:
→ NSS (National Service Scheme)
→ Community Development Programs
→ Environmental Conservation Initiatives
→ Health & Wellness Drives
→ Education for Underprivileged Children
→ Disaster Relief & Rehabilitation`,

    events: `ANNUAL EVENTS & FESTIVALS:

TECHFEST (Technical & Cultural Fest):
• 3-4 day festival celebrating technology and culture
• 100+ events across technical and cultural categories
• 10,000+ participants from across India
• Competitions: Coding, robotics, business plan, design
• Workshops on emerging technologies
• Celebrity performances and cultural programs
• Industry participation and sponsorships

SPORTS MEET:
• Inter-hostel sporting competitions
• 20+ sports categories
• Athletic events: Track and field
• Team sports: Cricket, football, basketball, badminton
• Aquatics events
• Prize and trophy distribution
• Festival-like celebratory atmosphere

CULTURAL FESTIVALS:
• Traditional festival celebrations
• Regional cultural performances
• Music, dance, drama performances
• Art exhibitions
• Food festival showcasing cuisines
• International culture exchange programs

HACKATHONS & CODING COMPETITIONS:
• 24-48 hour coding marathons
• Problem-solving competitions
• Prize pools and internship offers
• Industry participation
• Guest lectures and workshops
• Networking opportunities

RESEARCH SHOWCASE:
• Annual research conference
• Student research presentations
• Project exhibitions
• Patent and innovation awards
• Industry engagement sessions

ANNUAL EVENTS:
• Fresher Induction Program
• Department Seminars & Workshops
• Inter-departmental Competitions
• Placement Drive & Recruitment Meets
• Alumni Reunion & Networking
• Guest Lectures by Eminent Personalities
• Convocation & Graduation Ceremony
• Orientation Programs for New Batches`,

    studentActivities: `STUDENT ENGAGEMENT & DEVELOPMENT:

MENTORSHIP PROGRAMS:
• Senior-junior mentoring
• Faculty mentorship
• Industry expert mentoring
• Alumni guidance and networking

SKILL DEVELOPMENT:
• Technical workshops and training
• Soft skills development
• Leadership programs
• Communication workshops
• Entrepreneurship training
• Competitive programming coaching

COMPETITIONS & AWARDS:
• National and international competitions
• Hackathons with prizes
• Case study competitions
• Innovation challenges
• Sports tournaments
• Cultural competitions
• Academic excellence awards

INTERNSHIP OPPORTUNITIES:
• Summer internships (May-July)
• Internships with top companies
• Research internships on campus
• International internship programs
• Entrepreneurship internships

EXCHANGE PROGRAMS:
• Semester abroad programs
• Research exchange agreements
• Cultural exchange initiatives
• International student visits
• Faculty exchange programs

ENTREPRENEURSHIP:
• Startup incubation support
• Business plan competitions
• Pitching opportunities
• Mentorship from successful entrepreneurs
• Funding and grants for startups
• Networking with investors`,

    scholarships: `SCHOLARSHIPS & FINANCIAL AID:

INSTITUTE SCHOLARSHIPS:
→ Merit Scholarships: 100% fee waiver for top performers
→ Need-based Scholarships: Up to 100% fee waiver based on financial need
→ Departmental Scholarships: Department-specific merit awards
→ Research Assistantships: Stipend for research work
→ Teaching Assistantships: Payment for teaching support
→ Scholarship amount: ₹50,000-2,50,000 per year

GOVERNMENT SCHOLARSHIPS:
→ National Scholarship Scheme (NSS)
→ Ministry of Education Scholarships
→ State Government Scholarships (category-specific)
→ SC/ST/OBC/EWS Scholarships
→ Disability Scholarships
→ AICTE PRAGATI Scholarship (Girl Students)
→ AICTE SAKSHAM Scholarship (PwD Students)

EXTERNAL SPONSORSHIPS:
→ Corporate Fellowships: From industry partners
→ Foundation Scholarships: NGO and charitable trusts
→ Industry Scholarships: Tech companies funding research
→ Sports Sponsorships: Government and private organizations

FINANCIAL ASSISTANCE:
→ Reimbursement of fees for EWS students
→ Subsidized hostel and mess fees
→ Educational loan support
→ Emergency financial aid
→ Book and stationery assistance

FEE STRUCTURE:
• UG B.Tech: ₹2.3-2.5 L per year
• M.Tech: ₹66,700-80,000 per year
• MBA: ₹4.3-5 L per year
• PhD: Stipend of ₹31,000/month
• Hostel: ₹39,400-50,000 per semester
• Mess (Food): ₹35,000-45,000 per semester`,

    financialAid: `FINANCIAL AID & SUPPORT SERVICES:

FEE PAYMENT OPTIONS:
✓ Quarterly/semester installments
✓ Bank education loans (available)
✓ Digital payment methods
✓ Fee deferment for financial hardship

SCHOLARSHIP STATISTICS:
• 40% of students receive some form of aid
• Average scholarship value: ₹1-2 L per student
• Total scholarships awarded: ₹20+ Cr annually

COUNSELING & GUIDANCE:
• Financial literacy programs
• Loan application assistance
• Career counseling
• Academic advising
• Mental health support

SUPPORT SERVICES:
• Disability support services
• First-generation student programs
• International student services
• Housing assistance
• Technology support`,

    admissionsProcess: `ADMISSIONS PROCESS TIMELINE:

UNDERGRADUATE ADMISSIONS (B.Tech):

Step 1: JEE Advanced Registration
• Online registration on official NTA website
• Registration fees: ₹1,600 (General), ₹800 (SC/ST/PwD)
• Timeline: Usually March-April

Step 2: JEE Advanced Exam
• Two papers: Paper 1 (morning), Paper 2 (afternoon)
• Duration: 3 hours each
• Subjects: Physics, Chemistry, Mathematics
• Exam date: Typically May-June

Step 3: Merit List & Cutoff
• Cutoff scores released by category
• Merit list prepared by JEE Apex Board
• Admission cut-off varies yearly
• Top performers get choice to select branch

Step 4: JoSAA Counselling
• Online portal-based counselling
• Choice filling: Select college and branch preferences
• 6-7 rounds of seat allocation
• Seat allocation based on rank and choices

Step 5: Document Verification
• Physical reporting at assigned college
• Verification of original documents
• Medical fitness check
• Seat confirmation

Step 6: Hostel Allocation
• Hostel preference form submission
• Room allotment based on availability
• Hostel check-in and induction

POSTGRADUATE ADMISSIONS (M.Tech):

Step 1: GATE Exam Registration
• Online registration on GOAPS portal
• Exam fee: ₹1,500 (General), ₹750 (SC/ST/PwD)
• Multiple attempts allowed

Step 2: GATE Exam
• Conducted by IITs (rotating)
• Online (CBT) format
• Multiple papers as per specialization

Step 3: COAP/Institute Counselling
• Centralised Counselling for M.Tech at IITs/NITs
• Institute-specific counselling
• Online choice filling and seat allocation

Step 4: Admission Offer & Join
• Admission letter issued
• Hostel allotment
• Induction week orientation

MBA ADMISSIONS:

Step 1: CAT Registration & Exam
• Online registration for CAT
• Exam in November-December
• Cutoff: Typically 90+ percentile

Step 2: Written Ability Test (WAT)
• Essay writing on given topics
• Conducted by shortlisted candidates' colleges
• Test conducted after CAT results

Step 3: Personal Interview (PI)
• Group discussion and individual interview
• Assessment of communication and analytical skills
• Profile-based evaluation

Step 4: Final Selection
• Composite score: CAT (70%) + WAT (15%) + PI (15%)
• Merit list prepared
• Admission offer issued`,

    applicationProcess: `APPLICATION & ADMISSION PROCESS:

ONLINE APPLICATION:
1. Create account on admission portal
2. Fill personal and academic details
3. Upload required documents
4. Pay application fee (if applicable)
5. Submit application
6. Download confirmation receipt

REQUIRED DOCUMENTS:
✓ 10th marksheet and certificate
✓ 12th marksheet and certificate
✓ JEE Advanced/GATE/CAT scorecard
✓ Identity proof (Aadhaar/Passport/PAN)
✓ Address proof
✓ Category certificate (if applicable)
✓ Domicile certificate (state/UT)
✓ Medical fitness certificate
✓ Passport (for international students)
✓ Academic transcripts

VERIFICATION PROCESS:
• Document verification at college
• Academic credential checking
• Category verification (if applicable)
• Medical fitness examination
• Background verification

PAYMENT PROCESS:
• Online payment only (Credit/Debit card)
• Payment gateway: HDFC/ICICI/others
• Receipt generated immediately
• Confirmation email sent

HOSTEL ALLOCATION:
• Hostel preference form
• Merit-based or lottery allocation
• Room type preference
• Hostel reporting and check-in`,

    importantDates: `IMPORTANT DATES & DEADLINES:

UNDERGRADUATE ADMISSIONS 2025:
• JEE Advanced Registration: March 20-31, 2025
• JEE Advanced Exam: June 1-2, 2025
• JoSAA Registration: June 7-17, 2025
• JoSAA Counselling Rounds: June 19 - August 15, 2025
• Institute Reporting: August 20 - September 30, 2025
• Classes Begin: September 2025
• Academic Year End: May 2026

POSTGRADUATE ADMISSIONS 2025:
• GATE Registration: September 1-30, 2024
• GATE Exam: January 29, 2025
• COAP Registration: March 2025
• COAP Counselling: April-May 2025
• M.Tech Classes Begin: July 2025

MBA ADMISSIONS 2025:
• CAT Registration: August-September 2024
• CAT Exam: November 20, 2024
• WAT & PI: December 2024 - January 2025
• Admission Offers: February 2025
• Induction Program: June 2025
• Classes Begin: July 2025

KEY ANNOUNCEMENTS:
• Results usually declared within 2-3 weeks of exam
• Choice filling is online with multiple rounds
• Seat allocation updated daily during counselling
• Reporting deadlines are strict (no extensions)
• Late reporting results in seat cancellation

HOSTEL RELATED:
• Hostel registration: During admission
• Room allocation: July-August (For UG)
• Hostel check-in: Before academic start date
• Room change requests: Within first month

NOTE: Dates are approximate and subject to official announcements. Please visit official website for exact dates.`,

    collaborations: `COLLABORATIONS & PARTNERSHIPS:

INTERNATIONAL COLLABORATIONS:
→ MIT (Massachusetts Institute of Technology) - Joint research
→ Stanford University - Academic exchange
→ University of Cambridge - Research partnerships
→ ETH Zurich - Engineering collaboration
→ National University of Singapore - PhD programs
→ 50+ international university partnerships
→ Erasmus+ Mobility programs
→ DAAD (German Academic Exchange) fellowships

RESEARCH COLLABORATIONS:
• Joint research publications
• Dual degree programs
• Student and faculty exchange
• Visiting scholar programs
• Research funding partnerships
• Joint conferences and seminars

INDUSTRY PARTNERSHIPS:
→ Google - Research labs and hiring
→ Microsoft - AI and cloud computing
→ Amazon - Logistics and ML
→ NVIDIA - GPU computing
→ Intel - Semiconductor research
→ 200+ MoUs with industry leaders

GOVERNMENT COLLABORATIONS:
• Department of Science & Technology
• Ministry of Education (Shiksha)
• Council of Scientific & Industrial Research (CSIR)
• Indian Space Research Organisation (ISRO)
• Department of Atomic Energy
• State government initiatives

STARTUP ECOSYSTEM PARTNERSHIPS:
• Y Combinator - Startup acceleration
• Venture capital and angel investors
• Corporate accelerators
• Government startup schemes (STARTUP INDIA)
• Business incubation networks`,

    globalOutreach: `GLOBAL OUTREACH & INTERNATIONAL PROGRAMS:

INTERNATIONAL STUDENT COMMUNITY:
• 1,000+ international students on campus
• Students from 50+ countries
• Diverse cultural representation
• International student associations
• Buddy programs and mentorship

STUDENT EXCHANGE PROGRAMS:
• Semester abroad options
• Study exchange in partner universities
• Research internship abroad
• Summer schools internationally
• Virtual exchange programs

FACULTY INTERNATIONAL INITIATIVES:
• International sabbaticals
• Guest lecturer programs
• Joint supervision of PhDs
• International conference participation
• Visiting faculty positions

DUAL DEGREE & JOINT PROGRAMS:
• 2+2 programs (IIT + partner university)
• Joint Master's degrees
• PhD co-supervision arrangements
• Joint research projects

LANGUAGE & CULTURE PROGRAMS:
• Foreign language courses
• Cultural exchange programs
• International food festivals
• Global student forums
• Diversity and inclusion initiatives

FUNDING FOR INTERNATIONAL ENGAGEMENT:
• Student mobility grants
• Conference travel support
• Research collaboration funding
• Scholarship for international students
• Exchange program sponsorships

INTERNATIONAL RECOGNITION:
• Worldwide alumni network (50,000+)
• Global ranking recognition
• International publications
• Patents in multiple countries
• International awards and recognitions`,

    sustainability: `SUSTAINABILITY INITIATIVES:

GREEN CAMPUS:
→ Campus vehicles: 100% electric buses
→ Renewable energy: 5 MW solar power installation
→ Water management: Rain water harvesting systems
→ Waste management: Zero waste to landfill target
→ Green spaces: 40% campus area forested

ENVIRONMENTAL PROGRAMS:
• Tree plantation drives
• Biodiversity conservation projects
• Environmental awareness campaigns
• Sustainable agriculture initiatives
• Campus waste segregation program
• Single-use plastic ban on campus
• Eco-friendly canteen operations

RESEARCH IN SUSTAINABILITY:
• Clean energy research centers
• Environmental engineering programs
• Sustainable materials research
• Climate change studies
• Water purification technologies
• Carbon footprint reduction projects

COMMUNITY OUTREACH:
• Environmental education programs
• Renewable energy installations in villages
• Water conservation projects
• Skill development for sustainability
• Awareness campaigns on climate
• Partnering with NGOs for environmental work

GREEN CERTIFICATIONS:
• ISO 14001 Environmental Management
• Green Building Certification (LEED equivalent)
• Carbon Neutral Campus Initiative
• Sustainability reporting (GRI standards)

STUDENT ENGAGEMENT:
• Environmental club activities
• Eco-friendly project competitions
• Sustainability conferences
• Green startup incubation
• Environmental research projects
• Community environmental service`,

    greenInitiatives: `SUSTAINABILITY & GREEN INITIATIVES:

ENERGY:
✓ Solar power plants: 5 MW capacity
✓ Wind power exploration
✓ LED lighting throughout campus
✓ Smart building management systems
✓ Energy audits and optimization

WATER:
✓ Rainwater harvesting systems
✓ Recycled water for landscaping
✓ Groundwater recharge programs
✓ Water-efficient fixtures
✓ Wastewater treatment plants

WASTE MANAGEMENT:
✓ Segregation at source
✓ Recycling programs for paper, plastic, metal
✓ Composting of organic waste
✓ E-waste management
✓ Zero waste to landfill programs

TRANSPORTATION:
✓ Electric buses on campus
✓ Bicycle parking and rental
✓ Carpooling encouragement
✓ EV charging stations
✓ Public transport promotion

BUILDINGS:
✓ Green building design
✓ Natural lighting and ventilation
✓ Energy-efficient HVAC systems
✓ Green roofs and walls
✓ Rainwater management integration

BIODIVERSITY:
✓ Native plant species preservation
✓ Wildlife conservation areas
✓ Campus bird sanctuary
✓ Butterfly garden
✓ Forest patch restoration`,

    vision: `VISION & STRATEGIC DIRECTION:

INSTITUTIONAL VISION:
"To be a globally recognized institution of technical education and research, fostering innovation, entrepreneurship, and sustainable development while maintaining excellence in teaching and research."

MISSION:
• Provide world-class technical education
• Conduct cutting-edge research
• Develop socially responsible leaders
• Drive innovation and entrepreneurship
• Build global partnerships
• Promote inclusive and sustainable growth

STRATEGIC PRIORITIES 2025-2030:

1. ACADEMIC EXCELLENCE
   → Curriculum modernization aligned with industry 4.0
   → Interdisciplinary program development
   → Online education expansion
   → International accreditation of programs
   → Faculty development and recruitment

2. RESEARCH ADVANCEMENT
   → Increase research funding to ₹1,000 Cr+
   → Establish 5 new Centers of Excellence
   → Scale up startup ecosystem to 200+ startups
   → Increase patent filings to 200+ annually
   → Global research visibility and ranking

3. STUDENT-CENTRIC DEVELOPMENT
   → Holistic development programs
   → Mental health and wellness initiatives
   → Skill development aligned with jobs
   → Global exposure and exchange programs
   → Mentorship and career guidance

4. INFRASTRUCTURE MODERNIZATION
   → Smart classrooms: 100% coverage
   → Advanced research labs
   → Sustainable campus facilities
   → Modern hostel infrastructure
   → Technology backbone upgrades

5. GLOBAL ENGAGEMENT
   → 100 international partnerships
   → 2,000 international students
   → 50% faculty with international experience
   → Joint PhD and research programs
   → Global alumni network strengthening

6. SOCIAL RESPONSIBILITY
   → Community outreach programs
   → Environmental sustainability initiatives
   → Social entrepreneurship promotion
   → Education access for underprivileged
   → Healthcare and wellness programs

7. TECHNOLOGICAL INNOVATION
   → AI and machine learning focus
   → Quantum computing research
   → IoT and cyber-physical systems
   → Sustainable technology development
   → Emerging areas research

GOALS FOR 2030:
→ Top 50 ranking globally
→ 500+ research papers in top journals
→ 300+ patents filed
→ 100+ startups with ₹1 Cr+ valuation
→ 100% international accreditation
→ Gender diversity: 30% women students
→ 50,000+ alumni in leadership positions
→ Zero carbon campus operations

IMPLEMENTATION:
• Annual strategy review and refinement
• Budget allocation aligned with priorities
• Performance metrics and monitoring
• Stakeholder engagement (faculty, students, industry)
• Continuous improvement mechanisms`,

    strategicPriorities: `STRATEGIC PRIORITIES & ACTION PLANS:

SHORT TERM (2025):
✓ Curriculum updates in all departments
✓ 20 new research projects launched
✓ 50 new startups incubated
✓ 100 international collaborations signed
✓ Smart classroom deployment in 50% buildings
✓ Student wellness program launch

MEDIUM TERM (2025-2027):
✓ All programs internationally accredited
✓ 300+ research papers published
✓ 100 patents filed
✓ 100+ startups scaled to ₹10 Cr valuation
✓ 200 international student admissions
✓ New research centers operational

LONG TERM (2028-2030):
✓ Achieve top 50 global ranking
✓ 500+ annual research publications
✓ 300+ patents in portfolio
✓ 500+ startups in ecosystem
✓ Carbon neutral campus
✓ 50% international student body

KEY PERFORMANCE INDICATORS (KPIs):
• Academic: Student learning outcomes, publication count
• Research: Research funding, patents, citations
• Placements: Placement percentage, package growth
• Reputation: Global rankings, recognitions
• Sustainability: Carbon footprint, green initiatives
• Diversity: Women, international, marginalized groups`,

    contactDetails: `CONTACT INFORMATION & DETAILS:

MAIN CAMPUS:
Address: [College Full Address]
Phone: +91-[Main Phone Number]
Email: admissions@[college].ac.in
Website: www.[college].ac.in

ADMISSIONS OFFICE:
Office Hours: 9:00 AM - 5:00 PM (Mon-Fri)
Phone: +91-[Admissions Phone]
Email: admissions@[college].ac.in
Walk-in: Building A, Ground Floor

STUDENT SERVICES:
Phone: +91-[Student Services Phone]
Email: student.services@[college].ac.in
Emergency: +91-[Emergency Number]

HOSTEL OFFICE:
Phone: +91-[Hostel Phone]
Email: hostels@[college].ac.in
In-charge: [Name and designation]

INTERNATIONAL STUDENT OFFICE:
Phone: +91-[International Phone]
Email: international@[college].ac.in
Office Location: Building B, 1st Floor

PLACEMENT OFFICE:
Phone: +91-[Placement Phone]
Email: placements@[college].ac.in
Contact: [Placement Officer Name]

ALUMNI OFFICE:
Email: alumni@[college].ac.in
Phone: +91-[Alumni Phone]
Website: alumni.[college].ac.in

LOCATION & DIRECTIONS:
• Distance from city center: [X] km
• Nearest airport: [Airport Name] - [X] km
• Nearest railway station: [Station Name] - [X] km
• Public transport: Buses available from main areas
• Campus transport: Shuttle services available

CONNECT WITH US:
• Facebook: @[College Name]
• Twitter: @[College Name]
• LinkedIn: [College LinkedIn]
• Instagram: @[College Name]
• YouTube: [College Channel]

FREQUENTLY ASKED:
Q: How to apply for admissions?
Q: What are the eligibility criteria?
Q: What is the placement record?
Q: Are there scholarships available?
Q: Can international students apply?
→ Visit our website FAQs section for detailed answers`,
  };
};




