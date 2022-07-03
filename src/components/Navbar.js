import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);


	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img
						alt=""
						width="59"
						height="59"
						src="../../images/l3.png"
						className="n-icon"
					/>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<a
							className="nav-links"
							href="https://www.linkedin.com/in/samuel-farquhar-881851146/"
						>
							<img
								className="nav-img"
								alt="Linkedin"
								width="32"
								height="32"
								src="../../images/linkedin.png"
							/>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-links" href="https://github.com/prayge">
							<img
								className="nav-img"
								alt="GitHub"
								width="32"
								height="32"
								src="../../images/github.png"
							/>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
