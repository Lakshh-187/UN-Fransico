import { useRouter } from "next/navigation";
import React, { useState } from "react";

const problemStatement = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2f2f2"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-key"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
        <path d="M15 9h.01" />
      </svg>
    ),
    title: "Opportunities",
    content:
      "Explore internships and projects and dive into a sea of opportunities.",
    img: "https://i.ibb.co/6rtVXsW/17.png",
    stat: "17+ Internships",
    button: "Explore all",
    link: "getHired",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2f2f2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-user"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Ambassador",
    content:
      "Represent your institute, gain numerous opportunities, and forge connections.",
    img: "https://i.ibb.co/Y24wFRd/18.png",
    stat: "200+ Positions",
    button: "Explore all",
    link: "ambassador",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2f2f2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-bulb"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
        <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
        <path d="M9.7 17l4.6 0" />
      </svg>
    ),
    title: "Talent Hunt",
    content:
      "Get selected through skill tests, no DSA or general tests required.",
    img: "https://i.ibb.co/rtjJp2D/19.png",
    stat: "93+ hiring partners",
    button: "coming soon",
    link: "#",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f2f2f2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-tools"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
        <path d="M14.5 5.5l4 4" />
        <path d="M12 8l-5 -5l-4 4l5 5" />
        <path d="M7 8l-1.5 1.5" />
        <path d="M16 12l5 5l-4 4l-5 -5" />
        <path d="M16 17l-1.5 1.5" />
      </svg>
    ),
    title: "Community for skilled",
    content: "Learn and grow with skilled students from all over the globe.",
    img: "https://i.ibb.co/zG8xGrY/20.png",
    stat: "27+ domain community",
    button: "coming soon",
    link: "#",
  },
];

function Accordion() {
  const router = useRouter();
  function expandSection(e) {
    let para = document.getElementById("content" + e.target.id);
    console.log(para);
    para.style.display = "block";
  }
  function collapseSection(e) {
    let para = document.getElementById("content" + e.target.id);
    console.log(para);
    para.style.display = "none";
  }

  let [card, setCard] = useState("0");
  return (
    <>
      <div className="hidden md:flex w-full lg:w-4/5 mx-auto my-10 overflow-hidden rounded-xl shadow-md">
        {problemStatement.map((item, idx) => {
          // on hover card
          if (card == idx) {
            return (
              <div
                id={idx}
                onMouseEnter={(e) => {
                  setCard(e.target.id);
                }}
                // onMouseLeave={(e) => {
                //     setCard(e.target.id)
                // }}
                className={
                  "w-full flex flex-col justify-between h-96 p-5 ease-in-out duration-[400ms] shadow-md bg-cover"
                }
                key={idx}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className=""></div>
                <button
                  onClick={() => {
                    router.push(`/${item.link}`);
                  }}
                  className="text-white bg-[#28487c] p-2 rounded-full w-1/2"
                >
                  {item.button}
                </button>
              </div>
            );
          }
          // on mouse out card
          else {
            return (
              <div
                id={idx}
                onMouseEnter={(e) => {
                  setCard(e.target.id);
                }}
                // onMouseLeave={(e) => {
                //     setCard(e.target.id)
                // }}
                className={
                  "w-1/2 flex flex-col justify-between h-96 p-5 bg-white ease-in-out duration-[400ms] shadow-md"
                }
                key={idx}
              >
                {/* avatar */}
                <div className="flex flex-col gap-4">
                  <div className="w-20 h-20 flex justify-center items-center rounded-full text-white text-4xl p-4 bg-[#28487c]">
                    {item.icon}
                  </div>
                  <h1 className="text-lg lg:text-2xl">{item.title}</h1>
                  <p>{item.content}</p>
                </div>
                <p className="">{item.stat}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-col md:hidden w-full mx-auto my-10 overflow-hidden rounded-xl border border-black">
        {problemStatement.map((item, idx) => {
          // on hover card
          if (card == idx) {
            return (
              <div
                onClick={(e) => {
                  setCard(idx);
                }}
                className={
                  "w-full flex flex-col justify-between h-96 p-5 ease-in-out duration-[400ms] border border-black bg-cover bg-left"
                }
                key={idx}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className="">
                  {/* <div className='w-10 h-10 rounded-full bg-primaryGreen'></div>
                                <h1 className='text-lg lg:text-2xl'>{item.title}</h1>
                                <p>{item.content}</p> */}
                </div>
                <button className="text-white bg-primaryGreen p-2 rounded-full w-1/2">
                  {item.button}
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
                // onMouseLeave={(e) => {
                //     setCard(e.target.id)
                // }}
                className={
                  "w-full h-52 flex flex-col justify-between p-5 bg-white ease-in-out duration-[400ms] border border-black "
                }
                key={idx}
              >
                {/* avatar */}
                <div className="flex flex-col gap-4">
                  <div className="w-20 h-20 flex justify-center items-center rounded-full text-4xl p-4 bg-green-200">
                    {item.icon}
                  </div>
                  <h1 className="text-lg lg:text-2xl">{item.title}</h1>
                </div>
                <p className="">{item.stat}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Accordion;
