import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import SkillsBar from "../subcomponent/SkillsBar";
import CardSection from "../subcomponent/CardSection";

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
