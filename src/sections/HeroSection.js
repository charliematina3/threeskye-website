import React from 'react';
import Button from '../components/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import "./HeroSection.scss";

function HeroSection(props) {

		const { header, text, buttonLink, buttonText, heroImage, id, children, customScroll, buttonDisabled, heroImageXs, className, style, centred, mainHero, noButton, productPage } = props;
		const [scrollValue, setScroll] = React.useState(false);
	
		React.useEffect(() => {
			window.addEventListener("scroll", () => {
				setScroll(window.scrollY);
			});
		}, []);

		return (
			<TsContainer bg="white" className={className} style={style} id={id}>
				<Row
					className={`justify-content-start justify-content-md-center justify-content-lg-between ${centred ? "flex-column-reverse centred-hero" : "flex-sm-row-reverse"}${productPage ? " product-page-hero" : ""}`}
				>
					{heroImage && (
						<Col
							xs={centred ? 12 : heroImageXs ? heroImageXs : 8}
							sm={centred ? "12" : "5"}
							md={centred ? "12" : "4"}
							lg={centred ? "12" : "4"}
							xl={{ col: 4 }}
							className={centred ? "mt-4 justify-content-center" : ""}
						>
							<FadeInSection className="centred-hero-image position" fadeUp>
								<img width={mainHero ? 100 - scrollValue * 0.07 + "%" : customScroll ? customScroll : "100%" } height="auto" alt="hero" src={heroImage} />
							</FadeInSection>
						</Col>
					)}
					<Col xs="12" sm={centred ? "12" : "7"} xl={centred ? "12" : "8"} className="px-0">
						<Col xs="12" className={centred ? "text-center" : ""}>
							<FadeInSection delay="1">
								<h1>{header || children}</h1>
							</FadeInSection>
							<FadeInSection>{text && <p className="sub-header">{text}</p>}</FadeInSection>
						</Col>
						{!noButton && <Col xs="12" sm={centred ? "12" : "6"} lg={centred ? "12" : "5"} className={`mt-4 ${centred ? "text-center" : ""}`}>
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