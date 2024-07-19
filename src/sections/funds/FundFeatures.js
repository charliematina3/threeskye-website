import React, {useState, useEffect} from 'react';
import FadeInSection from '../../components/FadeInSection';
import FeatureSection from '../FeatureSection';
import TsContainer from '../../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductFeatureCard from '../../components/desktop/ProductFeatureCard';
import ScrollFadeSection from '../../components/ScrollFadeSection';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProductFeatureBlock from '../../components/ProductFeatureBlock';
import SectionPill from '../../components/SectionPill';
import FlexWrapper from '../../components/FlexWrapper';
import { Link } from 'react-scroll';
import { FundContent } from './FundContent';

function FundFeatures() {
	const [width, setWidth] = useState(0);

	const updateWindowDimensions = () => {
	  setWidth(window.innerWidth);
	};
  
	useEffect(() => {
	  updateWindowDimensions();
	  window.addEventListener('resize', updateWindowDimensions);
  
	  return () => {
		window.removeEventListener('resize', updateWindowDimensions);
	  };
	}, []);

	return (
		<>
			<TsContainer className="pt-5">
				<FlexWrapper alignItems="center" justifyContent="center" flexWrap="wrap" className="pill-wrapper">
					<Link to="automate" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="automate" label="Automation" />
					</Link>
					<Link to="publishing" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="publishing" label="Publishing" />
					</Link>
					<Link to="compliance" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="compliance" label="Compliance" />
					</Link>
					<Link to="integrations" smooth={true} duration={1000} offset={-100}>
						<SectionPill sectionRef="integrations" label="Integrations" />
					</Link>
				</FlexWrapper>
			</TsContainer>
			{FundContent &&
				FundContent.map((content, idx) => {
					return (
						<FadeInSection key={idx} id={content.ref}>
							<FeatureSection bg={(width < 992) && (idx % 2 === 0) ? 'white' : 'blue'} heroImage={content.image} text={content.description}>
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
										content.tiles.map((tile, id) => (
											<ProductFeatureBlock
												key={id}
												bg={(width < 992) && (idx % 2 === 0) ? 'white' : 'blue'}
												imgPath={tile.image}
												header={tile.name}
												expandedText={tile.description}
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

export default FundFeatures;