import styled from 'styled-components';
import media from '../../foundation/media';
import { spacing } from '../../../constants/styles';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${spacing.xxl};
  ${media.aboveTablet`
    justify-content: space-around;
    margin-top: ${spacing.xxxl};
    flex-direction: row;
  `}
`;

const Wrapper = styled.div`
  position: relative;
`;

export default {
  Wrapper,
  ButtonWrapper,
};
