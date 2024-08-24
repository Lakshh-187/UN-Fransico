"use client";
import React from "react";
import DiceCarousel from "./DiceCarousel";

const GetInspiredForLife = () => {
  return (
    <section className="w-full relative md:p-10 p-2 mt-10 h-full overflow-hidden">
      <BackgroundCircles/>
      <div className="flex flex-col gap-3 shadow-2xl rounded-2xl md:p-10 p-2 w-full z-10">
        <h3 className="font-bold text-4xl text-center text-[#002D76] ">
          Get Inspired For Life
        </h3>
        <div className="w-full ">
          <DiceCarousel />
        </div>
      </div>
    </section>
  );
};

export default GetInspiredForLife;

const BackgroundCircles = () => (
  <>
    <div className="h-[20rem] md:h-[25rem] lg:h-[34rem]  lg:w-[34rem] w-[20rem] md:w-[25rem] bg-[#5068A947] rounded-full absolute -left-40  blur-xl md:blur-none">
      <div className="h-[10rem] w-[10rem] bg-[#6e8bd2] rounded-full absolute -right-10 top-20 blur-xl md:blur-none" />
    </div>

    <div className="h-[20rem] md:h-[25rem] lg:h-[30rem]  lg:w-[30rem] w-[20rem] md:w-[25rem] bg-[#5068A947] rounded-full absolute -right-40 bottom-0 blur-xl md:blur-none md:inline-block hidden">
      <div className="h-[10rem] w-[10rem] bg-[#6e8bd2] rounded-full absolute -left-10 bottom-20 blur-xl md:blur-none" />
    </div>
  </>
);
