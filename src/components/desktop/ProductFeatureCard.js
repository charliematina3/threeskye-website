import React, { Component } from 'react';
import Card from '../Card';
import "./ProductFeatureCard.scss";

class ProductFeatureCard extends Component {
	render() {
		const { img, name, info, smallText } = this.props;
		return (
			<Card className="product-card">
				<div class="pc-image">
					<img src={img} alt={name + " graphic"} />
				</div>
				<div class="pc-info">
					<p class="pc-name">
						{name}
					</p>
					<p class="pc-info">
						{info}
					</p>
					{smallText && <p class="small-text">{smallText}</p>}
				</div>
			</Card>
		);
	}
}
 
export default ProductFeatureCard;