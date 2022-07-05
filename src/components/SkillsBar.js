import React from "react";
import "./SkillsBar.css";

function SkillsBar() {
	return (
		<div className="skills-container">
			<div className="skills-title">
				<h1>
					here are my
					<span> SKILLS</span>
				</h1>
			</div>
			<div className="skills-bar">
				<div className="bar">
					<div className="info">
						<span>Python</span>
					</div>
					<div className="progress-line python">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>PyTorch</span>
					</div>
					<div className="progress-line pt">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>C++</span>
					</div>
					<div className="progress-line cpp">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>HTML</span>
					</div>
					<div className="progress-line html">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>CSS</span>
					</div>
					<div className="progress-line css">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>React.js</span>
					</div>
					<div className="progress-line react">
						<span></span>
					</div>
				</div>
				<div className="bar">
					<div className="info">
						<span>JavaScript</span>
					</div>
					<div className="progress-line js">
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsBar;
