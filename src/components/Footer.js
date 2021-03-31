import React, { Component } from 'react'
import TsContainer from './TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailOutlined, LinkedIn } from '@material-ui/icons';
import "./Footer.scss";
import Button from './Button';
import FooterList from './FooterList';
import ScrollFadeSection from './ScrollFadeSection';

class Footer extends Component {
	render() {
		const { paths, products } = this.props;
		return (
			<ScrollFadeSection>
				<TsContainer className="footer-container">
					<Row>
						<Col xs="10" className="mb-5">
							<h2 className="color-white">Let Us Know How We Can Help You</h2>
						</Col>
						<Col xs="12" className="mb-5">
							<Button variant="outlined" color="white" bgColour="alt" routeChangePath="./get-in-touch">
								Get in touch
							</Button>
						</Col>
						<Col xs="6">
							<FooterList header="3Skye" headerPath="/" links={paths} />
						</Col>
						<Col xs="6">
							<FooterList header="Products" headerPath="/products" links={products} />
						</Col>
						<Col xs="12" className="icons-container mt-5">
							<LinkedIn className="footer-icon" />
							<EmailOutlined className="footer-icon" />
						</Col>
						<Col xs="12" className="mt-5">
							<div className="disclaimer">© 2020 3SKYE Limited, All rights reserved</div>
						</Col>
					</Row>
				</TsContainer>
			</ScrollFadeSection>
		);
	}
}
 
export default Footer;