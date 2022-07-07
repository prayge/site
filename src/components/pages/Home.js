import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import SkillsBar from "../subcomponent/SkillsBar";
import CardSection from "../subcomponent/CardSection";
import Margin from "../style-components/Margin";

function Home() {
	return (
		<>
			<HeroSection />
			<Margin />
			<SkillsBar />
			<div className="spacer" style={{ marginTop: 250 }} />
			<CardSection />
		</>
	);
}

export default Home;
