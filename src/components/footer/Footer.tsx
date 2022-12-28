import React from "react";
import "./footer.css"
import Testimoni from "../testimoni/Testimoni"
import gambarfooter from "../../assets/gambarfooter.png"
import arkademi from "../../assets/arkademi_logo.png"
import mox from "../../assets/mox.png"
import y from "../../assets/y.png"
import aws from "../../assets/aws.png"
import g_startup from "../../assets/g_startup.png"
import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercard.png"
import mandiri from "../../assets/mandiri.png"
import bca from "../../assets/bca.png"
import bni from "../../assets/bni.png"
import bri from "../../assets/bri.png"
import permata from "../../assets/permata.png"
import cimb from "../../assets/cimb.png"
import atm from "../../assets/atm.png"
import gopay from "../../assets/gopay.png"
import shopee from "../../assets/shopee.png"
import alfa from "../../assets/alfa.png"
import indo from "../../assets/indo.png"
import fb from "../../assets/fb.png"
import yt from "../../assets/yt.png"
import ins from "../../assets/ins.png"
import linkedin from "../../assets/in.png"
import googleplay from "../../assets/googleplay.png"
import appstore from "../../assets/appstore.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-pertama">
        <Testimoni />
        <div className="container">
          <div className="arkademi-footer">
            <img src={gambarfooter} alt="" />
            <div className="detail-arkademi-footer">
              <div className="arkademi">
                <img src={arkademi} alt="" />
                <p>Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill based learning atau pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.</p>
              </div>
              <div className="akselerator">
                <h4>Akselerator</h4>
                <p>Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik dunia.</p>
                <div className="image-akselerator">
                  <img src={mox} alt="" />
                  <img src={y} alt="" />
                  <img src={aws} alt="" />
                  <img src={g_startup} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-kedua">
        <div className="container">
          <div className="footer-kedua-wrapper">
            <div className="footer-kategori">
              <p>Kategori Populer</p>
              <ul>
                <li>
                  <a href="">Keuangan</a>
                </li>
                <li>
                  <a href="">Perpajakan</a>
                </li>
                <li>
                  <a href="">Bisni</a>
                </li>
                <li>
                  <a href="">Marketing</a>
                </li>
                <li>
                  <a href="">Kewirausahaan</a>
                </li>
                <li>
                  <a href="">Investasi</a>
                </li>
              </ul>
            </div>
            <div className="footer-lainnya">
              <p>Lainnya</p>
              <ul>
                <li>
                  <a href="">Penduan</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Tentang Kami</a>
                </li>
                <li>
                  <a href="">Karier</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-pembayaran">
              <p>Metode Pembayaran</p>
              <div className="logo-pembayaran">
                <div className="gambar-pembayaran">
                  <img src={visa} alt="" />
                  <img src={mastercard} alt="" />
                  <img src={mandiri} alt="" />
                  <img src={bca} alt="" />
                  <img src={bni} alt="" />
                  <img src={bri} alt="" />
                  <img src={permata} alt="" />
                  <img src={cimb} alt="" />
                  <img src={atm} alt="" />
                  <img src={gopay} alt="" />
                  <img src={shopee} alt="" />
                  <img src={alfa} alt="" />
                  <img src={indo} alt="" />
                </div>
              </div>
            </div>
            <div className="footer-media">
              <div className="sosmed">
                <p>Ikuti Kami</p>
                <img src={fb} alt="" />
                <img src={yt} alt="" />
                <img src={ins} alt="" />
                <img src={linkedin} alt="" />
              </div>
              <div className="app-mobile">
                <p>Arkademi Mobile App</p>
                <img src={googleplay} alt="" />
                <img src={appstore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-ketiga">
        <div className="container">
          <div className="footer-ketiga-wrapper">
            <p>© 2022 PT Arkademi Daya Indonesia</p>
            <div className="footer-ketentuan">
              <a href="">Ketentuan Layanan</a>
              <a href="">Kontak</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer