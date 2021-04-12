import React from 'react';
import "./LoadingSpinner.scss";

function LoadingSpinner(props) {
	return (
		<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
	)
};

export default LoadingSpinner;
