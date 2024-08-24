import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const OurBelief = () => {
  return (
    <section className="my-10 p-10 bg-[#f6f8fa]">
      <div className="shadow-2xl rounded-2xl relative">
        {/* Visible in mobile */}
        <div className="flex mx-10 flex-col gap-6 my-20 md:hidden">
          <h3 className="text-3xl font-semibold text-center">Our Belief</h3>
          <p className="text-center text-xl w-3/5 mx-auto">
            &quot;Each person comes into this world with a specific destiny - he
            has something to fulfill, some message has to be delivered, some
            work has to be completed. You are not here accidentally - you are
            here meaningfully. There is a purpose behind you. The whole intends
            to do something through you.&quot;
          </p>
        </div>

        {/* Visible from Tabs */}
        <div className="md:flex items-center justify-center my-20 w-full py-20 pe-10 hidden">
          <div className="w-3/4 rounded-full h-[20rem] lg:h-[30rem] bg-[#a9c3d4] absolute md:-left-48 lg:-left-96 flex justify-end items-center p-5">
            <img
              src="/uniford-main/OurBelief.svg"
              alt="..."
              className="h-full"
            />
          </div>
          <div className="w-full flex flex-col items-end justify-end h-[40rem]">
            <div className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870] flex items-center justify-end">
              {" "}
              <RiDoubleQuotesL className="text-6xl relative bottom-9" />{" "}
              <p>Each person comes into this world</p>{" "}
            </div>
            <p className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870]">
              with a specific destiny
            </p>
            <p className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870]">
              - he has something to fulfill,
            </p>
            <p className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870]">
              some message has to be delivered,
            </p>
            <p className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870]">
              some work has to be com Ieted.
            </p>
            <p className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870]">
              You are not here accidentally
            </p>
            <p className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870]">
              - you are here meaningfully.
            </p>
            <p className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870]">
              There is a purpose behind you.
            </p>
            <div className="text-end text-xl lg:text-4xl w-3/5 h-full font-medium  text-[#0B4870] flex flex-col justify-end relative">
              <p>The whole intends to do something through you.</p>
              <RiDoubleQuotesR className="text-6xl absolute right-0 top-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBelief;
