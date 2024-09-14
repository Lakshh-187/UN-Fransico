"use client";
import React from "react";
import Image from "next/image";
import Inputs from "@/components/Auth/signUpInput";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center md:h-full pt-0 mb-20">
      {/* left poster */}
      <div className="w-4/5 h-full shadow-md p-3 md:flex md:justify-between md:items-center">
        <div className="md:w-[50%] h-full hidden md:flex md:items-center md:justify-center">
          <Image
            alt="Signup image"
            src="https://firebasestorage.googleapis.com/v0/b/uniford-firebase.appspot.com/o/images%2Fa-vibrant-and-eye-catching-flag-displaying-the-wor-PPGo_SxqSvG4kdZnLQ2aMg-mPX9uDKSRNKDivlVfi536g.jpeg?alt=media&token=e528c9f0-85aa-4a88-af6c-134c3090da32"
            className="object-cover h-full w-full transform rounded-tr-[100px] rounded-tl-xl rounded-bl-[100px]"
            height={600}
            width={400}
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col justify-start md:items-start items-center h-full md:w-[50%] w-full">
          <div className="flex mt-10 relative w-full">
            {/* Input all the data here */}
            <Inputs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
