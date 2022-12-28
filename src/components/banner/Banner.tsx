import React, { useRef } from "react";
import "./banner.css"
import banner2 from "../../assets/hero-banner.jpg"
import banner from "../../assets/banner.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <div>
      <div className="container-carousel">
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
            <SwiperSlide>
                <img src={banner} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner} alt="" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  )
}

export default Banner