import styled from 'styled-components';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../../../../constants/styles';

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name-input {
    width: 450px;
    line-height: 40px;
    border-radius: ${borderRadius.sm};
    padding-left: ${spacing.sm};
    font-size: ${fontSizeMap.text};
  }
`;

export const InputRowWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${spacing.sm};
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.xl};
`;

export default {
  InputRow,
  ButtonWrapper,
  InputRowWrapper,
};
