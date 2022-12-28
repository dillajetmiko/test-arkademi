import React from "react"
import "./lembagaMobile.css"
import bisnis from "../../assets/bisnis.png"
import mcp from "../../assets/mcp.png"
import rewata from "../../assets/rewata.png"
import duta from "../../assets/duta.png"
import gajahmada from "../../assets/gajahmada.png"
import lpk from "../../assets/lpk.png"
import binuri from "../../assets/binuri.png"
import senja from "../../assets/senja.png"
import polri from "../../assets/polri.png"
import sc from "../../assets/sc.png"
import yes from "../../assets/yes.png"
import smart from "../../assets/smart.png"
import act from "../../assets/act.png"
import msi from "../../assets/msi.png"
import gam from "../../assets/gam.png"

const LembagaMobile = () => {
  return (
    <div>
      <div className="container-mobile">
        <div className="lembaga-container-mobile">
          <div className="judul-lembaga-mobile">
            <p>lembaga</p>
            <a href="">Lihat semua</a>
          </div>
          <div className="lembaga-wrapper-mobile">
            <div className="lembaga-mobile">
              <img src={mcp} alt="" />
              <p>MEDIA CIPTA PRESTASI</p>
            </div>
            <div className="lembaga-mobile">
              <img src={rewata} alt="" />
              <p>REWATA CONSULTANT</p>
            </div>
            <div className="lembaga-mobile">
              <img src={duta} alt="" />
              <p>LKP DUTA</p>
            </div>
            <div className="lembaga-mobile">
              <img src={gajahmada} alt="" />
              <p>GADJAH MADA YOGYAKARTA</p>
            </div>
            <div className="lembaga-mobile">
              <img src={lpk} alt="" />
              <p>LPK GLOBAL BONTANG</p>
            </div>
            <div className="lembaga-mobile">
              <img src={binuri} alt="" />
              <p>BINURI LEARNING CENTER</p>
            </div>
            <div className="lembaga-mobile">
              <img src={senja} alt="" />
              <p>SENJA HASTA AZIZAN</p>
            </div>
            <div className="lembaga-mobile">
              <img src={polri} alt="" />
              <p>MITRA POLRI</p>
            </div>
            <div className="lembaga-mobile">
              <img src={sc} alt="" />
              <p>SURYA COMPUTER</p>
            </div>
            <div className="lembaga-mobile">
              <img src={yes} alt="" />
              <p>YES STUDY</p>
            </div>
            <div className="lembaga-mobile">
              <img src={smart} alt="" />
              <p>SMART BRAIN</p>
            </div>
            <div className="lembaga-mobile">
              <img src={act} alt="" />
              <p>AVICENNA CIPTA TRAINING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LembagaMobile