import React from "react";
import "./testimoniMobile.css"
import petik from "../../assets/petik.png"
import profil1 from "../../assets/profil1.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

const TestimoniMobile = () => {
  return (
    <div>
      <div className="container-mobile">
        <div className="testimoni-container-mobile">
          <div className="judul-testimoni-mobile">Testimoni</div>
          <div className="testimoni-wrapper-mobile">

            <>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="swiper-testimoni-mobile"
              >
                <SwiperSlide>
                  <div className="testimoni-mobile">
                    <img src={petik} alt="" />
                    <p>Kursus online di Arkademi sangat berkesan, materinya simple tidak berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses terus buat Arkademi!</p>
                    <div className="testimoni-profile-mobile">
                      <img src={profil1} alt="" />
                      <div className="identitas-mobile">
                        <p>Nizar Putra (Bandung)</p>
                        <p>Siswa kelas Bootstrap</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimoni-mobile">
                    <img src={petik} alt="" />
                    <p>Kursus online di Arkademi sangat berkesan, materinya simple tidak berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses terus buat Arkademi!</p>
                    <div className="testimoni-profile-mobile">
                      <img src={profil1} alt="" />
                      <div className="identitas-mobile">
                        <p>Nizar Putra (Bandung)</p>
                        <p>Siswa kelas Bootstrap</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimoni-mobile">
                    <img src={petik} alt="" />
                    <p>Kursus online di Arkademi sangat berkesan, materinya simple tidak berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses terus buat Arkademi!</p>
                    <div className="testimoni-profile-mobile">
                      <img src={profil1} alt="" />
                      <div className="identitas-mobile">
                        <p>Nizar Putra (Bandung)</p>
                        <p>Siswa kelas Bootstrap</p>
                      </div>
                    </div>
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

export default TestimoniMobile