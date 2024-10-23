import React from 'react';
import { AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineForm, AiOutlineWarning } from 'react-icons/ai';

const IDCardTimeAid = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
      {/* Title Section */}
      <h1 className="text-4xl font-semibold text-center text-blue-900 mb-8">
        ID-Card Time Aid for Eligible Scholars
      </h1>
      <p className="text-center text-gray-600 text-lg mb-8">
        Dear Scholars, we understand that some of you may face challenges in completing the online payment for your Scholar ID card due to unavailability of funds or other circumstances. To support you, we are introducing a special ID-Card Time Aid.
      </p>

      {/* What is ID-Card Time Aid? */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <AiOutlineClockCircle className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">What is ID-Card Time Aid?</h2>
        </div>
        <p className="text-gray-700 pl-6">
          This initiative allows eligible scholars to apply for the ID card during a fixed session without having to pay the refundable membership fee immediately. You won't miss out on securing your ID card even if you can’t make a payment during the session.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <AiOutlineForm className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">How It Works:</h2>
        </div>
        <ul className="list-decimal list-inside text-gray-700 space-y-4 pl-6">
          <li>
            <strong>Apply Now, Activate Later:</strong> Fill out the ID card form during the open session without paying the refundable fee. Once your membership is activated in the future, your ID card’s Secret Key will automatically be activated one week before the next round of internship or event applications.
          </li>
          <li>
            <strong>Activation Before Deadlines:</strong> You'll need to activate your ID card 7-12 days before the opening of applications for UNSIP, CAF, ASAF, or any conferences and events.
          </li>
          <li>
            <strong>Eligibility Criteria:</strong> This aid is only available for scholars who meet the eligibility criteria for the ID card.
          </li>
        </ul>
      </div>

      {/* Important Notes */}
      <div className="bg-blue-100 p-6 rounded-lg mb-6">
        <div className="flex items-center mb-3">
          <AiOutlineWarning className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-xl font-semibold text-blue-900">Important Note:</h2>
        </div>
        <p className="text-gray-700">
          Make sure to activate your ID card within the stipulated time before the opening of applications to ensure eligibility for internships and events.
        </p>
      </div>
    </div>
  );
};

export default IDCardTimeAid;
