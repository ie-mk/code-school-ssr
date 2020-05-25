import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import withSpacing from '../withSpacing';

const StyledH3 = styled.h3`
  font-size: ${fontSizeMap.h3s};
`;

const CardTitle = ({ text }) => {
  return <StyledH3>{text}</StyledH3>;
};

export default withSpacing(CardTitle);
