"use client";
import React from "react";
import Feedback from "./Feedback";
import { feedbacks, colorPalette } from "@/data/Home/feedbackData";
import Slider from "react-slick";

function FeedbackSlideshow() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          vertical: true,
          speed: 15000,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container w-full bg-[#f6f8fa] my-24 py-5">
        <h3 className="text-4xl font-semibold my-16 text-center">
          Dont just take our word for it,{" "}
          <span className="text-[#28487c]">
            delve into the scholars perspective
          </span>
        </h3>
        <Slider {...settings}>
          {feedbacks.map((item, idx) => {
            let col = Math.floor(Math.random() * colorPalette.length);
            return (
              <Feedback
                content={item.content}
                gender={item.gender}
                author={item.author}
                color={colorPalette[col]}
                key={idx}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default FeedbackSlideshow;
