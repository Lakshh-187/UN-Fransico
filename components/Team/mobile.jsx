"use client";
import React, { useState } from "react";
import {
  type,
  UI_UX_DATA,
  webData,
  Graphics,
} from "@/data/uniford-main/team/data";
import { MdVerified } from "react-icons/md";

function MobileTeam() {
  const [index, setIndex] = useState(0);

  return (
    <div className="pt-3">
      <h1 className="text-black text-4xl font-semibold mb-1">OUR</h1>
      <h1 className="text-[#263960] text-4xl font-semibold">Leadership Team</h1>

      <div className="flex h-8 gap-3 overflow-x-scroll mt-8  no-scrollbar ">
        <button
          onClick={() => setIndex(0)}
          className={`
            h-full px-4 text-base  py-1 rounded-full  bg-[#263960] text-white w-auto text-nowrap font-semibold
            `}
        >
          UI / UX
        </button>
        <button
          onClick={() => setIndex(1)}
          className={`
            h-full px-4 text-base bg-[#263960] py-1 rounded-full  text-white w-auto text-nowrap font-semibold
            ${index == 1 ? "bg-[#263960]" : ""}`}
        >
          Web Dev
        </button>
        <button
          onClick={() => setIndex(2)}
          className={`
            h-full px-4 text-base bg-[#263960]  py-1 rounded-full  text-white w-auto text-nowrap font-semibold
            ${index == 2 && "bg-[#263960]"}`}
        >
          Graphics
        </button>
      </div>

      <div className="mt-6 text-base">
        UniFord University is a proud initiative of the UniFord Foundation, an
        NGO committed to empowering education and fostering innovation.
      </div>

      <div className="flex justify-between gap-3 flex-wrap mt-4">
        {index == 0 &&
          UI_UX_DATA.map((card, idx) => (
            <ProfileCard key={idx} idx={idx} card={card} />
          ))}
        {index == 1 &&
          webData.map((card, idx) => (
            <ProfileCard key={idx} idx={idx} card={card} />
          ))}
        {index == 2 &&
          Graphics.map((card, idx) => (
            <ProfileCard key={idx} idx={idx} card={card} />
          ))}
      </div>
    </div>
  );
}

export default MobileTeam;

function ProfileCard({ idx, card }) {
  return (
    <div className="w-[48%] rounded-2xl p-6 h-64 bg-white flex flex-col justify-start items-center border-gray-300 border ">
      <img
        src={card.pic}
        className="bg-gray-300 object-contain rounded-full size-24"
      ></img>
      <p
        key={idx}
        className="text-black  font-medium mt-2 flex items-center justify-center gap-2 text-clip text-nowrap
    "
      >
        {card.name}
        {card.verified && <MdVerified className="text-blue-400" />}
      </p>

      <p className="text-xs text-nowrap" key={idx}>
        {card.profession}
      </p>

      <button className="w-full py-3 rounded-lg mt-auto text-sm text-white flex items-center justify-center bg-[#263960]">
        Learn more
      </button>
    </div>
  );
}
