import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, Users, Award, Calendar } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const comprehensiveFAQs: FAQ[] = [
  // General FAQs
  {
    question: "Can I appear for multiple entrance exams?",
    answer: "Yes, you can appear for multiple entrance exams if you meet the eligibility criteria for each exam. Many students apply for multiple exams to increase their chances of admission.",
    category: "General",
    tags: ["multiple exams", "eligibility", "admission"]
  },
  {
    question: "What is the best strategy for exam preparation?",
    answer: "The best strategy includes: 1) Understanding the syllabus thoroughly, 2) Regular practice with mock tests, 3) Time management, 4) Revision of important topics, 5) Staying updated with current affairs, and 6) Maintaining a healthy study schedule.",
    category: "General",
    tags: ["preparation", "strategy", "study tips"]
  },
  {
    question: "Are scholarships available after entrance exams?",
    answer: "Yes, many government and university schemes offer scholarships based on entrance exam performance. These include merit scholarships, need-based scholarships, and special category scholarships for reserved candidates.",
    category: "General",
    tags: ["scholarships", "financial aid", "merit"]
  },
  {
    question: "What is the scope after clearing entrance exams?",
    answer: "Entrance exams provide admission to hundreds of top colleges and universities in India across various streams including Engineering, Medical, Law, Management, and more. Success in these exams opens doors to prestigious institutions and career opportunities.",
    category: "General",
    tags: ["scope", "career", "opportunities"]
  },

  // Engineering FAQs
  {
    question: "What is the difference between JEE Main and JEE Advanced?",
    answer: "JEE Main is the first stage for admission to NITs, IIITs, and other engineering colleges. JEE Advanced is the second stage for admission to IITs. Only top 2.5 lakh JEE Main rankers are eligible for JEE Advanced.",
    category: "Engineering",
    tags: ["JEE Main", "JEE Advanced", "IIT", "NIT"]
  },
  {
    question: "How many attempts are allowed for JEE Main?",
    answer: "There is no limit on the number of attempts for JEE Main. Students can appear for the exam as many times as they want, provided they meet the eligibility criteria.",
    category: "Engineering",
    tags: ["JEE Main", "attempts", "eligibility"]
  },
  {
    question: "What is the minimum percentage required for NITs/IIITs?",
    answer: "For NITs and IIITs, candidates need to secure at least 75% marks in 12th class or be in the top 20 percentile of their respective boards. For SC/ST candidates, the requirement is 65%.",
    category: "Engineering",
    tags: ["NIT", "IIIT", "percentage", "eligibility"]
  },
  {
    question: "Can I apply for both JEE Main and state engineering exams?",
    answer: "Yes, you can apply for both JEE Main and state engineering exams simultaneously. This increases your chances of getting admission to good engineering colleges.",
    category: "Engineering",
    tags: ["JEE Main", "state exams", "multiple applications"]
  },

  // Medical FAQs
  {
    question: "What is the age limit for NEET?",
    answer: "The minimum age is 17 years and maximum age is 25 years (30 years for reserved categories) as on December 31 of the year of admission.",
    category: "Medical",
    tags: ["NEET", "age limit", "eligibility"]
  },
  {
    question: "Can I apply for NEET if I have appeared for improvement exam?",
    answer: "Yes, you can apply for NEET even if you have appeared for improvement exam, provided you meet the eligibility criteria and have the required percentage.",
    category: "Medical",
    tags: ["NEET", "improvement exam", "eligibility"]
  },
  {
    question: "What is the difference between AIIMS and JIPMER admissions?",
    answer: "Both AIIMS and JIPMER now admit students through NEET. Previously, they had separate entrance exams, but now all medical admissions are conducted through NEET.",
    category: "Medical",
    tags: ["AIIMS", "JIPMER", "NEET", "medical admission"]
  },
  {
    question: "Is NEET syllabus same as last year?",
    answer: "The NEET syllabus is generally consistent, but students should check the official information bulletin for any updates or changes in the syllabus.",
    category: "Medical",
    tags: ["NEET", "syllabus", "updates"]
  },

  // Law FAQs
  {
    question: "What is the difference between CLAT and AILET?",
    answer: "CLAT is for admission to 22 NLUs while AILET is specifically for NLU Delhi. Both have similar patterns but AILET is conducted separately by NLU Delhi.",
    category: "Law",
    tags: ["CLAT", "AILET", "NLU", "law admission"]
  },
  {
    question: "What is the age limit for CLAT?",
    answer: "There is no upper age limit for CLAT. Candidates who have completed 10+2 or equivalent are eligible to apply.",
    category: "Law",
    tags: ["CLAT", "age limit", "eligibility"]
  },
  {
    question: "Can I apply for CLAT with any stream in 12th?",
    answer: "Yes, CLAT can be attempted by students from any stream (Science, Commerce, Arts) as long as they have completed 10+2 or equivalent.",
    category: "Law",
    tags: ["CLAT", "stream", "eligibility"]
  },

  // Architecture FAQs
  {
    question: "What is NATA and who conducts it?",
    answer: "NATA (National Aptitude Test in Architecture) is conducted by the Council of Architecture for admission to architecture courses. It tests drawing skills, aesthetic sensitivity, and mathematical ability.",
    category: "Architecture",
    tags: ["NATA", "architecture", "Council of Architecture"]
  },
  {
    question: "What is the validity of NATA score?",
    answer: "NATA score is valid for one year from the date of declaration of result. Candidates can appear for NATA multiple times in a year.",
    category: "Architecture",
    tags: ["NATA", "validity", "multiple attempts"]
  },

  // Agriculture FAQs
  {
    question: "What courses are available through ICAR AIEEA?",
    answer: "ICAR AIEEA offers admission to various agriculture, veterinary, and allied science courses at central agricultural universities across India.",
    category: "Agriculture",
    tags: ["ICAR", "AIEEA", "agriculture", "veterinary"]
  },

  // Management FAQs
  {
    question: "What is CAT and who can apply?",
    answer: "CAT (Common Admission Test) is conducted for admission to MBA/PGDM programs at IIMs and other management institutes. Graduates with 50% marks can apply.",
    category: "Management",
    tags: ["CAT", "MBA", "PGDM", "IIM"]
  },
  {
    question: "What is the difference between CAT and other management exams?",
    answer: "CAT is specifically for IIMs and some other top management institutes. Other exams like MAT, XAT, SNAP are for different management institutes with varying difficulty levels.",
    category: "Management",
    tags: ["CAT", "MAT", "XAT", "SNAP", "management exams"]
  }
];

const categories = ["All", "General", "Engineering", "Medical", "Law", "Architecture", "Agriculture", "Management"];

function ComprehensiveExamFaqs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set());

  const filteredFAQs = comprehensiveFAQs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    const newExpanded = new Set(expandedFAQs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFAQs(newExpanded);
  };


  const getCategoryColor = (category: string) => {
    const colors = {
      'General': 'bg-gray-100 text-gray-800',
      'Engineering': 'bg-blue-100 text-blue-800',
      'Medical': 'bg-red-100 text-red-800',
      'Law': 'bg-purple-100 text-purple-800',
      'Architecture': 'bg-orange-100 text-orange-800',
      'Agriculture': 'bg-yellow-100 text-yellow-800',
      'Management': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comprehensive Exam FAQs</h2>
        <p className="text-gray-600">Find answers to frequently asked questions about entrance exams across all categories.</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(faq.category)}`}>
                  {faq.category}
                </span>
                <span className="text-left font-medium text-gray-900">{faq.question}</span>
              </div>
              {expandedFAQs.has(index) ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedFAQs.has(index) && (
              <div className="px-6 pb-4 border-t border-gray-200">
                <p className="text-gray-600 mt-4">{faq.answer}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {faq.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-8">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No FAQs found matching your search criteria.</p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-8 bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{comprehensiveFAQs.length}</div>
            <div className="text-sm text-gray-600">Total FAQs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {comprehensiveFAQs.filter(faq => faq.category === 'Engineering').length}
            </div>
            <div className="text-sm text-gray-600">Engineering</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">
              {comprehensiveFAQs.filter(faq => faq.category === 'Medical').length}
            </div>
            <div className="text-sm text-gray-600">Medical</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {comprehensiveFAQs.filter(faq => faq.category === 'Law').length}
            </div>
            <div className="text-sm text-gray-600">Law</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComprehensiveExamFaqs;
