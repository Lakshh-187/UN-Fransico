import React from 'react'

function StatNumber({ number, unit, cont }) {
    return (
        <div className='flex-col text-center'>
            <div className='flex text-xl md:text-2xl lg:text-4xl justify-evenly'>
                <p>{number}</p>
                <p className='text-primaryGreen'>{unit} </p>
            </div>
            <p className='text-sm'>{cont} </p>
        </div>
    )
}

export default StatNumber