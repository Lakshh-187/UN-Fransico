'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Inputs from '../components/Auth/signUpInput';
import ImageOverlay from '../components/Auth/imageOverlay';

function SignUp() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white overflow-hidden">
      {/* Background Gradient */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0.1] }}
        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
      /> */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl flex lg:flex-row flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
        {/*
        <motion.div
          className="lg:w-1/2 w-full h-full flex items-center justify-center bg-[#263960] rounded-tr-[100px] rounded-tl-xl rounded-bl-[100px] relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative h-4/5 w-4/5"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          >
            <Image 
              src="/unifordScholar/r11.png" 
              alt="Poster" 
              className="object-cover"
              height={600} 
              width={400} 
            />
          </motion.div> */}
        {/* </motion.div> */}

        {/* Right Content */}
        <motion.div
          className="lg:w-2/3 w-full flex items-center justify-center p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Inputs />
        </motion.div>
      </div>
    </main>
  );
}

export default SignUp;
