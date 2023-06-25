import React, { Component } from 'react';
import TextSection from '../sections/TextSection';
import ProductHeroSection from '../sections/ProductHeroSection';
import FocusText from '../components/FocusText';
import IntegrationsSection from '../sections/IntegrationsSection';
import TrustedBy from '../sections/TrustedBy';
import SeeMoreBannerSection from '../sections/SeeMoreBannerSection';
import ResearchFeatures from '../sections/research/ResearchFeatures';

class ResearchPage extends Component {
	componentDidMount() {
		document.title = '3SKYE Financial Software for Humans - Research';
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				<ProductHeroSection
					mainHero
					centred
					heroImage="/images/2023-images/products/research-2023.png"
					buttonText="Let's Chat"
					text={
						<>
							Institutional and Retail Equity Research the <FocusText>Easy Way</FocusText>
						</>
					}
				>
					3SKYE Research Platform
				</ProductHeroSection>
				{/* Intro */}
				<TextSection bg="white" containerClass="pb-1">
					Focus on your quality content > Team collaboration via Inbuilt version control > Publish with slick branding > Analyse readership statistics. Repeat.
				</TextSection>
				{/* Features */}
				<ResearchFeatures />
				{/* Integrations */}
				<IntegrationsSection
					logos={["office", "addy", "xignite", "bloomberg", "power-bi", "refinitiv"]}
					text="Unlock seamless integrations with leading tools and systems, enhancing your wealth management capabilities effortlessly."
				/>
				{/* Trusted */}
				<TrustedBy companies={["hwp", "cip"]} />
				{/* See more */}
				<SeeMoreBannerSection />
			</>
		);
	}
}

export default ResearchPage;