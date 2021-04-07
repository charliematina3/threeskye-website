import React, { Component } from 'react';
import { Card as MuiCard } from 'react-bootstrap';
import "./Card.scss";
	

class Card extends Component {
	render() {
		const { className, children } = this.props;

		return (
			<MuiCard className={`ts-card${className ? " " + className : ""}`}>{children}</MuiCard >
		);
	}
}
 
export default Card;