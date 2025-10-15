import Hero from "./HomeSection/Hero";
import NewsItemTop from "./HomeSection/NewsItemTop";
import CourseColleges from "./HomeSection/CourseColleges";
import TopColleges from "./HomeSection/TopColleges";
import Information from "./HomeSection/Information";
import Guidance from "./HomeSection/Guidance";
import TrendingCollegesPackages from "./HomeSection/TrendingCollegesPackages";
import TrendingCourseMockTests from "./HomeSection/TrendingCourseMockTests";
// import Recommendations from "./HomeSection/Recommendations";
import LatestNews from "./HomeSection/LatestNews";

// import FeaturedCourses from "../../components/OLD/FeaturedCourses";
// import ExamSection from "../../components/OLD/ExamSection";
// import FAQ from "../../components/OLD/FAQ";
// import Testimonials from "../../components/OLD/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewsItemTop />
      <CourseColleges />
      <TopColleges />
      <Information />
      <Guidance />
      <TrendingCollegesPackages />
      <TrendingCourseMockTests />
      {/* Temporarily hidden per request */}
      {/* <Recommendations /> */}
      <LatestNews />

      {/* <FeaturedCourses /> */}
      {/* <ExamSection /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    </div>
  );
};

export default HomePage;
