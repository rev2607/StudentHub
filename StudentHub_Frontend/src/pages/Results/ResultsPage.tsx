import React, { useState } from 'react';
import { Search, Download, Printer, AlertCircle, HelpCircle, CheckCircle, XCircle } from 'lucide-react';

interface ExamResult {
  examName: string;
  candidateName: string;
  rollNumber: string;
  registrationNumber: string;
  examDate: string;
  resultDate: string;
  overallScore: number;
  totalMarks: number;
  percentile: number;
  rank: number;
  qualifyingStatus: 'PASS' | 'FAIL';
  sections: {
    name: string;
    marksObtained: number;
    totalMarks: number;
    percentage: number;
  }[];
  cutoff: {
    general: number;
    obc: number;
    sc: number;
    st: number;
  };
}

interface SearchFormProps {
  onSearch: (data: {
    exam: string;
    rollNumber: string;
    registrationNumber: string;
    captcha: string;
  }) => void;
}

const ResultsSearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [exam, setExam] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  // Initialize captcha on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exam || !rollNumber || !registrationNumber) {
      alert("Please fill all required fields!");
      return;
    }
    if (!captcha || captcha.toLowerCase() !== captchaText.toLowerCase()) {
      setCaptchaError("Please enter the correct captcha!");
      generateCaptcha();
      setCaptcha("");
      return;
    }
    setCaptchaError("");
    onSearch({ exam, rollNumber, registrationNumber, captcha });
  };

  const exams = [
    "JEE Main 2026",
    "JEE Advanced 2026",
    "NEET 2026",
    "TS EAMCET 2026",
    "AP EAMCET 2026",
    "BITSAT 2026",
    "VITEEE 2026",
    "KCET 2026",
    "KEAM 2026",
    "CLAT 2026",
    "AILET 2026",
    "ICAR AIEEA UG 2026",
    "LSAT India 2026",
    "SLAT 2026",
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Search Exam Results
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Exam Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Select Exam *</label>
          <select
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">-- Select an exam --</option>
            {exams.map((examName, idx) => (
              <option key={idx} value={examName}>
                {examName}
              </option>
            ))}
          </select>
        </div>

        {/* Roll Number */}
        <div>
          <label className="block mb-1 font-medium">Roll Number *</label>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter Roll Number"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Registration Number */}
        <div>
          <label className="block mb-1 font-medium">Registration Number *</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            placeholder="Enter Registration Number"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Security Captcha */}
        <div>
          <label className="block mb-1 font-medium">Security Captcha *</label>
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <div className="bg-gray-100 p-3 rounded-lg text-center font-mono text-lg font-bold tracking-wider border-2 border-dashed border-gray-300">
                {captchaText}
              </div>
            </div>
            <button
              type="button"
              onClick={generateCaptcha}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm font-medium"
            >
              Refresh
            </button>
          </div>
          <input
            type="text"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            placeholder="Enter the captcha above"
            className="w-full p-2 border rounded-lg mt-2"
            required
          />
          {captchaError && (
            <p className="text-red-500 text-sm mt-1">{captchaError}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search Results
        </button>
      </form>
    </div>
  );
};

const ResultsPage: React.FC = () => {
  const [result, setResult] = useState<ExamResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchData: {
    exam: string;
    rollNumber: string;
    registrationNumber: string;
    captcha: string;
  }) => {
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // Mock result data
      const mockResult: ExamResult = {
        examName: searchData.exam,
        candidateName: 'John Doe',
        rollNumber: searchData.rollNumber,
        registrationNumber: searchData.registrationNumber,
        examDate: '2026-05-15',
        resultDate: '2026-06-01',
        overallScore: 285,
        totalMarks: 360,
        percentile: 95.5,
        rank: 1250,
        qualifyingStatus: 'PASS',
        sections: [
          { name: 'Physics', marksObtained: 95, totalMarks: 120, percentage: 79.2 },
          { name: 'Chemistry', marksObtained: 88, totalMarks: 120, percentage: 73.3 },
          { name: 'Mathematics', marksObtained: 102, totalMarks: 120, percentage: 85.0 }
        ],
        cutoff: {
          general: 180,
          obc: 160,
          sc: 140,
          st: 120
        }
      };
      
      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  const handleDownload = () => {
    // Implement PDF download functionality
    console.log('Downloading scorecard...');
  };

  const handlePrint = () => {
    window.print();
  };

  const getStatusColor = (status: string) => {
    return status === 'PASS' ? 'text-green-600' : 'text-red-600';
  };

  const getStatusIcon = (status: string) => {
    return status === 'PASS' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/StudentHub_Blue_Logo.svg" className="w-12 h-12" alt="StudentHub Logo" />
              <h1 className="text-2xl font-bold text-gray-900">Results Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <HelpCircle className="w-5 h-5" />
                <span>Help & Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-blue-400 mr-3" />
            <div>
              <p className="text-sm text-blue-700">
                <strong>Important:</strong> JEE Main 2026 Session 1 results are now available. 
                JEE Advanced 2026 registration will open in April 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Section */}
          <div className="lg:col-span-1">
            <ResultsSearchForm onSearch={handleSearch} />

            {loading && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm text-blue-600 text-center">Searching for results...</p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Support Section */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support & Help</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">FAQs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Contact Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Result Revaluation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display Section */}
          <div className="lg:col-span-2">
            {result ? (
              <div className="bg-white rounded-lg shadow-md">
                {/* Result Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{result.examName}</h2>
                      <p className="text-blue-100">Result Published: {result.resultDate}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={handleDownload}
                        className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button
                        onClick={handlePrint}
                        className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Print</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Candidate Information */}
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Candidate Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Candidate Name</p>
                      <p className="font-medium text-gray-900">{result.candidateName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Roll Number</p>
                      <p className="font-medium text-gray-900">{result.rollNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Registration Number</p>
                      <p className="font-medium text-gray-900">{result.registrationNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Exam Date</p>
                      <p className="font-medium text-gray-900">{result.examDate}</p>
                    </div>
                  </div>
                </div>

                {/* Scorecard */}
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Scorecard</h3>
                  
                  {/* Overall Performance */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Total Score</p>
                      <p className="text-2xl font-bold text-blue-600">{result.overallScore}/{result.totalMarks}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Percentile</p>
                      <p className="text-2xl font-bold text-green-600">{result.percentile}%</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600">Rank</p>
                      <p className="text-2xl font-bold text-purple-600">{result.rank}</p>
                    </div>
                    <div className={`p-4 rounded-lg text-center ${result.qualifyingStatus === 'PASS' ? 'bg-green-50' : 'bg-red-50'}`}>
                      <p className="text-sm text-gray-600">Status</p>
                      <div className={`flex items-center justify-center space-x-2 ${getStatusColor(result.qualifyingStatus)}`}>
                        {getStatusIcon(result.qualifyingStatus)}
                        <p className="text-lg font-bold">{result.qualifyingStatus}</p>
                      </div>
                    </div>
                  </div>

                  {/* Section-wise Performance */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Subject</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Marks Obtained</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Total Marks</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Percentage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {result.sections.map((section, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{section.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{section.marksObtained}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{section.totalMarks}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{section.percentage}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cutoff Information */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cutoff Marks</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">General</p>
                      <p className="text-lg font-semibold text-gray-900">{result.cutoff.general}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">OBC</p>
                      <p className="text-lg font-semibold text-gray-900">{result.cutoff.obc}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">SC</p>
                      <p className="text-lg font-semibold text-gray-900">{result.cutoff.sc}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">ST</p>
                      <p className="text-lg font-semibold text-gray-900">{result.cutoff.st}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Search for Your Results</h3>
                <p className="text-gray-600">Enter your details in the search form to view your exam results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
