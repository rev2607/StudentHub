import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface FiltersSidebarProps {
  states: string[];
  streams: string[];
  onChange: (filters: {
    states: string[];
    streams: string[];
    nirfMin: number | null;
    nirfMax: number | null;
    feesMin: number | null;
    feesMax: number | null;
  }) => void;
}

const FiltersSidebar = ({ states, streams, onChange }: FiltersSidebarProps) => {
  const [localFilters, setLocalFilters] = useState({
    states: [] as string[],
    streams: [] as string[],
    nirfMin: null as number | null,
    nirfMax: null as number | null,
    feesMin: null as number | null,
    feesMax: null as number | null,
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onChange(newFilters);
  };

  const handleStateToggle = (state: string) => {
    const newStates = localFilters.states.includes(state)
      ? localFilters.states.filter(s => s !== state)
      : [...localFilters.states, state];
    handleFilterChange('states', newStates);
  };

  const handleStreamToggle = (stream: string) => {
    const newStreams = localFilters.streams.includes(stream)
      ? localFilters.streams.filter(s => s !== stream)
      : [...localFilters.streams, stream];
    handleFilterChange('streams', newStreams);
  };

  const clearFilters = () => {
    const clearedFilters = {
      states: [],
      streams: [],
      nirfMin: null,
      nirfMax: null,
      feesMin: null,
      feesMax: null,
    };
    setLocalFilters(clearedFilters);
    onChange(clearedFilters);
  };

  const hasActiveFilters = localFilters.states.length > 0 || 
                          localFilters.streams.length > 0 || 
                          localFilters.nirfMin !== null || 
                          localFilters.nirfMax !== null || 
                          localFilters.feesMin !== null || 
                          localFilters.feesMax !== null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* States Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">States</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {states.map((state) => (
              <label key={state} className="flex items-center">
                <input
                  type="checkbox"
                  checked={localFilters.states.includes(state)}
                  onChange={() => handleStateToggle(state)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{state}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Streams Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Streams</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {streams.map((stream) => (
              <label key={stream} className="flex items-center">
                <input
                  type="checkbox"
                  checked={localFilters.streams.includes(stream)}
                  onChange={() => handleStreamToggle(stream)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{stream}</span>
              </label>
            ))}
          </div>
        </div>

        {/* NIRF Rank Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">NIRF Rank</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Min Rank</label>
              <input
                type="number"
                placeholder="1"
                value={localFilters.nirfMin || ''}
                onChange={(e) => handleFilterChange('nirfMin', e.target.value ? parseInt(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Max Rank</label>
              <input
                type="number"
                placeholder="100"
                value={localFilters.nirfMax || ''}
                onChange={(e) => handleFilterChange('nirfMax', e.target.value ? parseInt(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Fees Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Fees (LPA)</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Min Fees</label>
              <input
                type="number"
                placeholder="0"
                value={localFilters.feesMin || ''}
                onChange={(e) => handleFilterChange('feesMin', e.target.value ? parseFloat(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Max Fees</label>
              <input
                type="number"
                placeholder="10"
                value={localFilters.feesMax || ''}
                onChange={(e) => handleFilterChange('feesMax', e.target.value ? parseFloat(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
