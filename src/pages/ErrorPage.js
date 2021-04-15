import React from 'react';
import FadeInSection from '../components/FadeInSection';
import { Row, Col } from "react-bootstrap";
import TsContainer from '../components/TsContainer';
import UnderlinedText from '../components/UnderlinedText';
import "./ErrorPage.scss";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<FadeInSection>
			<TsContainer>
				<Row className="justify-content-center flex-md-row-reverse">
					<Col xs="10" md="8" lg="6" className="mb-3">
						<FadeInSection fadeUp slower delay="2">
							<img style={{width: "100%"}} src="/images/404.png" alt="error - page missing" />
						</FadeInSection>
					</Col>
					<Col xs="12" lg="6">
						<FadeInSection fadeUp slower delay="3" className="text-center text-lg-left">
							<h1 className="error-header">Oops. Looks like this page doesn’t <UnderlinedText>exist.</UnderlinedText></h1>
							<p className="error-helper-text">Try going back to the <Link to="/" className="colour-blue"> homepage.</ Link> </p>
						</FadeInSection>
					</Col>
				</Row>
			</TsContainer>
		</FadeInSection>
	);
}
 
export default ErrorPage;