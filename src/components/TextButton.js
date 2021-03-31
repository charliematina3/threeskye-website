import React, { Component } from 'react';
import "./TextButton.scss";

class TextButton extends Component {
	render() {
		const { children, onClick } = this.props;
		return (
			<span className="text-button" onClick={onClick}>
				{children}
			</span>
		);
	}
}

export default TextButton;