import React from 'react'

function Incentives() {
    return (
        <div className='w-11/12 mx-auto p-6 my-5 flex flex-col gap-4'>
            <h1 className='text-2xl'>Perks and <span className='text-primaryGreen'>Incentives</span></h1>
            <div className='flex gap-4'>
                <div className='p-2 rounded-full border'>Expert Mentorship</div>
                <div className='p-2 rounded-full border'>Expert Mentorship</div>
            </div>
            {/* perks */}
            <div className='flex flex-col md:flex-row w-full gap-4'>
                <div className='flex md:flex-col w-full md:w-1/3 gap-4'>
                    <div className='bg-[#FFF49B] rounded-xl w-1/2 md:w-full h-40 md:h-1/2'></div>
                    <div className='bg-[#FFF49B] rounded-xl w-1/2 md:w-full h-40 md:h-1/2'></div>
                </div>
                <div className='h-40 md:h-96 w-full md:w-1/3 bg-[#FFC4BF] rounded-xl'></div>
                <div className='h-40 md:h-96 w-full md:w-1/3 bg-[#D7B2FF] rounded-xl'></div>
            </div>
        </div>
    )
}

export default Incentives