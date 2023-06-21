import React, { Component } from 'react';
import { Card as MuiCard } from 'react-bootstrap';
import "./Card.scss";
	

class Card extends Component {
	render() {
		const { className, children, onClick } = this.props;

		return (
			<MuiCard onClick={onClick} className={`ts-card${className ? " " + className : ""}`}>{children}</MuiCard >
		);
	}
}
 
export default Card;