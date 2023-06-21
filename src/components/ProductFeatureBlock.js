import React, { Component } from 'react';
import TextButton from './TextButton';
import "./ProductFeatureBlock.scss";
import TsContainer from './TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollFadeSection from './ScrollFadeSection';
import PartnerToken from './PartnerToken';

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
		const { imgPath, header, text, expandedText, bg, smallText, partner, title } = this.props;
		const { expanded, width } = this.state;

		return (
			<TsContainer bg={bg} className="pfb-container">
				<ScrollFadeSection>
					<Row className="justify-content-center justify-content-lg-center">
						<Col xs="7" sm="6" md="4" lg="3" className="d-flex justify-content-center align-items-md-baseline">
							<img src={imgPath} alt="Product graphic" className="pb-image" width="80%" height="auto" />
						</Col>
						<Col xs="12" md="6" lg="9">
							<h3 className="d-flex align-items-center mb-2" style={{gap: 8}}>
								{header}{" "}
								{partner && (
									<>
										<span>•</span>
										<PartnerToken />
									</>
								)}
							</h3>
							{title && <p className='mb-3'>{title}</p>}
							{width > 575 ? !expandedText ? <p>{text}</p> : <p>{expandedText}</p> : expandedText && expanded ? <p>{expandedText}</p> : text && <p>{text}</p>}
							{width < 575 && expandedText && (
								<TextButton onClick={() => this.setState({ expanded: !this.state.expanded })}>{expanded ? "Show Less" : "More Info"}</TextButton>
							)}
							{smallText && <p className="small-text">{smallText}</p>}
						</Col>
					</Row>
				</ScrollFadeSection>
			</TsContainer>
		);
	}
}

export default ProductFeatureBlock;