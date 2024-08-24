import React from "react";
import Slider from "react-slick";

const CommunityGrantsProgramCarouse = () => {

    const images = ["cloud-native.svg","linux.svg","apache.svg","open-stack.svg","mozilla.svg","eclipse.svg", "wikimedia.svg", "creative-commons.svg"];
    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div>
      <img src="/grant-program/cloud-native.svg" alt="Cloud Native" className="h-10 w-10"/>
      </div>
      <div>
      <img src="/grant-program/cloud-native.svg" alt="Cloud Native" className="h-10 w-10"/>
      </div>
      <div>
      <img src="/grant-program/cloud-native.svg" alt="Cloud Native" className="h-10 w-10"/>
      </div>
      <div>
      <img src="/grant-program/cloud-native.svg" alt="Cloud Native" className="h-10 w-10"/>
      </div>
      <div>
      <img src="/grant-program/cloud-native.svg" alt="Cloud Native" className="h-10 w-10"/>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div>
      <div>
        <h3>10</h3>
      </div>
      <div>
        <h3>11</h3>
      </div>
      <div>
        <h3>12</h3>
      </div>
      <div>
        <h3>13</h3>
      </div>
      <div>
        <h3>14</h3>
      </div>
      <div>
        <h3>15</h3>
      </div>
      <div>
        <h3>16</h3>
      </div>
    </Slider>
  </div>
  )
}

export default CommunityGrantsProgramCarouse