import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ExamsHome from "./pages/Exams/ExamsHome";
import Eamcet from "./pages/Exams/Eamcet";
import JeeMain from "./pages/Exams/Jeemain";
import JeeAdvanced from "./pages/Exams/JeeAdvanced";
import Neet from "./pages/Exams/Neet";

// import Search from "./pages/Other/Search";
// import Test from "./pages/Other/Test";
// import Courses from "./pages/Other/Courses";
// import Exams from "./pages/Other/Exams";
// import Resources from "./pages/Other/Resources";
// import Login from "./pages/Other/Login";

function App() {
  return (
    <Router>
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
            {/* Exams nested routes */}
            <Route path="/exams" element={<ExamsHome />}>
              <Route index element={<div className="text-gray-600">Select an exam above to view details.</div>} />
              <Route path="eamcet" element={<Eamcet />} />
              <Route path="jee-main" element={<JeeMain />} />
              <Route path="jee-advanced" element={<JeeAdvanced />} />
              <Route path="neet" element={<Neet />} />
            </Route>
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
