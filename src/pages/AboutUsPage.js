import React, { Component } from 'react';
import FocusText from '../components/FocusText';
import TextSection from '../sections/TextSection';
import GetInTouchSection from "../sections/GetInTouchSection";
import FadeInSection from '../components/FadeInSection';
import HeroSection from '../sections/HeroSection';
import UnderlinedText from '../components/UnderlinedText';
import { Col, Row } from 'react-bootstrap';
import TsContainer from '../components/TsContainer';
import FlexWrapper from '../components/FlexWrapper';
import RelatedPages from '../sections/RelatedPages';
import SeeMoreBannerSection from '../sections/SeeMoreBannerSection';
import Button from '../components/Button';

class AboutUsPage extends Component {
	componentDidMount() {
		document.title = 'About Us';
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<>
				<FadeInSection>
					<TsContainer>
						<Row style={{ alignItems: "center" }} className="flex-column-reverse flex-lg-row">
							<Col xs="12" lg="12">
								<h1 style={{fontSize: 52}}>About Us</h1>
								<p style={{ fontSize: 20 }}>
									We make simple, beautiful software that reinvents the user experiences of ageing legacy financial systems. 3SKYE is building a better world for
									investment analysts, financial advisers, asset managers, and family offices. With our technology, save time and have confident discussions with
									accurate, real-time information.
								</p>
								<Button routeChangePath="/get-in-touch" className="mt-4">
									Let's Chat
								</Button>
							</Col>
						</Row>
					</TsContainer>
				</FadeInSection>
				<FadeInSection>
					<TsContainer bg="blue" paddingLarge>
						<Row style={{ alignItems: "center" }} className="flex-column-reverse flex-lg-row">
							<Col xs="12" lg="8">
								<h2>Our Why</h2>
								<p style={{ fontSize: 20 }}>
									Challenge the conventional, inspire transformation within financial services.
									<br />
									<br />
									We exist to be a trusted advisor and provider to you, our financial services clients.
									<br />
									<br />
									We are on a mission to save you time, empowering you to focus on what truly matters and unlock the freedom to expand your business.
								</p>
							</Col>
							<Col xs="5" lg="4" style={{ alignItems: "center" }} className="mb-4 mb-lg-0">
								<FlexWrapper alignItems="center" justifyContent="center" fullWidth>
									<img src="images/logo.svg" alt="3skye" style={{ maxWidth: 300 }} />
								</FlexWrapper>
							</Col>
						</Row>
					</TsContainer>
				</FadeInSection>
				<FadeInSection>
					<TsContainer paddingLarge>
						<Row style={{ alignItems: "center", justifyContent: "center" }} className="flex-lg-reverse-row column-reverse flex-lg-row">
							<Col xs="6" lg="6" style={{ alignItems: "center" }} className="mb-4 mb-lg-0">
								<FlexWrapper alignItems="center" justifyContent="center" fullWidth>
									<img src="images/2023-images/people/team.png" alt="team" style={{ maxWidth: 300 }} />
								</FlexWrapper>
							</Col>
							<Col xs="12" lg="6">
								<h2>Who are We?</h2>
								<p style={{ fontSize: 20 }}>
									3SKYE is based out of Wellington, New Zealand. Since 2018, we have been working hard to make life better for our clients.
									<br />
									<br />
									3SKYE brings together problem-solvers, designers, and communicators - diverse in our experiences and skills, unified by empathy for the humans
									who use our products.
									<br />
									<br />
									We’re tight-knit and agile. Our flat structure allows us to adapt and make decisions quickly. We’re driven by user experience, with our clients
									at the heart of those decisions. Always.
									<br />
									<br />
									Each of us at 3SKYE gets a serious kick from helping people get the best out of their working lives. We want people to click less and get
									accurate information faster. Spend less time in front of a computer and more time building their business.
								</p>
							</Col>
						</Row>
					</TsContainer>
					<RelatedPages />
					<SeeMoreBannerSection bg="blue" />
				</FadeInSection>
			</>
		);
	}
}

export default AboutUsPage;