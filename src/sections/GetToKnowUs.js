import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from './TextSection';

class GetToKnowUs extends Component {
	render() {
		const { bg } = this.props;
		return (
			<TextSection bg={bg} header="Get to know us" className="text-center" style={{ paddingTop: 100, paddingBottom: 100 }}>
				The 3SKYE <FocusText>Why</FocusText> we do what we do!
			</TextSection>
		);
	}
}

export default GetToKnowUs;