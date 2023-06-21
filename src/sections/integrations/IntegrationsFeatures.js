import React from 'react';
import FadeInSection from '../../components/FadeInSection';
import FeatureSection from '../FeatureSection';
import TsContainer from '../../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFeatureCard from '../../components/desktop/ProductFeatureCard';
import { IntegrationsContent } from './IntegrationsContent';
import ScrollFadeSection from '../../components/ScrollFadeSection';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProductFeatureBlock from '../../components/ProductFeatureBlock';
import CentredFeatureSection from '../CentredFeatureSection';
import LargeProductFeatureCard from '../../components/desktop/LargeProductFeatureCard';

function IntegrationsFeatures() {
	return (
		<>
			{IntegrationsContent &&
				IntegrationsContent.map((content, idx) => {
					return (
						<FadeInSection key={idx}>
							<CentredFeatureSection centred heroImage={content.image} text={content.description}>
								{content.name}
							</CentredFeatureSection>
							{/* tiles */}
							{content.tiles && (
								<>
									<div className="d-none d-lg-block" style={{ marginTop: -160 }}>
										<TsContainer>
											<Row className="justify-content-center">
												{content.tiles &&
													content.tiles.map((tile, idx) => (
														<Col
															lg={
																tile.large
																	? "12"
																	: content.tiles.length == 4
																	? "5"
																	: tile.code === "nzx" || tile.code === "chelmer"
																	? "3"
																	: tile.code === "apex"
																	? "6"
																	: "4"
															}
															style={{ marginBottom: 38 }}
															key={idx}
														>
															<ScrollFadeSection style={{ height: "100%" }}>
																{tile.large ? (
																	<LargeProductFeatureCard
																		name={tile.name}
																		img={tile.image}
																		info={tile.title}
																		partner={tile.partnership}
																		subs={tile.subs}
																		link={tile.link}
																	/>
																) : (
																	<ProductFeatureCard
																		className={`integrations-card${tile.code === "apex" ? " apex-card" : ""}`}
																		name={tile.name}
																		img={tile.image}
																		info={tile.description}
																		partner={tile.partnership}
																		link={tile.link}
																	/>
																)}
															</ScrollFadeSection>
														</Col>
													))}
											</Row>
											{content.name !== "Partnerships" && (
												<Row align="center" className="mt-4">
													<Col xs="12">
														<h4 className="font-weight-medium">Your company missing from this list?</h4>
														<Button>Join the Mix</Button>
													</Col>
												</Row>
											)}
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
														smallText={tile.description}
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

export default IntegrationsFeatures;