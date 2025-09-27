function SidebarQuickLinks() {
  const links = [
    { title: 'Exam Calendar', href: '/exams#calendar' },
    { title: 'Previous Year Papers', href: '/exams#papers' },
    { title: 'Answer Keys', href: '/exams#answer-keys' },
    { title: 'Video Counseling', href: '/exams#videos' },
  ];
  return (
    <aside className="bg-white border border-gray-200 rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold text-[#262443] mb-3">Quick Links</h3>
      <ul className="space-y-2">
        {links.map(l => (
          <li key={l.title}>
            <a href={l.href} className="text-[#2c6e49] hover:underline">{l.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SidebarQuickLinks;


