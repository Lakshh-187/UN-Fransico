"use client";
import React from "react";

function Questions({
  question,
  active,
  updateQuest,
  id,
}: {
  question: any;
  active: any;
  updateQuest: any;
  id: any;
}) {
  if (active == 1) {
    return (
      <>
        <div className="bg-black text-white border-gray-400 p-4 rounded-xl border m-2">
          {question}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="bg-white border-gray-400 p-4 rounded-xl border m-2 text-black"
          onClick={() => {
            updateQuest(id, 1);
          }}
        >
          {question}
        </div>
      </>
    );
  }
}

export default Questions;
