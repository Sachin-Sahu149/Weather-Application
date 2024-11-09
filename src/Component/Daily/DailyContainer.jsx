
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './DailyContainer.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import DailyFormat from './DailyFormat';

export default function DailyContainer({itemsCount,forecastData,unit}) { // 2 - very small after 3
  return (
    <>
      <Swiper 
        slidesPerView={itemsCount}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
           {
             forecastData.daily.time.map((v,ind)=>(
              <SwiperSlide><DailyFormat key={ind} forecastData={forecastData} unit={unit} index={ind} tempSize = "text-[14px] xs:text-xl" iconWidth = "w-[50px]" daySize = "text-[13px] xs:text-base" containerStyle = "xs:h-[230px] xs:w-[150px] mr-4 p-3 mb-4 rounded-xl  bg-[#646567]" /></SwiperSlide>
             ))
           }
      </Swiper>
    </>
  );
}
