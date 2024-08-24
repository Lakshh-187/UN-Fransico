"use client";
import Image from "next/image";
import React, { useState } from "react";
import EduationalResources from "@/components/uniwave-resources/EducationalResources";
import {
  fullstack,
  frontend,
  cyberSecurity,
  blockchain,
  softwareDeveloper,
  programmingLanguageI,
  programmingLanguageII,
  dataScience,
} from "@/data/career-track/data";

import { FaLongArrowAltDown } from "react-icons/fa";
import Link from "next/link";
import ProtectedRoute from "@/components/protected-component/page";

// Define the structure for LearningPathData
interface LearningPathData {
  title: string;
  description: string;
  topic: string;
}

const Page = () => {
  // Initialize states with default values to avoid undefined errors
  const [category, setCategory] = useState(0);
  const [data, setData] = useState<LearningPathData[]>(fullstack || []);
  const [selectedCategory, setSelectedCategory] = useState('fullstack'); // Track the selected category

  // Handler function for category selection
  const handleCategoryChange = (category: string, newData: LearningPathData[] = []) => {
    setSelectedCategory(category);
    setData(newData); // Update the data state based on the selected category
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen w-full bg-[#fafaf8] pt-16">
        <div className="w-full h-[28rem] flex flex-col gap-2 items-center justify-center relative bg-yellow-500">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/uniford-firebase.appspot.com/o/images%2Flibrary-left.svg?alt=media&token=4820c28b-022c-4cd7-86af-cabc72b6a591"
            alt="Background decoration"
            className="absolute top-32 left-0 xl:inline-block hidden"
          />
          <div className="w-full flex items-center flex-col justify-self-center gap-3">
            <h1 className="font-semibold xl:text-5xl md:text-3xl text-2xl">
              Rising Unicorns Resources
            </h1>
            <p className="w-3/5 text-lg text-center">
              Below you can find all of the different resources in the Guide:
              practice problems, former Google interview questions, online
              courses, videos, and more.
            </p>
            <div className="xl:w-1/4 w-fit bg-[#f7ed81] rounded-full my-4">
              <button className="flex items-center gap-3 px-7 py-3 text-nowrap rounded-full bg-black text-white w-[98%]">
                Apply For UF Grants Now
                <Image
                  src="/grant-program/Arrow.svg"
                  alt="Arrow Icon"
                  height={9.93}
                  width={9.93}
                />
              </button>
            </div>
            <div className="xl:w-1/4 w-fit bg-[#f7ed81] rounded-full">
              <button className="flex items-center gap-3 px-7 py-5 text-nowrap rounded-full bg-black text-white w-[98%] animate-bounce">
                Download Startup Mastery Book
                <Image
                  src="/grant-program/Arrow.svg"
                  alt="Arrow Icon"
                  height={9.93}
                  width={9.93}
                />
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl mx-4 mt-16">Educational Resources</h1>
          <div className="w-full px-4 flex justify-between">
            <button className="border rounded-full p-2" onClick={() => setCategory(0)}>
              Tech
            </button>
            <button className="border rounded-full p-2" onClick={() => setCategory(1)}>
              Sustainable Development
            </button>
          </div>
          <p className="mx-4">
            A concise and concrete summary of the research problem you seek to
            address
          </p>
          <EduationalResources category={category} />
        </div>

        <section className="px-10 py-10">
          <h3 className="text-3xl font-semibold">
            Start Learning from the Best Planned Learning Paths
          </h3>
          <div className="flex gap-3">
            <div className="w-1/5 border rounded-lg overflow-hidden my-10 h-fit">
              <ul className="list-none m-0 p-0">
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'fullstack' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('fullstack', fullstack)}
                >
                  Full Stack
                </li>
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'frontend' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('frontend', frontend)}
                >
                  Frontend
                </li>
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'dataScience' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('dataScience', dataScience)}
                >
                  Data Science
                </li>
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'blockchain' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('blockchain', blockchain)}
                >
                  Blockchain
                </li>
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'cyberSecurity' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('cyberSecurity', cyberSecurity)}
                >
                  Cyber Security
                </li>
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'softwareDeveloper' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('softwareDeveloper', softwareDeveloper)}
                >
                  Software Developer
                </li>
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'programmingLanguageI' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('programmingLanguageI', programmingLanguageI)}
                >
                  Programming Languages I
                </li>
                <li
                  className={`p-4 border-t cursor-pointer font-medium ${
                    selectedCategory === 'programmingLanguageII' ? 'bg-yellow-200 p-4 font-bold' : ''
                  }`}
                  onClick={() => handleCategoryChange('programmingLanguageII', programmingLanguageII)}
                >
                  Programming Languages II
                </li>
              </ul>
            </div>

            {/* PitchDeck */}
            <div className="flex flex-col items-center gap-3 justify-center py-10">
              {data.map((item, idx) => (
                <div className="flex flex-col gap-3 items-center justify-center" key={idx}>
                  <Card key={idx} {...item} track={selectedCategory} />
                  <FaLongArrowAltDown className="text-6xl" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
};

export default Page;

// Card Component to display each learning path
interface CardProps {
  title: string;
  description: string;
  topic: string;
  track: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  topic,
  track,
}) => {

  // Resolve the track for programming languages
  const resolvedTrack =
    track === "programmingLanguageI" || track === "programmingLanguageII"
      ? "programmingLanguages"
      : track;

  return (
    <div className="flex flex-col gap-3 shadow-lg py-3 w-1/2">
      <div className="flex items-center justify-evenly bg-yellow-400 rounded-md py-2">
        <img src="/uniwave-resources/learningpath.svg" alt="Learning Path" />
        <h3 className="text-2xl font-semibold font-mono">{title}</h3>
      </div>

      <p className="px-10">{description}</p>
      <div className="flex items-center justify-center gap-2">
        <img src="/uniwave-resources/clock.svg" alt="Clock Icon" />
      </div>
      <hr />

      <button className="text-black w-fit mx-auto bg-yellow-200 font-medium rounded-md px-4 py-2">
        <Link
          href={{
            pathname: "/computer-resources",
            query: { topic, track: resolvedTrack },
          }}
        >
          Explore
        </Link>
      </button>
    </div>
  );
};
