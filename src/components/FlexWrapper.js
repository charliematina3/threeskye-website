import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FlexWrapper = ({
  alignItems,
  justifyContent,
  flexDirection,
  width,
  gap,
  className,
  children,
  flexWrap
}) => {
  const flexWrapperClasses = classNames('flex-wrapper', className);

  const wrapperStyle = {
		alignItems: alignItems,
		justifyContent: justifyContent,
		flexDirection: flexDirection,
		width: width,
		gap: gap,
		flexWrap: flexWrap,
		display: "flex",
  };

  return (
    <div className={flexWrapperClasses} style={wrapperStyle}>
      {children}
    </div>
  );
};

FlexWrapper.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  width: PropTypes.string,
  gap: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default FlexWrapper;
