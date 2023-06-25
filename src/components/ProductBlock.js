import TextButton from './TextButton';
import { useHistory } from 'react-router-dom';
import "./ProductBlock.scss";
import ScrollFadeSection from './ScrollFadeSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductBlock(props) {
	const history = useHistory();

	function changeRoute(path) {
	  history.push(path);
	}

	const { imgPath, header, children, textButton, productPath} = props;
	
	return (
		<ScrollFadeSection slower>
			<Row onClick={() => changeRoute(productPath)} className="justify-content-center justify-content-lg-center product-block text-center text-sm-left">
				<Col xs="6" sm="4" lg="8" className="mb-2 pb-image-container">
					<img src={imgPath} alt="Product graphic" className="pb-image" width="100%" height="auto" />
				</Col>
				<Col xs="12" sm="8" lg="12" className="text-lg-center">
					<h3>{header}</h3>
					<p>{children}</p>
					<TextButton>{textButton ? textButton : "More info"}</TextButton>
				</Col>
			</Row>
		</ScrollFadeSection>
	);
}

export default ProductBlock;