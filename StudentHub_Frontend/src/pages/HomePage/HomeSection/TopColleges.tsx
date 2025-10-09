// import { TopCollegesData } from "../../../services/data";
import vitLogo from "../../../../src/assets/vit_logo.png";

const topCollegesData = [
  { name: "IIT Bombay",               highest_package: "₹2.1 Cr",  median_package: "₹18.8 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Kanpur",               highest_package: "₹2.36 Cr", median_package: "₹22.1 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Kharagpur",            highest_package: "₹2.68 Cr", median_package: "N/A",       placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Delhi",                highest_package: ">₹1 Cr",   median_package: "₹20.1 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Madras",               highest_package: "₹1.31 Cr", median_package: "N/A",       placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Guwahati",             highest_package: "₹1.2 Cr",  median_package: "₹21.6 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "IIT Roorkee",              highest_package: "₹70 Lakh", median_package: "₹17 LPA",   placement_rate: ">90%", logo_url: vitLogo },
  { name: "BITS Pilani",              highest_package: "₹23.9 Lakh", median_package: "₹18.2 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "VIT Vellore",              highest_package: "₹75 Lakh", median_package: "₹7.5 LPA", placement_rate: ">90%", logo_url: vitLogo },
  { name: "Chandigarh University",    highest_package: "N/A",      median_package: "₹7.5 LPA",  placement_rate: ">90%", logo_url: vitLogo },
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
