import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../pages/HomePage/navigationToSearchPage";
import whatsappLogo from "../assets/whatsapp_logo.svg.png";
import { subscribeEmail, EmailSubscriptionData } from '../services/emailSubscriptionService';
import twitterLogo from "../assets/twitter_logo.png";
import linkedinLogo from "../assets/linkedin_logo.png";
import instagramLogo from "../assets/instagram_logo.png";
import facebookLogo from "../assets/facebook_logo.png";
import studenthubLogo from "../assets/studenthub_logo.png";

const HomePageFooter = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubmitMessage('Please enter a valid email address.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const subscriptionData: EmailSubscriptionData = {
        email: email,
        source: 'footer_form',
        ip_address: null, // Could be added if needed
        user_agent: navigator.userAgent
      };

      const response = await subscribeEmail(subscriptionData);
      
      if (response.success) {
        setSubmitMessage(response.message);
        setEmail(''); // Clear the form
      } else {
        setSubmitMessage(response.message);
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitMessage('Sorry, there was an error subscribing your email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const topColleges = [
    {
      title: "TOP ENGINEERING COLLEGES",
      subSections: [
        {
          title: "State Wise",
          items: [
            "Top Engineering Colleges In India",
            "Top Engineering Colleges In Tamilnadu",
            "Top Engineering Colleges In Telangana",
            "Top Engineering Colleges In Andhra Pradesh",
            "Top Engineering Colleges In Karnataka",
          ],
        },
        {
          title: "City Wise",
          items: ["Top Engineering Colleges In Bangalore", "Top Engineering Colleges In Chennai", "Top Engineering Colleges In Hyderabad"],
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#23214A] text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img alt="Student Hub Logo" className="w-14 h-14" src={studenthubLogo} />
            </Link>
            <span className="text-4xl font-semibold uppercase tracking-tighter font-sans">STUDENT HUB.IN</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-sm text-gray-200">Get Latest Updates On</span>
            <div className="flex items-center space-x-3 mt-1 md:mt-0">
              <a href="#" aria-label="Facebook"><img src={facebookLogo} alt="Facebook" className="w-7 h-7" /></a>
              <a href="#" aria-label="Instagram"><img src={instagramLogo} alt="Instagram" className="w-7 h-7" /></a>
              <a href="#" aria-label="Twitter"><img src={twitterLogo} alt="Twitter" className="w-7 h-7" /></a>
              <a href="#" aria-label="LinkedIn"><img src={linkedinLogo} alt="LinkedIn" className="w-7 h-7" /></a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-lg mb-6 text-white">ABOUT US</h2>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Our Story</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Leadership</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Learner Stories</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Contact Us</li>
            </ul>
            
            {/* Quick Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-sm mb-4 text-white">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Admission Process</li>
                <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Scholarships</li>
                <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Education Loans</li>
                <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Study Abroad</li>
                <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Career Guidance</li>
              </ul>
            </div>
          </div>

          {/* Engineering Colleges Section */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-lg mb-6 text-white">TOP ENGINEERING COLLEGES</h2>
            {topColleges.map((college, index) => (
              <div key={index}>
                {college.subSections.map((subSection, subIndex) => (
                  <div key={subIndex} className={subIndex > 0 ? "mt-6" : ""}>
                    <h3 className="text-sm text-gray-300 mb-4 font-medium uppercase tracking-wide">{subSection.title}</h3>
                    <ul className="space-y-3 text-sm">
                      {subSection.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className={`hover:text-[var(--site-green)] transition-colors cursor-pointer ${
                            itemIndex === 0 ? "text-[var(--site-green)] font-medium" : ""
                          }`} 
                          onClick={() => navigateToSearchPage(navigate, item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Exams & Resources Section */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-lg mb-6 text-white">TOP EXAMS</h2>
            <ul className="space-y-3 text-sm mb-8">
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">JEE Main</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">JEE Advanced</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">NEET</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">VITEEE</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">BITSAT</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">TS EAMCET</li>
            </ul>
            
            <h3 className="font-semibold text-sm mb-4 text-white">RESOURCES</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Mock Tests</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Previous Year Papers</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Study Materials</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Exam Calendar</li>
              <li className="hover:text-[var(--site-green)] transition-colors cursor-pointer">Result Analysis</li>
            </ul>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-lg mb-6 text-white">GET IN TOUCH</h2>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-sm text-gray-300 mb-4">Stay updated with the latest education news and opportunities.</p>
              <form className="w-full" onSubmit={handleEmailSubmit}>
                <div className="flex flex-col gap-3 mb-3">
                  <input 
                    className="p-3 rounded-lg text-black border border-gray-300 bg-white flex-1 min-w-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                    placeholder="Enter your email address" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                  <button 
                    className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Subscribe'}
                  </button>
                </div>
                {submitMessage && (
                  <div className={`text-sm mt-2 ${submitMessage.includes('error') || submitMessage.includes('Sorry') ? 'text-red-400' : 'text-green-400'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* WhatsApp QR */}
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://storage.googleapis.com/a1aa/image/zfR1oZtA9d_wNCyy4Dpkw4x8BXgSzFXGc25LHaW5yl0.jpg" 
                  alt="QR Code" 
                  className="w-16 h-16 rounded bg-white p-1 flex-shrink-0" 
                />
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
                    <span className="font-bold text-[var(--site-green)]">Join WhatsApp Community</span>
                  </div>
                  <p className="text-xs leading-tight text-gray-300">
                    Get instant updates and connect with fellow students!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--site-green)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-sm text-white">Office Address</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Inorbit Mall Rd, APIIC Software Layout,<br />
                    Mindspace, Madhapur,<br />
                    Telangana 500081
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--site-green)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-sm text-white">Email Support</p>
                  <p className="text-xs text-gray-300">info@studenthub.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-gray-300">© 2025 StudentHub.in. All Rights Reserved.</p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>in India</span>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm">
            <a className="text-gray-300 hover:text-[var(--site-green)] transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-gray-300 hover:text-[var(--site-green)] transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-gray-300 hover:text-[var(--site-green)] transition-colors" href="#">
              Cookie Policy
            </a>
            <a className="text-gray-300 hover:text-[var(--site-green)] transition-colors" href="#">
              Advertise With Us
            </a>
            <a className="text-gray-300 hover:text-[var(--site-green)] transition-colors" href="#">
              Education Loans
            </a>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-6">
              <span>Trusted by 10,000+ Students</span>
              <span>•</span>
              <span>100+ Partner Colleges</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Follow us on:</span>
              <div className="flex items-center gap-2">
                <a href="#" className="hover:text-[var(--site-green)] transition-colors">
                  <img src={facebookLogo} alt="Facebook" className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-[var(--site-green)] transition-colors">
                  <img src={instagramLogo} alt="Instagram" className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-[var(--site-green)] transition-colors">
                  <img src={twitterLogo} alt="Twitter" className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-[var(--site-green)] transition-colors">
                  <img src={linkedinLogo} alt="LinkedIn" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
