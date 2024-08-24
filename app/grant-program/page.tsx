"use client";
import PopularPosts from "@/components/blog/PopularPosts";
import CommunityGrants from "@/components/grant-program/CommunityGrants";
import CommunityGrantsProgramCarouse from "@/components/grant-program/CommunityGrantsProgramCarouse";
import GrantProgramCarousel from "@/components/grant-program/GrantProgramCarousel";
import WorldWidePrograms from "@/components/grant-program/MapComponent";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [activeButton, setActiveButton] = useState<string>("Social Activists");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <main className="min-h-screen w-full md:py-20 py-10">
      <div className="xl:px-32 px-10 flex flex-col">
        <h1 className="text-2xl sm:text-4xl font-semibold my-10">
          UF Grant Programs With Rising Unicorns
        </h1>
        <div className="flex xl:flex-row flex-col gap-4">
          <p className="text-[#000000] xl:w-3/5 w-full font-bold text-xl ">
            We invite all founders, innovators, and social activists to become
            part of the UF Grants Program. Our program provides grants to those
            who work in alignment with UF&pos;s vision. If you are not eligible
            or fall outside the categories of the UF Grant Vision, we will
            assist you in connecting with other organizations that match your
            vision. Join us in making a real difference.
          </p>
          <div className="flex flex-col gap-5">
            <div className="xl:w-full sm:w-1/2 w-full bg-[#7BD0FF] rounded-full">
              <button className="flex items-center gap-3 px-7 py-5 text-nowrap rounded-full bg-black text-white w-[97%]">
                Apply For Community Grants Now{" "}
                <Image
                  src="/grant-program/Arrow.svg"
                  alt=""
                  height={9.93}
                  width={9.93}
                />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/grant-program/Book.svg"
                alt=""
                height={24}
                width={24}
              />
              <p>Read Our Community Guidebook</p>
            </div>
          </div>
        </div>
        <GrantProgramCarousel />
      </div>

      {/* Focus Areas */}
      <div className="xl:px-32 px-10 flex flex-col xl:flex-row xl:gap-20  my-20">
        <h2 className="text-3xl font-semibold lg:mb-8  text-nowrap xl:-rotate-90 flex items-center justify-start">
          Focus Areas
        </h2>
        <div className="flex flex-col gap-8">
          <div className="overflow-x-auto flex items-center gap-8">
            {[
              "Social Activists",
              "Volunteers",
              "Startups",
              "Influencers",
              "Innovator-in-Residence",
            ].map((buttonName) => (
              <button
                key={buttonName}
                className={`py-2 ${
                  activeButton === buttonName
                    ? "text-nowrap border-b-2 border-[#7BD0FF]"
                    : ""
                }`}
                onClick={() => handleButtonClick(buttonName)}
              >
                {buttonName}
              </button>
            ))}
          </div>
          <div>
            <div className="text-gray-700 text-lg flex flex-col md:flex-row gap-8">
              <Image
                src="/grant-program/FocusArea.png"
                alt=""
                height={200}
                width={300}
                className="rounded-lg"
              />
              <div className="md:w-2/3 w-full flex flex-col justify-between lg:items-end items-start gap-10 text-justify pb-10">
                <ul className="list-disc">
                  <li className="text-[#666666]">
                    Empowering passionate individuals and groups dedicated to
                    advocating for underprivileged families, fighting food
                    hunger, preventing animal cruelty, tackling climate change,
                    and promoting other human-earth conservation initiatives.
                    Through grants and support, we enable them to amplify their
                    impact and drive meaningful change.
                  </li>
                </ul>
                <div className="flex items-center gap-3">
                  <Image
                    src="/grant-program/Book.svg"
                    alt=""
                    height={24}
                    width={24}
                  />
                  <button className="text-sm">
                    Read Our Community Guidebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Invite All Founders */}
      <div className="xl:px-32 px-10 flex flex-col  items-center justify-center lg:flex-row gap-20 my-20">
        <div className="flex flex-col xl:w-3/5 w-full gap-8">
          <h3 className="text-3xl font-semibold leading-relaxed">
            We invite all founders, innovators, and social activists to become
            part of the UF Grants Program. Everyone is welcome to submit a
            grant application.
          </h3>
          <p className="text-xl">-Rising Unicorns</p>
          <div className="w-fit bg-[#7BD0FF] rounded-full">
            <button className="flex items-center gap-3 px-7 py-3 text-nowrap rounded-full bg-black text-white w-[97%]">
              Apply For Community Grants Now{" "}
              <Image
                src="/grant-program/Arrow.svg"
                alt=""
                height={9.93}
                width={9.93}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Founder Resources */}
      <div className="xl:px-32 px-10 flex flex-col my-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-bold mb-4">Founders Resources</h2>
            <p className="text-lg mb-6">
              Explore the diverse array of resources available for our startup
              founders
            </p>
            <div className=" w-fit bg-[#7BD0FF] rounded-full">
              <button className="flex items-center gap-3 px-7 py-5 text-nowrap rounded-full bg-black text-white w-[97%]">
                Explore Our Resources{" "}
                <Image
                  src="/grant-program/Arrow.svg"
                  alt=""
                  height={9.93}
                  width={9.93}
                />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src="/grant-program/FounderResources.png"
              alt="Founder"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Make an Impact */}
      <div className="xl:px-32 px-10 flex flex-col my-20">
        <div className="text-gray-700 text-lg flex flex-col md:flex-row gap-8">
          <Image
            src="/grant-program/MakeAnImpact.png"
            alt="Make an Impact"
            height={300}
            width={550}
            className="rounded-lg md:h-auto md:w-auto lg:inline-block hidden"
          />
          <div className="flex-grow text-justify">
            <h3 className="text-3xl font-semibold mb-8">Make an Impact</h3>
            <ul className="list-disc">
              <li className="text-[#666666]">
                We aim to amplify every individual&apos;s voice, efforts, and
                initiatives by providing the support, funds, and spotlight they
                deserve. Too often, world-revolutionizing ideas, founders, and
                innovators are overlooked due to lack of support and resources.
                The UF Grants Program is committed to ensuring that these
                transformative ideas and initiatives receive the opportunity to
                rise, empowering changemakers to make a lasting impact.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map */}
      {/* <div className="xl:px-32 px-10 flex items-center justify-center my-20">
        <Image src="/grant-program/map.png" alt="" height={600} width={900} />
      </div> */}

      {/* Worldwide Programs */}
      <div className="xl:px-24 flex flex-col my-20">
        <WorldWidePrograms />
      </div>

      {/* Subscribe to our news letter */}
      <div className="xl:px-32 px-10 flex flex-col my-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/5 w-full flex justify-center lg:justify-start">
            <img
              src="/grant-program/newsletter.png"
              alt="Newsletter"
              className="rounded-lg lg:inline-block hidden"
            />
          </div>
          <div className="lg:w-4/5 w-full mt-8 lg:mt-0 lg:pl-10">
            <h2 className="text-3xl font-bold mb-4">
              join our Community for Grants and Resources{" "}
            </h2>
            <p className="text-lg mb-6 text-[#666666]">
              Be part of a global community of innovators, creators, and
              visionaries dedicated to making a positive impact on society and
              the environment. The UF Grants Program supports projects that
              uplift underprivileged families, combat food hunger, prevent
              animal cruelty, address climate change, and promote human-earth
              conservation.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full mb-4">
              <input
                type="email"
                placeholder="E-Mail"
                className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-black text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Get Updates
              </button>
            </div>
            <div className="w-fit bg-[#7BD0FF] rounded-full my-7">
              <Link href={"https://whatsapp.com/channel/0029Vaeaji630LKGRyA8vW0M"} target="blank" className="flex items-center gap-3 px-5 py-3 text-nowrap rounded-full bg-black text-white w-[97%]">
                Join Our Community{" "}
                <Image
                  src="/grant-program/Arrow.svg"
                  alt=""
                  height={9.93}
                  width={9.93}
                />
              </Link>
            </div>
            <div className="flex items-center">
              <img
                src="/grant-program/peoples.svg"
                alt="Avatar 1"
                className="w-16 h-10 rounded-full border-2 border-white -ml-2"
              />
              <em className="ml-4">
                Be among the first to receive the latest updates
              </em>
            </div>
          </div>
        </div>
      </div>

      {/* Community Grant Programs */}
      <CommunityGrants />

      {/* Join Movement */}
      <div className="xl:px-32 px-10 flex flex-col my-20">
        <div className=" text-gray-700 text-lg flex flex-col-reverse md:flex-row gap-8">
          <div className="md:w-1/2 w-full text-justify">
            <h3 className="text-3xl font-semibold mb-8">Join The Movement</h3>
            <ul className="list-disc">
              <li className="text-[#666666]">
                Be part of a global community of innovators, creators, and
                visionaries dedicated to making a positive impact on society and
                the environment. The UF Grants Program supports projects that
                uplift underprivileged families, combat food hunger, prevent
                animal cruelty, address climate change, and promote
                human-earth conservation.
              </li>
            </ul>
          </div>
          <Image
            src="/grant-program/JoinTheMovement.png"
            className="rounded-lg"
            alt=""
            height={288}
            width={500}
          />
        </div>
      </div>

      {/* Community Grants Program */}
      {/* <div className="xl:px-32 px-10 flex flex-col my-20">
        <div className="flex flex-col">
          <h2>Community Grants Program</h2>
          <p>
            We invite you to explore the numerous organizations that offer grant opportunities.
          </p>
          <CommunityGrantsProgramCarouse/>
        </div>
      </div> */}
    </main>
  );
};

export default Page;
