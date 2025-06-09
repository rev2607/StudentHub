import { MdWindow } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

import GuidanceImage from "../../../../src/assets/home-guidance.png"; // Import the image file

const Guidance = () => {
  return (
    <section className="bg-[#f4f4f4] text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900 pb-4">Therapeutic Guidance</h1>
          <p className="text-black font-light">
            Our handpicked
            <span className="font-semibold"> professionals </span>
            eliminate your greatest uncertainties through tailored <br />
            video guidance sessions, complemented by
            <span className="font-semibold"> insights </span>
            from the student community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <div className="mb-8">
            <img src={GuidanceImage} alt="Person" className="w-full max-w-md mx-auto" height="300" width="400" />
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Expert Counselling</h2>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <MdWindow className="text-[var(--site-green)] h-8 w-8" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Personalised Video Counselling from Curated Experts on Exams, Courses, Colleges.</p>
                <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-full">Start Now</button>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">QnA</h2>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <FaUsers className="text-[var(--site-green)] h-8 w-8 align-top" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">TA's and presenters can be moved to the front of the class.</p>
                <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-full">Ask Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;
