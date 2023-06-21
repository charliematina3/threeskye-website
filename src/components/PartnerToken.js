import React from 'react';
import "./PartnerToken.scss";

const PartnerToken = ({ label, children, onClick }) => {
	return (
		<div className="partner-token" onClick={onClick}>
			Partner
		</div>
   );
}

export default PartnerToken;