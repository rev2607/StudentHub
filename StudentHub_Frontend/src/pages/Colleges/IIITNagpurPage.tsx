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

// Import IIIT Nagpur data service
import { loadIIITNagpurData, type IIITNagpurData } from "../../services/collegeDataService";

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

const IIITNagpurPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [collegeData, setCollegeData] = useState<IIITNagpurData | null>(null);
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
        const data = await loadIIITNagpurData();
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
        console.error('Error loading IIIT Nagpur data:', err);
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
      try { window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'lead_open', page: 'iiit_nagpur' } })); } catch {}
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
          source: 'iiit_nagpur_page',
        })
      });
      try { window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'lead_submit', page: 'iiit_nagpur' } })); } catch {}
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

  // Right Sidebar Components
  const RightSidebar = () => (
    <div className="w-full lg:w-80 space-y-8">
      {/* Admission Predictor CTA (moved to top) */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Predict Your Chances</h3>
        <p className="text-sm text-gray-700 mb-3">Get a personalized prediction for IIIT Nagpur based on your rank and category.</p>
        <button onClick={() => setIsPredictorModalOpen(true)} className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">Try Admission Predictor</button>
      </div>

      {/* News */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest News</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <img src="/default-news.jpg" alt="News" className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">IIIT Nagpur Begins PhD Admissions 2025-26</h4>
              <p className="text-xs text-gray-500 mt-1">2 days ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/default-news.jpg" alt="News" className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2">CAT 2025 Registration Opens</h4>
              <p className="text-xs text-gray-500 mt-1">5 days ago</p>
            </div>
          </div>
            </div>
        <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">View All News</button>
      </div>

      {/* Top Courses */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Courses at IIIT Nagpur</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">B.Tech CSE</p>
                <p className="text-xs text-gray-500">₹8.87L - 11.09L</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">M.Tech CSE</p>
                <p className="text-xs text-gray-500">₹65,200</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">MBA</p>
                <p className="text-xs text-gray-500">₹2.3L</p>
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

      {/* Entrance Resources */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Entrance Resources</h3>
        <div className="space-y-2 text-sm">
          <a className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" href="https://jeeadv.ac.in" target="_blank" rel="noopener noreferrer">
            <span className="font-medium text-gray-900">JEE Advanced (UG)</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>
          <a className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer">
            <span className="font-medium text-gray-900">JoSAA Counseling</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>
          <a className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" href="https://gate.iitr.ac.in" target="_blank" rel="noopener noreferrer">
            <span className="font-medium text-gray-900">GATE (PG Engineering)</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>
          <a className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer">
            <span className="font-medium text-gray-900">CAT (MBA)</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>
          <a className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" href="https://jam.iitm.ac.in" target="_blank" rel="noopener noreferrer">
            <span className="font-medium text-gray-900">IIT JAM (M.Sc)</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="font-medium text-gray-900">Thomso Cultural Festival</div>
            <div className="text-gray-600">Nov • Workshops, concerts, competitions</div>
              </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="font-medium text-gray-900">Cognizance Tech Fest</div>
            <div className="text-gray-600">Mar • Hackathons, keynotes, expo</div>
          </div>
        </div>
      </div>

      {/* Scholarships */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Scholarships</h3>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>Merit‑cum‑Means (UG)</li>
          <li>EWS Tuition Fee Waiver</li>
          <li>SC/ST Scholarships</li>
          <li>Industry‑sponsored Fellowships (PG/PhD)</li>
        </ul>
      </div>

      {/* Cutoff Snapshot */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cutoff Snapshot (2025)</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-gray-600">B.Tech CSE</div>
            <div className="font-medium text-gray-900">AIR {collegeData?.CutoffInformation.JEEAdvanced2025.BTechCSEClosingAIR}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-gray-600">DS & AI</div>
            <div className="font-medium text-gray-900">AIR {collegeData?.CutoffInformation.JEEAdvanced2025.DataScienceAIClosingAIR}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-gray-600">ECE</div>
            <div className="font-medium text-gray-900">AIR {collegeData?.CutoffInformation.JEEAdvanced2025.ECEClosingAIR}</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-gray-600">MBA (General)</div>
            <div className="font-medium text-gray-900">{collegeData?.CutoffInformation.CATMBA2025Cutoffs.GeneralPercentile}%</div>
          </div>
        </div>
      </div>

      {/* Alumni Spotlight */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alumni Spotlight</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li className="flex items-center justify-between">
            <span>FAANG & Global Tech Leadership</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
          <li className="flex items-center justify-between">
            <span>Consulting & Finance Roles (Global)</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
          <li className="flex items-center justify-between">
            <span>Founders & Deep‑Tech Startups</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
        </ul>
      </div>

      {/* Admission Predictor CTA */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Predict Your Chances</h3>
        <p className="text-sm text-gray-700 mb-3">Get a personalized prediction for IIIT Nagpur based on your rank and category.</p>
        <button onClick={() => setIsPredictorModalOpen(true)} className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">Try Admission Predictor</button>
      </div>

      {/* Talk to a Counsellor */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Talk to a Counsellor</h3>
        <p className="text-sm text-gray-700 mb-3">Confused about branches, fees or cutoffs? Get a free 10‑min call.</p>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Request a Callback</button>
      </div>

      {/* Trending Exams */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Exams</h3>
        <div className="space-y-2 text-sm">
          <Link to="/exams/jee-advanced" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><span className="font-medium text-gray-900">JEE Advanced</span><ChevronRight className="w-4 h-4 text-gray-400"/></Link>
          <Link to="/exams/gate" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><span className="font-medium text-gray-900">GATE</span><ChevronRight className="w-4 h-4 text-gray-400"/></Link>
          <Link to="/exams/cat" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><span className="font-medium text-gray-900">CAT</span><ChevronRight className="w-4 h-4 text-gray-400"/></Link>
        </div>
      </div>

      {/* FAQs & Guides */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQs & Guides</h3>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li><Link to="#overview-admissions-full" className="text-blue-600 hover:underline">How JoSAA rounds work</Link></li>
          <li><Link to="#overview-courses-full" className="text-blue-600 hover:underline">Fees & scholarships</Link></li>
          <li><Link to="#overview-placements-full" className="text-blue-600 hover:underline">Placement policy</Link></li>
        </ul>
      </div>

      {/* Popular College Comparisons */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular College Comparisons</h3>
        <div className="space-y-2 text-sm">
          <Link to="/compare/iiit-nagpur-vs-iit-delhi" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="font-medium text-gray-900">IIIT Nagpur vs IIT Delhi</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
          <Link to="/compare/iiit-nagpur-vs-iit-bombay" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="font-medium text-gray-900">IIIT Nagpur vs IIT Bombay</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
          <Link to="/compare/iiit-nagpur-vs-iit-kanpur" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="font-medium text-gray-900">IIIT Nagpur vs IIT Kanpur</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>
      </div>

      {/* Follow & Newsletter */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
        <div className="flex gap-2 mb-3">
          <a href="#" className="px-3 py-1 rounded bg-blue-50 text-blue-700 text-sm">Twitter</a>
          <a href="#" className="px-3 py-1 rounded bg-pink-50 text-pink-700 text-sm">Instagram</a>
          <a href="#" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 text-sm">LinkedIn</a>
        </div>
        <div className="flex gap-2">
          <input type="email" placeholder="Email for updates" className="flex-1 px-3 py-2 rounded bg-gray-50 text-sm outline-none" />
          <button className="px-3 py-2 rounded bg-gray-900 text-white text-sm">Subscribe</button>
        </div>
      </div>

      {/* Mock Tests */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Practice Mock Tests</h3>
        <p className="text-sm text-gray-700 mb-3">Boost your readiness with full-length, exam‑pattern mock tests. Instant scores and detailed solutions.</p>
        <div className="grid grid-cols-1 gap-2 text-sm">
          <Link to="/mocktests/jee-main" className="px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium transition-colors">JEE Main Mock Test</Link>
          <Link to="/mocktests/jee-advanced" className="px-3 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium transition-colors">JEE Advanced Mock Test</Link>
          <Link to="/mocktests/gate" className="px-3 py-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium transition-colors">GATE Mock Test</Link>
          <Link to="/mocktests/cat" className="px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 font-medium transition-colors">CAT Mock Test</Link>
          <Link to="/mocktests/jam" className="px-3 py-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 font-medium transition-colors">IIT JAM Mock Test</Link>
        </div>
        <button onClick={() => scrollToSection('admissions', 'overview-admissions-full')} className="mt-3 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">See Eligibility & Exam Info</button>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <button onClick={() => scrollToSection('contact', 'contact-root')} className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Contact</button>
          <button onClick={() => setIsBrochureModalOpen(true)} className="px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">Download Brochure</button>
        </div>
      </div>

      {/* Learn More About */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Learn More About</h3>
        <div className="space-y-2">
          <button onClick={() => scrollToSection('courses', 'courses-root')} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="font-medium text-gray-900">Course Details</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          <button onClick={() => scrollToSection('placements', 'placements-root')} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="font-medium text-gray-900">Placement Statistics</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button onClick={() => scrollToSection('rankings', 'rankings-root')} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="font-medium text-gray-900">Rankings & Recognition</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button onClick={() => scrollToSection('facilities', 'facilities-root')} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="font-medium text-gray-900">Campus Life</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Students Also View (fills remaining sidebar height) */}
      <div className="flex-1 bg-white rounded-xl shadow-sm p-8 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Students Also View</h3>
        <div className="space-y-4 flex-1">
          {[
            { name: "IIT Delhi", rank: "2", type: "Engineering" },
            { name: "IIT Bombay", rank: "3", type: "Engineering" },
            { name: "IIT Kanpur", rank: "4", type: "Engineering" },
            { name: "IIT Kharagpur", rank: "5", type: "Engineering" },
            { name: "IIT Madras", rank: "1", type: "Engineering" }
          ].map((college, index) => (
            <Link key={index} to="/colleges" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {college.name.split(' ')[1]?.substring(0, 2) || 'IT'}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{college.name}</p>
                <p className="text-xs text-gray-500">NIRF Rank #{college.rank} • {college.type}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <InfoCard label="Established" value={collegeData.Established.Year} />
          <InfoCard label="NIRF Rank (Overall)" value={collegeData.Rankings.NIRF2025.Overall} />
          <InfoCard label="NIRF Rank (Engineering)" value={collegeData.Rankings.NIRF2025.Engineering} />
          <InfoCard label="Campus Area" value={`${collegeData.Location.CampusAreaAcres} acres`} />
          <InfoCard label="Student Strength" value={collegeData.About.StudentStrength} />
          <InfoCard label="University Type" value={collegeData.UniversityType[0]} />
          <InfoCard label="QS World Rank" value={collegeData.Rankings.QSWorld2026} />
          <InfoCard label="QS Asia Rank" value={collegeData.Rankings.QSAsia2025} />
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Historical Significance</h4>
          <p className="text-blue-800 text-sm">{collegeData.Established.HistoricalSignificance}</p>
        </div>
      </div>

      {/* Academic Programs Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Academic Programs & Fees</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg p-4 bg-gray-50">
            <h4 className="font-semibold text-lg mb-3">Undergraduate Programs</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">B.Tech:</span> {collegeData.CoursesAndFees.Undergraduate.BTech.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.FirstYearFeeINR)}/year</div>
              <div><span className="font-medium">B.Arch:</span> {collegeData.CoursesAndFees.Undergraduate.BArch.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.FirstYearFeeINR)}/year</div>
              <div><span className="font-medium">B.Des:</span> {collegeData.CoursesAndFees.Undergraduate.BDes.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BDes.FirstYearFeeINR)}/year</div>
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
              <div><span className="font-medium">Seats:</span> 900+ available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Admission Process & Cutoffs</h3>
        <p className="text-gray-700 mb-6">Admissions at IIIT Nagpur are highly competitive, with rigorous entrance examinations and strict cutoff criteria. The institute follows a merit-based selection process ensuring only the brightest minds join the community.</p>
        
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
              <div className="flex justify-between"><span>B.Tech CSE:</span> <span className="font-medium">AIR {collegeData.CutoffInformation.JEEAdvanced2025.BTechCSEClosingAIR}</span></div>
              <div className="flex justify-between"><span>Data Science & AI:</span> <span className="font-medium">AIR {collegeData.CutoffInformation.JEEAdvanced2025.DataScienceAIClosingAIR}</span></div>
              <div className="flex justify-between"><span>ECE:</span> <span className="font-medium">AIR {collegeData.CutoffInformation.JEEAdvanced2025.ECEClosingAIR}</span></div>
              <div className="flex justify-between"><span>Mechanical:</span> <span className="font-medium">AIR {collegeData.CutoffInformation.JEEAdvanced2025.MechEngClosingAIR}</span></div>
              <div className="flex justify-between"><span>B.Arch:</span> <span className="font-medium">Rank {collegeData.CutoffInformation.BArchAAT2025ClosingRank.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>MBA (General):</span> <span className="font-medium">{collegeData.CutoffInformation.CATMBA2025Cutoffs.GeneralPercentile}%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Placements & Career Opportunities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Placements & Career Opportunities</h3>
        <p className="text-gray-700 mb-6">IIIT Nagpur has an exceptional placement record with top-tier companies consistently recruiting students across all programs. The Career Development Cell ensures comprehensive preparation and support throughout the placement process.</p>
        
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
        <p className="text-gray-700 mb-6">IIIT Nagpur consistently ranks among the top engineering institutions in India and has gained international recognition for its academic excellence, research contributions, and innovation initiatives.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">National Rankings (NIRF)</h4>
            <div className="space-y-3">
              <div className="bg-yellow-50 rounded-lg p-3">
                <h5 className="font-medium">NIRF 2025</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Overall: <span className="font-medium">#{collegeData.Rankings.NIRF2025.Overall}</span></div>
                  <div>Engineering: <span className="font-medium">#{collegeData.Rankings.NIRF2025.Engineering}</span></div>
                  <div>Architecture & Planning: <span className="font-medium">#{collegeData.Rankings.NIRF2025.ArchitecturePlanning}</span></div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <h5 className="font-medium">NIRF 2024</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>Overall: <span className="font-medium">#{collegeData.Rankings.NIRF2024.Overall}</span></div>
                  <div>Innovation: <span className="font-medium">#{collegeData.Rankings.NIRF2024.Innovation}</span></div>
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
                  <div>World University: <span className="font-medium">#{collegeData.Rankings.QSWorld2026}</span></div>
                  <div>Asia University: <span className="font-medium">#{collegeData.Rankings.QSAsia2025}</span></div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <h5 className="font-medium">Other Recognitions</h5>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>India Today Engineering: <span className="font-medium">#{collegeData.Rankings.IndiaTodayEngineering2024}</span></div>
                  <div>THE Engineering: <span className="font-medium">{collegeData.Rankings.THEEngineering2020Band}</span></div>
                  <div>ARIIA: <span className="font-medium">{collegeData.Rankings.ARIIA2021}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Infrastructure */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Campus Facilities & Infrastructure</h3>
        <p className="text-gray-700 mb-6">The modern campus of IIIT Nagpur houses world-class facilities including modern hostels, state-of-the-art laboratories, extensive library resources, and comprehensive sports infrastructure to support holistic development.</p>
        
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
                  <span className="font-medium">{collegeData.Facilities.Laboratories.Quantity} labs</span> focusing on AI, ML, VLSI, IoT, Nanotechnology, and more
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
        <p className="text-gray-700 mb-6">IIIT Nagpur boasts a distinguished faculty across multiple departments, with the majority holding PhD degrees. The institute is at the forefront of research and innovation with significant contributions to various fields.</p>
        
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
        <p className="text-gray-700 mb-6">The vibrant campus life at IIIT Nagpur is characterized by a diverse community, rich cultural traditions, and numerous opportunities for personal and professional growth through clubs, societies, and events.</p>
        
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

      {/* Reviews & Contact moved to end of page */}

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
      {/* Undergraduate Programs */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Undergraduate Programs</h3>
        <p className="text-gray-700 mb-4">
          IIIT Nagpur's undergraduate offerings are designed to build a strong foundation in core disciplines while
          introducing students to cutting-edge technologies and interdisciplinary learning. With competitive intake,
          structured curricula, modern laboratories, and active industry projects, students graduate with both theoretical
          depth and hands-on problem-solving skills. The programs emphasize fundamentals, design thinking, and professional
          readiness through internships, hackathons, and mentorship from accomplished faculty.
        </p>
        
        {/* B.Tech */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">B.Tech Programs</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Undergraduate.BTech.DurationYears} years`} />
            <InfoCard label="Total Seats" value={collegeData.CoursesAndFees.Undergraduate.BTech.Seats} />
            <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.FirstYearFeeINR)} />
            <InfoCard label="Total Fees (Approx)" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.TotalFeesINRApprox)} />
          </div>

          <div className="overflow-x-auto mb-4">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Program</th>
                  <th className="text-left py-2 pr-4">Duration</th>
                  <th className="text-left py-2 pr-4">Seats</th>
                  <th className="text-left py-2 pr-4">First Year Fee</th>
                  <th className="text-left py-2">Total Fees (Approx)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="align-top hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">B.Tech</td>
                  <td className="py-2 pr-4">{collegeData.CoursesAndFees.Undergraduate.BTech.DurationYears} years</td>
                  <td className="py-2 pr-4">{collegeData.CoursesAndFees.Undergraduate.BTech.Seats}</td>
                  <td className="py-2 pr-4">{formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.FirstYearFeeINR)}</td>
                  <td className="py-2">{formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.TotalFeesINRApprox)}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <p className="text-gray-700 mt-3">
            The B.Tech programs balance rigorous coursework with project-based learning and elective flexibility. Core
            engineering fundamentals in the first year are complemented by progressively specialized courses, workshops,
            and minor/major project opportunities. Students frequently participate in national competitions and
            collaborative research, preparing them for placements and higher studies.
          </p>
        </div>

        {/* B.Arch */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">B.Arch Program</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Undergraduate.BArch.DurationYears} years`} />
            <InfoCard label="Seats" value={collegeData.CoursesAndFees.Undergraduate.BArch.Seats} />
            <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.FirstYearFeeINR)} />
            <InfoCard label="Total Fees (Approx)" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.TotalFeesINRApprox)} />
          </div>
          <p className="text-gray-700 mb-3">
            The B.Arch program nurtures design sensitivity, sustainable thinking, and structural awareness. Studios and
            juried reviews simulate industry practice, while workshops and site visits expose students to real-world
            constraints and innovative materials.
          </p>
          <div className="overflow-x-auto">
            <div className="rounded-lg bg-white">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Program</th>
                  <th className="text-left py-2 pr-4">Duration</th>
                  <th className="text-left py-2 pr-4">Seats</th>
                  <th className="text-left py-2 pr-4">First Year Fee</th>
                  <th className="text-left py-2">Total Fees (Approx)</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">B.Arch</td>
                  <td className="py-2 pr-4">{collegeData.CoursesAndFees.Undergraduate.BArch.DurationYears} years</td>
                  <td className="py-2 pr-4">{collegeData.CoursesAndFees.Undergraduate.BArch.Seats}</td>
                  <td className="py-2 pr-4">{formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.FirstYearFeeINR)}</td>
                  <td className="py-2">{formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.TotalFeesINRApprox)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h5 className="font-medium mb-1">Entrance Requirements:</h5>
            <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Undergraduate.BArch.Entrance.join(", ")}</p>
          </div>
        </div>

        {/* B.Des */}
        <div>
          <h4 className="text-lg font-medium mb-3">B.Des Program</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Undergraduate.BDes.DurationYears} years`} />
            <InfoCard label="Seats" value={collegeData.CoursesAndFees.Undergraduate.BDes.Seats} />
            <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BDes.FirstYearFeeINR)} />
            <InfoCard label="Total Fees (Approx)" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BDes.TotalFeesINRApprox)} />
          </div>
          <p className="text-gray-700 mb-3">
            The B.Des curriculum blends user research, visual thinking, prototyping, and digital fabrication. Students
            engage with real users and iterate on solutions across domains such as UI/UX, product design, and service
            systems, showcasing their work through studio exhibitions and juries.
          </p>
          <div>
            <h5 className="font-medium mb-1">Entrance Requirements:</h5>
            <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Undergraduate.BDes.Entrance.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Postgraduate Programs */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Postgraduate Programs</h3>
        <p className="text-gray-700 mb-4">
          The postgraduate ecosystem at IIIT Nagpur is research-driven and industry-aligned. Programs in engineering,
          management, and sciences emphasize advanced coursework, electives in emerging areas, and strong thesis/project
          components. Students benefit from funded research labs, innovation centers, and frequent industry seminars.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* M.Tech */}
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
            <p className="text-gray-700 mt-3">
              M.Tech students typically engage in lab-intensive courses, research assistantships, and collaborative
              projects with centers of excellence. The curriculum supports pathways into R&D roles, product engineering,
              and doctoral studies.
            </p>
          </div>

          {/* MBA */}
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
            <p className="text-gray-700 mt-3">
              The MBA program blends analytics, leadership, and industry immersion. Case studies, capstone projects, and
              live consulting engagements help students develop decision-making skills across marketing, finance,
              operations, and strategy.
            </p>
          </div>

          {/* M.Sc */}
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
            <div className="mt-2">
              <h5 className="font-medium mb-1">Entrance Requirements:</h5>
              <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Postgraduate.MSc.Entrance.join(", ")}</p>
            </div>
            <p className="text-gray-700 mt-3">
              M.Sc programs cultivate deep theoretical understanding and research skills, supporting pathways into PhD
              programs and roles in analytics, research labs, and high-tech industries.
            </p>
          </div>

          {/* PhD */}
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
            <p className="text-gray-700 mt-3">
              Doctoral scholars work with faculty on sponsored projects, publish in reputed venues, and often collaborate
              with industry and international labs. The institute provides access to advanced instrumentation and
              interdisciplinary research networks.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto mt-6">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left py-2 pr-4">Program</th>
                <th className="text-left py-2 pr-4">Seats</th>
                <th className="text-left py-2 pr-4">Duration</th>
                <th className="text-left py-2 pr-4">First Year Fee</th>
                <th className="text-left py-2">Notes</th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">MBA</td>
                <td className="py-2 pr-4">{collegeData.CoursesAndFees.Postgraduate.MBA.Seats}</td>
                <td className="py-2 pr-4">{collegeData.CoursesAndFees.Postgraduate.MBA.DurationYears} years</td>
                <td className="py-2 pr-4">{formatCurrency(collegeData.CoursesAndFees.Postgraduate.MBA.FirstYearFeeINR)}</td>
                <td className="py-2">Case-method pedagogy, industry immersion</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">M.Tech</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2 pr-4">{collegeData.CoursesAndFees.Postgraduate.MTech.DurationYears} years</td>
                <td className="py-2 pr-4">{formatCurrency(collegeData.CoursesAndFees.Postgraduate.MTech.FirstYearFeeINR)}</td>
                <td className="py-2">{collegeData.CoursesAndFees.Postgraduate.MTech.Specializations} specializations</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">M.Sc</td>
                <td className="py-2 pr-4">{collegeData.CoursesAndFees.Postgraduate.MSc.Seats}</td>
                <td className="py-2 pr-4">{collegeData.CoursesAndFees.Postgraduate.MSc.DurationYears} years</td>
                <td className="py-2 pr-4">{formatCurrency(collegeData.CoursesAndFees.Postgraduate.MSc.FirstYearFeeINR)}</td>
                <td className="py-2">Disciplines: {collegeData.CoursesAndFees.Postgraduate.MSc.Disciplines.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Hostel Fees */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Hostel & Accommodation</h3>
        <p className="text-gray-700 mb-4">
          Hostel life at IIIT Nagpur is known for its vibrant culture and supportive community. With modern rooms, study
          areas, and recreational spaces, students find a conducive environment for personal growth. Residential living
          also fosters collaboration across programs through clubs, intramurals, and cultural festivals.
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
      {/* Detailed Admissions Context (user-provided) */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Admissions at {collegeData.Name.split('(')[0].trim()}</h3>
        <p className="text-gray-700 mb-3">
          Admissions at <strong>IIIT Nagpur</strong> are among the most merit-centric and transparent in Indian higher
          education, governed by national-level examinations and centralized counseling platforms. The system ensures
          nationwide participation while adhering to Central Government reservation policies for SC, ST, OBC‑NCL, EWS,
          and PwD categories. Processes vary across undergraduate, postgraduate, and doctoral levels—each emphasizing
          academic rigor, exam performance, and interviews or research assessments where applicable.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Overview of IIIT Nagpur’s Admission Framework</h4>
        <p className="text-gray-700 mb-3">
          Founded in 2016, IIIT Nagpur structures admissions to maintain academic
          excellence and equitable access. All admissions—through <strong>JEE Advanced, GATE, CAT, JAM,</strong> or
          <strong> UCEED</strong>—are aligned to centralized systems managed by national bodies such as
          <strong> JoSAA</strong>, <strong>COAP</strong>, and respective coordination portals.
          The core goal is to align candidate merit (exam performance) with program preferences, seat availability, and
          category-based reservations. Shortlisted candidates later verify documents and eligibility at the institute.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Undergraduate Admissions</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li><strong>B.Tech & B.Arch:</strong> JEE Advanced + centralized counseling via <strong>JoSAA</strong>.</li>
          <li><strong>B.Arch:</strong> Also requires qualifying the <strong>AAT (Architecture Aptitude Test)</strong>.</li>
          <li><strong>B.Des:</strong> Admission via <strong>UCEED</strong> with centralized counseling.</li>
        </ul>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Recent Cutoffs (2025 Approx.):</span> B.Tech CSE – AIR 535; Data Science & AI – AIR 710; ECE – AIR 1394;
          Electrical – AIR 1752; Mechanical – AIR 1900; Civil – AIR 2175; B.Arch (AAT) – Rank 16,596; B.Des General – AIR 111
          (OBC – AIR 56). Admissions are finalized over multiple JoSAA rounds; seats can fluctuate due to withdrawals and
          category shifts.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Postgraduate Admissions</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li><strong>M.Tech, M.Arch, M.Plan, M.Des:</strong> Primarily through <strong>GATE</strong> with offers handled via <strong>COAP</strong>.
            Some departments may conduct interviews or portfolio reviews.</li>
          <li><strong>MBA:</strong> Based on <strong>CAT</strong> percentile followed by <strong>GD/PI</strong>. Indicative cutoffs: General – 94%, OBC – 74.5%, SC/ST – 65%.</li>
          <li><strong>M.Sc & Integrated Programs:</strong> Admission through <strong>IIT JAM</strong> with counseling via JOAPS.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Doctoral Admissions (PhD)</h4>
        <p className="text-gray-700 mb-2">
          PhD admissions blend national test scores (<strong>GATE, JEST, CSIR‑NET, UGC‑NET, CEED</strong>, etc.) with research
          potential assessments. Typical stages include shortlisting, a written test and/or interview, and evaluation of a
          research proposal aligned with departmental areas. Some departments admit exceptional integrated degree holders or
          sponsored professionals without GATE.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Counseling Mechanisms</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li><strong>JoSAA:</strong> Manages nationwide B.Tech/B.Arch seat allocation for all IITs.</li>
          <li><strong>COAP:</strong> Coordinates M.Tech seat offers across IITs.</li>
          <li><strong>UCEED/JAM Portals:</strong> Centralized counseling for Design and M.Sc programs respectively.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Reservation Policy & Verification</h4>
        <p className="text-gray-700 mb-2">
          Reservations strictly follow Central Government norms: OBC‑NCL 27%, SC 15%, ST 7.5%, EWS 10%, and PwD 5%
          horizontal reservation. Candidates must produce original certificates at the time of admission verification; failure
          results in cancellation of provisional admission.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Eligibility & Application Modes</h4>
        <p className="text-gray-700 mb-2">
          Applications are <strong>online</strong> through official national or IIT-specific portals: JEE Advanced → jeeadv.ac.in; GATE →
          gate.iitr.ac.in; CAT → iimcat.ac.in; JAM/UCEED → respective organizing IIT websites. Foreign nationals and NRIs may
          apply via <strong>DASA</strong> or <strong>ICCR scholarships</strong> with separate eligibility and fee structures.
        </p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Key Insights on Admission Trends</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li><strong>CSE and DS&AI</strong> remain highly competitive with sub‑1000 AIR closing ranks.</li>
          <li><strong>Core branches</strong> (Mechanical, Civil, Electrical) generally close between AIR 1500–2500.</li>
          <li>For postgraduate programs, <strong>GATE cutoffs</strong> vary sharply; CS/ECE often above 600 for General category.</li>
          <li><strong>MBA</strong> has strong recruiter traction (e.g., Deloitte, Amazon, Tata Steel).</li>
          <li>The <strong>PhD pipeline</strong> is growing in AI, water resources, renewable energy, and sustainable construction technologies.</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">How Admissions Work at IIIT Nagpur</h3>
        <p className="text-gray-700 mb-3">
          Admissions at IIIT Nagpur are highly structured and merit-driven. Each program is tied to a national-level
          examination with carefully defined counseling processes, category-based reservations, and institute-level
          verification. Shortlisted candidates typically proceed through centralized counseling where seat allotments are
          made based on rank, preferences, and availability.
        </p>
        <p className="text-gray-700">
          Undergraduate entries are primarily via JEE Advanced followed by JoSAA. Postgraduate programs rely on GATE,
          CAT, JAM and institute processes, while PhD admissions combine national tests with interviews and research
          proposals. Below is a compact view of typical entry routes and recent indicative cutoffs.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr>
                <th className="text-left py-2 pr-4">Program</th>
                <th className="text-left py-2 pr-4">Exam</th>
                <th className="text-left py-2 pr-4">Counseling/Selection</th>
                <th className="text-left py-2">Indicative Cutoff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-medium">B.Tech</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Exam}</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Counseling}</td>
                <td className="py-2">CSE AIR {collegeData.CutoffInformation.JEEAdvanced2025.BTechCSEClosingAIR}, DS&AI AIR {collegeData.CutoffInformation.JEEAdvanced2025.DataScienceAIClosingAIR}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">B.Arch</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Exam} + AAT</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Counseling}</td>
                <td className="py-2">AAT Rank {collegeData.CutoffInformation.BArchAAT2025ClosingRank.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">MBA</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MBA.Exam}</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MBA.AdditionalSelection.join(', ')}</td>
                <td className="py-2">General {collegeData.CutoffInformation.CATMBA2025Cutoffs.GeneralPercentile}%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">M.Tech</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.Exam}</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.Counseling}</td>
                <td className="py-2">GATE cutoffs vary by specialization</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">PhD</td>
                <td className="py-2 pr-4">{collegeData.AdmissionProcessAndEntranceExams.Doctoral.PhD.Exam.slice(0,3).join(', ')}...</td>
                <td className="py-2 pr-4">Interview + Research Proposal</td>
                <td className="py-2">Departmental shortlisting</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Admission Process */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
        
        <div className="space-y-6">
          {/* Undergraduate */}
          <div>
            <h4 className="text-lg font-medium mb-3">Undergraduate Admissions</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">B.Tech & B.Arch</h5>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Exam:</span> {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Exam}</div>
                  <div><span className="font-medium">Counseling:</span> {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.Counseling}</div>
                  {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.AdditionalTestForBArch && (
                    <div><span className="font-medium">Additional Test for B.Arch:</span> {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BTechBArch.AdditionalTestForBArch}</div>
                  )}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">B.Des</h5>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Exam:</span> {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BDes.Exam}</div>
                  <div><span className="font-medium">Counseling:</span> {collegeData.AdmissionProcessAndEntranceExams.Undergraduate.BDes.Counseling}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Postgraduate */}
          <div>
            <h4 className="text-lg font-medium mb-3">Postgraduate Admissions</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">M.Tech, M.Arch, M.Plan, M.Des</h5>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Exam:</span> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.Exam}</div>
                  <div><span className="font-medium">Counseling:</span> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.Counseling}</div>
                  <div><span className="font-medium">Additional:</span> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MTechMArchMPlanMDes.AdditionalProcesses}</div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">MBA</h5>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Exam:</span> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MBA.Exam}</div>
                  <div><span className="font-medium">Selection Process:</span> {collegeData.AdmissionProcessAndEntranceExams.Postgraduate.MBA.AdditionalSelection.join(", ")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctoral */}
          <div>
            <h4 className="text-lg font-medium mb-3">Doctoral Admissions</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Exams:</span> {collegeData.AdmissionProcessAndEntranceExams.Doctoral.PhD.Exam.join(", ")}</div>
              <div><span className="font-medium">Selection:</span> {collegeData.AdmissionProcessAndEntranceExams.Doctoral.PhD.Selection}</div>
              <div><span className="font-medium">Additional:</span> {collegeData.AdmissionProcessAndEntranceExams.Doctoral.PhD.AdditionalNotes}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cutoff Information */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Cutoff Information (2025)</h3>
        
        <div className="space-y-4">
          {/* JEE Advanced Cutoffs */}
          <div>
            <h4 className="text-lg font-medium mb-3">JEE Advanced Cutoffs (Closing AIR)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoCard label="B.Tech CSE" value={collegeData.CutoffInformation.JEEAdvanced2025.BTechCSEClosingAIR} />
              <InfoCard label="Data Science & AI" value={collegeData.CutoffInformation.JEEAdvanced2025.DataScienceAIClosingAIR} />
              <InfoCard label="ECE" value={collegeData.CutoffInformation.JEEAdvanced2025.ECEClosingAIR} />
              <InfoCard label="Mechanical Engineering" value={collegeData.CutoffInformation.JEEAdvanced2025.MechEngClosingAIR} />
              <InfoCard label="Electrical Engineering" value={collegeData.CutoffInformation.JEEAdvanced2025.ElectEngClosingAIR} />
              <InfoCard label="Civil Engineering" value={collegeData.CutoffInformation.JEEAdvanced2025.CivilEngClosingAIR} />
            </div>
          </div>

          {/* Other Program Cutoffs */}
          <div>
            <h4 className="text-lg font-medium mb-3">Other Program Cutoffs</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoCard label="B.Arch (AAT Closing Rank)" value={collegeData.CutoffInformation.BArchAAT2025ClosingRank.toLocaleString()} />
              <InfoCard label="B.Des General" value={collegeData.CutoffInformation.BDesUCEED2025ClosingRanks.General} />
              <InfoCard label="B.Des OBC" value={collegeData.CutoffInformation.BDesUCEED2025ClosingRanks.OBC} />
            </div>
          </div>

          {/* CAT MBA Cutoffs */}
          <div>
            <h4 className="text-lg font-medium mb-3">CAT MBA Cutoffs (Percentile)</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <InfoCard label="General" value={`${collegeData.CutoffInformation.CATMBA2025Cutoffs.GeneralPercentile}%`} />
              <InfoCard label="OBC" value={`${collegeData.CutoffInformation.CATMBA2025Cutoffs.OBCPercentile}%`} />
              <InfoCard label="SC/ST (Min)" value={`${collegeData.CutoffInformation.CATMBA2025Cutoffs.SCSTPercentileMin}%`} />
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">{collegeData.CutoffInformation.AdditionalDetails}</p>
      </div>

      {/* Reservation Policy */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Reservation Policy</h3>
        <p className="text-gray-700">{collegeData.AdmissionProcessAndEntranceExams.ReservationPolicy}</p>
        <div className="mt-3">
          <h4 className="font-medium mb-2">Application Mode</h4>
          <p className="text-sm text-gray-700">{collegeData.AdmissionProcessAndEntranceExams.ApplicationMode}</p>
        </div>
      </div>
    </div>
  );

  const renderPlacementsTab = () => (
    <div id="placements-root" className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Why Placements at IIIT Nagpur Stand Out</h3>
        <p className="text-gray-700 mb-3">
          IIIT Nagpur’s placement ecosystem blends academic rigor, early skill development, industry exposure, and a
          powerful alumni network—resulting in consistently high packages and diverse global opportunities. Students are
          groomed to excel in high‑pressure, real‑world environments, not just to crack interviews.
        </p>

        <h4 className="text-lg font-semibold mb-2">Institutional Strengths Driving Placements</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-4">
          <li><strong>Established Global Reputation</strong> with recruiters tracking IITR’s talent pool annually.</li>
          <li><strong>Diverse Recruiter Base</strong> (~170 companies across tech, consulting, finance, analytics, R&D, core).</li>
          <li><strong>Premier Alumni Network</strong> in FAANG, Wall Street, consulting majors, semiconductor giants, and labs.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Advanced Placement Preparation</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-4">
          <li>Year‑long training (aptitude, case interviews) integrated from the second year.</li>
          <li>Domain workshops: CP bootcamps for CSE; design/prototyping for core branches.</li>
          <li>Industry‑linked projects with ISRO, DRDO, and private R&D labs.</li>
          <li>Soft‑skill development: public speaking, client handling, cross‑cultural teamwork.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Placement Statistics Context (2024)</h4>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr>
                <th className="text-left py-2 pr-4">Metric</th>
                <th className="text-left py-2">Context</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-medium">Total Offers</td>
                <td className="py-2">805 (near 100% for eligible students)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Highest Package</td>
                <td className="py-2">₹20.5 Cr (international)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Average Package</td>
                <td className="py-2">₹19.6 L overall; CSE ~₹34.0 L; ECE ~₹30.8 L</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Domestic Highest</td>
                <td className="py-2">₹1.2 Cr</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">PPOs</td>
                <td className="py-2">155</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold mb-2">Types of Roles Offered</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-4">
          <li><strong>Technology</strong> – SDE, data engineering (Microsoft, Google, Amazon, Oracle, Apple, Qualcomm).</li>
          <li><strong>Analytics & Data Science</strong> – JP Morgan, Goldman Sachs, BCG, Flipkart.</li>
          <li><strong>Core & Hardware</strong> – TSMC, Intel, Tata Steel, ISRO, DRDO.</li>
          <li><strong>Consulting</strong> – BCG, Accenture Japan.</li>
          <li><strong>Finance</strong> – Goldman Sachs, JP Morgan (algo trading, IB, risk).</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Additional Context – Why Students Excel</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-4">
          <li>International recruiter exposure (Japan, Taiwan, USA, Europe).</li>
          <li>Specialized cells: Entrepreneurship, Industrial Relations, International Relations.</li>
          <li>Strong research credentials with MIT, ETH Zurich, NTU collaborations.</li>
          <li>High internship quality; &gt;90% of offers stem from paid internships with deliverables.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Recent Years: 2022–2025 Snapshot</h4>
        <div className="overflow-x-auto mb-4">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left py-2 pr-4">Year</th>
                <th className="text-left py-2 pr-4">Highlights</th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2025</td>
                <td className="py-2">CSE ₹34.05L; ECE ₹30.81L; EE ₹28.36L; Civil ₹16.62L; 163 recruiters; 742 offers (Phase 1); 222 PPOs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2024</td>
                <td className="py-2">Avg ~₹20L; Intl highest ₹2.05 Cr; Domestic highest ₹1.2 Cr; CSE &gt;₹34L</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2023</td>
                <td className="py-2">UG avg ~₹17L; MBA ~₹18.3L (100%); top recruiters: Google, Microsoft, GS, Oracle, Cisco</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2022</td>
                <td className="py-2">Domestic highest ₹2.15 Cr; CSE/ECE avgs &gt;₹30L; Mech/Civil ~₹18–20L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-2">Branch‑Wise Average Packages (2024)</h4>
        <div className="overflow-x-auto mb-4">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left py-2 pr-4">Branch</th>
                <th className="text-left py-2 pr-4">Average (LPA)</th>
                <th className="text-left py-2">Top Recruiters</th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">CSE</td>
                <td className="py-2 pr-4">34.07</td>
                <td className="py-2">Google, Microsoft, Cisco</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">ECE</td>
                <td className="py-2 pr-4">23.52</td>
                <td className="py-2">Texas Instruments, Qualcomm</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">Electrical</td>
                <td className="py-2 pr-4">22.1</td>
                <td className="py-2">Siemens, Tata Power</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">Mechanical</td>
                <td className="py-2 pr-4">19.56</td>
                <td className="py-2">Tata Motors, Bajaj Auto</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">Chemical</td>
                <td className="py-2 pr-4">19.43</td>
                <td className="py-2">Reliance, ONGC, BPCL</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">Civil</td>
                <td className="py-2 pr-4">15.1</td>
                <td className="py-2">L&T, Tata Projects</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">MBA</td>
                <td className="py-2 pr-4">18.3</td>
                <td className="py-2">BCG, Accenture, Goldman Sachs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-2">International vs. Domestic Packages</h4>
        <p className="text-gray-700 mb-4">
          International packages frequently exceed ₹1 Cr (software, hardware, consulting), while domestic top‑end offers
          have crossed ₹1.2 Cr in recent cycles, signaling strong outcomes for both overseas and India‑based roles.
        </p>

        <h4 className="text-lg font-semibold mb-2">Summary: Package & Recruiter Trends (2021–2025)</h4>
        <div className="overflow-x-auto">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left py-2 pr-4">Year</th>
                <th className="text-left py-2 pr-4">Avg LPA</th>
                <th className="text-left py-2 pr-4">Highest Domestic</th>
                <th className="text-left py-2 pr-4">Highest Intl</th>
                <th className="text-left py-2 pr-4">Recruiters</th>
                <th className="text-left py-2">PPOs</th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2025</td>
                <td className="py-2 pr-4">20.0+</td>
                <td className="py-2 pr-4">₹1.2 Cr</td>
                <td className="py-2 pr-4">₹2.05 Cr</td>
                <td className="py-2 pr-4">163</td>
                <td className="py-2">222</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2024</td>
                <td className="py-2 pr-4">~20.0</td>
                <td className="py-2 pr-4">₹1.2 Cr</td>
                <td className="py-2 pr-4">₹2.05 Cr</td>
                <td className="py-2 pr-4">261</td>
                <td className="py-2">213</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2023</td>
                <td className="py-2 pr-4">~17.0</td>
                <td className="py-2 pr-4">₹1.3 Cr</td>
                <td className="py-2 pr-4">₹1.06 Cr</td>
                <td className="py-2 pr-4">180+</td>
                <td className="py-2">200+</td>
                </tr>
                <tr className="hover:bg-gray-50">
                <td className="py-2 pr-4 font-medium">2022</td>
                <td className="py-2 pr-4">~16.0</td>
                <td className="py-2 pr-4">₹2.15 Cr</td>
                <td className="py-2 pr-4">₹2.15 Cr</td>
                <td className="py-2 pr-4">175+</td>
                <td className="py-2">180</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Placement Statistics */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Placement Statistics (2024)</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <InfoCard label="Total Offers" value={collegeData.Placements.Year2024.TotalOffers} />
          <InfoCard label="Recruiters" value={collegeData.Placements.Year2024.Recruiters} />
          <InfoCard label="Highest Package" value={formatCurrency(collegeData.Placements.Year2024.HighestPackageINR)} />
          <InfoCard label="Domestic Highest" value={formatCurrency(collegeData.Placements.Year2024.HighestDomesticPackageINR)} />
          <InfoCard label="Average Package" value={formatCurrency(collegeData.Placements.Year2024.OverallAveragePackageINR)} />
          <InfoCard label="CSE Average" value={formatCurrency(collegeData.Placements.Year2024.CSEAveragePackageINR)} />
          <InfoCard label="ECE Average" value={formatCurrency(collegeData.Placements.Year2024.ECEAveragePackageINR)} />
          <InfoCard label="PPOs" value={collegeData.Placements.Year2024.PPOs} />
        </div>

        {/* Top Recruiters */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Top Recruiters</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              {collegeData.Placements.Year2024.TopRecruiters.slice(0, 9).map((recruiter: string, index: number) => (
                <div key={index} className="flex items-center text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                  {recruiter}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {collegeData.Placements.Year2024.TopRecruiters.slice(9).map((recruiter: string, index: number) => (
                <div key={index} className="flex items-center text-sm">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                  {recruiter}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Profiles */}
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Job Profiles</h4>
          <div className="flex flex-wrap gap-2">
            {collegeData.Placements.Year2024.JobProfiles.map((profile: string, index: number) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {profile}
              </span>
            ))}
          </div>
        </div>

        {/* Placement Preparation */}
        <div>
          <h4 className="text-lg font-medium mb-3">Placement Preparation Support</h4>
          <div className="flex flex-wrap gap-2">
            {collegeData.Placements.Year2024.PlacementPreparation.map((prep: string, index: number) => (
              <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {prep}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRankingsTab = () => (
    <div id="rankings-root" className="space-y-6">
      {/* Rankings Narrative and Consolidated Tables (user-provided) */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">IIIT Nagpur Rankings & Recognition</h3>
        <p className="text-gray-700 mb-4">
          IIIT Nagpur is consistently ranked among India’s top institutions and continues to strengthen its global
          standing. The institute’s performance across teaching quality, research output, graduate outcomes, outreach,
          and perception is reflected in leading national and international ranking frameworks.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left py-2 px-3">Ranking Framework</th>
                <th className="text-left py-2 px-3">Category</th>
                <th className="text-left py-2 px-3">2025 Rank</th>
                <th className="text-left py-2 px-3">2024 Rank</th>
                <th className="text-left py-2 px-3">Score / Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">NIRF Overall</td>
                <td className="py-2 px-3">Overall Institution</td>
                <td className="py-2 px-3">7</td>
                <td className="py-2 px-3">8</td>
                <td className="py-2 px-3">Score ~73.06; Teaching, Research, Outcomes, Outreach, Perception</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">NIRF Engineering</td>
                <td className="py-2 px-3">Engineering Institutions</td>
                <td className="py-2 px-3">6</td>
                <td className="py-2 px-3">6</td>
                <td className="py-2 px-3">Score ~72.05; consistently top‑10 for engineering</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">NIRF Architecture & Planning</td>
                <td className="py-2 px-3">Architecture & Planning</td>
                <td className="py-2 px-3">1</td>
                <td className="py-2 px-3">1</td>
                <td className="py-2 px-3">Consistently #1 in India</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">NIRF Innovation</td>
                <td className="py-2 px-3">Innovation & Startups</td>
                <td className="py-2 px-3">25</td>
                <td className="py-2 px-3">25</td>
                <td className="py-2 px-3">Recognized for a strong innovation ecosystem</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">QS World University Rankings</td>
                <td className="py-2 px-3">Worldwide</td>
                <td className="py-2 px-3">335</td>
                <td className="py-2 px-3">—</td>
                <td className="py-2 px-3">Global research, teaching, international outlook</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">QS Asia University Rankings</td>
                <td className="py-2 px-3">Asia</td>
                <td className="py-2 px-3">130</td>
                <td className="py-2 px-3">—</td>
                <td className="py-2 px-3">Strong among Asian technical universities</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">India Today</td>
                <td className="py-2 px-3">Engineering (Government)</td>
                <td className="py-2 px-3">5</td>
                <td className="py-2 px-3">5</td>
                <td className="py-2 px-3">Stable rank; strong teaching and research</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">THE Engineering Band</td>
                <td className="py-2 px-3">Global</td>
                <td className="py-2 px-3">301–400</td>
                <td className="py-2 px-3">—</td>
                <td className="py-2 px-3">Global competitiveness in engineering</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3 font-medium">ARIIA</td>
                <td className="py-2 px-3">Innovation & Entrepreneurship</td>
                <td className="py-2 px-3">Excellent</td>
                <td className="py-2 px-3">—</td>
                <td className="py-2 px-3">Awards for outstanding innovation efforts</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold mb-2">NIRF 2025 Scores (Overall Category)</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left py-2 px-3">Parameter</th>
                <th className="text-left py-2 px-3">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3">Teaching Learning Resources (TLR)</td>
                <td className="py-2 px-3">~73.06</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3">Research & Professional Practice (RPC)</td>
                <td className="py-2 px-3">~72.05</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3">Graduation Outcomes (GO)</td>
                <td className="py-2 px-3">~82.90</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3">Outreach & Inclusivity (OI)</td>
                <td className="py-2 px-3">~64.95</td>
              </tr>
              <tr className="odd:bg-gray-50 hover:bg-gray-100/60 transition-colors">
                <td className="py-2 px-3">Perception</td>
                <td className="py-2 px-3">~51.24</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          IIIT Nagpur is a growing institute with a focus on IT education and research excellence.
          Internationally, it is #335 in QS World (2026) and #130 in QS Asia (2025), with THE placing engineering in the
          301–400 band. These reflect strong academics, research, innovation, and global presence.
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h5 className="font-semibold mb-2">Research Excellence & Impact</h5>
            <p>
              Broad, well‑funded research portfolio with national missions (e.g., water, sustainability, disaster
              resilience) and international collaborations translating into societal outcomes.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Graduate Outcomes & Industry Linkages</h5>
            <p>
              Strong placements across software, core engineering, consulting, and finance; vibrant startup ecosystem and
              industry partnerships drive career success.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Understanding IIIT Nagpur’s Rankings</h3>
        <p className="text-gray-700 mb-3">
          Rankings reflect IIIT Nagpur’s consistent performance in teaching, research output, innovation, graduate
          outcomes, and international visibility. Nationally, the institute is among the top engineering schools; globally,
          it features in reputed lists such as QS and THE, indicating strong competitiveness and alumni impact.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr>
                <th className="text-left py-2 pr-4">Framework</th>
                <th className="text-left py-2 pr-4">Category</th>
                <th className="text-left py-2">Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-medium">NIRF 2025</td>
                <td className="py-2 pr-4">Overall / Engineering / Arch & Planning</td>
                <td className="py-2">#{collegeData.Rankings.NIRF2025.Overall} / #{collegeData.Rankings.NIRF2025.Engineering} / #{collegeData.Rankings.NIRF2025.ArchitecturePlanning}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">NIRF 2024</td>
                <td className="py-2 pr-4">Overall / Innovation</td>
                <td className="py-2">#{collegeData.Rankings.NIRF2024.Overall} / #{collegeData.Rankings.NIRF2024.Innovation}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">QS</td>
                <td className="py-2 pr-4">World / Asia</td>
                <td className="py-2">#{collegeData.Rankings.QSWorld2026} / #{collegeData.Rankings.QSAsia2025}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* NIRF Rankings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">NIRF Rankings</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">NIRF 2025</h4>
            <div className="space-y-3">
              <InfoCard label="Overall" value={collegeData.Rankings.NIRF2025.Overall} />
              <InfoCard label="Engineering" value={collegeData.Rankings.NIRF2025.Engineering} />
              <InfoCard label="Architecture & Planning" value={collegeData.Rankings.NIRF2025.ArchitecturePlanning} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">NIRF 2024</h4>
            <div className="space-y-3">
              <InfoCard label="Overall" value={collegeData.Rankings.NIRF2024.Overall} />
              <InfoCard label="Innovation" value={collegeData.Rankings.NIRF2024.Innovation} />
            </div>
          </div>
        </div>
      </div>

      {/* International Rankings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">International Rankings</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard label="QS World University Rankings 2026" value={collegeData.Rankings.QSWorld2026} />
          <InfoCard label="QS Asia University Rankings 2025" value={collegeData.Rankings.QSAsia2025} />
          <InfoCard label="India Today Engineering 2024" value={collegeData.Rankings.IndiaTodayEngineering2024} />
          <InfoCard label="THE Engineering Band 2020" value={collegeData.Rankings.THEEngineering2020Band} />
          <InfoCard label="ARIIA 2021" value={collegeData.Rankings.ARIIA2021} />
        </div>
      </div>
    </div>
  );

  const renderFacilitiesTab = () => (
    <div id="facilities-root" className="space-y-6">
      {/* Rich Facilities Narrative (user-provided) */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">A Holistic, Self‑Contained 365‑Acre Campus</h3>
        <p className="text-gray-700 mb-4">
          The campus is not only an academic hub but a self‑contained environment designed to nurture holistic student
          development, innovation, and community living. Beyond classrooms and labs, modern infrastructure blends with
          eco‑sustainability to support intellectual, physical, and social growth.
        </p>

        <h4 className="text-lg font-semibold mb-2">Academic and Research Environment</h4>
        <p className="text-gray-700 mb-3">
          The institute promotes interdisciplinary collaboration through more than 120 laboratories and specialized
          centers in <strong>artificial intelligence, machine learning, nanotechnology, robotics, biotechnology,</strong>
          and <strong>sustainable engineering</strong>. Incubation centers and industry partnerships empower prototyping,
          patents, and high‑impact publications.
        </p>

        <h4 className="text-lg font-semibold mb-2">Learning Infrastructure</h4>
        <p className="text-gray-700 mb-3">
          The <strong>Mahatma Gandhi Central Library</strong> (≈85,000 sq ft) anchors the academic ecosystem with
          <strong>360,000+ books</strong> and <strong>8,000+ e‑journals</strong>, AI‑powered catalogues, digital pods, and
          quiet zones. It operates 24/7, supports inter‑library loans nationwide, and hosts seminars and author talks.
        </p>

        <div className="overflow-x-auto mb-4">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Facility</th>
                  <th className="text-left py-2 pr-4">Highlights</th>
                  <th className="text-left py-2">Key Numbers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Central Library</td>
                  <td className="py-2 pr-4">AI catalogue, digital pods, 24/7 access</td>
                  <td className="py-2">85k sq ft • 3.6L+ books • 8k+ e‑journals</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Research Labs</td>
                  <td className="py-2 pr-4">AI/ML, Nano, Robotics, Sustainable Engg.</td>
                  <td className="py-2">120+ laboratories</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-2">Laboratories and Innovation Spaces</h4>
        <p className="text-gray-700 mb-3">
          Academic blocks host clusters with <strong>supercomputing</strong>, advanced sensors, 3D printers, and
          prototyping devices. Maker spaces such as the Fabrication Lab and Drone Hub enable rapid productization, while
          annual hackathons and tech fests showcase innovations to industry experts.
        </p>

        <h4 className="text-lg font-semibold mb-2">Hostel and Residential Life</h4>
        <p className="text-gray-700 mb-3">
          With modern hostels for diverse needs, residences feature Wi‑Fi, study rooms, lounges, indoor games,
          nutritious messes, student‑run quality committees, laundry, 24×7 water, and medical assistance. Cultural nights
          and inter‑hostel events create a vibrant community.
        </p>

        <h4 className="text-lg font-semibold mb-2">Wellness and Sports</h4>
        <p className="text-gray-700 mb-3">
          The campus supports sport and well‑being with an <strong>Olympic‑size pool</strong>, synthetic tracks, indoor
          stadium, and courts for cricket, hockey, football, tennis, and badminton. The <strong>Gym & Yoga Center</strong>
          and a dedicated <strong>Wellness Cell</strong> provide training, meditation, workshops, and peer counselling.
        </p>

        <h4 className="text-lg font-semibold mb-2">Medical and Support Services</h4>
        <p className="text-gray-700 mb-3">
          <strong>B.C. Roy Hospital</strong> offers 24×7 primary care, emergency response, specialist OPD, ambulance, and
          pharmacy support, coordinating with nearby hospitals for advanced treatment and preventive check‑ups.
        </p>

        <h4 className="text-lg font-semibold mb-2">Community & Daily Amenities</h4>
        <p className="text-gray-700 mb-3">
          Daily life is seamless with on‑campus <strong>banks, ATMs, bookstores, post office, supermarkets, guest houses,
          day care, auditoriums,</strong> and <strong>conference halls</strong>. Eco‑friendly shuttles and ample parking aid
          mobility; campus safety is ensured via CCTV, emergency helplines, and 24/7 monitoring.
        </p>

        <h4 className="text-lg font-semibold mb-2">Student Societies and Campus Culture</h4>
        <p className="text-gray-700 mb-3">
          A thriving community of <strong>50+ clubs</strong> spans technical, cultural, entrepreneurial, and social causes.
          Robotics, Formula Student, and Drones clubs power engineering creativity; arts societies foster expression; NSS
          and NCC promote service and discipline. The Entrepreneurship Cell incubates ideas into funded ventures.
        </p>

        <h4 className="text-lg font-semibold mb-2">Sustainability and Green Practices</h4>
        <p className="text-gray-700 mb-3">
          The campus emphasizes environmental responsibility through energy‑efficient buildings, solar lighting, waste
          segregation, water recycling, tree‑lined avenues, and biodiversity gardens—blending technology with ecology.
        </p>

        <div className="overflow-x-auto">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Dimension</th>
                  <th className="text-left py-2 pr-4">What It Enables</th>
                  <th className="text-left py-2">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Innovation</td>
                  <td className="py-2 pr-4">Prototype → Patent → Product</td>
                  <td className="py-2">Maker spaces, drone lab, supercomputing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Well‑being</td>
                  <td className="py-2 pr-4">Physical & mental health</td>
                  <td className="py-2">Pool, stadium, Gym/Yoga, Wellness Cell</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Community</td>
                  <td className="py-2 pr-4">Inclusive campus culture</td>
                  <td className="py-2">50+ clubs, festivals, open‑mics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-2 mb-2">Overall Student Experience</h4>
        <p className="text-gray-700">
          The atmosphere balances <strong>academic intensity</strong> with <strong>emotional well‑being</strong> and
          <strong> community belonging</strong>. With global exchanges, leadership programs, and mentorship, students
          graduate industry‑ready and personally enriched.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Campus Facilities & Student Experience</h3>
        <p className="text-gray-700 mb-3">
          The 200-acre campus is planned for academic rigor and balanced living. High-quality hostels, libraries,
          laboratories, sports complexes, and medical services create a complete ecosystem that supports learning and
          wellbeing. Student clubs and maker spaces further enhance hands-on creativity and leadership.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr>
                <th className="text-left py-2 pr-4">Facility</th>
                <th className="text-left py-2 pr-4">Highlights</th>
                <th className="text-left py-2">Key Numbers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-medium">Hostels</td>
                <td className="py-2 pr-4">Wi‑Fi, study rooms, recreation</td>
                <td className="py-2">{collegeData.Facilities.Hostels.Number} hostels</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Library</td>
                <td className="py-2 pr-4">24/7 access, digital resources</td>
                <td className="py-2">{collegeData.Facilities.Library.BookCount.toLocaleString()} books, {collegeData.Facilities.Library.EJournalsCount.toLocaleString()} e‑journals</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Labs</td>
                <td className="py-2 pr-4">AI, VLSI, IoT, Nano, more</td>
                <td className="py-2">{collegeData.Facilities.Laboratories.Quantity} laboratories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Hostels */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Hostel Facilities</h3>
        <p className="text-gray-700 mb-3">
          Residential life anchors the IIIT Nagpur experience. With modern hostels spanning boys, girls, married and co‑ed
          residences, students find a safe, connected environment. Wi‑Fi connectivity, common study rooms, recreation
          lounges and student‑run mess committees support academic focus and community bonding in equal measure.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <InfoCard label="Number of Hostels" value={collegeData.Facilities.Hostels.Number} />
            <div className="mt-3">
              <h4 className="font-medium mb-2">Hostel Types</h4>
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
            <h4 className="font-medium mb-2">Amenities</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              {collegeData.Facilities.Hostels.Amenities.map((amenity: string, index: number) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Library */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Library Facilities</h3>
        <p className="text-gray-700 mb-3">
          The Mahatma Gandhi Central Library functions as the academic nucleus. Its 24/7 access policy and rich print‑and‑
          digital collections enable uninterrupted research. From group study zones to AI‑assisted search, the spaces are
          engineered to support deep work, collaboration and scholarly dissemination.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <InfoCard label="Name" value={collegeData.Facilities.Library.Name} />
            <InfoCard label="Area" value={`${collegeData.Facilities.Library.AreaSqFt.toLocaleString()} sq ft`} />
            <InfoCard label="Books" value={`${collegeData.Facilities.Library.BookCount.toLocaleString()}`} />
            <InfoCard label="E-Journals" value={`${collegeData.Facilities.Library.EJournalsCount.toLocaleString()}`} />
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Features</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              {collegeData.Facilities.Library.Features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Laboratories */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Laboratory Facilities</h3>
        <p className="text-gray-700 mb-3">
          Laboratories translate classroom theory into hands‑on exploration. Supercomputing clusters, advanced sensors,
          additive manufacturing and prototyping devices empower students to iterate quickly and publish credible results
          in collaboration with faculty and research centers.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <InfoCard label="Number of Labs" value={collegeData.Facilities.Laboratories.Quantity} />
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {collegeData.Facilities.Laboratories.FocusAreas.map((area: string, index: number) => (
                  <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Equipment</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              {collegeData.Facilities.Laboratories.Equipment.map((equipment: string, index: number) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sports Facilities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Sports Facilities</h3>
        <p className="text-gray-700 mb-3">
          A comprehensive athletics ecosystem balances academic intensity with wellbeing. From the Olympic‑size pool to
          indoor arenas and outdoor fields, facilities accommodate both competitive athletes and recreational users.
          Wellness programs at the Gym & Yoga Center build lifelong fitness habits.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {collegeData.Facilities.SportsFacilities.Features.map((facility: string, index: number) => (
            <div key={index} className="flex items-center text-sm">
              <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
              {facility}
            </div>
          ))}
        </div>
      </div>

      {/* Medical Facilities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Medical Facilities</h3>
        <p className="text-gray-700 mb-3">
          Campus healthcare prioritizes prevention and rapid response. With primary care, specialist OPD, emergency and
          ambulance services on site, students receive timely support and referrals when required.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <InfoCard label="Facility Name" value={collegeData.Facilities.Medical.FacilityName} />
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Services</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              {collegeData.Facilities.Medical.Services.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Other Amenities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Other Amenities</h3>
        <p className="text-gray-700 mb-3">
          Day‑to‑day conveniences—from banks and bookstores to guest houses and campus shuttles—make the 365‑acre campus
          function like a compact city. Event infrastructure (auditoriums and conference halls) keeps the academic and
          cultural calendar active throughout the year.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {collegeData.Facilities.OtherAmenities.map((amenity: string, index: number) => (
            <div key={index} className="flex items-center text-sm">
              <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
              {amenity}
            </div>
          ))}
        </div>
      </div>

      {/* Student Clubs */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Student Clubs & Societies</h3>
        <p className="text-gray-700 mb-3">
          Clubs act as launchpads for leadership and creativity. Technical teams compete internationally; cultural
          societies sustain a vibrant campus life; E‑Cell and social impact clubs channel ideas into products and service.
          With 50+ active groups, there is a niche for every interest area.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <InfoCard label="Total Clubs" value={collegeData.Facilities.StudentClubs.Number} />
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Club Types</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              {collegeData.Facilities.StudentClubs.Types.map((type: string, index: number) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFacultyTab = () => (
    <div className="space-y-6">
      {/* Rich Faculty Narrative (user-provided) */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Faculty Strength, Research Culture & Global Collaborations</h3>
        <p className="text-gray-700 mb-3">
          IIIT Nagpur's faculty and research ecosystem is among the strongest in India. With a strong faculty
          across multiple departments, the institute sustains a robust, interdisciplinary environment spanning
          fundamental sciences, engineering, and emerging domains. Faculty drive national missions, global partnerships,
          and translational research impacting both industry and society.
        </p>

        <h4 className="text-lg font-semibold mb-2">Research Ecosystem and Culture</h4>
        <p className="text-gray-700 mb-3">
          Centers of excellence and specialized laboratories connect departments and international partners. In 2024, the
          institute secured <strong>₹399 crore</strong> in research funding, underscoring its prominence as an R&amp;D
          collaborator. Projects frequently link core disciplines (Civil, Mechanical, Electrical) with new‑age areas such
          as AI, climate science, and bioengineering. Faculty publish in high‑impact venues (Nature Communications, IEEE
          Transactions, ACS Applied Materials &amp; Interfaces) and hold fellowships (INAE, NASI, IEEE). <strong>146
          patents</strong> were filed in 2024, translating fundamental research into deployable technologies.
        </p>

        <div className="overflow-x-auto mb-4">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Dimension</th>
                  <th className="text-left py-2 pr-4">Highlights</th>
                  <th className="text-left py-2">2024 Indicators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Faculty Strength</td>
                  <td className="py-2 pr-4">Strong faculty across multiple departments</td>
                  <td className="py-2">Majority PhD‑qualified</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Research Funding</td>
                  <td className="py-2 pr-4">Govt. missions &amp; industry grants</td>
                  <td className="py-2">≈ ₹399 Cr</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Patents &amp; IP</td>
                  <td className="py-2 pr-4">Translational R&amp;D and incubation</td>
                  <td className="py-2">146 patents filed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-2">Faculty Composition & Academic Leadership</h4>
        <p className="text-gray-700 mb-3">
          Most faculty members hold doctorates from IITs, IISc, or global universities (Cambridge, ETH Zurich, MIT).
          Growth areas include the Department of Design Innovation and interdisciplinary centers like Biomedical
          Engineering, reflecting IIIT Nagpur’s future‑oriented academic model.
        </p>

        <h4 className="text-lg font-semibold mb-2">Key Research Centers and Specializations</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-4">
          <li><strong>Disaster Management &amp; Water Resources</strong> – Hydrology, flood risk, policy frameworks.</li>
          <li><strong>Smart Materials &amp; Nanotechnology</strong> – Energy harvesting, flexible electronics, sensors.</li>
          <li><strong>Biomedical Engineering</strong> – Low‑cost diagnostics and bioinformatics.</li>
          <li><strong>Energy &amp; Environment</strong> – Renewables, waste‑to‑energy, carbon capture.</li>
          <li><strong>Entrepreneurship Cell</strong> – Bridges research and startup incubation.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Global and Industry Collaborations</h4>
        <p className="text-gray-700 mb-3">
          Active MoUs with MIT, Cambridge, NTU, and TUM enable exchanges, joint supervision, and consortia participation
          (e.g., Horizon Europe). Partnerships with ISRO, DRDO, ONGC, Siemens, and Tata Group drive sponsored research
          and technology transfer aligned to industry needs.
        </p>

        <div className="overflow-x-auto mb-4">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Collaboration</th>
                  <th className="text-left py-2 pr-4">Focus</th>
                  <th className="text-left py-2">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">MIT / Cambridge / NTU / TUM</td>
                  <td className="py-2 pr-4">Faculty exchange, joint supervision</td>
                  <td className="py-2">Joint publications, shared grants</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">ISRO / DRDO / ONGC / Siemens / Tata</td>
                  <td className="py-2 pr-4">Sponsored research &amp; tech transfer</td>
                  <td className="py-2">Prototypes, pilots, patents</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-2">Faculty Achievements & Student Engagement</h4>
        <p className="text-gray-700 mb-3">
          Faculty serve as reviewers, editors, and keynote speakers globally. Mentorship is central: student teams under
          faculty guidance excel at SAE BAJA, Smart India Hackathon, and international robotics contests. Student feedback
          highlights expertise and engagement; many courses integrate experiential learning and projects.
        </p>

        <h4 className="text-lg font-semibold mb-2">Selected Faculty</h4>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          <ul className="list-disc ml-5 space-y-1">
            <li>Dr. Jaydev Dabas, Professor</li>
            <li>Dr. Millie Pant, Professor</li>
            <li>Dr. Rajan Arora, Professor</li>
            <li>Dr. Pankaj Gautam, Assistant Professor Gr.-I</li>
            <li>Dr. Ekant Sharma, Assistant Professor Gr.-I, ECE</li>
            <li>Dr. Gowrish B., Assistant Professor Gr.-I, ECE</li>
            <li>Dr. Sandeep Kumar Singh, Assistant Professor Gr.-I</li>
            <li>Dr. Saravana Kumar M., Assistant Professor Gr.-I</li>
          </ul>
          <ul className="list-disc ml-5 space-y-1">
            <li>Dr. Saurabh Khanna, Assistant Professor Gr.-I</li>
            <li>Dr. Tanmoy Pramanik, Assistant Professor Gr.-I</li>
            <li>Dr. Utpal Dey, Assistant Professor Gr.-I</li>
            <li>Dr. Amita Giri, Assistant Professor Gr.-II</li>
            <li>Dr. D. Bharat, Assistant Professor Gr.-I, HSS</li>
            <li>Dr. L. T. K. Das, Assistant Professor Gr.-I</li>
            <li>Dr. Manish Kumar Singh, Assistant Professor Gr.-I</li>
            <li>Dr. Pavan Kumar Satuluri, Assistant Professor Gr.-I</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mt-3 mb-2">Department Highlights</h4>
        <div className="overflow-x-auto">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Department</th>
                  <th className="text-left py-2 pr-4">Focus Areas</th>
                  <th className="text-left py-2">Representative Faculty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Management Studies</td>
                  <td className="py-2 pr-4">Market microstructure, macroeconomics, digital finance</td>
                  <td className="py-2">Prof. Prachi Jain; Prof. Sujata Kar; Prof. Ashu Khanna; Prof. Anamika K. Kulbhaskar; Prof. Kalpak Kulkarni</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Electrical Engineering</td>
                  <td className="py-2 pr-4">Smart power networks, renewable systems, instrumentation</td>
                  <td className="py-2">Prof. Vishal Kumar; Dr. Abdul Saleem Mir; Dr. K. B. Nandapurkar; Dr. M. Felix Orlando</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Design Innovation</td>
                  <td className="py-2 pr-4">Human‑centered design, systems engineering</td>
                  <td className="py-2">Prof. Apurbba Kumar (HoD)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Civil &amp; Data Science</td>
                  <td className="py-2 pr-4">Transportation systems, data‑driven planning</td>
                  <td className="py-2">Prof. Indrajit Ghosh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-lg font-semibold mt-3 mb-2">Research Funding & Recognition</h4>
        <p className="text-gray-700">
          Funding sources include the Ministry of Education, DST, CSIR, DBT, ISRO, and international grants. Award‑winning
          innovations span renewable energy, disaster mitigation, and AI‑assisted healthcare. IIIT Nagpur balances academic
          rigor with national priorities and global partnerships, making it one of India’s most research‑driven academic
          communities.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Faculty Strength & Research Culture</h3>
        <p className="text-gray-700 mb-3">
          With a large cohort of accomplished faculty across departments, IIIT Nagpur sustains a vibrant research
          ecosystem. Faculty members publish in leading venues, attract substantial research funding, and mentor student
          teams that participate in national and international competitions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-600">
              <tr>
                <th className="text-left py-2 pr-4">Metric</th>
                <th className="text-left py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pr-4 font-medium">Faculty Members</td>
                <td className="py-2">{collegeData.FacultyAndDepartments.Strength.FacultyCount}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Departments</td>
                <td className="py-2">{collegeData.FacultyAndDepartments.DepartmentsCount}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Patents (2024)</td>
                <td className="py-2">{collegeData.FacultyAndDepartments.Strength.Patents2024}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Research Funds (2024)</td>
                <td className="py-2">{formatCurrency(collegeData.FacultyAndDepartments.Strength.ResearchFundsINR2024)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Faculty Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Faculty Overview</h3>
        <p className="text-gray-700 mb-3">
          The following metrics summarize scale and momentum—headcount, departments, research funding and patents—while
          the narrative above adds color on how these translate into publications, prototypes and policy impact.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <InfoCard label="Total Faculty" value={collegeData.FacultyAndDepartments.Strength.FacultyCount} />
            <InfoCard label="Departments" value={collegeData.FacultyAndDepartments.DepartmentsCount} />
            <InfoCard label="Patents Filed (2024)" value={collegeData.FacultyAndDepartments.Strength.Patents2024} />
            <InfoCard label="Research Funds (2024)" value={formatCurrency(collegeData.FacultyAndDepartments.Strength.ResearchFundsINR2024)} />
          </div>
          
          <div>
            <InfoCard label="PhD Faculty" value={collegeData.FacultyAndDepartments.Strength.PhDs} />
            <div className="mt-4">
              <h4 className="font-medium mb-2">Student Feedback</h4>
              <p className="text-sm text-gray-700">{collegeData.FacultyAndDepartments.StudentFeedback}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Departments</h3>
        <p className="text-gray-700 mb-3">
          Departments span classical engineering, sciences, management, humanities and design. This breadth enables
          interdisciplinary electives and co‑advised research, increasingly important for data‑driven engineering and
          sustainability‑centric work.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {collegeData.FacultyAndDepartments.DepartmentsList.map((dept: string, index: number) => (
            <div key={index} className="flex items-center text-sm">
              <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
              {dept}
            </div>
          ))}
        </div>
      </div>

      {/* Research Centers */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Research Centers</h3>
        <p className="text-gray-700 mb-3">
          Centers accelerate collaboration, funding and technology transfer. From hydrology and disaster management to
          nanotechnology and biomedical engineering, these hubs connect faculty with national missions and industry labs.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {collegeData.FacultyAndDepartments.ResearchCenters.map((center: string, index: number) => (
            <div key={index} className="flex items-center text-sm">
              <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
              {center}
            </div>
          ))}
        </div>
      </div>

      {/* Collaborations */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Global Collaborations</h3>
        <p className="text-gray-700 mb-3">
          International MoUs translate into joint advisement, shared facilities and co‑authored work. They also open
          mobility pathways for doctoral candidates and strengthen the institute’s visibility in global rankings.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {collegeData.FacultyAndDepartments.Collaborations.map((collab: string, index: number) => (
            <div key={index} className="flex items-center text-sm">
              <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
              {collab}
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Activities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Faculty Activities</h3>
        <p className="text-gray-700 mb-3">
          Activities reflect a research‑led teaching culture: conference keynotes, editorial board roles, and doctoral
          mentoring sit alongside consulting and standards contributions.
        </p>
        <div className="space-y-2">
          {collegeData.FacultyAndDepartments.FacultyActivities.map((activity: string, index: number) => (
            <div key={index} className="flex items-center text-sm">
              <ChevronRight className="w-4 h-4 mr-2 text-orange-600" />
              {activity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReviewsTab = () => (
    <div className="space-y-6">
      {/* Rich Reviews Narrative (user-provided) */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Student & Alumni Perspectives on {collegeData.Name.split('(')[0].trim()}</h3>
        <p className="text-gray-700 mb-3">
          Established in 2016, IIIT Nagpur is widely regarded as a premier
          engineering and technology institution. Reviews consistently highlight a rigorous academic atmosphere, world‑class
          faculty, and a highly competitive peer network set against a vibrant, historic campus.
        </p>

        <h4 className="text-lg font-semibold mb-2">Expanded Student and Alumni Perspectives</h4>
        <p className="text-gray-700 mb-3">
          Students appreciate both theoretical depth and practical exposure through seminars, industry collaborations, and
          research projects. Peer culture is motivating; hostel life is community‑oriented with strong participation in
          technical societies and cultural clubs. Flagship fests like <em>Cognizance</em> (tech) and <em>Thomso</em>
          (cultural) build leadership and event management skills. While demanding, the curriculum’s rigor pays dividends
          for competitive exams, higher studies abroad, and corporate roles.
        </p>

        <h4 className="text-lg font-semibold mb-2">Placement Ecosystem</h4>
        <p className="text-gray-700 mb-3">
          Recruiters span top MNCs, consulting firms, and tech giants. Offers cut across core engineering, software,
          finance, analytics, and research roles. International packages sometimes exceed ₹1 Cr, while domestic medians are
          robust across branches. A responsive alumni network supports internships, mentorship, and off‑campus pathways.
        </p>

        <h4 className="text-lg font-semibold mb-2">Research & Innovation Landscape</h4>
        <p className="text-gray-700 mb-3">
          Centers of excellence, global tie‑ups, and grants (DST, CSIR, international) encourage participation in
          hydrology, advanced computing, nanotechnology, renewables, and AI. Competition for lab positions is strong,
          reflecting high demand for cutting‑edge projects.
        </p>

        <h4 className="text-lg font-semibold mb-2">Cultural & Co‑Curricular Life</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-3">
          <li><strong>Technical societies</strong> (IEEE, ASME, robotics) build applied skills.</li>
          <li><strong>Sports</strong> culture features inter‑IIT participation and extensive facilities.</li>
          <li><strong>Arts & literature</strong> clubs run debates, music, dramatics, and publications.</li>
          <li><strong>Festivals</strong> like Thomso draw national attention and celebrity line‑ups.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Areas That See Regular Debate</h4>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-3">
          <li>Mess food quality can be inconsistent; menus feel repetitive at times.</li>
          <li>Infrastructure strain during peak usage leads to occasional lab and elective bottlenecks.</li>
          <li>Academic intensity leaves limited flexibility for self‑paced learning or entrepreneurship for some.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Return on Investment & Prestige</h4>
        <p className="text-gray-700 mb-4">
          With comparatively low fees and strong outcomes, ROI is considered excellent. The IIIT Nagpur brand has global
          recognition; alumni progress into leadership roles across industry, academia, and public service.
        </p>

        <div className="overflow-x-auto">
          <div className="rounded-lg bg-white">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left py-2 pr-4">Theme</th>
                  <th className="text-left py-2 pr-4">Summary</th>
                  <th className="text-left py-2">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Academics</td>
                  <td className="py-2 pr-4">Rigorous courses, strong theory + application</td>
                  <td className="py-2">High readiness for exams, research, industry</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Placements</td>
                  <td className="py-2 pr-4">Diverse roles; strong domestic & international outcomes</td>
                  <td className="py-2">Excellent ROI; global mobility</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Campus Life</td>
                  <td className="py-2 pr-4">Active clubs, fests, sports; collaborative hostels</td>
                  <td className="py-2">Leadership, networks, personal growth</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 pr-4 font-medium">Challenges</td>
                  <td className="py-2 pr-4">Mess variety, lab bottlenecks, intense pace</td>
                  <td className="py-2">Time‑management and planning needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-2xl font-semibold mb-4">Contacting IIIT Nagpur Effectively</h3>
        <p className="text-gray-700 mb-3">
          For admissions and program-specific queries, use official channels and include your application details (name,
          application ID, program, and question) for faster responses. For urgent issues, phone lines and the institute
          website are the quickest routes; for documentation requests, email works best.
        </p>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>Admissions window updates are regularly posted on the institute website.</li>
          <li>Use official emails for verifiable responses and record-keeping.</li>
          <li>Refer to department pages for faculty-specific academic inquiries.</li>
        </ul>
      </div>
      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        
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

      {/* Action Buttons */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button onClick={() => setIsBrochureModalOpen(true)} className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Download Brochure
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Mail className="w-5 h-5 mr-2" />
            Apply Now
          </button>
          <button onClick={() => setIsPredictorModalOpen(true)} className="flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors md:col-span-2">
            <TrendingUp className="w-5 h-5 mr-2" />
            Will You Get In? (Predict Chances)
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
                    src="/images/iiit-nagpur-logo.png" 
                    alt="IIIT Nagpur Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.logo-svg')) {
                        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        svg.setAttribute('viewBox', '0 0 100 100');
                        svg.setAttribute('class', 'logo-svg w-full h-full');
                        svg.innerHTML = '<rect x="15" y="30" width="12" height="50" fill="#6b7280"/><rect x="31" y="30" width="12" height="50" fill="#6b7280"/><rect x="47" y="30" width="12" height="50" fill="#6b7280"/><path d="M 63 30 L 63 80 L 85 55 Z" fill="#a855f7" stroke="#9333ea" stroke-width="2"/><circle cx="85" cy="30" r="4" fill="#a855f7"/><path d="M 85 26 Q 80 20, 75 20 Q 80 15, 85 20" fill="#a855f7" opacity="0.6"/><text x="50" y="95" font-family="Arial, sans-serif" font-size="7" fill="#6b7280" text-anchor="middle">IIIT NAGPUR</text>';
                        parent.appendChild(svg);
                      }
                    }}
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
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  NIRF Rank #{collegeData.Rankings.NIRF2025.Overall}
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Engineering Rank #{collegeData.Rankings.NIRF2025.Engineering}
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  Architecture Rank #{collegeData.Rankings.NIRF2025.ArchitecturePlanning}
                </span>
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
                Apply Now
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
          
          {/* Right Sidebar (fixed on large screens with its own scroll, stays till end) */}
          <div ref={sidebarRef} className="lg:order-last lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <RightSidebar />
          </div>
        </div>
      </div>

      {/* Admission Predictor Modal */}
      <AdmissionPredictorModal
        isOpen={isPredictorModalOpen}
        onClose={() => setIsPredictorModalOpen(false)}
        collegeName={collegeData?.Name || "IIIT Nagpur"}
        collegeLogo="/images/iiit-nagpur-logo.png"
      />

      {/* Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        collegeName={collegeData?.Name || "IIIT Nagpur"}
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
                  <div className="text-sm text-gray-800 italic">“StudentHub made it easy to compare programs and finish my application on time.”</div>
                  <div className="text-xs text-gray-500 mt-2">— Gurmeet, B.Tech (2024)</div>
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

export default IIITNagpurPage;
