import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { casesImages, navLinks } from '../constants';

const Cases = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        style={{ backgroundPosition: window.innerWidth < 1024 && '50% 50%' }}
        className="mySwiper flex flex-col-reverse justify-center gap-y-24 items-center min-h-screen bg-[url(/./assets/images/bg-normal2.png)] bg-no-repeat bg-cover"
      >
        <h2 className="text-2xl lg:text-5xl">Maskice</h2>
        {casesImages.map((single, i) => (
            <SwiperSlide key={i} className='h-[400px] flex items-center justify-center'>
                <img src={single} alt="case" className='h-full' />
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default Cases