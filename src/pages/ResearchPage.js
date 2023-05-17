import React, { Component } from 'react';
// import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetToKnowUs from "../sections/GetToKnowUs";
// import ProductSection from '../components/ProductSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import HowItWorks from '../sections/HowItWorks';
import FadeInSection from '../components/FadeInSection';

class ResearchPage extends Component {
	componentDidMount() {
		document.title = '3SKYE Financial Software for Humans - Research';
		window.scrollTo(0, 0)
	}
	render() {
		// const { products } = this.props;
		return (
			<>
				<HeroSection mainHero centred heroImage="/images/hero.png" buttonText="Let's Chat">
					Create, Publish, Distribute, Research the <UnderlinedText>Easy Way</UnderlinedText>
				</HeroSection>
				{/* Intro */}
				<FadeInSection>
					<TextSection bg="white" className="intro-text">
						<FadeInSection fadeUp>
							<p>Our Research module has been crafted with your clients in mind. Delivering a professional report to their inbox that reflects the quality and
							professionalism of your firm.</p>
						</FadeInSection>
						<br />
						<FadeInSection fadeUp>
							Our intuitive solution has been designed to allow Analysts to effectively and efficiently create equity research reports, then publish
							via your bespoke designed templates. Keeping on brand and saving time with our secure technology.
						</FadeInSection>
					</TextSection>
				</FadeInSection>
				<HowItWorks />
				{/* Products */}
				{/* <ProductSection products={products} currentPage="Research Platform"/> */}
				{/* Get to know us */}
				<GetToKnowUs bg="blue" />
			</>
		);
	}
}

export default ResearchPage;