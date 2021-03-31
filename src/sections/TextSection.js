import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TsContainer from '../components/TsContainer';
import SectionHeader from '../components/SectionHeader';
import FocusParagraph from '../components/FocusParagraph';

class TextSection extends Component {
	render() {
		const { children, header, props, withColour } = this.props;
		return (
			<TsContainer {...props} withColour={withColour}>
				<Row>
					<Col xs="12">
						<SectionHeader>{header}</SectionHeader>
						<FocusParagraph>{children}</FocusParagraph>
					</Col>
				</Row>
			</TsContainer>
		);
	}
}

export default TextSection;
