import { useState, useEffect } from "react";

type Props = {
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
};

export default function FiltersSidebar({ states, streams, onChange }: Props) {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
  const [nirfMin, setNirfMin] = useState<string>("");
  const [nirfMax, setNirfMax] = useState<string>("");
  const [feesMin, setFeesMin] = useState<string>("");
  const [feesMax, setFeesMax] = useState<string>("");

  useEffect(() => {
    onChange({
      states: selectedStates,
      streams: selectedStreams,
      nirfMin: nirfMin ? Number(nirfMin) : null,
      nirfMax: nirfMax ? Number(nirfMax) : null,
      feesMin: feesMin ? Number(feesMin) : null,
      feesMax: feesMax ? Number(feesMax) : null,
    });
  }, [selectedStates, selectedStreams, nirfMin, nirfMax, feesMin, feesMax, onChange]);

  return (
    <aside className="bg-white rounded-xl shadow p-4 w-full">
      <h4 className="font-semibold mb-3">Filters</h4>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">State</div>
        <div className="space-y-1 max-h-40 overflow-auto pr-1">
          {states.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="rounded"
                checked={selectedStates.includes(s)}
                onChange={(e) =>
                  setSelectedStates((prev) =>
                    e.target.checked ? [...prev, s] : prev.filter((x) => x !== s)
                  )
                }
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">Stream</div>
        <div className="space-y-1">
          {streams.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="rounded"
                checked={selectedStreams.includes(s)}
                onChange={(e) =>
                  setSelectedStreams((prev) =>
                    e.target.checked ? [...prev, s] : prev.filter((x) => x !== s)
                  )
                }
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-1">NIRF Rank Range</div>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min" className="w-20 border rounded p-1" value={nirfMin} onChange={(e) => setNirfMin(e.target.value)} />
          <span className="text-gray-500">-</span>
          <input type="number" placeholder="Max" className="w-20 border rounded p-1" value={nirfMax} onChange={(e) => setNirfMax(e.target.value)} />
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-600 mb-1">Fees Range (LPA)</div>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min" className="w-20 border rounded p-1" value={feesMin} onChange={(e) => setFeesMin(e.target.value)} />
          <span className="text-gray-500">-</span>
          <input type="number" placeholder="Max" className="w-20 border rounded p-1" value={feesMax} onChange={(e) => setFeesMax(e.target.value)} />
        </div>
      </div>
    </aside>
  );
}


