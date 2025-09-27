interface NewsItem { id: string; title: string; href: string; time?: string }
interface DateItem { id: string; label: string; date: string }

interface NewsDatesProps {
  news: NewsItem[];
  dates: DateItem[];
}

function NewsDates({ news, dates }: NewsDatesProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold text-[#262443] mb-3">Recent News</h3>
        <ul className="space-y-2">
          {news.map(n => (
            <li key={n.id} className="flex items-start justify-between gap-3">
              <a href={n.href} className="text-[#2c6e49] hover:underline">{n.title}</a>
              {n.time && <span className="text-xs text-gray-400 whitespace-nowrap">{n.time}</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold text-[#262443] mb-3">Important Dates</h3>
        <ul className="space-y-2">
          {dates.map(d => (
            <li key={d.id} className="flex items-center justify-between">
              <span className="text-gray-700">{d.label}</span>
              <span className="text-sm text-gray-500">{d.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NewsDates;


