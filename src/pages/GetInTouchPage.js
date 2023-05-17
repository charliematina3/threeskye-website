import React, { Component } from 'react';
import FadeInSection from '../components/FadeInSection';
import ContactFormSection from '../sections/ContactFormSection';
import TextSection from '../sections/TextSection';

class GetInTouchPage extends Component {
	componentDidMount() {
		document.title = 'Get in Touch';
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				{/* Intro */}
				<FadeInSection>
					<TextSection bg="blue" h1 header="Let's Chat">
						<FadeInSection fadeUp>
							Like what you see? Want to know more or see a demo? Fill in the form below or email us at <a className="colour-blue" href="mailto:info@3skye.com">info@3skye.com</a>.
						</FadeInSection>
					</TextSection>
				</FadeInSection>
				<ContactFormSection />
			</>
		);
	}
}

export default GetInTouchPage;