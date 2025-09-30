import { useState } from 'react';
import { Search, Filter, BookOpen, Calendar, Users, Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { ComprehensiveExamData, allComprehensiveExamData } from '../../data/comprehensiveExamData';

interface ScrollableExamReferenceProps {
  onExamSelect?: (exam: ComprehensiveExamData) => void;
}

function ScrollableExamReference({ onExamSelect }: ScrollableExamReferenceProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Engineering', 'Medical']));

  const categories = ['All', 'Engineering', 'Medical', 'Law', 'Design', 'Architecture', 'Science', 'Agriculture', 'Management', 'General'];
  const levels = ['All', 'National', 'State', 'University', 'International'];

  const filteredExams = allComprehensiveExamData.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.conductingAuthority.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || exam.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const examsByCategory = filteredExams.reduce((acc, exam) => {
    if (!acc[exam.category]) {
      acc[exam.category] = [];
    }
    acc[exam.category].push(exam);
    return acc;
  }, {} as Record<string, ComprehensiveExamData[]>);

  const toggleSection = (category: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedSections(newExpanded);
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Engineering': '🔧',
      'Medical': '🏥',
      'Law': '⚖️',
      'Design': '🎨',
      'Architecture': '🏗️',
      'Science': '🔬',
      'Agriculture': '🌾',
      'Management': '💼',
      'General': '📚'
    };
    return icons[category as keyof typeof icons] || '📚';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Engineering': 'bg-blue-50 border-blue-200 text-blue-800',
      'Medical': 'bg-red-50 border-red-200 text-red-800',
      'Law': 'bg-purple-50 border-purple-200 text-purple-800',
      'Design': 'bg-pink-50 border-pink-200 text-pink-800',
      'Architecture': 'bg-orange-50 border-orange-200 text-orange-800',
      'Science': 'bg-green-50 border-green-200 text-green-800',
      'Agriculture': 'bg-yellow-50 border-yellow-200 text-yellow-800',
      'Management': 'bg-indigo-50 border-indigo-200 text-indigo-800',
      'General': 'bg-gray-50 border-gray-200 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  const getLevelBadge = (level: string) => {
    const colors = {
      'National': 'bg-green-100 text-green-800',
      'State': 'bg-blue-100 text-blue-800',
      'University': 'bg-purple-100 text-purple-800',
      'International': 'bg-yellow-100 text-yellow-800'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Comprehensive Exam Reference</h1>
        <p className="text-gray-600">Scroll through all major entrance exams organized by category. Click on any exam for detailed information.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Exam Categories */}
      <div className="space-y-6">
        {Object.entries(examsByCategory).map(([category, exams]) => (
          <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection(category)}
              className={`w-full px-6 py-4 flex items-center justify-between ${getCategoryColor(category)} hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getCategoryIcon(category)}</span>
                <div>
                  <h2 className="text-xl font-semibold">{category}</h2>
                  <p className="text-sm opacity-75">{exams.length} exam{exams.length !== 1 ? 's' : ''}</p>
                </div>
              </div>
              {expandedSections.has(category) ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>

            {expandedSections.has(category) && (
              <div className="p-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {exams.map((exam) => (
                    <div
                      key={exam.id}
                      onClick={() => onExamSelect?.(exam)}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 cursor-pointer transition-colors border border-gray-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 text-lg">{exam.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelBadge(exam.level)}`}>
                          {exam.level}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{exam.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{exam.conductingAuthority}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exam.frequency}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <BookOpen className="h-4 w-4 mr-2" />
                          <span>{exam.mode}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{exam.states.join(', ')}</span>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{allComprehensiveExamData.length}</div>
            <div className="text-sm text-gray-600">Total Exams</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {allComprehensiveExamData.filter(exam => exam.level === 'National').length}
            </div>
            <div className="text-sm text-gray-600">National Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {allComprehensiveExamData.filter(exam => exam.category === 'Engineering').length}
            </div>
            <div className="text-sm text-gray-600">Engineering</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {allComprehensiveExamData.filter(exam => exam.category === 'Medical').length}
            </div>
            <div className="text-sm text-gray-600">Medical</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollableExamReference;
