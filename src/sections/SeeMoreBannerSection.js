import React from 'react';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';

const SeeMoreBannerSection = ({logos, bg}) => {
	return (
		<FadeInSection>
			<TsContainer bg={bg} style={{paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden"}}>
				<img src="images/2023-images/misc/g3.png" alt="triangle graphic" style={{ position: "absolute", left: -40, bottom: -60}} width={250} />
				<img src="images/2023-images/misc/g4.png" alt="triangle graphic" style={{ position: "absolute", right: -140, top: 0}} width={305} />
				<Row>
					<Col xs="12" className="px-0">
						<Col xs="12">
							<FadeInSection delay="1" className="text-center">
								<h3 className="mb-4">Want to see more?</h3>
							</FadeInSection>
						</Col>
						<Col xs="12">
							<FadeInSection className="text-center">
								<Button routeChangePath={"/get-in-touch"}>
									Book a Demo
								</Button>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</TsContainer>
		</FadeInSection>
	);
}

export default SeeMoreBannerSection;