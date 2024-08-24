"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full items-center p-4 z-10 h-[4rem] flex flex-row bg-white text-black">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="w-[10%] hover:cursor-pointer"
        >
          <Image
            priority={true}
            src="/logo.svg"
            alt="brand"
            height={60}
            width={60}
            className="h-8 w-8"
          />
        </div>
        <div className="w-[60%] py-3 h-[3rem] flex items-center justify-center bg-white rounded-full">
          <div className="w-full py-4 flex flex-row justify-evenly p-2 text-[#203a63]">
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("https://scholar.uniford.org/");
              }}
            >
              Scholar
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("https://scholar.uniford.org/getHired");
              }}
            >
              Get Hired
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("https://scholar.uniford.org/unifordResources");
              }}
            >
              Resource
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("https://scholar.uniford.org/workWithUs");
              }}
            >
              Work
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("https://scholar.uniford.org/research");
              }}
            >
              Research
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="w-full flex justify-evenly">
            <div className="flex items-center bg-white p-5 justify-center text-black md:rounded-[5.14px] lg:rounded-[10px] lg:w-36 lg:h-12 md:w-[71.95px] md:text-[9.25px] lg:text-lg md:h-[29.18px]  font-semibold hover:text-[#203a61]">
              <div className="flex items-center space-x-1 justify-center">
                Donation
              </div>
            </div>
            <div className="flex items-center bg-[#203a63]  p-5 justify-center text-white md:rounded-[5.14px] lg:rounded-[10px] lg:w-36 lg:h-12 md:w-[71.95px] md:text-[9.25px] lg:text-lg md:h-[29.18px]  font-semibold hover:text-[#203a61]">
              <div className="flex items-center space-x-1 justify-center">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
