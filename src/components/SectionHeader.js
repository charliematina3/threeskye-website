import React, { Component } from 'react';
import UnderlinedText from './UnderlinedText';
import "./SectionHeader.scss";

class SectionHeader extends Component {
	render() {
		const { noMargin } = this.props;
		return (
			<h2 className="section-header" style={{margin: noMargin ? 0 : "" }}><UnderlinedText>{this.props.children}</UnderlinedText></h2>
		 );
	}
}

export default SectionHeader;