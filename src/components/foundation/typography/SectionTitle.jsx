import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import withSpacing from '../withSpacing';
import media from '../media';

const StyledH3 = styled.h3`
  font-size: ${fontSizeMap.h3};
  z-index: 1;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  margin: ${({ noMargin }) => (noMargin ? 0 : '')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')};

  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.h4};
    margin: ${({ mobileMargin }) => mobileMargin || ''};
  `}
`;

const SectionTitle = ({
  text,
  textAlign,
  noMargin,
  fontWeight,
  mobileMargin,
}) => {
  return (
    <StyledH3
      noMargin={noMargin}
      textAlign={textAlign}
      fontWeight={fontWeight}
      mobileMargin={mobileMargin}
    >
      {text}
    </StyledH3>
  );
};

export default withSpacing(SectionTitle);
