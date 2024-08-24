"use client";
import React, { useState, useEffect } from "react";
import TeamCarousel from "./TeamCarousel";

interface Leader {
  id: number;
  name: string;
  title: string;
  location: string;
  imgSrc: string;
  description: string;
}

const leadersData: Leader[] = [
  {
    id: 1,
    name: "Reet Dua",
    title: "Program Lead",
    location: "India",
    imgSrc: "/team/program/reet.jpg",
    description:
      "Reet Dua is the program lead of the Rising Scholar Program. Known for her strategic mindset and a plethora of visionary ideas, she drives the program towards achieving its goals with innovative approaches",
  },
  {
    id: 2,
    name: "Heather Dougal",
    title: "Program Lead",
    location: "India",
    imgSrc: "/team/program/texas.jpg",
    description:
      "Heather Dougal, the program lead and public relations manager, also spearheads the Girl Up initiative at Texas University. Her leadership in these roles demonstrates her commitment to empowering young women and enhancing the program's public outreach",
  },
  {
    id: 3,
    name: "Preety Ranawat",
    title: "Program Lead",
    location: "India",
    imgSrc: "/team/program/preety.jpg",
    description:
      "Preeti Ranawat leads the Grow Up with Scholar Program. As a psychologist and a fierce competitor, she combines her understanding of human behavior with her competitive spirit to foster an environment of growth and excellence.",
  },

  // Add more leaders as needed
];

const OurGlobalLeaders: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("India");
  const [carouselKey, setCarouselKey] = useState<number>(0);

  const filteredLeaders = leadersData.filter(
    (leader) => leader.location === selectedLocation
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  useEffect(() => {
    setCarouselKey((prevKey) => prevKey + 1);
  }, [selectedLocation]);

  return (
    <section className="text-center my-10">
      <h2 className="text-[#263960] md:text-6xl text-4xl font-semibold text-start">
        Our Development Teams
      </h2>
      <p className="my-8 text-start text-xl md:w-3/5 w-full">
        UniFord University is a proud initiative of the UniFord Foundation, an
        NGO committed to empowering education and fostering innovation.
      </p>
      {/* <div className="mb-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
        {["India", "USA", "Australia", "Brazil", "UAE"].map((location) => (
          <button
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`mx-2 py-2 px-4 rounded-full md:w-56 w-40 ${
              selectedLocation === location
                ? "bg-[#2E4D81] text-white"
                : "bg-[#E6EFFF] text-black"
            }`}
          >
            {location}
          </button>
        ))}
      </div> */}
      <div className="slider-container md:px-5">
        <TeamCarousel/>
      </div>
    </section>
  );
};

export default OurGlobalLeaders;

interface CarouselCardProps {
  name: string;
  title: string;
  description: string;
  imgSrc: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  name,
  title,
  description,
  imgSrc,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[25rem] overflow-hidden rounded-lg shadow-lg bg-gradient-radial from-blue-300 to-blue-800"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imgSrc} alt={name} className="w-full h-[25rem] object-cover" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{title}</p>
      </div>
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 text-white p-4 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="lg:text-lg text-base text-start">{description}</p>
      </div>
    </div>
  );
};
