import "./MobileMenuProduct.scss";
import { useHistory } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MobileMenuProduct(props) {
	const history = useHistory();

	function changeRoute(path) {
	  history.push(path);
	}

	const { product } = props;
	
		return (
			<Row className="mm-product-container" onClick={() => changeRoute(product.path)}>
				<Col xs="4">
					<img src={product.img} alt="Product graphic" style={{ width: "100%" }} />
				</Col>
				<Col xs="8" alignItems="center">
					<div>
						<p className="mm-product-header">{product.name}</p>
						<p className="mm-product-text">{product.text}</p>
					</div>
				</Col>
			</Row>
		);
}
 
export default MobileMenuProduct;