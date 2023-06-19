import React, { Component } from 'react';
// import ScrollFadeSection from '../components/ScrollFadeSection';
import ResearchFeaturesMobile from './ResearchFeaturesMobile';
import ResearchFeaturesDesktop from './ResearchFeaturesDesktop';
class HowItWorks extends Component {
	render() {
		return (
			<div>
				{/* <TsContainer className="pb-0 pt-5" bg="white">
					<Row>
						<Col xs="12">
							<SectionHeader noMargin>How it works</SectionHeader>
						</Col>
					</Row>
				</TsContainer> */}
				<ResearchFeaturesMobile />
				<ResearchFeaturesDesktop />
			</div>
		);
	}
}

export default HowItWorks;