import React from "react";
import SectionTitle from "./SectionTitle";
import Margin from "./style-components/Margin";
import "./AboutMe.css";

function AboutMe() {
	return (
		<div className="about-me-container">
			<Margin />
			<SectionTitle title="ABOUT" extra="me" />
			<div className="about-me">
				<h1>Hi, im Samuel Farquhar</h1>
				<p>
					Im from Edinburgh in Scotland, one of the most beautiful cities in the
					world. I love problem solving and incorporating my ideas into a
					practical solution.
				</p>
				<p>
					I've had a passion for healthcare and medicine since i was young and
					would like to help others out there using my knowledge of programming
				</p>
				<p>
					I try to expand my knowledge constantly working hard at many different
					things to expand my ability to learn and adapt to new challenges.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
