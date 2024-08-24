"use client";
import React, { useState } from "react";
import Link from "next/link";

import { globalPrograms } from "@/data/uniford-main/WhoAreWe";

type Category = "Global Programs" | "Our Vision" | "Our Mission";

interface Program {
  img: string;
  programDesc: string;
  programName: string;
  readMoreLink: string;
}

interface CategoryData {
  [key: string]: Program[];
}

const categories: CategoryData = {
  "Global Programs": globalPrograms,
  "Our Vision": globalPrograms,
  "Our Mission": globalPrograms,
};

const ITEMS_PER_PAGE = 6;

const CategoryButton: React.FC<{
  category: string;
  active: boolean;
  onClick: () => void;
}> = ({ category, active, onClick }) => (
  <button
    className={`p-4 rounded-tl-xl rounded-bl-xl min-w-[20rem] lg:min-w-full  ${
      active
        ? "bg-[#0B4870] text-white"
        : "bg-slate-100 text-[#0B4870] h-[8rem] "
    }`}
    onClick={onClick}
  >
    <h3 className="font-bold text-2xl">{category}</h3>
    <p>
      {active
        ? "Fringilla Ut Morbi Tincidunt Augue Interdum Velit Euismod"
        : ""}
    </p>
  </button>
);

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}> = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => (
  <div className="flex justify-between items-center mt-4">
    <button
      onClick={onPreviousPage}
      disabled={currentPage === 1}
      className={`${
        currentPage === 1
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-[#0f2c72] text-white"
      } px-4 py-2 rounded-md`}
    >
      Previous
    </button>
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            currentPage === index + 1 ? "bg-[#0f2c72]" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
    <button
      onClick={onNextPage}
      disabled={currentPage === totalPages}
      className={`${
        currentPage === totalPages
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-[#0f2c72] text-white"
      } px-4 py-2 rounded-md`}
    >
      Next
    </button>
  </div>
);

const WhoAreWe: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Global Programs");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const activeItems = categories[activeCategory];
  const totalPages = Math.ceil(activeItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = activeItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="py-20 my-20 px-4 bg-[#f8f9fa]">
      <div className="my-8">
        <h3 className="text-5xl text-center text-[#4d5562] font-bold mb-10">
          Who are <span className="text-[#0f2c72]">We?</span>
        </h3>
        <p className="md:w-3/4 w-full  text-[#4f5561] font-serif md:text-xl text-lg font-semibold text-center mx-auto">
          Our vision is to inspire and empower communities worldwide Our mission
          is to uncover and nurture hidden gems, transforming potential into
          impactful leadership and success,
        </p>
      </div>
      <div className="flex flex-col gap-10 rounded-2xl">
        <div className="w-full flex lg:flex-row flex-col md:px-6 p-2">
          <div className="flex lg:flex-col flex-row overflow-x-auto gap-10 lg:gap-20 lg:w-1/5 w-full py-6 ">
            {Object.keys(categories).map((category) => (
              <CategoryButton
                key={category}
                category={category}
                active={activeCategory === category}
                onClick={() => handleCategoryChange(category as Category)}
              />
            ))}
          </div>
          <div className="py-6 lg:w-4/5 w-full">
            <div className="bg-[#0B4870] p-4 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl rounded-bl-2xl lg:rounded-tl-none lg:rounded-bl-none ">
              {activeCategory === "Our Vision" ? (
                <OurVision />
              ) : activeCategory === "Our Mission" ? (
                <OurMission />
              ) : (
                <div className="md:grid xl:grid-cols-3 sm:grid-cols-2 flex flex-row overflow-x-auto xl:overflow-hidden gap-3 ">
                  {paginatedItems.map((item, index) => (
                    <div key={index} className="rounded-xl">
                      <UnicornsCards {...item} />
                    </div>
                  ))}
                </div>
              )}
              {/* Pagination Section */}
              {activeCategory !== "Our Vision" &&
                activeCategory !== "Our Mission" && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UnicornsCards: React.FC<Program> = ({
  img,
  programDesc,
  programName,
  readMoreLink,
}) => (
  <div className="md:w-fit flex flex-col rounded-xl p-4 min-w-[20rem]">
    <div className="bg-[#C8DCFC] p-4 rounded-tr-2xl rounded-tl-2xl">
      <img src={img} alt="..." className="h-full w-full rounded-2xl" />
    </div>
    <div className="bg-white  p-4 rounded-bl-2xl rounded-br-2xl flex flex-col gap-3">
      <h3 className="text-[#002D76] underline">{programName}</h3>
      <p className="line-clamp-3 text-black">{programDesc}</p>
      {/* <Link href={readMoreLink} className="text-blue-700 underline">
        Read More
      </Link> */}
    </div>
  </div>
);

const OurVision: React.FC = () => (
  <section className="w-full md:my-5 my-2 md:px-5  relative">
    <div className="md:text-4xl lg:p-10 md:p-5 p-3 bg-[#99B9ED] absolute left-0 md:top-16 top-10 rounded-tr-2xl rounded-br-2xl">
      <h3>Our Vision</h3>
    </div>
    <div className="bg-[#99B9EE] md:p-10 p-5 rounded-2xl">
      <div className="bg-[#222E50] pt-20 rounded-2xl pb-10 px-3 md:px-0">
        <h3 className="md:text-4xl text-white text-end md:w-4/5 lg:w-3/5 w-full mx-auto">
          To give these rising stars the recognition and support they deserve.
          We want to create a community where
        </h3>
        <div className="flex items-center md:justify-between justify-center my-10 pe-20">
          <img
            src="/tempabout/bulb.png"
            alt="..."
            className="lg:h-56 lg:w-96 md:h-48 md:w-48 h-32 w-36 md:inline-block hidden"
          />
          <p className="text-white md:text-2xl md:w-2/5 w-full text-sm md:text-end text-center">
            We believe in building a brighter future by uplifting the next
            generation of leaders.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const OurMission: React.FC = () => (
  <section className="bg-[#8ca1db47] w-full md:my-10 my-2 rounded-2xl">
    <div className="md:p-10 p-5 flex flex-col gap-10">
      <h3 className="md:text-5xl text-3xl font-semibold text-white md:my-10 my-5">
        Our Mission
      </h3>
      <p className="font-medium md:text-4xl text-xl text-slate-200 md:w-3/5 w-full mx-auto">
        Provide a platform for these young talents to connect, collaborate, and
        grow.
      </p>
      <div className="flex items-center justify-end">
        <p className="text-white md:text-lg text-base text-end md:w-3/5 w-4/5 ">
          We&apos;re dedicated to sharing their stories, inspiring others, and
          providing opportunities for them to thrive. By highlighting their
          achievements and championing their causes, we aim to ignite a spark of
          hope and possibility in every young soul.
        </p>
      </div>
    </div>
  </section>
);

export default WhoAreWe;
