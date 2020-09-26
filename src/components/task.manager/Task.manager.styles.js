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
  justify-content: flex-start;
  position: absolute;
  top: -70px;
  left: -2px;
  width: calc(100% + 4px);
  padding: 10px;
  background-color: #f5f5f5;
  height: 70px;
  border: 2px solid gray;
`;

export default {
  SolutionsWrapper,
  Wrapper,
  Button,
  SolutionsMenu,
};
