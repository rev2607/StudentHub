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
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img src="/StudentHub_Blue_Logo.svg" className="w-12 h-12" alt="StudentHub Logo" />
              <h1 className="text-2xl font-bold text-gray-900">Results Portal</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Coming Soon - Full Page Display */}
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16">
            {/* Large Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-yellow-600" />
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Feature Coming Soon
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              This results portal is currently under development. We're working hard to bring you a comprehensive results platform. Stay tuned for updates!
            </p>
            
            {/* Additional Info */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <p className="text-base sm:text-lg text-gray-600">
                Our team is working tirelessly to create the best results platform for students. 
                We'll notify you as soon as it's ready!
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.history.back()}
                className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Go Back
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] rounded-lg font-semibold transition-colors duration-200"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ResultsPage;
