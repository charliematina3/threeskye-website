import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetInTouchSection from "../sections/GetInTouchSection";
import FadeInSection from '../components/FadeInSection';

class AboutUsPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<FadeInSection>
				{/* Intro */}
				<TextSection withColour header="Who are we?">
					<FadeInSection fadeUp delay="1">
						We design and develop software that is aligned with the financials services sector. Our mission is to make <FocusText>simple beautiful software</FocusText> that reinvent the the user experiences of ageing legacy systems.
					</FadeInSection>
					<br />
					<FadeInSection fadeUp delay="2">
						We <FocusText>focus on the users</FocusText> of our platforms with a deep empathy of each individual. This ensures we create tools that people need and want to use.
					</FadeInSection>
				</TextSection>
				{/* Get to know us */}
				<GetInTouchSection />
			</FadeInSection>
		);
	}
}

export default AboutUsPage;