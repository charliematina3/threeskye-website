import React from 'react';
import "./SectionPill.scss";

const SectionPill = ({ label, children }) => {
	return (
		<div className="section-pill">
			{label || children}
		</div>
   );
}

export default SectionPill;