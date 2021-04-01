import React, { Component } from 'react'
import TsContainer from './TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductBlock from './ProductBlock';
import SectionHeader from './SectionHeader';

class ProductSection extends Component {
	render() {
		const { products, currentPage } = this.props;
		return (
			<TsContainer bg>
				<Row container justify="flex-start" spacing="6" xs="12">
					<Col xs="12" className="d-flex  justify-content-lg-center mb-3 mb-lg-3">
						<SectionHeader>Products</SectionHeader>
					</Col>
				</Row>
				<Row>
					{products &&
						products.map((product, idx) =>
							product.name !== currentPage ? (
								<Col xs="12" lg="4" className="mb-5">
									<ProductBlock productPath={product.path} imgPath={product.img} header={product.name}>
										{product.text}
									</ProductBlock>
								</Col>
							) : (
								""
							)
						)}
				</Row>
			</TsContainer>
		);
	}
}

export default ProductSection;