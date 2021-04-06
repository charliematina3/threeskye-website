import React, { Component } from 'react'
import MenuDropDown from './MenuDropDown';
import ProductMenuItem from './ProductMenuItem';

class ProductDropdown extends Component {
	render() {
		const { className, products } = this.props;
		return (
			<MenuDropDown label="Products" className={className}>
				{products && products.length >= 0 && products.map((product, idx) => (
					<ProductMenuItem key={idx} name={product.name} info={product.landingText} img={product.img} path={product.path} />
				))}
			</MenuDropDown>
		);
	}
}

export default ProductDropdown;