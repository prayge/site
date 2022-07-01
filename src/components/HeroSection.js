import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="./videos/video-1.mp4" autoPlay loop muted />
			<h1>Samuel Farquhar</h1>
			<h2>Machine Learning Engineer</h2>
			<p>Pytorch, Deep learning, Medical Imaging, Radiology</p>
			<div className="hero-btns">
				<Button
					className="btn"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onClick={console.log("hey")}
				>
					RESUME <i class="fas fa-arrow-alt-circle-down"></i>
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
