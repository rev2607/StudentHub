import { Link } from "react-router-dom";
import { MapPin, Building } from "lucide-react";

const NITSikkimPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-32 h-32 rounded-lg flex items-center justify-center bg-gray-100 border border-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">NIT<br/>Sikkim</div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">National Institute of Technology Sikkim</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Ravangla, Sikkim</div>
                <div className="flex items-center"><Building className="w-4 h-4 mr-1" />NIT</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">College Information</h2>
              <p className="text-gray-600 mb-4">Detailed information about this college will be available soon.</p>
              <Link to="/colleges" className="text-blue-600 hover:underline">← Back to Colleges</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NITSikkimPage;


