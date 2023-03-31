import React, { Component } from 'react';
import UnderlinedText from './UnderlinedText';
import "./SectionHeader.scss";

class SectionHeader extends Component {
	render() {
		const { noMargin, h1 } = this.props;
		const HeadingTag = h1 ? "h1" : "h2";
		return (
			<HeadingTag className="section-header" style={{margin: noMargin ? 0 : "" }}>
				<UnderlinedText>{this.props.children}</UnderlinedText>
			</HeadingTag>
		);
	}
}

export default SectionHeader;
