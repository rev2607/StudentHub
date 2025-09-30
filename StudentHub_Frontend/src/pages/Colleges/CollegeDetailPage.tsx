import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Users, GraduationCap, Phone, Mail, Globe, Calendar, Award } from 'lucide-react';
import { colleges } from "../../data/colleges";
import FAQAccordion from "../../components/FAQAccordion";

const CollegeDetailPage = () => {
  const { slug } = useParams();
  const college = useMemo(() => colleges.find((c) => c.slug === slug), [slug]);

  useEffect(() => {
    if (college) {
      document.title = `${college.name} | Colleges | StudentHub`;
      const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", `${college.name} - NIRF ${college.nirfRank}, NAAC ${college.naacGrade}, ${college.location}`);
      document.head.appendChild(meta);
    }
  }, [college]);

  if (!college) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <p className="text-gray-600">College not found.</p>
        <Link className="text-blue-600 underline" to="/colleges">Back to Colleges</Link>
      </div>
    );
  }

  return (
    <div key={slug}>
      {/* Hero */}
      <div className="relative h-56 md:h-72 w-full">
        <img src={college.heroImageUrl} alt={college.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end p-4 md:p-6">
          <div className="text-white">
            <div className="text-sm">Home / Colleges / {college.name}</div>
            <h1 className="text-2xl md:text-3xl font-bold mt-1">{college.name}</h1>
            <div className="mt-1 text-sm">{college.location}</div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 space-y-6">
        {/* Overview */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Info label="Established" value={college.establishmentYear} />
            <Info label="NIRF Rank" value={college.nirfRank} />
            <Info label="NAAC Grade" value={college.naacGrade} />
            <Info label="Campus Area" value={`${college.campusAreaAcres} acres`} />
            <Info label="Highest Package" value={`${college.highestPackageLpa} LPA`} />
          </div>
          <p className="text-gray-700 mt-3 text-sm">{college.overview}</p>
        </section>

        {/* Courses & Streams */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Courses & Streams</h2>
          {college.coursesOfferedCount && (
            <div className="text-sm text-gray-700 mb-3">
              <span className="font-medium">No. of Courses:</span> {college.coursesOfferedCount}
              {college.streamsOffered && (
                <span className="ml-3"><span className="font-medium">Streams:</span> {college.streamsOffered.join(", ")}</span>
              )}
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-2">Program</th>
                  <th className="p-2">Eligibility</th>
                  <th className="p-2">Duration</th>
                  <th className="p-2">Intake</th>
                  <th className="p-2">Fees/Year</th>
                </tr>
              </thead>
              <tbody>
                {college.programs.map((p, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2">{p.name}</td>
                    <td className="p-2">{p.eligibility}</td>
                    <td className="p-2">{p.durationYears} years</td>
                    <td className="p-2">{p.intake}</td>
                    <td className="p-2">{p.feesPerYearLpa} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm text-gray-700">
            {college.careerOpportunities && (
              <div>
                <h3 className="font-semibold mb-2">Career Opportunities</h3>
                <ul className="list-disc ml-6 space-y-1">
                  {college.careerOpportunities.map((c, i) => (<li key={i}>{c}</li>))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="font-semibold mb-2">Intake & Students</h3>
              <div>Approved Intake: {college.approvedIntakeTotal || "—"}</div>
              <div>Total Students: {college.totalStudents || "—"}</div>
            </div>
          </div>
        </section>

        {/* Placement Stats */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Placement Stats</h2>
          {college.packagesSummary && (
            <div className="mb-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <Info label="Average" value={`${college.packagesSummary.averageLpa} LPA`} />
              {college.packagesSummary.medianLpa && <Info label="Median" value={`${college.packagesSummary.medianLpa} LPA`} />}
              <Info label="Highest" value={`${college.packagesSummary.highestLpa} LPA`} />
              {college.studentsPlacedLastYear && <Info label="Students Placed (Last Year)" value={college.studentsPlacedLastYear} />}
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-2">Year</th>
                  <th className="p-2">% Placed</th>
                  <th className="p-2">Highest</th>
                  <th className="p-2">Average</th>
                  <th className="p-2">Top Recruiters</th>
                </tr>
              </thead>
              <tbody>
                {college.placementStats.map((s) => (
                  <tr key={s.year} className="border-t">
                    <td className="p-2">{s.year}</td>
                    <td className="p-2">{s.percentPlaced}%</td>
                    <td className="p-2">{s.highestPackageLpa} LPA</td>
                    <td className="p-2">{s.averagePackageLpa} LPA</td>
                    <td className="p-2">{s.topRecruiters.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {college.topRecruitersOverall && (
            <div className="mt-3 text-sm text-gray-700">
              <span className="font-medium">Top Recruiters:</span> {college.topRecruitersOverall.join(", ")}
            </div>
          )}
        </section>

        {/* Faculty Info */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Faculty Info</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <Info label="With PhD" value={college.facultyInfo.withPhD} />
            <Info label="Without PhD" value={college.facultyInfo.withoutPhD} />
            <Info label="Faculty:Student" value={college.facultyInfo.facultyStudentRatio} />
          </div>
        </section>

        {/* Student Demographics */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Student Demographics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <Info label="Outside State" value={`${college.studentDemographics.outsideStatePercent}%`} />
            <Info label="Within State" value={`${college.studentDemographics.withinStatePercent}%`} />
            <Info label="Boys" value={`${college.studentDemographics.boysPercent}%`} />
            <Info label="Girls" value={`${college.studentDemographics.girlsPercent}%`} />
          </div>
        </section>

        {/* Hostel & Facilities */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Hostel & Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <Info label="Hostel Fees/Year" value={`${college.hostelFacilities.hostelFeesPerYear} LPA`} />
            <Info label="Hostel Capacity" value={college.hostelFacilities.hostelCapacity} />
            <Info label="Library Books" value={college.hostelFacilities.libraryBooksCount} />
          </div>
          <div className="mt-2 text-sm text-gray-700">
            <div><span className="font-medium">Sports:</span> {college.hostelFacilities.sportsFacilities.join(", ")}</div>
            <div><span className="font-medium">Labs:</span> {college.hostelFacilities.labs.join(", ")}</div>
          </div>
        </section>

        {/* Expenditure & Outcomes */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Expenditure & Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <Info label="Graduation %" value={`${college.expenditureOutcomes.graduationPercent}%`} />
            <Info label="Placement %" value={`${college.expenditureOutcomes.placementPercent}%`} />
            <Info label="Annual Capex" value={`${college.expenditureOutcomes.annualCapexCrore} Cr`} />
            <Info label="Annual Opex" value={`${college.expenditureOutcomes.annualOpexCrore} Cr`} />
          </div>
        </section>

        {/* Campus Life */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Campus Life</h2>
          <p className="text-sm text-gray-700">{college.campusLife.description}</p>
          <div className="mt-2 text-sm">
            <div><span className="font-medium">Hangout Spots:</span> {college.campusLife.hangoutSpots.join(", ")}</div>
            <div><span className="font-medium">Cultural Events:</span> {college.campusLife.culturalEvents.join(", ")}</div>
            <div><span className="font-medium">Hackathons:</span> {college.campusLife.hackathons.join(", ")}</div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Why Choose</h2>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            {college.whyChoose.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>

        {/* Extended Information */}
        {college.extended && (
          <section className="bg-white rounded-xl shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Rankings</h3>
                <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                  {college.extended.rankings.map((r, idx) => (
                    <li key={idx}>{r.framework} {r.year}: {r.rank}{r.note ? ` – ${r.note}` : ""}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Admissions</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><span className="font-medium">UG Exams:</span> {college.extended.admissions.ugEntranceExams.join(", ")}</div>
                  <div><span className="font-medium">PG Exams:</span> {college.extended.admissions.pgEntranceExams.join(", ")}</div>
                  <div>{college.extended.admissions.typicalCutoffsNote}</div>
                  <div>{college.extended.admissions.applicationProcess}</div>
                  <div className="text-gray-600">{college.extended.admissions.importantDatesNote}</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scholarships</h3>
                <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                  <li><span className="font-medium">Institute:</span> {college.extended.scholarships.institute.join(", ")}</li>
                  <li><span className="font-medium">Government:</span> {college.extended.scholarships.government.join(", ")}</li>
                  <li><span className="font-medium">Industry:</span> {college.extended.scholarships.industry.join(", ")}</li>
                </ul>
                <div className="text-xs text-gray-600 mt-1">{college.extended.scholarships.notes}</div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Research Centers</h3>
                <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                  {college.extended.researchCenters.map((c, idx) => (<li key={idx}>{c}</li>))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Collaborations</h3>
                <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                  {college.extended.collaborations.map((c, idx) => (<li key={idx}>{c}</li>))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Info label="Smart Classrooms" value={college.extended.infrastructure.classroomsSmartEnabled ? "Yes" : "No"} />
                  <Info label="Hostel Blocks" value={college.extended.infrastructure.hostelsBlocks} />
                  <Info label="Cafeterias" value={college.extended.infrastructure.cafeterias} />
                  <Info label="24x7 Medical" value={college.extended.infrastructure.medicalCenter24x7 ? "Yes" : "No"} />
                  <Info label="Auditoriums" value={college.extended.infrastructure.auditoriums} />
                  <Info label="Sports Complexes" value={college.extended.infrastructure.sportsComplexes} />
                  <Info label="Innovation Labs" value={college.extended.infrastructure.innovationLabs} />
                  <Info label="Digital Library Subs" value={college.extended.infrastructure.libraryDigitalSubscriptions} />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Clubs & Societies</h3>
                <div className="text-sm text-gray-700">{college.extended.clubsAndSocieties.join(", ")}</div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Notable Alumni</h3>
                <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                  {college.extended.notableAlumni.map((a, idx) => (<li key={idx}>{a}</li>))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Connectivity</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><span className="font-medium">Airport:</span> {college.extended.connectivity.nearestAirport}</div>
                  <div><span className="font-medium">Railway:</span> {college.extended.connectivity.nearestRailway}</div>
                  <div><span className="font-medium">On-campus:</span> {college.extended.connectivity.campusTransport}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">FAQs</h2>
          <FAQAccordion faqs={college.faqs} />
        </section>

        {/* Contact */}
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <div className="text-sm text-gray-700 space-y-1">
            <div><span className="font-medium">Website:</span> <a className="text-blue-600 underline" href={college.contact.website} target="_blank" rel="noreferrer">{college.contact.website}</a></div>
            <div><span className="font-medium">Email:</span> {college.contact.email}</div>
            <div><span className="font-medium">Phone:</span> {college.contact.phone}</div>
            <div><span className="font-medium">Address:</span> {college.contact.address}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollegeDetailPage;

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="text-gray-500 text-xs">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
