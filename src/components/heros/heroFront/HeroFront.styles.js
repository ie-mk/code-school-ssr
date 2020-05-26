import styled from 'styled-components';
import { spacing } from '../../../constants/styles';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg};
`;

const Content = styled.div`
  max-width: 1100px;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${spacing.xxxl};
`;

export default {
  Wrapper,
  Content,
  ButtonWrapper,
};
