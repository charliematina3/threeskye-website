import React, { Component } from 'react';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import FadeInSection from '../components/FadeInSection';
import "./Homepage.scss";
import HomepageWealth from '../sections/HomepageWealth';
import HomepageResearch from '../sections/HomepageResearch';
import HomepageTsx from '../sections/HomepageTsx';
import IntegrationsSection from '../sections/IntegrationsSection';
import TrustedBy from '../sections/TrustedBy';
import SeeMoreBannerSection from '../sections/SeeMoreBannerSection';
import HomepageFundManagement from '../sections/HomepageFundManagement';

class Homepage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				<FadeInSection>
					<HeroSection
						centred
						className="homepage-hero"
						text="We challenge the conventional and inspire transformation within financial services"
					>
						Financial Software for <UnderlinedText>Humans</UnderlinedText>
					</HeroSection>
					{/* <LandingProductSelect products={products} /> */}
				</FadeInSection>
				{/* Products */}
				<HomepageWealth />
				<HomepageResearch />
				<HomepageFundManagement />
				<HomepageTsx />
				{/* Integrations */}
				<IntegrationsSection logos={["office", "nzx", "apex", "chelmer", "akahu", "addy", "xignite", "bloomberg", "power-bi", "refinitiv", "send-grid", "click-send"]} />
				{/* Trusted */}
				<TrustedBy companies={["hwp", "cip"]} />
				{/* See more */}
				<SeeMoreBannerSection />
			</>
		);
	}
}

export default Homepage;