import React, { Component } from 'react';
import "./FocusParagraph.scss";

class FocusParagraph extends Component {
	render() { 
		return (
			<div className="focus-paragraph text-center"><p>{this.props.children}</p></div>
		 );
	}
}
 
export default FocusParagraph;