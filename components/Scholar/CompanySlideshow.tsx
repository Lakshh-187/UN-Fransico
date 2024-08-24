import React from "react";
import Slider from "react-slick";
 

function CompanySlideshow() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const companies = [
    "https://i.ibb.co/LCm8gPF/JLU-logo-104x104.jpg",
    "https://i.ibb.co/qDQq7Lk/Lovely-Professional-University-Seal.jpg",
    "https://i.ibb.co/LdHXRcv/400x400.jpg",
    "https://i.ibb.co/vvX2xSk/dbgi.png",
    "https://i.ibb.co/Jc8TVpd/PCU-Logo-01.png",
    "https://i.ibb.co/XxXjCzk/BIMS-Logo.png",
    "https://i.ibb.co/ZBj2Nsq/sadvaknsdvs.jpg",
    "https://i.ibb.co/dpBXtT9/download-13.png",
    "https://i.ibb.co/1GwBswr/SPIT-Mumbai-Logo.jpg",
    "https://i.ibb.co/xD8zs9F/1442990405.png",
    "https://i.ibb.co/XSFP569/Oxbridge-Group-of-Institutions-Bangalore-Logo.png",
    "https://i.ibb.co/nQ5LqGp/1517023361911-Ry-ZYw7-X.jpg",
    "https://i.ibb.co/sVJRJvC/DIT-University-Dehradun-Logo-104x104.jpg",
    "https://i.ibb.co/nz0JqF8/Sushant-logo.png",
  ];

  return (
    <div className="w-4/5">
      <div className="slider-container border-3 border-black">
        <Slider {...settings}>
          {companies.map((item, idx) => {
            return (
              <div className="text-black flex justify-center" key={idx}>
                <img src={item} alt=" " className="h-20 rounded-xl mx-auto" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CompanySlideshow;
