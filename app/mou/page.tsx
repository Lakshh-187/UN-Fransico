import React from 'react';
import {
  FaStar, FaMedal, FaKey, FaNewspaper, FaGlobe, FaLightbulb, FaAward, 
  FaHandHoldingHeart, FaGlobeAmericas, FaBriefcase, FaTicketAlt 
} from 'react-icons/fa';

export default function MoU() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen py-12 px-5 md:px-20">
      <div className="bg-white shadow-2xl rounded-lg p-8 md:p-12 max-w-5xl mx-auto border-t-8 border-blue-600">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8 drop-shadow-lg">
          Proposal for Memorandum of Understanding (MoU)
        </h1>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Subject: Empowering Deserving Students Through the UN-Francisco Scholar Program
        </h2>

        <p className="text-gray-700 text-lg mb-6">
          Dear [Institution/Organization Name],
        </p>
        <p className="text-gray-700 text-lg mb-6">
          We are pleased to introduce the UN-Francisco Scholar Program, a revolutionary initiative dedicated to providing deserving students with unparalleled opportunities to excel in their academic and professional journeys. This MoU aims to create a strategic partnership between [Your Organization] and UN-Francisco, focused on offering students the chance to shine, learn, and grow through world-class resources and platforms.
        </p>

        <h3 className="text-3xl font-bold text-blue-900 mb-6 relative after:content-[''] after:block after:w-1/4 after:h-1 after:bg-blue-600 after:mt-2 after:rounded-full">
          What We Offer to Partnered Institutions & Organizations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[  
            {
              icon: <FaStar className="text-white text-3xl" />,
              title: "Internship Assistance via CAF and ASCAF",
              content: "We provide your students with exclusive access to internships using our Common Application Form (CAF) and Advanced Scholar Common Application Form (ASCAF).",
            },
            {
              icon: <FaMedal className="text-white text-3xl" />,
              title: "Best Scholars Receive UNGC ID Card",
              content: "Outstanding students will receive the prestigious UNGC ID Card, granting them access to additional benefits and recognition.",
            },
            {
              icon: <FaNewspaper className="text-white text-3xl" />,
              title: "Branding in Events, Conferences, and Media",
              content: "Partnering with UN-Francisco guarantees your organization recognition in our events and publications.",
            },
            {
              icon: <FaGlobe className="text-white text-3xl" />,
              title: "Trust & Recognition",
              content: "Our partnership increases your institution's trust and recognition in empowering students.",
            },
            {
              icon: <FaLightbulb className="text-white text-3xl" />,
              title: "Research & Innovation Grants",
              content: "Eligible for grants to fund educational projects and innovative programs.",
            },
            {
              icon: <FaAward className="text-white text-3xl" />,
              title: "Honoring in Social Campaigns & Drives",
              content: "Partner institutions will be honored in social campaigns.",
            },
            {
              icon: <FaHandHoldingHeart className="text-white text-3xl" />,
              title: "Space on Donation and Innovation Board",
              content: "Your institution will have a dedicated space on our board.",
            },
            {
              icon: <FaGlobeAmericas className="text-white text-3xl" />,
              title: "International Opportunities",
              content: "Providing platforms for global events and exchange programs.",
            },
            {
              icon: <FaBriefcase className="text-white text-3xl" />,
              title: "Skill & Career Opportunities",
              content: "Equipping students with practical skills and career opportunities.",
            },
            {
              icon: <FaTicketAlt className="text-white text-3xl" />,
              title: "Free Access to Events, Hackathons, Olympiads, and Conferences",
              content: "Students will enjoy free access to all events, enhancing networking and skill showcase.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-lg border-l-4 border-blue-700 transition-transform duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="bg-blue-800 p-4 rounded-full mr-4 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-100">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width last box */}
        <div className="flex items-start flex-col mt-10 bg-gradient-to-r from-blue-400 to-blue-600 p-8 text-white rounded-lg border-l-4 border-blue-700 transition-transform duration-300 hover:shadow-2xl hover:scale-105">
        <div className='flex items-center mb-2'>
        <div className="bg-blue-800 p-4 rounded-full mr-4 transition-transform duration-300 hover:scale-110 flex items-center justify-center">
        <FaKey className="text-white text-3xl" />
        </div>
          <h4 className="text-2xl font-semibold mb-4">Access to 8 Advanced Portals</h4>
          </div>
          <ol className="list-decimal list-inside">
            <li>Career Track – Personalized guidance and curated learning paths.</li>
            <li>Free AI Tools – Cutting-edge AI technologies to enhance learning.</li>
            <li>Treasure Gallery – A collection of hidden resources for students.</li>
            <li>Student Benefits – Scholarships and resources for student life.</li>
            <li>Learn AI – Free courses in artificial intelligence.</li>
            <li>Olympiad & Hackathon Entry – Access to global competitions.</li>
            <li>Social Work Participation – Empower students to contribute.</li>
            <li>Skill Development Resources – Job-ready tracks and skills.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
