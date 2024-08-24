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

const TopPostsCarousel = () => {
  const posts = [
    {
      title: "15-Year-Old's App Helps Detect Early Signs of Alzheimer's",
      description:
        "Jessica Wang's app uses cognitive games to identify early symptoms of Alzheimer's disease.",
      name: "Jessica Wang",
      category: "Innovator",
      src: "https://media.allure.com/photos/5e934a492653070008c3b511/16:9/w_2656,h_1494,c_limit/jessica-wang-lede.jpg",
    },
    {
      title: "Teen Builds Prosthetic Arm Controlled by Brain Waves",
      description:
        "17-year-old Kevin Nguyen's brainwave-controlled prosthetic offers new hope for amputees.",
      name: "Kevin Nguyen",
      category: "Innovator",
      src: "/blog/top-posts/roboathand.jpg",
    },
    {
      title:
        "Young Innovator Revolutionizes Rural Farming with Solar-Powered Irrigation in India",
      description:
        "Rohan Gupta's invention brings hope to drought-stricken villages.",
      name: "Rohan Gupta",
      category: "Innovator",
      src: "/blog/top-posts/solarpower.webp",
    },
    {
      title: "Teen Activist's Clean Water System Transforms Kenyan Community",
      description:
        "Sarah Mwangi's sustainable solution delivers clean water to thousands.",
      name: "Sarah Mwangi",
      category: "Innovator",
      src: "/blog/top-posts/cleanwater.webp",
    },
    {
      title: "16-Year-Old Author Breaks Silence on Teen Mental Health",
      description:
        "Emma Roberts' books ignite crucial conversations among peers.",
      name: "Emma Roberts",
      category: "Innovator",
      src: "/blog/top-posts/teenmentalhealth.webp",
    },
    {
      title: "Social Entrepreneur Empowers Afghan Women with Microfinance",
      description: "Laila Ahmad helps women achieve economic independence.",
      name: "Laila Ahmad",
      category: "Innovator",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUmn4Nto5fVu4vbSjQlCRBnqbIm3tdwvSl3g0BGiHsk1HPBgzTQ1ey3YS_FlvaswXbF0&usqp=CAU",
    },
    {
      title: "High School Student Creates AI App for Dyslexic Learners",
      description:
        "Michael Zhang's innovation receives global praise from educators.",
      name: "Michael Zhang",
      category: "Innovator",
      src: "/blog/top-posts/dyslexia.webp",
    },
    {
      title: "Eco-Warrior Leads Fight Against Ocean Pollution in Peru",
      description: "Sofia Ramirez mobilizes community for marine conservation.",
      name: "Sofia Ramirez",
      category: "Innovator",
      src: "/blog/top-posts/ecowarrior.webp",
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
              name={post.name}
              category={post.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopPostsCarousel;

interface CardProps {
  title: string;
  description: string;
  name: string;
  category: string;
  src: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  name,
  category,
  src,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-96 lg:h-fullmx-3">
      <div className="bg-gray-300 h-40 rounded-t-lg">
        <img src={src} alt="..." className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between bg-[#F5F5F5] p-2 rounded-md">
          <div className="flex items-center justify-center">
            <div className="ml-4">
              <p className="text-gray-900 md:text-base text-sm">{name}</p>
              <p className="text-gray-600 md:text-base text-sm">{category}</p>
            </div>
          </div>
          <CiBookmark className="text-3xl" />
        </div>
      </div>
    </div>
  );
};
