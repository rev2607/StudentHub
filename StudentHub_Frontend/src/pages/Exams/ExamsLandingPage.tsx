import { Link } from "react-router-dom";
import { examsList } from "../../data/exams";

export default function ExamsLandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Entrance Exams</h1>
      <p className="text-gray-600 mb-8">Explore major entrance exams in India. Click an exam to view detailed information, eligibility, dates, syllabus, pattern, and FAQs.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {examsList.map((exam) => (
          <div key={exam.slug} className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-5 flex flex-col">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{exam.name}</h2>
            <p className="text-sm text-gray-600 flex-1">{exam.shortIntro}</p>
            <div className="mt-4">
              <Link
                to={`/exams/${exam.slug}`}
                className="inline-block px-4 py-2 rounded-lg bg-[var(--site-blue,#2563eb)] text-white hover:bg-blue-700 text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


