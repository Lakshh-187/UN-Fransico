

"use client"
import React from 'react'
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

function ApplicationProcess() {
    const applicationProcess = [
        {
            title: '1. Opportunities',
            content: 'Two A Levels at grade CC or above'
        },
        {
          title: '1. Opportunities',
          content: 'Two A Levels at grade CC or above'
      },
      {
        title: '1. Opportunities',
        content: 'Two A Levels at grade CC or above'
    },{
      title: '1. Opportunities',
      content: 'Two A Levels at grade CC or above'
  },
    ]
    return (
        <div className='w-11/12 bg-[#EDFFDB] mx-auto p-4 sm:py-8 rounded-2xl'>
            <h1 className='text-xl font-semibold text-[#38A001] mb-2'>Application <span className='text-black'>Process</span> </h1>
            <div className='w-11/12  flex items-center  sm:my-6 justify-evenly mx-auto sm:gap-5'>
                {
                    applicationProcess.map((item, idx) => {
                        return <div className='hidden md:block border w-1/3 h-40 border-black rounded-2xl bg-white relative p-3' key={idx}>
                            <h1 className='font-medium text-xl ' >{item.title}</h1>
                            <p className='pt-2'>{item.content}</p>
                            <div className='flex items-center absolute mx-auto w-10 h-10 border left-0 right-0 -bottom-5 bg-white rounded-full'><p className='w-max mx-auto'>{idx + 1}</p></div>
                        </div>
                    })
                }
                <Timeline className='md:hidden'>
                    {
                        applicationProcess.map((item, idx) => {
                            return <Timeline.Item key={idx}>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <div className='w-full border border-black rounded-xl  bg-white p-6 pt-2 pb-5 '>
                                        <h1 className='font-medium text-lg'>{item.title}</h1>
                                        <p className='text-xs'>{item.content}</p>
                                    </div>
                                </Timeline.Content>
                            </Timeline.Item>
                        })
                    }
                </Timeline>
            </div>
        </div>
    )
}

export default ApplicationProcess