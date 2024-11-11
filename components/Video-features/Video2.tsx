// components/LeadershipSection.js
import { AiOutlinePlayCircle } from 'react-icons/ai';

const VideoSection2 = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center bg-blue-200 p-8 md:py-12 h-[400px]">
      {/* Left Text Section */}
      <div className="md:w-1/2 p-6 bg-blue-100 text-lime-900 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Built by <span className="italic font-serif">pedigreed & experienced leaders</span>
        </h2>
        <p className="text-gray-700">
          Alumni from HBS & Kellogg unite to bring a fresh take to business foundations, building a business school focused on the future.
        </p>
      </div>

      {/* Right Video Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 relative">
        <img
          src="/path-to-your-image.jpg" // replace with actual path to image
          alt="What is MESA?"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default VideoSection2;
