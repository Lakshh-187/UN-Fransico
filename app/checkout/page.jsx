'use client'
import React, { useState } from 'react'
import { Slider } from '@mui/material'
import Billing from '../../components/Checkout/Billing'
import Shipping from '../../components/Checkout/Shipping'
import Confirmation from '../../components/Checkout/Confirmation'

function Page() {
    const marks = [
        {
            value: 1,
            label: 'Shipping',
        },
        {
            value: 2,
            label: 'Billing',
        },
        {
            value: 3,
            label: 'Confirmation',
        },
    ];

    const [section, setSection] = useState(1)
    function SectionChanger() {
        if (section == 1) {
            return <Shipping setSection={setSection} />
        }
        else if (section == 2) {
            return <Billing setSection={setSection} />
        }
        else {
            return <Confirmation setSection={setSection} />
        }
    }
    return (
        <>
            <div className='w-4/5 mx-auto my-16 select-none'>
                <Slider
                    aria-label="Section"
                    defaultValue={1}
                    marks={marks}
                    valueLabelDisplay="off"
                    shiftStep={1}
                    step={1}
                    min={1}
                    max={3}
                    // color='black'
                    onChange={(e) => {
                        setSection(e.target.value)
                    }}
                    value={section}
                    sx={{
                        color: 'black'
                    }}
                />
            </div>

            <div>
                {
                    <SectionChanger />
                }
            </div>
        </>
    )
}

export default Page