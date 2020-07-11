import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../../constants/styles';
import media from '../../../foundation/media';

const Text = styled.label`
  font-size: ${spacing.xls};
  ${media.belowMobileLarge`
    font-size:${spacing.md};
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${spacing.xxxl};
  ${media.belowMobileLarge`
    justify-content: center;
    margin-top: ${spacing.xl};
  `}
`;

export default {
  Text,
  ButtonWrapper,
};
