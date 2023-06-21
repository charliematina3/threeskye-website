import React, { Component } from 'react';
import Card from '../Card';
import "./ProductFeatureCard.scss";
import PartnerToken from '../PartnerToken';

class ProductFeatureCard extends Component {
	render() {
		const { img, name, info, smallText, className, partner, link } = this.props;
		return (
			<Card className={`product-card${className ? " " + className : ""}`}>
				{link ? (
					<a className="pc-image" href={link} target="_blank">
						<img src={img} alt={name + " graphic"} width="100%" height="auto" />
					</a>
				) : (
					<div className="pc-image">
						<img src={img} alt={name + " graphic"} width="100%" height="auto" />
					</div>
				)}
				<div className="pc-info">
					<h3 className="pc-name">
						{name}
						{partner && (
							<>
								<span>•</span>
								<PartnerToken />
							</>
						)}
					</h3>
					<p className="pc-info">{info}</p>
					{smallText && <p className="small-text">{smallText}</p>}
				</div>
			</Card>
		);
	}
}
 
export default ProductFeatureCard;