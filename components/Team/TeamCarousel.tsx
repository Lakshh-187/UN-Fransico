"use client";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { MdVerified } from "react-icons/md";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const TeamCarousel = () => {
  const teams = [
    {
      name: "Piyush Kumar Singh",
      linkedIn: "ethan-miller-linkedin-id",
      img: '/team/devs/Piyush.png',
      verified: true,
    },
    {
      name: "Kaushik Saha",
      linkedIn: "sarah-thompson-linkedin-id",
      img: '/team/devs/kaushik.jpg',
      verified: false,
    },
    {
      name: "Millium Kaur",
      linkedIn: "emma-li-linkedin-id",
      img: '/team/devs/milium.jpg',
      verified: true,
    },
    {
      name: "Satyansh Mittal",
      linkedIn: "alex-johnson-linkedin-id",
      img: '/team/devs/satyansh.jpg',
      verified: false,
    },
    {
      name: "Ketan Anand",
      linkedIn: "carlos-garcia-linkedin-id",
      img: '/team/devs/ketan.jpg',
      verified: true,
    },
    {
      name: "Aman Ahmed",
      linkedIn: "maya-patel-linkedin-id",
      img: '/team/devs/aman.jpg',
      verified: false,
    },
    {
      name: "Lakshay Chaudhary",
      linkedIn: "liam-chen-linkedin-id",
      img: "/team/managers/lak.jpg",
      verified: true,
    },
    // {
    //   name: "Prince Saini",
    //   linkedIn: "maria-gomez-linkedin-id",
    //   img: "/blog/popular-posts/100YearProblemSolvedbyTeen.webp",
    //   verified: false,
    // },
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
        {teams.map((team, index) => (
          <SwiperSlide key={index}>
            <Card
              name={team.name}
              img={team.img}
              linkedIn={team.linkedIn}
              verified={team.verified}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;

interface CardProps {
  name: string;
  img: string;
  linkedIn: string;
  verified: boolean;
}

const Card: React.FC<CardProps> = ({
  name,
  img,
  linkedIn,
  verified,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-96 lg:h-full mx-3">
      <div className="bg-gray-300 h-full rounded-t-lg">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover aspect-2"
        />
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold mb-2 line-clamp-1 flex items-center justify-center gap-2">{name} {verified && <MdVerified className="text-blue-600 text-xl" />}</h2>
        <a href={linkedIn} target="blank" className="text-blue-600 font-semibold">LinkedIn</a>
        
      </div>
    </div>
  );
};
