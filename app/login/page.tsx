"use client";
import React from "react";
import Image from "next/image";
import ImageOverlay from "@/components/Auth/imageOverlay";
import Inputs from "../../components/Auth/loginInput";
import { useRouter } from "next/navigation";
import { signUpWithPopUp } from "@/services/firestore";
import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook

function Login() {
  const router = useRouter();
  const { login } = useAuth(); // Get the login function from the auth context

  const handleLogin = async () => {
    try {
      await signUpWithPopUp();
      login(); // Call the login function to update the auth context state
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center md:h-full lg:p-20 p-3 ">
      {/* left poster */}
      <div className="w-4/5 h-full  md:flex md:justify-between md:items-center pb-6">
        <div className=" md:w-[45%] h-full hidden md:flex md:items-center md:justify-center bg-purple-600 rounded-tr-[100px] rounded-tl-xl rounded-bl-[100px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/uniford-firebase.appspot.com/o/images%2Fa-vibrant-and-eye-catching-flag-displaying-the-wor-PPGo_SxqSvG4kdZnLQ2aMg-mPX9uDKSRNKDivlVfi536g.jpeg?alt=media&token=e528c9f0-85aa-4a88-af6c-134c3090da32"
            className="h-full w-full"
            height={600}
            width={400}
            alt="scholar"
          />
        </div>

        {/* Right content */}
        <div className=" flex  flex-col  justify-start md:items-start  items-center md:w-[45%]  w-full  ">
          <div className=" flex relative w-full mt-10">
            <p className="md:text-7xl  sm:text-9xl text-7xl  font-bold  text-[#203a63] ">
              Uniford
            </p>
            <div className="absolute right-0 top-0">
            <ImageOverlay />
           </div>
          </div>

          <p className="md:text-5xl  sm:text-7xl text-5xl md:mt-1  mt-8 ">
            Login
          </p>
          <p className=" text-[#969696] md:text-lg  sm:text-2xl text-lg md:mt-1 w-4/5   mt-4  ml-1">
            Please login to continue to your account.
          </p>

          {/* Input all the data here */}
          <div className=" md:mx-0 w-full">
            <Inputs />
          </div>

          <div className="flex justify-center items-center w-[80%]">
            <hr className="w-[40%] h-[2px] bg-[#D9D9D9]" />
            <p className="p-4">or</p>
            <hr className="w-[40%] h-[2px] bg-[#D9D9D9]" />
          </div>

          {/* sign in with Google */}
          {/* <button
            onClick={handleLogin} // Use the handleLogin function
            className=" flex  justify-center  items-center  gap-4  p-3  w-[81%]  shadow-md  rounded-lg  mt-6"
          >
            <p className=" font-semibold">Sign in with Google</p>
            <Image
              height={36}
              width={36}
              alt="googlesvg"
              src={"/auth/google.svg"}
            />
          </button> */}

          <p className="text-lg  pl-[22%]  mt-4 ">
            Need an account?
            <a
              onClick={() => router.push("/signup")}
              className="underline hover:cursor-pointer font-semibold text-[#548702] pl-2"
            >
              create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
