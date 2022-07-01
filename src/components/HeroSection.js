import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<h1>
				Hello, I'm
				<span class="highlight"> Samuel Farquhar</span>. I'm an aspiring Machine
				Learning Engineer
			</h1>
			<div className="hero-btns">
				<Button
					className="btn"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onClick={console.log("hey")}
				>
					RESUME
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
