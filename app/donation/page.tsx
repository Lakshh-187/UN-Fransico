'use client';

import FAQ from '@/components/donation/FAQS';
import {
  FaLeaf,
  FaGraduationCap,
  FaMedal,
  FaHandsHelping,
  FaRegSmile,
  FaCheckCircle,
  FaInfoCircle,
  FaCoins,
  FaCreditCard,
  FaIdCard,
  FaWhatsapp,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // Adjust path as needed
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initiatePayment } from '@/utils/razorPayUtils';
import { updateUserDoc } from '@/services/firestore';
import { userSliceActions } from '@/redux/user';
import  TermsDialog  from '@/components/Condition';
import Upload from '@/components/Upload';
import CommunityGrants from '@/components/grant-program/CommunityGrants';
import CommunityGrantsPage from '@/components/CommunityGrantsProgram';
import Link from 'next/link';

import { AiOutlineCreditCard } from 'react-icons/ai'; // Updated icon for Scholar Aid and Financial Aid buttons
import { RiSecurePaymentLine } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import { FaHandHoldingUsd, FaPiggyBank } from 'react-icons/fa';
import ScholarIDCard from '@/components/Id-card';

const Layout = () => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const isMember = useSelector((state: any) => state.user.userData.isMember);
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  const openTermsDialog = () => {
    setIsDialogOpen(true);
  };

  const closeTermsDialog = () => {
    setIsDialogOpen(false);
  };

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

  const handlePayNow = async() => {
    if (!isChecked) {
      toast.error('Please Click the checkbox to proceed with the payment');
      return;
    }

    if (!currentUser) {
      toast.error('Please log in first to proceed with the payment');
      return;
    }
    const paymentSuccessful = await initiatePayment(500, 'INR', currentUser.uid);
    if (paymentSuccessful) {
      try {
        await updateUserDoc(currentUser.uid, { isMember: true });
        dispatch(userSliceActions.setUserData({ ...currentUser, isMember: true }));
        toast.success('Payment successful! Membership activated.');
      } catch (error) {
        console.error('Error updating membership status:', error);
        toast.error('Payment successful, but failed to update membership status.');
      }
    } else {
      toast.error('Payment not completed or failed');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex flex-col md:flex-row bg-white p-6 md:p-12">
        {/* Image and Payment Option */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          {/* Image */}
          <div
            className="relative w-full h-80 md:h-96 bg-cover bg-center rounded-lg border-4 border-white shadow-xl mb-6"
            style={{ backgroundImage: "url('/image.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>

          {/* Payment Option */}
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            Free Refundable Membership
          </h2>
          <p className="text-gray-700 text-base">₹500</p>
          {isMember ? (
            <div className="flex flex-col justify-center items-start space-y-4 md:space-y-0 md:space-x-4 mt-2 gap-4">
           <button
           className="bg-red-600 mt-5 mb-10 text-white py-2 px-4 text-lg font-bold rounded-3xl hover:bg-red-700 flex items-center"
           disabled
         >
           <FaCreditCard className="mr-2" /> Your Membership is active
         </button>

         <Link href="https://forms.gle/VJJCWM2wzcZjT8YK8">
            <button
                className="bg-blue-600 text-white py-3 px-6 text-lg font-bold rounded-3xl hover:bg-blue-700 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 w-full"
            >
                <FaIdCard className="mr-2" /> ID Card Form
            </button>
        </Link>

        <Link href="https://whatsapp.com/channel/0029Vaeaji630LKGRyA8vW0M">
            <button
                className="bg-green-600 text-white py-3 px-6 text-lg font-bold rounded-3xl hover:bg-green-700 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 w-full"
            >
                <FaWhatsapp className="mr-2" /> Join for Updates
            </button>
        </Link>
         </div>
          ) : (
            <div className="p-4">
    <label className="inline-flex items-center">
        <input
            type="checkbox"
            className="form-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
        />
        <span className="ml-2 text-lg">
            I agree to the <TermsDialog isOpen={openTermsDialog} onClose={closeTermsDialog} />
        </span>
    </label>

    <button
        className={`bg-indigo-600 mt-5 text-white py-3 px-6 text-lg font-bold rounded-3xl hover:bg-indigo-700 flex items-center justify-center shadow-lg transition-opacity duration-300 ${isChecked ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
        onClick={handlePayNow}
        disabled={!isChecked}
    >
        <MdPayment className="mr-2" /> Pay Now
    </button>

    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-10">
        <Link href="https://forms.gle/3EiHaNBkXAmghiQb6">
            <button
                className="bg-red-600 text-white py-3 px-6 text-lg font-bold rounded-3xl hover:bg-red-700 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 w-full"
            >
                <FaHandHoldingUsd className="mr-2" /> Scholar Aid
            </button>
        </Link>

        <Link href="https://forms.gle/sMu8FyNMb4YeLZeMA">
            <button
                className="bg-green-600 text-white py-3 px-6 text-lg font-bold rounded-3xl hover:bg-green-700 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 w-full"
            >
                <FaPiggyBank className="mr-2" /> Scholar Application
            </button>
        </Link>
    </div>
</div>
          )}
          {/* Refund Process */}
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-indigo-700 flex items-center">
            <FaCheckCircle className="mr-3 text-indigo-600" /> Refund Process
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-700" /> Complete a
              Social Internship and participate in events or conferences.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-700" /> Submit your
              "Participation Certificate" along with the completion certificate
              provided by our organization.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-700" /> Receive a refund
              of your fee upon verification of your participation.
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-2xl overflow-y-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-indigo-800 flex items-center">
            <FaGraduationCap className="mr-3 text-indigo-600 animate-bounce" />{' '}
            Learn What School Doesn't Teach You
          </h1>
          <p className="text-gray-700 mb-4 text-base">
            At UN Francisco, you can gain practical knowledge and learn
            real-world skills that will help you transform your life at work,
            school, and home.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 flex items-center">
            <FaMedal className="mr-3 text-indigo-600" /> Benefits of Membership
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
            <li className="flex items-center">
              <FaLeaf className="mr-2 text-green-700" /> Access to over ₹2 lakh
              worth of premium resources at no cost.
            </li>
            <li className="flex items-center">
              <FaRegSmile className="mr-2 text-yellow-700" /> Internships
              through CAF.
            </li>
            <li className="flex items-center">
              <FaGraduationCap className="mr-2 text-blue-700" /> Premium
              courses, software, Career Track, and Uni AI.
            </li>
            <li className="flex items-center">
              <FaInfoCircle className="mr-2 text-purple-700" /> Free access to
              major events, competitions, and conferences.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-700" /> Certification
              for every activity and participation, with opportunities for
              international certification through conferences.
            </li>
            <li className="flex items-center">
              <FaHandsHelping className="mr-2 text-red-700" /> Free access to
              the Common Application Form (CAF) for internships.
            </li>
            <li className="flex items-center">
              <FaCoins className="mr-2 text-yellow-700" /> Free access to the
              Help Desk for any resources or assistance.
            </li>
            <li className="flex items-center">
              <FaRegSmile className="mr-2 text-pink-700" /> And many more
              benefits!
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-indigo-700 flex items-center">
            <FaInfoCircle className="mr-3 text-indigo-600" /> How It Works
          </h2>
          <p className="text-gray-700 mb-4 text-base">
            Many students, content creators, mentors, and startups donate their
            premium resources to help the organization work more effectively in
            the areas of environment, education, and poverty.
          </p>
          <p className="text-gray-700 mb-4 text-base">
            You can also suggest any premium course, software, or notes you
            need, and we'll list it in the donor portal. If a donor has it, they
            can provide it to you.
          </p>
          <p className="text-gray-700 mb-4 text-base">
            We have a Talent Hunt Alliance where we identify skilled members and
            list them in the Startups Portal, giving them more opportunities.
          </p>
        </div>
      </div>

      <ScholarIDCard />

      <CommunityGrantsPage />

      {/* Why Membership Fees */}
      <div className="flex items-center justify-center">
        <div className="p-6 bg-white w-full max-w-screen-md rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 flex items-center">
            <FaCoins className="mr-3 text-indigo-600" /> Why Membership Fees?
          </h2>
          <ul className="list-disc space-y-3 text-gray-800 text-base">
            <li className="flex items-center justify-center align-middle">
              Initially, we provided free membership in exchange for a promise
              that members would participate in our social events by planting
              trees, donating old clothes and food, and engaging in social
              internships.
            </li>
            <li className="flex items-center justify-center align-middle">
              We found that 90% of the premium resources were underutilized and
              social commitments were not fulfilled.
            </li>
            <li className="flex items-center justify-center align-middle">
              To ensure active participation, we introduced a refundable
              membership fee, which is returned after members engage in social
              activities.
            </li>
          </ul>
        </div>
      </div>

      {/* <ScholarIDCard /> */}

      <Upload />

      <FAQ />
      <ToastContainer />
    </>
  );
};

export default Layout;
