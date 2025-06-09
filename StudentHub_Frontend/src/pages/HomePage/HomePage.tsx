import Hero from "./HomeSection/Hero";
import NewsItemTop from "./HomeSection/NewsItemTop";
import CourseColleges from "./HomeSection/CourseColleges";
import Guidance from "./HomeSection/Guidance";
import TopColleges from "./HomeSection/TopColleges";
import Information from "./HomeSection/Information";
import TrendingCollegesPackages from "./HomeSection/TrendingCollegesPackages";
import TrendingCourseScholarships from "./HomeSection/TrendingCourseScholarships";
import Recommendations from "./HomeSection/Recommendations";
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
      <Guidance />
      <TopColleges />
      <Information />
      <TrendingCollegesPackages />
      <TrendingCourseScholarships />
      <Recommendations />
      <LatestNews />

      {/* <FeaturedCourses /> */}
      {/* <ExamSection /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    </div>
  );
};

export default HomePage;
