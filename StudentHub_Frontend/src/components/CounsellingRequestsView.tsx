import { useState, useEffect } from 'react';
import { getCounsellingRequestsFromSupabase } from '../services/counsellingService';

interface CounsellingRequest {
  id: string;
  email: string;
  parent_name: string;
  student_name: string;
  phone_number: string;
  exam_target: string;
  location: string;
  created_at: string;
  status: string;
  notes?: string;
}

const CounsellingRequestsView: React.FC = () => {
  const [requests, setRequests] = useState<CounsellingRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const supabaseRequests = await getCounsellingRequestsFromSupabase();
        setRequests(supabaseRequests);
      } catch (error) {
        console.error('Error fetching counselling requests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Counselling Requests</h2>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Counselling Requests</h2>
        <p className="text-gray-600">No counselling requests found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Counselling Requests ({requests.length})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Exam Target</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-900">{request.student_name}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{request.email}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{request.phone_number}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{request.exam_target}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{request.location}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{formatDate(request.created_at)}</td>
                <td className="px-4 py-2 text-sm">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    request.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                    request.status === 'scheduled' ? 'bg-purple-100 text-purple-800' :
                    request.status === 'completed' ? 'bg-green-100 text-green-800' :
                    request.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CounsellingRequestsView;
