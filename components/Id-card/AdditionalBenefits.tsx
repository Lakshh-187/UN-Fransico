import React from 'react';
import { FaBriefcase, FaPlusCircle, FaRedo, FaStar } from 'react-icons/fa';

export default function AdditionalBenefits() {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-auto mt-8 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
      <img
        src="/Id-card/image-2.jpg"
        alt="Additional Benefits"
        className="w-full md:w-1/2 h-64 object-cover mt-3.5 rounded-lg shadow-md"
      />
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
          <FaBriefcase className="w-8 h-8 text-blue-700 mr-2" />
          Additional Benefits
        </h2>

        <p className="text-gray-700 mb-6 text-sm font-semibold">
          The UN-Francisco Scholar ID Card unlocks valuable opportunities, including internships and events.
        </p>

        <h3 className="text-2xl font-bold text-blue-700 flex items-center mb-3">
          <FaStar className="w-6 h-6 text-blue-700 mr-2" />
          Green Card for Top Scholars
        </h3>
        <p className="text-gray-700 mb-4 text-sm font-semibold">
          Top scholars can earn a Green Card, offering:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4 pl-5">
          <li className="flex items-center mb-2 text-sm font-semibold">
            <FaRedo className="mr-2 text-blue-700" />
            Automatic ID renewal for one more year.
          </li>
          <li className="flex items-center mb-2 text-sm font-semibold">
            <FaPlusCircle className="mr-2 text-blue-700" />
            Apply for an additional internship via CAF.
          </li>
          <li className="flex items-center text-sm font-semibold">
            <FaBriefcase className="mr-2 text-blue-700" />
            Enjoy extended benefits for another year.
          </li>
        </ul>
      </div>
    </div>
  );
}
