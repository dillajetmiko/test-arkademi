import React from "react";
import "./spesialisasiMobile.css"
import spesialisasi1 from "../../assets/spesialisasi1.png"
import spesialisasi2 from "../../assets/spesialisasi2.png"
import spesialisasi3 from "../../assets/spesialisasi3.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const SpesialisasiMobile = () => {
  return (
    <div>
      <div className="container-spesialisasi-mobile">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={false}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper-spesialisasi-mobile"
          >
            <SwiperSlide>
              <div className="spesialisasi-mobile" style={{ backgroundImage: `url(${spesialisasi1})` }}>
                <p>Menjadi Ahli <span>Akutansi</span></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="spesialisasi-mobile" style={{ backgroundImage: `url(${spesialisasi2})` }}>
              <p>Menjadi Ahli <span>K3 (Kesehatan & Keselamatan Kerja)</span></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="spesialisasi-mobile" style={{ backgroundImage: `url(${spesialisasi3})` }}>
              <p>Menjadi Ahli <span>Kesehatan, Keselamatan Kerja & Perlindungan Lingkungan (K3LL)</span></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="spesialisasi-mobile" style={{ backgroundImage: `url(${spesialisasi1})` }}>
                <p>Menjadi Ahli <span>Akutansi</span></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="spesialisasi-mobile" style={{ backgroundImage: `url(${spesialisasi2})` }}>
              <p>Menjadi Ahli <span>K3 (Kesehatan & Keselamatan Kerja)</span></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="spesialisasi-mobile" style={{ backgroundImage: `url(${spesialisasi3})` }}>
              <p>Menjadi Ahli <span>Kesehatan, Keselamatan Kerja & Perlindungan Lingkungan (K3LL)</span></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className="spesialisasi-lihat-mobile">
        <a href="">Lihat Semua Spesialisasi</a>
      </div>
    </div>
  )
}

export default SpesialisasiMobile