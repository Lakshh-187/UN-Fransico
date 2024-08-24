import React from 'react'

function Answers({ answer }) {
    return (
        <div className="w-full flex-col p-3 h-full">
            <h1 className='text-3xl m-2'>Answers</h1>
            <div className='h-4/5 shadow-md rounded-2xl bg-[#E7F9D1] p-2'>
                <p className='text-base m-4'>{answer}</p>
            </div>
        </div>
    )
}

export default Answers