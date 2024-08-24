"use client"
import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoChevronBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { decrementItem, deleteItem, incrementItem,clearCart } from '../../redux/features/cartSlice';
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { addPurchaseToUser } from '@/services/firestore';
import { initiatePayment } from '@/utils/razorPayUtils';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Loader from "@/components/loader/loader"
function Cart({ setCart, user }) {
    const {currentUser}=useAuth();
    const [loading,setLoading]=useState(false);
    const router=useRouter();
    const isMember = useSelector((state) => state.user.userData.isMember);
    useEffect(() => {
        const loadRazorpayScript = async () => {

            try {
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.async = true;

                // Adding event listeners to handle script load and error
                script.onload = () => {
                    console.log('Razorpay script loaded successfully');
                };

                script.onerror = () => {
                    console.error('Failed to load Razorpay script');
                };

                document.body.appendChild(script);
            } catch (error) {
                console.error('Failed to load Razorpay script:', error);
            }
        };

        loadRazorpayScript();
    }, []);
  const cartItems = useSelector(state => state.cart.cartItems)
  const cartValue = useSelector(state => state.cart.cartValue)
  const dispatch = useDispatch()

  const handleCheckout = async () => {
    if (!currentUser ) {
        toast.error('Please log in first to proceed with the payment');
        return;
    }
    if (!isMember ) {
        toast.error('Please be a member to be able to checkout!');
        return;
    }
    if( cartValue.value==0){ 
        toast.error('Please add something to the cart to checkout');
        return;
    }
    const paymentSuccessful = await initiatePayment(cartValue.value, 'INR', currentUser.uid);
    if (paymentSuccessful) {
        setLoading(true);
        try{
      for (const item of cartItems) {
        await addPurchaseToUser(currentUser.uid, item.id);
      }
      dispatch(clearCart()); // Clear the cart and cart value
      router.push('/plantation');
      console.log("All purchases added to user account");
    }catch(e){
        console.error("Error is::::::: "+e)
        toast.error("Error updating cart items");
    }
    setLoading(false);
    } else {
      console.log("Payment failed");
    }
  }

  return (
    <>
     {loading && <Loader />}
      <div className='text-3xl w-4/5 mx-auto flex gap-2 items-center mt-16 border-b-2 p-4'>
        <IoChevronBackOutline onClick={() => { setCart(false) }} className='cursor-pointer' />
        <h1>Continue Shopping</h1>
      </div>
      <div className='w-4/5 mx-auto my-5'>
        <h1 className='text-2xl my-2'>Shopping Cart</h1>
        <p>You have {cartValue.quantity} items in your cart.</p>
      </div>
      <div className='w-11/12 md:w-4/5 mx-auto flex flex-col gap-4'>
        {cartItems.map((item, idx) => (
          <div key={idx} className='flex text-xs md:text-base justify-between h-24 md:h-32 rounded-lg shadow-md p-2 items-center border md:px-10'>
            <Image src={item.img} height={50} width={50} />
            <div>
              <h1>{item.name}</h1>
              <p>{item.size}</p>
            </div>
            <div className='flex items-center gap-1 md:gap-3 text-sm md:text-lg select-none'>
              <CiSquareMinus onClick={() => { dispatch(decrementItem({ id: item.id, rate: item.rate })) }} className='md:text-2xl cursor-pointer' />
              <p>{item.quantity}</p>
              <CiSquarePlus onClick={() => { dispatch(incrementItem({ id: item.id, rate: item.rate })) }} className='md:text-2xl cursor-pointer' />
            </div>
            <p className='text-red-600'>{item.rate}</p>
            <FaRegTrashCan className='md:text-2xl cursor-pointer' onClick={() => { dispatch(deleteItem({ id: item.id })) }} />
          </div>
        ))}
        <div className='flex w-4/5 mx-auto justify-end my-16'>
          <div className='w-1/2 text-[#A4A4A4] text-lg gap-2 flex flex-col'>
            <div className='flex justify-between '>
              <p>Subtotal</p>
              <p>{cartValue.value}</p>
            </div>
            <hr />
            <div className='flex justify-between text-black text-2xl'>
              <p>Order Total</p>
              <p>{cartValue.value > 0 ? cartValue.value : 0}</p>
            </div>
          </div>
        </div>
        <div className='w-2/5 mx-auto'>
          <button className='bg-primaryGreen text-white w-full py-4 rounded-lg' onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart;
