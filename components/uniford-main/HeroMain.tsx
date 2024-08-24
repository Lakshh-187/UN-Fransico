"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { FaGem } from "react-icons/fa";

const HeroMain = () => {
  const router = useRouter();

  return (
    <div className="bg-[#f6f8fa] border rounded-2xl w-[95%] mx-auto py-4 lg:py-24 mt-20 overflow-hidden">
      {/* hero content and grid */}
      <div className=" w-full justify-center lg:px-40 flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 pl-10 lg:p-0 mt-5 lg:mt-0 flex flex-col items-start justify-center">
          <div className="flex items-center">
            <h1 className="text-3xl lg:text-5xl text-[#28487c] font-bold">
              Uniford
            </h1>
            <br />
            <div className="flex justify-center ml-4">
              <div className="w-6 h-6 bg-primaryGreen rounded-full "></div>
              <div className="w-6 h-6 bg-[#C8BBFF] rounded-full ml-[-4px]"></div>
              <div className="w-6 h-6 bg-[#FF5690] rounded-full ml-[-6px] "></div>
            </div>
          </div>
          <h1 className="relative left-16 text-3xl lg:text-5xl my-4 font-bold text-gray-500 lg:mb-6">
           Foundation
          </h1>
          {/* search section */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3 justify-between">
              <p className="px-6 py-3 rounded-xl bg-white text-gray-500 w-4/5 flex items-center justify-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#65bd67"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                </svg>
                Investing in programs that support the development and well-being of young people is like tending to the garden of humanity.
              </p>
              {/* <p className="text-gray-500">
              Join hands with world className scholars and seize the boundless oppurtunities and
              growth
            </p> */}
            </div>
            <button
              onClick={() => {
                router.push("/donation");
              }}
              className="bg-[#28487c] my-6 w-40 h-12 rounded-xl text-white text-lg font-bold flex justify-center items-center"
            >
              <FaGem className="text-white transform -rotate-45 mr-2" />
              Membership
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full h-80 lg:h-[35rem] px-8 lg:px-0 py-4 lg:w-1/2">
          <div className="flex flex-col gap-3">
            <Link href={"/"}>
              <img
                alt="img"
                className="w-full rounded-2xl hover:scale-105 duration-500 shadow-xl"
                src={"/uniford-main/uniford2.jpg"}
              />
            </Link>
            <Link href={"/"}>
              <img
                alt="img"
                className="w-full rounded-2xl hover:scale-105 duration-500 shadow-xl"
                src={"/uniford-main/uniford5.jpg"}
              />
            </Link>
            <Link href={"/"}>
              <img
                alt="img"
                className="w-full rounded-2xl hover:scale-105 duration-500 shadow-xl"
                src={"/uniford-main/uniford4.jpg"}
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center  gap-1">
            <Link href={"/"} className="-my-10">
              <img
                alt="Img"
                className="w-full h-4/5 rounded-2xl hover:scale-105 duration-500 shadow-xl"
                src={"/uniford-main/uniford1.jpg"}
              />
            </Link>
            <Link href={"/"} className="">
              <img
                alt="Img"
                className="w-full h-4/5 rounded-2xl hover:scale-105 duration-500 shadow-xl"
                src={"/uniford-main/uniford3.jpg"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
