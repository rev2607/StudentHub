import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(newsItems.length / itemsPerSlide) - 1;

  useEffect(() => {
    setNewsItens(tempData); // for testing purpose
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <section style={{ transform: 'translateY(-65%)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl text-white text-center mb-4">Latest News and Notifications</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl">
            {newsItems.length > 0 && itemsPerSlide > 0 && (
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {Array.from({ length: Math.ceil(newsItems.length / itemsPerSlide) }).map((_, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0 flex gap-4">
                    {newsItems.slice(groupIndex * itemsPerSlide, groupIndex * itemsPerSlide + itemsPerSlide).map((item, index) => (
                      <div key={index} className="flex-1 bg-white rounded-lg overflow-hidden shadow-2xl transition-shadow duration-300 border-s-15 border-[var(--site-green)] ">
                        <div className="flex h-full">
                          <div className="w-1/3 relative">
                            <img src={item.image_url || "https://placehold.co/200x150.png"} alt="image" className="absolute inset-0 w-30 h-25 object-cover rounded-3xl  p-2" />
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
            )}
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
