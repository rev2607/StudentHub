import { useState } from "react";
// import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { Menu, X, User, LogOut, Settings /* Phone, Mail, MessageCircle */ } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import SignInModal from './auth/SignInModal';
import SignUpModal from './auth/SignUpModal';
import ProfileModal from './auth/ProfileModal';
import callIcon from '../assets/call.png';
import emailIcon from '../assets/email.png';
import fbIcon from '../assets/FB_header.png';
import instaIcon from '../assets/insta_header.png';
import twitterIcon from '../assets/X_header.png';
import ytIcon from '../assets/YT_header.png';
import headerBg from '../assets/header.png';
import lnIcon from '../assets/LN_header.png';

const HomePageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  const { user, profile, signOut } = useAuth();

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Results", path: "/results" },
    { title: "News", path: "/news" },
    { title: "Engineering Colleges", path: "/engineering-colleges" },
    { title: "Exams", path: "/exams" },
    { title: "Mock Tests", path: "/mock-tests" },
    { title: "Training Institutes", path: "/training-institutes" },
  ];

  return (
    <>
      {/* Custom Top Header */}
      <div
        className="w-full hidden md:block"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 64,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-2 text-xs" style={{ minHeight: 64 }}>
          {/* Left: Contact Info (vertical stacked) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
            <div className="flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-white pb-4 sm:pb-0 sm:pr-6">
              <img src={callIcon} alt="call" className="w-6 h-6 mr-2" />
              <div className="flex flex-col items-start">
                <span className="text-white opacity-80 leading-tight">Contact Us</span>
                <span className="text-white font-semibold text-base leading-tight">9000090000</span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:pl-6">
              <img src={emailIcon} alt="email" className="w-6 h-6 mr-2" />
              <div className="flex flex-col items-start">
                <span className="text-white opacity-80 leading-tight">Send Email</span>
                <span className="text-white font-semibold text-base leading-tight">info@studenthub.in</span>
              </div>
            </div>
          </div>
          {/* Right: Write a review button + dots */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
            <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] border border-[#262443] px-4 sm:px-6 py-2 rounded-md font-semibold text-sm sm:text-base transition-all shadow w-full sm:w-auto">
              Write a review
            </button>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={ytIcon} alt="YouTube" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={instaIcon} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter/X" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={fbIcon} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={lnIcon} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <h1 className="text-2xl font-extrabold text-[var(--site-green)] flex items-center gap-2">
                  <img src="StudentHub_Blue_Logo.svg" className="w-32 sm:w-38 md:w-44 lg:w-52 xl:w-58" alt="Logo" />
                  <span className="hidden">STUDENT HUB.IN</span>
                </h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link key={item.title} to={item.path} className="text-[#262443] hover:text-[var(--site-green)] transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
              
              {/* Auth Section */}
              <div className="relative">
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowAuthDropdown(!showAuthDropdown)}
                      className="flex items-center gap-2 text-[#262443] hover:text-[var(--site-green)] transition-colors duration-200"
                    >
                      <User size={20} />
                      <span>{profile?.name || 'User'}</span>
                      <svg className={`w-4 h-4 transition-transform ${showAuthDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {showAuthDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              setShowProfileModal(true);
                              setShowAuthDropdown(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Settings size={16} />
                            Edit Profile
                          </button>
                          <button
                            onClick={() => {
                              signOut();
                              setShowAuthDropdown(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <LogOut size={16} />
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowSignInModal(true)}
                      className="text-[#262443] hover:text-[var(--site-green)] transition-colors duration-200"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setShowSignUpModal(true)}
                      className="bg-[var(--site-green)] text-white px-4 py-2 rounded-md hover:bg-[#7bb53a] transition-colors duration-200"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button and auth */}
            <div className="md:hidden flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">{profile?.name || 'User'}</span>
                  <button
                    onClick={() => setShowProfileModal(true)}
                    className="text-gray-700 hover:text-[var(--site-green)]"
                  >
                    <User size={20} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSignInModal(true)}
                    className="text-gray-700 hover:text-[var(--site-green)] text-sm"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowSignUpModal(true)}
                    className="bg-[var(--site-green)] text-white px-3 py-1 rounded text-sm"
                  >
                    Sign Up
                  </button>
                </div>
              )}
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[var(--site-green)] focus:outline-none">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, idx) => (
                <>
                  <Link 
                    key={item.title} 
                    to={item.path} 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50" 
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {/* After Training Institutes, insert contact info and review button for mobile */}
                  {item.title === 'Training Institutes' && (
                    <div className="my-4 px-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <img src={callIcon} alt="call" className="w-5 h-5" />
                        <span className="text-xs text-gray-700">9000090000</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={emailIcon} alt="email" className="w-5 h-5" />
                        <span className="text-xs text-gray-700">info@studenthub.in</span>
                      </div>
                      <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] border border-[#262443] px-4 py-2 rounded-md font-semibold text-xs transition-all shadow w-full">
                        Write a review
                      </button>
                    </div>
                  )}
                </>
              ))}
              
              {/* Mobile Auth Section */}
              {user ? (
                <div className="border-t pt-2 mt-2">
                  <button
                    onClick={() => {
                      setShowProfileModal(true);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50"
                  >
                    <Settings size={20} />
                    Edit Profile
                  </button>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50"
                  >
                    <LogOut size={20} />
                    Sign Out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </nav>
      
      {/* Auth Modals */}
      <SignInModal
        isOpen={showSignInModal}
        onClose={() => setShowSignInModal(false)}
        onSwitchToSignUp={() => {
          setShowSignInModal(false);
          setShowSignUpModal(true);
        }}
      />
      
      <SignUpModal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onSwitchToSignIn={() => {
          setShowSignUpModal(false);
          setShowSignInModal(true);
        }}
      />
      
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </>
  );
};

export default HomePageHeader;
