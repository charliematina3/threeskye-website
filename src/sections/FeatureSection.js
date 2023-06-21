import React from 'react';
import Button from '../components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import "./HeroSection.scss";

function FeatureSection(props) {

		const { header, text, buttonLink, buttonText, heroImage, id, children, customScroll, buttonDisabled, heroImageXs, className, style, centred, mainHero, noButton, productPage } = props;
		const [scrollValue, setScroll] = React.useState(false);
	
		React.useEffect(() => {
			window.addEventListener("scroll", () => {
				setScroll(window.scrollY);
			});
		}, []);

		return (
			<TsContainer bg="blue" className={className} style={style} id={id}>
				<Row
					className={`justify-content-start justify-content-md-center justify-content-lg-between align-items-center ${centred ? "flex-column-reverse centred-hero" : "flex-sm-row-reverse"}${productPage ? " product-page-hero" : ""}`}
				>
					{heroImage && (
						<Col
							xs="8"
							lg="6"
							xl="6"
							className="mt-4 justify-content-center"
						>
							<FadeInSection className="centred-hero-image position" fadeUp>
								<img width="100%" height="auto" alt="hero" src={heroImage} />
							</FadeInSection>
						</Col>
					)}
					<Col xs="12" lg="6" xl="6" className="mt-5 mt-lg-0 px-0">
						<Col xs="12" className="text-center text-lg-left">
							<FadeInSection delay="1">
								<h2>{header || children}</h2>
							</FadeInSection>
							<FadeInSection>{text && <p className="sub-header">{text}</p>}</FadeInSection>
						</Col>
					</Col>
				</Row>
			</TsContainer>
		);
}

export default FeatureSection;