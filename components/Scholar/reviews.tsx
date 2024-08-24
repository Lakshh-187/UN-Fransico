import React from "react";
import { feedbacks } from "../../data/Scholar/data";
import Avatar, { genConfig } from "react-nice-avatar";

function Reviews() {
  return (
    <div className="w-full p-8 pt-6 bg-gradient-to-tr from-[#f3f8fb] to-[#fafaf4]">
      <h1 className="text-xl font-semibold ">
        Review from our <span className="text-[#38A001]">Scholars</span>
      </h1>

      <div className="flex gap-3 h-80 w-full overflow-x-scroll no-scrollbar mt-3 p-3 ">
        {feedbacks.map((item, idx) => {
          // @ts-ignore
          const config = genConfig({ gender: item.gender });
          return (
            <div
              key={idx}
              className=" min-w-60 w-60  flex flex-col shadow-md p-6 rounded-3xl items-center justify-center"
              style={{
                backgroundColor: `white`,
              }}
            >
              <Avatar style={{ width: "4rem", height: "4rem" }} {...config} />
              {/* <Image alt="user" src={Frame} className="mt-3 mr-auto" /> */}
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_14_413)">
                  <mask
                    id="mask0_14_413"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="9"
                  >
                    <path
                      d="M11.4916 0H0.654297V8.80529H11.4916V0Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_14_413)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.4441 1.37523C9.82799 2.13925 9.01997 3.03696 9.01997 4.06839C9.70878 4.14479 10.2784 4.41538 10.7288 4.88016C11.1791 5.34493 11.4043 5.88292 11.4043 6.49414C11.4043 7.14356 11.1858 7.6911 10.7486 8.13678C10.3115 8.58245 9.76177 8.80529 9.09945 8.80529C8.35765 8.80529 7.71521 8.5156 7.17211 7.93622C6.629 7.35684 6.35745 6.65331 6.35745 5.82563C6.35745 3.34256 7.80129 1.4007 10.689 0L11.4441 1.37523ZM5.7409 1.37523C4.11159 2.13925 3.29695 3.03696 3.29695 4.06839C3.99901 4.14479 4.57522 4.41538 5.02559 4.88016C5.47597 5.34493 5.70116 5.88292 5.70116 6.49414C5.70116 7.14356 5.47928 7.6911 5.03553 8.13678C4.59177 8.58245 4.03875 8.80529 3.37642 8.80529C2.63463 8.80529 1.9955 8.5156 1.45901 7.93622C0.922533 7.35684 0.654297 6.65331 0.654297 5.82563C0.654297 3.34256 2.09151 1.4007 4.96599 0L5.7409 1.37523Z"
                      fill="#121212"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_14_413">
                    <rect
                      width="11"
                      height="9"
                      fill="white"
                      transform="translate(0.654297)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="mx-auto my-2 text-sm text-center ">
                {item.content}
              </p>

              <p className="font-semibold mt-auto">{item.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Reviews;
