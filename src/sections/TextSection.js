import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TsContainer from '../components/TsContainer';
import SectionHeader from '../components/SectionHeader';
import FocusParagraph from '../components/FocusParagraph';
import "./TextSection.scss";

class TextSection extends Component {
	render() {
		const { children, header, props, bg, className, style, h1, containerClass } = this.props;
		return (
			<TsContainer {...props} bg={bg} style={style} className={`pt-1${containerClass ? ' ' + containerClass : ''}`}>
				<Row>
					<Col xs="12" className={className ? className : ""}>
						{header && <SectionHeader h1={h1}>{header}</SectionHeader>}
						<FocusParagraph>{children}</FocusParagraph>
					</Col>
				</Row>
			</TsContainer>
		);
	}
}

export default TextSection;
