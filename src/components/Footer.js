import React, { Component } from 'react'
import TsContainer from './TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailOutlined, LinkedIn } from '@material-ui/icons';
import "./Footer.scss";
import Button from './Button';
import FooterList from './FooterList';

class Footer extends Component {
	render() {
		const { paths, products } = this.props;
		return (
			<TsContainer className="footer-container">
				<Row>
					<Col xs="10" lg={{ span: 4, order: 1 }} className="mb-5">
						<h2 className="color-white mb-2">Let Us Know How We Can Help You</h2>
						<Button variant="outlined" routeChangePath="./get-in-touch">
							Get in touch
						</Button>
					</Col>
					<Col xs="6" lg={{ span: 3, order: 2, offset: 1 }}>
						<FooterList header="3Skye" headerPath="/" links={paths} />
					</Col>
					<Col xs="6" lg={{ span: 3, order: 3 }}>
						<FooterList header="Products" headerPath="/products" links={products} />
					</Col>
					<Col xs="12" lg={{ span: 4, order: 5 }} className="icons-container mt-5">
						<LinkedIn className="footer-icon" />
						<EmailOutlined className="footer-icon" />
					</Col>
					<Col xs="12" lg={{ span: 5, order: 4 }} className="mt-5">
						<div className="disclaimer">© 2020 3SKYE Limited, All rights reserved</div>
					</Col>
				</Row>
			</TsContainer>
		);
	}
}
 
export default Footer;