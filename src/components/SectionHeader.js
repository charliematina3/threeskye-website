import React, { Component } from 'react';
import UnderlinedText from './UnderlinedText';
import "./SectionHeader.scss";

class SectionHeader extends Component {
	render() {
		const { noMargin } = this.props;
		return (
			<div className="section-header" style={{margin: noMargin ? 0 : "" }}><UnderlinedText>{this.props.children}</UnderlinedText></div>
		 );
	}
}

export default SectionHeader;