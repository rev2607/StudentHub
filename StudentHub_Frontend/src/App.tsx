import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

import MainLayout from "./pages/HomePage/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import MockTests from "./pages/MockTests";
import MockTestsStart from "./pages/MockTestsStart";
import SignupWithProfile from "./pages/SignupWithProfile";
import Login from "./pages/Login";
import ProfileEdit from "./pages/ProfileEdit";
import RequireAuth from "./components/RequireAuth";
import CollegesListPage from "./pages/Colleges/CollegesListPage";
import CollegeDetailPage from "./pages/Colleges/CollegeDetailPage";
import IITRoorkeePage from "./pages/Colleges/IITRoorkeePage";
import NewsLandingPage from "./pages/News/NewsLandingPage";
import NewsDetailPage from "./pages/News/NewsDetailPage";
import SimpleNewsDetailPage from "./pages/News/SimpleNewsDetailPage";
import ExamsLandingPage from "./pages/Exams/ExamsLandingPage";
import JEEMainPage from "./pages/Exams/JEEMainPage";
import NEETPage from "./pages/Exams/NEETPage";
import BITSATPage from "./pages/Exams/BITSATPage";
import VITEEEPage from "./pages/Exams/VITEEEPage";
import APEAMCETPage from "./pages/Exams/APEAMCETPage";
import TSEAMCETPage from "./pages/Exams/TSEAMCETPage";
import TGSEAMCETPage from "./pages/Exams/TGSEAMCETPage";
import JEEAdvancedPage from "./pages/Exams/JEEAdvancedPage";
import ExamDetailPage from "./pages/Exams/ExamDetailPage";
import ResultsPage from "./pages/Results/ResultsPage";
import AskUsPage from "./pages/AskUsPage/AskUsPage";
import PsychometricTest from "./pages/PsychometricTest";

// import Search from "./pages/Other/Search";
// import Test from "./pages/Other/Test";
// import Courses from "./pages/Other/Courses";
// import Exams from "./pages/Other/Exams";
// import Resources from "./pages/Other/Resources";
// import Login from "./pages/Other/Login";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Wrap routes that need Header in a layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/news" element={<NewsLandingPage />} />
            <Route path="/news/:slug" element={<SimpleNewsDetailPage />} />
            <Route path="/exams" element={<ExamsLandingPage />} />
            <Route path="/exams/jee-main" element={<JEEMainPage />} />
            <Route path="/exams/jee-advanced" element={<JEEAdvancedPage />} />
            <Route path="/exams/neet" element={<NEETPage />} />
            <Route path="/exams/bitsat" element={<BITSATPage />} />
            <Route path="/exams/viteee" element={<VITEEEPage />} />
            <Route path="/exams/apeamcet" element={<APEAMCETPage />} />
            <Route path="/exams/ap-eamcet" element={<APEAMCETPage />} />
            <Route path="/exams/tseamcet" element={<TSEAMCETPage />} />
            <Route path="/exams/eamcet" element={<TSEAMCETPage />} />
            <Route path="/exams/tgseamcet" element={<TGSEAMCETPage />} />
            <Route path="/exams/:slug" element={<ExamDetailPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/colleges" element={<CollegesListPage />} />
            <Route path="/colleges/:slug" element={<CollegeDetailPage />} />
            <Route path="/colleges/iit-roorkee" element={<IITRoorkeePage />} />
            <Route path="/psychometric-test" element={<PsychometricTest />} />
            <Route path="/engineering-colleges" element={<Navigate to="/colleges" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

          {/* Auth routes */}
          <Route path="/signup" element={<SignupWithProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/edit" element={
            <RequireAuth>
              <ProfileEdit />
            </RequireAuth>
          } />

          {/* Mock test routes - auth required only after 2nd question */}
          <Route path="/mock-tests/start" element={<MockTestsStart />} />

          {/* Other routes */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/ask-us" element={<AskUsPage />} />
          
          {/* Placeholder routes for navigation items */}
          <Route path="/mbbs" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-4">MBBS</h1><p className="text-gray-600">This page is under development.</p></div></div>} />
          <Route path="/study-abroad" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-4">Study Abroad</h1><p className="text-gray-600">This page is under development.</p></div></div>} />
          <Route path="/reviews" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h1><p className="text-gray-600">This page is under development.</p></div></div>} />
          <Route path="/scholarships" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-4">Scholarships</h1><p className="text-gray-600">This page is under development.</p></div></div>} />
          
          {/* <Route path="/search-page" element={<Search />} /> */}
          {/* <Route path="/test" element={<Test />} /> */}
          {/* Other routes without header */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}

          {/* <Route path="/courses/*" element={<Courses />} /> */}
          {/* <Route path="/exams/*" element={<Exams />} /> */}
          {/* <Route path="/resources/*" element={<Resources />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
