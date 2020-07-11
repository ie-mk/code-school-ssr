import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg} 50px;
  margin-bottom: ${spacing.xxl};
`;

const TextWrapper = styled.div`
  margin: 0 30px 40px;
  text-align: center;
`;

export default {
  Wrapper,
  TextWrapper,
};
