import "./ContactForm.css";
import React from "react";

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};
class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
	}

	/* Here’s the juicy bit for posting the form submission */

	handleSubmit = (e) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state }),
		})
			.then(() => alert("Success!"))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
			<div>
				<form
					className="form-container"
					name="contact"
					onSubmit={this.handleSubmit}
				>
					<div className="form-group">
						<label htmlFor="name">
							Your name
							<input
								type="text"
								name="name"
								value={name}
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="email">
							Your email
							<input
								type="text"
								name="email"
								value={email}
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="message">
							Your message
							<textarea
								type="text"
								name="message"
								value={message}
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<button type="submit">Send</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;
