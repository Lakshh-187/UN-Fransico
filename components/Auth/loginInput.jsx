
"use client";
import React, { useState } from "react";
import { loginUser, sendResetPassword } from "@/services/firestore";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/navigation";

function LoginInput() {
  const [email, setEmail] = useState("");
  const [wrongCreds, setCreds] = useState(false);
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState(false);
  const router = useRouter();
  return (
    <div className=" w-full flex flex-col justify-center items-center sm:block   mt-7">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            loginUser(email, password)
              .then(() => {
                router.push("/");
                toast.success("Successfully Logged In",{
                  autoClose: 5000, // Time in milliseconds
                  closeButton: true, // Show close button
                  hideProgressBar: false,
                  pauseOnHover: true,
                  draggable: true,
                });
              })
              .catch((error) => {
                if (error.code == "auth/invalid-credential") {
                  setErrorState(true);
                  setCreds(true);
                  toast.error("Either your email or password is incorrect",{
                    autoClose: 5000, // Time in milliseconds
                    closeButton: true, // Show close button
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                  });;
                }
              });
          } catch (error) {
            if (error.code == "auth/invalid-credential") {
              setErrorState(true);
              setCreds(true);
              toast.error("Either your email or password is incorrect",{
                autoClose: 5000, // Time in milliseconds
                closeButton: true, // Show close button
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
              });;
            }
          }
        }}
        className=" w-[80%]  flex  flex-col  justify-start gap-3"
      >
        <ToastContainer/>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            className="outline-[#38A001] border-2 w-[100%]  p-3  rounded-lg  border-[#E8ECF4]"
          />
          {errorState && <p className=" text-red-500">Invalid Credentials</p>}
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="outline-[#38A001] border-2 w-[100%]  p-3  rounded-lg  border-[#E8ECF4]"
          />
          {errorState && <p className=" text-red-500">Invalid Credentials</p>}
        </div>
        <div className="flex flex-row">
          <div className=" w-full  flex  items-start  justify-start  mt-4  mb-4  gap-2">
            <input type="checkbox" className=" size-3  mt-1 " />
            <label className=" text-sm   text-black  font-medium">
              Keep me logged in
            </label>
          </div>
          <div
            onClick={() => {
              let email = prompt("Enter your email");
              let confi = confirm("Confirm or Deny");
              if (email && confi) {
                sendResetPassword(email);
              }
            }}
            className="text-nowrap"
          >
            <label className=" text-sm hover:cursor-pointer  text-black  font-medium">
              Forgot Password
            </label>
          </div>
        </div>

        <button
          type="submit"
          className=" w-full  p-3  bg-[#203a63]   text-white  rounded-lg  font-semibold  text-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginInput;
