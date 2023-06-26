import React, { useRef } from 'react';
import FadeInSection from '../../components/FadeInSection';
import FeatureSection from '../FeatureSection';
import TsContainer from '../../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFeatureCard from '../../components/desktop/ProductFeatureCard';
import { WealthContent } from './WealthContent';
import ScrollFadeSection from '../../components/ScrollFadeSection';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProductFeatureBlock from '../../components/ProductFeatureBlock';
import FlexWrapper from '../../components/FlexWrapper';
import SectionPill from '../../components/SectionPill';
import { Link } from 'react-scroll';

function WealthFeatures() {
	const componentRef = useRef();

	return (
		<>
			<TsContainer className="pt-5">
				<FlexWrapper alignItems="center" justifyContent="center" flexWrap="wrap" className="pill-wrapper">
					<Link to="core" smooth={true} duration={1000} offset={-100}>
						<SectionPill label="Core Features" />
					</Link>
					<Link to="aml" smooth={true} duration={1000} offset={-100}>
						<SectionPill label="AML" />
					</Link>
					<Link to="flex" smooth={true} duration={1000} offset={-100}>
						<SectionPill label="Flexible Customisation" />
					</Link>
					<Link to="ai" smooth={true} duration={1000} offset={-100}>
						<SectionPill label="Artificial Intelligence" />
					</Link>
					<Link to="integrations" smooth={true} duration={1000} offset={-100}>
						<SectionPill label="Integrations" />
					</Link>
				</FlexWrapper>
			</TsContainer>
			{WealthContent &&
				WealthContent.map((content, idx) => {
					return (
						<FadeInSection key={idx} forwardedRef={componentRef} ref={componentRef} id={content.ref}>
							<FeatureSection heroImage={content.image} className="homepage-hero" text={content.description}>
								{content.name}
							</FeatureSection>
							{/* tiles */}
							<div className="d-none d-lg-block" style={{ marginTop: -120 }}>
								<TsContainer>
									<Row>
										{content.tiles &&
											content.tiles.map((tile, idx) => (
												<Col lg="4" style={{ marginBottom: 38 }} key={idx}>
													<ScrollFadeSection style={{ height: "100%" }}>
														<ProductFeatureCard name={tile.name} img={tile.image} info={tile.description} />
													</ScrollFadeSection>
												</Col>
											))}
										{content.name === "Core Features" && (
											<Col lg="4" style={{ marginBottom: 38 }} key={idx}>
												<ScrollFadeSection style={{ height: "100%" }}>
													<Card className="product-card more-button-card">
														<Button routeChangePath="/get-in-touch">Want To Know More</Button>
													</Card>
												</ScrollFadeSection>
											</Col>
										)}
									</Row>
								</TsContainer>
							</div>
							<div className="d-lg-none">
								<div>
									{content.tiles &&
										content.tiles.map((tile, idx) => (
											<ProductFeatureBlock
												// bg={idx % 2 !== 0 ? "blue" : "white"}
												imgPath={tile.image}
												header={tile.name}
												text={tile.description}
											/>
										))}
								</div>
							</div>
						</FadeInSection>
					);
				})}
		</>
	);
}

export default WealthFeatures;