import React from "react";
import SectionTitle from "./SectionTitle";
import Margin from "./style-components/Margin";
import "./AboutMe.css";

function AboutMe() {
	return (
		<div>
			<Margin />
			<SectionTitle title="ABOUT" extra="me" />
			<div className="container">
				<div className="about-me-flex">
					<div className="about-me">
						<h1>Hi, I'm Samuel Farquhar</h1>
						<p>
							Im from Edinburgh in Scotland, one of the most beautiful cities in
							the world. I love problem solving and incorporating my ideas into
							a practical solution.
						</p>
						<p>
							I've had a passion for healthcare and medicine since i was young
							and would like to help others out there using my knowledge of
							programming
						</p>
						<p>
							I try to expand my knowledge constantly working hard at many
							different things to expand my ability to learn and adapt to new
							challenges.
						</p>
					</div>
					<div className="about-me-side">
						<img
							className="about-me-side image"
							src="../../images/edi.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
