"use client"
import React, { useEffect, useState } from "react";
import { registerUser } from "@/services/firestore";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";

function SignUpInputs() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(schema),
  });
  // async function sendMail(mail) {
  //   const mailData = new FormData();
  //   mailData.append("mail", mail);
  //   return await axios.post("/api/register", mailData);
  // }

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Passwords are not matching" });
    } else {
      clearErrors("confirmPassword");
      registerUser(data.email, data.password, data.userName)
        .then((value) => {
          console.log(value.code);
          if (value.code == 1) {
            // sendMail(data.email).then(() => {
              toast.success("You have been registered successfully",{
                autoClose: 5000, // Time in milliseconds
                closeButton: true, // Show close button
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
              });;
              router.push("/");
            // });
          } else if (value.code == 3) {
            toast.error("The Email is already in use, Try Logging In",{
              autoClose: 5000, // Time in milliseconds
              closeButton: true, // Show close button
              hideProgressBar: false,
              pauseOnHover: true,
              draggable: true,
            });;
          } else {
            console.log("Heya");
          }
        })
        .catch((error) => {
          toast.error("Try again in sometime");
        });
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center items-center sm:block   mt-7">
      <div className=" w-[80%]  flex  flex-col  justify-start gap-3">
        <div>
          <input
            {...register("userName")}
            placeholder="Username"
            type="text"
            className="outline-[#38A001] border-2 w-[100%]  p-3  rounded-lg  border-[#E8ECF4]"
          />
          <p className="text-red-300">
            {errors.userName && errors.userName.message}
          </p>
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            type="text"
            className="outline-[#38A001] border-2 w-[100%]  p-3  rounded-lg  border-[#E8ECF4]"
          />
          <p className="text-red-300">{errors.email && errors.email.message}</p>
        </div>
        <div>
          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="outline-[#38A001] border-2 w-[100%]  p-3  rounded-lg  border-[#E8ECF4]"
          />
          <p className="text-red-300">
            {errors.password && errors.password.message}
          </p>
        </div>
        <div>
          <input
            {...register("confirmPassword")}
            placeholder="Confirm password"
            type="password"
            className="outline-[#38A001] border-2 w-[100%]  p-3  rounded-lg  border-[#E8ECF4]"
          />
          <p className="text-red-300">
            {errors.confirmPassword && errors.confirmPassword.message}
          </p>
        </div>
        <div className="w-full flex items-start justify-center mt-6 gap-2">
          <input type="checkbox" className="md:size-8 " />
          <label className=" text-sm   text-black  font-medium">
            All your information is collected, stored and processed as per our
            data processing guidelines. By signing up on Uniwave, you agree to
            our Privacy Policy and Terms of Use
          </label>
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className=" w-full  p-3  bg-[#203a63]   text-white  rounded-lg  font-semibold  text-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpInputs;