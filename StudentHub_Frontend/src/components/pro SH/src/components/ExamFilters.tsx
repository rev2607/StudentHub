import React from 'react';
import { ExamFilter, ExamCategory, ExamLevel } from '../types/exam';
import { Search, Filter, X, IndianRupee } from 'lucide-react';
import './ExamFilters.css';

interface ExamFiltersProps {
  filters: ExamFilter;
  onFiltersChange: (filters: ExamFilter) => void;
}

const ExamFilters: React.FC<ExamFiltersProps> = ({ filters, onFiltersChange }) => {
  const categories: ExamCategory[] = [
    'Engineering', 'Medical', 'Management', 'Government', 
    'Defense', 'Arts & Science', 'Law', 'Agriculture', 
    'Architecture', 'Other'
  ];

  const levels: ExamLevel[] = ['National', 'State', 'University', 'International'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({
      ...filters,
      searchTerm: e.target.value
    });
  };

  const handleCategoryChange = (category: ExamCategory | 'All') => {
    onFiltersChange({
      ...filters,
      category
    });
  };

  const handleLevelChange = (level: ExamLevel | 'All') => {
    onFiltersChange({
      ...filters,
      level
    });
  };

  const handleUpcomingToggle = () => {
    onFiltersChange({
      ...filters,
      upcomingOnly: !filters.upcomingOnly
    });
  };

  const handleMaxFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onFiltersChange({
      ...filters,
      maxFee: value === '' ? null : parseInt(value)
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      category: 'All',
      level: 'All',
      searchTerm: '',
      upcomingOnly: true,
      maxFee: null
    });
  };

  const hasActiveFilters = 
    filters.category !== 'All' || 
    filters.level !== 'All' || 
    filters.searchTerm !== '' || 
    !filters.upcomingOnly ||
    filters.maxFee !== null;

  return (
    <div className="exam-filters">
      <div className="filters-header">
        <h3>
          <Filter size={20} />
          Filter Exams
        </h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="clear-filters-btn">
            <X size={16} />
            Clear All
          </button>
        )}
      </div>

      <div className="filters-content">
        {/* Search Bar */}
        <div className="filter-group">
          <label htmlFor="search">Search Exams</label>
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              id="search"
              type="text"
              placeholder="Search by exam name, description..."
              value={filters.searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="filter-group">
          <label>Category</label>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filters.category === 'All' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('All')}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filters.category === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Level Filter */}
        <div className="filter-group">
          <label>Level</label>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filters.level === 'All' ? 'active' : ''}`}
              onClick={() => handleLevelChange('All')}
            >
              All Levels
            </button>
            {levels.map(level => (
              <button
                key={level}
                className={`filter-btn ${filters.level === level ? 'active' : ''}`}
                onClick={() => handleLevelChange(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Fee Range Filter */}
        <div className="filter-group">
          <label htmlFor="max-fee">
            <IndianRupee size={16} />
            Maximum Application Fee
          </label>
          <div className="fee-input-wrapper">
            <input
              id="max-fee"
              type="number"
              placeholder="Enter maximum fee (e.g., 1000)"
              value={filters.maxFee || ''}
              onChange={handleMaxFeeChange}
              className="fee-input"
              min="0"
            />
            <span className="currency-label">INR</span>
          </div>
        </div>

        {/* Upcoming Only Toggle */}
        <div className="filter-group">
          <div className="toggle-wrapper">
            <input
              type="checkbox"
              id="upcoming-only"
              checked={filters.upcomingOnly}
              onChange={handleUpcomingToggle}
              className="toggle-input"
            />
            <label htmlFor="upcoming-only" className="toggle-label">
              Show only upcoming exams
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamFilters;
