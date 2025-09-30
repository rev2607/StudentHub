import { useParams } from 'react-router-dom';
import { MapPin, Star, Users, GraduationCap, Phone, Mail, Globe, Calendar, Award } from 'lucide-react';

const CollegeDetailPage = () => {
  const { slug } = useParams();

  // Mock data for college details
  const college = {
    id: 1,
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    students: '12000+',
    courses: 'Engineering, Management',
    image: '/api/placeholder/800/400',
    slug: 'iit-bombay',
    description: 'IIT Bombay is one of the premier engineering institutes in India, known for its excellence in education and research.',
    established: '1958',
    type: 'Public',
    website: 'https://www.iitb.ac.in',
    email: 'info@iitb.ac.in',
    phone: '+91-22-2572-2545',
    address: 'Powai, Mumbai, Maharashtra 400076',
    facilities: ['Library', 'Hostel', 'Sports Complex', 'Medical Center', 'Cafeteria'],
    courses: [
      { name: 'Computer Science Engineering', duration: '4 years', seats: 120 },
      { name: 'Mechanical Engineering', duration: '4 years', seats: 100 },
      { name: 'Electrical Engineering', duration: '4 years', seats: 80 },
      { name: 'Civil Engineering', duration: '4 years', seats: 60 }
    ],
    admissionProcess: [
      'JEE Main/Advanced Score',
      'Application Form Submission',
      'Counseling Process',
      'Document Verification',
      'Seat Allotment'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* College Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <img 
                src={college.image} 
                alt={college.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{college.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{college.location}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">{college.rating} Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-semibold">{college.students} Students</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">{college.courses}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{college.description}</p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* College Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About College</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Established</div>
                    <div className="font-semibold">{college.established}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Type</div>
                    <div className="font-semibold">{college.type}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Courses Offered</h2>
              <div className="space-y-4">
                {college.courses.map((course, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.name}</h3>
                        <p className="text-gray-600 text-sm">Duration: {course.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Available Seats</div>
                        <div className="font-semibold">{course.seats}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Admission Process</h2>
              <div className="space-y-3">
                {college.admissionProcess.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-sm">{college.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-500 mr-3" />
                  <span className="text-sm">{college.email}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-500 mr-3" />
                  <a href={college.website} className="text-sm text-blue-600 hover:underline">
                    {college.website}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                  <span className="text-sm">{college.address}</span>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Facilities</h3>
              <div className="grid grid-cols-2 gap-2">
                {college.facilities.map((facility, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailPage;
