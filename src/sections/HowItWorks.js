import React, { Component } from 'react';
import TsContainer from '../components/TsContainer';
import SectionHeader from '../components/SectionHeader';
import ProductFeatureBlock from '../components/ProductFeatureBlock';
import { ResearchFeatures } from "../Utils/Utils.js";
import ScrollFadeSection from '../components/ScrollFadeSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class HowItWorks extends Component {
	render() {
		return (
			<ScrollFadeSection>
				<TsContainer className="pb-0">
					<Row>
						<Col xs="12">
							<SectionHeader noMargin>How it works</SectionHeader>
						</Col>
					</Row>
				</TsContainer>
				{ResearchFeatures &&
					ResearchFeatures.map((feature, idx) => (
						<ScrollFadeSection>
							<ProductFeatureBlock
								key="idx"
								withColour={idx % 2 !== 0}
								imgPath={feature.imgPath}
								header={feature.name}
								text={feature.text}
								smallText={feature.smallText}
								expandedText={feature.expandedText}
							/>
						</ScrollFadeSection>
					))}
			</ScrollFadeSection>
		);
	}
}

export default HowItWorks;