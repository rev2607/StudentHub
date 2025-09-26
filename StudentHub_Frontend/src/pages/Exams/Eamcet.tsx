function Eamcet() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-semibold text-[#262443] mb-4">EAMCET - Overview</h2>
      <div className="space-y-3 text-gray-700">
        <p>
          EAMCET is conducted for admissions into Engineering, Agriculture, and Medical courses in Andhra Pradesh and Telangana.
        </p>
        <ul className="list-disc ml-6">
          <li><span className="font-medium">Eligibility</span>: 10+2 with relevant subjects, minimum percentage as per category.</li>
          <li><span className="font-medium">Exam Pattern</span>: Objective questions, Physics, Chemistry, Mathematics/Biology.</li>
          <li><span className="font-medium">Important Dates</span>: Application, admit card, exam, answer key, result.</li>
        </ul>
        <p className="text-sm text-gray-500">We will integrate official calendar, syllabus PDFs, and previous papers in the next iteration.</p>
      </div>
    </section>
  );
}

export default Eamcet;


