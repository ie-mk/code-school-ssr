import styled from 'styled-components';
import { spacing } from '../../../../../constants/styles';

const Wrapper = styled.div`
  position: relative;
  margin-top: ${spacing.xl};
  padding: 0 ${spacing.xl};
`;

const Row = styled.div`
  display: flex;
`;

export default {
  Wrapper,
  Row,
};
