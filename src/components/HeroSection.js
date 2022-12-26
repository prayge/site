import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div>
			<div className="hero-container">
				<h1>
					Hello, I'm
					<span class="highlight"> Samuel Farquhar</span>. I'm a Data Engineer
					with an interest in Machine Learning
				</h1>
			</div>
			<div className="hero-scroll">
				<p>
					Scroll
					<svg
						width="16"
						height="46"
						viewBox="0 0 16 46"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="hero-arrow"
					>
						<path
							d="M7.2929 45.7071C7.68342 46.0976 8.31659 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95263 37.5384 1.31946 37.5384 0.928936 37.9289C0.538412 38.3195 0.538412 38.9526 0.928936 39.3431L7.2929 45.7071ZM7 1.02965e-07L7 45L9 45L9 -1.02965e-07L7 1.02965e-07Z"
							fill="white"
							fill-opacity="0.61"
						/>
					</svg>
				</p>
			</div>
		</div>
	);
}

export default HeroSection;
