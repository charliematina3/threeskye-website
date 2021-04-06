import React, { Component } from 'react';
import "./MenuDropDown.scss";

class MenuDropDown extends Component {
	render() {
		const { className, children, label } = this.props;
		
		return (
			<span className={`menu-dropdown${ className ? " " + className : ""}`}>
				{label}
				<div className="md-items-outer">
					<div className="md-items-inner">
						{children}
					</div>
				</div>
			</span>
		);
	}
}

export default MenuDropDown;