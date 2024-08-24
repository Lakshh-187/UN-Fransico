import React from 'react'

function Answers({ answer }) {
    return (
        <div className="w-full lg:w-1/2 flex-col p-3">
            <h1 className='text-3xl m-2'>Answers</h1>
            <div className='h-[90%] shadow-md p-3 rounded-2xl bg-[#E7F9D1]'>
                <p className='text-base m-4'>{answer}</p>
            </div>
        </div>
    )
}

export default Answers