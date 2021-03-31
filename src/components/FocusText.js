import React, { Component } from 'react';
import "./FocusText.scss";

class FocusText extends Component {
	render() { 
		return (
			<span className="focus-text">{this.props.children}</span>
		 );
	}
}
 
export default FocusText;