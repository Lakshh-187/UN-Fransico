import React from "react";

function ToolContents({ img, name, description }) {
  return (
    <div className="flex-col items-center justify-center w-1/3 gap-x-4 p-4 inline-block bg-white rounded-2xl">
      <div className="bg-gray-100/10  rounded-md text-white items-center flex mb-4">
        <p className="mx-auto">
          <img src={img} alt="" className="w-full h-60 rounded-xl" />
        </p>
      </div>
      <h1 className="font-bold md:text-xl">{name}</h1>
      <p className="md:mb-6 md:text-sm  whitespace-normal h-20 break-words text-xs text-gray-400">
        {description}
      </p>
      <div className="w-full flex justify-end">
        <button className="bg-[#B9E390] px-4 py-1 rounded-full">Open</button>
      </div>
    </div>
  );
}

export default ToolContents;
