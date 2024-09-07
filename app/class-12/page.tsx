"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { data, Schema, data2, Schema2 } from "../../data/student-resources/data";

interface CheckedItems {
  [key: string]: boolean;
}

const Page: React.FC = () => {
    const chapters = [
      "CH-1",
      "CH-2",
      "CH-3",
      "CH-4",
      "CH-5",
      "CH-6",
      "CH-7",
      "CH-8",
      "CH-9",
      "CH-10",
      "CH-11",
      "CH-12",
      "CH-13",
      "CH-14",
      "CH-15",
    ];
  
    const [checkedItems, setCheckedItems] = useState<CheckedItems>({
      maths: false,
      chemistry: false,
      physics: false,
      biology: false,
      accounts: false,
      english: false,
      computerScience: false,
      mindMaps: false,
      syllabus: false,
      importantQuestions: false,
    });
  
    const [checkedChapters, setCheckedChapters] = useState<CheckedItems>(
      chapters.reduce((acc, chapter) => {
        acc[chapter] = false;
        return acc;
      }, {} as CheckedItems)
    );
  
    const handleItemClick = (item: string) => {
      setCheckedItems((prevItems) => ({
        ...prevItems,
        [item]: !prevItems[item],
      }));
    };
  
    const handleChapterClick = (item: string) => {
      setCheckedChapters((prev) => ({
        ...prev,
        [item]: !prev[item],
      }));
    };
  
    const getFilteredData = (): Schema[] => {
      const selectedCategories = Object.keys(checkedItems).filter(
        (key) => checkedItems[key]
      );
  
      const selectedChapters = Object.keys(checkedChapters).filter(
        (key) => checkedChapters[key]
      );
  
      if (selectedCategories.length === 0 && selectedChapters.length === 0) return data;
  
      let filteredByCategories = data;
      if (selectedCategories.length > 0) {
        filteredByCategories = data.filter((item) =>
          selectedCategories.includes(item.Subject.toLowerCase())
        );
      }
  
      let filteredByChapters = filteredByCategories;
      if (selectedChapters.length > 0) {
        filteredByChapters = filteredByCategories.filter((item) =>
          selectedChapters.includes(item.Name)
        );
      }
  
      return filteredByChapters;
    };
  
    const getFilteredData2 = (): Schema2[] => {
      const selectedCategories = Object.keys(checkedItems).filter(
        (key) => checkedItems[key]
      );
  
      const selectedChapters = Object.keys(checkedChapters).filter(
        (key) => checkedChapters[key]
      );
  
      if (selectedCategories.length === 0 && selectedChapters.length === 0) return data2;
  
      const normalizedSelectedCategories = selectedCategories.map(cat =>
        cat.replace(/\s+/g, '').toLowerCase()
      );
  
      let filteredByCategories = data2;
      if (normalizedSelectedCategories.length > 0) {
        filteredByCategories = data2.filter((item) =>
          normalizedSelectedCategories.includes(item.Tags.replace(/\s+/g, '').toLowerCase()) ||
          normalizedSelectedCategories.includes(item.Category.replace(/\s+/g, '').toLowerCase())
        );
      }
  
      return filteredByCategories;
    };
  
    return (
      <main className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-50 pt-20">
        <div className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 h-[30rem] flex flex-col gap-6 items-center justify-center relative">
          <img
            src="/student-resources-1/library-left.svg"
            alt=""
            className="absolute top-32 left-0 xl:inline-block hidden"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold xl:text-6xl md:text-4xl text-3xl text-white drop-shadow-lg">
              Rising Unicorns Resources
            </h1>
            <p className="w-3/5 text-lg text-center text-white opacity-90">
              Explore practice problems, former Google interview questions, online courses, videos, and more.
            </p>
            <div className="xl:w-1/3 w-fit bg-yellow-300 rounded-full my-4 shadow-lg">
              <button className="flex items-center gap-3 px-7 py-3 rounded-full bg-black text-white w-[98%] hover:bg-gray-800 transition-all duration-300">
                Apply For UF Grants Now
                <Image src="/grant-program/Arrow.svg" alt="" height={10} width={10} />
              </button>
            </div>
            <div className="xl:w-1/3 w-fit bg-yellow-300 rounded-full shadow-lg animate-bounce">
              <button className="flex items-center gap-3 px-7 py-5 rounded-full bg-black text-white w-[98%] hover:bg-gray-800 transition-all duration-300">
                Download Startup Mastery Book
                <Image src="/grant-program/Arrow.svg" alt="" height={10} width={10} />
              </button>
            </div>
          </div>
        </div>
  
        <div className="flex md:flex-row flex-col w-full">
          <div className="md:w-1/3 w-full flex flex-col py-10 px-10 sticky top-0">
            <button
              className="text-start text-blue-600 my-5 font-medium hover:text-blue-800 transition"
              onClick={() =>
                setCheckedItems({
                  maths: false,
                  chemistry: false,
                  physics: false,
                  biology: false,
                  accounts: false,
                  english: false,
                  computerScience: false,
                  mindMaps: false,
                  syllabus: false,
                  importantQuestions: false,
                })
              }
            >
              Clear Filters
            </button>
            <div className="bg-white shadow-lg rounded-lg p-6 h-[50rem]">
              <h3 className="text-xl font-bold mb-4">Category</h3>
              <div className="flex flex-col gap-4">
                {Object.keys(checkedItems).map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center cursor-pointer p-3 rounded-lg border ${
                      checkedItems[item] ? "bg-blue-100 border-blue-400" : "bg-white border-gray-200"
                    } hover:shadow-md transition-all duration-200`}
                    onClick={() => handleItemClick(item)}
                  >
                    <label
                      className={`font-medium text-lg ${
                        checkedItems[item] ? "text-blue-500" : "text-gray-700"
                      }`}
                    >
                      {item.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="flex flex-col gap-8 w-full px-10">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-8">
              {chapters.map((chapter, i) => (
                <div
                  key={i}
                  className={`shadow-lg px-4 py-2 rounded-full cursor-pointer flex items-center justify-center w-32 transition-all duration-300 ${
                    checkedChapters[chapter] ? "bg-yellow-300 shadow-xl scale-105" : "bg-white"
                  } hover:bg-yellow-400`}
                  onClick={() => handleChapterClick(chapter)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{chapter}</h3>
                </div>
              ))}
            </div>
  
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 py-10">
              {getFilteredData().map((data, i) => (
                <Card key={i} data={data} />
              ))}
              {getFilteredData2().map((data2, i) => (
                <Card2 key={i} data={data2} />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  };
  

const Card: React.FC<{ data: Schema }> = ({ data }) => (
    <Link href={data.Links} className="block shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-48 bg-white rounded-lg overflow-hidden">
        <div className="py-5 px-4 flex flex-col gap-3 relative h-full">
          <div className="flex items-center gap-2 mb-3">
            <p className="px-3 py-1 rounded-full bg-blue-200 text-blue-600 text-sm font-semibold">
              {data.Category}
            </p>
            <p className="px-3 py-1 rounded-full bg-green-200 text-green-600 text-sm font-semibold">
              {data.Name}
            </p>
            <p className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-600 text-sm font-semibold">
              {data.Subject}
            </p>
          </div>
          <h3 className="font-semibold text-lg text-gray-700 flex gap-1 items-center"><img src="/adcreative-ai.png" alt="logo" className="h-4 w-4" /> {' '}{data.Chapter}</h3>
          <button className="absolute bottom-3 right-3 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </Link>
  );
  

const Card2: React.FC<{ data: Schema2 }> = ({ data }) => (
    <Link href={data.Links} className="block shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-48 bg-white rounded-lg overflow-hidden">
        <div className="py-5 px-4 flex flex-col gap-3 relative h-full">
          <div className="flex items-center gap-2 mb-3">
            <p className="px-3 py-1 rounded-full bg-pink-200 text-pink-600 text-sm font-semibold">
              {data.Category}
            </p>
            <p className="px-3 py-1 rounded-full bg-purple-200 text-purple-600 text-sm font-semibold">
              {data.Tags}
            </p>
          </div>
          <h3 className="font-semibold text-lg text-gray-700">{data.Tags}</h3>
          <button className="absolute bottom-3 right-3 px-4 py-2 rounded-lg bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </Link>
);
  

export default Page;