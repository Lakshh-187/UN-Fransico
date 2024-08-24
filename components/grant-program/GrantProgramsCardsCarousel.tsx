"use client";
import React from "react";
import { CiBookmark } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const PopularEventsCarousel = () => {
  const events = [
    {
      title: "PitchSit Ideathon",
      description: "A dynamic ideation event where participants present their innovative ideas and solutions.",
      venue: "Halles Hills Street",
      date: "February 2024",
      src: "/grant-program/gp1.png",
    },
    {
      title: "TRU 88.6 Radio Pitching Platform",
      description: "TRU Magazine offers its members a unique opportunity to pitch their ideas live on TRU 88.6 Radio.",
      venue: "Morocco Hills",
      date: "February 2024",
      src: "/grant-program/gp2.png",
    },
    {
      title: "Conference 2024",
      description: "An exclusive conference organized by Rising Members, focusing on cutting-edge topics and networking opportunities.",
      venue: "Fliph Colac",
      date: "February 2024",
      src: "/grant-program/gp3.png",
    },
    {
      title: "Award Summit",
      description: "An awards ceremony where the best-performing members are recognized and honored for their achievements.",
      venue: "Fliph Colac",
      date: "2024",
      src: "/grant-program/gp4.png",
    },
    {
      title: "Scholars Graduation at Harvard University",
      description: "Celebrating the graduation of scholars at one of the world’s prestigious institutions.",
      venue: "Harvard University",
      date: "2024",
      src: "/grant-program/gp5.png",
    },
    {
      title: "Be Professional Event",
      description: "A professional development event held at Photo Nica Club, focusing on career growth and networking.",
      venue: "Photo Nica Club",
      date: "2024",
      src: "/grant-program/gp6.png",
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
          rotate: 0,
          stretch: 0,
          depth: 200,
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
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <Card
              title={event.title}
              description={event.description}
              venue={event.venue}
              date={event.date}
              src={event.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularEventsCarousel;

interface CardProps {
  title: string;
  description: string;
  venue: string;
  date?: string;
  src: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  venue,
  date,
  src,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-96 mx-3 transition-transform transform hover:scale-105">
      <div className="bg-gray-300 h-40 rounded-t-lg">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-col bg-[#F5F5F5] p-2 rounded-md">
          <p className="text-gray-900 md:text-base text-sm">{venue}</p>
          {date && <p className="text-gray-600 md:text-base text-sm">{date}</p>}
          <CiBookmark className="text-3xl mt-2" />
        </div>
      </div>
    </div>
  );
};
