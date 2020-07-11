import styled from 'styled-components';
//import customButoon from '@kiwicom/orbit-components/lib/Button';
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
  padding-bottom: ${spacing.sm};
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${spacing.xxxxl};
  flex-direction: row;
`;

export default {
  InputRow,
  RowContainer,
};
