import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    imgSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BomBYuzh5dxDDXcyH0TBsA.png",
    name: "200+ Premium Courses",
    description: "Access over 200 high-quality courses across various fields, designed to enhance your skills and knowledge."
  },
  {
    imgSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*gpPPkmWubBiPbrkpibIVag.png",
    name: "Uni AI",
    description: "Leverage cutting-edge AI tools and resources developed by Uni AI to boost your learning and career growth."
  },
  {
    imgSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dqK0EZtV7Czs0DRlNphXZg.png",
    name: "5,000+ Digital Premiums",
    description: "Benefit from an extensive collection of digital resources, including software, tools, and other premium content."
  },
  {
    imgSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TrIqM-Cq2HVJVyQe1tcc6Q.png",
    name: "Premium Notes for All Domains",
    description: "Receive exclusive, high-quality notes covering a wide range of domains to support your educational journey."
  },
  {
    imgSrc: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4sBQLmbigikFgtGoCH1ATQ.png",
    name: "Career Track for Job-Ready Roadmap",
    description: "Follow a structured career track designed to prepare you for the job market with a clear and actionable roadmap."
  }
];

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '5px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
    ]
  };

  return (
    <div className="w-4/5 sm:w-3/4 mx-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white text-black rounded-xl border border-gray-300 shadow-lg p-4 w-64 mx-2 transform hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300 ease-in-out">
                <img 
                  src={item.imgSrc} 
                  alt={item.name} 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                {/* <p className="text-sm">{item.description}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MySlider;
