import { Link, useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../pages/HomePage/navigationToSearchPage";
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
    <footer className="bg-[#2E294E] text-white font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img alt="Student Hub Logo" className="w-full" height="40" src="StudentHub_Logo.svg" width="40" />
            </Link>
          </div>
          <div className="flex space-x-4">
            <span>Get Latest Updates On</span>
            <a className="text-white" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <hr className="border-gray-600 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div>
            <h2 className="font-bold mb-4">ABOUT US</h2>
            <ul className="space-y-2">
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
                  <h3 className="text-sm text-gray-400 mb-2">{subSection.title}</h3>
                  <ul className="space-y-2">
                    {subSection.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={itemIndex === 0 ? "text-green-500" : ""} onClick={() => navigateToSearchPage(navigate, item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <div>
            <h2 className="font-bold mb-4">TOP EXAMS</h2>
            <ul className="space-y-2">
              <li>JEE Mains</li>
              <li>NEET</li>
              <li>VITEEE</li>
            </ul>

            <h2 className="font-bold mb-4">GET IN TOUCH</h2>
            <p className="text-sm mb-4">We don’t send spam so don’t worry.</p>
            <div className="flex items-center mb-4">
              <input className="p-2 rounded-l-full text-white border" placeholder="Email ..." type="email" />
              <button className="bg-green-500 text-white p-2 rounded-r-full border">Submit</button>
            </div>
            <div className="mb-4 flex">
              <img alt="QR Code" className="mb-2" height="100" src="https://storage.googleapis.com/a1aa/image/zfR1oZtA9d_wNCyy4Dpkw4x8BXgSzFXGc25LHaW5yl0.jpg" width="100" />
              <div className="flex items-center space-x-2">
                <i className="fab fa-whatsapp text-green-500 text-2xl"></i>
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-sm">
                    SCAN the QR to join our
                    <span className="font-bold"> Student Hub Community</span>
                    and stay updated with the latest news!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-green-500"></i>
              <div>
                <p className="font-bold">Get Directions</p>
                <p className="text-sm">Inorbit Mall Rd, APIIC Software Layout, Mindspace, Madhapur, Telangana 500081</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-center space-y-2 sm:space-y-0">
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
