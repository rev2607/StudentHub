import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FAQAccordion from "../../components/FAQAccordion";
import { examsDetails } from "../../data/exams";

type SectionKey =
  | "overview"
  | "eligibility"
  | "dates"
  | "documents"
  | "pattern"
  | "syllabus"
  | "centres"
  | "cutoffs"
  | "process"
  | "contact"
  | "faqs"
  | "links";

export default function ExamDetailPage() {
  const { slug } = useParams();
  const exam = slug ? examsDetails[slug] : undefined;

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    overview: true,
    eligibility: true,
    dates: true,
    documents: true,
    pattern: true,
    syllabus: true,
    centres: true,
    cutoffs: true,
    process: true,
    contact: true,
    faqs: true,
    links: true,
  });

  const sectionClass = "bg-white rounded-xl border shadow-sm";

  const toggle = (key: SectionKey) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const notFound = useMemo(() => !exam, [exam]);

  if (notFound) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-2">Exam not found</h1>
        <p className="text-gray-600 mb-6">We couldn't find the exam you were looking for.</p>
        <Link to="/exams" className="text-[var(--site-blue,#2563eb)] hover:underline">Back to Exams</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/exams" className="text-sm text-[var(--site-blue,#2563eb)] hover:underline">← All Exams</Link>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{exam.name}</h1>
      <p className="text-gray-600 mt-2">{exam.fullName}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <section className={sectionClass}>
            <button onClick={() => toggle("overview")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Overview</h2>
              <span className="text-gray-500">{openSections.overview ? "-" : "+"}</span>
            </button>
            {openSections.overview && (
              <div className="px-5 pb-5 text-sm text-gray-700 space-y-3">
                <p>{exam.introduction}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <InfoRow label="Short Name" value={exam.shortName} />
                  <InfoRow label="Conducting Body" value={exam.conductingBody} />
                  <InfoRow label="Frequency" value={exam.frequency} />
                  <InfoRow label="Level" value={exam.level} />
                  <InfoRow label="Language" value={exam.language} />
                  <InfoRow label="Application Fee" value={formatFee(exam.applicationFee)} />
                  <InfoRow label="Duration" value={`${exam.durationMinutes} minutes`} />
                  <InfoRow label="Mode of Application" value={exam.modeOfApplication} />
                  <InfoRow label="Mode of Exam" value={exam.modeOfExam} />
                  {exam.modeOfCounselling && (
                    <InfoRow label="Mode of Counselling" value={exam.modeOfCounselling} />
                  )}
                  <InfoRow label="Participating Colleges" value={String(exam.participatingColleges)} />
                </div>
              </div>
            )}
          </section>

          {/* Eligibility & Application */}
          <section className={sectionClass}>
            <button onClick={() => toggle("eligibility")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Eligibility & Application Procedure</h2>
              <span className="text-gray-500">{openSections.eligibility ? "-" : "+"}</span>
            </button>
            {openSections.eligibility && (
              <div className="px-5 pb-5 text-sm text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Eligibility</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {exam.eligibility.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Application Procedure</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {exam.applicationProcedure.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Important Dates */}
          <section className={sectionClass}>
            <button onClick={() => toggle("dates")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Important Dates (2026)</h2>
              <span className="text-gray-500">{openSections.dates ? "-" : "+"}</span>
            </button>
            {openSections.dates && (
              <div className="px-5 pb-5 text-sm text-gray-700">
                <ul className="space-y-2">
                  {exam.importantDates.map((d, idx) => (
                    <li key={idx} className="flex justify-between border-b py-2">
                      <span className="font-medium">{d.label}</span>
                      <span>{d.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Documents Required */}
          <section className={sectionClass}>
            <button onClick={() => toggle("documents")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Documents Required</h2>
              <span className="text-gray-500">{openSections.documents ? "-" : "+"}</span>
            </button>
            {openSections.documents && (
              <div className="px-5 pb-5 text-sm text-gray-700">
                <ul className="list-disc pl-5 space-y-1">
                  {exam.documentsRequired.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Exam Pattern */}
          <section className={sectionClass}>
            <button onClick={() => toggle("pattern")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Exam Pattern</h2>
              <span className="text-gray-500">{openSections.pattern ? "-" : "+"}</span>
            </button>
            {openSections.pattern && (
              <div className="px-5 pb-5 text-sm text-gray-700 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <InfoRow label="Duration" value={`${exam.examPattern.durationMinutes} minutes`} />
                  <InfoRow label="Mode" value={exam.examPattern.modeOfExam} />
                  {exam.examPattern.totalMarks !== undefined && (
                    <InfoRow label="Total Marks" value={String(exam.examPattern.totalMarks)} />
                  )}
                  {exam.examPattern.negativeMarking && (
                    <InfoRow label="Negative Marking" value={exam.examPattern.negativeMarking} />
                  )}
                </div>
                <div>
                  <h3 className="font-medium mb-2">Sections</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {exam.examPattern.sections.map((s, idx) => (
                      <li key={idx}>
                        <span className="font-medium">{s.name}</span>
                        {s.questions ? ` • ${s.questions} questions` : ""}
                        {s.marks ? ` • ${s.marks} marks` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Syllabus */}
          <section className={sectionClass}>
            <button onClick={() => toggle("syllabus")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Syllabus</h2>
              <span className="text-gray-500">{openSections.syllabus ? "-" : "+"}</span>
            </button>
            {openSections.syllabus && (
              <div className="px-5 pb-5 text-sm text-gray-700 space-y-3">
                {exam.syllabus.map((sec, idx) => (
                  <div key={idx}>
                    <h3 className="font-medium">{sec.section}</h3>
                    <p className="text-gray-700">{sec.topics.join(", ")}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Exam Centres */}
          <section className={sectionClass}>
            <button onClick={() => toggle("centres")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Exam Centres</h2>
              <span className="text-gray-500">{openSections.centres ? "-" : "+"}</span>
            </button>
            {openSections.centres && (
              <div className="px-5 pb-5 text-sm text-gray-700">
                <p className="mb-2">Total Centres: {exam.examCentres.count}</p>
                <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-y-1">
                  {exam.examCentres.centres.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Cutoffs & Counselling */}
          <section className={sectionClass}>
            <button onClick={() => toggle("cutoffs")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Cutoffs & Counselling</h2>
              <span className="text-gray-500">{openSections.cutoffs ? "-" : "+"}</span>
            </button>
            {openSections.cutoffs && (
              <div className="px-5 pb-5 text-sm text-gray-700">
                <ul className="list-disc pl-5 space-y-1">
                  {exam.cutoffsAndCounselling.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Slot booking, Admit card, Results */}
          <section className={sectionClass}>
            <button onClick={() => toggle("process")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Slot Booking, Admit Card & Results</h2>
              <span className="text-gray-500">{openSections.process ? "-" : "+"}</span>
            </button>
            {openSections.process && (
              <div className="px-5 pb-5 text-sm text-gray-700">
                <ul className="list-disc pl-5 space-y-1">
                  {exam.slotAdmitResults.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Official Links */}
          <section className={sectionClass}>
            <button onClick={() => toggle("links")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Official Links</h2>
              <span className="text-gray-500">{openSections.links ? "-" : "+"}</span>
            </button>
            {openSections.links && (
              <div className="px-5 pb-5 text-sm text-gray-700 space-y-2">
                {exam.officialLinks.map((l, idx) => (
                  <a key={idx} href={l.url} target="_blank" rel="noreferrer" className="block text-[var(--site-blue,#2563eb)] hover:underline">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </section>

          {/* Contact */}
          <section className={sectionClass}>
            <button onClick={() => toggle("contact")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Contact</h2>
              <span className="text-gray-500">{openSections.contact ? "-" : "+"}</span>
            </button>
            {openSections.contact && (
              <div className="px-5 pb-5 text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Phone:</span> {exam.contact.phone}</p>
                <p><span className="font-medium">Email:</span> {exam.contact.email}</p>
                <p><span className="font-medium">Address:</span> {exam.contact.address}</p>
              </div>
            )}
          </section>

          {/* FAQs */}
          <section className={sectionClass}>
            <button onClick={() => toggle("faqs")} className="w-full text-left px-5 py-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">FAQs</h2>
              <span className="text-gray-500">{openSections.faqs ? "-" : "+"}</span>
            </button>
            {openSections.faqs && (
              <div className="px-5 pb-5">
                <FAQAccordion faqs={exam.faqs} />
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between gap-4 py-1 border-b">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-900 text-right">{value}</span>
    </div>
  );
}

function formatFee(fee: { [k: string]: number | string }) {
  const parts: string[] = [];
  for (const key of Object.keys(fee)) {
    if (key === "currency") continue;
    const val = fee[key];
    if (typeof val === "number") parts.push(`${key.toUpperCase()}: ${val} ${fee.currency}`);
  }
  return parts.join(" • ");
}


