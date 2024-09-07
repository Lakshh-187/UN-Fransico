import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Uniford Resources | Uniford",
  description:
    "Unlock a wealth of knowledge and tools. Explore our resource hub for valuable insights, guides, and materials to empower your journey.",
};

function page() {
  const data = [
    {
      title: "Student Benefits",
      link: "/student-benefit",
      imgSrc: "/unifordResources/res3.svg",
      text: "Click here",
      gradient: "bg-gradient-to-r from-white to-[#ffdafc]",
      message:
        "Experience all the perks and freebies students receive by using their Student ID cards",
    },
    {
      title: "Educational Tools",
      link: "/ai-tool",
      imgSrc: "https://i.ibb.co/VmTyR7V/Educational-Tools-416-x-406-px-1.png",
      text: "Click here",
      gradient: "bg-gradient-to-r from-white to-[#e1d5f2]",
      message:
        "Discover a suite of educational tools designed to help students enhance their learning and save valuable time",
    },
    {
      title: "Class-12 Treasure Gallery",
      link: "/class-12",
      imgSrc: "/unifordResources/res1.svg",
      text: "Click here",
      gradient: "bg-gradient-to-r from-white to-[#ece0c1]",
      message:
        "Where hidden websites, important tools, and resources from around the world await to empower.",
    },
    {
      title: "Resources",
      link: "/learn-ai",
      imgSrc: "/unifordResources/res2.svg",
      text: "Click here",
      gradient: "bg-gradient-to-r from-white to-[#cdd9e0]",
      message:
        "Featuring roadmaps and tracks for job-ready courses, along with career tracks and a lot of resources.",
    },
  ];

  const data2 = [
    {
      title: "Personality Development",
      link: "#",
      imgSrc: "/unifordResources/c4.svg",
    },
    {
      title: "Personality Development",
      link: "#",
      imgSrc: "/unifordResources/c2.svg",
    },
  ];

  const forScholar = [
    {
      title: "Personality Development",
      link: "#",
      imgSrc: "/unifordResources/res1.svg",
    },
    {
      title: "Personality Development",
      link: "#",
      imgSrc: "/unifordResources/res2.svg",
    },
  ];
  return (
    <div className="flex flex-col pt-16">
      {/* hero section */}
      <div className="w-full bg-[#fabc05] h-[30rem] relative">
        {/* <div className=" bg-resourceBanner h-full  bg-cover bg-no-repeat"></div> */}
        <Image
          src="/unifordResources/resourcesGraphic.png"
          height={200}
          width={300}
          alt="resource"
          className="lg:h-52 lg:w-52 h-20 w-20"
        />
        <Image
          src="/unifordResources/book.png"
          height={200}
          alt="resources"
          width={300}
          className="absolute top-4 right-4 lg:h-52 lg:w-52 h-20 w-20"
        />

        <div className="w-full flex flex-col justify-center items-center gap-6 mt-10 lg:mt-0">
          <h1 className="lg:text-6xl text-3xl text-white font-bold text-center">
            Resource Library
          </h1>
          <p className="lg:w-1/2 w-full antialiased text-gray-600 text-center text-lg">
            Welcome to our Resource Library, your one-stop destination for
            valuable information and materials. Browse through a diverse
            collection of articles, guides, videos, and more, carefully curated
            to provide you with insights, tips, and knowledge on various
            topics of interest
          </p>
        </div>
      </div>

      {/* search bar */}
      <div className="w-4/5 h-8 mt-20 space-x-5 bg-gray-100 flex justify-center rounded-full flex-row items-center p-10 md:w-2/5 mx-auto ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </div>
        <input
          type="text"
          className="focus:outline-none h-12 bg-gray-100 w-full"
          placeholder="search for the courses"
        />
      </div>

      {/* content */}
      <div className="flex flex-col gap-4 my-20">
        <div className="my-6 flex flex-col gap-3">
          <h3 className="font-semibold text-4xl px-10 text-[#383838] ">
            Your Gateway to Knowledge and Growth{" "}
          </h3>
          <p className="text-gray-500 text-lg px-10">
            Delve into a treasure trove of resources and perks aimed at
            enriching the student path, promoting empowerment and progression
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 px-5 lg:gap-4 gap-10">
          {data.map((item, idx) => {
            return (
              <div
                className="flex flex-col justify-center mx-auto shadow-md rounded-md"
                key={idx}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={item.imgSrc}
                    height={200}
                    width={300}
                    alt="graphics"
                    className="rounded-lg "
                  />
                </div>
                <div className="px-3 py-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                        alt="..."
                        className="h-6 w-6 rounded-full"
                      />
                      <h3 className="font-semibold text-xl text-wrap">
                        {item.title}
                      </h3>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                  </div>
                  <p>{item.message}</p>
                  <div className="flex items-center justify-end">
                    <div
                      className={`flex items-center justify-center border border-gray-500 px-3 py-2 hover:border-none hover:${item.gradient}  rounded-md`}
                    >
                      <Link href={item.link}>
                      <p className="text-xs font-semibold">{item.text}</p>
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-link"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 15l6 -6" />
                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-10 bg-[#f2f8fd] p-3">
        <div className="my-6 px-10 flex flex-col gap-3">
          <h3 className="font-semibold text-4xl text-[#383838]">Coming Soon</h3>
          <p className="font-semibold text-lg text-gray-500">
            Stay tuned for what{`'`}s next! Something amazing is just around the
            corner
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center px-10 gap-5 ">
          <div className="w-full flex flex-col justify-between items-center h-full border rounded-3xl">
            <img src={data2[0].imgSrc} className="rounded-lg h-full w-full" />
          </div>
          <div className="w-full flex flex-col justify-between items-center h-full border rounded-3xl">
            <img src={data2[1].imgSrc} className="rounded-lg h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
