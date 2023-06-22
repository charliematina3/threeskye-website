import React from 'react';
import Button from '../components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import "./HeroSection.scss";

function HeroSection(props) {

		const { header, text, buttonLink, buttonText, heroImage, id, children, customScroll, buttonDisabled, heroImageXs, className, style, centred, mainHero, noButton, productPage, fullWidth, paddingLarge ,centredButton } = props;
		const [scrollValue, setScroll] = React.useState(false);
	
		React.useEffect(() => {
			window.addEventListener("scroll", () => {
				setScroll(window.scrollY);
			});
		}, []);

		return (
			<TsContainer bg="white" className={className} style={style} id={id} paddingLarge={paddingLarge}>
				<Row
					className={`justify-content-center justify-content-lg-between ${centred ? "flex-column-reverse centred-hero" : "flex-sm-row-reverse"}${productPage ? " product-page-hero" : ""}`}
				>
					{heroImage && (
						<Col
							xs={centred ? 12 : heroImageXs ? heroImageXs : 8}
							sm={centred ? "12" : "8"}
							md={centred ? "12" : "6"}
							lg={centred ? "12" : "6"}
							xl={{ col: 6 }}
							className={centred ? "mt-4 justify-content-center" : ""}
						>
							<FadeInSection className="centred-hero-image position" fadeUp>
								<img width={mainHero ? 100 - scrollValue * 0.07 + "%" : customScroll ? customScroll : "100%" } height="auto" alt="hero" src={heroImage} />
							</FadeInSection>
						</Col>
					)}
					<Col xs="12" sm="12" lg={fullWidth || centred ? "12" : "6"} xl={fullWidth || centred ? "12" : "6"} className="px-0 mt-4 mt-lg-0">
						<Col xs="12" className={centred ? "text-center" : "text-center text-lg-left"}>
							<FadeInSection delay="1">
								<h1>{header || children}</h1>
							</FadeInSection>
							<FadeInSection>{text && <p className="sub-header">{text}</p>}</FadeInSection>
						</Col>
						{!noButton && <Col xs="12" sm={(centred || centredButton) ? "12" : "6"} lg={centred ? "12" : "6"} className={`mt-4 text-lg-left text-center ${centred ? "text-center" : ""}`}>
							<FadeInSection>
								<Button disabled={buttonDisabled} routeChangePath={buttonLink ? buttonLink : "/get-in-touch"}>
									{buttonText ? buttonText : "Let's Chat"}
								</Button>
							</FadeInSection>
						</Col>}
					</Col>
				</Row>
			</TsContainer>
		);
}

export default HeroSection;