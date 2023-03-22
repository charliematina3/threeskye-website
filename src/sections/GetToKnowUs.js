import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TextSection from './TextSection';
class GetToKnowUs extends Component {
	render() {
		const { bg } = this.props;
		return (
			<TextSection bg={bg} className="text-center" style={{ paddingTop: 80, paddingBottom: 80 }}>
				<Link to="about-us"></Link>
				<Button variant="outlined" routeChangePath="./about-us">
					<h3 className='m-0'>The 3SKYE Why</h3>
				</Button>
			</TextSection>
		);
	}
}

export default GetToKnowUs;