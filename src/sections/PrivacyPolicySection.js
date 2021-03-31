import React, { Component } from 'react'
import TsContainer from '../components/TsContainer';
import ScrollFadeSection from '../components/ScrollFadeSection';
import "./PrivacyPolicySection.scss";

class PrivacyPolicyTextSection extends Component {
	render() {
		const { header, content } = this.props;
		return (
			<div class="privacy-policy-text-section">
				<h5>{header}</h5>
				<p>{content}</p>
			</div>
		);
	}
}

export { PrivacyPolicyTextSection };

class PrivacyPolicySection extends Component {
	render() {
		const { children, header, noDivider, style } = this.props;
		return (
			<ScrollFadeSection>
				<TsContainer className="pp-section-container" style={style}>
					{header && <h4>{header}</h4>}
					{children}
					{!noDivider && <hr/>}
				</TsContainer>
			</ScrollFadeSection>
		);
	}
}

export default PrivacyPolicySection;