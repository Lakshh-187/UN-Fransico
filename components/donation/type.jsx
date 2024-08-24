"use client";
import React from "react";
import { useState } from "react";

function Type() {
  //conditional rendering of styles of Type buttons
  const [selectedButton, setSelectedButton] = useState(1);

  const [selectName, setSelectName] = useState("Name");

  const buttonStyle = (selectedButton, buttonId) => {
    return {
      backgroundColor: selectedButton === buttonId ? "#eae8fb" : "initial",
      color: selectedButton === buttonId ? "initial" : "black",
      borderStyle: selectedButton === buttonId ? "initial" : "solid",
    };
  };

  return (
    <div className="flex pt-7 sm:pt-0 sm:mt-7 sm:w-[80%] items-center justify-center ">
      <button
        className="flex justify-center items-center text-[#203a61] font-semibold w-36 sm:w-1/2  h-10 text-sm  bg-slate-600 border-gray-300 border rounded-l-md"
        onClick={() => setSelectedButton(1)}
        style={buttonStyle(selectedButton, 1)}
        name="Name"
      >
        individual
      </button>

      <button
        className="flex justify-center items-center text-[#203a61] w-36 sm:w-1/2  h-10  bg-slate-600 text-sm rounded-r-md border-gray-300 border font-semibold"
        onClick={() => setSelectedButton(2)}
        style={buttonStyle(selectedButton, 2)}
      >
        Organisation
      </button>
    </div>
  );
}

export default Type;
