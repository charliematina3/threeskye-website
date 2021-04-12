import { MenuRounded } from '@material-ui/icons'
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TsContainer from '../../TsContainer';
import "./MobileNav.scss";
import MobileMenu from './MobileMenu';

function MobileNav(props) {
	const myRef = useRef(null);
	const [menuShowing, setMenuState] = useState(false);

	const { paths, products } = props;

	function ToggleMenu() {
		setMenuState(!menuShowing);
	}

	const executeScroll = () => myRef.current.scrollIntoView();

	useEffect(() => {
		if (menuShowing) {
			document.body.classList.add('modal-open');
			executeScroll();
		} else {
			document.body.classList.remove('modal-open');
		}
	});


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
						<MenuRounded className="colour-blue" onClick={ToggleMenu}/>
					</Col>
				</Row>
			</TsContainer>
			<MobileMenu bannerRef={myRef} closeMenuClick={ToggleMenu} paths={paths} products={products} menuShowing={menuShowing} />
		</>
	);
}

export default MobileNav;