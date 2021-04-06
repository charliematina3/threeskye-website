import React, { Component } from 'react'

class LandingProduct extends Component {
	state = {  }
	render() {
		const { product, info }
		return (
			<div className="landing-product-item">
				<div className="lpi-product">{product}</div>
				<div className="lpi-info">{info}</div>
			</div>
		);
	}
}
 
export default LandingProduct;