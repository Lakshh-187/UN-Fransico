"use client";
import React, { useEffect, useState } from "react";
import { peoples } from "@/data/uniford-main/Cards";

const SwippingCard = () => {
  const [currentObject, setCurrentObject] = useState(peoples[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Create a timer to update the state every three seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % peoples.length;
        setCurrentObject(peoples[newIndex]);
        return newIndex;
      });
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex p-5 flex-row items-center justify-center bg-white">
      <div className="h-full mx-24 flex items-center justify-center w-[50%]">
        <div className="p-10">
          <div>
            <p className="text-4xl text-wrap antialiased text-black">
              Hear Stories of Our Scholars
            </p>
          </div>
          <div className="mt-5">
            <p>
              Uniford India is working with universities across the country on
              providing world-class scholarships to those capable.
            </p>
          </div>
          <div className="mt-5">
            <button className="bg-[#0B4870] text-white p-3 rounded-full">
              Join the Uniford World
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] text-white">
        <div className="flex justify-center items-center">
          <div className="relative w-[20rem] h-96">
            {/* Background cards tilted to the right */}
            <div className="absolute w-full h-full bg-[#97c5e3] rounded-lg shadow-lg transform rotate-6 top-0 left-0"></div>
            <div className="absolute w-full h-full bg-[#59ace3] rounded-lg shadow-lg transform rotate-4 top-0 left-0"></div>
            <div className="absolute w-full h-full bg-[#47a0db] rounded-lg shadow-lg transform rotate-2 top-0 left-0"></div>
            <div className="absolute w-full h-full bg-[#2b9be6] rounded-lg shadow-lg transform rotate-1 top-0 left-0"></div>
            {/* Background card tilted to the left */}
            <div className="absolute w-full h-full bg-[#97c5e3] rounded-lg shadow-lg transform -rotate-2 top-0 left-0"></div>
            {/* Main card */}
            <div className="absolute w-full h-full bg-[#0B4870] p-5 rounded-lg shadow-lg top-0 left-0">
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex justify-center">
                  <img
                    src={currentObject.profileImage}
                    className="h-24 w-24 rounded-full"
                    alt=""
                  />
                </div>
                <div className="w-full flex items-center justify-center flex-col">
                  <div className="text-2xl">
                    <p>{currentObject.name}</p>
                  </div>
                  <div>
                    <p>{currentObject.designation}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <p className="line-clamp-3">{currentObject.story}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwippingCard;
