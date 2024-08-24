import React from 'react'

function Shipping({ setSection }) {
    return (
        <>
            <div className='w-4/5 mx-auto shadow-xl p-8 rounded-xl  my-5 flex flex-col gap-6'>
                <h1 className='text-2xl font-bold'>Personal Details</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                        <p>First Name</p>
                        <input type="text" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Enter your first name...' />
                    </div>
                    <div className='space-y-2'>
                        <p>Last Name</p>
                        <input type="text" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Enter your last name...' />
                    </div>
                    <div className='space-y-2'>
                        <p>Email</p>
                        <input type="email" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Enter your email...' />
                    </div>
                    <div className='space-y-2'>
                        <p>Phone Number</p>
                        <input type="number" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Enter your Phone Number...' />
                    </div>
                </div>
                <h1 className='text-2xl font-bold'>Shipping Address</h1>
                <div className='space-y-2'>
                    <p>Address line 1</p>
                    <input type="text" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Your Complete Address...' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                        <p>City</p>
                        <input type="text" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Your city...' />
                    </div>
                    <div className='space-y-2'>
                        <p>State</p>
                        <input type="text" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Your state...' />
                    </div>
                    <div className='space-y-2'>
                        <p>Landmark</p>
                        <input type="email" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Any landmark (famous place or mall)' />
                    </div>
                    <div className='space-y-2'>
                        <p>Postal Code</p>
                        <input type="number" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='ZIP Code (231216)' />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center gap-10 my-16'>
                <button className='border-2 py-2 w-[40%] md:w-[20%] rounded-xl text-red-500 border-red-500'>Cancel</button>
                <button onClick={() => {
                    setSection(2)
                }} className=' py-2 w-[40%] md:w-[20%] rounded-xl bg-[#203a63] text-white'>Proceed to Billing</button>
            </div>
        </>
    )
}

export default Shipping