"use client";
import React, { useEffect } from "react";
import ToolContents from "@/components/tools/ToolContents";
import { useSelector } from "react-redux";
function Tool({ toolImage, toolName, description, toolContent, id }) {
  const { eduApps, toolsArray } = useSelector((state) => state.tools);

  const slideLeft = () => {
    var slider = document.getElementById(`tool${id}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(`tool${id}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="w-full select-none md:h-full h-[400px] bg-[#F9F9F9] flex-col">
        <div className="md:px-16 px-4 py-2 md:pt-12">
          <h1 className="font-bold text-2xl md:text-4xl">{toolName}</h1>
          <p className="text-gray-400 py-2">{description}</p>
        </div>
        {/* tools slideshow */}
        <div className="h-max p-4 overflow-hidden flex items-center md:p-8">
          <button
            className="opacity-50 cursor-pointer select-none hover:opacity-100"
            onClick={slideLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
          <div
            id={`tool${id}`}
            className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-5"
          >
            {toolContent.map((item, idx) => {
              console.log(item);
              return (
                <ToolContents
                  img={item.imgSrc ? item.imgSrc : item.imgSrc}
                  name={item.title ? item.title : item.Title}
                  description={item.description}
                  key={idx}
                />
              );
            })}
          </div>
          <button
            className="opacity-50 cursor-pointer select-none hover:opacity-100"
            onClick={slideRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tool;
