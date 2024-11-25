// components/GrowUp.tsx
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MySlider from "./Slider";

const Comp = () => {
  const [isClosed, setIsClosed] = useState(false);
  
  const handleClick = () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsClosed(false);
    }, 3000);
  };
  return (
    <>
    <section className="w-full xl:p-16 p-5 my-5">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center p-6 bg-red-50 rounded-2xl shadow-2xl">
        <div className="flex-1 md:pr-6 ">
          <h2 className="text-3xl font-bold mb-4">
          Building Stronger Institutions,<span className="text-[#2a385d]"> Innovating Academia
          </span>
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 text-green-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586l-1.707-1.707z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="ml-3">
              Uniford Institutional Ranking
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 text-green-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586l-1.707-1.707z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="ml-3">
              Scholar Grants for Excellence
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 text-green-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586l-1.707-1.707z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="ml-3">
              Advanced Placement Portal
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 text-green-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L10 11.586l-1.707-1.707z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="ml-3">
              Project Expo & Uni Talks
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1 justify-end mt-6 md:mt-0 my-10 md:my-0">
          <img
            src="/home/Home/Banner.jpg"
            alt="Grow Up Program"
            className="rounded-lg w-3/4"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Comp;
