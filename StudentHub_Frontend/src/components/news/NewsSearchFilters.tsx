type Props = {
  q: string;
  onQChange: (value: string) => void;
  selectedExams: string[];
  onToggleExam: (tag: string) => void;
  onClear: () => void;
};

const DEFAULT_TAGS = ["JEE Main", "JEE Advanced", "NEET", "EAMCET"];

export default function NewsSearchFilters({ q, onQChange, selectedExams, onToggleExam, onClear }: Props) {
  return (
    <div className="flex justify-end">
      <div className="flex flex-wrap gap-2">
        {DEFAULT_TAGS.map((tag) => {
          const active = selectedExams.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onToggleExam(tag)}
              className={`px-3 py-1 rounded-full border text-sm ${active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-50'}`}
            >
              {tag}
            </button>
          );
        })}
      </div>
      {selectedExams.length > 0 && (
        <button className="ml-3 text-sm text-blue-600" onClick={onClear}>Clear all</button>
      )}
    </div>
  );
}


