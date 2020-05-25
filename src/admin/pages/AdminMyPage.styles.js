import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  border-bottom: 2px solid gray;
`;

const Menu = styled.ul`
  height: 100vh;
  border-right: 2px solid gray;
  margin: 0;
  padding-inline-start: 0;
`;

const MenuItem = styled.li`
  display: block;
  padding: 5px;
  font-size: 20px;
  border: 1px solid black;
  border-right: ${({ active }) => (active ? '2px solid white' : '')};
  background-color: ${({ active }) => (active ? 'white' : 'gray')};
  color: ${({ active }) => (active ? 'black' : 'white')};
  color: ${({ active }) => (active ? 'green' : 'white')};
  font-weight: ${({ active }) => (active ? 'bold' : '')};
  position: relative;
  left: 2px;
  cursor: pointer;
  :first-child {
    border-top: none;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

export default {
  Wrapper,
  Menu,
  MenuItem,
  Header,
  Content,
};
