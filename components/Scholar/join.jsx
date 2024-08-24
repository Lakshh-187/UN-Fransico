import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Join() {
  const router = useRouter();
  return (
    <div className="p-8 sm:p-16 pt-3 ">
      <div className="w-full s shadow-md rounded-md p-2 sm:flex sm:justify-between ">
        <img
          alt="imgbb"
          src="https://i.ibb.co/hggPsTc/j1.png"
          className="w-full sm:w-[50%] md:h-96 "
        />
        <div className="sm:ml-auto sm:w-[40%] flex flex-col  gap-4">
          <p className="text-xl  md:text-4xl sm:text-4xl font-semibold mt-4">
            Are you hiring? Join talent hunt alliance.
          </p>
          <p className="text-lg">
            Ready to streamline your hiring process? Join the Talent Hunt
            Alliance and connect with skilled candidates
          </p>

          <button
            onClick={() => {
              router.push("/findTalent");
            }}
            className="bg-[#203a63] w-fit text-[9px] mt-2 text-white font-semibold py-2.5 px-6 rounded-lg mb-2 sm:text-lg sm:mt-5"
          >
            Find talent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Join;
