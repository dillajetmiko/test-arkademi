import React from "react";
import "./testimoni.css"
import petik from "../../assets/petik.png"
import profil1 from "../../assets/profil1.png"
import profil2 from "../../assets/profil2.png"
import profil3 from "../../assets/profil3.png"

const Testimoni = () => {
  return (
    <div>
      <div className="container">
        <div className="testimoni-container">
          <div className="judul-testimoni">Testimoni</div>
          <div className="testimoni-wrapper">
            <div className="testimoni">
              <img src={petik} alt="" />
              <p>Kursus online di Arkademi sangat berkesan, materinya simple tidak berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses terus buat Arkademi!</p>
              <div className="testimoni-profile">
                <img src={profil1} alt="" />
                <div className="identitas">
                  <p>Nizar Putra (Bandung)</p>
                  <p>Siswa kelas Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="testimoni">
              <img src={petik} alt="" />
              <p>Materi kursus online di Arkademi sangat menarik, isinya daging semua dan layak dipelajari. Pematerinya juga berkompeten di bidangnya. Ditambah penyajian kelas sangat ciamik dan user friendly. Solusi buat pebisnis.</p>
              <div className="testimoni-profile">
                <img src={profil2} alt="" />
                <div className="identitas">
                  <p>Fuad Hasan (Cilegon)</p>
                  <p>Siswa kelas Inbound Marketing</p>
                </div>
              </div>
            </div>
            <div className="testimoni">
              <img src={petik} alt="" />
              <p>Saya beruntung bergabung ke kursus online di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.</p>
              <div className="testimoni-profile">
                <img src={profil3} alt="" />
                <div className="identitas">
                  <p>Dewi Wijayanti (Jakarta)</p>
                  <p>Siswa kelas Brevet Pajak A/B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimoni