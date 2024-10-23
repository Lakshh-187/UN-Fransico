import React from 'react';
import { AiOutlineUserAdd, AiOutlineFileText, AiOutlineDollarCircle, AiOutlineCheckCircle, AiOutlineIdcard } from 'react-icons/ai';

const UNMembershipGuide = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center text-blue-900 mb-12">
         How to Enroll in the UN-Francisco Membership
      </h1>
      <p className="text-center text-gray-600 text-lg mb-8">
        Follow these steps carefully to activate your membership and access all the exclusive resources and opportunities available through the UN-Francisco Scholar Program.
      </p>

      {/* Step 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <AiOutlineUserAdd className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Step 1: Sign Up for the Portal</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6">
          <li><strong>Create an Account:</strong> Visit the portal and sign up using your email ID.</li>
          <li><strong>Set Your Password:</strong> Choose a strong password and ensure you remember it for future logins.</li>
        </ul>
      </div>

      {/* Step 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <AiOutlineFileText className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Step 2: Visit the Membership Page</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6">
          <li><strong>Explore Membership Details:</strong> Go through the membership page to understand the resources and benefits.</li>
          <li><strong>Check Eligibility:</strong> Ensure you meet the eligibility criteria for the ID card, which is crucial for accessing internships via the CAF (Common Application Form) and event access.</li>
        </ul>
      </div>

      {/* Step 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <AiOutlineDollarCircle className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Step 3: Pay the Refundable Membership Fees</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6">
          <li><strong>Make the Payment:</strong> Locate the option “Pay Refundable Membership Fees” on the page and proceed with the payment.</li>
          <li><strong>Review the Refund Process:</strong> Understand how the refund process works before completing the transaction.</li>
        </ul>
      </div>

      {/* Step 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <AiOutlineCheckCircle className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Step 4: Activate Your Membership</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6">
          <li><strong>Refresh the Portal:</strong> Once the payment is made and your membership is confirmed, refresh the page to activate your portal.</li>
          <li><strong>Access Your Resources:</strong> You will now have access to exclusive sections like Career Track, AI Tools, Student Benefits, Learn AI, and many more.</li>
        </ul>
      </div>

      {/* Step 5 */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <AiOutlineIdcard className="text-blue-900 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold text-blue-900">Step 5: ID Card and Follow for Updates</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6">
          <li><strong>ID Card Form:</strong> After membership activation, you will see the option to fill out your ID Card Form.</li>
          <li><strong>Follow for Updates:</strong> A section titled “Follow for Updates” will allow you to stay informed about upcoming events and internships.</li>
        </ul>
      </div>

      {/* Important Note */}
      <div className="bg-blue-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Important Note:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6">
          <li><strong>Use Portal Resources:</strong> Once your membership is active, make the most of the available portal resources.</li>
          <li><strong>Stay Updated:</strong> Keep an eye on the updates section for news about upcoming internships and events. Eligible students can directly apply for these opportunities through the portal.</li>
        </ul>
      </div>
    </div>
  );
};

export default UNMembershipGuide;
