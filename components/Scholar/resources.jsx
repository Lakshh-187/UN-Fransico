import React from 'react';
import Image from 'next/image';
import CompanySlideshow from './CompanySlideshow';

function resources() {
  return (
    <div className="flex flex-col justify-center items-center lg:w-full md:w-4/5 w-full  py-6  rounded-full shadow-md bg-white">
      {/* <h1 className="text-lg font-semibold mb-1 sm:mb-0 sm:text-2xl">
        <span className="text-[#38A001] ">Resource</span> Library
      </h1>
      <div className="flex text-[6px]  gap-9 font-semibold items-center sm:text-base  sm:text-nowrap sm:p-1">
        <Button src={finance} title="Student Benefits" />
        <Button src={finance} title="Tools" />
        <Button src={finance} title="Resource Gallery" />
      </div> */}

      {/* <div className="w-full md:w-11/12 lg:w-4/5 mx-auto bg-white md:rounded-full border shadow-xl p-4 lg:p-8">
        <div className="flex justify-between gap-4 text-3xl font-bold items-center"> */}
      <h1 className="text-black text-base w-40 font-semibold mb-5">Trusted by:</h1>
      <CompanySlideshow />
      {/* </div>
      </div> */}
    </div>
  );
}

export default resources;

const Button = ({ src, title }) => (
  <span className="rounded-full border border-black flex p-1 sm:p-2 gap-2 justify-center items-center min-w-[100px]">
    <Image src={src} />
    <p className="lg:text-sm text-[8px] ">{title}</p>
  </span>
);
