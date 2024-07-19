import React, { Component } from 'react';
import TextSection from '../sections/TextSection';
import ProductHeroSection from '../sections/ProductHeroSection';
import FocusText from '../components/FocusText';
import IntegrationsSection from '../sections/IntegrationsSection';
import TrustedBy from '../sections/TrustedBy';
import SeeMoreBannerSection from '../sections/SeeMoreBannerSection';
import PortalFeatures from '../sections/portal/PortalFeatures';

class PortalManagementPage extends Component {

	componentDidMount() {
		document.title = '3SKYE Financial Software for Humans - Portal Management';
		window.scrollTo(0, 0)
	}
	
	render() {
		return (
			<>
				<ProductHeroSection
					mainHero
					centred
					heroImage="/images/portal-management/pmp-hero.png"
					buttonText="Let's Chat"
					text={
						<>
							Streamline the entire client experience, from onboarding through to annual reviews.
						</>
					}
				>
					3SKYE Portal Management
				</ProductHeroSection>
				{/* Intro */}
				<TextSection bg="white" containerClass="pb-1">
					Transcend traditional white-label solutions with our Portal Management Platform, revolutionising your client’s experience. Build and preview customised onboarding workflows, monitor progress, manage content, analyse data, and personalise the client experience for seamless and professional interactions with your clients. Elevate your portal management far beyond the conventional client portals, with advanced tools designed for superior efficiency and client engagement.
				</TextSection>
				{/* Features */}
				<PortalFeatures />
				{/* Integrations */}
				<IntegrationsSection
					logos={["office", "nzx", "apex", "chelmer", "akahu", "addy", "xignite", "bloomberg", "power-bi", "refinitiv", "send-grid", "click-send"]}
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

export default PortalManagementPage;