"use client";
import { useState } from 'react';
import { AiOutlineHome, AiOutlineTool, AiOutlineBarChart, AiOutlineTransaction, AiOutlineCreditCard, AiOutlineSetting } from 'react-icons/ai';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return (
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">Home</h2>
            <p className="mt-2 text-gray-600">Welcome, [User Name]</p>
            <p className="text-gray-600">Email: [user@example.com]</p>
            <p className="mt-2 text-gray-600">Your referral link: <a href="#" className="text-blue-500 hover:underline">[Referral Link]</a></p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
              Generate Link
            </button>
          </div>
        );
      case 'Marketing Tools':
        return (
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">Marketing Tools</h2>
            <p className="mt-2 text-gray-600">Boost your sales with these marketing tools.</p>
            <input
              type="text"
              className="mt-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste product page link"
            />
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
              Share this Link
            </button>
          </div>
        );
      case 'Analytics':
        return (
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">Analytics</h2>
            <p className="mt-2 text-gray-600">Track your campaign performance here.</p>
          </div>
        );
      case 'Transactions':
        return (
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">Transactions</h2>
            <table className="min-w-full text-left text-sm mt-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Description</th>
                  <th className="border px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">2024-09-16</td>
                  <td className="border px-4 py-2">Payment Received</td>
                  <td className="border px-4 py-2">$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'Payments':
        return (
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">Payments</h2>
            <p className="mt-2 text-gray-600">Amount Paid: <span className="font-semibold">$500</span></p>
            <p className="text-gray-600">Amount Pending: <span className="font-semibold">$100</span></p>
          </div>
        );
      case 'Settings':
        return (
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
            <p className="mt-2 text-gray-600">Update your profile information here.</p>
            <input
              type="text"
              className="mt-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Change your name"
            />
            <input
              type="email"
              className="mt-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Change your email"
            />
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all">
              Save Changes
            </button>
          </div>
        );
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <nav className="md:w-1/5 bg-white p-6 border-r border-gray-200 shadow-md">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveSection('Home')}
                className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded-md transition-all ${
                  activeSection === 'Home' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AiOutlineHome className="text-xl" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('Marketing Tools')}
                className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded-md transition-all ${
                  activeSection === 'Marketing Tools' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AiOutlineTool className="text-xl" />
                <span>Marketing Tools</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('Analytics')}
                className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded-md transition-all ${
                  activeSection === 'Analytics' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AiOutlineBarChart className="text-xl" />
                <span>Analytics</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('Transactions')}
                className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded-md transition-all ${
                  activeSection === 'Transactions' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AiOutlineTransaction className="text-xl" />
                <span>Transactions</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('Payments')}
                className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded-md transition-all ${
                  activeSection === 'Payments' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AiOutlineCreditCard className="text-xl" />
                <span>Payments</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('Settings')}
                className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded-md transition-all ${
                  activeSection === 'Settings' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AiOutlineSetting className="text-xl" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>

        <main className="md:w-4/5 p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Profile;
