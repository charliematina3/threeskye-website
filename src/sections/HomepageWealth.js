import React from 'react';
import { useHistory } from 'react-router';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowButton from '../components/ArrowButton';

const HomepageWealth = (props) => {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	return (
		<FadeInSection>
			<TsContainer homepage>
				<Row className="mb-3 mb-md-5">
					<Col xs="12" className="px-2">
						<img onClick={() => changeRoute("/wealth-platform")} src="/images/2023-images/products/crm-grouped.png" alt="crm" width="100%" className="cursor-pointer"/>
					</Col>
				</Row>
				<Row>
					<Col xs="12" className="px-0">
						<Col xs="12">
							<FadeInSection delay="1" className="text-center">
								<h2>3SKYE Wealth Platform</h2>
							</FadeInSection>
							<FadeInSection className="text-center"><p className="sub-header">A Single Pane of Glass for Advisers and Investors</p></FadeInSection>
						</Col>
						<Col xs="12">
							<FadeInSection className="text-center">
								<ArrowButton routeChangePath={"/wealth-platform"}>
									Learn More
								</ArrowButton>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</TsContainer>
		</FadeInSection>
	);
}

export default HomepageWealth;