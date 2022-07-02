import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import Card from "../Card";

function Home() {
	return (
		<>
			<HeroSection />
			<div className="wrapper">
				<Card
					img="../../images/card.png"
					title="GeNN"
					description="GeNN is a Generalizable Neural Network designed for semantic segmentation of lesions within medical imaging datasets. GeNN uses the MSD dataset, comprised of 10 medical imaging tasks all over the body."
				/>
				<Card img="../../images/card.png" title="Title" description="Amongu" />
				<Card img="../../images/card.png" title="Title" description="Amongu" />
			</div>
		</>
	);
}

export default Home;
