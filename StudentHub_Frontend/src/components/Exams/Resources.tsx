interface Resource { id: string; title: string; href: string }

interface ResourcesProps {
  mockTests: Resource[];
  downloads: Resource[];
  stats: { label: string; value: string }[];
}

function Resources({ mockTests, downloads, stats }: ResourcesProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold text-[#262443] mb-3">Mock Tests</h3>
        <ul className="space-y-2">
          {mockTests.map(m => (
            <li key={m.id}><a className="text-[#2c6e49] hover:underline" href={m.href}>{m.title}</a></li>
          ))}
        </ul>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold text-[#262443] mb-3">Study Resources</h3>
        <ul className="space-y-2">
          {downloads.map(d => (
            <li key={d.id}><a className="text-[#2c6e49] hover:underline" href={d.href}>{d.title}</a></li>
          ))}
        </ul>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold text-[#262443] mb-3">Applicant Trends</h3>
        <ul className="space-y-2">
          {stats.map(s => (
            <li key={s.label} className="flex items-center justify-between">
              <span className="text-gray-700">{s.label}</span>
              <span className="text-sm text-gray-500">{s.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resources;


