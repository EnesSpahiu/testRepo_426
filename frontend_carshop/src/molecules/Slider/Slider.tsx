import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import CarService from "../../service/CarService";
import { CarType } from "../../types/Car.model";

export default function Slider() {

  const [cars, setCars] = useState<CarType[]>();

useEffect(() => {
  CarService.getCars().then((data) => {
    setCars(data);
  });
}, []);


  return (
    <>
      {cars && <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={cars[9].picture_url}
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cars[1].picture_url}
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cars[2].picture_url}
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>}
    </>
  );
}
