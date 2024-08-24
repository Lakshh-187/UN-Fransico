"use client";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Post {
  id: number;
  src: string;
  title: string;
  description: string;
}

const posts: Post[] = [
  {
    id: 1,
    src: "/rising-unicorns/HeroCarouselSection/empchange.jpg",
    title: "Empowering Change",
    description:
      "Follow the journey of a young entrepreneur who's revolutionizing the logistics sector with innovative solutions, inspiring a new generation of business leaders.",
  },
  {
    id: 2,
    src: "/rising-unicorns/HeroCarouselSection/voiceForTomorrow.jpg",
    title: "Voice for Tomorrow",
    description:
      "Dive into the story of a passionate young activist advocating for environmental preservation and social equality, sparking meaningful change in communities worldwide.",
  },
  {
    id: 3,
    src: "/rising-unicorns/HeroCarouselSection/innovating.jpg",
    title: "Innovating the Future",
    description:
      "Explore the groundbreaking work of a teenage innovator whose ingenious inventions are tackling pressing global challenges, shaping a brighter future for all.",
  },
  {
    id: 4,
    src: "/rising-unicorns/HeroCarouselSection/inspiringHearts.jpg",
    title: "Inspiring Hearts",
    description:
      "Discover the inspiring tale of a young woman who's using her voice and actions to spread positivity, empower others, and redefine societal norms.",
  },
  {
    id: 5,
    src: "/rising-unicorns/HeroCarouselSection/shapingMinds.jpg",
    title: "Shaping Minds",
    description:
      "Uncover the academic brilliance and intellectual prowess of a young scholar whose dedication to learning and research is pushing the boundaries of knowledge and innovation.",
  },
  {
    id: 6,
    src: "/rising-unicorns/HeroCarouselSection/unveilinghiddenTalent.jpg",
    title: "Unveiling Hidden Talents",
    description:
      "Join the captivating story of a hidden gem in the music industry, whose extraordinary talent and passion for music are captivating audiences worldwide, marking the dawn of a new era in musical excellence.",
  },
];


const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl p-2 rounded-full bg-white"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl p-2 rounded-full bg-white"
  >
    <FaArrowLeft />
  </button>
);

const NewPosts: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const currentPost = posts[currentPostIndex];

  const handleShowAll = () => setShowAll(true);
  const handleNextPost = () =>
    setCurrentPostIndex((prev) => (prev + 1) % posts.length);
  const handlePrevPost = () =>
    setCurrentPostIndex((prev) => (prev - 1 + posts.length) % posts.length);
  const handleToggleDescription = () => setShowFullDescription((prev) => !prev);

  const nextPosts = posts.slice(currentPostIndex + 1, currentPostIndex + 4);

  return (
    <section className="w-full relative py-10 bg-[#B9D1FD8A] xl:px-10 px-2">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Latest Posts</h2>
          <button
            onClick={handleShowAll}
            className="bg-gray-300 px-3 py-2 rounded-md font-semibold"
          >
            Show All
          </button>
        </div>

        {!showAll ? (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-2/3 relative shadow-md">
              <div
                className="w-full h-[32rem] bg-cover bg-center bg-no-repeat rounded-lg relative"
                style={{ backgroundImage: `url(${currentPost.src})` }}
              >
                <div className="bg-white p-4 w-full rounded-lg shadow-md absolute bottom-0">
                  <h3 className="text-lg font-bold">{currentPost.title}</h3>
                  <p className="line-clamp-2">
                    {showFullDescription
                      ? currentPost.description
                      : `${currentPost.description.slice(0, 100)}...`}
                  </p>
                  <button
                    onClick={handleToggleDescription}
                    className="text-blue-500 mt-2"
                  >
                    {showFullDescription ? "Read Less" : "Read More"}
                  </button>
                </div>

                <PrevArrow onClick={handlePrevPost} />
                <NextArrow onClick={handleNextPost} />
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4">
              {nextPosts.map((post) => (
                <div
                  key={post.id}
                  className="cursor-pointer bg-slate-100 h-40 rounded-lg flex items-center gap-3 w-full"
                  onClick={() => {
                    setCurrentPostIndex(posts.indexOf(post));
                    setShowAll(false);
                  }}
                >
                  <div className="flex items-center justify-center h-full w-3/5">
                    <img
                      src={post.src}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-bold line-clamp-1">{post.title}</p>
                    <p className="text-sm line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-md bg-red-300" />
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-800 font-semibold">
                          John Kantar
                        </p>
                        <p className="text-gray-500">July 14, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="cursor-pointer bg-slate-100 h-40 rounded-lg flex items-center gap-3 w-full"
                  onClick={() => {
                    setCurrentPostIndex(posts.indexOf(post));
                    setShowAll(false);
                  }}
                >
                  <div className="flex items-center justify-center h-full w-3/5">
                    <img
                      src={post.src}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-bold line-clamp-1">{post.title}</p>
                    <p className="text-sm line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-md bg-red-300" />
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-800 font-semibold">
                          John Kantar
                        </p>
                        <p className="text-gray-500">July 14, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPost}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextPost}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewPosts;
