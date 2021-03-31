import React, { Component } from 'react';
import TextButton from './TextButton';
import "./ProductFeatureBlock.scss";
import TsContainer from './TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
			<TsContainer bg={bg} innerClassName="pfb-container">
				<Row className="justify-content-center">
					<Col xs="12" sm="6" className="d-flex justify-content-center">
						<img src={imgPath} alt="Product graphic" className="pb-image" />
					</Col>
					<Col xs="12" style={{ marginTop: 20 }}>
						<h3>{header}</h3>
						{width > 575 ? !expandedText ? <p>{text}</p> : <p>{expandedText}</p> : expandedText && expanded ? <p>{expandedText}</p> : text && <p>{text}</p>}
						{width < 575 && expandedText && <TextButton onClick={() => this.setState({ expanded: !this.state.expanded })}>{expanded ? "Show Less" : "More Info"}</TextButton>}
						{smallText && <p className="small-text">{smallText}</p>}
					</Col>
				</Row>
			</TsContainer>
		);
	}
}

export default ProductFeatureBlock;