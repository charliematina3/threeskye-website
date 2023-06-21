import React, { Component } from 'react';
import TextSection from '../sections/TextSection';
import ProductHeroSection from '../sections/ProductHeroSection';
import FocusText from '../components/FocusText';
import TsContainer from '../components/TsContainer';
import FlexWrapper from '../components/FlexWrapper';
import SectionPill from '../components/SectionPill';
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
					heroImage="/images/hero.png"
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
				<TsContainer className="pt-5">
					<FlexWrapper gap={20} alignItems="center" justifyContent="center" flexWrap="wrap">
						<SectionPill sectionRef="core" label="Core Features" />
						<SectionPill sectionRef="ai" label="Artificial Intelligence" />
						<SectionPill sectionRef="research" label="Research Design" />
						<SectionPill sectionRef="integrations" label="Integrations" />
					</FlexWrapper>
				</TsContainer>
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