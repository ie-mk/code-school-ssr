import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import withSpacing from '../withSpacing';
import media from '../media';

const StyledH3 = styled.h3`
  font-size: ${fontSizeMap.h3};
  z-index: 1;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
  `}
`;

const SectionTitle = ({ text, textAlign }) => {
  return <StyledH3 textAlign={textAlign}>{text}</StyledH3>;
};

export default withSpacing(SectionTitle);
