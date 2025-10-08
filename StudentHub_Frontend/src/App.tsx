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
import ExamsLandingPage from "./pages/Exams/ExamsLandingPage";
import JEEMainPage from "./pages/Exams/JEEMainPage";
import ExamDetailPage from "./pages/Exams/ExamDetailPage";
import ResultsPage from "./pages/Results/ResultsPage";

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
            <Route path="/mock-tests" element={
              <RequireAuth>
                <MockTests />
              </RequireAuth>
            } />
            <Route path="/news" element={<NewsLandingPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/exams" element={<ExamsLandingPage />} />
            <Route path="/exams/jee-main" element={<JEEMainPage />} />
            <Route path="/exams/:slug" element={<ExamDetailPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/colleges" element={<CollegesListPage />} />
            <Route path="/colleges/:slug" element={<CollegeDetailPage />} />
            <Route path="/colleges/iit-roorkee" element={<IITRoorkeePage />} />
            <Route path="/engineering-colleges" element={<Navigate to="/colleges" replace />} />
            <Route path="*" element={<Navigate to="/colleges" replace />} />
          </Route>

          {/* Auth routes */}
          <Route path="/signup" element={<SignupWithProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/edit" element={
            <RequireAuth>
              <ProfileEdit />
            </RequireAuth>
          } />

          {/* Protected mock test routes */}
          <Route path="/mock-tests/start" element={
            <RequireAuth>
              <MockTestsStart />
            </RequireAuth>
          } />

          {/* Other routes */}
          <Route path="/search" element={<SearchPage />} />
          
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
