import React from 'react';
import { FaIdCardAlt, FaCheckCircle, FaRegLightbulb, FaHandsHelping } from 'react-icons/fa';

export default function ScholarIDCard() {
  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
        <FaIdCardAlt className="w-6 h-6 text-blue-900 mr-2" />
        UN-Francisco Scholar ID Card
      </h2>
      <p className="text-black font-semibold mb-4">
        The UN-Francisco Scholar ID Card is valid for one year from the date it is issued. After one year,
        scholars will need to renew the card to continue enjoying the benefits.
      </p>

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-blue-900 flex items-center mb-2">
          <FaCheckCircle className="w-6 h-6 text-blue-900 mr-2" />
          Accurate Information
        </h3>
        <p className="text-black font-semibold">
          The information you provided when applying for the ID card is very important. If any wrong 
          information is found in the future, your benefits may be stopped or your card may be taken back.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-blue-900 flex items-center mb-2">
          <FaRegLightbulb className="w-6 h-6 text-blue-900 mr-2" />
          Ethical Behavior
        </h3>
        <p className="text-black font-semibold">
          As a scholar, we expect you to follow good behavior. If you are found involved in unethical 
          activities, your ID privileges will be removed. We encourage you to take part in social work, 
          such as helping the needy.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-blue-900 flex items-center mb-2">
          <FaHandsHelping className="w-6 h-6 text-blue-900 mr-2" />
          Community Responsibility
        </h3>
        <p className="text-black font-semibold">
          As part of the UN-Francisco community, you are not just a student but a role model. We expect 
          you to be kind, helpful, and honest. Help others while you work toward achieving your dreams.
        </p>
      </div>
    </div>
  );
}
