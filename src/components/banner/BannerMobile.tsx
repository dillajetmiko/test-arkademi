import React, { useRef } from "react";
import "./bannerMobile.css"
import banner2 from "../../assets/hero-banner.jpg"
import bannerMobile from "../../assets/bannerMobile.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const BannerMobile = () => {
  return (
    <div>
      <div className="container-carousel-mobile">
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
            className="mySwiper-mobile"
          >
            <SwiperSlide>
                <img src={bannerMobile} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={bannerMobile} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={bannerMobile} alt="" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  )
}

export default BannerMobile