import { useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../navigationToSearchPage";
import latestNewsImg from "../../../assets/latest_news.png";

// const customGreen = "#8cc542";
// const customGray = "#f4f4f4";

const CalendarIcon = () => (
  <svg className="mr-2" width="16" height="16" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#8cc542"/><path d="M7 11h10M7 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="5" width="18" height="16" rx="3" stroke="#fff" strokeWidth="2"/></svg>
);
const UserIcon = () => (
  <svg className="ml-4 mr-2" width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#8cc542" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#8cc542" strokeWidth="2"/></svg>
);
// const ArrowRight = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M5 12H19M19 12L12 5M19 12L12 19"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );
const ArrowRightCircle = () => (
  <span className="ml-2 bg-white rounded-full flex items-center justify-center" style={{ width: 28, height: 28 }}>
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8cc542"/><path d="M10 8l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

const LatestNews = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      imgSrc: latestNewsImg,
      date: "14 June 2025",
      author: "Paras Jain",
      title: "VIT Vellore Announces New Research Center for AI and Machine Learning",
    },
    {
      id: 2,
      imgSrc: latestNewsImg,
      date: "13 June 2025",
      author: "Rahul Sharma",
      title: "VIT Chennai Hosts International Tech Conference 2025",
    },
    {
      id: 3,
      imgSrc: latestNewsImg,
      date: "12 June 2025",
      author: "Priya Patel",
      title: "VIT Bhopal Launches New Industry-Academia Partnership Program",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2 sm:mb-0 whitespace-nowrap">Latest News & Notifications</h1>
          <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-8 py-2 rounded-full text-lg font-light flex items-center transition">
            Explore All
            <ArrowRightCircle />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-8">
          <button className="bg-[var(--site-green)] font-light text-white px-4 py-2 rounded-full">Exam Alerts</button>
          <button className="bg-white font-light text-black border border-[var(--site-green)] px-4 py-2 rounded-full">College Alerts</button>
          <button className="bg-white font-light text-black border border-[var(--site-green)] px-4 py-2 rounded-full">Admission Alerts</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((article) => (
            <div key={article.id} className="rounded-lg overflow-hidden shadow-md" style={{background: 'var(--color-site-gray)'}}>
              <img alt="News" className="w-full h-48 object-cover rounded-t-lg" height="400" src={article.imgSrc} width="600" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon />
                  <span>{article.date}</span>
                  <UserIcon />
                  <span>{article.author}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">{article.title}</h2>
                <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-6 py-2 rounded-full flex items-center font-light transition" onClick={() => navigateToSearchPage(navigate, article.title)}>
                  Read More
                  <ArrowRightCircle />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
