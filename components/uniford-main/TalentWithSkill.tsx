import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TalentWithSkill = () => {
  return (
    <section className="w-full pt-10 flex items-center justify-center">
      <div className="border-t border-gray-600 rounded-full md:p-10 p-5 h-[60rem] w-[60rem] flex items-center justify-center relative mt-20">
        <OuterAvatars />
        <div className="flex flex-col items-center justify-center border-t border-gray-600 rounded-full w-4/5 h-4/5 p-16 relative">
          <InnerAvatars />
          <FaQuoteLeft className="text-black my-5" />
          <h3 className="text-black text-xl font-semibold">
            You will come closer and closer to perfection, but you will never be
            perfect. Perfection is not the way of existence. Growth is the way.
          </h3>
          <FaQuoteLeft className="text-black my-5" />
        </div>
      </div>
    </section>
  );
};

export default TalentWithSkill;

const InnerAvatars: React.FC = () => (
  <div>
    <Avatar src="/rising-unicorns/Ellipse7.svg" alt="..." className="absolute left-16 top-20" />
    <Avatar src="/rising-unicorns/Ellipse6.svg" alt="..." className="absolute -left-5" />
    <Avatar src="/rising-unicorns/Ellipse3.svg" alt="..." className="absolute right-16 top-20" />
    <Avatar src="/rising-unicorns/Ellipse2.svg" alt="..." className="absolute -right-5" />
    <Avatar src="/uniford-main/Ellipse.svg" alt="..." className="absolute -top-5" />
  </div>
);

const OuterAvatars: React.FC = () => (
  <div>
    <Avatar src="/rising-unicorns/Ellipse3.svg" alt="..." className="absolute top-0 md:left-72" />
    <Avatar src="/rising-unicorns/Ellipse6.svg" alt="..." className="absolute top-0 md:right-72 right-28" />
    <Avatar src="/rising-unicorns/Ellipse4.svg" alt="..." className="absolute left-0" />
    <Avatar src="/rising-unicorns/Ellipse2.svg" alt="..." className="absolute left-20 top-40" />
    <Avatar src="/rising-unicorns/Ellipse2.svg" alt="..." className="absolute right-20 top-40" />
    <Avatar src="/rising-unicorns/Ellipse5.svg" alt="..." className="absolute right-0" />
  </div>
);

interface AvatarProps {
  src: string;
  alt: string;
  className?: string; // className should be optional
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`h-10 w-10 rounded-full ${className}`}
  />
);
