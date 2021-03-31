import React, { Component } from 'react';
import "./ExpandableTextSection.scss";

class ExpandableTextSection extends Component {
	state = { expanded: false };

	render() {
		const { defaultContent, expandButtonText, hideButton, expandContent, extension } = this.props;
		const { expanded } = this.state;

		return (
			<div className={`expandable-text-section${this.state.expanded ? " expanded" : ""}`}>
				{!expanded ? defaultContent : expanded && extension && defaultContent}
				{expanded && expandContent}
				{!hideButton && (	
					<div className="expandable-more-info-button" onClick={() => this.setState({ expanded: !this.state.expanded })}>
						{expanded ? "Show Less" : expandButtonText ? expandButtonText : "More Info"}
					</div>
				)}
			</div>
		);
	}
}

export default ExpandableTextSection;