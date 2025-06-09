import { useState } from "react";
// import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { Menu, X /* Phone, Mail, MessageCircle */ } from "lucide-react";
import { Link } from "react-router-dom";
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

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Results", path: "/results" },
    { title: "News", path: "/news" },
    { title: "Engineering Colleges", path: "/engineering-colleges" },
    { title: "Exams", path: "/exams" },
    { title: "Scholarships", path: "/scholarships" },
    { title: "Training Institutes", path: "/training-institutes" },
  ];

  return (
    <>
      {/* Custom Top Header */}
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 64,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-xs" style={{ minHeight: 64 }}>
          {/* Left: Contact Info (vertical stacked) */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2 border-r border-white pr-6">
              <img src={callIcon} alt="call" className="w-6 h-6 mr-2" />
              <div className="flex flex-col items-start">
                <span className="text-white opacity-80 leading-tight">Contact Us</span>
                <span className="text-white font-semibold text-base leading-tight">9000090000</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pl-6">
              <img src={emailIcon} alt="email" className="w-6 h-6 mr-2" />
              <div className="flex flex-col items-start">
                <span className="text-white opacity-80 leading-tight">Send Email</span>
                <span className="text-white font-semibold text-base leading-tight">info@studenthub.in</span>
              </div>
            </div>
          </div>
          {/* Right: Write a review button + dots (unchanged) */}
          <div className="flex items-center gap-6">
            <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] border border-[#262443] px-6 py-2 rounded-md font-semibold text-base transition-all shadow">
              Write a review
            </button>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={ytIcon} alt="YouTube" className="w-8 h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={instaIcon} alt="Instagram" className="w-8 h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter/X" className="w-8 h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={fbIcon} alt="Facebook" className="w-8 h-8 hover:opacity-80 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={lnIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition" />
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
                  <img src="StudentHub_Blue_Logo.svg" className="w-38 md:w-44 lg:w-52 xl:w-58" alt="Logo" />
                  <span className="hidden">STUDENT HUB.IN</span>
                </h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link key={item.title} to={item.path} className="text-[#262443]  hover:text-[var(--site-green)] transition-colors duration-200">
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[var(--site-green)] focus:outline-none">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link key={item.title} to={item.path} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default HomePageHeader;
