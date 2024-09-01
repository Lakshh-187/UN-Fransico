"use client";
import React, { useState, useEffect, Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  fullstack,
  frontend,
  cyberSecurity,
  blockchain,
  softwareDeveloper,
  programmingLanguages,
  dataScience,
} from "@/data/computer-resources/data";

import ProtectedRoute from "@/components/protected-component/page";

interface Schema {
  Title?: string;
  Category: string;
  Link?: string;
  Topic: string;
  Track?: string;
}

interface CheckedItems {
  [key: string]: boolean;
}

type TrackKey =
  | "fullstack"
  | "frontend"
  | "cyberSecurity"
  | "blockchain"
  | "softwareDeveloper"
  | "programmingLanguages"
  | "dataScience";

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const Comp = () => {
  const categories = ["Website", "Article", "Courses", "Video", "Notes"];
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    website: false,
    article: false,
    courses: false,
    video: false,
    notes: false,
  });

  const resourcesData: { [key in TrackKey]: Schema[] } = {
    fullstack,
    frontend,
    cyberSecurity,
    blockchain,
    softwareDeveloper,
    programmingLanguages,
    dataScience,
  };

  const searchParams = useSearchParams();
  const track = searchParams.get("track") as TrackKey | null;
  const topic = searchParams.get("topic");

  const [dumData, setDumData] = useState<Schema[]>([]);

  useEffect(() => {
    if (track) {
      setDumData(resourcesData[track] || []);
    }
  }, [track]);

  const handleItemClick = (item: string) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [item.toLowerCase()]: !prevItems[item.toLowerCase()],
    }));
  };

  const getFilteredData = (): Schema[] => {
    const selectedCategories = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );

    let filteredData: Schema[] = [];
    dumData.forEach((item) => {
      if (item.Topic.toLowerCase() === topic?.toLowerCase()) {
        filteredData.push(item);
      }
    });

    if (selectedCategories.length === 0) return filteredData;

    return filteredData.filter(item =>
      selectedCategories.includes(item.Category.toLowerCase())
    );
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen w-full bg-[#fafaf8] pt-20">
        <div className="w-full bg-yellow- h-[28rem] flex flex-col gap-2 items-center justify-center relative bg-yellow-500">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/uniford-firebase.appspot.com/o/images%2Flibrary-left.svg?alt=media&token=4820c28b-022c-4cd7-86af-cabc72b6a591"
            alt="not"
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
                  alt=""
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
                  alt=""
                  height={9.93}
                  width={9.93}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center flex-wrap gap-2 mt-8 md:px-10 px-4">
              {categories.map((category, i) => (
                <div
                  key={i}
                  className={`bg-white shadow-md px-4 py-1 rounded-full cursor-pointer flex items-center justify-center flex-wrap w-28 ${
                    checkedItems[category.toLowerCase()]
                      ? "bg-yellow-200"
                      : "bg-white"
                  }`}
                  onClick={() => handleItemClick(category)}
                >
                  <h3 className="text-lg font-semibold my-2">{category}</h3>
                </div>
              ))}
            </div>

            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 py-10 md:px-10 px-10">
              {getFilteredData().length > 0 ? (
                getFilteredData().map((data, i) => (
                  <Card key={i} data={data} />
                ))
              ) : (
                <div className="col-span-full text-center">
                  <p className="text-xl font-semibold">No items with the selected filter</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};

// const Card: React.FC<{ data: Schema }> = ({ data }) => (
//   <Link href={data.Link ?? "/"}>
//     <div className="shadow-lg block w-full h-48 bg-white rounded-md cursor-pointer">
//       <div className="py-5 px-3 flex flex-col gap-3 relative h-full">
//         <div className="flex items-center justify-start gap-2">
//           <p className="px-3 py-1 rounded-full w-fit bg-gray-200 text-gray-500 font-semibold">
//             {data.Category}
//           </p>
//           <p className="px-3 py-1 rounded-full w-fit bg-gray-200 text-gray-500 font-semibold">
//             {data.Topic}
//           </p>
//         </div>
//         <h3 className="font-semibold">{data.Title}</h3>
//         <button className="absolute bottom-3 px-3 py-1 rounded-full w-fit bg-blue-200 text-gray-500 font-semibold">
//           Explore
//         </button>
//       </div>
//     </div>
//   </Link>
// );

const Card: React.FC<{ data: Schema }> = ({ data }) => (
  <Link href={data['Link'] ?? "/"}>
    <div
      className="bg-white border-2 shadow-lg rounded-lg p-7 transition-transform duration-300 hover:shadow-xl hover:scale-105 relative"
      style={{
        borderColor: 'hsl(210, 70%, 60%)', // Updated color scheme
      }}
    >
      {/* Featured Badge */}
      <div className="absolute top-1 left-0 bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-semibold">
        Featured
      </div>

      {/* Categories and Topics */}
      <div className="flex items-center justify-start gap-2 mb-4">
        <p className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm">
          {data.Category}
        </p>
        <p className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm">
          {data.Topic}
        </p>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 text-lg mb-6">
        {data.Title}
      </h3>

      {/* Explore Button */}
      <button className="absolute bottom-1 left-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300">
        Explore
      </button>
    </div>
  </Link>
);

export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<div>Loading navigation...</div>}>
          <Comp />
        </Suspense>
      </nav>
      <h1>Dashboard</h1>
    </>
  );
}
