'use client';
import React from 'react'

function Feature({ title, content, col }) {
    return (
        <>

            <div className='min-w-[20%] h-64 rounded-md m-1 p-2 cursor-pointer' style={{
                backgroundColor: `${col}`
            }}>
                <div className="flex-col w-full h-full items-center p-5 space-y-2">
                    <h1 className='text-2xl'>
                        {title}
                    </h1>
                    <p className='text-lg'>
                        {content}
                    </p>
                </div>
            </div>
            {/* <div className=' min-w-[20%] h-64 rounded-md m-1 p-2 cursor-pointer ' style={{
                backgroundColor: `${col}`
            }} >
                <div className="flex-col w-full h-full items-center p-5 space-y-2">
                    <h1 className='text-2xl'>
                        {title}
                    </h1>
                    <p className='text-lg'>
                        {content}
                    </p>
                </div>
            </div> */}

        </>
    )
}

export default Feature