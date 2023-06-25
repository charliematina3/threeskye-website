import React, { Component } from 'react';
import ProductFeatureBlock from '../components/ProductFeatureBlock';
import { WealthFeatures as WealthContent } from "../utils/Utils.js";
// import ScrollFadeSection from '../components/ScrollFadeSection';
import "../components/ProductBlock.scss";

class WealthFeatures extends Component {
	render() {
		return (
			<div>
				{WealthContent &&
					WealthContent.map((feature, idx) => (
						<ProductFeatureBlock
							key="idx"
							bg={idx % 2 !== 0 ? "blue" : "white"}
							imgPath={feature.imgPath}
							header={feature.name}
							text={feature.text}
							smallText={feature.smallText}
							expandedText={feature.expandedText}
						/>
					))}
			</div>
		);
	}
}

export default WealthFeatures;