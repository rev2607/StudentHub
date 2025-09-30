import { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Calendar, Users, Award, ExternalLink, Clock, Globe } from 'lucide-react';
import { ComprehensiveExamData, allComprehensiveExamData } from '../../data/comprehensiveExamData';

interface ComprehensiveExamSearchProps {
  onExamSelect?: (exam: ComprehensiveExamData) => void;
}

function ComprehensiveExamSearch({ onExamSelect }: ComprehensiveExamSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedAuthority, setSelectedAuthority] = useState<string>('All');
  const [selectedMode, setSelectedMode] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('title');

  const categories = ['All', 'Engineering', 'Medical', 'Law', 'Design', 'Architecture', 'Science', 'Agriculture', 'Management', 'General'];
  const levels = ['All', 'National', 'State', 'University', 'International'];
  const authorities = ['All', 'National Testing Agency', 'IITs', 'Vellore Institute of Technology', 'BITS Pilani', 'Consortium of NLUs', 'NLU Delhi', 'Council of Architecture', 'ICAR', 'IIMs'];
  const modes = ['All', 'Online', 'Offline', 'Hybrid'];
  const sortOptions = [
    { value: 'title', label: 'Title A-Z' },
    { value: 'category', label: 'Category' },
    { value: 'level', label: 'Level' },
    { value: 'authority', label: 'Authority' }
  ];

  const filteredAndSortedExams = useMemo(() => {
    let filtered = allComprehensiveExamData.filter(exam => {
      const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exam.conductingAuthority.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exam.syllabus.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || exam.level === selectedLevel;
      const matchesAuthority = selectedAuthority === 'All' || exam.conductingAuthority === selectedAuthority;
      const matchesMode = selectedMode === 'All' || exam.mode === selectedMode;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesAuthority && matchesMode;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'level':
          return a.level.localeCompare(b.level);
        case 'authority':
          return a.conductingAuthority.localeCompare(b.conductingAuthority);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedLevel, selectedAuthority, selectedMode, sortBy]);

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


  const getLevelBadge = (level: string) => {
    const colors = {
      'National': 'bg-green-100 text-green-800',
      'State': 'bg-blue-100 text-blue-800',
      'University': 'bg-purple-100 text-purple-800',
      'International': 'bg-yellow-100 text-yellow-800'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getModeBadge = (mode: string) => {
    const colors = {
      'Online': 'bg-blue-100 text-blue-800',
      'Offline': 'bg-red-100 text-red-800',
      'Hybrid': 'bg-purple-100 text-purple-800'
    };
    return colors[mode as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Comprehensive Exam Search</h1>
        <p className="text-gray-600">Search and filter through all major entrance exams with detailed information.</p>
      </div>

      {/* Advanced Search Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
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
            <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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

          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={selectedAuthority}
              onChange={(e) => setSelectedAuthority(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {authorities.map(authority => (
                <option key={authority} value={authority}>{authority}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {modes.map(mode => (
                <option key={mode} value={mode}>{mode}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSelectedCategory('Engineering');
              setSelectedLevel('National');
            }}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
          >
            Engineering National
          </button>
          <button
            onClick={() => {
              setSelectedCategory('Medical');
              setSelectedLevel('National');
            }}
            className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200 transition-colors"
          >
            Medical National
          </button>
          <button
            onClick={() => {
              setSelectedCategory('Law');
              setSelectedLevel('National');
            }}
            className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors"
          >
            Law National
          </button>
          <button
            onClick={() => {
              setSelectedLevel('State');
              setSelectedCategory('All');
            }}
            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors"
          >
            State Level
          </button>
          <button
            onClick={() => {
              setSelectedAuthority('National Testing Agency');
              setSelectedCategory('All');
            }}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200 transition-colors"
          >
            NTA Exams
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredAndSortedExams.length} of {allComprehensiveExamData.length} exams
        </p>
      </div>

      {/* Exam Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedExams.map((exam) => (
          <div
            key={exam.id}
            onClick={() => onExamSelect?.(exam)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md cursor-pointer transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{getCategoryIcon(exam.category)}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{exam.title}</h3>
                  <p className="text-sm text-gray-500">{exam.conductingAuthority}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{exam.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelBadge(exam.level)}`}>
                {exam.level}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getModeBadge(exam.mode)}`}>
                {exam.mode}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{exam.frequency}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                <span>{exam.examPattern.duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>{exam.examPattern.questions} questions</span>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              {exam.states.join(', ')}
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedExams.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No exams found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
        </div>
      )}

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

export default ComprehensiveExamSearch;
