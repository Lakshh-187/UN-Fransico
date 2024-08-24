"use client";
import React, { useState, useEffect } from "react";
import MobileHeroCarousel from "./MobileHeroCarousel";

const HeroSectionCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "The Rising Unicorns Awards",
      description:
        "Join us for the Rising Unicorns Awards, celebrating extraordinary young talents and their groundbreaking achievements!",
      image: "/blog/daildoseimage1.jpg",
    },
    {
      title: "Inspiring Stories of Young Innovators",
      description:
        "Stay tuned for our upcoming podcast, where we dive into the inspiring stories of young innovators and changemakers!",
      image: "/blog/dailydoseimage2.jpg",
    },
    {
      title: "Young Social Activist Wows the World with Visionary Impact",
      description:
        "A young social activist wows the world with their transformative impact and visionary initiatives.",
      image: "/blog/dailydoseimage3.jpg",
    },
    {
      title: "Uniting Trailblazing Innovators and Changemakers",
      description:
        "Join us for our first conference, uniting trailblazing young innovators and changemakers to inspire and transform the future!",
      image: "/blog/dailydoseimage4.jpg",
    },
    {
      title: "Empowering Young Women Leaders and Innovators",
      description:
        "SHE Inspire Event: A gathering to celebrate, uplift, and empower young women leaders and innovators, igniting the spark of inspiration for a brighter future",
      image: "/blog/dailydoseimage5.jpg",
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Move to next slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full p-10 relative mt-10 mb-32 ">
      <BackgroundBlurs />
      {/* Tablets, Laptops, Desktops */}
      <div className="pb-10  bg-transparent  md:block hidden">
        <div className="bg-transparent">
          <div className="mt-20 mb-40 flex flex-col  gap-8">
            <h1 className="text-center text-5xl font-bold text-[#172b6e]">
              Welcome to Your Daily Dose of Inspiration!
            </h1>
            <p className="font-medium text-2xl text-[##5A6F93] text-center md:w-3/5 w-full mx-auto">
              Tips, stories, and inspiration to enrich your everyday
              experiences.
              <br />-Rising Scholars
            </p>
          </div>
          <div className="relative w-full max-w-5xl mx-auto bg-transparent">
            <div className="flex justify-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`transition-transform duration-1000 ease-in-out transform ${
                    index === currentIndex
                      ? "scale-150 opacity-100 z-10"
                      : index ===
                          (currentIndex - 1 + items.length) % items.length ||
                        index === (currentIndex + 1) % items.length
                      ? "scale-75 opacity-50 z-0"
                      : "hidden"
                  }`}
                  style={{ minWidth: "33.33%" }}
                >
                  <div className="p-4">
                    <Card item={item} />
                  </div>
                </div>
              ))}
              <div className="absolute -bottom-32 w-full flex justify-center space-x-2 ">
                {items.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      currentIndex === index ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <MobileHeroCarousel items={items} />
    </section>
  );
};

export default HeroSectionCarousel;

interface CardProps {
  item: {
    title: string;
    description: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => (
  <div className="w-full h-full bg-white rounded-md shadow-lg overflow-hidden">
    <div className="w-full">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-contain rounded-md"
      />
    </div>
    <div className="p-4 flex flex-col gap-2">
      <h3 className="font-semibold text-sm">{item.title}</h3>
      <p className="text-gray-700 text-xs border border-slate-400 rounded-lg p-2">
        {item.description}
      </p>
    </div>
  </div>
);

const BackgroundBlurs = () => (
  <>
    <div className="w-96 h-96 rounded-full blur-3xl bg-[#86A6DF80] absolute top-0 -left-40 -z-10" />
    <div className="w-1/2 h-1/2 rounded-full blur-3xl bg-[#7191C3B2] absolute top-0 right-0 -z-10" />
    <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 right-20 -z-10" />
    <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 left-20 -z-10" />
  </>
);
