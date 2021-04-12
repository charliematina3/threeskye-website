import { ArrowRightAlt } from '@material-ui/icons';
import { useHistory } from 'react-router';
import "./ProductMenuItem.scss";

function ProductMenuItem(props) {

	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	const { name, img, info, path } = props;

	return (
		<div className="product-menu-item" onClick={() => changeRoute(path)}>
			<div className="pmi-img">
				<img src={img} alt="product" />
			</div>
			<div className="pmi-details">
				<div className="pmi-name">{name} <ArrowRightAlt className="pmi-arrow" /></div>
				<div className="pmi-info">{info}</div>
			</div>
		</div>
	);

}

export default ProductMenuItem;