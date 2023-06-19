import { Button as MuiButton } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import { useHistory } from 'react-router';
import "./Button.scss";
import "./ArrowButton.scss";

function ArrowButton(props) {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	const { variant, buttonColour, children, bgColour, onClick, routeChangePath, className, loading, disabled } = props;

	return (
		<MuiButton
			// {...props}
			onClick={routeChangePath ? () => changeRoute(routeChangePath) : onClick}
			className={`ts-button ts-arrow-button${className ? " " + className : ""}${buttonColour ? " colour-" + buttonColour : ""}${bgColour ? " bg-colour-" + bgColour : ""}`}
			variant={variant && variant}
			disabled={disabled}
		>
			{loading && (
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
			{children}
			<ArrowRightAlt className="button-arrow" />
		</MuiButton>
	);
}

export default ArrowButton;