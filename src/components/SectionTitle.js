import React from "react";
import "./SectionTitle.css";

function SectionTitle(props) {
	return (
		<div className="section-title">
			<h1>
				{props.subtitle}
				<span> {props.title}</span>
			</h1>
		</div>
	);
}

export default SectionTitle;
