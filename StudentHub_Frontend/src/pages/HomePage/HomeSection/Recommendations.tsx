import { useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../navigationToSearchPage";
import { ArrowRight } from "lucide-react";

const Recommendations = () => {
  const navigate = useNavigate();

  const recommendedColleges = [
    {
      id: 1,
      img1: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      img2: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      name1: "VIT Vellore Chennai",
      name2: "VIT Vellore Amaravati",
      rank1: "20",
      rank2: "20",
    },
    {
      id: 2,
      img1: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      img2: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      name1: "VIT Vellore Chennai",
      name2: "VIT Vellore Amaravati",
      rank1: "20",
      rank2: "20",
    },
    {
      id: 3,
      img1: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      img2: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      name1: "VIT Vellore Chennai",
      name2: "VIT Vellore Amaravati",
      rank1: "20",
      rank2: "20",
    },
    {
      id: 4,
      img1: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      img2: "https://storage.googleapis.com/a1aa/image/yMMlnGrMkDg4k1ihDYCcbc7kUgY9NFS4ekPQb2Vd4oE.jpg",
      name1: "VIT Vellore Chennai",
      name2: "VIT Vellore Amaravati",
      rank1: "20",
      rank2: "20",
    },
  ];

  return (
    <section className="bg-[#f9fbfc] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-[#15314b] mb-10">Recommended Comparisons</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {recommendedColleges.map((item) => (
            <div
              key={item.id}
              className="border border-[#d6e7db] rounded-xl bg-white p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-center gap-10 mb-8">
                <img
                  alt="VIT Vellore Chennai logo"
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                  height="56"
                  src={item.img1}
                  width="56"
                />
                <span className="text-2xl font-bold text-[#15314b]">VS</span>
                <img
                  alt="VIT Vellore Amaravati logo"
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                  height="56"
                  src={item.img2}
                  width="56"
                />
              </div>
              <div className="flex w-full justify-between items-center mb-8 text-base">
                <div className="text-left">
                  <p className="font-semibold text-[#15314b] leading-tight">{item.name1}</p>
                  <p className="text-gray-500 text-sm mt-1">NIRF Rank: {item.rank1}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#15314b] leading-tight">{item.name2}</p>
                  <p className="text-gray-500 text-sm mt-1">NIRF Rank: {item.rank2}</p>
                </div>
              </div>
              <button
                className="bg-[#8cc542] hover:bg-[#7ab03a] text-white font-semibold py-3 px-8 rounded-full w-full text-base transition-colors duration-200 mt-2"
                onClick={() => navigateToSearchPage(navigate, `${item.name1} VS ${item.name2}`)}
              >
                Compare
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 bg-[#8cc542] hover:bg-[#7ab03a] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition-colors duration-200"
            onClick={() => navigateToSearchPage(navigate, "Compare Colleges")}
          >
            Explore All <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
