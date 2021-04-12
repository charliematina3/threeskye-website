import { Close, EmailOutlined, LinkedIn } from '@material-ui/icons';
import React, { Component } from 'react';
import MobileMenuProduct from './MobileMenuProduct';
import TsContainer from '../../TsContainer';
import LinkList from '../../LinkList';
import SectionHeader from '../../SectionHeader';
import "./MobileMenu.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MobileMenu extends Component {
	
	render() {
		const { menuShowing, paths, products, closeMenuClick, bannerRef } = this.props;
		return (
			<div className={`mobile-menu-container d-lg-none${menuShowing ? " menu-active" : ""}`}>
				<TsContainer className="mobile-menu-header" bg="blue" containerRef={bannerRef}>
					<Row className="mobile-menu-menu-header">
						<Col className="d-flex justify-content-between">
							<SectionHeader noMargin>Menu</SectionHeader>
							<Close onClick={closeMenuClick} />
						</Col>
					</Row>
				</TsContainer>
				<TsContainer className="mobile-menu-list">
					<LinkList links={paths} onClick={closeMenuClick} />
				</TsContainer>
				<TsContainer className="py-0" onClick={closeMenuClick}>
					<h5>Products</h5>
					{products && products.map((prod, idx) => <MobileMenuProduct product={prod} key={idx} />)}
				</TsContainer>
				<TsContainer>
					<Row>
						<Col xs="12">
							<div className="mm-icons-container">
								<a href="https://www.linkedin.com/company/3skye/" target="_blank" rel="noreferrer" className="mm-icon"><LinkedIn /></a>
								<a href="mailto:info@3skye.com" target="_blank" rel="noreferrer" className="mm-icon"><EmailOutlined /></a>
							</div>
						</Col>
					</Row>
				</TsContainer>
				<TsContainer bg="blue" className="close-menu-container" onClick={closeMenuClick}>
					<Row>
						<Col xs="12" className="text-center">
							<h6>Close Menu</h6>
						</Col>
					</Row>
				</TsContainer>
			</div>
		);
	}
}

export default MobileMenu;