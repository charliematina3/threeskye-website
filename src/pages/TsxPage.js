import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetToKnowUs from "../sections/GetToKnowUs";
import ProductSection from '../components/ProductSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import FadeInSection from '../components/FadeInSection';
import ScrollFadeSection from '../components/ScrollFadeSection';

class TsxPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		const { products } = this.props;
		return (
			<>
				<FadeInSection fadeUp>
					<HeroSection heroImage="/images/product-hnw.png" buttonText="Request Demo" buttonDisabled>
						A Platform for <UnderlinedText>High Networth</UnderlinedText> &amp; Family Offices
					</HeroSection>
					{/* Intro */}
					<FadeInSection fadeUp>
						<TextSection header="Intro" bg="white">
							An exciting new platform that allows HNW and Family Offices to take control of their affairs.
							<br />
							<br />
							More info <FocusText>coming soon…</FocusText>
						</TextSection>
					</FadeInSection>
					{/* Products */}
					<ScrollFadeSection>
						<ProductSection products={products} currentPage="3Skye-X" />
					</ScrollFadeSection>
					{/* Get to know us */}
					<ScrollFadeSection>
						<GetToKnowUs bg="white" />
					</ScrollFadeSection>
				</FadeInSection>
			</>
		);
	}
}

export default TsxPage;