"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const GetYourDailyUpdates = () => {
  const updates = [
    {
      heading: "Rising Unicorns",
      items: [
        {
          title: "1 in 100 Dreams Come True: Don't Let Yours Fade Away!",
          description:
            "Every kid has big dreams. But only 1 in 100 gets to live them. Why? They don't get the help they need. Rising Unicorns wants every dream to shine, not fade away.",
        },
        {
          title: "$1 Million Ideas Hidden in School Desks",
          description:
            "Your classmates might have million-dollar ideas in their desks! But without help, these ideas stay hidden. Rising Unicorns finds these treasures, helping kids change the world.",
        },
        {
          title: "200 Young Heroes Give Up Every Day 💔",
          description:
            "Imagine 200 kids with superpowers quitting every day. That's what happens when young heroes don't get support. Rising Unicorns is here to keep their capes flying high!",
        },
      ],
    },
    {
      heading: "Rising Unicorns",
      items: [
        {
          title: "5,000 Earth-Saving Ideas Lost Each Year 🌍",
          description:
            "Kids have amazing ideas to save our planet. But 5,000 of these ideas are lost every year. Rising Unicorns is on a rescue mission to save these world-changing ideas.",
        },
        {
          title: "1 in 1,000 Kid Inventors Gets Famous",
          description:
            "For every kid inventor you see on TV, 999 are unseen. It's not fair! Rising Unicorns believes every young inventor deserves their spotlight moment.",
        },
        {
          title: "100,000 Young Voices Silenced Yearly 🤐",
          description:
            "Thousands of kids want to speak up for good causes. But 100,000 voices go unheard each year. Rising Unicorns gives these voices a big, loud megaphone!",
        },
      ],
    },
    {
      heading: "Rising Unicorns",
      items: [
        {
          title: "$1 Billion Dreams Crushed by Mean Words",
          description:
            "Mean words can crush billion-dollar dreams. Many kids quit because someone said, 'You can't do it.' Rising Unicorns says, 'Yes, you can!' and helps kids prove doubters wrong.",
        },
        {
          title: "1,000 Mini-Einsteins Lost in Factories 🏭",
          description:
            "Some super-smart kids end up working in factories, not labs. It's like Einstein making shoes! Rising Unicorns rescues these mini-geniuses, putting them where they belong.",
        },
        {
          title: "50% of Kid Startups Die in 1 Year 😢",
          description:
            "Half of all kid-made companies don't last a year. That's too many dreams ending too soon! Rising Unicorns is the superhero saving these startups from doom.",
        },
      ],
    },
    {
      heading: "Rising Unicorns",
      items: [
        {
          title: "99% of Young Singers Never Hit the Stage 🎤",
          description:
            "Out of 100 amazing kid singers, 99 never get to perform on stage. Rising Unicorns is like 'Kid's Got Talent,' giving every young star a chance to shine.",
        },
        {
          title: "1,000,000 Earth Helpers Get No Thanks",
          description:
            "A million kids try to help our planet, but no one says 'thanks.' That's not right! Rising Unicorns gives a big high-five to every earth-helping hero.",
        },
        {
          title: "$10 Billion Lost When Kid Inventors Quit",
          description:
            "When kid inventors give up, we all lose. Their ideas could be worth billions! Rising Unicorns keeps these inventors inventing, saving a fortune for our future.",
        },
      ],
    },
    {
      heading: "Rising Unicorns",
      items: [
        {
          title: "3 in 4 Kid App Makers Never Launch 📱",
          description:
            "Many kids can make awesome phone apps. But 3 out of 4 never get to share them. Rising Unicorns helps these app wizards get their creations into everyone's hands.",
        },
        {
          title: "90% of Young Leaders Stay in the Shadow",
          description:
            "Most kids who could be great leaders stay hidden in the shadows. That's a lot of missed chances! Rising Unicorns pulls them into the light, where they can lead us all.",
        },
        {
          title: "500 Animal-Saving Ideas Caged Each Year 🐾",
          description:
            "Kids love animals and have great ideas to help them. But 500 of these ideas get caged up yearly. Rising Unicorns sets these animal-saving ideas free!",
        },
      ],
    },
  ];

  return (
    <section className="w-full lg:p-10 md:p-6 p-3 relative md:mt-10 md:mb-32 my-10 ">
      <BackgroundBlurs />
      <div className="shadow-2xl rounded-2xl bg-transparent py-20">
        <div className="bg-transparent">
          <div className="lg:mt-20 lg:mb-40 my-10 flex flex-col  gap-8">
            <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#172b6e]">
              Get Your Daily Updates Here
            </h1>
          </div>

          <div className="w-full relative px-3 md:px-none">
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
              {updates.map((update, index) => (
                <SwiperSlide key={index}>
                  <Card heading={update.heading} items={update.items} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetYourDailyUpdates;

interface CardProps {
  heading: string;
  items: {
    title: string;
    description: string;
  }[];
}

const Card: React.FC<CardProps> = ({ heading, items }) => {
  return (
    <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg shadow-md p-4 lg:w-[36rem] h-full mx-3">
      <h3 className="lg:text-4xl text-2xl text-center font-semibold text-[#002D76] my-6">{heading}</h3>
      <div className="flex flex-col gap-4 w-full">
        {items.map((item, i) => (
          <Link href="https://www.linkedin.com/company/unifordfoundation/mycompany/verification/" target="blank" key={i} className="bg-white border shadow-md p-3 rounded">
            <p className="lg:text-lg text-sm font-semibold">{item.title}</p>
            <p className="text-xs">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const BackgroundBlurs = () => (
  <>
    <div className="w-96 h-96 rounded-full blur-3xl bg-[#86A6DF80] absolute top-0 -left-40 -z-10" />
    <div className="w-1/2 h-1/2 rounded-full blur-3xl bg-[#7191C3B2] absolute top-0 right-0 -z-10" />
    <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 right-20 -z-10" />
    <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 left-20 -z-10" />
  </>
);
