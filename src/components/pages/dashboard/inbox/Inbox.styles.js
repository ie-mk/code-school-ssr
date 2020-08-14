import styled from 'styled-components';
import { spacing, colors, fontSizeMap } from '../../../../constants/styles';

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  margin-top: ${spacing.xls};
  i {
    color: ${colors.white};
    margin-right: ${spacing.md};
  }
`;
export const Title = styled.div`
  font-size: ${fontSizeMap.h5};
  padding-right: ${spacing.xxxxxl};
  ${({ active }) => (active ? 'font-weight: bold;' : '')};
  text-decoration: ${({ active }) => (active ? 'underline' : '')};
  cursor: pointer;
`;
export default {
  ButtonWrapper,
  Title,
};
