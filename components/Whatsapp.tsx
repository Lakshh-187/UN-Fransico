// components/WhatsAppButton.js
import Link from 'next/link';
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '7347099610'; // Replace with your WhatsApp number
  const message = 'Hello! I have a question.'; // Replace with your default message

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M20.507 3.49a11.91 11.91 0 00-8.406-3.49c-6.558 0-11.917 5.36-11.917 11.918a11.84 11.84 0 001.64 5.97L.69 23.31l6.636-1.742a11.89 11.89 0 005.774 1.526h.005c6.558 0 11.917-5.36 11.917-11.918 0-3.189-1.233-6.189-3.515-8.486zM11.93 22.011a10.59 10.59 0 01-5.29-1.416l-.378-.225-3.939 1.034 1.04-3.872-.247-.403a10.584 10.584 0 01-1.597-5.659c0-5.855 4.765-10.62 10.621-10.62a10.56 10.56 0 017.515 3.116 10.573 10.573 0 013.114 7.515c0 5.855-4.765 10.62-10.619 10.62zm5.977-8.033l-2.036-.944c-.273-.126-.594-.217-.936-.042-.246.126-.632.479-.773.658-.14.18-.287.199-.528.072-.273-.126-1.15-.424-2.194-1.348-.81-.714-1.36-1.598-1.518-1.871-.158-.273-.017-.421.109-.546.112-.111.248-.287.373-.431.126-.144.158-.246.246-.414.085-.17.042-.315-.021-.443-.063-.127-.562-1.355-.771-1.858-.203-.485-.406-.42-.562-.428-.145-.007-.31-.01-.478-.01-.167 0-.443.063-.676.315-.233.253-.884.867-.884 2.13 0 1.262.905 2.485 1.033 2.657.126.17 1.774 2.707 4.31 3.795.603.26 1.072.414 1.439.532.605.192 1.156.165 1.588.1.485-.074 1.487-.61 1.697-1.201.21-.59.21-1.096.148-1.202-.063-.106-.231-.17-.478-.296z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default WhatsAppButton;
