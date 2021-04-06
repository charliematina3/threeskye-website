import { useHistory } from 'react-router';
import "./ProductMenuItem.scss";

function ProductMenuItem(props) {

	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	const { name, img, info, path } = props;

	return (
		<div class="product-menu-item" onClick={() => changeRoute(path)}>
			<div class="pmi-img">
				<img src={img} alt="product" />
			</div>
			<div className="pmi-details">
				<div class="pmi-name">{name}</div>
				<div class="pmi-info">{info}</div>
			</div>
		</div>
	);

}

export default ProductMenuItem;