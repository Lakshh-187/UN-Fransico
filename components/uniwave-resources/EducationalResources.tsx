"use client"
import React, { useState } from "react";

function EduationalResources({ category }: any) {
  let [card, setCard] = useState(0);
  const [problemStatement] = useState([
    [
      {
        title: "Artificial Intelligence",
        content: "Solving Complex Problems Across the Globe using AI",
        img: "https://i.ibb.co/9h9B9Hb/4.png",
      },
      {
        title: "Blockchain",
        content: "Solving Complex Problems Across the Globe using blockchain",
        img: "https://i.ibb.co/ZGqsdnJ/5.png",
      },
      {
        title: "Cloud Engineering",
        content:
          "Solving Complex Problems Across the Globe using cloud engineering",
        img: "https://i.ibb.co/WFyXksp/6.png",
      },
      {
        title: "Robotics",
        content: "Solving Complex Problems Across the Globe using robotics",
        img: "https://i.ibb.co/52FfQ5N/7.png",
      },
    ],
    [
      {
        title: "Miscellaneous",
        content:
          "Navigating the challenges and opportunities in sustainability.",
        img: "/prbSt/13.png",
      },
      {
        title: "Zero Hunger",
        content: "Navigating the challenges and opportunities in zero hunger.",
        img: "/prbSt/14.png",
      },
      {
        title: "Climate Action",
        content:
          "Navigating the challenges and opportunities in climate action",
        img: "/prbSt/15.png",
      },
      {
        title: "Clean Energy",
        content: "Navigating the challenges and opportunities in clean energy",
        img: "/prbSt/16.png",
      },
    ],
  ]);
  return (
    <>
      <div className="hidden md:flex w-full lg:w-4/5 mx-auto my-10 overflow-hidden rounded-xl shadow-xl">
        {problemStatement[category].map((item, idx) => {
          // on hover card
          if (card == idx) {
            return (
              <div
                id={idx.toString()}
                onMouseEnter={(e: any) => {
                  setCard(e.target.id);
                }}
                className={
                  "w-full flex flex-col justify-between h-96 p-5 ease-in-out duration-[400ms] shadow-xl bg-cover"
                }
                key={idx}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className=""></div>
                <button className="text-white bg-[#203a63] p-2 rounded-full w-1/2">
                  Read More
                </button>
              </div>
            );
          }
          // on mouse out card
          else {
            return (
              <div
                id={idx.toString()}
                onMouseEnter={(e: any) => {
                  setCard(e.target.id);
                }}
                className={
                  "w-1/2 flex flex-col justify-between h-96 p-5 bg-white ease-in-out duration-[400ms] shadow-xl "
                }
                key={idx}
              >
                {/* avatar */}
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#203a63] "></div>
                  <h1 className="text-lg lg:text-2xl">{item.title}</h1>
                  <h3 className="">{item.content}</h3>
                </div>
                <p className="">Click to Expand</p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-col md:hidden w-11/12 mx-auto my-10 overflow-hidden rounded-xl shadow-xl">
        {problemStatement[category].map((item, idx) => {
          // on hover card
          if (card == idx) {
            return (
              <div
                onClick={(e) => {
                  setCard(idx);
                }}
                className={
                  "w-full flex flex-col justify-between h-96 p-5 ease-in-out duration-[400ms] shadow-xl bg-cover bg-left"
                }
                key={idx}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className=""></div>
                <button className="text-white bg-[#203a63]  p-2 rounded-full w-1/2">
                  Read More
                </button>
              </div>
            );
          }
          // on mouse out card
          else {
            return (
              <div
                onClick={(e) => {
                  setCard(idx);
                }}
                className={
                  "w-full h-40 flex flex-col justify-between p-5 bg-white ease-in-out duration-[400ms] border border-black "
                }
                key={idx}
              >
                {/* avatar */}
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#203a63] hidden">
                    {item.content}
                  </div>
                  <h1 className="text-xl lg:text-2xl ">{item.title}</h1>
                </div>
                <p className="px-4 py-2 rounded-md shadow-md w-fit">
                  Click to Expand
                </p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default EduationalResources;

// function expandSection(e) {
//     let para = document.getElementById('content' + e.target.id)
//     console.log(para);
//     para.style.display = 'block'
// }
// function collapseSection(e) {
//     let para = document.getElementById('content' + e.target.id)
//     console.log(para);
//     para.style.display = 'none'
// }

{
  /* <div className='flex flex-col lg:flex-row w-4/5 mx-auto my-10 overflow-hidden'>
            {
                problemStatement.map((item, idx) => {
                    return <div id={idx} onMouseEnter={expandSection}
                        onMouseLeave={collapseSection}
                        className={'lg:w-1/6 w-full hover:h-max lg:h-96 p-5 bg-white lg:hover:w-1/2 duration-1000 border border-black hover:bg-[#F6DEBA] '} key={idx}>
                        <h1 className='text-2xl'>{item.title}</h1>
                        <div id={'content' + idx} className='hidden' >
                            <p className='' >{item.content}</p>
                            <button className='text-white bg-primaryGreen p-2'>Read More</button>
                        </div>
                    </div>
                })
            }
        </div> */
}
