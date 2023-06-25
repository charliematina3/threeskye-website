import React from 'react';
import "./PartnerToken.scss";
import { Link } from 'react-scroll';

const PartnerToken = ({ onClick }) => {
	return (
		<Link className="partnership-wrapper" to="partnerships" smooth={true} duration={1000} offset={-100}>
			<div className="partner-token" onClick={onClick}>
				Partner
			</div>
		</Link>
   );
}

export default PartnerToken;