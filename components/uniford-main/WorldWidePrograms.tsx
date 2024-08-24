"use client";
import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronRight } from "react-icons/fa";
import { globalPrograms } from "@/data/uniford-main/WhoAreWe";

const carouselData = [
  {
    id: 1,
    title: "Scholar Program",
    description:
      "Uniford India is working with universities across the country on providing world class scholarships to those capable.",
    image: "/uniford-main/programs.jpg",
  },
  {
    id: 2,
    title: "Scholar Program 2",
    description:
      "Uniford India is expanding its reach to include new universities and more students across the country.",
    image: "/uniford-main/programs.jpg",
  },
  {
    id: 3,
    title: "Scholar Program 3",
    description:
      "Our programs are designed to help students achieve their dreams and excel in their academic pursuits.",
    image: "/uniford-main/programs.jpg",
  },
];

const WorldWidePrograms = () => {
  return (
    <section className="w-full bg-[#f6f8fa] mt-5 lg:p-10 p-3">
      <div className="pt-20 w-full shadow-2xl rounded-2xl">
        <h3 className="font-semibold text-center text-black text-xl">
          Global Presence
        </h3>
        <h3 className="font-bold lg:text-5xl md:text-4xl text-3xl text-center my-5 text-[#4d5562]">
          Explore Our{" "}
          <span className="text-[#263960]"> Worldwide Programs</span>
        </h3>
        <p className="text-center text-lg font-semibold text-[#4f5561]">
          Our global presence is a testament to our commitment and reach
        </p>
        <div className="w-full flex items-center justify-evenly">
          <div className="md:w-2/5 w-full flex items-center justify-center p-4">
            <ScholarProgramCarousel />
          </div>
          <div className="w-2/5 md:inline-block hidden">
            <img
              src="/tempabout2.png"
              alt="..."
              className="h-full w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldWidePrograms;

const ScholarProgramCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? globalPrograms.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === globalPrograms.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-sm mx-auto bg-white rounded-lg shadow-xl overflow-hidden p-4">
      <div className="relative w-full h-48">
        <img
          src={globalPrograms[currentIndex].img}
          alt={globalPrograms[currentIndex].programName}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-black uppercase underline">
          {globalPrograms[currentIndex].programName}
        </h3>
        <p className="text-gray-700 mt-2 line-clamp-3">
          {globalPrograms[currentIndex].programDesc}
        </p>
        {/* Uncomment and add link if needed */}
        
      </div>
      <div className="flex justify-between items-center p-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronCircleLeft className="w-6 h-6 text-gray-500" />
        </button>
        <div className="flex justify-center">
          {globalPrograms.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronRight className="w-6 h-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};
