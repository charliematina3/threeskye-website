import React, { Component } from 'react';
import TextSection from '../sections/TextSection';
import GetToKnowUs from "../sections/GetToKnowUs";
// import ProductSection from '../components/ProductSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import FadeInSection from '../components/FadeInSection';
import ScrollFadeSection from '../components/ScrollFadeSection';
import Button from '../components/Button';
import ProductHeroSection from '../sections/ProductHeroSection';
import TsContainer from '../components/TsContainer';
import FlexWrapper from '../components/FlexWrapper';
import SectionPill from '../components/SectionPill';
import TsxFeatures from '../sections/tsx/TsxFeatures';

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
					<ProductHeroSection
						heroImage="/images/2023-images/products/3sx-hero.png"
						text={
							<>
								A Platform for <UnderlinedText>High Net Worth</UnderlinedText> &amp; Family Offices
							</>
						}
					>
						3SKYE-X
					</ProductHeroSection>
					{/* Intro */}
					<TextSection bg="white" containerClass="pb-1">
						An exciting new platform for HNW, Iwi, community trusts, and family offices to take control of their financial affairs. An intuitive portal to manage all
						types of investments: private equity, property (residential and commercial), funds, stocks, commodities, currencies, cash, collectables, crypto, and other
						valuable assets (cars, insurance, fishing quotas). All your assets, all in one place.
					</TextSection>
				</FadeInSection>
				<FadeInSection>
					<TsContainer className="pt-5">
						<FlexWrapper gap={20} alignItems="center" justifyContent="center" flexWrap="wrap">
							<SectionPill sectionRef="consolidated" label="Consolidated View" />
							<SectionPill sectionRef="managers" label="Managers" />
							<SectionPill sectionRef="integrations" label="Integrations" />
						</FlexWrapper>
					</TsContainer>
				</FadeInSection>
				<FadeInSection>
					<TsxFeatures />
				</FadeInSection>
			</>
		);
	}
}

export default TsxPage;