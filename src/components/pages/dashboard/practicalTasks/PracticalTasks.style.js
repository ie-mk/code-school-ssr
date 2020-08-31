import styled from 'styled-components';
import { spacing, colors } from '../../../../constants/styles';

const DropdownWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const TableWrapper = styled.div`
  margin-left: ${spacing.xls};
  margin-right: ${spacing.xls};
  margin-top: ${spacing.xl};
`;
const DropdownItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  margin-top: ${spacing.xls};
  i {
    color: ${colors.white};
    margin-right: ${spacing.xxl};
  }
`;
export default {
  DropdownWrapper,
  DropdownItemWrapper,
  TableWrapper,
  ButtonWrapper,
};
