import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

function ApplicationProcess() {
  const {} = useForm({
    defaultValues: {
      name: "",
    },
  });
  const applicationProcess = [
    {
      title: "",
      content: "",
      img: "https://i.ibb.co/d53svCy/b4.png",
      height: "h-96",
      bottom: "bottom-0",
    },
    {
      title: "",
      content: "",
      img: "https://i.ibb.co/JpMQbZp/b1.png",
      height: "h-96",
      bottom: "bottom-10",
    },
    {
      title: "",
      content: "",
      img: "https://i.ibb.co/7NzVYLX/b2.png",
      height: "h-96",
      bottom: "bottom-20",
    },
    {
      title: "",
      content: "",
      img: "https://i.ibb.co/1ffLf1C/Whats-App-Image-2024-04-24-at-12-13-58-ed06ba43.jpg",
      height: "h-96",
      bottom: "bottom-32",
    },
  ];
  return (
    <div className="w-11/12  mx-auto p-4 py-8 rounded-3xl lg:my-24">
      <h1 className="text-4xl font-semibold">Application Process</h1>
      <p className="text-gray-500 text-lg lg:w-3/5 w-full mt-8">
        Ready to apply to Get Hired? Heres a step-by-step guide on how to do
        it. Well walk you through the process so you can easily submit
        your application .
      </p>
      <div className="lg:w-11/12 w-full flex items-center my-8 justify-evenly mx-auto gap-5">
        <div className="flex lg:flex-row flex-col  gap-5 space-y-12 my-16 lg:items-center">
          {applicationProcess.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`h-[75%] flex place-items-end relative ${item.bottom}`}
              >
                <div className={` w-full ${item.height} rounded-2xl relative`}>
                  {idx === 3 && (
                    <Image
                      src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                      alt="..."
                      height={70}
                      width={70}
                      className="absolute -top-16 right-28 rounded-full lg:inline-block hidden"
                    />
                  )}
                  <img src={item.img} className={`${item.height}`} />
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                  <div className="flex items-center absolute mx-auto w-10 h-10 left-0 right-0 shadow-md -bottom-5 bg-white rounded-full">
                    <p className="w-max mx-auto">{idx + 1}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ApplicationProcess;
