import React from 'react';
import styled, { css } from 'styled-components';
import {
  background,
  fontSizeMap,
  spacing,
  colors,
  borderRadius,
  boxShadow,
} from '../../constants/styles';
import getMedia from '../../utils/media';

const getfontSize = fontSize => css`
  font-size: ${fontSize ? fontSizeMap[fontSize] : ''};
`;

const borderPrimary = css`
  border: 1px solid ${colors.borders.primary};
`;

const borderSecondary = css`
  border: 1px solid ${colors.borders.secondary};
`;

const getBorder = border => css`
  ${border === 'primary'
    ? borderPrimary
    : border === 'secondary'
    ? borderSecondary
    : `border: ${border};`}
`;

const getBorderRadius = radius => css`
  border-radius: ${borderRadius[radius]};
`;

const getBoxShadow = Shadow => css`
  box-shadow: ${boxShadow[Shadow]};
`;

const getBorderBottom = borderBottom => css`
  border-bottom: 1px solid ${colors.borders[borderBottom]};
`;

const getBorderTop = borderTop => css`
  border-top: 1px solid ${colors.borders[borderTop]};
`;

const getBorderLeft = borderLeft => css`
  border-left: 1px solid ${colors.borders[borderLeft]};
`;

const getBorderRight = borderRight => css`
  border-right: 1px solid ${colors.borders[borderRight]};
`;

const getBorderLeftRight = borderLeftRight => css`
  border-left: 1px solid ${colors.border[borderLeftRight]};
  border-right: 1px solid ${colors.border[borderLeftRight]};
`;

const getBorderTopBottom = getBorderTopBottom => css`
  border-top: 1px solid ${colors.border[getBorderTopBottom]};
  border-bottom: 1px solid ${colors.border[getBorderTopBottom]};
`;

const getBackgroundColor = backgroundColor => css`
  background-color: ${background[backgroundColor]
    ? background[backgroundColor]
    : backgroundColor};
`;

const getPadding = padding => css`
  padding: ${spacing[padding] ? spacing[padding] : padding};
`;

const getMargin = margin => css`
  margin: ${spacing[margin] ? spacing[margin] : margin};
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
  padding-right: ${spacing[paddingRight]
    ? spacing[paddingRight]
    : paddingRight};
`;

const getMarginBottom = margin => css`
  margin-bottom: ${spacing[margin] ? spacing[margin] : margin};
`;

const getMarginTop = marginTop => css`
  margin-top: ${spacing[marginTop] ? spacing[marginTop] : marginTop};
`;

const getMarginLeft = marginLeft => css`
  margin-left: ${spacing[marginLeft] ? spacing[marginLeft] : marginLeft};
`;

const getMarginRight = marginRight => css`
  margin-right: ${spacing[marginRight] ? spacing[marginRight] : marginRight};
`;

const getAlign = alignItems => css`
  align-items: ${alignItems};
`;

const getJustifyContent = justifyContent => css`
  justify-content: ${justifyContent};
`;

const getFlexDirection = flexDirection => css`
  flex-direction: ${flexDirection};
`;

const ContainerRoot = styled.div`
  display: ${({ display }) => (display ? display : 'block')};

  height: ${({ height }) => height || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};

  position: ${({ position }) => position || ''};

  width: ${({ width }) => width || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  min-width: ${({ minWidth }) => minWidth || ''};

  box-sizing: ${({ boxSizing }) => boxSizing || ''};

  top: ${({ top }) => top || ''};
  right: ${({ right }) => right || ''};
  bottom: ${({ bottom }) => bottom || ''};
  left: ${({ left }) => left || ''};

  background: ${({ background }) => background || ''};
  z-index: ${({ zIndex }) => zIndex || ''};
  flex: ${({ flex }) => flex || ''};
  flex-wrap: ${({ flexWrap }) => flexWrap || ''};

  overflow: ${({ overflow }) => overflow || ''};
  overflow-y: ${({ overflowY }) => overflowY || ''};
  overflow-x: ${({ overflowX }) => overflowX || ''};

  ${({ backgroundColor }) =>
    backgroundColor ? getBackgroundColor(backgroundColor) : ''}
  ${({ fontSize }) => (fontSize ? getfontSize(fontSize) : '')}

  ${({ padding }) => (padding ? getPadding(padding) : '')}
  ${({ margin }) =>
    margin ? (getMargin(margin) ? getMargin(margin) : margin) : ''}
  ${({ paddingBottom }) =>
    paddingBottom ? getPaddingBottom(paddingBottom) : ''}
  ${({ paddingTop }) => (paddingTop ? getPaddingTop(paddingTop) : '')}
  ${({ paddingLeft }) => (paddingLeft ? getPaddingLeft(paddingLeft) : '')}
  ${({ paddingRight }) => (paddingRight ? getPaddingRight(paddingRight) : '')}

  ${({ marginBottom }) => (marginBottom ? getMarginBottom(marginBottom) : '')}
  ${({ marginTop }) => (marginTop ? getMarginTop(marginTop) : '')}
  ${({ marginLeft }) => (marginLeft ? getMarginLeft(marginLeft) : '')}
  ${({ marginRight }) => (marginRight ? getMarginRight(marginRight) : '')}

  ${({ borderRadius }) => (borderRadius ? getBorderRadius(borderRadius) : '')}
  ${({ border }) => (border ? getBorder(border) : '')}
  ${({ borderLeft }) => (borderLeft ? getBorderLeft(borderLeft) : '')}
  ${({ borderRight }) => (borderRight ? getBorderRight(borderRight) : '')}
  ${({ borderBottom }) => (borderBottom ? getBorderBottom(borderBottom) : '')}
  ${({ borderTop }) => (borderTop ? getBorderTop(borderTop) : '')}

  ${({ boxShadow }) => (boxShadow ? getBoxShadow(boxShadow) : '')}
  ${({ borderTopBottom }) =>
    borderTopBottom ? getBorderTopBottom(borderTopBottom) : ''}
  ${({ borderLeftRight }) =>
    borderLeftRight ? getBorderLeftRight(borderLeftRight) : ''}

  ${({ alignItems }) => (alignItems ? getAlign(alignItems) : '')}
  ${({ justifyContent }) =>
    justifyContent ? getJustifyContent(justifyContent) : ''}
  ${({ flexDirection }) =>
    flexDirection ? getFlexDirection(flexDirection) : ''}
  ${({ styles }) => (styles ? styles : '')};

  // example
  //  mediaConfig={{
  //    aboveTablet: {
  //      'grid-template-columns': '1fr 1fr',
  //      width: '200px',
  //      margin: 'lg',
  //    },
  //    belowDesktop: {
  //      'grid-gap': spacing.xl,
  //      width: '100px',
  //      margin: 'sm'
  //    },
  //  }}
  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')}
`;

const ContainerBase = React.forwardRef((props, ref) => {
  return (
    <ContainerRoot ref={ref} {...props}>
      {props.children}
    </ContainerRoot>
  );
});

export default ContainerBase;
