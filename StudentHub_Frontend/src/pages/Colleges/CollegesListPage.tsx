import { useState } from 'react';
import { Search, Filter, MapPin, Star, Users, GraduationCap } from 'lucide-react';

const CollegesListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState('');

  // Mock data for colleges
  const colleges = [
    {
      id: 1,
      name: 'Indian Institute of Technology Bombay',
      location: 'Mumbai, Maharashtra',
      rating: 4.8,
      students: '12000+',
      courses: 'Engineering, Management',
      image: '/api/placeholder/300/200',
      slug: 'iit-bombay'
    },
    {
      id: 2,
      name: 'All India Institute of Medical Sciences',
      location: 'New Delhi',
      rating: 4.9,
      students: '8000+',
      courses: 'Medical, Nursing',
      image: '/api/placeholder/300/200',
      slug: 'aiims-delhi'
    },
    {
      id: 3,
      name: 'National Institute of Technology',
      location: 'Trichy, Tamil Nadu',
      rating: 4.6,
      students: '10000+',
      courses: 'Engineering, Science',
      image: '/api/placeholder/300/200',
      slug: 'nit-trichy'
    }
  ];

  const filteredColleges = colleges.filter(college => 
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedStream === '' || college.courses.toLowerCase().includes(selectedStream.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Colleges</h1>
          <p className="text-gray-600">Discover top colleges and universities</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search colleges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="md:w-64">
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Streams</option>
                <option value="engineering">Engineering</option>
                <option value="medical">Medical</option>
                <option value="management">Management</option>
                <option value="science">Science</option>
              </select>
            </div>
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <div key={college.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{college.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{college.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{college.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{college.students} students</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="text-sm">{college.courses}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No colleges found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegesListPage;
