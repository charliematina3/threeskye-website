import { Button as MuiButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import "./Button.scss";

function Button(props) {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	const { variant, buttonColour, children, bgColour, onClick, routeChangePath } = props;

	return (
		<MuiButton
			// {...props}
			onClick={routeChangePath ? () => changeRoute(routeChangePath) : onClick}
			className={`ts-button${buttonColour ? " colour-" + buttonColour : ""}${bgColour ? " bg-colour-" + bgColour : ""}`}
			variant={variant && variant}
		>
			{children}
		</MuiButton>
	);
}

export default Button;