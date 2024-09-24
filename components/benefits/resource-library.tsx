import React from 'react';
import { FaBook, FaGift, FaTools, FaGem, FaLink, FaRocket } from 'react-icons/fa';

export default function ResourceLibrary() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen py-12 px-5 md:px-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Articles, Guides, and Videos */}
        <div className="relative bg-white border-l-8 border-blue-900 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-blue-700">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
          <div className="flex items-start relative z-10">
            <FaBook className="w-12 h-12 text-blue-700 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold text-blue-900 mb-2">Resource Library</h2>
              <p className="text-gray-700 text-lg">A curated collection of valuable resources to help you grow.</p>
            </div>
          </div>
        </div>

        {/* Student Benefits */}
        <div className="relative bg-white border-l-8 border-green-900 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-green-700">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 rounded-full opacity-30 blur-xl"></div>
          <div className="flex items-start relative z-10">
            <FaGift className="w-12 h-12 text-green-700 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold text-green-900 mb-2">Student Benefits</h2>
              <p className="text-gray-700 text-lg">Unlock exclusive freebies and perks with your Scholar ID.</p>
            </div>
          </div>
        </div>

        {/* Educational Tools */}
        <div className="relative bg-white border-l-8 border-yellow-900 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-yellow-700">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full opacity-30 blur-xl"></div>
          <div className="flex items-start relative z-10">
            <FaTools className="w-12 h-12 text-yellow-700 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold text-yellow-900 mb-2">Educational Tools</h2>
              <p className="text-gray-700 text-lg">Explore tools designed to help you save time and learn faster.</p>
            </div>
          </div>
        </div>

        {/* Class-12 Treasure Gallery */}
        <div className="relative bg-white border-l-8 border-purple-900 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-purple-700">
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
          <div className="flex items-start relative z-10">
            <FaGem className="w-12 h-12 text-purple-700 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold text-purple-900 mb-2">Class-12 Treasure Gallery</h2>
              <p className="text-gray-700 text-lg">Discover hidden resources to empower your education and career.</p>
            </div>
          </div>
        </div>

        {/* Job-Ready Resources */}
        <div className="relative bg-white border-l-8 border-pink-900 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-pink-700">
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-200 rounded-full opacity-30 blur-xl"></div>
          <div className="flex items-start relative z-10">
            <FaLink className="w-12 h-12 text-pink-700 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold text-pink-900 mb-2">Job-Ready Resources</h2>
              <p className="text-gray-700 text-lg">Get access to career roadmaps and job-ready courses.</p>
            </div>
          </div>
        </div>

        {/* Learn AI for Your Career */}
        <div className="relative bg-white border-l-8 border-red-900 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-red-700">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-200 rounded-full opacity-30 blur-xl"></div>
          <div className="flex items-start relative z-10">
            <FaRocket className="w-12 h-12 text-red-700 mr-4" />
            <div>
              <h2 className="text-3xl font-semibold text-red-900 mb-2">Learn AI for Your Career</h2>
              <p className="text-gray-700 text-lg">Explore AI technologies and boost your career to the next level.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
