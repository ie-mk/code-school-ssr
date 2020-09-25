import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 80px);
`;

const SolutionContainer = styled.div`
  background-color: gray;
  padding: 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default {
  Wrapper,
  SolutionContainer,
};
