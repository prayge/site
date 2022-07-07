import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import SkillsBar from "../subcomponent/SkillsBar";
import CardSection from "../subcomponent/CardSection";
import Margin from "../style-components/Margin";
import ContactSection from "../contact/ContactSection";
import AboutMe from "../AboutMe";

function Home() {
	return (
		<>
			<HeroSection />
			<Margin />
			<AboutMe />
			<div className="spacer" style={{ marginTop: 250 }} />
			<SkillsBar />
			<div className="spacer" style={{ marginTop: 250 }} />
			<CardSection />
			<div className="spacer" style={{ marginTop: 250 }} />
			<ContactSection />
		</>
	);
}

export default Home;
