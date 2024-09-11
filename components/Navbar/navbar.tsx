"use client";
import { RefsContext } from "@/app/layout";
import { Box, Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSliceActions } from "@/redux/user/index"; 
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "@/context/AuthContext"; 

import { getUser } from "@/services/firestore";

type Props = {};

const Navbar = (props: Props) => {
  const { isLoggedIn, loading, currentUser, logout } = useAuth();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const { global_pre, who_are_we, get_involved, apply } = useContext(RefsContext);
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMembership = async () => {
      if (loading || !currentUser) {
        setIsMember(false);
        return;
      }

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

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(userSliceActions.clearUserData());
      router.push("/login");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const links = [
    {
      title: "UF-Grant",
      pushTo: () => {
        router.push("/grant-program");
      },
    },
    {
      title: "UN-Fransico",
      pushTo: () => {
        router.push("/home");
      },
    },
    {
      title: "6 i",
      pushTo: () => {
        router.push("/six-i");
      },
    },
    {
      title: "Membership",
      pushTo: () => {
        router.push("/donation");
      },
    },
    {
      title: "Premiums",
      pushTo: () => {
        router.push("/premium-resources");
      },
    },
    
  ];

  return (
    <div className="relative z-10">
      <ToastContainer />
      <div className="w-full items-center p-4 h-[4rem] flex justify-between bg-white shadow-md">
        <div
          onClick={() => router.push("/")}
          className="w-[10%] cursor-pointer flex items-center"
        >
          <Image
            priority={true}
            src="/logo.svg"
            alt="brand"
            height={60}
            width={60}
            className="h-8 w-8"
          />
        </div>
        <div className="hidden md:flex md:w-[70%] h-[3rem] items-center justify-center bg-[#f5f5f5] rounded-full">
          <div className="w-full flex justify-evenly text-[#203a63]">
            {links.map((link, index) => (
              <div
                key={index}
                onClick={() => link.pushTo()}
                className="cursor-pointer px-4 py-2 hover:text-[#203a63] hover:bg-[#e0e0e0] rounded-full transition-all duration-300 ease-in-out"
              >
                {link.title}
              </div>
            ))}
            {isMember ? (
              <div
                onClick={() => router.push("/unifordResources")}
                className="cursor-pointer px-4 py-2 hover:text-[#203a63] hover:bg-[#e0e0e0] rounded-full transition-all duration-300 ease-in-out"
              >
                Resources
              </div>
            ) : null}
            {isMember ? (
              <div
                onClick={() => router.push("/career-track")}
                className="cursor-pointer px-4 py-2 hover:text-[#203a63] hover:bg-[#e0e0e0] rounded-full transition-all duration-300 ease-in-out"
              >
                Career Track
              </div>
            ) : null}
          </div>
        </div>
        <div className="md:w-[30%] flex justify-end items-center space-x-4">
          {loading ? null : isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <div
                onClick={() => router.push("/unifordProfile")}
                className="cursor-pointer flex items-center justify-center"
              >
                <div className="rounded-full border-2 border-[#203a63] w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.svg"
                    alt="User Icon"
                    height={20}
                    width={20}
                    className="object-cover"
                  />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-[#203a63] text-white py-2 px-4 rounded-lg hover:bg-[#1a2f52] transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signup"
              className="bg-[#203a63] text-white py-2 px-4 rounded-lg hover:bg-[#1a2f52] transition-all duration-300"
            >
              Sign Up
            </Link>
          )}
          <div className="md:hidden flex items-center">
            <div onClick={() => setDrawerOpen(true)} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#203a63]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        open={drawerOpen}
        PaperProps={{
          sx: { backgroundColor: "#203a63", color: "white" },
        }}
      >
        <Box sx={{ width: 250 }}>
          {links.map((link, index) => (
            <div
              key={index}
              onClick={() => {
                link.pushTo();
                setDrawerOpen(false);
              }}
              className="w-full flex px-4 py-2 hover:bg-[#B9E390] hover:text-black items-center justify-start gap-3 cursor-pointer transition-all duration-300"
            >
              <div className="text-sm font-semibold">{link.title}</div>
            </div>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
