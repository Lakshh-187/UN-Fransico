import React from 'react'
import {  Timeline } from "flowbite-react";




function TaskTimeline() {
    const applicationProcess = [
        {
            title: '',
            content: '',
            img: "https://i.ibb.co/hXBCSz1/t11.png"
        },
        {
            title: '',
            content: '',
            img: "https://i.ibb.co/B64Vskz/t22.png"
        },
        {
            title: '',
            content: '',
            img: "https://i.ibb.co/FYJCdc7/t33.png"
        },
        {
            title: '',
            content: '',
            img: "https://i.ibb.co/zrN000v/t44.png"
        },

    ]
    return (
        <div className='w-11/12 bg-[#f9faf7] mx-auto p-4 py-8 rounded-2xl my-24'>
            <h1 className='text-3xl'>Tasks and Timeline</h1>
            <div className='w-11/12 flex items-center my-6 justify-evenly mx-auto gap-5'>
                {
                    applicationProcess.map((item, idx) => {
                        return <div className={`hidden md:block w-1/4 h-96 rounded-2xl relative bg-center bg-cover bg-no-repeat`}
                            style={{
                                backgroundImage: `url(${item.img})`
                            }}
                            key={idx}>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                            <div className='flex items-center absolute mx-auto w-10 h-10 left-0 right-0 border border-black -bottom-5 bg-white rounded-full'><p className='w-max mx-auto'>{idx + 1}</p></div>
                        </div>
                    })
                }
                <Timeline className='md:hidden'>
                    {
                        applicationProcess.map((item, idx) => {
                            return <Timeline.Item key={idx}>
                                <Timeline.Point />
                                <Timeline.Content>
                                    <div className='w-60 border border-black rounded-xl h-16 bg-white p-4'>
                                        <h1>{item.title}</h1>
                                        <p>{item.content}</p>
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

export default TaskTimeline