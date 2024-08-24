// components/GrowUp.tsx
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MySlider from "./Slider";

const GrowUp = () => {
  const [isClosed, setIsClosed] = useState(false);
  
  const handleClick = () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsClosed(false);
    }, 3000);
  };
  return (
    <>
    <section className="w-full xl:p-16 p-5 my-10">
      <div className="flex flex-col-reverse md:flex-row items-center p-6 bg-[#fefcf0] rounded-2xl shadow-2xl">
        <div className="flex-1 md:pr-6 ">
          <h2 className="text-3xl font-bold mb-4">
          UN <span className="text-[#2a385d]">Francisco:</span>
          </h2>
          <h3 className="text-xl font-semibold mb-6">
          World’s 1st Organization Society Offering Free Membership in Exchange for Social Impact
          </h3>
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
                <strong>$5,000 to $7,000 in Premiums at No Cost:</strong> Receive valuable resources and tools without any charge.
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
                <strong>Internships and Career Opportunities:</strong> Access a range of professional internships and job prospects.
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
                <strong>International Certification Events, Conferences, and UF:</strong> Participate in global certification events and conferences for career advancement.
              </span>
            </li>
          </ul>
          <Link href="/donation">
          <button
            onClick={handleClick}
            className="bg-[#0B4870] w-fit text-white px-3 py-2 rounded-full text-sm md:text-base mt-6"
          >
            Apply now
          </button>
          </Link>
        </div>
        <div className="flex-1 mt-6 md:mt-0 my-10 md:my-0">
          <img
            src="/image.jpeg"
            alt="Grow Up Program"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
    <MySlider />
    </>
  );
};

export default GrowUp;
