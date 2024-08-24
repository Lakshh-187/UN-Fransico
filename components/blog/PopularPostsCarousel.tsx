"use client";
import React from "react";
import { CiBookmark } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const PopularPostsCarousel = () => {
  const posts = [
    {
      title: "15-Year-Old Invents Life-Saving Device for Diabetics",
      description:
        "Ethan Miller's smart insulin patch monitors blood sugar levels and administers insulin automatically, revolutionizing diabetes management.",
      name: "Ethan Miller",
      category: "Innovator",
      src: "/blog/popular-posts/15YearOld'sEarlyAlzheimer'sDetectionApp.webp",
    },
    {
      title: "Teen Prodigy Discovers New Planet in Solar System",
      description:
        "At just 16, Sarah Thompson identified a previously unknown planet using data from a school telescope project.",
      name: "Sarah Thompson",
      category: "Innovator",
      src: "/blog/popular-posts/TeenProdigyDiscoversNewPlanet.webp",
    },
    {
      title: "14-Year-Old Develops Cancer Detection Tool",
      description:
        "Emma Li's early-stage cancer detection kit, created in her home lab, could save millions of lives.",
      name: "Emma Li",
      category: "Innovator",
      src: "/blog/popular-posts/14YearOld'sEarlyCancerDetectionKit.webp",
    },
    {
      title:
        "Teen Hacker Exposes Major Security Flaws in Global Banking Systems",
      description:
        "16-year-old Alex Johnson's cybersecurity skills help protect millions from potential financial fraud.",
      name: "Alex Johnson",
      category: "Innovator",
      src: "/blog/popular-posts/Teen Hacker ExposesBankingSecurityFlaws.webp",
    },
    {
      title: "17-Year-Old Creates Affordable Water Desalination Device",
      description:
        "Carlos Garcia's invention provides clean drinking water to coastal communities affected by water scarcity.",
      name: "Carlos Garcia",
      category: "Innovator",
      src: "/blog/popular-posts/17-Year-Old'sAffordableCleanWaterSolution.webp",
    },
    {
      title: "Young Scientist Finds Cure for Antibiotic-Resistant Bacteria",
      description:
        "15-year-old Maya Patel's breakthrough research could transform the fight against superbugs.",
      name: "Maya Patel",
      category: "Innovator",
      src: "/blog/popular-posts/mayapatel.jpg",
    },
    {
      title: "16-Year-Old Develops Eco-Friendly Battery from Household Waste",
      description:
        "Liam Chen's innovative battery made from kitchen scraps offers a sustainable alternative to traditional energy sources.",
      name: "Liam Chen",
      category: "Innovator",
      src: "/blog/popular-posts/16YearOld'sEcoBatteryFromHouseholdWaste.webp",
    },
    {
      title: "Teen Mathematician Solves 100-Year-Old Mathematical Problem",
      description:
        "At 17, Maria Gomez provided a solution to a complex problem that had stumped mathematicians for decades.",
      name: "Maria Gomez",
      category: "Innovator",
      src: "/blog/popular-posts/100YearProblemSolvedbyTeen.webp",
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
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <Card
              src={post.src}
              title={post.title}
              description={post.description}
              author={post.name}
              category={post.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularPostsCarousel;

interface CardProps {
  title: string;
  description: string;
  author: string;
  category: string;
  src: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  author,
  category,
  src,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-96 lg:h-fullmx-3">
      <div className="bg-gray-300 h-40 rounded-t-lg">
        <img
          src={src}
          alt="..."
          className="h-full w-full object-cover aspect-2"
        />
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between bg-[#F5F5F5] p-2 rounded-md">
          <div className="flex items-center justify-center">
            <div className="ml-4">
              <p className="text-gray-900 md:text-base text-sm">{author}</p>
              <p className="text-gray-600 md:text-base text-sm">{category}</p>
            </div>
          </div>
          <CiBookmark className="text-3xl" />
        </div>
      </div>
    </div>
  );
};
