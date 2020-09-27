import styled from 'styled-components';

const Button = styled.div`
  color: white;
  background-color: ${({ color }) => (color ? color : '')};
  padding: 7px 12px;
  font-size: 9px;
  cursor: pointer;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

export const SolutionsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  width: ${({ width }) => (width ? `${width}%` : '66%')};
  height: 50px;
  z-index: 9;
  border: 2px solid gray;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
`;

export const SolutionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -70px;
  left: -2px;
  width: calc(100% + 4px);
  padding: 8px 10px 10px;
  background-color: #f5f5f5;
  height: 70px;
  border: 2px solid gray;
  color: #186aa5;
  font-size: 10px;
  font-weight: bold;
`;

const SolutionButton = styled.div`
  text-align: center;
  font-family: inherit;
  border: 2px solid #07529d;
  color: #07529d;
  background-color: white;
  font-size: 9px;
  font-weight: 700;
  margin-top: 6px;
  padding: 7px 10px;
  margin-right: 15px;
  min-width: 108px;
  cursor: pointer;
  box-shadow: ${({ active }) => (active ? 'inset 0 0 4px 5px #E67B38' : '')};
`;

export default {
  SolutionsWrapper,
  Wrapper,
  Button,
  SolutionsMenu,
  SolutionButton,
};
