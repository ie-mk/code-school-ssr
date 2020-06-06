import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../constants/styles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 315px);
  background: ${colors.background.gradient};
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: ${spacing.lg};
  margin-top: ${({ hasDefaultMarginTop }) =>
    hasDefaultMarginTop ? '100px' : ''};
`;

const PageContent = ({ children, hasDefaultMarginTop }) => {
  return (
    <Wrapper>
      <Content hasDefaultMarginTop={hasDefaultMarginTop}>{children}</Content>
    </Wrapper>
  );
};

export default PageContent;
