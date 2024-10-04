import React from 'react';
import { FaMoneyBillWave, FaClipboardList, FaGraduationCap, FaRobot, FaTicketAlt, FaMedal, FaLifeRing } from 'react-icons/fa';

export default function MembershipBenefits() {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-auto mt-8 flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6">
      <img
        src="/membership-benefit.jpg"
        alt="Membership Benefits"
        className="w-full md:w-1/2 h-2/3 object-cover rounded-xl shadow-md flex align-middle"
      />
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Membership Benefits
        </h2>

        <ul className="list-none space-y-4 text-gray-700">
          <li className="flex items-center">
            <FaMoneyBillWave className="w-6 h-6 text-blue-700 mr-3" />
            <p className="text-sm font-semibold"><strong>Access to Premium Resources:</strong> Get access to $16,000+ worth of resources at no cost!</p>
          </li>
          <li className="flex items-center">
            <FaClipboardList className="w-6 h-6 text-blue-700 mr-3" />
            <p className="text-sm font-semibold"><strong>Internships Through CAF:</strong> Apply for exclusive internships using the Common Application Form (CAF).</p>
          </li>
          <li className="flex items-center">
            <FaGraduationCap className="w-6 h-6 text-blue-700 mr-3" />
            <p className="text-sm font-semibold"><strong>Premium Courses & Software:</strong> Access premium courses, software, and the Career Track portal to guide your future.</p>
          </li>
          <li className="flex items-center">
            <FaRobot className="w-6 h-6 text-blue-700 mr-3" />
            <p className="text-sm font-semibold"><strong>Uni AI:</strong> Start learning AI to give your career a head start.</p>
          </li>
          <li className="flex items-center">
            <FaTicketAlt className="w-6 h-6 text-blue-700 mr-3" />
            <p className="text-sm font-semibold"><strong>Free Event Access:</strong> Enjoy free entry to major events, competitions, and conferences.</p>
          </li>
          <li className="flex items-center">
            <FaMedal className="w-6 h-6 text-blue-700 mr-3" />
            <p className="text-sm font-semibold"><strong>Certificates for Every Activity:</strong> Earn a certificate for every activity you complete, with opportunities for international certification.</p>
          </li>
          <li className="flex items-center">
            <FaLifeRing className="w-6 h-6 text-blue-700 mr-3" />
            <p className="text-sm font-semibold"><strong>Help Desk Access:</strong> Get free access to the Help Desk for any resources or assistance you need.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
