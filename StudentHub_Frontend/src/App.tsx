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
import BITSGoaPage from "./pages/Colleges/BITSGoaPage";
import BITSHyderabadPage from "./pages/Colleges/BITSHyderabadPage";
import BITSMumbaiPage from "./pages/Colleges/BITSMumbaiPage";
import SRMPage from "./pages/Colleges/SRMPage";
import ThaparPage from "./pages/Colleges/ThaparPage";
import AmritaCoimbatorePage from "./pages/Colleges/AmritaCoimbatorePage";
import SOAPage from "./pages/Colleges/SOAPage";
import ChandigarhUniversityPage from "./pages/Colleges/ChandigarhUniversityPage";
import KLUniversityPage from "./pages/Colleges/KLUniversityPage";
import KalasalingamAcademyPage from "./pages/Colleges/KalasalingamAcademyPage";
import VitVellorePage from "./pages/Colleges/VitVellorePage";
import VitChennaiPage from "./pages/Colleges/VitChennaiPage";
import VitBhopalPage from "./pages/Colleges/VitBhopalPage";
import VitAmaravatiPage from "./pages/Colleges/VitAmaravatiPage";
import VitBangalorePage from "./pages/Colleges/VitBangalorePage";
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
import NITRourkelaPage from "./pages/Colleges/NITRourkelaPage";
import NITKarnatakaPage from "./pages/Colleges/NITKarnatakaPage";
import NITCalicutPage from "./pages/Colleges/NITCalicutPage";
import NITWarangalPage from "./pages/Colleges/NITWarangalPage";
import NITAgartalaPage from "./pages/Colleges/NITAgartalaPage";
import NITDelhiPage from "./pages/Colleges/NITDelhiPage";
import NITJalandharPage from "./pages/Colleges/NITJalandharPage";
import NITDurgapurPage from "./pages/Colleges/NITDurgapurPage";
import NITSilcharPage from "./pages/Colleges/NITSilcharPage";
import NITJamshedpurPage from "./pages/Colleges/NITJamshedpurPage";
import NITKurukshetraPage from "./pages/Colleges/NITKurukshetraPage";
import NITHamirpurPage from "./pages/Colleges/NITHamirpurPage";
import NITMeghalayaPage from "./pages/Colleges/NITMeghalayaPage";
import NITSrinagarPage from "./pages/Colleges/NITSrinagarPage";
import NITPatnaPage from "./pages/Colleges/NITPatnaPage";
import NITGoaPage from "./pages/Colleges/NITGoaPage";
import NITManipurPage from "./pages/Colleges/NITManipurPage";
import NITUttarakhandPage from "./pages/Colleges/NITUttarakhandPage";
import NITArunachalPradeshPage from "./pages/Colleges/NITArunachalPradeshPage";
import NITSikkimPage from "./pages/Colleges/NITSikkimPage";
import NITMizoramPage from "./pages/Colleges/NITMizoramPage";
import NITNagalandPage from "./pages/Colleges/NITNagalandPage";
import NITPuducherryPage from "./pages/Colleges/NITPuducherryPage";
import NITAndhraPradeshPage from "./pages/Colleges/NITAndhraPradeshPage";
import NITRaipurPage from "./pages/Colleges/NITRaipurPage";
import NITSuratPage from "./pages/Colleges/NITSuratPage";
import NITAssamPage from "./pages/Colleges/NITAssamPage";
import ABVIIITMGwaliorPage from "./pages/Colleges/ABVIIITMGwaliorPage";
import IIITDMJabalpurPage from "./pages/Colleges/IIITDMJabalpurPage";
import IIITDMKancheepuramPage from "./pages/Colleges/IIITDMKancheepuramPage";
import IIITBangalorePage from "./pages/Colleges/IIITBangalorePage";
import IIITPunePage from "./pages/Colleges/IIITPunePage";
import IIITDelhiPage from "./pages/Colleges/IIITDelhiPage";
import IIITGuwahatiPage from "./pages/Colleges/IIITGuwahatiPage";
import IIITBhagalpurPage from "./pages/Colleges/IIITBhagalpurPage";
import IIITRanchiPage from "./pages/Colleges/IIITRanchiPage";
import IIITHyderabadPage from "./pages/Colleges/IIITHyderabadPage";
import IIITBhopalPage from "./pages/Colleges/IIITBhopalPage";
import IIITLucknowPage from "./pages/Colleges/IIITLucknowPage";
import IIITVadodaraPage from "./pages/Colleges/IIITVadodaraPage";
import IIITNagpurPage from "./pages/Colleges/IIITNagpurPage";
import IIITDharwadPage from "./pages/Colleges/IIITDharwadPage";
import IIITTiruchirappalliPage from "./pages/Colleges/IIITTiruchirappalliPage";
import IIITKotayamPage from "./pages/Colleges/IIITKotayamPage";
import IIITAgartalaPage from "./pages/Colleges/IIITAgartalaPage";
import IIITSonepatPage from "./pages/Colleges/IIITSonepatPage";
import IIITKotaPage from "./pages/Colleges/IIITKotaPage";
import IIITSriCityPage from "./pages/Colleges/IIITSriCityPage";
import AboutPage from "./pages/AboutPage/AboutPage";

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
            <Route path="/colleges/iit-madras" element={<IITMadrasPage />} />
            <Route path="/colleges/iit-bombay" element={<IITBombayPage />} />
            <Route path="/colleges/iit-delhi" element={<IITDelhiPage />} />
            <Route path="/colleges/iit-kanpur" element={<IITKanpurPage />} />
            <Route path="/colleges/iit-kharagpur" element={<IITKharagpurPage />} />
            <Route path="/colleges/iit-hyderabad" element={<IITHyderabadPage />} />
            <Route path="/colleges/iit-guwahati" element={<IITGuwahatiPage />} />
            <Route path="/colleges/iit-bhu-varanasi" element={<IITBHUVaranasiPage />} />
            <Route path="/colleges/nit-trichy" element={<NITTrichyPage />} />
            <Route path="/colleges/nit-rourkela" element={<NITRourkelaPage />} />
            <Route path="/colleges/nit-karnataka" element={<NITKarnatakaPage />} />
            <Route path="/colleges/nit-calicut" element={<NITCalicutPage />} />
            <Route path="/colleges/nit-warangal" element={<NITWarangalPage />} />
            <Route path="/colleges/nit-agartala" element={<NITAgartalaPage />} />
            <Route path="/colleges/nit-delhi" element={<NITDelhiPage />} />
            <Route path="/colleges/nit-jalandhar" element={<NITJalandharPage />} />
            <Route path="/colleges/nit-durgapur" element={<NITDurgapurPage />} />
            <Route path="/colleges/nit-silchar" element={<NITSilcharPage />} />
            <Route path="/colleges/nit-jamshedpur" element={<NITJamshedpurPage />} />
            <Route path="/colleges/nit-kurukshetra" element={<NITKurukshetraPage />} />
            <Route path="/colleges/nit-hamirpur" element={<NITHamirpurPage />} />
            <Route path="/colleges/nit-meghalaya" element={<NITMeghalayaPage />} />
            <Route path="/colleges/nit-srinagar" element={<NITSrinagarPage />} />
            <Route path="/colleges/nit-patna" element={<NITPatnaPage />} />
            <Route path="/colleges/nit-goa" element={<NITGoaPage />} />
            <Route path="/colleges/nit-manipur" element={<NITManipurPage />} />
            <Route path="/colleges/nit-uttarakhand" element={<NITUttarakhandPage />} />
            <Route path="/colleges/nit-arunachal-pradesh" element={<NITArunachalPradeshPage />} />
            <Route path="/colleges/nit-sikkim" element={<NITSikkimPage />} />
            <Route path="/colleges/nit-mizoram" element={<NITMizoramPage />} />
            <Route path="/colleges/nit-nagaland" element={<NITNagalandPage />} />
            <Route path="/colleges/nit-puducherry" element={<NITPuducherryPage />} />
            <Route path="/colleges/nit-andhra-pradesh" element={<NITAndhraPradeshPage />} />
            <Route path="/colleges/nit-raipur" element={<NITRaipurPage />} />
            <Route path="/colleges/nit-surat" element={<NITSuratPage />} />
            <Route path="/colleges/nit-assam" element={<NITAssamPage />} />
            <Route path="/colleges/abv-iiitm-gwalior" element={<ABVIIITMGwaliorPage />} />
            <Route path="/colleges/iiitdm-jabalpur" element={<IIITDMJabalpurPage />} />
            <Route path="/colleges/iiitdm-kancheepuram" element={<IIITDMKancheepuramPage />} />
            <Route path="/colleges/iiit-bangalore" element={<IIITBangalorePage />} />
            <Route path="/colleges/iiit-pune" element={<IIITPunePage />} />
            <Route path="/colleges/iiit-delhi" element={<IIITDelhiPage />} />
            <Route path="/colleges/iiit-guwahati" element={<IIITGuwahatiPage />} />
            <Route path="/colleges/iiit-bhagalpur" element={<IIITBhagalpurPage />} />
            <Route path="/colleges/iiit-ranchi" element={<IIITRanchiPage />} />
            <Route path="/colleges/iiit-hyderabad" element={<IIITHyderabadPage />} />
            <Route path="/colleges/iiit-bhopal" element={<IIITBhopalPage />} />
            <Route path="/colleges/iiit-lucknow" element={<IIITLucknowPage />} />
            <Route path="/colleges/iiit-vadodara" element={<IIITVadodaraPage />} />
            <Route path="/colleges/iiit-nagpur" element={<IIITNagpurPage />} />
            <Route path="/colleges/iiit-dharwad" element={<IIITDharwadPage />} />
            <Route path="/colleges/iiit-tiruchirappalli" element={<IIITTiruchirappalliPage />} />
            <Route path="/colleges/iiit-kotayam" element={<IIITKotayamPage />} />
            <Route path="/colleges/iiit-agartala" element={<IIITAgartalaPage />} />
            <Route path="/colleges/iiit-sonepat" element={<IIITSonepatPage />} />
            <Route path="/colleges/iiit-kota" element={<IIITKotaPage />} />
            <Route path="/colleges/iiit-sri-city" element={<IIITSriCityPage />} />
            <Route path="/colleges/amity-noida" element={<AmityNoidaPage />} />
            <Route path="/colleges/bits-pilani" element={<BITSPilaniPage />} />
            <Route path="/colleges/bits-goa" element={<BITSGoaPage />} />
            <Route path="/colleges/bits-hyderabad" element={<BITSHyderabadPage />} />
            <Route path="/colleges/bits-mumbai" element={<BITSMumbaiPage />} />
            <Route path="/colleges/srm" element={<SRMPage />} />
            <Route path="/colleges/srmist" element={<SRMPage />} />
            <Route path="/colleges/srm-institute-of-science-technology" element={<SRMPage />} />
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
            <Route path="/colleges/vit-chennai" element={<VitChennaiPage />} />
            <Route path="/colleges/vit-bhopal" element={<VitBhopalPage />} />
            <Route path="/colleges/vit-amaravati" element={<VitAmaravatiPage />} />
            <Route path="/colleges/vit-ap" element={<VitAmaravatiPage />} />
            <Route path="/colleges/vit-bangalore" element={<VitBangalorePage />} />
            <Route path="/psychometric-test" element={<PsychometricTest />} />
            <Route path="/articles" element={<ArticlesLandingPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
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
