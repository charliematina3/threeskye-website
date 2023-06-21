import React from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import "./WealthPage.scss";
import ProductHeroSection from '../sections/ProductHeroSection';
import IntegrationsSection from '../sections/IntegrationsSection';
import TrustedBy from '../sections/TrustedBy';
import FlexWrapper from '../components/FlexWrapper';
import SectionPill from '../components/SectionPill';
import TsContainer from '../components/TsContainer';
import WealthFeatures from '../sections/wealth/WealthFeatures';
import FadeInSection from '../components/FadeInSection';
import SeeMoreBannerSection from '../sections/SeeMoreBannerSection';

const WealthPage = () => {
  const [scrollValue, setScroll] = React.useState(false);

  return (
		<>
			<ProductHeroSection
				id="wealth"
				customScroll={100 - scrollValue * 0.04 + "%"}
				heroImage="/images/2023-images/products/crm-grouped.png"
				text={
					<>
						A <FocusText>Single Pane of Glass</FocusText> for Advisers and Investors
					</>
				}
			>
				3SKYE Wealth Platform
			</ProductHeroSection>
			{/* Intro */}
			<TextSection bg="white" containerClass="pb-1">
				3SKYE Wealth is a modular web-and-mobile platform for financial professionals and investors. Our intuitive interface allows Advisers to easily and efficiently
				manage their client’s affairs. We take a subset of that data and expose it to the investors in a bespoke investor portal.
			</TextSection>
			<TsContainer className="pt-5">
				<FlexWrapper gap={20} alignItems="center" justifyContent="center" flexWrap="wrap">
					<SectionPill sectionRef="core" label="Core Features" />
					<SectionPill sectionRef="aml" label="AML" />
					<SectionPill sectionRef="flexible" label="Flexible Customisation" />
					<SectionPill sectionRef="ai" label="Artificial Intelligence" />
					<SectionPill sectionRef="integrations" label="Integrations" />
				</FlexWrapper>
			</TsContainer>
			{/* Features */}
			<WealthFeatures />
			{/* Integrations */}
			<IntegrationsSection
				logos={["office", "nzx", "apex", "chelmer", "akahu", "addy", "xignite", "bloomberg", "power-bi", "refinitiv", "send-grid", "click-send"]}
				text="Unlock seamless integrations with leading tools and systems, enhancing your wealth management capabilities effortlessly."
			/>
			{/* Trusted */}
		  	<TrustedBy companies={["hwp"]} />
		  	{/* See more */}
		  	<SeeMoreBannerSection />
		</>
  );
};

export default WealthPage;
