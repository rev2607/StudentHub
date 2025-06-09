import { FileText, Newspaper, Calendar, GraduationCap, Award, Users, BookOpen, FileSpreadsheet } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../navigationToSearchPage";

const menuItems = [
  { icon: FileText, label: "Results", path: "/results" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: Calendar, label: "Exams", path: "/exams" },
  { icon: GraduationCap, label: "Engineering", path: "/engineering-colleges" },
  { icon: Award, label: "Scholarships", path: "/scholarships" },
  { icon: Users, label: "Training\nInstitutes", path: "/training-institutes" },
  { icon: BookOpen, label: "MBBS", path: "/mbbs" },
  { icon: FileSpreadsheet, label: "Study Abroad", path: "/study-abroad" },
  { icon: BookOpen, label: "Reviews", path: "/reviews" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigateToSearchPage(navigate, searchValue);
    }
  };

  return (
    <section className="relative hero_banner pt-24 pb-24 md:pb-40 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Heading and Search */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-normal text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Let's Explore</h1>
          <form onSubmit={handleSearch} className="w-[120%] relative right-0 flex items-center bg-white rounded-full shadow-lg overflow-hidden mt-0">
            <input
              type="text"
              className="flex-1 px-6 py-3 text-base text-gray-700 outline-none bg-transparent"
              placeholder="Search for Colleges, Exams, Results & More"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              style={{ minHeight: '48px' }}
            />
            <button
              type="submit"
              className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-8 py-3 text-lg font-semibold"
              style={{ borderRadius: '9999px', margin: '4px', minHeight: '40px', minWidth: '120px', border: '3px solid #fff' }}
            >
              Search
            </button>
          </form>
        </div>
        {/* Right: 3x3 Grid */}
        <div className="flex-1 flex justify-center md:justify-start mt-12 md:mt-0 md:pl-32">
          <div className="grid grid-cols-3 gap-3">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => navigateToSearchPage(navigate, item.label)}
                  className="flex flex-col items-center justify-center border border-[var(--site-green)] bg-transparent transition-all duration-300 shadow-sm p-0"
                  style={{
                    borderRadius: '8px',
                    width: '128px',
                    height: '128px',
                    minWidth: '128px',
                    minHeight: '128px',
                    maxWidth: '128px',
                    maxHeight: '128px',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
                    padding: 0,
                  }}
                  onMouseOver={e => {
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      e.currentTarget.style.boxShadow = '0 0 0 3px #8cc54255, 0 2px 16px 0 #8cc54233';
                      svg.style.transform = 'scale(1.12)';
                    }
                  }}
                  onMouseOut={e => {
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0,0,0,0.04)';
                      svg.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <IconComponent className="text-[var(--site-green)]" style={{ width: '40px', height: '40px', transition: 'transform 0.2s', marginTop: 0, marginBottom: 0 }} />
                  <span className="text-white text-sm font-normal text-center" style={{ marginTop: '6px', marginBottom: 0, whiteSpace: 'pre-line' }}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
