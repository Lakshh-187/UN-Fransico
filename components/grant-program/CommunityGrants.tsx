import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Button
const PrevArrow: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray"  ,backdropFilter: "blur(5px)"}}
      onClick={onClick}
    />
  );
};

// Custom Next Button
const NextArrow: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray"  ,backdropFilter: "blur(5px)"}}
      onClick={onClick}
    />
  );
};

const CommunityGrants: React.FC = () => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,  // Adjust this to fit the number of slides you want to show at once
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const images = [
    "/grant-program/alfred.svg",
    "/grant-program/Arrow.svg",
    "/grant-program/audeus.svg",
    "/grant-program/bill.svg",
    "/grant-program/Book.svg",
    "/grant-program/chalmers.svg",
    "/grant-program/cloud-native.svg",
    "/grant-program/creative-commons.svg",
    "/grant-program/darpa.svg",
    "/grant-program/eclipse.svg",
    "/grant-program/fordfoundation.svg",
    "/grant-program/googleAi.svg",
    "/grant-program/hewlett.svg",
    "/grant-program/knightfoundation.svg",
    "/grant-program/linux.svg",
    "/grant-program/macarthur.svg",
    "/grant-program/mitmedia.svg",
    "/grant-program/moore.svg",
    "/grant-program/mozilla.svg",
    "/grant-program/nse.svg",
    "/grant-program/open-stack.svg",
    "/grant-program/openideo.svg",
    "/grant-program/skoll.svg",
    "/grant-program/wikimedia.svg",
  ];

  return (
    <section className="xl:px-32 px-10 flex flex-col my-20">
      <h3 className="text-3xl font-semibold mb-8">Community Grant Programs</h3>
      <p>
        We invite you to explore the numerous organizations under our umbrella
        that offer grant opportunities.
      </p>
      <div className="slider-container shadow-md rounded-lg px-10">
        <Slider {...settings}>
          {Array.from({ length: Math.ceil(images.length / 2) }, (_, index) => (
            <div key={index} className="mx-10 my-10 flex flex-col items-center">
              <img src={images[index * 2]} alt={`Grant logo ${index * 2 + 1}`} className="my-4" />
              {images[index * 2 + 1] && (
                <img src={images[index * 2 + 1]} alt={`Grant logo ${index * 2 + 2}`} />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CommunityGrants;
