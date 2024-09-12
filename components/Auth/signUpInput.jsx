"use client";
import React, { useState } from "react";
import { registerUser } from "@/services/firestore";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

function SignUpInputs() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const schema = yup.object({
    userName: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await registerUser(data.email, data.password, data.userName);
      toast.success("You have been registered successfully", {
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/");
    } catch (error) {
      if (error.code === 1) {
        toast.error("The Email is already in use, Try Logging In", {
          autoClose: 5000,
          closeButton: true,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Try again in sometime", {
          autoClose: 5000,
          closeButton: true,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <motion.div
        className=" w-full h-full p-8 flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center mb-4">
          <p className="text-6xl font-bold text-[#203a63]">Uniford</p>
          <motion.div
            className="w-12 h-12 bg-gray-300 rounded-full ml-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <p className="text-4xl font-semibold text-[#203a63] mb-2">Create an account</p>
        <p className="text-lg text-[#969696] mb-4">Please enter your details to sign up</p>

        <motion.div
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["userName", "email", "password", "confirmPassword"].map((field, index) => (
              <motion.div
                key={field}
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <input
                  {...register(field)}
                  placeholder={field === "confirmPassword" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
                  type={field.includes("password") ? "password" : "text"}
                  className="w-full p-3 border-2 border-[#E8ECF4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38A001] transition duration-300"
                />
                {errors[field] && (
                  <motion.p
                    className="absolute -bottom-6 left-0 text-red-500 text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors[field].message}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.div
              className="flex items-start gap-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <input type="checkbox" className="form-checkbox" />
              <label className="text-sm text-gray-600">
                All your information is collected, stored and processed as per our
                data processing guidelines. By signing up on Uniwave, you agree to
                our Privacy Policy and Terms of Use
              </label>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full p-3 bg-[#203a63] text-white rounded-lg font-semibold text-lg disabled:opacity-50"
              disabled={loading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </motion.button>
          </motion.form>
        </motion.div>

        <div className="flex items-center w-full justify-center mt-4 mb-4">
          <hr className="w-1/3 h-[2px] bg-[#D9D9D9]" />
          <p className="px-4 text-lg">or</p>
          <hr className="w-1/3 h-[2px] bg-[#D9D9D9]" />
        </div>

        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Already have an account?{' '}
          <a
            onClick={() => router.push('/login')}
            className="underline hover:cursor-pointer font-semibold text-[#548702] md:pl-2"
          >
            Login
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default SignUpInputs;
