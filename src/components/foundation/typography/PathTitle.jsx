import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';
import withSpacing from '../../foundation/withSpacing';
import media from '../media';

const H5 = styled.h5`
  font-size: ${fontSizeMap.textMobile};
  color: ${({ color }) => (color ? color : 'white')};
  margin: ${({ margin }) => margin || ''};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '300')};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '')};

  ${media.aboveTabletLarge`
     font-size: ${fontSizeMap.h4};
  `};
`;

const PathTitle = ({ text }) => {
  return <H5 margin="0">{text}</H5>;
};

export default withSpacing(PathTitle);
