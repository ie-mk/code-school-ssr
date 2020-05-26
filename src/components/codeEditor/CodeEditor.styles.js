import styled from 'styled-components';
import { colors, spacing } from '../../constants/styles';

const Wrapper = styled.div`
  padding-top: 100px;
  background: ${colors.background.gradient};
  display: flex;

  .monaco-editor {
    flex: 1;
    padding-top: 20px;
  }
`;

export default {
  Wrapper,
};
