import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../constants/styles';
import media from '../../foundation/media';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.aboveTablet`
    justify-content: space-around;
    margin-top: ${spacing.xxxl};
    flex-direction: row;
  `}
`;

const HeaderWrapper = styled.div`
  margin: 150px 50px 60px;
  text-align: center;

  ${media.aboveTablet`
    margin: auto;
  `}
`;

const TextWrapper = styled.div`
  margin: 0 30px 40px;
  text-align: center;

  ${media.aboveTablet`
    margin: auto;
  `}
`;

export default {
  Wrapper,
  Content,
  ButtonWrapper,
  HeaderWrapper,
  TextWrapper,
};
