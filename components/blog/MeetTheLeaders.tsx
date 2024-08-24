import React from "react";
import MeetTheLeadersCarousel from "./MeetTheLeadersCarousel";

const MeetTheLeaders = () => {
  return (
    <section className="w-full md:p-10 relative mt-10">
      <BackgroundBlurs />

      <div className="flex flex-col gap-4 shadow-xl">
        <div className="flex flex-col gap-4 mx-auto">
          <h3 className="text-[#002D76] font-bold text-4xl">
            Meet The Leaders!
          </h3>
          <div className="flex flex-col">
            <p className="text-xl">Talents that should be nurtured forever </p>
            <p className="text-center">Rising Scholars</p>
          </div>
        </div>
        <div className="w-full py-10 px-4">
          <MeetTheLeadersCarousel />
        </div>
      </div>
    </section>
  );
};

export default MeetTheLeaders;

const BackgroundBlurs = () => (
  <>
    <div className="w-96 h-96 rounded-full blur-3xl bg-[#86A6DF80] absolute top-0 -left-40 -z-10" />
    <div className="w-1/2 h-1/2 rounded-full blur-3xl bg-[#7191C3B2] absolute top-0 right-0 -z-10" />
    <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 right-20 -z-10" />
    <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 left-20 -z-10" />
    {/* <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute top-0 md:left-56 -z-10" /> */}
  </>
);
