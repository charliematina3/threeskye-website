import React, { Component } from 'react';
import TextSection from '../sections/TextSection';
import ProductHeroSection from '../sections/ProductHeroSection';
import FocusText from '../components/FocusText';
import IntegrationsSection from '../sections/IntegrationsSection';
import TrustedBy from '../sections/TrustedBy';
import SeeMoreBannerSection from '../sections/SeeMoreBannerSection';
import ResearchFeatures from '../sections/research/ResearchFeatures';
import FundFeatures from '../sections/funds/FundFeatures';

class FundManagementPage extends Component {
	componentDidMount() {
		document.title = '3SKYE Financial Software for Humans - Fund Management';
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				<ProductHeroSection
					mainHero
					centred
					heroImage="/images/funds/fund-hero.png"
					buttonText="Let's Chat"
					text={
						<>
							Automate all your Fund Documentation. <FocusText>Simple</FocusText>
						</>
					}
				>
					3SKYE Funds Management
				</ProductHeroSection>
				{/* Intro */}
				<TextSection bg="white" containerClass="pb-1">
					Easy to set up automated data consolidation from various sources and external parties > Integrated Branding > Full compliance approval workflow out of the box > Automated publishing to Disclose Register and more
				</TextSection>
				{/* Features */}
				<FundFeatures />
				{/* Integrations */}
				<IntegrationsSection
					logos={["nzx", "chelmer", "apex-alt", "refinitiv", "bloomberg"]}
					text="Unlock seamless integrations with leading tools and systems, enhancing your fund management capabilities effortlessly."
				/>
				{/* Trusted */}
				<TrustedBy companies={["hwp", "cip"]} />
				{/* See more */}
				<SeeMoreBannerSection />
			</>
		);
	}
}

export default FundManagementPage;