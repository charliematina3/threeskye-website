import React from 'react';
import "./SectionPill.scss";

const SectionPill = ({label, children, onClick}) => {
	return (
		<div className="section-pill" onClick={onClick}>
			{label || children}
		</div>
   );
}

export default SectionPill;