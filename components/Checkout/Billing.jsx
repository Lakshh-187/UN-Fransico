import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import creditCard from '../../assets/Checkout/credit-card.png'


function Billing({ setSection }) {
    const cartValue = useSelector(state => state.cart.cartValue)
    return (
        <>

            <div className='w-4/5  p-8 shadow-xl mx-auto my-10 rounded-lg'>
                <div className='flex gap-4 items-center'>
                    <h1 className='text-2xl font-bold'>Payment Details</h1>
                    <p className='text-red-500'>Rs. {cartValue.value}</p>
                </div>
                <div className='w-1/2 my-6 flex gap-3'>
                    <Image src={creditCard} className='w-12' />
                    <Image src={creditCard} className='w-12' />
                    <Image src={creditCard} className='w-12' />
                    <Image src={creditCard} className='w-12' />
                    <Image src={creditCard} className='w-12' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                        <p>Card holder name</p>
                        <input type="text" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Enter your first name...' />
                    </div>
                    <div className='space-y-2'>
                        <p>Card number</p>
                        <input type="number" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Enter your Card number...' />
                    </div>
                    <div className='space-y-2'>
                        <p>CVV</p>
                        <input type="number" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='Example: 4567' />
                    </div>
                    <div className='space-y-2'>
                        <p>Expiration Date</p>
                        <input type="month" className='bg-gray-100 placeholder:text-black py-4 w-full rounded-xl px-5' placeholder='MM/YY' />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center gap-10 my-16'>
                <button className='border-2 py-2 w-[40%] md:w-[20%] rounded-xl text-red-500 border-red-500'>Cancel</button>
                <button onClick={() => {
                    setSection(3)
                }} className=' py-2 w-[40%] md:w-[20%] rounded-xl bg-[#203a63] text-white'>Confirm Payment</button>
            </div>
        </>
    )
}

export default Billing