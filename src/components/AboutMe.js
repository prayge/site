import React from "react";
import SectionTitle from "./SectionTitle";
import Margin from "./style-components/Margin";
import "./AboutMe.css";

function AboutMe() {
	return (
		<div>
			<Margin />
			<SectionTitle title="EXPEREINCE" subtitle="my" />
			<div className="container">
				<div className="about-me-flex">
					<div className="about-me">
						<h1>Sword Group</h1>
						<h2>6 Months</h2>
						<p>
							ETL consulting for large corporations in different industry
							sectors such as retail, oil and gas and insurance and finance.
						</p>

						<p>
							Implementation of numerous complex data flows to connect
							operational systems, from Cloud to on-prem systems to varying
							domains for data for analytics and business intelligence systems.
						</p>
					</div>
					<div className="about-me-side">
						<img
							className="about-me-side image"
							src="../../images/sword-logo.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
