import React from "react";

type Props = {};

const data = (props: Props) => {
  return (
    <div className="h-full flex p-5 flex-row items-center justify-center bg-[#ECF7FF]">
      <div className="h-full mx-24   flex items-center justify-center w-[50%]">
        <div className="p-10">
          <div>
            <p className="text-4xl text-wrap antialiased text-black">
              Hear Stories of Our Scholars
            </p>
          </div>
          <div className="mt-5">
            <p>
              Uniford India is working with universities across the country on
              providing world class scholarships to those capable.
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
            <div className="absolute w-full h-full bg-[#97c5e3]  rounded-lg shadow-lg transform rotate-6 top-0 left-0"></div>
            <div className="absolute w-full h-full bg-[#59ace3] rounded-lg shadow-lg transform rotate-4 top-0 left-0"></div>
            <div className="absolute w-full h-full bg-[#47a0db] rounded-lg shadow-lg transform rotate-2 top-0 left-0"></div>
            <div className="absolute w-full h-full bg-[#2b9be6] rounded-lg shadow-lg transform rotate-1 top-0 left-0"></div>
            {/* Background card tilted to the left */}
            <div className="absolute w-full h-full bg-[#97c5e3] rounded-lg shadow-lg transform -rotate-2 top-0 left-0"></div>
            {/* Main card */}
            <div className="absolute w-full h-full bg-[#0B4870]  p-5 rounded-lg shadow-lg top-0 left-0">
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex justify-center">
                  <img src="/user.png" className="h-24" alt="" />
                </div>
                <div className="w-full flex items-center justify-center flex-col ">
                  <div className="text-2xl">
                    <p>Remy LeBeau</p>
                  </div>
                  <div>
                    <p>University of Kansas</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <p>
                    Uniford provides youth globally with the training, tools,
                    and community to build their leadership and accelerate
                    social change that stands to benefit us all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default data;
