import React from 'react';
import ProfileTopic from './ProfileTopic';
import { CiShare2 } from 'react-icons/ci';
import { MdCloudUpload } from 'react-icons/md';
import { useSelector } from 'react-redux';

const profileData = [
  {
    title: 'About',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
  },
  {
    title: 'Education',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
  },
  {
    title: 'Skills',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
  },
  {
    title: 'Certificate',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in som form, by injected humour, or randomised words which don't look even slightly"
  },
  {
    title: 'Project',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
  },
  {
    title: 'Experience',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
  },
  {
    title: 'About',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly"
  }
];

const AccordionNavigation = [
  'About',
  'Education',
  'Skills',
  'Certificate',
  'Project',
  'Experience'
];
function MyProfile() {
  const {
    userData: { displayName, email, photoUrl, uid, about, clgName, scholarships }
  } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex items-center justify-between bg-white p-8  rounded-[30px]">
        <div className="flex rounded-3xl gap-4 items-center">
          <div className="bg-[#E5E5E5] lg:w-16 lg:h-16 h-10 w-10 rounded-full"></div>
          <div className="space-y-2">
            <h1 className="lg:text-3xl text-xl font-semibold">{displayName}</h1>
            <p className="lg:text-base text-xs font-medium ">
              {clgName?.length > 0 ? clgName : 'N/A'} | {scholarships} Scholarship
            </p>
            <button className="text-primaryGreen rounded-full border px-2 py-1 border-primaryGreen lg:text-base text-xs">
              Edit Profile
            </button>
          </div>
        </div>
        <div>
          <CiShare2 className="text-3xl" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 w-full">
        <AccordionNav />
        <Accordion />
        <div className="lg:w-1/5 w-full flex lg:px-4 ">
          <button className=" w-full lg:w-fit flex items-center justify-center gap-3 border border-[#00000033] h-fit p-3 rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#E7F9D1] ">
            <MdCloudUpload className="text-3xl" />
            <p className="text-sm">Upload Resume</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;

const Accordion = () => (
  <div className="flex flex-col gap-4 lg:w-3/5 w-full">
    {profileData.map((item, idx) => {
      return <ProfileTopic key={idx} title={item.title} content={item.content} />;
    })}
  </div>
);

const AccordionNav = () => (
  <div className="lg:w-1/5 w-full">
    <ul className="flex lg:flex-col flex-row gap-4 w-full">
      {AccordionNavigation.map((item, idx) => {
        return (
          <li
            key={idx}
            className="cursor-pointer flex items-center gap-4 lg:text-xl md:text-lg text-xs font-medium text-gray-600">
            {item}
          </li>
        );
      })}
    </ul>
  </div>
);
