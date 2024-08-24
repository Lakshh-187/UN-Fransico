import Image from 'next/image'
import React from 'react'

function Certification() {
    return (
        <div className='w-full bg-white shadow-xl rounded-xl p-10 flex flex-col gap-6'>
            <h1 className='text-4xl'>Certificates</h1>
            <div className='w-full border border-[#D8D8D8] rounded-full px-3 py-2'>
                <input type="text" className='rounded-full w-full outline-none border-none text-base' placeholder='search certificates' />
            </div>
            <div className='w-full h-96 shadow-xl rounded-xl flex flex-col items-center justify-center text-center'>
                <Image src="/unifordProfile/svgs/medal.svg" height={200} width={200} alt='search...'/>
                <div className='flex flex-col gap-4'>
                    <h1>You dont have any Certificates</h1>
                    <p className='text-gray-400'>Keep Participating!</p>
                    <button className='bg-primaryGreen p-2 rounded-full text-white px-10'>Explore Oppurtunies</button>
                </div>
            </div>
        </div>
    )
}``

export default Certification