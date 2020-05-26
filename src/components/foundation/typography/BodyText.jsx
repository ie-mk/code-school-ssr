import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';
import withSpacing from '../../foundation/withSpacing';

const Wrapper = styled.div`
  letter-spacing: 0;
  font-size: ${fontSizeMap.text};
  color: ${colors.text.primary};
  font-weight: 200;
`;

const BodyText = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default withSpacing(BodyText);
