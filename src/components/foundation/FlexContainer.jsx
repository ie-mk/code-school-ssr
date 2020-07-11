import React from 'react';
import ContainerBase from '../foundation/ContainerBase';

const FlexContainer = ({ children, ...props }) => {
  return (
    <ContainerBase display="flex" {...props}>
      {children}
    </ContainerBase>
  );
};

export default FlexContainer;
