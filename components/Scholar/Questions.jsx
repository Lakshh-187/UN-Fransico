'use client';
import React from 'react'

function Questions({ question, active, updateQuest, id }) {
    if (active == 1) {
        return (
            <>
                <div className='bg-black text-white  p-4 rounded-xl  shadow-md m-2'>{question}</div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='bg-white shadow-md p-4 rounded-xl  m-2' onClick={() => { updateQuest(id, 1) }}>{question}</div>
            </>
        )
    }
}

export default Questions