interface RecommendedItem {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
}

interface DashboardProps {
  recommendedExams: RecommendedItem[];
  recommendedColleges: RecommendedItem[];
}

function Dashboard({ recommendedExams, recommendedColleges }: DashboardProps) {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-r from-[#e6f4d7] to-white border border-[#d8e8c2] rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#262443]">Your Exams Dashboard</h2>
            <p className="text-gray-600 mt-1">Personalized picks based on popular choices</p>
          </div>
          <div className="flex gap-2">
            <a href="/profile/edit" className="px-4 py-2 rounded-md bg-[#7bb53a] text-[#262443] font-semibold shadow hover:bg-[#6ea834] transition">Update Preferences</a>
            <a href="/mock-tests" className="px-4 py-2 rounded-md border border-[#7bb53a] text-[#2c3e20] font-semibold hover:bg-white transition">Take Mock Test</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-[#262443] mb-3">Recommended Exams</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendedExams.map(item => (
                <a key={item.id} href={item.href} className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow transition">
                  <div className="text-sm text-gray-500">Exam</div>
                  <div className="text-[#262443] font-semibold">{item.title}</div>
                  {item.subtitle && <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div>}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#262443] mb-3">Recommended Colleges</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendedColleges.map(item => (
                <a key={item.id} href={item.href} className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow transition">
                  <div className="text-sm text-gray-500">College</div>
                  <div className="text-[#262443] font-semibold">{item.title}</div>
                  {item.subtitle && <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;


