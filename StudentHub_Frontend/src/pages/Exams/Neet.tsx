function Neet() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-semibold text-[#262443] mb-4">NEET - Overview</h2>
      <div className="space-y-3 text-gray-700">
        <p>
          NEET is the national medical entrance examination for admissions to MBBS, BDS, and AYUSH programs across India.
        </p>
        <ul className="list-disc ml-6">
          <li><span className="font-medium">Eligibility</span>: 10+2 with PCB, age and attempt guidelines as per NMC/NTA.</li>
          <li><span className="font-medium">Exam Pattern</span>: Objective questions in Physics, Chemistry, Biology.</li>
          <li><span className="font-medium">Counselling</span>: All India Quota and state-level counselling processes.</li>
        </ul>
        <p className="text-sm text-gray-500">Next, we'll plug in preparation plans, PYQs, and practice tests.</p>
      </div>
    </section>
  );
}

export default Neet;


