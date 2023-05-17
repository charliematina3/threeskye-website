import React, { Component } from 'react';
import TextSection from '../sections/TextSection';
import GetToKnowUs from "../sections/GetToKnowUs";
// import ProductSection from '../components/ProductSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import FadeInSection from '../components/FadeInSection';
import ScrollFadeSection from '../components/ScrollFadeSection';
import Button from '../components/Button';

class TsxPage extends Component {
	componentDidMount() {
		document.title = 'High Net Worth and Family Offices';
		window.scrollTo(0, 0)
	}
	render() {
		// const { products } = this.props;
		return (
			<>
				<FadeInSection fadeUp>
					<HeroSection heroImage="/images/product-hnw.png" buttonText="Let's Chat">
						A Platform for <UnderlinedText>High Net Worth</UnderlinedText> &amp; Family Offices
					</HeroSection>
					{/* Intro */}
					<FadeInSection fadeUp>
						<TextSection bg="white">
							An exciting new platform that allows HNW and Family Offices to take control of their financial affairs. An intuitive portal to view and manage all your investments (property, funds, stocks and cash) in one place. 
							<br />
							<br />
							<Button routeChangePath="/get-in-touch">
								Get in touch
							</Button>
						</TextSection>
					</FadeInSection>
					{/* Products */}
					{/* <ScrollFadeSection>
						<ProductSection products={products} currentPage="3SKYE-X" />
					</ScrollFadeSection> */}
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