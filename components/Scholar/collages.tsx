"use client";
import { memo, useCallback, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Resources from "./resources";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  DocumentData,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { hiringActions } from "@/redux/hiring";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

function HiringCards() {
  const [value, loading, error] = useCollection(collection(db, "getHired"));
  const [hired, setHired] = useState<DocumentData[]>([]);
  const router = useRouter();
  const [displayCount, setDisplayCount] = useState(6);

  const cardsData = useCallback(() => {
    if (value) {
      let hiring: DocumentData[] = [];
      value?.docs.map((item, idx) => {
        let data = item.data();
        data.id = item.id;
        hiring.push(data);
      });
      setHired(hiring);
    }
  }, [value]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    cardsData();
  }, [value]);

  const handleViewMore = () => {
    setShowMore(true);
    setDisplayCount((prevCount) => prevCount + 6);
  };

  const handleSeeLess = () => {
    setShowMore(false);
    setDisplayCount(6);
  };

  return (
    <div className=" flex flex-col gap-3 bg-white   p-8 px-4 mt-8 sm:mt-10  ">
      <div className="lg:w-4/5 w-full mx-auto space-y-2 mt-8 flex flex-col gap-16 mb-8">
        <Resources />
        <div className="w-full flex flex-col gap-16">
          <div className="w-4/5  sm:mx-auto rounded-full shadow-md flex justify-between px-3 items-center">
            <input
              type="text"
              placeholder="Search your college"
              className="py-2.5 rounded-full px-3 w-[80%]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </div>
          {/* <Filter /> */}
          <div className="w-full flex items-center justify-center">
            <div className="grid md:grid-cols-5 grid-cols-4 gap-2 w-4/5">
              <FilterButton filter="Internship" />
              <FilterButton filter="Hiring Challenges" />
              <FilterButton filter="Certifications" />
              <FilterButton filter="Self Branding" />
              <FilterButton filter="Jobs" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 sm:w-[90%] p-3  mx-auto gap-3.5 overflow-y-scroll no-scrollbar h-4/5">
        {hired.slice(0, displayCount).map((item, idx) => (
          <Card
            key={idx}
            position={item.position}
            companyName={item.company}
            posted_date={item.posted_date}
            deadline={item.deadline}
            img={item.img}
            entireData={item}
          />
        ))}
      </div>
      {!showMore ? (
        <button
          className="text-sm text-blue-500 font-medium hover:underline focus:outline-none"
          onClick={handleViewMore}
        >
          View More
        </button>
      ) : (
        <button
          className="text-sm text-blue-500 font-medium hover:underline focus:outline-none"
          onClick={handleSeeLess}
        >
          See Less
        </button>
      )}
    </div>
  );
}

const FilterButton = ({ filter }: any) => (
  <button className="border border-gray-100 bg-white px-3 py-2 rounded-full md:text-base text-xs text-nowrap">
    {filter}
  </button>
);

const Card = ({
  position,
  companyName,
  posted_date,
  deadline,
  img,
  entireData,
}: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    userData: { uid },
  } = useAppSelector((state) => state.user);
  const updateBookMarks = useCallback(
    async (id: string) => {
      if (uid) {
        await updateDoc(doc(db, "getHired", id), {
          bookmarks: arrayUnion(uid),
        })
          .then(() => {
            console.log("Updated");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        router.push("/login");
      }
    },
    [uid]
  );
  const updateLikes = useCallback(
    async (id: string) => {
      if (uid) {
        await updateDoc(doc(db, "getHired", id), {
          likes: arrayUnion(uid),
        })
          .then(() => {
            console.log("Updated");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        router.push("/login");
      }
    },
    [uid]
  );
  const removeLikes = useCallback(
    async (id: string) => {
      if (uid) {
        await updateDoc(doc(db, "getHired", id), {
          likes: arrayRemove(uid),
        })
          .then(() => {
            console.log("Updated");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        router.push("/login");
      }
    },
    [uid]
  );
  const removeBookMarks = useCallback(
    async (id: string) => {
      if (uid) {
        await updateDoc(doc(db, "getHired", id), {
          bookmarks: arrayRemove(uid),
        })
          .then(() => {
            console.log("Updated");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        router.push("/login");
      }
    },
    [uid]
  );
  return (
    <div className="shadow-md flex md:flex-row md:items-center flex-col  lg:w-[574px] w-full p-2 rounded-xl ">
      <div className="flex items-center justify-center w-full mb-6 lg:inline-block lg:w-fit lg:mb-6">
        <Image
          alt="img"
          src={img}
          height={173}
          width={150}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col mx-3 gap-3 w-full h-full p-4 lg:p-0">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xl">{position}</h3>
            {entireData.bookmarks && entireData.bookmarks.includes(uid) ? (
              <button
                onClick={() => {
                  removeBookMarks(entireData.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark-minus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v8" />
                  <path d="M16 19h6" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => {
                  updateBookMarks(entireData.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-bookmark-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v5" />
                  <path d="M16 19h6" />
                  <path d="M19 16v6" />
                </svg>
              </button>
            )}
          </div>
          <p>{companyName}</p>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <div
            onClick={() => {
              if (entireData.likes.includes(uid)) {
                removeLikes(entireData.id);
              } else {
                updateLikes(entireData.id);
              }
            }}
            className="flex hover:cursor-pointer items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
            </svg>
            <p>{entireData.likes ? entireData?.likes.length : 0}</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <p>400</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray-500 text-sm">Posted On</p>
          <p>{posted_date}</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray-500 text-sm">Deadline</p>
          <p>{deadline}</p>
        </div>
        <div className="w-full flex justify-end ">
          <button
            onClick={() => {
              dispatch(hiringActions.setPageData(entireData));
              router.push(`/getHired/${entireData.id}`);
            }}
            className="border border-gray-200 rounded-full p-3"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(HiringCards);
