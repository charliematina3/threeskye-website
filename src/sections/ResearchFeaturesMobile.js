import React, { Component } from 'react';
import ProductFeatureBlock from '../components/ProductFeatureBlock';
// import ScrollFadeSection from '../components/ScrollFadeSection';
import { ResearchFeatures } from '../utils/Utils';

class ResearchFeaturesMobile extends Component {
	render() { 
		return (
			<div className="d-lg-none">
				{ResearchFeatures &&
					ResearchFeatures.map((feature, idx) => (
						<div key={idx}>
							{/* For Mobile */}
							<ProductFeatureBlock
								bg={idx % 2 !== 0 ? "blue" : "white"}
								imgPath={feature.imgPath}
								header={feature.name}
								text={feature.text}
								smallText={feature.smallText}
								expandedText={feature.expandedText}
							/>
						</div>
					))}
			</div>
		);
	}
}

export default ResearchFeaturesMobile;