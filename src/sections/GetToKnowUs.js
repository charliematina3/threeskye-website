import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FocusText from '../components/FocusText';
import TextSection from './TextSection';

class GetToKnowUs extends Component {
	render() {
		const { bg } = this.props;
		return (
			<TextSection bg={bg} header="Get to know us" className="text-center" style={{ paddingTop: 100, paddingBottom: 100 }}>
				<Link to="about-us">The 3SKYE <FocusText>Why</FocusText> we do what we do!</Link>
			</TextSection>
		);
	}
}

export default GetToKnowUs;