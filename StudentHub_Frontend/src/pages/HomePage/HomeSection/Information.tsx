import { useNavigate } from "react-router-dom";

import { navigateToSearchPage } from "../navigationToSearchPage";
import { examsList } from "../../../data/exams";

import information from "../../../../src/assets/information.png";
import rank from "../../../../src/assets/rank.png";

const Information = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const rankings = [
    "Top Engineering Colleges In India",
    "Top MBA Colleges In India",
    "Top Law Colleges In India",
    "Top MBA Colleges In India",
    "Top Medical Colleges In India",
    "Top Universities In India",
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-800 pb-4">Information</h1>
          <p className="text-black font-light">
            We make it
            <span className="font-semibold"> easier </span>
            for you to understand details about colleges,
            <br /> entrance exams, and courses in all
            <span className="font-semibold"> fields and regions</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Rankings</h2>
              <div className="flex flex-col sm:flex-row items-start mb-4">
                <img alt="Ranking icon" className="h-16 w-16 sm:h-20 sm:w-20 mr-4 rounded-full" height="50" src={rank} width="50" />
                <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-0">1500 Colleges Ranked based on transparent, accurate, government-approved, student-friendly data</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {rankings.map((label, index) => (
                  <button key={index} className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm border border-[var(--site-green)] ${index === 0 ? "bg-[var(--site-green)] text-white" : "bg-white text-black"}`} onClick={() => navigateToSearchPage(navigate, label)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Exams</h2>
              <div className="flex flex-col sm:flex-row items-start mb-4">
                <img alt="Ranking icon" className="h-16 w-16 sm:h-20 sm:w-20 mr-4 rounded-full" height="50" src={rank} width="50" />
                <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-0">Easy Information and downloads on Exam preparation, dates, counselling, syllabus and more</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {examsList.map((exam, index) => (
                  <button key={index} className="bg-white text-black border border-[var(--site-green)] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm" onClick={() => navigate(`/exams/${exam.slug}`)}>
                    {exam.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <img alt="Laptop" className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md" height="400" src={information} width="400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
