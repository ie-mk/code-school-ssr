import React from 'react';
import styled from 'styled-components';
import { fontSizeMap, colors } from '../../../constants/styles';
import media from '../media';
import getMedia from '../../../utils/media';
import withSpacing from '../withSpacing';

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ color }) => (color ? color : colors.white)};
  margin: ${({ margin }) => margin || ''};
  ${media.aboveTablet`
    font-size: ${fontSizeMap.h2};
  `};
  text-align: center;

  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')};
`;

const Text48 = ({ text, color, mediaConfig }) => {
  return (
    <Text color={color} margin="0" mediaConfig={mediaConfig}>
      {text}
    </Text>
  );
};

export default withSpacing(Text48);
