import Image from 'next/image'
import React from 'react'
import confirmation from '../../assets/Checkout/confirmation.png'
import Link from 'next/link'

function Confirmation() {
    return (
        <>
            <Image src={confirmation} className='mx-auto' />
            <h1 className='text-4xl md:text-7xl text-center w-3/5 mx-auto font-bold'>Thank you for your purchase!</h1>
            <p className='w-4/5 md:w-2/5 mx-auto text-gray-500 my-5 text-center'>Your order will be processed within 24 hours during working days. We
                will notify you by email once your order has been shipped.</p>
            <Link href={'/plantation'} className='w-[40%] md:w-[20%] py-4 bg-[#203a63] mx-auto block rounded-xl text-center'>
                <button className='text-white'>
                    Continue Shopping
                </button>
            </Link>
        </>
    )
}

export default Confirmation