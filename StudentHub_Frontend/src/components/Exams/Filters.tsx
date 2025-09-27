import React from "react";

interface FiltersProps {
  onChange: (filters: { stream: string }) => void;
  value: { stream: string };
}

const streams = ["Engineering", "Medical", "Agriculture", "Law"]; 
function Filters({ onChange, value }: FiltersProps) {
  const update = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ stream: e.target.value });
  };

  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600">
        Stream
        <select className="mt-1 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300" value={value.stream} onChange={update}>
          <option value="">All</option>
          {streams.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
    </div>
  );
}

export default Filters;


