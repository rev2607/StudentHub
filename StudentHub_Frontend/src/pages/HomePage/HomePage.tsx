import Hero from "./HomeSection/Hero";
import { Link } from "react-router-dom";
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
      <Guidance />
      <TopColleges />
      <Information />
      <TrendingCollegesPackages />
      <TrendingCourseMockTests />
      {/* Temporarily hidden per request */}
      {/* <Recommendations /> */}
      <LatestNews />

      {/* SEO: Section Heading - Why Choose StudentHub? */}
      <section className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12 mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          Why Choose StudentHub?
        </h2>
        <p className="text-gray-700 mb-6">
          StudentHub is a learning community designed for students to find trusted
          <strong> student resources</strong>, collaborate with peers, and prepare smarter.
          Explore <strong>study materials online</strong>, practice mock tests, and get guidance
          across exams and colleges on an <strong>academic collaboration platform</strong> built for you.
        </p>
        <p className="text-gray-700 mb-6">
          Discover curated notes, previous papers, colleges information, mock tests, and
          community answers—everything you need to succeed. These <strong>student resources</strong>
          make it easy to learn, revise, and plan your next steps.
        </p>
        <p className="text-gray-700 mb-6">
          Be part of a supportive <strong>learning community</strong>—ask questions, share
          insights, and collaborate with fellow learners. StudentHub is your
          <strong> academic collaboration platform</strong> to grow together.
        </p>
        {/* SEO: Internal Links for crawlability */}
        <nav className="mt-8" aria-label="Popular internal links">
          <ul className="flex flex-wrap gap-3 text-[var(--site-green)]">
            <li><Link to="/exams" className="underline hover:no-underline">Exams</Link></li>
            <li><Link to="/colleges" className="underline hover:no-underline">Colleges</Link></li>
            <li><Link to="/articles" className="underline hover:no-underline">Articles</Link></li>
            <li><Link to="/mock-tests" className="underline hover:no-underline">Mock Tests</Link></li>
            <li><Link to="/ask-us" className="underline hover:no-underline">Contact / Ask Us</Link></li>
            <li><Link to="/college-predictor" className="underline hover:no-underline">College Predictor</Link></li>
          </ul>
        </nav>
      </section>

      {/* <FeaturedCourses /> */}
      {/* <ExamSection /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    </div>
  );
};

export default HomePage;
