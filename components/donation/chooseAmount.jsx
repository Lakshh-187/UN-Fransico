'use client';
import React from 'react';
import { useState } from 'react';

function ChooseAmount({ addAmount }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [currency, changeCurrency] = useState(false);

  return (
    <div className="w-full flex flex-col justify-centerd">
      <p className="text-sm sm:mt-5 mr-auto mt-2 sm:text-base">
        How often would you like to donate?
      </p>

      <p className="text-sm sm:text-base mr-auto mt-5 mb-2">Choose a monthly amount</p>

      <div className="flex flex-wrap justify-center sm:text-base gap-2 cursor-pointer">
       
        <div
          onClick={() => {
            setSelectedButton(2), addAmount(5000);
          }}
          className={`${
            selectedButton == 2 && 'bg-[#B9E390]'
          } w-24 h-8 border-gray-300 border flex justify-center items-center rounded-md text-sm`}>
          ₹ 500
        </div>
        

        <div className="flex flex-col relative z-0 mr-auto ml-[3%] sm:ml-0 ">
          <div className="flex w-48 rounded-md rounded-bl-none h-8 border  border-gray-300 ">
            {/* <div
              onClick={() => changeCurrency(!currency)}
              className="  flex justify-center items-center border-r-black  border p-2">
              <p className="text-base">Rs</p>
              <Image src={dropdown} className="size-5 " />
            </div> */}
            <input
              type="number"
              min={500}
              onFocus={() => setSelectedButton(null)}
              placeholder="Other"
              onChange={(e) => addAmount(e.target.value)}
              className="pl-2 w-full rounded-md border-none outline-none"
            />
          </div>

          {/* Choose other currency  */}
          {currency && (
            <div className="absolute z-10 top-8 border border-gray-300 w-[43px]  bg-white rounded-b-md flex flex-col justify-center items-center">
              <p className="border-b-black border w-full flex justify-center items-center">USD</p>
              <p className="border-b-black border w-full flex justify-center items-center">YEN</p>

              <p className=" w-full flex justify-center items-center">EU</p>
            </div>
          )}
        </div>
      </div>

      {/* check to agree */}
      <div className="flex justify-start items-center mt-4">
        <input type="checkbox" className="mt-2 sm:mt-0 size-4 mr-2" />
        <label className="text-sm sm:text-base">
          By donating you agree our terms and conditions.
        </label>
      </div>
    </div>
  );
}

export default ChooseAmount;
