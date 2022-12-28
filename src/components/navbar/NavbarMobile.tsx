import React from "react";
import "./navbarMobile.css"
import arkademi from "../../assets/arkademi.png"
import pencarian from "../../assets/pencarian.png"
import love from "../../assets/love.png"

const NavbarMobile = () => {
	return (
		<header className="navbar-mobile">
			<div className="container-mobile">
				<div className="navbar-container-wrapper-mobile">
					<div className="navbar-container-mobile">
						<img className="arkademi-logo-mobile" src={arkademi} alt="" />
						<div className="menu-kanan-mobile">
							<img src={love} alt="" />
							<div className="tombol-registrasi-mobile">
								<div className="tombol-masuk-mobile">
									<a href="">Masuk</a>
								</div>
								<div className="tombol-daftar-mobile">
									<a href="">Daftar</a>
								</div>
							</div>
						</div>
					</div>
					<div className="pencarian-mobile">
						<img src={pencarian} alt="" />
						<input type="text" placeholder="Cari Kelas" />
					</div>
				</div>
			</div>
		</header>
	)
}

export default NavbarMobile