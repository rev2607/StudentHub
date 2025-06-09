import { useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../navigationToSearchPage";

// images & icons
import trendCourses from "../../../../src/assets/trend-colleges.png";

import degreeIcon from "../../../../src/assets/degree.png";
import messageIcon from "../../../../src/assets/message.png";
// import { TiMessages } from "react-icons/ti";

const TrendingCourseScholarships = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const trendingCourses = ["Digital Marketing", "Cyber Security", "Top Law Colleges In India", "Cyber Security", "Top Law Colleges In India", "Top Law Colleges In India"];
  const trendingScholarships = ["Digital Marketing", "Cyber Security", "Top Law Colleges In India", "Cyber Security", "Top Law Colleges In India", "Top Law Colleges In India"];

  return (
    <section className="bg-white-100 p-6 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-800 pb-4">Trending Courses And Scholarships</h1>
          <p className="text-black font-light">
            Enhance and update your skills to
            <span className="font-semibold"> boost </span>
            your career path with <br /> popular courses and scholarship
            <span className="font-semibold"> opportunities</span>.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img alt="Laptop" className="mx-auto" height="400" src={trendCourses} width="600" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mb-12 pb-5">
              <h2 className="text-xl font-bold text-right text-gray-800 mb-4">Trending courses</h2>
              <div className="flex">
                <p className="text-gray-600 text-right mb-4">
                  Our handpicked professionals eliminate your greatest uncertainties through tailored video guidance sessions, complemented by insights from the student community
                </p>
                <img alt="icon" className="h-30 w-30 rounded-full float-right" height="50" src={messageIcon} width="50" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {trendingCourses.map((label, index) => (
                  <span
                    key={index}
                    className={`border border-[var(--site-green)] px-4 py-1 rounded-full text-sm ${index === 0 ? "bg-[var(--site-green)] text-white" : "bg-white text-black"}`}
                    onClick={() => navigateToSearchPage(navigate, label)}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <button className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm float-right" onClick={() => navigateToSearchPage(navigate, "Trending courses")}>
                View All
              </button>
            </div>
            <div>
              <h2 className="text-xl font-bold text-right text-gray-800 mb-4">Trending scholarships</h2>
              <div className="flex">
                <p className="text-gray-600 text-right mb-4">Enhance and update your skills to boost your career path with popular courses and scholarship opportunities</p>
                <img alt="icon" className="h-30 w-30 rounded-full float-right" height="50" src={degreeIcon} width="50" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {trendingScholarships.map((label, index) => (
                  <span
                    key={index}
                    className={`border border-[var(--site-green)] px-4 py-1 rounded-full text-sm ${index === 0 ? "bg-[var(--site-green)] text-white" : "bg-white text-black"}`}
                    onClick={() => navigateToSearchPage(navigate, label)}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <button className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm float-right" onClick={() => navigateToSearchPage(navigate, "Trending scholarships")}>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourseScholarships;
