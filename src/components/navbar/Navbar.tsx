import React from "react";
import "./navbar.css"
import arkademi from "../../assets/arkademi.png"
import pencarian from "../../assets/pencarian.png"
import love from "../../assets/love.png"

const Navbar = () => {
	return (
		<header className="navbar">
			<div className="container">
				<div className="navbar-container">
					<img className="arkademi-logo" src={arkademi} alt="" />
					<div className="pencarian">
						<input type="text" placeholder="Cari Kelas" />
						<img src={pencarian} alt="" />
					</div>
					<img src={love} alt="" />
					<div className="tombol-registrasi">
						<div className="tombol-masuk">
							<a href="">Masuk</a>
						</div>
						<div className="tombol-daftar">
							<a href="">Daftar</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar