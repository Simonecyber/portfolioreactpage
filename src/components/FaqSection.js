
import React, {useState} from "react";
import styled from 'styled-components';

import { About } from '../styles';
import Toggle from './Toggle';
import { LayoutGroup, motion } from "framer-motion"



const FaqSections = () => {
	
	return (
		<Faq>
			<h1>Any questions? <span>FAQ</span> </h1>
			
			<LayoutGroup>
			<Toggle  title='How Do I Start?'>
			
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
			
			</Toggle>

			<Toggle  title='Daily Schedule'>
			
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
			
			</Toggle>

			<Toggle  title='different pay methods'>
			
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
			
			</Toggle>
			<Toggle  title='What products do you offer?'>
			
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
			
			</Toggle>
			</LayoutGroup>
		</Faq>
	)
}


const Faq = styled(About)`
display: block;
margin-top: 25px;
span{
	display: block;
}
h2{
	padding-bottom: 2rem;
	font-weight: lighter;
}
.faq-line{
	background: #cccccc;
	height: 0.2rem;
	margin: 2rem 0rem;
	width: 100%;

}
.question{
	padding: 3rem 0rem;
	cursor: pointer;

}
.answare{
	padding: 2rem 0rem;
	p{
		padding: 1rem 0rem;
	}
}
`;


export default FaqSections;