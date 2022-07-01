import React from "react";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Check this shit out g</h1>
			<div className="cards__conatiner">
				<div className="cards__wrapper">
					<ul className="cards__item">
						<CardItem
							src="../../images/card.png"
							text="Explore the hidden waterfall deep inside the Amazon Jungle"
							label="Adventure"
							path="/services"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
