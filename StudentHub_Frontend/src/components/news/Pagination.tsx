type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function Pagination({ page, totalPages, onPrev, onNext }: Props) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button className="px-3 py-1 rounded border" disabled={page <= 1} onClick={onPrev}>Prev</button>
      <div className="text-sm">Page {page} of {totalPages}</div>
      <button className="px-3 py-1 rounded border" disabled={page >= totalPages} onClick={onNext}>Next</button>
    </div>
  );
}


