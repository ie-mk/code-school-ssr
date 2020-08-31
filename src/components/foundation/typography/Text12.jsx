import React from 'react';
import styled from 'styled-components';
import { fontSizeMap, colors } from '../../../constants/styles';
import media from '../media';
import getMedia from '../../../utils/media';
import withSpacing from '../withSpacing';

const Text = styled.span`
  font-size: ${fontSizeMap.textMobile};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  color: ${({ color }) => (color ? color : colors.white)};
  margin: ${({ margin }) => margin || ''};
  ${media.aboveTablet`
    font-size: ${fontSizeMap.text};
  `};

  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')};
`;

const Text24 = ({ text, color, fontWeight }) => {
  return (
    <Text color={color} fontWeight={fontWeight} margin="0">
      {text}
    </Text>
  );
};

export default withSpacing(Text24);
