"use client";
import React from "react";
import Image from "next/image";
import ImageOverlay from "@/components/Auth/imageOverlay";
import Inputs from "@/components/Auth/loginInput";
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
    <div className="flex items-center justify-center md:h-full pt-0 mb-20">
      {/* Left poster */}
      <div className="w-4/5 h-full shadow-md p-3 md:flex md:justify-between md:items-center">
        <div className="md:w-[50%] h-full hidden md:flex md:items-center md:justify-center bg-purple-600 rounded-tr-[100px] rounded-tl-xl rounded-bl-[100px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/uniford-firebase.appspot.com/o/images%2Fa-vibrant-and-eye-catching-flag-displaying-the-wor-PPGo_SxqSvG4kdZnLQ2aMg-mPX9uDKSRNKDivlVfi536g.jpeg?alt=media&token=e528c9f0-85aa-4a88-af6c-134c3090da32"
            className="h-full w-full object-cover transform rounded-tr-[100px] rounded-tl-xl rounded-bl-[100px]"
            height={600}
            width={400}
            alt="Scholar"
          />
        </div>

        {/* Right content */}
        <div className="flex flex-col justify-start md:items-start items-center h-full md:w-[50%] w-full">

          {/* Input section */}
          <div className="md:mx-0 w-full">
            <Inputs />
          </div>

          {/* Uncomment this if you want to re-enable Google sign-in */}
          {/* <button
            onClick={handleLogin} // Use the handleLogin function
            className="flex justify-center items-center gap-4 p-3 w-[81%] shadow-md rounded-lg mt-6"
          >
            <p className="font-semibold">Sign in with Google</p>
            <Image height={36} width={36} alt="googlesvg" src={"/auth/google.svg"} />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
