import React, { Component } from 'react';
import ScrollFadeSection from '../components/ScrollFadeSection';
import TsContainer from '../components/TsContainer';
import ResearchFeaturesMobile from './ResearchFeaturesMobile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionHeader from '../components/SectionHeader';
import ResearchFeaturesDesktop from './ResearchFeaturesDesktop';
class HowItWorks extends Component {
	render() {
		return (
			<ScrollFadeSection>
				<TsContainer className="pb-0 pt-5" bg="white">
					<Row>
						<Col xs="12">
							<SectionHeader noMargin>How it works</SectionHeader>
						</Col>
					</Row>
				</TsContainer>
				<ResearchFeaturesMobile />
				<ResearchFeaturesDesktop />
			</ScrollFadeSection>
		);
	}
}

export default HowItWorks;