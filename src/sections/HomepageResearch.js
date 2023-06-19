import React from 'react';
import { useHistory } from 'react-router';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import ArrowButton from '../components/ArrowButton';
import FlexWrapper from '../components/FlexWrapper';

const HomepageResearch = (props) => {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	return (
		<FadeInSection>
			<TsContainer homepage>
				<FlexWrapper gap={32} alignItems="center">
					<img onClick={() => changeRoute("/research-platform")} className="hero-image-left cursor-pointer" src="/images/2023-images/products/research-grouped.png" alt="crm" width="40%" />
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
			</TsContainer>
		</FadeInSection>
	);
}

export default HomepageResearch;