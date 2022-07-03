import React from "react";
import "../App.css";
import "./Card.scss";

function Card(props) {
	return (
		<div className="card">
			<div className="card__body">
				<img src={props.img} className="card__image" alt="img" />
				<h2 className="card__title">
					{props.title}
					<p className="card__description">{props.description}</p>
				</h2>
			</div>
			<div className="card__center">
				<button className="card__btn">Explore</button>
			</div>
		</div>
	);
}

export default Card;
