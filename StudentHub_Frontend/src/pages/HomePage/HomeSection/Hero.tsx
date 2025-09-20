// import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../navigationToSearchPage";

// Import SVG icons
import ResultsIcon from "../../../assets/Results.svg";
import NewsIcon from "../../../assets/news.svg";
import ExamsIcon from "../../../assets/examination.svg";
import EngineeringIcon from "../../../assets/Engineering.svg";
import MockTestsIcon from "../../../assets/examination.svg";
import TrainingIcon from "../../../assets/Engineering.svg";
import MBBSIcon from "../../../assets/MBBS.svg";
import StudyAbroadIcon from "../../../assets/study abroad.svg";
import ReviewsIcon from "../../../assets/Review.svg";

const menuItems = [
  { icon: ResultsIcon, label: "Results", path: "/results" },
  { icon: NewsIcon, label: "News", path: "/news" },
  { icon: ExamsIcon, label: "Exams", path: "/exams" },
  { icon: EngineeringIcon, label: "Engineering", path: "/engineering-colleges" },
  { icon: MockTestsIcon, label: "Mock Tests", path: "/mock-tests" },
  { icon: TrainingIcon, label: "Training\nInstitutes", path: "/training-institutes" },
  { icon: MBBSIcon, label: "MBBS", path: "/mbbs" },
  { icon: StudyAbroadIcon, label: "Study Abroad", path: "/study-abroad" },
  { icon: ReviewsIcon, label: "Reviews", path: "/reviews" },
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
    <section className="relative hero_banner pt-16 sm:pt-24 pb-16 sm:pb-24 md:pb-40 min-h-[500px] sm:min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* 3-column grid layout with explicit column sizes */}
        <div 
          className="hero-grid grid items-center gap-8 md:grid-cols-3 grid-cols-1"
          style={{
            gridTemplateColumns: '0fr minmax(320px, 700px) 380px',
            minHeight: '400px'
          }}
        >
          {/* Left column: Flexible spacer - hidden on mobile */}
          <div className="hidden md:block" />
          
          {/* Center column: Title and Search */}
          <div className="flex flex-col items-start text-left md:col-start-2 md:col-end-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let's Explore
            </h1>
            <form
              onSubmit={handleSearch}
              className="w-full max-w-2xl flex bg-white rounded-full shadow-lg overflow-hidden"
            >
              <input
                type="text"
                className="flex-1 px-6 py-4 text-base text-gray-700 outline-none bg-transparent placeholder-gray-500"
                placeholder="Search for Colleges, Exams, Results & More"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-8 py-4 text-base font-semibold rounded-full transition-colors duration-300"
              >
                Search
              </button>
            </form>
          </div>
          
          {/* Right column: Icon Grid */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:col-start-3 md:col-end-4">
            <div 
              className="grid grid-cols-3 gap-2 sm:gap-3"
              style={{ width: '100%', maxWidth: '380px' }}
            >
              {menuItems.map((item) => {
                return (
                  <button
                    key={item.label}
                    onClick={() => navigateToSearchPage(navigate, item.label)}
                    className="flex flex-col items-center justify-center border border-[var(--site-green)] bg-transparent transition-all duration-300 shadow-sm p-0"
                    style={{
                      borderRadius: '8px',
                      width: '120px',
                      height: '120px',
                      minWidth: '120px',
                      minHeight: '120px',
                      maxWidth: '120px',
                      maxHeight: '120px',
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
                    <img 
                      src={item.icon} 
                      alt={item.label}
                      style={{ 
                        width: '38px', 
                        height: '38px', 
                        transition: 'transform 0.2s', 
                        marginTop: 0, 
                        marginBottom: 0 
                      }} 
                    />
                    <span className="text-white text-sm sm:text-base font-normal text-center" style={{ marginTop: '4px', marginBottom: 0, whiteSpace: 'pre-line' }}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
