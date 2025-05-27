import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { navigateToSearchPage } from "../navigationToSearchPage";
import { tempData, NewsItemTopProps } from "../../../models/NewsItemTopProps";

function NewsItemTop() {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [newsItems, setNewsItens] = useState<NewsItemTopProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(newsItems.length / itemsPerSlide) - 1;

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:8000/api/education");
        console.log(response);

        const data = response.data;
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        if (data && Array.isArray(data)) {
          setNewsItens(data);
        } else {
          throw new Error("Invalid data format received from API");
        }

        run();
      } catch (err) {
        let errorMessage = "Failed to fetch News";
        if (err instanceof Error) {
          if (err.message.includes("404")) {
            errorMessage = "News data not found";
          } else if (err.message.includes("500")) {
            errorMessage = "Server error occurred";
          } else if (err.message.includes("NetworkError")) {
            errorMessage = "Network connection failed";
          } else {
            errorMessage = err.message;
          }
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    // fetchData();
    setNewsItens(tempData); // for testing purpose
  }, []);

  if (loading) return <div className="text-center py-8">Loading News Items...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  function run() {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-8 mt-[-180px]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News and Notifications</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {Array.from({ length: Math.ceil(newsItems.length / itemsPerSlide) }).map((_, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 flex gap-4">
                  {newsItems.slice(groupIndex * itemsPerSlide, groupIndex * itemsPerSlide + itemsPerSlide).map((item, index) => (
                    <div key={index} className="flex-1 bg-white rounded-lg overflow-hidden shadow-2xl transition-shadow duration-300 border-s-15 border-green-500 ">
                      <div className="flex h-full">
                        <div className="w-1/3 relative">
                          <img src={"https://placehold.co/200x150.png" || item.image_url} alt="image" className="absolute inset-0 w-30 h-25 object-cover rounded-3xl  p-2" />
                        </div>
                        <div className="w-2/3 p-4 px-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                              <span className="text-xs">{item.date}</span>
                              {/* <span>|</span> */}
                              {/* <span>{item.time}</span> */}
                            </div>
                            <h3 className="text-xs font-semibold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                          </div>
                          <button className="text-xs text-blue-600 hover:text-blue-800 font-medium self-start" onClick={() => navigateToSearchPage(navigate, item.title)}>
                            Read more
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: Math.ceil(newsItems.length / 3) }).map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsItemTop;
