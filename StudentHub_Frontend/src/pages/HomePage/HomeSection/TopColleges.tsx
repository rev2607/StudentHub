// import { TopCollegesData } from "../../../services/data";
import vitLogo from "../../../../src/assets/vit_logo.png";

const topCollegesData = [
  { name: "IIT Bombay",               highest_package: "₹3.67 Cr",  median_package: "₹18.8 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIM Ahmedabad",            highest_package: "₹3.3 Cr",   median_package: "₹35.5 LPA", placement_rate: ">95%", logo_url: vitLogo },
  { name: "IIM Calcutta",             highest_package: "₹1.45 Cr",  median_package: "₹28.2 LPA", placement_rate: ">95%", logo_url: vitLogo },
  { name: "IIM Bangalore",            highest_package: "₹1.15 Cr",  median_package: "₹32.8 LPA", placement_rate: ">95%", logo_url: vitLogo },
  { name: "IIT Bombay CSE",           highest_package: "₹2.2 Cr",   median_package: "₹25.1 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Delhi",                highest_package: "₹1.5 Cr",   median_package: "₹20.1 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Kanpur",               highest_package: "₹1.5 Cr",   median_package: "₹22.1 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIM Kozhikode",            highest_package: "₹72 Lakh",  median_package: "₹24.5 LPA", placement_rate: ">95%", logo_url: vitLogo },
  { name: "CVR College",              highest_package: "₹72 Lakh",  median_package: "₹12.8 LPA", placement_rate: ">85%", logo_url: vitLogo },
  { name: "Private Universities",     highest_package: "₹1 Cr+",    median_package: "₹9-15 LPA", placement_rate: ">80%", logo_url: vitLogo },
];

const TopColleges = () => {
  const colorArray = ["#8AC442", "#7FB442", "#74A342", "#6A9342", "#5F8242", "#547243", "#496143", "#3F5143", "#344043", "#293043"];

  return (
    <section className="bg-white p-4 sm:p-6">
      <div className="container mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Top 10 Colleges</h1>
        {/* Removed category chips as requested */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-[var(--site-blue)] text-white">
                <th className="top_college_radius_th px-4 py-3 text-center">Rank</th>
                <th className="px-4 py-3 text-left">College/University</th>
                <th className="px-4 py-3 text-center">Highest Package</th>
                <th className="px-4 py-3 text-center">Median Package</th>
                <th className="px-4 py-3 text-center">Placement Rate</th>
              </tr>
            </thead>
            <tbody>
              {topCollegesData.map((college: any, index: number) => (
                <tr key={index} dir="ltr" className="even:bg-[#E5E5E5]">
                  <td style={{ backgroundColor: colorArray[index] }} className="top_college_radius_td px-3 sm:px-4 py-3 text-center rounded-s-lg text-sm sm:text-base">
                    0{index + 1}
                  </td>
                  <td className="px-3 sm:px-4 py-3 flex items-center text-sm sm:text-base">
                    <img src={college.logo_url} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-4 rounded-full" />
                    <span className="truncate">{college.name}</span>
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.highest_package}</td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.median_package}</td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.placement_rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TopColleges;
