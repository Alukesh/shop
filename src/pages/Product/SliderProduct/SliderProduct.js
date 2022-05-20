import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, Navigation, Mousewheel, Keyboard, EffectFade} from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import React from "react";
import {fade} from "@material-ui/core";

const SliderProduct = ({shop, product}) => {
    return (
        <>
            <Swiper

                // effect="fade"
                slidesPerView={2}
                spaceBetween={40}
                loop={true}
                autoPlay={true}
                autoplay={ {delay: 3000}}
                speed={2500}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        // width: 640,
                        slidesPerView: 1,
                    },
                    557: {
                        // width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        // width: 1268,
                        slidesPerView: 2,
                    },

                }}

                modules={[Pagination, EffectFade, Autoplay, Navigation,  Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    shop.filter(item =>{
                        return item.category.includes(product.category) && item.id !== product.id
                    }).map(item =>(
                        <SwiperSlide key={item.id}>
                            <div  className="product__card">
                                <div className="shop__hover">
                                    <LazyLoadImage
                                        className={'shop__img'}
                                        alt={'t-short'}
                                        src={`../Shop/${item.image[item.colors[0]]}`}
                                        effect={'blur'}
                                    />
                                    {/*<img className={'shop__img'} src={`../Shop/${item.image}`} />*/}
                                    {
                                        !item.inStock  &&
                                        <p className={'shop__info-stock'} style={{textAlign: 'center'}}>Нет в наличии</p>
                                    }
                                    <Link to={`/product/${item.id}`} onClick={() => {
                                        // window.scrollTo('pageYOffset', 150)
                                    }} className={`shop__arrow `}>
                                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white"/></svg>
                                    </Link>
                                </div>
                                <h3 className={'shop__card-title'}>{item.title}</h3>
                                <p className={'shop__price'}><span>${item.price}</span> <span>{item.newPrice}</span></p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default SliderProduct;