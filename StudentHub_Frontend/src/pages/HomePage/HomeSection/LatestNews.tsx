import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToNewsPage } from "../navigationToNewsPage";
import axios from "axios";
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
  const [data, setData] = useState([
    {
      id: 1,
      imgSrc: latestNewsImg,
      date: "April 8, 2025",
      author: "Admin",
      title: "KSEAB to Declare 2nd PUC Results",
    },
    {
      id: 2,
      imgSrc: latestNewsImg,
      date: "Recent weeks",
      author: "Admin",
      title: "Delhi Govt Launches Crackdown on Private...",
    },
    {
      id: 3,
      imgSrc: latestNewsImg,
      date: "Starting April 7, 2025",
      author: "Admin",
      title: "Punjab's 'Sikhya Kranti' Education Festival",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      console.log("🚀 LatestNews: Starting to fetch news from API...");
      setLoading(true);
      setError(null);
      
      try {
        console.log("🌐 LatestNews: Making API call to: http://localhost:8000/api/news/");
        
        // Try with fetch first to see if it's an axios issue
        const fetchResponse = await fetch("http://localhost:8000/api/news/");
        console.log("🌐 LatestNews: Fetch response status:", fetchResponse.status);
        const fetchData = await fetchResponse.json();
        console.log("🌐 LatestNews: Fetch data:", fetchData);
        
        const response = await axios.get("http://localhost:8000/api/news/");
        console.log("✅ LatestNews API Response:", response);
        console.log("📊 LatestNews Data received:", response.data);
        console.log("📊 LatestNews Response status:", response.status);
        console.log("📊 LatestNews Response headers:", response.headers);
        
        // Use fetch data if axios fails, otherwise use axios data
        const newsData = Array.isArray(fetchData) && fetchData.length > 0 ? fetchData : response.data;
        
        if (newsData && Array.isArray(newsData) && newsData.length > 0) {
          // Transform API data to match component's expected format
          const transformedData = newsData.slice(0, 3).map((item, index) => ({
            id: index + 1,
            imgSrc: item.image_url || latestNewsImg,
            date: new Date(item.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            author: "Admin",
            title: item.title,
            readMoreUrl: item.read_more_url
          }));
          
                  console.log("🔄 LatestNews: Transformed data:", transformedData);
                  setData(transformedData);
                  console.log("✅ LatestNews: Data updated successfully!");
        } else {
          console.log("⚠️ LatestNews: No data received or empty array");
          console.log("⚠️ LatestNews: Fetch data:", fetchData);
          console.log("⚠️ LatestNews: Axios data:", response.data);
        }
      } catch (err) {
        console.error("❌ LatestNews: Error fetching news:", err);
        setError("Failed to fetch latest news");
        // Keep the default static data on error
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="bg-white px-4 sm:px-6 py-12 sm:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-0">Latest News and Notifications</h1>
          <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-6 sm:px-8 py-2 rounded-full text-base sm:text-lg font-light flex items-center justify-center transition w-full sm:w-auto">
            Explore All
            <ArrowRightCircle />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 mt-4 sm:mt-0">
          <button className="bg-[var(--site-green)] font-light text-white px-3 sm:px-4 py-2 rounded-full text-sm">Exam Alerts</button>
          <button className="bg-white font-light text-black border border-[var(--site-green)] px-3 sm:px-4 py-2 rounded-full text-sm">College Alerts</button>
          <button className="bg-white font-light text-black border border-[var(--site-green)] px-3 sm:px-4 py-2 rounded-full text-sm">Admission Alerts</button>
        </div>
        
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--site-green)]"></div>
            <p className="mt-2 text-gray-600">Loading latest news...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-8 text-red-500">
            <p>{error}</p>
            <p className="text-sm text-gray-500 mt-1">Showing cached news instead</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.map((article) => (
            <div 
              key={article.id} 
              className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300" 
              style={{background: 'var(--color-site-gray)'}}
              onClick={() => navigateToNewsPage(navigate, article.readMoreUrl, article.title)}
            >
              <img 
                alt="News" 
                className="w-full h-40 sm:h-48 object-cover rounded-t-lg" 
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
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                  <CalendarIcon />
                  <span className="ml-1">{article.date}</span>
                  <UserIcon />
                  <span className="ml-1">{article.author}</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4">{article.title}</h2>
                        <button className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-white px-4 sm:px-6 py-2 rounded-full flex items-center justify-center font-light transition w-full sm:w-auto" onClick={() => navigateToNewsPage(navigate, article.readMoreUrl, article.title)}>
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
