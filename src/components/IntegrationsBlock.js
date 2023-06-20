import React from 'react';
import FlexWrapper from './FlexWrapper';
import Logo, { LogoObject } from './logos/Logos';
import "./IntegrationsBlock.scss";

const IntegrationsBlock = ({ logos }) => {
  // Filter the logos based on their names present in the props
  const filteredLogos = logos ? LogoObject.filter((logo) => logos.includes(logo.code)) : [];

  return (
    <FlexWrapper className="integrations-block" gap={48} alignItems="center">
      {filteredLogos.map((logo, idx) => (
        <Logo key={idx} src={logo.img} alt={logo.name} link={logo.link} height={40} />
      ))}
    </FlexWrapper>
  );
};

export default IntegrationsBlock;
