import React from 'react';
import FadeInSection from '../../components/FadeInSection';
import FeatureSection from '../FeatureSection';
import TsContainer from '../../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFeatureCard from '../../components/desktop/ProductFeatureCard';
import { ResearchContent } from './ResearchContent';
import ScrollFadeSection from '../../components/ScrollFadeSection';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProductFeatureBlock from '../../components/ProductFeatureBlock';
import SectionPill from '../../components/SectionPill';
import FlexWrapper from '../../components/FlexWrapper';
import { Link } from 'react-scroll';

function ResearchFeatures() {
	return (
		<>
			<TsContainer className="pt-5">
				<FlexWrapper alignItems="center" justifyContent="center" flexWrap="wrap" className="pill-wrapper">
					<Link to="core" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="core" label="Core Features" />
					</Link>
					<Link to="ai" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="ai" label="Artificial Intelligence" />
					</Link>
					<Link to="research" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="research" label="Research Design" />
					</Link>
					<Link to="integrations" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="integrations" label="Integrations" />
					</Link>
				</FlexWrapper>
			</TsContainer>
			{ResearchContent &&
				ResearchContent.map((content, idx) => {
					return (
						<FadeInSection key={idx} id={content.ref}>
							<FeatureSection heroImage={content.image} className="homepage-hero" text={content.description}>
								{content.name}
							</FeatureSection>
							{/* tiles */}
							<div className="d-none d-lg-block" style={{ marginTop: -120 }}>
								<TsContainer>
									<Row className="justify-content-center">
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

export default ResearchFeatures;