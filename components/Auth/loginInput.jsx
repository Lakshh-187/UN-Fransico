"use client";
import React, { useState } from "react";
import { loginUser, sendResetPassword } from "@/services/firestore";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

function LoginInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(email, password);
      toast.success("Successfully Logged In", {
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/");
    } catch (error) {
      setErrorState(true);
      toast.error("Either your email or password is incorrect", {
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-7">
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ToastContainer />

        {/* Header */}
        <div className="flex items-center mb-4">
          <p className="text-6xl font-bold text-[#203a63]">Uniford</p>
          <motion.div
            className="w-12 h-12 bg-gray-300 rounded-full ml-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <p className="text-4xl font-semibold text-[#203a63] mb-4">Login</p>
        <p className="text-lg text-[#969696] mb-6">Please enter your credentials to log in</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="text"
              className="w-full p-3 border-2 border-[#E8ECF4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38A001] transition duration-300"
            />
            {errorState && (
              <motion.p
                className="absolute -bottom-6 left-0 text-red-500 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Invalid Credentials
              </motion.p>
            )}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="w-full p-3 border-2 border-[#E8ECF4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38A001] transition duration-300"
            />
            {errorState && (
              <motion.p
                className="absolute -bottom-6 left-0 text-red-500 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Invalid Credentials
              </motion.p>
            )}
          </motion.div>

          {/* Checkbox and Forgot Password */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <label className="text-sm text-gray-600">Keep me logged in</label>
            </div>
            <a
              onClick={() => {
                let email = prompt("Enter your email");
                if (email) sendResetPassword(email);
              }}
              className="text-sm text-[#548702] underline cursor-pointer"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full p-3 bg-[#203a63] text-white rounded-lg font-semibold text-lg disabled:opacity-50"
            disabled={loading}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {loading ? "Logging In..." : "Login"}
          </motion.button>
        </form>

        {/* Redirect to Sign Up */}
        <div className="flex justify-center items-center w-full mt-4 mb-4">
          <hr className="w-1/3 h-[2px] bg-[#D9D9D9]" />
          <p className="px-4 text-lg">or</p>
          <hr className="w-1/3 h-[2px] bg-[#D9D9D9]" />
        </div>

        <motion.p
          className="text-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Need an account?{' '}
          <a
            onClick={() => router.push('/signup')}
            className="underline font-semibold text-[#548702] cursor-pointer"
          >
            Create one
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default LoginInput;
