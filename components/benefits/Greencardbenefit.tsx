import React from 'react';
import { FaRedo, FaBriefcase, FaTicketAlt, FaGift, FaMedal, FaCertificate } from 'react-icons/fa';

export default function GreenCardBenefits() {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-auto mt-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative flex items-center">
          <img
            src="/Green-card.jpg" // Replace with actual image path
            alt="Green Card Benefits"
            className="object-cover h-3/4 w-full"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-green-800 mb-8">Green Card Benefits</h1>
          
          <div className="space-y-1">
            {/* ID Card Renewal */}
            <div className="flex items-start">
              <FaRedo className="w-4 h-4 text-green-600 mr-4 mt-2" />
              <div>
                <h2 className="text-base font-semibold text-green-800">ID Card Renewal</h2>
                <p className="text-gray-600 text-sm">Extend your Scholar ID for 1 more year automatically.</p>
              </div>
            </div>

            {/* Extra Internship */}
            <div className="flex items-start">
              <FaBriefcase className="w-4 h-4 text-green-600 mr-4 mt-2" />
              <div>
                <h2 className="text-base font-semibold text-green-800">Extra Internship</h2>
                <p className="text-gray-600 text-sm">Gain one more internship opportunity through the CAF.</p>
              </div>
            </div>

            {/* Free Event Access */}
            <div className="flex items-start">
              <FaTicketAlt className="w-4 h-4 text-green-600 mr-4 mt-2" />
              <div>
                <h2 className="text-base font-semibold text-green-800">Free Event Access</h2>
                <p className="text-gray-600 text-sm">Get free entry to events, conferences, Tekathons, and social tours.</p>
              </div>
            </div>

            {/* Uniford Welcome Kit */}
            <div className="flex items-start">
              <FaGift className="w-4 h-4 text-green-600 mr-4 mt-2" />
              <div>
                <h2 className="text-base font-semibold text-green-800">Uniford Welcome Kit</h2>
                <p className="text-gray-600 text-sm">Receive the exclusive Uniford Welcome Kit filled with surprises.</p>
              </div>
            </div>

            {/* Paid Internship Referral */}
            <div className="flex items-start">
              <FaMedal className="w-4 h-4 text-green-600 mr-4 mt-2" />
              <div>
                <h2 className="text-base font-semibold text-green-800">Paid Internship Referral</h2>
                <p className="text-gray-600 text-sm">Get a referral for paid internships to boost your career.</p>
              </div>
            </div>

            {/* Letter of Recommendation */}
            <div className="flex items-start">
              <FaCertificate className="w-4 h-4 text-green-600 mr-4 mt-2" />
              <div>
                <h2 className="text-base font-semibold text-green-800">Letter of Recommendation (LOR)</h2>
                <p className="text-gray-600 text-sm">Receive a certificate and LOR recognized by UFTRU for your achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
