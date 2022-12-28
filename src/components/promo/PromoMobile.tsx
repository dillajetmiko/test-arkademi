import React from "react";
import "./promoMobile.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

const PromoMobile = () => {
  return (
    <div>
      <div className="container-mobile">
        <div className="promo-container-mobile">
          <div className="judul-promo-mobile">promo spesial untukmu</div>
          <div className="promo-wrapper-mobile">
            <>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={28}
                freeMode={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="swiper-promo-mobile"
              >
                <SwiperSlide>
                  <div className="promo-mobile">
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="promo-mobile">
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="promo-mobile">
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromoMobile