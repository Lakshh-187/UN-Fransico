import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



type MobileHeroCarouselProps = {
    items: {
      title: string;
      oneLiner: string;
      description: string;
      image: string;
    }[];
  };

const DailyUpdatesMobileCarousel: React.FC<MobileHeroCarouselProps> = ({ items }) => {
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
              Get Your Daily Updates Here
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
}

export default DailyUpdatesMobileCarousel


interface CardProps {
    item: {
      title: string;
      description: string;
      image: string;
    };
  }
  
  const Card: React.FC<CardProps> = ({ item }) => (
    <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="w-full">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain rounded-md"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p className="text-gray-700 text-xs ">{item.description}</p>
      </div>
    </div>
  );