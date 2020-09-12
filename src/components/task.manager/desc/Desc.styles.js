import styled from 'styled-components';
import { Field } from 'formik';
import Button from '../../foundation/button/Button';

const TaskManagerWrapper = styled.div`
  --background-color: white;

  flex-grow: 1;
  padding: 0 var(--element-gutter);
  color: #186aa5;
  overflow: auto;

  .icon {
    margin-right: var(--element-gutter);
  }

  * {
    &:not(h1) {
      text-align: justify;
    }
  }
`;

const EditButton = styled.button`
  padding: 3px 7px;
  background-color: ${({ editMode }) => (editMode ? 'lightgreen' : 'orange')};
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;
`;

const MenuContent = styled.div`
  display: none;
  background-color: white;
  border: 1px solid orange;
  z-index: 9;
`;

const ElementEditMenu = styled.div`
  position: absolute;
  background-color: orange;
  margin: 3px 0 3px 5px;
  font-size: 9px;
  color: black;
  top: 0;
  right: 0;
  cursor: pointer;
  :hover {
    z-index: 18;
    ${MenuContent} {
      display: block;
    }
  }
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid orange;
  padding: 4px 10px;
  i {
    display: inline-block;
    margin-left: 5px;
  }
  :last-child {
    border-bottom: none;
  }
`;

const EditHeader = styled.div`
  text-align: right !important;
  margin: 2px 10px;
`;

const ElementWrapper = styled.div`
  position: relative;
`;

const Tag = styled.span`
  color: darkred;
`;

const AddElementWrapper = styled.div`
  width: 70%;
  position: absolute;
  background-color: lightgray;
  border: 1px solid orange;
  padding: 5px;
  top: 0;
  left: 0;
  z-index: 9;
`;

const FormField = styled(Field)`
  width: 100%;
  padding: 2px; 5px;
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  padding: 3px 7px;
  background-color: ${({ submit }) => (submit ? 'lightgreen' : 'orange')};
  cursor: pointer;
  margin-left: 10px;
  border-radius: 3px;
`;

const SaveButton = styled(Button)`
  color: black;
  background-color: lightgreen;
  border: 2px solid black;
`;

export default {
  TaskManagerWrapper,
  EditButton,
  ElementEditMenu,
  MenuContent,
  MenuItem,
  EditHeader,
  ElementWrapper,
  Tag,
  AddElementWrapper,
  UpdateElementWrapper: AddElementWrapper,
  FormField,
  FormButton,
  SaveButton,
};
