import { useState } from 'react';
import { Exam } from '../types/exam';
import { Calendar, Clock, Globe, BookOpen, ExternalLink, IndianRupee, TrendingUp, ChevronDown, ChevronUp, CheckCircle, AlertCircle, Clock as ClockIcon, Info } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import './ExamCard.css';

interface ExamCardProps {
  exam: Exam;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam }: ExamCardProps) => {
  const [showCutoffs, setShowCutoffs] = useState(false);
  const examDate = parseISO(exam.examDate);
  const applicationEndDate = parseISO(exam.applicationEndDate);
  const resultDate = parseISO(exam.resultDate);

  const getStatusColor = () => {
    if (exam.daysUntil < 0) return '#dc3545'; // Red for past
    if (exam.daysUntil <= 30) return '#fd7e14'; // Orange for soon
    return '#28a745'; // Green for upcoming
  };

  const getStatusText = () => {
    if (exam.daysUntil < 0) return 'Completed';
    if (exam.daysUntil <= 30) return 'Soon';
    return 'Upcoming';
  };

  const getDataStatusIcon = (status: string) => {
    switch (status) {
      case 'announced':
        return <CheckCircle size={14} className="status-icon announced" />;
      case 'expected':
        return <ClockIcon size={14} className="status-icon expected" />;
      case 'not_announced':
        return <AlertCircle size={14} className="status-icon not-announced" />;
      default:
        return <Info size={14} className="status-icon unknown" />;
    }
  };

  const getDataStatusText = (status: string) => {
    switch (status) {
      case 'announced':
        return 'Official';
      case 'expected':
        return 'Expected';
      case 'not_announced':
        return 'Not Announced';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="exam-card">
      <div className="exam-header">
        <div className="exam-title">
          <h3>{exam.name}</h3>
          <span className="exam-level">{exam.level}</span>
        </div>
        <div 
          className="exam-status"
          style={{ backgroundColor: getStatusColor() }}
        >
          {getStatusText()}
        </div>
      </div>

      <div className="exam-full-name">
        {exam.fullName}
      </div>

      <div className="exam-category">
        <BookOpen size={16} />
        <span>{exam.category}</span>
      </div>

      <div className="exam-dates">
        <div className="date-item">
          <Calendar size={16} />
          <div className="date-info">
            <div className="date-header">
              <span className="date-label">Exam Date</span>
              <div className="data-status">
                {getDataStatusIcon(exam.dataStatus.examDateStatus)}
                <span className="status-text">{getDataStatusText(exam.dataStatus.examDateStatus)}</span>
              </div>
            </div>
            <span className="date-value">{format(examDate, 'MMM dd, yyyy')}</span>
          </div>
        </div>

        <div className="date-item">
          <Clock size={16} />
          <div className="date-info">
            <div className="date-header">
              <span className="date-label">Application Deadline</span>
              <div className="data-status">
                {getDataStatusIcon(exam.dataStatus.applicationStatus)}
                <span className="status-text">{getDataStatusText(exam.dataStatus.applicationStatus)}</span>
              </div>
            </div>
            <span className="date-value">{format(applicationEndDate, 'MMM dd, yyyy')}</span>
          </div>
        </div>

        <div className="date-item">
          <Calendar size={16} />
          <div className="date-info">
            <div className="date-header">
              <span className="date-label">Result Date</span>
              <div className="data-status">
                {getDataStatusIcon(exam.dataStatus.resultStatus)}
                <span className="status-text">{getDataStatusText(exam.dataStatus.resultStatus)}</span>
              </div>
            </div>
            <span className="date-value">{format(resultDate, 'MMM dd, yyyy')}</span>
          </div>
        </div>
      </div>

      <div className="exam-description">
        {exam.description}
      </div>

      <div className="exam-subjects">
        <strong>Subjects:</strong>
        <div className="subjects-list">
          {exam.subjects.map((subject: string, index: number) => (
            <span key={index} className="subject-tag">
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="exam-fees">
        <strong>
          <IndianRupee size={16} />
          Application Fee:
        </strong>
        <div className="fees-grid">
          <div className="fee-item">
            <span className="fee-category">General</span>
            <span className="fee-amount">
              {exam.applicationFee.currency} {exam.applicationFee.general}
            </span>
          </div>
          {exam.applicationFee.obc && (
            <div className="fee-item">
              <span className="fee-category">OBC</span>
              <span className="fee-amount">
                {exam.applicationFee.currency} {exam.applicationFee.obc}
              </span>
            </div>
          )}
          {exam.applicationFee.sc && (
            <div className="fee-item">
              <span className="fee-category">SC</span>
              <span className="fee-amount">
                {exam.applicationFee.currency} {exam.applicationFee.sc}
              </span>
            </div>
          )}
          {exam.applicationFee.st && (
            <div className="fee-item">
              <span className="fee-category">ST</span>
              <span className="fee-amount">
                {exam.applicationFee.currency} {exam.applicationFee.st}
              </span>
            </div>
          )}
          {exam.applicationFee.pwd && (
            <div className="fee-item">
              <span className="fee-category">PWD</span>
              <span className="fee-amount">
                {exam.applicationFee.currency} {exam.applicationFee.pwd}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="exam-actions">
        <a 
          href={exam.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <Globe size={16} />
          Visit Website
        </a>
        <button className="btn btn-secondary">
          <ExternalLink size={16} />
          View Details
        </button>
      </div>

      {exam.daysUntil > 0 && (
        <div className="countdown">
          <Clock size={16} />
          <span>{exam.daysUntil} days remaining</span>
        </div>
      )}

      <div className="cutoff-section">
        <button 
          className="cutoff-toggle"
          onClick={() => setShowCutoffs(!showCutoffs)}
        >
          <TrendingUp size={16} />
          <span>Previous Years Cutoff Marks</span>
          {showCutoffs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {showCutoffs && (
          <div className="cutoff-marks">
            {exam.cutoffMarks.map((cutoff: any, index: number) => (
              <div key={index} className="cutoff-year">
                <div className="cutoff-year-header">
                  <span className="year">{cutoff.year}</span>
                  <span className="total-marks">Out of {cutoff.totalMarks}</span>
                </div>
                <div className="cutoff-categories">
                  <div className="cutoff-item">
                    <span className="category">General</span>
                    <span className="marks">{cutoff.general}</span>
                  </div>
                  {cutoff.obc && (
                    <div className="cutoff-item">
                      <span className="category">OBC</span>
                      <span className="marks">{cutoff.obc}</span>
                    </div>
                  )}
                  {cutoff.sc && (
                    <div className="cutoff-item">
                      <span className="category">SC</span>
                      <span className="marks">{cutoff.sc}</span>
                    </div>
                  )}
                  {cutoff.st && (
                    <div className="cutoff-item">
                      <span className="category">ST</span>
                      <span className="marks">{cutoff.st}</span>
                    </div>
                  )}
                  {cutoff.pwd && (
                    <div className="cutoff-item">
                      <span className="category">PWD</span>
                      <span className="marks">{cutoff.pwd}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="data-source-footer">
        <div className="source-info">
          <Info size={12} />
          <span>Data Source: {exam.dataStatus.dataSource}</span>
        </div>
        <div className="last-updated">
          <span>Last Updated: {format(parseISO(exam.dataStatus.lastUpdated), 'MMM dd, yyyy')}</span>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
