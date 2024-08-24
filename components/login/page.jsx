'use client';
import React from 'react';
import Image from 'next/image';
import Background from '../assets/Auth/images/background.png';
import ImageOverlay from '../components/Auth/imageOverlay';
import Inputs from '../components/Auth/loginInput';
import googleIcon from '../assets/Auth/icons/googleIcon.svg';
import { useRouter } from 'next/navigation';
import { loginUser, signUpWithPopUp } from '../services/firebase';

function Login() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center md:h-full md:p-20 p-3 ">
      {/* left poster */}
      <div className="w-4/5 h-full  lg:flex lg:justify-between lg:items-center pb-6">
        <div className=" lg:w-[45%] h-full hidden md:flex md:items-center md:justify-center bg-[#263960] rounded-tr-[100px] rounded-tl-xl rounded-bl-[100px]">
          <Image src="/unifordScholar/r11.png" className="h-4/5 w-4/5" height={600} width={400}/>
        </div>

        {/* Right content  */}
        <div className=" flex  flex-col  justify-start md:items-start  items-center lg:w-[45%]  w-full h-4/5  ">
          <div className=" flex  mt-10">
            <p className="md:text-7xl  sm:text-9xl text-7xl  font-bold  text-[#203a63] ">Uniford</p>
            <ImageOverlay />
          </div>

          <p className="md:text-5xl  sm:text-7xl text-5xl md:mt-1  mt-8 ">Login</p>
          <p className=" text-[#969696] md:text-lg  sm:text-2xl text-lg md:mt-1   mt-4  ml-1">
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
          <button
            onClick={() => {
              signUpWithPopUp();
            }}
            className=" flex  justify-center  items-center  gap-4  p-3  w-[81%]  shadow-md  rounded-lg  mt-6">
            <p className=" font-semibold">Sign in with Google</p>
            <Image src={googleIcon} />
          </button>

          <p className="text-lg  mt-4 ">
            Need an account?
            <a
              onClick={() => router.push('/signup')}
              className="underline hover:cursor-pointer font-semibold text-[#548702] pl-2">
              create one
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
