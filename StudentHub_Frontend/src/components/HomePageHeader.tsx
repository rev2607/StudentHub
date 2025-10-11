import callIcon from '../assets/call.png';
import emailIcon from '../assets/email.png';
import fbIcon from '../assets/FB.svg';
import instaIcon from '../assets/Insta.svg';
import twitterIcon from '../assets/Twitter.svg';
import ytIcon from '../assets/YT_header.png';
import headerBg from '../assets/header.png';
import lnIcon from '../assets/linkedin.svg';
import Navbar from './Navbar';

const HomePageHeader = () => {

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
                <span className="text-white font-semibold text-base leading-tight">+91 6305111066</span>
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
          {/* Right: Write a review button + social media */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
            <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] border border-[#262443] px-4 sm:px-6 py-2 rounded-md font-semibold text-sm sm:text-base transition-all shadow w-full sm:w-auto">
              Write a review
            </button>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="https://youtube.com/@jaya6711?si=tqTX_VY-vV_CHc9W" target="_blank" rel="noopener noreferrer">
                <img src={ytIcon} alt="YouTube" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="https://www.instagram.com/studenthub.in?igsh=MWU1Y3FvZjE0dW5wMQ==" target="_blank" rel="noopener noreferrer">
                <img src={instaIcon} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="https://x.com/Studenthub9999" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter/X" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="https://www.facebook.com/share/1YQL94WWZz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <img src={fbIcon} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
              <a href="https://www.linkedin.com/groups/15533070/" target="_blank" rel="noopener noreferrer">
                <img src={lnIcon} alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar with Auth */}
      <Navbar />
    </>
  );
};

export default HomePageHeader;