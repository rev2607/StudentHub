import { useState } from "react";

type FAQ = { question: string; answer: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y rounded-xl border bg-white">
      {faqs.map((f, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left px-4 py-3 flex justify-between items-center"
            onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
          >
            <span className="font-medium">{f.question}</span>
            <span className="text-gray-500">{openIndex === idx ? "-" : "+"}</span>
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-4 text-sm text-gray-700">{f.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}


