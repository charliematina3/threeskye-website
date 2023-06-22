import React, { Component } from 'react'
import TsContainer from './TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailOutlined, LinkedIn } from '@material-ui/icons';
import "./Footer.scss";
import FooterList from './FooterList';
import ArrowButton from './ArrowButton';

class Footer extends Component {
	render() {
		const { paths, products, other } = this.props;
		return (
			<TsContainer id="footer" className="footer-container">
				<Row>
					<Col xs="12" lg={{ span: 6, order: 1 }} className="mb-5 text-center text-sm-left">
						<h3 className="colour-white mb-2 font-weight-bold">How Can We Help?</h3>
						<ArrowButton variant="outlined" routeChangePath="./get-in-touch">
							Let’s Chat
						</ArrowButton>
					</Col>
					<Col xs="6" md="4" lg={{ span: 2, order: 2 }}>
						<FooterList header="3SKYE" links={paths} />
					</Col>
					<Col xs="6" md="4" lg={{ span: 2, order: 3 }}>
						<FooterList header="Products" links={products} />
					</Col>
					<Col xs="6" md="4" lg={{ span: 2, order: 4 }} className='mt-5 mt-md-0'>
						<FooterList header="Other" links={other} />
					</Col>
					<Col xs="12" lg={{ span: 4, order: 5 }} className="icons-container mt-5">
						<a href="https://www.linkedin.com/company/3skye/" target="_blank" rel="noreferrer" className="footer-icon"><LinkedIn /></a>
						<a href="mailto:info@3skye.com" target="_blank" rel="noreferrer" className="footer-icon"><EmailOutlined /></a>
					</Col>
					<Col xs="12" lg={{ span: 6, order: 4 }} className="mt-5">
						<div className="disclaimer">© {new Date().getFullYear()} 3SKYE Limited, All rights reserved</div>
					</Col>
				</Row>
			</TsContainer>
		);
	}
}
 
export default Footer;