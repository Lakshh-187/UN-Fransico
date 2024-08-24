import React, { useState } from 'react';
import { unifordResources } from '@/data/Home/data';

import Image from 'next/image';

function WhyUniford() {
  const [tab, changeTab] = useState(0);
  return (
    <>
      <div className="flex flex-row items-center gap-5 h-full ">
        <div className="w-11/12 h-full hidden md:flex absolute bottom-0 left-10 rounded-3xl bg-[#f3f1ff] -z-[1] mt-3 shadow-xl shadow-gray-400" />
        <div className="w-full h-full">
          <div className="flex items-center justify-center">
            <div className="md:grid md:grid-cols-3 flex flex-col gap-2">
              {unifordResources.map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded-3xl flex flex-col gap-2 shadow-md">
                  <Image
                    src={item.img}
                    height={300}
                    width={300}
                    alt={item.title}
                    className="rounded-2xl"
                  />
                  <p className="text-center font-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUniford;
