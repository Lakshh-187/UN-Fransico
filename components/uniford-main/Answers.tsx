import React from 'react'

function Answers({ answer }:{answer:any}) {
    
    return (
        <div className="w-full lg:w-1/2 flex-col p-3">
            <h1 className='text-3xl m-2 text-black'>Answers</h1>
            <div className='h-4/5 shadow-md p-3 rounded-2xl bg-[#f6f8fa]'>
                <p className='text-base m-4 text-black'>{answer}</p>
            </div>
        </div>
    )
}

export default Answers