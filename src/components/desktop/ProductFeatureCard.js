import React, { Component } from 'react';
import Card from '../Card';
import "./ProductFeatureCard.scss";

class ProductFeatureCard extends Component {
	render() {
		const { img, name, info, smallText } = this.props;
		return (
			<Card className="product-card">
				<div className="pc-image">
					<img src={img} alt={name + " graphic"} width="100%" height="auto" />
				</div>
				<div className="pc-info">
					<h3 className="pc-name">
						{name}
					</h3>
					<p className="pc-info">
						{info}
					</p>
					{smallText && <p className="small-text">{smallText}</p>}
				</div>
			</Card>
		);
	}
}
 
export default ProductFeatureCard;