import React, { Component, useState, useEffect } from 'react'
import TsContainer from '../TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./LandingProduct.scss";
import { useHistory } from 'react-router';

class LandingProduct extends Component {
	render() {
		const { product, info } = this.props;
		return (
			<div className="landing-product-item">
				<div className="lpi-product">{product}</div>
				<div className="lpi-info">{info}</div>
			</div>
		);
	}
}
	
function LandingProductSelect(props) {
	const history = useHistory();
	const [scrolled, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 150);
		});
	}, []);

	function changeRoute(path) {
		history.push(path);
	}
	
	const { products } = props;

	return (
		<TsContainer className={`landing-product-select d-none d-xl-flex${scrolled ? " scrolled" : ""}`}>
			<Row className="landing-products-container">
				{products &&
					products.length >= 0 &&
					products.map((product, idx) => (
						<Col xs="4" key={idx} onClick={() => changeRoute(product.path)}>
							<LandingProduct product={product.name} info={product.landingText} />
						</Col>
					))}
			</Row>
		</TsContainer>
	);
}


export default LandingProductSelect;