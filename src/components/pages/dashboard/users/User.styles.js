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
  margin-top: ${spacing.xxxxl};
`;
const DropdownItemWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: ${spacing.xls};
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

const Wrapper = styled.div`
  position: relative;
  table {
    border-collapse: collapse;
  }
  td,
  th {
    border: 1px solid gray;
    padding: 9px;
  }
`;

const PermissionTag = styled.span`
  display: inline-block;
  padding: 5px;
  background-color: darkseagreen;
  color: white;
  margin-right: 10px;
  cursor: pointer;
  i {
    color: darkred;
    display: inline-block;
    margin-left: 10px;
    background-color: darkseagreen;
  }
`;

const FetchPermissionsButton = styled.button`
  padding: 5px;
  background-color: chocolate;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: ${spacing.xxS};
  cursor: pointer;
  background-color: gray;
`;

export default {
  DropdownWrapper,
  DropdownItemWrapper,
  TableWrapper,
  ButtonWrapper,
  Wrapper,
  PermissionTag,
  FetchPermissionsButton,
  DeleteButton,
};
