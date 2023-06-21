import React, { Component } from 'react';
import FadeInSection from '../components/FadeInSection';
import ContactFormSection from '../sections/ContactFormSection';
import { Col, Row } from 'react-bootstrap';
import TsContainer from '../components/TsContainer';
import RelatedPages from '../sections/RelatedPages';

class GetInTouchPage extends Component {
	componentDidMount() {
		document.title = 'Get in Touch';
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				<FadeInSection>
					<TsContainer>
						<Row style={{ alignItems: "center" }} className="flex-column-reverse flex-lg-row">
							<Col xs="12" lg="12">
								<h1 style={{fontSize: 52}}>Let’s Chat</h1>
								<p style={{ fontSize: 20 }}>
								Like what you see? Want to know more or see a demo? Fill in the form below or email us at <a className="colour-blue" href="mailto:info@3skye.com">info@3skye.com</a>.
								</p>
							</Col>
						</Row>
					</TsContainer>
				</FadeInSection>
				{/* Intro */}
				<ContactFormSection />
				<RelatedPages />
			</>
		);
	}
}

export default GetInTouchPage;