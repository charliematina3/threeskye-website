import React, { Component } from 'react';
import FadeInSection from '../components/FadeInSection';
import FocusText from '../components/FocusText';
import ContactFormSection from '../sections/ContactFormSection';
import TextSection from '../sections/TextSection';

class GetInTouchPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				{/* Intro */}
				<FadeInSection>
					<h1 className="d-none">Contact</h1>
					<TextSection bg="blue" header="Let's Chat">
						<FadeInSection fadeUp>
							Like what you see? Want to know more or see a demo? Fill in the form below or email us at <FocusText>info@3skye.com</FocusText>.
						</FadeInSection>
					</TextSection>
				</FadeInSection>
				<ContactFormSection />
			</>
		);
	}
}

export default GetInTouchPage;