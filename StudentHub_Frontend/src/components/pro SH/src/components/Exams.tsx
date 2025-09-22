import React, { useState, useMemo } from 'react';
import { Exam, ExamFilter } from '../types/exam';
import { examsData } from '../data/examsData';
import ExamCard from './ExamCard';
import ExamFilters from './ExamFilters';
import { format, isAfter, isBefore, addDays } from 'date-fns';
import './Exams.css';

const Exams: React.FC = () => {
  const [filters, setFilters] = useState<ExamFilter>({
    category: 'All',
    level: 'All',
    searchTerm: '',
    upcomingOnly: true,
    maxFee: null
  });

  const filteredExams = useMemo(() => {
    let filtered = examsData;

    // Filter by category
    if (filters.category !== 'All') {
      filtered = filtered.filter(exam => exam.category === filters.category);
    }

    // Filter by level
    if (filters.level !== 'All') {
      filtered = filtered.filter(exam => exam.level === filters.level);
    }

    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(exam => 
        exam.name.toLowerCase().includes(searchLower) ||
        exam.fullName.toLowerCase().includes(searchLower) ||
        exam.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter upcoming exams only
    if (filters.upcomingOnly) {
      filtered = filtered.filter(exam => exam.isUpcoming);
    }

    // Filter by maximum fee
    if (filters.maxFee !== null) {
      filtered = filtered.filter(exam => exam.applicationFee.general <= filters.maxFee!);
    }

    // Sort by exam date
    filtered.sort((a, b) => {
      const dateA = new Date(a.examDate);
      const dateB = new Date(b.examDate);
      return dateA.getTime() - dateB.getTime();
    });

    return filtered;
  }, [filters]);

  const upcomingCount = examsData.filter(exam => exam.isUpcoming).length;
  const totalCount = examsData.length;

  return (
    <div className="exams-container">
      <div className="container">
        <div className="exams-header">
          <h1>Examination Dates</h1>
          <p className="exams-subtitle">
            Stay updated with all important examination dates and deadlines
          </p>
          <div className="exams-stats">
            <div className="stat-item">
              <span className="stat-number">{upcomingCount}</span>
              <span className="stat-label">Upcoming Exams</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{totalCount}</span>
              <span className="stat-label">Total Exams</span>
            </div>
          </div>
        </div>

        <ExamFilters filters={filters} onFiltersChange={setFilters} />

        <div className="exams-grid">
          {filteredExams.length > 0 ? (
            filteredExams.map(exam => (
              <ExamCard key={exam.id} exam={exam} />
            ))
          ) : (
            <div className="no-results">
              <h3>No exams found</h3>
              <p>Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exams;
