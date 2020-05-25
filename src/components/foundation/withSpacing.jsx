import React from 'react';
import styled, { css } from 'styled-components';
import { spacing } from '../../constants/styles';
import getMedia from '../../utils/media';

const getPadding = padding => css`
  padding: ${spacing[padding] ? spacing[padding] : padding};
`;
const getPaddingBottom = paddingBottom => css`
  padding-bottom: ${spacing[paddingBottom]
    ? spacing[paddingBottom]
    : paddingBottom};
`;
const getPaddingTop = paddingTop => css`
  padding-top: ${spacing[paddingTop] ? spacing[paddingTop] : paddingTop};
`;
const getPaddingLeft = paddingLeft => css`
  padding-left: ${spacing[paddingLeft] ? spacing[paddingLeft] : paddingLeft};
`;
const getPaddingRight = paddingRight => css`
  padding-left: ${spacing[paddingRight] ? spacing[paddingRight] : paddingRight};
`;

const getMargin = margin => css`
  margin: ${spacing[margin] ? spacing[margin] : margin};
`;

const getMarginBottom = margin => {
  return css`
    margin-bottom: ${spacing[margin] ? spacing[margin] : margin};
  `;
};
const getMarginTop = marginTop => css`
  margin-top: ${spacing[marginTop] ? spacing[marginTop] : marginTop};
`;
const getMarginLeft = marginLeft => css`
  margin-left: ${spacing[marginLeft] ? spacing[marginLeft] : marginLeft};
`;
const getMarginRight = marginRight => css`
  margin-left: ${spacing[marginRight] ? spacing[marginRight] : marginRight};
`;

const ContainerRoot = styled.div`
  ${({ padding }) => (padding ? getPadding(padding) : '')}
  ${({ paddingBottom }) =>
    paddingBottom ? getPaddingBottom(paddingBottom) : ''}
  ${({ paddingTop }) => (paddingTop ? getPaddingTop(paddingTop) : '')}
  ${({ paddingLeft }) => (paddingLeft ? getPaddingLeft(paddingLeft) : '')}
  ${({ paddingRight }) => (paddingRight ? getPaddingRight(paddingRight) : '')}

  ${({ margin }) => (margin ? getMargin(margin) : '')}
  ${({ marginBottom }) => (marginBottom ? getMarginBottom(marginBottom) : '')}
  ${({ marginTop }) => (marginTop ? getMarginTop(marginTop) : '')}
  ${({ marginLeft }) => (marginLeft ? getMarginLeft(marginLeft) : '')}
  ${({ marginRight }) => (marginRight ? getMarginRight(marginRight) : '')}

  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')}
`;

const withSpacing = Component => ({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  ...props
}) => {
  return (
    <ContainerRoot
      {...{
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
      }}
    >
      <Component {...props} />
    </ContainerRoot>
  );
};

export default withSpacing;
