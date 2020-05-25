import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: relative;
  padding: 10px 40px 10px 10px;
  border-bottom: 2px solid gray;
  margin-bottom: 10px;
  max-width: 800px;
  overflow: hidden;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: orange;
  cursor: pointer;
`;

export default {
  ContentWrapper,
  DeleteButton,
};
