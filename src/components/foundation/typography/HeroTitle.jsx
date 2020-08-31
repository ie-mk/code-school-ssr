import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import media from '../media';
import getMedia from '../../../utils/media';

const StyledH2 = styled.h2`
  font-size: ${fontSizeMap.h4};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  margin: ${({ mobileMargin }) => mobileMargin || ''};
  ${media.aboveTabletLarge`
    font-size: ${fontSizeMap.h2};
    margin: ${({ margin }) => margin || ''};
  `};
  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')};
`;

const HeroTitle = ({ text, fontWeight, margin, mobileMargin }) => {
  return (
    <StyledH2
      margin={margin}
      mobileMargin={mobileMargin}
      fontWeight={fontWeight}
    >
      {text}
    </StyledH2>
  );
};

export default HeroTitle;
