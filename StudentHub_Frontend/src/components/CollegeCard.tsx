import { Link } from 'react-router-dom';
import { MapPin, Star, Users, GraduationCap } from 'lucide-react';

interface College {
  id: number;
  name: string;
  slug: string;
  location: string;
  state: string;
  stream: string;
  rating: number;
  students: string;
  courses: string;
  image: string;
  nirfRank: number;
  feesRangeLpa: [number, number];
}

interface CollegeCardProps {
  college: College;
}

const CollegeCard = ({ college }: CollegeCardProps) => {
  return (
    <Link to={`/colleges/${college.slug}`} className="block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{college.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span className="text-sm">{college.location}</span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{college.rating}</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm">{college.students} students</span>
            </div>
            <div className="flex items-center text-gray-600">
              <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm">{college.courses}</span>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">NIRF Rank:</span> {college.nirfRank}
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Fees:</span> ₹{college.feesRangeLpa[0]}-{college.feesRangeLpa[1]} LPA
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
