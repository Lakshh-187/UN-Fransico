"use client";
import { useState } from 'react';
import { aiToolsData } from '@/data/toolsData';
import Image from 'next/image';

export default function AITools() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Get unique categories dynamically
    const categories = [...new Set(aiToolsData.map(tool => tool.category))];

    const filteredTools = selectedCategory === 'All'
        ? aiToolsData
        : aiToolsData.filter(tool => tool.category === selectedCategory);

    return (
        <div className="min-h-screen w-full bg-[#fafaf8] pt-16">

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

            <h1 className="text-4xl font-bold text-center mb-8 pt-6 text-gray-900">
                AI Tools Directory
            </h1>

            <div className="mb-6 text-center">
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-1 block w-full md:w-1/4 mx-auto pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="All">-- Select a category --</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTools.map((tool, index) => (
                    <div
                        key={index}
                        className="bg-white border-2 shadow-md rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105 relative"
                        style={{
                            borderColor: `hsl(${index * 60 % 360}, 70%, 60%)`,
                        }}
                    >
                        <div className="absolute top-0 left-0 px-2 py-1 bg-pink-100 text-pink-600 text-sm font-medium rounded-br-lg">
                            Featured
                        </div>
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {tool.title}
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                            {tool.description}
                        </p>
                        <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-1/2 text-center text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md shadow transition-colors duration-300"
                        >
                            VISIT
                        </a>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="inline-block px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full">
                                {tool.category}
                            </span>
                            <span className="text-yellow-500 font-semibold">
                                {tool.rating}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}