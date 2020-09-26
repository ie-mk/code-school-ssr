import styled from 'styled-components';

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
`;

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
`;

export default {
  SolutionsWrapper,
  Wrapper,
};
