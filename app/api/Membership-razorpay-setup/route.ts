import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

// Ensure environment variables are defined
const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.NEXT_PUBLIC_RAZORPAY_SECRET;

if (!razorpayKeyId || !razorpayKeySecret) {
  throw new Error('Razorpay environment variables are not defined');
}

const razorpay = new Razorpay({
  key_id: razorpayKeyId,
  key_secret: razorpayKeySecret,
});

export async function POST(request: NextRequest) {
  try {
    const { amount, currency } = await request.json();

    // Ensure the amount is in paise and an integer
    const amountInPaise = Math.round(amount * 100);

    const options = {
      amount: amountInPaise,
      currency: currency,
      receipt: 'rcp1',
    };

    const order = await razorpay.orders.create(options);
    console.log(order);
    return NextResponse.json({ data: order }, { status: 200 });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
