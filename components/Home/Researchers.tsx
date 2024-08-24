"use client";
import React from "react";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Projects from "../common/Projects";

function Researchers() {
  const router = useRouter();
  const sliderRef = useRef<any>();
  const next = () => {
    sliderRef.current.slickNext();
  };
  const prev = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="w-11/12 mx-auto mb-10 mt-16 text-3xl">Explore all the premium and career opportunities</h1>
      <Projects />
    </div>
  );
}

export default Researchers;
