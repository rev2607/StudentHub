import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToNewsPage } from "../navigationToNewsPage";
// Removed axios import as we now fetch directly from Supabase
import latestNewsImg from "../../../assets/latest_news.png";
import { fetchNewsFromSupabase } from "../../../services/supabaseClient";

// const customGreen = "#8cc542";
// const customGray = "#f4f4f4";

const CalendarIcon = () => (
  <svg className="mr-1" width="12" height="12" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#8cc542"/><path d="M7 11h10M7 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="5" width="18" height="16" rx="3" stroke="#fff" strokeWidth="2"/></svg>
);
const UserIcon = () => (
  <svg className="ml-3 mr-1" width="12" height="12" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#8cc542" strokeWidth="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#8cc542" strokeWidth="2"/></svg>
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
  <span className="ml-2 bg-white rounded-full flex items-center justify-center" style={{ width: 20, height: 20 }}>
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8cc542"/><path d="M10 8l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
);

const LatestNews = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      imgSrc: latestNewsImg,
      date: "April 8, 2025",
      author: "Admin",
      title: "KSEAB to Declare 2nd PUC Results",
      readMoreUrl: "#",
    },
    {
      id: 2,
      imgSrc: latestNewsImg,
      date: "Recent weeks",
      author: "Admin",
      title: "Delhi Govt Launches Crackdown on Private...",
      readMoreUrl: "#",
    },
    {
      id: 3,
      imgSrc: latestNewsImg,
      date: "Starting April 7, 2025",
      author: "Admin",
      title: "Punjab's 'Sikhya Kranti' Education Festival",
      readMoreUrl: "#",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch news directly from Supabase (backend updates this hourly)
        console.log("🔄 LatestNews: Fetching latest news from Supabase database...");
        const { data: sbData, error: sbError } = await fetchNewsFromSupabase(6);
        
        if (sbError) {
          console.error("❌ LatestNews: Supabase fetch error:", sbError.message);
          setError("Failed to fetch latest news");
          return;
        }
        
        if (Array.isArray(sbData) && sbData.length > 0) {
          console.log("✅ LatestNews: Got latest news from Supabase:", sbData.length, "articles");
          const transformedData = sbData.slice(0, 3).map((item, index) => ({
            id: index + 1,
            imgSrc: item.image_url || latestNewsImg,
            date: new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            author: "Admin",
            title: item.title,
            readMoreUrl: item.link
          }));
          setData(transformedData);
        } else {
          console.log("⚠️ LatestNews: No news available in Supabase, keeping existing data");
        }
      } catch (err) {
        console.error("❌ LatestNews: Failed to fetch from Supabase", err);
        setError("Failed to fetch latest news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-white px-4 sm:px-6 py-6 sm:py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">Latest News</h1>
          <button className="text-[var(--site-green)] hover:underline text-sm sm:text-base" onClick={() => navigate('/news')}>View all</button>
        </div>
        {/* Removed filter chips (Exam Alerts, College Alerts, Admission Alerts) */}
        
        {loading && (
          <div className="text-center py-6">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--site-green)]"></div>
            <p className="mt-2 text-gray-600 text-sm">Loading latest news...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-6 text-red-500">
            <p className="text-sm">{error}</p>
            <p className="text-xs text-gray-500 mt-1">Showing cached news instead</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {data.map((article) => (
            <div 
              key={article.id} 
              className="rounded-lg overflow-hidden border border-gray-200 bg-white cursor-pointer hover:shadow-sm transition-shadow duration-200" 
              style={{background: 'var(--color-site-gray)'}}
              onClick={() => navigateToNewsPage(navigate, article.readMoreUrl, article.title)}
            >
              <img 
                alt="News" 
                className="w-full h-24 sm:h-28 object-cover rounded-t-lg" 
                height="400" 
                src={article.imgSrc || '/default-news.jpg'} 
                width="600"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.dataset.fallbackApplied === 'true') return;
                  target.dataset.fallbackApplied = 'true';
                  target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO1oZqUAAAAASUVORK5CYII=';
                }}
              />
              <div className="p-3 sm:p-3">
                <div className="flex items-center text-[10px] sm:text-xs text-gray-500 mb-1.5">
                  <CalendarIcon />
                  <span className="ml-1">{article.date}</span>
                </div>
                <h2 className="text-sm sm:text-sm font-semibold text-gray-900 line-clamp-2">{article.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
