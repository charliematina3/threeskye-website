import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetToKnowUs from "../sections/GetToKnowUs";
import ProductSection from '../components/ProductSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import ScrollFadeSection from '../components/ScrollFadeSection';
import FadeInSection from '../components/FadeInSection';
import "./Homepage.scss";
import LandingProductSelect from '../components/desktop/LandingProductSelect';

class Homepage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		const { products } = this.props;
		return (
			<>
				<FadeInSection>
					<HeroSection className="homepage-hero" heroImageXs="5" heroImage="/images/landing.png" text="Equity research, wealth management for Advisers, Investors, HNW and Family Offices.">
						Financial Software for <UnderlinedText>Humans</UnderlinedText>.
					</HeroSection>
					<LandingProductSelect products={products} />
				</FadeInSection>
				{/* Intro */}
				<ScrollFadeSection>
					<TextSection bg="white" header="Intro">
						3SKYE is a web platform for <FocusText>Wealth Professionals</FocusText> and <FocusText>Investors</FocusText>. Our intuitive interface allows Advisers to
						easily and efficiently manage their client’s affairs.
					</TextSection>
				</ScrollFadeSection>
				{/* Products */}
				<ScrollFadeSection>
					<ProductSection products={products} />
				</ScrollFadeSection>
				{/* Get to know us */}
				<ScrollFadeSection>
					<GetToKnowUs bg="white" />
				</ScrollFadeSection>
			</>
		);
	}
}

export default Homepage;