import React from "react";
import "./submenu.css"
import panah from "../../assets/panah.png"

const Submenu = () => {
  return (
    <div className="submenu">
      <div className="container">
        <div className="submenu-container">
          <div className="dropdown">
            Kategori<span><img src={panah} alt="" /></span>
          </div>
          <ul>
            <li className="submenu-option">
              <a href="">Bisnis</a>
            </li>
            <li className="submenu-option">
              <a href="">Keuangan</a>
            </li>
            <li className="submenu-option">
              <a href="">Pengembangan Karier</a>
            </li>
            <li className="submenu-option">
              <a href="">Sertifikasi</a>
            </li>
            <li className="submenu-option">
              <a href="">Teknologi</a>
            </li>
            <li className="submenu-option">
              <a href="">Bahasa</a>
            </li>
            <li className="submenu-option">
              <a href="">Korporat</a>
            </li>
            <li className="submenu-option">
              <a href="">Hobi</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Submenu