import { Search, Filter, Award, Calendar, Users } from 'lucide-react';

interface EnhancedFiltersProps {
  value: {
    stream: string;
    searchTerm: string;
    level: string;
    conductingAuthority: string;
    mode: string;
  };
  onChange: (filters: {
    stream: string;
    searchTerm: string;
    level: string;
    conductingAuthority: string;
    mode: string;
  }) => void;
}

function EnhancedFilters({ value, onChange }: EnhancedFiltersProps) {
  const streams = [
    'All',
    'Engineering',
    'Medical',
    'Law',
    'Design',
    'Architecture',
    'Science',
    'Agriculture',
    'Management',
    'General'
  ];

  const levels = ['All', 'National', 'State', 'University', 'International'];

  const conductingAuthorities = [
    'All',
    'National Testing Agency',
    'IITs',
    'Vellore Institute of Technology',
    'BITS Pilani',
    'Consortium of NLUs',
    'NLU Delhi',
    'Council of Architecture',
    'ICAR',
    'IIMs'
  ];

  const modes = ['All', 'Online', 'Offline', 'Hybrid'];

  const handleFilterChange = (key: string, newValue: string) => {
    onChange({
      ...value,
      [key]: newValue
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-gray-500" />
        <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search exams..."
            value={value.searchTerm}
            onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Stream Filter */}
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={value.stream}
            onChange={(e) => handleFilterChange('stream', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            {streams.map(stream => (
              <option key={stream} value={stream}>{stream}</option>
            ))}
          </select>
        </div>

        {/* Level Filter */}
        <div className="relative">
          <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={value.level}
            onChange={(e) => handleFilterChange('level', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Conducting Authority Filter */}
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={value.conductingAuthority}
            onChange={(e) => handleFilterChange('conductingAuthority', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            {conductingAuthorities.map(authority => (
              <option key={authority} value={authority}>{authority}</option>
            ))}
          </select>
        </div>

        {/* Mode Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={value.mode}
            onChange={(e) => handleFilterChange('mode', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            {modes.map(mode => (
              <option key={mode} value={mode}>{mode}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Filter Tags */}
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Quick Filters</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onChange({ ...value, stream: 'Engineering', level: 'National' })}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
          >
            Engineering National
          </button>
          <button
            onClick={() => onChange({ ...value, stream: 'Medical', level: 'National' })}
            className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200 transition-colors"
          >
            Medical National
          </button>
          <button
            onClick={() => onChange({ ...value, stream: 'Law', level: 'National' })}
            className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors"
          >
            Law National
          </button>
          <button
            onClick={() => onChange({ ...value, stream: 'All', level: 'State' })}
            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200 transition-colors"
          >
            State Level
          </button>
          <button
            onClick={() => onChange({ ...value, stream: 'All', level: 'All', conductingAuthority: 'National Testing Agency' })}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200 transition-colors"
          >
            NTA Exams
          </button>
        </div>
      </div>

      {/* Clear Filters */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => onChange({
            stream: '',
            searchTerm: '',
            level: 'All',
            conductingAuthority: 'All',
            mode: 'All'
          })}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Clear all filters
        </button>
      </div>
    </div>
  );
}

export default EnhancedFilters;
