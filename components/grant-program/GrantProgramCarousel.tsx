import React from 'react'
import PopularPostsCarousel from './GrantProgramsCardsCarousel';

const GrantProgramCarousel = () => {
    return (
        <section className="w-full relative mt-10 h-[40rem]">
          <BackgroundBlurs />
          <img
            src="/blog/waveline1.svg"
            alt="..."
            className="h-full absolute left-0"
          />
          <img
            src="/blog/waveline2.svg"
            alt="..."
            className="h-full absolute left-0"
          />
    
          <div className="flex flex-col w-full h-full  rounded-2xl pt-10 md:px-4">
            <h3 className="font-bold text-2xl">The Rising Unicorns</h3>
            <div className="w-4/5 my-10 mx-auto">
              <PopularPostsCarousel />
            </div>
          </div>
        </section>
      );
}

export default GrantProgramCarousel;



const BackgroundBlurs = () => (
    <>
      <div className="w-96 h-96 rounded-full blur-3xl bg-[#86A6DF80] absolute top-0 -left-40 -z-10" />
      <div className="w-1/2 h-1/2 rounded-full blur-3xl bg-[#7191C3B2] absolute top-0 right-0 -z-10" />
      <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 right-20 -z-10" />
      <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute bottom-40 left-20 -z-10" />
      <div className="w-56 h-96  blur-3xl bg-[#7191C3B2] absolute top-0 md:left-56 -z-10" />
    </>
  );