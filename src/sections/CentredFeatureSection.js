import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import "./HeroSection.scss";
import "./CentredFeatureSection.scss";

function CentredFeatureSection(props) {

		const { header, text, heroImage, id, children, className, productPage } = props;
		const [, setScroll] = React.useState(false);
	
		React.useEffect(() => {
			window.addEventListener("scroll", () => {
				setScroll(window.scrollY);
			});
		}, []);

		return (
			<TsContainer bg="blue" className={`centred-feature-section${className ? ' ' + className : ''}`} id={id}>
				<Row
					className={`justify-content-start justify-content-md-center justify-content-lg-between align-items-center flex-column-reverse centred-hero${productPage ? " product-page-hero" : ""}`}
				>
					{heroImage && (
						<Col
							xs="8"
							lg="6"
							xl="12"
							className="justify-content-center"
						>
							<FadeInSection className="centred-hero-image position" fadeUp>
								<img width="100%" height="auto" alt="hero" src={heroImage} />
							</FadeInSection>
						</Col>
					)}
					<Col xs="12" className={`mt-lg-0 px-0${heroImage ? 'mt-5' : ''}`}>
						<Col xs="12" className="text-center">
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

export default CentredFeatureSection;