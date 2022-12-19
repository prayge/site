import React from "react";
import SectionTitle from "../SectionTitle";
import "./SkillsBar.css";

function SkillsBar() {
	return (
		<div className="skills-container">
			<SectionTitle subtitle="here are my" title="SKILLS" />
			<div className="skills-bar">
				<div className="bar">
					<div className="info">
						<span>Azure Synapse Analytics</span>
					</div>
					<div className="progress-line python">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>Python</span>
					</div>
					<div className="progress-line pt">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>Data Warehousing</span>
					</div>
					<div className="progress-line cpp">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>Power BI</span>
					</div>
					<div className="progress-line html">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>PyTorch and Machine Learning Knowledge</span>
					</div>
					<div className="progress-line pt">
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsBar;
