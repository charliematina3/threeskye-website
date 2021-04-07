import React, { Component } from 'react';
import ScrollFadeSection from '../components/ScrollFadeSection';
import TsContainer from '../components/TsContainer';
import { ResearchFeatures } from '../utils/Utils';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFeatureCard from '../components/desktop/ProductFeatureCard';

class ResearchFeaturesDesktop extends Component {
	render() { 
		return (
			<div className="d-none d-lg-block">
				<TsContainer bg="white" style={{ paddingTop: 49 }}>
					<Row>
						{ResearchFeatures &&
							ResearchFeatures.map((feature, idx) => (
								<Col lg="4" style={{ marginBottom: 38 }} key={idx}>
									<ScrollFadeSection style={{height: "100%"}}>
										<ProductFeatureCard name={feature.name} img={feature.imgPath} info={feature.expandedText ? feature.expandedText : feature.text} smallText={feature.smallText} />
									</ScrollFadeSection>
								</Col>
							))}
					</Row>
				</TsContainer>
			</div>
		);
	}
}
 
export default ResearchFeaturesDesktop;