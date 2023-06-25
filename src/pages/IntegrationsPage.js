import React, { Component } from 'react';
import FadeInSection from '../components/FadeInSection';
import HeroSection from '../sections/HeroSection';
import IntegrationsFeatures from '../sections/integrations/IntegrationsFeatures';
import RelatedPages from '../sections/RelatedPages';

class IntegrationsPage extends Component {
	componentDidMount() {
		document.title = 'Integrations';
		window.scrollTo(0, 0)
	}
	render() {
		// const { products } = this.props;
		return (
			<>
				<FadeInSection fadeUp>
					<HeroSection
						centredButton
						heroImage="/images/2023-images/products/integrations.png"
						text={
							<>
								Powering the future of wealth management through our platform, we specialise in harmoniously integrating diverse systems and processes to drive efficiency and streamline operations.
							</>
						}
					>
						Integrations
					</HeroSection>
				</FadeInSection>
				<FadeInSection>
					<IntegrationsFeatures />
				</FadeInSection>
				<FadeInSection>
					<RelatedPages />
				</FadeInSection>
			</>
		);
	}
}

export default IntegrationsPage;