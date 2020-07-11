import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../../constants/styles';
import media from '../../../foundation/media';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacing.xxxl};
  ${media.aboveTablet`
    justify-content: space-around;
    margin-top: ${spacing.xxxl};
    flex-direction: row;
  `}
`;

export default {
  ButtonWrapper,
};
