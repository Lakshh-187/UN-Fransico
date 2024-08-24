'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/features/cartSlice';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { initiatePayment } from '@/utils/razorPayUtils';
import { useAuth } from '@/context/AuthContext';
import { addPurchaseToUser, fetchUserPurchases } from '@/services/firestore';
import Loading from "@/components/loader/loader";
import Link from 'next/link';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
};

const Plant = ({ img, name, rate, category, deliver, tag, id, downloadLink }) => {
    const [open, setOpen] = useState(false);
    const [purchased, setPurchased] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { currentUser } = useAuth();

    const isMember = useSelector((state) => state.user.userData.isMember);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const loadRazorpayScript = async () => {
            try {
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.async = true;
                document.body.appendChild(script);

                script.onload = () => console.log('Razorpay script loaded successfully');
                script.onerror = () => console.error('Failed to load Razorpay script');
            } catch (error) {
                console.error('Failed to load Razorpay script:', error);
            }
        };

        loadRazorpayScript();
    }, []);

    useEffect(() => {
        if (currentUser) {
            setLoading(true);
            fetchUserPurchases(currentUser.uid).then(purchases => {
                if (purchases.includes(id)) {
                    setPurchased(true);
                }
                setLoading(false);
            });
        }
    }, [currentUser, id]);

    const addToCart = () => {
        if (!currentUser) {
            toast.error('Please log in to add items to the cart');
            return;
        }
        if(!isMember){
            toast.error('Please be a member to add this to the cart!!');
            return;
        }
        dispatch(addItem({
            id: id,
            name: name,
            img: img,
            rate: rate,
        }));
        toast.success("Item Successfully added to the cart");
        handleClose();
    };

    const handlePayNow = async () => {
        if (!currentUser) {
            toast.error('Please log in first to proceed with the payment');
            return;
        }
        if(!isMember){
            toast.error('Please be a member to purchase this!!');
            return;
        }
        try {
            const paymentSuccessful = await initiatePayment(rate, 'INR', currentUser.uid);
            if (paymentSuccessful) {
                await addPurchaseToUser(currentUser.uid, id);
                setPurchased(true);
                toast.success('Payment successful! You can now download the item.');
            } else {
                toast.error('Payment not completed or failed');
            }
        } catch (error) {
            console.error('Error during payment or update:', error);
            toast.error('Payment not completed or failed');
        }
    };

    const handleDownload = () => {
        window.open(downloadLink, '_blank');
    };

    return (
        <>
            {loading && <Loading />}

            <div className='select-none'>
                <div className='rounded-3xl w-full focus:outline-none shadow-lg flex cursor-pointer h-[30rem] justify-between flex-col p-1 items-center space-y-2'>
                    <div onClick={handleOpen} className='flex flex-col gap-4'>
                        <img src={img} alt={name} className='h-full w-full' />
                        <h1 className='text-[rgb(59,99,20)] w-full text-left'>{name}</h1>
                        {category === 'Software' ? (
                            <p className='text-[#DC0303] w-full text-left text-xs'>Out of Stock</p>
                        ) : (
                            <p className='text-[#DC0303] w-full text-left text-xs'>₹{rate}</p>
                        )}
                        <p className="text-gray-700 w-full text-left text-xs flex items-center">
                            <FaCloudDownloadAlt size={20} color="#0000FF" />
                            {category === 'Software' ? (<span className="ml-2">Licensed donator</span>):(<span className="ml-2">Digital Download</span>)}
                            
                        </p>
                    </div>
                    <div className='flex w-full space-x-2'>
                        {category === 'Software' ? (
                            <button disabled className='rounded-full border border-[#0000FF] text-[#0000FF] w-full p-1 bg-gray-200 cursor-not-allowed'>Coming Soon</button>
                        ) : (
                            downloadLink ? (
                                !purchased ? (
                                    <>
                                        <button onClick={addToCart} className='rounded-full border border-[#5F8638] text-[#5F8638] w-1/2 p-1 hover:bg-[#5F8638] hover:text-white'>Add to cart →</button>
                                        <button onClick={handlePayNow} className='rounded-full border border-[#DC0303] text-[#DC0303] w-1/2 p-1 hover:bg-[#DC0303] hover:text-white'>Buy Now</button>
                                    </>
                                ) : (
                                    <button onClick={handleDownload} className='rounded-full border border-[#0000FF] text-[#0000FF] w-full p-1 hover:bg-[#0000FF] hover:text-white'>Download</button>
                                )
                            ) : (
                                <button onClick={() => alert("Coming soon!")} className='rounded-full border border-[#0000FF] text-[#0000FF] w-full p-1 hover:bg-[#0000FF] hover:text-white'>Coming Soon</button>
                            )
                        )}
                    </div>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ backdropFilter: 'blur(5px)', outline: 'none' }}
                >
                    <Box sx={style}>
                        <div className='w-[90vw] md:w-[70vw] lg:w-[40vw] shadow-xl bg-white rounded-3xl border mx-auto flex flex-col items-center text-left gap-7 px-10 py-5'>
                            <Image src={img} width={200} height={200} alt={name} />
                            <h1 className='w-full text-center text-2xl font-bold'>{name}</h1>
                            <p className='w-full'><strong>Category:</strong> {category}</p>
                            <p className='w-full'><strong>Deliver:</strong> {deliver}</p>
                            <div className='w-full flex justify-end items-center gap-4'>
                                {category === 'Software' ? (
                                    <p className='text-[#DC0303]'>Out of Stock</p>
                                ) : (
                                    <p className='text-[#DC0303]'>₹{rate}</p>
                                )}
                                {category === 'Software' ? (
                                    <button disabled className='rounded-full border bg-gray-200 text-gray-400 w-2/3 md:w-1/3 p-2 cursor-not-allowed'>Coming Soon</button>
                                ) : (
                                    !purchased ? (
                                        <button onClick={addToCart} className='rounded-full border bg-[#5F8638] text-white w-2/3 md:w-1/3 p-2'>Add to cart --{'>'}</button>
                                    ) : (
                                        <button onClick={handleDownload} className='rounded-full border bg-[#0000FF] text-white w-2/3 md:w-1/3 p-2'>Download</button>
                                    )
                                )}
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default Plant;
