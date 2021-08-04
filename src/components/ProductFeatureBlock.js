import React, { Component } from 'react';
import TextButton from './TextButton';
import "./ProductFeatureBlock.scss";
import TsContainer from './TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollFadeSection from './ScrollFadeSection';

class ProductFeatureBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			width: 0,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth });
	}

	render() {
		const { imgPath, header, text, expandedText, bg, smallText } = this.props;
		const { expanded, width } = this.state;

		return (
			<TsContainer bg={bg} className="pfb-container">
				<ScrollFadeSection>
					<Row className="justify-content-center justify-content-lg-center">
						<Col xs="9" sm="6" md="4" lg="3" className="d-flex justify-content-center align-items-md-baseline">
							<img src={imgPath} alt="Product graphic" className="pb-image" />
						</Col>
						<Col xs="12" md="6" lg="9" style={{ marginTop: 20 }}>
							<h3>{header}</h3>
							{width > 575 ? !expandedText ? <p>{text}</p> : <p>{expandedText}</p> : expandedText && expanded ? <p>{expandedText}</p> : text && <p>{text}</p>}
							{width < 575 && expandedText && <TextButton onClick={() => this.setState({ expanded: !this.state.expanded })}>{expanded ? "Show Less" : "More Info"}</TextButton>}
							{smallText && <p className="small-text">{smallText}</p>}
						</Col>
					</Row>
				</ScrollFadeSection>
			</TsContainer>
		);
	}
}

export default ProductFeatureBlock;