import React, { useState, ChangeEvent } from 'react';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;
    if (uploadedFile) {
      setFile(uploadedFile);

      // Simulate file upload progress
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto p-10 shadow-lg bg-white rounded-xl">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-2/3 pr-6 m-4 flex flex-col justify-center space-y-6">
        <div>
          <h3 className="text-gray-800 text-lg font-bold">🕒 Follow-Up Process</h3>
          <p className="text-gray-600 border-l-4 border-blue-500 pl-3">Once you upload your Social Internship Certificate, you will receive a follow-up within 7 working days.</p>
        </div>
        <div>
          <h3 className="text-gray-800 text-lg font-bold">✅ Membership Activation</h3>
          <p className="text-gray-600 border-l-4 border-green-500 pl-3">Your membership in the UN Francisco Scholar Program will be activated upon verification of your certificate.</p>
        </div>
        <div>
          <h3 className="text-gray-800 text-lg font-bold">💸 Membership Fee Refund</h3>
          <p className="text-gray-600 border-l-4 border-rose-500 pl-3">If you have already enrolled by paying a membership fee, your fee will be refunded after your certificate is verified and your membership is activated.</p>
        </div>
      </div>

      {/* Right Side - File Upload */}
      <div className="w-full md:w-1/2 pl-6 m-4 flex flex-col justify-center items-center">
        <div className="border-2 border-dotted border-gray-500 rounded-lg p-8 text-center bg-gray-50">
          {!file ? (
            <>
              <p className="text-gray-600 text-lg">Drag and Drop your file here or</p>
              <label className="text-blue-600 cursor-pointer underline hover:text-blue-800 transition-colors">
                Choose file
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-gray-500 text-sm mt-2">Supported formats: XLS, XLSX</p>
              <p className="text-gray-500 text-sm">Maximum size: 25MB</p>
            </>
          ) : (
            <div className="text-left">
              <p className="text-gray-800 text-lg font-medium">{file.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {progress < 100 ? (
                <p className="text-gray-600 mt-2 animate-pulse">{`Uploading... ${progress}%`}</p>
              ) : (
                <p className="text-green-600 mt-2">Upload complete!</p>
              )}
            </div>
          )}
        </div>
        {file && (
          <div className="mt-6 flex justify-between">
            <button
              className="text-red-600 underline hover:text-red-800 transition-colors"
              onClick={() => {
                setFile(null);
                setProgress(0);
              }}
            >
              Cancel
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
