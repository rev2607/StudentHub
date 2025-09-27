function JeeMain() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-semibold text-[#262443] mb-4">JEE Main - Overview</h2>
      <div className="space-y-3 text-gray-700">
        <p>
          JEE Main is a national-level entrance exam for admission to NITs, IIITs, and other centrally funded institutions.
        </p>
        <ul className="list-disc ml-6">
          <li><span className="font-medium">Eligibility</span>: 10+2 with PCM, attempts and age rules as per NTA.</li>
          <li><span className="font-medium">Exam Pattern</span>: Objective questions in Physics, Chemistry, Mathematics.</li>
          <li><span className="font-medium">Sessions</span>: Typically conducted in multiple sessions each year.</li>
        </ul>
        <p className="text-sm text-gray-500">Detailed syllabus mapping, weightage charts, and PYQ links coming next.</p>
      </div>
    </section>
  );
}

export default JeeMain;


