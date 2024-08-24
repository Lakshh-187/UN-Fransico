"use client";
import React, { useContext } from "react";
import GetInvolved from "@/components/uniford-main/GetInvolved";
import HeroSection from "@/components/uniford-main/HeroSection";
import JoinUsForm from "@/components/uniford-main/JoinUsForm";
import WhoAreWe from "@/components/uniford-main/WhoAreWe";
import WorldWidePrograms from "@/components/uniford-main/WorldWidePrograms";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GrowUp from "@/components/uniford-main/GrowUp";
import { RefsContext } from "./layout";
import HeroMain from "@/components/uniford-main/HeroMain";
import BecomeAUnifordScholar from "@/components/uniford-main/BecomeAUnifordScholar";
import FAQ from "@/components/uniford-main/FAQ";

const Home = () => {
  const { global_pre, who_are_we, get_involved, apply } = useContext(RefsContext);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white w-full">
      {/* <div className="w-full bg-transparent items-center p-4 z-10 h-[4rem] flex flex-row text-black">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="w-[10%] hover:cursor-pointer"
        >
          <Image
            priority={true}
            src="/logo.svg"
            alt="brand"
            height={60}
            width={60}
            className="h-8 w-8"
          />
        </div>
        <div className="w-[60%] py-3 h-[3rem] flex items-center justify-center bg-white rounded-full">
          <div className="w-full py-4 flex flex-row justify-evenly p-2 text-[#203a63]">
            <div onClick={() => window.open("https://scholar.uniford.org/")}>
              Scholar
            </div>
            <div onClick={() => window.open("https://scholar.uniford.org/getHired")}>
              Get Hired
            </div>
            <div onClick={() => window.open("https://scholar.uniford.org/unifordResources")}>
              Resource
            </div>
            <div onClick={() => window.open("https://scholar.uniford.org/workWithUs")}>
              Work
            </div>
            <div onClick={() => window.open("https://scholar.uniford.org/research")}>
              Research
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="w-full flex justify-evenly">
            <div className="flex items-center bg-white p-5 justify-center text-black md:rounded-[5.14px] lg:rounded-[10px] lg:w-36 lg:h-12 md:w-[71.95px] md:text-[9.25px] lg:text-lg md:h-[29.18px] font-semibold hover:text-[#203a61]">
              <div className="flex items-center space-x-1 justify-center">
                Donation
              </div>
            </div>
            <div className="flex items-center bg-[#203a63] p-5 justify-center text-white md:rounded-[5.14px] lg:rounded-[10px] lg:w-36 lg:h-12 md:w-[71.95px] md:text-[9.25px] lg:text-lg md:h-[29.18px] font-semibold hover:text-[#203a61]">
              <div className="flex items-center space-x-1 justify-center">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <HeroMain />
      </div>

      <div>
        <HeroSection />
      </div>
      <div>
        <GrowUp />
      </div>
      <div ref={global_pre}>
        <WorldWidePrograms />
      </div>
      <div>
        <BecomeAUnifordScholar />
      </div>

      <section className="w-full p-10 bg-[#f6f8fa] flex flex-col gap-10 items-center justify-center">
        <h3 className="w-4/5 md:text-2xl text-lg font-serif text-[#4f5561] text-center font-semibold">
          We need new solutions and leaders now. Uniford helps youth grow their
          skills, understand their rights, and share their stories.
        </h3>
        <img
          src="/uniford-main/temp.jpg"
          alt="..."
          className="rounded-2xl shadow-2xl"
        />
      </section>

      <div ref={who_are_we}>
        <WhoAreWe />
      </div>

      <div ref={get_involved}>
        <GetInvolved />
      </div>

      <section className="w-full p-10">
        <h3 className="md:w-3/4 w-full mx-auto text-xl font-serif font-semibold mb-12 mt-8 text-[#4d4d4f] text-center">
          We bring hidden talents into the spotlight and prepare them for the
          real world. We rise by uncovering hidden gems and empowering innovators
          to lead the way.
        </h3>
        <div className="w-full flex items-center justify-center">
          <img
            src="/uniford-main/Frame.jpg"
            alt="..."
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>
      
      <div ref={apply}>
        <JoinUsForm />
      </div>
      <div>
        <FAQ />
      </div>
    </main>
  );
};

export default Home;
