
import React from "react";
import styled from 'styled-components';

import { About } from '../styles';




const FaqSections = () => {
	return (
		<Faq>
			<h1>Any questions? <span>FAQ</span> </h1>
			<div className="question">
				<h4>How Do I Start?</h4>
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>Daily Schedule</h4>
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>different pay methods</h4>
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>What products do you offer?</h4>
				<div className="answare">
					<p>Ea aliqua consectetur aliqua adipisicing.</p>
					<p>Consectetur enim esse velit aute ad aliquip occaecat labore consequat qui.
						Nulla est cillum dolore quis voluptate eu elit ipsum. Cillum fugiat ipsum eu culpa aute.</p>
				</div>
				<div className="faq-line"></div>
			</div>
		</Faq>
	)
}


const Faq = styled(About)`
display: block;
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