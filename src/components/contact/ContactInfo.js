import React from "react";
import "./ContactInfo.css";
import { MdAlternateEmail } from "react-icons/md";

function ContactInfo({ icon = <MdAlternateEmail />, text = "Amongus" }) {
	return (
		<div className="contact-info-wrapper">
			<div className="icon">{icon}</div>
			<div className="label">{text}</div>
		</div>
	);
}

export default ContactInfo;
