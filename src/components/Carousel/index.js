import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import { Pagination, Autoplay } from "swiper/modules";

export default function Carousel2({ swipeables }) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      loop
      grabCursor
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {swipeables.map((swipeable, i) => {
        return <SwiperSlide key={i}>{swipeable}</SwiperSlide>;
      })}
    </Swiper>
  );
}
