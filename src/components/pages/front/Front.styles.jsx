import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ChatHeader = styled.div`
  width: 200px;
  background-color: blue;
  color: white;
  padding: 20px;
`;

export const ChatContent = styled.div`
  background-color: white;
  height: ${({ chatOpen }) => (chatOpen ? '200px' : 0)};
  //padding: 20px;
  overflow: hidden;
  color: black;
  //display: ${({ chatOpen }) => (chatOpen ? 'block' : 'none')};
  transition: all 0.5s ease-in;
`;

export const Chat = styled.div`
  position: fixed;
  z-index: 9;
  bottom: 0;
  right: 50px;
`;

export default {
  Wrapper,
  ChatContent,
  ChatHeader,
  Chat,
};
