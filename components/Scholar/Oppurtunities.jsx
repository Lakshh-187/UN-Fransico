'use client'
import React from "react";
import Slider from "react-slick";
 
import { researchCategories } from "@/app/data/UnifordUniversity/data";
import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { researchers } from '@/app/data/Home/data'
import Image from "next/image";
import unifordScholar from '@/public/Home/unifordScholar.jpeg'

function Researchers() {
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
        autoplay: false,
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
    const oppurtunityData = [
        {
            img: unifordScholar,
            title: 'Be a Uniwave Scholar',
            content: 'a multitude of benefits that can significantly enhance your academic and professional journey.'
        },
        {
            img: unifordScholar,
            title: 'Be a Uniwave Scholar',
            content: 'a multitude of benefits that can significantly enhance your academic and professional journey.'
        },
        {
            img: unifordScholar,
            title: 'Be a Uniwave Scholar',
            content: 'a multitude of benefits that can significantly enhance your academic and professional journey.'
        },
        {
            img: unifordScholar,
            title: 'Be a Uniwave Scholar',
            content: 'a multitude of benefits that can significantly enhance your academic and professional journey.'
        },
    ]
    return (
        <>
            <h1 className="w-11/12 mx-auto mb-10 mt-16 text-3xl">Our Fellow Researchers</h1>
            <div className="flex items-center justify-center w-full mx-auto">
                <MdChevronLeft onClick={prev} size={40} className='opacity-50 hover:opacity-100 cursor-pointer' />
                <div className='slider-container w-11/12'>
                    <Slider {...settings} ref={sliderRef}>
                        {
                            oppurtunityData.map((item, idx) => {
                                return <div className=" overflow-hidden p-5" key={idx}>
                                    <div className="p-5 border border-black rounded-2xl flex flex-col gap-4">
                                        <Image src={item.img} className="rounded-xl" />
                                        <h1 className="text-2xl" style={{
                                            backgroundColor: item.bgColor
                                        }} >{item.title}</h1>
                                        <p className="text-sm">{item.content}</p>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>
                <MdChevronRight onClick={next} size={40} className='opacity-50 hover:opacity-100 cursor-pointer' />
            </div>
        </>
    )
}

export default Researchers
