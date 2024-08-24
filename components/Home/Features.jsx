'use client';
import React, { useRef } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Feature from './Feature';
import Slider from "react-slick";
import { data, colorPalette } from '../../data/Home/features'


let values = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
function Features() {
    let sliderRef = useRef();
    const next = () => {
        sliderRef.current.slickNext();
    };
    const prev = () => {
        sliderRef.current.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    }
    return (
        <>
            <div className="flex items-center justify-center w-full mx-auto">
                <MdChevronLeft onClick={prev} size={40} className='opacity-50 hover:opacity-100 cursor-pointer' />
                <div className='slider-container w-full'>
                    <Slider {...settings} ref={sliderRef}>
                        {
                            data.map((item, idx) => {
                                let col = Math.floor(Math.random() * colorPalette.length)
                                return <Feature content={item.content} title={item.title} col={colorPalette[col]} key={idx} />
                            })
                        }
                    </Slider>
                </div>
                <MdChevronRight onClick={next} size={40} className='opacity-50 hover:opacity-100 cursor-pointer' />
            </div>
        </>
    )
}

export default Features