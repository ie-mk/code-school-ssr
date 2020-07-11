import styled from 'styled-components';
import { spacing, colors } from '../../../../constants/styles';

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  margin-top: ${spacing.xls};
  i {
    color: ${colors.white};
    margin-right: ${spacing.md};
  }
`;
export default {
  ButtonWrapper,
};
