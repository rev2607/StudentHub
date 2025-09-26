interface ExamCardProps {
  title: string;
  code: string; // route code e.g., 'eamcet'
  latestNotice?: string;
  admitCardLink?: string;
  nextDate?: string;
  eligibility?: string;
  stateLabel?: string; // kept optional but no longer required
  level?: string; // kept optional but no longer required
  applicationLink?: string;
  syllabusLink?: string;
  resultsLink?: string;
  counsellingLink?: string;
  onViewDetails?: (examCode: string) => void;
}

function ExamCard({ title, code, latestNotice, admitCardLink, nextDate, eligibility, stateLabel, level, applicationLink, syllabusLink, resultsLink, counsellingLink, onViewDetails }: ExamCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-[#262443]">{title}</h4>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            {eligibility && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#eef2ff] text-[#374151] border border-[#e5e7eb]">Eligibility: {eligibility}</span>}
            {level && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f0f7e8] text-[#2c3e20] border border-[#d8e8c2]">{level}</span>}
            {stateLabel && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f8fafc] text-gray-600 border border-gray-200">{stateLabel}</span>}
          </div>
          {nextDate && <div className="text-xs text-gray-500 mt-1">Next important date: {nextDate}</div>}
        </div>
        <button
          onClick={() => onViewDetails?.(code)}
          className="text-sm px-3 py-1 rounded-md bg-[#7bb53a] text-[#262443] font-semibold shadow hover:bg-[#6ea834] transition"
        >
          View
        </button>
      </div>

      {latestNotice && (
        <div className="mt-3 text-sm text-[#2c3e20] bg-[#f3f8ec] border border-[#e1f0d1] rounded p-2">
          <span className="font-medium">Latest:</span> {latestNotice}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
        <a href={syllabusLink || `/exams/${code}#syllabus`} className="text-sm text-[#2c6e49] hover:underline">Syllabus</a>
        <a href={applicationLink || `/exams/${code}#application`} className="text-sm text-[#2c6e49] hover:underline">Application</a>
        <a href={resultsLink || `/exams/${code}#results`} className="text-sm text-[#2c6e49] hover:underline">Results</a>
        <a href={counsellingLink || `/exams/${code}#counselling`} className="text-sm text-[#2c6e49] hover:underline">Counseling</a>
        <a href={`/exams/${code}#papers`} className="text-sm text-[#2c6e49] hover:underline">Previous Papers</a>
        {admitCardLink ? (
          <a href={admitCardLink} className="text-sm text-[#2c6e49] hover:underline">Admit Card</a>
        ) : (
          <span className="text-sm text-gray-400">Admit Card: NA</span>
        )}
      </div>
    </div>
  );
}

export default ExamCard;


