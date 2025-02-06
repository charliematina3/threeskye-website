import React from 'react';
import FadeInSection from '../components/FadeInSection';
import TsContainer from '../components/TsContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import Logo from '../components/logos/Logos';
import { Companies } from '../components/companies/Companies';
import "./TrustedBy.scss";

const TrustedCard = ({logo, link, text, name}) => {
	return (
		<Card className="trusted-card">
			{/* Logo */}
			<Logo src={logo} link={link && link} maxWidth={140} />
			{/* Text */}
			<div className="trusted-card-text">
				<h5 className="trusted-header">{name}</h5>
				<p>{text}</p>
			</div>
		</Card>
	)
}

const TrustedBy = ({ companies }) => {
	
	const filteredCompanies = companies ? Companies.filter((company) => companies.includes(company.code)) : [];

	return (
		<FadeInSection>
			<TsContainer bg="blue">
				<Row className="mb-4">
					<Col xs="12">
						<FadeInSection delay="1">
							<h3 className="mb-0">Trusted By</h3>
						</FadeInSection>
					</Col>
				</Row>
				<Row style={{rowGap: 24}}>
					{filteredCompanies.map((company, idx) => (
						<Col xs="12"  xl={12 / filteredCompanies.length}>
							<TrustedCard key={idx} logo={company.img} name={company.name} text={company.description} link={company.link} />
						</Col>
					))}
				</Row>
			</TsContainer>
		</FadeInSection>
	);
}

export default TrustedBy;