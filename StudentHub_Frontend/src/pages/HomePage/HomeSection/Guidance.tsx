import { useState } from "react";
import { MdWindow } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import CounsellingSignupForm, { CounsellingFormData } from "../../../components/CounsellingSignupForm";
import { submitCounsellingRequest } from "../../../services/counsellingService";
import GuidanceImage from "../../../assets/home-guidance.png"; // Import the image file

const Guidance = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleStartNowClick = () => {
    setIsFormOpen(true);
  };

  const handleFormSubmit = async (data: CounsellingFormData) => {
    try {
      // Submit to Supabase
      const response = await submitCounsellingRequest(data);
      
      if (response.success) {
        alert(response.message);
      } else {
        alert(response.message || 'Sorry, there was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting counselling request:', error);
      alert('Sorry, there was an error submitting your request. Please try again.');
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
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
          <div className="mb-8 md:mb-0">
            <img src={GuidanceImage} alt="Person" className="w-full max-w-md mx-auto" height="300" width="400" />
          </div>
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Expert Counselling</h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <MdWindow className="text-[var(--site-green)] h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm sm:text-base">Personalised Video Counselling from Curated Experts on Exams, Courses, Colleges.</p>
                <button 
                  onClick={handleStartNowClick}
                  className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white rounded-full text-sm sm:text-base hover:bg-gray-800 transition-colors"
                >
                  Start Now
                </button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">QnA</h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <FaUsers className="text-[var(--site-green)] h-6 w-6 sm:h-8 sm:w-8 align-top" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm sm:text-base">TA's and presenters can be moved to the front of the class.</p>
                <button className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white rounded-full text-sm sm:text-base">Ask Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CounsellingSignupForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />
    </section>
  );
};

export default Guidance;
