import React from 'react';
import { useHistory } from 'react-router';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import ArrowButton from '../components/ArrowButton';
import FlexWrapper from '../components/FlexWrapper';
import { Col, Row } from 'react-bootstrap';

const HomepageResearch = (props) => {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	return (
		<TsContainer homepage>
			<FlexWrapper gap={32} alignItems="center" className="d-none d-md-flex">
				<img
					onClick={() => changeRoute("/research-platform")}
					className="hero-image-left cursor-pointer"
					src="/images/2023-images/products/research-2023.png"
					alt="crm"
					width="40%"
				/>
				<FlexWrapper flexDirection="column" width="60%">
					<FadeInSection delay="1" className="text-center">
						<h2>3SKYE Research Platform</h2>
					</FadeInSection>
					<FadeInSection className="text-center">
						<p className="sub-header">Institutional and retail equity research the easy way</p>
					</FadeInSection>
					<FadeInSection className="text-center">
						<ArrowButton routeChangePath={"/research-platform"}>Learn More</ArrowButton>
					</FadeInSection>
				</FlexWrapper>
			</FlexWrapper>
			<div className="d-block d-md-none">
				<Row className="mb-3">
					<Col xs="12" className="px-0">
						<FlexWrapper justifyContent="center">
							<img
								onClick={() => changeRoute("/research-platform")}
								className="cursor-pointer"
								src="/images/2023-images/products/research-grouped.png"
								alt="crm"
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
								<h2>3SKYE Research Platform</h2>
							</FadeInSection>
							<FadeInSection className="text-center">
								<p className="sub-header">Institutional and retail equity research the easy way</p>
							</FadeInSection>
						</Col>
						<Col xs="12">
							<FadeInSection className="text-center">
								<ArrowButton routeChangePath={"/wealth-platform"}>Learn More</ArrowButton>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</div>
		</TsContainer>
	);
}

export default HomepageResearch;