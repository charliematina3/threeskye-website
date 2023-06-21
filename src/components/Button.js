import { Button as MuiButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import "./Button.scss";

function Button(props) {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	const { variant, buttonColour, children, bgColour, onClick, routeChangePath, className, loading, disabled, style } = props;

	return (
		<MuiButton
			// {...props}
			onClick={routeChangePath ? () => changeRoute(routeChangePath) : onClick}
			className={`ts-button${className ? " " + className : ""}${buttonColour ? " colour-" + buttonColour : ""}${bgColour ? " bg-colour-" + bgColour : ""}`}
			variant={variant && variant}
			disabled={disabled}
			style={style}
		>
			{loading && (
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
			{children}
		</MuiButton>
	);
}

export default Button;