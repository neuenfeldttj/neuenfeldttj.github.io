"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function PhotoCarousel() {
  const horizontal_images = Array.from({ length: 11 }, (_, index) => "/film_photos/horizontal/img_" + (index+1) + ".jpg");
  const vertical_images = Array.from({ length: 5 }, (_, index) => "/film_photos/vertical/img_" + (index+1) + ".jpg");
  return (
    <div className="mx-8">
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={2}
      className="[--swiper-navigation-color:theme(colors.white)]
    [--swiper-navigation-size:24px] mb-8"
    >
      {horizontal_images.map((src, i) => (
        <SwiperSlide key={i}>
          <Image
            src={src}
            alt=""
            width={500}
            height={500}
            className="rounded-xl w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={5}
      className="[--swiper-navigation-color:theme(colors.white)]
    [--swiper-navigation-size:24px]"
    >
      {vertical_images.map((src, i) => (
        <SwiperSlide key={i}>
          <Image
            src={src}
            alt=""
            width={500}
            height={500}
            className="rounded-xl w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
