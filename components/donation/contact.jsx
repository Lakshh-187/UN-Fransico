import React from "react";

function contact() {
  return (
    <div className="w-[87%] sm:w-1/2 pb-8 bg-white flex flex-col items-center rounded-lg p-3 shadow-lg sm:h-1/3  gap-2 md:w-full">
      <p className="w-1/2 mt-3 font-semibold mr-auto text-xl">
        For Collabs and Sponserships
      </p>

      <input
        type="text"
        placeholder="Mail ID"
        className="outline-none mt-3 p-3 w-[80%] h-10 border-gray-300 border rounded-xl"
      />
      <input
        type="text"
        placeholder="Phone no."
        className="outline-none mt-1 p-3 w-[80%] h-10 border-gray-300 border rounded-xl"
      />
      <input
        type="text"
        placeholder="Description"
        className="outline-none  mt-1 p-3 w-[80%] h-32 align-text-top border-gray-300 border rounded-xl"
      />

      <button className="h-10 w-[60%] bg-[#203a63] text-white text-center shadow-lg rounded-lg mt-5 ">
        Submit
      </button>
    </div>
  );
}

export default contact;
