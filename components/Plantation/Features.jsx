import Image from 'next/image'
import React from 'react'

function Features({ img, title, content, col }) {
    return (
        <div className='flex flex-col rounded-2xl shadow-md p-5 gap-4 ' style={{
            backgroundColor: `${col}`
        }}>
            <Image src={img} alt={title} className='w-8' />
            <h1 className='font-bold'>{title}</h1>
            <p className='text-[#727272] text-sm'>{content}</p>
        </div>
    )
}

export default Features

