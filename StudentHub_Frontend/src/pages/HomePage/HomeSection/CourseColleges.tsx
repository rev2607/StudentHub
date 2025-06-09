import { useState, useEffect } from "react";
import { Briefcase, Bell, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";


import { navigateToSearchPage } from "../navigationToSearchPage";

// interface
import { tempData, CourseCollegeProps } from "../../../models/CourseCollegeProps";

const CourseColleges = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook


  const [pageData, setPageData] = useState<CourseCollegeProps | null>(null);

  useEffect(() => {
    setPageData(tempData); // for testing purpose
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
    if (pageData) {
      filterData(selectedType);
    }
  }, [pageData]);

  /* END: filter data ------------------------------------------------------------- */

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            type="button"
            className={`${
              filterTypes.packages.id === selectedType ? "bg-[var(--site-green)] text-white" : "border border-[var(--site-green)] text-[var(--site-green)]"
            } flex items-center justify-center  gap-2 text-sm rounded-md py-2 px-2 min-w-[220px]`}
            onClick={() => filterData(filterTypes.packages.id)}
          >
            <Briefcase size={16} /> {filterTypes.packages.title}
          </button>
          <button
            className={`${
              filterTypes.courses.id === selectedType ? "bg-[var(--site-green)] text-white" : "border border-[var(--site-green)] text-[var(--site-green)]"
            } flex items-center justify-center  gap-2 text-sm rounded-md py-2 px-2 min-w-[220px]`}
            onClick={() => filterData(filterTypes.courses.id)}
          >
            <Bell size={16} /> {filterTypes.courses.title}
          </button>
          <button
            className={`${
              filterTypes.colleges.id === selectedType ? "bg-[var(--site-green)] text-white" : "border border-[var(--site-green)] text-[var(--site-green)]"
            } flex items-center justify-center  gap-2 text-sm rounded-md py-2 px-2 min-w-[220px]`}
            onClick={() => filterData(filterTypes.colleges.id)}
          >
            <Clock size={16} />
            {filterTypes.colleges.title}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredData?.map((item: any, index: number) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 flex items-center justify-center text-center cursor-pointer transition border-l-8 ${index === 0 ? 'border-[var(--site-green)]' : 'border-transparent'}`}
              onClick={() => navigateToSearchPage(navigate, item[filterTypes[selectedType].key] || item[filterTypes[selectedType].key_2] || item.Course || item["College Name"])}
            >
              <div>
                <p className="text-lg font-bold text-gray-900 mb-1">
                  {item[filterTypes[selectedType].key] || item.Course || item["College Name"]}
                </p>
                {item[filterTypes[selectedType].key_2] && (
                  <p className="text-gray-600 text-base font-normal">
                    {item[filterTypes[selectedType].key_2]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseColleges;
