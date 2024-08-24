import React, { useState } from "react";

import Image from "next/image";

const howThingsWorks = [
  {
    text: "Start by exploring the career track, resources, and roadmap available in the Resource Library to enhance your skills.",
    img: "/scholar/explore&Learn.png",
    bg: "bg-gradient-to-l from-white to-[#ffe5ca]",
    bbg: "bg-gradient-to-r from-white to-[#ffe5ca]",
  },
  {
    text: "Engage in competitions, hiring challenges, conferences, seminars, and skill sessions to broaden your experience and network.",
    img: "/scholar/Participate.png",
    bg: "bg-gradient-to-l from-white to-[#e8d7ff]",
    bbg: "bg-gradient-to-r from-white to-[#e8d7ff]",
  },
  {
    text: "Apply for USkills internships, research projects, and opportunities for self-branding to gain practical experience and visibility.",
    img: "/scholar/Opportunities.png",
    bg: "bg-gradient-to-l from-white to-[#ffbee6]",
    bbg: "bg-gradient-to-r from-white to-[#ffbee6]",
  },
  {
    text: "Register yourself in the Skilled Scholar Program to access worldwide opportunities such as job offers, funding, scholarships, and more.",
    img: "/scholar/Connect.png",
    bg: "bg-gradient-to-l from-white to-[#e8ffcc]",
    bbg: "bg-gradient-to-r from-white to-[#e8ffcc]",
  },
];

function HowThingsWorks() {
  const [tab, setTab] = useState(0);
  return (
    // outer div
    <>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5  relative h-[400px]">
        <div className="w-11/12 h-[200px] flex absolute -bottom-6 left-10 rounded-3xl bg-[#f3f1ff] -z-[1] mt-3 shadow-md shadow-gray-400 hover:shadow-md hover:shadow-yellow-400" />

        <div className="w-full no-scrollbar lg:inline-block hidden ">
          <div className="flex items-center justify-center">
            <div className="w-full h-[20rem] flex items-center justify-center">
              <div className="flex flex-col gap-6">
                <div
                  className={`w-[50rem] h-72 rounded-lg ${howThingsWorks[tab].bbg} shadow-md flex items-center justify-center`}
                >
                  <div className="w-[50rem] h-52 rounded-lg bg-white shadow-md flex items-center justify-center pr-5 relative right-12">
                    <div
                      className={`w-full h-4/5 rounded-lg shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-center p-5 ${howThingsWorks[tab].bg}`}
                    >
                      <p className="w-3/5 font-semibold">
                        {howThingsWorks[tab].text}
                      </p>
                      <img
                        src={howThingsWorks[tab].img}
                        alt="..."
                        className="h-[10rem] w-[20rem] hidden lg:inline-block "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-evenly">
                  <button
                    onClick={() => setTab(0)}
                    className="w-[2/5] p-3 shadow-md bg-gradient-to-r from-white to-[#ffe5ca] text-black rounded-md font-semibold flex items-center justify-center gap-3"
                  >
                    <img
                      src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                      alt="..."
                      className="h-6 w-6 rounded-full"
                    />
                    Explore & Learn
                  </button>
                  <button
                    onClick={() => setTab(1)}
                    className="w-[2/5] p-3 shadow-md  bg-gradient-to-r from-white to-[#e8d7ff] text-black rounded-md font-semibold flex items-center justify-center gap-3"
                  >
                    <img
                      src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                      alt="..."
                      className="h-6 w-6 rounded-full"
                    />
                    Participate
                  </button>
                  <button
                    onClick={() => setTab(2)}
                    className="w-[2/5] p-3 shadow-md  bg-gradient-to-r from-white to-[#ffbee6] text-black rounded-md font-semibold flex items-center justify-center gap-3"
                  >
                    <img
                      src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                      alt="..."
                      className="h-6 w-6 rounded-full"
                    />
                    Opportunities
                  </button>
                  <button
                    onClick={() => setTab(3)}
                    className="w-[2/5] p-3 shadow-md  bg-gradient-to-r from-white to-[#e8ffcc] text-black rounded-md font-semibold flex items-center justify-center gap-3"
                  >
                    <img
                      src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                      alt="..."
                      className="h-6 w-6 rounded-full"
                    />
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full h-4/5 rounded-lg shadow-md flex lg:hidden flex-col lg:flex-row lg:items-center lg:justify-center p-5 ${howThingsWorks[tab].bg}`}
        >
          <p className="w-full font-semibold">{howThingsWorks[tab].text}</p>
          <img
            src={howThingsWorks[tab].img}
            alt="..."
            className="h-[10rem] w-[20rem] hidden"
          />
        </div>

        <div className="flex lg:hidden  flex-col gap-2">
          <button
            onClick={() => setTab(0)}
            className="w-[15rem] p-3 shadow-md bg-gradient-to-r from-white to-[#ffe5ca] text-black rounded-md font-semibold flex items-center justify-start gap-3"
          >
            <img
              src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
              alt="..."
              className="h-6 w-6 rounded-full"
            />
            Explore & Learn
          </button>
          <button
            onClick={() => setTab(1)}
            className="w-[15rem]  p-3 shadow-md  bg-gradient-to-r from-white to-[#e8d7ff] text-black rounded-md font-semibold flex items-center justify-start gap-3"
          >
            <img
              src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
              alt="..."
              className="h-6 w-6 rounded-full"
            />
            Participate
          </button>
          <button
            onClick={() => setTab(2)}
            className="w-[15rem] p-3 shadow-md  bg-gradient-to-r from-white to-[#ffbee6] text-black rounded-md font-semibold flex items-center justify-start gap-3"
          >
            <img
              src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
              alt="..."
              className="h-6 w-6 rounded-full"
            />
            Opportunities
          </button>
          <button
            onClick={() => setTab(3)}
            className="w-[15rem]  p-3 shadow-md  bg-gradient-to-r from-white to-[#e8ffcc] text-black rounded-md font-semibold flex items-center justify-start gap-3"
          >
            <img
              src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
              alt="..."
              className="h-6 w-6 rounded-full"
            />
            Connect
          </button>
        </div>
      </div>
    </>
  );
}

export default HowThingsWorks;
