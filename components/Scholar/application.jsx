import React from "react";

function ScholarshipApplication() {
  const inputPlace = [
    {
      content: "Company/HR Name",
    },
    {
      content: "Email",
    },
    {
      content: "Mobile Number",
    },
    {
      content: "Location",
    },
    {
      content: "Hiring Domain",
    },
    {
      content: "Company Registration ID ",
    },

    {
      content: "Work Type",
    },
  ];
  return (
    <div className="pb-6 sm:w-[70%] lg:w-1/2 border border-gray-200 p-3 rounded-2xl">
      <h1 className="text-2xl text-[#38A001] font-semibold ">
        For Joining Alliance
      </h1>
      <div className="flex items-center justify-center">
        <form
          action=""
          className="flex lg:justify-start gap-4  gap-y-5 mt-4 flex-wrap p-5f"
        >
          {inputPlace.map((item, idx) => {
            if (
              item.content === "Hiring Domain" ||
              item.content === "Work Type"
            ) {
              return (
                <select
                  key={idx}
                  className="w-[47%] py-4 bg-white border border-gray-500 text-xs rounded-md outline-none placeholder:text-[10px] placeholder:text-gray-600 pl-5 placeholder:fontsemibold"
                >
                  <option value="">Select {item.content}</option>
                  {/* Add more options as needed */}
                </select>
              );
            } else {
              return (
                <input
                  placeholder={item.content}
                  key={idx}
                  type="text"
                  className="w-[47%] py-4 bg-white border border-gray-500 text-xs rounded-md outline-none placeholder:text-[10px] placeholder:text-gray-600 pl-5 placeholder:fontsemibold"
                />
              );
            }
          })}

          <div className="w-full flex justify-center gap-4">
            <button className="w-[47%] py-1 bg-[#E7F9D1] font-semibold text-center rounded-md border-black border px-3">
              Reset
            </button>
            <button className="w-[47%] py-4 bg-[#38A001] font-semibold text-white text-center rounded-md   px-3">
              Next
            </button>
          </div>

          <p className="font-bold text-xs mb-20 ">
            By submitting this form, I agree to receive notifications from the
            University in the form of SMS/E-mail/Call.
          </p>
        </form>
      </div>
    </div>
  );
}

export default ScholarshipApplication;
