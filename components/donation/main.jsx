import React from "react";
import Type from "./type";
import Amount from "./chooseAmount";
import UserInfo from "./userInformation";
import Agreement from "./agreement";
function DonationMain({ amount, addAmount }) {
  return (
    <div className="w-[87%] bg-white flex flex-col items-center rounded-xl p-3 sm:p-10 shadow-lg  gap-2 md:w-[60%] ">
      {/* Title and information */}
      <p className="text-2xl font-semibold sm:text-5xl mr-auto">
      Learn what school doesn't teach you

      </p>
      <p className="text-sm sm:text-base font-light sm:mt-4">
      At UN Fransico you can gain practical knowledge and learn real-world skills that will help you transform your life at work, school and home.

      </p>
      {/* <p className="text-sm sm:text-base  ">
        Did you know you might be able to double your gift?
        
      </p> */}
      <p className="text-sm font-semibold sm:text-3xl mr-auto">
      BECOME SKILLED AT WHAT MATTERS
      </p>

      {/* Choose type, organisation or individual */}
      {/* <Type /> */}

      {/* choose amount to donate */}
      <Amount addAmount={addAmount} />

      <div className="w-full h-[1px] mt-5 bg-gray-700" />

      {/* User information */}

      <UserInfo />

      <div className="w-full h-[1px] mt-5 bg-gray-700" />

      {/* Final donation Agreement */}

      <Agreement amount={amount} />
    </div>
  );
}

export default DonationMain;
