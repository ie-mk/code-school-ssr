import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';
import withSpacing from '../../foundation/withSpacing';
import media from '../media';

const Wrapper = styled.div`
  letter-spacing: 0;
  font-size: ${fontSizeMap.textMobile};
  color: ${({ color }) => (color ? color : colors.text.primary)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '200')};

  ${media.aboveTablet`
     font-size: ${fontSizeMap.text};
  `};

  ${media.belowTablet`
     font-size: ${fontSizeMap.textMobile};
  `}
`;

const BodyText = ({ children, color, fontWeight }) => {
  return (
    <Wrapper color={color} fontWeight={fontWeight}>
      {children}
    </Wrapper>
  );
};

export default withSpacing(BodyText);
