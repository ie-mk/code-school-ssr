import styled from 'styled-components';
import { colors, spacing } from '../../constants/styles';

const Wrapper = styled.div`
  padding-top: 100px;
  background: ${colors.background.gradient};
  .monaco-editor {
    padding-top: 20px;
  }
`;

export default {
  Wrapper,
};
