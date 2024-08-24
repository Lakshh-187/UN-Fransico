"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // Adjust the import path as necessary
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { getUser } from '@/services/firestore'; // Adjust the import path as necessary

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn, loading, currentUser } = useAuth();
  const router = useRouter();
  const [isMember, setIsMember] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMembership = async () => {
      if (loading || !currentUser) return; // Avoid checks while loading or if user is not logged in

      try {
        const userDoc = await getUser(currentUser.uid);
        if (userDoc) {
          setIsMember(userDoc.isMember);
        } else {
          setIsMember(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsMember(false);
      }
    };

    checkMembership();
  }, [currentUser, loading]);

  useEffect(() => {
    if (loading || isMember === null) return; // Avoid checks while loading or if isMember is not yet determined

    if (!isLoggedIn) {
      toast.error('You must be logged in to access this page');
      router.push("/");
    } else if (!isMember) {
      toast.error('You must be a member to access this page');
      router.push("/");
    }
  }, [isLoggedIn, isMember, loading, router]);

  if (loading || isMember === null) {
    return <div>Loading...</div>; // Optional loading state
  }

  if (!isLoggedIn || !isMember) {
    return <div className='text-3xl'>Log in or be a member to continue</div>;
  }

  return <>
    {children}
    <ToastContainer /> {/* Ensure ToastContainer is included */}
  </>;
};

export default ProtectedRoute;
