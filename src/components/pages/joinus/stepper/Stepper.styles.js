import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../../constants/styles';
import media from '../../../foundation/media';

const Step = styled.div`
  position: relative;
  width: 25%;
  border-bottom: 2px solid ${({ active }) => (active ? '#707070' : 'white')};
  height: 25px;
  &:first-child {
    width: 25px;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ active }) =>
    active ? colors.background.decorprimary : 'white'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  color: black;
  cursor: pointer;
  font-size: ${fontSizeMap.h3s};
  border: 2px solid white;
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.textS};
    width: 25px;
    height: 25px;
    top: 10px;
  `}
`;

const Label = styled.div`
  width: 180px;
  position: absolute;
  right: -63px;
  top: 60px;
  color: ${({ active }) => (active ? '#0EC9B0' : 'white')};
  font-weight: 300;
  font-size: ${fontSizeMap.h4};
  text-align: center;

  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.textMobile};
    right: -18px;
    width: 60px;
  `}
`;

export default {
  Step,
  Circle,
  Label,
};
