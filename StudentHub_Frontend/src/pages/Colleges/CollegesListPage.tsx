import { useMemo, useState, useCallback } from "react";
import CollegeCard from "../../components/CollegeCard";
import FiltersSidebar from "../../components/FiltersSidebar";
import { colleges } from "../../data/colleges";

const PAGE_SIZE = 20;

export default function CollegesListPage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    states: [] as string[],
    streams: [] as string[],
    nirfMin: null as number | null,
    nirfMax: null as number | null,
    feesMin: null as number | null,
    feesMax: null as number | null,
  });
  const [page, setPage] = useState(1);

  const states = useMemo(() => Array.from(new Set(colleges.map((c) => c.state))).sort(), []);
  const streams = useMemo(() => Array.from(new Set(colleges.map((c) => c.stream))).sort(), []);

  const filtered = useMemo(() => {
    let list = colleges;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    if (filters.states.length) {
      list = list.filter((c) => filters.states.includes(c.state));
    }
    if (filters.streams.length) {
      list = list.filter((c) => filters.streams.includes(c.stream));
    }
    if (filters.nirfMin !== null) {
      list = list.filter((c) => c.nirfRank >= (filters.nirfMin as number));
    }
    if (filters.nirfMax !== null) {
      list = list.filter((c) => c.nirfRank <= (filters.nirfMax as number));
    }
    if (filters.feesMin !== null) {
      list = list.filter((c) => c.feesRangeLpa[0] >= (filters.feesMin as number));
    }
    if (filters.feesMax !== null) {
      list = list.filter((c) => c.feesRangeLpa[1] <= (filters.feesMax as number));
    }
    return list;
  }, [query, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFiltersChange = useCallback((f: {
    states: string[];
    streams: string[];
    nirfMin: number | null;
    nirfMax: number | null;
    feesMin: number | null;
    feesMax: number | null;
  }) => {
    setFilters(f);
    setPage(1);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <FiltersSidebar states={states} streams={streams} onChange={handleFiltersChange} />
      </div>
      <div className="md:col-span-3">
        <div className="mb-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search colleges by name..."
            className="flex-1 border rounded-lg p-2"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageItems.map((c) => (
            <CollegeCard key={c.id} college={c} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="text-sm">Page {page} of {totalPages}</span>
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}


