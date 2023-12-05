import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const HeadAd = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/img/camp/camp1.jpg"/></SwiperSlide>
      <SwiperSlide><img src="/img/camp/camp1.jpg"/></SwiperSlide>
      <SwiperSlide><img src="/img/camp/camp1.jpg"/></SwiperSlide>
    </Swiper>
  )
}

export default HeadAd