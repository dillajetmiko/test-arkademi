import React, { FC } from "react";
import "./cards.css"
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
import { Pagination, Navigation } from "swiper";
import { useTimer } from "../../utils/utilsTimer";

const Cards: FC<ICards> = ({ ikon, konten, flashsale, dataArray }) => {
  const waktu = useTimer()
  return (
    <div className="cards">
      <div className="container">
        <div className="card-content">
          <div className="card-header">
            {ikon && <img src={ikon} alt="" />}
            <div className="content-title">{konten}</div>
            {flashsale &&
              <div className="flash-sale">
                <p>Berakhir dalam</p>
                <div className="waktu-flash-sale">
                  <img src={jam} alt="" />
                  <p>{waktu}</p>
                </div>
              </div>
            }
          </div>
          {!ikon &&
            <div>
              <a className="lihat" href="">Lihat Semua</a>
            </div>
          }
        </div>
      </div>
      <div className="card-list">
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={28}
            slidesPerGroup={1}
            loop={false}
            loopFillGroupWithBlank={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper-card"
          >
            {dataArray.map((data) => {
              return (
                <SwiperSlide>
                  <Card data={data} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </>
      </div>

    </div>
  )
}

const Card: FC<ICard> = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={data.thumbnail} alt="" />
      </div>
      <div className="card-detail">
        <div className="card-arkademi">
          Arkademi
        </div>
        <div className="card-title">
          {data.judul}
        </div>
        <div className="rating">
          <img src={bintang} alt="" />
          <p>{data.rating}</p>
          <p>({"> " + data.pengguna})</p>
        </div>
        <div>
          {data.diskon ?
            <div className="kolom-diskon">
              <div className="diskon">{data.diskon}</div>
              <div className="harga-diskon">Rp {data.harga_asli}</div>
            </div> :
            <div className="kolom-diskon" style={{ height: `19px` }}>
            </div>
          }
          <div className="harga">
            Rp {data.harga}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards

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