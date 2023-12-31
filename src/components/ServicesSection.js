
import React, { useEffect } from "react";

//Import Icon

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Style
import { About, Description, Image } from '../styles';
import styled from 'styled-components';

import {fade} from '../animation';
import { useScroll } from "./useScroll";



const ServicesSection = () => {
	const [element, controls] = useScroll();
	


	return (
		<Service variants={fade} animate={controls} initial='hidden'  ref={element}>
			<Description>
				<h2>Hagh <span>quality</span> service</h2>
				<Cards>
					<Card>
						<div className="icon">
							<img src={clock} alt="" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>

					<Card>
						<div className="icon">
							<img src={diaphragm} alt="" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>

					<Card>
						<div className="icon">
							<img src={money} alt="" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>

					<Card>
						<div className="icon">
							<img src={teamwork} alt="" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</Card>

				</Cards>
			</Description>
			<Image>
				<img src={home2} alt="" />
			</Image>
		</Service>
	)
}

const Service = styled(About)`
	h2{
		padding-bottom: 5rem;
	}
	p{
		width: 70%;
		padding-top: 2rem 0rem 4rem 0rem;
	}
	
`;

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1300px) {
		justify-content: center;
	}
`;

const Card = styled.div`
	flex-basis: 18rem;
	.icon{
		display: flex;
		align-items: center;
		h3{
			margin-left: 1rem;
			background: #fff;
			color: #000;
			padding: 1rem;
		}
	}
`

export default ServicesSection;
