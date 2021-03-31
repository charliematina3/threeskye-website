import React, { Component } from 'react';
import Button from '../components/Button';
import FadeInSection from '../components/FadeInSection';
import FocusText from '../components/FocusText';
import TextSection from './TextSection';

class GetInTouchSection extends Component {
	render() {
		const { withColour } = this.props;
		return (
			<FadeInSection fadeUp delay="3">	
				<TextSection withColour={withColour} header="Get in touch" style={{ paddingTop: 100, paddingBottom: 100 }}>
					Interested in our products please hit the contact button below or alternatively email us at <FocusText>info@3skye.com</FocusText>.
					<br />
					<br />
					<Button routeChangePath="/get-in-touch">Get in touch</Button>
				</TextSection>
			</FadeInSection>
		);
	}
}

export default GetInTouchSection;