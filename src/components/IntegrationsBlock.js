import React from 'react';
import FlexWrapper from './FlexWrapper';
import Logo, { LogoObject } from './logos/Logos';
import "./IntegrationsBlock.scss";
import Card from './Card';

const IntegrationsBlock = ({ logos }) => {
  // Filter the logos based on their names present in the props
  const filteredLogos = logos ? LogoObject.filter((logo) => logos.includes(logo.code)) : [];

	return (
		<Card className="p-3">
			<FlexWrapper className="integrations-block" alignItems="center">
				{filteredLogos.map((logo, idx) => (
					<Logo key={idx} src={logo.img} alt={logo.name} link={logo.link} height={40} maxWidth={logo.maxWidth} />
				))}
			</FlexWrapper>
		</Card>
	);
  
};

export default IntegrationsBlock;
