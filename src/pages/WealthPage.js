import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetToKnowUs from "../sections/GetToKnowUs";
import ProductSection from '../components/ProductSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import WealthFeatures from '../sections/WealthFeatures';

class WealthPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		const { products } = this.props;
		return (
			<>
				<HeroSection heroImage="/images/product-wp.png" buttonText="Request Demo">
					A <UnderlinedText>Single Pane</UnderlinedText> of Glass for Advisers and Investors.
				</HeroSection>
				{/* Intro */}
				<TextSection header="Intro" bg="white">
					3SKYE is a modular web-and-mobile platform for <FocusText>financial professionals</FocusText> and investors. Our intuitive interface allows Advisers to easily and efficiently manage
					their client’s affairs. We take a subset of that data and expose it to the investors in a bespoke investor portal.
				</TextSection>
				{/* Features */}
				<WealthFeatures />
				{/* Products */}
				<ProductSection products={products} currentPage="Wealth Platform" />
				{/* Get to know us */}
				<GetToKnowUs bg="white"/>
			</>
		);
	}
}

export default WealthPage;