"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay,Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

function Skills() {
  return (
    <div className="py-40 bg-white dark:bg-transparent bg-fisrtbg">
      <div data-aos="fade-up" className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          speed={1000}
          grabCursor={true}>
          <SwiperSlide><Image src="/aws.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/nyu.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/berk.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/fre.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/ibm.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/mit.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/tud.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/harvard.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/boston.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/google.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/texas.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/gt.webp" alt='' width={120} height={120}/></SwiperSlide>
          <SwiperSlide><Image src="/unverst.webp" alt='' width={120} height={120}/></SwiperSlide>
        </Swiper>
      </div>
      <h1 className="text-xl md:text-3xl font-bold pt-16 px-4 text-center">Take online courses from <a href="#" className='hover:text-blue-500 underline'> 260+ world-class universities and companies </a></h1>
    </div>
  );
}

export default Skills;

