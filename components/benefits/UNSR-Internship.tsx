import React from 'react';
import { FaCertificate, FaQrcode, FaMedal, FaKey } from 'react-icons/fa';

export default function UNSRCertificate() {
  return (
    <div className="bg-gray-100 py-16 px-5 md:px-20 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl flex flex-col md:flex-row overflow-hidden max-w-6xl w-full">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">UNSR Internship Certificate</h1>
          
          <div className="space-y-2">
            {/* Official Certification */}
            <div className="flex items-start">
              <FaCertificate className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h2 className="text-base font-semibold text-blue-800">Official Certification</h2>
                <p className="text-gray-600 text-sm">
                  The UNSR Certificate is issued by a registered and recognized organization or company.
                </p>
              </div>
            </div>

            {/* QR Code Verification */}
            <div className="flex items-start">
              <FaQrcode className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h2 className="text-base font-semibold text-blue-800">QR Code Verification</h2>
                <p className="text-gray-600 text-sm">
                  Each certificate comes with a QR code linking to your verified internship report.
                </p>
              </div>
            </div>

            {/* Uniford Recognized Badge */}
            <div className="flex items-start">
              <FaMedal className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h2 className="text-base font-semibold text-blue-800">Uniford Recognized Badge</h2>
                <p className="text-gray-600 text-sm">
                  Show off your accomplishments with this special badge that highlights your success.
                </p>
              </div>
            </div>

            {/* Special Identity Key */}
            <div className="flex items-start">
              <FaKey className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h2 className="text-base font-semibold text-blue-800">Special Identity Key</h2>
                <p className="text-gray-600 text-sm">
                  Your certificate includes a Special Identity Key for additional authentication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative bg-gradient-to-b from-blue-100 to-blue-300">
          <img
            src="/path-to-your-image/certificate.png" 
            alt="UNSR Certificate"
            className="object-cover h-full w-full rounded-r-xl"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-blue-600 to-transparent opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
