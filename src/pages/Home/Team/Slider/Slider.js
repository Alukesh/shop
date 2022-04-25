import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.scss";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";


const Slider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                autoplay={{ delay: 4500}}
                pagination={{
                    clickable: true,
                }}
                speed={50}
                // loop={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide style={{width:100+'%'}}>
                        <img className={'team__slide'} src="Assets/home/team/slide1.jpg" alt="image"/>
                </SwiperSlide>
                <SwiperSlide>
                        <img className={'team__slide'} src="Assets/home/team/slide2.webp" alt="image"/>
                </SwiperSlide>
                <SwiperSlide>
                        <img className={'team__slide'} src="Assets/home/team/slide4.jpg" alt="image"/>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;