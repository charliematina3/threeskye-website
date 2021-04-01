import React, { useState, useEffect } from 'react'
import TsContainer from '../../TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import LinkList from '../../LinkList';
import "./NavBar.scss";

function NavBar(props) {
	const [scrolled, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 40);
		});
	}, []);
	
	const { paths } = props;

	return (
		<TsContainer bg="blue" className={`ts-nav-bar d-none d-lg-block${scrolled ? " page-scrolled" : ""}`}>
			<Row className="justify-content-between">
				<Col xs="auto">
					<Link to="/">
						<img src="/images/logo.svg" alt="logo" style={{ width: 73 }} />
				</Link>
				</Col>
				<Col xs="auto">
					<LinkList className="ts-nav-bar-links" links={paths} />
				</Col>
			</Row>
		</TsContainer>
	);
}
 
export default NavBar;