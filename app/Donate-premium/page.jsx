"use client";
import React, { useState } from "react";
import { db, storage } from "../../config/firebase"; // Import storage from firebase
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function WorkWithUS() {
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  return (
    <div className="flex justify-center   flex-col md:flex-row w-full py-8">
      <ToastContainer />
      <div className="md:w-1/2 p-6 md:p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-gray-700 text-3xl font-bold mb-4">
          🌟 Join Our Mission - Be a Social Warrior! 🌟
        </h1>
        <p className="text-lg mb-4">🎉 Calling All Creators, Educators, and Students!</p>
        <div className="space-y-6">
          <div>
            <p className="text-2xl font-semibold text-orange-600 mb-2">What We Do</p>
            <p className="text-md text-gray-800">
              Do you have Premium Notes, Courses, Subscriptions, or other cool stuff? 🤔 We invite you to donate them to our Social Warriors!
              We give free memberships to students and professionals. They receive all the premium resources they need for FREE! 🧑‍🏫👩‍💻
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-orange-600 mb-2">What We Ask in Return</p>
            <p className="text-md text-gray-800">
              Plant Trees 🌳
              Donate Food & Clothes to people who need them 🍲👕
              Join Social Drives, Internships, and Events 🚀
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-orange-600 mb-2">Our Goal</p>
            <p className="text-md text-gray-800">
              Create a Revolution 🌍 This is an ECO-EDUCATION revolution! 🌱📚
              The more social work you do, the more education resources and career opportunities you get! 🛠️🎓
              Let’s make this world a happy place together! 😊✨
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:p-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-gray-700 text-3xl font-bold mb-4">
          🌟 Fill this form for any suggestion! 🌟
        </h1>
          <form className="space-y-6">
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  First Name
                </label>
                <input
                  required
                  value={firstName}
                  placeholder="First Name"
                  className="shadow-md bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  value={lastName}
                  required
                  placeholder="Last Name"
                  className="shadow-md bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="shadow-md bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Applying for
                </label>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-3"
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="intern">Intern</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="block p-3 w-full text-md text-gray-900 bg-gray-100 rounded-xl shadow-md border border-gray-300 focus:outline-none"
                placeholder="We would love to hear from you 💖"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="Resume"
                className="block mb-2 text-lg font-medium text-gray-700"
              >
                Resume
              </label>
              <input
                className="shadow-md bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-xl focus:outline-none block w-full p-3"
                type="file"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center p-4 justify-center text-white rounded-xl bg-blue-800 font-semibold text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUS;
