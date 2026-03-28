import React from 'react'
import Product from './Product'
import './SlidePro.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay , Navigation } from 'swiper/modules';


function SlidePro({ data, title }) {
    return (
    <div className="container">
    <div className='slide_products'>
            <div className="top_slide">
                <h2>{title}</h2>
                <p>Discover our latest collection of premium products</p>
            </div>
        </div>


    <Swiper
    
    
  spaceBetween={20}
  slidesPerView={4}
  breakpoints={{
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 8,
    },
  }}
    
    loop={true}
    
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
    
    navigation={true} modules={[Autoplay, Navigation]}
    className="mySwiper">

        {data.map((item) => {
            return (

                <SwiperSlide><Product item={item} /></SwiperSlide>
            )

        })}


    </Swiper>

        
    </div>
)
}

export default SlidePro