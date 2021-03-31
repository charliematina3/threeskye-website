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
			<Row onClick={() => changeRoute(productPath)}>
				<Col item xs="12" sm="4">
					<img src={imgPath} alt="Product graphic" className="pb-image" />
				</Col>
				<Col item xs="12" sm="8">
					<h3>{header}</h3>
					<p>{children}</p>
					<TextButton>{textButton ? textButton : "More info"}</TextButton>
				</Col>
			</Row>
		</ScrollFadeSection>
	);
}

export default ProductBlock;