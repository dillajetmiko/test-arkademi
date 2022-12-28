import React from "react";
import "./kategoriMobile.css"
import bisnis from "../../assets/bisnis.png"
import keuangan from "../../assets/keuangan.png"
import karier from "../../assets/karier.png"
import sertifikat from "../../assets/sertifikat.png"
import teknologi from "../../assets/teknologi.png"
import hobi from "../../assets/hobi.png"
import bahasa from "../../assets/bahasa.png"

const KategoriMobile = () => {
  return (
    <div>
      <div className="container-mobile">
        <div className="kategori-container-mobile">
          <div className="judul-kategori-mobile">Kategori Terpopuler</div>
          <div className="kategori-wrapper-mobile">
            <div className="kategori-mobile">
              <img src={bisnis} alt="" />
              <p>Bisnis</p>
            </div>
            <div className="kategori-mobile">
              <img src={keuangan} alt="" />
              <p>Keuangan</p>
            </div>
            <div className="kategori-mobile">
              <img src={karier} alt="" />
              <p>Pengembangan Karier</p>
            </div>
            <div className="kategori-mobile">
              <img src={sertifikat} alt="" />
              <p>Sertifikasi</p>
            </div>
            <div className="kategori-mobile">
              <img src={teknologi} alt="" />
              <p>Teknologi</p>
            </div>
            <div className="kategori-mobile">
              <img src={hobi} alt="" />
              <p>Hobi</p>
            </div>
            <div className="kategori-mobile">
              <img src={bahasa} alt="" />
              <p>Bahasa</p>
            </div>
          </div>
          <div className="kategori-lihat-mobile">
            <a href="">Lihat semua kategori</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KategoriMobile