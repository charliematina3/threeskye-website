import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import "./TsContainer.scss";

class TsContainer extends Component {
	render() {
		let {className, bg, innerClassName, style, id, onClick, containerRef, homepage, paddingLarge } = this.props;
		return (
			<Container id={id} onClick={onClick} fluid ref={containerRef} className={`ts-container${homepage ? " homepage-container" : ""}${bg === "blue" ? " bg-blue" : bg === "white" ? " bg-white" : ""}${className ? " " + className : ""}`} style={{ padding: paddingLarge ? '200px inherit' : '', ...style}}>
				<Container className={`p-0${innerClassName ? " " + innerClassName : ""}`}>
					{this.props.children}
				</Container>
			</Container>
		);
	}
}

export default TsContainer;