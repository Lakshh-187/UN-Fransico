'use client'
import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { FaMinusCircle } from 'react-icons/fa'

function ProfileTopic({ title, content }) {
    const [expand, setExpand] = useState(0)
    return (
        <div className='rounded-3xl bg-[#E5E5E5] p-4'>
            {
                expand == 0 && (
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl font-medium text-[#0000008F]'>{title}</h1>
                        <BsPlusCircle onClick={(e) => setExpand(1)} className='cursor-pointer' />
                    </div>
                )
            }
            {
                expand == 1 && (
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between py-4'>
                            <h1 className='text-xs font-normal text-[#596380]'>{title}</h1>
                            <FaMinusCircle onClick={(e) => setExpand(0)} className='cursor-pointer' />
                        </div>
                        <p>{content}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ProfileTopic