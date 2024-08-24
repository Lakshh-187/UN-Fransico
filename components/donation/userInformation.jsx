import React from 'react';

function userInformation() {
  return (
    <div className="w-full  flex flex-col">
      <p className="text-xl font-semibold">Your Information</p>

      <div className="flex flex-col w-full items-center gap-3 md:w-[70%]  mt-4">
        <input
          type="text"
          placeholder="Name"
          className="w-[80%] h-10 p-4 rounded-full outline-none border-gray-300 border "
        />

        <input
          type="text"
          placeholder="Organisation Mail ID"
          className="w-[80%] h-10 p-4 rounded-full outline-none border-gray-300 border "
        />
        <p className="text-sm mb-auto w-[75%]">your recipt will be mailed here</p>
      </div>

      <p className="w-full text-sm mt-4 flex justify-center items-center">
        By donating you agree our terms and conditions.
      </p>
    </div>
  );
}

export default userInformation;
