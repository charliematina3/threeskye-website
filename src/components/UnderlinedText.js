import React, { Component } from 'react';
import "./UnderlinedText.scss";

class UnderlinedText extends Component {
	render() { 
		return (
			<span className="underlined-text">{this.props.children}</span>
		 );
	}
}
 
export default UnderlinedText;