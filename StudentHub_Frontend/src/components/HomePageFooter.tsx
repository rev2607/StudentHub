import { useState } from "react";
import { Link } from "react-router-dom";
import whatsappLogo from "../assets/whatsapp_logo.svg.png";
import { subscribeEmail, EmailSubscriptionData } from '../services/emailSubscriptionService';
import twitterLogo from "../assets/twitter_logo.png";
import linkedinLogo from "../assets/linkedin_logo.png";
import instagramLogo from "../assets/instagram_logo.png";
import facebookLogo from "../assets/facebook_logo.png";
import studenthubLogo from "../assets/studenthub_logo.png";

const HomePageFooter = () => {
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

  return (
    <footer className="bg-[#23214A] text-white font-sans">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img alt="Student Hub Logo" className="w-12 h-12" src={studenthubLogo} />
            </Link>
            <span className="text-3xl font-semibold uppercase tracking-tighter font-sans">STUDENT HUB.IN</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-sm text-gray-200">Get Latest Updates On</span>
            <div className="flex items-center space-x-3 mt-1 md:mt-0">
              <a href="#" aria-label="Facebook"><img src={facebookLogo} alt="Facebook" className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram"><img src={instagramLogo} alt="Instagram" className="w-6 h-6" /></a>
              <a href="#" aria-label="Twitter"><img src={twitterLogo} alt="Twitter" className="w-6 h-6" /></a>
              <a href="#" aria-label="LinkedIn"><img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 mb-6" />
        
        {/* Three Column Layout: Quick Links, Contact Info, and Get In Touch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-6">
          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/exams" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Exams
                </Link>
              </li>
              <li>
                <Link to="/colleges" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Colleges
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link to="/psychometric-test" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Career Test
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[var(--site-green)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-xs text-white mb-1">Office Address</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    D No. 3-35, Manduva vari palem,<br />
                    Manduvavaripalem, Ongole,<br />
                    Prakasam - 523262,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[var(--site-green)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-xs text-white mb-1">Email Support</p>
                  <p className="text-xs text-gray-300">info@studenthub.in</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h2 className="font-bold text-lg mb-4 text-white">GET IN TOUCH</h2>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-gray-300 mb-3">Stay updated with the latest education news and opportunities.</p>
              <form className="w-full" onSubmit={handleEmailSubmit}>
                <div className="flex flex-col sm:flex-row gap-3 mb-3">
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
                    className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md whitespace-nowrap" 
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
                  className="w-14 h-14 rounded bg-white p-1 flex-shrink-0" 
                />
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <img src={whatsappLogo} alt="WhatsApp" className="w-4 h-4" />
                    <span className="font-bold text-sm text-[var(--site-green)]">Join WhatsApp Community</span>
                  </div>
                  <p className="text-xs leading-tight text-gray-300">
                    Get instant updates and connect with fellow students!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-gray-300">© 2026 STUDENT HUB (OPC) PRIVATE LIMITED. All Rights Reserved.</p>
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
            <Link to="/privacy-policy" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-300 hover:text-[var(--site-green)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-6">
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
