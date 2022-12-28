import React, { FC } from "react";
import "./cardsMobile.css"
import thumnail from "../../assets/thumnail.png"
import trending from "../../assets/trending.png"
import bintang from "../../assets/bintang.png"
import jam from "../../assets/jam.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import { useTimer } from "../../utils/utilsTimer";

const CardsMobile: FC<ICards> = ({ ikon, konten, flashsale, dataArray }) => {
  const waktu = useTimer()
  return (
    <div className="cards-mobile">
      <div className="container-mobile">
        <div className="card-content-mobile">
          <div className="card-header-mobile">
            <div className="card-judul-mobile">
              {ikon && <img src={ikon} alt="" />}
              <div className="content-title-mobile">{konten}</div>
            </div>
            <div>
              {flashsale &&
                <div className="flash-sale-mobile">
                  <p>Berakhir dalam</p>
                  <div className="waktu-flash-sale-mobile">
                    <img src={jam} alt="" />
                    <p>{waktu}</p>
                  </div>
                </div>
              }
            </div>
          </div>
          {!ikon &&
            <div>
              <a className="lihat-mobile" href="">Lihat Semua</a>
            </div>
          }
        </div>
      </div>
      <div className="card-list-mobile">
        <>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={28}
            freeMode={true}
            modules={[ FreeMode, Pagination, Navigation]}
            className="swiper-card-mobile"
          >
            {dataArray.map((data) => {
              return (
                <SwiperSlide>
                  <CardMobile data={data} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </>
      </div>

    </div>
  )
}

const CardMobile: FC<ICard> = ({ data }) => {
  return (
    <div className="card-mobile">
      <div className="card-image-mobile">
        <img src={data.thumbnail} alt="" />
      </div>
      <div className="card-detail-mobile">
        <div className="card-arkademi-mobile">
          Arkademi
        </div>
        <div className="card-title-mobile">
          {data.judul}
        </div>
        <div className="rating-mobile">
          <img src={bintang} alt="" />
          <p>{data.rating}</p>
          <p>({"> " + data.pengguna})</p>
        </div>
        <div>
          {data.diskon ?
            <div className="kolom-diskon-mobile">
              <div className="diskon-mobile">{data.diskon}</div>
              <div className="harga-diskon-mobile">Rp {data.harga_asli}</div>
            </div> :
            <div className="kolom-diskon-mobile" style={{ height: `19px` }}>
            </div>
          }
          <div className="harga-mobile">
            Rp {data.harga}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsMobile

interface ICards {
  ikon: string | null
  konten: string
  flashsale: string | null
  dataArray: IData[]
}

interface IData {
  thumbnail: string
  judul: string
  rating: string
  pengguna: number
  diskon: string | null
  harga_asli: string
  harga: string
}

interface ICard {
  data: IData
}