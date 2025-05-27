import { useState, useEffect } from "react";
import { Briefcase, Bell, Clock } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import { navigateToSearchPage } from "../navigationToSearchPage";

// interface
import { tempData, CourseCollegeProps } from "../../../models/CourseCollegeProps";

const CourseColleges = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook


  const [pageData, setPageData] = useState<CourseCollegeProps | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);

      try {
        const response = await axios.get("http://localhost:8000/api/data/all");
        const data = response.data;

        if (data.status === "success" && Object.keys(data.data)?.length > 0) {
          setPageData(data);
          console.log(data);
        }
        // else {
        //   throw new Error("Invalid data format received from API");
        // }
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

    setPageData(tempData); // for testing purpose
    // fetchData();
  }, []);

  /* START: filter data ------------------------------------------------------------- */
  const filterTypes = {
    packages: { id: "packages", title: "Highest Packages and Placements", key: "College", key_2: "Highest Package" },
    courses: { id: "courses", title: "Trending Courses", key: "name", key_2: "description" },
    colleges: { id: "colleges", title: "Trending Colleges", key: "College", key_2: "Highest Package" },
  } as any;

  const [selectedType, setSelectedType] = useState(filterTypes.packages.id);
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (type: string) => {
    setSelectedType(type);

    let data = [] as any;
    if (pageData && type in pageData && Array.isArray(pageData[type as keyof CourseCollegeProps])) {
      data = pageData[type as keyof CourseCollegeProps];
    }
    setFilteredData(data);
  };

  useEffect(() => {
    filterData(selectedType);
  }, []);

  /* END: filter data ------------------------------------------------------------- */

  if (loading)
    return (
      <div className="text-center py-8 flex">
        <div className="mx-auto w-full max-w-sm rounded-md border border-gray-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto mt-8 px-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            type="button"
            className={`${
              filterTypes.packages.id === selectedType ? "bg-green-500 text-white" : "border border-green-500 text-green-500"
            } flex items-center justify-center  gap-2 text-sm rounded-md py-2 px-2 min-w-[220px]`}
            onClick={() => filterData(filterTypes.packages.id)}
          >
            <Briefcase size={16} /> {filterTypes.packages.title}
          </button>
          <button
            className={`${
              filterTypes.courses.id === selectedType ? "bg-green-500 text-white" : "border border-green-500 text-green-500"
            } flex items-center justify-center  gap-2 text-sm rounded-md py-2 px-2 min-w-[220px]`}
            onClick={() => filterData(filterTypes.courses.id)}
          >
            <Bell size={16} /> {filterTypes.courses.title}
          </button>
          <button
            className={`${
              filterTypes.colleges.id === selectedType ? "bg-green-500 text-white" : "border border-green-500 text-green-500"
            } flex items-center justify-center  gap-2 text-sm rounded-md py-2 px-2 min-w-[220px]`}
            onClick={() => filterData(filterTypes.colleges.id)}
          >
            <Clock size={16} />
            {filterTypes.colleges.title}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {filteredData?.map((item: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4" onClick={() => navigateToSearchPage(navigate, item[filterTypes[selectedType].key])}>
              <p className="text-gray-800 font-semibold">{item[filterTypes[selectedType].key]}</p>
              <p className="text-gray-500 text-sm">{item[filterTypes[selectedType].key_2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseColleges;
