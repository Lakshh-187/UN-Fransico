"use client";
import React, { useState } from "react";
import { benefitsImages } from "@/data/Team/data";
import { benefits } from "../../data/Team/data";
import Image from "next/image";

function Benefits() {
  const [index, setIndex] = useState(0);

  const setBackground =
    (index === 0 && "bg-gradient-to-r from-white to-sky-200") ||
    (index === 1 && "bg-gradient-to-r from-purple-200 to-purple-300") ||
    (index === 2 && "bg-gradient-to-r from-white to-[#d9f99d]") ||
    (index === 3 && "bg-gradient-to-r from-white to-yellow-200") ||
    (index === 4 && "bg-gradient-to-r from-white to-pink-200") ||
    (index === 5 && "bg-gradient-to-r from-white to-teal-200");
  return (
    <main className="h-screen w-full flex flex-col  ">
      <div className="w-full flex md:flex-row flex-col gap-3 md:justify-between md:items-start pt-24 ">
        <div className="lg:w-[30%] md:w-1/2 w-full rounded-lg  flex flex-col  p-4 gap-3  ">
          {benefits.map((Type, idx) => (
            <div
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-full hover:cursor-pointer h-[70px] py-4 flex items-center p-3 gap-4 shadow-md ${
                idx % 2 === 0 ? "bg-[#E8E8E8]" : "bg-white"
              } ${idx === 0 && "rounded-t-xl"} ${idx === 4 && "rounded-b-xl"} ${
                index === idx
                  ? " bg-gradient-to-r from-yellow-200 to-white"
                  : ""
              }`}
            >
              <Image
                src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                height={30}
                width={30}
                className="rounded-full"
                alt="..."
              />
              <div>
                <p className="font-bold text-nowrap">{Type.feature}</p>
                <p className="font-normal text-sm">{Type.german}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${setBackground} md:w-[50%] hidden w-full h-full rounded-2xl md:flex relative flex-col justify-center mt-32 ml-10 md:mt-0 md:ml-0`}
        >
          <div className="w-full md:h-[80%] absolute bg-white shadow-md z-10 -left-10 rounded-2xl flex flex-wrap overflow-y-scroll no-scrollbar gap-5 justify-center p-5 py-6">
            <img
              src={benefitsImages[index].img}
              className="bg-gray-300 bg-cover h-full rounded-2xl"
            />
          </div>
        </div>

        <div className="w-full md:h-[80%] md:hidden  bg-white shadow-md rounded-2xl flex flex-wrap gap-5 justify-center p-5 py-6">
          <img
            src={benefitsImages[index].img}
            className="bg-gray-300 object-contain h-full rounded-2xl"
          />
        </div>
      </div>
    </main>
  );
}

export default Benefits;
