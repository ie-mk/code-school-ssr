import styled from 'styled-components';
import { paddingMap } from '../../../constants/styles';

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
  padding: ${paddingMap.xxS};
  cursor: pointer;
  background-color: gray;
`;

export default {
  Wrapper,
  PermissionTag,
  FetchPermissionsButton,
  DeleteButton,
};
