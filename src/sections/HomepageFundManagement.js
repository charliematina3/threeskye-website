import React from 'react';
import { useHistory } from 'react-router';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import ArrowButton from '../components/ArrowButton';
import FlexWrapper from '../components/FlexWrapper';
import { Col, Row } from 'react-bootstrap';

const HomepageFundManagement = (props) => {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	return (
		<TsContainer homepage>
			<FlexWrapper gap={32} alignItems="center" className="d-none d-md-flex">
				<FlexWrapper flexDirection="column" width="60%">
					<FadeInSection delay="1" className="text-center">
						<h2>3SKYE Funds Management</h2>
					</FadeInSection>
					<FadeInSection className="text-center">
						<p className="sub-header">Automate all your Fund Documentation. Simple.</p>
					</FadeInSection>
					<FadeInSection className="text-center">
						<ArrowButton routeChangePath={"/fund-management"}>Learn More</ArrowButton>
					</FadeInSection>
				</FlexWrapper>
				<img
					onClick={() => changeRoute("/fund-management")}
					className="hero-image-right cursor-pointer"
					src="/images/funds/fund-hero.png"
					alt="funds"
					width="50%"
				/>
			</FlexWrapper>
			<div className="d-block d-md-none">
				<Row className="mb-3">
					<Col xs="12" className="px-0">
						<FlexWrapper justifyContent="center">
							<img
								onClick={() => changeRoute("/fund-management")}
								className="cursor-pointer"
								src="/images/funds/fund-hero.png"
								alt="funds"
								width="80%"
								style={{ margin: "0 auto" }}
							/>
						</FlexWrapper>
					</Col>
				</Row>
				<Row>
					<Col xs="12" className="px-0">
						<Col xs="12">
							<FadeInSection delay="1" className="text-center">
								<h2>3SKYE Funds Management</h2>
							</FadeInSection>
							<FadeInSection className="text-center">
								<p className="sub-header">Automate all your Fund Documentation. Simple.</p>
							</FadeInSection>
						</Col>
						<Col xs="12">
							<FadeInSection className="text-center">
								<ArrowButton routeChangePath={"/fund-management"}>Learn More</ArrowButton>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</div>
		</TsContainer>
	);
}

export default HomepageFundManagement;