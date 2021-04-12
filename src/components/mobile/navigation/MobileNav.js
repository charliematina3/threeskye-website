import { MenuRounded } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TsContainer from '../../TsContainer';
import "./MobileNav.scss";
import MobileMenu from './MobileMenu';

class MobileNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuShowing: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);	
	}

	toggleMenu() {
		this.setState({ menuShowing: !this.state.menuShowing });
	}
	
	render() {
		const { paths, products } = this.props;
		const { menuShowing } = this.state;

		return (
			<>
				<TsContainer bg="blue" className="mobile-nav-container py-0 d-lg-none">
					<Row className="mobile-nav-inner justify-content-between align-items-end">
						<Col xs="auto">
							{/* Logo */}
							<Link to="/">
								<img src="/images/logo.svg" alt="logo" style={{ width: 73 }} />
							</Link>
						</Col>
						<Col xs="auto">
							<MenuRounded className="colour-blue" onClick={this.toggleMenu}/>
						</Col>
					</Row>
				</TsContainer>
				<MobileMenu closeMenuClick={this.toggleMenu} paths={paths} products={products} menuShowing={menuShowing} />
			</>
		);
	}
}

export default MobileNav;