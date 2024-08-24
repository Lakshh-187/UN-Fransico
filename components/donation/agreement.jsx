'use client';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Agreement({ amount }) {
  const [checked, setChecked] = useState(true);
  const [donateLoading, setDonateLoading] = useState(false);

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert('Razorpay SDK Failed to load');
      return;
    }

    // Make API call to the serverless API
    const formValue = new FormData();
    formValue.append('amount', amount);
    const data = await fetch('/api/pay', {
      method: 'POST',
      body: formValue
    }).then((t) => t.json());
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      name: 'Uniford',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Thank you for your test donation',
      image: 'http://localhost:3000/logo.png',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Uniford Org',
        email: 'uniford@gmail.com',
        contact: '9999999999'
      }
    };
    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      setDonateLoading(false);
    } catch (error) {
      console.log(error);
      setDonateLoading(false);
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  return (
    <div className="flex flex-col w-[90%] justify-start items-center mt-6 mb-5 md:flex-row md:justify-between md:gap-5">
      <div className="md:flex md:flex-col md:mb-auto md:w-[45%]">
        <p className="mr-auto font-light">Monthly Donation</p>
        <p className="mr-auto text-2xl font-medium">₹ {amount}</p>

        <div className="flex justify-start items-start mt-4 ">
          <input
            checked={checked}
            onChange={() => setChecked(!checked)}
            type="checkbox"
            className=" size-7 mr-2  md:size-4"
          />
          <label className="text-sm font-light">
            Yes, I’ll cover the transaction fees on Uniwave can keep 100% of my donation.
          </label>
        </div>
      </div>

      <p className="mt-7 text-sm mb-3">Donate with your preferred payment method: </p>
      <div className="w-[80%] space-y-3">
        <button
          disabled={!checked || amount <= 0}
          className={`w-full h-10 flex justify-center items-center border-gray-300 border rounded-md font-medium text-sm `}
          onClick={() => {
            setDonateLoading(true);
            makePayment();
          }}>
          {donateLoading ? (
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            <p>Donate</p>
          )}
        </button>
      </div>
    </div>
  );
}

export default Agreement;
