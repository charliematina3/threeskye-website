import React, { Component } from 'react';
import Button from '../components/Button';
import FadeInSection from '../components/FadeInSection';
import FocusText from '../components/FocusText';
import TextSection from './TextSection';

class GetInTouchSection extends Component {
	render() {
		const { bg } = this.props;
		return (
			<FadeInSection fadeUp delay="3">	
				<TextSection bg={bg} header="Get in touch" style={{ paddingTop: 100, paddingBottom: 100 }} className="text-lg-center">
					Interested in our products please hit the contact button below or alternatively email us at <FocusText><a target="_blank" rel="noreferrer" href="mailto:info@3skye.com">info@3skye.com</a></FocusText>.
					<br />
					<br />
					<Button routeChangePath="/get-in-touch">Get in touch</Button>
				</TextSection>
			</FadeInSection>
		);
	}
}

export default GetInTouchSection;