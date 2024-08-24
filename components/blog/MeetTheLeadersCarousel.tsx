"use client";
import React, { useState } from "react";
import { innovators } from "@/data/rising-unicorns/UnicornsData";

import { GoPlus } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const MeetTheLeadersCarousel = () => {
  const posts = [
    {
      name: "John Abrahim",
      age: 24,
      src: "/blog/flower.avif",
      role: "Event Manager",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum unde, minima, earum consequuntur magni vero asperiores, reiciendis modi ducimus placeat? Eligendi perspiciatis dicta vero ab corrupti optio accusamus possimus ut illum quidem, pariatur quam dolor repellendus accusantium ad iusto ratione obcaecati. Rerum, animi atque quod quaerat debitis ipsum obcaecati?",
    },
    {
      name: "Salman Khan",
      age: 28,
      src: "/blog/flower.avif",
      role: "Event Manager",
      description: "Description of another event...",
    },
    {
      name: "Sharukh Khan",
      age: 45,
      src: "/blog/flower.avif",
      role: "Event Manager",
      description: "Description of another event...",
    },
    {
      name: "Preety Zinta",
      age: 32,
      src: "/blog/flower.avif",
      role: "Event Manager",
      description: "Description of another event...",
    },
    {
      name: "Madhuri Dixit",
      age: 26,
      src: "/blog/flower.avif",
      role: "Event Manager",
      description: "Description of another event...",
    },
    {
      name: "Mr. Perfectionist",
      age: 35,
      src: "/blog/flower.avif",
      role: "Event Manager",
      description: "Description of another event...",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        speed={1000}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        coverflowEffect={{
          rotate: -10,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {innovators.map((Innovator, index) => (
          <SwiperSlide key={index}>
            <Card
              name={Innovator.name}
              age={Innovator.age}
              src={Innovator.profileImage}
              role={Innovator.designation}
              description={Innovator.about}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetTheLeadersCarousel;

interface CardProps {
  name: string;
  age: number;
  src: string;
  role: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, age, src, role, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md lg:h-[35rem] md:h-[25rem] h-[30rem] mx-3 relative overflow-hidden transition-all duration-500">
      <div className="p-4">
        <img src={src} alt="..." className="h-full w-full rounded-lg aspect-1"/>
      </div>
      <div className="p-4 w-full absolute bottom-0 rounded-lg">
        <div className="bg-[#668cd8] p-4 flex flex-col rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-bold lg:text-xl  text-base">
                Name: <span>{name}</span>
              </h3>
              <p className="text-slate-300 font-semibold">
                Age: <span>{age}</span>
              </p>
              <p className="text-slate-300 font-semibold">
                Role: <span>{role}</span>
              </p>
            </div>
            <div
              className="w-10 h-10 p-3 bg-white text-blue rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            >
              {isDescriptionVisible ? (
                <p className="text-3xl">-</p>
              ) : (
                <GoPlus className="text-3xl" />
              )}
            </div>
          </div>
          <div
            className={`flex justify-between mt-4 text-white transition-all duration-500 ${
              isDescriptionVisible ? "max-h-96 opacity-100 duration-500" : "max-h-0 opacity-0"
            }`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
