import React from "react";
import TopPostsCarousel from "./TopPostsCarousel";

const TopPosts = () => {
  return (
    <section className="w-full relative md:p-10 p-2 mt-10 h-full overflow-hidden">
      <BackgroundBlurs />

      <img
        src="/blog/waveline3.svg"
        alt="..."
        className="h-full absolute left-0"
      />
      <img
        src="/blog/waveline4.svg"
        alt="..."
        className="h-full absolute -left-2 rotate-6"
      />

      <div className="flex flex-col w-full h-full shadow-lg rounded-2xl pt-10 md:px-4">
        <h3 className="font-bold text-2xl">Top Posts</h3>
        <div className="w-4/5 my-10 mx-auto">
          <TopPostsCarousel />
        </div>
      </div>
    </section>
  );
};

export default TopPosts;

const BackgroundBlurs = () => (
  <>
    <div className="w-96 h-96 rounded-full blur-3xl bg-[#86A6DF80] absolute top-0 -left-40 -z-10" />
    <div className="w-1/2 h-1/2 rounded-full blur-3xl bg-[#7191C3B2] absolute top-0 right-0 -z-10" />
    <div className="w-56 h-96 blur-3xl bg-[#7191C3B2] absolute bottom-40 right-20 -z-10" />
    <div className="w-56 h-96 blur-3xl bg-[#7191C3B2] absolute bottom-40 left-20 -z-10" />
    <div className="w-56 h-96 blur-3xl bg-[#7191C3B2] absolute top-0 md:left-56 -z-10" />
  </>
);
