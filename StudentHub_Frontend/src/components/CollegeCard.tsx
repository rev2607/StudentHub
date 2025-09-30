import { Link } from "react-router-dom";
import type { College } from "../data/colleges";

type Props = {
  college: College;
};

export default function CollegeCard({ college }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="flex items-center gap-3">
        <img src={college.logoUrl} alt={college.name} className="w-12 h-12 rounded object-contain bg-gray-100" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{college.name}</h3>
          <p className="text-sm text-gray-600">{college.location}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
        <div className="bg-gray-50 rounded-lg p-2">
          <span className="text-gray-500">NIRF Rank</span>
          <div className="font-medium">{college.nirfRank}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <span className="text-gray-500">NAAC</span>
          <div className="font-medium">{college.naacGrade}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <span className="text-gray-500">Highest Package</span>
          <div className="font-medium">{college.highestPackageLpa} LPA</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <span className="text-gray-500">Fees</span>
          <div className="font-medium">{college.feesRangeLpa[0]} - {college.feesRangeLpa[1]} LPA</div>
        </div>
      </div>

      <div className="mt-4">
        <Link to={`/colleges/${college.slug}`} className="inline-block w-full text-center bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
          View Details
        </Link>
      </div>
    </div>
  );
}


