import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../constants/styles';
import getMedia from '../../../utils/media';

const paddingMap = {
  sm: '10px',
  lg: '20px 70px',
  mobile: '10px 30px',
};

const marginMap = {
  null: '0 0 0 0',
  sm: '0 10px 0 0',
  md: '0 20px 0 0',
  lg: '0 30px 0 0',
  mobile: '0 15px 0 0',
};

const fontSizeMap = {
  sm: '16px',
  lg: '20px',
  mobile: '10px',
};
const borderRadiusMap = {
  sm: '10px',
  mobile: '5px',
};

const backGroundMap = {
  primary:
    'transparent linear-gradient(90deg, #2385D9 0%, #0EC9B0 100%) 0% 0% no-repeat padding-box;',
  button: 'gray',
};

const colorMap = {
  primary: colors.button.secondary,
  warning: colors.button.warning,
  danger: 'red',
  action: 'black',
  secondary: 'white',
  button: 'black',
};

const borderMap = {
  secondary: '2px solid white',
  action: '1px solid #909090',
  button: '1px solid #909090',
};

const ButtonWrapper = styled.button`
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'none')};
  width: ${({ width }) => (width ? width : 'none')};
  height: ${({ height }) => (height ? height : 'none')};
  margin: ${({ margin }) =>
    marginMap[margin] ? marginMap[margin] : margin ? margin : '0 40px 0 0'};
  padding: ${({ size }) => (paddingMap[size] ? paddingMap[size] : '10px')};
  padding: ${({ padding }) =>
    paddingMap[padding] ? paddingMap[padding] : padding};
  background: ${({ type }) =>
    backGroundMap[type] ? backGroundMap[type] : 'transparent'};
  border-radius: 2px;
  border-radius: ${({ borderRadius }) =>
    borderRadiusMap[borderRadius] ? borderRadiusMap[borderRadius] : 'none'};
  border: ${({ type }) => (borderMap[type] ? borderMap[type] : 'none')};
  cursor: pointer;
  outline: none;
  color: ${({ type }) => (colorMap[type] ? colorMap[type] : 'white')};
  font-weight: 500;
  font-size: ${({ size }) => (fontSizeMap[size] ? fontSizeMap[size] : '12px')};
  font-size: ${({ fontSize }) =>
    fontSizeMap[fontSize] ? fontSizeMap[fontSize] : fontSize};
  z-index: 1;
  &:hover {
    box-shadow: 0 0 2px 2px white;
  }

  ${({ mediaConfig, mobileSameSize }) =>
    mediaConfig
      ? getMedia(mediaConfig)
      : !mobileSameSize &&
        getMedia({
          belowTablet: {
            padding: paddingMap.mobile,
            fontSize: fontSizeMap.mobile,
            margin: `0 0 ${spacing.xl}`,
            width: 'auto',
            minWidth: '150px',
          },
        })}
`;

const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
