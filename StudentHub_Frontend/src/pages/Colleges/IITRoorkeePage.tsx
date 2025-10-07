import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Building, 
  GraduationCap,
  BookOpen,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  Download,
  ChevronRight
} from "lucide-react";

// Import IIT Roorkee data service
import { loadIITRoorkeeData, type IITRoorkeeData } from "../../services/collegeDataService";

interface TabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
      isActive
        ? "border-blue-600 text-blue-600"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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

const IITRoorkeePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [collegeData, setCollegeData] = useState<IITRoorkeeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await loadIITRoorkeeData();
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
        console.error('Error loading IIT Roorkee data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

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

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* College Introduction */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Academic Programs & Fees</h3>
        <p className="text-gray-700 mb-6">IIT Roorkee offers a comprehensive range of undergraduate, postgraduate, and doctoral programs across engineering, science, management, and design disciplines. The institute maintains a balance between theoretical knowledge and practical application.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">Undergraduate Programs</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">B.Tech:</span> {collegeData.CoursesAndFees.Undergraduate.BTech.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BTech.FirstYearFeeINR)}/year</div>
              <div><span className="font-medium">B.Arch:</span> {collegeData.CoursesAndFees.Undergraduate.BArch.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BArch.FirstYearFeeINR)}/year</div>
              <div><span className="font-medium">B.Des:</span> {collegeData.CoursesAndFees.Undergraduate.BDes.Seats} seats, {formatCurrency(collegeData.CoursesAndFees.Undergraduate.BDes.FirstYearFeeINR)}/year</div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">Postgraduate Programs</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">M.Tech:</span> {collegeData.CoursesAndFees.Postgraduate.MTech.Specializations} specializations</div>
              <div><span className="font-medium">MBA:</span> {collegeData.CoursesAndFees.Postgraduate.MBA.Seats} seats</div>
              <div><span className="font-medium">M.Sc:</span> {collegeData.CoursesAndFees.Postgraduate.MSc.Seats} seats across {collegeData.CoursesAndFees.Postgraduate.MSc.Disciplines.length} disciplines</div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Admission Process & Cutoffs</h3>
        <p className="text-gray-700 mb-6">Admissions at IIT Roorkee are highly competitive, with rigorous entrance examinations and strict cutoff criteria. The institute follows a merit-based selection process ensuring only the brightest minds join the community.</p>
        
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Placements & Career Opportunities</h3>
        <p className="text-gray-700 mb-6">IIT Roorkee has an exceptional placement record with top-tier companies consistently recruiting students across all programs. The Career Development Cell ensures comprehensive preparation and support throughout the placement process.</p>
        
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Rankings & Recognition</h3>
        <p className="text-gray-700 mb-6">IIT Roorkee consistently ranks among the top engineering institutions in India and has gained international recognition for its academic excellence, research contributions, and innovation initiatives.</p>
        
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Campus Facilities & Infrastructure</h3>
        <p className="text-gray-700 mb-6">The sprawling 365-acre campus of IIT Roorkee houses world-class facilities including modern hostels, state-of-the-art laboratories, extensive library resources, and comprehensive sports infrastructure to support holistic development.</p>
        
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Faculty & Research Excellence</h3>
        <p className="text-gray-700 mb-6">IIT Roorkee boasts a distinguished faculty of over 470 members across 23 departments, with the majority holding PhD degrees. The institute is at the forefront of research and innovation with significant contributions to various fields.</p>
        
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Student Life & Campus Culture</h3>
        <p className="text-gray-700 mb-6">The vibrant campus life at IIT Roorkee is characterized by a diverse community, rich cultural traditions, and numerous opportunities for personal and professional growth through clubs, societies, and events.</p>
        
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

      {/* Reviews & Ratings */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Student Reviews & Ratings</h3>
        <p className="text-gray-700 mb-6">IIT Roorkee maintains consistently high ratings from students and alumni, reflecting its commitment to academic excellence, quality placements, and overall student satisfaction.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Overall Ratings</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(collegeData.ReviewsAndRatings.CollegeDuniaRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div>
                  <div className="font-semibold">{collegeData.ReviewsAndRatings.CollegeDuniaRating}/5</div>
                  <div className="text-sm text-gray-600">CollegeDunia ({collegeData.ReviewsAndRatings.CollegeDuniaReviewsCount} reviews)</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(collegeData.ReviewsAndRatings.Careers360Rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div>
                  <div className="font-semibold">{collegeData.ReviewsAndRatings.Careers360Rating}/5</div>
                  <div className="text-sm text-gray-600">Careers360</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Key Strengths</h4>
            <div className="space-y-2">
              {collegeData.ReviewsAndRatings.Strengths.map((strength: string, index: number) => (
                <div key={index} className="flex items-start text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center">
            <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
            <span className="text-lg font-semibold text-green-600">Return on Investment: {collegeData.ReviewsAndRatings.ReturnOnInvestment}</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
        <p className="text-gray-700 mb-6">For admissions, academic inquiries, or general information, you can reach out to IIT Roorkee through the following official channels.</p>
        
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
          
          <div>
            <h4 className="font-medium mb-3">Email Contacts</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <h5 className="font-medium text-sm">Registrar</h5>
                <a href={`mailto:${collegeData.OfficialContactInfo.Emails.Registrar}`} className="text-blue-600 hover:underline text-sm">
                  {collegeData.OfficialContactInfo.Emails.Registrar}
                </a>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <h5 className="font-medium text-sm">Admissions</h5>
                <a href={`mailto:${collegeData.OfficialContactInfo.Emails.Admissions}`} className="text-blue-600 hover:underline text-sm">
                  {collegeData.OfficialContactInfo.Emails.Admissions}
                </a>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <h5 className="font-medium text-sm">Placement Cell</h5>
                <a href={`mailto:${collegeData.OfficialContactInfo.Emails.PlacementCell}`} className="text-blue-600 hover:underline text-sm">
                  {collegeData.OfficialContactInfo.Emails.PlacementCell}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCoursesTab = () => (
    <div className="space-y-6">
      {/* Undergraduate Programs */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Undergraduate Programs</h3>
        
        {/* B.Tech */}
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

        {/* B.Arch */}
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

        {/* B.Des */}
        <div>
          <h4 className="text-lg font-medium mb-3">B.Des Program</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <InfoCard label="Duration" value={`${collegeData.CoursesAndFees.Undergraduate.BDes.DurationYears} years`} />
            <InfoCard label="Seats" value={collegeData.CoursesAndFees.Undergraduate.BDes.Seats} />
            <InfoCard label="First Year Fee" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BDes.FirstYearFeeINR)} />
            <InfoCard label="Total Fees (Approx)" value={formatCurrency(collegeData.CoursesAndFees.Undergraduate.BDes.TotalFeesINRApprox)} />
          </div>
          <div>
            <h5 className="font-medium mb-1">Entrance Requirements:</h5>
            <p className="text-sm text-gray-700">{collegeData.CoursesAndFees.Undergraduate.BDes.Entrance.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Postgraduate Programs */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Postgraduate Programs</h3>
        
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
          </div>
        </div>
      </div>

      {/* Hostel Fees */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Hostel & Accommodation</h3>
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
      {/* Admission Process */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
    <div className="space-y-6">
      {/* Placement Statistics */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
    <div className="space-y-6">
      {/* NIRF Rankings */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
    <div className="space-y-6">
      {/* Hostels */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Hostel Facilities</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Library Facilities</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Laboratory Facilities</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Sports Facilities</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Medical Facilities</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Other Amenities</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Student Clubs & Societies</h3>
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
      {/* Faculty Overview */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Faculty Overview</h3>
        
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Departments</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Research Centers</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Global Collaborations</h3>
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Faculty Activities</h3>
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
      {/* Overall Ratings */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Overall Ratings</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(collegeData.ReviewsAndRatings.CollegeDuniaRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">{collegeData.ReviewsAndRatings.CollegeDuniaRating}/5</span>
            </div>
            <p className="text-sm text-gray-600">{collegeData.ReviewsAndRatings.CollegeDuniaReviewsCount} reviews on CollegeDunia</p>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(collegeData.ReviewsAndRatings.Careers360Rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">{collegeData.ReviewsAndRatings.Careers360Rating}/5</span>
            </div>
            <p className="text-sm text-gray-600">Rating on Careers360</p>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Strengths</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {collegeData.ReviewsAndRatings.Strengths.map((strength: string, index: number) => (
            <div key={index} className="flex items-start text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              {strength}
            </div>
          ))}
        </div>
      </div>

      {/* Areas for Improvement */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Areas for Improvement</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {collegeData.ReviewsAndRatings.Weaknesses.map((weakness: string, index: number) => (
            <div key={index} className="flex items-start text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              {weakness}
            </div>
          ))}
        </div>
      </div>

      {/* Return on Investment */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Return on Investment</h3>
        <div className="flex items-center">
          <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
          <span className="text-lg font-semibold text-green-600">{collegeData.ReviewsAndRatings.ReturnOnInvestment}</span>
        </div>
      </div>
    </div>
  );

  const renderContactTab = () => (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
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
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
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
      <div className="bg-white border-b">
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
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  IITR
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
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
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(collegeData.ReviewsAndRatings.CollegeDuniaRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">{collegeData.ReviewsAndRatings.CollegeDuniaRating}/5</span>
                </div>
                <span className="text-sm text-gray-600">({collegeData.ReviewsAndRatings.CollegeDuniaReviewsCount} Reviews)</span>
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
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 lg:min-w-[200px]">
              <button className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
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

      {/* Tabs Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                id={tab.id}
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
        {renderTabContent()}
      </div>
    </div>
  );
};

export default IITRoorkeePage;
