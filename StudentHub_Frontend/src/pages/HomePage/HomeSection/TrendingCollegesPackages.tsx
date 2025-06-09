// import React from "react";
import vitLogo from "../../../../src/assets/vit_logo.png";

const colleges = [
  {
    rank: 1,
    logo: vitLogo,
    name: "VIT Vellore",
    nirf: 8,
    naac: "A++",
    highest: "44 LPA",
    average: "8.5 LPA",
  },
  {
    rank: 2,
    logo: vitLogo,
    name: "VIT Chennai",
    nirf: 12,
    naac: "A++",
    highest: "42 LPA",
    average: "8 LPA",
  },
  {
    rank: 3,
    logo: vitLogo,
    name: "VIT Bhopal",
    nirf: 15,
    naac: "A++",
    highest: "40 LPA",
    average: "7.5 LPA",
  },
  {
    rank: 4,
    logo: vitLogo,
    name: "VIT AP",
    nirf: 18,
    naac: "A++",
    highest: "38 LPA",
    average: "7 LPA",
  },
  {
    rank: 5,
    logo: vitLogo,
    name: "VIT Pune",
    nirf: 20,
    naac: "A++",
    highest: "36 LPA",
    average: "6.5 LPA",
  },
  {
    rank: 6,
    logo: vitLogo,
    name: "VIT Bangalore",
    nirf: 22,
    naac: "A++",
    highest: "34 LPA",
    average: "6 LPA",
  },
  {
    rank: 7,
    logo: vitLogo,
    name: "VIT Hyderabad",
    nirf: 25,
    naac: "A++",
    highest: "32 LPA",
    average: "5.5 LPA",
  },
  {
    rank: 8,
    logo: vitLogo,
    name: "VIT Mumbai",
    nirf: 28,
    naac: "A++",
    highest: "30 LPA",
    average: "5 LPA",
  },
  {
    rank: 9,
    logo: vitLogo,
    name: "VIT Delhi",
    nirf: 30,
    naac: "A++",
    highest: "28 LPA",
    average: "4.5 LPA",
  },
  {
    rank: 10,
    logo: vitLogo,
    name: "VIT Kolkata",
    nirf: 32,
    naac: "A++",
    highest: "26 LPA",
    average: "4 LPA",
  },
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

const getRankColor = (rank: number) => {
  if (rank <= 3) return "bg-[var(--site-green)] text-white";
  return "bg-gray-400 text-white";
};

const TrendingCollegesPackages = () => {
  return (
    <section className="py-10 px-2 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Trending Colleges With Highest Packages & Placements
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 z-0 hidden md:block" style={{transform: 'translateX(-50%)'}}></div>
          <div className="w-full flex flex-col gap-6">
            {colleges.map((college, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={college.rank} className="relative flex flex-col md:flex-row items-center md:items-stretch w-full z-10">
                  {/* For desktop: alternate left/right, for mobile: stack */}
                  <div className={`flex-1 flex justify-${isLeft ? 'end' : 'start'} md:pr-8 md:pl-8 ${isLeft ? 'md:justify-end' : 'md:justify-start'} ${isLeft ? 'order-1' : 'order-3'} md:order-none`}> 
                    {isLeft && (
                      <div className="max-w-xs w-full md:text-right text-center mb-4 md:mb-0">
                        <h3 className="font-semibold text-lg mb-1 text-gray-800">
                          {college.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">NIRF Ranking:</span> {college.nirf}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">NAAC Grade:</span> {college.naac}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Highest Package:</span> {college.highest}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Average Package:</span> {college.average}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Badge in center */}
                  <div className="flex flex-col items-center z-10">
                    <div
                      className={`relative flex items-center justify-center w-24 h-24 rounded-full mb-2 bg-white`}
                      style={{
                        borderWidth: '4px',
                        borderStyle: 'solid',
                        borderColor: getGradientBorder(college.rank),
                      }}
                    >
                      <img
                        src={college.logo}
                        alt="College Logo"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <span
                        className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold shadow ${getRankColor(college.rank)}`}
                      >
                        {college.rank}
                      </span>
                    </div>
                  </div>
                  <div className={`flex-1 flex justify-${!isLeft ? 'end' : 'start'} md:pr-8 md:pl-8 ${!isLeft ? 'md:justify-end' : 'md:justify-start'} ${!isLeft ? 'order-1' : 'order-3'} md:order-none`}>
                    {!isLeft && (
                      <div className="max-w-xs w-full md:text-left text-center mt-4 md:mt-0">
                        <h3 className="font-semibold text-lg mb-1 text-gray-800">
                          {college.name}
                        </h3>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">NIRF Ranking:</span> {college.nirf}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">NAAC Grade:</span> {college.naac}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Highest Package:</span> {college.highest}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Average Package:</span> {college.average}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCollegesPackages; 