import React from 'react';
import { useHistory } from 'react-router';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import ArrowButton from '../components/ArrowButton';
import FlexWrapper from '../components/FlexWrapper';
import { Col, Row } from 'react-bootstrap';

const HomepageTsx = (props) => {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	return (
		<TsContainer homepage>
			<FlexWrapper gap={32} alignItems="center" className="d-none d-md-flex">
				<FlexWrapper flexDirection="column" width="60%">
					<FadeInSection delay="1" className="text-center">
						<h2>3SKYE-X</h2>
					</FadeInSection>
					<FadeInSection className="text-center">
						<p className="sub-header">A Platform for High Net Worth & Family Offices</p>
					</FadeInSection>
					<FadeInSection className="text-center">
						<ArrowButton routeChangePath={"/research-platform"}>Learn More</ArrowButton>
					</FadeInSection>
				</FlexWrapper>
				<img onClick={() => changeRoute("/3skye-x")} className="hero-image-right cursor-pointer" src="/images/2023-images/products/3sx-grouped.png" alt="crm" width="40%" />
			</FlexWrapper>
			<div className="d-block d-md-none">
				<Row className="mb-3">
					<Col xs="12" className="px-0">
						<FlexWrapper justifyContent="center">
							<img
								onClick={() => changeRoute("/3skye-x")}
								className="cursor-pointer"
								src="/images/2023-images/products/3sx-grouped.png"
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
								<h2>3SKYE-X</h2>
							</FadeInSection>
							<FadeInSection className="text-center">
								<p className="sub-header">A Platform for High Net Worth & Family Offices</p>
							</FadeInSection>
						</Col>
						<Col xs="12">
							<FadeInSection className="text-center">
								<ArrowButton routeChangePath={"/3skye-x"}>Learn More</ArrowButton>
							</FadeInSection>
						</Col>
					</Col>
				</Row>
			</div>
		</TsContainer>
	);
}

export default HomepageTsx;