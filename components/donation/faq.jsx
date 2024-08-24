import React from "react";
import { questions } from "../../data/Donation/faq";

function faq() {
  return (
    <div className="w-[87%] sm:w-1/2 bg-white flex flex-col items-center rounded-xl p-4 pt-5 shadow-lg mb-3 md:w-full gap-2">
      <p className="font-semibold  mr-auto text-lg">FAQs</p>
      <div className="w-[90%] space-y-2">
        {questions.map((item, idx) => (
          <li className="font-light text-sm" key={idx}>
            {item.faq}
          </li>
        ))}
      </div>

      <div className="flex gap-1 mr-auto justify-center items-center mt-2">
        <p className="font-light text-sm">Have an account?</p>
        <a className="text-[#203a61] font-semibold">sign in</a>
      </div>
    </div>
  );
}

export default faq;
