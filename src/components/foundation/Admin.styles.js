import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../constants/styles';
import media from '../foundation/media';
import { lightenDarkenColor } from '../../utils/colors';

export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  font-size: ${({ fontSize }) =>
    fontSizeMap[fontSize] ? fontSizeMap[fontSize] : fontSizeMap.textS};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.textMobile};
  `}
  color: ${({ color }) => (color ? color : colors.black)};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '')};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '')};
`;

export const InputStyles = styled.div`
  width: 100%;
  display: ${({ displayLabelLeft }) => (displayLabelLeft ? 'flex' : '')};
  justify-content: ${({ displayLabelLeft }) =>
    displayLabelLeft ? 'space-between' : ''};
  color: ${colors.black};
  input {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#f0f0f7'};
    background-color: ${({ disabled }) =>
      disabled ? lightenDarkenColor('#f0f0f7', -20) : ''};
    line-height: ${({ height }) => (height ? height : '35px')};
    font-size: ${fontSizeMap.text};
    color: ${({ inputColor }) => (inputColor ? inputColor : '')};
    width: 100%;
    padding-left: ${spacing.sm};
    border: ${({ border }) =>
      border
        ? typeof border === 'boolean'
          ? '1px solid #909090'
          : border
        : ''};
    border-radius: ${borderRadius.sm};
    opacity: 1;
    ${media.belowTabletLarge`
    line-height: 35px;
  `}
  }

  input[type='checkbox'] {
    height: 35px;
    width: 35px;
    padding: 0;
  }

  .select {
    height: ${({ height }) => (height ? height : '40px')};
    font-size: ${fontSizeMap.text};
    width: ${({ dropdownWidth }) => (dropdownWidth ? dropdownWidth : '100%')};
    padding-left: ${spacing.sm};
    border: ${({ border }) => (border ? border : '1px solid #909090')};
    border-radius: ${borderRadius.sm};
    text-align-last: center;
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : dashboard.dashboardBackground};
    opacity: 1;
  }
  .textarea {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#f0f0f7'};
    background-color: ${({ disabled }) =>
      disabled ? lightenDarkenColor('#f0f0f7', -20) : ''};
    height: ${({ height }) => (height ? height : 'auto')};
    font-size: ${fontSizeMap.text};
    width: 100%;
    padding-left: ${spacing.sm};
    border: ${({ border }) => (border ? border : '1px solid #909090')};
    border-radius: ${borderRadius.sm};
    opacity: 1;
    color: ${({ inputColor }) => (inputColor ? inputColor : '')};
  }
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 'auto')};
  display: ${({ displayLabelLeft }) => (displayLabelLeft ? 'flex' : '')};
  justify-content: ${({ displayLabelLeft }) =>
    displayLabelLeft ? 'center' : ''};
  color: ${colors.black};
  margin-top: ${({ noMargin, marginTop }) =>
    noMargin ? '0' : marginTop ? marginTop : 0};
  margin-bottom: ${({ noMargin, marginBottom }) =>
    noMargin ? '0' : marginBottom ? marginBottom : 0};
  margin: ${({ margin }) => (margin ? margin : '')};
  padding: ${({ padding }) => (padding ? padding : '0')};

  ${media.belowTabletLarge`
  width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : '')};
  padding: ${({ paddingMobile }) => (paddingMobile ? paddingMobile : '0')};
`}
`;

const UploadImageButton = styled.label`
  width: 100%;
  // padding-right: ${spacing.sm};
  height: 35px;
  border: 1px solid #909090;
  font-size: ${fontSizeMap.text};
  color:${colors.black};
  border-radius: ${borderRadius.sm};
  background-color: #f0f0f7;
  opacity: 1;
  display:flex;
  justify-content: center;
  align-items:center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};


  input[type="file"] {
      display: none;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${spacing.xs} 0;
  font-size: ${fontSizeMap.h3};
  font-weight: 300;
  color: ${({ color }) => (color ? color : 'black')};
  img {
    padding-right: ${spacing.lg};
    ${media.belowTabletLarge`
      width: 35px;
   `}
  }
  ${media.belowTabletLarge`
     padding: ${spacing.xS} 0;
   `};
`;

export default {
  InputStyles,
  Label,
  Wrapper,
  UploadImageButton,
  ItemContainer,
};
