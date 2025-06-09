import { Link, useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../pages/HomePage/navigationToSearchPage";
import whatsappLogo from "../assets/whatsapp_logo.svg.png";
import twitterLogo from "../assets/twitter_logo.png";
import linkedinLogo from "../assets/linkedin_logo.png";
import instagramLogo from "../assets/instagram_logo.png";
import facebookLogo from "../assets/facebook_logo.png";
import studenthubLogo from "../assets/studenthub_logo.png";

const HomePageFooter = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

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
    {
      title: "TOP MEDICAL COLLEGES",
      subSections: [
        {
          title: "State Wise",
          items: [
            "Top Medical Colleges In India",
            "Top Medical Colleges In Tamilnadu",
            "Top Medical Colleges In Telangana",
            "Top Medical Colleges In Andhra Pradesh",
            "Top Medical Colleges In Karnataka",
          ],
        },
        {
          title: "City Wise",
          items: ["Top Medical Colleges In Bangalore", "Top Medical Colleges In Chennai", "Top Medical Colleges In Hyderabad"],
        },
      ],
    },
    {
      title: "TOP MBA COLLEGES",
      subSections: [
        {
          title: "State Wise",
          items: ["Top M.B.A Colleges In India", "Top M.B.A Colleges In Tamilnadu", "Top M.B.A Colleges Telangana", "Top M.B.A Colleges In Andhra Pradesh", "Top M.B.A Colleges In Karnataka"],
        },
        {
          title: "City Wise",
          items: ["Top M.B.A Colleges In Bangalore", "Top M.B.A Colleges In Chennai", "Top M.B.A Colleges In Hyderabad"],
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <h2 className="font-bold mb-4">ABOUT US</h2>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Learner Stories</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {topColleges.map((college, index) => (
            <div key={index}>
              <h2 className="font-bold mb-4">{college.title}</h2>
              {college.subSections.map((subSection, subIndex) => (
                <div key={subIndex}>
                  <h3 className="text-xs text-gray-400 mb-2">{subSection.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {subSection.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={itemIndex === 0 ? "text-[var(--site-green)]" : ""} onClick={() => navigateToSearchPage(navigate, item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-bold mb-4">TOP EXAMS</h2>
              <ul className="space-y-2 text-sm">
                <li>JEE Mains</li>
                <li>NEET</li>
                <li>VITEEE</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">GET IN TOUCH</h2>
              <p className="text-xs mb-2">We don't send spam so don't worry.</p>
              <form className="w-full" onSubmit={e => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row w-full gap-2 mb-3">
                  <input className="p-2 rounded-full text-black border flex-1 min-w-0" placeholder="Email ..." type="email" />
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full whitespace-nowrap" type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <img src="https://storage.googleapis.com/a1aa/image/zfR1oZtA9d_wNCyy4Dpkw4x8BXgSzFXGc25LHaW5yl0.jpg" alt="QR Code" className="w-20 h-20 rounded bg-white p-1" />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
                  <span className="font-bold text-green-400">WhatsApp</span>
                </div>
                <p className="text-xs leading-tight">
                  SCAN the QR to join our <span className="font-bold">Student Hub Community</span> and stay updated with the latest news!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--site-green)] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <p className="font-bold text-xs">Get Directions</p>
                <p className="text-xs">Inorbit Mall Rd, APIIC Software Layout, Mindspace, Madhapur, Telangana 500081</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-center space-y-2 sm:space-y-0">
          <p>© 2025 Copyright. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3">
            <a className="hover:underline" href="#">
              About Us
            </a>
            <a className="hover:underline" href="#">
              Education Loans
            </a>
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="hover:underline" href="#">
              Advertise With Us
            </a>
            <a className="hover:underline" href="#">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
