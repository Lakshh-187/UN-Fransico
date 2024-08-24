import { useRouter } from "next/navigation";
import React from "react";

const SelfBrandingProgram = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full bg-[#f3f8fa] p-8">
      <h3 className="text-center text-5xl font-semibold my-10">
        <span className="text-[#28487c]">Self Branding</span> Program
      </h3>
      <div className="flex items-center justify-center lg:w-3/5 w-full mx-auto">
        <p className="text-[#555555] text-center mb-10">
          Our Self-Branding Program offers scholars the opportunity to work on
          various ventures, including incubated startups, projects, research
          endeavors, and USkill internships. Each scholars contributions within
          this program are meticulously documented and showcased on a dedicated
          browser platform and e-portfolio.
        </p>
      </div>
      <button
        onClick={() => {
          router.push("/apply");
        }}
        className="px-10 w-56 py-2 rounded-full bg-[#28487c] items-center justify-center h-20  flex mx-auto text-white text-3xl mb-10"
      >
        Apply
      </button>
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-evenly relative ">
        <div className="h-96 lg:w-60 w-full bg-gradient-to-r from-[#4B79A1] to-[#283E51] flex flex-col justify-center p-3  gap-10 rounded-md hover:shadow-lg hover:shadow-yellow-300 ">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
              className="h-8 lg:w-8 rounded-full"
            />
            <h3 className="text-white text-xl font-medium ">
              Keep Track of Achievements
            </h3>
          </div>
          <p className="text-white text-base">
            Record of all their accomplishments during internships and projects.
          </p>
          <button className="font-semibold opacity-35 bg-gray-200  flex items-center justify-between border border-blue-400 rounded-full px-4 py-4 text-sm relative top-12">
            <p className="relative left-8 text-base text-blue-950">
              {" "}
              Bleib dran
            </p>
            <div className="px-2 py-2 flex items-center justify-center bg-[#fac400] rounded-full">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </div>
          </button>
        </div>

        <div className="h-96 lg:w-60 w-full flex place-items-end ">
          <div className="h-72 lg:w-60 w-full bg-gradient-to-r from-[#4B79A1] to-[#283E51] flex flex-col justify-center gap-4 p-3 rounded-md hover:shadow-lg hover:shadow-yellow-300 ">
            <div className="flex items-center gap-4">
              <img
                src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                className="h-8 w-8 rounded-full"
              />
              <h3 className="text-white text-lg font-medium ">
                Engagement in Projects and Task
              </h3>
            </div>
            <p className="text-white text-base">
              Scholars actively participate in various projects, tasks, and
              internships
            </p>
            <button className="flex items-center border opacity-35 bg-gray-200 border-blue-400 rounded-full px-4 py-4 text-sm justify-between relative top-6">
              <p className="relative left-8 text-blue-950 font-semibold z-12">
                Engagement
              </p>
              <div className="px-2 py-2 flex items-center justify-center bg-[#fac400] rounded-full">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="h-96 lg:w-60 w-full flex place-items-end">
          <div className="h-64 lg:w-60 w-full bg-gradient-to-r from-[#4B79A1] to-[#283E51] flex flex-col justify-center p-3 rounded-md  gap-3 hover:shadow-lg hover:shadow-yellow-300 ">
            <div className="flex items-center gap-4">
              <img
                src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                className="h-8 w-8 rounded-full"
              />
              <h3 className="text-white text-lg font-medium my-3">
                Boosted Recognition
              </h3>
            </div>
            <p className="text-white text-base font-serif">
              Scholars receive a special tag that proves their achievements are
              genuine.{" "}
            </p>
            <button className="flex items-center border opacity-35 bg-gray-200  border-blue-400 rounded-full px-4 py-4 text-sm justify-between">
              <p className="relative left-8  text-blue-950 font-semibold">
                Gesteigert
              </p>
              <div className="px-2 py-2 flex items-center justify-center bg-[#fac400] rounded-full">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="h-96 lg:w-60 w-full flex place-items-end">
          <div className="h-72 lg:w-60 w-full bg-gradient-to-r from-[#4B79A1] to-[#283E51] flex flex-col justify-center p-3 rounded-md gap-4 hover:shadow-lg hover:shadow-yellow-300 ">
            <div className="flex items-center gap-4">
              <img
                src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                className="h-8 w-8 rounded-full"
              />
              <h3 className="text-white text-lg font-medium my-3">
                Meet New People
              </h3>
            </div>
            <p className="text-white text-sm">
              Scholars can meet and work Nith new people in their field.{" "}
            </p>
            <button className="flex items-center border opacity-35 bg-gray-200 border-blue-400 rounded-full px-4 py-4 text-sm justify-between relative top-10">
              <p className="relative left-8 text-blue-950 font-semibold">
                Leute treffen
              </p>
              <div className="px-2 py-2 flex items-center justify-center bg-[#fac400] rounded-full">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="h-96 lg:w-60 w-full flex place-items-end">
          <div className="h-96 lg:w-60 w-full bg-gradient-to-r from-[#4B79A1] to-[#283E51] flex flex-col justify-center p-3 rounded-md relative  gap-4 hover:shadow-lg hover:shadow-yellow-300 ">
            <div className="flex items-center gap-4 relative bottom-8">
              <img
                src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                className="h-8 w-8 rounded-full"
              />
              <h3 className="text-white text-lg font-medium my-3">
                Connect with More Opportunities
              </h3>
            </div>
            <p className="text-white text-sm">
              The extra recognition helps scholars find more chances to work and
              learn worldwide.{" "}
            </p>
            <button className="flex items-center border opacity-35 bg-gray-200  border-blue-400 rounded-full px-4 py-4 text-sm justify-between relative top-16">
              <p className="relative left-8 text-blue-950 font-semibold">
                {" "}
                mehr verbinden
              </p>
              <div className="px-2 py-2 flex items-center justify-center bg-[#fac400] rounded-full">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 7l-10 10" />
                  <path d="M8 7l9 0l0 9" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfBrandingProgram;
