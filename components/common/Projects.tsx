"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { researchers } from "@/data/Home/data";
import Link from "next/link";

type Props = {};

const Projects: React.FC<Props> = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
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
    <section className="w-full px-10 pb-10 mb-32">
      <div className="pb-10 shadow-2xl rounded-2xl bg-transparent pt-7">
        <div className="bg-transparent">
          <div className="relative w-full max-w-5xl mx-auto bg-transparent">
            <Slider {...settings}>
              {researchers.map((item, index) => (
                <div key={index} className="p-4">
                  <Card item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

interface CardProps {
  item: {
    img: string;
    title: string;
    content: string;
    buttonText?: string;
    link?: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => (
  <div className="w-full h-full bg-white rounded-md shadow-lg overflow-hidden">
    <div className="w-full">
      <Image
        width={500}
        height={500}
        priority
        src={item.img}
        alt={item.title}
        className="h-full w-full object-contain rounded-md"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="text-gray-700 text-xs border border-slate-400 rounded-lg p-2">
        {item.content}
      </p>
      {item.buttonText === "Explore Now" ? (
        <Link href={"/premium-resources"}>
          <button className="text-white bg-[#28487c] p-2 w-3/5 rounded-xl mt-2 inline-block">
            {item.buttonText}
          </button>
        </Link>
      ) : (
        <button className="text-white bg-[#28487c] p-2 w-3/5 rounded-xl mt-2">
          {item.buttonText}
        </button>
      )}
    </div>
  </div>
);
