import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

type MobileHeroCarouselProps = {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
};

const MobileHeroCarousel: React.FC<MobileHeroCarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full md:hidden">
      <div className="mt-20 mb-40 flex flex-col gap-8">
        <h1 className="text-center text-5xl font-bold text-[#172b6e]">
          Welcome to Your Daily Dose of Inspiration!{" "}
        </h1>
        <p className="font-medium text-2xl text-[##5A6F93] text-center">
          Tips, stories, and inspiration to enrich your everyday experiences.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileHeroCarousel;

interface CardProps {
  item: {
    title: string;
    description: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => (
  <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden mx-4">
    <div className="w-full">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-contain rounded-md"
      />
    </div>
    <div className="p-4 flex flex-col gap-2">
      <h3 className="font-bold line-clamp-1">{item.title}</h3>
      <p className="text-gray-700 text-xs line-clamp-2">{item.description}</p>
    </div>
  </div>
);
