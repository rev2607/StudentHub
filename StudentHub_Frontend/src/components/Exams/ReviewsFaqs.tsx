interface Review { id: string; user: string; rating: number; text: string }
interface Faq { id: string; q: string; a: string }

interface ReviewsFaqsProps {
  reviews: Review[];
  faqs: Faq[];
}

function ReviewsFaqs({ reviews, faqs }: ReviewsFaqsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold text-[#262443] mb-3">Student Reviews</h3>
        <ul className="space-y-3">
          {reviews.map(r => (
            <li key={r.id} className="border border-gray-200 rounded p-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#262443]">{r.user}</span>
                <span className="text-sm text-[#7bb53a]">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="text-lg font-semibold text-[#262443] mb-3">FAQs</h3>
        <div className="divide-y divide-gray-200">
          {faqs.map(f => (
            <details key={f.id} className="py-2">
              <summary className="cursor-pointer text-[#2c6e49] font-medium">{f.q}</summary>
              <p className="text-sm text-gray-700 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsFaqs;


