import React from "react";
import Home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';



const AboutSection = () => {

	const toggle = false;
	return (

		<About>
			<Description>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>your <span>dream </span> come</h2>
					</Hide>
					<Hide>
						<h2>true.</h2>
					</Hide>
				</div>
				<p>Contact us for any photography or videography ideas that you have. We have
					professional with amazing skills
				</p>
				<button>Contact us</button>
			</Description>
			<Image>
				<img src={Home1} alt="guy with camera" />
			</Image>
		</About>
	)
};




export default AboutSection;