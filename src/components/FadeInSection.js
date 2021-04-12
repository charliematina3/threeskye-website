import React from 'react';
import "./FadeInSection.scss";

function FadeInSection(props) {
	const { children, fadeUp, faster, slower, delay, id } = props;

	return (
		<div id={id} className={`fade-in-section${faster ? " fade-faster" : ""}${delay && delay === "1" ? " delay-1" : ""}${delay && delay === "2" ? " delay-2" : ""}${delay && delay === "3" ? " delay-3" : ""}${slower ? " fade-slower" : ""}${fadeUp ? " fade-up" : ""}`}>
			{children}
		</div>
	);
}

export default FadeInSection;