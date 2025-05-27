import { useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../navigationToSearchPage";

const LatestNews = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const data = [
    {
      id: 1,
      imgSrc: "https://storage.googleapis.com/a1aa/image/YFDetCeIgBY_gbMrewjVfU6UYb92fvEcEgUz5elLCDE.jpg",
      date: "14 June 2025",
      author: "Paras Jain",
      title: "Physics And Measurement JEE Mains Questions - List Of Most Asked Questions With Solutions",
    },
    {
      id: 2,
      imgSrc: "https://storage.googleapis.com/a1aa/image/YFDetCeIgBY_gbMrewjVfU6UYb92fvEcEgUz5elLCDE.jpg",
      date: "14 June 2025",
      author: "Paras Jain",
      title: "Physics And Measurement JEE Mains Questions - List Of Most Asked Questions With Solutions",
    },
    {
      id: 3,
      imgSrc: "https://storage.googleapis.com/a1aa/image/YFDetCeIgBY_gbMrewjVfU6UYb92fvEcEgUz5elLCDE.jpg",
      date: "14 June 2025",
      author: "Paras Jain",
      title: "Physics And Measurement JEE Mains Questions - List Of Most Asked Questions With Solutions",
    },
  ];

  return (
    <section className="bg-gray-100 p-6">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0 whitespace-nowrap">Latest News &amp; Stories</h1>{" "}
          <button className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-light">
            Explore All
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-8">
          <button className="bg-green-500 font-light text-white px-4 py-2 rounded-full">Exam Alerts</button>
          <button className="bg-white font-light text-black-500 border border-green-500 px-4 py-2 rounded-full">College Alerts</button>
          <button className="bg-white font-light text-black-500 border border-green-500 px-4 py-2 rounded-full">Admission Alerts</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((article) => (
            <div key={article.id} className="rounded-lg overflow-hidden bg-gray-200 p-3">
              <img alt="Students" className="w-full h-48 object-cover rounded-lg" height="400" src={article.imgSrc} width="600" />
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <i className="fas fa-calendar-alt text-green-500 mr-2"></i>
                  <span>{article.date}</span>
                  <i className="fas fa-user text-green-500 ml-4 mr-2"></i>
                  <span>{article.author}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center font-light" onClick={() => navigateToSearchPage(navigate, article.title)}>
                  Read More
                  <i className="fas fa-arrow-right ml-2"></i>
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
