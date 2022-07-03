import React from "react";
import "./SkillsBar.css";

function SkillsBar() {
	return (
		<div className="skills-bar">
			<div className="bar">
				<div className="info">
					<span>Amongus</span>
				</div>
				<div className="progress-line amongus">
					<span></span>
				</div>
			</div>
			<div className="bar">
				<div className="info">
					<span>Fart</span>
				</div>
				<div className="progress-line fart">
					<span></span>
				</div>
			</div>
			<div className="bar">
				<div className="info">
					<span>Poop</span>
				</div>
				<div className="progress-line">
					<span></span>
				</div>
			</div>
		</div>
	);
}

export default SkillsBar;
