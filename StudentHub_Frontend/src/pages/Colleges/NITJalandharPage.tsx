import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  Calendar, 
  Building, 
  TrendingUp,
  Phone,
  Mail,
  Globe,
  Download,
  ChevronRight
} from "lucide-react";
import AdmissionPredictorModal from "../../components/AdmissionPredictorModal";
import BrochureModal from "../../components/BrochureModal";

// Import NIT Jalandhar data service
import { loadNITJalandharData, type NITJalandharData } from "../../services/collegeDataService";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "text-blue-600"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {label}
  </button>
);

const InfoCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="bg-gray-50 rounded-lg p-3">
    <div className="text-gray-500 text-xs font-medium">{label}</div>
    <div className="font-semibold text-gray-900">{value}</div>
  </div>
);

const NITJalandharPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [collegeData, setCollegeData] = useState<NITJalandharData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPredictorModalOpen, setIsPredictorModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    course: "",
  });
  const [leadErrors, setLeadErrors] = useState<Record<string, string>>({});

  const scrollToSection = (tabId: string, sectionId: string) => {
    setActiveTab(tabId);
    // Wait for tab content to render, then scroll smoothly
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await loadNITJalandharData();
        setCollegeData(data);
        
        // Set page title
        document.title = `${data.Name} | Colleges | StudentHub`;
        
        // Set meta description
        const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", `${data.Name} - NIRF Rank ${data.Rankings.NIRF2025.Overall}, ${data.Location.City}, ${data.Location.State}`);
        document.head.appendChild(meta);
      } catch (err) {
        setError('Failed to load college data');
        console.error('Error loading NIT Jalandhar data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Alternative method to stretch right sidebar: match main content height via ResizeObserver (no sticky, no inner scroll)
  useEffect(() => {
    if (!mainContentRef.current || !sidebarRef.current) return;
    const sidebarEl = sidebarRef.current;
    const ro = new ResizeObserver(() => {
      const mainHeight = mainContentRef.current?.getBoundingClientRect().height || 0;
      sidebarEl.style.minHeight = `${Math.ceil(mainHeight)}px`;
    });
    ro.observe(mainContentRef.current);
    return () => ro.disconnect();
  }, []);

  // Auto-open Lead Modal after 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeadModalOpen(true);
      try { window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'lead_open', page: 'nit_jalandhar' } })); } catch {}
    }, 10000);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsLeadModalOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { clearTimeout(timer); window.removeEventListener('keydown', onKey); };
  }, []);

  const validateLead = () => {
    const errors: Record<string, string> = {};
    if (!leadForm.fullName.trim()) errors.fullName = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) errors.email = 'Valid email required';
    if (!/^\+?[0-9]{7,15}$/.test(leadForm.phone)) errors.phone = 'Valid phone required';
    if (!leadForm.city.trim()) errors.city = 'City is required';
    if (!leadForm.course.trim()) errors.course = 'Select a course';
    setLeadErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitLead = async () => {
    if (!validateLead()) return;
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadForm,
          college: collegeData?.Name,
          source: 'nit_jalandhar_page',
        })
      });
      try { window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'lead_submit', page: 'nit_jalandhar' } })); } catch {}
      setIsLeadModalOpen(false);
    } catch (e) {
      // noop: could show toast
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading College Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link to="/colleges" className="text-blue-600 hover:underline">
            ← Back to Colleges
          </Link>
        </div>
      </div>
    );
  }

  if (!collegeData) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">College Not Found</h2>
          <Link to="/colleges" className="text-blue-600 hover:underline">
            ← Back to Colleges
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "courses", label: "Courses & Fees" },
    { id: "admissions", label: "Admissions" },
    { id: "placements", label: "Placements" },
    { id: "rankings", label: "Rankings" },
    { id: "facilities", label: "Facilities" },
    { id: "faculty", label: "Faculty" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" }
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  // Right Sidebar Components - will be implemented below
  const RightSidebar = () => (
    <div className="w-full lg:w-80 space-y-8">
      {/* Admission Predictor CTA */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Predict Your Chances</h3>
        <p className="text-sm text-gray-700 mb-3">Get a personalized prediction for NIT Jalandhar based on your rank and category.</p>
        <button onClick={() => setIsPredictorModalOpen(true)} className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">Try Admission Predictor</button>
      </div>

      {/* News */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest News</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <img src="/default-news.jpg" alt="News" className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">NIT Jalandhar Begins PhD Admissions 2025-26</h4>
              <p className="text-xs text-gray-500 mt-1">2 days ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/default-news.jpg" alt="News" className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">JEE Main 2025 Registration Opens</h4>
              <p className="text-xs text-gray-500 mt-1">5 days ago</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">View All News</button>
      </div>

      {/* Top Courses */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Courses at NIT Jalandhar</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">B.Tech CSE</p>
              <p className="text-xs text-gray-500">₹6.56L (4 years)</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">M.Tech</p>
              <p className="text-xs text-gray-500">₹2.98L (2 years)</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">MBA</p>
              <p className="text-xs text-gray-500">₹2.18L (2 years)</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Faculty Highlights */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Faculty Highlights</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Faculty Members</span>
            <span className="font-medium text-gray-900">{collegeData?.FacultyAndDepartments.Strength.FacultyCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Departments</span>
            <span className="font-medium text-gray-900">{collegeData?.FacultyAndDepartments.DepartmentsCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Patents (2024)</span>
            <span className="font-medium text-gray-900">{collegeData?.FacultyAndDepartments.Strength.Patents2024}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Research Funds</span>
            <span className="font-medium text-gray-900">{formatCurrency(collegeData?.FacultyAndDepartments.Strength.ResearchFundsINR2024 || 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Render functions for each tab
  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* College Introduction */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">StudentHub Team</span>
          <span className="text-gray-500 text-sm ml-2">Updated Jul 9, 2025</span>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">About {collegeData.Name}</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{collegeData.About.Overview}</p>
        
        {/* Summary Bullet Points */}
        <div className="mb-6">
          <p className="text-gray-700 mb-3">
            <strong>NIT Jalandhar Courses are offered at UG, PG, Doctorate level.</strong> The institute offers programs in Engineering, Science, Management disciplines. Available degrees include B.Tech, M.Tech, Ph.D, B.Arch, M.Sc, MBA. Popular courses are B.Tech, M.Tech, Ph.D.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>NIT Jalandhar Fees 2025-2026 range from ₹54,000 to ₹6.56 Lakhs across all offered courses.</strong> UG Fees: ₹6.56 Lakhs for B.Tech (4 years), PG Fees: ₹1.08 Lakhs to ₹2.98 Lakhs</li>
            <li>• <strong>NIT Jalandhar B.Tech Fees is ₹6.56 Lakhs for the entire 4 years duration.</strong> Popular specializations: Computer Science & Engineering, Electronics & Communication Engineering, Mechanical Engineering.
              <ul className="ml-4 mt-1 space-y-1">
                <li>• NIT Jalandhar B.Tech total program fee: ₹6.56 Lakhs. First year fee: ₹1.64 Lakhs.</li>
                <li>• B.Tech CSE is one of the most competitive programs.</li>
              </ul>
            </li>
            <li>• <strong>NIT Jalandhar M.Tech Fees is ₹2.98 Lakhs for the entire 2 years duration.</strong> Popular specializations: Computer Science And Engineering, VLSI Design, Structural Engineering.
              <ul className="ml-4 mt-1 space-y-1">
                <li>• NIT Jalandhar M.Tech annual fee: ₹1.49 Lakhs</li>
                <li>• 27+ M.Tech specializations available across various departments</li>
              </ul>
            </li>
            <li>• <strong>NIT Jalandhar Ph.D Fees is ₹1.08 Lakhs for 3 years duration.</strong> Popular specializations: All engineering, science, and management departments.
              <ul className="ml-4 mt-1 space-y-1">
                <li>• Ph.D fee: ₹54,000 per year (₹1.08 Lakhs for 2 years)</li>
                <li>• Over 200+ Ph.D students enrolled across 17 programs</li>
              </ul>
            </li>
            <li>• <strong>NIT Jalandhar offers MBA with total fee of ₹2.18 Lakhs (₹1.09 Lakhs per year).</strong> Admission through CAT examination.</li>
            <li>• <strong>NIT Jalandhar Hostel & Mess Fee is approximately ₹50,000 - ₹60,500 per year.</strong></li>
          </ul>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <InfoCard label="Established" value={collegeData.Established.Year} />
          <InfoCard label="NIRF Rank (Overall)" value={collegeData.Rankings.NIRF2025.Overall} />
          <InfoCard label="NIRF Rank (Engineering)" value={collegeData.Rankings.NIRF2025.Engineering} />
          <InfoCard label="Campus Area" value={`${collegeData.Location.CampusAreaAcres} acres`} />
          <InfoCard label="Student Strength" value={collegeData.About.StudentStrength} />
          <InfoCard label="University Type" value={collegeData.UniversityType[0]} />
          <InfoCard label="QS World Rank" value={collegeData.Rankings.QSWorld2026 || "N/A"} />
          <InfoCard label="QS Asia Rank" value={collegeData.Rankings.QSAsia2025 || "N/A"} />
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Historical Significance</h4>
          <p className="text-blue-800 text-sm">{collegeData.Established.HistoricalSignificance}</p>
        </div>
      </div>

      {/* Academic Programs Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Academic Programs & Fees</h3>
        
        {/* Summary Bullet Points */}
        <div className="mb-6">
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>NIT Jalandhar offers a comprehensive range of undergraduate, postgraduate, and doctoral programs across engineering, science, and management disciplines.</strong> The institute maintains a balance between theoretical knowledge and practical application with state-of-the-art facilities and experienced faculty.</li>
            <li>• <strong>Undergraduate Programs:</strong> B.Tech (1200 seats, ₹1.64L/year), B.Arch (60 seats, ₹1.64L/year). All programs require competitive entrance examinations with JEE Main for B.Tech.</li>
            <li>• <strong>Postgraduate Programs:</strong> M.Tech (27 specializations, ₹1.49L/year), MBA (60 seats, ₹1.09L/year), M.Sc (100 seats across 3 disciplines, ₹80,000/year). Admission through GATE, CAT, and JAM examinations respectively.</li>
            <li>• <strong>Doctoral Programs:</strong> PhD (17 programs, 200+ seats, ₹54,000/year). Duration typically 3-5 years with research focus areas including AI, VLSI, materials science, and biotechnology.</li>
            <li>• <strong>Hostel & Accommodation:</strong> 10 hostels with modern amenities including Wi-Fi, study rooms, mess halls, recreation areas, and water purifiers. Hostel & mess fees approximately ₹50,000 - ₹60,500 per year.</li>
          </ul>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg p-4 bg-gray-50">
            <h4 className="font-semibold text-lg mb-3">Undergraduate Programs</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">B.Tech:</span> {collegeData.CoursesAndFees.Undergraduate.BTech.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.FirstYearFeeINR)}/year</div>
              <div><span className="font-medium">B.Arch:</span> {collegeData.CoursesAndFees.Undergraduate.BArch.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.FirstYearFeeINR)}/year</div>
            </div>
          </div>
          
          <div className="rounded-lg p-4 bg-gray-50">
            <h4 className="font-semibold text-lg mb-3">Postgraduate Programs</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">M.Tech:</span> {collegeData.CoursesAndFees.Postgraduate.MTech.Specializations} specializations</div>
              <div><span className="font-medium">MBA:</span> {collegeData.CoursesAndFees.Postgraduate.MBA.Seats} seats</div>
              <div><span className="font-medium">M.Sc:</span> {collegeData.CoursesAndFees.Postgraduate.MSc.Seats} seats across {collegeData.CoursesAndFees.Postgraduate.MSc.Disciplines.length} disciplines</div>
            </div>
          </div>
          
          <div className="rounded-lg p-4 bg-gray-50">
            <h4 className="font-semibold text-lg mb-3">Doctoral Programs</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">PhD:</span> {collegeData.CoursesAndFees.Doctoral.PhD.Programs} programs</div>
              <div><span className="font-medium">Duration:</span> {collegeData.CoursesAndFees.Doctoral.PhD.TypicalDurationYears} years</div>
              <div><span className="font-medium">Seats:</span> 200+ available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Admission Process & Cutoffs</h3>
        <p className="text-gray-700 mb-6">Admissions at NIT Jalandhar are highly competitive, with rigorous entrance examinations and strict cutoff criteria. The institute follows a merit-based selection process ensuring only the brightest minds join the community.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Entrance Examinations</h4>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <h5 className="font-medium">Undergraduate (B.Tech/B.Arch)</h5>
                <p className="text-sm text-gray-700">{collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Exam} with {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Counseling}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h5 className="font-medium">Postgraduate (M.Tech/MBA/M.Sc)</h5>
                <p className="text-sm text-gray-700">{collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.Exam} for M.Tech, {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MBA.Exam} for MBA</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h5 className="font-medium">Doctoral (PhD)</h5>
                <p className="text-sm text-gray-700">{collegeData.AdmissionProcessAndEntranceExams.Doctoral.PhD.Exam.slice(0, 3).join(", ")} and others</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Recent Cutoffs (2025)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>B.Tech CSE:</span> <span className="font-medium">Rank {collegeData.CutoffInformation?.JEEMain2025?.BTechCSEClosingRank || "N/A"}</span></div>
              <div className="flex justify-between"><span>ECE:</span> <span className="font-medium">Rank {collegeData.CutoffInformation?.JEEMain2025?.ECEClosingRank || "N/A"}</span></div>
              <div className="flex justify-between"><span>Mechanical:</span> <span className="font-medium">Rank {collegeData.CutoffInformation?.JEEMain2025?.MechEngClosingRank || "N/A"}</span></div>
              <div className="flex justify-between"><span>Electrical:</span> <span className="font-medium">Rank {collegeData.CutoffInformation?.JEEMain2025?.ElectEngClosingRank || "N/A"}</span></div>
              <div className="flex justify-between"><span>MBA (General):</span> <span className="font-medium">{collegeData.CutoffInformation?.CATMBA2025Cutoffs?.GeneralPercentile || "N/A"}%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Placements & Career Opportunities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Placements & Career Opportunities</h3>
        <p className="text-gray-700 mb-6">NIT Jalandhar has an exceptional placement record with top-tier companies consistently recruiting students across all programs. The Career Development Cell ensures comprehensive preparation and support throughout the placement process.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <InfoCard label="Total Offers (2024)" value={collegeData.Placements.Year2024.TotalOffers} />
          <InfoCard label="Recruiting Companies" value={collegeData.Placements.Year2024.Recruiters} />
          <InfoCard label="Highest Package" value={formatCurrency(collegeData.Placements.Year2024.HighestPackageINR)} />
          <InfoCard label="Average Package" value={formatCurrency(collegeData.Placements.Year2024.OverallAveragePackageINR)} />
          <InfoCard label="CSE Average" value={formatCurrency(collegeData.Placements.Year2024.CSEAveragePackageINR)} />
          <InfoCard label="ECE Average" value={formatCurrency(collegeData.Placements.Year2024.ECEAveragePackageINR)} />
          <InfoCard label="PPOs" value={collegeData.Placements.Year2024.PPOs} />
          <InfoCard label="MBA Median" value={formatCurrency(collegeData.Placements.Year2024["MBA median package INR"])} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Top Recruiting Companies</h4>
            <div className="flex flex-wrap gap-2">
              {collegeData.Placements.Year2024.TopRecruiters.slice(0, 12).map((recruiter: string, index: number) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {recruiter}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Job Profiles</h4>
            <div className="flex flex-wrap gap-2">
              {collegeData.Placements.Year2024.JobProfiles.map((profile: string, index: number) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rankings & Recognition */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Rankings & Recognition</h3>
        <p className="text-gray-700 mb-6">NIT Jalandhar consistently ranks among the top engineering institutions in India and has gained international recognition for its academic excellence, research contributions, and innovation initiatives.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">National Rankings (NIRF)</h4>
            <div className="space-y-3">
              <div className="bg-yellow-50 rounded-lg p-3">
                <h5 className="font-medium">NIRF 2025</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Overall: <span className="font-medium">#{collegeData.Rankings.NIRF2025.Overall}</span></div>
                  <div>Engineering: <span className="font-medium">#{collegeData.Rankings.NIRF2025.Engineering}</span></div>
                  <div>Architecture & Planning: <span className="font-medium">#{collegeData.Rankings.NIRF2025.ArchitecturePlanning || "N/A"}</span></div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <h5 className="font-medium">NIRF 2024</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Overall: <span className="font-medium">#{collegeData.Rankings.NIRF2024.Overall}</span></div>
                  <div>Innovation: <span className="font-medium">#{collegeData.Rankings.NIRF2024.Innovation || "N/A"}</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">International Rankings</h4>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3">
                <h5 className="font-medium">QS Rankings</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>World University: <span className="font-medium">#{collegeData.Rankings.QSWorld2026 || "N/A"}</span></div>
                  <div>Asia University: <span className="font-medium">#{collegeData.Rankings.QSAsia2025}</span></div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <h5 className="font-medium">Other Recognitions</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>India Today Engineering: <span className="font-medium">#{collegeData.Rankings.IndiaTodayEngineering2024 || "N/A"}</span></div>
                  <div>THE Engineering: <span className="font-medium">{collegeData.Rankings.THEEngineering2020Band || "N/A"}</span></div>
                  <div>ARIIA: <span className="font-medium">{collegeData.Rankings.ARIIA2021 || "N/A"}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Infrastructure */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Campus Facilities & Infrastructure</h3>
        <p className="text-gray-700 mb-6">The sprawling {collegeData.Location.CampusAreaAcres}-acre campus of NIT Jalandhar houses world-class facilities including modern hostels, state-of-the-art laboratories, extensive library resources, and comprehensive sports infrastructure to support holistic development.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Accommodation & Living</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <h5 className="font-medium">Hostel Facilities</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><span className="font-medium">{collegeData.Facilities.Hostels.Number} hostels</span> with {collegeData.Facilities.Hostels.Types.join(", ")} options</div>
                  <div>Amenities: Wi-Fi, Study Rooms, Mess Halls, Recreation Areas</div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <h5 className="font-medium">Dining & Food</h5>
                <div className="text-sm text-gray-700">
                  Multiple messes, cafés, food courts with daily menu rotation and dietary options
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Academic Resources</h4>
            <div className="space-y-3">
              <div className="bg-yellow-50 rounded-lg p-3">
                <h5 className="font-medium">Library - {collegeData.Facilities.Library.Name}</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><span className="font-medium">{collegeData.Facilities.Library.BookCount.toLocaleString()} books</span> and {collegeData.Facilities.Library.EJournalsCount.toLocaleString()} e-journals</div>
                  <div>24/7 access with digital resources and group study zones</div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <h5 className="font-medium">Laboratories</h5>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{collegeData.Facilities.Laboratories.Quantity} labs</span> focusing on VLSI, Robotics, CAD/CAM, Biotechnology, and more
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-3">Sports & Recreation</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-700 space-y-1">
                {collegeData.Facilities.SportsFacilities.Features.map((facility: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
                    {facility}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-orange-50 rounded-lg p-3">
                <h5 className="font-medium">Medical Facilities</h5>
                <div className="text-sm text-gray-700">
                  <div>{collegeData.Facilities.Medical.FacilityName} with emergency services, specialist consultations, and pharmacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty & Research */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Faculty & Research Excellence</h3>
        <p className="text-gray-700 mb-6">NIT Jalandhar boasts a distinguished faculty of over {collegeData.FacultyAndDepartments.Strength.FacultyCount} members across {collegeData.FacultyAndDepartments.DepartmentsCount} departments, with the majority holding PhD degrees. The institute is at the forefront of research and innovation with significant contributions to various fields.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Academic Structure</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <h5 className="font-medium">Faculty Strength</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><span className="font-medium">{collegeData.FacultyAndDepartments.Strength.FacultyCount} faculty members</span> across {collegeData.FacultyAndDepartments.DepartmentsCount} departments</div>
                  <div>Majority with PhD qualifications</div>
                  <div>{collegeData.FacultyAndDepartments.Strength.Patents2024} patents filed in 2024</div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <h5 className="font-medium">Research Funding</h5>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{formatCurrency(collegeData.FacultyAndDepartments.Strength.ResearchFundsINR2024)}</span> research funds in 2024
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Key Departments</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {collegeData.FacultyAndDepartments.DepartmentsList.slice(0, 8).map((dept: string, index: number) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-blue-600" />
                  {dept}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-3">Research Focus Areas</h4>
          <div className="flex flex-wrap gap-2">
            {collegeData.ResearchAndInnovation.FocusAreas.map((area: string, index: number) => (
              <span key={index} className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Student Life & Culture */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Student Life & Campus Culture</h3>
        <p className="text-gray-700 mb-6">The vibrant campus life at NIT Jalandhar is characterized by a diverse community, rich cultural traditions, and numerous opportunities for personal and professional growth through clubs, societies, and events.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Cultural Heritage</h4>
            <div className="space-y-3">
              <div className="bg-yellow-50 rounded-lg p-3">
                <h5 className="font-medium">Major Festivals</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  {collegeData.StudentLifeAndLifestyle.Festivals.map((festival: string, index: number) => (
                    <div key={index}>• {festival}</div>
                  ))}
                </div>
              </div>
              <div className="bg-pink-50 rounded-lg p-3">
                <h5 className="font-medium">Cultural Traditions</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  {collegeData.StudentLifeAndLifestyle.CulturalTraditions.map((tradition: string, index: number) => (
                    <div key={index}>• {tradition}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Clubs & Societies</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <h5 className="font-medium">Active Organizations</h5>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{collegeData.Facilities.StudentClubs.Number} clubs</span> across technical, cultural, entrepreneurship, and social service domains
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <h5 className="font-medium">Key Clubs</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  {collegeData.StudentLifeAndLifestyle.ClubsAndSocieties.slice(0, 4).map((club: string, index: number) => (
                    <div key={index}>• {club}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Details (merged from other tabs) */}
      <div className="space-y-8">
        <section id="overview-courses-full">
          {renderCoursesTab()}
        </section>
        <section id="overview-admissions-full">
          {renderAdmissionsTab()}
        </section>
        <section id="overview-placements-full">
          {renderPlacementsTab()}
        </section>
        <section id="overview-rankings-full">
          {renderRankingsTab()}
        </section>
        <section id="overview-facilities-full">
          {renderFacilitiesTab()}
        </section>
        <section id="overview-faculty-full">
          {renderFacultyTab()}
        </section>
        <section id="overview-reviews-full">
          {renderReviewsTab()}
        </section>
      </div>
    </div>
  );

  const renderCoursesTab = () => (
    <div id="courses-root" className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Undergraduate Programs</h3>
        <p className="text-gray-700 mb-4">
          NIT Jalandhar's undergraduate offerings are designed to build a strong foundation in core disciplines while
          introducing students to cutting-edge technologies and interdisciplinary learning.
        </p>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">B.Tech Programs</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Undergraduate.BTech.DurationYears} years`} />
            <InfoCard label="Total Seats" value={collegeData.CoursesAndFees.Undergraduate.BTech.Seats} />
            <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.FirstYearFeeINR)} />
            <InfoCard label="Total Fees (Approx)" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.TotalFeesINRApprox)} />
          </div>
          <div>
            <h5 className="font-medium mb-2">Available Branches:</h5>
            <div className="flex flex-wrap gap-2">
              {collegeData.CoursesAndFees.Undergraduate.BTech.Branches.map((branch: string, index: number) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {branch}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <h5 className="font-medium mb-1">Entrance Requirements:</h5>
            <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Undergraduate.BTech.Entrance.join(", ")}</p>
          </div>
        </div>
        {collegeData.CoursesAndFees.Undergraduate.BArch.Seats > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">B.Arch Program</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Undergraduate.BArch.DurationYears} years`} />
            <InfoCard label="Seats" value={collegeData.CoursesAndFees.Undergraduate.BArch.Seats} />
            <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.FirstYearFeeINR)} />
            <InfoCard label="Total Fees (Approx)" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.TotalFeesINRApprox)} />
          </div>
          <div>
            <h5 className="font-medium mb-1">Entrance Requirements:</h5>
            <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Undergraduate.BArch.Entrance.join(", ")}</p>
          </div>
        </div>
        )}
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Postgraduate Programs</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">M.Tech Programs</h4>
            <div className="space-y-2 mb-3">
              <InfoCard label="Specializations" value={collegeData.CoursesAndFees.Postgraduate.MTech.Specializations} />
              <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Postgraduate.MTech.DurationYears} years`} />
              <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Postgraduate.MTech.FirstYearFeeINR)} />
            </div>
            <div>
              <h5 className="font-medium mb-1">Entrance Requirements:</h5>
              <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Postgraduate.MTech.Entrance.join(", ")}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">MBA Program</h4>
            <div className="space-y-2 mb-3">
              <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Postgraduate.MBA.DurationYears} years`} />
              <InfoCard label="Seats" value={collegeData.CoursesAndFees.Postgraduate.MBA.Seats} />
              <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Postgraduate.MBA.FirstYearFeeINR)} />
            </div>
            <div>
              <h5 className="font-medium mb-1">Entrance Requirements:</h5>
              <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Postgraduate.MBA.Entrance.join(", ")}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">M.Sc Programs</h4>
            <div className="space-y-2 mb-3">
              <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Postgraduate.MSc.DurationYears} years`} />
              <InfoCard label="Seats" value={collegeData.CoursesAndFees.Postgraduate.MSc.Seats} />
              <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Postgraduate.MSc.FirstYearFeeINR)} />
            </div>
            <div>
              <h5 className="font-medium mb-1">Available Disciplines:</h5>
              <div className="flex flex-wrap gap-1">
                {collegeData.CoursesAndFees.Postgraduate.MSc.Disciplines.map((discipline: string, index: number) => (
                  <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">PhD Programs</h4>
            <div className="space-y-2 mb-3">
              <InfoCard label="Programs" value={collegeData.CoursesAndFees.Doctoral.PhD.Programs} />
              <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Doctoral.PhD.TypicalDurationYears} years`} />
              <InfoCard label="Fee per Year" value={formatCurrency(collegeData.CoursesAndFees.Doctoral.PhD.FeeINRPerYear)} />
            </div>
            <div>
              <h5 className="font-medium mb-1">Entrance Requirements:</h5>
              <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Doctoral.PhD.Entrance.slice(0, 3).join(", ")}...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Hostel & Accommodation</h3>
        <p className="text-gray-700 mb-4">
          Hostel life at NIT Jalandhar is known for its vibrant culture and supportive community.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard label="Hostel Fee (Min)" value={formatCurrency(collegeData.CoursesAndFees.HostelFeeINRAnnual.Minimum)} />
          <InfoCard label="Hostel Fee (Max)" value={formatCurrency(collegeData.CoursesAndFees.HostelFeeINRAnnual.Maximum)} />
        </div>
        <p className="text-sm text-gray-600 mt-2">{collegeData.CoursesAndFees.HostelFeeINRAnnual.Note}</p>
      </div>
    </div>
  );

  const renderAdmissionsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Admissions at {collegeData.Name.split('(')[0].trim()}</h3>
        <p className="text-gray-700 mb-3">
          Admissions at <strong>NIT Jalandhar</strong> are merit-centric and transparent, governed by national-level examinations and centralized counseling platforms.
        </p>
        <h4 className="text-lg font-semibold mt-4 mb-2">Undergraduate Admissions</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li><strong>B.Tech & B.Arch:</strong> {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Exam} + {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Counseling}</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4 mb-2">Postgraduate Admissions</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li><strong>M.Tech:</strong> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.Exam} with {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.Counseling}</li>
          <li><strong>MBA:</strong> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MBA.Exam} with {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MBA.AdditionalSelection.join(", ")}</li>
          <li><strong>M.Sc:</strong> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MSc.Exam.join(", ")}</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4 mb-2">Doctoral Admissions (PhD)</h4>
        <p className="text-gray-700 mb-2">
          PhD admissions blend national test scores ({collegeData.AdmissionProcessAndEntranceExams.Doctoral.PhD.Exam.slice(0, 3).join(", ")}...) with research potential assessments.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Cutoff Information (2025)</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium mb-3">JEE Main Cutoffs (Closing Rank)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoCard label="B.Tech CSE" value={collegeData.CutoffInformation?.JEEMain2025?.BTechCSEClosingRank || "N/A"} />
              <InfoCard label="ECE" value={collegeData.CutoffInformation?.JEEMain2025?.ECEClosingRank || "N/A"} />
              <InfoCard label="Mechanical Engineering" value={collegeData.CutoffInformation?.JEEMain2025?.MechEngClosingRank || "N/A"} />
              <InfoCard label="Electrical Engineering" value={collegeData.CutoffInformation?.JEEMain2025?.ElectEngClosingRank || "N/A"} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">CAT MBA Cutoffs (Percentile)</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <InfoCard label="General" value={`${collegeData.CutoffInformation?.CATMBA2025Cutoffs?.GeneralPercentile || "N/A"}%`} />
              <InfoCard label="OBC" value={`${collegeData.CutoffInformation?.CATMBA2025Cutoffs?.OBCPercentile || "N/A"}%`} />
              <InfoCard label="SC/ST (Min)" value={`${collegeData.CutoffInformation?.CATMBA2025Cutoffs?.SCSTPercentileMin || "N/A"}%`} />
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">{collegeData.CutoffInformation?.AdditionalDetails || ""}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Reservation Policy</h3>
        <p className="text-gray-700">{collegeData.AdmissionProcessAndEntranceExams?.ReservationPolicy || "As per Central Government norms"}</p>
      </div>
    </div>
  );

  const renderPlacementsTab = () => (
    <div id="placements-root" className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Placements at NIT Jalandhar</h3>
        <p className="text-gray-700 mb-6">NIT Jalandhar has an exceptional placement record with top-tier companies consistently recruiting students across all programs.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <InfoCard label="Total Offers" value={collegeData.Placements.Year2024.TotalOffers} />
          <InfoCard label="Recruiters" value={collegeData.Placements.Year2024.Recruiters} />
          <InfoCard label="Highest Package" value={formatCurrency(collegeData.Placements.Year2024.HighestPackageINR)} />
          <InfoCard label="Average Package" value={formatCurrency(collegeData.Placements.Year2024.OverallAveragePackageINR)} />
          <InfoCard label="CSE Average" value={formatCurrency(collegeData.Placements.Year2024.CSEAveragePackageINR)} />
          <InfoCard label="ECE Average" value={formatCurrency(collegeData.Placements.Year2024.ECEAveragePackageINR)} />
          <InfoCard label="PPOs" value={collegeData.Placements.Year2024.PPOs} />
          <InfoCard label="MBA Median" value={formatCurrency(collegeData.Placements.Year2024["MBA median package INR"])} />
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Top Recruiters</h4>
          <div className="flex flex-wrap gap-2">
            {collegeData.Placements.Year2024.TopRecruiters.slice(0, 12).map((recruiter: string, index: number) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {recruiter}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Job Profiles</h4>
          <div className="flex flex-wrap gap-2">
            {collegeData.Placements.Year2024.JobProfiles.map((profile: string, index: number) => (
              <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {profile}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRankingsTab = () => (
    <div id="rankings-root" className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">NIT Jalandhar Rankings & Recognition</h3>
        <p className="text-gray-700 mb-4">
          NIT Jalandhar is consistently ranked among India's top institutions and continues to strengthen its global standing.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">NIRF 2025</h4>
            <div className="space-y-3">
              <InfoCard label="Overall" value={collegeData.Rankings.NIRF2025.Overall} />
              <InfoCard label="Engineering" value={collegeData.Rankings.NIRF2025.Engineering} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">International Rankings</h4>
            <div className="space-y-3">
              <InfoCard label="QS Asia" value={collegeData.Rankings.QSAsia2025 || "N/A"} />
              <InfoCard label="ARIIA" value={collegeData.Rankings.ARIIA2021 || "N/A"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFacilitiesTab = () => (
    <div id="facilities-root" className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Campus Facilities</h3>
        <p className="text-gray-700 mb-6">The {collegeData.Location.CampusAreaAcres}-acre campus houses world-class facilities.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Hostel Facilities</h4>
            <InfoCard label="Number of Hostels" value={collegeData.Facilities.Hostels.Number} />
            <div className="mt-3">
              <h5 className="font-medium mb-2">Hostel Types</h5>
              <div className="flex flex-wrap gap-2">
                {collegeData.Facilities.Hostels.Types.map((type: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Library</h4>
            <InfoCard label="Name" value={collegeData.Facilities.Library.Name} />
            <InfoCard label="Books" value={`${collegeData.Facilities.Library.BookCount.toLocaleString()}`} />
            <InfoCard label="E-Journals" value={`${collegeData.Facilities.Library.EJournalsCount.toLocaleString()}`} />
          </div>
        </div>
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-3">Sports Facilities</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {collegeData.Facilities.SportsFacilities.Features.map((facility: string, index: number) => (
              <div key={index} className="flex items-center text-sm">
                <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
                {facility}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFacultyTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Faculty & Research</h3>
        <p className="text-gray-700 mb-6">NIT Jalandhar boasts a distinguished faculty of over {collegeData.FacultyAndDepartments.Strength.FacultyCount} members across {collegeData.FacultyAndDepartments.DepartmentsCount} departments.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <InfoCard label="Total Faculty" value={collegeData.FacultyAndDepartments.Strength.FacultyCount} />
            <InfoCard label="Departments" value={collegeData.FacultyAndDepartments.DepartmentsCount} />
            <InfoCard label="Patents Filed (2024)" value={collegeData.FacultyAndDepartments.Strength.Patents2024} />
            <InfoCard label="Research Funds (2024)" value={formatCurrency(collegeData.FacultyAndDepartments.Strength.ResearchFundsINR2024)} />
          </div>
          <div>
            <h4 className="font-medium mb-2">Departments</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {collegeData.FacultyAndDepartments.DepartmentsList.slice(0, 8).map((dept: string, index: number) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-blue-600" />
                  {dept}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Student & Alumni Perspectives</h3>
        <p className="text-gray-700 mb-3">
          NIT Jalandhar is widely regarded as a premier engineering and technology institution. Reviews consistently highlight a rigorous academic atmosphere, quality faculty, and a competitive peer network.
        </p>
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Strengths</h4>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
            {collegeData.ReviewsAndRatings.Strengths.map((strength: string, index: number) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Rating</h4>
          <p className="text-gray-700">College Dunia Rating: {collegeData.ReviewsAndRatings.CollegeDuniaRating}/5</p>
        </div>
      </div>
    </div>
  );

  const renderContactTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3" />
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-sm text-gray-700">{collegeData.OfficialContactInfo.Address}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-sm text-gray-700">{collegeData.OfficialContactInfo.Phone}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <h4 className="font-medium">Website</h4>
                <a href={collegeData.OfficialContactInfo.Website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                  {collegeData.OfficialContactInfo.Website}
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Email Contacts</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Registrar</div>
                    <a href={`mailto:${collegeData.OfficialContactInfo.Emails.Registrar}`} className="text-blue-600 hover:underline text-sm">
                      {collegeData.OfficialContactInfo.Emails.Registrar}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Admissions</div>
                    <a href={`mailto:${collegeData.OfficialContactInfo.Emails.Admissions}`} className="text-blue-600 hover:underline text-sm">
                      {collegeData.OfficialContactInfo.Emails.Admissions}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Placement Cell</div>
                    <a href={`mailto:${collegeData.OfficialContactInfo.Emails.PlacementCell}`} className="text-blue-600 hover:underline text-sm">
                      {collegeData.OfficialContactInfo.Emails.PlacementCell}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button onClick={() => setIsBrochureModalOpen(true)} className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Download Brochure
          </button>
          <button onClick={() => setIsPredictorModalOpen(true)} className="flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <TrendingUp className="w-5 h-5 mr-2" />
            Predict Your Chances
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverviewTab();
      case "courses":
        return renderCoursesTab();
      case "admissions":
        return renderAdmissionsTab();
      case "placements":
        return renderPlacementsTab();
      case "rankings":
        return renderRankingsTab();
      case "facilities":
        return renderFacilitiesTab();
      case "faculty":
        return renderFacultyTab();
      case "reviews":
        return renderReviewsTab();
      case "contact":
        return renderContactTab();
      default:
        return renderOverviewTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/colleges" className="text-gray-500 hover:text-gray-700">Colleges</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{collegeData.Name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-6 mb-4">
                <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                  <img 
                    src="/images/nit-jalandhar-logo.png" 
                    alt="NIT Jalandhar Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900 mb-2">
                    {collegeData.Name}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {collegeData.Location.City}, {collegeData.Location.State}
                    </div>
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {collegeData.UniversityType[0]}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Estd {collegeData.Established.Year}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {/* Quick facts chips */}
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  {collegeData.About.StudentStrength}+ Students
                </span>
                <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                  {collegeData.CoursesAndFees.Undergraduate.BTech.Seats}+ UG Seats
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 lg:min-w-[200px]">
              <button onClick={() => setIsBrochureModalOpen(true)} className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation (sticky) */}
      <div className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div ref={mainContentRef} className="flex-1">
            {renderTabContent()}
          </div>
          
          {/* Right Sidebar */}
          <div ref={sidebarRef} className="lg:order-last lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <RightSidebar />
          </div>
        </div>
      </div>

      {/* Admission Predictor Modal */}
      <AdmissionPredictorModal
        isOpen={isPredictorModalOpen}
        onClose={() => setIsPredictorModalOpen(false)}
        collegeName={collegeData?.Name || "NIT Jalandhar"}
        collegeLogo="/images/nit-jalandhar-logo.png"
      />

      {/* Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        collegeName={collegeData?.Name || "NIT Jalandhar"}
        collegeData={collegeData || undefined}
      />

      {/* Floating Back-to-Top */}
      {showBackToTop && (
        <button
          aria-label="Back to top"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full shadow-md transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Top
        </button>
      )}

      {/* Register to Apply Modal */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div onClick={() => setIsLeadModalOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-100 transition-opacity" />
          {/* Modal Panel */}
          <div className="absolute inset-x-0 bottom-0 md:inset-0 flex items-end md:items-center justify-center">
            <div className="w-full md:max-w-4xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl overflow-hidden transform transition-all md:scale-100 md:opacity-100 relative">
              {/* Desktop close (X) */}
              <button
                onClick={() => setIsLeadModalOpen(false)}
                aria-label="Close"
                className="hidden md:flex absolute top-3 right-3 h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                ×
              </button>
              <div className="grid md:grid-cols-2">
                {/* Left: Features/Testimonial */}
                <div className="p-6 md:p-8 bg-gray-50">
                  <h3 className="text-xl font-semibold mb-4">Register Now to Apply</h3>
                  <p className="text-sm text-gray-700 mb-4">Fast‑track your application workflow for {collegeData?.Name}. Get counselling, fee details, scholarships and deadline reminders.</p>
                  <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                    <div className="p-3 rounded-lg bg-white shadow-sm">📄 Brochure details</div>
                    <div className="p-3 rounded-lg bg-white shadow-sm">💰 Check detailed fees</div>
                    <div className="p-3 rounded-lg bg-white shadow-sm">✅ Shortlist & apply</div>
                    <div className="p-3 rounded-lg bg-white shadow-sm">🧑‍💼 24/7 counselling</div>
                    <div className="p-3 rounded-lg bg-white shadow-sm">🎓 Scholarships</div>
                    <div className="p-3 rounded-lg bg-white shadow-sm">📅 Application deadlines</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white shadow-sm">
                    <div className="text-sm text-gray-800 italic">"StudentHub made it easy to compare programs and finish my application on time."</div>
                    <div className="text-xs text-gray-500 mt-2">— Student, B.Tech (2024)</div>
                  </div>
                </div>
                {/* Right: Form */}
                <div className="p-6 md:p-8">
                  <button onClick={() => setIsLeadModalOpen(false)} aria-label="Close" className="md:hidden float-right -mt-2 -mr-2 text-gray-500">✕</button>
                  <div className="grid grid-cols-1 gap-3">
                    <input value={leadForm.fullName} onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })} placeholder="Full Name *" className={`px-3 py-2 rounded bg-gray-50 outline-none ${leadErrors.fullName ? 'ring-1 ring-red-500' : ''}`} />
                    {leadErrors.fullName && <span className="text-xs text-red-600">{leadErrors.fullName}</span>}
                    <input value={leadForm.email} onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })} placeholder="Email Address *" className={`px-3 py-2 rounded bg-gray-50 outline-none ${leadErrors.email ? 'ring-1 ring-red-500' : ''}`} />
                    {leadErrors.email && <span className="text-xs text-red-600">{leadErrors.email}</span>}
                    <input value={leadForm.phone} onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })} placeholder="Mobile Number *" className={`px-3 py-2 rounded bg-gray-50 outline-none ${leadErrors.phone ? 'ring-1 ring-red-500' : ''}`} />
                    {leadErrors.phone && <span className="text-xs text-red-600">{leadErrors.phone}</span>}
                    <input value={leadForm.city} onChange={(e) => setLeadForm({ ...leadForm, city: e.target.value })} placeholder="City You Live In *" className={`px-3 py-2 rounded bg-gray-50 outline-none ${leadErrors.city ? 'ring-1 ring-red-500' : ''}`} />
                    {leadErrors.city && <span className="text-xs text-red-600">{leadErrors.city}</span>}
                    <select value={leadForm.course} onChange={(e) => setLeadForm({ ...leadForm, course: e.target.value })} className={`px-3 py-2 rounded bg-gray-50 outline-none ${leadErrors.course ? 'ring-1 ring-red-500' : ''}`}>
                      <option value="">Course Interested In *</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="MBA">MBA</option>
                      <option value="M.Sc">M.Sc</option>
                      <option value="PhD">PhD</option>
                    </select>
                    {leadErrors.course && <span className="text-xs text-red-600">{leadErrors.course}</span>}
                    <button onClick={submitLead} className="mt-1 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg">Submit</button>
                    <button onClick={() => setIsLeadModalOpen(false)} className="text-xs text-gray-500">Already registered? Close to continue</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NITJalandharPage;

