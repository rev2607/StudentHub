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
import AmityNoidaPage from "./pages/Colleges/AmityNoidaPage";
import BITSPilaniPage from "./pages/Colleges/BITSPilaniPage";
import SRMPage from "./pages/Colleges/SRMPage";
import ThaparPage from "./pages/Colleges/ThaparPage";
import AmritaCoimbatorePage from "./pages/Colleges/AmritaCoimbatorePage";
import SOAPage from "./pages/Colleges/SOAPage";
import ChandigarhUniversityPage from "./pages/Colleges/ChandigarhUniversityPage";
import KLUniversityPage from "./pages/Colleges/KLUniversityPage";
import KalasalingamAcademyPage from "./pages/Colleges/KalasalingamAcademyPage";
import VitVellorePage from "./pages/Colleges/VitVellorePage";
import NewsLandingPage from "./pages/News/NewsLandingPage";
import NewsDetailPage from "./pages/News/NewsDetailPage";
import SimpleNewsDetailPage from "./pages/News/SimpleNewsDetailPage";
import ArticlesLandingPage from "./pages/Articles/ArticlesLandingPage";
import ArticleDetailPage from "./pages/Articles/ArticleDetailPage";
import ExamsLandingPage from "./pages/Exams/ExamsLandingPage";
import JEEMainPage from "./pages/Exams/JEEMainPage";
import JEEAdvancedPage from "./pages/Exams/JEEAdvancedPage";
import NEETPage from "./pages/Exams/NEETPage";
import BITSATPage from "./pages/Exams/BITSATPage";
import VITEEEPage from "./pages/Exams/VITEEEPage";
import APEAMCETPage from "./pages/Exams/APEAMCETPage";
import TSEAMCETPage from "./pages/Exams/TSEAMCETPage";
import TGSEAMCETPage from "./pages/Exams/TGSEAMCETPage";
import SRMJEEEPage from "./pages/Exams/SRMJEEEPage";
import GITAMPage from "./pages/Exams/GITAMPage";
import KLUPage from "./pages/Exams/KLUPage";
import METPage from "./pages/Exams/METPage";
import AEEEPage from "./pages/Exams/AEEEPage";
import ExamDetailPage from "./pages/Exams/ExamDetailPage";
import ResultsPage from "./pages/Results/ResultsPage";
import AskUsPage from "./pages/AskUsPage/AskUsPage";
import PsychometricTest from "./pages/PsychometricTest";
import CollegePredictor from "./pages/CollegePredictor";
import Rankometer from "./pages/Rankometer";
import IITMadrasPage from "./pages/Colleges/IITMadrasPage";
import IITBombayPage from "./pages/Colleges/IITBombayPage";
import IITDelhiPage from "./pages/Colleges/IITDelhiPage";
import IITKanpurPage from "./pages/Colleges/IITKanpurPage";
import IITKharagpurPage from "./pages/Colleges/IITKharagpurPage";
import IITHyderabadPage from "./pages/Colleges/IITHyderabadPage";
import IITGuwahatiPage from "./pages/Colleges/IITGuwahatiPage";
import IITBHUVaranasiPage from "./pages/Colleges/IITBHUVaranasiPage";
import NITTrichyPage from "./pages/Colleges/NITTrichyPage";

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
            <Route path="/exams/srm-jeee" element={<SRMJEEEPage />} />
            <Route path="/exams/gitam" element={<GITAMPage />} />
            <Route path="/exams/klu" element={<KLUPage />} />
            <Route path="/exams/met" element={<METPage />} />
            <Route path="/exams/aeee" element={<AEEEPage />} />
            <Route path="/exams/:slug" element={<ExamDetailPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/colleges" element={<CollegesListPage />} />
            <Route path="/colleges/:slug" element={<CollegeDetailPage />} />
            <Route path="/colleges/iit-roorkee" element={<IITRoorkeePage />} />
<<<<<<< Updated upstream
            <Route path="/colleges/iit-madras" element={<IITMadrasPage />} />
            <Route path="/colleges/iit-bombay" element={<IITBombayPage />} />
            <Route path="/colleges/iit-delhi" element={<IITDelhiPage />} />
            <Route path="/colleges/iit-kanpur" element={<IITKanpurPage />} />
            <Route path="/colleges/iit-kharagpur" element={<IITKharagpurPage />} />
            <Route path="/colleges/iit-hyderabad" element={<IITHyderabadPage />} />
            <Route path="/colleges/iit-guwahati" element={<IITGuwahatiPage />} />
            <Route path="/colleges/iit-bhu-varanasi" element={<IITBHUVaranasiPage />} />
            <Route path="/colleges/nit-trichy" element={<NITTrichyPage />} />
=======
            <Route path="/colleges/amity-noida" element={<AmityNoidaPage />} />
            <Route path="/colleges/bits-pilani" element={<BITSPilaniPage />} />
            <Route path="/colleges/srm" element={<SRMPage />} />
            <Route path="/colleges/srmist" element={<SRMPage />} />
            <Route path="/colleges/thapar" element={<ThaparPage />} />
            <Route path="/colleges/tiet" element={<ThaparPage />} />
            <Route path="/colleges/amrita-coimbatore" element={<AmritaCoimbatorePage />} />
            <Route path="/colleges/amrita" element={<AmritaCoimbatorePage />} />
            <Route path="/colleges/soa-bhubaneswar" element={<SOAPage />} />
            <Route path="/colleges/soa" element={<SOAPage />} />
            <Route path="/colleges/chandigarh-university" element={<ChandigarhUniversityPage />} />
            <Route path="/colleges/cu" element={<ChandigarhUniversityPage />} />
            <Route path="/colleges/kl-university" element={<KLUniversityPage />} />
            <Route path="/colleges/klef" element={<KLUniversityPage />} />
            <Route path="/colleges/klu" element={<KLUniversityPage />} />
            <Route path="/colleges/kalasalingam" element={<KalasalingamAcademyPage />} />
            <Route path="/colleges/kalasalingam-academy" element={<KalasalingamAcademyPage />} />
            <Route path="/colleges/kare" element={<KalasalingamAcademyPage />} />
            <Route path="/colleges/vit-vellore" element={<VitVellorePage />} />
            <Route path="/colleges/vit" element={<VitVellorePage />} />
>>>>>>> Stashed changes
            <Route path="/psychometric-test" element={<PsychometricTest />} />
            <Route path="/articles" element={<ArticlesLandingPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
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
          
          {/* Predictor and analyzer routes */}
          <Route path="/college-predictor" element={<CollegePredictor />} />
          <Route path="/rankometer" element={<Rankometer />} />
          
          {/* Placeholder routes for navigation items */}
          <Route path="/internships" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-800 mb-4">Internships</h1><p className="text-gray-600">No open positions right now.</p></div></div>} />
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
