import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import "./TsContainer.scss";

class TsContainer extends Component {
	render() {
		let {className, bg, innerClassName, style, id } = this.props;
		return (
			<Container id={id} fluid className={`ts-container${bg === "blue" ? " bg-blue" : bg === "white" ? " bg-white" : ""}${className ? " " + className : ""}`} style={style}>
				<Container className={`p-0${innerClassName ? " " + innerClassName : ""}`}>
					{this.props.children}
				</Container>
			</Container>
		);
	}
}

export default TsContainer;