import React, { Component } from 'react';
import "./FocusParagraph.scss";

class FocusParagraph extends Component {
	render() { 
		return (
			<div className="focus-paragraph">{this.props.children}</div>
		 );
	}
}
 
export default FocusParagraph;