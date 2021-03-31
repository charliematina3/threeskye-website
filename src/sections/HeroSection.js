import { Component } from 'react';
import Button from '../components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';

class HeroSection extends Component {
	render() {
		const { header, text, buttonLink, buttonText, heroImage, children, buttonDisabled, heroImageXs } = this.props;

		return (
			<TsContainer bg="blue">
				<Row className="justify-content-center flex-sm-row-reverse">
					{heroImage && (
						<Col xs={heroImageXs ? heroImageXs : 8} sm="5">
							<FadeInSection fadeUp>
								<img style={{ width: "100%" }} alt="hero" src={heroImage} />
							</FadeInSection>
						</Col>
					)}
					<Col xs="12" sm="7" className="px-0">
						<Col item xs="12">
							<FadeInSection fadeUp delay="1">
								<h1>{header || children}</h1>
							</FadeInSection>
							<FadeInSection fadeUp delay="2">
								{text && <p>{text}</p>}
							</FadeInSection>
						</Col>
						<Col item xs="12" sm="8">
							<FadeInSection fadeUp delay="3">
								<Button disabled={buttonDisabled} style={{ marginTop: 20 }} routeChangePath={buttonLink ? buttonLink : "/get-in-touch"}>
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