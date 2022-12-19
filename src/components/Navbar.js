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
						src="../../images/logo.png"
						className="n-icon"
					/>
				</Link>

				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<Link
						to="/experience"
						className="nav-routes about"
						onClick={closeMobileMenu}
					>
						Experience
					</Link>

					<Link
						to="/skills"
						className="nav-routes skills"
						onClick={closeMobileMenu}
					>
						Skills
					</Link>

					<Link
						to="/projects"
						className="nav-routes projects"
						onClick={closeMobileMenu}
					>
						Projects
					</Link>

					<Link
						to="/contact"
						className="nav-routes contact"
						onClick={closeMobileMenu}
					>
						Contact
					</Link>

					<a
						className="nav-a"
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

					<a className="nav-a" href="https://github.com/prayge">
						<img
							className="nav-img"
							alt="GitHub"
							width="32"
							height="32"
							src="../../images/github.png"
						/>
					</a>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
