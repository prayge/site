import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import SkillsBar from "../SkillsBar";
import CardSection from "../CardSection";

function Home() {
	return (
		<>
			<HeroSection />
			<SkillsBar />
			<CardSection />
		</>
	);
}

export default Home;
