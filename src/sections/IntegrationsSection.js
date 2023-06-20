import React from 'react';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../components/Button';
import IntegrationsBlock from '../components/IntegrationsBlock';

const IntegrationsSection = ({logos}) => {
	return (
		<FadeInSection>
			<TsContainer>
				<Row>
					<Col xs="12" className="px-0">
						<Col xs="12">
							<FadeInSection delay="1" className="text-center">
								<h3>Integrations</h3>
							</FadeInSection>
							<FadeInSection className="text-center"><p className="sub-header">Harness the strength of connectivity across all our platforms, with integrations that unite data, insights, and strategy, turbocharging your financial journey</p></FadeInSection>
						</Col>
						<Col xs="12" className="my-5 d-flex justify-content-center">
							{/* Block */}
							<IntegrationsBlock logos={logos} />
						</Col>
						<Col xs="12">
							<FadeInSection className="text-center">
								<Button routeChangePath={"/integrations"}>
									Learn More
								</Button>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</TsContainer>
		</FadeInSection>
	);
}

export default IntegrationsSection;