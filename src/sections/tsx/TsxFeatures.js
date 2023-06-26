import React, { useState, useEffect } from "react";
import FadeInSection from "../../components/FadeInSection";
import FeatureSection from "../FeatureSection";
import TsContainer from "../../components/TsContainer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFeatureCard from "../../components/desktop/ProductFeatureCard";
import { TsxContent } from "./TsxContent";
import ScrollFadeSection from "../../components/ScrollFadeSection";
import Card from "../../components/Card";
import Button from "../../components/Button";
import ProductFeatureBlock from "../../components/ProductFeatureBlock";
import FlexWrapper from "../../components/FlexWrapper";
import SectionPill from "../../components/SectionPill";
import { Link } from "react-scroll";

function TsxFeatures() {
	const [width, setWidth] = useState(0);

	const updateWindowDimensions = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		updateWindowDimensions();
		window.addEventListener("resize", updateWindowDimensions);

		return () => {
			window.removeEventListener("resize", updateWindowDimensions);
		};
	}, []);

	return (
		<>
			<TsContainer className="pt-5">
				<FlexWrapper gap={20} alignItems="center" justifyContent="center" flexWrap="wrap">
					<Link to="consolidated" smooth={true} duration={1000} offset={-100}>
						<SectionPill label="Consolidated View" />
					</Link>
					<Link to="managers" smooth={true} duration={1000} offset={-100}>
						<SectionPill label="Managers" />
					</Link>
				</FlexWrapper>
			</TsContainer>
			{TsxContent &&
				TsxContent.map((content, idx) => {
					return (
						<FadeInSection key={idx} id={content.ref}>
							<FeatureSection bg={width < 992 && idx % 2 === 0 ? "white" : "blue"} heroImage={content.image} className="homepage-hero" text={content.description}>
								{content.name}
							</FeatureSection>
							{/* tiles */}
							{content.tiles && (
								<>
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
												content.tiles.map((tile, id) => (
													<ProductFeatureBlock
														key={id}
														imgPath={tile.image}
														header={tile.name}
														expandedText={tile.description}
														bg={width < 992 && idx % 2 === 0 ? "white" : "blue"}
													/>
												))}
										</div>
									</div>
								</>
							)}
						</FadeInSection>
					);
				})}
		</>
	);
}

export default TsxFeatures;
