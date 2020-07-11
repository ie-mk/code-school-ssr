import styled from 'styled-components';
//import customButoon from '@kiwicom/orbit-components/lib/Button';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../../../../constants/styles';

export const Title = styled.label`
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
  padding-bottom: ${spacing.sm};
  align-items: center;
`;

export const RowContainer = styled.div`
  padding-top: ${spacing.xxl};
  padding-bottom: ${spacing.xxl};
  font-size: ${fontSizeMap.h5};
  i {
    margin-left: ${spacing.xxS};
    margin-right: ${spacing.xxS};
  }
`;
export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: ${spacing.xxxl};
`;

export default {
  InputRow,
  Title,
  RowContainer,
  ButtonWrapper,
};
