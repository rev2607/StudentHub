// import { TopCollegesData } from "../../../services/data";
import vitLogo from "../../../../src/assets/vit_logo.png";

const topCollegesData = [
  {
    name: "VIT Vellore",
    location: "Vellore, Tamil Nadu",
    nirf_ranking: 8,
    naac_grade: "A++",
    highest_package: "44 LPA",
    avg_package: "8.5 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Chennai",
    location: "Chennai, Tamil Nadu",
    nirf_ranking: 12,
    naac_grade: "A++",
    highest_package: "42 LPA",
    avg_package: "8 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Bhopal",
    location: "Bhopal, Madhya Pradesh",
    nirf_ranking: 15,
    naac_grade: "A++",
    highest_package: "40 LPA",
    avg_package: "7.5 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT AP",
    location: "Amaravati, Andhra Pradesh",
    nirf_ranking: 18,
    naac_grade: "A++",
    highest_package: "38 LPA",
    avg_package: "7 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Pune",
    location: "Pune, Maharashtra",
    nirf_ranking: 20,
    naac_grade: "A++",
    highest_package: "36 LPA",
    avg_package: "6.5 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Bangalore",
    location: "Bangalore, Karnataka",
    nirf_ranking: 22,
    naac_grade: "A++",
    highest_package: "34 LPA",
    avg_package: "6 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Hyderabad",
    location: "Hyderabad, Telangana",
    nirf_ranking: 25,
    naac_grade: "A++",
    highest_package: "32 LPA",
    avg_package: "5.5 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Mumbai",
    location: "Mumbai, Maharashtra",
    nirf_ranking: 28,
    naac_grade: "A++",
    highest_package: "30 LPA",
    avg_package: "5 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Delhi",
    location: "Delhi, NCR",
    nirf_ranking: 30,
    naac_grade: "A++",
    highest_package: "28 LPA",
    avg_package: "4.5 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
  {
    name: "VIT Kolkata",
    location: "Kolkata, West Bengal",
    nirf_ranking: 32,
    naac_grade: "A++",
    highest_package: "26 LPA",
    avg_package: "4 LPA",
    fee_structure: "₹3,75,000 (1st Year Fees)",
    courses_offered: "B.Tech, M.Tech, MBA",
    logo_url: vitLogo,
  },
];

const TopColleges = () => {
  const colorArray = ["#8AC442", "#7FB442", "#74A342", "#6A9342", "#5F8242", "#547243", "#496143", "#3F5143", "#344043", "#293043"];

  return (
    <section className="bg-white p-4 sm:p-6">
      <div className="container mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Top 10 Colleges</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-[var(--site-green)] text-white border border-[var(--site-green)] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">Computer Science</span>
          <span className="bg-white text-black border border-[var(--site-green)] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">Mechanical Engineering</span>
          <span className="bg-white text-black border border-[var(--site-green)] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">Electrical Engineering</span>
          <span className="bg-white text-black border border-[var(--site-green)] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">Civil Engineering</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-[var(--site-blue)] text-white">
                <th className="top_college_radius_th px-4 py-3 text-center">Rank</th>
                <th className="px-4 py-3 text-left">College Name</th>
                <th className="px-4 py-3 text-center">NIRF Ranking</th>
                <th className="px-4 py-3 text-center">Highest Package</th>
                <th className="px-4 py-3 text-center">Courses Offered</th>
                <th className="px-4 py-3 text-center">Fee Structure</th>
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
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.nirf_ranking}</td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.highest_package}</td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.courses_offered}</td>
                  <td className="px-3 sm:px-4 py-3 text-center text-sm sm:text-base">{college.fee_structure}</td>
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
