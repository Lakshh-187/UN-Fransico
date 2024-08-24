"use client";
import React from "react";
import ImageOverlay from "./imageOverlay";
import { FaArrowLeft } from "react-icons/fa6";

function OTP() {
  return (
    <div className="w-[45%] md:flex md:justify-start md:items-start md:flex-col md:mb-auto md:pt-20">
      <div className="md:flex  md:justify-start md:items-start md:w-full ">
        <p className="md:text-7xl md:font-bold md:text-[#203a63] ">Uniwave</p>
        <ImageOverlay />
      </div>

      <p className=" md:text-sm md:p-6 md:w-[70%]  mt-6 md:text-[#548702] md:border-[#66666659] md:rounded-lg md:border md:bg-[#E7F9D12E] md:leading-6 ">
        Enter the One Time Password (OTP) which has been sent to
        (jonas_kahnwald@gmail.com)
      </p>

      <div className="md:flex md:gap-2 md:mt-6">
        <p className="md:text-[#969696] md:text-sm">
          Did not received OTP? Resend
        </p>
        <p className="md:text-sm text-[#548702]">Resend OTP in</p>
        <p className="md:text-sm text-[#548702]">
          58<span className="md:text-xs text-[#548702]">s</span>
        </p>
      </div>

      <div className="md:w-[70%] md:flex md:justify-between md:gap-4 md:mt-14">
        <input
          type="text"
          className="md:w-1/5 md:h-14 md:rounded-md  md:text-center  md:shadow-4xl md:border-[#B4BDC466] md:border-2   md:outline-[#B4BDC4] md:outline-2 "
        />
        <input
          type="text"
          className="md:w-1/5 md:h-14 md:rounded-md  md:text-center  md:shadow-4xl md:border-[#B4BDC466] md:border-2   md:outline-[#B4BDC4] md:outline-2 "
        />
        <input
          type="text"
          className="md:w-1/5 md:h-14 md:rounded-md  md:text-center  md:shadow-4xl md:border-[#B4BDC466] md:border-2   md:outline-[#B4BDC4] md:outline-2 "
        />
        <input
          type="text"
          className="md:w-1/5 md:h-14 md:rounded-md  md:text-center  md:shadow-4xl md:border-[#B4BDC466] md:border-2   md:outline-[#B4BDC4] md:outline-2 "
        />
      </div>

      <button className="md:w-[71%] md:p-3 md:bg-[#203a63]  md:text-white md:mt-16 md:rounded-lg md:font-semibold md:text-lg">
        Verify Email
      </button>
      <button className="md:w-[20%] md:p-3 md:bg-[#203a63]  md:text-white md:mt-20 md:rounded-lg md:font-semibold md:text-lg md:flex md:justify-start md:gap-5 md:items-center">
        <FaArrowLeft /> Back
      </button>
    </div>
  );
}

export default OTP;
