import { Component } from 'react';
import Button from '../components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';

class HeroSection extends Component {
	render() {
		const { header, text, buttonLink, buttonText, heroImage, children, buttonDisabled, heroImageXs, className, style } = this.props;

		return (
			<TsContainer bg="blue" className={className} style={style}>
				<Row className="justify-content-start justify-content-md-center justify-content-lg-between flex-sm-row-reverse">
					{heroImage && (
						<Col xs={heroImageXs ? heroImageXs : 8} sm="5" md="4" lg="4" xl={{col: 4}}>
							<FadeInSection fadeUp>
								<img style={{ width: "100%" }} alt="hero" src={heroImage} />
							</FadeInSection>
						</Col>
					)}
					<Col xs="12" sm="7" xl="8" className="px-0">
						<Col xs="12">
							<FadeInSection fadeUp delay="1">
								<h1>{header || children}</h1>
							</FadeInSection>
							<FadeInSection fadeUp delay="2">
								{text && <p className="sub-header">{text}</p>}
							</FadeInSection>
						</Col>
						<Col xs="12" sm="6" lg="5" className="mt-4">
							<FadeInSection fadeUp delay="3">
								<Button disabled={buttonDisabled} routeChangePath={buttonLink ? buttonLink : "/get-in-touch"}>
									{buttonText ? buttonText : "Get in touch"}
								</Button>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</TsContainer>
		);
	}
}

export default HeroSection;