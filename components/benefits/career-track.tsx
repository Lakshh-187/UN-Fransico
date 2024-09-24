import React from 'react';
import { FaBook, FaChartLine } from 'react-icons/fa';

export default function CareerTrack() {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-auto mt-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
          <FaChartLine className="w-8 h-8 text-purple-700 mr-2" />
          Career Track
        </h2>

        <ul className="list-disc list-inside text-gray-700 mb-4 text-sm font-semibold space-y-3">
          <li className="flex items-center">
            <FaBook className="mr-2 text-purple-700" />
            <span>Career Resources</span>: Find practice problems, Google interview questions, and online courses to help build your career.
          </li>
          <li className="flex items-center">
            <FaChartLine className="mr-2 text-purple-700" />
            <span>Planned Learning Paths</span>: Get a well-structured learning path to guide your learning from the best.
          </li>
        </ul>
      </div>

      <img
        src="/career-track-image.jpg"
        alt="Career Track"
        className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
      />
    </div>
  );
}
