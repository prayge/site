import React from "react";
import SectionTitle from "../SectionTitle";
import ContactInfo from "./ContactInfo";
import { MdPhoneIphone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
	return (
		<div>
			<div className="container">
				<SectionTitle title="CONTACT" subtitle="get in touch" />
				<div className="contactSection__wrapper">
					<div className="left">
						<ContactInfo
							text="samuel_farquhar@aol.com"
							icon={<MdAlternateEmail size={30} />}
						/>
						<ContactInfo
							text="07943800980"
							icon={<MdPhoneIphone size={30} />}
						/>
						<ContactInfo
							text="Edinburgh, Scotland"
							icon={<MdLocationPin size={30} />}
						/>
					</div>
					<div className="right"></div>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
