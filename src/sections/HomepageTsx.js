import React from 'react';
import { useHistory } from 'react-router';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import ArrowButton from '../components/ArrowButton';
import FlexWrapper from '../components/FlexWrapper';

const HomepageTsx = (props) => {
	const history = useHistory();

	function changeRoute(path) {
		history.push(path);
	}

	return (
		<FadeInSection>
			<TsContainer homepage>
				<FlexWrapper gap={32} alignItems="center">
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
					<img onClick={() => changeRoute("/3skye-x")} className="hero-image-left cursor-pointer" src="/images/2023-images/products/3sx-grouped.png" alt="crm" width="40%" />
				</FlexWrapper>
			</TsContainer>
		</FadeInSection>
	);
}

export default HomepageTsx;