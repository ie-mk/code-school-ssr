import styled from 'styled-components';
import { colors } from 'constants/styles';

export const Wrapper = styled.div`
  height: 100vh;
  background: ${colors.background.gradient};

  .task-manager-top {
    height: 50%;
    display: flex;
  }

  .task-manager-bottom {
    height: 50%;
  }
`;
