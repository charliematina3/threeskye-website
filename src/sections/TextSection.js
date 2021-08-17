import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TsContainer from '../components/TsContainer';
import SectionHeader from '../components/SectionHeader';
import FocusParagraph from '../components/FocusParagraph';
import "./TextSection.scss";

class TextSection extends Component {
	render() {
		const { children, header, props, bg, className, style } = this.props;
		return (
			<TsContainer {...props} bg={bg} style={style}>
				<Row>
					<Col xs="12" className={className ? className : ""}>
						{header && <SectionHeader>{header}</SectionHeader>}
						<FocusParagraph>{children}</FocusParagraph>
					</Col>
				</Row>
			</TsContainer>
		);
	}
}

export default TextSection;
