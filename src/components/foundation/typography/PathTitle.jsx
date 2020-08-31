import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';
import withSpacing from '../../foundation/withSpacing';
import media from '../media';

const H5 = styled.span`
  font-size: ${fontSizeMap.textMobile};
  color: ${({ color }) => (color ? color : 'white')};
  margin: 0;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '300')};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '')};

  ${media.aboveTabletLarge`
     font-size: ${fontSizeMap.h4};
  `};
`;

const PathTitle = ({ text, ...props }) => {
  return <H5 {...props}>{text}</H5>;
};

export default withSpacing(PathTitle);
