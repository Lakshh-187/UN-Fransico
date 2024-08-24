'use client';
import Image from 'next/image';
import React from 'react';

function OppurtunityList() {
  const oppurtunities = [
    {
      title: 'Applicants are required to have a basic understanding of English.'
    },
    {
      title:
        'Applicants must have attained a minimum  45% marks in their previous completed education.'
    },
    {
      title: 'Clean Record: Demonstrate no involvement in police cases or illegal activities.'
    },
    {
      title:
        'The applicant is applying to the institute as a Uniford Scholar, not solely as a student.'
    },
    {
      title: 'A completion certificate from a recognized school in India'
    }
  ];
  return (
    <div className="w-11/12 bg-[#F8F9FA] rounded-xl flex flex-col p-4 py-8 my-8 md:my-24 gap-6 mx-auto">
      <h1 className="text-4xl font-semibold">
        Who is <span className="text-[#28487c] font-semibold">Eligible</span>?
      </h1>
      <div className="flex flex-col lg:ml-8 gap-4">
        {oppurtunities.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center gap-1 hover:shadow-md hover:shadow-yellow-200 w-full ">
              <div className=" ">
                <Image
                  src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                  height={50}
                  width={50}
                  className="rounded-full"
                  alt='...'
                />
              </div>
              <div className="flex items-center hover:shadow-md p-3 hover:text-black hover:font-semibold bg-white border h-20 rounded-xl w-full border-white hover:shadow-yello-400 my-2">
                <div className=" w-full">
                  <h3 className="text-lg text-gray-500">{item.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OppurtunityList;
