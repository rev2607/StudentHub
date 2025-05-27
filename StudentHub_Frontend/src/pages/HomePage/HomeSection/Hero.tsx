import { Globe, Paperclip, ArrowRight, FileText, Newspaper, Calendar, GraduationCap, Award, Users, BookOpen, FileSpreadsheet } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { navigateToSearchPage } from "../navigationToSearchPage";



const menuItems = [
  { icon: FileText, label: "Results", path: "/results" },
  { icon: Newspaper, label: "News", path: "/news" },
  { icon: Calendar, label: "Exams", path: "/exams" },
  { icon: GraduationCap, label: "Colleges", path: "/colleges" },
  { icon: Award, label: "Scholarships", path: "/scholarships" },
  { icon: Users, label: "Internships", path: "/internships" },
  { icon: BookOpen, label: "College Compare", path: "/compare" },
  { icon: FileSpreadsheet, label: "Articles", path: "/articles" },
  { icon: BookOpen, label: "Courses", path: "/courses" },
];


const Hero = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  /* START: Textarea Rows Small Device Responsive  ---------------------------- */
  const [rows, setRows] = useState(window.innerWidth < 640 ? 3 : 5);
  useEffect(() => {
    function handleResize() {
      setRows(window.innerWidth < 640 ? 4 : 3);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Collect textarea input value
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  /* END: Textarea Rows Small Device Responsive  ------------------------------ */

  return (
    <section className="relative hero_banner from-green-600 to-green-700 pt-24 pb-10 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div className="" key={item.label}>
                  <a
                    onClick={() => navigateToSearchPage(navigate, item.label)}
                    className="flex flex-col items-center p-4 rounded border-1 border-[#C4C4C4] hover:bg-opacity-30 transition-all duration-300 text-green-500"
                  >
                    <IconComponent className="h-8 w-8  mb-2 text-site-green" />
                    <span className="text-white text-sm text-center">{item.label}</span>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-16 mt-8 md:mt-0">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">Ask us!</h1>
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="relative">
                <form className="bg-white rounded-xl p-6 shadow-lg">
                  <textarea
                    rows={rows}
                    placeholder="Search for college or universities"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full text-gray-400 placeholder-gray-400 text-base font-normal outline-none resize-none mb-4"
                  ></textarea>
                  <div className="flex items-center justify-between text-gray-400 text-lg">
                    <button type="button" aria-label="Globe icon" className="focus:outline-none">
                      <Globe size={20} />
                    </button>
                    <div className="flex space-x-6">
                      <button type="button" aria-label="Paperclip icon" className="focus:outline-none">
                        <Paperclip size={20} />
                      </button>
                      <button type="submit" aria-label="Send arrow icon" className="focus:outline-none" onClick={() => navigateToSearchPage(navigate, inputValue)}>
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
