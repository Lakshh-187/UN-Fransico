"use client";
import { useState } from 'react';
import { LearnAI } from '@/data/toolsData';
import Image from 'next/image';

export default function AITools() {
    const [selectedTag, setSelectedTag] = useState<string>('All');

    // Get unique llm-tag dynamically
    const tags = ['All', ...new Set(LearnAI.flatMap(tool => tool['llm-tag'] ? tool['llm-tag'].split(',').map(tag => tag.trim()) : []))];

    const filteredTools = selectedTag === 'All'
        ? LearnAI
        : LearnAI.filter(tool => tool['llm-tag'] && tool['llm-tag'].split(',').map(tag => tag.trim()).includes(selectedTag));

    return (
        <div className="min-h-screen w-full bg-[#fafaf8] pt-16">
            <div className="w-full h-[28rem] flex flex-col gap-2 items-center justify-center relative bg-yellow-500">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/uniford-firebase.appspot.com/o/images%2Flibrary-left.svg?alt=media&token=4820c28b-022c-4cd7-86af-cabc72b6a591"
                    alt="Background decoration"
                    className="absolute top-32 left-0 xl:inline-block hidden"
                />
                <div className="w-full flex items-center flex-col justify-self-center gap-3">
                    <h1 className="font-semibold xl:text-5xl md:text-3xl text-2xl">
                        🤖 Learn AI for Career
                    </h1>
                    <p className="w-3/5 text-lg text-center">
                        Explore a wide range of AI technologies and understand their working mechanisms — all for free! Dive deep into AI and give your career a powerful boost.
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

            <div className="mb-6 text-center">
                <select
                    id="tag"
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="mt-1 block w-full md:w-1/4 mx-auto pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="All">-- Select a tag --</option>
                    {tags.map((tag, index) => (
                        <option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>

            <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 py-10 px-4 sm:px-8">
                {filteredTools.map((tool, index) => (
                    <div
                        key={index}
                        className="bg-white border-2 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 relative"
                        style={{
                            borderColor: '#03a9f4', 
                            boxShadow: `0px 4px 8px #03a9f4`, 
                            borderWidth: '1px'
                        }}
                    >
                        <div className="relative w-full h-36">
                            <img
                                src={tool.src}
                                alt={`${tool.Column4} Icon`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-0 left-0 px-3 py-1 bg-pink-200 text-pink-700 text-sm font-medium rounded-br-lg shadow">
                            Featured
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 text-center mb-2 border-b border-blue-600">
                                {tool.Column4}
                            </h2>
                            <p className="text-gray-600 mb-2 text-center">
                                Duration: {tool['video-duration']}
                            </p>
                            <div className='flex items-center justify-center'>
                            <a
                                href={tool['Video Link']}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-1/2 text-center text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-xl shadow transition-colors duration-300"
                            >
                                Explore
                            </a>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                {tool['llm-tag'] && tool['llm-tag'].split(',').map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full"
                                    >
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
