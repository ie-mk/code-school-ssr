import styled from 'styled-components';
import media from '../../foundation/media';

import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../constants/styles';

export const Wrapper = styled.div``;

export const LearningWrapper = styled.div`
  padding: 0 90px 0 110px;
  ${media.belowTabletLarge`
    padding: 21px 30px;
  `}
`;
export const SkillSetItemWrapper = styled.div`
  padding: ${({ padding }) => (padding ? padding : '18px 48px')};
  margin: 0 15px 33px 0;
  border-radius: 100px;
  font-size: 32px;
  background-color: #2385d92b;
  width: ${({ width }) => (width ? width : '')};
  ${media.belowTabletLarge`
  padding: ${({ mobilePadding }) =>
    mobilePadding ? mobilePadding : '9px 37px'};
  margin: 0 8px 18px 0;
  font-size: 16px;
  width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : '')};
  

`}
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default {
  Wrapper,
  LearningWrapper,
  SkillSetItemWrapper,
  SkillWrapper,
};
