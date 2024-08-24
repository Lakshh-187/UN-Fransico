import Image from 'next/image';
import React from 'react';


let searchData = [
  {
    img: '',
    content: 'Opputunities',
    link: ''
  },
  {
    img: '',
    content: 'Benefits and Perks',
    link: ''
  },
  {
    img: '',
    content: 'Application Process',
    link: ''
  },
  {
    img: '',
    content: 'Tasks and Timeline',
    link: ''
  }
];

function Hero() {
  return (
    <>
      <div className="md:flex hidden flex-col gap-8 w-full lg:w-1/2 pt-10">
        <div className="flex items-center w-11/12 md:w-full justify-between">
          {/* search topics */}
          <div className=" rounded-2xl  flex ml-8 md:ml-0 flex-col w-56 md:w-3/5 relative mb-10 mt-20">
            <img
              src="https://i.ibb.co/N7ptTWf/w22.png"
              className="absolute md:-top-[30%] md:-right-[40%] -right-[38%] -top-[40%] lg:scale-125 "
            />
            <div className="relative bottom-40">
              <Image
                src="https://i.ibb.co/Xz6z9rn/Student-scholar1.png"
                height={400}
                width={500}
                alt="scholar student"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
