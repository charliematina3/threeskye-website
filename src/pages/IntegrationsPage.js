import React, { Component } from 'react';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import FlexWrapper from '../components/FlexWrapper';
import SectionPill from '../components/SectionPill';
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
						heroImage="/images/2023-images/products/integrations.png"
						text={
							<>
								Powering the future of wealth management through our platform, we specialise in harmoniously integrating diverse systems and processes to drive efficiency and streamline operations.
							</>
						}
					>
						Integrations
					</HeroSection>
					<TsContainer className="pt-1">
						<FlexWrapper gap={20} alignItems="center" justifyContent="start" flexWrap="wrap">
							<SectionPill sectionRef="consolidated" label="Financial Service" />
							<SectionPill sectionRef="managers" label="Business Automation" />
							<SectionPill sectionRef="integrations" label="Market Data" />
						</FlexWrapper>
					</TsContainer>
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