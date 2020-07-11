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

export const BillingWrapper = styled.div`
  padding: 0 90px 0 110px;
  ${media.belowTabletLarge`
    padding: 21px 10px;
  `}
`;

const CheckBox = styled.input`
  width: 36px;
  height: 36px;

  ${media.belowTabletLarge`
   width: 18px; 
      height: 18px;
     `}
`;
const DesktopView = styled.div`
  ${media.aboveTabletLarge`
         display:none;
      `}
  ${media.belowTabletLarge`
         visibility:hidden;
      `}
`;

const CheckBoxItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 44px 37px;

  ${media.belowTabletLarge`
   margin:0 0 22px 19px;
   `}
`;

export default {
  Wrapper,
  BillingWrapper,
  CheckBox,
  CheckBoxItemWrapper,
  DesktopView,
};
