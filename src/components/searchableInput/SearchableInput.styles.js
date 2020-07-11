import styled from 'styled-components';
import {
  colors,
  fontSizeMap,
  spacing,
  borderRadius,
} from '../../constants/styles';
import { lightenDarkenColor } from '../../utils/colors';
import media from '../foundation/media';

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width || ''};
  .search-input {
    width: ${({ width }) => width || ''};
    line-height: 40px;
    border-radius: ${borderRadius.sm};
    padding-left: ${spacing.sm};
    font-size: ${fontSizeMap.text};
  }
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 71px;
  width: 450px;
  left: 0;
  z-index: 9;
  background-color: ${colors.white};
  border: 1px solid gray;
  max-height: 400px;
  overflow: scroll;
`;

const Option = styled.div`
  border-bottom: 1px solid ${colors.gray};
  background-color: ${({ active }) => (active ? 'lightgray' : '')};
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const Label = styled.div`
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

const Input = styled.input`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#f0f0f7'};
  background-color: ${({ disabled }) =>
    disabled ? lightenDarkenColor('#f0f0f7', -20) : ''};
  line-height: ${({ height }) => (height ? height : '40px')};
  font-size: ${fontSizeMap.text};
  color: ${({ inputColor }) => (inputColor ? inputColor : '')};
  width: 100%;
  padding-left: ${spacing.sm};
  //border: 1px solid #909090;
  border-radius: ${borderRadius.sm};
  opacity: 1;
  ${media.belowTabletLarge`
    line-height: 40px;
    `}
`;

export default {
  Wrapper,
  Input,
  OptionsContainer,
  Option,
  Label,
};
