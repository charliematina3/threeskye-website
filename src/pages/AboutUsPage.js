import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetInTouchSection from "../sections/GetInTouchSection";
import FadeInSection from '../components/FadeInSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';

class AboutUsPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				<FadeInSection>
					<HeroSection
						className="homepage-hero"
						heroImageXs="5"
						heroImage="/images/landing.png"
						text="Equity research, wealth management for Advisers, Investors, HNW and Family Offices."
					>
						Financial Software for <UnderlinedText>Humans</UnderlinedText>.
					</HeroSection>
				</FadeInSection>
				<FadeInSection>
					<h1 className="d-none">About Us</h1>
					{/* Intro */}
					<TextSection bg="white" header="Intro">
						<FadeInSection fadeUp delay="1">
							At 3Skye we craft software solutions for the financial services industry, with a focus on Equities Research publishing. Delivering research to your
							clients on brand, on time and with ease. With our technology your people will save time via our powerful publishing platform and bespoke templates that
							a tailored to your brand.
						</FadeInSection>
					</TextSection>
					<TextSection bg="blue" header="Who are we?">
						<FadeInSection fadeUp delay="1">
							We design and develop software that is aligned with the financials services sector. Our mission is to make{" "}
							<FocusText>simple beautiful software</FocusText> that reinvent the the user experiences of ageing legacy systems.
						</FadeInSection>
						<br />
						<FadeInSection fadeUp delay="2">
							We <FocusText>focus on the users</FocusText> of our platforms with a deep empathy of each individual. This ensures we create tools that people need and
							want to use.
						</FadeInSection>
					</TextSection>
					{/* Get to know us */}
					<GetInTouchSection bg="white" />
				</FadeInSection>
			</>
		);
	}
}

export default AboutUsPage;