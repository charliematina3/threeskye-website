import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import "./HeroSection.scss";
import ArrowButton from '../components/ArrowButton';

function ProductHeroSection(props) {

		const { header, text, buttonLink, buttonText, heroImage, id, children, customScroll, buttonDisabled, className, mainHero, images } = props;
		const [scrollValue, setScroll] = React.useState(false);
	
		React.useEffect(() => {
			window.addEventListener("scroll", () => {
				setScroll(window.scrollY);
			});
		}, []);

		return (
			<TsContainer bg="white" className={className} style={{ position: "relative" }} id={id}>
				{images && images}
				<Row
					className="justify-content-start justify-content-md-center justify-content-lg-between flex-column-reverse centred-hero product-page-hero"
				>
					{heroImage && (
						<Col
							xs={12}
							sm={12}
							md={12}
							lg={12}
							xl={{ col: 4 }}
							className="mt-4 justify-content-center"
						>
							<FadeInSection className="centred-hero-image position" fadeUp>
								<img width={mainHero ? 100 - scrollValue * 0.07 + "%" : customScroll ? customScroll : "100%" } height="auto" alt="hero" src={heroImage} />
							</FadeInSection>
						</Col>
					)}
					<Col xs="12" sm="12" xl="12" className="px-0">
						<Col xs="12" className="text-center">
							<FadeInSection delay="1">
								<h1>{header || children}</h1>
							</FadeInSection>
							<FadeInSection>{text && <p className="sub-header">{text}</p>}</FadeInSection>
						</Col>
						<Col xs="12" sm="12" lg="12" className="mt-4 text-center">
							<FadeInSection>
								<ArrowButton disabled={buttonDisabled} routeChangePath={buttonLink ? buttonLink : "/get-in-touch"}>
									{buttonText ? buttonText : "Let's Chat"}
								</ArrowButton>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</TsContainer>
		);
}

export default ProductHeroSection;