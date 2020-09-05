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

export default {
  TaskManagerWrapper,
  EditButton,
  ElementEditMenu,
  MenuContent,
  MenuItem,
  EditHeader,
  ElementWrapper,
};
