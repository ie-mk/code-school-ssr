import styled from 'styled-components';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../../../../constants/styles';

export const Title = styled.div`
  padding-bottom: ${spacing.md};
  font-size: ${fontSizeMap.h5};
  padding-right: ${spacing.xxxxxl};
  ${({ isStrong }) => (isStrong ? 'font-weight: bold;' : '')};
  text-decoration: ${({ textDecor }) => (textDecor ? 'underline' : '')};
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: ${spacing.xl};
`;

export default {
  InputRow,
  Title,
  ButtonWrapper,
};
