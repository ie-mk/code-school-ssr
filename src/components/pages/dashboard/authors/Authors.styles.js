import styled from 'styled-components';
//import customButoon from '@kiwicom/orbit-components/lib/Button';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../../../constants/styles';

export const Title = styled.div`
  padding-bottom: ${spacing.md};
  font-size: ${fontSizeMap.h5};
  padding-right: ${spacing.xxxxxl};
  ${({ isStrong }) => (isStrong ? 'font-weight: bold;' : '')};
  text-decoration: ${({ textDecor }) => (textDecor ? 'underline' : '')};
  cursor: pointer;
`;

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
  padding-top: ${spacing.xxl};
  flex-direction: row;
`;

export const Wrapper = styled.div`
  margin-top: ${spacing.xl};
`;

export default {
  InputRow,
  Title,
  RowContainer,
  Wrapper,
};
