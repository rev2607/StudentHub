function ToolsWidgets() {
  const tools = [
    { title: 'College Predictor', href: '/tools/college-predictor' },
    { title: 'Rank Predictor', href: '/tools/rank-predictor' },
    { title: 'Compare Exams', href: '/tools/compare-exams' },
  ];
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold text-[#262443] mb-3">Interactive Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tools.map(t => (
          <a key={t.title} href={t.href} className="block border border-gray-200 rounded-lg p-4 hover:shadow transition">
            <div className="text-[#262443] font-semibold">{t.title}</div>
            <div className="text-sm text-gray-500">Try now →</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ToolsWidgets;


