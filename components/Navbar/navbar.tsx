"use client";
import { RefsContext } from "@/app/layout";
import { Box, Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userSliceActions } from "@/redux/user/index"; // Adjust the path as needed
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "@/context/AuthContext"; // Import the useAuth hook

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
      title: "UN-Fransico Club",
      pushTo: () => {
        router.push("/home");
      },
    },
    {
      title: "Membership",
      pushTo: () => {
        router.push("/donation");
      },
    },
    {
      title: "Donate Premium",
      pushTo: () => {
        router.push("/Donate-premium");
      },
    },
    {
      title: "Premium Resources",
      pushTo: () => {
        router.push("/premium-resources");
      },
    },
    {
      title: "Career Track",
      pushTo: () => {
        if (isMember) {
          router.push("/career-track");
        }
      },
    },
  ];

  return (
    <div>
      <ToastContainer />
      <div className="w-full items-center p-4 z-10 h-[4rem] flex justify-between flex-row text-black">
        <div
          onClick={() => router.push("/")}
          className="w-[10%] hover:cursor-pointer"
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
        <div className="md:w-[60%] py-3 h-[3rem] hidden md:flex items-center justify-center bg-white rounded-full">
          <div className="w-full py-4 flex flex-row justify-evenly p-2 text-[#203a63]">
            <div
              onClick={() => router.push("/grant-program")}
              className="cursor-pointer"
            >
              UF-Grant
            </div>
            <div className="cursor-pointer">
              <Link href={"/home"}>UN-Fransico Club</Link>
            </div>
            <div
              onClick={() => router.push("/donation")}
              className="cursor-pointer"
            >
              Membership
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                router.push("/Donate-premium");
              }}
            >
              Donate Premium
            </div>
            <div
              onClick={() => router.push("/premium-resources")}
              className="cursor-pointer"
            >
              Premium Resources
            </div>
            {isMember ? (
              <div
                onClick={() => router.push("/career-track")}
                className="cursor-pointer"
              >
                Career Track
              </div>
            ) : null}
          </div>
        </div>
        <div className="md:w-[30%]">
          <div className="w-full flex justify-evenly items-center">
            {loading ? null : isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div
                  onClick={() => router.push("/unifordProfile")}
                  className="cursor-pointer"
                >
                  <div className="rounded-full border-2 border-black w-[40px] h-[40px] flex items-center justify-center">
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
                  className="bg-[#203a63] text-white p-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/signup"
                  className="bg-[#203a63] text-white p-2 rounded-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <div className="flex md:hidden">
              <div onClick={() => setDrawerOpen(true)}>
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
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
      </div>
      <Drawer
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        open={drawerOpen}
      >
        <Box sx={{ width: 250 }}>
          {links.map((link, index) => (
            <div
              key={index}
              onClick={() => {
                link.pushTo();
                setDrawerOpen(false);
              }}
              className="w-full flex px-4 py-2 hover:bg-[#B9E390] hover:text-black items-center justify-start gap-3"
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
