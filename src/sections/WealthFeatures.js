import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TsContainer from '../components/TsContainer';
import SectionHeader from '../components/SectionHeader';
import ProductFeatureBlock from '../components/ProductFeatureBlock';
import { WealthFeatures as WealthContent } from "../Utils/Utils.js";
import ScrollFadeSection from '../components/ScrollFadeSection';

class WealthFeatures extends Component {
	render() {
		return (
			<ScrollFadeSection>
				<TsContainer>
					<Grid item xs="12">
						<SectionHeader noMargin>Features</SectionHeader>
					</Grid>
				</TsContainer>
				{WealthContent &&
					WealthContent.map((feature, idx) => (
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

export default WealthFeatures;