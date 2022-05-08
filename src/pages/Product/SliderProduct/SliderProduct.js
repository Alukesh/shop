import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, Navigation, Mousewheel, Keyboard} from "swiper";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import React from "react";

const SliderProduct = ({shop, product}) => {
    return (
        <>
            <Swiper
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
                modules={[Pagination, Autoplay, Navigation,  Mousewheel, Keyboard]}
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
                                        src={`../Shop/${item.image}`}
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