'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/features/cartSlice';
import { FaCloudDownloadAlt, FaRupeeSign, FaTree } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { initiatePayment } from '@/utils/razorPayUtils';
import { useAuth } from '@/context/AuthContext';
import { addPurchaseToUser, fetchUserPurchases } from '@/services/firestore';
import Loading from "@/components/loader/loader";

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
        if (!isMember) {
            toast.error('Please be a member to add this to the cart!');
            return;
        }
        dispatch(addItem({
            id: id,
            name: name,
            img: img,
            rate: rate,
        }));
        toast.success("Item successfully added to the cart");
        handleClose();
    };

    const handlePayNow = async () => {
        if (!currentUser) {
            toast.error('Please log in first to proceed with the payment');
            return;
        }
        if (!isMember) {
            toast.error('Please be a member to purchase this!');
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
        <div className='flex flex-col h-full hover:scale-105 transition-transform duration-300 ease-in-out'>
            {loading && <Loading />}

            <div className='flex flex-col flex-1 rounded-3xl shadow-lg cursor-pointer h-full justify-between p-3 items-center space-y-3 border-4 border-gray-50 hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                <div onClick={handleOpen} className='flex flex-col gap-4 w-full flex-1'>
                    <img src={img} alt={name} className='h-40 w-full object-cover rounded-2xl shadow-md transition-transform duration-300 ease-in-out' />
                    <h1 className='text-lg font-semibold text-gray-900 w-full text-left'>{name}</h1>
                    <p className={`text-sm w-full text-left flex items-center justify-start`}>
                    {category === 'Software' ? 'Out of Stock' : <><FaRupeeSign className="mr-0.5" />{rate}<FaTree className='ml-2 text-green-700' /></>}
                    </p>
                    <p className='text-gray-600 w-full text-left text-sm flex items-center gap-2'>
                        <FaCloudDownloadAlt size={16} />
                        {category === 'Software' ? 'Licensed Donator' : 'Digital Download'}
                    </p>
                </div>

                <div className='flex w-full space-x-2'>
                    {category === 'Software' ? (
                        <button 
                            disabled 
                            className='rounded-full border border-blue-600 text-blue-600 w-full p-2 bg-gray-300 cursor-not-allowed transition-all duration-300 ease-in-out'
                        >
                            Coming Soon
                        </button>
                    ) : (
                        downloadLink ? (
                            !purchased ? (
                                <>
                                    <button 
                                        onClick={addToCart} 
                                        className='rounded-full border border-green-600 text-green-600 w-1/2 p-2 transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white'
                                    >
                                        Add to cart →
                                    </button>
                                    <button 
                                        onClick={handlePayNow} 
                                        className='rounded-full border border-red-600 text-black w-1/2 p-2 transition-all duration-300 ease-in-out hover:bg-red-600'
                                    >
                                        Buy Now
                                    </button>
                                </>
                            ) : (
                                <button 
                                    onClick={handleDownload} 
                                    className='rounded-full border border-blue-600 text-blue-600 w-full p-2 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white'
                                >
                                    Download
                                </button>
                            )
                        ) : (
                            <button 
                                onClick={() => alert("Coming soon!")} 
                                className='rounded-full border border-blue-600 text-blue-600 w-full p-2 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white'
                            >
                                Coming Soon
                            </button>
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
                    <div className='w-[90vw] md:w-[70vw] lg:w-[40vw] shadow-2xl bg-white rounded-3xl border mx-auto flex flex-col items-center text-left gap-7 px-10 py-5'>
                        <Image src={img} width={200} height={200} alt={name} />
                        <h1 className='w-full text-center text-2xl font-semibold'>{name}</h1>
                        <p className='w-full text-lg'><strong>Category:</strong> {category}</p>
                        <p className='w-full text-lg'><strong>Deliver:</strong> {deliver}</p>
                        <div className='w-full flex justify-end items-center gap-4'>
                            {category === 'Software' ? (
                                <p className='text-red-600 text-lg'>Out of Stock</p>
                            ) : (
                                <p className='text-red-600 text-lg'>₹{rate}</p>
                            )}
                            {category === 'Software' ? (
                                <button disabled className='rounded-full border border-solid border-black bg-gray-200 text-gray-400 w-2/3 md:w-1/3 p-2 cursor-not-allowed'>Coming Soon</button>
                            ) : (
                                !purchased ? (
                                    <button onClick={addToCart} className='rounded-full border bg-green-600 text-white w-2/3 md:w-1/3 p-2 transition-all duration-300 ease-in-out hover:bg-green-700'>Add to cart →</button>
                                ) : (
                                    <button onClick={handleDownload} className='rounded-full border bg-blue-600 text-white w-2/3 md:w-1/3 p-2 transition-all duration-300 ease-in-out hover:bg-blue-700'>Download</button>
                                )
                            )}
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Plant;
