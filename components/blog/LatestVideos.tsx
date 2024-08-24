"use client";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Video {
  id: number;
  src: string;
  title: string;
  description: string;
}

const videos: Video[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/YHbGOmzmVes?si=EvtSTX1jROlGsEdg",
    title: "Why I Stopped Using Multiple Monitor",
    description: "A Single Monitor Manifesto — Many Developers Believe Multiple Monitors Improve Productivity. Studies Have Proven It, Right? Well, Keep In Mind, Many Of…"
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/ekZZZPRxWtI?si=C1OOCS-7sgwrFigy",
    title: "This House Believes that Schools Should Teach their Students to be Global Citizens Instead of Instilling Nationalism",
    description: "The United Kingdom left the European Union, the U.S. declared an \"America First\" foreign policy, and many European countries are becoming increasingly hostile to refugees in order to protect their countries. The battle between globalists and nationalists has become the central axis of conflict within and across many nations around the world. The idea of global citizenship is that one's identity transcends geography or political borders and that responsibilities and rights can be derived from membership in a broader class: \"humanity.\" Nationalism vs. cosmopolitanism... what should schools teach their students in this era of globalization? After the fierce 13 rounds of the tournament, Minjok Leadership Academy was crowned the champion of \"Intelligence – High School Debate.\" This week, they will compete against the representative champions from Singapore, China and Japan. Who will be crowned the winner of the 2017 Asian Cup?"
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/mGd1EhzHr2Q?si=7hQzhlPCl7aoMGzy",
    title: "Learn English with Muniba Mazari",
    description: "Learn English with Muniba Mazari in an inspirational and motivational speaker. With remarkable quotes: \"We all are Perfectly Imperfect\" and \"Don't Die Before Your Death\" she touches our heart. Muniba Mazari is a Pakistani artist, model, activist, motivational speaker, singer, and television host. She uses a wheelchair due to injuries sustained in a car accident at the age of 21 which makes her Pakistan's first wheelchair-using model. She is also the National Ambassador for UN Women Pakistan - Watch with English Subtitles."
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/Fkd9TWUtFm0?si=fSMUt0ECmjNYga8b",
    title: "Most 12-year-olds love playing videogames -- Thomas Suarez taught himself how to create them",
    description: "Most 12-year-olds love playing videogames -- Thomas Suarez taught himself how to create them. After developing iPhone apps like \"Bustin Jeiber,\" a whack-a-mole game, he is now using his skills to help other kids become developers. (Filmed at TEDxManhattanBeach.) The TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. You're welcome to link to or embed these videos, forward them to others and share these ideas with people you know."
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/JGdS8ts63Ck?si=hAxHyN3kdp8J3PbV",
    title: "New Youngest Entrepreneurs in India",
    description: "New Youngest Entrepreneurs in India it is a Documented Style Story on Young Entrepreneurs Forum, this video also motivates you, and inspires you. This video is all about new young entrepreneurs in India 2022."
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/Lq0iua0r0KQ?si=EoHxH2PNWKMNkT_w",
    title: "Next Billionaires series",
    description: "In the latest instalment of our Next Billionaires series, the BBC's Regan Morris speaks to some of the state's youngest entrepreneurs. Meet the youngsters starting and running their own businesses."
  },
  {
    id: 7,
    src: "https://www.youtube.com/embed/C9gzrar-mO8?si=1CkjwSRZxsiwizlv",
    title: "Youth Owned Brands Awards",
    description: "The Founder of the top 16 Youth Owned Brands Awards, Pat Mahlangu, was Live on SABC News Channel 404. Joining Liabo Setho on SME on point, he spoke about the importance of young people taking things into their own hands to try and help the economic situation in our country. Take a look at the rest of what he had to say about the upcoming roadshow and the award show coming up in June."
  }
];

const LatestVideos: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(videos[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const videosPerPage = 6;
  const pages = Math.ceil(videos.length / videosPerPage);

  const handleShowAll = () => setShowAll(true);
  const handleVideoSelect = (video: Video) => {
    setCurrentVideo(video);
    setShowAll(false);
  };
  const handleNextPage = () => setCurrentPage((prev) => (prev + 1) % pages);
  const handlePrevPage = () =>
    setCurrentPage((prev) => (prev - 1 + pages) % pages);

  const getNextVideos = (video: Video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    return videos.slice(index + 1, index + 6);
  };

  const nextVideos = currentVideo ? getNextVideos(currentVideo) : [];

  const handleToggleDescription = (id: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full relative bg-gradient-to-r from-[#A7BBDE8A] via-[#196AF98A] to-[#B9D1FD8A] xl:px-10 px-2">
      <img
        src="/blog/Leftband.svg"
        alt="..."
        className="w-2/5 h-full absolute left-0 -z-10"
      />
      <img
        src="/blog/Rightband1.svg"
        alt="..."
        className="w-2/5 h-52 absolute right-0 top-10 -z-10"
      />
      <img
        src="/blog/Rightband2.svg"
        alt="..."
        className="w-2/5 h-52 absolute right-0 top-20 -z-10"
      />
      <img
        src="/blog/Rightband3.svg"
        alt="..."
        className="w-2/5 h-52 absolute right-0 top-32 -z-10"
      />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Latest Videos</h2>
          <button
            onClick={handleShowAll}
            className="bg-gray-300 px-3 py-2 rounded-md font-semibold"
          >
            Show All
          </button>
        </div>

        {!showAll ? (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-2/3">
              {currentVideo && (
                <div className="aspect-w-16 aspect-h-9 mb-4 shadow-md">
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentVideo.src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full bg-gray-300 rounded-lg"
                  ></iframe>
                </div>
              )}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{currentVideo?.title}</h3>
                <p>
                  {expandedDescriptions[currentVideo?.id || 0]
                    ? currentVideo?.description
                    : `${currentVideo?.description.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => handleToggleDescription(currentVideo?.id || 0)}
                  className="text-blue-500 mt-2"
                >
                  {expandedDescriptions[currentVideo?.id || 0]
                    ? "Read Less"
                    : "Read More"}
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4">
              {nextVideos.map((video) => (
                <div
                  key={video.id}
                  className="cursor-pointer bg-slate-100 h-24 rounded-lg flex items-center gap-3 w-full pe-3"
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="flex items-center justify-center w-2/5 h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.src}
                      title={`YouTube video player ${video.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full bg-gray-300 rounded-lg"
                    ></iframe>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-bold line-clamp-1">{video.title}</p>
                    <p className="text-sm line-clamp-2">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos
                .slice(
                  currentPage * videosPerPage,
                  (currentPage + 1) * videosPerPage
                )
                .map((video) => (
                  <div
                    key={video.id}
                    className="cursor-pointer bg-slate-100 h-24 rounded-lg flex items-center gap-3 w-full"
                    onClick={() => handleVideoSelect(video)}
                  >
                    <div className="flex items-center justify-center w-2/5 h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={video.src}
                        title={`YouTube video player ${video.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full bg-gray-300 rounded-lg"
                      ></iframe>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="font-bold line-clamp-1">{video.title}</p>
                      <p className="text-sm line-clamp-2 w-3/5">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPage}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextPage}
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

export default LatestVideos;
