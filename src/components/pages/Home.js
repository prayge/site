import "../../App.css";
import React from "react";
import HeroSection from "../HeroSection";
import Card from "../Card";
import SkillsBar from "../SkillsBar";

function Home() {
	return (
		<>
			<HeroSection />
			<SkillsBar />
			<div className="wrapper">
				<Card
					img="../../images/genn.gif"
					link="https://github.com/prayge/GeNN"
					title="GeNN"
					description="GeNN is a Generalizable Neural Network designed for semantic segmentation 
					of lesions within medical imaging datasets. GeNN uses the MSD dataset,
					comprised of 10 medical imaging tasks all over the body."
				/>
				<Card
					img="../../images/brats.gif"
					title="BraTS"
					link="https://github.com/prayge/Brats"
					description="U-Net approach to solving the BRaTS Dataset from 2020, using a combination 
					of specific hyperparameters and binary-crossentropy for multi-class segmentation"
				/>
				<Card
					img="../../images/nst.gif"
					title="Neural Style Transfer"
					link="https://github.com/prayge/NST"
					description="Neural Style Transfer is the process of blending a style from an image you 
					would like to extract the visual properties from, onto a content image while keeping spatial 
					information."
				/>
			</div>
		</>
	);
}

export default Home;
