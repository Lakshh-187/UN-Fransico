import axios from 'axios';
import { userSliceActions } from '@/redux/user'; // Adjust path as needed
import { Dispatch } from 'redux';
import { toast } from 'react-toastify';
import { getUser, updateUserDoc } from '@/services/firestore'; // Adjust path as needed
import crypto from 'crypto';
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
  };
  theme: {
    color: string;
  };
}

export const initiatePayment = async (
  amount: number,
  currency: string,
  userId: string,
  
) => {
  try {
    const user = await getUser(userId);
    if (!user) {
      toast.error('User not found');
      return;
    }

    const orderResponse = await axios.post('/api/Membership-razorpay-setup', {
      amount,
      currency,
      receipt: `receipt_${userId}`,
    });

    const { data: order } = orderResponse.data;
    return new Promise((resolve) => {
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
        amount: order.amount,
        currency: order.currency,
        name: 'UN Francisco',
        description: 'Membership Fee',
        order_id: order.id,
        handler: async (response) => {
          try {
            // Verify Razorpay signature
            const secret = process.env.NEXT_PUBLIC_RAZORPAY_SECRET as string;
            const shasum = crypto.createHmac('sha256', secret);
            shasum.update(`${response.razorpay_order_id}|${response.razorpay_payment_id}`);
            const generatedSignature = shasum.digest('hex');

            if (generatedSignature !== response.razorpay_signature) {
              toast.error('Payment verification failed: Invalid signature');
              resolve(false);
              return;
            }

            // Payment verified
            resolve(true);
          } catch (error) {
            console.error('Error verifying payment:', error);
            toast.error('Payment verification failed');
            resolve(false);
          }
        },
        prefill: {
          name: user.displayName || '',
          email: user.email || '',
        },
        theme: {
          color: '#3399cc',
        },
      };

    const Razorpay = (window as any).Razorpay;
    if (Razorpay) {
      const rzp = new Razorpay(options);
      rzp.open();
    } else {
      toast.error('Razorpay script not loaded');
    }
  });
  } catch (error) {
    console.error('Failed to initiate payment:', error);
    toast.error('Failed to initiate payment');
  }
};
