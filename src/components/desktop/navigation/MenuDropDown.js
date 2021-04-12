import React, { useState } from 'react';
import "./MenuDropDown.scss";

function MenuDropDown(props) {
	const [isShown, setIsShown] = useState(false);
	const { className, children, label } = props;

	return (
		<span
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
			className={`menu-dropdown${className ? " " + className : ""}${isShown ? " show-dropdown" : ""}`}
		>
			{label}
			<div className="md-items-outer">
				<div className="md-items-inner" onClick={() => setIsShown(false)}>{children}</div>
			</div>
		</span>
	);
}

export default MenuDropDown;