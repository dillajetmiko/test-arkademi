import React from "react";
import "./kategori.css"
import bisnis from "../../assets/bisnis.png"
import keuangan from "../../assets/keuangan.png"
import karier from "../../assets/karier.png"
import sertifikat from "../../assets/sertifikat.png"
import teknologi from "../../assets/teknologi.png"
import hobi from "../../assets/hobi.png"
import bahasa from "../../assets/bahasa.png"

const Kategori = () => {
  return (
    <div>
      <div className="container">
        <div className="kategori-container">
          <div className="judul-kategori">Kategori Terpopuler</div>
          <div className="kategori-wrapper">
            <div className="kategori">
              <img src={bisnis} alt="" />
              <p>Bisnis</p>
            </div>
            <div className="kategori">
              <img src={keuangan} alt="" />
              <p>Keuangan</p>
            </div>
            <div className="kategori">
              <img src={karier} alt="" />
              <p>Pengembangan Karier</p>
            </div>
            <div className="kategori">
              <img src={sertifikat} alt="" />
              <p>Sertifikasi</p>
            </div>
            <div className="kategori">
              <img src={teknologi} alt="" />
              <p>Teknologi</p>
            </div>
            <div className="kategori">
              <img src={hobi} alt="" />
              <p>Hobi</p>
            </div>
            <div className="kategori">
              <img src={bahasa} alt="" />
              <p>Bahasa</p>
            </div>
          </div>
          <div className="kategori-lihat">
            <a href="">Lihat semua kategori</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kategori