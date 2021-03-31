import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetToKnowUs from "../sections/GetToKnowUs";
import ProductSection from '../components/ProductSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import HowItWorks from '../sections/HowItWorks';
import FadeInSection from '../components/FadeInSection';

class ResearchPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		const { products } = this.props;
		return (
			<>
				<HeroSection heroImage="/images/product-rp.png" buttonText="Request Demo">
					Create Publish Distribute Research the <UnderlinedText>Easy Way</UnderlinedText>.
				</HeroSection>
				{/* Intro */}
				<FadeInSection>
					<TextSection header="Intro">
						<FadeInSection fadeUp>
							3SKYE Research is a platform for publishing institutional and equity research. Our intuitive interface allows analysts to easily and efficiently <FocusText>publish and
							distribute</FocusText> your companies research.
						</FadeInSection>
					</TextSection>
				</FadeInSection>
				<HowItWorks />
				{/* Products */}
				<ProductSection products={products} currentPage="Research Platform"/>
				{/* Get to know us */}
				<GetToKnowUs />
			</>
		);
	}
}

export default ResearchPage;