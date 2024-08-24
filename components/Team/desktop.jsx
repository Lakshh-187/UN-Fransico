"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  type,
  webData,
  UI_UX_DATA,
  Graphics,
} from "@/data/uniford-main/team/data";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

function DesktopTeams() {
  const [index, setIndex] = useState(0);

  const renderCards = (data) =>
    data.map((card, idx) => (
      <div
        key={idx}
        className="rounded-2xl p-6 h-64 bg-white flex flex-col justify-start items-center border-gray-300 border"
      >
        <img
          src={card.pic}
          alt="user"
          className="bg-gray-300 object-contain rounded-full size-24"
        />
        <p className="text-black font-bold text-md whitespace-nowrap mt-3 flex items-center justify-center">
          {card.name}
          {card.verified && (
            <MdVerified className="text-blue-500 text-base ml-1" />
          )}
        </p>
        <p className="text-xs text-nowrap">{card.profession}</p>
        <Link
          href={card.linkedIn}
          target="blank"
          className="w-full py-3 rounded-lg mt-auto text-sm text-white flex items-center justify-center bg-[#263960]"
        >
          Linked In
        </Link>
      </div>
    ));

  return (
    <main className="h-full w-full p-5 flex flex-col">
      <div className="h-1/4 w-full text-center">
        <h1 className="text-[#263960] text-3xl  md:text-6xl font-semibold gap-5 flex">
          <div className="text-black">
            <span>Our </span>
            <span className="text-[#263960]">Leadership teams</span>
          </div>
        </h1>
      </div>

      <div className="flex flex-wrap mt-5">
        {webData.map((data , idx) => (
          <div key={idx} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl h-[15rem] drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src={data.pic}
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  {data.name}
                </h1>

                <div
                  onClick={() => {
                    window.open(data.linkedIn);
                  }}
                  className="text-gray-700 font-light mb-2 flex items-center space-x-2  justify-center flex-row"
                >
                  <p>{data.profession}</p>
                  <img
                    className="text-blue-400 h-5 "
                    src="/home/linked.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DesktopTeams;
