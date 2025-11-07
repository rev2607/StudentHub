// import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import SVG icons
import NewsIcon from "../../../assets/news.svg";
import ExamsIcon from "../../../assets/examination.svg";
import CollegesIcon from "../../../assets/Colleges.svg";
import MockTestsIcon from "../../../assets/Courses.svg";
import TrainingIcon from "../../../assets/Engineering.svg";
import ArticlesIcon from "../../../assets/Articles.svg";
import CollegePredictorIcon from "../../../assets/CollegePredictor.svg";
import ReviewsIcon from "../../../assets/Review.svg";
import RankometerIcon from "../../../assets/Rankometer.svg";

const menuItems = [
  { icon: RankometerIcon, label: "Rankometer", path: "/rankometer" },
  { icon: NewsIcon, label: "News", path: "/news" },
  { icon: MockTestsIcon, label: "Exams", path: "/exams" },
  { icon: CollegesIcon, label: "Colleges", path: "/colleges" },
  { icon: ExamsIcon, label: "Mock Tests", path: "/mock-tests" },
  { icon: TrainingIcon, label: "Career Guidance\nTest", path: "/psychometric-test" },
  { icon: ArticlesIcon, label: "Articles", path: "/articles" },
  { icon: CollegePredictorIcon, label: "College Predictor", path: "/college-predictor" },
  { icon: ReviewsIcon, label: "Internships", path: "/internships" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchValue.trim();
    if (!query) return;

    // Navigate to Ask Us page with the query
    navigate("/ask-us", { state: { query } });
  };

  return (
    <section className="relative hero_banner pt-16 sm:pt-24 pb-16 sm:pb-24 md:pb-40 min-h-[500px] sm:min-h-[600px] flex items-center">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8">
          {/* Left column: Icon Grid - Fixed width */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div 
              className="grid grid-cols-3 gap-2 sm:gap-3 justify-items-center items-center"
            >
              {menuItems.map((item) => {
                return (
                  <button
                    key={item.label}
                    onClick={() => item.path ? navigate(item.path) : navigate("/ask-us", { state: { query: item.label } })}
                    className="group flex flex-col items-center justify-center border-2 border-white/30 hover:border-white bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm"
                    style={{
                      borderRadius: '12px',
                      width: '120px',
                      height: '120px',
                      minWidth: '120px',
                      minHeight: '120px',
                      maxWidth: '120px',
                      maxHeight: '120px',
                      padding: 0,
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    <img 
                      src={item.icon} 
                      alt={item.label}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        width: '42px', 
                        height: '42px',
                        marginBottom: '8px'
                      }} 
                    />
                    <span className="text-white text-xs sm:text-sm font-medium text-center leading-tight" style={{ whiteSpace: 'pre-line' }}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Right column: Search Section */}
          <div className="order-1 lg:order-2 mt-0 lg:mt-24">
            <div className="flex flex-col items-start w-full">
              <div className="relative w-full">
                <h1 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    lineHeight: '1',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Ask us!
                </h1>
                <form
                  onSubmit={handleSearch}
                  className="w-full max-w-4xl flex bg-white rounded-full shadow-xl overflow-hidden transition-all hover:shadow-2xl"
                  style={{ position: 'relative', zIndex: 0 }}
                >
              <input
                type="text"
                className="flex-1 px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg text-gray-700 outline-none bg-transparent placeholder-gray-400"
                placeholder="Search for Colleges, Exams, Rankometer & More"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Search
              </button>
                </form>
                <h2
                  className="font-bold text-white mt-6"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: '1.1',
                    position: 'relative',
                    zIndex: 1,
                    fontSize: '22px'
                  }}
                >
                  Welcome to StudentHub – The Learning Network for Students
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
