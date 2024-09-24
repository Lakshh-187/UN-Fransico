import React from 'react';
import { FaGift, FaTicketAlt, FaBriefcase, FaCertificate } from 'react-icons/fa';

export default function GreenCardBenefits() {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-auto mt-8 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
      <img
        src="/Id-card/image-1.jpg"
        alt="Green Card Benefits"
        className="w-full md:w-1/4 h-64 object-cover rounded-lg shadow-md"
      />
      <div className="md:w-3/4">
        <h2 className="text-3xl font-bold text-green-700 mb-4 flex items-center">
          <FaGift className="w-8 h-8 text-green-700 mr-2" />
          Exclusive Green Card Benefits
        </h2>

        <p className="text-gray-700 mb-6 text-sm">
          Top Green Card holders enjoy exciting rewards, including:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4 pl-5">
          <li className="flex items-center mb-2 text-sm">
            <FaGift className="mr-2 text-green-600" />
            <strong>Uniford Welcome Kit: </strong> Exclusive kit for top scholars.
          </li>
          <li className="flex items-center mb-2 text-sm">
            <FaTicketAlt className="mr-2 text-green-600" />
            <strong>Free Event Access: </strong> Entry to events, conferences, and social tours.
          </li>
          <li className="flex items-center mb-2 text-sm">
            <FaBriefcase className="mr-2 text-green-600" />
            <strong>Paid Internship Referral: </strong> Valuable internship opportunities.
          </li>
          <li className="flex items-center mb-2 text-sm">
            <FaCertificate className="mr-2 text-green-600" />
            <strong>Letter of Recommendation: </strong> Special LOR to enhance your career prospects.
          </li>
          <li className="flex items-center text-sm">
            <FaCertificate className="mr-2 text-green-600" />
            <strong>Special Certificate: </strong> Acknowledgment of your achievements by UFTRU.
          </li>
        </ul>
      </div>
    </div>
  );
}
