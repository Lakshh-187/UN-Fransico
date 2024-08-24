'use client';
import React, { useState, useRef } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { data, colorPalette } from '../../data/Home/slideshow'
import Slide from './Slide'
import Slider from 'react-slick'

function Slideshow() {
    return (
        <>
            <div className='flex flex-col md:flex-row w-full lg:w-4/5 overflow-hidden mx-auto px-5 lg:px-0'>
                {
                    data.map((item, idx) => {
                        let col = Math.floor(Math.random() * colorPalette.length)
                        return <Slide content={item.content} col={colorPalette[col]} key={idx} />
                    })
                }
            </div>
        </>
    )
}

export default Slideshow


// let sliderRef = useRef();
// const next = () => {
//     sliderRef.current.slickNext();
// };
// const prev = () => {
//     sliderRef.current.slickPrev();
// };
// const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 1000,
//     arrows: false,
//     cssEase: "linear",

// }
// return (
//     <>
//         <div className="flex items-center justify-center w-full mx-auto">
//             <MdChevronLeft onClick={prev} size={40} className='opacity-50 hover:opacity-100 cursor-pointer' />
//             <div className='slider-container w-4/5'>
//                 <Slider {...settings} ref={sliderRef}>
//                     {
//                         data.map((item, idx) => {
//                             let col = Math.floor(Math.random() * colorPalette.length)
//                             return <Slide content={item.content} title={item.title} col={colorPalette[col]} key={idx} />
//                         })
//                     }
//                 </Slider>
//             </div>
//             <MdChevronRight onClick={next} size={40} className='opacity-50 hover:opacity-100 cursor-pointer' />
//         </div>
//     </>
// )