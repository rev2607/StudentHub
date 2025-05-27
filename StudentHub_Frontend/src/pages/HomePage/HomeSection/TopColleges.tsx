import { TopCollegesData } from "../../../services/data";

const TopColleges = () => {
  const colorArray = ["#8AC442", "#7FB442", "#74A342", "#6A9342", "#5F8242", "#547243", "#496143", "#3F5143", "#344043", "#293043"];

  return (
    <section className="bg-white p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Top 10 Colleges</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-green-500 text-white border border-green-500 px-4 py-1 rounded-full text-sm">Computer Science</span>
          <span className="bg-white text-black-500 border border-green-500 px-4 py-1 rounded-full text-sm">Mechanical Engineering</span>
          <span className="bg-white text-black-500 border border-green-500 px-4 py-1 rounded-full text-sm">Electrical Engineering</span>
          <span className="bg-white text-black-500 border border-green-500 px-4 py-1 rounded-full text-sm">Civil Engineering</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white table-auto">
            <thead>
              <tr className="text-white text-center">
                <th className="px-6 py-3 text-xs font-medium text-black tracking-wider">Ranking</th>
                <th className="px-6 py-3 bg-[#ADAFB2]   text-xs font-medium  tracking-wider rounded-tl-lg  rounded-tr-lg top_college_radius_th">College</th>
                <th className="px-6 py-3 bg-[#8A8C8E]  text-xs font-medium  tracking-wider rounded-tl-lg  rounded-tr-lg top_college_radius_th">NIRF Ranking</th>
                <th className="px-6 py-3 bg-[#ADAFB2]  text-xs font-medium  tracking-wider rounded-tl-lg  rounded-tr-lg top_college_radius_th">Highest Package</th>
                <th className="px-6 py-3 bg-[#8A8C8E]  text-xs font-medium  tracking-wider rounded-tl-lg  rounded-tr-lg top_college_radius_th">Courses Offered</th>
                <th className="px-6 py-3 bg-[#ADAFB2]   text-xs font-medium  tracking-wider rounded-tl-lg  rounded-tr-lg top_college_radius_th">Fee</th>
              </tr>
            </thead>
            <tbody>
              {TopCollegesData.map((college: any, index: number) => (
                <tr key={index} dir="ltr" className="even:bg-[#E5E5E5]">
                  <td style={{ backgroundColor: colorArray[index] }} className="top_college_radius_td px-4 py-4 text-center rounded-s-lg">
                    0{index + 1}
                  </td>
                  <td className="px-4 py-4 flex items-center">
                    <img src={"https://placehold.co/50x50" || college.logo_url} alt="Logo" className="w-10 h-10 mr-4 rounded-full" />
                    {college.name}
                  </td>
                  <td className="px-4 py-4">{college.nirf_ranking}</td>
                  <td className="px-4 py-4">{college.highest_package}</td>
                  <td className="px-4 py-4">{college?.courses_offered}</td>
                  <td className="px-4 py-4">{college.fee_structure}</td>
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
