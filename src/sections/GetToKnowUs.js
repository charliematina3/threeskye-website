import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from './TextSection';

class GetToKnowUs extends Component {
	render() {
		const { withColour } = this.props;
		return (
			<TextSection withColour={withColour} header="Get to know us" style={{ paddingTop: 100, paddingBottom: 100 }}>
				The 3SKYE <FocusText>Why</FocusText> we do what we do!
			</TextSection>
		);
	}
}

export default GetToKnowUs;