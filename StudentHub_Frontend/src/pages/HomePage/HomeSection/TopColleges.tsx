// import { TopCollegesData } from "../../../services/data";
import vitLogo from "../../../../src/assets/vit_logo.png";

const topCollegesData = [
  { name: "IIT Madras",               highest_package: "₹1.5 Cr - 60 LPA",  median_package: "₹60 LPA", fee: "₹2,40,000 1st Year Fees", logo_url: vitLogo },
  { name: "IIT Delhi",                highest_package: "₹2 Cr - 60 LPA",     median_package: "₹60 LPA", fee: "₹2,40,000 1st Year Fees", logo_url: vitLogo },
  { name: "IIT Bombay",               highest_package: "₹1.8 Cr - 62 LPA",   median_package: "₹62 LPA", fee: "₹2,28,000 1st Year Fees", logo_url: vitLogo },
  { name: "IIT Kanpur",               highest_package: "₹1.2 Cr - 50 LPA",   median_package: "₹50 LPA", fee: "₹2,25,600 1st Year Fees", logo_url: vitLogo },
  { name: "IIT Kharagpur",            highest_package: "₹1.8 Cr - 54 LPA",   median_package: "₹54 LPA", fee: "₹2,24,600 1st Year Fees", logo_url: vitLogo },
  { name: "IIT Roorkee",              highest_package: "₹2.15 Cr - 51 LPA",  median_package: "₹51 LPA", fee: "₹2,14,800 1st Year Fees", logo_url: vitLogo },
  { name: "IIT Hyderabad",            highest_package: "₹1.2 Cr - 63 LPA",   median_package: "₹63 LPA", fee: "₹2,27,000 1st Year Fees", logo_url: vitLogo },
  { name: "IIT Guwahati",             highest_package: "₹1.2 Cr - 50 LPA",   median_package: "₹50 LPA", fee: "₹2,19,350 1st Year Fees", logo_url: vitLogo },
  { name: "NIT Tiruchirappalli",      highest_package: "₹52 LPA - 44 LPA",   median_package: "₹44 LPA", fee: "₹1,61,200 1st Year Fees", logo_url: vitLogo },
  { name: "IIT (BHU) Varanasi",       highest_package: "₹1.2 Cr - 45 LPA",   median_package: "₹45 LPA", fee: "₹2,32,800 1st Year Fees", logo_url: vitLogo },
];

const TopColleges = () => {
  const colorArray = ["#8AC442", "#7FB442", "#74A342", "#6A9342", "#5F8242", "#547243", "#496143", "#3F5143", "#344043", "#293043"];

  return (
    <section className="bg-white p-4 sm:p-6">
      <div className="container mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Top 10 NRIF Ranking Colleges</h1>
        {/* Removed category chips as requested */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-[var(--site-blue)] text-white">
                <th className="top_college_radius_th px-4 py-3 text-center">Rank</th>
                <th className="px-4 py-3 text-left">College/University</th>
                <th className="px-4 py-3 text-center">Highest Package</th>
                <th className="px-4 py-3 text-center">Median Package</th>
                <th className="px-4 py-3 text-center">Fee</th>
              </tr>
            </thead>
            <tbody>
              {topCollegesData.map((college: any, index: number) => (
                <tr key={index} dir="ltr" className="even:bg-[#E5E5E5]">
                  <td style={{ backgroundColor: colorArray[index] }} className="top_college_radius_td px-3 sm:px-4 py-3 text-center rounded-s-lg text-sm sm:text-base">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </td>
                  <td className="px-3 sm:px-4 py-3 flex items-center text-sm sm:text-base">
                    <img src={college.logo_url} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-4 rounded-full" />
                    <span className="truncate">{college.name}</span>
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.highest_package}</td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.median_package}</td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.fee}</td>
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
