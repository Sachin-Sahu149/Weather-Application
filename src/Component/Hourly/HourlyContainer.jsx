
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Card from './Card';
import './HourlyContainer.css'


export default function HourlyContainer({hourlyWeatherData,unit}) {
  let index = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          index.map((ind)=>(
            <SwiperSlide><Card index={ind} hourlyWeatherData={hourlyWeatherData} unit={unit} /></SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
