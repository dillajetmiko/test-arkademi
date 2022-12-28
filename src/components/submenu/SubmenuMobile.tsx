import React from "react";
import "./submenuMobile.css"
import panah from "../../assets/panah.png"
import humburger from "../../assets/humburger.png"

const SubmenuMobile = () => {
  return (
    <div className="submenu-mobile">
      <div className="container-mobile">
        <div className="submenu-container-mobile">
          <div className="dropdown-mobile">
            Kategori<span><img src={panah} alt="" /></span>
          </div>
          <ul>
            <li className="submenu-option-mobile">
              <a href="">Bisnis</a>
            </li>
            <li className="submenu-option-mobile">
              <a href="">Keuangan</a>
            </li>
            <a href="">
              <img src={humburger} alt="" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SubmenuMobile