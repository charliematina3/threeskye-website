import React, { Component } from 'react';
import HeroSection from '../HeroSection';
import FadeInSection from '../../components/FadeInSection';
import FeatureSection from '../FeatureSection';

class WealthCoreFeatures extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				<FadeInSection>
					<FeatureSection
						heroImage="images/2023-images/products/crm-girl.png"
						className="homepage-hero"
						text="We make your life simple with the following features…"
					>
						Core Features
					</FeatureSection>
				</FadeInSection>
			</>
		);
	}
}

export default WealthCoreFeatures;