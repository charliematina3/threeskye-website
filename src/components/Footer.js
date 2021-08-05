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
			<TsContainer id="footer" className="footer-container">
				<Row>
					<Col xs="12" lg={{ span: 4, order: 1 }} className="mb-5 text-center text-sm-left">
						<h2 className="colour-white mb-2">Let Us Know<br className="d-sm-none"/> How We Can Help You</h2>
						<Button variant="outlined" routeChangePath="./get-in-touch">
							Let's Chat
						</Button>
					</Col>
					<Col xs="6" lg={{ span: 3, order: 2, offset: 1 }}>
						<FooterList header="3SKYE" links={paths} />
					</Col>
					<Col xs="6" lg={{ span: 3, order: 3 }}>
						<FooterList header="Products" links={products} />
					</Col>
					<Col xs="12" lg={{ span: 4, order: 5 }} className="icons-container mt-5">
						<a href="https://www.linkedin.com/company/3skye/" target="_blank" rel="noreferrer" className="footer-icon"><LinkedIn /></a>
						<a href="mailto:info@3skye.com" target="_blank" rel="noreferrer" className="footer-icon"><EmailOutlined /></a>
					</Col>
					<Col xs="12" lg={{ span: 5, order: 4 }} className="mt-5">
						<div className="disclaimer">© {new Date().getFullYear()} 3SKYE Limited, All rights reserved</div>
					</Col>
				</Row>
			</TsContainer>
		);
	}
}
 
export default Footer;