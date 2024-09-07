import Head from 'next/head';
import { FaVideo, FaIdCard, FaGift } from 'react-icons/fa';

export default function SocialWorkUpload() {
  return (
    <>
      <Head>
        <title>Show Your Impact</title>
      </Head>
      <div className="w-[95%] h-full min-h-[400px] rounded-xl my-24 p-6 bg-white shadow-lg mx-auto flex flex-col md:flex-row-reverse gap-6 justify-between">
        <img
          alt="Social Work"
          src="/home/resourceLib.jpg"
          className="w-full md:w-2/5 rounded-lg object-cover"
        />
        <div className="flex flex-col w-full md:w-3/5 p-6 justify-center">
          <h1 className="text-4xl font-extrabold text-gray-700 mb-4 flex items-center">
            <FaVideo className="text-[#28487c] mr-2" /> Show Your Impact
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-2 flex items-center">
            <FaVideo className="text-[#28487c] mr-2" /> Upload a video showcasing your social work activities, such as planting trees or donating essentials.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 flex items-center">
            <FaIdCard className="text-[#28487c] mr-2" /> Ensure your UN Francisco Scholar ID Card is visible in the video.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 flex items-center">
            <FaGift className="text-[#28487c] mr-2" /> Upon verification, you’ll receive any one product of your choice for free!
          </p>
        </div>
      </div>
    </>
  );
}
