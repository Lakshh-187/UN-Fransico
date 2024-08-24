import React from "react";
import Image from "next/image";

function OurPartners() {
  const imgs = [
    { img: "https://i.ibb.co/6b8cYz4/image.png" },
    { img: "https://i.ibb.co/4WRWFZ4/image.png" },
    { img: "https://i.ibb.co/4WRWFZ4/image.png" },
    { img: "https://i.ibb.co/PcsLdcL/image.png" },
    { img: "https://i.ibb.co/6vL9V82/image.png" },
    { img: "https://i.ibb.co/L8zQNkK/image.png" },
    { img: "https://i.ibb.co/YNrxJd0/image.png" },
    { img: "https://i.ibb.co/KbWdT5B/image.png" },
    { img: "https://i.ibb.co/Svb6tMx/image.png" },
  ];

  return (
    <div className=" rounded-xl flex flex-col md:flex-row w-11/12 items-center mx-auto p-2 md:p-8 gap-4">
      <div className="w-full md:w-2/5 flex flex-col">
        <h1 className="text-3xl">
          Our <span className="text-primaryGreen"> scholars</span> come from
        </h1>
        {/* <p>a multitude of benefits that can significantly enhance your academic and professional journey.</p> */}
      </div>
      <div className="grid gap-4 grid-cols-3 w-full md:w-3/5">
        {imgs.map((item, idx) => {
          return (
            <div key={idx} className="rounded-2xl bg-slate-400 overflow-hidden">
              <Image
                width={200}
                height={200}
                src={item.img}
                alt="afsd"
                className="w-full h-40"
              />
            </div>
          );
        })}
        {/* <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div>
                <div className='h-40 w-full rounded-2xl bg-slate-400'></div> */}
      </div>
    </div>
  );
}

export default OurPartners;
