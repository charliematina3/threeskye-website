import React, { useState, useEffect } from 'react'
import TsContainer from '../../TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.scss";
import Button from '../../Button';
import ProductDropdown from './ProductDropdown';

function NavBarLink(props) {
	const { label, path, exact } = props;
	return (
		<NavLink className="link-item" to={path} exact={exact} activeClassName="active-option">
			{label}
		</NavLink>
	);

}
 
export {NavBarLink};

function NavBar(props) {
	const [scrolled, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 40);
		});
	}, []);

	const { products } = props;
	
	return (
		<TsContainer bg="blue" className={`ts-nav-bar d-none d-lg-block${scrolled ? " page-scrolled" : ""}`}>
			<Row className="justify-content-between">
				<Col xs="auto">
					<Link to="/">
						<img src="/images/logo.svg" alt="logo" style={{ width: 73 }} />
				</Link>
				</Col>
				<Col xs="auto">
					{/* <LinkList className="ts-nav-bar-links" links={paths} /> */}
					<div className="ts-nav-bar-links">
						<NavBarLink label="Home" path="/" exact />
						<ProductDropdown products={products} className="nav-bar-product-menu link-item" />
						<NavBarLink label="About Us" path="/about-us" />
						<Button className="nav-bar-button" bgColour="alt" routeChangePath="/get-in-touch">Contact</Button>
					</div>
				</Col>
			</Row>
		</TsContainer>
	);
}

export default NavBar;