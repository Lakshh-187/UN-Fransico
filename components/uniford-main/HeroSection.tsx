import React from "react";
import { IoSearch } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section className="w-full relative h-[38rem] flex items-center justify-start px-10 my-10">
      {/* <div className="md:w-2/5 z-10 mx-20 absolute w-full flex flex-col gap-4">
        <h2 className="text-2xl text-[#a4b8d9]">What We Do At</h2>
        <h1 className="text-6xl text-white">Uniford World</h1>
        <p className="text-white">
          The world needs new solutions and leadership now. Uniford is expanding
          The world needs new solutions and leadership now. Uniford is expanding.
        </p>
        <button className="px-3 w-fit py-2 text-white bg-[#0B4870] rounded-full font-semibold text-sm">
          SEE OUR IMPACT
        </button>
      </div> */}
      <div className="w-screen  bg-cover bg-[url('/uniford-main/hero.jpg')] h-full bg-no-repeat rounded-2xl"></div>
    </section>
  );
};

export default HeroSection;
