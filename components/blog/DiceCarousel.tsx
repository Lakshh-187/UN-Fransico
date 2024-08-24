import React, { useRef } from "react";
import { peoples } from "@/data/rising-unicorns/UnicornsData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles

// Import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";

const DiceCarousel: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-start justify-center w-full relative lg:p-10">
      <div className="xl:w-1/2 xl:h-1/2 w-full h-full">
        <Swiper
          effect="flip"
          speed={4000}
          grabCursor
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          modules={[EffectFlip, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {peoples.map((person, index) => (
            <SwiperSlide key={index}>
              <Card {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={prevRef}
          className="absolute top-1/2 xl:left-56 left-0 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full cursor-pointer z-10"
        >
          &#10094;
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 xl:right-56 right-0 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full cursor-pointer z-10"
        >
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default DiceCarousel;

type CardProps = {
  name: string;
  designation: string;
  age: number;
  story: string;
  profileImage: string;
};

const Card: React.FC<CardProps> = ({ name, designation, age, story, profileImage }) => (
  <div className="h-full flex md:flex-row flex-col-reverse justify-center shadow-2xl rounded-2xl bg-white">
    <div className="md:w-3/5 w-full p-6 flex flex-col gap-3">
      <h3 className="text-[#002D76] font-bold text-2xl">{name}</h3>
      <div>
        <p className="text-black font-semibold">
          Designation: <span className="font-normal">{designation}</span>
        </p>
        <p className="text-black font-semibold">
          Age: <span className="font-normal">{age}</span>
        </p>
      </div>
      <p className="text-sm">{story}</p>
      {/* <p className="text-[#002D76] font-bold ">
        I see the world in black and white, and I don't like compromising.
      </p> */}
    </div>
    <div className="md:w-2/5 w-full">
      <img
        src={profileImage}
        alt={name}
        className="md:h-full h-96 w-full md:object-contain object-cover md:rounded-tr-2xl md:rounded-br-2xl rounded-2xl"
      />
    </div>
  </div>
);
