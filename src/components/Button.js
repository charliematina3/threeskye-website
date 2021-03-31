import { Button as MuiButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import "./Button.scss";

function Button(props) {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	const { variant, color, children, bgColour, onClick, routeChangePath } = props;

	return (
		<MuiButton
			onClick={routeChangePath ? () => changeRoute(routeChangePath) : onClick}
			className={`ts-button${color ? " color-" + color : ""}${bgColour ? " bg-color-" + bgColour : ""}`}
			variant={variant && variant}
			{...props}
		>
			{children}
		</MuiButton>
	);
}

export default Button;