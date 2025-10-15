// import React from "react";
import vitLogo from "../../../../src/assets/vit_logo.png";

const colleges = [
  { rank: 1,  logo: vitLogo, name: "Birla Institute of Technology and Science (BITS) Pilani", nirf: 11, average: "₹18–25 LPA", highest: "₹60+ LPA", naac: "A+" },
  { rank: 2,  logo: vitLogo, name: "Vellore Institute of Technology (VIT) Vellore",           nirf: 16, average: "₹9–12 LPA", highest: "₹75 LPA", naac: "A+" },
  { rank: 3,  logo: vitLogo, name: "SRM Institute of Science and Technology Chennai",        nirf: 14, average: "₹6–9 LPA", highest: "₹45–50 LPA", naac: "A" },
  { rank: 4,  logo: vitLogo, name: "Thapar Institute of Engineering and Technology",         nirf: 29, average: "₹7–9 LPA", highest: "₹20–25 LPA", naac: "A" },
  { rank: 5,  logo: vitLogo, name: "Amrita Vishwa Vidyapeetham",                            nirf: 23, average: "₹6–8 LPA", highest: "₹20–22 LPA", naac: "A+" },
  { rank: 6,  logo: vitLogo, name: "Siksha 'O' Anusandhan (SOA), Bhubaneswar",              nirf: 22, average: "₹5–7 LPA", highest: "₹12–15 LPA", naac: "A" },
  { rank: 7,  logo: vitLogo, name: "Amity University, Noida",                               nirf: 37, average: "₹5–6 LPA", highest: "₹10–12 LPA", naac: "A" },
  { rank: 8,  logo: vitLogo, name: "Chandigarh University",                                 nirf: 32, average: "₹5–6 LPA", highest: "₹10–12 LPA", naac: "A" },
  { rank: 9,  logo: vitLogo, name: "Koneru Lakshmaiah Education Foundation (KL University)", nirf: 35, average: "₹4–6 LPA", highest: "₹10–12 LPA", naac: "A" },
  { rank: 10, logo: vitLogo, name: "Kalasalingam Academy of Research and Education",         nirf: 36, average: "₹4–5 LPA", highest: "₹10 LPA", naac: "A" },
];

// Helper to interpolate between two colors
function interpolateColor(color1: number[], color2: number[], factor: number) {
  return color1.map((c1, i) => Math.round(c1 + (color2[i] - c1) * factor));
}

// Green: #22c55e (34,197,94), Dark Gray: #22292f (34,41,47)
const GREEN = [140, 197, 66]; // #8cc542
const DARK_GRAY = [34, 41, 47];

function getGradientBorder(rank: number) {
  // rank 1 => 0, rank 10 => 1
  const t = (rank - 1) / 9;
  const [r, g, b] = interpolateColor(GREEN, DARK_GRAY, t);
  return `rgb(${r},${g},${b})`;
}

const TrendingCollegesPackages = () => {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#22314A]">
          Trending Private Colleges With Highest Packages & Placements
        </h2>
        <div className="flex flex-col gap-4">
          {colleges.map((college, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={college.rank}
                className="grid grid-cols-1 md:grid-cols-[1fr_min-content_1fr] items-center gap-0 md:gap-4"
              >
                {/* Left details (odd rows) */}
                <div className={`hidden md:block ${isEven ? '' : ''} text-right`}>
                  {!isEven && (
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1 text-[#22314A]">{college.name}</h3>
                      <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">NIRF Ranking:</span> {college.nirf}</div>
                      <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">NAAC Grade:</span> {college.naac}</div>
                      <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">Highest Package:</span> {college.highest}</div>
                      <div className="text-xs md:text-sm text-gray-700"><span className="font-semibold">Average Package:</span> {college.average}</div>
                      <div className="h-1 w-16 bg-[var(--site-green)] mt-2 ml-auto rounded" />
                    </div>
                  )}
                </div>
                {/* Center: logo and number */}
                <div className="flex flex-col items-center justify-center relative">
                  <div
                    className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4"
                    style={{ borderColor: getGradientBorder(college.rank) }}
                  >
                    <img src={college.logo} alt="College Logo" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover" />
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-base font-extrabold shadow bg-white border-4 border-white z-20" style={{ background: getGradientBorder(college.rank), color: '#fff' }}>{college.rank}</span>
                </div>
                {/* Right details (even rows) */}
                <div className={`hidden md:block ${isEven ? '' : ''} text-left`}>
                  {isEven && (
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1 text-[#22314A]">{college.name}</h3>
                      <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">NIRF Ranking:</span> {college.nirf}</div>
                      <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">NAAC Grade:</span> {college.naac}</div>
                      <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">Highest Package:</span> {college.highest}</div>
                      <div className="text-xs md:text-sm text-gray-700"><span className="font-semibold">Average Package:</span> {college.average}</div>
                      <div className="h-1 w-16 bg-[var(--site-green)] mt-2 rounded" />
                    </div>
                  )}
                </div>
                {/* Mobile: always show details below icon */}
                <div className="block md:hidden mt-6 text-center">
                  <h3 className="font-bold text-base md:text-lg mb-1 text-[#22314A]">{college.name}</h3>
                  <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">NIRF Ranking:</span> {college.nirf}</div>
                  <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">NAAC Grade:</span> {college.naac}</div>
                  <div className="text-xs md:text-sm text-gray-700 mb-1"><span className="font-semibold">Highest Package:</span> {college.highest}</div>
                  <div className="text-xs md:text-sm text-gray-700"><span className="font-semibold">Average Package:</span> {college.average}</div>
                  <div className="h-1 w-16 bg-[var(--site-green)] mt-2 mx-auto rounded" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollegesPackages; 