// pages/unifordProfile/page.tsx
'use client';
import React, { useState } from 'react';
import PrivateRoute from '@/components/Auth/PrivateRoute'; // Adjust path if necessary
import MyProfile from '../../components/unifordProfile/MyProfile';
import Application from '../../components/unifordProfile/Application';
import Certification from '../../components/unifordProfile/Certification';
import Settings from '../../components/unifordProfile/Settings';

const UnifordProfilePage = () => {
  const [tab, setTab] = useState(0);

  return (
    <PrivateRoute>
      <div className="bg-[#f6f8fa] to-white lg:p-10 flex lg:flex-row flex-col w-full mt-16">
        <div className="lg:w-1/5 w-full flex lg:flex-col flex-row gap-5 pt-4">
          <button
            className={`w-11/12 mx-auto rounded-full cursor-pointer p-2 shadow-md text-primaryGreen text-nowrap ${
              tab === 0 ? 'lg:bg-white lg:shadow-xl' : 'bg-transparent'
            }`}
            onClick={() => setTab(0)}
          >
            My Profile
          </button>
          <button
            className={`w-11/12 mx-auto rounded-full cursor-pointer p-2 shadow-md text-primaryGreen ${
              tab === 1 ? 'lg:bg-white lg:shadow-xl' : 'bg-transparent'
            }`}
            onClick={() => setTab(1)}
          >
            Application
          </button>
          <button
            className={`w-11/12 mx-auto rounded-full cursor-pointer p-2 shadow-md text-primaryGreen ${
              tab === 2 ? 'lg:bg-white lg:shadow-xl' : 'bg-transparent'
            }`}
            onClick={() => setTab(2)}
          >
            Certification
          </button>
          <button
            className={`w-11/12 mx-auto rounded-full cursor-pointer p-2 shadow-md text-primaryGreen ${
              tab === 3 ? 'lg:bg-white lg:shadow-xl' : 'bg-transparent'
            }`}
            onClick={() => setTab(3)}
          >
            Settings
          </button>
        </div>
        <div className="lg:w-4/5 w-full p-6">
          {tab === 0 && <MyProfile />}
          {tab === 1 && <Application />}
          {tab === 2 && <Certification />}
          {tab === 3 && <Settings />}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default UnifordProfilePage;
