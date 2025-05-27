import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faUniversity, faBook, faBalanceScale, faGraduationCap, faBriefcase, faNewspaper, faHistory, faEllipsisH, faShare, faFileExport, faPen, faPlus } from "react-icons/fa";

function SearchPage() {
  const [isLeftOpen, setIsLeftOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);

  const toggleLeftSidebar = () => {
    setIsLeftOpen((prev) => !prev);
  };

  const sidebarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsLeftOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-[#121916] text-white min-h-screen flex flex-col md:flex-row">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />

      {/* <!-- Mobile top bar with menu icons --> */}
      <header className="flex justify-between items-center bg-[#1B201D] px-4 py-3 md:hidden fixed top-0 left-0 right-0 z-30 border-b border-[#2B3A0B]">
        <button id="leftSidebarToggle" aria-label="Toggle left sidebar" className="text-white text-xl focus:outline-none" onClick={toggleLeftSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/">
          {/* <span className="text-white font-semibold text-lg tracking-wide truncate max-w-[60vw]">STUDENT HUB.IN</span> */}
          <img src="StudentHub_Logo.svg" className="w-40 sm:w-20 md:w-24 lg:w-32 xl:w-40" alt="Logo" />
        </Link>

        <button id="rightSidebarToggle" aria-label="Toggle right sidebar" className="text-white text-xl focus:outline-none" onClick={() => setIsRightOpen((prev) => !prev)}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* <!-- Sidebar --> */}

      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-40 w-56 bg-[#1B201D] border-r border-[#2B3A0B] px-4 py-6 md:px-6 md:py-8 transition-transform duration-300 ease-in-out transform ${
          isLeftOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:flex md:flex-col md:justify-between`}
      >
        <div>
          <div className="flex items-center gap-2 mb-8 md:mb-10">
            <Link to="/">
              {/* <span className="text-white font-semibold text-lg tracking-wide whitespace-nowrap">STUDENT HUB.IN</span> */}
              <img src="StudentHub_Logo.svg" />
            </Link>
          </div>
          <button className="w-full text-white border border-[#7AC142] rounded-full py-2 text-sm font-semibold flex items-center justify-center gap-2 mb-6 md:mb-8 hover:bg-[#7AC142] hover:text-black transition">
            <i className="fas fa-plus"></i>
            New Thread
          </button>
          <nav id="leftNav" className="flex flex-col gap-4 text-sm font-normal text-white">
            {/* {["Home", "Colleges", "Courses", "College Compare", "Scholarships", "Internship", "News", "History"].map((item, index) => (
              <a key={index} className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#" onClick={closeLeftSidebar}>
                <i className="fas fa-icon-name"></i> {/* You can map icons if needed */}
            {/* {item} */}
            {/* </a> */}
            {/* ))} */}
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-search text-[#7AC142]"></i>
              Home
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-building text-[#7AC142]"></i>
              Colleges
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-book text-[#7AC142] "></i>
              Courses
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-balance-scale text-[#7AC142]"></i>
              College Compare
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-graduation-cap text-[#7AC142]"></i>
              Scholarships
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-briefcase text-[#7AC142]"></i>
              Internship
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-newspaper text-[#7AC142]"></i>
              News
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-globe text-[#7AC142]"></i>
              History
            </a>
          </nav>
          <div className="mt-8 md:mt-10 text-[10px] text-white leading-4 space-y-2 max-w-[220px] md:max-w-none">
            <p>
              <span className="text-[#7AC142] font-semibold">Today</span>
              <br />
              Amsterdam trip with the boys
            </p>
            <p>Superconductors: Smooth Roads</p>
            <p>
              <span className="text-[#7AC142] font-semibold">Previous 7 Days</span>
              <br />
              Excited About a Job Opportunity
            </p>
            <p>Fun fact about the Roman Empire</p>
            <p>3 day itinerary in the South of France</p>
            <p>
              <span className="text-[#7AC142] font-semibold">Previous 30 Days</span>
              <br />
              Marble Statue Pizza Cigar.
            </p>
            <p>Gradient Background Pack Giveaway</p>
            <p>Fern Gully, the Chief Leaf Officer</p>
            <p>Design an Uber-like app</p>
            <p>Product team meeting in Barcelona</p>
          </div>
        </div>
        <div className="text-white text-sm space-y-3 mt-6 md:mt-0 max-w-[220px] md:max-w-none">
          <button aria-label="Clear conversations" className="flex items-center gap-2 hover:text-white transition w-full">
            <i className="fas fa-trash-alt"></i>
            Clear conversations
          </button>
          <button aria-label="User Johnwick" className="flex items-center gap-2 hover:text-white transition w-full">
            <img alt="User avatar Johnwick" className="rounded-full" height="20" src="https://storage.googleapis.com/a1aa/image/55ec5250-8d2d-49bb-ca7b-3c845775739d.jpg" width="20" />
            Johnwick
          </button>
          <button aria-label="Log out" className="flex items-center gap-2 hover:text-white transition w-full">
            <i className="fas fa-sign-out-alt text-red-600"></i>
            Log out
          </button>
        </div>
      </aside>

      {/* <!-- Main content --> */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto max-w-full mt-14 md:mt-0">
        <div className="flex justify-end items-center gap-4 mb-6">
          <button aria-label="More options" className="text-[#7AC142] bg-[#1B201D] p-2 rounded-md hover:text-white transition">
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <button aria-label="Bookmark" className="text-[#7AC142] bg-[#1B201D] p-2 rounded-md hover:text-white transition">
            <i className="fas fa-bookmark"></i>
          </button>
          <button aria-label="Share" className="bg-[#7AC142] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#6bb22f] transition whitespace-nowrap">
            Share
          </button>
        </div>
        <div className="border-b border-[#2B3A0B] mb-6"></div>
        <h1 className="text-white text-lg font-normal mb-6">Vit College</h1>
        {/* <!-- Green banner 1 --> */}
        <div className="bg-[#7AC142] rounded-xl flex items-center gap-4 max-w-xl mb-6 px-4 py-3">
          <div className="flex flex-col text-xs text-white font-semibold leading-none">
            <span className="uppercase text-[8px] mb-1">Online Course</span>
            <span className="font-bold text-sm leading-tight">
              Sharpen
              <span className="font-normal">Your Skills With Professional Online Courses</span>
            </span>
          </div>
          <button className="bg-black text-white text-[8px] font-semibold rounded-full px-3 py-1 hover:bg-gray-800 transition whitespace-nowrap">Join Now</button>
          <div className="flex-1"></div>
          <svg className="w-12 h-12 opacity-20" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" fill="#7AC142" r="10" stroke="none"></circle>
            <path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </div>
        <div className="max-w-3xl text-[13px] text-[#B9B9B9] leading-tight mb-6">
          <p className="text-white font-semibold mb-1">Answer</p>
          <p>
            Vellore Institute of Technology (VIT) Chennai, established in 2010, is a prominent private institution located in Chennai, Tamil Nadu. It is part of the VIT Group of Institutes and is
            recognized by the University Grants Commission (UGC). The campus spans 192 acres and hosts around 13,000 students from various backgrounds, including international students.
          </p>
        </div>
        {/* <!-- Green banner 2 --> */}
        <div className="bg-[#7AC142] rounded-xl flex items-center gap-4 max-w-xl mb-6 px-4 py-3">
          <div className="flex flex-col text-xs text-white font-semibold leading-none">
            <span className="uppercase text-[8px] mb-1">Online Course</span>
            <span className="font-bold text-sm leading-tight">
              Sharpen
              <span className="font-normal">Your Skills With Professional Online Courses</span>
            </span>
          </div>
          <button className="bg-black text-white text-[8px] font-semibold rounded-full px-3 py-1 hover:bg-gray-800 transition whitespace-nowrap">Join Now</button>
          <div className="flex-1"></div>
          <svg className="w-12 h-12 opacity-20" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" fill="#7AC142" r="10" stroke="none"></circle>
            <path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </div>
        <div className="max-w-3xl text-[13px] text-[#B9B9B9] leading-tight mb-6">
          <p>anagement, and Sciences.</p>
          <p className="pl-5 mb-3">Admissions are based on merit and entrance exams such as VITEEE for undergraduate courses and VITMEE for postgraduate programs</p>
          <p className="mb-2">Infrastructure and Facilities</p>
          <p className="mb-2">The campus is equipped with modern facilities:</p>
          <ul className="list-disc list-inside space-y-1 text-[12px] text-[#B9B9B9]">
            <li>Classrooms and Laboratories: State-of-the-art classrooms and well-equipped labs.</li>
            <li>Library: A digital library with over 51,800 resources.</li>
            <li>Hostels: Separate accommodations for boys and girls with amenities like Wi-Fi and gyms.</li>
            <li>Healthcare: A 24/7 healthcare center for students and staff.</li>
            <li>Sports Facilities: Grounds for cricket, basketball, volleyball, etc.</li>
          </ul>
        </div>
        <div className="max-w-xl flex items-center space-x-6 text-gray-500 text-xs mb-6 select-none">
          <button className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
            <i className="fas fa-pencil-alt"></i>
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
            <i className="fas fa-file-export"></i>
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
            <i className="fas fa-redo"></i>
            <span>Rewrite</span>
          </button>
          <div className="flex space-x-3 ml-auto text-gray-400">
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="far fa-thumbs-up"></i>
            </button>
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="far fa-thumbs-down"></i>
            </button>
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="far fa-copy"></i>
            </button>
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        {/* <!-- Green banner 3 --> */}
        <div className="bg-[#7AC142] rounded-xl flex items-center gap-4 max-w-xl mb-6 px-4 py-3">
          <div className="flex flex-col text-xs text-white font-semibold leading-none">
            <span className="uppercase text-[8px] mb-1">Online Course</span>
            <span className="font-bold text-sm leading-tight">
              Sharpen
              <span className="font-normal">Your Skills With Professional Online Courses</span>
            </span>
          </div>
          <button className="bg-black text-white text-[8px] font-semibold rounded-full px-3 py-1 hover:bg-gray-800 transition whitespace-nowrap">Join Now</button>
          <div className="flex-1"></div>
          <svg className="w-12 h-12 opacity-20" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" fill="#7AC142" r="10" stroke="none"></circle>
            <path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </div>
        <div className="max-w-xl flex items-center space-x-2 text-gray-300 text-xs mb-6">
          <i className="fas fa-list-ul"></i>
          <span className="font-semibold">Related</span>
        </div>
        <div className="max-w-xl flex items-center justify-between text-gray-300 text-xs mb-6 cursor-pointer border-y border-gray-600 py-3">
          <span>What are the top courses offered at VIT Chennai</span>
          <i className="fas fa-plus text-[#7AC142]"></i>
        </div>
        <form action="#" className="max-w-xl border border-[#3B4B1B] rounded-xl p-4 flex items-center space-x-3 text-gray-400 text-xs" method="POST">
          <button className="text-gray-400 hover:text-gray-300 cursor-pointer" type="button">
            <i className="fas fa-paperclip"></i>
          </button>
          <textarea className="bg-transparent flex-1 outline-none placeholder:text-gray-600" placeholder="Ask Follow-up" rows={5}></textarea>
          <button className="text-gray-400 hover:text-gray-300 cursor-pointer" type="submit">
            <i className="fas fa-arrow-up"></i>
          </button>
        </form>
      </main>

      {/* <!-- Right sidebar --> */}
      {/* <aside
        id="rightSidebar"
        className="fixed inset-y-0 right-0 z-40 w-72 bg-[#121916] p-4 md:p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[#7AC142]/50 scrollbar-track-transparent mt-14 md:mt-0 transform translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:flex md:flex-col md:gap-6"
      > */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-72 bg-[#121916] p-4 md:p-6 overflow-y-auto mt-14 md:mt-0 transition-transform duration-300 ease-in-out transform ${
          isRightOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:translate-x-0 md:flex md:flex-col md:gap-6`}
      >
        <div className="relative">
          <img
            alt="College main building exterior daylight view with clear sky and green lawn"
            className="rounded-md w-full object-cover h-36"
            height="140"
            src="https://storage.googleapis.com/a1aa/image/ca66c005-d713-4b7f-044b-c6072db641d6.jpg"
            width="120"
          />
          <button aria-label="More options" className="absolute top-2 right-2 bg-[#1B201D] p-1 rounded-md text-[#7AC142] hover:text-white transition">
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <div className="absolute top-10 right-2 bg-[#1B201D] rounded-md shadow-lg w-48 text-xs text-white hidden group-hover:block" id="dropdown-menu">
            <ul className="py-1">
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-plus"></i>
                Add to Space
              </li>
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-file-pdf"></i>
                Export as PDF
              </li>
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-file-alt"></i>
                Export as Markdown
              </li>
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-file-word"></i>
                Export as DOCX
              </li>
              <li className="px-3 py-2 hover:bg-red-600 cursor-pointer flex items-center gap-2">
                <i className="fas fa-trash"></i>
                Delete Thread
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <img
            alt="Campus view showing modern buildings and green spaces"
            className="rounded-md object-cover w-full h-16"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/ee9cc35d-31a7-4e9f-e705-651f0b8085be.jpg"
            width="80"
          />
          <img
            alt="Campus view showing academic buildings and pathways"
            className="rounded-md object-cover w-full h-16"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/75238b9e-055b-49b4-3f2e-5caaf53a02c7.jpg"
            width="80"
          />
          <img
            alt="Campus view showing student housing and open areas"
            className="rounded-md object-cover w-full h-16"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/a7ba96c6-9456-44a3-38f8-33cfd24d4108.jpg"
            width="80"
          />
          <img
            alt="Campus view showing sports facilities and green fields"
            className="rounded-md object-cover w-full h-16"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/726a3bcd-75b6-4622-ac4e-51dbba2b7996.jpg"
            width="80"
          />
          <img
            alt="Campus view showing administrative building and clock tower"
            className="rounded-md object-cover w-full h-16"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/b3768f27-2acd-434e-e3af-c1220c58b6a7.jpg"
            width="80"
          />
          <img
            alt="Campus view showing library and study areas"
            className="rounded-md object-cover w-full h-16"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/5db9da0a-80d9-4e97-331d-f2b1b2af2fbb.jpg"
            width="80"
          />
        </div>
        <div className="text-[#7AC142] text-xs flex justify-between items-center">
          <span>Search Videos</span>
          <button aria-label="Add video" className="text-[#7AC142] hover:text-white">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <section aria-label="Students Also Visited" className="bg-white rounded-lg p-4 text-xs text-black max-w-full">
          <h2 className="font-semibold mb-3 text-sm">Students Also Visited</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                  <span className="text-yellow-400 text-xs ml-1">
                    <i className="fas fa-star"></i> 4.4
                  </span>
                  <span className="text-gray-500 text-[9px] ml-1">(345 Reviews)</span>
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                  <span className="text-yellow-400 text-xs ml-1">
                    <i className="fas fa-star"></i> 4.4
                  </span>
                  <span className="text-gray-500 text-[9px] ml-1">(345 Reviews)</span>
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                  <span className="text-yellow-400 text-xs ml-1">
                    <i className="fas fa-star"></i> 4.4
                  </span>
                  <span className="text-gray-500 text-[9px] ml-1">(345 Reviews)</span>
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                  <span className="text-yellow-400 text-xs ml-1">
                    <i className="fas fa-star"></i> 4.4
                  </span>
                  <span className="text-gray-500 text-[9px] ml-1">(345 Reviews)</span>
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
          </ul>
        </section>
        <section aria-label="News" className="bg-white rounded-lg p-4 text-xs text-black max-w-full mt-6">
          <h2 className="font-semibold mb-3 text-sm">News</h2>
          <ul className="space-y-3 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#7AC142]/50 scrollbar-track-transparent">
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default SearchPage;
