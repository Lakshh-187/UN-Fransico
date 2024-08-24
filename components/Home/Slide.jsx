'use client';
import React from 'react'

function Slide({ content, col }) {
    return (
        <div className='w-full md:w-1/4 duration-1000 md:hover:w-4/5 hover:duration-1000 h-20 hover:h-56 md:h-56 rounded-md m-1 p-2 cursor-pointer ' style={{
            backgroundColor: `${col}`
        }} >
            <div className="flex w-full h-full items-center">
                <p className='mx-auto'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Slide