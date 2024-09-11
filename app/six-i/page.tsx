"use client";
import { useState } from 'react';
import { sixi } from '@/data/toolsData';
import Image from 'next/image';

export default function AITools() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    return (
        <div className="min-h-screen w-full bg-[#fafaf8] pt-16">

            {/* Hero Section */}
            <div className="w-full h-[28rem] flex flex-col gap-2 items-center justify-center relative bg-yellow-500">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/uniford-firebase.appspot.com/o/images%2Flibrary-left.svg?alt=media&token=4820c28b-022c-4cd7-86af-cabc72b6a591"
                    alt="Background decoration"
                    className="absolute top-32 left-0 xl:inline-block hidden"
                />
                <div className="w-full flex items-center flex-col justify-self-center gap-3">
                    <h1 className="font-semibold xl:text-5xl md:text-3xl text-2xl">
                        Six i Donator
                    </h1>
                    <p className="w-3/5 text-lg text-center z-50">
                    Help us continue our mission with your generous donation. Every contribution supports our work and makes a difference.
                    </p>
                    <div className="xl:w-1/4 w-fit bg-[#f7ed81] rounded-full my-4">
                        <button className="flex items-center gap-3 px-7 py-3 text-nowrap rounded-full bg-black text-white w-[98%]">
                            Apply For UF Grants Now
                            <Image
                                src="/grant-program/Arrow.svg"
                                alt="Arrow Icon"
                                height={9.93}
                                width={9.93}
                            />
                        </button>
                    </div>
                    <div className="xl:w-1/4 w-fit bg-[#f7ed81] rounded-full">
                        <button className="flex items-center gap-3 px-7 py-5 text-nowrap rounded-full bg-black text-white w-[98%] animate-bounce">
                            Download Startup Mastery Book
                            <Image
                                src="/grant-program/Arrow.svg"
                                alt="Arrow Icon"
                                height={9.93}
                                width={9.93}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* AI Tools Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8">
                {sixi.map((tool, index) => (
                    <div
                        key={index}
                        className="bg-white border-2 mt-5 shadow-lg rounded-lg p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105 relative"
                        style={{
                            borderColor: '#03a9f4', 
                    boxShadow: `0px 4px 8px #03a9f4`, 
                    borderWidth: '1px'
                        }}
                    >
                        {/* Featured Label */}
                        <div className="absolute top-0 left-0 px-3 py-1 bg-pink-200 text-pink-700 text-sm font-medium rounded-br-lg shadow">
                            Featured
                        </div>

                        <div className="relative w-full h-36">
                            <img
                                src={tool['Image links ']}
                                alt={`${tool.Title} Icon`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Tool Title and Icon */}
                        <div className="flex items-center mt-2 mb-4">
                            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-500">
                                {tool.Title}
                            </h2>
                        </div>

                        {/* Tool Description */}
                        <p className="text-gray-600 mb-4 line-clamp-3">
                            {tool['Use Of It']}
                        </p>

                        {/* Visit Button */}
                        <div className='flex flex-row justify-center items-center gap-2'>
                        <a
                            href={'https://api.whatsapp.com/send/?phone=7347099610&text=Hello%21+I+have+a+question.&type=phone_number&app_absent=0'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-1/2 text-center text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-xl shadow transition-colors duration-300"
                        >
                            Whatsapp
                        </a>

                        <a
                            href={'https://docs.google.com/forms/d/e/1FAIpQLSeQBJLS3LXq4s5cMNNgNXWu-rCwZqzq8Rvm3Hp18nFIzjC7vg/viewform'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-1/2 text-center text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-xl shadow transition-colors duration-300"
                        >
                            Donate
                        </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
