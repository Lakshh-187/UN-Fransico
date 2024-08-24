import Link from "next/link";
import React, { useState } from "react";
import { GetInvolvedData, Section } from "@/data/uniford-main/GetInvolved";

const GetInvolved = () => {
  return (
    <section className="w-full bg-[#f6f8fa] lg:p-20 py-10">
      <h1 className="font-bold text-[3rem] text-center my-10 text-[#4f5561]">
        Get <span className="text-[#263960]">Involved</span>
      </h1>
      <p className="text-xl text-[#4f5561] font-semibold font-serif md:w-3/4 w-full text-center mx-auto mb-6">
        We rise by uncovering hidden gems and empowering innovators to lead the way. Through creativity and resilience, we transform potential into greatness,
      </p>
      <div className="mb-20 shadow-2xl rounded-2xl lg:p-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-10 gap-3">
          {GetInvolvedData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;

const Card = ({ src, title, description, subtitle }: Section) => {
  const handleClick = () => {
    const joinUsForm = document.getElementById("join-us-form");
    if (joinUsForm) {
      joinUsForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="shadow-md rounded-xl">
      <div className="w-full flex p-3 border rounded-xl">
        <img src={src} alt={title} className="mx-auto" />
      </div>
      <div className="lg:p-10 p-5 flex flex-col gap-3">
        <Link href="#" className="text-xl font-bold text-[#4D4D4F]">
          {title}
        </Link>
        <p className="text-[#4f5561] font-semibold">{subtitle}</p>
        <p className="font-normal text-black line-clamp-3">{description}</p>
        <button
          onClick={handleClick}
          className="bg-[#0B4870] w-fit text-white px-3 py-2 rounded-full text-sm md:text-base"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};
