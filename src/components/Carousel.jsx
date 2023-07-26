import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import dataHeroes from "@/data/data.json"
import './Carousel.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import modules
import { Mousewheel, Navigation } from 'swiper/modules'

function Carousel() {
    const data = dataHeroes["heroes"];

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                direction={'vertical'}
                mousewheel={true}
                loop={true}
                navigation={{
                    prevEl: '.button-group .swiper-button-prev',
                    nextEl: '.button-group .swiper-button-next'
                }}
                centeredSlides={true}
                modules={[Mousewheel, Navigation]}
            >
                {data.map((item, index) =>
                    <SwiperSlide  key={index}>
                        <Link to={`/detailhero/${item?.id}`}>
                                <img src={item?.content.image} />
                        </Link>
                        
                    </SwiperSlide>
                )}
                <div className="button-group sm:flex hidden">
                    <button className="swiper-button-next"></button>
                    <button className="swiper-button-prev"></button>
                </div>
            </Swiper>
        </>
    )
}


export default Carousel;
