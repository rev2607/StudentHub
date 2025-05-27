import { useNavigate } from "react-router-dom";
import { navigateToSearchPage } from "../navigationToSearchPage";

const Recommendations = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

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
    <section className="bg-white-100 p-6">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Recommended Comparisons</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedColleges.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <img alt="VIT Vellore Chennai logo" className="w-12 h-12 rounded-full" height="50" src={item.img1} width="50" />
                <span className="text-xl font-bold">VS</span>
                <img alt="VIT Vellore Amaravati logo" className="w-12 h-12 rounded-full" height="50" src={item.img2} width="50" />
              </div>

              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="text-left">
                  <p className="font-semibold">{item.name1}</p>
                  <p className="text-gray-600 mt-2">NIRF Rank: {item.rank1}</p>
                </div>
                <div className="text-right my-4">
                  <p className="font-semibold">{item.name2}</p>
                  <p className="text-gray-600 mt-2">NIRF Rank: {item.rank2}</p>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-green-500 text-white py-1 px-4 rounded-full w-full text-sm" onClick={() => navigateToSearchPage(navigate, `${item.name1} VS ${item.name2}`)}>
                  Compare
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
