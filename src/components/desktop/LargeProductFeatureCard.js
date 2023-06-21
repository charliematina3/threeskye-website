import React, { Component } from 'react';
import Card from '../Card';
import "./ProductFeatureCard.scss";
import FlexWrapper from '../FlexWrapper';
import PartnerToken from '../PartnerToken';

class LargeProductFeatureCard extends Component {
	render() {
		const { img, name, info, className, subs, partner, link } = this.props;
		return (
			<Card className={`product-card large${className ? " " + className : ""}`}>
				{link ? (
					<a className="pc-image pc-large" href={link} target="_blank">
						<img src={img} alt={name + " graphic"} width="100%" height="auto" />
					</a>
				) : (
					<div className="pc-image pc-large">
						<img src={img} alt={name + " graphic"} width="100%" height="auto" />
					</div>
				)}
				<div className="pc-sub-info">
					{info}
					{partner && (
						<>
							<span>•</span>
							<PartnerToken />
						</>
					)}
				</div>
				{/* subs */}
				<FlexWrapper gap={24} justifyContent="spaceBetween" className="mt-5">
					{subs &&
						subs.map((sub, idx) => {
							return (
								<Card className="product-card sub-card" key={idx}>
									{link ? (
										<a className="pc-image" href={sub.link} target="_blank">
											<img src={sub.image} alt={sub.name + " graphic"} width="100%" height="auto" />
										</a>
									) : (
										<div className="pc-image">
											<img src={sub.image} alt={sub.name + " graphic"} width="100%" height="auto" />
										</div>
									)}
									<div className="pc-info">
										<h3 className="pc-name">{sub.name}</h3>
										<p className="pc-info">{sub.description}</p>
									</div>
								</Card>
							);
						})}
				</FlexWrapper>
			</Card>
		);
	}
}
 
export default LargeProductFeatureCard;