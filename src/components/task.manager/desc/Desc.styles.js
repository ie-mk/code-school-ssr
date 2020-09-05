import styled from 'styled-components';

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
  padding: 9px;
  background-color: ${({ editMode }) => (editMode ? 'lightgreen' : 'orange')};
  cursor: pointer;
`;

const ElementEditMenu = styled.div`
  background-color: orange;
  padding: 2px 7px;
  margin: 3px 0 3px 5px;
  font-size: 9px;
  color: black;
  float: right;
  clear: right;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export default {
  TaskManagerWrapper,
  EditButton,
  ElementEditMenu,
};
